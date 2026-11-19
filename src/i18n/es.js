// es（Español，中性西语，用 tú）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照官方帮助中心西语版（docs/sources/raw/official/es/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Saily para principiantes",
    desc: "Una guía no oficial de Saily, la eSIM de datos para viajar que también ofrece un número de teléfono de EE. UU. Desde comprobar tu teléfono hasta tener internet al aterrizar, con palabras sencillas.",
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
    lessons: "Para principiantes: empieza aquí",
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
    h1: "Internet en el extranjero, resuelto antes de salir",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Saily es una eSIM para viajar de Nord Security, la empresa de NordVPN. Antes del viaje compras en la app datos para tu destino y los instalas en el teléfono, y al aterrizar activas dos interruptores y ya tienes internet, sin buscar en el aeropuerto dónde venden tarjetas SIM. También vende aparte un número de teléfono de EE. UU. (+1) para llamadas y SMS. ", "Esta es una guía no oficial", ", sin relación con Saily ni con Nord Security. Para funciones y precios, la referencia son el Centro de ayuda oficial y la app."],
    cta: ["Empieza aquí si es tu primera vez", "¿Ya lo usas? La guía completa (en inglés)"],
    ctaNote: "Para principiantes hay tres lecciones: comprobar tu teléfono, comprar e instalar un plan antes de salir y activar los datos al aterrizar.",
    painH: "¿Te ha pasado algo así?",
    PAIN: [
      "Aterrizas, el teléfono no tiene internet y no puedes pedir un taxi ni abrir un mapa, así que te pones a buscar Wi-Fi.",
      "Viajas con tu SIM de siempre encendida y, al volver, te llega una factura de roaming.",
      "Haces fila en el aeropuerto para comprar una SIM local y, al cambiarla, te preocupa perder la tuya.",
    ],
    lessonsH: "Para empezar bastan tres lecciones",
    lessonsP: "Léelas en orden; en total son unos 25 minutos. Al terminar sabrás si tu teléfono puede usar una eSIM, tendrás un plan comprado e instalado antes de salir, tendrás internet a los pocos minutos de aterrizar y sabrás cómo evitar que tu operador te cobre roaming. Todo lo demás del sitio está para consultarlo cuando lo necesites.",
    lessonsLabel: "Para principiantes: 3 lecciones",
    fitH: "¿Es para ti?", yesH: "Sí, si", noH: "Todavía no, si",
    YES: ["Viajas al extranjero y quieres datos nada más aterrizar", "Tu teléfono es compatible con eSIM, o no te importa comprar una tarjeta física que admite eSIM", "Quieres un número de EE. UU. para llamadas y SMS"],
    NO: ["Esta vez no sales del país", "Saily no funciona en tu destino. Su lista es Bielorrusia, Cuba, Irán, Corea del Norte, Rusia, Siria y las regiones restringidas de Ucrania", "Necesitas MMS o desvío de llamadas, que el número de teléfono de Saily no admite"],
    tracksH: "Qué cubre este sitio",
    tracksP: "Las lecciones para principiantes cubren lo primero. Para las otras dos cosas, la guía completa tiene un paso para cada una, para cuando las necesites.",
    // 完整教程目前只有英文和中文
    devNote: "Por ahora, la guía completa está en inglés (y en chino).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Datos en el extranjero", "Para esto sirve Saily. Compras un plan de datos para tu destino, lo instalas en el teléfono y funciona al llegar. La guía completa explica paso a paso cómo elegir un plan, instalar la eSIM, llegar y recargar datos, además de las otras funciones de la app."],
      ["Un número de teléfono de EE. UU. (+1)", "Un número de EE. UU. que Saily vende aparte, para llamadas y SMS. Antes de recibirlo verificas tu identidad. Algunos servicios lo marcan como número de internet (VoIP), y el Centro de ayuda dice que ciertos bancos y apps de pago no aceptan esos números para verificar. La mayoría de los servicios le envían códigos sin problema."],
      ["Un teléfono sin eSIM", "La solución de Saily es una tarjeta física que admite eSIM. Va en la ranura de la SIM, y en ella instalas Saily."],
    ],
    tracksLabel: "Pasos de la guía completa sobre esto",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Paso {n}: {title}",
  },

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
