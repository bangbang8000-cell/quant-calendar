#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
形态策略补齐测试 (v7.12 / PRD L1)
覆盖第二批 8 个形态策略的"正向命中"判定 + 注册表策略数门禁。
负向/契约/防前视由 test_pattern_strategies_v74.py 的 parametrize 统一覆盖。
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import pandas as pd
import pytest

from test_pattern_strategies_v74 import _dates

PATTERN_SIDS = [
    "golden_triangle", "oversold_rebound", "main_uptrend_dip_buy", "leader",
    "limit_up_pullback", "morning_star", "multi_golden_cross", "multi_party_cannon",
    "resistance_breakout", "immortal_guidance", "new_stock_drawdown", "strategy_2560",
]


def _bars(rows, start="2025-01-02"):
    """rows: [(open, high, low, close, volume)] **升序** → 倒序 DataFrame(最新在前)"""
    dates = _dates(len(rows), start)
    df = pd.DataFrame(rows, columns=["open", "high", "low", "close", "volume"])
    df.insert(0, "date", dates)
    return df.sort_values("date", ascending=False).reset_index(drop=True)


def _flat(n, price=10.0, vol=1e6):
    return [(price - 0.02, price + 0.05, price - 0.05, price, vol) for _ in range(n)]


# ---------- 注册表门禁: PRD G1 承诺 12 个形态策略 ----------

def test_registry_has_twelve_pattern_strategies():
    from strategy_sdk.registry import registry
    ids = {s["id"] for s in registry.list()}
    missing = set(PATTERN_SIDS) - ids
    assert not missing, f"注册表缺少形态策略: {missing}"
    assert len(ids) >= 16, f"策略总数应 >= 16, 实际 {len(ids)}"


def test_governance_covers_all_pattern_strategies():
    """新策略必须纳入纳管中心, 且默认不进日历(FR-7.4-9 受控入库)"""
    from strategy_governance import BUILTIN_SIDS, CALENDAR_OPT_IN_SIDS, _default_state
    for sid in PATTERN_SIDS:
        assert sid in BUILTIN_SIDS, f"{sid} 未纳入纳管"
        assert sid in CALENDAR_OPT_IN_SIDS, f"{sid} 应默认不进日历"
    state = _default_state()
    assert all(state[sid]["show_in_calendar"] is False for sid in PATTERN_SIDS)


def test_support_method_declared_for_new_strategies():
    """执行侧支撑位方法需覆盖全部形态策略(否则生成计划会缺支撑位)"""
    from execution.support import STRATEGY_SUPPORT_METHODS
    for sid in PATTERN_SIDS:
        assert sid in STRATEGY_SUPPORT_METHODS, f"{sid} 缺支撑位方法映射"


# ---------- 1. 涨停回马枪 ----------

def test_limit_up_pullback_signal_and_params():
    from strategy_sdk.builtin.limit_up_pullback import (LimitUpPullbackStrategy,
                                                        _limit_up_pullback_signal)
    st = LimitUpPullbackStrategy()
    p = st.validate_params({})
    rows = _flat(30)
    rows.append((10.1, 11.05, 10.05, 11.00, 3.6e6))
    rows.append((10.90, 10.95, 10.60, 10.80, 1.2e6))
    rows.append((10.75, 10.80, 10.50, 10.60, 1.1e6))
    rows.append((10.60, 10.80, 10.55, 10.70, 1.15e6))
    rows.append((10.80, 11.00, 10.75, 10.90, 1.2e6))
    rows.append((10.95, 11.20, 10.90, 11.15, 2.0e6))
    assert _limit_up_pullback_signal(_bars(rows), p) is True
    # 去掉选股日放量 → 不命中
    rows[-1] = (10.95, 11.10, 10.90, 11.15, 1.25e6)
    assert _limit_up_pullback_signal(_bars(rows), p) is False
    # 回调跌破支撑位(涨停收盘 95% = 10.45) → 不命中
    rows[-1] = (10.95, 11.20, 10.90, 11.15, 2.0e6)
    rows[31] = (10.40, 10.45, 10.10, 10.20, 1.2e6)
    assert _limit_up_pullback_signal(_bars(rows), p) is False


