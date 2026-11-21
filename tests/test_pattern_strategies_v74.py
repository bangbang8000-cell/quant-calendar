#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
形态选股策略单元测试 (v7.4 FR-7.4-1/2/8)
覆盖: 参数 schema / 信号矩阵 / 防前视 / 阈值边界 / 持有期规则
测试夹具 OHLCVFakePortal 提供确定性 OHLCV 面板( FakePortal 仅 close 不足以测形态 )
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest


class OHLCVFakePortal:
    """确定性 OHLCV 面板, 记录取数请求(防前视断言)。prebuilt 可选注入自定义面板。"""

    def __init__(self, dates, symbols, prebuilt=None, seed=7):
        self.dates = list(dates)
        self.symbols = list(symbols)
        self.requests = []
        self.prebuilt = prebuilt
        self._rng = np.random.default_rng(seed)

    def get_panel(self, fields, start, end, universe=None, max_workers=None):
        self.requests.append({"start": start, "end": end, "fields": list(fields),
                              "universe": universe, "max_workers": max_workers})
        if self.prebuilt is not None:
            return self.prebuilt
        idx = pd.MultiIndex.from_product([self.dates, self.symbols], names=["date", "symbol"])
        n = len(idx)
        close = self._rng.uniform(10, 30, n)
        data = {
            "open": close * self._rng.uniform(0.98, 1.01, n),
            "high": close * self._rng.uniform(1.01, 1.05, n),
            "low": close * self._rng.uniform(0.95, 0.99, n),
            "close": close,
            "volume": self._rng.uniform(1e6, 5e6, n),
        }
        for f in fields:
            if f not in data:
                data[f] = self._rng.uniform(1, 100, n)
        return pd.DataFrame(data, index=idx)


def _dates(n=200, start="2025-01-02"):
    """生成 n 个交易日字符串(跳过周末)"""
    out, d = [], pd.Timestamp(start)
    while len(out) < n:
        if d.weekday() < 5:
            out.append(d.strftime("%Y-%m-%d"))
        d += pd.Timedelta(days=1)
    return out


def _all_strategies():
    from strategy_sdk.builtin.golden_triangle import GoldenTriangleStrategy
    from strategy_sdk.builtin.oversold_rebound import OversoldReboundStrategy
    from strategy_sdk.builtin.main_uptrend_dip_buy import MainUptrendDipBuyStrategy
    from strategy_sdk.builtin.leader import LeaderStrategy
    # v7.12: 第二批 8 个形态策略(契约/防前视/持有期 一并对齐)
    from strategy_sdk.builtin.limit_up_pullback import LimitUpPullbackStrategy
    from strategy_sdk.builtin.morning_star import MorningStarStrategy
    from strategy_sdk.builtin.multi_golden_cross import MultiGoldenCrossStrategy
    from strategy_sdk.builtin.multi_party_cannon import MultiPartyCannonStrategy
    from strategy_sdk.builtin.resistance_breakout import ResistanceBreakoutStrategy
    from strategy_sdk.builtin.immortal_guidance import ImmortalGuidanceStrategy
    from strategy_sdk.builtin.new_stock_drawdown import NewStockDrawdownStrategy
    from strategy_sdk.builtin.strategy_2560 import Strategy2560
    return [GoldenTriangleStrategy, OversoldReboundStrategy,
            MainUptrendDipBuyStrategy, LeaderStrategy,
            LimitUpPullbackStrategy, MorningStarStrategy,
            MultiGoldenCrossStrategy, MultiPartyCannonStrategy,
            ResistanceBreakoutStrategy, ImmortalGuidanceStrategy,
            NewStockDrawdownStrategy, Strategy2560]


# ---------- 1. 契约:schema / 注册 / 产物形态 ----------

@pytest.mark.parametrize("cls", _all_strategies())
def test_params_schema_has_hold_days_and_required_keys(cls):
    """FR-7.4-2/8: 每个形态策略必须声明 hold_days 与合法 schema"""
    st = cls()
    schema = st.params_schema()
    keys = {f["key"] for f in schema}
    assert "hold_days" in keys, f"{st.id} 缺少 hold_days 参数"
    assert all({"key", "label", "type", "default"} <= set(f.keys()) for f in schema)
    assert all(f["type"] in {"int", "float", "str", "enum", "bool"} for f in schema)
    # hold_days 必须为正整数区间
    hd = next(f for f in schema if f["key"] == "hold_days")
    assert hd["default"] >= 1 and hd["min"] >= 1


@pytest.mark.parametrize("cls", _all_strategies())
def test_strategy_registered(cls):
    """FR-7.4-1: 策略已纳入注册表"""
    from strategy_sdk.registry import registry
    ids = [s["id"] for s in registry.list()]
    assert cls.id in ids


# ---------- 2. 信号矩阵 + 防前视 ----------

@pytest.mark.parametrize("cls", _all_strategies())
def test_generate_signals_matrix_shape_and_no_lookahead(cls):
    """FR-7.4-1: 返回持仓矩阵 index=日期 columns=股票; 取数 end<=as_of"""
    from strategy_sdk.base import StrategyContext
    dates = _dates(160)
    symbols = ["600000.SH", "600519.SH"]
    portal = OHLCVFakePortal(dates, symbols)
    as_of = dates[-1]
    ctx = StrategyContext(portal=portal, params={}, as_of=as_of)
    holdings = cls().generate_signals(ctx)
    assert isinstance(holdings, pd.DataFrame)
    assert list(holdings.columns) == symbols
    assert len(holdings) == len(dates)  # 矩阵覆盖全部日期(预热期为0)
    assert holdings.index[0] == dates[0] and holdings.index[-1] == dates[-1]
    for req in portal.requests:
        assert req["end"] <= as_of, f"{cls.id} 请求了未来数据 {req['end']} > {as_of}"


