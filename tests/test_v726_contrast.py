#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.26 FR-12: 择时信号四档配色 — 语义档 + 明暗主题对比度门禁

- hold 独立于 wait: 持有=浅金, 观望/数据不足=中性灰
- 明/暗主题下信号文字与底色对比度 >= 4.5:1 (含描边档在卡片底上的文字)
- 图例由后端字典同源生成, 不再把持有/观望混为一档
"""
import os
import re
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))

from timing.signal_dict import action_display, matrix_legend  # noqa: E402


def _read(rel):
    with open(os.path.join(ROOT, rel), "r", encoding="utf-8") as f:
        return f.read()


def _lum(hexcolor):
    h = hexcolor.lstrip("#")
    vals = [int(h[i:i + 2], 16) / 255 for i in (0, 2, 4)]
    def f(c):
        return c / 12.92 if c <= 0.03928 else ((c + 0.055) / 1.055) ** 2.4
    r, g, b = (f(v) for v in vals)
    return 0.2126 * r + 0.7152 * g + 0.0722 * b


def contrast(fg, bg):
    hi, lo = max(_lum(fg), _lum(bg)), min(_lum(fg), _lum(bg))
    return (hi + 0.05) / (lo + 0.05)


def _block(src, selector):
    """取 selector 后第一个 {} 内的声明块 (不匹配嵌套)。"""
    i = src.find(selector)
    assert i >= 0, "缺少选择器 " + selector
    a = src.index("{", i)
    b = src.index("}", a)
    return src[a + 1:b]


def _tokens(block):
    return dict(re.findall(r"(--qc-signal-[a-z-]+)\s*:\s*(#[0-9a-fA-F]{6})", block))


def test_hold_has_own_tone():
    assert action_display("hold")["tone"] == "hold", "持有必须是独立语义档"
    assert action_display("wait")["tone"] == "flat", "观望/数据不足仍是中性灰"
    assert action_display("buy")["tone"] == "up"
    assert action_display("add")["tone"] == "up"
    assert action_display("sell")["tone"] == "down"
    assert action_display("reduce")["tone"] == "down"


def test_legend_mentions_four_tiers():
    legend = matrix_legend()
    assert "金=持有" in legend, legend
    assert "灰=观望" in legend, legend
    assert "红=买入/加仓" in legend, legend
    assert "绿=减仓/卖出" in legend, legend


def test_light_and_dark_signal_tokens_defined():
    light = _tokens(_block(_read("frontend/css/tokens.css"), ":root {"))
    dark = _tokens(_block(_read("frontend/css/themes.css"), '[data-theme="dark-pro"] {'))
    for tier in ("up", "down", "hold", "flat"):
        for suffix in ("bg", "border", "text"):
            key = "--qc-signal-%s-%s" % (tier, suffix)
            assert key in light, "浅色主题缺少 " + key
            assert key in dark, "暗色主题缺少 " + key


def test_light_contrast_aa():
    toks = _tokens(_block(_read("frontend/css/tokens.css"), ":root {"))
    for tier in ("up", "down", "hold", "flat"):
        fg = toks["--qc-signal-%s-text" % tier]
        bg = toks["--qc-signal-%s-bg" % tier]
        ratio = contrast(fg, bg)
        assert ratio >= 4.5, "%s 浅色档对比度 %.2f < 4.5" % (tier, ratio)
        # 描边档在卡片 (#ffffff) 上只显示文字
        ratio_card = contrast(fg, "#ffffff")
        assert ratio_card >= 4.5, "%s 浅色描边档在卡片上 %.2f < 4.5" % (tier, ratio_card)


def test_dark_contrast_aa():
    toks = _tokens(_block(_read("frontend/css/themes.css"), '[data-theme="dark-pro"] {'))
    for tier in ("up", "down", "hold", "flat"):
        fg = toks["--qc-signal-%s-text" % tier]
        bg = toks["--qc-signal-%s-bg" % tier]
        ratio = contrast(fg, bg)
        assert ratio >= 4.5, "%s 暗色档对比度 %.2f < 4.5" % (tier, ratio)
        ratio_card = contrast(fg, "#2d2a1f")
        assert ratio_card >= 4.5, "%s 暗色描边档在卡片上 %.2f < 4.5" % (tier, ratio_card)
