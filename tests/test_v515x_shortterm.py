#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F7): 短线复盘「列表+右边内容」双栏 + /dates/summary 摘要端点。

覆盖 TC-5.15.71~.74:
- 后端: GET /api/shortterm/dates/summary 返回近 N 日 {date, money_effect, emotion_score, zt_count}
- 前端: overview 子页含左列表 + 右看板双栏容器; 默认选中最近一天
- 响应式: <1024px 堆叠
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from auth import get_current_active_user
from api.v1.shortterm import router as shortterm_router
from shortterm import store

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _make_client():
    app = FastAPI()
    app.include_router(shortterm_router, prefix="/api")
    app.dependency_overrides[get_current_active_user] =         lambda: {"username": "admin", "role": "admin"}
    return TestClient(app)


def test_dates_summary_endpoint(monkeypatch):
    """TC-5.15.71: /dates/summary 返回近 N 日核心指标摘要"""
    monkeypatch.setattr(store, "list_dates", lambda: ["2026-09-14", "2026-09-11"])
    monkeypatch.setattr(store, "load_pool", lambda d, t: [{"x": 1}])
    # 覆写 bundle 构建 — 返回固定结构
    import api.v1.shortterm as st

    def fake_bundle(date):
        return {
            'money_effect': {'median': 1.2},
            'sentiment_cycle': {'available': True, 'current_score': 0.6, 'rising': True},
        }
    monkeypatch.setattr(st, "_cached_bundle", fake_bundle)
    client = _make_client()
    r = client.get("/api/shortterm/dates/summary")
    assert r.status_code == 200
    data = r.json()
    assert data["success"] is True
    assert len(data["dates"]) == 2
    first = data["dates"][0]
    for k in ("date", "money_effect", "emotion_score", "emotion_rising", "zt_count"):
        assert k in first, f"摘要应含字段 {k}"
    assert first["date"] == "2026-09-14"
    assert first["money_effect"] == 1.2
    assert first["emotion_score"] == 0.6
    assert first["zt_count"] == 1


def test_dates_summary_bad_date_safe(monkeypatch):
    """TC-5.15.72: 单日构建异常不拖垮整体 (返回 None 摘要)"""
    monkeypatch.setattr(store, "list_dates", lambda: ["2026-09-14", "2026-09-11"])
    import api.v1.shortterm as st

    def boom(date):
        raise RuntimeError("boom")
    monkeypatch.setattr(st, "_cached_bundle", boom)
    client = _make_client()
    r = client.get("/api/shortterm/dates/summary")
    assert r.status_code == 200
    for item in r.json()["dates"]:
        assert item["money_effect"] is None


def test_overview_two_column_layout():
    """TC-5.15.73: overview 子页双栏容器 + 默认最近一天"""
    src = _read_f("js/components/shortterm-page.js")
    assert "shortterm-split" in src, "应含双栏容器类"
    assert "date-list" in src or "dateList" in src, "应含日期列表容器"
    assert "loadDates" in src or "loadDateList" in src, "应含日期列表加载函数"
    # 默认选中最近一天: 复用 setSessionDates (latest-session)
    assert "latest-session" in src, "应默认最近一天"


def test_overview_responsive_css():
    """TC-5.15.74: <1024px 双栏堆叠"""
    css = _read_f("css/responsive.css") + _read_f("css/layout.css")
    assert "shortterm-split" in css, "应定义双栏样式"
