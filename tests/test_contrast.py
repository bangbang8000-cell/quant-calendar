# -*- coding: utf-8 -*-
"""
V6.10 (配色专项·D): WCAG 文字对比度门禁 — 运行期 14 套配置

与 tests/test_theme_contrast.py 的分工:
- test_theme_contrast.py: 完整契约表 (品牌/导航/语义/行情/非文本边界)
- 本文件: 文字层级 (primary/secondary/tertiary/disabled/placeholder) 的最小充分断言,
  便于快速定位「层级下沉」类回归, 并对齐 ui-visual-design 规范的四级文字色阶要求。

旧版本依赖 themes.css 中已删除的 `classic-white` 主题块 → 恒失败; 现改为驱动运行期令牌。
"""
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

# 文字层级 vs 两种表面 (正文 4.5 / 辅助 3.0 —— 辅助文字用于注释与弱化信息)
TEXT_LEVELS = (
    ("--text-primary", 4.5),
    ("--text-secondary", 4.5),
    ("--text-tertiary", 4.5),
    ("--text-disabled", 3.0),
)
SURFACES = ("--surface-card", "--surface-canvas")


def test_text_levels_on_surfaces():
    failures = []
    for mode, hue in g.CONFIGS:
        for tok, need in TEXT_LEVELS:
            for surface in SURFACES:
                v = g.pair(mode, hue, tok, surface)
                if v is None:
                    failures.append("%s @%s/%s: 令牌缺失" % (tok, mode, hue))
                elif v < need:
                    failures.append("%s on %s @%s/%s: %.2f < %.1f" % (tok, surface, mode, hue, v, need))
    assert not failures, "文字层级对比度不足 (%d 项):\n  %s" % (len(failures), "\n  ".join(failures[:20]))


def test_text_levels_are_distinct():
    """四级文字色阶必须真正分层 (相邻层级不得同值, 否则层级形同虚设)。"""
    for mode, hue in g.CONFIGS:
        vals = [g.resolved(mode, hue).get(t) for t, _ in TEXT_LEVELS]
        assert len(set(vals)) == len(vals), "%s/%s: 文字色阶存在重复 %s" % (mode, hue, vals)


def test_placeholder_and_muted_contrast():
    """占位符/表头等「弱化但仍是文本」的场景必须达 4.5:1 (WCAG 不豁免占位符)。"""
    failures = []
    for mode, hue in g.CONFIGS:
        for fg, bg in (("--qc-muted-foreground", "--surface-card"),
                       ("--qc-muted-foreground", "--qc-muted"),
                       ("--qc-muted-foreground", "--surface-sunken")):
            v = g.pair(mode, hue, fg, bg)
            if v is None or v < 4.5:
                failures.append("%s on %s @%s/%s: %s" % (fg, bg, mode, hue, v))
    assert not failures, "弱化文本对比度不足:\n  %s" % "\n  ".join(failures[:20])


def test_market_text_uses_text_grade():
    """涨跌「文字档」必须比对卡片 >=4.5 (不能用填充档当文字色 —— V6.10 前 .qc-stock-change 即此缺陷)。"""
    for mode, hue in g.CONFIGS:
        assert g.pair(mode, hue, "--market-up-text", "--surface-card") >= 4.5, "%s/%s 涨文字" % (mode, hue)
        assert g.pair(mode, hue, "--market-down-text", "--surface-card") >= 4.5, "%s/%s 跌文字" % (mode, hue)
