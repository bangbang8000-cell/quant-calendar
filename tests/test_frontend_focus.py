# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.7 / FR-5.4.4): 前端契约测试 — 重点跟踪视图

守护: focus-view 组件注册 / ai-page 接线(入口卡+子页块) / main.js 导入 /
      字段契约(action/score/direction/session)与后端 API 一致 / 空态文案。
"""
import os

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(ROOT, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def _read_backend(rel):
    with open(os.path.join(ROOT, "backend", rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def test_focus_view_component_registered():
    src = _read("js/components/focus-view.js")
    assert "window.__quantComponents.FocusView" in src
    assert "name: 'qc-focus-view'" in src
    assert "FocusView" in src


def test_focus_view_imported_in_main():
    src = _read("src/main.js")
    assert "js/components/focus-view.js" in src


def test_ai_page_wired():
    src = _read("js/components/ai-page.js")
    assert "currentSubPage = 'focus'" in src          # 概览入口卡
    assert "currentSubPage === 'focus'" in src        # 子页块
    assert "qc-focus-view" in src


def test_focus_view_field_contract_matches_api():
    """前端字段与后端 /api/focus/results 返回字段一致 (action/score/direction/session)"""
    fv = _read("js/components/focus-view.js")
    for field in ("row.action", "row.total_score", "row.direction", "row.stock_code"):
        assert field in fv, "前端缺字段 " + field
    # 后端 results 端点返回字段
    api = _read_backend("api/v1/focus.py")
    assert '"actions"' in api and '"rows"' in api
    assert "enrich_actions" in api


def test_focus_view_empty_states():
    fv = _read("js/components/focus-view.js")
    assert "暂无评估结果" in fv
    assert "暂无历史评估记录" in fv


def test_focus_view_effect_block_reuses_ai_track():
    fv = _read("js/components/focus-view.js")
    assert "/api/ai/track" in fv
    assert "历史命中率" in fv


def test_focus_view_no_termlogy_regression():
    """术语统一: 不出现「评股」"""
    fv = _read("js/components/focus-view.js")
    assert "评股" not in fv
