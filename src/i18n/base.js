// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Saily for beginners",
    desc: "An unofficial guide to Saily: travel eSIM data and a US phone number, from checking your phone to getting online when you land, in plain words.",
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
    lessons: "Beginner track: start here",
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
    h1: "Get online abroad, sorted before you leave",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Saily is a travel eSIM from Nord Security, the company behind NordVPN. Before your trip you buy a data plan for where you're going and install it from the app, and when you land you turn on data and you're online, with no SIM counter to find at the airport. It also sells a separate +1 US phone number for calls and texts. ", "This is an unofficial guide", ", not affiliated with Saily or Nord Security. For features and prices, the official Help Center and the app are the source of truth."],
    cta: ["Start here if you're new", "Used it already? The full guide (English)"],
    ctaNote: "The beginner track is three lessons: check your phone, buy and install a plan, then turn on data when you land.",
    painH: "Has this happened to you?",
    PAIN: [
      "You land, your phone has no internet, and you can't call a ride or open a map, so you go looking for Wi-Fi.",
      "You travel with your home SIM on and come back to a roaming bill.",
      "You queue at the airport for a local SIM, then worry about losing your own card while you swap.",
    ],
    diffH: "What changes with Saily",
    diffW: "When", diffA: "Buying a local SIM on arrival", diffB: "Installing Saily before you go",
    DIFF: [
      ["Buying", "Find a counter at the airport and queue", "Buy it in the app before you leave"],
      ["Setting up", "Pop out the tray and swap cards", "Install the eSIM from the app"],
      ["Landing", "Buy the card first, then get online", "Turn on data roaming and you're online"],
    ],
    lessonsH: "Beginners need just three lessons",
    lessonsP: "Just read them in order. After these three you'll be online when you land, and everything else on the site is there to look up when you need it.",
    lessonsLabel: "Beginner track: 3 lessons",
    fitH: "Is it for you?", yesH: "Yes, if", noH: "Not yet, if",
    YES: ["You're traveling abroad and want data the moment you land", "Your phone supports eSIM, or you're happy to buy a physical card that holds eSIMs", "You want a US number for calls and texts"],
    NO: ["You're not leaving the country this time", "Saily doesn't work where you're going: check your destination on the official site first", "You need MMS or call forwarding, which the Saily phone number doesn't support"],
    devH: "Once you're comfortable",
    devP: "The full guide goes into each step in more detail. The whole thing is four steps, one line each:",
    // 完整教程目前只有英文和中文
    devNote: "The full guide is in English (and Chinese) for now.",
    // FLOW：每个是 [标题, 说明]，图标和顺序固定
    FLOW: [
      ["Check your phone", "See whether it supports eSIM. If it doesn't, a physical card that holds eSIMs can stand in."],
      ["Buy a plan", "Pick the destination and the data. One country or several, pick by your trip."],
      ["Install the eSIM", "Install it from the app on Wi-Fi before you leave."],
      ["Land and connect", "Switch mobile data to Saily and turn on data roaming for it."],
    ],
    CONN: ["it works", "bought", "landed"],
    stepsLabel: "Full guide: {n} steps",
  },

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
