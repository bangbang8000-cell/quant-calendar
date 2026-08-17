#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v3.17.10 (FR-3.17.10): 个性化偏好后端单测
- 偏好 set/get、重启保持（新请求读回）
- 非法键拒绝、空偏好拒绝
- 游客（未登录）读写降级（401）
- 默认值回落
- saveAllConfig 不得覆盖已存偏好
"""
import os
import sys
import tempfile
import shutil

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

# 固定 SECRET_KEY 保证 token 可复现（与 conftest 环境一致）
import config  # noqa: E402
config.settings.SECRET_KEY = 'test-secret-preferences-key'

import api.v1.user_config as uc  # noqa: E402
from fastapi import FastAPI  # noqa: E402
from fastapi.testclient import TestClient  # noqa: E402
from auth import create_access_token  # noqa: E402


@pytest.fixture
def pref():
    """重定向用户配置目录，提供 make_client() 工厂（模拟多请求/重启）"""
    old_dir = uc.BASE_USERS_DIR
    tmp = tempfile.mkdtemp()
    uc.BASE_USERS_DIR = tmp

    def make_client():
        app = FastAPI()
        app.include_router(uc.router, prefix='/user')
        return TestClient(app)

    yield make_client
    uc.BASE_USERS_DIR = old_dir
    shutil.rmtree(tmp, ignore_errors=True)


def _auth(username='admin'):
    role = 'admin' if username == 'admin' else 'user'
    token = create_access_token({'sub': username, 'role': role})
    return {'Authorization': f'Bearer {token}'}


class TestUserPreferences:
    def test_defaults_when_never_set(self, pref):
        """未设置任何偏好时返回默认值（default_view/theme/chart_period）"""
        c = pref()
        r = c.get('/user/preferences', headers=_auth('admin'))
        assert r.status_code == 200
        body = r.json()
        assert body['success'] is True
        assert body['preferences'] == {
            'default_view': 'strategies',
            'theme': 'system',
            'chart_period': 'daily',
        }

    def test_set_single_preference(self, pref):
        """POST 单个偏好键生效并可读回"""
        c = pref()
        r = c.post('/user/preferences', headers=_auth('admin'),
                   json={'preferences': {'default_view': 'calendar'}})
        assert r.status_code == 200
        assert r.json()['preferences']['default_view'] == 'calendar'
        assert r.json()['preferences']['theme'] == 'system'  # 未覆盖键保持默认

    def test_set_multiple_preferences(self, pref):
        """POST 多个偏好键一并生效"""
        c = pref()
        r = c.post('/user/preferences', headers=_auth('admin'),
                   json={'preferences': {'default_view': 'calendar', 'theme': 'dark', 'chart_period': 'weekly'}})
        assert r.status_code == 200
        assert r.json()['preferences'] == {
            'default_view': 'calendar', 'theme': 'dark', 'chart_period': 'weekly',
        }

    def test_restart_keep_new_client(self, pref):
        """重启保持：新请求（新 TestClient 实例）读回此前设置"""
        c1 = pref()
        r1 = c1.post('/user/preferences', headers=_auth('admin'),
                     json={'preferences': {'theme': 'dark', 'chart_period': 'monthly'}})
        assert r1.status_code == 200
        c2 = pref()  # 模拟服务重启后的新连接
        r2 = c2.get('/user/preferences', headers=_auth('admin'))
        assert r2.status_code == 200
        p = r2.json()['preferences']
        assert p['theme'] == 'dark'
        assert p['chart_period'] == 'monthly'

    def test_restart_keep_config_file(self, pref):
        """重启保持：偏好落盘到 data/users/<user>/preferences.json"""
        c = pref()
        c.post('/user/preferences', headers=_auth('admin'),
               json={'preferences': {'default_view': 'ai'}})
        prefs_path = os.path.join(uc.BASE_USERS_DIR, 'admin', 'preferences.json')
        assert os.path.exists(prefs_path)
        import json as _json
        with open(prefs_path, encoding='utf-8') as f:
            saved = _json.load(f)
        assert saved.get('default_view') == 'ai'

    def test_illegal_key_rejected(self, pref):
        """非法偏好键（非三键之一）返回 400"""
        c = pref()
        r = c.post('/user/preferences', headers=_auth('admin'),
                   json={'preferences': {'evil_key': 'x'}})
        assert r.status_code == 400
        assert '非法偏好键' in r.json()['detail']

    def test_partial_illegal_key_rejected(self, pref):
        """含非法键的混合提交整体拒绝（不做部分写入）"""
        c = pref()
        r = c.post('/user/preferences', headers=_auth('admin'),
                   json={'preferences': {'theme': 'dark', 'bad': '1'}})
        assert r.status_code == 400
        # 合法键也不应被写入
        g = c.get('/user/preferences', headers=_auth('admin'))
        assert g.json()['preferences']['theme'] == 'system'

    def test_empty_preferences_rejected(self, pref):
        """空偏好提交返回 400"""
        c = pref()
        r = c.post('/user/preferences', headers=_auth('admin'), json={'preferences': {}})
        assert r.status_code == 400
        r2 = c.post('/user/preferences', headers=_auth('admin'), json={})
        assert r2.status_code == 400

    def test_guest_unauthorized_read(self, pref):
        """游客（未登录）读偏好 → 401（前端降级 localStorage）"""
        c = pref()
        r = c.get('/user/preferences')
        assert r.status_code == 401

    def test_guest_unauthorized_write(self, pref):
        """游客（未登录）写偏好 → 401（前端降级 localStorage）"""
        c = pref()
        r = c.post('/user/preferences', json={'preferences': {'theme': 'dark'}})
        assert r.status_code == 401

    def test_per_user_isolation(self, pref):
        """偏好按用户隔离：admin 设置不影响其他用户读取"""
        c = pref()
        c.post('/user/preferences', headers=_auth('admin'),
               json={'preferences': {'default_view': 'calendar'}})
        # 新用户（不存在也可读默认值）隔离
        r = c.get('/user/preferences', headers=_auth('guest'))
        assert r.status_code == 200
        assert r.json()['preferences']['default_view'] == 'strategies'

    def test_preferences_file_persisted(self, pref):
        """偏好独立文件持久化：写接口后 preferences.json 含全部已设键"""
        c = pref()
        c.post('/user/preferences', headers=_auth('admin'),
               json={'preferences': {'chart_period': 'weekly'}})
        prefs_path = os.path.join(uc.BASE_USERS_DIR, 'admin', 'preferences.json')
        assert os.path.exists(prefs_path)
        import json as _json
        with open(prefs_path, encoding='utf-8') as f:
            saved = _json.load(f)
        assert saved['chart_period'] == 'weekly'

    def test_save_all_config_preserves_preferences(self, pref):
        """saveAllConfig（POST /user/config，不含 preferences）不得覆盖已存偏好"""
        c = pref()
        c.post('/user/preferences', headers=_auth('admin'),
               json={'preferences': {'theme': 'dark'}})
        r = c.post('/user/config', headers=_auth('admin'),
                   json={'config': {'theme': 'tech-blue', 'research_menu_enabled': True}})
        assert r.status_code == 200
        g = c.get('/user/preferences', headers=_auth('admin'))
        assert g.json()['preferences']['theme'] == 'dark'
