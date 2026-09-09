# -*- coding: utf-8 -*-
"""V6.0 (DS-6.0 §1.2): 默认主题统一为克制金 gold"""
import os

FRONTEND_ROOT = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), "frontend")
BACKEND_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    p = os.path.join(BACKEND_ROOT, rel.replace("/", os.sep))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_user_manager_default_theme():
    """user_manager: 新用户/内置用户默认 theme = gold"""
    src = _read("backend/user_manager.py")
    assert '"gold"' in src, "user_manager 应含 gold 默认主题"
    assert 'theme: str = "vibrant-orange"' not in src, "add_user 默认不应再是 vibrant-orange"


def test_user_config_default_theme():
    """user_config: 用户配置默认 theme = gold"""
    src = _read("backend/api/v1/user_config.py")
    assert '"gold"' in src, "user_config 应含 gold 默认主题"
    assert '"theme": "vibrant-orange"' not in src, "配置默认不应再是 vibrant-orange"


def test_auth_js_login_fallback():
    """auth.js: 登录后 applyTheme fallback = gold"""
    p = os.path.join(FRONTEND_ROOT, "js", "app-logic", "auth.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    assert "'gold'" in src, "auth.js 应含 gold fallback"
    assert "vibrant-orange" not in src, "auth.js 不应再有 vibrant-orange fallback"


def test_themes_js_startup_default():
    """V6.1 (PRD-6.1 F5): themes.js 新模型 — 金色为默认色相(45), 旧 8 主题经 LEGACY_MAP 迁移"""
    p = os.path.join(FRONTEND_ROOT, "js", "themes.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    assert "'gold'" in src, "themes.js 应含 gold (旧主题兼容)"
    assert "const LEGACY_MAP" in src, "themes.js 应含旧主题迁移映射"
    # 金色 → light/45 (默认色相)
    assert "'gold':" in src and "['light', 45]" in src, "gold 应映射为 light/45"
    # 启动默认: 无偏好时色相回退 45 (金色)
    assert "hue == null) hue = 45" in src, "启动默认色相应为 45 (金色)"
