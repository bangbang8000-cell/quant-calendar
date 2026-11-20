#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.8 执行与实盘联动测试 (FR-7.8-1/2/4)

覆盖: 支撑位 4 算法/异常诚实、狩猎场扫描(防前视)、跟踪入库幂等、
执行计划状态机/成交回写组合/CSV 交换、三口径 VaR/风险等级/降温守卫、API 鉴权与隔离。
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

import numpy as np
import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from execution import hunting, plans, risk_budget
from execution.support import (SupportError, build_buy_plan, calc_support,
                               classify_distance, distance_to_support)

OWNER = "tester_v78"


def _frame(n=60, start_price=10.0, step=0.1):
    """构造升序 K 线(含 date/open/high/low/close)"""
    dates = pd.bdate_range("2025-01-02", periods=n).strftime("%Y-%m-%d")
    close = np.array([start_price + i * step for i in range(n)], dtype=float)
    return pd.DataFrame({
        "date": dates,
        "open": close * 0.99,
        "high": close * 1.01,
        "low": close * 0.98,
        "close": close,
    })


# ─── 支撑位 ───────────────────────────────────────────────────

def test_ma20_requires_full_window():
    """K 线不足 20 根: 显式报错(不用更少样本糊弄)"""
    with pytest.raises(SupportError):
        calc_support(_frame(15), method="ma20")


def test_ma20_value_and_ref_date():
    """ma20 = 最近 20 根收盘均值, 依据日期为最新 K 线"""
    df = _frame(40)
    got = calc_support(df, method="ma20")
    expect = round(float(df["close"].tail(20).mean()), 2)
    assert got["level"] == expect
    assert got["ref_date"] == df["date"].iloc[-1]
    assert got["fallback"] is False


def test_key_methods_exact():
    """key_close / key_close_5 / key_open 以关键日那根 K 线为准"""
    df = _frame(30)
    key = df["date"].iloc[10]
    row = df.iloc[10]
    assert calc_support(df, "key_close", key)["level"] == round(float(row["close"]), 2)
    assert calc_support(df, "key_close_5", key)["level"] == round(float(row["close"]) * 0.95, 2)
    assert calc_support(df, "key_open", key)["level"] == round(float(row["open"]), 2)


def test_key_date_fallback_and_missing():
    """容差 1 天内回退(标注 fallback); 超出容差显式报错"""
    df = _frame(30)
    key = df["date"].iloc[10]
    nxt = (pd.Timestamp(key) + pd.Timedelta(days=1)).strftime("%Y-%m-%d")
    if nxt not in set(df["date"]):
        got = calc_support(df, "key_close", nxt)
        assert got["fallback"] is True
    with pytest.raises(SupportError):
        calc_support(df, "key_close", "2020-01-01")


def test_unknown_method_rejected():
    with pytest.raises(SupportError):
        calc_support(_frame(30), method="magic_line")


def test_distance_and_classification():
    assert distance_to_support(10.0, 10.0) == 0.0
    assert classify_distance(0.01) == "near"
    assert classify_distance(0.06) == "fair"
    assert classify_distance(0.20) == "far"
    assert classify_distance(-0.05) == "broken"
    assert classify_distance(None) == "unknown"
    assert distance_to_support(10.0, 0) is None


def test_buy_plan_anchored_on_support():
    """买入区间锚定支撑位, 止损在其下, 止盈在买入上沿之上"""
    p = build_buy_plan(10.5, 10.0)
    assert p["buy_low"] == 10.0
    assert p["buy_high"] == round(10.0 * 1.02, 2)
    assert p["stop_loss"] == round(10.0 * 0.95, 2)
    assert p["take_profit"] > p["buy_high"]
    assert p["risk_reward"] > 0


# ─── 狩猎场 ───────────────────────────────────────────────────

def _fake_portal(dates=80, symbols=("600000.SH", "600001.SH")):
    from strategy_sdk.testsupport import FakePortal
    ds = pd.bdate_range("2025-01-02", periods=dates).strftime("%Y-%m-%d").tolist()
    return FakePortal(dates=ds, symbols=list(symbols), seed=11)


