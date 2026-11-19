#!/usr/bin/env python3
"""README 里的三张配图（SVG，轻动画，和头图 hero.svg 同一套深色风格，颜色、字体、SIM 卡图形都从 build_hero 拿）。

    python3 tools/build_readme_svgs.py

输出 assets/readme/<名字>.svg（中文）和 assets/en/readme/<名字>.svg（英文）：
  two-lines  主号码和 Saily 各管一件事：主号码接电话、收短信，流量关掉；Saily 管出国上网
             （依据官方帮助中心 16747226859164、20793044376092）
  no-esim    手机不支持 eSIM：买 eSIM.me 的实体卡，找 Saily 客服要二维码，Saily 套餐就能用（依据 12822397552028）
  lessons    新手入门三课：每课多长、学完你手里多了什么。课名和时间从 src/data/nav.js 的 LESSONS 读
系统设了「减少动效」时直接显示最后的样子；不播动画的地方看到的也是最后的样子。文字改 TEXT。
"""
import os
import re
from html import escape

from build_hero import BG, PANEL, INK, MUTED, HOT, LINE, MONO, FONT, sim, tick_box, txt as t

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REDUCE = "@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}}"

TEXT = {
    "zh": {
        "two": {
            "head": "一部手机，两条线各管一件事",
            "main": ("你的主号码", "号码"), "saily": ("Saily eSIM", "流量"),
            "main_rows": [("tick", "电话、短信照常用你的号码"), ("off", "流量关掉，免得产生漫游费")],
            "saily_rows": [("on", "流量开着，在国外上网走这条线"), ("tick", "用了多少，在 Saily App 里看")],
            "notes": ["前提：手机能让两条线同时开着（双卡双待）。",
                      "用主号码接电话，运营商可能另收漫游费，出发前问一下你的运营商。"],
        },
        "noesim": {
            "phone": "手机不支持 eSIM",
            "tag": "Saily 官方做法", "card": "eSIM.me 实体卡",
            "steps": ["买一张 eSIM.me 的卡", "插进卡槽，代替原来的卡", "找 Saily 客服要二维码"],
            "done": "Saily 套餐能用了",
            "note": "BeeSIM 等其他卡是社区里的做法，Saily 的帮助文档没有写到。",
        },
        "lessons": {"num": "第 {n} 课", "get_label": "学完你有：",
                    "get": ["知道手机能不能用", "一个装好的流量套餐", "落地就能上网"]},
    },
    "en": {
        "two": {
            "head": "One phone, two lines, one job each",
            "main": ("Your main SIM", "Number"), "saily": ("Saily eSIM", "Data"),
            "main_rows": [("tick", "Calls and texts stay on your number"), ("off", "Data off, to avoid roaming charges")],
            "saily_rows": [("on", "Data on: your internet abroad"), ("tick", "Track your usage in the Saily app")],
            "notes": ["Your phone has to keep both lines on at once (Dual SIM Dual Standby).",
                      "Your carrier may charge roaming fees for calls on your main number. Ask them before you go."],
        },
        "noesim": {
            "phone": "Your phone has no eSIM",
            "tag": "Saily's official route", "card": "An eSIM.me card",
            "steps": ["Buy an eSIM.me card", "Put it in place of your SIM card", "Ask Saily support for the QR code"],
            "done": "Your Saily plan works",
            "note": "Other cards, such as BeeSIM, are community methods that Saily's docs don't cover.",
        },
        "lessons": {"num": "Lesson {n}", "get_label": "After this lesson:",
                    "get": ["You know if your phone works", "A data plan, installed", "You're online when you land"]},
    },
}


def read_lessons():
    """从 src/data/nav.js 的 LESSONS 读每课的中英文课名和时间。"""
    src = open(os.path.join(ROOT, "src", "data", "nav.js"), encoding="utf-8").read()
    block = re.search(r"export const LESSONS = \[(.*?)\n\];", src, re.S).group(1)
    out = []
    for line in re.findall(r"^\s*\{ n: \d.*$", block, re.M):
        zh, en = line.split("en: {", 1)
        field = lambda part, key: re.search(key + r': "([^"]*)"', part).group(1)
        out.append({"zh": (field(zh, "title"), field(zh, "minutes")), "en": (field(en, "title"), field(en, "minutes"))})
    if len(out) != 3:
        raise SystemExit(f"expected 3 lessons in src/data/nav.js, found {len(out)}")
    return out


