#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.26 FR-13: 形态匹配候选池来源 + 自选一键填充 + 异步进度/结果动作

TC-726-3-1: 选择「自选股」→ 候选数 = 自选数。
补充: 全市场受限 TopN、日历新增来源、匹配结果附带「已评估 x/y」。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))

import numpy as np  # noqa: E402
import pandas as pd  # noqa: E402
from fastapi import FastAPI  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402


def _client():
    from api.v1.pattern import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def _panel(n=160, seed=5):
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2025-01-01", periods=n).strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, 6, n) + rng.normal(0, 0.4, n)
    close = np.maximum(close, 1)
    return pd.DataFrame({
        "date": dates, "open": close * rng.uniform(0.99, 1.01, n),
        "high": close * rng.uniform(1.01, 1.04, n),
        "low": close * rng.uniform(0.96, 0.99, n),
        "close": close, "volume": rng.uniform(1e6, 3e6, n),
    })


def test_watchlist_candidates_equal_watchlist_count(monkeypatch):
    """TC-726-3-1: 选「自选股」→ 候选数 = 自选数, 无需手工输入。"""
    import api.v1.watchlist as wl
    rows = [{"code": "600000.SH", "name": "浦发银行"},
            {"code": "000001.SZ", "name": "平安银行"},
            {"code": "600519.SH", "name": "贵州茅台"}]
    monkeypatch.setattr(wl, "_load_watchlist", lambda _u: list(rows))
    j = _client().get("/api/pattern/candidates?source=watchlist").json()
    assert j["count"] == len(rows) == 3
    assert j["symbols"] == [r["code"] for r in rows]
    assert j["truncated"] is False


def test_market_candidates_capped_topn(monkeypatch):
    import stock_info
    monkeypatch.setattr(stock_info.stock_manager, "stock_map",
                        {"%06d.SH" % (600000 + i): "S%d" % i for i in range(10)})
    j = _client().get("/api/pattern/candidates?source=market&top_n=4").json()
    assert j["count"] == 4 and len(j["symbols"]) == 4
    assert j["requested"] == 10 and j["truncated"] is True


def test_calendar_candidates_only_new(monkeypatch):
    import views_aggregator as va
    monkeypatch.setattr(va.views_aggregator, "get_day_view", lambda _d: {
        "data_inherited": False,
        "stocks": [{"code": "600001.SH"}, {"code": "600002.SH"}],
    })
    monkeypatch.setattr(va.views_aggregator, "calculate_status",
                        lambda code, _d, _v: "new" if code == "600001.SH" else "current")
    j = _client().get("/api/pattern/candidates?source=calendar&date=2026-11-28").json()
    assert j["symbols"] == ["600001.SH"], j
    assert j["count"] == 1


def test_match_result_reports_evaluated_progress():
    """异步任务/同步结果都带「已评估 x / 请求 y」, 超时可解释部分失败。"""
    from pattern_match import PatternFeatureExtractor
    f = PatternFeatureExtractor().extract(_panel())
    payload = {
        "cases": [{"case_id": "c", "name": "样本", "features": f}],
        "candidates": [{"symbol": "600000.SH", "bars": _panel().to_dict("records")}],
        "min_similarity": 0,
    }
    j = _client().post("/api/pattern/match", json=payload).json()
    assert j["evaluated_count"] == 1 and j["requested_count"] == 1
    assert j["count"] == 1


def test_frontend_wires_pool_async_and_actions():
    src = open(os.path.join(ROOT, "frontend", "js", "components", "pattern-lab.js"),
               encoding="utf-8").read()
    assert "poolSource" in src and "loadPool" in src, "候选池来源选择 + 一键填充"
    assert "/api/pattern/candidates" in src, "应调用候选池解析端点"
    assert "/api/pattern/match/async" in src, "大候选池走异步任务"
    assert "matchProgress" in src and "/api/jobs/" in src, "异步进度可见"
    assert "/api/watchlist" in src, "高分结果可一键加自选"
    assert "/api/portfolio/positions/batch" in src, "高分结果可一键加组合"
    assert "已评估" in src, "部分失败/超时需显示已评估 x/y"