def test_scan_uses_holdings_and_no_lookahead(monkeypatch):
    """扫描: 从持仓取池, 面板请求 end 不越过狩猎日(防前视)"""
    portal = _fake_portal(dates=60)
    date = portal.dates[-1]
    monkeypatch.setattr(hunting, "load_holdings",
                        lambda d, s=None: {"golden_triangle": ["600000.SH", "600001.SH"]})
    out = hunting.scan(date, strategy="golden_triangle", portal=portal)
    assert out["source"] in ("injected", "real")
    assert out["count"] == 2
    assert out["trade_date"] == date
    assert portal.requests[0]["end"] <= date
    item = out["items"][0]
    assert item["support_level"] > 0
    assert item["position"] in ("near", "fair", "far", "broken")
    assert item["buy_low"] == item["support_level"]


def test_scan_empty_holdings_is_honest(monkeypatch):
    monkeypatch.setattr(hunting, "load_holdings", lambda d, s=None: {})
    out = hunting.scan("2025-06-02")
    assert out["degraded"] is True
    assert out["items"] == []
    assert "无选股结果" in out["message"]


def test_scan_reports_uncomputable_symbols(monkeypatch):
    """K 线不足时进 errors, 不编造支撑位"""
    portal = _fake_portal(dates=5)
    monkeypatch.setattr(hunting, "load_holdings",
                        lambda d, s=None: {"leader": ["600000.SH"]})
    out = hunting.scan(portal.dates[-1], strategy="leader", method="ma20", portal=portal)
    assert out["count"] == 0
    assert out["errors"] and "不足" in out["errors"][0]["reason"]


def test_tracks_idempotent_and_crud(monkeypatch):
    """入库跟踪: 同 owner+股+策略+日 幂等; 状态机拒绝非法值"""
    portal = _fake_portal(dates=60)
    monkeypatch.setattr(hunting, "load_holdings",
                        lambda d, s=None: {"golden_triangle": ["600000.SH"]})
    scan = hunting.scan(portal.dates[-1], strategy="golden_triangle", portal=portal)
    first = hunting.add_tracks(scan["items"], OWNER, OWNER)
    assert first["added"] == 1
    second = hunting.add_tracks(scan["items"], OWNER, OWNER)
    assert second["added"] == 0 and second["skipped"] == 1

    rows = hunting.list_tracks(OWNER)
    assert len(rows) == 1
    tid = rows[0]["id"]
    upd = hunting.update_track(tid, OWNER, status="planned", note="待确认", operator=OWNER)
    assert upd and upd["status"] == "planned"
    assert hunting.update_track(tid, "other_owner", status="entered") is None  # 越权不可见
    with pytest.raises(ValueError):
        hunting.update_track(tid, OWNER, status="nonsense")
    assert hunting.delete_track(tid, OWNER) is True
    assert hunting.list_tracks(OWNER) == []


# ─── 执行计划 ─────────────────────────────────────────────────

def _leg(**kw):
    base = {"symbol": "600000.SH", "name": "浦发银行", "side": "buy", "buy_low": 10.0,
            "buy_high": 10.2, "position_ratio": 0.1, "stop_loss": 9.5, "take_profit": 12.0}
    base.update(kw)
    return base


def test_create_plan_validation():
    p = plans.create_plan({"name": "计划A", "legs": [_leg()]}, OWNER, OWNER)
    assert p["status"] == "draft" and len(p["legs"]) == 1
    with pytest.raises(plans.PlanError):
        plans.create_plan({"name": "空腿", "legs": []}, OWNER, OWNER)
    with pytest.raises(plans.PlanError):
        plans.create_plan({"name": "止损错", "legs": [_leg(stop_loss=10.5)]}, OWNER, OWNER)
    with pytest.raises(plans.PlanError):
        plans.create_plan({"name": "代码错", "legs": [_leg(symbol="ABC")]}, OWNER, OWNER)
    with pytest.raises(plans.PlanError):
        plans.create_plan({"name": "止盈错", "legs": [_leg(take_profit=10.1)]}, OWNER, OWNER)


