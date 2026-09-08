# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.4.1 / FR-5.3.4.1): 前端源码体积预算门禁

项目为零构建架构 (backend 直接 serve frontend/ 源码, dist 非部署物)。
体积预算作用于源码 JS: 主逻辑文件 app-logic.js 与总 JS 体量设上限,
防无节制膨胀导致首屏/加载退化。
"""
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS_DIR = os.path.join(BASE, "frontend", "js")

# 预算 (字节): 主逻辑文件 ≤ 80KB; 源码 JS 总量 ≤ 1.3MB (当前 ~1.13MB, 含按需组件/locales)
MAIN_LOGIC_BUDGET = 80 * 1024
TOTAL_JS_BUDGET = 1300 * 1024


def _js_files():
    for root, _, files in os.walk(JS_DIR):
        for f in files:
            if f.endswith(".js"):
                yield os.path.join(root, f)


def test_main_logic_budget():
    """app-logic.js (主逻辑) 不超过预算"""
    p = os.path.join(JS_DIR, "app-logic.js")
    size = os.path.getsize(p)
    assert size <= MAIN_LOGIC_BUDGET, f"app-logic.js 超预算: {size} > {MAIN_LOGIC_BUDGET}"


def test_total_js_budget():
    """frontend/js 源码 JS 总量不超过预算"""
    total = sum(os.path.getsize(p) for p in _js_files())
    assert total <= TOTAL_JS_BUDGET, f"源码 JS 总量超预算: {total} > {TOTAL_JS_BUDGET}"


def test_no_generated_bundle_in_src():
    """frontend/js 不应含构建产物 (dist 已剥离, 源码保持可读)"""
    bad = [p for p in _js_files() if "min" in os.path.basename(p) or "vendor" in os.path.basename(p)]
    assert not bad, f"源码目录出现疑似构建产物: {bad}"


def test_lazy_pages_are_separate_files():
    """懒加载页面组件保持独立文件 (非全量塞入主逻辑)"""
    for name in ("ai-page", "research-page", "shortterm-page", "system-page", "calendar-page"):
        p = os.path.join(JS_DIR, "components", name + ".js")
        assert os.path.exists(p), f"懒加载页面 {name} 应为独立组件文件"
