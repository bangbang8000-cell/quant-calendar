#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.13 自选股择时矩阵测试 (FR-7.5 扩展)

POST /api/timing/matrix:
- 自动加载当前用户自选股 (无 symbols 时)
- 每行一只标的 × 每列一个择时策略, 单元格 = 当前信号 (action+exposure)
- Overlay 契约不变: 只承载仓位系数, 不产持仓矩阵 / 不进日历
- 单只标的数据失败不阻塞整表 (行内 honest error)
- 显式 symbols / 未知 sid / 自选股为空的分支
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient


def _bars(n=120, seed=7):
    import numpy as np
    import pandas as pd
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2025-01-01", periods=n).strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, 6, n) + rng.normal(0, 0.4, n)
    return [
        {"date": dates[i], "open": float(close[i] * 0.995),
         "high": float(close[i] * 1.02), "low": float(close[i] * 0.98),
         "close": float(close[i]), "volume": float(rng.uniform(1e6, 2e6))}
        for i in range(n)
    ]


@pytest.fixture()
def client(monkeypatch):
    """注入假自选股 (绕过真实 DB) + 固定 bars 数据源 (payload 不可用, 走模拟)"""
    import api.v1.timing_api as ta

    fake_watchlist = [
        {"stock_code": "600000.SH", "name": "浦发银行", "added_at": "2026-01-01"},
        {"stock_code": "000001.SZ", "name": "平安银行", "added_at": "2026-01-02"},
    ]
    monkeypatch.setattr(ta, "_watchlist_symbols", lambda u: [
        {"code": r["stock_code"], "name": r["name"]} for r in fake_watchlist])

    # 单只标的失败不阻塞整表: 让 000001 抛错
    real_resolve = ta._resolve_bars

    def flaky_resolve(payload):
        if str(payload.get("symbol")) == "000001.SZ":
            raise RuntimeError("模拟行情故障")
        return real_resolve(payload)

    from api.v1 import timing_api
    monkeypatch.setattr(timing_api, "_resolve_bars", flaky_resolve, raising=False)

    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(timing_api.router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def test_matrix_from_watchlist_autoload(client):
    """无 symbols → 自动读自选股; 行×列完整; 单元格含 action+exposure"""
    r = client.post("/api/timing/matrix", json={})
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["from_watchlist"] is True
    assert j["symbol_count"] == 2
    assert [row["symbol"] for row in j["rows"]] == ["600000.SH", "000001.SZ"]
    sids = [s["id"] for s in j["strategies"]]
    assert len(sids) == 8
    ok = j["rows"][0]
    assert ok["name"] == "浦发银行"
    assert set(ok["signals"].keys()) == set(sids)
    for cell in ok["signals"].values():
        assert cell["action"] in ("buy", "sell", "add", "reduce", "hold")
        assert 0.0 <= cell["exposure"] <= 1.0
    assert 0.0 <= ok["avg_exposure"] <= 1.0
    # Overlay 契约不变
    assert j["overlay_only"] is True
    assert j["holdings_matrix"] is None
    assert j["calendar_opt_in"] is False


def test_matrix_row_error_does_not_block(client):
    """单只标的取数失败 → 行内 honest error, 其余行照常评估"""
    r = client.post("/api/timing/matrix", json={})
    j = r.json()
    assert j["evaluated_count"] == 1 and j["error_count"] == 1
    err_row = [x for x in j["rows"] if x["symbol"] == "000001.SZ"][0]
    ok_row = [x for x in j["rows"] if x["symbol"] == "600000.SH"][0]
    assert err_row["signals"] == {} and "模拟行情故障" in err_row["error"]
    assert ok_row["signals"], "正常标的应有 8 个信号单元"


def test_matrix_aggregate_per_strategy(client):
    """按策略聚合: 动作计数之和 = 已评估行数, 平均仓位在 [0,1]"""
    j = client.post("/api/timing/matrix", json={}).json()
    for sid, agg in j["aggregate"].items():
        assert sum(agg["action_counts"].values()) == j["evaluated_count"]
        assert agg["avg_exposure"] is None or 0.0 <= agg["avg_exposure"] <= 1.0


def test_matrix_explicit_symbols_skip_watchlist(client):
    """显式 symbols → 不读自选股 (from_watchlist=False)"""
    r = client.post("/api/timing/matrix", json={"symbols": ["600519.SH"]})
    j = r.json()
    assert j["from_watchlist"] is False
    assert [row["symbol"] for row in j["rows"]] == ["600519.SH"]


def test_matrix_empty_watchlist_422(monkeypatch):
    """自选股为空 → 422 带可操作文案 (而非 500 或静默空表)"""
    import api.v1.timing_api as ta
    monkeypatch.setattr(ta, "_watchlist_symbols", lambda u: [])
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(ta.router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    c = TestClient(app)
    r = c.post("/api/timing/matrix", json={})
    assert r.status_code == 422
    assert "自选股为空" in r.json()["detail"]


def test_matrix_unknown_sid_404(client):
    r = client.post("/api/timing/matrix", json={"sids": ["nope"]})
    assert r.status_code == 404


def test_matrix_symbol_cap(client):
    """超过 30 只截断 (防自选股过大拖垮同步评估)"""
    syms = ["s%02d.SH" % i for i in range(35)]
    r = client.post("/api/timing/matrix", json={"symbols": syms})
    j = r.json()
    assert j["symbol_count"] == 30
    assert j["max_symbols"] == 30


def test_matrix_use_prev_day_signal_contract(client):
    """T+1 口径透传: use_prev_day_signal 默认 True 且在响应中声明"""
    j = client.post("/api/timing/matrix", json={"symbols": ["600000.SH"]}).json()
    assert j["use_prev_day_signal"] is True