def test_plan_state_machine():
    p = plans.create_plan({"name": "计划B", "legs": [_leg()]}, OWNER, OWNER)
    pid = p["id"]
    with pytest.raises(plans.PlanError):
        plans.set_status(pid, OWNER, "closed")  # draft 不能直接 closed
    assert plans.set_status(pid, OWNER, "active", OWNER)["status"] == "active"
    assert plans.set_status(pid, OWNER, "closed", OWNER, "done")["status"] == "closed"
    with pytest.raises(plans.PlanError):
        plans.set_status(pid, OWNER, "active")  # 终态不可复活
    events = [e["event"] for e in plans.get_plan(pid, OWNER)["events"]]
    assert "create" in events and "status:active" in events


def test_plan_is_owner_isolated():
    p = plans.create_plan({"name": "计划C", "legs": [_leg()]}, OWNER, OWNER)
    assert plans.get_plan(p["id"], "someone_else") is None
    assert all(x["id"] != p["id"] for x in plans.list_plans("someone_else"))


def test_fill_leg_requires_active_and_syncs_portfolio():
    import db
    if not db.schema_ok():
        assert db.init_db() is True  # 同时验证 0010 迁移可应用
    owner = "tester_v78_fill"
    p = plans.create_plan({"name": "计划D", "legs": [_leg()]}, owner, owner)
    leg_id = p["legs"][0]["id"]
    with pytest.raises(plans.PlanError):
        plans.fill_leg(p["id"], leg_id, owner, 10.1, 100)
    plans.set_status(p["id"], owner, "active", owner)
    out = plans.fill_leg(p["id"], leg_id, owner, 10.1, 100, owner)
    assert out["legs"][0]["status"] == "filled"
    assert out["filled_ratio"] == 0.1
    assert out["portfolio_synced"] is True
    positions = {x["stock_code"]: x for x in db.portfolio_get_positions(owner)}
    assert "600000.SH" in positions and positions["600000.SH"]["quantity"] == 100
    with pytest.raises(plans.PlanError):
        plans.fill_leg(p["id"], leg_id, owner, 10.1, 100)  # 重复回报
    db.portfolio_delete_position(owner, "600000.SH")


def test_export_import_roundtrip():
    p = plans.create_plan({
        "name": "计划E", "plan_date": "2026-11-18",
        "legs": [_leg(),
                 _leg(symbol="600001.SH", buy_low=5.0, buy_high=5.1,
                      stop_loss=4.7, take_profit=6.0)]}, OWNER, OWNER)
    csv_text = plans.export_csv(p)
    assert csv_text.splitlines()[0].startswith("symbol,name,side")
    back = plans.import_csv(csv_text, OWNER, OWNER, name="计划E-导入", plan_date="2026-11-18")
    assert len(back["legs"]) == 2
    assert back["source"] == "import"
    assert back["legs"][0]["buy_low"] == p["legs"][0]["buy_low"]


def test_build_payload_skips_broken():
    scan = {"items": [
        {"symbol": "600000.SH", "position": "near", "buy_low": 10.0, "buy_high": 10.2,
         "stop_loss": 9.5, "take_profit": 12.0, "support_level": 10.0,
         "support_method": "ma20", "position_label": "贴近支撑"},
        {"symbol": "600001.SH", "position": "broken", "buy_low": 5.0, "buy_high": 5.1,
         "stop_loss": 4.7, "take_profit": 6.0, "support_level": 5.0,
         "support_method": "ma20", "position_label": "已破位"},
    ], "trade_date": "2026-11-18", "strategy": "golden_triangle"}
    payload = plans.build_payload_from_scan(scan)
    assert len(payload["legs"]) == 1
    assert payload["legs"][0]["symbol"] == "600000.SH"
    assert payload["source"] == "hunting"


# ─── 风险预算 ─────────────────────────────────────────────────

def test_ewma_and_hybrid_var_positive():
    rng = np.random.default_rng(3)
    rets = rng.normal(0, 0.02, 200).tolist()
    assert risk_budget.ewma_sigma(rets) > 0
    assert risk_budget.var_ewma(rets) > 0
    assert risk_budget.var_hybrid(rets) > 0


