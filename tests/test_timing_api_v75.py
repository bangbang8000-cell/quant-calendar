#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.5 择时 API 契约测试 (FR-7.5-2/3/4/5)
验证 strategies / evaluate / state 三端点、Overlay 不产矩阵、市场状态时间轴。
"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient


def _bars(n=120, seed=7):
    """正序 OHLCV bars, 带温和趋势"""
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2025-01-01", periods=n).strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, 6, n) + rng.normal(0, 0.4, n)
    return [
        {"date": dates[i], "open": float(close[i] * 0.995),
         "high": float(close[i] * 1.02), "low": float(close[i] * 0.98),
         "close": float(close[i]), "volume": float(rng.uniform(1e6, 2e6))}
        for i in range(n)
    ]


def _client():
    from api.v1.timing_api import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def test_timing_strategies_endpoint():
    """FR-7.5-2: GET /api/timing/strategies 含 8 策略 + Overlay 映射"""
    r = _client().get("/api/timing/strategies")
    assert r.status_code == 200
    j = r.json()
    assert j["count"] == 8
    assert {s["id"] for s in j["strategies"]} == {
        "bollinger", "rsi", "support", "turtle", "low_turtle",
        "turtle_plus", "uptrend_pullback", "macd_bollinger"}
    assert j["exposure_mapping"]["sell"] == 0.0
    assert "不产持仓矩阵" in j["output_contract"]


def test_timing_evaluate_overlay_only():
    """FR-7.5-1/2: evaluate 输出买卖点+绩效, 明确不产矩阵、不进日历"""
    r = _client().post("/api/timing/evaluate",
                       json={"sid": "rsi", "bars": _bars(), "warmup": 30})
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["overlay_only"] is True
    assert j["holdings_matrix"] is None
    assert j["calendar_opt_in"] is False
    assert j["data_source"] == "payload"
    assert 0 <= j["current_exposure"] <= 1.0
    assert isinstance(j["points"], list)
    assert "total_return" in j["performance"]
    assert j["current_signal"]["action"] in ("buy", "sell", "add", "reduce", "hold")


def test_timing_evaluate_unknown_sid():
    r = _client().post("/api/timing/evaluate",
                       json={"sid": "not_exist", "bars": _bars()})
    assert r.status_code == 404


def test_timing_evaluate_multi_strategy():
    """8 策略均可经 API 评估, 无异常"""
    client = _client()
    for sid in ("bollinger", "rsi", "support", "turtle", "low_turtle",
                "turtle_plus", "uptrend_pullback", "macd_bollinger"):
        r = client.post("/api/timing/evaluate",
                        json={"sid": sid, "bars": _bars(90), "warmup": 30})
        assert r.status_code == 200, f"{sid}: {r.text}"


def test_timing_state_endpoint():
    """FR-7.5-3/4: 四状态 + 迁移概率 + 时间轴 + 温度/ADX 仓位上限"""
    r = _client().post("/api/timing/state", json={"bars": _bars(150)})
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["state"] in ("bull_trend", "bull_shock", "bear_shock", "bear_trend", "unknown")
    assert 0 <= j["confidence"] <= 1.0
    assert j["engine"] in ("hmmlearn", "heuristic")
    assert isinstance(j["timeline"], list) and len(j["timeline"]) > 0
    assert all({"date", "state", "confidence"}.issubset(x) for x in j["timeline"])
    assert isinstance(j["transition_matrix"], dict)
    assert 0 <= j["temperature"] <= 100
    assert j["adx_tier"] in ("clear", "emerging", "ranging")
    assert 0 <= j["exposure_cap"] <= 1.0


def test_market_state_insufficient_data_honest():
    """数据不足诚实标注 unknown (L3/O1)"""
    from timing.market_state import MarketStateAnalyzer
    st = MarketStateAnalyzer().detect_state(pd.DataFrame({"close": [1, 2, 3]}))
    assert st.state == "unknown"
    assert st.confidence == 0.0


def test_research_types_include_timing():
    """FR-7.5-5: 研究历史类型含 timing / market_state"""
    from research_store import VALID_TYPES
    assert "timing" in VALID_TYPES and "market_state" in VALID_TYPES


def test_backend_info_single_source():
    """backend_info 代理必须从 main_new.py 读取, 保持版本单一来源"""
    import backend_info
    from main_new import APP_VERSION
    assert backend_info.APP_VERSION == APP_VERSION


def test_research_history_actually_written(monkeypatch):
    """FR-7.5-5: timing 实验真正写入 research_store (修复 backend_info 静默失败)"""
    import api.v1.timing_api as timing_api
    from main_new import APP_VERSION
    calls = []
    monkeypatch.setattr("research_store.save_experiment",
                        lambda exp: calls.append(exp) or "exp_test")
    timing_api._record("timing", "rsi", {"warmup": 30},
                       ["2025-01-01", "2025-01-31"],
                       {"point_count": 2}, {"sid": "rsi"})
    assert len(calls) == 1
    assert calls[0]["type"] == "timing"
    assert calls[0]["app_version"] == APP_VERSION
    assert calls[0]["subject"] == "rsi"
