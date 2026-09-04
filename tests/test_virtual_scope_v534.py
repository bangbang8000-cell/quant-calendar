# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.2 / FR-5.3.4.2): 长表虚拟滚动/分页覆盖守护

- 自选股/评估历史/会话/日历股票池 走 qc-virtual-list 虚拟滚动
- 龙虎榜/板块资金/涨停池 用 el-table + >200 行分页
- 研究历史后端 limit=50 (变高卡片, 分页上限)
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_virtual_list_covers_high_volume_lists():
    """自选股/评估历史/会话 走虚拟滚动"""
    ai = _read("js/components/ai-page.js")
    assert "qc-virtual-list" in ai, "ai-page 应使用虚拟滚动"
    assert ai.count("qc-virtual-list") >= 3, "评估历史/会话/自选均应有虚拟滚动实例"
    cal = _read("js/components/calendar-page.js")
    assert "qc-virtual-list" in cal, "日历股票池应使用虚拟滚动"


def test_long_tables_paginate():
    """龙虎榜/板块资金 >200 行分页"""
    sp = _read("js/components/shortterm-page.js")
    assert "lhbRows.length > 200" in sp, "龙虎榜应分页"
    assert "filteredSectorRows.length > 200" in sp, "板块资金应分页"


def test_research_history_bounded():
    """研究历史后端 limit=50 (列表有界)"""
    src = _read("../backend/api/v1/strategy_research.py")
    assert "limit: int = 50" in src, "研究历史应默认 limit=50"


def test_virtual_list_core_pure_functions():
    """virtual-list-core 纯函数存在 (pytest 可测)"""
    src = _read("js/virtual-list-core.js")
    assert "computeVisibleRange" in src or "visibleRange" in src
