#!/usr/bin/env python3
"""README 头图：一段循环播放的 SVG 动画。

    python3 tools/build_hero.py

输出 assets/hero.svg（中文）和 assets/en/hero.svg（英文）。左边是标题和四步，右边是一段对话，四步跟着对话依次亮起，播完淡出重来。
系统设了「减少动效」时直接显示最后的样子。文字改 TEXT，位置和时间改下面的常量。
TBD：画面和文字由设计那一步定。现在的 TEXT 是占位；对话框、头像（face）和右栏的「卡片」是从 Grok Bot 站带来的版式，还没改成 Saily 的样子。
"""
import os
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H, DUR = 1200, 660, 13.0
BG, PANEL, INK, MUTED, HOT, LINE, ME = "#171612", "#211f1a", "#f3f0ea", "#a7a194", "#ff7a4d", "#3a372f", "#f3f0ea"

TEXT = {
    "zh": {
        "font": "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif",
        "brand": "Saily 新手教程",
        "h1": ["TBD 标题第一行", "TBD 第二行"],
        "sub": "TBD 副标题 · 非官方学习站",
        "steps": ["查手机", "买套餐", "装 eSIM", "落地上网"],
        "bot": "TBD",
        "u1": ["TBD 第一句", "TBD"],
        "b1": ["TBD 回答", "TBD"],
        "u2": ["TBD 第二句", "TBD"],
        "card": ["TBD 卡片", "TBD"],
        "b2": ["TBD 结果", "TBD"],
        "cw": 26, "lh": 36,
    },
    "en": {
        "font": "'Avenir Next','Segoe UI',Helvetica,Arial,sans-serif",
        "brand": "Saily for beginners",
        "h1": ["TBD headline line 1", "TBD line 2"],
        "sub": "TBD subtitle · an unofficial guide",
        "steps": ["Check your phone", "Buy a plan", "Install the eSIM", "Land and connect"],
        "bot": "TBD",
        "u1": ["TBD first line", "TBD"],
        "b1": ["TBD reply", "TBD"],
        "u2": ["TBD second line", "TBD"],
        "card": ["TBD card", "TBD"],
        "b2": ["TBD result", "TBD"],
        "cw": 13.5, "lh": 34,
    },
}

# 每样东西出现的时间（秒）；四步分别跟着 u1、b1、u2、card 亮起
T_U1, T_B1, T_U2, T_CARD, T_B2 = 0.6, 2.6, 4.8, 7.0, 9.0
FADE_OUT = 11.8


def pct(t):
    return f"{t / DUR * 100:.2f}%"


def appear(name, t):
    return (f"@keyframes {name}{{0%,{pct(t)}{{opacity:0;transform:translateY(10px)}}"
            f"{pct(t + .45)},{pct(FADE_OUT)}{{opacity:1;transform:translateY(0)}}"
            f"{pct(FADE_OUT + .6)},100%{{opacity:0;transform:translateY(0)}}}}"
            f".{name}{{animation:{name} {DUR}s infinite;transform-box:fill-box}}")


def light(name, t):
    return (f"@keyframes {name}{{0%,{pct(t)}{{fill:{LINE}}}{pct(t + .3)},{pct(FADE_OUT)}{{fill:{HOT}}}{pct(FADE_OUT + .6)},100%{{fill:{LINE}}}}}"
            f".{name}{{animation:{name} {DUR}s infinite}}"
            f"@keyframes {name}t{{0%,{pct(t)}{{fill:{MUTED}}}{pct(t + .3)},{pct(FADE_OUT)}{{fill:{INK}}}{pct(FADE_OUT + .6)},100%{{fill:{MUTED}}}}}"
            f".{name}t{{animation:{name}t {DUR}s infinite}}")


def text_lines(x, y, lines, size, fill, font, lh, weight=400, anchor="start"):
    out = []
    for i, line in enumerate(lines):
        out.append(f'<text x="{x}" y="{y + i * lh}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(line)}</text>')
    return "".join(out)


def face(x, y, s, body=INK, eye=BG, mouth=HOT):
    k = s / 20
    return (f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{body}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 12 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 12.5 * k:.1f}" width="{10 * k:.1f}" height="{2 * k:.1f}" fill="{mouth}"/>')


def bubble(x, y, lines, t, cls, mine, f, cw, lh, size=22):
    w = int(max(len(l) for l in lines) * cw * size / 26 + 36)
    h = len(lines) * lh + 22
    if mine:
        x = x - w
    fill, color = (ME, BG) if mine else (PANEL, INK)
    border = "" if mine else f' stroke="{LINE}" stroke-width="2"'
    g = [f'<g class="{cls}">']
    if not mine:
        g.append(face(x - 48, y, 36))
    g.append(f'<rect x="{x}" y="{y}" width="{w}" height="{h}" fill="{fill}"{border}/>')
    g.append(text_lines(x + 18, y + 33, lines, size, color, f, lh))
    g.append("</g>")
    return "".join(g), y + h


