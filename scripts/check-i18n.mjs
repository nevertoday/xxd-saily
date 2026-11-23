// 检查非全站语言的翻译是不是齐全、能不能构建（v1 只有中英文两种全站语言，所以现在没有要查的，只查 LANGS 和 src/i18n/ 对得上）：
//   node scripts/check-i18n.mjs ja        只查日语
//   node scripts/check-i18n.mjs           全部查
// 先查：nav.js 的 LANGS 里每种非全站语言在 src/i18n/index.js 的 EXTRA 里都有，EXTRA 里的每种也都在 LANGS 里。
// 查的是：src/i18n/<语言>.js 的键和 base.js 一样多、{占位} 和 [字](键) 链接没丢、数组长度一样；
// src/pages/<语言>/ 下的首页和三课都在、MDX 能编译、复制块的 id 和英文版一样、每页最多一处 <mark>、
// 站内链接指向存在的页面（新手入门指向本语言，其他页面指向 /en/）；
// 新手三课的图示（figs）和 src/data/figs.js 的英文结构一样，三课里用到的 <Fig> 和英文版一样。
import { readFileSync, existsSync } from "node:fs";
import { compile } from "@mdx-js/mdx";
import BASE from "../src/i18n/base.js";
import { EXTRA } from "../src/i18n/index.js";
import { FIGS, FIG_UI, LESSON_FIGS } from "../src/data/figs.js";
import { LANGS, LESSONS as LESSON_LIST } from "../src/data/nav.js";

const LESSONS = LESSON_LIST.map((l) => l.slug);
const want = process.argv[2] ? [process.argv[2]] : Object.keys(EXTRA);
let bad = 0;
const fail = (code, msg) => { bad++; console.log(`✗ ${code}：${msg}`); };

for (const l of LANGS) if (!l.full && !EXTRA[l.code]) fail(l.code, "LANGS 里有，src/i18n/index.js 的 EXTRA 里没有");
for (const code of Object.keys(EXTRA)) if (!LANGS.some((l) => l.code === code && !l.full)) fail(code, "EXTRA 里有，nav.js 的 LANGS 里没有（或者标成了 full）");

const walk = (base, tr, path, code) => {
  if (Array.isArray(base)) {
    if (!Array.isArray(tr)) return fail(code, `${path} 应该是数组`);
    if (tr.length !== base.length) fail(code, `${path} 有 ${tr.length} 项，英文是 ${base.length} 项`);
    base.forEach((b, i) => walk(b, tr[i], `${path}[${i}]`, code));
  } else if (base && typeof base === "object") {
    if (!tr || typeof tr !== "object") return fail(code, `缺 ${path}`);
    for (const k of Object.keys(base)) walk(base[k], tr[k], path ? `${path}.${k}` : k, code);
  } else if (typeof base === "string" && base) {
    if (typeof tr !== "string" || !tr.trim()) return fail(code, `缺 ${path}`);
    for (const ph of base.match(/\{\w+\}/g) || []) if (!tr.includes(ph)) fail(code, `${path} 丢了占位 ${ph}`);
    for (const ln of base.match(/\]\(\w+\)/g) || []) if (!tr.includes(ln)) fail(code, `${path} 丢了链接 [字]${ln.slice(1)}`);
  }
};

const ids = (s) => [...s.matchAll(/<Copy id="([^"]+)"/g)].map((m) => m[1]).sort().join(",");
const figs = (s) => [...s.matchAll(/<Fig id="([^"]+)"/g)].map((m) => m[1]).join(",");

for (const code of want) {
  const d = EXTRA[code];
  if (!d) { fail(code, "不是非全站语言"); continue; }
  walk(BASE, d, "", code);
  walk({ ui: FIG_UI.en, ...Object.fromEntries(LESSON_FIGS.map((id) => [id, FIGS[id].en])) }, d.figs, "figs", code);
  if (!existsSync(`src/pages/${code}/index.astro`)) fail(code, "缺首页");
  for (const f of LESSONS) {
    const p = `src/pages/${code}/start/${f}.mdx`;
    if (!existsSync(p)) { fail(code, `缺 ${p}`); continue; }
    const s = readFileSync(p, "utf8");
    const en = readFileSync(`src/pages/en/start/${f}.mdx`, "utf8");
    try { await compile(s); } catch (e) { fail(code, `${f} 编译不过：${e.message.split("\n")[0]}`); }
    if (s === en) fail(code, `${f} 还是英文原样`);
    if (ids(s) !== ids(en)) fail(code, `${f} 复制块的 id 和英文版不一样`);
    if (figs(s) !== figs(en)) fail(code, `${f} 的图示和英文版不一样（英文版：${figs(en) || "没有"}）`);
    if ((s.match(/<mark/g) || []).length > 1) fail(code, `${f} 有不止一处 <mark>`);
    if (!/^tldr: /m.test(s)) fail(code, `${f} 缺 tldr`);
    for (const m of s.matchAll(/\]\((\/[^)\s]*)\)|href="(\/[^"]*)"/g)) {
      const href = m[1] ?? m[2];
      if (href.startsWith("/en/start/")) fail(code, `${f} 新手入门的链接要指向 /${code}/start/：${href}`);
      else if (!href.startsWith(`/${code}/start/`) && !href.startsWith("/en/")) fail(code, `${f} 站内链接要么是 /${code}/start/…，要么是 /en/…：${href}`);
    }
  }
}
console.log(bad ? `还有 ${bad} 处要改` : want.length ? `✓ ${want.join("、")} 齐全，能编译` : `✓ LANGS 只有全站语言（${LANGS.map((l) => l.code).join("、")}），没有要查的翻译`);
process.exit(bad ? 1 : 0);
