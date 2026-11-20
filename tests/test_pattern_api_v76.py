#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.6 形态匹配 API 与案例库测试 (FR-7.6-3/4/5)"""
import os, sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from pattern_match import PatternFeatureExtractor


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


def _features():
    return PatternFeatureExtractor().extract(_panel())


def _client():
    from api.v1.pattern import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def test_pattern_config_endpoint():
    r = _client().get("/api/pattern/config")
    assert r.status_code == 200
    j = r.json()
    assert abs(sum(j["weights"].values()) - 1.0) < 1e-9
    assert len(j["dimensions"]) == 4
    assert "不产持仓矩阵" in j["output_contract"]


def test_match_inline_cases_ranking():
    """FR-7.6-2/4: 逐股四维匹配 → 排行榜; 自匹配=100, 不产矩阵"""
    f = _features()
    payload = {
        "cases": [{"case_id": "c_test", "name": "样本形态", "features": f}],
        "candidates": [{"symbol": "600000.SH", "bars": _panel().to_dict("records")}],
        "min_similarity": 0,
    }
    r = _client().post("/api/pattern/match", json=payload)
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["count"] == 1
    assert j["items"][0]["total_score"] == 100.0
    assert j["items"][0]["symbol"] == "600000.SH"
    assert j["holdings_matrix"] is None
    assert j["calendar_opt_in"] is False


def test_match_requires_candidates():
    r = _client().post("/api/pattern/match", json={"cases": []})
    assert r.status_code == 400


def test_match_materialize_is_opt_in():
    """FR-7.6-2: 默认不物化; 显式 materialize 才给等权建议"""
    f = _features()
    base = {"cases": [{"case_id": "c", "features": f}],
            "candidates": [{"symbol": "600000.SH", "bars": _panel().to_dict("records")}],
            "min_similarity": 0}
    j1 = _client().post("/api/pattern/match", json=base).json()
    assert "materialized_suggestion" not in j1
    j2 = _client().post("/api/pattern/match", json=dict(base, materialize=True)).json()
    assert j2["materialized_suggestion"]["600000.SH"] == 1.0


def test_case_store_roundtrip():
    """FR-7.6-3: pattern_cases 真实 CRUD (唯一 id, 用完清理)"""
    from pattern_match.store import delete_case, get_case, save_case
    cid = "case_api_v76_tmp"
    try:
        assert save_case({"case_id": cid, "name": "临时案例",
                          "features": _features(), "tags": ["test"]}) == cid
        row = get_case(cid)
        assert row["name"] == "临时案例"
        assert row["features"]["trend_structure"]
    finally:
        assert delete_case(cid) is True
    assert get_case(cid) is None


def test_delete_case_api_missing():
    r = _client().delete("/api/pattern/cases/no_such_case")
    assert r.status_code == 404


def test_research_type_pattern_match():
    from research_store import VALID_TYPES
    assert "pattern_match" in VALID_TYPES
