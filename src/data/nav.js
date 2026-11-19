import { EXTRA } from "../i18n/index.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: false 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站的语言。full: true 是全站；以后加的语言可以只有首页和新手入门三课，别的页面链到英文版（不写 full）。 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
];
export const langInfo = (lang) => LANGS.find((l) => l.code === lang) ?? LANGS[0];
const PREFIXED = LANGS.filter((l) => l.code !== "zh").map((l) => l.code);
const PREFIX_RE = new RegExp(`^/(${PREFIXED.join("|")})(?=/|$)`);
/** 当前页面的语言：看路径前缀（/en/……），没有前缀是中文 */
export const langOf = (pathname = "") => pathname.slice(BASE.length).match(PREFIX_RE)?.[1] ?? "zh";
/** 这种语言有没有全站 */
export const isFull = (lang) => langInfo(lang).full === true;
/** 只在全站语言里存在的页面（完整教程、How-to、Wiki、常见问题）：非全站语言链到英文版 */
export const fullLang = (lang) => (isFull(lang) ? lang : "en");
/** 站内链接：部署在子路径时自动加前缀；非中文加 /<语言> */
export const link = (path, lang = "zh") => `${BASE}${lang === "zh" ? "" : "/" + lang}${path}`;
/** 同一页在另一种语言里的地址：那种语言没有这一页，就去它的首页 */
export const langHref = (pathname, target) => {
  const rel = (pathname.slice(BASE.length) || "/").replace(PREFIX_RE, "") || "/";
  if (/\/404\/?$/.test(rel)) return link("/", target);
  if (isFull(target) || rel === "/" || rel.startsWith("/start/")) return link(rel, target);
  return link("/", target);
};
/** 取某个对象在当前语言下的字段：先找 x[lang][key]，再找 x.en[key]（非中文的兜底），最后是中文 */
export const t = (x, key, lang) => {
  if (lang === "zh") return x[key];
  return x[lang]?.[key] ?? x.en?.[key] ?? x[key];
};

/** 这个教程站自己的仓库（反馈、源码）。还没建仓库前先放这里，建好后只改这一行。 */
export const REPO = "https://github.com/nevertoday/xxd-saily";
/** Saily 官方帮助中心：功能、价格和用法以这里和 Saily App 为准。中文页链官方的中文版（同一篇文章，地址里的 en-us 换成 zh-cn） */
export const DOCS = "https://support.saily.com/hc/en-us";
export const DOCS_ZH = "https://support.saily.com/hc/zh-cn";

