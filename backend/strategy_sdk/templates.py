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
    # 2) 因子打分选股(动量 z + 估值 z, 与研究端 multi_factor 五维合成同方向: 高分优先)
    picks = score_universe(context, data, g.top_n)
    if not picks:
        picks = get_universe_candidates(context, data)  # 打分空时回退选股范围
    if not picks:
        return
    set_universe(picks)
    # 3) 等权目标(择时降仓时按比例缩)
    target = position_scale * (1.0 / len(picks))
    for stock in picks:
        order_target_value(stock, context.portfolio.total_value * target)

def score_universe(context, data, n):
    """因子打分: 动量(近60日涨幅) z + 估值(pe倒数, get_fundamentals 不可用纯动量) z 合成 → TopN
       PTrade 侧因子为研究端五维因子的动量/估值子集(数据以 PTrade 端为准)"""
    universe = get_universe_candidates(context, data)
    if not universe:
        return []
    mom_scores = {}
    val_scores = {}
    for stock in universe:
        try:
            hist = get_history(61, '1d', 'close', stock, skip_paused=True)
            closes = list(hist.columns[0]) if hist is not None and len(hist) > 0 else []
            if len(closes) >= 2:
                mom_scores[stock] = closes[-1] / closes[0] - 1.0
        except Exception:
            pass
        try:
            fund = get_fundamentals(table='valuation', columns=['pe_ttm'],
                                    codes=[stock], date=context.blotter.current_date)
            pe = None
            if fund is not None and len(fund) > 0:
                try:
                    pe = float(fund.iloc[0]['pe_ttm']) if hasattr(fund, 'iloc') else float(list(fund)[0][-1])
                except Exception:
                    pe = None
            if pe is not None and pe > 0 and pe == pe:
                val_scores[stock] = 1.0 / pe
        except Exception:
            pass
    zm = _z_scores(mom_scores)
    zv = _z_scores(val_scores)
    combined = {}
    for s in universe:
        if s in zm:
            combined[s] = zm[s] + zv.get(s, 0.0)
    if not combined:
        return []
    return sorted(combined.keys(), key=lambda s: combined[s], reverse=True)[:n]

def _z_scores(values):
    """横截面 z 分数(纯 Python)"""
    vals = [v for v in values if v is not None]
    if len(vals) < 2:
        return {}
    m = sum(vals) / len(vals)
    sd = (sum((v - m) ** 2 for v in vals) / len(vals)) ** 0.5
    if sd == 0 or sd != sd:
        return {s: 0.0 for s in values}
    return {s: (v - m) / sd for s, v in values.items()}
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

def _industry(code):
    """行业粗分(与策略研究端 sector_rotation 一致): 银行/消费金融/科技成长/大盘蓝筹"""
    if code.startswith(('601398', '601939', '601288', '600000', '600036', '600016', '601166')):
        return '银行'
    if code.startswith(('600519', '600887', '601888', '600809', '603288', '600009', '601318')):
        return '消费/金融'
    if code.startswith(('000', '002', '300', '301')):
        return '科技成长'
    return '大盘蓝筹'

def _recent_close(stock):
    """最近收盘价(数据不足返回 None)"""
    try:
        hist = get_history(1, '1d', 'close', stock, skip_paused=True)
        if hist is None or len(hist) == 0:
            return None
        closes = list(hist.columns[0])
        if not closes:
            return None
        v = closes[-1]
        return v if v == v else None
    except Exception:
        return None

def score_sectors(context, data):
    """行业动量打分: 每行业平均收盘价(横截面代理, 与研究端语义一致) → 按动量降序"""
    universe = get_universe_candidates(context, data)
    ind_vals = {}
    for stock in universe:
        v = _recent_close(stock)
        if v is None:
            continue
        ind = _industry(stock)
        ind_vals.setdefault(ind, []).append(v)
    scores = {}
    for ind, vals in ind_vals.items():
        if vals:
            scores[ind] = sum(vals) / len(vals)
    return sorted(scores.keys(), key=lambda i: scores[i], reverse=True)

def pick_in_sector(context, data, sector, n):
    """行业内按收盘价(动量代理)取 TopN"""
    universe = get_universe_candidates(context, data)
    priced = []
    for stock in universe:
        if _industry(stock) != sector:
            continue
        v = _recent_close(stock)
        if v is not None:
            priced.append((stock, v))
    priced.sort(key=lambda kv: kv[1], reverse=True)
    return [s for s, _ in priced[:n]]

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
    g.top_n = {top_n}
    g.momentum_window = 60  # 与研究端 index_enhance 动量回看一致
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
    # 2) 基准成分内因子增强打分 → 行业中性约束
    universe = enhanced_universe(context, data, {industry_neutral})
    if not universe:
        universe = get_universe_candidates(context, data)  # 打分空时回退选股范围
    if not universe:
        return
    set_universe(universe)
    target = position_scale * (1.0 / len(universe))
    for stock in universe:
        order_target_value(stock, context.portfolio.total_value * target)

