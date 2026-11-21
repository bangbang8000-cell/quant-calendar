# -*- coding: utf-8 -*-
"""
7.13 (视觉美术优化): 运行期美术令牌契约 — 明暗双模式 × 7 色相

所有取值统一来自 color_gate.resolved()，即「CSS 兜底 ← themes.js 运行期内联覆盖」
的最终级联结果。新增断言必须先于实现落地并在旧实现上跑红，避免门禁与实现同源自证。

A1 暗色面层彩度 / A2 亮色面层去黄 / A3 装饰线区间 / A4 控件边界防回退 /
A5 文字层级 / A6 品牌文字双基准 / A7 中性档无彩 / A8 暗色残留色相 / A9 图表色相桶
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

_HSL = re.compile(r"hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%")

DARK_CORE_SURFACES = (
    "--surface-card", "--surface-raised", "--surface-hover",
    "--surface-input", "--qc-nav-bg",
)
DARK_BASE_SURFACES = ("--surface-canvas", "--surface-sunken")
LIGHT_REDUCED_SURFACES = ("--surface-canvas", "--surface-sunken", "--surface-hover")


def _fmt(mode, hue):
    return "%s/%s" % (mode, "中性" if hue < 0 else hue)


def _hsl(mode, hue, token):
    value = g.resolved(mode, hue).get(token, "")
    m = _HSL.match(value or "")
    assert m, "%s/%s: %s 不是 hsl 值 (%s)" % (mode, hue, token, value)
    return float(m.group(1)), float(m.group(2)), float(m.group(3))


def test_a1_dark_surface_chroma():
    """A1: 暗色面层带可感知色相倾向 —— 主体 18~20%, 画布/凹陷 20~24%（中性档跳过）。"""
    failures = []
    for hue in g.HUES:
        if hue < 0:
            continue
        for token in DARK_CORE_SURFACES:
            s = _hsl("dark", hue, token)[1]
            if not 18 <= s <= 20:
                failures.append("dark/%s %s 彩度 %.1f 不在 [18,20]" % (hue, token, s))
        for token in DARK_BASE_SURFACES:
            s = _hsl("dark", hue, token)[1]
            if not 20 <= s <= 24:
                failures.append("dark/%s %s 彩度 %.1f 不在 [20,24]" % (hue, token, s))
    assert not failures, "暗色面层彩度不足:\n  %s" % "\n  ".join(failures[:20])


def test_a2_light_surface_chroma():
    """A2: 亮色画布/凹陷/悬浮面去黄，彩度 <=10%（中性档跳过）。"""
    failures = []
    for hue in g.HUES:
        if hue < 0:
            continue
        for token in LIGHT_REDUCED_SURFACES:
            s = _hsl("light", hue, token)[1]
            if s > 10:
                failures.append("light/%s %s 彩度 %.1f > 10" % (hue, token, s))
    assert not failures, "亮色面层仍偏黄:\n  %s" % "\n  ".join(failures[:20])


def test_a3_decorative_border_band():
    """A3: 装饰线对卡片 2.0:1 ±0.2 —— 低于 1.8 融线，高于 2.2 回到「灰线框」。"""
    failures = []
    for mode, hue in g.CONFIGS:
        v = g.pair(mode, hue, "--qc-border", "--surface-card")
        if v is None or not 1.8 <= v <= 2.2:
            failures.append("%s: %s" % (_fmt(mode, hue), "令牌缺失" if v is None else "%.2f" % v))
    assert not failures, "装饰线强度越界:\n  %s" % "\n  ".join(failures[:20])


def test_a4_controls_keep_wcag_boundary():
    """A4: 弱化装饰线不得连带弱化控件边界与焦点环（WCAG 1.4.11 3:1）。"""
    failures = []
    for mode, hue in g.CONFIGS:
        for fg, bg in (("--border-control", "--surface-card"),
                       ("--border-control", "--surface-input"),
                       ("--qc-ring", "--surface-canvas"),
                       ("--qc-ring", "--surface-card")):
            v = g.pair(mode, hue, fg, bg)
            if v is None or v < 3.0:
                failures.append("%s %s/%s: %s" % (_fmt(mode, hue), fg, bg,
                                                  "令牌缺失" if v is None else "%.2f" % v))
    assert not failures, "控件边界/焦点环被弱化:\n  %s" % "\n  ".join(failures[:20])


def test_a5_text_hierarchy_gap():
    """A5: 正文与三级文明度差 >=8pp，三级文对卡片仍 >=4.5:1。"""
    failures = []
    for mode, hue in g.CONFIGS:
        sec = _hsl(mode, hue, "--text-secondary")[2]
        ter = _hsl(mode, hue, "--text-tertiary")[2]
        if abs(sec - ter) < 8:
            failures.append("%s: 明度差 %.1fpp < 8" % (_fmt(mode, hue), abs(sec - ter)))
        v = g.pair(mode, hue, "--text-tertiary", "--surface-card")
        if v is None or v < 4.5:
            failures.append("%s: 三级文/卡片 %s" % (_fmt(mode, hue), "缺失" if v is None else "%.2f" % v))
    assert not failures, "文字层级不足:\n  %s" % "\n  ".join(failures[:20])


def test_a6_brand_text_dual_baseline():
    """A6: 亮色品牌文字对白卡与页底双取严 >=4.8；暗色 soft 文字对 soft 底 >=4.5。"""
    failures = []
    for mode, hue in g.CONFIGS:
        if mode == "light":
            for token in ("--primary-text", "--text-link", "--btn-primary-text-color"):
                for bg in ("--surface-card", "--surface-canvas"):
                    v = g.pair(mode, hue, token, bg)
                    if v is None or v < 4.8:
                        failures.append("%s %s/%s: %s" % (_fmt(mode, hue), token, bg,
                                                         "缺失" if v is None else "%.2f" % v))
        else:
            v = g.pair(mode, hue, "--brand-soft-text", "--brand-soft-bg")
            if v is None or v < 4.5:
                failures.append("%s soft 文字/soft 底: %s" % (
                    _fmt(mode, hue), "缺失" if v is None else "%.2f" % v))
    assert not failures, "品牌文字双基准未达标:\n  %s" % "\n  ".join(failures[:20])


def test_a7_neutral_tokens_stay_gray():
    """A7: 中性档的品牌文字/焦点环/控件边界仍为纯灰（防回退）。"""
    for mode in g.MODES:
        for token in ("--primary-text", "--qc-ring", "--border-control"):
            assert _hsl(mode, -1, token)[1] == 0, "%s/%s 彩度非 0" % (mode, token)


def test_a8_dark_residual_tokens_follow_hue():
    """A8: 暗色 4 个曾回落令牌的色相漂移 <=25°（复用 6.5.6 口径）。"""
    for hue in g.HUES:
        if hue < 0:
            continue
        for token in ("--card-border", "--surface", "--bg-code", "--text-disabled"):
            value = g.resolved("dark", hue).get(token, "")
            m = _HSL.match(value or "")
            if not m:
                continue
            drift = abs(float(m.group(1)) - hue)
            drift = min(drift, 360 - drift)
            assert drift <= 25, "dark/%s %s 色相漂移 %.0f°" % (hue, token, drift)


def test_a9_chart_palette_hue_buckets():
    """A9: 图表定性色板至少覆盖 4 个不同色相桶（相邻桶差 >=30°）。"""
    path = os.path.join(g.FRONTEND, "js", "echarts-theme.js")
    src = open(path, encoding="utf-8").read()
    m = re.search(r"CATEGORICAL_HUES\s*=\s*\[([^\]]+)\]", src)
    assert m, "未找到 CATEGORICAL_HUES"
    hues = sorted(int(x) for x in re.findall(r"\d+", m.group(1)))
    buckets = []
    for h in hues:
        if not buckets or min(abs(h - b) for b in buckets) >= 30:
            buckets.append(h)
    assert len(buckets) >= 4, "分类色相桶不足 4 个: %s (hues=%s)" % (buckets, hues)
