# -*- coding: utf-8 -*-
"""全局搜索选中股票 → 自动切到量化日历个股信息界面

背景1: 选中股票仅 showStockDetail 不切页 → 需先切到日历主视图 (calendar 子页)。
背景2 (fix): 首次切页时 selectedDate 尚未加载 → 等待日期就绪后再打开详情。
背景3 (fix): 日历页「双栏自动打开首条」watch 会覆盖搜索目标 (搜索股未必在当日股票池,
  否则被首条如 000001 平安银行覆盖) → 引入外部显式目标抑制机制。
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_search_stock_navigates_to_calendar():
    """选中股票应自动切到日历页 (calendar 子页) 并注册外部目标"""
    src = _read("js/app-logic/keys.js")
    assert "navigateTo('calendar', 'calendar')" in src, "应切到日历主视图"
    stock_i = src.index("d.action === 'stock'")
    tail = src[stock_i:stock_i + 600]
    assert "markExternalStock(d.code)" in tail, "stock 分支应注册外部目标"
    assert "_openStockFromSearch(d.code" in tail, "stock 分支应经等待流程打开详情"


def test_wait_selected_date_before_open():
    """首次切页应等待 selectedDate 就绪再打开详情"""
    src = _read("js/app-logic/keys.js")
    assert "getSelectedDate" in src and "setInterval" in src, "应轮询等待日期就绪"
    assert "getSelectedDate().value" in src, "应判断日期是否就绪"


def test_external_target_suppression_in_app_logic():
    """app-logic 应提供外部目标抑制: markExternalStock + externalStockActive + qcState 暴露"""
    src = _read("js/app-logic.js")
    assert "function markExternalStock(code)" in src, "应有 markExternalStock"
    assert "function externalStockActive(code)" in src, "应有 externalStockActive"
    assert "externalStockActive," in src, "qcState 应暴露 externalStockActive"
    assert "markExternalStock," in src, "keys.create ctx 应传 markExternalStock"


def test_calendar_watch_respects_external_target():
    """日历页「自动打开首条」watch 应抑制外部目标覆盖"""
    src = _read("js/components/calendar-page.js")
    i = src.index("双栏模式默认选中第一条")
    block = src[i:i + 900]
    assert "state.externalStockActive" in block, "watch 应读取 externalStockActive"
    assert "externalStockActive(null)" in block, "目标未决时不自动开首条"
    assert "externalStockActive(cur)" in block, "正展示外部目标时不回退首条"


def test_keys_has_current_sub_page_dep():
    """keys 域应消费 currentSubPage"""
    src = _read("js/app-logic/keys.js")
    assert "currentSubPage" in src, "keys 应解构 currentSubPage"
