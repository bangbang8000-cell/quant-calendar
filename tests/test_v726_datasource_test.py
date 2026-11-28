#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.26 FR-15: 数据源一键全测 + 按优先级返回首个可用源

TC-726-5-1: 单源测试失败可展开原因; 一键全测按优先级给出 first_healthy,
前端据此展示降级顺序 (首个可用源即当前实际调用的源)。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
sys.path.insert(0, os.path.join(ROOT, "backend"))

from fastapi import FastAPI  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402


def _client():
    # v7.26: test-all 端点落在 market_extras (与 market 共用 /market 前缀, 拆分仅为守住 700 行)
    from api.v1.market_extras import router
    from auth import get_admin_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_admin_user] = lambda: {"username": "admin", "role": "admin"}
    return TestClient(app)


def test_test_all_orders_by_priority_and_reports_first_healthy(monkeypatch):
    from data_sources import data_source_manager
    monkeypatch.setattr(data_source_manager, "_get_source_config",
                        lambda src: {"enabled": src != "fuyao"})
    canned = {
        "sxsc_tushare": {"success": False, "message": "token 过期"},
        "tushare": {"success": True, "message": "ok", "latency_ms": 120},
        "akshare": {"success": True, "message": "ok"},
        "fuyao": {"success": True, "message": "ok"},
    }
    monkeypatch.setattr(data_source_manager, "test_connection", lambda src: canned[src])
    j = _client().post("/api/market/datasource/test-all").json()
    assert j["success"] is True
    assert [r["source"] for r in j["results"]] == ["sxsc_tushare", "tushare", "akshare", "fuyao"]
    assert j["results"][0]["connected"] is False
    assert j["results"][0]["message"] == "token 过期"
    assert j["results"][1]["connected"] is True
    assert j["first_healthy"] == "tushare", "首个可用源必须按优先级产生"


def test_test_all_survives_exception_and_skips_disabled(monkeypatch):
    from data_sources import data_source_manager
    monkeypatch.setattr(data_source_manager, "_get_source_config",
                        lambda src: {"enabled": src != "akshare"})

    def boom(src):
        if src == "tushare":
            raise RuntimeError("网络中断")
        return {"success": True, "message": "ok"}

    monkeypatch.setattr(data_source_manager, "test_connection", boom)
    j = _client().post("/api/market/datasource/test-all").json()
    by = {r["source"]: r for r in j["results"]}
    assert by["tushare"]["connected"] is False
    assert "网络中断" in by["tushare"]["message"], "异常原因必须可见 (前端可展开)"
    assert by["akshare"]["skipped"] is True, "禁用的源标记 skipped, 不计为失败"
    assert j["first_healthy"] == "sxsc_tushare"
