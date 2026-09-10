# -*- coding: utf-8 -*-
"""V6.3 (TEST-PLAN 6.3 TC-6.3.2.x): 顶部栏容器化 + 页签圆角 + 命名审计 — L2 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_tab_radius_rectangular():
    """TC-6.3.2.1 (V6.4): 动态页签已移除 — 无 .qc-dynamic-tab 规则; 顶部二级标签 top-tab 圆角为 small(6px) 矩形"""
    nav = _read("css/nav.css")
    header = _read("css/header.css")
    # V6.4: 动态页签组件与样式已整体移除
    assert ".qc-dynamic-tab" not in nav, "nav.css 不应再含动态页签规则"
    assert ".qc-dynamic-tab" not in header, "header.css 不应再含动态页签规则"
    # 保留的顶部二级标签: 圆角矩形 (small, 非胶囊)
    for m in re.finditer(r"\.qc-top-tab(?![-\w])[^{]*\{([^}]*)\}", header):
        block = m.group(1)
        if "border-radius" in block:
            assert "--qc-radius-small" in block, \
                f"header.css 顶部标签 border-radius 应为 small: {block.strip()}"
            assert "--qc-radius-full" not in block, \
                f"顶部标签不应使用胶囊: {block.strip()}"


def test_header_rounded_and_gap():
    """TC-6.3.2.2/3: Header 圆角矩形 + 与工作区 12px 间隙"""
    header = _read("css/header.css")
    # 主规则块含圆角与下边距
    m = re.search(r"\.qc-header\s*\{([^}]*)\}", header)
    assert m, ".qc-header 主规则缺失"
    block = m.group(1)
    assert "--qc-radius-large" in block, "Header 应使用 large 圆角"
    assert "margin-bottom" in block, "Header 应与下方工作区留出间隙 (margin-bottom)"
    assert "--qc-space-3" in block, "间隙应为 12px token (space-3)"
    # 移动端贴边覆盖
    assert "border-radius: 0" in header, "移动端 (<768) Header 应贴边圆角归零"


def test_subpage_names_complete():
    """TC-6.3.2.4: subPageNames 完整性 — allMenuDefs 全量 subPages 零遗漏"""
    src = _read("js/app-logic.js")
    # 收集 allMenuDefs 中全部 subPages / guestSubPages 裸 key
    sub_pages = set()
    for m in re.finditer(r"(?:subPages|guestSubPages):\s*\[([^\]]*)\]", src):
        for k in re.findall(r"'([^']+)'", m.group(1)):
            sub_pages.add(k)
    assert sub_pages, "应能提取 allMenuDefs 的 subPages"
    # 提取 subPageNames 对象块
    m = re.search(r"const subPageNames = \{(.*?)\};", src, re.S)
    assert m, "subPageNames 对象缺失"
    names_block = m.group(1)
    named_keys = set(re.findall(r"'([^']+)':", names_block))
    missing = sorted(k for k in sub_pages if k not in named_keys)
    assert not missing, f"subPageNames 漏配: {missing}"
    # 关键回归: evaluation-analysis 已补配且为中文
    assert "'evaluation-analysis': '评估分析'" in names_block, "evaluation-analysis 应显示「评估分析」"
