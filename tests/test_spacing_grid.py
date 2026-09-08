# -*- coding: utf-8 -*-
"""
V4.6 (FR-4.6.1): 间距 4px 网格门禁
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")
FILES = ["tokens.css", "themes.css", "layout.css", "animations.css", "responsive.css"]
SPACING_RE = re.compile(r"(padding|margin|gap)[-a-z]*:\s*([0-9.]+)px")


def _css():
    text = ""
    for f in FILES:
        p = os.path.join(CSS_DIR, f)
        if os.path.exists(p):
            text += open(p, encoding="utf-8").read() + chr(10)
    return text


def test_spacing_4px_grid_compliance():
    css = _css()
    values = []
    for m in SPACING_RE.finditer(css):
        v = float(m.group(2))
        if v % 4 != 0:
            values.append((m.group(1), m.group(2) + "px"))
    total = len(SPACING_RE.findall(css))
    non4 = len(values)
    ratio = non4 / max(1, total)
    assert ratio < 0.02, "间距 4px 合规率 " + str(round(1 - ratio, 3)) + ", 非 4px " + str(non4) + " 处: " + str(sorted(set(v for _, v in values))[:15])


def test_spacing_tokens_used():
    css = _css()
    assert "var(--sp-" in css, "应有 spacing 令牌使用"
