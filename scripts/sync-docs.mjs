// Saily 官方帮助中心同步。帮助中心是 Zendesk，有公开的 API：抓英文（en-us）和官方中文（zh-cn）的全部文章，
// 每篇存成 docs/sources/raw/official/<语言>/<id>.md（标题、分区、网址、更新时间，正文转成 Markdown），写一份目录 official/_index.md；
// 再和 docs/sources/official.json 里上次的指纹比对，列出新增、删除、改动的文章，最后更新 official.json。
//
//   node scripts/sync-docs.mjs          抓取并比对
//   node scripts/sync-docs.mjs --check  只比对，不写文件（有变化时退出码 1）
//
// 改动的文章要对照 docs/sources/README.md 里的「和本站的对应」表，改掉本站相应的地方。
// official.json 的键是不带标题的文章地址（/hc/<语言>/articles/<id>）：官方改了标题，英文地址里的那段会变，指纹的键不跟着变。
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, unlinkSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const RAW = join(ROOT, "docs/sources/raw/official");
const INDEX = join(ROOT, "docs/sources/official.json");
const HOST = "https://support.saily.com";
const API = `${HOST}/api/v2/help_center`;
const LOCALES = ["en-us", "zh-cn", "ja", "ko", "es", "pt-br", "fr", "de"];
const CHECK = process.argv.includes("--check");

