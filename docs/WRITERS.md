# Shared brief for content writers (xxd-saily)

## The user's goal
An independent, open-source, unofficial learning site at saily.xiaoxiaodong.ai about Saily, Nord Security's travel eSIM that also sells a US +1 phone number. It is for beginners (who have never used an eSIM) and experienced users. v1 is Chinese (root) and English (/en/). The sister site https://grokbot.xiaoxiaodong.ai (source: /Volumes/T7-usb/js/xxd-grokbot, read-only for you) is the model for tone, page shapes and voice: it reads like a friend who knows the product explaining it, Kevin Kelly style (one core idea per page, a picture or small story first, connected sentences).

## Read before writing
1. `docs/MAINTAINING.md` in your worktree: the hard rules and the 「怎么写」 voice section. Follow them exactly.
2. `docs/sources/README.md`: which official articles feed which page, the community posts, and what never goes on the site.
3. The originals in `/Volumes/T7-usb/js/xxd-saily/docs/sources/raw/`: `official/en-us/<id>.md` (79 official articles), `official/zh-cn/<id>.md` (Saily's own Chinese translations, same id; use their terms for buttons and features on zh pages), `official/_index.md` (titles and URLs), `community/article-*.md` (X posts; user experience only).
4. For page shape, 2 or 3 matching xxd-grokbot pages (`src/pages/start/*.mdx`, `src/pages/guide/1-goal.mdx`, `src/pages/howto/morning-briefing.mdx`, `src/data/wiki.js`) and the components they import.

## Facts and sources
- Every factual statement about Saily (features, prices, steps, limits, what support does) comes from the official help center. Write it in your own words; don't copy paragraphs; link the article (`https://support.saily.com/hc/en-us/articles/<id>` on en pages, `https://support.saily.com/hc/zh-cn/articles/<id>` on zh pages when the zh article exists).
- Prices change. When you mention one, say it's what the official article states and that the app shows the current price. Never write promo codes, referral codes, or pricing tricks.
- Community posts from X: only as clearly labelled user experience (「有用户在 X 上分享……」/ "One user on X reports …") with a link to the post, never as the source of a feature, price or step. Where they disagree with the official docs, the official docs win.
- Never teach getting around network restrictions. Where it matters, quote Saily's own advice that the app may be unreachable in some countries, so install before you go.
- Never present the US number as a way to pass as a US resident for financial accounts. State what the official OTP/2FA article says about which services may refuse it.
- Phones without eSIM: the official route is a physical eSIM card from eSIM.me plus a QR code from Saily support. Other cards (BeeSIM, 9eSIM and so on) are community experience: say Saily's docs don't mention them and you install at your own risk.
- UI labels: bold, as the official articles name them; on zh pages use the zh-cn article's wording with the English label in parentheses on first use (「**添加 eSIM**（Add eSIM）」). If the zh-cn article doesn't have it, keep the English in bold with a Chinese gloss.
- The site is unofficial. Don't speak for Saily or Nord Security.

## Files
- Write only the files your brief lists, zh and /en/ twin together, same facts and structure. Don't edit `src/data/nav.js`, `src/data/figs.js`, or files another writer owns; list needed changes in your report.

## Checks before you report
- `npm run build`, `node scripts/check-i18n.mjs`, `node scripts/check-site.mjs` pass in your worktree.
- No bare `<`, `{`, `}` in MDX prose; one `<mark>` per page at most; Reply blocks titled 示意 / "Illustration".
- Commit on your branch in your worktree (`git add -A && git commit -m "<short message>"`). Don't push.
- Don't start a dev server. If you must look at a page, serve `dist/` with `python3 -m http.server <port> --bind 127.0.0.1`, kill it after, and confirm the port is free.

## Report
Files written; for each page its one core idea (zh/en); the official articles each relies on; any statement you couldn't source (and left out); community posts you cited; requested glossary terms or nav changes; your commit hash.
