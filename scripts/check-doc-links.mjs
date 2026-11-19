// 查站里所有指向 Saily 官方的链接（帮助中心 support.saily.com、官网 saily.com）：页面打得开，#锚点在线上页面里真的有。
// 锚点要对着线上网页查，不能从本地副本的标题猜：帮助中心的锚点有的是编辑手写的（比如 #travel），不是标题生成的。
// saily.com 对脚本一律弹 Cloudflare 的人机验证（403，响应头 cf-mitigated: challenge），脚本看不到页面：
// 这些链接单独列出来，要用浏览器打开看一眼，不算失败。别的打不开、锚点不在，才算失败（退出码 1）。
//
//   node scripts/check-doc-links.mjs        要联网；每个网址只抓一次
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(mdx|js|astro)$/.test(f) ? [p] : [];
});
const readmes = readdirSync(ROOT).filter((f) => /^README(\.[\w-]+)?\.md$/.test(f)).map((f) => join(ROOT, f));
const files = [...walk(join(ROOT, "src")), ...readmes];

const links = new Map();
for (const file of files) {
  const text = readFileSync(file, "utf8");
  for (const m of text.matchAll(/https:\/\/(?:support\.saily\.com|(?:www\.)?saily\.com)[^\s)"'`<>\]]*/g)) {
    const url = m[0].replace(/[.,;:，。、）]+$/, "");
    if (!links.has(url)) links.set(url, new Set());
    links.get(url).add(relative(ROOT, file));
  }
}

const pages = new Map();
const fetchPage = (url) => {
  if (!pages.has(url)) pages.set(url, fetch(url, { headers: { "user-agent": "xxd-saily-link-check" }, redirect: "follow" })
    .then(async (r) => ({ ok: r.ok, status: r.status, challenge: r.headers.get("cf-mitigated") === "challenge", html: r.ok ? await r.text() : "" }))
    .catch((e) => ({ ok: false, status: e.message, challenge: false, html: "" })));
  return pages.get(url);
};

const bad = [];
const blocked = [];
for (const [url, where] of links) {
  const [page, hash] = url.split("#");
  const res = await fetchPage(page);
  const from = [...where].slice(0, 2).join(", ");
  if (res.challenge) blocked.push(`${url} ← ${from}`);
  else if (!res.ok) bad.push(`${url}：打不开（${res.status}） ← ${from}`);
  else if (hash && !res.html.includes(`id="${decodeURIComponent(hash)}"`)) bad.push(`${url}：线上页面没有 #${hash} ← ${from}`);
}
const checked = links.size - blocked.length;
console.log(bad.length ? `✗ ${bad.length} 个问题\n  ${bad.join("\n  ")}` : `✓ ${checked} 个官方链接都打得开，锚点都在`);
if (blocked.length) console.log(`⚠ ${blocked.length} 个被 Cloudflare 的人机验证挡住，脚本查不了，用浏览器打开看一眼：\n  ${blocked.join("\n  ")}`);
process.exitCode = bad.length ? 1 : 0;
