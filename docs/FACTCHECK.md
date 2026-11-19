# Fact-check brief (xxd-saily)

The site at /Volumes/T7-usb/js/xxd-saily is an unofficial Saily (travel eSIM + US phone number) learning site, Chinese at the root and English under /en/. Its rule: every factual statement about Saily comes from Saily's official help center; posts from X appear only as clearly labelled user experience. You are checking that, independently of the writers.

## Sources (local copies; read the ones your pages cite in full)
- Official: `docs/sources/raw/official/en-us/<id>.md` and `docs/sources/raw/official/zh-cn/<id>.md` (same id). A link `https://support.saily.com/hc/<locale>/articles/<id>` maps to those files. When en-us and zh-cn disagree, en-us wins; known differences are listed in `docs/sources/README.md`.
- Community: `docs/sources/raw/community/article-*.md` (X posts).

## What to check, sentence by sentence
1. **Supported.** Each claim about Saily (features, prices, limits, steps, button names, what support does, what refunds cover) is stated or clearly implied by the official article it links or a nearby one. Plain-language explanation and the writer's own clearly-marked examples are fine; invented features, numbers or behavior are not.
2. **Not distorted.** Money, refunds, the phone number (KYC documents, billing, minutes, OTP/2FA acceptance), deleting eSIMs and roaming charges say exactly what the docs say, no stronger, no weaker.
3. **Forbidden content absent.** No promo, coupon or referral codes; no pricing tricks; no instructions for getting around network restrictions (quoting Saily's own "the app may be unreachable, install before you go" is fine); nothing presenting the US number as a way to pass as a US resident for banks or payment apps.
4. **Community claims labelled.** Anything from X is marked as one user's experience with a link, and isn't used as the source of a feature, price or step. Where it contradicts the official docs, the page follows the docs.
5. **Links.** Each support.saily.com link points to an article that exists locally and supports the sentence; zh pages link zh-cn where it exists (or explain why they link en-us).
6. **zh and en agree** on every fact.
7. **No copying** of official paragraphs; at most one short quote per page.

## What to do
- Fix problems directly in your files only, with the smallest edit: correct, soften to what the source says, or delete. Keep the voice and the rules in `docs/MAINTAINING.md`. Edit zh and en together.
- Don't run `npm run build` or any server. Don't commit. Don't touch files outside your list.
- Report: each change (file:line, old claim, what the source says with file and a few words, new text), borderline claims you kept, and counts (claims checked, changed, deleted).
