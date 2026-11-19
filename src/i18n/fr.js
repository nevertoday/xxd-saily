// fr（Français）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Saily pour débutants",
    desc: "Un guide non officiel de Saily, avec des mots simples : l'eSIM de voyage pour avoir des données à l'étranger et le numéro de téléphone américain, de la vérification de votre téléphone jusqu'à la connexion à l'arrivée.",
    skip: "Aller au contenu",
    menu: "Ouvrir le menu",
    search: "Rechercher dans le guide",
    searchPh: "Une leçon, une étape, une fiche, un mot…",
    searchEmpty: "Aucun résultat. Essayez un autre mot",
    look: "Apparence",
    lang: "Langue",
    repo: "Ce guide sur GitHub",
    repoMore: "Et aussi : le centre d'aide Saily",
    repoDefault: "Par défaut",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Saily 官方帮助中心）
    repos: [
      ["Ce guide", "Le code de ce guide ; signalez les problèmes ici"],
      ["Centre d'aide Saily", "C'est lui qui fait foi pour les fonctions et les prix"],
    ],
    navLabel: "Navigation du site",
    start: "Commencer",
    home: "Accueil",
    lessons: "Parcours débutant : commencez ici",
    more: "Pour aller plus loin (en anglais)",
    main: "Guide complet : 8 étapes",
    howto: "Fiches pratiques : comment faire",
    wiki: "Wiki : c'est quoi ?",
    faq: "FAQ",
    toc: "Sur cette page",
    tocLabel: "Sur cette page",
    hintMain: "Guide complet (en anglais)",
    hintLesson: "Parcours débutant",
    hintFaq: "FAQ (en anglais)",
    hintOther: "En anglais",
    section: "Section",
    // {docs} 和 {github} 会换成链接
    // 页脚里 {docs} 那个链接上的字（官方帮助中心）
    docsLink: "centre d'aide officiel",
    foot: "Un guide non officiel de Saily, sans lien avec Saily ni Nord Security. Pour les fonctions et les prix, ce sont le {docs} et l'application Saily qui font foi. Le code de ce guide et vos retours sont sur {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apparence", theme: "Thème", light: "Clair", dark: "Sombre", system: "Système",
      corners: "Coins arrondis", cornersDesc: "Désactivé, tous les coins restent carrés",
      accent: "Couleur d'accent", accentDesc: "Pour les boutons, la sélection et l'élément actif",
    },
  },

  home: {
    h1: "Internet à l'étranger, réglé avant de partir",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Saily est une eSIM de voyage de Nord Security, l'entreprise qui fait NordVPN. Avant le voyage, vous achetez dans l'application des données pour votre destination et vous les installez sur votre téléphone. À l'arrivée, deux réglages suffisent pour être en ligne, sans chercher de guichet de cartes SIM à l'aéroport. Saily vend aussi, à part, un numéro de téléphone américain en +1 pour les appels et les SMS. ", "C'est un guide non officiel", ", sans lien avec Saily ni Nord Security. Pour les fonctions et les prix, ce sont le centre d'aide officiel et l'application qui font foi."],
    cta: ["Vous débutez ? Commencez ici", "Déjà utilisé ? Le guide complet (en anglais)"],
    ctaNote: "Le parcours débutant tient en trois leçons : vérifier votre téléphone, acheter et installer un forfait avant de partir, puis activer les données à l'arrivée.",
    painH: "Ça vous est déjà arrivé ?",
    PAIN: [
      "Vous atterrissez, votre téléphone n'a pas Internet, impossible d'appeler un taxi ou d'ouvrir une carte, alors vous partez à la chasse au Wi-Fi.",
      "Vous voyagez avec votre SIM habituelle allumée, et au retour une facture d'itinérance vous attend.",
      "Vous faites la queue à l'aéroport pour une carte SIM locale, puis vous avez peur de perdre la vôtre au moment de l'échange.",
    ],
    lessonsH: "Pour débuter, trois leçons suffisent",
    lessonsP: "Lisez-les dans l'ordre, environ 25 minutes en tout. À la fin, vous saurez si votre téléphone peut utiliser une eSIM, vous aurez acheté et installé un forfait avant de partir, vous serez en ligne quelques minutes après l'atterrissage, et vous saurez comment éviter que votre opérateur habituel vous facture l'itinérance. Tout le reste du site est là pour être consulté le jour où vous en aurez besoin.",
    lessonsLabel: "Parcours débutant : 3 leçons",
    fitH: "Est-ce pour vous ?", yesH: "Oui, si", noH: "Pas encore, si",
    YES: ["vous partez à l'étranger et voulez des données dès l'atterrissage", "votre téléphone est compatible eSIM, ou vous êtes prêt à acheter une carte physique qui accueille des eSIM", "vous voulez un numéro américain pour les appels et les SMS"],
    NO: ["vous ne quittez pas le pays cette fois-ci", "Saily ne fonctionne pas là où vous allez. Sa liste : Biélorussie, Cuba, Iran, Corée du Nord, Russie, Syrie et les régions d'Ukraine soumises à restrictions", "vous avez besoin des MMS ou du renvoi d'appel, que le numéro de téléphone Saily ne prend pas en charge"],
    tracksH: "Ce que couvre ce site",
    tracksP: "Le parcours débutant couvre le premier point. Pour les deux autres, le guide complet leur consacre une étape chacun, pour le jour où vous en aurez besoin.",
    // 完整教程目前只有英文和中文
    devNote: "Le guide complet n'existe pour l'instant qu'en anglais (et en chinois).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Des données à l'étranger", "C'est le métier de Saily. Vous achetez un forfait de données pour votre destination, vous l'installez sur votre téléphone, et il marche à l'arrivée. Le guide complet reprend étape par étape le choix du forfait, l'installation de l'eSIM, l'arrivée et la recharge, ainsi que les autres fonctions de l'application."],
      ["Un numéro de téléphone américain en +1", "Un numéro américain que Saily vend à part, pour les appels et les SMS. Vous vérifiez votre identité avant de l'obtenir. Certains services le repèrent comme un numéro internet (VoIP), et le centre d'aide indique que certaines banques et applications de paiement n'acceptent pas ce type de numéro pour la vérification. La plupart des services y envoient leurs codes sans problème."],
      ["Un téléphone sans eSIM", "La réponse de Saily, c'est une carte physique qui accueille des eSIM. Elle se glisse dans l'emplacement SIM, et vous y installez Saily."],
    ],
    tracksLabel: "Les étapes correspondantes du guide complet",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Étape {n} : {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 查手机、2 买套餐装好、3 落地上网）
  lessons: [
    { title: "Vérifier que votre téléphone accepte l'eSIM", minutes: "5 minutes", sum: "Regardez si votre téléphone est compatible eSIM, et ce qu'il reste à faire s'il ne l'est pas" },
    { title: "Acheter un forfait et l'installer avant de partir", minutes: "15 minutes", sum: "Choisissez votre destination dans l'application Saily, achetez un forfait et installez l'eSIM en Wi-Fi" },
    { title: "Atterrir, activer les données et être en ligne", minutes: "5 minutes", sum: "Après l'atterrissage, passez les données mobiles sur Saily, activez l'itinérance des données pour cette ligne et regardez ce qu'il vous reste" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Parcours débutant · leçon {n} sur {total}",
    prog: "Progression : leçon {n} sur {total}",
    nav: "Leçon précédente et suivante",
    prev: "Précédente",
    next: "Suivante",
    title: "Leçon {n} : {title}",
    tldr: "En une phrase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Vous devriez voir", warn: "Attention", no: "À éviter", tip: "Astuce" },
    copyTitle: "À copier",
    copy: "Copier",
    cmdDone: "Commande copiée",
    cmdLabel: "Copier la commande : {c}",
    reply: "Illustration : à peu près ce que vous verrez",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Quelque chose n'est pas clair sur cette page, ou ne marche pas comme c'est écrit ?",
      gh: "Dites-le sur GitHub",
      faq: [". Ou jetez d'abord un œil à la ", "FAQ", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Questions et échanges",
      p: "Une étape vous bloque, quelque chose n'est pas clair, ou vous avez une astuce de voyage à partager ? Venez en parler sur GitHub. Les questions qui reviennent le plus souvent finissent dans le guide. Vous pouvez écrire en français.",
      faq: ["Avant de demander, regardez la ", "FAQ", " : beaucoup de réponses y sont déjà."],
      btn: "Poser une question ou en discuter sur GitHub",
      x: "L'auteur est sur X",
      privacy: "Avant d'envoyer des captures d'écran, floutez votre numéro de téléphone, l'EID, l'ICCID, les codes QR, les codes d'activation et les informations de votre compte.",
    },
  },

  // 图示的界面文字
  figs: { ui: { label: "Schéma", replay: "Revoir" } },
};