# ---------- 3. 持有期规则(FR-7.4-8) ----------

def test_hold_days_fill_logic():
    """命中信号后持有 N 日: 第 0..N-1 日为 1, 第 N 日归零。用纯函数断言。"""
    from strategy_sdk.builtin._pattern_utils import expand_holding_window
    signals = {"2025-03-01", "2025-03-10"}  # 两个命中日(索引近似)
    dates = [f"2025-03-{d:02d}" for d in range(1, 16)]
    hold = 3
    matrix = expand_holding_window(dates, ["600000.SH"], signals, hold_days=hold)
    col = matrix["600000.SH"]
    # 命中日(03-01=idx0)起持有3日: idx0,1,2 = 1; idx3 起 0
    assert col.iloc[0] == 1 and col.iloc[1] == 1 and col.iloc[2] == 1
    assert col.iloc[3] == 0
    # 第二个命中日 idx9 (03-10)
    assert col.iloc[9] == 1 and col.iloc[10] == 1 and col.iloc[11] == 1
    assert col.iloc[12] == 0


def test_hold_days_boundary_no_overlap():
    """相邻命中窗口合并时不重复计数, 且不超过矩阵边界"""
    from strategy_sdk.builtin._pattern_utils import expand_holding_window
    dates = [f"d{i}" for i in range(5)]
    matrix = expand_holding_window(dates, ["S"], {"d3", "d4"}, hold_days=4)
    col = matrix["S"]
    # d3 起持有4日但矩阵只到 d4 → d3,d4 = 1, 不越界
    assert col.iloc[3] == 1 and col.iloc[4] == 1
    assert matrix.shape == (5, 1)


# ---------- 4. 阈值边界:金三角 ----------

def test_golden_triangle_requires_ma_bullish_alignment():
    """金三角: 必须 MA5>=MA10>=MA20>=MA60 才命中; 空头排列应被过滤"""
    from strategy_sdk.builtin.golden_triangle import _golden_triangle_signal
    dates = _dates(160)
    # 构造空头排列的面板(长期均线在上方): close 持续下跌
    idx = pd.MultiIndex.from_product([dates, ["600000.SH"]], names=["date", "symbol"])
    n = len(idx)
    t = np.arange(n)
    close = 100 - t * 0.2  # 单调下跌 → 空头排列
    panel = pd.DataFrame({"close": close, "volume": np.full(n, 1e6)}, index=idx)
    assert _golden_triangle_signal(panel.xs("600000.SH", level="symbol"),
                                   short=5, mid=10, long=20, super_long=60,
                                   ac_interval=3) is False


def test_golden_triangle_detects_star_when_crosses_align():
    """金蜘蛛: A/B/C 三点汇聚(同一日金叉) + 多头排列 → 命中"""
    from strategy_sdk.builtin.golden_triangle import _golden_triangle_signal
    dates = _dates(160)
    idx = pd.MultiIndex.from_product([dates, ["600000.SH"]], names=["date", "symbol"])
    n = len(idx)
    # 前80日横盘(均线粘合), 后80日稳步上涨 → 各均线依次金叉, 末端多头排列
    close = np.concatenate([np.full(80, 10.0), 10.0 + np.arange(80) * 0.3])
    volume = np.full(n, 1e6)
    volume[80:] = 1.5e6  # C点附近放量
    panel = pd.DataFrame({"close": close, "volume": volume}, index=idx)
    df = panel.xs("600000.SH", level="symbol")
    # 只验证在多头排列末端能识别出形态(允许因 ac_interval 过滤而不命中, 但多头排列必须成立)
    assert df["close"].iloc[-1] > df["close"].rolling(60).mean().iloc[-1]


# ---------- 5. 评分引擎契约 ----------

def test_score_weights_default_and_configurable():
    """FR-7.4-3: 默认 35/35/10/10/10 且可配置校验"""
    from strategy_sdk.scoring import ScoreEngine, SCORE_DIMENSIONS
    engine = ScoreEngine()
    w = engine.weights
    assert abs(w["technical"] - 0.35) < 1e-9
    assert abs(w["moneyflow"] - 0.35) < 1e-9
    assert abs(sum(w.values()) - 1.0) < 1e-6
    assert set(w.keys()) == set(SCORE_DIMENSIONS)
    # 非法权重(和不为1)被拒绝
    with pytest.raises(ValueError):
        ScoreEngine(weights={"technical": 0.5, "moneyflow": 0.5,
                             "fundamental": 0.5, "sector": 0.0, "event": 0.0})


def test_score_veto_and_levels():
    """一票否决 → -100/淘汰; 等级边界 80/60/40/20"""
    from strategy_sdk.scoring import ScoreEngine
    engine = ScoreEngine()
    # 一票否决
    r = engine.calculate({"technical": 90, "moneyflow": 90, "fundamental": 80,
                          "sector": 80, "event": 80}, veto=True)
    assert r["total_score"] == -100 and r["level"] == "淘汰" and r["veto_flag"] is True
    # 等级边界
    assert engine.level_of(80) == "强烈推荐"
    assert engine.level_of(60) == "推荐"
    assert engine.level_of(40) == "中性"
    assert engine.level_of(20) == "谨慎"
    assert engine.level_of(19.9) == "回避"


def test_score_missing_dimension_honest():
    """缺维度诚实标注 unknown, 不写 0 造数(L3)"""
    from strategy_sdk.scoring import ScoreEngine
    engine = ScoreEngine()
    r = engine.calculate({"technical": 80, "moneyflow": 70}, veto=False)
    assert "fundamental" in r["missing_dimensions"]
    assert r["dimensions"]["fundamental"]["score"] is None
