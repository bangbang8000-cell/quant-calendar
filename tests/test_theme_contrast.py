# -*- coding: utf-8 -*-
"""
V4.6 (FR-4.6.6): 配色主题门禁 — 主色对比度 + classic bg 完备
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _rgb(h):
    h = h.lstrip("#")
    if len(h) == 3:
        h = "".join(c * 2 for c in h)
    return tuple(int(h[i:i + 2], 16) for i in (0, 2, 4))


def _lum(rgb):
    def f(c):
        c = c / 255.0
        return c / 12.92 if c <= 0.04045 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = map(f, rgb)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def _contrast(a, b):
    la, lb = _lum(_rgb(a)), _lum(_rgb(b))
    return (max(la, lb) + 0.05) / (min(la, lb) + 0.05)


def _themes():
    src = open(os.path.join(BASE, "frontend", "css", "themes.css"), encoding="utf-8").read()
    themes = {}
    for m in re.finditer(r'\[data-theme="([^"]+)"\] \{([\s\S]*?)\}', src):
        name, body = m.group(1), m.group(2)
        def tok(k):
            mm = re.search(r"--" + k + r":\s*(#[0-9a-fA-F]{3,6})\b", body)
            return mm.group(1) if mm else None
        themes[name] = {"primary": tok("primary-color"), "bg": tok("bg-page")}
    return themes


def test_primary_contrast_on_bg():
    """每主题主色 vs 背景对比度 >= 3:1 (大按钮文字)"""
    bad = []
    for name, t in _themes().items():
        if not t["primary"] or not t["bg"]:
            continue
        c = _contrast(t["primary"], t["bg"])
        if c < 3.0:
            bad.append(f"{name}: primary {t['primary']} vs bg {t['bg']} = {c:.2f}")
    assert not bad, "主色对比度不足: " + str(bad)


def test_classic_themes_have_bg():
    """classic 系列主题必须定义 --bg-page"""
    themes = _themes()
    for name in ("classic-white", "classic-red", "classic-gold"):
        assert themes[name]["bg"], f"{name} 缺 --bg-page 定义"


# V4.8.1 (DEV-PLAN 2.3): 时间轴 dark 适配守护 — 连接线暗色令牌 + 徽标深字 + chip 暗底
import re as _re


def _darkpro_section():
    src_css = open(os.path.join(BASE, "frontend", "css", "themes.css"), encoding="utf-8").read()
    m = _re.search(r'\[data-theme="dark-pro"\] \{([\s\S]*?)\}', src_css)
    return m.group(1) if m else ""


def test_darkpro_timeline_adaption_v481():
    """D5: dark-pro 时间轴可读性 — 徽标深字(亮青主色上白字不可读), chip 暗底, 连接线暗色"""
    block = _darkpro_section()
    src_css = open(os.path.join(BASE, "frontend", "css", "themes.css"), encoding="utf-8").read()
    # 1) 徽标/当前 tag 用深字 (var(--bg-page) = 深底)
    m = _re.search(
        r'\[data-theme="dark-pro"\] \.merrill-stage-chip-current,\s*\[data-theme="dark-pro"\] \.tl-tip-current \{ color: var\(--bg-page\) ; \}',
        src_css)
    assert m, "D5: 当前徽标未适配深字 (white on #64ffda = 1.25:1 不可读)"
    # 2) chip 暗底
    m = _re.search(r'\[data-theme="dark-pro"\] \.merrill-stage-chip \{[\s\S]*?background: var\(--bg-card\) !important', src_css)
    assert m, "D5: 阶段 chip 未适配暗底"
    # 3) 连接线暗色令牌在 dark-pro 块内定义
    assert "--border-strong: #3a4a6a" in block, "D5: dark-pro 缺 --border-strong 暗色变体 (连接线)"
