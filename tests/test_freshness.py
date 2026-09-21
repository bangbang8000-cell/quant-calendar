# -*- coding: utf-8 -*-
"""6.1.2 (B5): 数据表新鲜度 — 纯函数计算 + API"""
from datetime import datetime, timedelta

from freshness import build_freshness, TABLES, DEFAULT_EXPECTED_HOURS
from api.v1.glossary import router
from fastapi import FastAPI
from fastapi.testclient import TestClient


def _health_metric(name, last_success):
    return {"name": name, "last_success": last_success}


def test_table_count_at_least_15():
    assert len(TABLES) >= 15


def test_freshness_marks_stale_when_no_success():
    items = build_freshness([])
    assert all(i["stale"] is True for i in items)
    assert all(i["last_success"] is None for i in items)


def test_freshness_marks_fresh_when_recent():
    now = datetime.now()
    recent = now - timedelta(hours=1)
    metrics = [_health_metric("sxsc-tushare", recent.isoformat())]
    items = build_freshness(metrics, now=now)
    zt = next(i for i in items if i["key"] == "zt_pool")
    assert zt["stale"] is False
    assert zt["source"] == "sxsc-tushare"
    assert zt["data_age_hours"] == 1.0


def test_freshness_marks_stale_when_old():
    now = datetime.now()
    old = now - timedelta(hours=72)
    metrics = [_health_metric("tushare", old.isoformat())]
    items = build_freshness(metrics, now=now)
    stock_info = next(i for i in items if i["key"] == "stock_info")
    assert stock_info["stale"] is False  # 72h < 168h 期望 → 未过期
    kline = next(i for i in items if i["key"] == "kline")
    assert kline["stale"] is True  # 72h > 8h 期望 → 过期


def test_rows_override_injection():
    items = build_freshness([], rows_overrides={"zt_pool": lambda: 42})
    zt = next(i for i in items if i["key"] == "zt_pool")
    assert zt["rows"] == 42


def test_rows_fn_exception_returns_none():
    items = build_freshness([], rows_overrides={"lhb": lambda: (_ for _ in ()).throw(RuntimeError("boom"))})
    lhb = next(i for i in items if i["key"] == "lhb")
    assert lhb["rows"] is None


def test_api_freshness_ok():
    app = FastAPI()
    app.include_router(router, prefix="/api")
    r = TestClient(app).get("/api/meta/freshness")
    assert r.status_code == 200
    data = r.json()
    assert data["success"] is True and data["count"] >= 15
    assert data["default_expected_hours"] == DEFAULT_EXPECTED_HOURS
