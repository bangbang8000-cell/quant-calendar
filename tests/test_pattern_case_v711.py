#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.11 形态案例「按行情提取特征入库」端点测试 (FR-7.11-2 的前置补口)

背景: 原 POST /api/pattern/cases 只存调用方送来的 features。前端新建案例若不带特征,
就会写入空特征案例 —— 列表可见、匹配时被静默跳过(422 无可用案例特征)。
新增 POST /cases/from-symbol 把提特征放到后端, 本文件守住三件事:
  1. 真实链路能提特征并入库(案例 features 非空, 可直接参与匹配)
  2. 提不到特征必须 422, 不允许落空壳案例
  3. 参数校验(缺 symbol / lookback 非法)给 400 而非 500
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient


def _client():
    from api.v1.pattern import router
    from auth import get_non_guest_user

    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def test_from_symbol_saves_real_features():
    """提特征成功 → 200; 案例带四维特征, 可被 /match 使用"""
    r = _client().post("/api/pattern/cases/from-symbol", json={
        "name": "v711 提特征案例",
        "symbol": "600000.SH",
        "lookback_days": 25,
        "tags": ["v711", "test"],
    })
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["success"] is True
    assert j["case_id"]
    assert j["bar_count"] >= 40
    feats = j["features"]
    assert set(feats) == {"trend_structure", "kdj_state", "volume_pattern", "price_shape"}
    assert any(feats.values()), "四维全空不应入库"

    # 入库后能在列表里查到, 且 features 非空(不是空壳)
    listed = _client().get("/api/pattern/cases?limit=200").json()
    row = [x for x in listed["items"] if x["case_id"] == j["case_id"]]
    assert row, "案例未出现在列表"
    assert row[0]["features"], "案例 features 为空 → 匹配时会被静默跳过"
    assert row[0]["name"] == "v711 提特征案例"


def test_from_symbol_rejects_missing_symbol():
    r = _client().post("/api/pattern/cases/from-symbol", json={"name": "x"})
    assert r.status_code == 400
    assert "symbol" in r.json()["detail"]


def test_from_symbol_rejects_bad_lookback():
    r = _client().post("/api/pattern/cases/from-symbol",
                       json={"symbol": "600000.SH", "lookback_days": "abc"})
    assert r.status_code == 400
    assert "lookback_days" in r.json()["detail"]


def test_from_symbol_422_when_features_empty(monkeypatch):
    """提不到特征: 如实 422, 不写空壳案例"""
    import pattern_match

    def _empty(self, df, lookback_days=None):
        return {"trend_structure": {}, "kdj_state": {},
                "volume_pattern": {}, "price_shape": {}}

    monkeypatch.setattr(pattern_match.PatternFeatureExtractor, "extract", _empty)
    before = _client().get("/api/pattern/cases?limit=500").json()["count"]

    r = _client().post("/api/pattern/cases/from-symbol",
                       json={"symbol": "000001.SZ", "name": "不该入库"})
    assert r.status_code == 422
    assert "四维特征" in r.json()["detail"]

    after = _client().get("/api/pattern/cases?limit=500").json()["count"]
    assert after == before, "422 之后不应留下任何案例记录"
