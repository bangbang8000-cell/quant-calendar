# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.3.4 / FR-5.3.3.4): 跨页跳转链路推广 + 评估→组合→导出一键化测试

- 组合持仓行可打开股票详情 (含「跳转日历」按钮)
- 评估历史批量工具栏含「加入组合」(一键评估→组合)
- 组合收益曲线已升级净值+回撤双轴 (T-5.3.2.3 复用)
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_portfolio_row_opens_stock_detail():
    """组合持仓行含「详情」按钮, 点击打开股票详情弹窗 (含跳转日历)"""
    src = _read("js/components/ai-page.js")
    assert "showStockDetail(p.stock_code)" in src, "持仓行应能打开股票详情"


def test_stock_detail_has_goto_calendar():
    """股票详情弹窗仍含「跳转日历」 (T-5.2.42 保留)"""
    src = _read("js/components/dialogs/stock-detail.js")
    assert "gotoCalendar" in src and "navigateTo('calendar'" in src


def test_history_toolbar_has_add_to_portfolio():
    """评估历史批量工具栏含「加入组合」按钮"""
    src = _read("js/components/ai-page.js")
    assert "batchAddToPortfolio" in src, "应提供 batchAddToPortfolio 函数"


def test_batch_add_to_portfolio_calls_api():
    """batchAddToPortfolio 调用 /api/portfolio/positions 批量加入组合"""
    src = _read("js/components/ai-page.js")
    assert "batchAddToPortfolio" in src, "ai-page 应含 batchAddToPortfolio 调用"
    wl = _read("js/watchlist.js")
    assert "/api/portfolio/positions/batch" in wl, "加入组合应调批量组合接口"


def test_portfolio_has_one_click_chain():
    """一键链路素材齐备: 详情(组合) + 加入组合(评估) + 导出(研究)"""
    ai = _read("js/components/ai-page.js")
    research = _read("js/components/research-page.js")
    assert "exportResearchHistory" in research or "exportActivePtradeCode" in research, "研究页应有导出"
    assert "exportCSV" in ai or "batchAddToPortfolio" in ai
