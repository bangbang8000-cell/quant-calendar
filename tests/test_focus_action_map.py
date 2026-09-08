# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.5 / FR-5.4.7): 5 档动作派生测试

覆盖 PRD-v5.4 FR-5.4.7 派生表全组合 + 边界分 (29/30/40/60/80) + direction。
动作: 买入/持有/观望/减仓/卖出; 未持仓=观望系, 已持仓=持有系。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

from focus_action_map import (derive_action, direction_from_level, EMOJI,
                              ACTION_ORDER, ACTION_BUY, ACTION_HOLD,
                              ACTION_WATCH, ACTION_REDUCE, ACTION_SELL,
                              action_bucket_key)


# ─── direction_from_level ───────────────────────────────────

def test_direction_bullish_levels():
    assert direction_from_level("强烈推荐") == "看多"
    assert direction_from_level("推荐") == "看多"
    assert direction_from_level("看多") == "看多"


def test_direction_bearish_levels():
    assert direction_from_level("看空") == "看空"
    assert direction_from_level("卖出") == "看空"
    assert direction_from_level("减持") == "看空"


def test_direction_neutral_levels():
    assert direction_from_level("中性") == "震荡"
    assert direction_from_level("观望") == "震荡"
    assert direction_from_level("谨慎推荐") == "震荡"   # 谨慎推荐→震荡(与观望动作一致)
    assert direction_from_level("") == "震荡"
    assert direction_from_level(None) == "震荡"


def test_direction_negation():
    assert direction_from_level("不推荐") == "震荡"      # 否定修饰


# ─── 5 档派生: 未持仓 (观望系) ──────────────────────────────

def test_buy_when_strong_bullish_not_holding():
    assert derive_action(67, "强烈推荐", holding=False) == ACTION_BUY
    assert derive_action(66, "推荐", holding=False) == ACTION_BUY
    assert derive_action(60, "推荐", holding=False) == ACTION_BUY   # 边界 60


def test_watch_when_neutral_not_holding():
    assert derive_action(50, "中性", holding=False) == ACTION_WATCH
    assert derive_action(55, "谨慎推荐", holding=False) == ACTION_WATCH
    assert derive_action(40, "中性", holding=False) == ACTION_WATCH  # 边界 40
    assert derive_action(59, "观望", holding=False) == ACTION_WATCH  # 边界 59


def test_watch_when_weak_not_holding():
    assert derive_action(35, "观望", holding=False) == ACTION_WATCH
    assert derive_action(30, "中性", holding=False) == ACTION_WATCH   # 边界 30 (弱档未持仓仍观望)


# ─── 5 档派生: 已持仓 (持有系) ──────────────────────────────

def test_hold_when_bullish_holding():
    assert derive_action(67, "强烈推荐", holding=True) == ACTION_HOLD
    assert derive_action(66, "推荐", holding=True) == ACTION_HOLD


def test_hold_when_neutral_holding():
    assert derive_action(50, "中性", holding=True) == ACTION_HOLD
    assert derive_action(55, "谨慎推荐", holding=True) == ACTION_HOLD


def test_reduce_when_weak_holding():
    assert derive_action(35, "观望", holding=True) == ACTION_REDUCE
    assert derive_action(30, "中性", holding=True) == ACTION_REDUCE   # 边界 30 → 减仓
    assert derive_action(39, "观望", holding=True) == ACTION_REDUCE   # 边界 39


def test_sell_when_deep_bearish_holding():
    assert derive_action(28, "观望", holding=True) == ACTION_SELL
    assert derive_action(29, "中性", holding=True) == ACTION_SELL     # 边界 29
    assert derive_action(20, "看空", holding=True) == ACTION_SELL


# ─── 边界分参数化 (29/30/31/39/40/41/59/60/61/79/80/81) ─────

@pytest.mark.parametrize("score,holding,expect", [
    (29, False, ACTION_WATCH), (29, True, ACTION_SELL),
    (30, False, ACTION_WATCH), (30, True, ACTION_REDUCE),
    (31, False, ACTION_WATCH), (31, True, ACTION_REDUCE),
    (39, False, ACTION_WATCH), (39, True, ACTION_REDUCE),
    (40, False, ACTION_WATCH), (40, True, ACTION_HOLD),
    (41, False, ACTION_WATCH), (41, True, ACTION_HOLD),
    (59, False, ACTION_WATCH), (59, True, ACTION_HOLD),
    (60, False, ACTION_BUY),   (60, True, ACTION_HOLD),
    (61, False, ACTION_BUY),   (61, True, ACTION_HOLD),
    (79, False, ACTION_BUY),   (79, True, ACTION_HOLD),
    (80, False, ACTION_BUY),   (80, True, ACTION_HOLD),
    (81, False, ACTION_BUY),   (81, True, ACTION_HOLD),
])
def test_boundary_scores(score, holding, expect):
    assert derive_action(score, "中性", holding=holding) == expect


# ─── 看空声明修正 ───────────────────────────────────────────

def test_bearish_declaration_overrides_score():
    # 看空声明 + 中低分 → 减仓/卖出系 (即使 score 40-59)
    assert derive_action(45, "看空", holding=True) == ACTION_REDUCE
    assert derive_action(45, "看空", holding=False) == ACTION_WATCH
    assert derive_action(25, "看空", holding=True) == ACTION_SELL
    assert derive_action(45, "减持", holding=True) == ACTION_REDUCE


def test_none_score_defaults_neutral():
    assert derive_action(None, "中性", holding=False) == ACTION_WATCH
    assert derive_action(None, "中性", holding=True) == ACTION_HOLD
    # None 分无法确认 >=60 → 诚实兜底观望 (不因看多声明强行买入)
    assert derive_action(None, "推荐", holding=False) == ACTION_WATCH


def test_bullish_declaration_with_low_score_is_watch():
    # 推荐声明但 score<60 → 谨慎档 (观望/持有), 不强行买入
    assert derive_action(55, "推荐", holding=False) == ACTION_WATCH
    assert derive_action(55, "推荐", holding=True) == ACTION_HOLD


# ─── 符号与排序 ─────────────────────────────────────────────

def test_emoji_mapping():
    assert EMOJI == {ACTION_BUY: "🟢", ACTION_HOLD: "🟡", ACTION_WATCH: "⚪",
                     ACTION_REDUCE: "🟠", ACTION_SELL: "🔴"}


def test_action_order():
    assert ACTION_ORDER == (ACTION_BUY, ACTION_HOLD, ACTION_WATCH, ACTION_REDUCE, ACTION_SELL)
    for i, a in enumerate(ACTION_ORDER):
        assert action_bucket_key(a) == i


def test_unknown_action_sorts_last():
    assert action_bucket_key("未知") == len(ACTION_ORDER)
