#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.10 策略/案例市场与向量化回测测试 (FR-7.10-1/2)"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import marketplace
from vector_backtest import parity_check, sweep, vector_backtest

OWNER = "tester_v710"


def _matrices(n=40, m=4, seed=5):
    """0/1 持仓矩阵 + 收益矩阵; 保证每行至少 1 个持仓, 使有效天数可确定(n-1)"""
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2026-01-05", periods=n).strftime("%Y-%m-%d").tolist()
    symbols = [f"60000{i}.SH" for i in range(m)]
    weights = (rng.random((n, m)) > 0.35).astype(float)  # 0/1 持仓矩阵
    empty = weights.sum(axis=1) == 0
    weights[empty, 0] = 1.0
    rets = rng.normal(0.0005, 0.02, (n, m))
    return (pd.DataFrame(weights, index=dates, columns=symbols),
            pd.DataFrame(rets, index=dates, columns=symbols))


# ─── 向量化回测 ──────────────────────────────────────────────

def test_vector_backtest_matches_event_engine():
    """与事件驱动引擎逐日对齐(零成本口径)"""
    h, r = _matrices()
    parity = parity_check(h, r)
    assert parity["aligned"] is True, parity
    assert parity["max_abs_diff"] < 1e-12
    assert parity["event_days"] == parity["vector_days"] == len(h) - 1


def test_vector_backtest_no_lookahead_semantics():
    """t 日收益 × t-1 日权重: 首日无收益(仅 39 天), 且改末日权重不影响当日收益"""
    h, r = _matrices()
    base = vector_backtest(h, r, commission_rate=0, slippage=0)
    h2 = h.copy()
    h2.iloc[-1] = 1.0  # 只改最后一天权重
    changed = vector_backtest(h2, r, commission_rate=0, slippage=0)
    assert base["days"] == changed["days"] == len(h) - 1
    assert base["daily_returns"][:-1] == changed["daily_returns"][:-1]


def test_vector_backtest_rejects_bad_input():
    h, r = _matrices()
    assert vector_backtest(pd.DataFrame(), r)["success"] is False
    assert vector_backtest(h, None)["success"] is False
    empty_w = pd.DataFrame(0.0, index=h.index, columns=h.columns)
    assert vector_backtest(empty_w, r)["success"] is False


def test_vector_cost_reduces_return():
    h, r = _matrices()
    free = vector_backtest(h, r, commission_rate=0, slippage=0)
    costly = vector_backtest(h, r, commission_rate=0.001, slippage=0.002)
    assert sum(costly["net_returns"]) < sum(free["net_returns"])
    assert max(costly["turnover"]) > 0


def test_all_zero_weight_row_is_skipped():
    """某日全零持仓时不产生收益(两条链路都跳过, 天数一致)"""
    h, r = _matrices()
    h2 = h.copy()
    h2.iloc[10] = 0.0
    base = vector_backtest(h, r, commission_rate=0, slippage=0)
    zeroed = vector_backtest(h2, r, commission_rate=0, slippage=0)
    assert zeroed["days"] == base["days"] - 1
    assert parity_check(h2, r)["aligned"] is True


def test_cost_pairing_matches_event_engine():
    """含成本口径: 净收益与事件引擎一致(验证成本与保留收益逐日配对, 不错位)"""
    from cost_model import CostConfig, CostModel
    from strategy_sdk.backtest import backtest_holdings

    h, r = _matrices()
    cost = CostModel(CostConfig(commission_rate=0.001, stamp_duty_rate=0.0005,
                               slippage=0.0005, impact=0.0003))
    ev = backtest_holdings(h, r, cost_model=cost)
    vec = vector_backtest(h, r, cost_rate=cost.turnover_rate())
    assert ev["success"] is True
    assert ev["total_days"] == vec["days"]
    assert abs(ev["equity_curve"][-1] - vec["equity_curve"][-1]) <= 1e-6
    parity = parity_check(h, r, cost_model=cost)
    assert parity["aligned"] is True, parity
    # 简化口径(只给 commission+slippage)必须比事件引擎更乐观, 证明差异来源是费率而非对齐
    cheap = vector_backtest(h, r, commission_rate=0.001, slippage=0.0005)
    assert cheap["equity_curve"][-1] > vec["equity_curve"][-1]


def test_sweep_returns_all_tiers():
    h, rets = _matrices()
    rows = sweep(h, rets)
    assert len(rows) == 4
    assert all("annual_return" in row or "error" in row for row in rows)


# ─── 市场 ────────────────────────────────────────────────────

def test_publish_builtin_strategy_and_list():
    item = marketplace.publish_item("strategy", "multi_factor", OWNER,
                                    title="多因子基线", summary="内置多因子", version="1.0.0")
    assert item["status"] == "published"
    assert item["payload"]["type"] == "multi_factor"
    items = marketplace.list_items(kind="strategy", keyword="多因子")
    assert any(x["id"] == item["id"] for x in items)


def test_publish_unknown_ref_rejected():
    with pytest.raises(marketplace.MarketError):
        marketplace.publish_item("strategy", "no_such_sid", OWNER)
    with pytest.raises(marketplace.MarketError):
        marketplace.publish_item("unknown_kind", "x", OWNER)


