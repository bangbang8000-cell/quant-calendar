# -*- coding: utf-8 -*-
"""6.2.1 (F3): 菜单一致化门禁 — 导航高度/字号标尺 token 化

方案: --qc-nav-item-h(40px 一级) / --qc-nav-subitem-h(36px 二级) 标尺,
导航项高度/字号一律走 token (层级区分保留, 同类一致)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _block(src, cls):
    m = re.search(re.escape(cls) + r"\s*\{([^}]*)\}", src)
    return m.group(1) if m else ""


def test_nav_height_tokens_defined():
    """tokens 应定义导航高度标尺"""
    tokens = _read("css/tokens.css")
    assert "--qc-nav-item-h: 40px" in tokens, "一级 40px 标尺"
    assert "--qc-nav-subitem-h: 36px" in tokens, "二级 36px 标尺"


def test_nav_item_heights_use_tokens():
    """基础导航类高度应引用 token (无 40/36px 硬编码)"""
    nav = _read("css/nav.css")
    for cls in (".qc-sidebar-item", ".qc-sidebar-item.qc-sidebar-child",
                ".qc-subnav-tab", ".qc-subnav-item"):
        block = _block(nav, cls)
        assert block, f"应存在 {cls}"
        assert "var(--qc-nav" in block, f"{cls} 高度应引用导航标尺"
        assert not re.search(r"height:\s*(40|36)px", block), f"{cls} 不应硬编码高度"


def test_top_tab_uses_token():
    """顶部二级页签高度引用 token"""
    header = _read("css/header.css")
    block = _block(header, ".qc-top-tabs-scroll .qc-top-tab")
    assert "var(--qc-nav-subitem-h)" in block, "qc-top-tab 应引用二级标尺"


def test_nav_font_sizes_use_tokens():
    """导航字号走标尺 (base/sm)"""
    nav = _read("css/nav.css")
    assert "var(--qc-font-size-base)" in _block(nav, ".qc-sidebar-link"), "sidebar-link 应 base 字号"
    assert "var(--qc-font-size-sm)" in _block(nav, ".qc-sidebar-item.qc-sidebar-child"), "二级应 sm 字号"
