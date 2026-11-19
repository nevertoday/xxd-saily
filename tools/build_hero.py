#!/usr/bin/env python3
"""README 头图：一段循环播放的 SVG 动画，把新手入门三步演一遍。

    python3 tools/build_hero.py

输出 assets/hero.svg（中文）和 assets/en/hero.svg（英文）。左边是标题和三步，右边是一部手机：
勾上「支持 eSIM」→ 装好 eSIM → 飞机落地、打开数据漫游 → 状态栏换成 Saily、信号满格、「已连上当地网络」。
三步跟着画面依次亮起，播完淡出重来。手机里每一屏都是不透明的，后一屏盖住前一屏，
所以不播动画的地方（静态渲染、系统设了「减少动效」）看到的就是最后一屏、三步全亮。
文字改 TEXT，时间改 T，位置改下面的常量。
"""
import os
from html import escape

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
W, H, DUR, FADE_OUT = 1200, 660, 12.0, 11.0
BG, PANEL, INK, MUTED, HOT, LINE = "#171612", "#211f1a", "#f3f0ea", "#a7a194", "#ff7a4d", "#3a372f"
MONO = "ui-monospace,Menlo,monospace"
FONT = {"zh": "'PingFang SC','Noto Sans SC','Microsoft YaHei',sans-serif",
        "en": "'Avenir Next','Segoe UI',Helvetica,Arial,sans-serif"}

TEXT = {
    "zh": {
        "brand": "Saily 新手教程",
        "h1": ["如何爽用 Saily", "出国落地就有网"], "h1_size": 62,
        "src": "对照 Saily 官方帮助中心 · 非官方中文教程",
        "steps": ["先看手机支不支持 eSIM", "出发前买好套餐、装好", "落地打开数据漫游"],
        "demo": "示意",
        "line_before": "主号码", "line_after": "Saily",
        "check": ("检查手机", "支持 eSIM"),
        "install": ("添加 eSIM", "流量套餐已装好"),
        "land": ("落地", "Saily", "数据漫游"),
        "online": ("上网", ["已连上当地网络"], "流量走 Saily"),
    },
    "en": {
        "brand": "Saily for beginners",
        "h1": ["Get the most out of Saily", "Online when you land"], "h1_size": 50,
        "src": "Checked against Saily's help center · unofficial guide",
        "steps": ["Check your phone supports eSIM", "Buy a plan, install it before you go", "Land, turn on data roaming"],
        "demo": "Illustration",
        "line_before": "Main line", "line_after": "Saily",
        "check": ("Check the phone", "Supports eSIM"),
        "install": ("Add the eSIM", "Data plan installed"),
        "land": ("Landing", "Saily", "Data roaming"),
        "online": ("Online", ["Connected to a", "local network"], "Data via Saily"),
    },
}

# 每一屏出现的时间（秒）；三步分别跟着 check、install、land 亮起
T = {"check": 0.4, "tick": 1.4, "install": 3.2, "bar": (3.6, 5.0), "done": 5.1,
     "land": 6.2, "plane": (6.3, 7.6), "roam": 7.9, "online": 8.6, "signal": 8.8, "card": 9.6}

# 手机和屏幕
PX, PY, PW, PH = 812, 32, 316, 596
SX, SY, SW, SH = PX + 12, PY + 12, PW - 24, PH - 24
CX, LX, RX = SX + SW // 2, SX + 24, SX + SW - 24   # 屏幕中线、内容左右边
TOP = SY + 50                                          # 状态栏下面，每一屏从这里开始
Y0 = TOP + 36                                          # 每一屏标题下面，画面从这里排


def pct(t):
    return f"{t / DUR * 100:.2f}%"


def anim(name, frames, origin=None):
    o = f";transform-origin:{origin}" if origin else ""
    return f"@keyframes {name}{{{frames}}}.{name}{{animation:{name} {DUR}s infinite;transform-box:fill-box{o}}}"


def show(name, t):
    """t 秒淡入，播完淡出。"""
    return anim(name, f"0%,{pct(t)}{{opacity:0}}{pct(t + .45)},{pct(FADE_OUT)}{{opacity:1}}{pct(FADE_OUT + .6)},100%{{opacity:0}}")


