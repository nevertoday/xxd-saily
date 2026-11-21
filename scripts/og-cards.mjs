// 分享大图的清单加指纹：指纹 = tools/og.html 的内容 + 截图尺寸 + 这张卡的参数，任何一样变了指纹就变。
// tools/build_og.py 截完一张就把指纹记进 tools/og-manifest.json；scripts/check-site.mjs 比对，对不上就是过期了。
//   node scripts/og-cards.mjs     打印 JSON（build_og.py 读这个）
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { fileURLToPath } from "node:url";
import { OG_CARDS, OG_SIZE } from "../src/data/og.js";

export const ROOT = fileURLToPath(new URL("..", import.meta.url));
export const MANIFEST = "tools/og-manifest.json";
const template = readFileSync(new URL("../tools/og.html", import.meta.url));
const hash = (query) => createHash("sha256").update(template).update(JSON.stringify([OG_SIZE, query])).digest("hex").slice(0, 16);
export const ogCards = () => OG_CARDS.map((c) => ({ ...c, hash: hash(c.query) }));

if (process.argv[1] === fileURLToPath(import.meta.url)) console.log(JSON.stringify({ size: OG_SIZE, manifest: MANIFEST, cards: ogCards() }));
