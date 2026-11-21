#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""股票级受控入库测试 (v7.12 / PRD §6.5.2)

覆盖: 代码归一化 / 幂等写入 / 单票摘除 / 读侧合并(holdings 与 view 两条路径) / API 鉴权。
"""
import json
import os
import sys

ROOT = os.path.join(os.path.dirname(__file__), '..')
sys.path.insert(0, os.path.join(ROOT, 'backend'))

import pytest  # noqa: E402

import custom_selection as cs  # noqa: E402


@pytest.fixture(autouse=True)
def _clean_table():
    """每个用例前清空 custom_selections, 避免互相污染"""
    cs._ensure_table()
    import db
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("DELETE FROM custom_selections")
            conn.commit()
        finally:
            conn.close()
    yield


# ---------- 代码归一化 ----------

@pytest.mark.parametrize("raw,expect", [
    ("600000", "600000.SH"),
    ("600000.sh", "600000.SH"),
    ("000001", "000001.SZ"),
    ("300750", "300750.SZ"),
    ("430047", "430047.BJ"),
    (" 601318.SH ", "601318.SH"),
])
def test_normalize_symbol(raw, expect):
    assert cs.normalize_symbol(raw) == expect


@pytest.mark.parametrize("raw", ["", "60000", "6000000", "ABC123", "600000.HK", None])
def test_normalize_symbol_rejects_illegal(raw):
    with pytest.raises(cs.CustomSelectionError):
        cs.normalize_symbol(raw)


def test_normalize_date_rejects_bad_format():
    with pytest.raises(cs.CustomSelectionError):
        cs.upsert_selection(user="u", date="2026-13-01", symbols=["600000"])


# ---------- 写入 / 幂等 ----------

def test_upsert_is_idempotent_and_dedupes():
    a = cs.upsert_selection(user="alice", date="2026-11-20",
                            symbols=["600000", "600000.SH", "000001"], note="首次")
    assert a["symbols"] == ["600000.SH", "000001.SZ"]
    b = cs.upsert_selection(user="alice", date="2026-11-20",
                            symbols=["600519"], note="覆盖")
    assert b["symbols"] == ["600519.SH"] and b["note"] == "覆盖"
    rows = cs.list_selections(date="2026-11-20")
    assert len(rows) == 1, "同一 用户+日期+策略 只应保留一行"
    assert rows[0]["symbols"] == ["600519.SH"]


def test_upsert_rejects_empty_and_reserved_group():
    with pytest.raises(cs.CustomSelectionError):
        cs.upsert_selection(user="u", date="2026-11-20", symbols=[])
    with pytest.raises(cs.CustomSelectionError):
        cs.upsert_selection(user="u", date="2026-11-20", symbols=["600000"],
                            strategy_id=cs.MANUAL_GROUP_ID)


def test_different_users_are_isolated():
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000"])
    cs.upsert_selection(user="bob", date="2026-11-20", symbols=["600519"])
    assert len(cs.list_selections(date="2026-11-20")) == 2
    assert len(cs.list_selections(date="2026-11-20", user="alice")) == 1


# ---------- 删除 ----------

def test_delete_single_symbol_keeps_row():
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000", "600519"])
    out = cs.delete_selection(user="alice", date="2026-11-20", symbol="600000")
    assert out["deleted"] == 1
    rows = cs.list_selections(date="2026-11-20")
    assert len(rows) == 1 and rows[0]["symbols"] == ["600519.SH"]


def test_delete_last_symbol_removes_row():
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000"])
    cs.delete_selection(user="alice", date="2026-11-20", symbol="600000")
    assert cs.list_selections(date="2026-11-20") == []


def test_delete_missing_raises():
    with pytest.raises(cs.CustomSelectionError):
        cs.delete_selection(user="alice", date="2026-11-20", symbol="600000")


# ---------- 读侧合并 ----------

def test_merge_into_holdings_adds_manual_group():
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000", "000001"])
    merged = cs.merge_into_holdings({"multi_factor": {"name": "多因子", "stocks": [], "count": 0}},
                                    "2026-11-20")
    assert "multi_factor" in merged, "策略分组不得被覆盖"
    grp = merged[cs.MANUAL_GROUP_ID]
    assert grp["manual"] is True and grp["count"] == 2
    assert {s["code"] for s in grp["stocks"]} == {"600000.SH", "000001.SZ"}


def test_merge_into_holdings_noop_when_empty():
    base = {"a": {"name": "A", "stocks": [], "count": 0}}
    assert cs.merge_into_holdings(base, "2026-11-20") == base


def test_merge_into_view_marks_existing_and_appends_new():
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000", "600519"])
    view = {"stocks": [{"code": "600000.SH", "name": "浦发银行", "strategy_count": 1,
                        "strategies": ["多因子"], "status": "current"}]}
    out = cs.merge_into_view(view, "2026-11-20")
    assert out["manual_count"] == 2
    codes = [s["code"] for s in out["stocks"]]
    assert codes.count("600000.SH") == 1, "已在持仓中的票不得重复成两行"
    existed = next(s for s in out["stocks"] if s["code"] == "600000.SH")
    assert existed["manual"] is True
    assert cs.MANUAL_GROUP_NAME in existed["strategies"]
    added = next(s for s in out["stocks"] if s["code"] == "600519.SH")
    assert added["manual"] is True and added["first_appear"] == "2026-11-20"


def test_merge_into_view_noop_when_empty():
    view = {"stocks": [{"code": "600000.SH"}]}
    out = cs.merge_into_view(view, "2026-11-20")
    assert out.get("manual_count") is None and len(out["stocks"]) == 1


def test_merge_into_view_survives_broken_json(monkeypatch):
    """脏数据(symbols_json 非数组)不得让整个视图 500"""
    cs.upsert_selection(user="alice", date="2026-11-20", symbols=["600000"])
    import db
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("UPDATE custom_selections SET symbols_json = ?", (json.dumps({"x": 1}),))
            conn.commit()
        finally:
            conn.close()
    rows = cs.list_selections(date="2026-11-20")
    assert rows[0]["symbols"] == []      # 非法结构降级为空列表, 不抛错
    out = cs.merge_into_view({"stocks": []}, "2026-11-20")
    assert out["stocks"] == []


# ---------- API 鉴权 ----------

def test_api_requires_login():
    from fastapi import FastAPI
    from fastapi.testclient import TestClient
    from api.v1.calendar import router

    app = FastAPI()
    app.include_router(router, prefix="/api")
    client = TestClient(app)
    assert client.get("/api/calendar/custom-selection?date=2026-11-20").status_code in (401, 403)
    assert client.post("/api/calendar/custom-selection",
                       json={"date": "2026-11-20", "symbols": ["600000"]}).status_code in (401, 403)
    assert client.delete("/api/calendar/custom-selection?date=2026-11-20").status_code in (401, 403)


def test_custom_selection_route_not_shadowed_by_date_route():
    """/calendar/custom-selection 必须命中专用路由, 不能被 /{date} 吃掉"""
    from api.v1.calendar import router

    ordered = [r.path for r in router.routes if getattr(r, "path", "").startswith("/calendar")]
    assert "/calendar/custom-selection" in ordered
    # 专用路由必须声明在 /{date} 之前, 否则 "custom-selection" 会被当作 date
    assert ordered.index("/calendar/custom-selection") < ordered.index("/calendar/{date}")
