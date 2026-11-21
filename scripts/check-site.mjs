// 构建以后查整站：每页最多一处 <mark>；站内链接和锚点都在；示意的回复都标了「示意 / Illustration」；没留下占位字；没有漏渲染的 **。
// 还查分享大图：src/data/og.js 里的每张卡（每个 Wiki 条目中英文各一张）都在 public/ 里，而且是照现在的文字和 tools/og.html 截的（指纹对得上 tools/og-manifest.json）。
//
//   npm run build && node scripts/check-site.mjs
import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, dirname, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { EXTRA } from "../src/i18n/index.js";
import { ROOT, MANIFEST, ogCards } from "./og-cards.mjs";

const DIST = join(dirname(fileURLToPath(import.meta.url)), "../dist");
if (!existsSync(DIST)) {
  console.log("没有 dist/，先 npm run build");
  process.exit(1);
}
const walk = (dir) => readdirSync(dir).flatMap((f) => {
  const p = join(dir, f);
  return statSync(p).isDirectory() ? walk(p) : f === "index.html" ? [p] : [];
});

const pages = walk(DIST);
// 示意回复的标题开头：中文「示意」、英文 Illustration，其他语言取各自 i18n 文件里 comp.reply 冒号前那个词
const DEMO = ["示意", "Illustration", ...Object.values(EXTRA).map((d) => d.comp?.reply?.split(/[:：]/)[0].trim()).filter(Boolean)];
const cache = new Map();
const read = (f) => cache.get(f) ?? cache.set(f, readFileSync(f, "utf8")).get(f);
const problems = [];
const fail = (file, msg) => problems.push(`${"/" + relative(DIST, dirname(file)).replace(/^$/, "")}：${msg}`);

for (const file of pages) {
  const html = read(file);
  const body = html.replace(/<nav[\s\S]*?<\/nav>/g, "").replace(/<script[\s\S]*?<\/script>/g, "");
  const marks = (body.match(/<mark[\s>]/g) ?? []).length;
  if (marks > 1) fail(file, `${marks} 处 <mark>，最多一处`);
  for (const m of html.matchAll(/<figcaption class="xxd-code__head">([^<]*)</g)) {
    if (/reply/i.test(html.slice(Math.max(0, m.index - 400), m.index)) && !DEMO.some((w) => m[1].startsWith(w))) fail(file, `示意回复的标题没写「示意」或那种语言的同义词：${m[1]}`);
  }
  for (const m of html.matchAll(/href="(\/[^"#?]*)(?:\?[^"#]*)?(#[^"]*)?"/g)) {
    const path = decodeURI(m[1]);
    if (/\.(css|js|svg|png|ico|xml|txt|json|webmanifest)$/.test(path) || path.startsWith("/xxd/")) continue;
    const target = join(DIST, path, path.endsWith("/") ? "" : "/", "index.html");
    if (!existsSync(target)) {
      fail(file, `链接不存在：${path}`);
      continue;
    }
    const hash = m[2] && decodeURIComponent(m[2].slice(1));
    if (hash && hash !== "main" && !read(target).includes(`id="${hash}"`)) fail(file, `锚点不存在：${path}#${hash}`);
  }
  if (/待写|待定稿|TBD:|还在写|still being written/.test(body)) fail(file, "留着占位字");
  const visible = body.replace(/<(pre|code|script|style)[\s\S]*?<\/\1>/g, "").replace(/<[^>]+>/g, "");
  if (visible.includes("**")) fail(file, "有没渲染出来的 **（加粗的结尾紧挨着中文标点或文字时会这样，在 ** 后加空格或改用 <strong>）");
}

const manifest = existsSync(join(ROOT, MANIFEST)) ? JSON.parse(readFileSync(join(ROOT, MANIFEST), "utf8")) : {};
for (const c of ogCards()) {
  if (!existsSync(join(ROOT, "public", c.path))) problems.push(`分享大图缺了：public${c.path}，跑 npm run og`);
  else if (manifest[c.path] !== c.hash) problems.push(`分享大图过期了（文字或 tools/og.html 改过）：public${c.path}，跑 npm run og`);
}

const uniq = [...new Set(problems)];
console.log(uniq.length ? `✗ ${uniq.length} 个问题\n  ${uniq.join("\n  ")}` : `✓ ${pages.length} 页：<mark>、站内链接和锚点、示意标题、占位字都没问题；分享大图都是最新的`);
process.exitCode = uniq.length ? 1 : 0;
