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
三要素: 选股(自定义池/指数成分) + 择时(指数均线趋势) + 风控(止盈止损/回撤)
参数: top_n={top_n} | benchmark={benchmark} | rebalance_cycle={rebalance_cycle} | st_filter={st_filter}
选股: universe_source={universe_source} | universe_codes={universe_codes} | index_code={index_code}
择时: timing_enabled={timing_enabled} | timing_index={timing_index} | timing_ma_window={timing_ma_window}
风控: stop_loss_pct={stop_loss_pct} | take_profit_pct={take_profit_pct} | max_drawdown_pct={max_drawdown_pct}
"""
import datetime

# ============ 策略级状态(持久跨 bar) ============
def initialize(context):
    # 基准与费率
    set_benchmark("{benchmark}")
    set_commission(0.0003)
    set_slippage(0.001)
    # ---- 选股范围 ----
    g.universe_source = "{universe_source}"   # universe | index
    g.universe_codes = "{universe_codes}"      # 逗号分隔自定义池
    g.index_code = "{index_code}"              # 指数成分基准
    # ---- 择时 ----
    g.timing_enabled = {timing_enabled}
    g.timing_index = "{timing_index}"
    g.timing_ma_window = {timing_ma_window}
    # ---- 风控 ----
    g.stop_loss_pct = {stop_loss_pct}
    g.take_profit_pct = {take_profit_pct}
    g.max_drawdown_pct = {max_drawdown_pct}
    g.peak_value = context.portfolio.portfolio_value  # 净值峰值(回撤止损用)
    # 调仓周期 + 日终风控
    run_daily(rebalance, time="09:35")
    run_daily(risk_controls, time="14:50")

def handle_data(context, data):
    """盘中回调(骨架): 调仓由 rebalance 周期执行, 风控由 risk_controls 日终执行"""
    pass

# ============ 风控: 止盈止损 + 账户回撤止损 ============
def risk_controls(context, data):
    """日终风控: 1) 账户最大回撤清仓 2) 单票止盈止损"""
    # 1) 账户最大回撤止损: 净值跌破峰值*(1-max_drawdown_pct) → 全部清仓
    cur = context.portfolio.portfolio_value
    if cur > g.peak_value:
        g.peak_value = cur
    if g.peak_value > 0 and cur < g.peak_value * (1 - g.max_drawdown_pct):
        log.info("触发账户回撤止损: 峰值 %s, 当前 %s, 比例 %s",
                 g.peak_value, cur, g.max_drawdown_pct)
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        g.halted = True  # 停止后续开仓(下一交易日重新评估)
        return
    # 2) 单票止盈止损: 逐仓对比成本价
    for stock, pos in list(context.portfolio.positions.items()):
        if pos.amount <= 0:
            continue
        cost = pos.avg_cost
        if cost <= 0:
            continue
        price = data.current(stock).close
        pnl_pct = (price - cost) / cost
        if pnl_pct <= -g.stop_loss_pct:
            log.info("单票止损 %s: 成本 %s, 现价 %s, 跌幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)
        elif pnl_pct >= g.take_profit_pct:
            log.info("单票止盈 %s: 成本 %s, 现价 %s, 涨幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)

# ============ 择时: 指数均线趋势 ============
def market_timing(context, data):
    """市场择时: 择时指数收盘价 >= N日均线 → 正常持仓(1.0), 否则空仓避险(0.0)"""
    if not g.timing_enabled:
        return 1.0
    try:
        hist = get_history(g.timing_ma_window + 1, "1d", "close",
                           g.timing_index, skip_paused=True)
        if hist is None or len(hist) == 0:
            return 1.0
        closes = list(hist.columns[0])
        if len(closes) < 2:
            return 1.0  # 数据不足不干预
        cur_price = closes[-1]
        ma = sum(closes[-g.timing_ma_window:]) / g.timing_ma_window
        if cur_price >= ma:
            return 1.0   # 趋势向上: 正常持仓
        return 0.0       # 趋势向下: 空仓避险
    except Exception as e:
        log.info("择时计算异常, 默认持仓: %s", e)
        return 1.0

# ============ 选股: 自定义池 / 指数成分 ============
def get_universe_candidates(context, data):
    """选股范围: universe_source=universe → 自定义代码; =index → 指数成分股"""
    if g.universe_source == "index":
        # 指数成分股 (PTrade 通用接口)
        try:
            stocks = get_index_stocks(g.index_code, date=None)
            if {st_filter}:
                return [s for s in stocks if not is_st(s)]
            return list(stocks)
        except Exception as e:
            log.info("指数成分取数失败, 回退自定义池: %s", e)
    # 自定义股票池: 逗号分隔
    codes = [c.strip() for c in g.universe_codes.split(",") if c.strip()]
    if {st_filter}:
        return [c for c in codes if not is_st(c)]
    return codes

def rebalance(context, data):
    """主调仓: 择时决定仓位 → 选股 → 等权买入"""
    # 1) 择时: 判断市场状态决定是否开仓
    position_scale = market_timing(context, data)
    if position_scale <= 0:
        # 空仓避险: 清掉全部持仓
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        return
    # 2) 选股
    universe = get_universe_candidates(context, data)
    if not universe:
        return
    set_universe(universe)
    # 3) 等权目标(择时降仓时按比例缩)
    target = position_scale * (1.0 / len(universe))
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)
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
    # ---- 三要素: 选股范围 / 择时 / 风控 ----
    g.universe_source = "{universe_source}"   # universe | index
    g.universe_codes = "{universe_codes}"      # 逗号分隔自定义池
    g.index_code = "{index_code}"              # 指数成分基准
    g.timing_enabled = {timing_enabled}
    g.timing_index = "{timing_index}"
    g.timing_ma_window = {timing_ma_window}
    g.stop_loss_pct = {stop_loss_pct}
    g.take_profit_pct = {take_profit_pct}
    g.max_drawdown_pct = {max_drawdown_pct}
    g.peak_value = context.portfolio.portfolio_value
    run_daily(rebalance, time="09:35")
    run_daily(risk_controls, time="14:50")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行, 风控由 risk_controls 日终执行"""
    pass

