#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
PTrade 策略模板库 (FR: 策略研究 P0)
每个策略类型一个模板: 生命周期函数齐全, 参数用 {param_key} 占位(与 ParamSpec.ptrade_var 同源)
设计约束: 只走 PTrade 通用 API, 规避 2.7/3.x 差异
"""
from typing import Dict

# 模板中 {param_key} 占位符由 render_ptrade_code 填充; 未填的保留原样(人工补全)

MULTI_FACTOR_TPL = '''# -*- coding: utf-8 -*-
"""
多因子选股策略 (由量化选股日历策略研究生成)
参数: top_n={top_n} | benchmark={benchmark} | rebalance_cycle={rebalance_cycle} | st_filter={st_filter}
"""
import datetime

def initialize(context):
    # 基准与费率
    set_benchmark("{benchmark}")
    set_commission(0.0003)
    set_slippage(0.001)
    # 调仓周期: 每周第一个交易日
    run_daily(rebalance, time="09:35")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行"""
    pass

def rebalance(context, data):
    universe = get_universe_candidates(context, data)
    if not universe:
        return
    set_universe(universe)
    # 等权目标
    target = 1.0 / len(universe)
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def get_universe_candidates(context, data):
    """选股逻辑: 在此处填入研究端因子打分输出的股票池"""
    codes = get_history(5, "1d", "close", context.symbol, skip_paused=True)
    # 模板骨架: 实际因子代码由策略模板生成器注入
    return list(codes.columns)[:{top_n}]
'''

SECTOR_ROTATION_TPL = '''# -*- coding: utf-8 -*-
"""
行业轮动策略 (由量化选股日历策略研究生成)
参数: sector_k={sector_k} | stock_per_sector={stock_per_sector} | momentum_window={momentum_window}
"""
import datetime

def initialize(context):
    set_benchmark("000300.SS")
    set_commission(0.0003)
    set_slippage(0.001)
    run_daily(rebalance, time="09:35")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行"""
    pass

def rebalance(context, data):
    # 行业打分 → Top{sector_k} 行业 → 行业内 Top{stock_per_sector}
    sectors = score_sectors(context, data)
    picks = []
    for s in sectors[:{sector_k}]:
        picks.extend(pick_in_sector(context, data, s, {stock_per_sector}))
    set_universe(picks)
    target = 1.0 / len(picks)
    for stock in picks:
        order_target_value(stock, context.portfolio.total_value * target)

def score_sectors(context, data):
    return []

def pick_in_sector(context, data, sector, n):
    return []
'''

INDEX_ENHANCE_TPL = '''# -*- coding: utf-8 -*-
"""
指数增强策略 (由量化选股日历策略研究生成)
参数: benchmark={benchmark} | excess_target={excess_target} | tracking_error_max={tracking_error_max} | industry_neutral={industry_neutral}
"""
import datetime

def initialize(context):
    set_benchmark("{benchmark}")
    set_commission(0.0003)
    set_slippage(0.001)
    run_daily(rebalance, time="09:35")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行"""
    pass

def rebalance(context, data):
    # 基准成分内因子增强打分 → 行业/市值中性约束
    universe = enhanced_universe(context, data, {industry_neutral})
    if not universe:
        return
    set_universe(universe)
    target = 1.0 / len(universe)
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def enhanced_universe(context, data, industry_neutral):
    """指数增强选股: 基准成分 + 因子打分 + 中性化(模板骨架)"""
    return []
'''

CAPITAL_FLOW_TPL = '''# -*- coding: utf-8 -*-
"""
资金流选股策略 (由量化选股日历策略研究生成)
参数: flow_window={flow_window} | inflow_threshold={inflow_threshold} | top_n={top_n}
"""
import datetime

def initialize(context):
    set_benchmark("000300.SS")
    set_commission(0.0003)
    set_slippage(0.001)
    run_daily(rebalance, time="09:35")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行"""
    pass

def rebalance(context, data):
    universe = capital_flow_picks(context, data, {flow_window}, {inflow_threshold}, {top_n})
    if not universe:
        return
    set_universe(universe)
    target = 1.0 / len(universe)
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def capital_flow_picks(context, data, window, threshold, n):
    """资金流选股: 主力/北向净流入因子(模板骨架)"""
    return []
'''

TEMPLATES: Dict[str, str] = {
    "multi_factor.py.j2": MULTI_FACTOR_TPL,
    "sector_rotation.py.j2": SECTOR_ROTATION_TPL,
    "index_enhance.py.j2": INDEX_ENHANCE_TPL,
    "capital_flow.py.j2": CAPITAL_FLOW_TPL,
}