def light(name, t, prop, off, on):
    """t 秒从 off 变成 on（元素自己的属性写 on，静态时就是亮的）。"""
    return anim(name, f"0%,{pct(t)}{{{prop}:{off}}}{pct(t + .3)},{pct(FADE_OUT)}{{{prop}:{on}}}{pct(FADE_OUT + .6)},100%{{{prop}:{off}}}")


def grow(name, t0, t1, axis, origin):
    return anim(name, f"0%,{pct(t0)}{{transform:scale{axis}(0)}}{pct(t1)},100%{{transform:scale{axis}(1)}}", origin)


def move(name, t0, t1, start, mid):
    return anim(name, f"0%,{pct(t0)}{{transform:{start}}}{pct(t0 + (t1 - t0) * .8)}{{transform:{mid}}}{pct(t1)},100%{{transform:none}}", "50% 50%")


def txt(x, y, s, size, fill, font, weight=400, anchor="start", cls=""):
    c = f' class="{cls}"' if cls else ""
    return f'<text{c} x="{x}" y="{y}" font-family="{font}" font-size="{size}" font-weight="{weight}" fill="{fill}" text-anchor="{anchor}">{escape(s)}</text>'


def sim(x, y, s, stroke=INK, chip=HOT):
    """封面上那张 SIM 卡：切角 + 芯片。(x, y) 是左上角，s 是相对封面的缩放（封面卡 232×312）。"""
    p = lambda v: f"{v * s:.1f}"
    return (f'<path d="M{x} {y} h{p(172)} l{p(60)} {p(60)} v{p(252)} h-{p(232)} Z" fill="none" stroke="{stroke}" stroke-width="{p(14)}" stroke-linejoin="miter"/>'
            f'<rect x="{x + 48 * s:.1f}" y="{y + 136 * s:.1f}" width="{p(136)}" height="{p(104)}" fill="{chip}"/>'
            f'<path d="M{x + 48 * s:.1f} {y + 170 * s:.1f} h{p(136)} M{x + 48 * s:.1f} {y + 206 * s:.1f} h{p(136)} M{x + 116 * s:.1f} {y + 136 * s:.1f} v{p(104)}" stroke="{BG}" stroke-width="{p(8)}"/>')


def tick_box(x, y, s, cls=""):
    c = f' class="{cls}"' if cls else ""
    return (f'<g{c}><rect x="{x}" y="{y}" width="{s}" height="{s}" fill="{HOT}"/>'
            f'<path d="M{x + s * .24:.1f} {y + s * .52:.1f} l{s * .2:.1f} {s * .2:.1f} l{s * .34:.1f} -{s * .38:.1f}" stroke="{BG}" stroke-width="{s * .12:.1f}" fill="none"/></g>')


def plane(cx, ground):
    """侧面的小飞机，机头朝右，轮子落在 ground 上。"""
    x, y = cx, ground
    body = f"M{x - 62} {y - 30} H{x + 44} Q{x + 60} {y - 30} {x + 60} {y - 22} Q{x + 60} {y - 14} {x + 44} {y - 14} H{x - 62} Z"
    fin = f"M{x - 62} {y - 22} L{x - 68} {y - 50} H{x - 52} L{x - 36} {y - 30} Z"
    wing = f"M{x - 6} {y - 22} H{x + 16} L{x - 8} {y - 4} H{x - 26} Z"
    wins = "".join(f'<rect x="{x + k}" y="{y - 26}" width="5" height="4" fill="{BG}"/>' for k in range(-44, 30, 11))
    gear = (f'<path d="M{x - 30} {y - 14} V{y - 6} M{x + 34} {y - 14} V{y - 6}" stroke="{INK}" stroke-width="3"/>'
            f'<circle cx="{x - 30}" cy="{y - 4}" r="4" fill="{INK}"/><circle cx="{x + 34}" cy="{y - 4}" r="4" fill="{INK}"/>')
    return f'<g class="plane"><path d="{body}" fill="{INK}"/><path d="{fin}" fill="{INK}"/><path d="{wing}" fill="{MUTED}"/>{wins}{gear}</g>'


def bars(right, bottom, color, cls_prefix=""):
    out = []
    for i, h in enumerate((6, 9, 12, 15)):
        c = f' class="{cls_prefix}{i}"' if cls_prefix else ""
        out.append(f'<rect{c} x="{right - 29 + i * 8}" y="{bottom - h}" width="5" height="{h}" fill="{color}"/>')
    return "".join(out)


