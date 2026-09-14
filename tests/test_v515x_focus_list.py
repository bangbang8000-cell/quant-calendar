# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F5): 重点跟踪列表对齐「关注」风格 — 关键信息分列展示。

覆盖 TC-5.15.51~.54:
- 行模板按独立列呈现 档位/评分/方向/入池状态 (不再挤行换行)
- .focus-row 改为 grid 布局 (列对齐, 行高一致)
- 分组头/展开详情/打开个股详情保留
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_focus_row_separate_columns():
    """TC-5.15.51: 行模板含独立列容器 — 档位/评分/方向/操作"""
    src = _read_f("js/components/focus-view.js")
    for cls in ("focus-row-tier", "focus-row-score", "focus-row-dir", "focus-row-actions", "focus-row-status"):
        assert cls in src, f"行模板应含独立列容器 {cls}"


def test_focus_row_grid_css():
    """TC-5.15.52: .focus-row 使用 grid 布局 (grid-template-columns)"""
    css = _read_f("css/layout.css")
    m = re.search(r"\.focus-row\s*\{([^}]*)\}", css)
    assert m, "应存在 .focus-row 规则"
    block = m.group(1)
    assert "display: grid" in block, f".focus-row 应为 grid 布局, 当前 {block.strip()}"
    assert "grid-template-columns" in block, "应定义分列网格"


def test_focus_tier_group_kept():
    """TC-5.15.53: 档位分组头保留"""
    src = _read_f("js/components/focus-view.js")
    assert "focus-tier-header" in src, "应保留档位分组头"


def test_focus_detail_and_open_kept():
    """TC-5.15.54: 展开详情 + 打开个股详情保留"""
    src = _read_f("js/components/focus-view.js")
    assert "focus-detail" in src and "focus-row-open" in src, "应保留展开详情与打开详情按钮"
    assert "openStockDetail" in src, "应保留 openStockDetail 事件"


def test_focus_badges_kept():
    """TC-5.15.55: 入池状态徽章保留 (自选/新入池/在池/已出池/持仓)"""
    src = _read_f("js/components/focus-view.js")
    for badge in ("自选", "新入池", "在池", "已出池", "持仓"):
        assert badge in src, f"入池状态徽章 {badge} 应保留"