def width(s, size):
    """估一行字有多宽（PingFang / Avenir Next 的大致字宽），只用来折行，最后以截图检查为准。"""
    w = 0
    for ch in s:
        w += 1.0 if ord(ch) > 0x2e7f else .3 if ch == " " else .68 if ch.isupper() or ch.isdigit() else .56
    return w * size


def wrap(s, size, maxw):
    """按宽度折行。英文各行尽量一样长（不让最后一行只剩一个词）；中文照 greedy 断在逗号后面。"""
    rows = greedy(s, size, maxw)
    while len(rows) > 1 and not re.search(r"[\u2e80-\uffff]", s) and len(greedy(s, size, maxw - 4)) == len(rows):
        maxw -= 4
        rows = greedy(s, size, maxw)
    return rows


def greedy(s, size, maxw):
    """英文在空格处断，中文在字间断，优先断在逗号后面。"""
    lines, cur = [], []
    for tok in re.findall(r"[^\s\u2e80-\uffff]+\s*|\s+|.[，、。；：）]?", s):
        if cur and width("".join(cur) + tok.rstrip(), size) > maxw:
            commas = [i for i, c in enumerate(cur) if c[-1] in "，、"]
            cut = commas[-1] + 1 if commas else len(cur)
            lines.append("".join(cur[:cut]).rstrip())
            cur = cur[cut:]
        cur.append(tok)
    return lines + ["".join(cur).rstrip()]


def lines(x, y, rows, size, fill, font, lh, weight=400, anchor="start"):
    return "".join(t(x, y + i * lh, s, size, fill, font, weight, anchor) for i, s in enumerate(rows))


def show(name, start, total, dur=.4):
    """在 start 秒淡入，循环结束前 0.8 秒淡出。"""
    p = lambda s: f"{s / total * 100:.2f}%"
    end = total - .8
    return (f"@keyframes {name}{{0%,{p(start)}{{opacity:0;transform:translateY(6px)}}{p(start + dur)},{p(end)}{{opacity:1;transform:translateY(0)}}"
            f"{p(end + .5)},100%{{opacity:0}}}}.{name}{{animation:{name} {total}s infinite;transform-box:fill-box}}")


def toggle(x, y, on):
    knob = x + 30 if on else x + 12
    return (f'<rect x="{x}" y="{y + 2}" width="42" height="24" rx="12" fill="{HOT if on else LINE}"/>'
            f'<circle cx="{knob}" cy="{y + 14}" r="8" fill="{INK if on else MUTED}"/>')


def signal_arcs(cx, y, cls=""):
    c0, c1 = (f' class="{cls}0"', f' class="{cls}1"') if cls else ("", "")
    return (f'<path{c0} d="M{cx - 18} {y} a24 24 0 0 1 36 0" fill="none" stroke="{INK}" stroke-width="5"/>'
            f'<path{c1} d="M{cx - 31} {y - 12} a42 42 0 0 1 62 0" fill="none" stroke="{MUTED}" stroke-width="5"/>')


def wrap_svg(w, h, css, body, label):
    return (f'<svg xmlns="http://www.w3.org/2000/svg" width="{w}" height="{h}" viewBox="0 0 {w} {h}" role="img" aria-label="{escape(label)}">'
            f'<style>{css}{REDUCE}</style><rect width="{w}" height="{h}" fill="{BG}"/>{body}</svg>\n')


