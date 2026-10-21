# -*- coding: utf-8 -*-
"""6.1.2 (B5): 数据表新鲜度 — 纯函数计算 + API"""
from datetime import datetime, timedelta

from freshness import build_freshness, TABLES, DEFAULT_EXPECTED_HOURS
from api.v1.freshness import router
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
    # 6.4.0 (fix): 主源名与 data_sources 真实命名一致 (下划线 sxsc_tushare,
    # 原 TABLES 误用连字符 sxsc-tushare 致查表 miss 恒报过期)
    metrics = [_health_metric("sxsc_tushare", recent.isoformat())]
    items = build_freshness(metrics, now=now)
    zt = next(i for i in items if i["key"] == "zt_pool")
    assert zt["stale"] is False
    assert zt["source"] == "sxsc_tushare"
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


def test_tables_source_names_match_real_sources():
    """6.4.0 (fix) 回归守护: TABLES 的 primary_source 必须与 data_sources 真实命名一致。

    原 TABLES 误用连字符 sxsc-tushare, 而 data_sources 全链路 (SOURCE_ORDER/
    record_call/health slot) 用下划线 sxsc_tushare → build_freshness 查表 miss,
    6 项 sxsc 资产恒报过期 (数据实际新鲜)。此用例守护命名一致, 防止未来同步回归。
    """
    from data_sources._constants import SOURCE_ORDER
    real_names = set(SOURCE_ORDER)
    for t in TABLES:
        assert t["primary_source"] in real_names, (
            f"TABLES 主源 {t['primary_source']!r} 不在 data_sources.SOURCE_ORDER "
            f"({sorted(real_names)}) 中 — 命名不一致会致该资产恒报过期"
        )
