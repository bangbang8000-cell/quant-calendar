# -*- coding: utf-8 -*-
"""V5.4.2 (FR): 重点跟踪体验优化 — 默认加载最近一次 / 打分排序+按推荐档位归类 / 入池状态派生

守护:
1. /api/focus/latest 返回最近一次评估 (日期+时段), 前端默认加载最近的一次 (不再空等当天)
2. /api/focus/results 按推荐档位(level: 强烈推荐>推荐>谨慎推荐>中性>观望)排序 + 组内评分降序 + groups 归类
3. 缺省 level 由评分回填 (score_to_level), 展示完整推荐档位
4. /api/focus/stock/{code}/pool 派生 pool_state: 当日新入池>当前在池>已出池>从未入池
"""
import os
import sys

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import config
config.settings.SECRET_KEY = 'test-secret-focus-v542-key'

import db
import focus_store
from fastapi import FastAPI
from fastapi.testclient import TestClient
from auth import create_access_token
import api.v1.focus as fc


def _auth(username='admin'):
    role = 'admin' if username == 'admin' else 'user'
    token = create_access_token({'sub': username, 'role': role})
    return {'Authorization': 'Bearer ' + token}


@pytest.fixture(scope="module", autouse=True)
def _db_schema():
    db.init_db()
    yield


_SEED_DATES = ["2026-09-07", "2026-09-08"]


@pytest.fixture(autouse=True)
def _clean():
    for d in _SEED_DATES:
        focus_store.delete_by_date(d)
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM portfolio_positions")
        conn.commit()
        conn.close()
    yield
    for d in _SEED_DATES:
        focus_store.delete_by_date(d)


@pytest.fixture
def client():
    app = FastAPI()
    app.include_router(fc.router, prefix='/api')
    return TestClient(app)


def _rec(trade_date, session, code, score, level, name="股", direction=""):
    focus_store.upsert_eval(focus_store.build_record(
        trade_date=trade_date, session=session, stock_code=code,
        stock_name=name, total_score=score, level=level,
        model_provider="mock", model_used="m"))


# ─── 1. 默认加载最近一次评估 ───────────────────────────────────

def test_store_query_latest_eval_returns_most_recent():
    _rec("2026-09-07", "after_close", "601985.SH", 66.0, "推荐")
    _rec("2026-09-08", "pre_open", "000063.SZ", 48.0, "中性")
    _rec("2026-09-08", "after_close", "300760.SZ", 72.0, "强烈推荐")
    assert focus_store.query_latest_eval() == ("2026-09-08", "after_close")


def test_store_query_latest_eval_empty_returns_none():
    assert focus_store.query_latest_eval() == (None, None)


def test_focus_latest_endpoint(client):
    _rec("2026-09-07", "after_close", "601985.SH", 66.0, "推荐")
    _rec("2026-09-08", "after_close", "300760.SZ", 72.0, "强烈推荐")
    r = client.get('/api/focus/latest', headers=_auth('admin'))
    assert r.status_code == 200
    data = r.json()['data']
    assert data['date'] == "2026-09-08"
    assert data['session'] == "after_close"
    assert data['total'] == 1


def test_focus_latest_endpoint_empty(client):
    r = client.get('/api/focus/latest', headers=_auth('admin'))
    data = r.json()['data']
    assert data['date'] is None and data['session'] is None
    assert data['total'] == 0


# ─── 2. 打分排序 + 按推荐档位归类 ─────────────────────────────

def test_results_sorted_by_level_then_score_desc(client):
    _rec("2026-09-08", "after_close", "A.SH", 50.0, "中性")
    _rec("2026-09-08", "after_close", "B.SH", 85.0, "强烈推荐")
    _rec("2026-09-08", "after_close", "C.SH", 62.0, "推荐")
    _rec("2026-09-08", "after_close", "D.SH", 45.0, "谨慎推荐")
    _rec("2026-09-08", "after_close", "E.SH", 25.0, "观望")
    r = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'after_close'})
    codes = [row['stock_code'] for row in r.json()['data']['rows']]
    assert codes == ["B.SH", "C.SH", "D.SH", "A.SH", "E.SH"], \
        "应按推荐档位降序(强烈推荐>推荐>谨慎推荐>中性>观望), 实得 %r" % codes


