#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.08): 短线复盘 API 测试
- 最小 FastAPI app 只挂 shortterm 路由 + 覆写鉴权, 不加载 main_new(避免真实数据源拉取)
- 所有 akshare fetcher 均 monkeypatch, 零真实网络
- 数据诚实性: 失败字段 None(标不可用), 空池合法(空数组); 需鉴权(deny-by-default)。"""
import sys
import os
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi import FastAPI, Depends
from fastapi.testclient import TestClient

from auth import get_current_active_user
from api.v1.shortterm import router as shortterm_router
from shortterm import fetchers, lhb, sector_flow, store


def _make_client(override_auth=True):
    app = FastAPI()
    # 生产里由 api_router(prefix="/api") 提供前缀
    app.include_router(shortterm_router, prefix="/api")
    if override_auth:
        app.dependency_overrides[get_current_active_user] = \
            lambda: {"username": "admin", "role": "admin"}
    return TestClient(app)


@pytest.fixture()
def client():
    return _make_client()


def _fake_pool(date):
    return {'available': True, 'source': 'akshare.eastmoney', 'date': date,
            'rows': [{'ts_code': '002909', 'name': '集泰股份', 'boards': 3,
                      'board': '10cm', 'first_seal_time': '09:25:00',
                      'industry': '化学制品'}]}


def _fake_lhb(s, e):
    return {'available': True, 'rows': [{'ts_code': '000011', 'name': '深物业A',
                                         'tags': ['机构'], 'board': '10cm'}]}


def _fake_sector(i, s):
    return {'available': True, 'rows': [{'name': '银行', 'main_net_inflow': 1.5e9}]}


# ---------- 鉴权(deny-by-default) ----------

def test_pools_requires_auth():
    c = _make_client(override_auth=False)
    r = c.get('/api/shortterm/pools')
    assert r.status_code in (401, 403)


# ---------- pools / ladder ----------

def test_pools_structure(monkeypatch, client):
    for fn in (fetchers.fetch_zt_pool, fetchers.fetch_zb_pool, fetchers.fetch_dt_pool):
        monkeypatch.setattr(fetchers, fn.__name__, _fake_pool)
    r = client.get('/api/shortterm/pools?date=2026-09-02')
    assert r.status_code == 200
    data = r.json()
    assert data['success'] is True
    assert data['date'] == '2026-09-02'
    assert data['zt'][0]['ts_code'] == '002909'
    assert data['ladder']['highest'] == 3


def test_pools_failure_is_null_not_zero(monkeypatch, client):
    def fail(date):
        return {'available': False, 'reason': '[⚠️ 涨停池｜boom]'}
    monkeypatch.setattr(fetchers, 'fetch_zt_pool', fail)
    monkeypatch.setattr(fetchers, 'fetch_zb_pool', _fake_pool)
    monkeypatch.setattr(fetchers, 'fetch_dt_pool', _fake_pool)
    r = client.get('/api/shortterm/pools?date=2026-09-01')
    data = r.json()
    assert data['zt'] is None           # 失败 → None, 不是 0 家
    assert data['ladder']['highest'] is None
    assert data['zb'] is not None


# ---------- lhb / sector-flow ----------

def test_lhb(monkeypatch, client):
    monkeypatch.setattr(lhb, 'fetch_lhb', _fake_lhb)
    r = client.get('/api/shortterm/lhb?date=2026-09-02')
    data = r.json()
    assert data['rows'][0]['ts_code'] == '000011'
    assert data['rows'][0]['tags'] == ['机构']


def test_sector_flow(monkeypatch, client):
    monkeypatch.setattr(sector_flow, 'fetch_sector_flow', _fake_sector)
    r = client.get('/api/shortterm/sector-flow?indicator=今日&sector_type=行业资金流')
    data = r.json()
    assert data['rows'][0]['name'] == '银行'


# ---------- capture / store / dates ----------

def test_capture_persists(monkeypatch, client):
    for fn in (fetchers.fetch_zt_pool, fetchers.fetch_zb_pool,
               fetchers.fetch_dt_pool):
        monkeypatch.setattr(fetchers, fn.__name__, _fake_pool)
    monkeypatch.setattr(lhb, 'fetch_lhb', _fake_lhb)
    r = client.post('/api/shortterm/capture?date=2026-09-02')
    data = r.json()
    assert data['captured']['zt'] == 1
    assert data['captured']['lhb'] == 1
    rows = store.load_pool('2026-09-02', 'zt')
    assert rows[0]['ts_code'] == '002909'


def test_dates_lists_captured(monkeypatch, client):
    for fn in (fetchers.fetch_zt_pool, fetchers.fetch_zb_pool,
               fetchers.fetch_dt_pool):
        monkeypatch.setattr(fetchers, fn.__name__, _fake_pool)
    monkeypatch.setattr(lhb, 'fetch_lhb', _fake_lhb)
    client.post('/api/shortterm/capture?date=2026-09-02')
    r = client.get('/api/shortterm/dates')
    assert '2026-09-02' in r.json()['dates']


def test_capture_failure_marks_null(monkeypatch, client):
    def fail(date):
        return {'available': False, 'reason': '[⚠️ boom]'}
    monkeypatch.setattr(fetchers, 'fetch_zt_pool', fail)
    monkeypatch.setattr(fetchers, 'fetch_zb_pool', _fake_pool)
    monkeypatch.setattr(fetchers, 'fetch_dt_pool', _fake_pool)
    monkeypatch.setattr(lhb, 'fetch_lhb', _fake_lhb)
    r = client.post('/api/shortterm/capture?date=2026-09-02')
    assert r.json()['captured']['zt'] is None
    assert r.json()['captured']['lhb'] == 1
