# -*- coding: utf-8 -*-
"""6.2.x: 全局搜索选中股票 → 自动切到量化日历个股信息界面

背景: onSearchSelect 对 stock 仅调 showStockDetail, 不在日历页时详情在当前页打开,
用户期望切到「量化日历 - 有个股信息界面」(日历主视图 calendar 子页) 再展示。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_search_stock_navigates_to_calendar():
    """选中股票应自动切到日历页 (calendar 子页) 再打开详情"""
    src = _read("js/app-logic/keys.js")
    assert "navigateTo('calendar', 'calendar')" in src, "应切到日历主视图"
    # 两处须在同一分支 (位于 stock 处理段): 切页先于打开详情
    stock_i = src.index("d.action === 'stock'")
    tail = src[stock_i:stock_i + 400]
    assert "navigateTo('calendar', 'calendar')" in tail, "stock 分支应先切页"
    assert "showStockDetail(d.code" in tail, "stock 分支应打开个股详情"


def test_keys_has_current_sub_page_dep():
    """keys 域应消费 currentSubPage (用于判断当前是否已处于日历主视图)"""
    src = _read("js/app-logic/keys.js")
    assert "currentSubPage" in src, "keys 应解构 currentSubPage"


def test_app_logic_passes_sub_page_to_keys():
    """app-logic 装配 keys 域应传入 currentSubPage"""
    src = _read("js/app-logic.js")
    m = re.search(r"window\.__quantAppLogic\.keys\.create\(\{([^}]*)\}", src)
    assert m, "应调用 keys.create"
    assert "currentSubPage" in m.group(1), "keys.create ctx 应含 currentSubPage"
