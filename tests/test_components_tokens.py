# -*- coding: utf-8 -*-
"""
V6.0 (DS-6.0 §2, D1): 基础组件统一层令牌纪律门禁

- components.css 无硬编码色值 (全部经 --qc-* / --el-* token; 例外需 qc-allow-hardcode 标记)
- 组件类齐备 (卡片/KPI/状态点/徽标/chip/空态/错误态/骨架)
- index.html 已引入 components.css 且位于 nav.css 之前
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

COMPONENTS_CSS = os.path.join(FRONTEND, "css", "components.css")
INDEX_HTML = os.path.join(FRONTEND, "index.html")

ALLOW_HARDCODE_MARK = "qc-allow-hardcode"


def _read(p):
    with open(p, encoding="utf-8") as f:
        return f.read()


def _hardcode_color_lines(css):
    hits = []
    for i, line in enumerate(css.splitlines(), 1):
        if ALLOW_HARDCODE_MARK in line:
            continue
        if re.search(r"#[0-9a-fA-F]{3,8}\b", line) or re.search(r"rgba?\(|hsla?\(", line):
            hits.append((i, line.strip()[:80]))
    return hits


def test_components_css_no_hardcode_colors():
    css = _read(COMPONENTS_CSS)
    hits = _hardcode_color_lines(css)
    assert not hits, f"components.css 存在硬编码色值: {hits[:5]}"


def test_components_css_uses_qc_tokens():
    css = _read(COMPONENTS_CSS)
    required_tokens = [
        "--qc-card", "--qc-border", "--qc-radius-large", "--qc-space-4",
        "--qc-muted-foreground", "--qc-primary-500", "--qc-primary-100",
        "--qc-primary-800", "--qc-state-error", "--qc-ring", "--qc-input",
        "--qc-overlay", "--qc-nav-item-hover-bg",
    ]
    missing = [t for t in required_tokens if t not in css]
    assert not missing, f"components.css 未引用必需 token: {missing}"


def test_components_css_has_component_classes():
    css = _read(COMPONENTS_CSS)
    required_classes = [
        ".qc-card", ".qc-kpi", ".qc-status-dot", ".qc-badge",
        ".qc-chip", ".qc-empty", ".qc-error", ".qc-skeleton",
    ]
    missing = [c for c in required_classes if c not in css]
    assert not missing, f"components.css 缺少组件类: {missing}"


def test_index_links_components_css_before_nav():
    idx = _read(INDEX_HTML)
    assert "css/components.css" in idx, "index.html 应引入 components.css"
    comp_pos = idx.index("css/components.css")
    nav_pos = idx.index("css/nav.css")
    assert comp_pos < nav_pos, "components.css 应早于 nav.css 加载"
