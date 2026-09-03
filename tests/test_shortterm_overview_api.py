#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.1 (T-5.2.17): 派生情绪/事实/验证/热度 API 测试

- 最小 FastAPI app 只挂 shortterm 路由 + 覆写鉴权
- fetch_prev_pool / 交易日历 均 monkeypatch, 零真实网络
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

from auth import get_current_active_user
from api.v1.shortterm import router as shortterm_router
from shortterm import store, emotion_metrics


def _make_client():
    app = FastAPI()
    app.include_router(shortterm_router, prefix="/api")
    app.dependency_overrides[get_current_active_user] = \
        lambda: {"username": "admin", "role": "admin"}
    return TestClient(app)


@pytest.fixture(autouse=True)
def _clean_store():
    import db as _db

    def _wipe():
        try:
            with _db._db_lock:
                conn = _db.get_conn()
                try:
                    conn.execute("DELETE FROM shortterm_pools")
                    conn.commit()
                finally:
                    conn.close()
        except Exception:
            pass

    _wipe()
    yield
    _wipe()


@pytest.fixture()
def client(monkeypatch):
    # 定稿记录与交易日历全部 mock, 零网络
    monkeypatch.setattr(
        emotion_metrics, 'fetch_prev_pool',
        lambda d: {'available': True, 'rows': [
            {'ts_code': '002909', 'ret': 10.0, 'prev_boards': 3, 'industry': '化学制品'},
            {'ts_code': '600000', 'ret': 2.0, 'prev_boards': 1, 'industry': '银行'},
        ]})
    monkeypatch.setattr(emotion_metrics, 'prev_trade_date', lambda d: '2026-09-01')
    monkeypatch.setattr(emotion_metrics, 'last_trade_dates',
                        lambda n, end=None: ['2026-09-02', '2026-09-01', '2026-08-29'])
    store.save_pool('2026-09-02', 'zt', [
        {'ts_code': '002909', 'boards': 4, 'first_seal_time': '09:25:00',
         'seal_amount': 1e8, 'industry': '化学制品'},
        {'ts_code': '600000', 'boards': 1, 'first_seal_time': '13:00:00',
         'seal_amount': 5e7, 'industry': '银行'},
    ])
    store.save_pool('2026-09-02', 'zb', [{'ts_code': 'x'}])
    store.save_pool('2026-09-02', 'dt', [{'ts_code': '000001'}])
    store.save_pool('2026-09-01', 'zt', [
        {'ts_code': 'a', 'boards': 1, 'industry': '半导体'},
        {'ts_code': 'b', 'boards': 2, 'industry': '半导体'},
    ])
    store.save_pool('2026-08-29', 'zt', [
        {'ts_code': 'c', 'boards': 1, 'industry': '半导体'},
    ])
    return _make_client()


def test_emotion_endpoint(client):
    r = client.get('/api/shortterm/emotion?date=2026-09-02')
    assert r.status_code == 200
    data = r.json()
    assert data['success'] is True
    assert data['money_effect']['available'] is True
    assert data['money_effect']['source'] == 'settled'
    assert data['promotion']['available'] is True
    assert data['consec_premium']['available'] is True
    assert data['sentiment_cycle']['available'] is True
    assert data['ladder']['highest'] == 4


def test_market_facts_endpoint(client):
    r = client.get('/api/shortterm/market-facts?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert data['seal_quality']['broken_rate'] == round(1 / 3, 3)
    assert data['feedback_matrix']['available'] is True
    assert data['theme_structure']['available'] is True


def test_verification_endpoint(client):
    r = client.get('/api/shortterm/verification?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    conds = data['conditions']
    assert len(conds) == 6
    by_key = {c['key']: c for c in conds}
    assert by_key['limit_up_count']['verdict'] in ('成立', '证伪', '数据不足')
    assert 'summary' in data


def test_weekly_endpoint(client):
    r = client.get('/api/shortterm/weekly?end=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert data['top'][0]['industry'] in ('半导体', '化学制品', '银行')
    assert '行业口径近似题材' in data['note']


def test_overview_endpoint(client):
    r = client.get('/api/shortterm/overview?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert 'emotion' in data and 'facts' in data
    assert 'conditions' in data and 'summary' in data
    assert 'weekly' in data
    assert data['emotion']['money_effect']['available'] is True


def test_overview_requires_auth():
    app = FastAPI()
    app.include_router(shortterm_router, prefix="/api")
    c = TestClient(app)
    assert c.get('/api/shortterm/overview?date=2026-09-02').status_code in (401, 403)
    assert c.get('/api/shortterm/emotion?date=2026-09-02').status_code in (401, 403)
