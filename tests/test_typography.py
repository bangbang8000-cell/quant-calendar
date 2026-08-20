# -*- coding: utf-8 -*-
"""
V4.6 (FR-4.6.3): 排版门禁 — 无裸字号 + tabular-nums 覆盖
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")
FILES = ["tokens.css", "themes.css", "layout.css", "animations.css", "responsive.css"]
SIZE_RE = re.compile(r"font-size:\s*([0-9.]+)px")


def _css():
    text = ""
    for f in FILES:
        p = os.path.join(CSS_DIR, f)
        if os.path.exists(p):
            text += open(p, encoding="utf-8").read() + chr(10)
    return text


def test_no_raw_font_size():
    css = _css()
    raws = [m.group(0) for m in SIZE_RE.finditer(css)]
    assert not raws, "裸字号残留: " + str(sorted(set(raws))[:10])


def test_tabular_nums_present():
    css = _css()
    assert "tabular-nums" in css, "CSS 应定义 tabular-nums(数字等宽)"
    js = ""
    for root, _, names in os.walk(os.path.join(BASE, "frontend", "js")):
        for n in names:
            if n.endswith(".js"):
                js += open(os.path.join(root, n), encoding="utf-8").read() + chr(10)
    assert "tabular" in js, "组件应使用 tabular-nums(数字场景)"
