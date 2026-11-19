// pt（Português do Brasil，用 você）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照官方帮助中心巴西葡语版（docs/sources/raw/official/pt-br/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Saily para iniciantes",
    desc: "Um guia não oficial da Saily, o eSIM de dados para viagem que também oferece um número de telefone dos EUA. De conferir seu celular a ter internet assim que o avião pousar, em palavras simples.",
    skip: "Pular para o conteúdo",
    menu: "Abrir menu",
    search: "Buscar no guia",
    searchPh: "Busque lições, passos, how-tos, termos…",
    searchEmpty: "Nada encontrado. Tente outra palavra",
    look: "Aparência",
    lang: "Idioma",
    repo: "Este guia no GitHub",
    repoMore: "Mais: a Central de Ajuda da Saily",
    repoDefault: "Padrão",
    // 两个链接：[名字, 一句说明]，顺序固定（本教程、Saily 官方帮助中心）
    repos: [
      ["Este guia", "O código deste guia; mande seus comentários aqui"],
      ["Central de Ajuda da Saily", "A referência oficial sobre recursos e preços"],
    ],
    navLabel: "Navegação do site",
    start: "Começar",
    home: "Início",
    lessons: "Para iniciantes: comece aqui",
    more: "Mais (em inglês)",
    main: "Guia completo: 8 passos",
    howto: "How-to: como fazer",
    wiki: "Wiki: o que é cada coisa",
    faq: "Perguntas frequentes",
    toc: "Nesta página",
    tocLabel: "Nesta página",
    hintMain: "Guia completo (em inglês)",
    hintLesson: "Para iniciantes",
    hintFaq: "Perguntas frequentes (em inglês)",
    hintOther: "Em inglês",
    section: "Seção",
    // {docs} 和 {github} 会换成链接
    // 页脚里 {docs} 那个链接上的字（官方帮助中心）
    docsLink: "Central de Ajuda oficial",
    foot: "Um guia não oficial da Saily, sem relação com a Saily nem com a Nord Security. Para recursos e preços, a referência são a {docs} e o app da Saily. O código deste guia e os comentários ficam no {github}.",
    // 顶栏「外观」面板（UI Kit 的外观设置组）
    appearance: {
      group: "Aparência", theme: "Tema", light: "Claro", dark: "Escuro", system: "Sistema",
      corners: "Cantos arredondados", cornersDesc: "Desligado, todos os cantos ficam retos",
      accent: "Cor de destaque", accentDesc: "Usada em botões, seleção e foco",
    },
  },

  home: {
    h1: "Internet no exterior, resolvida antes de viajar",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["A Saily é um eSIM de viagem da Nord Security, a empresa por trás da NordVPN. Antes da viagem, você compra no app os dados para o seu destino e instala no celular. Quando o avião pousa, você liga dois botões e já está na internet, sem procurar no aeroporto um balcão que venda chip. Ela também vende, à parte, um número de telefone +1 dos EUA para ligações e SMS. ", "Este é um guia não oficial", ", sem relação com a Saily nem com a Nord Security. Para recursos e preços, a referência são a Central de Ajuda oficial e o app."],
    cta: ["Comece aqui se é sua primeira vez", "Já usa? O guia completo (em inglês)"],
    ctaNote: "Para iniciantes são três lições: conferir seu celular, comprar e instalar um plano antes de viajar e ligar os dados quando o avião pousar.",
    painH: "Já aconteceu com você?",
    PAIN: [
      "Você pousa, o celular está sem internet e não dá para chamar um carro nem abrir um mapa, então lá vai você atrás de Wi-Fi.",
      "Você viaja com o chip de sempre ligado e, na volta, chega uma conta de roaming.",
      "Você pega fila no aeroporto para comprar um chip local e, na hora de trocar, fica com medo de perder o seu.",
    ],
    lessonsH: "Para começar, bastam três lições",
    lessonsP: "Leia na ordem; são uns 25 minutos no total. No fim, você vai saber se o seu celular pode usar um eSIM, vai ter um plano comprado e instalado antes de viajar, vai estar na internet poucos minutos depois de pousar e vai saber como evitar que a sua operadora cobre roaming. Todo o resto do site fica aí para consultar quando você precisar.",
    lessonsLabel: "Para iniciantes: 3 lições",
    fitH: "É para você?", yesH: "Sim, se", noH: "Ainda não, se",
    YES: ["Você vai viajar para o exterior e quer dados assim que pousar", "Seu celular é compatível com eSIM, ou você topa comprar um cartão físico que aceita eSIM", "Você quer um número dos EUA para ligações e SMS"],
    NO: ["Desta vez você não vai sair do país", "A Saily não funciona no seu destino. A lista dela é Belarus, Cuba, Irã, Coreia do Norte, Rússia, Síria e as regiões restritas da Ucrânia", "Você precisa de MMS ou de encaminhamento de chamadas, que o número de telefone da Saily não oferece"],
    tracksH: "O que este site cobre",
    tracksP: "As lições para iniciantes cobrem a primeira destas coisas. Para as outras duas, o guia completo tem um passo para cada uma, para quando você precisar.",
    // 完整教程目前只有英文和中文
    devNote: "Por enquanto, o guia completo está em inglês (e em chinês).",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE）
    TRACKS: [
      ["Dados no exterior", "É para isso que a Saily serve. Você compra um plano de dados para o seu destino, instala no celular e ele funciona quando você chega. O guia completo explica passo a passo como escolher um plano, instalar o eSIM, chegar e recarregar, além dos outros recursos do app."],
      ["Um número de telefone +1 dos EUA", "Um número dos EUA que a Saily vende à parte, para ligações e SMS. Antes de recebê-lo, você verifica sua identidade. Alguns serviços o marcam como número de internet (VoIP), e a Central de Ajuda diz que certos bancos e apps de pagamento não aceitam esse tipo de número para verificação. A maioria dos serviços envia códigos para ele sem problema."],
      ["Um celular sem eSIM", "A solução da Saily é um cartão físico que aceita eSIM. Ele vai na entrada do chip, e você instala a Saily nele."],
    ],
    tracksLabel: "Passos do guia completo sobre isso",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Passo {n}: {title}",
  },

  // 新手入门三课在导航、首页路线图里的标题、时间、简介（顺序：1 查手机、2 买套餐装好、3 落地上网）
  lessons: [
    { title: "Confira se o seu celular funciona com eSIM", minutes: "5 minutos", sum: "Veja se o seu celular é compatível com eSIM e o que fazer se não for" },
    { title: "Compre um plano de dados e instale antes de viajar", minutes: "15 minutos", sum: "Escolha o destino no app da Saily, compre um plano e instale o eSIM pelo Wi-Fi" },
    { title: "Pousou, ligou os dados, está na internet", minutes: "5 minutos", sum: "Depois de pousar, use a Saily para os dados móveis, ligue o roaming de dados dela e veja quanto ainda resta" },
  ],

  // 一课的页面框架
  lesson: {
    eyebrow: "Para iniciantes · lição {n} de {total}",
    prog: "Progresso: lição {n} de {total}",
    nav: "Lição anterior e próxima",
    prev: "Anterior",
    next: "Próxima",
    title: "Lição {n}: {title}",
    tldr: "Em uma frase",
  },

  // 正文里用到的组件
  comp: {
    callout: { ok: "Você deve ver", warn: "Atenção", no: "Não faça isso", tip: "Dica" },
    copyTitle: "Copie isto",
    copy: "Copiar",
    cmdDone: "Comando copiado",
    cmdLabel: "Copiar comando: {c}",
    reply: "Ilustração: mais ou menos o que você vai ver",
    // 每页末尾一行：{lead} {gh 链接}{faq[0]}{faq[1] 链接}{faq[2]}
    feedback: {
      lead: "Algo nesta página ficou confuso, ou não funcionou como está escrito?",
      gh: "Conte no GitHub",
      faq: [". Ou veja antes as ", "perguntas frequentes", "."],
    },
    // 首页、常见问题末尾的「提问和讨论」卡片
    contact: {
      h: "Perguntas e comentários",
      p: "Travou em um passo, achou algo confuso ou tem uma dica de viagem que vale compartilhar? Leve para o GitHub. As perguntas que mais aparecem acabam entrando no guia. Pode escrever no seu idioma.",
      faq: ["Antes de perguntar, veja as ", "perguntas frequentes", ", porque muitas respostas já estão lá."],
      btn: "Pergunte ou comente no GitHub",
      x: "O autor está no X",
      privacy: "Antes de enviar capturas de tela, esconda seu número de telefone, o EID, o ICCID, os códigos QR, os códigos de ativação e os dados da sua conta.",
    },
  },

  // 图示的界面文字
  figs: { ui: { label: "Diagrama", replay: "Ver de novo" } },
};
