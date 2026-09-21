# -*- coding: utf-8 -*-
"""全局搜索选中股票 → 自动切到量化日历个股信息界面

背景1: 选中股票仅 showStockDetail 不切页 → 需先切到日历主视图 (calendar 子页)。
背景2 (fix): 首次从其他页切到日历页时 selectedDate 尚未加载, 直接请求详情用空日期
→ 详情空白/错股。等待 selectedDate 就绪后再打开 (轮询, 上限 4s)。
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_search_stock_navigates_to_calendar():
    """选中股票应自动切到日历页 (calendar 子页) 再打开详情"""
    src = _read("js/app-logic/keys.js")
    assert "navigateTo('calendar', 'calendar')" in src, "应切到日历主视图"
    stock_i = src.index("d.action === 'stock'")
    tail = src[stock_i:stock_i + 300]
    assert "navigateTo('calendar', 'calendar')" in tail, "stock 分支应先切页"
    assert "_openStockFromSearch(d.code" in tail, "stock 分支应经等待流程打开详情"


def test_wait_selected_date_before_open():
    """首次切页应等待 selectedDate 就绪再打开详情 (避免空日期请求)"""
    src = _read("js/app-logic/keys.js")
    assert "getSelectedDate" in src, "keys 应消费 selectedDate 惰性访问器"
    assert "setInterval" in src, "应轮询等待日期就绪"
    assert "selectedDate).value" in src or "getSelectedDate().value" in src, "应判断日期是否就绪"
    assert "4000" in src, "等待应有超时上限"


def test_keys_has_current_sub_page_dep():
    """keys 域应消费 currentSubPage (判断是否已处于日历主视图)"""
    src = _read("js/app-logic/keys.js")
    assert "currentSubPage" in src, "keys 应解构 currentSubPage"


def test_app_logic_passes_deps_to_keys():
    """app-logic 装配 keys 域应传入 currentSubPage 与 getSelectedDate"""
    src = _read("js/app-logic.js")
    m = __import__("re").search(r"window\.__quantAppLogic\.keys\.create\(\{([^}]*)\}", src)
    assert m, "应调用 keys.create"
    assert "currentSubPage" in m.group(1), "ctx 应含 currentSubPage"
    assert "getSelectedDate" in m.group(1), "ctx 应含 getSelectedDate"
