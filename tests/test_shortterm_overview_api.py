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


# ---------- V5.2.1 收尾: 验证条件落盘 / history / 用户自设 ----------

def test_verification_persists_and_history(client):
    """生成验证条件后落盘, /history 可回读"""
    r = client.get('/api/shortterm/verification?date=2026-09-02')
    assert r.json()['success'] is True
    persisted = store.load_pool('2026-09-02', 'conditions')
    assert persisted and len(persisted) == 6
    h = client.get('/api/shortterm/verification/history?date=2026-09-02').json()
    assert len(h['conditions']) == 6
    assert h['conditions'][0]['key'] == 'limit_up_count'


def test_verification_history_empty_when_none(client):
    h = client.get('/api/shortterm/verification/history?date=2026-09-10').json()
    assert h['conditions'] == []


def test_verification_custom_override(client):
    """用户自设条件覆盖基线阈值: 涨停家数阈值设 999 → 当前必证伪"""
    r = client.get('/api/shortterm/verification?date=2026-09-02&custom=%7B%22limit_up_count%22%3A999%7D')
    conds = r.json()['conditions']
    by_key = {c['key']: c for c in conds}
    assert by_key['limit_up_count']['threshold'] == 999
    assert by_key['limit_up_count']['verdict'] == '证伪'
    # 未覆盖的指标仍用基线
    assert by_key['highest_board']['threshold'] is None or isinstance(
        by_key['highest_board']['threshold'], (int, float))


def test_verification_custom_invalid_ignored(client):
    """非法 custom 忽略, 不报错"""
    r = client.get('/api/shortterm/verification?date=2026-09-02&custom=not-json')
    assert r.json()['success'] is True
    assert len(r.json()['conditions']) == 6


# ---------- V5.2.2: AI 多视角复盘与闭环 ----------

def _fake_llm_invoke(prompt):
    return ('{"emotion_level": "发酵", "summary": "主线清晰", '
            '"active_directions": ["存储"], "risks": ["炸板率高"], '
            '"verify_conditions": ["看1进2"]}')


def test_review_run_and_get(monkeypatch, client):
    from api.v1 import shortterm as shortterm_api
    from shortterm import sector_flow as sf
    monkeypatch.setattr(shortterm_api, '_build_llm_invoke',
                        lambda: _fake_llm_invoke)
    monkeypatch.setattr(sf, 'fetch_sector_flow',
                        lambda i='今日', s='行业资金流': {'available': False,
                                                    'reason': '[⚠️]'})
    r = client.post('/api/shortterm/review?date=2026-09-02')
    data = r.json()
    assert data['success'] is True and data['available'] is True
    assert data['emotion_level'] == '发酵'
    assert data['markdown'].startswith('# 盘面研判')
    # 落盘 → GET 可回读
    g = client.get('/api/shortterm/review?date=2026-09-02').json()
    assert g['review']['emotion_level'] == '发酵'
    assert set(g['review']['reports']) == {
        'sentiment_report', 'capital_report', 'theme_report',
        'dragon_tiger_report', 'leader_report'}


def test_review_no_ai_available(monkeypatch, client):
    from api.v1 import shortterm as shortterm_api
    monkeypatch.setattr(shortterm_api, '_build_llm_invoke', lambda: None)
    r = client.post('/api/shortterm/review?date=2026-09-02')
    data = r.json()
    assert data['available'] is False
    assert 'AI 未配置' in data['reason']


def test_reflection_endpoint(monkeypatch, client):
    from shortterm import emotion_metrics as em
    monkeypatch.setattr(em, 'prev_trade_date', lambda d: '2026-09-01')
    r = client.get('/api/shortterm/reflection?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert data['vote']['direction'] in ('up', 'down', 'flat')


def test_intraday_snapshot_endpoint(monkeypatch, client):
    from api.v1 import shortterm as shortterm_api
    from shortterm import intraday as iday
    import datetime as _dt
    monkeypatch.setattr(iday, 'accept_snapshot',
                        lambda d, is_trade_day=True, today=None: (True, '快照时点 10:00'))
    r = client.post('/api/shortterm/intraday/snapshot?date=2026-09-03')
    data = r.json()
    assert data['success'] is True and data['accepted'] is True
    assert 'zt_count' in data


def test_backtest_endpoint(client):
    r = client.get('/api/shortterm/backtest?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert '样本偏差声明' in data['note']


def test_drift_endpoint(client):
    r = client.get('/api/shortterm/drift?date=2026-09-02')
    data = r.json()
    assert data['success'] is True
    assert data['available'] in (True, False)
