#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""I3B / v3.22: 自定义策略 (AI 代写 + 回测执行层 + AI 优化) 测试"""
import pytest

from strategy_custom import (
    create_custom, list_custom, _extract_holdings_from_code,
    _normalize_panel, backtest_custom, ai_optimize,
)


# ---------- 纯函数 ----------

def test_extract_holdings_order_target_value():
    code = ('def handle_data(context, data):')
    code += '    order_target_value(\'600000.SH\', 30000)'
    code += '    order_target_value("600036.SH", 20000)'
    code += '    set_benchmark(\'000300.SH\')'
    h = _extract_holdings_from_code(code)
    assert h.get("600000.SH") == 30000
    assert h.get("600036.SH") == 20000
    assert "000300.SH" not in h  # benchmark 不提取


def test_extract_holdings_fallback_order_target():
    code = 'order_target(\'600519.SH\', 0.2)' + '\norder(\'600030.SH\', 100)'
    h = _extract_holdings_from_code(code, capital=100000.0)
    assert "600519.SH" in h
    assert "600030.SH" in h
    # 均分
    assert abs(h["600519.SH"] - 50000) < 1


def test_extract_holdings_empty():
    assert _extract_holdings_from_code("no orders here") == {}


def test_normalize_panel_dict_and_list():
    panel_dict = {"600000.SH": {"rows": {"2026-01-01": {"close": 10.5}}}}
    out = _normalize_panel(panel_dict, ["600000.SH"])
    assert out["600000.SH"]["2026-01-01"] == 10.5
    panel_list = {"600000.SH": [{"date": "2026-01-02", "close": 11.2}]}
    out2 = _normalize_panel(panel_list, ["600000.SH"])
    assert out2["600000.SH"]["2026-01-02"] == 11.2


# ---------- create_custom (mock LLM) ----------

def test_create_custom_with_code(monkeypatch, tmp_path):
    from strategy_db import get_def
    code = "def initialize(context):\n    pass\ndef handle_data(context, data):\n    pass"
    r = create_custom("custom_test1", "测试策略", code=code)
    assert r["sid"] == "custom_test1"
    d = get_def("custom_test1")
    assert d and d["type"] == "custom"
    assert "def initialize" in d["params"]["_code"]


def test_create_custom_with_prompt_mock(monkeypatch):
    generated = "def initialize(context):\n    pass\ndef handle_data(context, data):\n    order_target_value(\'600000.SH\', 10000)"
    monkeypatch.setattr("ai_evaluator.ai_evaluator.generate_review",
                        lambda *a, **k: generated)
    r = create_custom("custom_test2", "AI 策略", prompt="均线策略")
    assert "600000.SH" in r["code"]


def test_create_custom_requires_input():
    with pytest.raises(ValueError):
        create_custom("custom_x", "x")


def test_list_custom(tmp_path):
    create_custom("custom_list1", "列表1", code="def initialize(context):\n    pass")
    customs = list_custom()
    ids = [c["id"] for c in customs]
    assert "custom_list1" in ids


# ---------- backtest_custom (降级模拟) ----------

def test_backtest_custom(monkeypatch, tmp_path):
    from strategy_db import upsert_def
    code = ("def initialize(context):\n    pass\n"
            "def handle_data(context, data):\n"
            "    order_target_value(\'600000.SH\', 50000)\n"
            "    order_target_value(\'600036.SH\', 50000)")
    upsert_def("custom_bt1", {"name": "回测1", "type": "custom",
               "params": {"_code": code}, "enabled": True})
    result = backtest_custom("custom_bt1",
                             start_date="2026-01-01", end_date="2026-01-10",
                             capital=100000.0)
    assert result["symbols"] == ["600000.SH", "600036.SH"]
    assert "metrics" in result
    assert "equity_curve" in result
    assert len(result["equity_curve"]) > 0


def test_backtest_custom_no_orders(monkeypatch, tmp_path):
    from strategy_db import upsert_def
    upsert_def("custom_bt2", {"name": "无单", "type": "custom",
               "params": {"_code": "def initialize(context):\n    pass"}, "enabled": True})
    with pytest.raises(ValueError):
        backtest_custom("custom_bt2")


# ---------- API 端点 ----------

def test_api_custom_list(monkeypatch):
    from fastapi.testclient import TestClient
    from main_new import app
    from auth import create_access_token
    tok = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + tok})
    r = c.get("/api/strategies/custom")
    assert r.status_code == 200
    assert "customs" in r.json()["data"]


def test_api_custom_create_no_input(monkeypatch):
    from fastapi.testclient import TestClient
    from main_new import app
    from auth import create_access_token
    tok = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + tok})
    r = c.post("/api/strategies/custom", json={})
    assert r.status_code == 400


def test_api_custom_create_with_code(monkeypatch):
    from fastapi.testclient import TestClient
    from main_new import app
    from auth import create_access_token
    tok = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + tok})
    code = "def initialize(context):\n    pass\ndef handle_data(context, data):\n    pass"
    r = c.post("/api/strategies/custom",
               json={"sid": "custom_api1", "name": "API 策略", "code": code})
    assert r.status_code == 200
    assert r.json()["data"]["sid"] == "custom_api1"


def test_api_custom_backtest(monkeypatch):
    from fastapi.testclient import TestClient
    from main_new import app
    from auth import create_access_token
    tok = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + tok})
    code = ("def initialize(context):\n    pass\n"
            "def handle_data(context, data):\n"
            "    order_target_value(\'600000.SH\', 50000)")
    c.post("/api/strategies/custom",
           json={"sid": "custom_api_bt", "name": "回测", "code": code})
    r = c.post("/api/strategies/custom/custom_api_bt/backtest", json={})
    assert r.status_code == 200
    assert "metrics" in r.json()["data"]


def test_api_custom_code_get(monkeypatch):
    from fastapi.testclient import TestClient
    from main_new import app
    from auth import create_access_token
    tok = create_access_token({"sub": "admin", "role": "admin"})
    c = TestClient(app)
    c.headers.update({"Authorization": "Bearer " + tok})
    code = "def initialize(context):\n    pass"
    c.post("/api/strategies/custom",
           json={"sid": "custom_code1", "name": "取码", "code": code})
    r = c.get("/api/strategies/custom/custom_code1/code")
    assert r.status_code == 200
    assert "def initialize" in r.json()["data"]["code"]

