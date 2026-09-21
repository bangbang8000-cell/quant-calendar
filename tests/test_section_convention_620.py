# -*- coding: utf-8 -*-
"""6.2.0 (F5): 全局分区约定门禁 — page-section / page-section-title

背景: 小节标题散落 5 种写法 (section-title / section-title-base / health-section-title /
usage-card-title / card-title)。引入统一约定类供新页遵循, 示范迁移 stock-detail 一处。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_section_convention_classes_defined():
    """components.css 应定义 .page-section 与 .page-section-title 约定类"""
    css = _read("css/components.css")
    assert ".page-section {" in css, "应定义 .page-section"
    assert ".page-section-title {" in css, "应定义 .page-section-title"


def test_section_title_uses_base_font():
    """约定类字号应走 base(14px) 标尺 (与既有 .section-title 视觉一致, 不放大)"""
    css = _read("css/components.css")
    m = re.search(r"\.page-section-title \{([^}]*)\}", css)
    assert m and "var(--qc-font-size-base)" in m.group(1), "page-section-title 应用 base 字号"


def test_convention_adopted_in_components():
    """至少一处页面/组件已采用约定类 (示范迁移生效)"""
    src = _read("js/components/dialogs/stock-detail.js")
    assert "page-section-title" in src, "stock-detail 应已采用 page-section-title 约定"


def test_convention_uses_semantic_tokens():
    """约定类颜色/间距走语义 token (--text-primary / --border-light / --qc-space-*)"""
    css = _read("css/components.css")
    assert "var(--text-primary)" in css
    assert "var(--border-light)" in css
    assert "var(--qc-space-" in css