// 新手入门：给第一次出国用 eSIM 的人。三课，一条路走到底；做完这三课，落地就能上网。
export const LESSONS = [
  { n: 1, slug: "1-check-phone", title: "先看你的手机能不能用 eSIM", minutes: "5 分钟", sum: "查一下手机支不支持 eSIM；不支持，也还有办法", en: { title: "Check your phone works with eSIM", minutes: "5 minutes", sum: "Check whether your phone supports eSIM, and what to do if it doesn't" } },
  { n: 2, slug: "2-data-plan", title: "买一个流量套餐，出发前装好", minutes: "15 分钟", sum: "在 Saily App 里选好目的地、买下套餐，连着 Wi-Fi 把 eSIM 装进手机", en: { title: "Get a data plan and install it before you go", minutes: "15 minutes", sum: "Pick your destination in the Saily app, buy a plan, and install the eSIM over Wi-Fi" } },
  { n: 3, slug: "3-land", title: "落地，打开数据就能用", minutes: "5 分钟", sum: "落地后让手机用 Saily 上网，给它打开数据漫游，再看看用了多少", en: { title: "Land, turn on data, and you're online", minutes: "5 minutes", sum: "After you land, switch mobile data to Saily, turn on data roaming for it, and check your usage" } },
];
// 以后加的语言：新手入门标题、时间、简介在 src/i18n/<语言>.js 的 lessons 里，按顺序叠到这里
for (const [code, d] of Object.entries(EXTRA)) (d.lessons || []).forEach((l, i) => { if (LESSONS[i]) LESSONS[i][code] = l; });
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "Saily 是什么", minutes: "读 5 分钟", ready: false, sum: "Nord Security 做的旅行 eSIM：能做什么，不能做什么，和漫游、当地卡比起来怎样", en: { title: "What Saily is", minutes: "5-minute read", sum: "A travel eSIM from Nord Security: what it does, what it doesn't, and how it compares with roaming or a local SIM" } },
  { n: 1, slug: "1-choose-plan", title: "选对套餐", minutes: "10 分钟", ready: false, sum: "一个国家还是好几个，总流量还是每天限量，照你的行程挑", en: { title: "Pick the right plan", minutes: "10 minutes", sum: "One country or several, a total allowance or a daily one: pick by your trip" } },
  { n: 2, slug: "2-install", title: "装好 eSIM", minutes: "10 分钟", ready: false, sum: "在 App 里一键装，或者扫二维码、手动输入激活码", en: { title: "Install the eSIM", minutes: "10 minutes", sum: "Install it from the app, or with a QR code or the activation code" } },
  { n: 3, slug: "3-abroad", title: "到了当地", minutes: "5 分钟", ready: false, sum: "切到 Saily 上网、打开数据漫游；没网的时候，先查这几样", en: { title: "Once you land", minutes: "5 minutes", sum: "Switch data to Saily and turn on data roaming, and what to check first when there's no internet" } },
  { n: 4, slug: "4-manage", title: "用量、加购和抵用金", minutes: "10 分钟", ready: false, sum: "看还剩多少流量，不够了怎么加，自动加购和抵用金怎么用", en: { title: "Usage, top-ups and credits", minutes: "10 minutes", sum: "See how much data is left, top up when you run low, and how Auto Top-Up and credits work" } },
  { n: 5, slug: "5-phone-number", title: "美国电话号码", minutes: "15 分钟", ready: false, sum: "Saily 的 +1 美国号码能打电话、收发短信，开通前要先做实名认证", en: { title: "The US phone number", minutes: "15 minutes", sum: "Saily's +1 US number makes calls and sends texts, once you've verified your identity" } },
  { n: 6, slug: "6-no-esim", title: "手机不支持 eSIM 怎么办", minutes: "10 分钟", ready: false, sum: "用一张能写入 eSIM 的实体卡，插进卡槽，再把 Saily 装上去", en: { title: "When your phone has no eSIM", minutes: "10 minutes", sum: "Use a physical card that holds eSIMs: put it in the SIM slot, then install Saily on it" } },
  { n: 7, slug: "7-extras", title: "其他功能", minutes: "读 5 分钟", ready: false, sum: "Web protection、广告拦截，还有 Ultra 套餐附带的权益，各是做什么的", en: { title: "Other features", minutes: "5-minute read", sum: "What Web protection, the ad blocker and the Ultra plan's perks are for" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "旅行", en: { group: "Travel" }, items: [
    { slug: "multi-country", title: "一趟去好几个国家", en: { title: "One trip, several countries" } },
    { slug: "hotspot", title: "开热点给电脑用", en: { title: "Share your data with a hotspot" } },
    { slug: "dual-sim", title: "国内的号码和 Saily 一起用", en: { title: "Keep your home number alongside Saily" } },
    { slug: "save-data", title: "让流量用得久一点", en: { title: "Make your data last" } },
    { slug: "change-phone", title: "换了手机，把 eSIM 移过去", en: { title: "Move the eSIM to a new phone" } },
    { slug: "share-family", title: "和家人一起用", en: { title: "Share with your family" } },
  ]},
  { group: "电话号码", en: { group: "Phone number" }, items: [
    { slug: "us-number-sms", title: "用美国号码收短信和验证码", en: { title: "Texts and verification codes on the US number" } },
    { slug: "keep-number", title: "号码怎么留住、怎么换", en: { title: "Keep or change your number" } },
    { slug: "number-calls", title: "用这个号码打电话", en: { title: "Make calls with the number" } },
  ]},
  { group: "出问题了", en: { group: "When something's wrong" }, items: [
    { slug: "no-signal", title: "没信号，或者有信号没网", en: { title: "No signal, or signal but no internet" } },
    { slug: "refund", title: "想退款", en: { title: "Ask for a refund" } },
    { slug: "delete-esim", title: "删掉 eSIM 之前先看这个", en: { title: "Read this before you delete an eSIM" } },
  ]},
  { group: "钱和账户", en: { group: "Money and account" }, items: [
    { slug: "payments", title: "付款方式和发票", en: { title: "Payment methods and invoices" } },
    { slug: "credits", title: "抵用金从哪来、怎么用", en: { title: "Where credits come from and how to use them" } },
  ]},
];
export const howtoHref = (slug, lang = "zh") => link(`/howto/${slug}/`, lang);
export const HOWTO_FLAT = HOWTO.flatMap((g) => g.items.map((i) => ({ ...i, group: g.group, groupEn: g.en.group })));

