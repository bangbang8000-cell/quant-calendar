#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略变体 (I3A / v3.22): 复制母本 -> 参数覆盖 -> SelectionSpec -> AI 交易码"""
import json
import logging
import os
import re
from paths import DATA_DIR
logger = logging.getLogger(__name__)
SPEC_FILE = os.path.join(DATA_DIR, "selection_specs.json")
SPEC_FIELDS = {
    "stock_count": {"type": "int", "desc": "最终持仓数量 (top N)", "min": 1, "max": 50},
    "industry_scope": {"type": "list[str]", "desc": "行业白名单(空=不限制)", "example": ["电子", "医药生物"]},
    "market_cap_range": {"type": "[min,max] 亿", "desc": "市值范围(亿)", "example": [50, 2000]},
    "exclude_st": {"type": "bool", "desc": "是否剔除 ST", "default": True},
    "index_membership": {"type": "str", "desc": "指数成分 hs300/zz500/zz1000", "example": "hs300"},
    "turnover_range": {"type": "[min,max] %", "desc": "换手率范围", "example": [1, 20]},
    "rebalance_cycle": {"type": "int", "desc": "调仓周期(交易日)", "default": 5},
}
def _default_spec():
    return {"stock_count": 10, "industry_scope": [], "market_cap_range": [],
            "exclude_st": True, "index_membership": "", "turnover_range": [],
            "rebalance_cycle": 5}
def _load_all():
    if os.path.exists(SPEC_FILE):
        try:
            with open(SPEC_FILE, "r", encoding="utf-8") as f:
                return json.load(f) or {}
        except Exception as e:
            logger.warning("读取 SelectionSpec 失败: %s", e)
    return {}
def _save_all(data):
    from reliability.atomic import atomic_write_json
    atomic_write_json(SPEC_FILE, data)
def get_selection_spec(sid):
    all_specs = _load_all()
    spec = dict(_default_spec())
    spec.update(all_specs.get(sid) or {})
    return spec
def save_selection_spec(sid, spec):
    clean = dict(_default_spec())
    if isinstance(spec, dict):
        for k in clean:
            if k in spec and spec[k] is not None:
                clean[k] = spec[k]
    all_specs = _load_all()
    all_specs[sid] = clean
    _save_all(all_specs)
    return clean
def clone_strategy(sid, new_name=None, params=None):
    """复制内置策略为 variant"""
    from strategy_db import get_def, upsert_def
    from strategy_sdk.registry import registry, StrategyNotFoundError
    if sid not in ("multi_factor", "sector_rotation", "capital_flow", "index_enhance"):
        raise StrategyNotFoundError(sid)
    st = registry.get(sid)
    base = st.name
    n = 1
    while get_def(f"{sid}_{n}") is not None:
        n += 1
    vsid = f"{sid}_{n}"
    name = new_name or f"{base}-微调{n}"
    upsert_def(vsid, {"name": name, "version": st.version, "type": sid,
                      "params": params or {}, "enabled": True})
    return {"sid": vsid, "name": name, "type": sid, "params": params or {}, "parent": sid}
def list_variants():
    from strategy_db import list_defs
    return [d for d in list_defs() if d.get("type") in
            ("multi_factor", "sector_rotation", "capital_flow", "index_enhance")]
def _parse_holdings_matrix(holdings_files):
    import csv
    if not holdings_files:
        return []
    path = holdings_files[0]["file"]
    if not os.path.exists(path):
        return []
    with open(path, "r", encoding="utf-8-sig") as f:
        rows = list(csv.reader(f))
    if not rows:
        return []
    header = rows[0]
    return [c for c in header[1:] if c and c != "date"]
