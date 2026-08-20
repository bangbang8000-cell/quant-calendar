# -*- coding: utf-8 -*-
"""
V4.4 (FR-4.4.6): 可访问性与品牌门禁

- WCAG 1.4.4 (Resize text): viewport 不得禁止用户缩放(user-scalable=no/maximum-scale=1)
- 品牌一致: 登录区品牌元素 + manifest + 主题色 meta
- 访客入口: 登录页提供访客登录(handleGuestLogin)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_viewport_allows_zoom():
    """WCAG 1.4.4: 禁止 user-scalable=no / maximum-scale 锁定"""
    idx = _read("index.html")
    m = re.search(r'<meta[^>]*name="viewport"[^>]*>', idx)
    assert m, "viewport meta 缺失"
    vp = m.group(0)
    assert "user-scalable=no" not in vp, "viewport 禁止缩放(WCAG 1.4.4 违规)"
    assert "maximum-scale" not in vp, "viewport 锁定最大缩放(WCAG 1.4.4 违规)"


def test_brand_elements_present():
    """品牌一致: 登录区品牌 + manifest + 主题色"""
    idx = _read("index.html")
    assert "login-brand" in idx, "登录页应有品牌区"
    assert "login-subtitle" in idx, "登录页应有副标题"
    assert 'rel="manifest"' in idx, "应引用 manifest"
    assert 'name="theme-color"' in idx, "应有 theme-color meta"


def test_guest_entry_available():
    """访客入口: 登录页支持访客登录"""
    idx = _read("index.html")
    assert "guest" in idx.lower(), "登录页应有访客入口文案"
    auth = open(os.path.join(FRONTEND, "js", "app-logic", "auth.js"), encoding="utf-8").read()
    assert "handleGuestLogin" in auth, "auth 域应提供 handleGuestLogin"
