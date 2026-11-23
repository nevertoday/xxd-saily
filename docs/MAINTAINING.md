# 维护说明

把 Saily（Nord Security 做的 eSIM）讲给第一次用的人，也给用熟了想用得更深的人，说人话。

**读者多半是为了美国 +1 号码来的**：拿它注册海外应用、收验证码，不关心出国。所以首页、左侧导航最上面一组、How-to 第一组都先讲号码（路线在 `nav.js` 的 `ROUTE`，首页是 `views/Home.astro`）：卡在哪、和接码平台差在哪、从买号到收码六步、哪些码收得到、怎么保号。出国上网的流量是第二件事，新手三课讲的是它。以后加的 8 种语言还是以出国上网为主的旧首页（`views/HomeIntl.astro`），翻好号码版以后可以删掉。
五块内容：新手入门（三课）、完整教程（按顺序 0–7 步）、How-to（具体怎么做）、Wiki（这是什么）、常见问题。

**本站是非官方学习站**，和 Saily、Nord Security 都没有关系。页脚、常见问题和 README 都要写明这一点，并链到官方帮助中心。不用官方的标志和配色，不写成官方的口吻。

- 站点骨架沿用 xxd-grokbot（Grok Bot 新手教程站，`../xxd-grokbot`）：同样的外壳、组件、搜索和写作规矩。那边读 Grok Bot 桌面 app 按钮名的三个脚本（`app-labels`、`zh-labels`、`check-ui-labels`）这里没有：Saily App 没有能在本机读的语言包，按钮名照官方帮助中心查（见下面「写作规矩」）。
- 界面用 xxd-ui-kit（`public/xxd/` 里自带一份，不走 CDN）。
- 中英双语：中文在根路径，英文在 `/en/` 下，slug 相同，顶栏按钮切到对应页。改了一篇中文，**同一次提交里把英文版也改了**：
  - 正文：`src/pages/en/start/`、`src/pages/en/guide/`、`src/pages/en/howto/`（MDX，路径多一层 `../`；站内链接加 `/en`；`<Term k="中文键" />` 照原样，英文名在 `nav.js` 的 `GLOSSARY[k].en`）。
  - 数据：`nav.js` 各条目的 `en: {}`；`wiki.en.js`、`faq.en.js`（按 slug 叠加，结构和条数要和中文一致）；界面文字在各组件和 `views/` 里的 zh / en 两份。
  - 强调：每页最多一处 `<mark>`（这页最要紧的一句），`<u>` 只给照做会失败的坑；英文页放在对应的那句上。
- **以后的 8 种语言（日、韩、西、葡、法、德、俄、阿）**：v1 只有中文和英文，机器已经留好，走和 Grok Bot 站一样的路。网站只有首页和新手入门三课，其余页面链到英文版。
  - 语言清单在 `nav.js` 的 `LANGS`；界面文字、首页、三课的标题在 `src/i18n/<语言>.js`，结构照 `src/i18n/base.js`（英文底稿，也是缺键时的兜底），写好后在 `src/i18n/index.js` 的 `EXTRA` 里加上。
  - 三课正文在 `src/pages/<语言>/start/`，照英文版翻、对照中文版的意思；三课之间的链接指向本语言，其他站内链接指向 `/en/`。
  - 按钮名和术语照 Saily 官方在那种语言里的写法：帮助中心有官方翻译（de、es、fr、ja、ko、pt-br 等），先在 `scripts/sync-docs.mjs` 的 `LOCALES` 里加上那种语言，抓下来对照着写。翻译的要求见 `docs/TRANSLATE.md`。
  - 改了中文 / 英文的新手入门或首页，同一次提交里把这些语言也改了；改完跑 `node scripts/check-i18n.mjs`（查键、占位、编译、复制块 id、链接）。
  - 阿拉伯语从右往左：样式里的左右用逻辑属性，代码和命令保持从左往右。
- README 现在只有中文的 `README.md`（占位）。以后加语言时照 Grok Bot 站的做法，每种语言一份 `README.<语言>.md`，配图在 `assets/` 和 `assets/en/`。

```bash
npm install
npm run dev        # http://localhost:4440
npm run build      # 输出到 dist/
node scripts/check-i18n.mjs
```

## 现在的状态

骨架已经搭好，内容还没写。