def _extract_order_symbols(code):
    """提取交易标的: 仅 order 类函数调用的第一参数(字符串代码), 排除 set_benchmark/set_universe 的指数代码"""
    out = []
    # order 类函数名
    order_fns = ["order", "order_target", "order_value", "order_target_value", "order_market"]
    for fn in order_fns:
        # fn('CODE.SH', ...) 或 fn("CODE.SZ", ...)
        pat = re.compile(fn + r"\s*\(\s*[\'\"]([0-9]{6}\.[A-Z]{2})[\'\"]")
        for m in pat.finditer(code):
            sym = m.group(1)
            if sym not in out:
                out.append(sym)
    return out
def _check_matrix_subset(symbols, matrix):
    matrix_set = set(matrix)
    return [s for s in symbols if s not in matrix_set]
def generate_ai_trade_code(sid, spec=None, matrix=None):
    """AI 交易码生成: 读矩阵 + SelectionSpec -> LLM -> 硬约束校验"""
    from strategy_governance import list_holdings
    spec = save_selection_spec(sid, spec) if spec else get_selection_spec(sid)
    if matrix is None:
        matrix = _parse_holdings_matrix(list_holdings(sid))
    if not matrix:
        raise ValueError("持仓矩阵为空: 请先运行策略生成持仓 (run-once)")
    top_n = max(1, int(spec.get("stock_count") or 10))
    spec_text = json.dumps(spec, ensure_ascii=False, indent=2)
    matrix_text = chr(10).join(matrix[:30])
    prompt = (
        "你是量化交易策略代码生成器, 输出 PTrade 平台兼容的 Python 策略代码。\n\n"
        "任务: 基于以下持仓矩阵(母策略信号层优选的股票池) 编写每日调仓策略代码。\n"
        "持仓矩阵股票(仅限这些, 不得新增矩阵外股票):\n" + matrix_text + "\n\n"
        "SelectionSpec 微调选股约束:\n" + spec_text + "\n\n"
        "要求:\n"
        "1. 仅使用 PTrade 内建 API: get_history 取行情, order_target_value(代码, 金额) 调仓; 禁止 import pandas/numpy 及任何第三方库\n"
        "2. 最终持仓数 <= " + str(top_n) + " 只, 必须全部来自上面的持仓矩阵\n"
        "3. 叠加风控: 个股止损(-8%)/止盈(+15%)/最大回撤(-10%清仓)/仓位(每只<=20%)\n"
        "4. 实现 initialize(context) 和 handle_data(context, data), 兼容 PTrade 回测/实盘\n"
        "5. 仅输出纯 Python 代码(不含 markdown 代码块标记), 不要写 set_benchmark/基准指数代码\n"
        "6. 可用 API 白名单: initialize/handle_data/order_target_value/order_target/order_value/get_history/get_current_data/get_index_stocks/g/log/set_universe/set_slippage/set_commission\n"
    )
    from ai_evaluator import ai_evaluator
    system = "你是专业的 PTrade 量化策略工程师, 严格只输出可直接运行的 Python 代码。"
    code = ai_evaluator.generate_review(prompt, system_prompt=system, max_tokens=4096)
    if not code:
        raise ValueError("AI 生成失败: 无可用模型返回内容")
    code = re.sub(chr(94) + "```python\\s*", "", code.strip(), flags=re.M)
    code = re.sub(chr(94) + "```\\s*$", "", code.strip(), flags=re.M)
    symbols = _extract_order_symbols(code)
    violations = _check_matrix_subset(symbols, matrix)
    if violations:
        raise ValueError(
            "AI 交易代码含矩阵外股票 " + str(len(violations)) + " 只: " + str(violations[:5]) + "... "
            "(硬约束: 微调只能在持仓矩阵内二次筛选)")
    from strategy_sdk.ptrade import validate_ptrade_code
    errors = validate_ptrade_code(code)
    if errors and len(errors) > 5:
        raise ValueError(
            "AI 生成代码含过多非 PTrade API (" + str(len(errors)) + " 条), 请调整提示词后重试")
    return {"code": code, "matrix": matrix[:top_n], "spec": spec,
            "violations": violations, "api_errors": errors}
