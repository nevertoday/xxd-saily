// pt（Português do Brasil，用 você）：结构照 base.js（英文底稿）。缺的键会显示英文。
// 按钮名和术语照官方帮助中心巴西葡语版（docs/sources/raw/official/pt-br/）。{名字} 是占位，由 fmt() 换成值，翻译时原样保留。
// 这些语言只有首页和新手入门三课；完整教程、How-to、Wiki、常见问题链到英文版，所以导航里写明「英文」。
export default {
  ui: {
    brand: "Saily para iniciantes",
    desc: "Um guia não oficial da Saily: consiga seu próprio número +1 dos EUA para criar contas em apps e receber códigos de verificação, instale até sem eSIM, resolva quando o código não chega e mantenha o número, em palavras simples. Também cobre dados para viagens ao exterior.",
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
    // 导航：拿美国号码的六步（英文页）、出国上网的新手三课（本语言）
    route: "Ter um número dos EUA: da compra aos códigos (em inglês)",
    lessons: "Dados no exterior: três lições",
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
    h1: "Seu próprio número +1 dos EUA, para cadastros e códigos de verificação",
    // lead：前半句、荧光笔那一句、后半句
    lead: ["Muitos apps pedem para verificar um número de telefone na hora de criar conta ou fazer login, e vários números de fora dos EUA nunca recebem o código. A Saily, um eSIM da Nord Security (a empresa por trás da NordVPN), também vende um número +1 dos EUA. Ele é atribuído pelo Plano de Numeração da América do Norte e, enquanto o seu serviço continuar ativo, é só seu — para códigos de verificação, SMS e ligações. Você não precisa ter um plano de dados antes e pode comprar direto no site. ", "Este é um guia não oficial", ", sem relação com a Saily nem com a Nord Security. Para recursos e preços, a referência são a Central de Ajuda oficial e o app."],
    // 两个按钮：极速拿号（英文页）、完整教程第 5 步（英文页）
    cta: ["Número rápido: compre no site em 3 minutos (em inglês)", "Entenda o número primeiro (em inglês)"],
    ctaNote: "Depois de pagar, você faz a verificação de identidade no app da Saily antes de o número ser atribuído. O número fica em um eSIM, e existe solução mesmo se o seu celular não tiver eSIM.",
    // [链接上的字](键) 会换成链接，键原样保留：otp、keep 是官方帮助中心，takeover、jason 是网友的中文帖子，apps 是本站英文页
    painH: "Já travou em algum destes casos?",
    PAIN: [
      "Você tenta criar conta num app como Telegram ou WhatsApp, coloca o número do seu país e o código nunca chega, ou o app diz que não aceita esse número.",
      "Você pagou pouco num site que recebe códigos, mas o número nunca foi seu. Depois ele passou para outra pessoa, que usou o mesmo número para criar conta de novo e tomou a sua ([um caso real, em chinês](takeover)).",
      "O número cadastrado na sua conta foi cancelado ou venceu; aí, quando você tenta entrar num celular novo, o código não chega em lugar nenhum e você perde a conta.",
      "Você pensou em pegar um chip de outro país, mas a mensalidade pesa e o cadastro fica cada vez mais difícil. Um usuário que tentou pegar um chip dos EUA travou logo no registro ([relato, em chinês](jason)).",
      "Você finalmente consegue um número dos EUA, vincula à conta, e alguns apps continuam sem mandar código — sem dar para saber se o problema é o número ou o seu celular.",
    ],
    vsH: "Qual a diferença para um site que recebe códigos",
    vsP: "Um site que recebe códigos só aluga o número para você. O número da Saily é seu. Isso faz toda a diferença para qualquer conta que você vai continuar usando e pode precisar recuperar depois.",
    // 表头：第一格空着
    vsHead: ["", "Site que recebe códigos", "Número dos EUA da Saily"],
    // VS：每行 [这一行比什么, 接码平台, Saily]
    VS: [
      ["De quem é o número", "Do site. Em pouco tempo, o mesmo número já está recebendo códigos para outra pessoa", "Enquanto o serviço continuar ativo, ele fica atribuído apenas a você ([Central de Ajuda](otp))"],
      ["Ainda recebe códigos daqui a seis meses", "Em geral, não. O número já foi para outra pessoa faz tempo", "Sim, enquanto continuar renovando. Se vencer, ele fica reservado por 30 dias para você recuperar ([Central de Ajuda](keep))"],
      ["O que você precisa", "Sem documento, paga por código", "Verificação de identidade, assinatura com renovação e um aparelho que aceite eSIM"],
    ],
    routeH: "Da compra do número aos códigos, em seis passos",
    routeP: "Siga na ordem. Cada passo leva à página que explica tudo em detalhes (em inglês). Você faz tudo pelo site e pelo app da Saily, sem precisar viajar.",
    routeLabel: "Conseguir um número dos EUA: 6 passos",
    codesH: "Sem rodeios: quais códigos chegam",
    codesP: "É um número real dos EUA, mas a operadora por trás dele usa rede baseada na internet (VoIP). Por isso, alguns serviços que verificam o tipo de número o enxergam como VoIP e não mandam o código. A própria Saily avisa disso. Do mais certo ao menos certo:",
    // CODES：每行 [把握多大, 说明]
    CODES: [
      ["Lista da Saily: costuma funcionar", "Códigos de uso único (OTP): WhatsApp, Signal, Viber, Airbnb. Códigos de dois fatores (2FA): PayPal, Wise, Venmo e outros. A lista não é completa nem é garantia ([lista da Saily](otp))"],
      ["Testes de usuários: varia", "Telegram, X, Google, Apple ID, ChatGPT e outros. O mesmo app funciona para uns e falha para outros. Veja [Quais apps aceitam o número dos EUA (em inglês)](apps)"],
      ["Na China continental", "Um usuário recebeu códigos lá por uma rede local em roaming ([relato, em chinês](jason)), mas a China continental não está na lista em inglês da Saily de lugares onde ligações funcionam, então chamadas podem não funcionar"],
      ["Não conte com isso", "Bancos, corretoras e serviços financeiros parecidos: a Saily diz que alguns não aceitam esse tipo de número. O número também não dá identidade nos EUA, e este site não cobre abertura de contas com ele"],
    ],
    fitH: "É para você?", yesH: "Sim, se", noH: "Ainda não, se",
    YES: ["Você precisa de um número que receba códigos por SMS para criar conta ou entrar em apps", "São contas para manter no longo prazo, e você quer um número só seu que continue renovando", "Você pode verificar sua identidade com um documento válido. Documentos emitidos na China exigem passaporte e documento de identidade nacional", "Seu celular é compatível com eSIM, ou você topa usar um cartão físico que aceita eSIM"],
    NO: ["Você quer o número para verificação em bancos, corretoras ou contas de pagamento dos EUA", "Você precisa de MMS ou encaminhamento de chamadas, que o número não oferece", "Seu documento é de um país que a Saily ainda não consegue verificar, como Rússia, Irã ou Coreia do Norte", "Você não quer uma assinatura com renovação. O número só continua sendo seu enquanto renovar"],
    tracksH: "O que mais este site cobre",
    tracksP: "Além do número, o foco principal da Saily são dados para viagens ao exterior. O guia completo cobre tudo isso para quando você precisar.",
    // 完整教程目前只有英文和中文
    devNote: "Por enquanto, o guia completo está em inglês (e em chinês). As três lições para iniciantes estão em português.",
    // TRACKS：每个是 [标题, 说明]，图标、顺序和对应的教程步骤固定（在 views/Home.astro 的 TRACK_BASE：号码、没有 eSIM 的手机、出国流量）
    TRACKS: [
      ["O número +1 dos EUA", "Qual documento a verificação pede, o que fazer quando o código não chega, por que atender ligações consome minutos, por que o SMS precisa ser texto simples e como manter ou trocar o número."],
      ["Um celular sem eSIM", "Muitos celulares vendidos na China continental não têm eSIM. A solução da Saily é um cartão físico que aceita eSIM: ele vai na entrada do chip, e você instala a Saily nele."],
      ["Dados no exterior", "Compre um plano de dados para o seu destino, instale e ele funciona quando o avião pousar. Se for sua primeira vez, as três lições para iniciantes levam você do começo ao fim."],
    ],
    lessonsLink: "Dados no exterior: três lições para iniciantes",
    tracksLabel: "Passos correspondentes no guia completo",
    // 每件事下面链到完整教程的一步：{n} 是第几步，{title} 是那一步的标题（英文）
    stepLink: "Passo {n}: {title}",
  },

  // 拿美国号码的六步在导航、首页里的标题和简介（顺序固定，链接都去英文页；见 nav.js 的 ROUTE）
  route: [
    { title: "Confira se o seu celular aceita eSIM", sum: "O número fica em um eSIM. Se o seu celular não tiver eSIM, um cartão eSIM removível resolve" },
    { title: "Compre o número no site", sum: "Não precisa de plano de dados. Na página do número, escolha “Get Number Only”, defina o período de renovação e pague" },
    { title: "Verifique sua identidade para receber o número", sum: "Envie seu documento no app. Documentos chineses exigem passaporte e documento de identidade nacional. O número aparece assim que for aprovado" },
    { title: "Instale o eSIM e receba seu primeiro SMS", sum: "Deixe o app instalar ou escaneie o código QR; depois, peça para um amigo mandar um SMS" },
    { title: "Crie suas contas e receba os códigos", sum: "Veja quais apps mandam códigos e quais não garantem, e o que conferir quando algum não chegar" },
    { title: "Mantenha o número", sum: "Não deixe a renovação vencer nem apague o eSIM no app. Se perder o número, suas contas ficam sem códigos" },
  ],

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