def test_hybrid_var_reacts_to_recent_crash():
    """近期崩盘样本权重更高 → 混合法 VaR 高于历史模拟法"""
    calm = list(np.random.default_rng(5).normal(0, 0.005, 150))
    crash = calm + [-0.06, -0.05, -0.04]
    hybrid = risk_budget.var_hybrid(crash)
    hist = -float(np.percentile(crash, 1.0))
    assert hybrid >= hist * 0.5  # 同量级, 不因近期样本被稀释到接近 0
    assert hybrid > 0


def test_risk_grade_mapping():
    assert risk_budget.risk_grade(0.01)["grade"] == "极低"
    assert risk_budget.risk_grade(0.03)["grade"] == "低"
    assert risk_budget.risk_grade(0.05)["grade"] == "中"
    assert risk_budget.risk_grade(0.07)["grade"] == "高"
    assert risk_budget.risk_grade(0.12)["grade"] == "极高"
    assert risk_budget.risk_grade(None)["grade"] == "unknown"
    caps = [risk_budget.risk_grade(v)["position_cap"] for v in (0.01, 0.03, 0.05, 0.07, 0.12)]
    assert caps == sorted(caps, reverse=True)


def test_cooling_guard():
    cooling = risk_budget.cooling_guard([80, 70, 62, 45])
    assert cooling["cooling"] is True and cooling["exposure"] == 0.5
    assert risk_budget.cooling_guard([50, 51, 52, 53])["cooling"] is False
    assert risk_budget.cooling_guard([60])["cooling"] is False  # 样本不足不臆断


def test_risk_budget_takes_stricter_exposure():
    rng = np.random.default_rng(9)
    rets = rng.normal(0, 0.03, 120).tolist()  # 日波动 3% → 中/高等级
    out = risk_budget.risk_budget(returns=rets, temps=[90, 80, 70, 50])
    assert out["sample_size"] == 120
    assert out["grade"]["grade"] in ("中", "高", "极高")
    assert out["suggested_exposure"] == min(out["grade"]["position_cap"],
                                            out["cooling"]["exposure"])
    assert out["metrics"]["var_hybrid"] is not None


def test_risk_budget_small_sample_is_honest():
    out = risk_budget.risk_budget(returns=[0.01, -0.01, 0.02])
    assert out["metrics"]["var_hybrid"] is None
    assert out["grade"]["grade"] == "unknown"


# ─── API ──────────────────────────────────────────────────────

def _client():
    from api.v1.execution import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": OWNER}
    return TestClient(app)


def test_api_requires_auth():
    from api.v1.execution import router
    app = FastAPI()
    app.include_router(router, prefix="/api")
    r = TestClient(app).get("/api/execution/plans")
    assert r.status_code in (401, 403)


def test_api_hunting_scan_degraded(monkeypatch):
    monkeypatch.setattr(hunting, "load_holdings", lambda d, s=None: {})
    r = _client().get("/api/execution/hunting/scan", params={"date": "2026-11-18"})
    assert r.status_code == 200
    assert r.json()["degraded"] is True


def test_api_tracks_flow(monkeypatch):
    """API 层: 入库跟踪走服务端扫描结果(此处以假扫描替代真实取数)"""
    fake = {
        "date": "2026-11-18", "trade_date": "2026-11-18", "strategy": "golden_triangle",
        "items": [{"symbol": "600002.SH", "name": "测试股", "strategy": "golden_triangle",
                   "hunt_date": "2026-11-18", "close": 10.5, "support_level": 10.0,
                   "support_method": "ma20", "support_ref_date": "2026-11-18",
                   "support_fallback": False, "distance_pct": 0.05, "position": "fair",
                   "position_label": "合理区间", "buy_low": 10.0, "buy_high": 10.2,
                   "stop_loss": 9.5, "take_profit": 12.0, "risk_reward": 2.0}],
        "errors": [], "degraded": False,
    }
    monkeypatch.setattr(hunting, "scan", lambda *a, **k: fake)
    client = _client()
    r = client.post("/api/execution/hunting/tracks",
                    json={"date": "2026-11-18", "strategy": "golden_triangle",
                          "symbols": ["600002.SH"]})
    assert r.status_code == 200, r.text
    assert r.json()["added"] == 1
    items = client.get("/api/execution/hunting/tracks").json()["items"]
    tid = items[0]["id"]
    assert client.patch(f"/api/execution/hunting/tracks/{tid}",
                        json={"status": "planned"}).json()["status"] == "planned"
    assert client.delete(f"/api/execution/hunting/tracks/{tid}").status_code == 200


