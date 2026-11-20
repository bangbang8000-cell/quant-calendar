#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.4 评分 API 与研究历史类型测试"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))


def test_score_engine_topn_materialization():
    """评分→TopN 物化建议(确认后才入日历, 默认不自动)"""
    from strategy_sdk.scoring import ScoreEngine
    eng = ScoreEngine()
    scores = {
        "600000.SH": {"total_score": 85, "veto_flag": False},
        "600519.SH": {"total_score": 70, "veto_flag": False},
        "000001.SZ": {"total_score": 30, "veto_flag": False},  # 低于 min_score=40 被排除
    }
    picks = eng.to_holdings(scores, top_n=2, min_score=40)
    assert set(picks.keys()) == {"600000.SH", "600519.SH"}
    assert abs(sum(picks.values()) - 1.0) < 1e-9


def test_veto_blocks_materialization():
    """一票否决的股票不进入 TopN 物化"""
    from strategy_sdk.scoring import ScoreEngine
    eng = ScoreEngine()
    scores = {
        "A": {"total_score": -100, "veto_flag": True},
        "B": {"total_score": 60, "veto_flag": False},
    }
    picks = eng.to_holdings(scores, top_n=5, min_score=40)
    assert "A" not in picks and picks["B"] == 1.0


def test_research_store_accepts_new_types():
    """FR-7.4-6: research_store 接受 score/pattern_strategy 类型"""
    from research_store import VALID_TYPES
    assert 'score' in VALID_TYPES
    assert 'pattern_strategy' in VALID_TYPES


def test_strategies_api_lists_patterns():
    """FR-7.4-1: GET /api/strategies 含 4 个形态策略"""
    from strategy_sdk.registry import registry
    ids = {s['id'] for s in registry.list()}
    assert {'golden_triangle', 'oversold_rebound', 'main_uptrend_dip_buy', 'leader'}.issubset(ids)
    # 每个新策略 schema 含 hold_days
    for sid in ('golden_triangle', 'oversold_rebound', 'main_uptrend_dip_buy', 'leader'):
        s = next(x for x in registry.list() if x['id'] == sid)
        assert any(f['key'] == 'hold_days' for f in s['schema'])


# ---------- v7.4 FR-7.4-5: 回测口径校准 ----------

def test_profit_factor_amount_basis():
    """金额口径: 盈利总额/亏损总额; 全胜=inf, 全亏=0"""
    from backtest import compute_profit_factor
    assert compute_profit_factor([0.1, 0.2, -0.1]) > 0
    assert compute_profit_factor([0.1, 0.1, 0.1]) == float("inf")
    assert compute_profit_factor([-0.1, -0.2]) == 0.0


def test_kelly_fraction_bounds():
    """Kelly: f*=W-(1-W)/R, 半Kelly, 限制在[0,1]"""
    from backtest import kelly_fraction
    # W=0.6, R=2 → f*=0.6-0.4/2=0.4, 半Kelly=0.2
    assert abs(kelly_fraction(0.6, 2.0, 1.0, fraction=0.5) - 0.2) < 1e-9
    assert kelly_fraction(0.3, 1.0, 5.0) == 0.0  # 负期望 → 0
    assert kelly_fraction(0.9, 10.0, 1.0, fraction=1.0) <= 1.0


def test_backtest_output_has_calibrated_metrics():
    """回测结果含 profit_factor/kelly/防前视声明"""
    import pandas as pd
    from strategy_sdk.backtest import backtest_holdings
    dates = ["2025-01-0%d" % d for d in range(1, 6)]
    holdings = pd.DataFrame(
        {s: [1.0] * 5 for s in ["A", "B"]}, index=dates)
    returns = pd.DataFrame(
        {s: [0.01, -0.005, 0.02, 0.01, -0.01] for s in ["A", "B"]}, index=dates)
    r = backtest_holdings(holdings, returns)
    assert r["success"] is True
    assert "profit_factor" in r and "kelly_suggestion" in r
    assert "T-1" in r["lookahead_policy"]


# ---------- v7.4 FR-7.4-9: 策略级受控入库 ----------

def test_pattern_strategies_default_not_in_calendar():
    """形态策略纳管后默认 show_in_calendar=False(研究不污染日历)"""
    import strategy_governance as gov
    for sid in ("golden_triangle", "oversold_rebound", "main_uptrend_dip_buy", "leader"):
        assert sid in gov.BUILTIN_SIDS
        assert sid in gov.CALENDAR_OPT_IN_SIDS
    state = gov._default_state()
    for sid in gov.CALENDAR_OPT_IN_SIDS:
        assert state[sid]["show_in_calendar"] is False
    # 原有4策略仍默认进日历
    assert state["multi_factor"]["show_in_calendar"] is True
