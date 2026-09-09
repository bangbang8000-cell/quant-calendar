# -*- coding: utf-8 -*-
"""
V6.0 (TEST-PLAN 6.0 TC-6.1): 导航系统令牌纪律门禁

- nav.css / header.css 无硬编码色值 (全部经 --qc-* token)
- 导航组件 SFC 存在且包含必需结构 (qc-* 类名 + --qc-* token 引用)
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

NAV_CSS = os.path.join(FRONTEND, "css", "nav.css")
HEADER_CSS = os.path.join(FRONTEND, "css", "header.css")
SRC_COMPONENTS = os.path.join(FRONTEND, "src", "components")

# 允许的硬编码例外: 注释标记 qc-allow-hardcode 所在行
ALLOW_HARDCODE_MARK = "qc-allow-hardcode"


def _read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def _hardcode_color_lines(css):
    """扫描硬编码色值行 (跳过 qc-allow-hardcode 标记行)"""
    hits = []
    for i, line in enumerate(css.splitlines(), 1):
        if ALLOW_HARDCODE_MARK in line:
            continue
        if re.search(r"#[0-9a-fA-F]{3,8}\b", line) or re.search(r"rgba?\(|hsla?\(", line):
            hits.append((i, line.strip()[:80]))
    return hits


def test_nav_css_no_hardcode_colors():
    css = _read(NAV_CSS)
    hits = _hardcode_color_lines(css)
    assert not hits, f"nav.css 存在硬编码色值: {hits[:5]}"


def test_header_css_no_hardcode_colors():
    css = _read(HEADER_CSS)
    hits = _hardcode_color_lines(css)
    assert not hits, f"header.css 存在硬编码色值: {hits[:5]}"


def test_nav_css_uses_qc_tokens():
    css = _read(NAV_CSS)
    required_tokens = [
        "--qc-nav-bg", "--qc-nav-border", "--qc-nav-item-default",
        "--qc-nav-item-active", "--qc-nav-item-active-bg", "--qc-nav-item-active-border",
        "--qc-nav-group-label", "--qc-nav-badge-bg",
        "--qc-sidebar-width", "--qc-sidebar-collapsed-width",
        "--qc-subnav-width", "--qc-mobile-nav-height",
    ]
    missing = [t for t in required_tokens if t not in css]
    assert not missing, f"nav.css 未引用必需 token: {missing}"


def test_sfc_components_exist():
    for name in ("Sidebar.vue", "Header.vue", "SubNav.vue", "MobileNav.vue"):
        p = os.path.join(SRC_COMPONENTS, name)
        assert os.path.exists(p), f"缺少 SFC 组件: {name}"
        src = _read(p)
        assert "<template>" in src, f"{name} 缺少 <template> 块"


def test_sfc_components_use_qc_tokens_and_aria():
    for name, cls, aria in (
        ("Sidebar.vue", "qc-sidebar", "aria-current"),
        ("Header.vue", "qc-header", "aria-label"),
        ("SubNav.vue", "qc-subnav", "aria-selected"),
        ("MobileNav.vue", "qc-mobile-nav", "aria-current"),
    ):
        src = _read(os.path.join(SRC_COMPONENTS, name))
        assert cls in src, f"{name} 缺少类名 {cls}"
        assert aria in src, f"{name} 缺少 ARIA 属性 {aria}"
        assert "--qc-" in src or 'AppIcon' in src, f"{name} 未使用 qc token / 图标封装"