def svg(lang):
    t = TEXT[lang]
    f, cw, lh = t["font"], t["cw"], t["lh"]
    css = [appear("u1", T_U1), appear("b1", T_B1), appear("u2", T_U2), appear("card", T_CARD), appear("b2", T_B2),
           light("s0", T_U1), light("s1", T_B1), light("s2", T_U2), light("s3", T_CARD),
           "@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}"
           f".s0,.s1,.s2,.s3{{fill:{HOT}!important}}.s0t,.s1t,.s2t,.s3t{{fill:{INK}!important}}}}"]
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(" ".join(t["h1"]))}">',
           f"<style>{''.join(css)}</style>",
           f'<rect width="{W}" height="{H}" fill="{BG}"/>']
    # 左栏
    out.append(face(64, 56, 30, INK, BG, BG))
    out.append(f'<text x="106" y="80" font-family="{f}" font-size="22" font-weight="600" fill="{INK}">{escape(t["brand"])}</text>')
    out.append(f'<text x="64" y="186" font-family="{f}" font-size="54" font-weight="700" fill="{INK}">{escape(t["h1"][0])}</text>')
    out.append(f'<text x="64" y="256" font-family="{f}" font-size="54" font-weight="700" fill="{HOT}">{escape(t["h1"][1])}</text>')
    out.append(f'<text x="64" y="304" font-family="{f}" font-size="21" fill="{MUTED}">{escape(t["sub"])}</text>')
    for i, step in enumerate(t["steps"]):
        y = 368 + i * 52
        out.append(f'<rect class="s{i}" x="64" y="{y}" width="34" height="34" fill="{LINE}"/>')
        out.append(f'<text x="81" y="{y + 23}" font-family="ui-monospace,Menlo,monospace" font-size="16" font-weight="700" fill="{BG}" text-anchor="middle">0{i + 1}</text>')
        out.append(f'<text class="s{i}t" x="114" y="{y + 24}" font-family="{f}" font-size="22" font-weight="600" fill="{MUTED}">{escape(step)}</text>')
    # 右栏：对话窗口
    wx, wy, ww, wh = 600, 40, 548, 582
    out.append(f'<rect x="{wx}" y="{wy}" width="{ww}" height="{wh}" fill="{BG}" stroke="{LINE}" stroke-width="2"/>')
    out.append(f'<rect x="{wx}" y="{wy}" width="{ww}" height="50" fill="{PANEL}"/>')
    out.append(f'<line x1="{wx}" y1="{wy + 50}" x2="{wx + ww}" y2="{wy + 50}" stroke="{LINE}" stroke-width="2"/>')
    out.append(face(wx + 18, wy + 12, 26))
    out.append(f'<text x="{wx + 56}" y="{wy + 33}" font-family="{f}" font-size="19" font-weight="600" fill="{INK}">{escape(t["bot"])}</text>')
    right, left = wx + ww - 22, wx + 72
    y = wy + 72
    g, y = bubble(right, y, t["u1"], T_U1, "u1", True, f, cw, lh); out.append(g)
    g, y = bubble(left, y + 14, t["b1"], T_B1, "b1", False, f, cw, lh); out.append(g)
    g, y = bubble(right, y + 14, t["u2"], T_U2, "u2", True, f, cw, lh); out.append(g)
    cy = y + 14
    out.append(f'<g class="card"><rect x="{left - 48}" y="{cy}" width="{right - left + 48}" height="58" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>'
               f'<circle cx="{left - 22}" cy="{cy + 29}" r="11" fill="none" stroke="{HOT}" stroke-width="2.5"/>'
               f'<path d="M{left - 22} {cy + 22} V{cy + 29} H{left - 16}" stroke="{HOT}" stroke-width="2.5" fill="none"/>'
               f'<text x="{left + 2}" y="{cy + 37}" font-family="{f}" font-size="21" font-weight="600" fill="{INK}">{escape(t["card"][0])}</text>'
               f'<text x="{right - 16}" y="{cy + 37}" font-family="{f}" font-size="19" font-weight="600" fill="{HOT}" text-anchor="end">{escape(t["card"][1])}</text></g>')
    g, y = bubble(left, cy + 58 + 14, t["b2"], T_B2, "b2", False, f, cw, lh); out.append(g)
    out.append("</svg>")
    return "".join(out) + "\n", y


if __name__ == "__main__":
    for lang, sub in [("zh", ""), ("en", "en")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        content, bottom = svg(lang)
        with open(os.path.join(d, "hero.svg"), "w") as fh:
            fh.write(content)
        print(f"wrote assets/{sub + '/' if sub else ''}hero.svg (last bubble ends at y={bottom}, window ends at 622)")