def rebalance(context, data):
    # 1) 择时: 决定仓位(空仓避险时清仓)
    position_scale = market_timing(context, data)
    if position_scale <= 0:
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        return
    # 2) 行业打分 → Top{sector_k} 行业 → 行业内 Top{stock_per_sector}
    sectors = score_sectors(context, data)
    picks = []
    for s in sectors[:{sector_k}]:
        picks.extend(pick_in_sector(context, data, s, {stock_per_sector}))
    if not picks:
        picks = get_universe_candidates(context, data)  # 行业打分为空时回退选股范围
    set_universe(picks)
    target = position_scale * (1.0 / len(picks))
    for stock in picks:
        order_target_value(stock, context.portfolio.total_value * target)

def score_sectors(context, data):
    return []

def pick_in_sector(context, data, sector, n):
    return []

# ============ 风控: 止盈止损 + 账户回撤止损 (三要素) ============
def risk_controls(context, data):
    """日终风控: 1) 账户最大回撤清仓 2) 单票止盈止损"""
    cur = context.portfolio.portfolio_value
    if cur > g.peak_value:
        g.peak_value = cur
    if g.peak_value > 0 and cur < g.peak_value * (1 - g.max_drawdown_pct):
        log.info("触发账户回撤止损: 峰值 %s, 当前 %s, 比例 %s",
                 g.peak_value, cur, g.max_drawdown_pct)
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        g.halted = True
        return
    for stock, pos in list(context.portfolio.positions.items()):
        if pos.amount <= 0:
            continue
        cost = pos.avg_cost
        if cost <= 0:
            continue
        price = data.current(stock).close
        pnl_pct = (price - cost) / cost
        if pnl_pct <= -g.stop_loss_pct:
            log.info("单票止损 %s: 成本 %s, 现价 %s, 跌幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)
        elif pnl_pct >= g.take_profit_pct:
            log.info("单票止盈 %s: 成本 %s, 现价 %s, 涨幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)

# ============ 择时: 指数均线趋势 (三要素) ============
def market_timing(context, data):
    """市场择时: 择时指数收盘价 >= N日均线 -> 正常持仓(1.0), 否则空仓避险(0.0)"""
    if not g.timing_enabled:
        return 1.0
    try:
        hist = get_history(g.timing_ma_window + 1, "1d", "close",
                           g.timing_index, skip_paused=True)
        if hist is None or len(hist) == 0:
            return 1.0
        closes = list(hist.columns[0])
        if len(closes) < 2:
            return 1.0
        cur_price = closes[-1]
        ma = sum(closes[-g.timing_ma_window:]) / g.timing_ma_window
        if cur_price >= ma:
            return 1.0
        return 0.0
    except Exception as e:
        log.info("择时计算异常, 默认持仓: %s", e)
        return 1.0

# ============ 选股: 自定义池 / 指数成分 (三要素) ============
def get_universe_candidates(context, data):
    """选股范围: universe_source=universe -> 自定义代码; =index -> 指数成分股"""
    if g.universe_source == "index":
        try:
            stocks = get_index_stocks(g.index_code, date=None)
            return list(stocks)
        except Exception as e:
            log.info("指数成分取数失败, 回退自定义池: %s", e)
    codes = [c.strip() for c in g.universe_codes.split(",") if c.strip()]
    return codes
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
    # ---- 三要素: 选股范围 / 择时 / 风控 ----
    g.universe_source = "{universe_source}"   # universe | index
    g.universe_codes = "{universe_codes}"      # 逗号分隔自定义池
    g.index_code = "{index_code}"              # 指数成分基准
    g.timing_enabled = {timing_enabled}
    g.timing_index = "{timing_index}"
    g.timing_ma_window = {timing_ma_window}
    g.stop_loss_pct = {stop_loss_pct}
    g.take_profit_pct = {take_profit_pct}
    g.max_drawdown_pct = {max_drawdown_pct}
    g.peak_value = context.portfolio.portfolio_value
    run_daily(rebalance, time="09:35")
    run_daily(risk_controls, time="14:50")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行, 风控由 risk_controls 日终执行"""
    pass

def rebalance(context, data):
    # 1) 择时: 决定仓位(空仓避险时清仓)
    position_scale = market_timing(context, data)
    if position_scale <= 0:
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        return
    # 2) 基准成分内因子增强打分 → 行业/市值中性约束
    universe = enhanced_universe(context, data, {industry_neutral})
    if not universe:
        universe = get_universe_candidates(context, data)  # 打分空时回退选股范围
    if not universe:
        return
    set_universe(universe)
    target = position_scale * (1.0 / len(universe))
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def enhanced_universe(context, data, industry_neutral):
    """指数增强选股: 基准成分 + 因子打分 + 中性化(模板骨架)"""
    return []

# ============ 风控: 止盈止损 + 账户回撤止损 (三要素) ============
def risk_controls(context, data):
    """日终风控: 1) 账户最大回撤清仓 2) 单票止盈止损"""
    cur = context.portfolio.portfolio_value
    if cur > g.peak_value:
        g.peak_value = cur
    if g.peak_value > 0 and cur < g.peak_value * (1 - g.max_drawdown_pct):
        log.info("触发账户回撤止损: 峰值 %s, 当前 %s, 比例 %s",
                 g.peak_value, cur, g.max_drawdown_pct)
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        g.halted = True
        return
    for stock, pos in list(context.portfolio.positions.items()):
        if pos.amount <= 0:
            continue
        cost = pos.avg_cost
        if cost <= 0:
            continue
        price = data.current(stock).close
        pnl_pct = (price - cost) / cost
        if pnl_pct <= -g.stop_loss_pct:
            log.info("单票止损 %s: 成本 %s, 现价 %s, 跌幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)
        elif pnl_pct >= g.take_profit_pct:
            log.info("单票止盈 %s: 成本 %s, 现价 %s, 涨幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)

# ============ 择时: 指数均线趋势 (三要素) ============
def market_timing(context, data):
    """市场择时: 择时指数收盘价 >= N日均线 -> 正常持仓(1.0), 否则空仓避险(0.0)"""
    if not g.timing_enabled:
        return 1.0
    try:
        hist = get_history(g.timing_ma_window + 1, "1d", "close",
                           g.timing_index, skip_paused=True)
        if hist is None or len(hist) == 0:
            return 1.0
        closes = list(hist.columns[0])
        if len(closes) < 2:
            return 1.0
        cur_price = closes[-1]
        ma = sum(closes[-g.timing_ma_window:]) / g.timing_ma_window
        if cur_price >= ma:
            return 1.0
        return 0.0
    except Exception as e:
        log.info("择时计算异常, 默认持仓: %s", e)
        return 1.0

# ============ 选股: 自定义池 / 指数成分 (三要素) ============
def get_universe_candidates(context, data):
    """选股范围: universe_source=universe -> 自定义代码; =index -> 指数成分股"""
    if g.universe_source == "index":
        try:
            stocks = get_index_stocks(g.index_code, date=None)
            return list(stocks)
        except Exception as e:
            log.info("指数成分取数失败, 回退自定义池: %s", e)
    codes = [c.strip() for c in g.universe_codes.split(",") if c.strip()]
    return codes
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
    # ---- 三要素: 选股范围 / 择时 / 风控 ----
    g.universe_source = "{universe_source}"   # universe | index
    g.universe_codes = "{universe_codes}"      # 逗号分隔自定义池
    g.index_code = "{index_code}"              # 指数成分基准
    g.timing_enabled = {timing_enabled}
    g.timing_index = "{timing_index}"
    g.timing_ma_window = {timing_ma_window}
    g.stop_loss_pct = {stop_loss_pct}
    g.take_profit_pct = {take_profit_pct}
    g.max_drawdown_pct = {max_drawdown_pct}
    g.peak_value = context.portfolio.portfolio_value
    run_daily(rebalance, time="09:35")
    run_daily(risk_controls, time="14:50")

def handle_data(context, data):
    """日线回调(骨架): 实际调仓由 rebalance 按周期执行, 风控由 risk_controls 日终执行"""
    pass

def rebalance(context, data):
    # 1) 择时: 决定仓位(空仓避险时清仓)
    position_scale = market_timing(context, data)
    if position_scale <= 0:
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        return
    # 2) 资金流选股
    universe = capital_flow_picks(context, data, {flow_window}, {inflow_threshold}, {top_n})
    if not universe:
        universe = get_universe_candidates(context, data)  # 打分空时回退选股范围
    if not universe:
        return
    set_universe(universe)
    target = position_scale * (1.0 / len(universe))
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def capital_flow_picks(context, data, window, threshold, n):
    """资金流选股: 主力/北向净流入因子(模板骨架)"""
    return []

# ============ 风控: 止盈止损 + 账户回撤止损 (三要素) ============
def risk_controls(context, data):
    """日终风控: 1) 账户最大回撤清仓 2) 单票止盈止损"""
    cur = context.portfolio.portfolio_value
    if cur > g.peak_value:
        g.peak_value = cur
    if g.peak_value > 0 and cur < g.peak_value * (1 - g.max_drawdown_pct):
        log.info("触发账户回撤止损: 峰值 %s, 当前 %s, 比例 %s",
                 g.peak_value, cur, g.max_drawdown_pct)
        for stock in list(context.portfolio.positions.keys()):
            order_target_value(stock, 0)
        g.halted = True
        return
    for stock, pos in list(context.portfolio.positions.items()):
        if pos.amount <= 0:
            continue
        cost = pos.avg_cost
        if cost <= 0:
            continue
        price = data.current(stock).close
        pnl_pct = (price - cost) / cost
        if pnl_pct <= -g.stop_loss_pct:
            log.info("单票止损 %s: 成本 %s, 现价 %s, 跌幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)
        elif pnl_pct >= g.take_profit_pct:
            log.info("单票止盈 %s: 成本 %s, 现价 %s, 涨幅 %s%%",
                     stock, cost, price, round(pnl_pct * 100, 2))
            order_target_value(stock, 0)

# ============ 择时: 指数均线趋势 (三要素) ============
def market_timing(context, data):
    """市场择时: 择时指数收盘价 >= N日均线 -> 正常持仓(1.0), 否则空仓避险(0.0)"""
    if not g.timing_enabled:
        return 1.0
    try:
        hist = get_history(g.timing_ma_window + 1, "1d", "close",
                           g.timing_index, skip_paused=True)
        if hist is None or len(hist) == 0:
            return 1.0
        closes = list(hist.columns[0])
        if len(closes) < 2:
            return 1.0
        cur_price = closes[-1]
        ma = sum(closes[-g.timing_ma_window:]) / g.timing_ma_window
        if cur_price >= ma:
            return 1.0
        return 0.0
    except Exception as e:
        log.info("择时计算异常, 默认持仓: %s", e)
        return 1.0

# ============ 选股: 自定义池 / 指数成分 (三要素) ============
def get_universe_candidates(context, data):
    """选股范围: universe_source=universe -> 自定义代码; =index -> 指数成分股"""
    if g.universe_source == "index":
        try:
            stocks = get_index_stocks(g.index_code, date=None)
            return list(stocks)
        except Exception as e:
            log.info("指数成分取数失败, 回退自定义池: %s", e)
    codes = [c.strip() for c in g.universe_codes.split(",") if c.strip()]
    return codes
'''

TEMPLATES: Dict[str, str] = {
    "multi_factor.py.j2": MULTI_FACTOR_TPL,
    "sector_rotation.py.j2": SECTOR_ROTATION_TPL,
    "index_enhance.py.j2": INDEX_ENHANCE_TPL,
    "capital_flow.py.j2": CAPITAL_FLOW_TPL,
}
