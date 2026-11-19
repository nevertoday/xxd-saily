// node scripts/check-lesson-parity.mjs . <lang> <helpCenterLocale>   (only for languages with a Saily Help Center: ja ko es pt-br fr de; needs the local copies from sync-docs)
// Compares src/pages/<lang>/start/*.mdx with the English lessons and the Help Center copy in that locale.
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const [repo, lang, locale] = process.argv.slice(2);
const LESSONS = ["1-check-phone", "2-data-plan", "3-land"];
const raw = join(repo, "docs/sources/raw/official", locale);
const corpus = readdirSync(raw).map((f) => readFileSync(join(raw, f), "utf8")).join("\n").toLowerCase();

// Labels the Help Center copy keeps in English, brand/OS names and generic tokens that are not UI labels.
const ALLOW = new Set(["mobile plan labels", "retry eSIM installation", "ok", "lte", "4g", "lte/3g/2g", "sim", "sims"].map((s) => s.toLowerCase()));

let bad = 0;
const fail = (m) => { bad++; console.log(`✗ ${m}`); };

const helpLinks = (s) => [...s.matchAll(/https:\/\/support\.saily\.com\/hc\/([a-z-]+)\/articles\/(\d+)(#[\w-]+)?/g)].map((m) => ({ loc: m[1], id: m[2], anchor: m[3] ?? "" }));
const siteLinks = (s) => [...s.matchAll(/\]\((\/[^)\s]*)\)/g)].map((m) => m[1]);
const otherLinks = (s) => [...s.matchAll(/\]\((https:\/\/(?!support\.saily\.com)[^)\s]+)\)/g)].map((m) => m[1]);
const count = (s, re) => (s.match(re) || []).length;

for (const f of LESSONS) {
  const en = readFileSync(join(repo, "src/pages/en/start", `${f}.mdx`), "utf8");
  const tr = readFileSync(join(repo, "src/pages", lang, "start", `${f}.mdx`), "utf8");

  const a = helpLinks(en).map((l) => l.id + l.anchor).join(" ");
  const b = helpLinks(tr).map((l) => l.id + l.anchor).join(" ");
  if (a !== b) fail(`${f}: Help Center articles differ from English\n  en: ${a}\n  ${lang}: ${b}`);
  for (const l of helpLinks(tr)) if (l.loc !== locale) fail(`${f}: Help Center link uses ${l.loc}, want ${locale} (${l.id})`);

  const sa = siteLinks(en).map((h) => h.replace(/^\/en\/start\//, `/${lang}/start/`)).join(" ");
  const sb = siteLinks(tr).join(" ");
  if (sa !== sb) fail(`${f}: site links differ\n  en: ${sa}\n  ${lang}: ${sb}`);

  if (otherLinks(en).join(" ") !== otherLinks(tr).join(" ")) fail(`${f}: external links differ`);

  for (const [name, re] of [["<Term", /<Term /g], ["<Tabs", /<Tabs /g], ["<Callout", /<Callout /g], ["<Q ", /<Q /g], ["<u>", /<u>/g], ["<mark>", /<mark>/g], ["<Copy", /<Copy /g], ["`code`", /`[^`\n]+`/g]])
    if (count(en, re) !== count(tr, re)) fail(`${f}: ${name} count ${count(tr, re)}, English has ${count(en, re)}`);

  const tabsEn = [...en.matchAll(/<Tabs id="([^"]+)"/g)].map((m) => m[1]).join(",");
  const tabsTr = [...tr.matchAll(/<Tabs id="([^"]+)"/g)].map((m) => m[1]).join(",");
  if (tabsEn !== tabsTr) fail(`${f}: Tabs ids ${tabsTr}, English ${tabsEn}`);

  const termsEn = [...en.matchAll(/<Term k="([^"]+)"/g)].map((m) => m[1]).join(",");
  const termsTr = [...tr.matchAll(/<Term k="([^"]+)"/g)].map((m) => m[1]).join(",");
  if (termsEn !== termsTr) fail(`${f}: Term keys ${termsTr}, English ${termsEn}`);
  for (const m of tr.matchAll(/<Term k="([^"]+)"( text="[^"]+")?/g)) if (!m[2] && m[1] !== "eSIM") fail(`${f}: <Term k="${m[1]}"> has no text=, so it shows the English label`);

  const zh = readFileSync(join(repo, "src/pages/start", `${f}.mdx`), "utf8");
  const nums = (s) => s.replace(/https?:\/\/\S+/g, "").replace(/\(\/[^)]*\)/g, "").match(/\d+(?:\.\d+)?/g) || [];
  const left = [...nums(tr)];
  const dropped = nums(en).filter((n) => { const i = left.indexOf(n); if (i < 0) return true; left.splice(i, 1); return false; });
  const added = left.filter((n) => !nums(zh).includes(n));
  if (dropped.length) fail(`${f}: numbers in the English missing here: ${dropped.join(", ")}`);
  if (added.length) fail(`${f}: numbers in neither the English nor the Chinese: ${added.join(", ")}`);
  if (left.length > added.length) console.log(`  note ${f}: extra numbers that the Chinese original also has: ${left.filter((n) => !added.includes(n)).join(", ")}`);

  const missing = [];
  for (const m of tr.matchAll(/\*\*([^*]+)\*\*/g)) {
    const label = m[1].trim();
    if (ALLOW.has(label.toLowerCase())) continue;
    if (!corpus.includes(label.toLowerCase())) missing.push(label);
  }
  if (missing.length) fail(`${f}: bold labels not found in ${locale} Help Center copy: ${[...new Set(missing)].join(" | ")}`);
}
console.log(bad ? `${bad} problem(s)` : `✓ ${lang}: lessons match English structure, links, numbers; every bold label is in the ${locale} Help Center copy`);
process.exit(bad ? 1 : 0);