def test_publish_is_versioned_and_idempotent():
    a = marketplace.publish_item("strategy", "capital_flow", OWNER, title="资金流 v1",
                                 version="1.0.0")
    b = marketplace.publish_item("strategy", "capital_flow", OWNER, title="资金流 v1 修订",
                                 version="1.0.0")
    c = marketplace.publish_item("strategy", "capital_flow", OWNER, title="资金流 v2",
                                 version="2.0.0")
    assert a["id"] == b["id"] and b["title"] == "资金流 v1 修订"
    assert c["id"] != a["id"]


def test_pattern_case_publish_and_import():
    from pattern_match.store import delete_case, get_case, save_case
    case_id = "case_v710_src"
    save_case({"case_id": case_id, "name": "金三角样本", "symbol": "600000.SH",
               "breakout_date": "2026-10-30", "lookback_days": 25,
               "tags": ["金三角"], "description": "测试样本",
               "features": {"trend": {"ma5": 1.1}}})
    item = marketplace.publish_item("pattern_case", case_id, OWNER, title="金三角样本")
    assert item["payload"]["tags"] == ["金三角"]
    imported = marketplace.import_item(item["id"], OWNER)
    assert imported["new_id"].startswith("case_mk_")
    assert get_case(imported["new_id"]) is not None
    delete_case(imported["new_id"])
    delete_case(case_id)


def test_strategy_import_creates_variant():
    import strategy_db
    item = marketplace.publish_item("strategy", "golden_triangle", OWNER, title="金三角")
    imported = marketplace.import_item(item["id"], OWNER)
    assert imported["new_id"].startswith("mk_")
    d = strategy_db.get_def(imported["new_id"])
    assert d and d["type"] == "golden_triangle"
    conn = strategy_db.get_conn()
    try:
        conn.execute("DELETE FROM strategy_defs WHERE id = ?", (imported["new_id"],))
        conn.commit()
    finally:
        conn.close()


def test_unpublish_blocks_import():
    item = marketplace.publish_item("strategy", "index_enhance", OWNER, title="指数增强")
    assert marketplace.unpublish_item(item["id"], OWNER) is True
    assert marketplace.unpublish_item(item["id"], OWNER) is False
    with pytest.raises(marketplace.MarketError):
        marketplace.import_item(item["id"], OWNER)
    assert all(x["id"] != item["id"] for x in marketplace.list_items())


def test_stats_shape():
    st = marketplace.stats()
    assert set(st["by_kind"]) >= {"strategy"}
    assert st["total"] >= 1
    assert st["downloads"] >= 0


def test_download_count_increments():
    item = marketplace.publish_item("strategy", "sector_rotation", OWNER, title="行业轮动")
    before = marketplace.get_item(item["id"])["downloads"]
    marketplace.import_item(item["id"], OWNER)
    after = marketplace.get_item(item["id"])["downloads"]
    assert after == before + 1


# ─── API ─────────────────────────────────────────────────────

def _client():
    from api.v1.marketplace import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": OWNER}
    return TestClient(app)


def test_api_marketplace_flow():
    client = _client()
    pub = client.post("/api/marketplace/items",
                      json={"kind": "strategy", "ref_id": "multi_factor",
                            "title": "API 发布", "version": "0.9.0"})
    assert pub.status_code == 200, pub.text
    item_id = pub.json()["id"]
    assert client.get("/api/marketplace/items").json()["count"] >= 1
    assert client.get(f"/api/marketplace/items/{item_id}").status_code == 200
    assert client.post(f"/api/marketplace/items/{item_id}/import").status_code == 200
    assert client.get("/api/marketplace/stats").status_code == 200
    assert client.delete(f"/api/marketplace/items/{item_id}").status_code == 200
    assert client.post("/api/marketplace/items",
                       json={"kind": "strategy", "ref_id": "nope"}).status_code == 400
    assert client.get("/api/marketplace/items/not_exist").status_code == 404


def test_api_marketplace_requires_auth():
    from api.v1.marketplace import router
    app = FastAPI()
    app.include_router(router, prefix="/api")
    assert TestClient(app).get("/api/marketplace/items").status_code in (401, 403)


def test_api_vector_backtest_and_parity():
    h, r = _matrices()
    body = {
        "symbols": list(h.columns),
        "holdings": {"dates": list(h.index), "matrix": h.to_numpy().tolist()},
        "returns": {"dates": list(r.index), "matrix": r.to_numpy().tolist()},
        "parity": True, "sweep": True,
    }
    resp = _client().post("/api/marketplace/vector-backtest", json=body)
    assert resp.status_code == 200, resp.text
    j = resp.json()
    assert j["engine"] == "vector"
    assert j["parity"]["aligned"] is True
    assert len(j["sweep"]) == 4


def test_api_vector_backtest_shape_error():
    resp = _client().post("/api/marketplace/vector-backtest",
                          json={"symbols": ["600000.SH"],
                                "holdings": {"dates": ["2026-01-05", "2026-01-06"],
                                             "matrix": [[1.0]]},
                                "returns": {"dates": ["2026-01-05", "2026-01-06"],
                                            "matrix": [[0.01], [0.02]]}})
    assert resp.status_code == 400
