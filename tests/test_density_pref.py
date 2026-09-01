# -*- coding: utf-8 -*-
"""V5.6 (T-5.6.4): 信息密度偏好测试 (TEST-PLAN 7.1 test_density_pref.py)

- 后端: info_density 偏好键默认/存取 (preferences.json)
- 前端: preferences.js 键/值枚举 + data-density 应用 + CSS compact 规则
"""
import json
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


@pytest.fixture
def prefs_backend(tmp_path):
    sys.path.insert(0, os.path.join(BASE, "backend"))
    from api.v1 import user_config as uc
    old = uc.BASE_USERS_DIR
    uc.BASE_USERS_DIR = str(tmp_path)
    yield uc
    uc.BASE_USERS_DIR = old


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


# ─── 后端 ─────────────────────────────────────────────────────

def test_backend_default_has_info_density(prefs_backend):
    assert prefs_backend.PREFERENCE_DEFAULTS.get("info_density") == "comfortable"


def test_backend_save_get_roundtrip(prefs_backend):
    assert prefs_backend.save_user_preferences("alice", {"info_density": "compact"})
    assert prefs_backend.get_user_preferences("alice")["info_density"] == "compact"


def test_backend_invalid_value_rejected(prefs_backend):
    """值校验: 非法密度值拒绝 (save_user_preferences 丢弃非法值)"""
    prefs_backend.save_user_preferences("alice", {"info_density": "huge"})
    assert prefs_backend.get_user_preferences("alice")["info_density"] == "comfortable"


# ─── 前端 ─────────────────────────────────────────────────────

def test_frontend_has_density_key():
    src = _read(os.path.join("js", "preferences.js"))
    assert "info_density" in src


def test_frontend_density_values():
    src = _read(os.path.join("js", "preferences.js"))
    assert "compact" in src and "comfortable" in src


def test_frontend_applies_data_density():
    src = _read(os.path.join("js", "preferences.js"))
    assert "data-density" in src or "setAttribute('data-density'" in src


def test_css_has_compact_density_rules():
    css = _read(os.path.join("css", "themes.css"))
    assert '[data-density="compact"]' in css
