// de（Deutsch）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Saily für Einsteiger",
    desc: "Eine inoffizielle Anleitung zu Saily in einfachen Worten: eine eigene US-Nummer mit +1 für App-Anmeldungen und Verifizierungscodes holen, auch ohne eSIM installieren, ausbleibende Codes beheben und die Nummer behalten. Dazu mobile Daten für Auslandsreisen.",
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
    // 导航：拿美国号码的六步（英文页）、出国上网的新手三课（本语言）
    route: "US-Nummer holen: vom Kauf bis zum Code (Englisch)",
    lessons: "Daten im Ausland: drei Lektionen",
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
    h1: "Eine eigene US-Nummer mit +1, zum Anmelden und für Verifizierungscodes",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Viele Apps wollen beim Registrieren oder Anmelden eine Telefonnummer bestätigen, und viele Nummern von außerhalb der USA bekommen den Code nie. Saily, eine eSIM von Nord Security (der Firma hinter NordVPN), verkauft auch eine US-Nummer mit +1. Sie wird im Rahmen des North American Numbering Plan vergeben und ist nur dir zugewiesen, solange dein Dienst aktiv bleibt – für Verifizierungscodes, SMS und Anrufe. Du brauchst dafür nicht erst ein Datenpaket und kannst sie einfach auf der Website kaufen. ", "Das ist eine inoffizielle Anleitung", ", ohne Verbindung zu Saily oder Nord Security. Für Funktionen und Preise sind das offizielle Hilfe-Center und die App maßgeblich."],
    // 两个按钮：极速拿号（英文页）、完整教程第 5 步（英文页）
    cta: ["Schnell zur Nummer: in 3 Minuten auf der Website kaufen (Englisch)", "Die Nummer erst mal verstehen (Englisch)"],
    ctaNote: "Nach dem Bezahlen verifizierst du deine Identität in der Saily-App, erst dann wird dir die Nummer zugewiesen. Die Nummer liegt auf einer eSIM – und es gibt auch eine Lösung, wenn dein Handy keine eSIM hat.",
    // [链接上的字](键) 会换成链接，键原样保留：otp、keep 是官方帮助中心，takeover、jason 是网友的中文帖子，apps 是本站英文页
    painH: "Hängst du bei einem dieser Punkte fest?",
    PAIN: [
      "Du meldest dich bei einer App wie Telegram oder WhatsApp an, gibst deine eigene Nummer ein, und der Code kommt nie an – oder die App sagt, sie akzeptiert diese Nummer nicht.",
      "Du hast bei einem SMS-Empfangsdienst ein wenig für einen Code bezahlt, aber die Nummer gehörte nie dir. Später ging sie an jemand anderen, der sich mit derselben Nummer neu anmeldete und dein Konto übernahm ([ein echter Fall, auf Chinesisch](takeover)).",
      "Die Nummer in deinem Konto wurde gekündigt oder ist abgelaufen. Wenn du dich auf einem neuen Handy anmeldest, geht der Code ins Leere und das Konto ist weg.",
      "Du hast überlegt, dir eine SIM aus einem anderen Land zu holen, aber die Grundgebühr ist nicht günstig und die Anmeldung wird immer schwieriger. Ein Nutzer, der eine US-SIM wollte, blieb schon bei der Registrierung hängen ([Beitrag, auf Chinesisch](jason)).",
      "Du hast endlich eine US-Nummer, hinterlegst sie, und manche Apps schicken trotzdem keinen Code – und du erkennst nicht, ob es an der Nummer oder an deinem Handy liegt.",
    ],
    vsH: "Der Unterschied zu einem SMS-Empfangsdienst",
    vsP: "Ein SMS-Empfangsdienst vermietet dir eine Nummer. Eine Saily-Nummer gehört dir. Genau das zählt bei jedem Konto, das du dauerhaft nutzt und später vielleicht wiederherstellen musst.",
    // 表头：第一格空着
    vsHead: ["", "SMS-Empfangsdienst", "Saily US-Nummer"],
    // VS：每行 [这一行比什么, 接码平台, Saily]
    VS: [
      ["Wem die Nummer gehört", "Dem Dienst. Schon bald empfängt dieselbe Nummer Codes für jemand anderen", "Solange dein Dienst aktiv bleibt, ist sie nur dir zugewiesen ([Hilfe-Center](otp))"],
      ["Bekommst du in sechs Monaten noch Codes?", "Meistens nicht. Die Nummer gehört längst jemand anderem", "Ja, solange sie sich verlängert. Läuft sie ab, bleibt sie 30 Tage lang reserviert, damit du sie dir zurückholen kannst ([Hilfe-Center](keep))"],
      ["Was du brauchst", "Keinen Ausweis, Bezahlung pro Code", "Eine Identitätsprüfung, ein Abo mit Verlängerung und ein Gerät, das eine eSIM nutzen kann"],
    ],
    routeH: "Vom Kauf der Nummer bis zum Code-Empfang, in sechs Schritten",
    routeP: "Geh der Reihe nach vor. Jeder Schritt verlinkt auf die Seite mit allen Details (auf Englisch). Alles läuft über die Website und die Saily-App – du musst dafür nicht verreisen.",
    routeLabel: "US-Nummer holen: 6 Schritte",
    codesH: "Klartext: Welche Codes ankommen",
    codesP: "Es ist eine echte US-Nummer, aber der Netzbetreiber dahinter nutzt Internettelefonie (VoIP). Manche Dienste prüfen die Art der Nummer, erkennen sie als VoIP und schicken keinen Code. Das sagt Saily selbst. Von am sichersten bis am unsichersten:",
    // CODES：每行 [把握多大, 说明]
    CODES: [
      ["Sailys Liste: klappt meistens", "Einmalcodes (OTP): WhatsApp, Signal, Viber, Airbnb. Zwei-Faktor-Codes (2FA): PayPal, Wise, Venmo und weitere. Die Liste ist nicht vollständig und keine Garantie ([Sailys Liste](otp))"],
      ["Nutzer-Tests: gemischt", "Telegram, X, Google, Apple ID, ChatGPT und andere. Dieselbe App klappt bei manchen und bei anderen nicht. Siehe [Welche Apps die US-Nummer akzeptieren (Englisch)](apps)"],
      ["Auf dem chinesischen Festland", "Ein Nutzer hat dort über ein lokales Roaming-Netz Codes empfangen ([Beitrag, auf Chinesisch](jason)), aber das chinesische Festland steht nicht auf Sailys englischer Liste der Länder für Anrufe – Telefonate klappen also möglicherweise nicht"],
      ["Verlass dich nicht darauf", "Banken, Broker und ähnliche Finanzdienste: Laut Saily akzeptieren manche solche Nummern nicht. Die Nummer verschafft dir auch keine US-Identität, und auf dieser Seite geht es nicht darum, damit Konten zu eröffnen"],
    ],
    fitH: "Passt das zu dir?", yesH: "Ja, wenn", noH: "Noch nicht, wenn",
    YES: ["du eine Nummer brauchst, die SMS-Codes empfängt, um dich bei Apps zu registrieren oder anzumelden", "du die Konten dauerhaft behalten willst und eine Nummer suchst, die nur dir gehört und sich weiter verlängert", "du deine Identität mit einem gültigen Ausweis verifizieren kannst. Bei chinesischen Dokumenten brauchst du sowohl Reisepass als auch Personalausweis", "dein Handy eSIM unterstützt oder du bereit bist, eine physische Karte zu nutzen, auf der eSIMs Platz haben"],
    NO: ["du sie zur Verifizierung bei US-Banken, Brokern oder Zahlungskonten nutzen willst", "du MMS oder Anrufweiterleitung brauchst – beides unterstützt die Nummer nicht", "dein Ausweis aus einem Land stammt, das Saily noch nicht verifizieren kann, zum Beispiel Russland, Iran oder Nordkorea", "du kein Abo mit Verlängerung willst. Die Nummer bleibt nur so lange deine, wie sie sich verlängert"],
    tracksH: "Worum es auf dieser Seite sonst noch geht",
    tracksP: "Neben der Nummer ist Sailys Hauptgeschäft mobiles Internet für Reisen ins Ausland. Die vollständige Anleitung erklärt alles dazu, falls du es brauchst.",
    // 完整教程目前只有英文和中文
    devNote: "Die vollständige Anleitung gibt es vorerst auf Englisch (und Chinesisch). Die drei Einsteiger-Lektionen sind auf Deutsch.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE：号码、没有 eSIM 的手机、出国流量）
    TRACKS: [
      ["Die US-Nummer mit +1", "Welcher Ausweis für die Prüfung nötig ist, was du tun kannst, wenn Codes nicht ankommen, warum auch angenommene Anrufe Minuten verbrauchen, warum SMS nur reinen Text enthalten sollten und wie du die Nummer behältst oder wechselst."],
      ["Ein Handy ohne eSIM", "Viele Handys vom chinesischen Festland haben keine eSIM. Die Lösung von Saily ist eine physische Karte, auf der eSIMs Platz haben: Sie kommt in deinen SIM-Steckplatz, und darauf installierst du Saily."],
      ["Daten im Ausland", "Kauf ein Datenpaket für dein Reiseziel, installier es, und nach der Landung funktioniert es. Wenn es dein erstes Mal ist, führen dich die drei Einsteiger-Lektionen Schritt für Schritt durch alles."],
    ],
    lessonsLink: "Daten im Ausland: drei Einsteiger-Lektionen",
    tracksLabel: "Die passenden Schritte in der vollständigen Anleitung",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Schritt {n}: {title}",
  },

  // 拿美国号码的六步在导航、首页里的标题和简介（顺序固定，链接都去英文页；见 nav.js 的 ROUTE）
  route: [
    { title: "Prüfen, ob dein Handy eSIM kann", sum: "Die Nummer liegt auf einer eSIM. Hat dein Handy keine eSIM, funktioniert eine herausnehmbare eSIM-Karte" },
    { title: "Die Nummer auf der Website kaufen", sum: "Du brauchst kein Datenpaket. Wähl auf der Nummern-Seite „Get Number Only“, leg den Verlängerungszeitraum fest und bezahl" },
    { title: "Identität verifizieren und die Nummer erhalten", sum: "Lad deinen Ausweis in der App hoch. Bei chinesischen Dokumenten brauchst du Reisepass und Personalausweis. Nach der Prüfung erscheint die Nummer" },
    { title: "Die eSIM installieren und die erste SMS empfangen", sum: "Lass die App sie installieren oder scann den QR-Code – und lass dir dann von einem Freund eine SMS schicken" },
    { title: "Anmelden und Codes empfangen", sum: "Schau nach, welche Apps Codes schicken, welche nichts garantieren und was du prüfen kannst, wenn keiner ankommt" },
    { title: "Die Nummer behalten", sum: "Lass die Verlängerung nicht ablaufen und lösch die eSIM nicht in der App. Ist die Nummer weg, bekommen deine Konten keine Codes mehr" },
  ],

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
