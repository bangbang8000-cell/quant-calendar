# -*- coding: utf-8 -*-
"""
V4.4 (FR-4.4.3): WCAG 对比度门禁 — 亮色(classic-white) + dark-pro 双主题

核心文字令牌 vs 背景令牌对比度:
- text-primary vs bg-card/bg-page  >= 4.5 (正文)
- text-secondary vs bg-card        >= 3.0 (次要)
- text-tertiary vs bg-card         >= 3.0 (弱化, 大字号/辅助)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _hex_to_rgb(h):
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
    la, lb = _lum(_hex_to_rgb(a)), _lum(_hex_to_rgb(b))
    hi, lo = max(la, lb), min(la, lb)
    return (hi + 0.05) / (lo + 0.05)


def _theme_tokens(theme_name):
    """从 themes.css 提取指定主题块的令牌值"""
    src = open(os.path.join(BASE, "frontend", "css", "themes.css"), encoding="utf-8").read()
    m = re.search(r'\[data-theme="' + re.escape(theme_name) + r'"\] \{([\s\S]*?)\}', src)
    assert m, f"theme {theme_name} block not found"
    tokens = {}
    for name, val in re.findall(r"(--[a-zA-Z0-9-]+):\s*(#[0-9a-fA-F]{3,6})\b", m.group(1)):
        tokens[name] = val
    return tokens


def test_light_theme_contrast_wcag():
    t = _theme_tokens("classic-white")
    bg_card = t.get("--bg-card", "#ffffff")
    bg_page = t.get("--bg-page", "#f8f9fa")
    cases = [
        ("--text-primary", bg_card, 4.5),
        ("--text-primary", bg_page, 4.5),
        ("--text-secondary", bg_card, 3.0),
        ("--text-tertiary", bg_card, 3.0),
    ]
    for tok, bg, min_c in cases:
        if tok in t:
            c = _contrast(t[tok], bg)
            assert c >= min_c, f"亮色 {tok} ({t[tok]}) vs {bg} 对比度 {c:.2f} < {min_c}"


def test_dark_theme_contrast_wcag():
    t = _theme_tokens("dark-pro")
    bg_card = t.get("--bg-card", "#1a1a3e")
    bg_page = t.get("--bg-page", "#0f0f23")
    cases = [
        ("--text-primary", bg_card, 4.5),
        ("--text-primary", bg_page, 4.5),
        ("--text-secondary", bg_card, 3.0),
        ("--text-tertiary", bg_card, 3.0),
    ]
    for tok, bg, min_c in cases:
        if tok in t:
            c = _contrast(t[tok], bg)
            assert c >= min_c, f"dark {tok} ({t[tok]}) vs {bg} 对比度 {c:.2f} < {min_c}"


# V4.8.1 (DEV-PLAN 2.2): dark-pro 次级文本/边框/占位符对比度补强
# - text-disabled (占位符/禁用文本) vs bg-card/bg-page >= 3.0 (辅助文本 AA)
# - border-heavy (控件边框/focus 轮廓) vs bg-card >= 3.0 (WCAG 1.4.11 非文本对比)
# - border-base (分隔线) vs bg-card >= 1.5 (可见性; 装饰性不强制 3:1)
def test_dark_pro_secondary_wcag_v481():
    t = _theme_tokens("dark-pro")
    bg_card = t.get("--bg-card", "#1a1a3e")
    bg_page = t.get("--bg-page", "#0f0f23")
    cases = [
        ("--text-disabled", bg_card, 3.0),
        ("--text-disabled", bg_page, 3.0),
        ("--border-heavy", bg_card, 3.0),
        ("--border-base", bg_card, 1.5),
    ]
    for tok, bg, min_c in cases:
        assert tok in t, f"dark-pro 缺令牌 {tok}"
        c = _contrast(t[tok], bg)
        assert c >= min_c, f"dark {tok} ({t[tok]}) vs {bg} 对比度 {c:.2f} < {min_c}"
