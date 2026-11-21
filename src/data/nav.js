import { EXTRA } from "../i18n/index.js";
// 站点结构的唯一来源：左侧导航、首页路线图、上一步 / 下一步、How-to 目录、搜索都从这里读。
// ready: true 的页面还没写，导航里显示「编写中」，不给链接。
// 中文在根路径，英文在 /en/ 下（同样的 slug）。英文文字放在各条目的 en: {} 里，用 t(x, key, lang) 取。

const BASE = (import.meta.env?.BASE_URL || "/").replace(/\/$/, "");
/** 网站的语言。full: true 是全站；以后加的语言可以只有首页和新手入门三课，别的页面链到英文版（不写 full）。 */
export const LANGS = [
  { code: "en", name: "English", html: "en", full: true },
  { code: "zh", name: "中文", html: "zh-CN", full: true },
  { code: "ja", name: "日本語", html: "ja" },
  { code: "ko", name: "한국어", html: "ko" },
  { code: "es", name: "Español", html: "es" },
  { code: "pt", name: "Português", html: "pt-BR" },
  { code: "fr", name: "Français", html: "fr" },
  { code: "de", name: "Deutsch", html: "de" },
  { code: "ru", name: "Русский", html: "ru" },
  { code: "ar", name: "العربية", html: "ar", dir: "rtl" },
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
// 有官方帮助中心的语言，页脚和「相关链接」指向那种语言；俄语、阿拉伯语没有，用英文版
export const DOCS_BY_LANG = { ja: "https://support.saily.com/hc/ja", ko: "https://support.saily.com/hc/ko", es: "https://support.saily.com/hc/es", pt: "https://support.saily.com/hc/pt-br", fr: "https://support.saily.com/hc/fr", de: "https://support.saily.com/hc/de" };

// 新手入门：给第一次出国用 eSIM 的人。三课，一条路走到底；做完这三课，落地就能上网。
export const LESSONS = [
  { n: 1, slug: "1-check-phone", title: "先看你的手机能不能用 eSIM", minutes: "5 分钟", sum: "去手机设置里找一找就知道；就算不支持，也还有一条路", en: { title: "Check your phone works with eSIM", minutes: "5 minutes", sum: "A look in your phone's settings tells you, and there's still a way if it doesn't" } },
  { n: 2, slug: "2-data-plan", title: "买一个流量套餐，出发前装好", minutes: "15 分钟", sum: "在 Saily App 里挑好目的地、买下套餐，趁家里有 Wi-Fi 把 eSIM 装进手机", en: { title: "Get a data plan and install it before you go", minutes: "15 minutes", sum: "Pick your destination in the Saily app, buy a plan, and install the eSIM while you're still on home Wi-Fi" } },
  { n: 3, slug: "3-land", title: "落地，打开数据就能用", minutes: "5 分钟", sum: "下了飞机，让手机走 Saily 上网，给它打开数据漫游，再看一眼还剩多少流量", en: { title: "Land, turn on data, and you're online", minutes: "5 minutes", sum: "Off the plane, switch mobile data to Saily, turn on data roaming for it, and see how much data you have left" } },
];
// 以后加的语言：新手入门标题、时间、简介在 src/i18n/<语言>.js 的 lessons 里，按顺序叠到这里
for (const [code, d] of Object.entries(EXTRA)) (d.lessons || []).forEach((l, i) => { if (LESSONS[i]) LESSONS[i][code] = l; });
export const lessonHref = (s, lang = "zh") => link(`/start/${s.slug}/`, lang);

export const STEPS = [
  { n: 0, slug: "0-what", title: "Saily 是什么", minutes: "读 5 分钟", ready: true, sum: "Nord Security 做的旅行 eSIM：它替你省掉什么，管不了什么，和开漫游、买当地卡比起来怎样", en: { title: "What Saily is", minutes: "5-minute read", sum: "A travel eSIM from Nord Security: what it saves you, what it can't do, and how it stacks up against roaming or a local SIM" } },
  { n: 1, slug: "1-choose-plan", title: "选对套餐", minutes: "10 分钟", ready: true, sum: "去一个国家还是好几个，要一份总流量还是每天不限量，让你的行程来定", en: { title: "Pick the right plan", minutes: "10 minutes", sum: "One country or several, one data total or unlimited by the day: let your trip decide" } },
  { n: 2, slug: "2-install", title: "装好 eSIM", minutes: "10 分钟", ready: true, sum: "让 App 替你装；装不上，再扫二维码或者手动输入激活码", en: { title: "Install the eSIM", minutes: "10 minutes", sum: "Let the app install it, and fall back on a QR code or the activation code if it can't" } },
  { n: 3, slug: "3-abroad", title: "到了当地", minutes: "5 分钟", ready: true, sum: "让手机走 Saily 上网、打开数据漫游；没网的时候，先查这几样", en: { title: "Once you land", minutes: "5 minutes", sum: "Switch mobile data to Saily and turn on data roaming, and what to check first when there's no internet" } },
  { n: 4, slug: "4-manage", title: "用量、加流量和抵用金", minutes: "10 分钟", ready: true, sum: "看还剩多少流量，不够了怎么加，自动充值和抵用金怎么用", en: { title: "Usage, top-ups and credits", minutes: "10 minutes", sum: "See how much data is left, add more when you run low, and how Auto Top-Up and credits work" } },
  { n: 5, slug: "5-phone-number", title: "美国电话号码", minutes: "15 分钟", ready: true, sum: "Saily 的 +1 美国号码能打电话、收发短信；开通之前，先要做实名认证", en: { title: "The US phone number", minutes: "15 minutes", sum: "Saily's +1 US number makes calls and sends texts, once you've passed the identity check" } },
  { n: 6, slug: "6-no-esim", title: "手机不支持 eSIM 怎么办", minutes: "10 分钟", ready: true, sum: "换一张能装 eSIM 的实体卡插进卡槽，官方说的是 eSIM.me，再找客服要二维码把 Saily 装上去", en: { title: "When your phone has no eSIM", minutes: "10 minutes", sum: "Put a card that holds eSIMs in the SIM slot (Saily names eSIM.me), then get a QR code from support to install Saily on it" } },
  { n: 7, slug: "7-extras", title: "其他功能", minutes: "读 5 分钟", ready: true, sum: "网页防护、广告拦截器、虚拟位置，还有超级套餐附带的权益，各是做什么的", en: { title: "Other features", minutes: "5-minute read", sum: "What Web protection, Ad Blocker and virtual locations do, and what the Ultra plan adds" } },
];
export const stepHref = (s, lang = "zh") => link(`/guide/${s.slug}/`, lang);

export const HOWTO = [
  { group: "装 eSIM", en: { group: "Installing" }, items: [
    { slug: "no-esim-options", title: "没有合适的手机，Saily 怎么装", en: { title: "No suitable phone? How to set up Saily" } },
    { slug: "scan-qr", title: "扫二维码装 eSIM，一步一步", en: { title: "Install the eSIM with a QR code, step by step" } },
  ]},
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
    { slug: "number-apps", title: "美国号码能用在哪些应用", en: { title: "Which apps take the US number" } },
    { slug: "keep-number", title: "号码怎么留住、怎么换", en: { title: "Keep or change your number" } },
    { slug: "number-calls", title: "用这个号码打电话", en: { title: "Make calls with the number" } },
  ]},
  { group: "出问题了", en: { group: "When something's wrong" }, items: [
    { slug: "no-signal", title: "没信号，或者有信号没网", en: { title: "No signal, or signal but no internet" } },
    { slug: "refund", title: "退款和取消订阅", en: { title: "Refunds and cancelling subscriptions" } },
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
// 依据 Saily 官方帮助中心（support.saily.com），出处跟着各自的 Wiki 条目走。tip 一句话说清楚，像朋友顺口解释；按钮名照官方中文写法。
export const GLOSSARY = {
  eSIM: { tip: "做在手机里的一张 SIM 卡。不用插卡，连上网下载一份配置就能用。", wiki: "esim", en: { label: "eSIM", tip: "A SIM built into your phone. There's nothing to insert: you download a profile and you're connected." } },
  "实体 SIM 卡": { tip: "插在手机卡槽里的那张小卡，你国内的号码一般就在它上面。", wiki: "physical-sim", en: { label: "physical SIM", tip: "The little card in your phone's SIM slot. Your home number usually lives on it." } },
  双卡: { tip: "一部手机同时开着两张卡，比如国内的实体卡接电话，Saily 的 eSIM 管上网。", wiki: "physical-sim", en: { label: "dual SIM", tip: "Two SIMs on in one phone, say your home SIM for calls and the Saily eSIM for data." } },
  运营商锁: { tip: "手机被原来的运营商设成只认自家的卡。被锁的手机能装上 Saily 的 eSIM，却连不上网。", wiki: "esim-devices", en: { label: "carrier lock", tip: "When your carrier has set your phone to accept only its own SIMs. A locked phone can install the Saily eSIM but can't connect with it." } },
  "实体 eSIM 卡": { tip: "一张能装 eSIM 的实体卡。插进不支持 eSIM 的手机，也能装上 Saily；官方说的是 eSIM.me 的卡。", wiki: "esim-card", en: { label: "removable eSIM card", tip: "A physical card that can hold eSIMs. Put it in a phone without eSIM support and you can still install Saily; Saily's docs name eSIM.me." } },
  激活码: { tip: "手动装 eSIM 时要输入的那串字，和 SM-DP+ 地址一起在 Saily App 里能看到。安卓上一般以 LPA:1$ 开头。", wiki: "install-code", en: { label: "activation code", tip: "The code you type in to install an eSIM by hand, shown in the Saily app with the SM-DP+ address. On Android it usually starts with LPA:1$." } },
  "SM-DP+ 地址": { tip: "手动装 eSIM 时和激活码一起填的一串地址，Saily App 的「查看说明」里能看到。看它还能分出你的 eSIM 是 Webbing 还是 1GLOBAL。", wiki: "install-code", en: { label: "SM-DP+ address", tip: "The address you enter along with the activation code when installing by hand; the Saily app shows it under View instructions. It also tells you whether your eSIM is Webbing or 1GLOBAL." } },
  激活: { tip: "套餐开始生效、开始算有效期的那一刻：你到了它覆盖的国家，连上当地网络的时候。装好不等于激活。", wiki: "activation", en: { label: "activation", tip: "The moment your plan starts and its validity period begins: when you're in a covered country and connect to a local network. Installing isn't activating." } },
  漫游: { tip: "出了你运营商的范围还用手机网络。Saily 的 eSIM 要打开数据漫游才能在国外上网；国内的卡把它关掉，免得被收漫游费。", wiki: "roaming", en: { label: "roaming", tip: "Using mobile data outside your carrier's area. The Saily eSIM needs data roaming on to work abroad; turn it off for your home SIM to avoid charges." } },
  数据漫游: { tip: "手机设置里的一个开关。Saily 这条线要开着，Saily 不为此另收钱；国内那张卡要关着。", wiki: "roaming", en: { label: "data roaming", tip: "A switch in your phone's settings. Keep it on for the Saily line, which costs nothing extra, and off for your home SIM." } },
  APN: { tip: "手机连移动数据用的入口设置。大多数 Saily eSIM 是 wbdata；有信号却上不了网时，常常是它没设对。", wiki: "apn", en: { label: "APN", tip: "The setting your phone uses to reach mobile data. Most Saily eSIMs use wbdata, and it's often the culprit when you have signal but no internet." } },
  ICCID: { tip: "SIM 卡的唯一序列号，一般 18 到 22 位，eSIM 也有。换一张卡，它就跟着变。", wiki: "iccid-eid", en: { label: "ICCID", tip: "A SIM card's unique serial number, usually 18 to 22 digits. eSIMs have one too, and a new card means a new one." } },
  EID: { tip: "手机里 eSIM 芯片的编号。找 Saily 客服排查问题时，他们会要一张它的截图。", wiki: "iccid-eid", en: { label: "EID", tip: "The ID number of your phone's eSIM chip. Saily support asks for a screenshot of it when they help you troubleshoot." } },
  流量套餐: { tip: "Saily 卖的就是它：一个目的地、一份流量、一段有效期。过了有效期，剩下的流量就作废了。", wiki: "data-plan", en: { label: "data plan", tip: "What Saily sells: data for one destination, valid for a set time. Whatever's left when it expires is gone." } },
  区域套餐: { tip: "一个套餐管好几个国家，但只管它清单上的那些，买之前点开清单看看。", wiki: "data-plan", en: { label: "regional plan", tip: "One plan for several countries, but only the ones on its list, so check the list before you buy." } },
  无限流量套餐: { tip: "流量不限，可每天有一份高速额度；用完以后，当天降到大约 1 Mbps。", wiki: "data-plan", en: { label: "Unlimited plan", tip: "No data cap, but a daily high-speed allowance; once it's used, you're at about 1 Mbps for the rest of the day." } },
  超级套餐: { tip: "Saily 的全球套餐（Ultra），覆盖 121 个目的地，按月订阅，还附带一些旅行和安全方面的权益。", wiki: "data-plan", en: { label: "Ultra", tip: "Saily's Global plan, covering 121 destinations on a monthly subscription, with some travel and security perks on top." } },
  自动充值: { tip: "流量用完时自动再买一份，可以只续一次，也可以每次都续；随时能在 App 里取消。", wiki: "top-up", en: { label: "Auto Top-Up", tip: "Buys more data automatically when you run out, once or every time. You can cancel it in the app anytime." } },
  热点: { tip: "让旁边的电脑、平板借你手机的网。走的是 eSIM 的流量，和手机自己用的一样算。", wiki: "hotspot", en: { label: "hotspot", tip: "Lets a nearby laptop or tablet use your phone's connection. It comes out of your eSIM's data, the same as your phone's own use." } },
  共享套餐: { tip: "一份流量最多分给 5 个人，每人在自己的手机上领取。超级套餐和无限流量套餐不能分享。", wiki: "family-plan", en: { label: "Family Plan", tip: "One plan shared by up to 5 people, each claiming it on their own phone. Ultra and Unlimited plans can't be shared." } },
  电话号码套餐: { tip: "给 Saily eSIM 加的一个美国 +1 号码，能打电话、收发短信；通话按分钟包计，接电话也扣分钟。", wiki: "phone-number", en: { label: "phone number plan", tip: "A +1 US number added to your Saily eSIM for calls and texts. Calls come in minute packages, and answering uses minutes too." } },
  "KYC 实名认证": { tip: "开通 Saily 电话号码前的身份验证。没通过之前，号码不会给你，也用不了。", wiki: "kyc", en: { label: "KYC verification", tip: "The identity check before you get a Saily phone number. Until it's done, the number isn't shown to you or switched on." } },
  验证码: { tip: "App 登录、绑定时发到手机上的一次性密码（OTP、2FA）。Saily 号码大多收得到，有些银行和支付应用不收。", wiki: "otp", en: { label: "verification code", tip: "The one-time code apps text you to sign in or link an account (OTP, 2FA). Saily numbers get most of them, but some banks and payment apps refuse them." } },
  VoIP: { tip: "互联网电话技术。Saily 号码的运营商用的是它，所以有些服务会把号码认成 VoIP 号码。", wiki: "otp", en: { label: "VoIP", tip: "Internet-based phone technology. Saily's number carrier uses it, so some services label the number as VoIP." } },
  抵用金: { tip: "存在 Saily 账户里、买套餐时能抵钱的余额。发放后一年内有效，不能转给别的账户。", wiki: "credits", en: { label: "credits", tip: "Saily credits in your account, which you can put toward a plan. They're valid for a year and can't be moved to another account." } },
  网页防护: { tip: "Saily App 里的一个开关，帮你挡住恶意软件和钓鱼网站。", wiki: "security-features", en: { label: "Web protection", tip: "A switch in the Saily app that helps block malware and phishing sites." } },
  广告拦截器: { tip: "Saily App 里按 DNS 拦广告的开关，顺便省点流量；和网站同一个域名下的广告拦不住。", wiki: "security-features", en: { label: "Ad Blocker", tip: "A switch in the Saily app that blocks ads at the DNS level and saves a little data; ads on the website's own domain still get through." } },
  虚拟位置: { tip: "把流量绕到另一个国家的服务器，网站看到的是那里的 IP。改的不是 GPS，也不会让你匿名。", wiki: "security-features", en: { label: "virtual location", tip: "Routes your traffic through a server in another country, so sites see that IP. It doesn't change your GPS or make you anonymous." } },
};