def screen(name, head, f, body):
    """手机里的一屏：不透明底，盖住前一屏。"""
    return (f'<g class="{name}" clip-path="url(#screen)"><rect x="{SX}" y="{TOP}" width="{SW}" height="{SY + SH - TOP}" fill="{BG}"/>'
            f'{txt(LX, TOP + 42, head, 18, MUTED, f, 600)}{body}</g>')


def svg(lang):
    t, f = TEXT[lang], FONT[lang]
    css = [show(n, T[n]) for n in ("check", "install", "land", "online")]
    css += [light(f"s{i}", T[n], "fill", LINE, HOT) + light(f"s{i}t", T[n], "fill", MUTED, INK)
            for i, n in enumerate(("check", "install", "land"))]
    css += [show("tick", T["tick"]), grow("bar", *T["bar"], "X", "0 50%"), show("done", T["done"]),
            move("plane", *T["plane"], "translate(-236px,-118px) rotate(14deg)", "translate(-30px,-8px) rotate(3deg)"),
            light("track", T["roam"], "fill", LINE, HOT),
            anim("knob", f"0%,{pct(T['roam'])}{{transform:translateX(-16px)}}{pct(T['roam'] + .3)},100%{{transform:none}}"),
            show("after", T["online"]), show("card", T["card"])]
    css += [grow(f"sig{i}", T["signal"] + i * .18, T["signal"] + i * .18 + .2, "Y", "50% 100%") for i in range(4)]
    css += [show(f"arc{i}", T["online"] + .5 + i * .35) for i in range(2)]
    css.append("@media (prefers-reduced-motion:reduce){*{animation:none!important;opacity:1!important;transform:none!important}}")

    label = " ".join(t["h1"]) + ": " + " → ".join(t["steps"])
    out = [f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" viewBox="0 0 {W} {H}" role="img" aria-label="{escape(label)}">',
           f"<style>{''.join(css)}</style>",
           f'<clipPath id="screen"><rect x="{SX}" y="{SY}" width="{SW}" height="{SH}" rx="24"/></clipPath>',
           f'<rect width="{W}" height="{H}" fill="{BG}"/>']

    # 左栏：品牌、标题、出处、三步
    out.append(f'<path d="M64 50 h18 l8 7 v25 h-26 Z" fill="{INK}"/><rect x="70" y="63" width="14" height="11" fill="{HOT}"/>')
    out.append(txt(104, 74, t["brand"], 22, INK, f, 600))
    out.append(txt(64, 182, t["h1"][0], t["h1_size"], INK, f, 700))
    out.append(txt(64, 252, t["h1"][1], t["h1_size"], HOT, f, 700))
    out.append(txt(64, 302, t["src"], 20, MUTED, f))
    for i, step in enumerate(t["steps"]):
        y = 372 + i * 62
        out.append(f'<rect class="s{i}" x="64" y="{y}" width="34" height="34" fill="{HOT}"/>')
        out.append(txt(81, y + 23, f"0{i + 1}", 16, BG, MONO, 700, "middle"))
        out.append(txt(114, y + 24, step, 22, INK, f, 600, cls=f"s{i}t"))

    # 右栏：手机外壳、状态栏（一开始是主号码）
    out.append(f'<rect x="{PX}" y="{PY}" width="{PW}" height="{PH}" rx="36" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>')
    out.append(f'<rect x="{SX}" y="{SY}" width="{SW}" height="{SH}" rx="24" fill="{BG}"/>')
    out.append(txt(LX, SY + 34, "10:24", 15, INK, MONO, 600))
    out.append(txt(RX - 38, SY + 34, t["line_before"], 14, MUTED, f, 500, "end"))
    out.append(bars(RX, SY + 37, LINE))

    # 第一屏：勾上「支持 eSIM」
    head, row = t["check"]
    body = (f'<path d="M{CX - 60} {Y0 + 90} h88 l32 32 v118 h-120 Z" fill="none" stroke="{INK}" stroke-width="6"/>'
            + txt(CX, Y0 + 188, "eSIM", 26, INK, MONO, 700, "middle")
            + f'<rect x="{LX}" y="{Y0 + 300}" width="{RX - LX}" height="64" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>'
            + f'<rect x="{LX + 18}" y="{Y0 + 316}" width="32" height="32" fill="none" stroke="{MUTED}" stroke-width="2"/>'
            + tick_box(LX + 18, Y0 + 316, 32, "tick")
            + txt(LX + 66, Y0 + 340, row, 21, INK, f, 600))
    out.append(screen("check", head, f, body))

    # 第二屏：eSIM 装进手机，进度条走满
    head, done = t["install"]
    body = (f'<path d="M{CX} {Y0 + 70} v34 m-12 -12 l12 12 l12 -12" stroke="{HOT}" stroke-width="4" fill="none"/>'
            + sim(CX - 50, Y0 + 120, .43)
            + f'<rect x="{LX}" y="{Y0 + 300}" width="{RX - LX}" height="10" fill="{LINE}"/>'
            + f'<rect class="bar" x="{LX}" y="{Y0 + 300}" width="{RX - LX}" height="10" fill="{HOT}"/>'
            + f'<g class="done">{tick_box(LX, Y0 + 330, 26)}{txt(LX + 40, Y0 + 350, done, 20, INK, f, 600)}</g>')
    out.append(screen("install", head, f, body))

    # 第三屏：飞机落地，给 Saily 打开数据漫游
    head, top, row = t["land"]
    ground = Y0 + 230
    dashes = "".join(f'<rect x="{x}" y="{ground + 12}" width="18" height="3" fill="{LINE}"/>' for x in range(LX, RX - 10, 36))
    body = (f'<path d="M{SX} {ground} H{SX + SW}" stroke="{MUTED}" stroke-width="3"/>{dashes}'
            + plane(CX, ground)
            + f'<rect x="{LX}" y="{Y0 + 296}" width="{RX - LX}" height="76" fill="{PANEL}" stroke="{LINE}" stroke-width="2"/>'
            + txt(LX + 18, Y0 + 324, top, 15, MUTED, f, 600)
            + txt(LX + 18, Y0 + 352, row, 20, INK, f, 600)
            + f'<rect class="track" x="{RX - 62}" y="{Y0 + 322}" width="44" height="24" rx="12" fill="{HOT}"/>'
            + f'<circle class="knob" cx="{RX - 30}" cy="{Y0 + 334}" r="9" fill="{INK}"/>')
    out.append(screen("land", head, f, body))

    # 第四屏：Saily 的信号满格，已连上当地网络
    head, card, sub = t["online"]
    sx, sy = CX - 44, Y0 + 112
    arcs = (f'<path class="arc0" d="M{CX - 22} {sy - 14} a30 30 0 0 1 44 0" fill="none" stroke="{INK}" stroke-width="6"/>'
            f'<path class="arc1" d="M{CX - 38} {sy - 28} a52 52 0 0 1 76 0" fill="none" stroke="{MUTED}" stroke-width="6"/>')
    ch = 64 + 28 * len(card)
    lines = "".join(txt(LX + 56, Y0 + 290 + 30 * i, s, 22, INK, f, 700) for i, s in enumerate(card))
    body = (arcs + sim(sx, sy, .38)
            + f'<g class="card"><rect x="{LX}" y="{Y0 + 254}" width="{RX - LX}" height="{ch}" fill="{PANEL}" stroke="{HOT}" stroke-width="2"/>'
            + tick_box(LX + 16, Y0 + 272, 26) + lines
            + txt(LX + 56, Y0 + 290 + 30 * len(card), sub, 16, MUTED, f, 500) + "</g>")
    out.append(screen("online", head, f, body))

    # 状态栏换成 Saily：先盖住「主号码」，信号一格格满起来
    out.append(f'<g class="after"><rect x="{RX - 128}" y="{SY + 14}" width="132" height="30" fill="{BG}"/>'
               + txt(RX - 38, SY + 34, t["line_after"], 15, INK, f, 700, "end") + bars(RX, SY + 37, HOT, "sig") + "</g>")
    out.append(f'<rect x="{CX - 50}" y="{SY + SH - 14}" width="100" height="4" rx="2" fill="{LINE}"/>')
    out.append(txt(PX + PW, H - 10, t["demo"], 14, MUTED, f, 400, "end"))
    out.append("</svg>")
    return "".join(out) + "\n"


if __name__ == "__main__":
    for lang, sub in [("zh", ""), ("en", "en")]:
        d = os.path.join(ROOT, "assets", sub)
        os.makedirs(d, exist_ok=True)
        with open(os.path.join(d, "hero.svg"), "w") as fh:
            fh.write(svg(lang))
        print(f"wrote assets/{sub + '/' if sub else ''}hero.svg")
