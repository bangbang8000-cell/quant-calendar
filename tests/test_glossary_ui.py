# -*- coding: utf-8 -*-
"""术语表 UI 打磨门禁

1. 术语表应有专用二级菜单图标 (SUB_ICONS system.glossary → book-open)
2. 「关于」恒置于系统配置二级菜单最后
3. 术语表页加载失败显示错误态 (非误导空态) 且可重试
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_glossary_icon_in_subnav():
    """SubNav 二级图标应含 glossary → book-open (专用图标)"""
    src = _read("src/components/SubNav.vue")
    assert re.search(r"'glossary':\s*'book-open'", src), "SubNav 应映射 glossary → book-open"


def test_glossary_icon_in_toptabs():
    """TopTabs 二级图标应含 glossary → book-open (双份同步)"""
    src = _read("src/components/TopTabs.vue")
    assert re.search(r"'glossary':\s*'book-open'", src), "TopTabs 应映射 glossary → book-open"


def test_about_is_last_subpage():
    """系统配置 subPages 应以 'about' 结尾 (关于恒置最后)"""
    src = _read("js/app-logic.js")
    m = re.search(r"key: 'system'[^}]*subPages:\s*\[([^\]]*)\]", src)
    assert m, "应找到 system 菜单定义"
    subpages = [s.strip().strip("'\"") for s in m.group(1).split(",")]
    assert subpages[-1] == "about", f"关于应恒在最后, 实际末尾: {subpages[-1]}"
    assert "glossary" in subpages, "术语表应在菜单中"


def test_glossary_page_error_state():
    """术语表页应有加载失败错误态与重试"""
    src = _read("src/components/common/GlossaryPage.vue")
    assert "loadError" in src, "应有 loadError 状态"
    assert "reload" in src, "应有重试入口"
    assert "术语数据加载失败" in src, "应有明确错误文案"
