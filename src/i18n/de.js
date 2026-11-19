// de（Deutsch）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Saily für Einsteiger",
    desc: "Eine inoffizielle Anleitung zu Saily in einfachen Worten: mobile Daten auf Reisen per eSIM und eine US-Telefonnummer, vom Check deines Handys bis zum Onlinegehen nach der Landung.",
    skip: "Zum Inhalt springen",
    menu: "Menü öffnen",
    search: "Anleitung durchsuchen",
    searchPh: "Lektionen, Schritte, How-tos, Begriffe…",
    searchEmpty: "Nichts gefunden. Probier ein anderes Wort",
    look: "Darstellung",
    lang: "Sprache",
    repo: "Diese Anleitung auf GitHub",
    repoMore: "Mehr: das Saily-Hilfe-Center",
    repoDefault: "Standard",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Saily 官方帮助中心）
    repos: [
      ["Diese Anleitung", "Quellcode dieser Anleitung; Probleme hier melden"],
      ["Saily-Hilfe-Center", "Maßgeblich für Funktionen und Preise"],
    ],
    navLabel: "Seitennavigation",
    start: "Start",
    home: "Startseite",
    lessons: "Einsteigerkurs: hier anfangen",
    more: "Mehr (auf Englisch)",
    main: "Vollständige Anleitung: 8 Schritte",
    howto: "How-to: wie genau",
    wiki: "Wiki: was ist das?",
    faq: "Häufige Fragen",
    toc: "Auf dieser Seite",
    tocLabel: "Auf dieser Seite",
    hintMain: "Vollständige Anleitung (Englisch)",
    hintLesson: "Einsteigerkurs",
    hintFaq: "Häufige Fragen (Englisch)",
    hintOther: "Englisch",
    section: "Abschnitt",
    // {docs} 和 {github} 会换成链接
    // 页脚里 {docs} 那个链接上的字（官方帮助中心）
    docsLink: "offizielle Hilfe-Center",
    foot: "Eine inoffizielle Anleitung zu Saily, ohne Verbindung zu Saily oder Nord Security. Für Funktionen und Preise sind das {docs} und die Saily-App maßgeblich. Quellcode und Feedback zu dieser Anleitung findest du auf {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Darstellung", theme: "Farbschema", light: "Hell", dark: "Dunkel", system: "System",
      corners: "Abgerundete Ecken", cornersDesc: "Aus: Alle Ecken bleiben eckig",
      accent: "Akzentfarbe", accentDesc: "Für Buttons, Auswahl und Fokus",
    },
  },

  home: {
    h1: "Im Ausland online, schon vor der Abreise erledigt",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Saily ist eine Reise-eSIM von Nord Security, der Firma hinter NordVPN. Vor der Reise kaufst du in der App Daten für dein Reiseziel und installierst sie auf deinem Handy. Nach der Landung legst du zwei Schalter um und bist online, ohne am Flughafen erst einen SIM-Schalter suchen zu müssen. Außerdem verkauft Saily separat eine US-Telefonnummer mit +1 für Anrufe und SMS. ", "Das ist eine inoffizielle Anleitung", ", ohne Verbindung zu Saily oder Nord Security. Für Funktionen und Preise sind das offizielle Hilfe-Center und die App maßgeblich."],
    cta: ["Neu hier? Fang hier an", "Schon benutzt? Die vollständige Anleitung (Englisch)"],
    ctaNote: "Der Einsteigerkurs hat drei Lektionen: dein Handy prüfen, vor der Abreise ein Paket kaufen und installieren, und nach der Landung die Daten einschalten.",
    painH: "Kennst du das?",
    PAIN: [
      "Du landest, dein Handy hat kein Internet, du kannst kein Taxi rufen und keine Karte öffnen, also machst du dich auf die Suche nach WLAN.",
      "Du reist mit eingeschalteter Haupt-SIM, und zu Hause wartet eine Roaming-Rechnung auf dich.",
      "Du stehst am Flughafen für eine lokale SIM-Karte an und hast dann Angst, beim Tauschen deine eigene zu verlieren.",
    ],
    lessonsH: "Für den Einstieg reichen drei Lektionen",
    lessonsP: "Lies sie der Reihe nach, zusammen etwa 25 Minuten. Danach weißt du, ob dein Handy eine eSIM nutzen kann, du hast vor der Abreise ein Paket gekauft und installiert, du bist ein paar Minuten nach der Landung online, und du weißt, wie du verhinderst, dass dein Heimanbieter dir Roaming berechnet. Alles andere auf der Seite ist zum Nachschlagen da, wenn du es brauchst.",
    lessonsLabel: "Einsteigerkurs: 3 Lektionen",
    fitH: "Passt das zu dir?", yesH: "Ja, wenn", noH: "Noch nicht, wenn",
    YES: ["du ins Ausland reist und gleich nach der Landung Daten haben willst", "dein Handy eSIM unterstützt oder du bereit bist, eine physische Karte zu kaufen, auf der eSIMs Platz haben", "du eine US-Nummer für Anrufe und SMS willst"],
    NO: ["du diesmal nicht ins Ausland fährst", "Saily an deinem Reiseziel nicht funktioniert. Auf der Liste stehen Belarus, Kuba, Iran, Nordkorea, Russland, Syrien und eingeschränkte Regionen der Ukraine", "du MMS oder Rufumleitung brauchst, denn beides unterstützt die Saily-Telefonnummer nicht"],
    tracksH: "Worum es auf dieser Seite geht",
    tracksP: "Der Einsteigerkurs deckt das Erste davon ab. Für die anderen beiden hat die vollständige Anleitung je einen Schritt, für den Fall, dass du sie brauchst.",
    // 完整教程目前只有英文和中文
    devNote: "Die vollständige Anleitung gibt es vorerst auf Englisch (und Chinesisch).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Daten im Ausland", "Dafür ist Saily da. Du kaufst ein Datenpaket für dein Reiseziel, installierst es auf deinem Handy, und nach der Landung funktioniert es. Die vollständige Anleitung geht Schritt für Schritt durch Paketwahl, eSIM-Installation, Ankunft und Nachkaufen, dazu die anderen Funktionen der App."],
      ["Eine US-Telefonnummer mit +1", "Eine eigene US-Nummer, die Saily separat verkauft, für Anrufe und SMS. Bevor du sie bekommst, bestätigst du deine Identität. Manche Dienste erkennen sie als Internet-Nummer (VoIP), und laut Hilfe-Center akzeptieren bestimmte Banken und Zahlungs-Apps solche Nummern nicht zur Verifizierung. Die meisten Dienste schicken ihre Codes problemlos dorthin."],
      ["Ein Handy ohne eSIM", "Die Lösung von Saily ist eine physische Karte, auf der eSIMs Platz haben. Sie kommt in deinen SIM-Steckplatz, und darauf installierst du Saily."],
    ],
    tracksLabel: "Die passenden Schritte in der vollständigen Anleitung",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Schritt {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 查手机、2 买套餐装好、3 落地上网）
  lessons: [
    { title: "Prüfen, ob dein Handy eSIM kann", minutes: "5 Minuten", sum: "Schau nach, ob dein Handy eSIM unterstützt, und was du tun kannst, wenn nicht" },
    { title: "Ein Datenpaket kaufen und vor der Abreise installieren", minutes: "15 Minuten", sum: "Wähl in der Saily-App dein Reiseziel, kauf ein Paket und installier die eSIM im WLAN" },
    { title: "Landen, Daten einschalten, online sein", minutes: "5 Minuten", sum: "Stell nach der Landung die mobilen Daten auf Saily um, schalte Datenroaming dafür ein und schau nach, wie viel noch übrig ist" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Einsteigerkurs · Lektion {n} von {total}",
    prog: "Fortschritt: Lektion {n} von {total}",
    nav: "Vorherige und nächste Lektion",
    prev: "Zurück",
    next: "Weiter",
    title: "Lektion {n}: {title}",
    tldr: "In einem Satz",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Das solltest du sehen", warn: "Achtung", no: "Lieber nicht", tip: "Tipp" },
    copyTitle: "Zum Kopieren",
    copy: "Kopieren",
    cmdDone: "Befehl kopiert",
    cmdLabel: "Befehl kopieren: {c}",
    reply: "Beispiel: So ungefähr sieht es aus",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Ist auf dieser Seite etwas unklar, oder hat etwas nicht so geklappt wie beschrieben?",
      gh: "Sag es auf GitHub",
      faq: [". Oder schau zuerst bei den ", "häufigen Fragen", " nach."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Fragen und Austausch",
      p: "Hängst du bei einem Schritt fest, ist dir etwas unklar, oder hast du einen Reisetipp, den du teilen möchtest? Bring es auf GitHub. Fragen, die oft kommen, fließen in die Anleitung ein. Du kannst gern auf Deutsch schreiben.",
      faq: ["Bevor du fragst, schau bei den ", "häufigen Fragen", " nach. Viele Antworten stehen schon dort."],
      btn: "Auf GitHub fragen oder diskutieren",
      x: "Der Autor ist auf X",
      privacy: "Bevor du Screenshots schickst, mach deine Telefonnummer, EID, ICCID, QR-Codes, Aktivierungscodes und Kontodaten unkenntlich.",
    },
  },

  // 图示的界面文字
  figs: { ui: { label: "Schaubild", replay: "Nochmal ansehen" } },
};