- 新手入门、完整教程、How-to 的每一页，正文都只有一行不会显示出来的注释（中文页 `{/* 待写：… */}`，英文页 `{/* TBD: … */}`），构建出来正文是空的。`grep -rlE '待写|TBD:' src/pages` 列出还没写的页。
- 完整教程每一步在 `nav.js` 里是 `ready: false`，导航显示「编写中」；写完一步改成 `ready: true`。
- `GLOSSARY` 的每个术语用 `wiki:` 指向一条 Wiki 条目；加了新条目，记得把对应术语指过去。
- `check-site` 查的是构建出来的页面，看不见 MDX 注释，所以空白的页面它不拦。拦它的是 `npm run release`：还有没写的页，它在部署前停下，并列出是哪几页。

## 怎么改

- **站点结构**只在 `src/data/nav.js` 改：新手入门三课（`LESSONS`）、主线 8 步（`STEPS`）、How-to 清单（`HOWTO`）、术语解释（`GLOSSARY`）、本站仓库（`REPO`）、官方帮助中心（`DOCS` 英文、`DOCS_ZH` 中文）。
- **新手入门**每一课是 `src/pages/start/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Lesson.astro` 和 `lesson: n`。
- **主线教程**每一步是 `src/pages/guide/<n>-<slug>.mdx`，开头写 `layout: ../../layouts/Guide.astro` 和 `step: n`。
- **How-to** 是 `src/pages/howto/<slug>.mdx`（`layout: ../../layouts/HowTo.astro`，`slug` 要和 `HOWTO` 里一致，`step` 是相关的主线步骤）。
- **Wiki** 和 **常见问题** 只改数据：`src/data/wiki.js`、`src/data/faq.js`。Wiki 条目可以带一张 `list` 表。`GLOSSARY` 的每个术语用 `wiki:` 指向一条 Wiki 条目；加了新条目，记得把对应术语指过去。
- 每个 Wiki 条目在 X 上分享时用自己的大图（条目名 + 一句话），是生成的：加了条目，或者改了条目名、一句话、分组，跑 `npm run og`，把 `public/og/` 和 `tools/og-manifest.json` 一起提交。忘了跑，`npm run check` 会报出是哪几张。
- **教程组件**（在 MDX 里 import）：`Callout`（`ok` / `warn` / `no` / `tip`）、`Term`（术语，`k` 对应 `GLOSSARY`）、`Checkpoint`（可打勾的检查点）、`Q`（「卡住了？」里的一条）、`Tabs`（按 iPhone / 安卓或路线切换）、`Copy`（带复制按钮的一段话）、`Cmd`（正文里一点就复制的命令）、`Reply`（示意 App 里的提示或收到的短信）、`Shot`（配图）、`Annot`（带红色箭头和编号的截图，坐标就是图片像素，见组件开头的注释）、`Fig`（图示）。
- **极速拿号**（`src/pages/quick-number.mdx` 和 `/en/` 那份，版式 `layouts/Quick.astro`）：不在 How-to 目录里，首页和第 5 步有入口。截图在 `public/img/quick-number/`，是 saily.com 网页上的流程（号码页 → 只获取号码 → 结账填推荐码）；网页改版了就重截，裁掉账号邮箱、抵用金余额这类个人信息。
- **搜索**（⌘K）自动收录新手入门每一课、主线每一步、每篇 How-to、每个 Wiki 条目和每条常见问题，正文按小节做全文搜索。
- **UI Kit 升级**：在 xxd-ui-kit 里 `pnpm xxd sync <本目录>`，不要手改 `public/xxd/`。改完界面跑 `pnpm xxd doctor <本目录>`。

## 资料来源

本站写的每一条事实，都要能在官方帮助中心找到出处：

