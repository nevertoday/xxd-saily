// 分享大图（og:image）：每张卡一条，path 是它在 public/ 下的路径，query 是填进 tools/og.html 的参数。
// 全站两张（中文页用 og.png，其他语言用 og-en.png，顺带复制成 README 头图），每个 Wiki 条目中英文各一张。
// tools/build_og.py 照这张表截图（npm run og），scripts/check-site.mjs 照它查卡在不在、是不是最新。
import { WIKI } from "./wiki.js";
import { WIKI_EN, WIKI_GROUPS_EN } from "./wiki.en.js";
import { plain } from "../lib/md.js";

/** 截图尺寸：1280×640 的海报，2 倍清晰度 */
export const OG_SIZE = { width: 1280, height: 640, scale: 2 };
export const SITE_OG = { zh: "/og.png", en: "/og-en.png" };
export const wikiOg = (slug, lang) => `/og${lang === "en" ? "/en" : ""}/wiki/${slug}.png`;

const wikiCard = (slug, lang, { title, one }, group) => ({ path: wikiOg(slug, lang), copies: [], query: { kind: "wiki", lang, title, one: plain(one), group } });
export const OG_CARDS = [
  { path: SITE_OG.zh, copies: ["assets/social.png"], query: { lang: "zh" } },
  { path: SITE_OG.en, copies: ["assets/en/social.png"], query: { lang: "en" } },
  ...WIKI.flatMap((w) => [wikiCard(w.slug, "zh", w, w.group), wikiCard(w.slug, "en", WIKI_EN[w.slug], WIKI_GROUPS_EN[w.group])]),
];