def two_lines(lang):
    T, f = TEXT[lang]["two"], FONT[lang]
    W, H, TOTAL = 1200, 440, 9.0
    css, out = [], []
    out.append(t(40, 52, T["head"], 24, INK, f, 700))
    cw, top, ch = 532, 82, 250
    cards = [(40, T["main"], T["main_rows"], LINE, MUTED, "m", 0.3), (628, T["saily"], T["saily_rows"], HOT, HOT, "s", 2.4)]
    for x, (title, tag), rows, stroke, tag_fill, key, t0 in cards:
        out.append(f'<g class="{key}"><rect x="{x}" y="{top}" width="{cw}" height="{ch}" fill="{PANEL}" stroke="{stroke}" stroke-width="2"/>')
        out.append(sim(x + 28, top + 26, .17, INK, HOT if key == "s" else MUTED))
        out.append(t(x + 86, top + 64, title, 26, INK, f, 700))
        out.append(t(x + cw - 28, top + 62, tag, 18, tag_fill, f, 700, "end"))
        out.append(f'<rect x="{x + 28}" y="{top + 100}" width="{cw - 56}" height="2" fill="{LINE}"/></g>')
        css.append(show(key, t0, TOTAL))
        for i, (icon, text) in enumerate(rows):
            y, name = top + 128 + i * 58, f"{key}{i}"
            mark = tick_box(x + 28, y, 28) if icon == "tick" else toggle(x + 21, y, icon == "on")
            out.append(f'<g class="{name}">{mark}{t(x + 80, y + 21, text, 21, INK, f, 500)}</g>')
            css.append(show(name, t0 + .6 + i * .6, TOTAL))
    out.append(t(600, top + ch // 2 + 12, "+", 34, MUTED, MONO, 700, "middle", "plus"))
    css.append(show("plus", 1.9, TOTAL))
    out.append(f'<g class="note">{lines(40, top + ch + 46, T["notes"], 17, MUTED, f, 28)}</g>')
    css.append(show("note", 4.4, TOTAL))
    label = f'{T["head"]}. {T["main"][0]}: ' + "; ".join(r[1] for r in T["main_rows"]) + f'. {T["saily"][0]}: ' + "; ".join(r[1] for r in T["saily_rows"]) + ". " + " ".join(T["notes"])
    return wrap_svg(W, H, "".join(css), "".join(out), label)


def no_esim(lang):
    T, f = TEXT[lang]["noesim"], FONT[lang]
    W, H, TOTAL = 1200, 390, 9.0
    css, out = [], []
    top, bh = 40, 270
    # 1 手机不支持 eSIM
    bx, bw = 40, 280
    out.append(f'<g class="b0"><rect x="{bx}" y="{top}" width="{bw}" height="{bh}" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    px, py = bx + bw // 2 - 36, top + 34
    out.append(f'<rect x="{px}" y="{py}" width="72" height="124" rx="12" fill="none" stroke="{INK}" stroke-width="4"/>'
               f'<rect x="{px + 26}" y="{py + 112}" width="20" height="3" fill="{INK}"/>')
    out.append(t(px + 36, py + 70, "eSIM", 17, MUTED, MONO, 700, "middle"))
    out.append(f'<path d="M{px + 8} {py + 74} L{px + 64} {py + 50}" stroke="{HOT}" stroke-width="4"/>')
    out.append(lines(bx + bw // 2, top + 210, wrap(T["phone"], 22, bw - 48), 22, INK, f, 30, 700, "middle") + "</g>")
    css.append(show("b0", .3, TOTAL))
    # 2 官方做法：eSIM.me 实体卡
    cx, cwid = 380, 440
    out.append(f'<g class="b1"><rect x="{cx}" y="{top}" width="{cwid}" height="{bh}" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>')
    out.append(sim(cx + 28, top + 28, .2, INK, INK))
    out.append(t(cx + 96, top + 52, T["tag"], 16, HOT, f, 700))
    out.append(t(cx + 96, top + 86, T["card"], 26, INK, f, 700) + "</g>")
    css.append(show("b1", 1.5, TOTAL))
    for i, step in enumerate(T["steps"]):
        y, name = top + 128 + i * 44, f"st{i}"
        out.append(f'<g class="{name}"><rect x="{cx + 28}" y="{y}" width="28" height="28" fill="{LINE}"/>'
                   f'{t(cx + 42, y + 20, str(i + 1), 15, INK, MONO, 700, "middle")}{t(cx + 72, y + 21, step, 20, INK, f, 500)}</g>')
        css.append(show(name, 2.1 + i * .6, TOTAL))
    # 3 Saily 套餐能用了
    dx, dw = 880, 280
    out.append(f'<g class="b2"><rect x="{dx}" y="{top}" width="{dw}" height="{bh}" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(sim(dx + dw // 2 - 42, top + 70, .36))
    out.append(lines(dx + dw // 2, top + 210, wrap(T["done"], 22, dw - 48), 22, INK, f, 30, 700, "middle") + "</g>")
    out.append(signal_arcs(dx + dw // 2, top + 56, "arc"))
    css += [show("b2", 4.4, TOTAL), show("arc0", 4.8, TOTAL), show("arc1", 5.1, TOTAL)]
    # 箭头
    for i, (x0, x1) in enumerate([(bx + bw, cx), (cx + cwid, dx)]):
        y = top + bh // 2
        out.append(f'<g class="ar{i}"><path d="M{x0 + 10} {y} H{x1 - 12}" stroke="{HOT}" stroke-width="3"/>'
                   f'<path d="M{x1 - 20} {y - 8} l8 8 l-8 8" stroke="{HOT}" stroke-width="3" fill="none"/></g>')
        css.append(show(f"ar{i}", 1.1 if i == 0 else 4.0, TOTAL))
    out.append(t(40, top + bh + 46, T["note"], 17, MUTED, f, 400, cls="note"))
    css.append(show("note", 5.4, TOTAL))
    label = f'{T["phone"]} → {T["card"]}: ' + "; ".join(T["steps"]) + f' → {T["done"]}. {T["note"]}'
    return wrap_svg(W, H, "".join(css), "".join(out), label)


def lessons(lang):
    T, f = TEXT[lang]["lessons"], FONT[lang]
    W, H, TOTAL = 1200, 308, 8.0
    css, out = [], []
    cw, gap, x0, y0, ch = 352, 32, 40, 40, 228
    out.append(f'<rect x="{x0}" y="{y0 + 130}" width="{cw * 3 + gap * 2}" height="4" fill="{LINE}"/>')
    out.append(f'<rect class="bar" x="{x0}" y="{y0 + 130}" width="{cw * 3 + gap * 2}" height="4" fill="{HOT}"/>')
    css.append(f"@keyframes bar{{0%{{transform:scaleX(0);opacity:1}}70%,92%{{transform:scaleX(1);opacity:1}}100%{{transform:scaleX(1);opacity:0}}}}"
               f".bar{{transform-origin:0 50%;transform-box:fill-box;animation:bar {TOTAL}s infinite}}")
    items = read_lessons()
    for i, lesson in enumerate(items):
        title, mins = lesson[lang]
        x, name = x0 + i * (cw + gap), f"l{i}"
        out.append(f'<g class="{name}"><rect x="{x}" y="{y0}" width="{cw}" height="{ch}" fill="{PANEL}" stroke="{HOT if i == 2 else LINE}" stroke-width="2"/>')
        out.append(t(x + 24, y0 + 40, T["num"].format(n=i + 1), 18, HOT, f, 700))
        out.append(t(x + cw - 24, y0 + 40, mins, 16, MUTED, f, 600, "end"))
        out.append(lines(x + 24, y0 + 80, wrap(title, 22, cw - 48), 22, INK, f, 30, 700))
        out.append(t(x + 24, y0 + 160, T["get_label"], 16, MUTED, f, 500))
        out.append(lines(x + 24, y0 + 192, wrap(T["get"][i], 20, cw - 48), 20, INK, f, 28, 600))
        out.append("</g>")
        css.append(show(name, .2 + i * 1.6, TOTAL, .45))
    label = " · ".join(f'{T["num"].format(n=i + 1)} {it[lang][0]} ({it[lang][1]}): {T["get"][i]}' for i, it in enumerate(items))
    return wrap_svg(W, H, "".join(css), "".join(out), label)


if __name__ == "__main__":
    for lang, sub in [("zh", "readme"), ("en", "en/readme")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        for name, fn in [("two-lines", two_lines), ("no-esim", no_esim), ("lessons", lessons)]:
            with open(os.path.join(d, f"{name}.svg"), "w") as fh:
                fh.write(fn(lang))
        print("wrote", f"assets/{sub}/" + "{two-lines,no-esim,lessons}.svg")
