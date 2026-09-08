# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.2 / FR-5.4.1): 重点跟踪清单计算测试

覆盖: 纯函数并集/去重/来源标注/scope 过滤/空态/非法 scope;
      加载器 (自选表 + 新入池视图, 可注入); API GET /api/focus/list (匿名/登录/scope)。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

import config
config.settings.SECRET_KEY = 'test-secret-focus-key'

import db
import focus_list as fl
from fastapi import FastAPI
from fastapi.testclient import TestClient
from auth import create_access_token
import api.v1.focus as fc


@pytest.fixture(scope="module", autouse=True)
def _db_schema():
    """patch_data_dir 后初始化 schema (watchlist 等表 + 迁移)"""
    db.init_db()
    yield


@pytest.fixture(autouse=True)
def _clean_watchlist():
    """用例级隔离: 每个用例前清空 watchlist, 防共享临时库跨用例污染"""
    with db._db_lock:
        conn = db.get_conn()
        conn.execute("DELETE FROM watchlist")
        conn.commit()
        conn.close()
    yield


def _auth(username='admin'):
    role = 'admin' if username == 'admin' else 'user'
    token = create_access_token({'sub': username, 'role': role})
    return {'Authorization': 'Bearer ' + token}


# ─── 1. 纯函数 compute_focus_list ────────────────────────────

def test_union_dedup_and_source_tagging():
    r = fl.compute_focus_list(['601985.SH', '000063.SZ'], ['601985.SH', '300760.SZ'])
    assert r['total'] == 3
    codes = {m['code'] for m in r['members']}
    assert codes == {'601985.SH', '000063.SZ', '300760.SZ'}
    by_code = {m['code']: m for m in r['members']}
    assert by_code['601985.SH']['source'] == 'both'
    assert by_code['601985.SH']['sources'] == ['watchlist', 'new_pool']
    assert by_code['000063.SZ']['source'] == 'watchlist'
    assert by_code['300760.SZ']['source'] == 'new_pool'


def test_scope_filters():
    wl = ['601985.SH', '000063.SZ']
    np_ = ['300760.SZ']
    assert fl.compute_focus_list(wl, np_, scope='watchlist')['total'] == 2
    assert fl.compute_focus_list(wl, np_, scope='new_pool')['total'] == 1
    assert fl.compute_focus_list(wl, np_, scope='all')['total'] == 3


def test_empty_list_ok():
    r = fl.compute_focus_list([], [])
    assert r['total'] == 0
    assert r['members'] == []


def test_invalid_scope_raises():
    with pytest.raises(ValueError):
        fl.compute_focus_list(['x'], [], scope='bogus')


def test_none_inputs_treated_empty():
    r = fl.compute_focus_list(None, None)
    assert r['total'] == 0


# ─── 2. 加载器 ────────────────────────────────────────────────

def test_load_watchlist_codes_from_db():
    db.watchlist_set('admin', '601985.SH', '中国核电')
    db.watchlist_set('admin', '000063.SZ', '中兴通讯')
    codes = fl.load_watchlist_codes('admin')
    assert set(codes) == {'601985.SH', '000063.SZ'}


def test_load_new_pool_codes_uses_status_new(monkeypatch):
    class FakeAgg:
        def get_day_view(self, date):
            return {'stocks': [
                {'code': '601985.SH'}, {'code': '300760.SZ'}, {'code': '000063.SZ'}]}
        def calculate_status(self, code, date, view):
            return 'new' if code in ('601985.SH', '300760.SZ') else 'current'
    monkeypatch.setattr(fl, 'views_aggregator', FakeAgg())
    codes = fl.load_new_pool_codes('2026-09-08')
    assert codes == {'601985.SH', '300760.SZ'}


def test_load_new_pool_codes_empty_when_data_missing(monkeypatch):
    class EmptyAgg:
        def get_day_view(self, date):
            return {'stocks': []}
    monkeypatch.setattr(fl, 'views_aggregator', EmptyAgg())
    assert fl.load_new_pool_codes('2026-09-08') == set()


# ─── 3. API GET /api/focus/list ──────────────────────────────

@pytest.fixture
def client():
    app = FastAPI()
    app.include_router(fc.router, prefix='/api')
    return TestClient(app)


def test_api_list_anonymous_all_users(client):
    db.watchlist_set('admin', '601985.SH', '中国核电')
    db.watchlist_set('guest', '000063.SZ', '中兴通讯')
    r = client.get('/api/focus/list', params={'date': '2026-09-08'})
    assert r.status_code == 200
    body = r.json()
    assert body['success'] is True
    data = body['data']
    codes = {m['code'] for m in data['members']}
    assert {'601985.SH', '000063.SZ'} <= codes  # 匿名=全用户自选∪新入池


def test_api_list_logged_in_own_watchlist(client):
    db.watchlist_set('admin', '601985.SH', '中国核电')
    db.watchlist_set('guest', '000063.SZ', '中兴通讯')
    r = client.get('/api/focus/list', params={'date': '2026-09-08'}, headers=_auth('admin'))
    assert r.status_code == 200
    codes = {m['code'] for m in r.json()['data']['members']}
    assert '000063.SZ' not in codes  # 登录=本人自选∪新入池


def test_api_list_scope_param(client):
    db.watchlist_set('admin', '601985.SH', '中国核电')
    r = client.get('/api/focus/list', params={'date': '2026-09-08', 'scope': 'watchlist'},
                   headers=_auth('admin'))
    assert r.json()['data']['scope'] == 'watchlist'
    assert r.json()['data']['total'] >= 1


def test_api_list_invalid_scope_400(client):
    r = client.get('/api/focus/list', params={'date': '2026-09-08', 'scope': 'bogus'})
    assert r.status_code == 400
