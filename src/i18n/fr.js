// fr（Français）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 英文底稿：以后加的非全站语言，全部文字都照这个结构写（src/i18n/<语言>.js），缺的键显示这里的英文。
// {名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
// 首页文字和 views/Home.astro 的 EN 一样（完整教程按钮多写了「English」）。
export default {
  ui: {
    brand: "Saily pour débutants",
    desc: "Un guide non officiel de Saily, avec des mots simples : obtenir votre propre numéro américain en +1 pour les inscriptions et les codes de vérification, l'installer même sans eSIM, régler les codes qui n'arrivent pas et garder le numéro. Et aussi des données pour vos voyages à l'étranger.",
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
    // 导航：拿美国号码的六步（英文页）、出国上网的新手三课（本语言）
    route: "Numéro américain : de l'achat aux codes (en anglais)",
    lessons: "Données à l'étranger : trois leçons",
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
    h1: "Votre propre numéro américain en +1, pour vos inscriptions et codes de vérification",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Beaucoup d'applications demandent de vérifier un numéro de téléphone à l'inscription ou à la connexion, et de nombreux numéros hors États-Unis ne reçoivent jamais le code. Saily, une eSIM de Nord Security (l'entreprise derrière NordVPN), vend aussi un numéro américain en +1. Il est attribué dans le cadre du Plan de numérotation nord-américain et, tant que votre service reste actif, il n'appartient qu'à vous, pour les codes de vérification, les SMS et les appels. Pas besoin de forfait de données avant, et vous pouvez l'acheter sur le site web. ", "C'est un guide non officiel", ", sans lien avec Saily ni Nord Security. Pour les fonctions et les prix, ce sont le centre d'aide officiel et l'application qui font foi."],
    // 两个按钮：极速拿号（英文页）、完整教程第 5 步（英文页）
    cta: ["Numéro express : l'acheter sur le site en 3 minutes (en anglais)", "Comprendre le numéro d'abord (en anglais)"],
    ctaNote: "Après le paiement, vous vérifiez votre identité dans l'application Saily avant que le numéro soit attribué. Le numéro fonctionne sur une eSIM, et il existe une solution même si votre téléphone n'en a pas.",
    // [链接上的字](键) 会换成链接，键原样保留：otp、keep 是官方帮助中心，takeover、jason 是网友的中文帖子，apps 是本站英文页
    painH: "Bloqué sur l'un de ces points ?",
    PAIN: [
      "Vous vous inscrivez sur une application comme Telegram ou WhatsApp avec votre numéro habituel, et le code n'arrive jamais, ou l'application refuse ce numéro.",
      "Vous avez payé un peu sur un site de réception de SMS pour un code, mais le numéro ne vous a jamais appartenu. Plus tard, quelqu'un d'autre l'a reçu, s'est réinscrit avec le même numéro et a pris votre compte ([un cas réel, en chinois](takeover)).",
      "Le numéro lié à votre compte a été résilié ou a expiré : quand vous vous connectez sur un nouveau téléphone, le code part dans le vide et le compte est perdu.",
      "Vous avez envisagé une carte SIM d'un autre pays, mais l'abonnement mensuel coûte cher et l'inscription devient de plus en plus compliquée. Un utilisateur qui essayait d'obtenir une SIM américaine s'est retrouvé bloqué à l'inscription ([témoignage, en chinois](jason)).",
      "Vous avez enfin un numéro américain, vous le liez, mais certaines applications refusent toujours d'envoyer le code, et impossible de savoir si ça vient du numéro ou de votre téléphone.",
    ],
    vsH: "La différence avec un site de réception de SMS",
    vsP: "Un site de réception de SMS vous loue un numéro. Un numéro Saily est à vous. C'est ce qui compte pour tout compte que vous voulez garder et pouvoir récupérer plus tard.",
    // 表头：第一格空着
    vsHead: ["", "Site de réception de SMS", "Numéro américain Saily"],
    // VS：每行 [这一行比什么, 接码平台, Saily]
    VS: [
      ["À qui appartient le numéro", "Au site. Très vite, le même numéro reçoit des codes pour quelqu'un d'autre", "Tant que votre service reste actif, il vous est attribué exclusivement ([Centre d'aide](otp))"],
      ["Pouvez-vous encore recevoir des codes dans six mois", "En général non. Le numéro est passé à quelqu'un d'autre depuis longtemps", "Oui, tant qu'il se renouvelle. S'il expire, il reste réservé 30 jours pour que vous puissiez le récupérer ([Centre d'aide](keep))"],
      ["Ce qu'il vous faut", "Aucune pièce d'identité, paiement au code", "Une vérification d'identité, un abonnement renouvelable et un appareil compatible eSIM"],
    ],
    routeH: "De l'achat du numéro aux codes de vérification, en six étapes",
    routeP: "Suivez l'ordre. Chaque étape mène vers la page qui l'explique en détail (en anglais). Tout se fait sur le site web et dans l'application Saily, sans avoir besoin de voyager.",
    routeLabel: "Obtenir un numéro américain : 6 étapes",
    codesH: "Parlons franchement : quels codes arrivent vraiment",
    codesP: "C'est un véritable numéro américain, mais l'opérateur derrière fonctionne sur un réseau basé sur Internet (VoIP). Certains services qui vérifient le type de numéro le repèrent donc comme VoIP et refusent d'envoyer un code. Saily le dit lui-même. Du plus sûr au moins sûr :",
    // CODES：每行 [把握多大, 说明]
    CODES: [
      ["Liste de Saily : fonctionne généralement", "Codes à usage unique (OTP) : WhatsApp, Signal, Viber, Airbnb. Codes à deux facteurs (2FA) : PayPal, Wise, Venmo et d'autres. La liste n'est ni exhaustive ni garantie ([Liste de Saily](otp))"],
      ["Retours d'utilisateurs : mitigés", "Telegram, X, Google, Apple ID, ChatGPT et d'autres. Une même application fonctionne pour certains et pas pour d'autres. Voir [Quelles applications acceptent le numéro américain (en anglais)](apps)"],
      ["En Chine continentale", "Un utilisateur y a reçu des codes via un réseau local en itinérance ([témoignage, en chinois](jason)), mais la Chine continentale ne figure pas sur la liste en anglais de Saily des endroits où les appels fonctionnent ; les appels risquent donc de ne pas passer"],
      ["Ne comptez pas dessus", "Banques, courtiers et services financiers du même genre : Saily précise que certains n'acceptent pas ce type de numéro. Ce numéro ne vous donne pas non plus d'identité américaine, et ce site ne traite pas de l'ouverture de comptes avec"],
    ],
    fitH: "Est-ce pour vous ?", yesH: "Oui, si", noH: "Pas encore, si",
    YES: ["Vous avez besoin d'un numéro qui reçoit des codes par SMS pour vous inscrire ou vous connecter à des applications", "Vous comptez garder ces comptes, et vous voulez un numéro qui n'appartient qu'à vous et se renouvelle", "Vous pouvez vérifier votre identité avec une pièce valide. Pour une pièce délivrée par la Chine, il faut à la fois un passeport et une carte nationale d'identité", "Votre téléphone est compatible eSIM, ou vous êtes prêt à ajouter une carte physique qui accueille des eSIM"],
    NO: ["Vous le voulez pour vérifier des comptes bancaires, de courtage ou de paiement américains", "Vous avez besoin des MMS ou du renvoi d'appel, que ce numéro ne prend pas en charge", "Votre pièce d'identité vient d'un pays que Saily ne peut pas encore vérifier, comme la Russie, l'Iran ou la Corée du Nord", "Vous ne voulez pas d'un abonnement qui se renouvelle. Le numéro ne reste à vous que tant qu'il est renouvelé"],
    tracksH: "Ce que ce site couvre aussi",
    tracksP: "En dehors du numéro, le métier principal de Saily reste les données pour vos voyages à l'étranger. Le guide complet vous l'explique pour le jour où vous en aurez besoin.",
    // 完整教程目前只有英文和中文
    devNote: "Le guide complet n'existe pour l'instant qu'en anglais (et en chinois). Les trois leçons débutant sont en français.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE：号码、没有 eSIM 的手机、出国流量）
    TRACKS: [
      ["Le numéro américain en +1", "Quelles pièces d'identité il faut pour la vérification, que faire quand les codes n'arrivent pas, pourquoi répondre à un appel consomme des minutes, pourquoi les SMS doivent rester en texte simple, et comment garder ou changer de numéro."],
      ["Un téléphone sans eSIM", "Beaucoup de téléphones vendus en Chine continentale n'ont pas d'eSIM. La réponse de Saily, c'est une carte physique qui accueille des eSIM : elle se glisse dans l'emplacement SIM, et vous y installez Saily."],
      ["Des données à l'étranger", "Achetez un forfait de données pour votre destination, installez-le, et il fonctionne dès l'atterrissage. Si c'est votre première fois, les trois leçons débutant vous guident jusqu'au bout."],
    ],
    lessonsLink: "Données à l'étranger : trois leçons débutant",
    tracksLabel: "Les étapes correspondantes du guide complet",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Étape {n} : {title}",
  },

  // 拿美国号码的六步在导航、首页里的标题和简介（顺序固定，链接都去英文页；见 nav.js 的 ROUTE）
  route: [
    { title: "Vérifier que votre téléphone accepte l'eSIM", sum: "Le numéro fonctionne sur une eSIM. Si votre téléphone n'en a pas, une carte eSIM amovible fait l'affaire" },
    { title: "Acheter le numéro sur le site web", sum: "Pas besoin de forfait de données. Sur la page du numéro, choisissez « Get Number Only », la durée de renouvellement, puis payez" },
    { title: "Vérifier votre identité pour obtenir le numéro", sum: "Envoyez votre pièce d'identité dans l'application. Pour la Chine, il faut passeport et carte d'identité. Le numéro s'affiche une fois la vérification validée" },
    { title: "Installer l'eSIM et recevoir votre premier SMS", sum: "Laissez l'application l'installer ou scannez le code QR, puis demandez à un ami de vous envoyer un SMS" },
    { title: "Vous inscrire et recevoir vos codes", sum: "Voyez quelles applications envoient des codes, lesquelles ne le garantissent pas, et quoi vérifier quand un code n'arrive pas" },
    { title: "Garder le numéro", sum: "Ne laissez pas le renouvellement expirer et ne supprimez pas l'eSIM dans l'application. Si vous perdez le numéro, vos comptes perdent leurs codes" },
  ],

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
