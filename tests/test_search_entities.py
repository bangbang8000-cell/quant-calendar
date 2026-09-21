# -*- coding: utf-8 -*-
"""6.1.4 (D2): 跨实体搜索 — 评估历史实体 (纯函数 + HTTP 可选认证)"""
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from api.v1.search import router, build_grouped_results
from auth import get_current_user


def test_without_user_no_eval_group():
    groups = build_grouped_results("招商", user=None)
    assert not any(g["key"] == "eval" for g in groups)


def test_eval_group_requires_match(monkeypatch):
    def fake_history(username, limit=200):
        return [{"stock_code": "600036", "stock_name": "招商银行", "result": {}}]
    monkeypatch.setattr("ai_evaluator.ai_evaluator.get_history", fake_history)
    groups = build_grouped_results("招商", user={"username": "alice"})
    assert any(g["key"] == "eval" for g in groups)
    ev = next(g for g in groups if g["key"] == "eval")
    assert ev["items"][0]["code"] == "600036"
    assert ev["items"][0]["subLabel"] == "评估历史"


def test_eval_group_no_match_skipped(monkeypatch):
    def fake_history(username, limit=200):
        return [{"stock_code": "600036", "stock_name": "招商银行"}]
    monkeypatch.setattr("ai_evaluator.ai_evaluator.get_history", fake_history)
    groups = build_grouped_results("茅台", user={"username": "alice"})
    assert not any(g["key"] == "eval" for g in groups)


def test_eval_group_error_safe(monkeypatch):
    def boom(username, limit=200):
        raise RuntimeError("store down")
    monkeypatch.setattr("ai_evaluator.ai_evaluator.get_history", boom)
    groups = build_grouped_results("招商", user={"username": "alice"})
    assert not any(g["key"] == "eval" for g in groups)


def test_existing_groups_unaffected(monkeypatch):
    """既有分组 (股票/菜单) 不受 user 参数影响。"""
    class FakeSM:
        stock_map = {"600036.SH": "招商银行"}
    monkeypatch.setattr("api.v1.search._get_stock_manager", lambda: FakeSM())
    monkeypatch.setattr("api.v1.search._load_sector_index", lambda: {})
    monkeypatch.setattr("api.v1.search._load_strategy_index", lambda: {})
    # q=智能: 菜单命中「智能评估」; q=招商: 股票命中
    g1 = build_grouped_results("招商", menu_defs=[{"key": "ai", "name": "智能评估"}], user=None)
    assert any(g["key"] == "stock" for g in g1)
    g2 = build_grouped_results("智能", menu_defs=[{"key": "ai", "name": "智能评估"}], user=None)
    assert any(g["key"] == "menu" for g in g2)
    assert not any(g["key"] == "eval" for g in g1) and not any(g["key"] == "eval" for g in g2)


# ─── HTTP: 可选认证 (无 token 公开; 带 token 评估实体参与) ────

def _make_client(monkeypatch, user):
    class FakeSM:
        stock_map = {"600036.SH": "招商银行"}
    monkeypatch.setattr("api.v1.search._get_stock_manager", lambda: FakeSM())
    monkeypatch.setattr("api.v1.search._load_sector_index", lambda: {})
    monkeypatch.setattr("api.v1.search._load_strategy_index", lambda: {})
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_current_user] = lambda: user
    return TestClient(app)


def test_http_without_token_no_eval_group(monkeypatch):
    c = _make_client(monkeypatch, None)
    r = c.get("/api/search?q=招商")
    assert r.status_code == 200
    groups = r.json()["groups"]
    assert not any(g["key"] == "eval" for g in groups)


def test_http_with_token_eval_group_present(monkeypatch):
    def fake_history(username, limit=200):
        return [{"stock_code": "600036.SH", "stock_name": "招商银行"}]
    monkeypatch.setattr("ai_evaluator.ai_evaluator.get_history", fake_history)
    c = _make_client(monkeypatch, {"username": "alice"})
    r = c.get("/api/search?q=招商")
    assert r.status_code == 200
    groups = r.json()["groups"]
    assert any(g["key"] == "eval" for g in groups)