1. **Saily 官方帮助中心** [support.saily.com](https://support.saily.com/hc/en-us)（Zendesk）：功能、按钮、限制、套餐规则。英文（en-us）是原文，官方中文（zh-cn）是 Saily 自己的翻译。中文页链中文版（同一篇文章，地址里的 `en-us` 换成 `zh-cn`），英文页链英文版。帮助中心还有 de、es、fr、ja、ko、pt-br 等官方翻译（全部的语言见 `https://support.saily.com/api/v2/help_center/locales.json`），以后翻别的语言，按钮名和术语用那种语言里官方的写法。
2. **网友在 X 上的帖子**（`docs/sources/raw/community/`）：只当作「有人这样用过」的经验来用，写明是网友的经验，附原帖链接。它们从来不是功能、价格或步骤的出处；帖子和官方说法不一样时，以官方为准，帖子的说法不写。

- 原文副本在 `docs/sources/raw/`：官方文章每篇一个文件在 `official/<语言>/<id>.md`，目录在 `official/_index.md`（末尾列出只有英文、没有官方中文的文章），网友的帖子在 `community/`。只留在本地，不提交（`.gitignore` 里排除了）。仓库是公开的，别人的文章不整篇转载。
- 读资料的笔记记在 `docs/sources/README.md`：要点、本站哪页用到、还没用上的地方、官方页面自己的毛病。
- 写进网站的内容一律用自己的话讲，引用原话一次不超过一句，并附官方那一篇（或原帖）的链接。
- 资料里没写的行为、按钮名、数字，不写。拿不准就不写，或者写「以官方帮助中心为准」并给链接。
- 会变的东西（套餐、覆盖的国家、支持的机型、按钮位置）以官方为准，变了就改 `data/` 或页面里对应的那一处。
- **价格和优惠一直在变。** 本站不写具体价格，不写正在进行的促销，不放优惠码，也不放别人的推荐码。唯一的例外是[极速拿号](/quick-number/)（中英两页）放了作者自己的推荐码，页面上写明这是作者的码、作者会因此拿到抵用金、不用也照样能买；别的页面不放。也不教怎么钻价格的漏洞（标错的价格、重复领优惠之类）。要讲钱，只讲规则，比如抵用金一年内有效、不能转给别的账户，并链到官方那一篇。
- **不教绕过网络限制。** 不教怎么用代理、VPN 或别的办法，在限制网络的地方打开 Saily 的 App 或网站；网友帖子里的这类步骤一律不搬进来。要提到这件事，就引 Saily 官方自己的提醒：在土耳其、阿曼、卡塔尔、沙特阿拉伯、阿联酋和中国大陆，Saily 的 App 或网站可能打不开，所以要去这些地方，出发前就把 eSIM 装好（[官方说明](https://support.saily.com/hc/zh-cn/articles/12838788763164#travel)）。

## 同步

官方帮助中心会变。每隔一阵、或者 Saily 出了新套餐、新功能以后：

```bash
node scripts/sync-docs.mjs          # 重新抓官方帮助中心（en-us、zh-cn），列出新增、删除、改动的文章，更新 docs/sources/official.json
npm run check                       # 构建以后：多语言检查 + 整站检查（<mark>、站内链接和锚点、示意标题、占位字、分享大图是不是最新）
node scripts/check-doc-links.mjs    # 联网查帮助中心链接打得开、#锚点在线上页面里真的有（锚点别从本地副本的标题猜）
```

- `sync-docs` 走帮助中心的公开 API（`/api/v2/help_center/<语言>/articles.json` 和 `sections.json`），不用登录。列出的改动文章，对照 `docs/sources/README.md` 的「和本站的对应」表，改掉本站用到的地方，再提交 `official.json`。只想看有没有变：加 `--check`（有变化时退出码 1）。
- `check-doc-links` 查 `src/` 和 README 里所有 support.saily.com、saily.com 的链接。saily.com 对脚本一律弹 Cloudflare 的人机验证，脚本看不到页面，这些链接它单独列出来，要用浏览器打开看一眼。
- 当前核对到：官方帮助中心 2026-11-19（en-us 79 篇，zh-cn 76 篇）。

## 写作规矩（硬规矩）

- **界面上的按钮和菜单名，照 App 屏幕上的字写。** Saily App 跟着手机的系统语言走，有简体中文界面，所以中文系统的读者看到的是中文界面。
  - 中文页：加粗写 App 的简体中文，第一次出现时括号里给英文原文，比如 **浏览套餐**（Explore plans）。中文写法照官方帮助中心中文版（`raw/official/zh-cn/`）里的写法，不要自己翻。查不到的，照英文写，括号里给中文意思。
  - 英文页：照官方帮助中心和 App 的英文写，加粗。
  - 手机系统里的设置项（iPhone 的「设置 → 蜂窝网络」、安卓的「连接」之类）照那个系统的中文写法写，iPhone 和安卓分开讲时用 `Tabs`。
- 事实只写资料里有的（见上面「资料来源」）；引网友的帖子，写「有网友在 X 上分享」并附原帖链接，不替他补充、不评价他本人。
- 强调：每页最多一处 `<mark>`，放这页的核心那一句；`<u>` 只给照做会出错的坑。
- App 里的提示、收到的短信，用 `Reply` 组件，标题写「示意」，不冒充真实记录。截图和示意里的手机号、EID、ICCID、二维码、激活码一律换成示例：二维码和激活码能让别人装上你的 eSIM。
- 中文页和 `/en/` 下的英文页一起改，讲的事实和结构保持一致。
- 第一次出现的站内术语用 `Term` 包起来，悬停有一句解释。
- MDX 正文里不能出现裸的 `<`、`{`、`}`：占位符写在代码里，比如 `` `<你的手机型号>` ``。

## 怎么写：像一个懂行的朋友，坐在旁边讲给你听

2026-11-19 的读者反馈（来自姊妹站 Grok Bot 新手教程，这套写法从那边沿用过来）：教程学起来累，很多话要「过一遍脑子」才懂，读着拗口。原因出在我们自己定的规矩上：一句不超过 30 个字、一句只讲一个意思、每一步都放一个「你应该看到」的框。句子被切成了电报，「因为」「所以」「其实」这些把意思连起来的词都被删了，读者只好自己去补。现在改成下面这套写法，参照凯文·凯利（Kevin Kelly）那种「抓住一个核心，用一个画面讲透」的写法，也合教育心理学里几条站得住的发现：对话的口吻比说明书的口吻更好学（Mayer 的个性化原则），故事比条目好记，意思连贯的长句比切碎的短句更省力。

1. **一页一个核心。** 开头几句就把它说出来，最好落在读者自己的处境上（「你是不是也……」）。这一句用 `<mark>` 标出来，全页只这一处。
2. **先讲画面，再讲方法。** 用旅行里真会遇到的事讲成小故事：落地没网叫不了车、在机场排队买卡、回国收到一笔漫游费账单、换了新手机 eSIM 却没跟过来。道理放在故事后面，一两句就够。
3. **让句子连起来。** 该用「因为」「所以」「可是」「其实」「比如」「于是」就用。长句短句交替，不机械地拆句。写完念出声，哪里卡住就改哪里。
4. **像说话，不像说明书。** 用「你」，用平常的口语。避开公文腔和翻译腔：进行、基于、用于、对……进行、以……的方式、相关、该（当「这个」用）。也别喊口号、别装熟：正文里不写「超简单」「爽翻」「赋能」，具体说它做了什么、替你省了什么。
5. **段与段之间有过渡。** 读者应该一直知道「为什么现在讲这个」。
6. **格式克制。** 列表只放真正并列的几样东西；加粗只给关键的几个字；Callout 一页一两个，只放真有用的提醒。「你应该看到」只用在界面会变化、读者需要确认自己没走错的地方，比如装好 eSIM、打开数据漫游、开通号码那几步。
7. **新词顺手解释。** 像朋友那样一句带过（「数据漫游，就是让手机在国外也能用移动网络的那个开关」），不要一段里堆好几个新词。
8. **收个尾。** 页末一两句：刚才学会了什么，下一步去哪。
9. **要读者照抄的话像平时说话。** 比如发给客服的一段说明，写成完整、自然的话，不用填空模板腔：「我在东京，手机是 iPhone 15，Saily 显示已经装好，可打开数据漫游以后还是上不了网，我已经重启过一次。」
10. **英文页同理。** Conversational, warm and plain. Contractions are fine. Vary sentence length. No corporate words (leverage, utilize, seamless, empower).

每类页面的样子：

- **新手入门三课**（`src/pages/start/`，数据在 `nav.js` 的 `LESSONS`）：给第一次出国用 eSIM、以前只用过实体卡的人。开头一个小场景，然后马上动手；只给一条路，别的做法放进页尾「不对怎么办」，按读者看到的现象写（「装好了，可是没信号」）；不出现没解释过的词（APN、EID、LPA 这类不进新手页）；说清楚三课之外的都是「遇到了再查」。
- **完整教程**（`guide/`）：一个核心想法，配一个旅行里的例子，再把要点的操作讲清楚，最后「卡住了？」。
- **How-to**：一件具体的事。开头一句说做完你会得到什么，然后按「什么时候会遇到、怎么做、做完怎么确认」讲下去，写成连贯的话，不是几个填空。
- **Wiki**：保留「一句话 → 打个比方 → 在 Saily 里 → 常见误区」的结构，每一块都用说话的口吻写。

## 正文里的图示（`<Fig id="…" />`）

一张图讲清一个关系，放在最需要的那一节：两条路的对比、几步的顺序、哪一层、由强到弱。不是每节都配；同一页最多两张。

- **数据和文字**在 `src/data/figs.js`：每张图一个 id，`type` 选画法（compare、term、folder、anatomy、stack、flow、night、ladder、fan、tree），`base` 放和语言无关的部分（图标、命令、哪一步要你动手），`zh` / `en` 放文字。现在一张都还没有；每种画法要哪些字段，看 `Fig.astro` 里对应的那段。
- **画法**在 `src/components/Fig.astro`，样式在 `public/site.css` 的「图示」一节。全部是 HTML + CSS：颜色、圆角用令牌，跟着亮暗、直角圆角、主色走；字能换行，正文栏窄了自动竖排（容器查询）；从右到左的语言里横向箭头会翻过来，竖排的箭头不翻。
- **动画**：进入视野后一步步亮起来，放两遍停在完整的样子，图下面出「再看一遍」。只动 opacity / transform；系统设了减少动效、或者没有脚本时直接显示完整的图。终端图的命令一个字一个字打出来，窗口标题写在 `base.app`。
- **图里的字**：一格一件事，短；`/命令` 会自动排成等宽、不在连字符处断开。不抄正文整句，也不喊卖点。界面上的按钮名照真实界面写（中文图用 App 的中文，英文图用英文），说明文字才翻译。
- **新加一张**：先在 `figs.js` 写数据，再在中文页、`/en/` 页同一位置放 `<Fig id="…" />` 并 `import Fig`；`npm run build` 后亮色、暗色、手机宽度各看一眼。

## 反馈入口

每页末尾一行（`Feedback.astro`）：没看懂、照做不成，就到 GitHub 提（带好页面信息的 issue 模板：手机型号、人在哪、看到了什么提示），或者先翻常见问题。首页和常见问题页末尾是「提问和讨论」卡片（`Contact.astro`）：GitHub 提问、讨论、分享在路上的经验，作者的 X 只是一个安静的文字链接。不放个人二维码，不催读者「整理好一起发」。

## 部署

线上：<https://saily.xiaoxiaodong.ai>　仓库：<https://github.com/nevertoday/xxd-saily>（都还没建，还没部署）。
Cloudflare Workers 静态资源，配置在 `wrangler.jsonc`。更新：`npm run release`（构建、跑 `npm run check`、确认没有还空着的页，都过了才 `wrangler deploy`；需要先 `npx wrangler login`）。

## README 插画和分享大图

生成器都在 `tools/`：

- README 头图：`python3 tools/build_hero.py` 写出 `assets/hero.svg` 和 `assets/en/hero.svg`（一段循环的 SVG 动画）。看效果：把 SVG 内嵌进一个 HTML，用 `document.getAnimations()` 暂停在某一秒再截图（放在 `<img>` 里的动画，无头 Chrome 不会往前走）。
- README 配图：`python3 tools/build_readme_svgs.py` 写出 `assets/readme/*.svg` 和 `assets/en/readme/*.svg`。
- 分享大图：样子都在 `tools/og.html`（一张 HTML 海报：`?lang=zh` / `?lang=en` 是全站那张，`?kind=wiki&title=…&one=…&group=…` 是 Wiki 条目那张）。截哪些卡、填什么字在 `src/data/og.js`：全站两张 `public/og.png`（中文页）、`public/og-en.png`（其他语言），每个 Wiki 条目中英文各一张 `public/og/wiki/<slug>.png`、`public/og/en/wiki/<slug>.png`。`npm run og` 用 Chrome 截图，2 倍清晰度（2560×1280），每张的指纹（模板 + 文字）记在 `tools/og-manifest.json`，没变的不重截；`npm run check` 照指纹查缺图和过期。页面用哪张：`Site.astro` 的 `og` 属性（Wiki 条目页传自己的），不传就是全站那张。改了模板，挑最长的条目名和一句话中英文各看一眼：字有没有互相压住、顶到边。GitHub 仓库的 Social preview 用英文全站那张，要在仓库 Settings → General 手动上传。

本站标志（`Site.astro` 里的 `site-mark` 和 `public/favicon.svg`）是一张极简的 SIM 卡：切掉一角的方块，中间一块芯片，墨色，和小小东其他站同一套笔法。故意不像 Saily 官方的图标，本站是非官方的。

配色要干净通透：画布接近白（`#FAFAF8`，一圈 `#E9E7E4` 淡边），卡片纯白，线和次要文字用 UI Kit 的 `--line`、`--muted`，浅色块用去掉灰调的浅色。不要灰米色底和偏棕的阴影。不用 Saily 或 Nord Security 的标志。