const getJSON = async (url) => {
  const res = await fetch(url, { headers: { "user-agent": "xxd-saily-docs-sync", accept: "application/json" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
};
/** Zendesk 一页最多 100 条，跟着 next_page 翻完 */
const getAll = async (url, key) => {
  const out = [];
  for (let next = url; next; ) {
    const page = await getJSON(next);
    out.push(...page[key]);
    next = page.next_page;
  }
  return out;
};

const ENT = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };
const decode = (s) => s.replace(/&(#x?[0-9a-f]+|\w+);/gi, (m, e) => ENT[e] ?? (e[0] === "#" ? String.fromCodePoint(e[1].toLowerCase() === "x" ? parseInt(e.slice(2), 16) : +e.slice(1)) : m));
const attr = (attrs, name) => attrs.match(new RegExp(`\\s${name}="([^"]*)"`, "i"))?.[1];
const abs = (href) => (href.startsWith("/") ? HOST + href : href);
const MARK = { strong: "**", b: "**", em: "*", i: "*", code: "`" };
const LINE_START = /(^|\n) *(- |\d+\. |#+ )?$/;

/**
 * 文章正文（Zendesk 的 HTML）转成 Markdown：标题、段落、有序 / 无序列表（可嵌套）、粗体、斜体、代码、链接、表格（每行一条 | 隔开）、图片记成 [image]。
 * 标题带锚点的写成「### 标题 {#锚点}」，正文里链到 #锚点 时能对上。行内的粗体、链接先收进一个小缓冲，收尾时把首尾空格挪到标记外面。
 */
const toMarkdown = (html) => {
  let s = "";
  const inline = [];
  const lists = [];
  let heading = null;
  const atLineStart = () => inline.length === 0 && LINE_START.test(s);
  const nl = (n) => {
    if (inline.length) return;
    s = s.replace(/[ \t]+$/, "");
    if (!s) return;
    const have = s.match(/\n*$/)[0].length;
    if (have < n) s += "\n".repeat(n - have);
  };
  const body = html.replace(/<!--[\s\S]*?-->|<(script|style|noscript)\b[\s\S]*?<\/\1>/gi, "");
  for (const [, end, rawTag, attrs = "", text] of body.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)\b([^>]*)>|([^<]+)/g)) {
    if (text !== undefined) {
      let t = decode(text).replace(/\s+/g, " ");
      if (atLineStart() || /\| $/.test(s)) t = t.trimStart();
      s += t;
      continue;
    }
    const tag = rawTag.toLowerCase();
    if (/^h[1-6]$/.test(tag)) {
      if (!end) { nl(2); s += "#".repeat(Math.max(2, +tag[1])) + " "; heading = attr(attrs, "id"); }
      else { s = s.replace(/\s+$/, ""); if (heading) s += ` {#${heading}}`; heading = null; nl(2); }
      continue;
    }
    if (MARK[tag] || tag === "a") {
      if (!end) { inline.push({ tag, s, href: tag === "a" ? attr(attrs, "href") : null }); s = ""; continue; }
      const at = inline.map((f) => f.tag).lastIndexOf(tag);
      if (at < 0) continue;
      while (inline.length > at) {
        const f = inline.pop();
        const [, lead, core, trail] = s.match(/^(\s*)([\s\S]*?)(\s*)$/);
        const done = f.tag === "a"
          ? (f.href ? `[${core || f.href}](${abs(f.href)})` : core)
          : (core ? `${MARK[f.tag]}${core}${MARK[f.tag]}` : "");
        const startsLine = inline.length === 0 && LINE_START.test(f.s);
        s = f.s + (startsLine ? "" : lead) + done + trail;
      }
      continue;
    }
    switch (tag) {
      case "ul": case "ol":
        if (end) { lists.pop(); nl(lists.length ? 1 : 2); } else { nl(lists.length ? 1 : 2); lists.push({ ordered: tag === "ol", n: 0 }); }
        break;
      case "li":
        if (!end) { nl(1); const l = lists.at(-1) ?? { ordered: false, n: 0 }; l.n++; s += "  ".repeat(Math.max(0, lists.length - 1)) + (l.ordered ? `${l.n}. ` : "- "); }
        break;
      case "p": case "div": case "details": case "summary": case "figure": case "table": case "thead": case "tbody":
        if (lists.length) { if (!end && !atLineStart()) s += " "; } else nl(2);
        break;
      case "tr": nl(1); if (!end) s += "|"; break;
      case "td": case "th": if (end) s = s.replace(/\s+$/, "") + " |"; else if (!s.endsWith(" ")) s += " "; break;
      case "br": if (lists.length || inline.length) s += " "; else nl(1); break;
      case "img": { const alt = attr(attrs, "alt"); s += alt ? `[image: ${alt}]` : "[image]"; break; }
    }
  }
  while (inline.length) { const f = inline.pop(); s = f.s + s; }
  return s.split("\n").map((l) => l.replace(/(\S) {2,}/g, "$1 ").replace(/\s+$/, "")).join("\n").replace(/\n{3,}/g, "\n\n").trim() + "\n";
};

const sha = (s) => createHash("sha256").update(s).digest("hex").slice(0, 16);
// 字数：英文按词，中文按字
const words = (s) => (s.match(/\p{Script=Han}|[\p{Script=Latin}\p{N}][\p{Script=Latin}\p{N}'’-]*/gu) || []).length;

const before = existsSync(INDEX) ? JSON.parse(readFileSync(INDEX, "utf8")) : { pages: {} };
const after = { fetched: new Date().toISOString().slice(0, 10), source: API, locales: LOCALES, pages: {} };
const docs = {};
for (const locale of LOCALES) {
  const sections = new Map((await getAll(`${API}/${locale}/sections.json?per_page=100`, "sections")).map((x) => [x.id, x.name]));
  const articles = (await getAll(`${API}/${locale}/articles.json?per_page=100`, "articles")).filter((a) => !a.draft).sort((a, b) => a.id - b.id);
  for (const a of articles) {
    const key = `${HOST}/hc/${locale}/articles/${a.id}`;
    const section = sections.get(a.section_id) ?? String(a.section_id);
    const text = toMarkdown(a.body ?? "");
    docs[key] = { locale, id: a.id, section, title: a.title, md: `# ${a.title}\n\nsection: ${section}\nurl: ${a.html_url}\nupdated: ${a.updated_at}\n\n${text}` };
    after.pages[key] = { file: `${locale}/${a.id}.md`, title: a.title, sha: sha(`${a.title}\n${a.body ?? ""}`), words: words(text) };
  }
}

const keys = Object.keys(after.pages);
const added = keys.filter((k) => !before.pages[k]);
const removed = Object.keys(before.pages).filter((k) => !after.pages[k]);
const changed = keys.filter((k) => before.pages[k] && before.pages[k].sha !== after.pages[k].sha);
const line = (k, p, extra = "") => `  ${p.file.replace(/\.md$/, "")}  ${p.title}${extra}`;
const show = (label, list, pick) => list.length && console.log(`${label}（${list.length}）\n${list.map(pick).join("\n")}`);
show("新增", added, (k) => line(k, after.pages[k]));
show("删除", removed, (k) => line(k, before.pages[k]));
show("改动", changed, (k) => line(k, after.pages[k], `（${before.pages[k].words} → ${after.pages[k].words} 字）`));
const count = LOCALES.map((l) => `${l} ${keys.filter((k) => after.pages[k].file.startsWith(l + "/")).length}`).join("、");
if (!added.length && !removed.length && !changed.length) console.log(`✓ ${count} 篇，和 ${before.fetched ?? "上次"} 一样`);

if (CHECK) process.exit(added.length || removed.length || changed.length ? 1 : 0);

for (const locale of LOCALES) mkdirSync(join(RAW, locale), { recursive: true });
for (const k of keys) writeFileSync(join(RAW, after.pages[k].file), docs[k].md);
for (const k of removed) {
  const p = join(RAW, before.pages[k].file);
  if (existsSync(p)) unlinkSync(p);
}
// 目录：每种语言一节，按分区、id 排；中文缺的英文文章单独列出（翻译和写中文页时要知道哪些只有英文）
const ids = (locale) => new Set(Object.values(docs).filter((d) => d.locale === locale).map((d) => d.id));
const zh = ids("zh-cn");
const toc = LOCALES.map((locale) => {
  const list = Object.entries(docs).filter(([, d]) => d.locale === locale)
    .sort(([, a], [, b]) => (a.section < b.section ? -1 : a.section > b.section ? 1 : a.id - b.id));
  return `## ${locale}（${list.length}）\n\n${list.map(([k, d]) => `- [${d.section}] ${d.title} (${d.id}) ${k}`).join("\n")}`;
});
const onlyEn = Object.values(docs).filter((d) => d.locale === "en-us" && !zh.has(d.id));
toc.push(`## 只有英文、没有官方中文的（${onlyEn.length}）\n\n${onlyEn.map((d) => `- ${d.title} (${d.id})`).join("\n") || "（没有）"}`);
writeFileSync(join(RAW, "_index.md"), `# Saily 帮助中心文章目录（${after.fetched} 抓取）\n\n${toc.join("\n\n")}\n`);
const files = new Set(Object.values(after.pages).map((p) => p.file));
const stray = LOCALES.flatMap((l) => readdirSync(join(RAW, l)).filter((f) => f.endsWith(".md") && !files.has(`${l}/${f}`)).map((f) => `${l}/${f}`));
if (stray.length) console.log(`raw/official 里多出来的文件（没删）：${stray.join("、")}`);
writeFileSync(INDEX, JSON.stringify(after, null, 2) + "\n");
console.log(`已写入 ${count} 篇和 docs/sources/official.json`);
