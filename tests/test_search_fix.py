# -*- coding: utf-8 -*-
"""V4.8.1 (搜索修复): keys.js onSearchSelect 不依赖 window.QuantCommandPanel"""
import os, pathlib

ROOT = pathlib.Path(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def test_keys_on_search_select_has_fallback():
    """keys.js onSearchSelect 应有内联 dispatch fallback (不依赖 UMD 全局挂载)"""
    src = (ROOT / "frontend/js/app-logic/keys.js").read_text(encoding="utf-8")
    assert "_dispatchSearchSelection" in src, "应含内联 dispatch fallback"
    assert "QCP ? QCP.dispatchSearchSelection(item) : _dispatchSearchSelection(item)" in src,         "QCP 不可用时走内联 fallback"


def test_command_panel_core_umd_root_window():
    """command-panel-core UMD 根应优先 window (module script 兼容)"""
    src = (ROOT / "frontend/js/command-panel-core.js").read_text(encoding="utf-8")
    assert "typeof window !== 'undefined'" in src or "typeof globalThis !== 'undefined'" in src,         "UMD 根应优先 window/globalThis"
