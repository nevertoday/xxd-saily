#!/usr/bin/env python3
"""README 里的三张配图（SVG，轻动画，和头图 hero.svg 同一套深色风格）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  chat-vs-bot   两条路对比（左边一段回复，右边一串步骤）
  pie           过程一步步亮起，最后指向目标
  lessons       新手入门三课：每课多长、学完你手里多了什么
系统设了「减少动效」时直接显示最后的样子。文字改 TEXT。
TBD：三张图画什么由设计那一步定。现在的 TEXT 是占位（三课的标题和时间照 src/data/nav.js），版式和名字还是从 Grok Bot 站带来的。
"""
import os
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BG, PANEL, INK, MUTED, HOT, LINE, PAPER = "#171612", "#211f1a", "#f3f0ea", "#a7a194", "#ff7a4d", "#3a372f", "#f3f0ea"
MONO = "ui-monospace,Menlo,monospace"
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}}"

TEXT = {
    "zh": {
        "font": "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif",
        "demo": "示意",
        "chat": {
            "left": "TBD 左边", "right": "TBD 右边",
            "ask": "TBD 一句话",
            "reply": ["TBD", "TBD", "TBD"],
            "left_cap": "TBD 左边的说明",
            "steps": ["TBD 第一步", "TBD 第二步", "TBD 第三步", "TBD 第四步"],
            "right_cap": "TBD 右边的说明",
        },
        "pie": {
            "goal": "目标", "goal_name": "TBD",
            "process": "过程",
            "steps": ["TBD", "TBD", "TBD", "TBD", "TBD"],
            "cap": "TBD 一句说明",
        },
        "lessons": {
            "items": [
                ("第 1 课", "查手机", "5 分钟", "TBD 学完有什么"),
                ("第 2 课", "买套餐、装好", "15 分钟", "TBD 学完有什么"),
                ("第 3 课", "落地上网", "5 分钟", "TBD 学完有什么"),
            ],
            "get": "学完你有：",
        },
    },
    "en": {
        "font": "'Avenir Next','Segoe UI',Helvetica,Arial,sans-serif",
        "demo": "Illustration",
        "chat": {
            "left": "TBD left", "right": "TBD right",
            "ask": "TBD one line",
            "reply": ["TBD", "TBD", "TBD"],
            "left_cap": "TBD left caption",
            "steps": ["TBD step 1", "TBD step 2", "TBD step 3", "TBD step 4"],
            "right_cap": "TBD right caption",
        },
        "pie": {
            "goal": "Goal", "goal_name": "TBD",
            "process": "Process",
            "steps": ["TBD", "TBD", "TBD", "TBD", "TBD"],
            "cap": "TBD caption",
        },
        "lessons": {
            "items": [
                ("Lesson 1", "Check your phone", "5 min", "TBD what you get"),
                ("Lesson 2", "Buy and install", "15 min", "TBD what you get"),
                ("Lesson 3", "Land and connect", "5 min", "TBD what you get"),
            ],
            "get": "You get:",
        },
    },
}


def face(x, y, s, body=INK, eye=BG, mouth=HOT):
    k = s / 20
    return (f'<rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{body}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 12 * k:.1f}" y="{y + 6 * k:.1f}" width="{3 * k:.1f}" height="{3 * k:.1f}" fill="{eye}"/>'
            f'<rect x="{x + 5 * k:.1f}" y="{y + 12.5 * k:.1f}" width="{10 * k:.1f}" height="{2 * k:.1f}" fill="{mouth}"/>')