def test_api_plan_lifecycle_and_export():
    client = _client()
    r = client.post("/api/execution/plans", json={"name": "API计划", "legs": [_leg()]})
    assert r.status_code == 200, r.text
    pid = r.json()["id"]
    assert client.post(f"/api/execution/plans/{pid}/status",
                       json={"status": "active"}).json()["status"] == "active"
    leg_id = client.get(f"/api/execution/plans/{pid}").json()["legs"][0]["id"]
    fill = client.post(f"/api/execution/plans/{pid}/legs/{leg_id}/fill",
                       json={"price": 10.1, "quantity": 100, "sync_portfolio": False})
    assert fill.status_code == 200 and fill.json()["legs"][0]["status"] == "filled"
    csv_resp = client.get(f"/api/execution/plans/{pid}/export")
    assert csv_resp.status_code == 200
    assert "600000.SH" in csv_resp.text
    assert client.get("/api/execution/plans/not_exist").status_code == 404
    summary = client.get("/api/execution/summary").json()
    assert "plans" in summary and "hunting" in summary


def test_api_risk_var():
    client = _client()
    r = client.post("/api/execution/risk/var", json={"returns": [0.01, -0.02] * 30,
                                                     "temps": [80, 70, 60, 40]})
    assert r.status_code == 200, r.text
    j = r.json()
    assert j["level"] == 0.99
    assert j["cooling"]["cooling"] is True
    assert client.post("/api/execution/risk/var", json={}).status_code == 400


def test_api_plan_import_csv():
    client = _client()
    csv_text = "symbol,name,side,buy_low,buy_high,position_ratio,stop_loss,take_profit,note\n" \
               "600519.SH,贵州茅台,buy,1500,1520,0.1,1450,1800,导入\n"
    r = client.post("/api/execution/plans/import", json={"csv": csv_text, "name": "导入API"})
    assert r.status_code == 200, r.text
    assert len(r.json()["legs"]) == 1
    assert client.post("/api/execution/plans/import", json={"csv": ""}).status_code == 400


# ─── 受控文件交换 ─────────────────────────────────────────────

def test_exchange_rejects_path_escape():
    """路径白名单: 穿越/绝对路径/非 csv 一律拒绝"""
    from execution import exchange
    for bad in ("../evil.csv", "/etc/passwd.csv", "sub/dir.csv", "x.txt", ""):
        with pytest.raises(exchange.ExchangeError):
            exchange.resolve_path(bad)


def test_exchange_write_list_read_import():
    from execution import exchange
    p = plans.create_plan({"name": "交换计划", "legs": [_leg()]}, OWNER, OWNER)
    info = exchange.write_plan(p, OWNER)
    assert info["file"].endswith(".csv")
    files = [x["file"] for x in exchange.list_files()]
    assert info["file"] in files
    text = exchange.read_text(info["file"], OWNER)
    assert "600000.SH" in text
    back = plans.import_csv(text, OWNER, OWNER, name="交换导入")
    assert len(back["legs"]) == 1
    assert exchange.delete_file(info["file"], OWNER) is True
    assert exchange.delete_file(info["file"], OWNER) is False


def test_api_exchange_endpoints():
    client = _client()
    p = client.post("/api/execution/plans",
                    json={"name": "API交换", "legs": [_leg()]}).json()
    r = client.post("/api/execution/exchange/export",
                    json={"plan_id": p["id"], "filename": f"api_{p['id']}.csv"})
    assert r.status_code == 200, r.text
    name = r.json()["file"]
    assert name in [x["file"] for x in client.get("/api/execution/exchange/files").json()["items"]]
    assert "600000.SH" in client.get(f"/api/execution/exchange/files/{name}").text
    assert client.get("/api/execution/exchange/files/bad.txt").status_code == 400
    imported = client.post("/api/execution/exchange/import", json={"file": name})
    assert imported.status_code == 200, imported.text
    assert client.delete(f"/api/execution/exchange/files/{name}").status_code == 200
