#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
评分卡前端接线 + C1 判定修正测试 (v7.12 / PRD L2+L3)

L2: 个股评分卡必须真的接上评分 API(雷达/导出/因子下拉"综合评分"), 且模板用到的
    setup 绑定必须在 research-page.js 的 return 里 —— 这是 v7.11 之前出现过的
    "模板引用了未导出绑定 → 白屏"的回归点。
L3: C1 必须用「后端真实路由 × 前端路径字面量」比对, 不能再被 v6.x 日历评分
    "/api/calendar/stock/{code}/score" 之类的历史子串误判成"五维评分已接入"。
"""
import os
import re
import sys

ROOT = os.path.join(os.path.dirname(__file__), '..')
sys.path.insert(0, os.path.join(ROOT, 'backend'))
sys.path.insert(0, os.path.join(ROOT, 'scripts'))

import pytest  # noqa: E402

import five_dim_audit  # noqa: E402

FRONTEND = os.path.join(ROOT, 'frontend', 'js')
LOGIC_FACTOR = os.path.join(FRONTEND, 'components', 'research', 'logic-factor.js')
VIEW_PART1 = os.path.join(FRONTEND, 'components', 'research', 'view-part1.js')
RESEARCH_PAGE = os.path.join(FRONTEND, 'components', 'research-page.js')

# 模板里评分卡用到的绑定(必须被 research-page.js 导出)
SCORE_BINDINGS = [
    'scoreCode', 'scoreDims', 'scoreConfigDims', 'scoreWeights', 'scoreVeto',
    'scoreVetoReason', 'scoreLoading', 'scoreError', 'scoreResult', 'scoreTopN',
    'scoreDimLabel', 'scoreDimRows', 'scoreRadarAxes', 'scoreRadarPolygon',
    'loadScoreConfig', 'runScore', 'exportScore', 'factorSelectOptions',
]


def _read(path):
    with open(path, encoding='utf-8', errors='ignore') as f:
        return f.read()


# ---------- L2: 评分卡前端 ----------

def test_score_api_is_actually_called_by_frontend():
    """评分 API 必须有真实 fetch(旧缺口: 前端引用 /api/strategies/scores/* 为 0 处)"""
    text = _read(LOGIC_FACTOR)
    assert '/api/strategies/scores/calculate' in text, "前端未调用评分计算接口"
    assert '/api/strategies/scores/config' in text, "前端未读取评分配置(维度/权重)"
    assert "method: 'POST'" in text


def test_score_card_template_has_radar_and_export():
    """FR-7.4-4: 五维雷达 + 总分 + 否决标记 + 导出 + 四态"""
    text = _read(VIEW_PART1)
    assert 'class="score-card"' in text, "评分卡模板缺失"
    assert '<polygon' in text and 'scoreRadarPolygon()' in text, "缺少五维雷达多边形"
    assert 'scoreRadarAxes()' in text, "缺少雷达轴线"
    assert 'exportScore' in text, "缺少导出入口"
    assert 'scoreResult.veto_flag' in text, "缺少否决标记展示"
    # 统一四态: loading / error / 空 / 结果
    assert 'v-if="scoreLoading"' in text
    assert 'v-else-if="scoreError"' in text
    assert 'v-else-if="!scoreResult"' in text
    assert 'qc-state-panel' in text


def test_factor_dropdown_offers_composite_score():
    """FR-7.4-4: 因子下拉必须有"综合评分", 且策略自带 factor_specs 时也不丢"""
    logic = _read(LOGIC_FACTOR)
    assert 'composite_score' in logic and '综合评分' in logic
    assert 'factorSelectOptions' in logic
    # 模板必须改用合并后的选项源, 否则选中策略后"综合评分"会被 factor_specs 覆盖掉
    view = _read(VIEW_PART1)
    assert 'factorGroupedOptions()' in view  # v7.14: 模板改用分组选项源(内部仍走 factorSelectOptions 合并逻辑, composite_score 恒在)
    assert '|| factorOptions' not in view, "模板仍直接用 factorOptions, 未走合并逻辑"


@pytest.mark.parametrize("name", SCORE_BINDINGS)
def test_score_bindings_returned_by_page(name):
    """模板用到的绑定必须在 research-page.js 里装配并导出(防白屏回归)"""
    text = _read(RESEARCH_PAGE)
    assert re.search(r'\b' + re.escape(name) + r'\b', text), f"{name} 未在 research-page.js 中装配/导出"


def test_score_config_loaded_on_enter_quant_research():
    text = _read(RESEARCH_PAGE)
    assert 'loadScoreConfig()' in text
    m = re.search(r"if \(key === 'research/quant-research'\) \{(.*?)\}", text, re.S)
    assert m and 'loadScoreConfig()' in m.group(1), "进入量化研究时未加载评分配置"


def test_export_score_is_csv_and_revokes_url():
    text = _read(LOGIC_FACTOR)
    assert 'text/csv' in text
    assert 'URL.revokeObjectURL' in text, "导出未释放 objectURL(内存泄漏)"


# ---------- L3: C1 判定 ----------

def test_c1_counts_all_domains_with_evidence():
    res = five_dim_audit.check_c1_frontend_reach()
    assert res["status"] == "pass"
    assert "7/7" in res["detail"]
    # 五维评分的证据必须落在真实评分路由上(而不是任何含 score 的历史路由)
    assert "/api/strategies/scores" in res["detail"]


def test_c1_not_fooled_by_legacy_calendar_score_route(monkeypatch):
    """回归: 旧实现会被 /api/calendar/stock/{code}/score 骗成"已接入\""""
    monkeypatch.setattr(five_dim_audit, "_frontend_paths",
                        lambda: {"/api/calendar/stock/600000/score"})
    res = five_dim_audit.check_c1_frontend_reach()
    assert res["status"] == "fail"
    assert "五维评分" in res["detail"]
    assert "/api/strategies/scores" not in res["detail"]


def test_c1_marks_domain_without_backend_route(monkeypatch):
    """域前缀在后端找不到真实路由 → 记为"后端无对应路由", 不能算前端可达"""
    original = dict(five_dim_audit.FRONTEND_DOMAINS)
    try:
        five_dim_audit.FRONTEND_DOMAINS.clear()
        five_dim_audit.FRONTEND_DOMAINS["幽灵域"] = "/api/no-such-domain-xyz/"
        res = five_dim_audit.check_c1_frontend_reach()
        assert res["status"] == "fail"
        assert "后端无对应路由" in res["detail"]
    finally:
        five_dim_audit.FRONTEND_DOMAINS.clear()
        five_dim_audit.FRONTEND_DOMAINS.update(original)


def test_static_suffix_handles_path_params():
    assert five_dim_audit._static_suffix("/strategies/{sid}/lock/audit") == "/lock/audit"
    assert five_dim_audit._static_suffix("/reports/stock/{symbol}") is None
    assert five_dim_audit._static_suffix("/timing/strategies") == "/timing/strategies"