def test_results_group_internal_score_desc(client):
    """同档内按评分降序。"""
    _rec("2026-09-08", "after_close", "A.SH", 70.0, "推荐")
    _rec("2026-09-08", "after_close", "B.SH", 66.0, "推荐")
    _rec("2026-09-08", "after_close", "C.SH", 60.0, "推荐")
    r = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'after_close'})
    codes = [row['stock_code'] for row in r.json()['data']['rows']]
    assert codes == ["A.SH", "B.SH", "C.SH"]


def test_results_groups_by_level(client):
    _rec("2026-09-08", "after_close", "A.SH", 85.0, "强烈推荐")
    _rec("2026-09-08", "after_close", "B.SH", 62.0, "推荐")
    _rec("2026-09-08", "after_close", "C.SH", 48.0, "中性")
    r = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'after_close'})
    groups = r.json()['data']['groups']
    assert groups["强烈推荐"][0]["stock_code"] == "A.SH"
    assert groups["推荐"][0]["stock_code"] == "B.SH"
    assert groups["中性"][0]["stock_code"] == "C.SH"
    # 各档组内评分降序
    _rec("2026-09-08", "after_close", "D.SH", 66.0, "推荐")
    r2 = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'after_close'})
    g2 = r2.json()['data']['groups']
    assert [x["stock_code"] for x in g2["推荐"]] == ["D.SH", "B.SH"]


def test_results_backfills_level_from_score(client):
    """历史/规则记录缺省 level 时, 按评分回填推荐档位 (评分>=80 强烈推荐)。"""
    focus_store.upsert_eval(focus_store.build_record(
        trade_date="2026-09-08", session="after_close", stock_code="601985.SH",
        stock_name="中国核电", total_score=82.0, level="",
        model_provider="mock", model_used="m"))
    r = client.get('/api/focus/results', params={'date': '2026-09-08', 'session': 'after_close'})
    rows = r.json()['data']['rows']
    assert len(rows) == 1
    assert rows[0]['level'] == "强烈推荐", "缺省 level 应由评分回填, 实得 %r" % rows[0]['level']


# ─── 3. 入池状态派生 (新入池/在池/已出池/从未入池) ─────────────

def test_pool_state_new_pool_priority():
    import focus_pool_history as fph
    hist = {'first_appear': '2026-09-08', 'last_appear': '2026-09-08',
            'is_current': True, 'pooled_days': 1, 'pool_entries': []}
    assert fph.derive_pool_state(['watchlist', 'new_pool'], hist) == 'new_pool'


def test_pool_state_in_pool():
    import focus_pool_history as fph
    hist = {'first_appear': '2026-09-01', 'last_appear': '2026-09-08',
            'is_current': True, 'pooled_days': 5, 'pool_entries': []}
    assert fph.derive_pool_state(['watchlist'], hist) == 'in_pool'


def test_pool_state_exited():
    import focus_pool_history as fph
    hist = {'first_appear': '2026-09-01', 'last_appear': '2026-09-04',
            'is_current': False, 'pooled_days': 3, 'pool_entries': []}
    assert fph.derive_pool_state([], hist) == 'exited'


def test_pool_state_never():
    import focus_pool_history as fph
    hist = {'first_appear': None, 'last_appear': None, 'is_current': False,
            'pooled_days': 0, 'pool_entries': []}
    assert fph.derive_pool_state([], hist) == 'never'


def test_pool_endpoint_returns_pool_state(client, monkeypatch):
    """API /pool 应返回 pool_state + 中文标签 (在池场景)。"""
    import focus_pool_history as fph
    class FakeAgg:
        daily_data = {'2026-09-08': [{'code': '601985.SH'}]}
        all_dates = ['2026-09-08']
    monkeypatch.setattr(fph, 'views_aggregator', FakeAgg())
    r = client.get('/api/focus/stock/601985.SH/pool',
                   params={'date': '2026-09-08'}, headers=_auth('admin'))
    data = r.json()['data']
    assert data['pool_state'] == 'in_pool'
    assert data['pool_state_label'] == '在池'
    assert 'source' in data and 'pool_history' in data


def test_focus_router_has_latest():
    """生产路由应含 /api/focus/latest。"""
    from api.v1.router import api_router
    routes = {r.path for r in api_router.routes}
    assert '/api/focus/latest' in routes
