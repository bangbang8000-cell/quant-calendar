# -*- coding: utf-8 -*-
"""V5.4.1 (用户要求): 分钟级K线显示开关 (kline_show_minutes) 测试

用户要求: 股票弹窗先移除分钟级K线 (60/30/15min), 支持配置界面隐藏。
实现: 新增偏好键 kline_show_minutes (hide/show, 默认 hide) —
  - 后端: user_config PREFERENCE_DEFAULTS/ALLOWED_VALUES 支持该键并持久化
  - 前端: preferences.js 注册该键; app-logic.js klinePeriods 按偏好计算
    (默认不含分钟周期, show 时追加 60/30/15min)
"""
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

def test_backend_default_hidden(prefs_backend):
    """默认隐藏: kline_show_minutes 默认 'hide' (弹窗不展示分钟级K线)"""
    assert prefs_backend.PREFERENCE_DEFAULTS.get("kline_show_minutes") == "hide"


def test_backend_allowed_values(prefs_backend):
    """合法取值 hide/show 齐备"""
    allowed = prefs_backend.PREFERENCE_ALLOWED_VALUES.get("kline_show_minutes")
    assert allowed is not None and {"hide", "show"} <= set(allowed)


def test_backend_save_get_roundtrip(prefs_backend):
    """show 持久化并读回"""
    assert prefs_backend.save_user_preferences("alice", {"kline_show_minutes": "show"})
    assert prefs_backend.get_user_preferences("alice")["kline_show_minutes"] == "show"


def test_backend_invalid_value_rejected(prefs_backend):
    """非法值丢弃, 保持默认 hide"""
    prefs_backend.save_user_preferences("alice", {"kline_show_minutes": "sometimes"})
    assert prefs_backend.get_user_preferences("alice")["kline_show_minutes"] == "hide"


# ─── 前端 ─────────────────────────────────────────────────────

def test_frontend_has_minutes_pref_key():
    """preferences.js 注册 kline_show_minutes 键 (hide/show)"""
    src = _read(os.path.join("js", "preferences.js"))
    assert "kline_show_minutes" in src
    assert "'hide'" in src and "'show'" in src


def test_frontend_kline_periods_reactive():
    """app-logic.js klinePeriods 按 klineShowMinutes 偏好计算 (默认不含分钟周期)"""
    src = _read(os.path.join("js", "app-logic.js"))
    # 分钟周期仍在(可开启), 但仅在偏好 show 时加入
    assert "kline_show_minutes" in src
    assert "klineShowMinutes" in src
    assert "60分钟" in src and "30分钟" in src and "15分钟" in src
    # 默认隐藏: 偏好读取 show 才启用
    assert "kline_show_minutes === 'show'" in src


def test_frontend_qcstate_exposes_toggle():
    """qcState 暴露 klineShowMinutes + toggleKlineShowMinutes (系统设置开关)"""
    src = _read(os.path.join("js", "app-logic.js"))
    assert "klineShowMinutes, toggleKlineShowMinutes" in src


def test_system_page_has_toggle_card():
    """系统设置页含分钟级K线显示开关卡片"""
    src = _read(os.path.join("js", "components", "system-page.js"))
    assert "klineShowMinutes" in src
    assert "toggleKlineShowMinutes" in src
    assert "显示分钟级K线" in src