export const wikiHref = (slug, lang = "zh") => link(`/wiki/${slug}/`, lang);

// 正文里虚线标出的术语：悬停看一句话解释（Term 组件）。wiki: 对应的 Wiki 条目（src/data/wiki.js 的 slug）。
// 依据 Saily 官方帮助中心（support.saily.com）。现在只有两条 Wiki，术语先都指向这两条；加了 Wiki 条目，把对应的术语指过去。
export const GLOSSARY = {
  eSIM: { tip: "手机里内置的一张 SIM 卡。不用插卡，下载一份配置就能上网。", wiki: "esim", en: { label: "eSIM", tip: "A SIM built into your phone. There's nothing to insert: you download a profile and you're connected." } },
  "实体 SIM 卡": { tip: "插在手机卡槽里的那张塑料卡。你国内的号码一般就在它上面。", wiki: "esim", en: { label: "physical SIM", tip: "The plastic card in your phone's SIM slot. Your home number usually lives on it." } },
  EID: { tip: "手机里 eSIM 芯片的一串编号。装不上 eSIM 找客服时，可能要你截图给他们看。", wiki: "esim", en: { label: "EID", tip: "The ID number of your phone's eSIM chip. Saily support may ask for a screenshot of it when an install goes wrong." } },
  漫游: { tip: "出了你运营商的范围还用手机网络。Saily 的 eSIM 要打开数据漫游才能在国外上网；国内的卡把它关掉，免得被收漫游费。", wiki: "esim", en: { label: "roaming", tip: "Using mobile data outside your carrier's area. The Saily eSIM needs data roaming on to work abroad; turn it off for your home SIM to avoid charges." } },
  APN: { tip: "手机连移动网络用的一组设置。有信号却上不了网时，排查步骤里会让你核对它。", wiki: "esim", en: { label: "APN", tip: "The settings your phone uses to connect to mobile data. When you have signal but no internet, the fix often starts with checking it." } },
  流量套餐: { tip: "Saily 卖的就是它：一个目的地、一份流量、一段有效期。过了有效期，剩下的流量就作废了。", wiki: "data-plan", en: { label: "data plan", tip: "What Saily sells: data for one destination, valid for a set time. Whatever's left when it expires is gone." } },
  电话号码套餐: { tip: "给 Saily eSIM 加的一个美国 +1 号码，能打电话、收发短信，通话按分钟包计。", wiki: "data-plan", en: { label: "phone number plan", tip: "A +1 US number added to your Saily eSIM. It makes calls and sends texts, and calls come in minute packages." } },
  "KYC 实名认证": { tip: "开通 Saily 电话号码前的身份验证。没通过之前，号码不会给你，也用不了。", wiki: "data-plan", en: { label: "KYC verification", tip: "The identity check before you get a Saily phone number. Until it's done, the number isn't shown to you or switched on." } },
  "实体 eSIM 卡": { tip: "一张能写入 eSIM 的实体卡。插进不支持 eSIM 的手机，也能装上 Saily。", wiki: "esim", en: { label: "removable eSIM card", tip: "A physical card that can hold eSIMs. Put it in a phone without eSIM support and you can still install Saily." } },
  激活码: { tip: "手动装 eSIM 时要输入的那串字，在 Saily App 里能看到。安卓上一般以 LPA:1$ 开头。", wiki: "esim", en: { label: "activation code", tip: "The code you type in to install an eSIM by hand. The Saily app shows it; on Android it usually starts with LPA:1$." } },
  热点: { tip: "让旁边的电脑、平板借你手机的网。走的是 eSIM 的流量，和手机自己用的一样算。", wiki: "data-plan", en: { label: "hotspot", tip: "Lets a nearby laptop or tablet use your phone's connection. It comes out of your eSIM's data, the same as your phone's own use." } },
  抵用金: { tip: "存在 Saily 账户里、买套餐时能抵钱的余额。发放后一年内有效，不能转给别的账户。", wiki: "data-plan", en: { label: "credits", tip: "Saily credits in your account, which you can put toward a plan. They're valid for a year and can't be moved to another account." } },
};
