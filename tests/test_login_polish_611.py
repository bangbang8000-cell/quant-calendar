# -*- coding: utf-8 -*-
"""6.1.3 (C5): 登录页视觉升级 — 双栏结构 + 版本号展示 (基础重塑于 V5.12.0)"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
INDEX = (ROOT / "frontend" / "index.html").read_text(encoding="utf-8")


def test_login_dual_column_structure():
    assert "login-brand-text" in INDEX, "缺品牌文字区 (左栏)"
    assert "login-form-pane" in INDEX, "缺表单区 (右栏)"
    assert "login-brand-bar" in INDEX, "缺品牌渐变条"


def test_login_hero_content():
    assert "login.title" in INDEX
    assert "login.subtitle" in INDEX
    assert "login.desc" in INDEX


def test_login_version_display():
    assert "login-version" in INDEX, "登录页缺版本号展示"
    assert "appVersion" in INDEX


def test_login_guest_secondary_button():
    assert "login-guest-btn" in INDEX, "访客登录应为次要按钮"
