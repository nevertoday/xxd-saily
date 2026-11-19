#!/usr/bin/env python3
"""分享大图和 README 头图：用 Chrome 给 tools/og.html 截图（中文 ?lang=zh，英文 ?lang=en），1280×640，2 倍清晰度。

    python3 tools/build_og.py

输出：public/og.png、public/og-en.png（网页分享用），assets/social.png、assets/en/social.png（README 头图）。
改文字、改样子都在 tools/og.html 里改（现在是 TBD 占位，等设计定稿），改完重跑一次，两张图都看一眼有没有字压住字、顶到边。
"""
import os
import shutil
import subprocess
import tempfile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
W, H, SCALE = 1280, 640, 2
OUT = {"zh": ["public/og.png", "assets/social.png"], "en": ["public/og-en.png", "assets/en/social.png"]}


def shot(lang, path, profile):
    url = f"file://{os.path.join(ROOT, 'tools', 'og.html')}?lang={lang}"
    subprocess.run([CHROME, "--headless=new", "--hide-scrollbars", f"--force-device-scale-factor={SCALE}",
                    f"--window-size={W},{H}", f"--user-data-dir={profile}", f"--screenshot={path}", url],
                   check=True, capture_output=True)


if __name__ == "__main__":
    if not os.path.exists(CHROME):
        raise SystemExit("需要 Google Chrome 来截图")
    with tempfile.TemporaryDirectory() as tmp:
        for lang, outs in OUT.items():
            first = os.path.join(ROOT, outs[0])
            os.makedirs(os.path.dirname(first), exist_ok=True)
            shot(lang, first, os.path.join(tmp, "chrome"))
            for other in outs[1:]:
                os.makedirs(os.path.dirname(os.path.join(ROOT, other)), exist_ok=True)
                shutil.copyfile(first, os.path.join(ROOT, other))
            print("wrote", ", ".join(outs))
