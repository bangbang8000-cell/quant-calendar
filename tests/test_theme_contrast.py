# -*- coding: utf-8 -*-
"""
V6.10 (配色专项·D): 主题对比度门禁 — **运行期 14 套配置全断言**

背景 (为什么重写):
- 旧版本从 themes.css 里静态抓取 `[data-theme="classic-white"]` 等主题块的 hex 值,
  而 V6.1 起主题模型已收敛为「模式(明/暗) × 色相(hue)」, 由 frontend/js/themes.js 在运行期生成,
  classic-* 主题块早已删除 → 门禁恒失败 (KeyError), 且覆盖不到真实的 14 套配置。
- 现在改为: 由 tests/color_probe.js 以 Node 执行 themes.js (运行期唯一权威) 收集令牌,
  再由 tests/color_gate.py 按级联模型解析, 对**明/暗 × 7 色相(含中性) = 14 套**逐项断言。

阈值依据: WCAG 2.1 —— 正文 4.5:1; 大字号 3:1; 非文本 (组件边界/焦点指示/图形对象) 3:1。
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

import color_gate as g  # noqa: E402

CONFIGS = g.CONFIGS

# (断言说明, 前景令牌, 背景令牌, 背景叠加基准令牌, 阈值)
CHECKS = [
    # 文本: 基础层级
    ("正文/卡片", "--text-primary", "--surface-card", None, 4.5),
    ("正文/页底", "--text-primary", "--surface-canvas", None, 4.5),
    ("次文/卡片", "--text-secondary", "--surface-card", None, 4.5),
    ("次文/页底", "--text-secondary", "--surface-canvas", None, 4.5),
    ("三级文/卡片", "--text-tertiary", "--surface-card", None, 4.5),
    ("三级文/表头底", "--text-tertiary", "--bg-card-header", None, 4.5),
    ("禁用文/卡片 (3:1)", "--text-disabled", "--surface-card", None, 3.0),
    ("表格头 muted/淡底", "--qc-muted-foreground", "--qc-muted", None, 4.5),
    # 品牌与链接
    ("品牌文字/卡片", "--primary-text", "--surface-card", None, 4.5),
    ("品牌文字/页底", "--primary-text", "--surface-canvas", None, 4.5),
    ("文字链接/卡片", "--text-link", "--surface-card", None, 4.5),
    ("文字按钮/卡片", "--btn-primary-text-color", "--surface-card", None, 4.5),
    ("主按钮文字/实底", "--btn-primary-color", "--btn-primary-bg", None, 4.5),
    ("主按钮文字/hover", "--btn-primary-color", "--btn-primary-hover-bg", None, 4.5),
    ("主按钮文字/active", "--btn-primary-color", "--btn-primary-active-bg", None, 4.5),
    # 导航
    ("导航默认项/导航底", "--qc-nav-item-default", "--qc-nav-bg", None, 4.5),
    ("导航激活项/激活底", "--qc-nav-item-active", "--qc-nav-item-active-bg", "--qc-nav-bg", 4.5),
    ("导航分组标签/导航底", "--qc-nav-group-label", "--qc-nav-bg", None, 4.5),
    ("导航徽标文字/徽标底", "--qc-nav-badge-text", "--qc-nav-badge-bg", "--qc-nav-bg", 4.5),
    # 语义: 文字与淡底
    ("成功文字/卡片", "--state-success-text", "--surface-card", None, 4.5),
    ("警告文字/卡片", "--state-warning-text", "--surface-card", None, 4.5),
    ("危险文字/卡片", "--state-danger-text", "--surface-card", None, 4.5),
    ("信息文字/卡片", "--state-info-text", "--surface-card", None, 4.5),
    ("成功文字/淡底", "--state-success-text", "--state-success-tint", None, 4.5),
    ("警告文字/淡底", "--state-warning-text", "--state-warning-tint", None, 4.5),
    ("危险文字/淡底", "--state-danger-text", "--state-danger-tint", None, 4.5),
    ("信息文字/淡底", "--state-info-text", "--state-info-tint", None, 4.5),
    # 行情涨跌 (文字档 >=4.5 / 填充档 >=3)
    ("涨文字/卡片", "--market-up-text", "--surface-card", None, 4.5),
    ("跌文字/卡片", "--market-down-text", "--surface-card", None, 4.5),
    ("涨填充/卡片 (3:1)", "--market-up-fill", "--surface-card", None, 3.0),
    ("跌填充/卡片 (3:1)", "--market-down-fill", "--surface-card", None, 3.0),
    # V6.11 (需求轮2·批次4): 浅底彩字变体 (主 CTA / 语义按钮 / 头像 / 分段控件)
    ("品牌 soft 文字/soft 底", "--brand-soft-text", "--brand-soft-bg", None, 4.5),
    ("品牌 soft 文字/hover 底", "--brand-soft-text", "--brand-soft-bg-hover", None, 4.5),
    ("成功 soft 文字/tint 底", "--state-success-soft-text", "--state-success-soft-bg", None, 4.5),
    ("警告 soft 文字/tint 底", "--state-warning-soft-text", "--state-warning-soft-bg", None, 4.5),
    ("信息 soft 文字/tint 底", "--state-info-soft-text", "--state-info-soft-bg", None, 4.5),
    # 危险实底 (唯一保留的深实底) 仍需达标
    ("危险实底文字/实底", "--state-danger-on-solid", "--state-danger-solid", None, 4.5),
    # 非文本: 焦点指示与组件边界 (WCAG 1.4.11)
    ("焦点环/页底", "--qc-ring", "--surface-canvas", None, 3.0),
    ("焦点环/卡片", "--qc-ring", "--surface-card", None, 3.0),
    ("控件边界/卡片", "--border-control", "--surface-card", None, 3.0),
    ("控件边界/输入底", "--border-control", "--surface-input", None, 3.0),
]


def _fmt(mode, hue):
    return "%s/%s" % (mode, "中性" if hue < 0 else hue)


def test_runtime_configs_available():
    """探针必须覆盖 明/暗 × 7 色相 = 14 套配置。"""
    rt = g.runtime_tokens()
    assert len(rt) == 14, "color_probe 配置数应为 14, 实际 %d" % len(rt)
    for mode, hue in CONFIGS:
        assert "%s:%s" % (mode, hue) in rt, "缺少配置 %s:%s" % (mode, hue)


def test_contrast_contract_all_configs():
    """§4.5 对比度契约: 14 套配置逐项达标。"""
    failures = []
    for label, fg, bg, base, need in CHECKS:
        for mode, hue in CONFIGS:
            v = g.pair(mode, hue, fg, bg, base)
            if v is None:
                failures.append("%s @%s: 令牌缺失 (%s / %s)" % (label, _fmt(mode, hue), fg, bg))
            elif v < need:
                failures.append("%s @%s: %.2f < %.1f" % (label, _fmt(mode, hue), v, need))
    assert not failures, "对比度契约未达标 (%d 项):\n  %s" % (len(failures), "\n  ".join(failures[:25]))


def test_light_and_dark_surface_contract():
    """明暗表面契约: 五种表面角色在两侧都必须存在, 且卡片与画布有可见差异。"""
    roles = ("--surface-canvas", "--surface-card", "--surface-raised", "--surface-input", "--surface-sunken")
    for mode, hue in CONFIGS:
        r = g.resolved(mode, hue)
        for token in roles:
            assert token in r, "%s 缺 %s" % (_fmt(mode, hue), token)
        card = g.color(mode, hue, "--surface-card")
        canvas = g.color(mode, hue, "--surface-canvas")
        assert card != canvas, "%s: 卡片与画布同色" % _fmt(mode, hue)


def test_chart_canvas_matches_card():
    """图表画布必须等于卡片表面 (V6.10 前暗色为海军蓝硬编码, 与卡片形成双面族)。"""
    for mode, hue in CONFIGS:
        r = g.resolved(mode, hue)
        assert r["--chart-bg"] == r["--surface-card"], \
            "%s: --chart-bg(%s) != --surface-card(%s)" % (_fmt(mode, hue), r["--chart-bg"], r["--surface-card"])


def test_element_plus_bridge_connected():
    """EP 变量桥必须接通: EP 基础变量不得停留在其浅色默认值。"""
    for mode, hue in CONFIGS:
        r = g.resolved(mode, hue)
        for token, forbidden in (("--el-text-color-primary", "#303133"),
                                 ("--el-border-color", "#dcdfe6"),
                                 ("--el-color-success", "#67c23a"),
                                 ("--el-color-warning", "#e6a23c"),
                                 ("--el-color-danger", "#f56c6c"),
                                 ("--el-color-info", "#909399")):
            val = r.get(token, "")
            assert val and val.lower() != forbidden.lower(), \
                "%s: %s 仍是 EP 默认值 %s" % (_fmt(mode, hue), token, forbidden)
        assert r.get("--el-message-bg-color"), "缺 --el-message-bg-color (消息语义桥)"


def test_neutral_brand_has_zero_saturation():
    """「中性无色相」档: 关键品牌令牌的 hsl 彩度必须为 0。"""
    for mode in g.MODES:
        r = g.resolved(mode, -1)
        for token in ("--primary-text", "--btn-primary-bg", "--qc-ring", "--text-link", "--border-control"):
            val = r.get(token, "")
            m = re.match(r"hsl\(([\d.]+),\s*([\d.]+)%,", val or "")
            assert m, "%s: %s 不是 hsl 值 (%s)" % (mode, token, val)
            assert float(m.group(2)) == 0, "%s: %s 彩度非 0 (%s)" % (mode, token, val)
