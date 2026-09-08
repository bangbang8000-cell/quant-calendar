# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.6b / FR-5.4.5): 重点跟踪 API 测试

覆盖: GET /results (按当前用户持仓派生动作) / GET /history (时段分组) /
      POST /push (text+卡片双模, 无结果拒绝, webhook 缺失失败不 500)。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import config
config.settings.SECRET_KEY = 'test-secret-focus-api-key'

import db
import focus_store
from fastapi import FastAPI
from fastapi.testclient import TestClient
from auth import create_access_token
import api.v1.focus as fc
import feishu_push


def _auth(username='admin'):
    role = 'admin' if username == 'admin' else 'user'
    token = create_access_token({'sub': username, 'role': role})
    return {'Authorization': 'Bearer ' + token}


@pytest.fixture(scope="module", autouse=True)
def _db_schema():
    db.init_db()
    yield


@pytest.fixture(autouse=True)
def _clean():
    focus_store.delete_by_date("2026-09-08")
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM portfolio_positions")
        conn.commit()
        conn.close()
    yield
    focus_store.delete_by_date("2026-09-08")


@pytest.fixture
def client():
    app = FastAPI()
    app.include_router(fc.router, prefix='/api')
    return TestClient(app)


def _seed(rows=None):
    """预置评估记录 (默认 601985 推荐66 + 000063 中性48)"""
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-08", session="after_close", stock_code="601985.SH",
        stock_name="中国核电", total_score=66.0, level="推荐",
        model_provider="mock", model_used="m"))
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-08", session="after_close", stock_code="000063.SZ",
        stock_name="中兴通讯", total_score=48.0, level="中性",
        model_provider="mock", model_used="m"))


def test_results_empty_ok(client):
    r = client.get('/api/focus/results', params={'date': '2026-09-08'})
    assert r.status_code == 200
    data = r.json()['data']
    assert data['total'] == 0 and data['rows'] == []


def test_results_with_holdings_derives_action(client):
    db.portfolio_upsert_position('admin', '601985.SH', '中国核电', 10.0, 100)
    _seed()
    r = client.get('/api/focus/results', params={'date': '2026-09-08'}, headers=_auth('admin'))
    data = r.json()['data']
    by_code = {row['stock_code']: row for row in data['rows']}
    assert by_code['601985.SH']['action'] == '持有'   # 已持仓 → 持有
    assert by_code['000063.SZ']['action'] == '观望'
    assert data['actions']['买入'] == 0 and data['actions']['持有'] == 1
    assert data['actions']['观望'] == 1


def test_results_anonymous_no_holdings(client):
    _seed()
    r = client.get('/api/focus/results', params={'date': '2026-09-08'})
    data = r.json()['data']
    by_code = {row['stock_code']: row for row in data['rows']}
    assert by_code['601985.SH']['action'] == '买入'   # 匿名无持仓 → 买入


def test_results_session_filter(client):
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-08", session="pre_open", stock_code="601985.SH",
        stock_name="中国核电", total_score=65.0, level="推荐", model_provider="mock", model_used="m"))
    _seed()
    r = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'pre_open'})
    assert r.json()['data']['total'] == 1
    assert r.json()['data']['rows'][0]['session'] == 'pre_open'


def test_history_groups_by_session(client):
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-08", session="pre_open", stock_code="601985.SH",
        stock_name="中国核电", total_score=65.0, level="推荐", model_provider="mock", model_used="m"))
    _seed()
    r = client.get('/api/focus/history', params={'date': '2026-09-08'})
    data = r.json()['data']
    assert data['total'] == 3
    assert data['sessions'] == {'pre_open': 1, 'after_close': 2}


def test_stock_history(client):
    # 专用代码避免共享临时 DB 跨模块污染 (其他 focus 测试也会写 601985.SH)
    code = "688999.SH"
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-07", session="after_close", stock_code=code,
        stock_name="专用股", total_score=63.0, level="推荐", model_provider="mock", model_used="m"))
    r = client.get(f'/api/focus/stock/{code}')
    assert r.status_code == 200
    data = r.json()['data']
    assert data['total'] == 1
    assert data['rows'][0]['trade_date'] == "2026-09-07"