def t(x, y, s, size, fill, font, weight=400, anchor="start", cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>'


def show(name, start, dur, total, fade_out=None):
    """在 start 秒淡入，fade_out 秒（默认循环结束前）淡出。"""
    p = lambda s: f"{s / total * 100:.2f}%"
    end = fade_out if fade_out is not None else total - 0.8
    return (f"@keyframes {name}{{0%,{p(start)}{{opacity:0;transform:translateY(6px)}}{p(start + dur)},{p(end)}{{opacity:1;transform:translateY(0)}}"
            f"{p(end + .5)},100%{{opacity:0}}}}.{name}{{animation:{name} {total}s infinite;transform-box:fill-box}}")


def wrap(w, h, css, body, label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><rect width="{w}" height="{h}" fill="{BG}"/>{body}</svg>\n')


def chat_vs_bot(lang):
    T, f = TEXT[lang]["chat"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 440, 10.0
    css, out = [], []
    # 左：聊天
    out.append(f'<rect x="40" y="40" width="540" height="300" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(t(64, 82, T["left"], 24, INK, f, 700))
    aw = int(len(T["ask"]) * (19 if lang == "zh" else 9.6)) + 40
    out.append(f'<g class="ask"><rect x="{556 - aw}" y="104" width="{aw}" height="48" fill="{PAPER}"/>{t(556 - aw + 18, 135, T["ask"], 19, BG, f)}</g>')
    out.append(f'<g class="reply"><rect x="64" y="170" width="380" height="{len(T["reply"]) * 32 + 22}" fill="{BG}" stroke="{LINE}" stroke-width="2"/>')
    for i, line in enumerate(T["reply"]):
        out.append(t(82, 200 + i * 32, line, 19, INK, f))
    out.append("</g>")
    out.append(t(310, 384, T["left_cap"], 21, MUTED, f, 500, "middle"))
    css += [show("ask", .3, .4, TOTAL), show("reply", 1.2, .5, TOTAL)]
    # 中间
    out.append(t(600, 200, "vs", 26, MUTED, MONO, 700, "middle"))
    # 右：bot
    out.append(f'<rect x="620" y="40" width="540" height="300" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(face(644, 58, 30))
    out.append(t(686, 82, T["right"], 24, INK, f, 700))
    for i, step in enumerate(T["steps"]):
        y = 112 + i * 54
        name = f"st{i}"
        out.append(f'<g class="{name}"><rect x="644" y="{y}" width="30" height="30" fill="{HOT}"/>'
                   f'<path d="M651 {y + 15} l6 6 l11 -12" stroke="{BG}" stroke-width="3.5" fill="none"/>'
                   f'{t(690, y + 23, step, 20, INK, f)}</g>')
        css.append(show(name, 2.4 + i * 1.2, .4, TOTAL))
    out.append(t(890, 384, T["right_cap"], 21, HOT, f, 600, "middle"))
    out.append(t(1160, 424, TEXT[lang]["demo"], 15, MUTED, f, 400, "end"))
    return wrap(W, H, "".join(css), "".join(out), f'{T["left"]}: {T["left_cap"]} {T["right"]}: {T["right_cap"]}')


def pie(lang):
    T, f = TEXT[lang]["pie"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 400, 9.0
    css, out = [], []
    # 过程：一排步骤
    out.append(t(48, 70, T["process"], 24, MUTED, f, 700))
    x, y, gap = 48, 96, 18
    widths = []
    for i, step in enumerate(T["steps"]):
        w = max(112, int(len(step) * (22 if lang == "zh" else 12.5)) + 44)
        widths.append(w)
        name = f"p{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y}" width="{w}" height="58" fill="{PANEL}" stroke="{INK}" stroke-width="2"/>'
                   f'{t(x + 14, y + 22, f"0{i + 1}", 13, MUTED, MONO, 700)}{t(x + 14, y + 46, step, 21, INK, f, 600)}</g>')
        css.append(show(name, .3 + i * .7, .35, TOTAL))
        if i < len(T["steps"]) - 1:
            out.append(f'<path class="{name}" d="M{x + w + 3} {y + 29} h{gap - 6}" stroke="{MUTED}" stroke-width="2.5"/>')
        x += w + gap
    end_x = x - gap
    # 箭头指向目标
    out.append(f'<path class="arrow" d="M{end_x + 12} {y + 29} H{860} " stroke="{HOT}" stroke-width="3"/><path class="arrow" d="M852 {y + 21} l10 8 l-10 8" stroke="{HOT}" stroke-width="3" fill="none"/>')
    css.append(show("arrow", 3.8, .4, TOTAL))
    # 目标：派
    out.append(f'<g class="goal"><rect x="880" y="40" width="280" height="260" fill="{PANEL}" stroke="{HOT}" stroke-width="2.5"/>')
    out.append(t(904, 78, T["goal"], 24, HOT, f, 700))
    cx, cy, r = 1020, 182, 70
    out.append(f'<ellipse cx="{cx}" cy="{cy + 8}" rx="{r + 14}" ry="{r * .42 + 10}" fill="{INK}" opacity=".18"/>')
    out.append(f'<ellipse cx="{cx}" cy="{cy}" rx="{r + 6}" ry="{r * .42 + 6}" fill="#c9783c"/>')
    out.append(f'<ellipse cx="{cx}" cy="{cy - 4}" rx="{r}" ry="{r * .42}" fill="#e3a35a"/>')
    out.append(f'<clipPath id="crust"><ellipse cx="{cx}" cy="{cy - 4}" rx="{r - 4}" ry="{r * .42 - 3}"/></clipPath><g clip-path="url(#crust)">')
    for k in (-2, -1, 0, 1, 2):
        out.append(f'<path d="M{cx + k * 24 - 18} {cy - 30} L{cx + k * 24 + 18} {cy + 22}" stroke="#f6d39b" stroke-width="5" stroke-linecap="round"/>')
    out.append("</g>")
    out.append(t(1020, 276, T["goal_name"], 22, INK, f, 600, "middle"))
    out.append("</g>")
    css.append(show("goal", 4.3, .5, TOTAL))
    # 说明
    out.append(t(48, 360, T["cap"], 22 if lang == "zh" else 20, INK, f, 500))
    return wrap(W, H, "".join(css), "".join(out), T["cap"])


def lessons(lang):
    T, f = TEXT[lang]["lessons"], TEXT[lang]["font"]
    W, H, TOTAL = 1200, 330, 8.0
    css, out = [], []
    cw, gap, x0, y0 = 352, 32, 48, 48
    out.append(f'<rect x="{x0}" y="{y0 + 118}" width="{cw * 3 + gap * 2}" height="4" fill="{LINE}"/>')
    out.append(f'<rect class="bar" x="{x0}" y="{y0 + 118}" width="{cw * 3 + gap * 2}" height="4" fill="{HOT}"/>')
    css.append(f"@keyframes bar{{0%{{transform:scaleX(0)}}70%,92%{{transform:scaleX(1)}}100%{{transform:scaleX(1);opacity:0}}}}.bar{{transform-origin:{x0}px 0;animation:bar {TOTAL}s infinite}}")
    for i, (num, title, mins, get) in enumerate(T["items"]):
        x = x0 + i * (cw + gap)
        name = f"l{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y0}" width="{cw}" height="236" fill="{PANEL}" stroke="{HOT if i == 2 else LINE}" stroke-width="2"/>')
        out.append(t(x + 24, y0 + 40, num, 18, HOT, f, 700))
        out.append(t(x + cw - 24, y0 + 40, mins, 17, MUTED, MONO, 600, "end"))
        out.append(t(x + 24, y0 + 88, title, 28, INK, f, 700))
        out.append(t(x + 24, y0 + 168, T["get"], 17, MUTED, f, 500))
        out.append(t(x + 24, y0 + 200, get, 20, INK, f, 600))
        out.append("</g>")
        css.append(show(name, .2 + i * 1.6, .45, TOTAL, TOTAL - .4))
    return wrap(W, H, "".join(css), "".join(out), " · ".join(f"{n} {ti} ({m}): {g}" for n, ti, m, g in T["items"]))


if __name__ == "__main__":
    for lang, sub in [("zh", "readme"), ("en", "en/readme")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        for name, fn in [("chat-vs-bot", chat_vs_bot), ("pie", pie), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{chat-vs-bot,pie,lessons}.svg")
