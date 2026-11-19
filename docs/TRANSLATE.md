# Translation brief: 8 more languages (2026-11-19)

v1 of this site is Chinese (root) and English (`/en/`). This brief is for the next step: adding Japanese, Korean, Spanish, Portuguese (Brazil), French, German, Russian and Arabic, the same way the sister site grokbot.xiaoxiaodong.ai did. Fill in the dates and paths when you hand it to translators.

## The user's goal
The unofficial Saily beginners site gets more languages. Each language has the home page, the three beginner lessons and its own README; deeper pages (guide, how-to, wiki, FAQ) link to the English version. The site reads like a friend explaining (Kevin Kelly style: one core idea, a picture first, connected sentences). The translations must read that way in each language, not like a word-for-word translation.

## Read first
- `docs/MAINTAINING.md`: 「资料来源」, 「写作规矩（硬规矩）」 and 「怎么写」 (the voice and the hard rules apply to every language: no prices or promo codes, nothing on getting around network restrictions).
- The English and Chinese originals: `src/pages/en/start/{1-check-phone,2-data-plan,3-land}.mdx`, `src/pages/start/…` (zh), `src/i18n/base.js` (English UI strings and home page), `src/views/Home.astro`, the English README.
- How the Grok Bot site did the same languages, for tone and layout only (its content is about a different product): `../xxd-grokbot/src/i18n/<lang>.js`, `../xxd-grokbot/src/pages/<lang>/start/`.

## Setup (maintainer, before translators start)
1. Add the language to `LANGS` in `src/data/nav.js` (no `full: true`).
2. Copy `src/i18n/base.js` to `src/i18n/<lang>.js` with a `figs.ui` block, import it in `src/i18n/index.js` and add it to `EXTRA`.
3. Create `src/pages/<lang>/index.astro` (the same lines as `src/pages/en/index.astro`) and English copies of the three lessons in `src/pages/<lang>/start/`.
4. Add the language's Help Center locale to `LOCALES` in `scripts/sync-docs.mjs` and run it, so translators have the official text in `docs/sources/raw/official/<locale>/`. The Help Center locales are `cs, de, en-us, es, es-419, fr, it, ja, ko, lt, nl, pl, pt, pt-br, sv, zh-cn, zh-tw` (from `/api/v2/help_center/locales.json`, 2026-11-19); Russian and Arabic have none.

## Your files, per language `<lang>`
1. `src/i18n/<lang>.js`: translate every string value. Keep every key, array length and `{placeholder}` exactly. Labels that name the full guide, how-to, wiki and FAQ should say they are in English where base.js does.
2. `src/pages/<lang>/index.astro`: already correct, don't touch.
3. `src/pages/<lang>/start/1-check-phone.mdx`, `2-data-plan.mdx`, `3-land.mdx`: translate from the English, checking the Chinese for intent. Keep frontmatter keys (`layout`, `lesson`, `tldr`, `description` if present), every component, every `Copy` id and other element ids, the single `<mark>`. Links: lessons link to `/<lang>/start/…`; every other site page links to `/en/…`; Help Center links point at the same article in your language's Help Center when it exists (swap `en-us` in the address for your locale), otherwise the English one.
4. `README.<lang>.md`: new file. Translate `README.en.md` in the same voice. Use the English images (`assets/en/hero.svg`, `assets/en/readme/*.svg`) exactly as README.en.md does. The language bar is the 10-language line already in README.en.md with your language in bold instead of English. The tagline says 10 languages. Site links go to `https://saily.xiaoxiaodong.ai/<lang>/` for the home page and lessons, `/en/` for everything else. Help Center links point at your locale when the article exists there.

## Rules
- **Button names as the app shows them in your language.** The Saily app follows the phone's system language. Its languages (2026-11-19) are Chinese, Czech, Dutch, English, French, German, Italian, Japanese, Lithuanian, Polish, Spanish (and Latin American Spanish), Portuguese (and Brazilian Portuguese) and Traditional Chinese; there is no Korean, Russian or Arabic app interface yet. Look each label up in your language's Help Center copy, write the app's text in bold, and the English label in parentheses on first use, like the Chinese pages do. If your language has no app interface or the label isn't found, keep the English in bold and explain it in your language.
- **Terms** (eSIM, data roaming, APN, activation code, credits…) use the official Help Center's word in your language.
- Facts stay exactly as in the English. Don't add or drop facts, prices or codes.
- Arabic is right-to-left: the layout handles direction; keep code, commands and English labels as they are.
- MDX: no bare `<`, `{`, `}` in prose.

## Checks before you report
`npm run build`, `node scripts/check-i18n.mjs <lang>` for each of your languages (must print no ✗), `npm run check`, `node scripts/check-doc-links.mjs`. Don't start a dev server; if you must look, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1` and kill it after. Commit on your branch: `git add -A && git commit -m "<lang>: …"`. Don't push.

## Report
Per language: files changed, any label you couldn't find in the Help Center, anything you were unsure how to say, the commit hash.