def test_push_rejects_without_data(client):
    r = client.post('/api/focus/push', json={'date': '2026-09-08'}, headers=_auth('admin'))
    assert r.status_code == 200
    assert r.json()['success'] is False


def test_push_text_mode(client, monkeypatch):
    _seed()
    sent = {}
    def fake_send(self, date, session, rows, holdings=None, max_rows=20, card=False):
        sent['card'] = card
        sent['n'] = len(rows)
        return True
    monkeypatch.setattr(feishu_push.FeishuPusher, "send_focus_digest", fake_send)
    monkeypatch.setattr("api.v1.feishu.feishu_config", {"webhook_url": "https://x", "enabled": True})
    r = client.post('/api/focus/push', json={'date': '2026-09-08'}, headers=_auth('admin'))
    assert r.status_code == 200
    assert r.json()['success'] is True
    assert sent['card'] is False and sent['n'] == 2


def test_push_card_mode(client, monkeypatch):
    _seed()
    sent = {}
    def fake_send(self, date, session, rows, holdings=None, max_rows=20, card=False):
        sent['card'] = card
        return True
    monkeypatch.setattr(feishu_push.FeishuPusher, "send_focus_digest", fake_send)
    monkeypatch.setattr("api.v1.feishu.feishu_config", {"webhook_url": "https://x"})
    r = client.post('/api/focus/push', json={'date': '2026-09-08', 'card': True}, headers=_auth('admin'))
    assert r.json()['success'] is True and sent['card'] is True


def test_push_webhook_missing_fails_not_500(client, monkeypatch):
    _seed()
    monkeypatch.setattr("api.v1.feishu.feishu_config", {"webhook_url": ""})
    r = client.post('/api/focus/push', json={'date': '2026-09-08'}, headers=_auth('admin'))
    assert r.status_code == 200
    assert r.json()['success'] is False


def test_focus_router_registered_in_production_router():
    """防回归: 生产 api_router 必须包含 focus 路由 (v5.4.0 冒烟发现的缺口)"""
    from api.v1.router import api_router
    routes = {r.path for r in api_router.routes}
    for p in ('/api/focus/list', '/api/focus/results', '/api/focus/history',
              '/api/focus/push', '/api/focus/stock/{stock_code}',
              '/api/focus/stock/{stock_code}/pool'):
        assert p in routes, f"生产路由缺失 {p}"


def test_stock_pool_status_anonymous(client, monkeypatch):
    """V5.4.0 (FR-5.4.9): 单股入池状态 — 匿名视角, 自选/新入池/入池历史。"""
    import focus_pool_history as fph
    fake = {'stock_code': '601985.SH', 'first_appear': '2026-09-01',
            'last_appear': '2026-09-08', 'pooled_days': 3, 'is_current': True,
            'pool_entries': [{'start': '2026-09-01', 'end': '2026-09-08', 'days': 3}],
            'pooled_dates': []}
    monkeypatch.setattr(fph, 'views_aggregator', type('A', (), {
        'daily_data': {}, 'all_dates': ['2026-09-08']})())
    r = client.get('/api/focus/stock/601985.SH/pool', params={'date': '2026-09-08'})
    assert r.status_code == 200
    data = r.json()['data']
    assert data['stock_code'] == '601985.SH'
    assert 'source' in data and 'sources' in data
    assert 'pool_history' in data and data['pool_history']['pooled_days'] >= 0
    assert 'holding' in data


def test_stock_pool_status_watchlist_source(client):
    """自选股票 → source 含 watchlist。"""
    db.watchlist_set('admin', '601985.SH', '中国核电')
    r = client.get('/api/focus/stock/601985.SH/pool',
                   params={'date': '2026-09-08'}, headers=_auth('admin'))
    data = r.json()['data']
    assert 'watchlist' in data['sources'], '自选股应标 watchlist 来源'
