# -*- coding: utf-8 -*-
"""V6.2 (TEST-PLAN 6.2 TC-6.2.x): 导航与界面细节收口 — L1 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_subnav_icons_double_map():
    """TC-6.2.1a: SubNav 二级图标为双层映射 (page → subPage → icon), 覆盖全部一级页"""
    src = _read("src/components/SubNav.vue")
    for page in ("'strategies'", "'calendar'", "'ai'", "'research'", "'shortterm'"):
        assert page in src, f"SUB_ICONS 应含 {page} 一级映射"
    assert "subIcon(page, sp)" in src or "SUB_ICONS[page]" in src, "应为双层查找"
    assert "circle-dot" in src, "未命中回退 circle-dot 应保留"


def test_appicon_whitelist_extended():
    """TC-6.2.1b: AppIcon 白名单含二级图标新增 5 个"""
    src = _read("src/components/common/AppIcon.vue")
    for name in ("'star'", "'message-circle'", "'calendar-days'", "'calendar-range'", "'calendar-check'"):
        assert name in src, f"AppIcon 白名单应含 {name}"


def test_breadcrumb_removed():
    """TC-6.2.2: Header 面包屑移除; 工作区不再挂载页签"""
    header = _read("src/components/Header.vue")
    assert "qc-breadcrumb" not in header, "Header.vue 不应再含面包屑"
    assert "breadcrumbs" not in header, "Header.vue 不应再有 breadcrumbs"
    assert "qc-header-tabs" in header, "Header 应承载动态页签 (qc-header-tabs)"
    idx = _read("index.html")
    assert "<qc-dynamic-tabs>" not in idx, "index.html 工作区不应再挂载页签"


def test_tab_dom_no_nested():
    """TC-6.2.3: 页签 role=tab 为 div; 关闭为独立 button; 无嵌套交互元素"""
    src = _read("src/components/DynamicTabs.vue")
    assert 'role="tab"' in src, "页签应保留 role=tab"
    assert '<div' in src and 'class="qc-dynamic-tab"' in src, "页签主体应为 div"
    assert 'class="qc-dynamic-tab-close" type="button"' in src, "关闭应为独立 button"
    assert 'button[role="tab"]' not in src, "不应为 button 承载 tab"
    # Teleport 右键菜单
    assert "qc-tab-ctx" in src, "应有页签右键菜单"
    assert "draggable" in src, "应有拖拽排序"


def test_stocklist_registered():
    """TC-6.2.4: StockList 组件注册; 入口使用"""
    main = _read("src/main.js")
    assert "StockList" in main, "main.js 应注册 StockList"
    assert "StockList.vue" in main, "main.js 应导入 StockList.vue"
    strategies = _read("js/components/strategies-page.js")
    assert "qc-stock-list" in strategies, "策略总览应使用 StockList"
    calendar = _read("js/components/calendar-page.js")
    assert "qc-stock-row" in calendar, "日历股票池行应对齐 qc-stock-row"
