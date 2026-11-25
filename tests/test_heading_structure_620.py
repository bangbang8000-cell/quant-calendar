# -*- coding: utf-8 -*-
"""6.2.0 (F6): 标题层级门禁 — 页面大纲 h1 单点 + 弹窗 h2

方案: Header.vue 提供可视隐藏 <h1> (当前页面名), 业务页不再散落 h 标签;
详情弹窗 (stock/index/merrill) 标题 h3 → h2, 形成「页面 h1 → 浮层 h2」两级大纲。
"""
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    # 6.3.0 结构分治: 页面模板下沉子目录 — 可重建的走页源码重建（模板引用还原为字面量）
    _b = page_source.bundle(rel)
    if _b is not None:
        return _b
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def test_header_has_single_h1():
    """页面大纲 h1 单点 — v7.17 (FR-201/D-06) 起语义 h1 统一到 .qc-page-head
    (index.html 页头面包屑), Header.vue 不再持有 h1 (V5 顶栏原可视隐藏 h1 已改 p)"""
    header = _read("src/components/Header.vue")
    assert len(re.findall(r"<h1[ >]", header)) == 0, "Header.vue 不应再含 h1 (语义 h1 已下沉页头)"
    idx = _read("index.html")
    h1s = re.findall(r"<h1[ >]", idx)
    assert len(h1s) == 1, f"index.html 页头应恰有 1 个语义 h1, 实际 {len(h1s)}"
    assert "qc-page-head" in idx, "h1 应位于 .qc-page-head 页头块内"


def test_detail_dialogs_use_h2_not_h3():
    """详情弹窗标题应为 h2, 无 h3 残留"""
    for rel in ("js/components/dialogs/stock-detail.js",
                "js/components/dialogs/index-detail.js",
                "js/components/dialogs/merrill-detail.js"):
        src = _read(rel)
        assert "<h2" in src, f"{rel} 应含 h2 标题"
        assert "<h3" not in src, f"{rel} 不应残留 h3"


def test_page_components_no_h1():
    """业务页面组件模板不应新增 h1 (大纲单点在 Header)"""
    for name in ("strategies-page", "calendar-page", "ai-page", "system-page",
                 "research-page", "shortterm-page"):
        rel = f"js/components/{name}.js"
        if not os.path.exists(os.path.join(FRONTEND, rel)):
            continue
        src = _read(rel)
        tmpl = re.search(r"template:\s*`([^`]*)`", src, re.DOTALL)
        if tmpl:
            assert "<h1" not in tmpl.group(1), f"{rel} 模板不应含 h1 (大纲由 Header 提供)"


def test_visually_hidden_utility_exists():
    """components.css 应含 .visually-hidden 工具类"""
    css = _read("css/components.css")
    assert ".visually-hidden" in css
    assert "clip: rect(0, 0, 0, 0)" in css, "标准 sr-only 裁剪实现"
