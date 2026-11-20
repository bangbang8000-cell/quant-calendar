#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.9 五维护栏复检与五维分析报告测试 (FR-7.9-1/2)"""
import os
import sys

ROOT = os.path.join(os.path.dirname(__file__), '..')
sys.path.insert(0, os.path.join(ROOT, 'backend'))
sys.path.insert(0, os.path.join(ROOT, 'scripts'))

import numpy as np
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

import five_dim_audit
from report_stock import (analyze_events, analyze_fundamental, analyze_moneyflow,
                          analyze_sector, analyze_technical, build_report, render_html)


def _bars(n=80, drift=0.4, seed=7):
    rng = np.random.default_rng(seed)
    close = 20 + np.linspace(0, drift * n, n) + rng.normal(0, 0.3, n)
    out = []
    for i in range(n):
        c = float(close[i])
        out.append({"date": f"2026-{(i // 28) + 1:02d}-{(i % 28) + 1:02d}",
                    "open": round(c * 0.995, 2), "high": round(c * 1.02, 2),
                    "low": round(c * 0.98, 2), "close": round(c, 2),
                    "volume": float(rng.uniform(1e6, 2e6))})
    return out


# ─── 分维分析 ────────────────────────────────────────────────

def test_technical_uptrend_scores_above_neutral():
    got = analyze_technical(_bars())
    assert got["score"] is not None and got["score"] > 50
    assert got["indicators"]["ma20"] is not None
    assert got["reasons"]


def test_technical_downtrend_scores_below_neutral():
    got = analyze_technical(_bars(drift=-0.5))
    assert got["score"] < 50


def test_technical_insufficient_bars_is_unknown():
    got = analyze_technical(_bars(n=10))
    assert got["score"] is None
    assert "不足" in got["reasons"][0]


def test_moneyflow_needs_enough_samples():
    bars = _bars(n=30)
    assert analyze_moneyflow([], bars)["score"] is None
    assert analyze_moneyflow([1e7] * 2, bars)["score"] is None
    strong = analyze_moneyflow([5e7] * 5, bars)
    assert strong["score"] is not None and strong["score"] > 50
    outflow = analyze_moneyflow([-5e7] * 5, bars)
    assert outflow["score"] < 50


def test_fundamental_ladder():
    assert analyze_fundamental({})["score"] is None
    cheap = analyze_fundamental({"pe": 15, "pb": 1.5})
    assert cheap["score"] > 50
    rich = analyze_fundamental({"pe": 80, "pb": 9})
    assert rich["score"] < 50
    loss = analyze_fundamental({"pe": -5})
    assert loss["score"] < 50


def test_sector_and_event_dimensions():
    assert analyze_sector(None)["score"] is None
    assert analyze_sector({"rank_pct": 90, "name": "半导体"})["score"] == 90
    assert analyze_events(None)["score"] is None
    good = analyze_events([{"sentiment": "利好"}, {"sentiment": "利好"}])
    assert good["score"] > 50 and good["veto"] is False
    bad = analyze_events([{"sentiment": "利空", "title": "公司被立案调查"}])
    assert bad["veto"] is True


# ─── 报告组装 ────────────────────────────────────────────────

def test_build_report_full_completeness():
    report = build_report("600000.SH", "浦发银行", "2026-11-18", _bars(),
                          flows=[1e7] * 5, basics={"pe": 12, "pb": 1.1},
                          sector={"rank_pct": 70, "name": "银行"},
                          events=[])
    assert report["data_completeness"] == 1.0
    assert report["missing_dimensions"] == []
    assert report["score"]["total_score"] > 0
    assert "综合评分" in report["conclusion"]["text"]


def test_build_report_marks_missing_dimensions():
    report = build_report("600000.SH", "", "2026-11-18", _bars())
    assert report["data_completeness"] < 1.0
    assert set(report["missing_dimensions"]) >= {"资金", "板块", "事件"}
    assert "缺" in report["conclusion"]["text"]


def test_build_report_veto_overrides_score():
    report = build_report("600000.SH", "X", "2026-11-18", _bars(), flows=[1e7] * 5,
                          basics={"pe": 10}, sector={"rank_pct": 80},
                          events=[{"sentiment": "利空", "title": "涉嫌重大违法"}])
    assert report["score"]["veto_flag"] is True
    assert report["score"]["total_score"] == -100


def test_render_html_escapes_and_self_contained():
    report = build_report("600000.SH", "<script>alert(1)</script>", "2026-11-18", _bars())
    html = render_html(report)
    assert "<script>alert(1)</script>" not in html
    assert "&lt;script&gt;" in html
    assert html.startswith("<!DOCTYPE html>")
    assert "http://" not in html and "https://" not in html  # 无外链资源
    assert "不构成任何投资建议" in html


# ─── API ──────────────────────────────────────────────────────

def _client():
    from api.v1.stock_report import router
    from auth import get_current_active_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_current_active_user] = lambda: {"username": "tester_v79"}
    return TestClient(app)


def test_api_report_json_and_html(monkeypatch):
    from api.v1 import stock_report as mod
    fake = {"symbol": "600000.SH", "date": "2026-11-18", "bars": _bars(),
            "basics": {"pe": 12, "pb": 1.2}, "flows": [1e7] * 5}
    monkeypatch.setattr(mod, "collect_facts", lambda symbol, date=None, portal=None: fake)
    client = _client()
    r = client.get("/api/reports/stock/600000.SH")
    assert r.status_code == 200, r.text
    body = r.json()
    assert body["symbol"] == "600000.SH"
    assert body["score"]["dimensions"]["technical"]["score"] is not None
    html_resp = client.get("/api/reports/stock/600000.SH", params={"format": "html"})
    assert html_resp.status_code == 200
    assert "五维分析报告" in html_resp.text


def test_api_report_not_found(monkeypatch):
    from api.v1 import stock_report as mod

    def _boom(*a, **k):
        raise LookupError("无行情数据")
    monkeypatch.setattr(mod, "collect_facts", _boom)
    assert _client().get("/api/reports/stock/000001.SZ").status_code == 404


def test_api_report_requires_auth():
    from api.v1.stock_report import router
    app = FastAPI()
    app.include_router(router, prefix="/api")
    assert TestClient(app).get("/api/reports/stock/600000.SH").status_code in (401, 403)


# ─── 五维复检脚本 ─────────────────────────────────────────────

def test_five_dim_audit_has_no_fail():
    """五维复检作为门禁: 不允许存在 FAIL 项"""
    audit = five_dim_audit.run_audit()
    fails = [r for r in audit["results"] if r["status"] == "fail"]
    assert not fails, f"FAIL 项: {[(r['id'], r['detail']) for r in fails]}"
    assert audit["overall"] >= 80


def test_five_dim_audit_covers_all_dimensions():
    audit = five_dim_audit.run_audit()
    dims = {r["dim"] for r in audit["results"]}
    assert dims == {"A", "C", "E", "L", "O"}
    assert set(audit["scores"]) == {"A", "C", "E", "L", "O"}
