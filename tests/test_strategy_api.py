#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
策略注册表 API 测试 (FR: 策略研究 P0)
覆盖: strategy_defs/strategy_runs 持久化 + /api/strategies 端点契约
"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
import pytest
from fastapi.testclient import TestClient


@pytest.fixture(scope="module")
def authed_client():
    """注入 admin token 的测试客户端"""
    from main_new import app
    from auth import create_access_token
    token = create_access_token({"sub": "admin", "role": "admin"})
    client = TestClient(app)
    client.headers.update({"Authorization": f"Bearer {token}"})
    return client


# ---------- v3.21 (P0-3): 策略参数方案 profiles ----------

def test_profiles_save_list_delete(authed_client):
    """保存/列出/删除策略参数方案 (per sid 隔离)"""
    r = authed_client.post('/api/strategies/multi_factor/profiles',
                           json={'name': '激进版', 'params': {'top_n': 30, 'benchmark': '000300.SH'}})
    assert r.status_code == 200, r.text
    data = r.json().get('data') or {}
    assert data.get('id')
    pid = data['id']
    r = authed_client.get('/api/strategies/multi_factor/profiles')
    assert r.status_code == 200
    lst = (r.json().get('data') or {}).get('profiles') or []
    assert any(p['id'] == pid and p['name'] == '激进版' for p in lst), lst
    r = authed_client.delete(f'/api/strategies/multi_factor/profiles/{pid}')
    assert r.status_code == 200
    r = authed_client.get('/api/strategies/multi_factor/profiles')
    lst = (r.json().get('data') or {}).get('profiles') or []
    assert not any(p['id'] == pid for p in lst)


def test_profiles_sid_isolation(authed_client):
    """不同策略的方案互相隔离"""
    r1 = authed_client.post('/api/strategies/multi_factor/profiles',
                            json={'name': 'mf方案', 'params': {'top_n': 25}})
    r2 = authed_client.post('/api/strategies/capital_flow/profiles',
                            json={'name': 'cf方案', 'params': {'flow_window': 20}})
    assert r1.status_code == 200 and r2.status_code == 200
    mf = (authed_client.get('/api/strategies/multi_factor/profiles').json().get('data') or {}).get('profiles') or []
    cf = (authed_client.get('/api/strategies/capital_flow/profiles').json().get('data') or {}).get('profiles') or []
    assert all(p['name'] == 'mf方案' for p in mf)
    assert all(p['name'] == 'cf方案' for p in cf)
    for p in mf: authed_client.delete(f'/api/strategies/multi_factor/profiles/{p["id"]}')
    for p in cf: authed_client.delete(f'/api/strategies/capital_flow/profiles/{p["id"]}')


def test_profiles_validation(authed_client):
    """非法输入 400/422: 空name / 非dict params"""
    r = authed_client.post('/api/strategies/multi_factor/profiles', json={'name': '', 'params': {}})
    assert r.status_code in (400, 422)
    r = authed_client.post('/api/strategies/multi_factor/profiles', json={'name': 'x', 'params': 'not-dict'})
    assert r.status_code in (400, 422)


def test_profiles_delete_missing_404(authed_client):
    """删除不存在方案 → 404"""
    r = authed_client.delete('/api/strategies/multi_factor/profiles/nonexistent-id')
    assert r.status_code in (404, 400)


# ---------- db 持久化层 ----------

def test_strategy_db_defs_table():
    """strategy_defs 表可读写"""
    import strategy_db
    sid = "multi_factor"
    strategy_db.upsert_def(sid, {
        "name": "多因子选股", "version": "0.1.0", "type": "multi_factor",
        "params": {"top_n": 20}, "enabled": True,
    })
    d = strategy_db.get_def(sid)
    assert d is not None
    assert d["name"] == "多因子选股"
    assert d["params"]["top_n"] == 20


def test_strategy_db_runs_append_and_list():
    """strategy_runs 记录追加与查询"""
    import strategy_db
    rid = strategy_db.append_run("multi_factor", "0.1.0",
                                 {"top_n": 20}, "manual", "success",
                                 summary={"total_return": 0.12})
    runs = strategy_db.list_runs("multi_factor")
    assert any(r["id"] == rid for r in runs)
    assert runs[0]["status"] == "success"


def test_strategy_db_runs_reject_duplicate_same_time():
    """同策略并发互斥: 运行中再次触发应返回冲突"""
    import strategy_db
    strategy_db.append_run("multi_factor", "0.1.0", {}, "manual", "running")
    with pytest.raises(strategy_db.StrategyBusyError):
        strategy_db.append_run("multi_factor", "0.1.0", {}, "manual", "running")


# ---------- API 契约 ----------

def test_api_strategies_list(authed_client):
    client = authed_client
    r = client.get("/api/strategies")
    assert r.status_code == 200
    data = r.json()
    assert isinstance(data, list) and len(data) >= 4
    ids = {s["id"] for s in data}
    assert {"multi_factor", "sector_rotation", "index_enhance", "capital_flow"} <= ids


def test_api_strategy_schema(authed_client):
    client = authed_client
    r = client.get("/api/strategies/multi_factor/schema")
    assert r.status_code == 200
    schema = r.json()
    assert any(f["key"] == "top_n" for f in schema)


def test_api_strategy_run_unknown_404(authed_client):
    client = authed_client
    r = client.post("/api/strategies/nope/run", json={})
    assert r.status_code == 404


def test_api_strategy_ptrade_code(authed_client):
    client = authed_client
    r = client.get("/api/strategies/multi_factor/ptrade-code?top_n=20&benchmark=000300.SH")
    assert r.status_code == 200
    code = r.json()["code"]
    assert "def initialize(context):" in code
    assert "def handle_data(context, data):" in code
    assert "000300.SS" in code.replace("000300.SH", "000300.SS") or "000300.SS" in code

# ---------- P2: PT 策略生成三要素(选股/择时/风控) API ----------

def test_api_schema_exposes_timing_risk_params(authed_client):
    """schema 端点必须暴露选股范围/择时/风控三要素参数"""
    r = authed_client.get('/api/strategies/multi_factor/schema')
    assert r.status_code == 200
    keys = {f['key'] for f in r.json()}
    for k in ('universe_source', 'universe_codes', 'index_code',
              'timing_enabled', 'timing_index', 'timing_ma_window',
              'stop_loss_pct', 'take_profit_pct', 'max_drawdown_pct'):
        assert k in keys, f'schema 缺三要素参数 {k}'


def test_api_ptrade_code_contains_timing_risk_index(authed_client):
    """ptrade-code 端点生成代码必须含择时/风控/指数成分函数"""
    r = authed_client.get(
        '/api/strategies/multi_factor/ptrade-code?top_n=10'
        '&universe_source=index&index_code=000300.SH'
        '&timing_enabled=true&stop_loss_pct=0.1&take_profit_pct=0.2')
    assert r.status_code == 200
    code = r.json().get('code', '')
    assert 'market_timing' in code
    assert 'risk_controls' in code
    assert 'get_index_stocks' in code
    assert '000300.SS' in code  # 指数代码已转 PTrade 格式