def _industry(code):
    """行业粗分(与研究端 index_enhance 一致): finance/consumer/tech/other"""
    if code.startswith(('600000', '601', '600036', '600016', '601398')):
        return 'finance'
    if code.startswith(('60', '6018')):
        return 'consumer'
    if code.startswith(('00', '30', '300')):
        return 'tech'
    return 'other'

def _z_scores(values):
    """横截面 z 分数(纯 Python, 与研究端语义一致)"""
    vals = [v for v in values if v is not None]
    if len(vals) < 2:
        return {}
    m = sum(vals) / len(vals)
    sd = (sum((v - m) ** 2 for v in vals) / len(vals)) ** 0.5
    if sd == 0 or sd != sd:
        return {s: 0.0 for s in values}
    return {s: (v - m) / sd for s, v in values.items()}

def enhanced_universe(context, data, industry_neutral):
    """指数增强选股: 动量(近60日涨幅) + 估值(pe倒数, get_fundamentals 不可用时纯动量) z 合成 → 行业中性 TopN"""
    universe = get_universe_candidates(context, data)
    if not universe:
        return []
    mom_scores = {}
    val_scores = {}
    for stock in universe:
        try:
            hist = get_history(g.momentum_window + 1, '1d', 'close', stock, skip_paused=True)
            closes = list(hist.columns[0]) if hist is not None and len(hist) > 0 else []
            if len(closes) >= 2:
                mom_scores[stock] = closes[-1] / closes[0] - 1.0
        except Exception:
            pass
        try:
            fund = get_fundamentals(table='valuation', columns=['pe_ttm'],
                                    codes=[stock], date=context.blotter.current_date)
            pe = None
            if fund is not None and len(fund) > 0:
                try:
                    pe = float(fund.iloc[0]['pe_ttm']) if hasattr(fund, 'iloc') else float(list(fund)[0][-1])
                except Exception:
                    pe = None
            if pe is not None and pe > 0 and pe == pe:
                val_scores[stock] = 1.0 / pe
        except Exception:
            pass
    zm = _z_scores(mom_scores)
    zv = _z_scores(val_scores)
    combined = {}
    for s in universe:
        if s in zm:
            combined[s] = zm[s] + zv.get(s, 0.0)
    if not combined:
        return []
    if industry_neutral:
        by_ind = {}
        for s in combined:
            by_ind.setdefault(_industry(s), []).append(s)
        per = max(1, g.top_n // max(len(by_ind), 1))
        picks = []
        for members in by_ind.values():
            members.sort(key=lambda s: combined[s], reverse=True)
            picks.extend(members[:per])
    else:
        picks = sorted(combined.keys(), key=lambda s: combined[s], reverse=True)
    return picks[:max(g.top_n, 5)]

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

def _recent_amounts(stock, window):
    """近 window 日成交额序列(数据不足返回 None)"""
    try:
        hist = get_history(window + 1, '1d', 'amount', stock, skip_paused=True)
        if hist is None or len(hist) == 0:
            return None
        closes = list(hist.columns[0])
        if len(closes) < 2:
            return None
        return closes
    except Exception:
        return None

def capital_flow_picks(context, data, window, threshold, n):
    """资金流选股: 放量资金流代理(最近成交额 / 前 window 日均) >= threshold → 按比值 TopN
       PTrade 无标准主力净流入字段, 以成交额激增代理与研究端资金流语义对齐"""
    universe = get_universe_candidates(context, data)
    ratio = {}
    for stock in universe:
        amounts = _recent_amounts(stock, window)
        if amounts is None or len(amounts) < 2:
            continue
        base = sum(amounts[:-1]) / (len(amounts) - 1)
        cur = amounts[-1]
        if base <= 0 or cur != cur or base != base:
            continue
        ratio[stock] = cur / base
    filtered = {s: r for s, r in ratio.items() if r >= threshold}
    if not filtered:
        return []  # 与研究端一致: 全部低于阈值 → 无持仓(由 rebalance 回退选股范围)
    ordered = sorted(filtered.keys(), key=lambda s: filtered[s], reverse=True)
    return ordered[:n]

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
