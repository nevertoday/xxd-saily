// 非全站语言的界面文字和首页、新手入门的文字。v1 只有中文、英文两种全站语言，所以 EXTRA 是空的。
// 加语言：照 base.js 的结构写 src/i18n/<语言>.js，在这里 import 并加进 EXTRA，nav.js 的 LANGS 里加一行（不写 full）。
// base.js 是英文底稿，也是兜底：某种语言缺了哪个键，就显示英文。
// 全站语言（中文、英文）的文字在各组件里，不走这里。
import BASE from "./base.js";

export const EXTRA = {};

const isObj = (v) => v && typeof v === "object" && !Array.isArray(v);
const merge = (a, b) => {
  const out = { ...a };
  for (const [k, v] of Object.entries(b || {})) out[k] = isObj(v) && isObj(a[k]) ? merge(a[k], v) : v;
  return out;
};
const cache = {};
/** 某种非全站语言的全部文字（缺的用英文补上）；中文、英文返回 null */
export const X = (lang) => (EXTRA[lang] ? (cache[lang] ??= merge(BASE, EXTRA[lang])) : null);
/** 把「Lesson {n} of {total}」里的 {名字} 换成值 */
export const fmt = (s, vars = {}) => String(s).replace(/\{(\w+)\}/g, (m, k) => (vars[k] ?? m));
