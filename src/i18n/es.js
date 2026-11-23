// es（Español，中性西语，用 tú）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照官方帮助中心西语版（docs/sources/raw/official/es/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Saily para principiantes",
    desc: "Una guía no oficial de Saily: consigue un número de EE. UU. (+1) propio para registrarte en apps y recibir códigos de verificación, instálalo incluso sin eSIM, soluciona códigos que no llegan y conserva el número, con palabras sencillas. También datos para viajar al extranjero.",
    skip: "Ir al contenido",
    menu: "Abrir menú",
    search: "Buscar en la guía",
    searchPh: "Busca lecciones, pasos, how-tos, términos…",
    searchEmpty: "No hay resultados. Prueba con otra palabra",
    look: "Apariencia",
    lang: "Idioma",
    repo: "Esta guía en GitHub",
    repoMore: "Más: el Centro de ayuda de Saily",
    repoDefault: "Predeterminado",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Saily 官方帮助中心）
    repos: [
      ["Esta guía", "El código de esta guía; deja aquí tus comentarios"],
      ["Centro de ayuda de Saily", "La referencia oficial sobre funciones y precios"],
    ],
    navLabel: "Navegación del sitio",
    start: "Empezar",
    home: "Inicio",
    // 导航：拿美国号码的六步（英文页）、出国上网的新手三课（本语言）
    route: "Número de EE. UU.: de la compra a los códigos (en inglés)",
    lessons: "Datos en el extranjero: tres lecciones",
    more: "Más (en inglés)",
    main: "Guía completa: 8 pasos",
    howto: "How-to: cómo hacerlo",
    wiki: "Wiki: qué es cada cosa",
    faq: "Preguntas frecuentes",
    toc: "En esta página",
    tocLabel: "En esta página",
    hintMain: "Guía completa (en inglés)",
    hintLesson: "Para principiantes",
    hintFaq: "Preguntas frecuentes (en inglés)",
    hintOther: "En inglés",
    section: "Sección",
    // {docs} 和 {github} 会换成链接
    // 页脚里 {docs} 那个链接上的字（官方帮助中心）
    docsLink: "Centro de ayuda oficial",
    foot: "Una guía no oficial de Saily, sin relación con Saily ni con Nord Security. Para funciones y precios, la referencia son el {docs} y la app de Saily. El código de esta guía y los comentarios están en {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Apariencia", theme: "Tema", light: "Claro", dark: "Oscuro", system: "Sistema",
      corners: "Esquinas redondeadas", cornersDesc: "Si lo desactivas, todas las esquinas quedan rectas",
      accent: "Color de acento", accentDesc: "Se usa en botones, selección y foco",
    },
  },

  home: {
    h1: "Un número de EE. UU. (+1) propio para registrarte y recibir códigos de verificación",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Muchas apps piden verificar un número de teléfono al registrarte o iniciar sesión, y a muchos números fuera de EE. UU. nunca les llega el código. Saily, una eSIM de Nord Security (la empresa de NordVPN), también vende un número de EE. UU. (+1). Se asigna bajo el Plan de Numeración de América del Norte y, mientras mantengas el servicio activo, es solo tuyo para códigos de verificación, SMS y llamadas. No necesitas un plan de datos antes y puedes comprarlo en la web. ", "Esta es una guía no oficial", ", sin relación con Saily ni con Nord Security. Para funciones y precios, la referencia son el Centro de ayuda oficial y la app."],
    // 两个按钮：极速拿号（英文页）、完整教程第 5 步（英文页）
    cta: ["Número rápido: cómpralo en la web en 3 minutos (en inglés)", "Entiende primero cómo funciona el número (en inglés)"],
    ctaNote: "Después de pagar, verificas tu identidad en la app de Saily antes de que te asignen el número. El número va en una eSIM, y hay una solución incluso si tu teléfono no tiene eSIM.",
    // [链接上的字](键) 会换成链接，键原样保留：otp、keep 是官方帮助中心，takeover、jason 是网友的中文帖子，apps 是本站英文页
    painH: "¿Te pasa alguna de estas cosas?",
    PAIN: [
      "Te registras en una app como Telegram o WhatsApp, pones tu número de siempre y el código nunca llega, o la app te dice que no acepta ese número.",
      "Pagaste un poco en una web de recepción de códigos, pero el número nunca fue tuyo. Después pasó a otra persona, que se registró de nuevo con ese mismo número y se quedó con tu cuenta ([un caso real, en chino](takeover)).",
      "El número vinculado a tu cuenta se canceló o venció, así que al iniciar sesión en un teléfono nuevo el código no llega a ningún lado y pierdes la cuenta.",
      "Miraste cómo conseguir una SIM de otro país, pero la cuota mensual no es barata y el registro es cada vez más difícil. Un usuario que intentó sacar una SIM de EE. UU. se quedó atascado en el registro ([publicación, en chino](jason)).",
      "Por fin tienes un número de EE. UU., lo vinculas y aun así algunas apps no te mandan el código, sin saber si el problema es el número o tu teléfono.",
    ],
    vsH: "En qué se diferencia de una web de recepción de códigos",
    vsP: "Una web de recepción de códigos solo te presta un número. Un número de Saily es tuyo. Eso es lo que importa para cualquier cuenta que vayas a seguir usando y puedas necesitar recuperar después.",
    // 表头：第一格空着
    vsHead: ["", "Web de recepción de códigos", "Número de EE. UU. de Saily"],
    // VS：每行 [这一行比什么, 接码平台, Saily]
    VS: [
      ["De quién es el número", "De la web. Al poco tiempo, el mismo número recibe códigos para otra persona", "Mientras tu servicio siga activo, está asignado solo a ti ([Centro de ayuda](otp))"],
      ["¿Seguirás recibiendo códigos dentro de seis meses?", "Normalmente no. Hace tiempo que el número pasó a otra persona", "Sí, mientras siga renovándose. Si vence, se guarda durante 30 días para que puedas recuperarlo ([Centro de ayuda](keep))"],
      ["Qué necesitas", "Sin documento de identidad; pagas por código", "Verificación de identidad, una suscripción con renovación y un dispositivo compatible con eSIM"],
    ],
    routeH: "De comprar el número a recibir códigos, en seis pasos",
    routeP: "Sigue el orden. Cada paso enlaza a la página que lo explica en detalle (en inglés). Todo se hace en la web y en la app de Saily, sin necesidad de viajar.",
    routeLabel: "Conseguir un número de EE. UU.: 6 pasos",
    codesH: "Hablemos claro: qué códigos llegan",
    codesP: "Es un número real de EE. UU., pero el operador que hay detrás funciona sobre red de internet (VoIP), así que algunos servicios que comprueban el tipo de número lo detectan como VoIP y no envían códigos. La propia Saily lo advierte. De mayor a menor seguridad:",
    // CODES：每行 [把握多大, 说明]
    CODES: [
      ["Lista de Saily: suele funcionar", "Códigos de un solo uso (OTP): WhatsApp, Signal, Viber, Airbnb. Verificación en dos pasos (2FA): PayPal, Wise, Venmo y otros. La lista no es exhaustiva ni está garantizada ([Lista de Saily](otp))"],
      ["Pruebas de usuarios: depende", "Telegram, X, Google, Apple ID, ChatGPT y otros. A algunas personas les funciona la misma app y a otras no. Consulta [Qué apps aceptan el número de EE. UU. (en inglés)](apps)"],
      ["En China continental", "Un usuario recibió códigos allí a través de una red local en roaming ([publicación, en chino](jason)), pero China continental no aparece en la lista en inglés de Saily de lugares donde funcionan las llamadas, así que es posible que las llamadas no funcionen"],
      ["No cuentes con ello", "Bancos, brókeres y otros servicios financieros similares: Saily indica que algunos no aceptan este tipo de números. Además, el número no te da identidad estadounidense y este sitio no trata sobre abrir cuentas con él"],
    ],
    fitH: "¿Es para ti?", yesH: "Sí, si", noH: "Todavía no, si",
    YES: ["Necesitas un número que reciba códigos por SMS para registrarte o iniciar sesión en apps", "Son cuentas que vas a usar a largo plazo y quieres un número que sea solo tuyo y se siga renovando", "Puedes verificar tu identidad con un documento válido. Para documentos emitidos en China hacen falta pasaporte y documento nacional de identidad", "Tu teléfono es compatible con eSIM, o no te importa añadir una tarjeta física que admite eSIM"],
    NO: ["Lo quieres para verificar cuentas bancarias, de inversión o de pagos de EE. UU.", "Necesitas MMS o desvío de llamadas, que el número no admite", "Tu documento de identidad es de un país que Saily todavía no puede verificar, como Rusia, Irán o Corea del Norte", "No quieres una suscripción con renovación. El número solo sigue siendo tuyo mientras se renueva"],
    tracksH: "Qué más cubre este sitio",
    tracksP: "Además del número, el servicio principal de Saily son los datos para viajar al extranjero. La guía completa lo explica para cuando lo necesites.",
    // 完整教程目前只有英文和中文
    devNote: "Por ahora, la guía completa está en inglés (y en chino). Las tres lecciones para principiantes están en tu idioma.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE：号码、没有 eSIM 的手机、出国流量）
    TRACKS: [
      ["El número de EE. UU. (+1)", "Qué documento pide la verificación, qué hacer si no llegan los códigos, por qué contestar llamadas consume minutos, por qué los SMS deben ser de texto simple y cómo conservar o cambiar el número."],
      ["Un teléfono sin eSIM", "Muchos teléfonos vendidos en China continental no tienen eSIM. La solución de Saily es una tarjeta física que admite eSIM: va en la ranura de la SIM y en ella instalas Saily."],
      ["Datos en el extranjero", "Compras un plan de datos para tu destino, lo instalas y funciona al aterrizar. Si es tu primera vez, las tres lecciones para principiantes te llevan paso a paso."],
    ],
    lessonsLink: "Datos en el extranjero: tres lecciones para principiantes",
    tracksLabel: "Pasos correspondientes de la guía completa",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Paso {n}: {title}",
  },

  // 拿美国号码的六步在导航、首页里的标题和简介（顺序固定，链接都去英文页；见 nav.js 的 ROUTE）
  route: [
    { title: "Comprueba si tu teléfono admite eSIM", sum: "El número va en una eSIM. Si tu teléfono no tiene eSIM, sirve una tarjeta eSIM extraíble" },
    { title: "Compra el número en la web", sum: "No hace falta plan de datos. En la página del número, elige «Get Number Only», selecciona el periodo de renovación y paga" },
    { title: "Verifica tu identidad para recibir el número", sum: "Sube tu documento de identidad en la app. Con documentos chinos necesitas pasaporte y documento nacional de identidad. Al aprobarse, aparece tu número" },
    { title: "Instala la eSIM y recibe tu primer SMS", sum: "Deja que la app la instale o escanea el código QR, y luego pide a un amigo que te envíe un SMS" },
    { title: "Regístrate y recibe tus códigos", sum: "Mira qué apps envían códigos, cuáles no lo garantizan y qué revisar si alguno no llega" },
    { title: "Conserva el número", sum: "No dejes vencer la renovación ni elimines la eSIM en la app. Si pierdes el número, tus cuentas pierden sus códigos" },
  ],

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 查手机、2 买套餐装好、3 落地上网）
  lessons: [
    { title: "Comprueba que tu teléfono funciona con eSIM", minutes: "5 minutos", sum: "Mira si tu teléfono es compatible con eSIM y qué hacer si no lo es" },
    { title: "Compra un plan de datos e instálalo antes de salir", minutes: "15 minutos", sum: "Elige tu destino en la app de Saily, compra un plan e instala la eSIM con Wi-Fi" },
    { title: "Aterriza, activa los datos y ya tienes internet", minutes: "5 minutos", sum: "Al aterrizar, usa Saily para los datos móviles, activa su roaming de datos y mira cuántos datos te quedan" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para principiantes · lección {n} de {total}",
    prog: "Progreso: lección {n} de {total}",
    nav: "Lección anterior y siguiente",
    prev: "Anterior",
    next: "Siguiente",
    title: "Lección {n}: {title}",
    tldr: "En una frase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Deberías ver", warn: "Ojo", no: "No hagas esto", tip: "Consejo" },
    copyTitle: "Copia esto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ilustración: más o menos lo que verás",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "¿Algo de esta página no está claro, o no funcionó como se explica?",
      gh: "Cuéntalo en GitHub",
      faq: [". O revisa antes las ", "preguntas frecuentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Preguntas y comentarios",
      p: "¿Te atascaste en un paso, encontraste algo poco claro o tienes un consejo de viaje que vale la pena compartir? Tráelo a GitHub. Las preguntas que más se repiten terminan dentro de la guía. Puedes escribir en tu idioma.",
      faq: ["Antes de preguntar, revisa las ", "preguntas frecuentes", ", porque muchas respuestas ya están ahí."],
      btn: "Pregunta o comenta en GitHub",
      x: "El autor está en X",
      privacy: "Antes de enviar capturas de pantalla, tapa tu número de teléfono, el EID, el ICCID, los códigos QR, los códigos de activación y los datos de tu cuenta.",
    },
  },

  // 图示的界面文字
  figs: { ui: { label: "Diagrama", replay: "Ver de nuevo" } },
};
