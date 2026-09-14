# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F3): 美林时钟历史周期时间轴美化。

覆盖 TC-5.15.21~.25:
- 高度压缩: 轮间距/甘特条/行高收敛 (整块高度目标较基线压缩 ≥25%)
- 层级精修: chip 字号 13px / 名称加粗 / 年份弱化
- 当前阶段强化 + tooltip 阶段色条
- 交互增强: 轮次折叠 / 阶段色图例 / 回到最新
- 移动端适配 <768px
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _css_block(css, selector):
    # 精确匹配该选择器直接跟 { (排除 .tl-cycle.is-collapsed .tl-gantt 等复合选择器)
    m = re.search(re.escape(selector) + r"\s*\{([^}]*)\}", css)
    return m.group(1) if m else None


def _css_block_exact(css, selector):
    # 行首锚定: ^selector { — 匹配基础规则而非复合选择器
    m = re.search(r"^" + re.escape(selector) + r"\s*\{([^}]*)\}", css, re.M)
    return m.group(1) if m else None


def test_timeline_height_compressed():
    """TC-5.15.21: 轮间距 margin-bottom ≤24px (原 32px); 甘特条高度 ≤8px (原 10px)"""
    css = _read_f("css/layout.css")
    b = _css_block(css, ".tl-cycle")
    assert b and "margin-bottom: 32px" not in b, "轮间距应压缩 (不再 32px)"
    assert b and "margin-bottom: 20px" in b, "轮间距应为 20px"
    g = _css_block_exact(css, ".tl-gantt")
    assert g and "height: 6px" in g, "甘特条基础规则高度应为 6px"


def test_timeline_chip_type():
    """TC-5.15.22: chip 字号 13px (原 12px); 名称加粗; 年份弱化"""
    css = _read_f("css/layout.css")
    b = _css_block(css, ".merrill-stage-chip")
    assert b and "font-size: var(--qc-font-size-sm)" in b, "chip 字号应为 sm (13px)"
    assert ".merrill-stage-chip-name { font-weight: var(--font-semibold" in css.replace("\n", ""), "chip 名称应加粗"
    date_b = _css_block(css, ".merrill-stage-chip-date")
    assert date_b and "opacity: 0.7" in date_b, "年份应弱化 (opacity 0.7)"


def test_timeline_current_emphasis():
    """TC-5.15.23: 当前 chip 徽标底纹 + tooltip 头部阶段色条"""
    css = _read_f("css/layout.css")
    cur = _css_block(css, ".merrill-stage-chip-current")
    assert cur, "当前徽标规则应存在"
    assert "border-radius" in cur, "当前徽标应圆角底纹"
    tip = _css_block(css, ".tl-tip-head")
    assert tip and "border-bottom" in tip, "tooltip 头部应有阶段色条 (border-bottom)"


def test_timeline_interactions():
    """TC-5.15.24: 轮次折叠 / 阶段色图例 / 回到最新"""
    src = _read_f("js/components/strategies-page.js")
    assert "collapsedCycles" in src or "toggleCycle" in src, "应支持轮次折叠"
    assert "tl-legend" in src, "应含阶段色图例"
    assert "tl-back-latest" in src or "回到最新" in src, "应含「回到最新」"


def test_timeline_responsive():
    """TC-5.15.25: <768px 移动端适配"""
    css = _read_f("css/responsive.css")
    # 检查全部 768px 断点, 任一段含时间轴规则即通过
    blocks = [m for m in re.finditer(r"@media \(max-width: 768px\)\s*\{", css)]
    assert blocks, "应存在 768px 断点"
    found = False
    for i, m in enumerate(blocks):
        start = m.end()
        end = blocks[i + 1].start() if i + 1 < len(blocks) else len(css)
        seg = css[start:end]
        if "tl-" in seg or "merrill" in seg:
            found = True
            break
    assert found, "768px 断点内应含时间轴适配规则"
