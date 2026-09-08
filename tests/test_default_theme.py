# -*- coding: utf-8 -*-
"""V4.8 (R2): 默认主题统一为活力金 vibrant-orange"""
import os

FRONTEND_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")
BACKEND_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    p = os.path.join(BACKEND_ROOT, rel.replace("/", os.sep))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_user_manager_default_theme():
    """user_manager: 新用户/内置用户默认 theme = vibrant-orange"""
    src = _read("backend/user_manager.py")
    assert "vibrant-orange" in src, "user_manager 应含 vibrant-orange"
    assert 'theme: str = "tech-blue"' not in src, "add_user 默认不应再是 tech-blue"


def test_user_config_default_theme():
    """user_config: 用户配置默认 theme = vibrant-orange"""
    src = _read("backend/api/v1/user_config.py")
    assert "vibrant-orange" in src, "user_config 应含 vibrant-orange"
    assert '"theme": "tech-blue"' not in src, "配置默认不应再是 tech-blue"


def test_auth_js_login_fallback():
    """auth.js: 登录后 applyTheme fallback = vibrant-orange"""
    p = os.path.join(FRONTEND_ROOT, "js", "app-logic", "auth.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    assert "vibrant-orange" in src, "auth.js 应含 vibrant-orange fallback"
    assert "tech-blue" not in src, "auth.js 不应再有 tech-blue fallback"


def test_themes_js_startup_default():
    """themes.js: 启动无 saved 时显式默认 vibrant-orange"""
    p = os.path.join(FRONTEND_ROOT, "js", "themes.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    assert "vibrant-orange" in src, "themes.js 应含 vibrant-orange"
    assert "vibrant-orange" in src.split("const saved")[1], "启动兜底应显式 vibrant-orange"
