# -*- coding: utf-8 -*-
"""
V4.8.2 (DEV-PLAN 3.1/3.2): D3 暗色阴影层级 + D4 ECharts 暗色联动守护
- dark-pro 必须覆盖 --shadow-sm/md/lg (亮色 rgba 0.06-0.12 在暗底不可见)
- ECharts 网格线/轴线使用专用令牌 --chart-split/--chart-axis, dark-pro 提供覆盖
- dark-pro 下图表网格线对比度可见
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


def _darkpro_block():
    src = open(os.path.join(BASE, "frontend", "css", "themes.css"), encoding="utf-8").read()
    m = re.search(r'\[data-theme="dark-pro"\] \{([\s\S]*?)\}', src)
    return m.group(1) if m else ""


def _root_block():
    src = open(os.path.join(BASE, "frontend", "css", "tokens.css"), encoding="utf-8").read()
    m = re.search(r":root \{([\s\S]*?)\}", src)
    return m.group(1) if m else ""


def test_darkpro_shadow_tokens_v482():
    """D3: dark-pro 必须覆盖阴影令牌 (亮色 6-12% 黑在暗底不可见)"""
    block = _darkpro_block()
    for tok in ("--shadow-sm", "--shadow-md", "--shadow-lg"):
        line_m = re.search(tok + r":[^;]+;", block)
        assert line_m, f"D3: dark-pro 缺 {tok} 覆盖"
        # 阴影必须有明显黑色不透明度 (alpha >= 0.25)
        val = line_m.group(0)
        am = re.search(r"rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)", val)
        if am:
            alpha = float(am.group(4))
            assert alpha >= 0.25, f"D3: {tok} 阴影过淡 alpha={alpha}"


def test_darkpro_shadow_hierarchy_v482():
    """D3: 阴影层级 — 弹窗(lg) > 卡片(md) > 页面(sm) 逐级加深"""
    block = _darkpro_block()
    alphas = {}
    for tok in ("--shadow-sm", "--shadow-md", "--shadow-lg"):
        m = re.search(tok + r":[^;]*rgba?\((\d+),\s*(\d+),\s*(\d+),\s*([0-9.]+)\)", block)
        assert m, f"D3: {tok} 非 rgba 阴影"
        alphas[tok] = float(m.group(4))
    assert alphas["--shadow-sm"] < alphas["--shadow-md"] < alphas["--shadow-lg"], (
        f"D3: 阴影层级应递增 sm<md<lg, 实际 {alphas}")


def test_chart_grid_tokens_v482():
    """D4: ECharts 网格线/轴线令牌 — :root 定义 + dark-pro 覆盖 + echarts-theme.js 引用"""
    root = _root_block()
    for tok in ("--chart-split", "--chart-axis"):
        assert re.search(tok + r":\s*#[0-9a-fA-F]{3,8}", root), f"D4: tokens.css 缺 {tok} 定义"
    dark = _darkpro_block()
    for tok in ("--chart-split", "--chart-axis"):
        assert re.search(tok + r":\s*#[0-9a-fA-F]{3,8}", dark), f"D4: dark-pro 缺 {tok} 覆盖"
    # echarts-theme.js 必须引用新令牌
    ej = open(os.path.join(BASE, "frontend", "js", "echarts-theme.js"), encoding="utf-8").read()
    for tok in ("--chart-split", "--chart-axis"):
        assert tok in ej, f"D4: echarts-theme.js 未引用 {tok}"


def test_darkpro_chart_grid_contrast_v482():
    """D4: dark-pro 下网格线可见 — split vs bg-card >= 1.5, axis vs bg-card >= 2.5"""
    dark = _darkpro_block()
    bg_card = "#1a1a3e"
    for tok, min_c in (("--chart-split", 1.5), ("--chart-axis", 2.5)):
        m = re.search(tok + r":\s*(#[0-9a-fA-F]{3,8})", dark)
        assert m, f"D4: dark-pro 缺 {tok}"
        c = _contrast(m.group(1), bg_card)
        assert c >= min_c, f"D4: dark {tok} ({m.group(1)}) vs bg-card = {c:.2f} < {min_c}"
