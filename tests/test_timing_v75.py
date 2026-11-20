#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.5 择时策略单元测试 (FR-7.5-1/2/5)
覆盖: 8策略契约 / 信号语义 / T-1防前视 / Overlay仓位系数 / 不产矩阵 / 研究历史类型
"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest


def _asc_panel(n=120, seed=11):
    """构造正序 OHLCV DataFrame(单股), 带温和趋势+噪声"""
    rng = np.random.default_rng(seed)
    dates = pd.date_range("2025-01-01", periods=n, freq="B").strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, 8, n) + rng.normal(0, 0.5, n)
    close = np.maximum(close, 1)
    return pd.DataFrame({
        "date": dates,
        "open": close * rng.uniform(0.99, 1.01, n),
        "high": close * rng.uniform(1.01, 1.04, n),
        "low": close * rng.uniform(0.96, 0.99, n),
        "close": close,
        "volume": rng.uniform(1e6, 3e6, n),
    })


def _all_timing():
    from timing.strategies import (BollingerTiming, RSITiming, SupportTiming,
        TurtleTiming, LowTurtleTiming, TurtlePlusTiming,
        UptrendPullbackTiming, ShunShiBaoTiming)
    return [BollingerTiming, RSITiming, SupportTiming, TurtleTiming,
            LowTurtleTiming, TurtlePlusTiming, UptrendPullbackTiming, ShunShiBaoTiming]


# ---------- 1. 契约: 8 策略可实例化 + 返回 TimingSignal ----------

@pytest.mark.parametrize("cls", _all_timing())
def test_timing_strategy_contract(cls):
    """FR-7.5-1: 每个择时策略返回 TimingSignal, action∈buy/sell/add/reduce/hold"""
    from timing.base import TimingSignal
    st = cls()
    df = _asc_panel()
    sig = st.evaluate(df)
    assert isinstance(sig, TimingSignal)
    assert sig.action in ("buy", "sell", "add", "reduce", "hold")
    assert 0 <= sig.strength <= 1.0
    assert 0 <= sig.target_exposure <= 1.0


@pytest.mark.parametrize("cls", _all_timing())
def test_timing_registered(cls):
    from timing.registry import TIMING_REGISTRY
    assert cls.id in TIMING_REGISTRY


# ---------- 2. T-1 防前视 ----------

def test_timing_uses_prev_day_signal():
    """FR-7.5-1: 回测模式用 T-1 信号, 末日K线不参与信号判定(防前视)"""
    from timing.base import _signal_bar
    from timing.strategies import RSITiming

    df = _asc_panel()
    # 底层: 回测模式取倒数第二根K线, 实盘模式取末日K线
    assert _signal_bar(df, True)["date"] == df.iloc[-2]["date"]
    assert _signal_bar(df, False)["date"] == df.iloc[-1]["date"]

    # 策略级: 末日腰斩使 RSI 骤降至约 20.8, 而 T-1 仍约 51.9
    spike = df.copy()
    spike.loc[spike.index[-1], "close"] = spike["close"].iloc[-2] * 0.5
    st = RSITiming(oversold=30)
    assert st.evaluate(spike, True).action == "hold", "回测模式不得用末日信号"
    assert st.evaluate(spike, False).action == "buy", "实盘模式应使用末日信号"


def test_overlay_exposure_mapping():
    """FR-7.5-1/2: 择时信号→仓位系数 Overlay(0~1), 不是持仓矩阵"""
    from timing.overlay import action_to_exposure, apply_timing_overlay
    assert action_to_exposure("buy", 0.8) > 0.5
    assert action_to_exposure("sell", 0.9) == 0.0
    assert action_to_exposure("hold", 0.0) == 1.0  # 无信号时满仓(不改原决策)
    holdings = pd.DataFrame({("600000.SH"): [1.0, 1.0]}, index=["d1", "d2"])
    overlaid = apply_timing_overlay(holdings, exposure=0.5)
    assert float(overlaid.iloc[0]["600000.SH"]) == 0.5


def test_timing_does_not_create_holdings_matrix():
    """评估确认: 择时不产矩阵, 不进日历(只输出仓位系数)"""
    from timing.base import TimingSignal
    sig = TimingSignal(action="buy", strength=0.7, target_exposure=1.0)
    assert not hasattr(sig, "holdings") or sig.holdings is None


# ---------- 4. 市场状态: HMM四状态 / 温度 / ADX ----------

def test_market_state_four_states():
    """FR-7.5-3: HMM四状态(牛趋/牛震/熊震/熊趋), 仅T1指数K线"""
    from timing.market_state import MarketStateAnalyzer
    a = MarketStateAnalyzer()
    df = _asc_panel(150)
    st = a.detect_state(df)
    assert st.state in ("bull_trend", "bull_shock", "bear_shock", "bear_trend", "unknown")
    assert 0 <= st.confidence <= 1.0


def test_market_temperature_range():
    """FR-7.5-4: 市场温度 0-100 → 仓位系数"""
    from timing.market_state import market_temperature
    df = _asc_panel(120)
    temp = market_temperature(df)
    assert 0 <= temp <= 100


def test_adx_tier():
    """FR-7.5-4: ADX档位(明确/萌芽/震荡)联动仓位上限"""
    from timing.market_state import adx_tier
    df = _asc_panel(120)
    tier = adx_tier(df)
    assert tier in ("clear", "emerging", "ranging")


# ---------- 5. 研究历史类型 ----------

def test_research_types_timing():
    from research_store import VALID_TYPES
    assert "timing" in VALID_TYPES
    assert "market_state" in VALID_TYPES


def test_overlay_injected_into_single_backtest_engine():
    """FR-7.5-1: 择时 Overlay 注入同一回测引擎, 不另起执行路径"""
    from strategy_sdk.backtest import backtest_holdings
    from timing.overlay import build_exposure_series

    dates = ["2025-01-06", "2025-01-07", "2025-01-08", "2025-01-09", "2025-01-10"]
    holdings = pd.DataFrame({"600000.SH": [1.0] * len(dates)}, index=dates)
    returns = pd.DataFrame({"600000.SH": [0.01, -0.01, 0.02, -0.02, 0.01]}, index=dates)
    base = backtest_holdings(holdings, returns)

    points = [{"date": "2025-01-06", "exposure": 0.0}]
    series = build_exposure_series(points, dates)
    assert series.iloc[0] == 1.0 and series.iloc[1] == 0.0  # 信号次日生效
    overlaid = backtest_holdings(holdings, returns, timing_exposure=series.to_dict())

    assert base["success"] and overlaid["success"]
    assert base["total_return"] != overlaid["total_return"]
    assert overlaid["lookahead_policy"] == base["lookahead_policy"]
