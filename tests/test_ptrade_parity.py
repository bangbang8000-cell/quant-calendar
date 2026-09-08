# -*- coding: utf-8 -*-
"""
PTrade 导出对拍测试 (V4.0 M1-1): 导出代码与策略研究端信号语义一致

- 每个策略模板的选股函数必须包含真实因子逻辑(非空壳 return [])
- 渲染后的模板必须通过静态校验(生命周期/API 白名单/语法)
- render_ptrade_code 需容忍模板内的字典/集合字面量花括号
"""
import os
import sys

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

from strategy_sdk.templates import (  # noqa: E402
    TEMPLATES, MULTI_FACTOR_TPL, SECTOR_ROTATION_TPL,
    INDEX_ENHANCE_TPL, CAPITAL_FLOW_TPL,
)
from strategy_sdk.ptrade import validate_ptrade_code, render_ptrade_code  # noqa: E402
from strategy_sdk.registry import registry  # noqa: E402

# 各模板必须实现的真实选股函数(键)与逻辑标记(至少含其一)
SELECTION_FUNCS = {
    "sector_rotation.py.j2": ["score_sectors", "pick_in_sector"],
    "index_enhance.py.j2": ["enhanced_universe"],
    "capital_flow.py.j2": ["capital_flow_picks"],
    "multi_factor.py.j2": ["score_universe"],
}
LOGIC_MARKERS = ["get_history", "sorted", "get_fundamentals", "_industry", "_z_scores", "reverse=True"]


def _selection_body(tpl: str, func_name: str) -> str:
    """提取模板中指定函数的完整源码文本(从 def 到下一个 def 前)"""
    lines = tpl.splitlines()
    start = None
    for i, ln in enumerate(lines):
        if ln.strip().startswith("def " + func_name):
            start = i
            break
    if start is None:
        return ""
    body = [lines[start]]
    for ln in lines[start + 1:]:
        if ln.strip().startswith("def ") and ln.strip() != lines[start].strip():
            break
        body.append(ln)
    return "\n".join(body)


def _sample_params(sid: str) -> dict:
    st = registry.get(sid)
    params = st.validate_params({})
    params.update({
        "universe_source": "universe",
        "universe_codes": ",".join((getattr(st, "universe", []) or ["600000.SH"])[:8]),
        "index_code": "000300.SH", "timing_enabled": True, "timing_index": "000300.SH",
        "timing_ma_window": 20, "stop_loss_pct": 0.08, "take_profit_pct": 0.15,
        "max_drawdown_pct": 0.2, "rebalance_cycle": 5, "st_filter": True,
        "benchmark": "000300.SH", "sector_k": 5, "stock_per_sector": 4,
        "momentum_window": 60, "flow_window": 20, "inflow_threshold": 1.2,
        "top_n": 20, "excess_target": 0.05, "tracking_error_max": 0.05,
        "industry_neutral": True,
    })
    return params


def test_all_templates_registered():
    assert set(TEMPLATES) == {"multi_factor.py.j2", "sector_rotation.py.j2",
                               "index_enhance.py.j2", "capital_flow.py.j2"}


def test_selection_functions_are_real_not_shells():
    """选股函数必须包含真实因子逻辑(禁止空壳 return [])"""
    for tpl_name, funcs in SELECTION_FUNCS.items():
        tpl = TEMPLATES[tpl_name]
        for fn in funcs:
            body = _selection_body(tpl, fn)
            assert "def " + fn in body, f"{tpl_name} 缺少选股函数 {fn}"
            # 空壳: 函数体只有 return []
            stripped = [ln.strip() for ln in body.splitlines() if ln.strip() and not ln.strip().startswith('#')]
            assert len(stripped) >= 3, f"{tpl_name}.{fn} 疑似空壳(仅 {len(stripped)} 行)"
            assert any(marker in body for marker in LOGIC_MARKERS),                 f"{tpl_name}.{fn} 无真实因子逻辑标记(仍可能是空壳): {body[:200]}"


def test_rendered_templates_pass_static_validation():
    """渲染后的 4 个模板全部通过 PTrade 静态校验(生命周期/API 白名单/语法)"""
    for sid in ["multi_factor", "sector_rotation", "index_enhance", "capital_flow"]:
        st = registry.get(sid)
        code = render_ptrade_code(st.ptrade_template, _sample_params(sid))
        errors = validate_ptrade_code(code)
        assert not errors, f"{sid} 模板校验失败: {errors}"


def test_render_tolerates_dict_literal_braces():
    """render_ptrade_code 必须容忍模板内字典/集合字面量花括号(不用 str.format)"""
    code = render_ptrade_code("multi_factor.py.j2", _sample_params("multi_factor"))
    # 模板内含 {s: ...} 字典推导/空字典字面量 → 渲染后仍保留(非占位符)
    assert "for s" in code and "in" in code
    assert "**" in code  # 幂运算符(含花括号场景)
    # 无未填充的 {param_key} 占位符残留
    import re
    leftovers = re.findall(r"\{[a-z_]+\}", code)
    assert not leftovers, f"存在未填充占位符: {leftovers[:8]}"