# ---------- 2. 启明星 ----------

def test_morning_star_hits_and_rejects_short_body():
    from strategy_sdk.builtin.morning_star import MorningStarStrategy, _morning_star_signal
    p = MorningStarStrategy().validate_params({})
    rows = _flat(30)
    rows.append((10.50, 10.55, 9.95, 10.00, 1.2e6))    # 长阴线(实体 5%)
    rows.append((10.00, 10.06, 9.96, 10.02, 1.0e6))    # 小实体星线
    rows.append((10.05, 10.65, 10.00, 10.60, 2.0e6))   # 放量长阳 +5.5%
    assert _morning_star_signal(_bars(rows), p) is True
    # 星线实体过大(> 长阴实体 30%) → 不命中
    rows[31] = (10.00, 10.30, 9.96, 10.30, 1.0e6)
    assert _morning_star_signal(_bars(rows), p) is False


# ---------- 3. 多金叉共振 ----------

def _mgc_fixture():
    """缓跌 40 日 + 连续拉升 6 日: 均线金叉在前、KDJ/MACD 金叉在后, 三者相隔数日"""
    rows, price = [], 12.0
    for _ in range(40):
        price -= 0.06
        rows.append((price + 0.02, price + 0.05, price - 0.08, price, 1.0e6))
    for _ in range(6):
        price += 0.35
        rows.append((price - 0.30, price + 0.05, price - 0.32, price, 2.0e6))
    return _bars(rows)


def test_multi_golden_cross_detects_resonance():
    from strategy_sdk.builtin.multi_golden_cross import (MultiGoldenCrossStrategy,
                                                         _multi_golden_cross_signal)
    st = MultiGoldenCrossStrategy()
    p = st.validate_params({"resonance_days": 10, "lookback_days": 6})
    assert _multi_golden_cross_signal(_mgc_fixture(), p) is True
    # 只有缓跌段(无任何金叉) → 不命中
    assert _multi_golden_cross_signal(_mgc_fixture().iloc[6:].reset_index(drop=True), p) is False


def test_multi_golden_cross_requires_three_crosses_within_window():
    """共振窗口收紧到 0(同日)时, 三个金叉分散在多日 → 不命中; 放宽后命中"""
    from strategy_sdk.builtin.multi_golden_cross import (MultiGoldenCrossStrategy,
                                                         _multi_golden_cross_signal)
    st = MultiGoldenCrossStrategy()
    df = _mgc_fixture()
    assert _multi_golden_cross_signal(df, st.validate_params(
        {"resonance_days": 10, "lookback_days": 6})) is True
    assert _multi_golden_cross_signal(df, st.validate_params(
        {"resonance_days": 0, "lookback_days": 6})) is False
    # 回溯窗口过短(看不到较早的金叉) → 不命中
    assert _multi_golden_cross_signal(df, st.validate_params(
        {"resonance_days": 10, "lookback_days": 1})) is False


# ---------- 4. 多方炮 ----------

def test_multi_party_cannon_hits_two_yang_one_yin():
    from strategy_sdk.builtin.multi_party_cannon import (MultiPartyCannonStrategy,
                                                         _multi_party_cannon_signal)
    p = MultiPartyCannonStrategy().validate_params({})
    rows = _flat(25)
    rows.append((10.00, 10.45, 9.95, 10.40, 1.5e6))    # 第一根中阳 +4%
    rows.append((10.40, 10.45, 10.20, 10.25, 1.1e6))   # 第二根缩量小阴
    rows.append((10.30, 10.80, 10.25, 10.75, 1.7e6))   # 第三根放量突破阳
    assert _multi_party_cannon_signal(_bars(rows), p) is True
    # 第三根未突破第一根收盘(10.40) → 不命中
    rows[-1] = (10.30, 10.42, 10.25, 10.38, 1.7e6)
    assert _multi_party_cannon_signal(_bars(rows), p) is False


# ---------- 5. 阻力位突破 ----------

