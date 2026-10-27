# -*- coding: utf-8 -*-
"""
V4.6 (FR-4.6.1): 间距 4px 网格门禁
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")
# 6.5.1 (FR-657): themes.css 拆域 5 文件 — 拆分内容源自本就受扫的 themes.css,
# 扫描面同步扩展, 避免分母塌缩虚高违例率 (拆分后 4 文件实测 0 违例)
FILES = ["tokens.css", "themes.css", "themes-market.css", "themes-features.css",
         "themes-components.css", "themes-pages.css", "layout.css", "animations.css",
         "responsive.css"]
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
    # V6.6 迁移后间距令牌为 --qc-space-* (旧 --sp-* 已弃用, 见 test_v66_m2_tokens.py)
    css = _css()
    assert "var(--qc-space-" in css, "应有 spacing 令牌使用"
