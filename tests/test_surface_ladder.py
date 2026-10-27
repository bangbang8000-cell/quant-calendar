# -*- coding: utf-8 -*-
"""
6.5.6 (视觉原子层·批次A): 表面阶梯门禁 —— 面与面必须"肉眼可辨"

背景 (为什么需要本门禁):
- 既有 test_theme_contrast.py::test_light_and_dark_surface_contract 只断言
  `card != canvas` —— 差 1 个色阶(例如 1.04:1)也算"有差异", 于是"画布与卡片几乎同色"
  长期无人拦截 (评估实测: 亮色 1.04:1 / 暗色 1.09:1 / 卡片↔凸起 1.10:1)。
- 本文件按「相邻表面亮度比」断言, 阈值 1.18 —— 约为原值的 3 倍, 且低于该值时
  人眼在常规亮度环境下无法稳定区分两层容器。

阈值说明:
- 亮色 `--surface-raised` 由 **阴影** 承载 (值等于卡片白), 不参与亮度阶梯 → 仅暗色断言。
- 输入框边界由 `--border-control` 的 3:1 控制件门禁负责 (test_theme_contrast.py), 不在此重复。
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

MIN_RATIO = 1.18

# (说明, 前景面, 背景面, 适用模式)
PAIRS = (
    ("画布/卡片", "--surface-canvas", "--surface-card", ("light", "dark")),
    ("卡片/凹陷面", "--surface-card", "--surface-sunken", ("light", "dark")),
    ("卡片/凸起面", "--surface-card", "--surface-raised", ("dark",)),   # 亮色凸起由阴影承载
)


def _fmt(mode, hue):
    return "%s/%s" % (mode, "中性" if hue < 0 else hue)


def test_surface_roles_exist():
    """五种表面角色在明暗两侧都必须存在。"""
    roles = ("--surface-canvas", "--surface-card", "--surface-raised",
             "--surface-input", "--surface-sunken")
    for mode, hue in g.CONFIGS:
        r = g.resolved(mode, hue)
        for token in roles:
            assert token in r and r[token], "%s 缺 %s" % (_fmt(mode, hue), token)


def test_adjacent_surfaces_are_distinguishable():
    """相邻表面亮度比 >= 1.18 (14 套配置)。"""
    failures = []
    for label, top, bottom, modes in PAIRS:
        for mode, hue in g.CONFIGS:
            if mode not in modes:
                continue
            v = g.pair(mode, hue, top, bottom)
            if v is None:
                failures.append("%s @%s: 令牌缺失 (%s / %s)" % (label, _fmt(mode, hue), top, bottom))
            elif v < MIN_RATIO:
                failures.append("%s @%s: %.3f < %.2f" % (label, _fmt(mode, hue), v, MIN_RATIO))
    assert not failures, "表面阶梯不足 (%d 项):\n  %s" % (len(failures), "\n  ".join(failures[:20]))


def test_card_and_canvas_not_identical():
    """卡片与画布不得同值 (保留旧断言, 防回退到完全一体化)。"""
    for mode, hue in g.CONFIGS:
        card = g.color(mode, hue, "--surface-card")
        canvas = g.color(mode, hue, "--surface-canvas")
        assert card != canvas, "%s: 卡片与画布同色" % _fmt(mode, hue)


def test_chart_canvas_matches_card():
    """图表画布必须等于卡片表面 (暗色曾为海军蓝硬编码, 与卡片形成双面族)。"""
    for mode, hue in g.CONFIGS:
        r = g.resolved(mode, hue)
        assert r["--chart-bg"] == r["--surface-card"], \
            "%s: --chart-bg(%s) != --surface-card(%s)" % (
                _fmt(mode, hue), r["--chart-bg"], r["--surface-card"])