def test_resistance_breakout_hits_after_platform():
    from strategy_sdk.builtin.resistance_breakout import (ResistanceBreakoutStrategy,
                                                          _resistance_breakout_signal)
    p = ResistanceBreakoutStrategy().validate_params({})
    rows = []
    for i in range(80):
        if i == 20:
            rows.append((10.50, 10.80, 10.45, 10.60, 1.0e6))   # 平台唯一高点(足够陈旧)
        else:
            rows.append((10.20, 10.55, 10.05, 10.30, 1.0e6))
    rows.append((10.60, 11.45, 10.55, 11.40, 3.0e6))           # 突破日
    assert _resistance_breakout_signal(_bars(rows), p) is True
    # 突破幅度不足(未过平台高点 10.80) → 不命中
    rows[-1] = (10.50, 10.70, 10.45, 10.65, 3.0e6)
    assert _resistance_breakout_signal(_bars(rows), p) is False


# ---------- 6. 仙人指路 ----------

def test_immortal_guidance_hits_after_upper_shadow():
    from strategy_sdk.builtin.immortal_guidance import (ImmortalGuidanceStrategy,
                                                        _immortal_guidance_signal)
    p = ImmortalGuidanceStrategy().validate_params({})
    rows = []
    for i in range(28):                       # 稳步上行(斜率>0, R²高)
        c = 10.0 + 0.065 * i
        rows.append((c - 0.02, c + 0.05, c - 0.08, c, 1.0e6))
    rows.append((11.80, 13.20, 11.78, 11.82, 2.0e6))   # T 日: 冲高 12% + 长上影 10%
    rows.append((12.55, 12.65, 12.50, 12.60, 1.2e6))   # 今日反包 12.51
    assert _immortal_guidance_signal(_bars(rows), p) is True
    # 今日未收复上影线 50%(12.51) → 不命中
    rows[-1] = (12.20, 12.30, 12.15, 12.25, 1.2e6)
    assert _immortal_guidance_signal(_bars(rows), p) is False


# ---------- 7. 次新腰斩 ----------

def test_new_stock_drawdown_hits_for_halved_new_stock():
    from strategy_sdk.builtin.new_stock_drawdown import (NewStockDrawdownStrategy,
                                                         _new_stock_drawdown_signal)
    p = NewStockDrawdownStrategy().validate_params({})
    rows = []
    for i in range(11):                       # 上市冲到 20
        c = 10.0 + 1.0 * i
        rows.append((c - 0.1, c + 0.2, c - 0.2, c, 1.0e6))
    for i in range(49):                       # 一路腰斩到 9
        c = 20.0 - 11.0 * (i + 1) / 49
        rows.append((c + 0.05, c + 0.15, c - 0.15, c, 1.0e6))
    df = _bars(rows)
    assert len(df) <= int(p["max_kline_bars"])
    assert _new_stock_drawdown_signal(df, p) is True
    # 老股(K 线超过次新上限) → 不命中
    old = _bars(rows + _flat(120))
    assert _new_stock_drawdown_signal(old, p) is False


# ---------- 8. 2560 战法 ----------

def test_strategy_2560_hits_on_price_and_volume_cross():
    from strategy_sdk.builtin.strategy_2560 import Strategy2560, _strategy_2560_signal
    p = Strategy2560().validate_params({})
    rows = _flat(60)
    for i in range(37):                       # 缓跌到 9.7, 令价格处于 MA25 下方
        c = 10.0 - 0.3 * (i + 1) / 37
        rows.append((c + 0.02, c + 0.05, c - 0.05, c, 1.0e6))
    rows.append((9.73, 9.80, 9.68, 9.75, 1.0e6))
    rows.append((10.20, 10.65, 10.15, 10.60, 3.0e6))   # 放量长阳: 价格上穿 MA25 + 量能金叉
    assert _strategy_2560_signal(_bars(rows), p) is True
    # 量能不足 → 不命中
    rows[-1] = (10.20, 10.65, 10.15, 10.60, 1.05e6)
    assert _strategy_2560_signal(_bars(rows), p) is False


@pytest.mark.parametrize("sid", PATTERN_SIDS)
def test_each_pattern_declares_hold_days(sid):
    from strategy_sdk.registry import registry
    st = registry.get(sid)
    keys = {f["key"] for f in st.params_schema()}
    assert "hold_days" in keys
