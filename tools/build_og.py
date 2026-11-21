#!/usr/bin/env python3
"""分享大图：用 Chrome 给 tools/og.html 截图，1280×640，2 倍清晰度（2560×1280）。

    npm run og        （就是 python3 tools/build_og.py）

截哪些卡、填什么字都在 src/data/og.js：全站两张（public/og.png 中文页、public/og-en.png 其他语言，
顺带复制成 README 头图 assets/social.png、assets/en/social.png），加上每个 Wiki 条目中英文各一张
（public/og/wiki/<slug>.png、public/og/en/wiki/<slug>.png，条目名和一句话从 wiki.js、wiki.en.js 读）。
每张卡截完把指纹记进 tools/og-manifest.json，指纹没变的卡不重截；public/og/ 下不在表里的图会删掉。
改了 tools/og.html，所有卡都会重截，挑几张看一眼：字有没有互相压住、顶到边。
"""
import json
import os
import shutil
import subprocess
import tempfile
from pathlib import Path
from urllib.parse import quote, urlencode

ROOT = Path(__file__).resolve().parent.parent
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
TEMPLATE = (ROOT / "tools" / "og.html").as_uri()
OG_DIR = ROOT / "public" / "og"


def shot(card, size, path, profile):
    url = f"{TEMPLATE}?{urlencode(card['query'], quote_via=quote)}"
    subprocess.run([CHROME, "--headless=new", "--hide-scrollbars", f"--force-device-scale-factor={size['scale']}",
                    f"--window-size={size['width']},{size['height']}", f"--user-data-dir={profile}",
                    f"--screenshot={path}", url], check=True, capture_output=True)


def write_json(path, data):
    tmp = path.with_suffix(".tmp")
    tmp.write_text(json.dumps(data, ensure_ascii=False, indent=2, sort_keys=True) + "\n")
    tmp.replace(path)


def main():
    if not os.path.exists(CHROME):
        raise SystemExit("需要 Google Chrome 来截图")
    plan = json.loads(subprocess.run(["node", "scripts/og-cards.mjs"], cwd=ROOT, check=True,
                                     capture_output=True, text=True).stdout)
    manifest_path = ROOT / plan["manifest"]
    cards = {c["path"]: c for c in plan["cards"]}
    old = json.loads(manifest_path.read_text()) if manifest_path.exists() else {}
    manifest = {p: h for p, h in old.items() if p in cards}

    def outputs(card):
        return [ROOT / "public" / card["path"].lstrip("/"), *(ROOT / c for c in card["copies"])]

    todo = [c for c in cards.values() if manifest.get(c["path"]) != c["hash"] or not all(p.exists() for p in outputs(c))]
    with tempfile.TemporaryDirectory() as tmp:
        for i, card in enumerate(todo, 1):
            png = Path(tmp) / "card.png"
            shot(card, plan["size"], png, Path(tmp) / "chrome")
            for out in outputs(card):
                out.parent.mkdir(parents=True, exist_ok=True)
                shutil.copyfile(png, out)
            manifest[card["path"]] = card["hash"]
            write_json(manifest_path, manifest)
            print(f"[{i}/{len(todo)}] public{card['path']}")
    gone = [p for p in OG_DIR.rglob("*") if p.is_file() and "/" + p.relative_to(ROOT / "public").as_posix() not in cards]
    for p in gone:
        p.unlink()
        print("removed", p.relative_to(ROOT))
    if manifest != old:
        write_json(manifest_path, manifest)
    print(f"{len(cards)} 张卡：重截 {len(todo)} 张，{len(cards) - len(todo)} 张没变" + (f"，删掉 {len(gone)} 张" if gone else ""))


if __name__ == "__main__":
    main()
