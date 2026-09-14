# -*- coding: utf-8 -*-
"""V5.15 (PRD-v5.15 F6): 顶部二级菜单溢出优化 — 「更多▾」下拉 + 左右滚动按钮。

覆盖 TC-5.15.61~.64:
- TopTabs 溢出检测 (ResizeObserver + hasOverflow)
- hiddenTabs 计算 (被裁切标签) + 「更多」下拉导航
- scrollByStep 左右滚动 + 边界禁用
- header.css 含按钮/下拉样式
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_toptabs_overflow_detection():
    """TC-5.15.61: TopTabs 含 ResizeObserver + hasOverflow + scrollRef"""
    src = _read_f("src/components/TopTabs.vue")
    assert "ResizeObserver" in src, "应使用 ResizeObserver 监听溢出"
    assert "hasOverflow" in src, "应含 hasOverflow 状态"
    assert "scrollRef" in src or "navRef" in src, "应含滚动容器引用"


def test_toptabs_hidden_tabs():
    """TC-5.15.62: hiddenTabs 计算 (被裁切标签) + 更多下拉"""
    src = _read_f("src/components/TopTabs.vue")
    assert "hiddenTabs" in src, "应计算 hiddenTabs"
    assert "更多" in src, "应提供「更多」入口文案"
    assert "el-dropdown" in src or "qc-dropdown" in src or "dropdown" in src, "应使用下拉组件"


def test_toptabs_scroll_buttons():
    """TC-5.15.63: scrollByStep 滚动 + 边界禁用"""
    src = _read_f("src/components/TopTabs.vue")
    assert "scrollByStep" in src or "scrollBy" in src, "应含步进滚动函数"
    assert "canScrollLeft" in src and "canScrollRight" in src, "应含左右边界状态"


def test_header_css_overflow_controls():
    """TC-5.15.64: header.css 含滚动按钮与更多容器样式"""
    css = _read_f("css/header.css")
    assert ".qc-top-tabs-btn" in css, "应定义滚动/更多按钮样式类"
    assert ".qc-top-tabs-more" in css, "应定义「更多」容器样式类"


def test_tabs_scroll_kbd():
    """TC-5.15.65: 标签条键盘 ←/→ 滚动"""
    src = _read_f("src/components/TopTabs.vue")
    assert "ArrowLeft" in src and "ArrowRight" in src, "应支持 ←/→ 键滚动"
