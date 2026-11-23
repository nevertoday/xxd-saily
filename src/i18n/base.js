// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样，只是链接写成 [字](键)，链到英文页的地方注明 English。
export default {
  ui: {
    brand: "Saily for beginners",
    desc: "An unofficial guide to Saily: get a +1 US number of your own for app sign-ups and verification codes, install it even without eSIM, fix codes that don't arrive and keep the number, in plain words. Data for trips abroad too.",
    skip: "Skip to content",
    menu: "Open menu",
    search: "Search the guide",
    searchPh: "Search lessons, steps, how-tos, terms…",
    searchEmpty: "Nothing found. Try another word",
    look: "Appearance",
    lang: "Language",
    repo: "This guide on GitHub",
    repoMore: "More: the Saily Help Center",
    repoDefault: "Default",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Saily 官方帮助中心）
    repos: [
      ["This guide", "Source for this guide; file issues here"],
      ["Saily Help Center", "The source of truth for features and prices"],
    ],
    navLabel: "Site navigation",
    start: "Start",
    home: "Home",
    // 导航：拿美国号码的六步（英文页）、出国上网的新手三课（本语言）
    route: "Get a US number: buy to codes (English)",
    lessons: "Data abroad: three lessons",
    more: "More (in English)",
    main: "Full guide: 8 steps",
    howto: "How-to: how exactly",
    wiki: "Wiki: what is it",
    faq: "FAQ",
    toc: "On this page",
    tocLabel: "On this page",
    hintMain: "Full guide (English)",
    hintLesson: "Beginner track",
    hintFaq: "FAQ (English)",
    hintOther: "English",
    section: "Section",
    // {docs} 和 {github} 会换成链接
    // 页脚里 {docs} 那个链接上的字（官方帮助中心）
    docsLink: "official Help Center",
    foot: "An unofficial guide to Saily, not affiliated with Saily or Nord Security. For features and prices, the {docs} and the Saily app are the source of truth. Source and feedback for this guide are on {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Appearance", theme: "Theme", light: "Light", dark: "Dark", system: "System",
      corners: "Rounded corners", cornersDesc: "Off keeps every corner square",
      accent: "Accent", accentDesc: "Used for buttons, selection and focus",
    },
  },

  home: {
    h1: "A +1 US number of your own, for sign-ups and verification codes",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Lots of apps want to verify a phone number when you sign up or log in, and plenty of numbers from outside the US never get the code. Saily, an eSIM from Nord Security (the company behind NordVPN), also sells a +1 US number. It's assigned under the North American Numbering Plan and, as long as your service stays active, it's yours alone, for verification codes, texts and calls. You don't need a data plan first, and you can buy it on the website. ", "This is an unofficial guide", ", not affiliated with Saily or Nord Security. For features and prices, the official Help Center and the app are the source of truth."],
    // 两个按钮：极速拿号（英文页）、完整教程第 5 步（英文页）
    cta: ["Quick number: buy one on the website in 3 minutes (English)", "Understand the number first (English)"],
    ctaNote: "After you pay, you verify your identity in the Saily app before the number is assigned. The number lives on an eSIM, and there's a way even if your phone has none.",
    // [链接上的字](键) 会换成链接，键原样保留：otp、keep 是官方帮助中心，takeover、jason 是网友的中文帖子，apps 是本站英文页
    painH: "Stuck on any of these?",
    PAIN: [
      "You sign up for an app like Telegram or WhatsApp, enter your home number, and the code never comes, or the app says it doesn't accept that number.",
      "You paid a code-receiving site a little for a code, but the number was never yours. Later it went to someone else, who used the same number to sign up again and take your account ([a real case, in Chinese](takeover)).",
      "The number on your account was cancelled or expired, so when you log in on a new phone the code goes nowhere and the account is gone.",
      "You looked at getting a SIM from another country, but the monthly fee isn't small and signing up keeps getting harder. One user trying for a US SIM got stuck at registration ([post, in Chinese](jason)).",
      "You finally have a US number, link it, and some apps still won't send a code, and you can't tell whether it's the number or your phone.",
    ],
    vsH: "How it differs from a code-receiving site",
    vsP: "A code-receiving site rents you a number. A Saily number is yours. That's what matters for any account you'll keep using and may need to recover later.",
    // 表头：第一格空着
    vsHead: ["", "Code-receiving site", "Saily US number"],
    // VS：每行 [这一行比什么, 接码平台, Saily]
    VS: [
      ["Whose number is it", "The site's. Before long, the same number receives codes for someone else", "As long as your service is active, it's assigned to you alone ([Help Center](otp))"],
      ["Can you still get codes in six months", "Usually not. The number has long since gone to someone else", "Yes, while it renews. If it lapses, it's held for 30 days so you can get it back ([Help Center](keep))"],
      ["What you need", "No ID, pay per code", "An identity check, a renewing subscription, and a device that can take an eSIM"],
    ],
    routeH: "From buying the number to getting codes, in six steps",
    routeP: "Go in order. Each step links to the page that covers it in detail (in English). It's all done on the website and in the Saily app, and you don't need to travel.",
    routeLabel: "Getting a US number: 6 steps",
    codesH: "Straight answers: which codes arrive",
    codesP: "It's a real US number, but the carrier behind it runs on internet calling (VoIP), so some services that check number types see it as VoIP and won't send a code. Saily says so itself. From most to least certain:",
    // CODES：每行 [把握多大, 说明]
    CODES: [
      ["Saily's list: usually works", "One-time codes: WhatsApp, Signal, Viber, Airbnb. Two-step codes: PayPal, Wise, Venmo and others. The list isn't complete and isn't a promise ([Saily's list](otp))"],
      ["User tests: mixed", "Telegram, X, Google, Apple ID, ChatGPT and others. The same app works for some people and not others. See [Which apps take the US number (English)](apps)"],
      ["In mainland China", "A user got codes there over a local roaming network ([post, in Chinese](jason)), but mainland China isn't on Saily's English list of places where calls work, so calls may not"],
      ["Don't count on it", "Banks, brokers and similar financial services: Saily says some don't accept numbers like this. The number doesn't give you a US identity either, and this site doesn't cover opening accounts with it"],
    ],
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: ["You need a number that gets text codes to sign up for or log in to apps", "The accounts are for keeps, and you want a number that's yours alone and keeps renewing", "You can verify your identity with valid ID. Chinese-issued IDs need both a passport and an ID card", "Your phone supports eSIM, or you're happy to add a physical card that holds eSIMs"],
    NO: ["You want it for verification on US bank, brokerage or payment accounts", "You need MMS or call forwarding, which the number doesn't support", "Your ID is from a country Saily can't verify yet, such as Russia, Iran or North Korea", "You don't want a renewing subscription. The number only stays yours while it renews"],
    tracksH: "What else this site covers",
    tracksP: "Besides the number, Saily's main business is data for trips abroad. The full guide covers it for when you need it.",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now. The three beginner lessons are in your language.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE：号码、没有 eSIM 的手机、出国流量）
    TRACKS: [
      ["The +1 US number", "What ID the check needs, what to do when codes don't arrive, why answering calls uses minutes, why texts should be plain, and how to keep or change the number."],
      ["A phone without eSIM", "Many phones sold in mainland China have no eSIM. Saily's answer is a physical card that holds eSIMs: it goes in your SIM slot, and you install Saily onto it."],
      ["Data abroad", "Buy a data plan for where you're going, install it, and it works when you land. If it's your first time, the three beginner lessons take you all the way."],
    ],
    lessonsLink: "Data abroad: three beginner lessons",
    tracksLabel: "Matching steps in the full guide",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Step {n}: {title}",
  },

  // 拿美国号码的六步在导航、首页里的标题和简介（顺序固定，链接都去英文页；见 nav.js 的 ROUTE）
  route: [
    { title: "Check your phone can take an eSIM", sum: "The number lives on an eSIM. If your phone has no eSIM, a removable eSIM card works" },
    { title: "Buy the number on the website", sum: "No data plan needed. On the number page, choose Get Number Only, pick a renewal period and pay" },
    { title: "Verify your identity to get the number", sum: "Upload your ID in the app. Chinese IDs need both a passport and an ID card. The number appears once you pass" },
    { title: "Install the eSIM and get your first text", sum: "Let the app install it, or scan the QR code, then have a friend text you" },
    { title: "Sign up and get your codes", sum: "See which apps send codes and which don't promise to, and what to check when one doesn't arrive" },
    { title: "Keep the number", sum: "Don't let the renewal lapse or delete the eSIM in the app. Lose the number and your accounts lose their codes" },
  ],

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 查手机、2 买套餐装好、3 落地上网）
  lessons: [
    { title: "Check your phone works with eSIM", minutes: "5 minutes", sum: "Check whether your phone supports eSIM, and what to do if it doesn't" },
    { title: "Get a data plan and install it before you go", minutes: "15 minutes", sum: "Pick your destination in the Saily app, buy a plan, and install the eSIM over Wi-Fi" },
    { title: "Land, turn on data, and you're online", minutes: "5 minutes", sum: "After you land, switch mobile data to Saily, turn on data roaming for it, and check your usage" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Beginner track · lesson {n} of {total}",
    prog: "Progress: lesson {n} of {total}",
    nav: "Previous and next lesson",
    prev: "Previous",
    next: "Next",
    title: "Lesson {n}: {title}",
    tldr: "In one line",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "You should see", warn: "Heads up", no: "Don't do this", tip: "Tip" },
    copyTitle: "Copy this",
    copy: "Copy",
    cmdDone: "Command copied",
    cmdLabel: "Copy command: {c}",
    reply: "Illustration: roughly what you'll see",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Something on this page unclear, or didn't work as written?",
      gh: "Bring it up on GitHub",
      faq: [". Or check the ", "FAQ", " first."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions and discussion",
      p: "Stuck on a step, found something unclear, or have a trip tip worth sharing? Bring it to GitHub. The questions that come up most get worked into the guide. Writing in your own language is fine.",
      faq: ["Before asking, check the ", "FAQ", ": many answers are already there."],
      btn: "Ask or discuss on GitHub",
      x: "The author is on X",
      privacy: "Before sending screenshots, blur out your phone number, EID, ICCID, QR codes, activation codes and account details.",
    },
  },
};
