# -*- coding: utf-8 -*-
"""v7.25 FR-7: 持仓组网 — 差集、只增不删、保留成本价、自动同步开关"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

import db  # noqa: E402
import paths  # noqa: E402
import portfolio_plan  # noqa: E402
from api.v1 import portfolio as portfolio_api  # noqa: E402


@pytest.fixture
def pstore(tmp_path, monkeypatch):
    monkeypatch.setattr(db, "DATA_DIR", str(tmp_path))
    monkeypatch.setattr(db, "DB_FILE", str(tmp_path / "app.db"))
    monkeypatch.setattr(paths, "DATA_DIR", str(tmp_path))
    db.init_db()
    return tmp_path


WATCH = [
    {"stock_code": "600519.SH", "name": "茅台"},
    {"stock_code": "000001.SZ", "name": "平安"},
]
POSITIONS = [
    {"stock_code": "600519.SH", "stock_name": "茅台", "quantity": 100, "cost_price": 1500.0},
    {"stock_code": "300750.SZ", "stock_name": "宁德", "quantity": 300, "cost_price": 200.0},
]


# ─── 差集与合并 ────────────────────────────────────────────

def test_network_diff_to_add_and_only_in_portfolio():
    diff = portfolio_plan.network_diff(WATCH, POSITIONS)
    assert [x["stock_code"] for x in diff["to_add"]] == ["000001.SZ"]
    assert [x["stock_code"] for x in diff["only_in_portfolio"]] == ["300750.SZ"]
    assert diff["watchlist_count"] == 2
    assert diff["position_count"] == 2


def test_merge_targets_only_adds():
    merged = portfolio_plan.merge_targets(WATCH, POSITIONS)
    codes = [m["stock_code"] for m in merged]
    assert codes == ["600519.SH", "300750.SZ", "000001.SZ"], "持仓优先且自选只增不删"


# ─── 落网：保留成本价 + 不删除 ─────────────────────────────

def test_apply_network_plan_keeps_cost_and_never_deletes(pstore):
    db.portfolio_upsert_position("u", "600519.SH", "茅台", cost_price=1500, quantity=100)
    db.portfolio_upsert_position("u", "300750.SZ", "宁德", cost_price=200, quantity=300)

    plan = {"items": [
        {"stock_code": "600519.SH", "stock_name": "茅台", "price": 1600, "quantity": 200},
        {"stock_code": "000001.SZ", "stock_name": "平安", "price": 12, "quantity": 1000},
    ]}
    result = portfolio_plan.apply_network_plan("u", plan)
    positions = {p["stock_code"]: p for p in db.portfolio_get_positions("u")}

    assert positions["600519.SH"]["quantity"] == 200
    assert positions["600519.SH"]["cost_price"] == 1500, "已有持仓必须保留原成本价"
    assert positions["000001.SZ"]["quantity"] == 1000
    assert positions["000001.SZ"]["cost_price"] == 12, "新仓以现价作为成本"
    assert "300750.SZ" in positions, "计划外持仓不得被删除"
    assert result["added"] == 1 and result["updated"] == 1


# ─── 组网计划：等权 + 标注 + 幂等 ──────────────────────────

def test_network_plan_builds_union_and_marks_new(pstore, monkeypatch):
    db.portfolio_upsert_position("u", "600519.SH", "茅台", cost_price=1500, quantity=100)
    monkeypatch.setattr(portfolio_api, "_load_watchlist_items", lambda username: WATCH)

    def fake_fill(items):
        for it in items:
            it["price"] = 10.0
        return items, False

    monkeypatch.setattr(portfolio_api, "_fill_plan_prices", fake_fill)
    plan, diff, degraded = portfolio_api._build_network_plan_of(
        {"username": "u"}, {"total_capital": 100000})

    assert degraded is False
    assert plan["position_count"] == 2, "现有持仓 ∪ 自选 共 2 只（600519 重合）"
    assert [x["stock_code"] for x in diff["to_add"]] == ["000001.SZ"]
    new_row = [r for r in plan["items"] if r["stock_code"] == "000001.SZ"][0]
    old_row = [r for r in plan["items"] if r["stock_code"] == "600519.SH"][0]
    assert new_row["is_new"] is True
    assert old_row["is_new"] is False
    assert old_row["existing_cost_price"] == 1500


def test_plan_fingerprint_idempotent(pstore):
    plan = {"items": [
        {"stock_code": "600519.SH", "quantity": 200},
        {"stock_code": "000001.SZ", "quantity": 1000},
    ]}
    fp = portfolio_plan.plan_fingerprint(plan)
    pid = portfolio_plan.save_plan("u", plan, status="preview")
    portfolio_plan.mark_applied("u", pid)
    assert portfolio_plan.find_applied_plan("u", fp) == pid


# ─── 自动同步开关 ─────────────────────────────────────────

def test_auto_sync_roundtrip(pstore):
    assert portfolio_plan.get_auto_sync("u") is False
    assert portfolio_plan.set_auto_sync("u", True) is True
    assert portfolio_plan.get_auto_sync("u") is True
    portfolio_plan.set_auto_sync("u", False)
    assert portfolio_plan.get_auto_sync("u") is False
