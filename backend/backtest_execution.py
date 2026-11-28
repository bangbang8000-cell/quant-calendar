#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.24 FR-2: 撮合层与交易约束（单一成交语义，策略不得直接乘收益）。

口径（PRD §4）：
- T 日收盘生成目标权重 → T+1 交易日 09:30 前复权开盘价成交；
- 涨跌停/ST/一字板不可成交；停牌顺延，连续 5 个交易日无法成交则放弃并记录；
- 买入 100 股整数倍（科创板 200 股），资金不足向下取整、余款留现金；
- T+1：当日买入不可当日卖出；
- 成本四项：佣金（万 3，最低 5 元，双边）+ 印花税（万 5，仅卖出）+ 滑点 0.05% + 冲击 0.03%。

本模块只做纯计算，不取数、不落盘，便于单元测试与对拍。
"""
from dataclasses import dataclass, field
from typing import Dict, List, Optional

from backtest import compute_period_metrics
from cost_model import CostConfig, CostModel

ENGINE_VERSION = '7.24.0'
MAX_DEFER_DAYS = 5


@dataclass
class ExecutionConfig:
    """撮合配置（默认值即 PRD 口径）。"""
    initial_capital: float = 1_000_000.0
    commission_rate: float = 0.0003
    stamp_duty_rate: float = 0.0005
    slippage: float = 0.0005
    impact: float = 0.0003
    min_commission: float = 5.0
    lot_size: int = 100
    star_lot_size: int = 200
    max_defer_days: int = MAX_DEFER_DAYS
    rebalance_tolerance: float = 0.01  # 目标与实际偏差 <1% 净值不调仓
    max_adv_ratio: float = 0.05        # 单票成交额占当日成交额上限

    def cost_model(self) -> CostModel:
        return CostModel(CostConfig(
            commission_rate=self.commission_rate,
            stamp_duty_rate=self.stamp_duty_rate,
            slippage=self.slippage,
            impact=self.impact,
            min_commission=self.min_commission,
        ))


@dataclass
class ExecutionResult:
    success: bool = False
    message: str = ''
    equity_curve: List[dict] = field(default_factory=list)
    daily_returns: List[float] = field(default_factory=list)
    trades: List[dict] = field(default_factory=list)
    rejected: List[dict] = field(default_factory=list)
    warnings: List[str] = field(default_factory=list)
    metrics: dict = field(default_factory=dict)
    execution_mode: str = 'T+1_open'
    adjust_mode: str = 'qfq'


def board_of(code: str) -> str:
    """代码 → 板块（star/gem/bse/main）。"""
    c = str(code or '').split('.')[0]
    if c.startswith(('688', '689')):
        return 'star'
    if c.startswith(('300', '301')):
        return 'gem'
    if c.startswith(('8', '4', '92')):
        return 'bse'
    return 'main'


def limit_pct(code: str, is_st: bool = False) -> float:
    """涨跌停幅度（PRD：主板 ±10%、双创 ±20%、北交所 ±30%、ST ±5%）。"""
    if is_st:
        return 0.05
    board = board_of(code)
    if board == 'star' or board == 'gem':
        return 0.20
    if board == 'bse':
        return 0.30
    return 0.10


def lot_size_of(code: str) -> int:
    return 200 if board_of(code) == 'star' else 100


def _num(v) -> Optional[float]:
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def _bar_limits(code: str, bar: dict) -> tuple:
    """返回 (limit_up, limit_down)，优先使用显式字段，否则按前收计算。"""
    up = _num(bar.get('limit_up'))
    down = _num(bar.get('limit_down'))
    if up is not None and down is not None:
        return up, down
    prev = _num(bar.get('prev_close'))
    if prev is None or prev <= 0:
        return None, None
    pct = limit_pct(code, bool(bar.get('is_st')))
    return round(prev * (1 + pct), 2), round(prev * (1 - pct), 2)


def _is_suspended(bar: dict) -> bool:
    if not bar:
        return True
    if bar.get('suspended'):
        return True
    open_p = _num(bar.get('open'))
    return open_p is None or open_p <= 0


def _is_one_word_limit_up(code: str, bar: dict) -> bool:
    up, _ = _bar_limits(code, bar)
    high, low = _num(bar.get('high')), _num(bar.get('low'))
    if up is None or high is None or low is None:
        return False
    return abs(high - low) < 1e-9 and high >= up - 1e-9


def _is_one_word_limit_down(code: str, bar: dict) -> bool:
    _, down = _bar_limits(code, bar)
    high, low = _num(bar.get('high')), _num(bar.get('low'))
    if down is None or high is None or low is None:
        return False
    return abs(high - low) < 1e-9 and low <= down + 1e-9


def _limit_up_blocked(code: str, bar: dict) -> bool:
    """开盘价触及涨停即不可买入（含一字板）。"""
    up, _ = _bar_limits(code, bar)
    price = _open_price(bar)
    return up is not None and price is not None and price >= up - 1e-9


def _limit_down_blocked(code: str, bar: dict) -> bool:
    """开盘价触及跌停即不可卖出（含一字板）。"""
    _, down = _bar_limits(code, bar)
    price = _open_price(bar)
    return down is not None and price is not None and price <= down + 1e-9


def _open_price(bar: dict) -> Optional[float]:
    return _num(bar.get('open'))


def _close_price(bar: dict) -> Optional[float]:
    c = _num(bar.get('close'))
    return c if c is not None else _open_price(bar)


def _valuation(cash: float, positions: dict, bars: dict, date: str, use_close: bool) -> tuple:
    """按某日价格估值：返回 (equity, price_map)。"""
    prices = {}
    total = float(cash)
    for code, pos in positions.items():
        bar = (bars.get(code) or {}).get(date) or {}
        price = _close_price(bar) if use_close else _open_price(bar)
        if price is None:
            price = _num(pos.get('last_price')) or 0.0
        prices[code] = price
        total += pos['shares'] * price
    return total, prices


def _apply_cost(cm: CostModel, notional: float, is_buy: bool) -> float:
    return cm.compute_trade(notional, is_buy).total


def _sellable_shares(pos: dict, date: str) -> int:
    """T+1：当日买入的股数不可卖。"""
    shares = int(pos.get('shares') or 0)
    if pos.get('bought_date') == date:
        return max(0, shares - int(pos.get('bought_today') or 0))
    return shares


def run_execution(signal_weights: Dict[str, Dict[str, float]],
                  bars: Dict[str, Dict[str, dict]],
                  config: Optional[ExecutionConfig] = None,
                  trading_dates: Optional[List[str]] = None) -> ExecutionResult:
    """执行撮合。

    Args:
        signal_weights: {信号日T: {code: 目标权重}}，T 日收盘生成。
        bars: {code: {date: {open, close, high, low, prev_close, limit_up,
              limit_down, suspended, is_st, amount}}}。
        config: 撮合配置。
        trading_dates: 可选交易日序列；缺省取 bars 中所有日期并集。
    """
    cfg = config or ExecutionConfig()
    cm = cfg.cost_model()
    res = ExecutionResult()

    if trading_dates is None:
        dates_set = set()
        for series in (bars or {}).values():
            dates_set.update(series.keys())
        trading_dates = sorted(dates_set)
    trading_dates = sorted(str(d) for d in (trading_dates or []))
    if len(trading_dates) < 2:
        res.message = '有效交易日不足（需≥2）'
        return res
    if not signal_weights:
        res.message = '无信号，无法执行'
        return res

    signals = {str(k): {str(c): float(w) for c, w in (v or {}).items() if _num(w) is not None}
               for k, v in signal_weights.items()}
    # 信号日 → 下一交易日（成交日）
    exec_of = {}
    for i, d in enumerate(trading_dates[:-1]):
        if d in signals:
            exec_of.setdefault(trading_dates[i + 1], {})
            exec_of[trading_dates[i + 1]] = signals[d]

    cash = float(cfg.initial_capital)
    positions: Dict[str, dict] = {}
    pending: Dict[str, dict] = {}
    last_target: Dict[str, float] = {}
    prev_equity = float(cfg.initial_capital)
    equity_curve: List[dict] = []
    daily_returns: List[float] = []
    executed_any = False

    for date in trading_dates:
        # 1) 今日是否承接昨日信号
        if date in exec_of:
            target = exec_of[date]
            last_target = dict(target)
            for code, w in target.items():
                pending[code] = {'weight': w, 'attempts': 0, 'last_reason': ''}
            # 目标已剔除的标的：安排清仓
            for code in list(positions):
                if code not in target:
                    pending.pop(code, None)
        # 2) 开盘估值
        equity_open, open_px = _valuation(cash, positions, bars, date, use_close=False)
        # 3) 先卖后买
        codes = set(positions) | set(pending)
        for code in sorted(codes):
            bar = (bars.get(code) or {}).get(date) or {}
            price = open_px.get(code) or _open_price(bar)
            pos = positions.get(code) or {'shares': 0, 'cost': 0.0, 'last_price': 0.0}
            want = float(last_target.get(code, 0.0))
            cur_value = pos['shares'] * (price or 0.0)
            target_value = want * max(equity_open, 0.0)
            if cur_value <= target_value * (1 - cfg.rebalance_tolerance):
                continue  # 该标的只需要买入/不动，卖出阶段跳过
            # 需要卖出（目标降为 0 或降权）
            if _is_suspended(bar):
                _defer(pending, code, '停牌无法卖出', cfg, res, date, 'sell')
                continue
            if _limit_down_blocked(code, bar):
                _defer(pending, code, '跌停无法卖出', cfg, res, date, 'sell')
                continue
            sellable = _sellable_shares(pos, date)
            if sellable <= 0:
                _defer(pending, code, 'T+1 当日买入不可卖出', cfg, res, date, 'sell')
                continue
            shares_to_sell = pos['shares'] if want <= 0 else min(
                sellable, max(0, int((cur_value - target_value) / max(price or 1e-9, 1e-9))))
            shares_to_sell = (shares_to_sell // 100) * 100
            if shares_to_sell <= 0:
                continue
            notional = shares_to_sell * price
            if bar.get('amount') and cfg.max_adv_ratio and notional > float(bar['amount']) * cfg.max_adv_ratio:
                shares_to_sell = int(float(bar['amount']) * cfg.max_adv_ratio / max(price, 1e-9) // 100) * 100
                if shares_to_sell <= 0:
                    _defer(pending, code, '流动性不足无法卖出', cfg, res, date, 'sell')
                    continue
                notional = shares_to_sell * price
            cost = _apply_cost(cm, notional, is_buy=False)
            cash += notional - cost
            pos['shares'] -= shares_to_sell
            pos['last_price'] = price
            res.trades.append({'date': date, 'code': code, 'side': 'sell',
                               'shares': shares_to_sell, 'price': round(price, 4),
                               'notional': round(notional, 2), 'cost': round(cost, 2)})
            executed_any = True
            if pos['shares'] <= 0:
                positions.pop(code, None)
            if want <= 0:
                pending.pop(code, None)
        # 4) 买入/补仓
        for code, order in list(pending.items()):
            want = float(order.get('weight') or 0.0)
            if want <= 0:
                continue
            bar = (bars.get(code) or {}).get(date) or {}
            price = _open_price(bar)
            pos = positions.get(code) or {'shares': 0, 'cost': 0.0, 'last_price': 0.0}
            equity_now, _ = _valuation(cash, positions, bars, date, use_close=False)
            target_value = want * equity_now
            cur_value = pos['shares'] * (price or 0.0)
            if cur_value >= target_value * (1 + cfg.rebalance_tolerance):
                continue
            if _is_suspended(bar):
                _defer(pending, code, '停牌无法买入', cfg, res, date, 'buy')
                continue
            if _limit_up_blocked(code, bar):
                _defer(pending, code, '涨停无法买入', cfg, res, date, 'buy')
                continue
            lot = cfg.star_lot_size if board_of(code) == 'star' else cfg.lot_size
            budget = min(max(target_value - cur_value, 0.0), cash)
            shares = int(budget / max(price or 1e-9, 1e-9) // lot) * lot
            # 资金不足则逐手回退，确保 现金 ≥0
            while shares > 0:
                notional = shares * price
                cost = _apply_cost(cm, notional, is_buy=True)
                if notional + cost <= cash + 1e-6:
                    break
                shares -= lot
            if shares <= 0:
                _defer(pending, code, '资金不足或不足一手', cfg, res, date, 'buy')
                continue
            notional = shares * price
            cost = _apply_cost(cm, notional, is_buy=True)
            cash -= (notional + cost)
            old_shares = pos['shares']
            pos['shares'] = old_shares + shares
            pos['cost'] = (pos.get('cost', 0.0) * old_shares + notional + cost) / max(pos['shares'], 1)
            pos['last_price'] = price
            pos['bought_date'] = date
            pos['bought_today'] = int(pos.get('bought_today') or 0) + shares if old_shares else shares
            positions[code] = pos
            res.trades.append({'date': date, 'code': code, 'side': 'buy',
                               'shares': shares, 'price': round(price, 4),
                               'notional': round(notional, 2), 'cost': round(cost, 2)})
            executed_any = True
            pending.pop(code, None)
        # 5) 收盘估值
        equity_close, close_px = _valuation(cash, positions, bars, date, use_close=True)
        for code, pos in positions.items():
            pos['last_price'] = close_px.get(code) or pos.get('last_price') or 0.0
        daily_returns.append(0.0 if prev_equity <= 0 else equity_close / prev_equity - 1.0)
        prev_equity = equity_close
        equity_curve.append({
            'date': date,
            'equity': round(equity_close, 2),
            'cash': round(cash, 2),
            'positions': {c: p['shares'] for c, p in positions.items()},
            'return': round(daily_returns[-1] * 100, 4),
        })

    if not executed_any and not res.trades:
        res.warnings.append('回测区间内未产生任何成交')
    dates = [e['date'] for e in equity_curve]
    metrics = compute_period_metrics(daily_returns, dates=dates, require_min_sample=True)
    res.metrics = metrics
    res.equity_curve = equity_curve
    res.daily_returns = daily_returns
    res.success = True
    res.message = '回测完成（T+1 开盘成交，前复权）'
    if metrics.get('annual_return') is None:
        res.warnings.append(metrics.get('annual_return_reason') or '样本不足（<18个月）')
    return res


def _defer(pending: dict, code: str, reason: str, cfg: ExecutionConfig,
           res: ExecutionResult, date: str, side: str):
    """记录无法成交并按 5 个交易日上限放弃。"""
    order = pending.get(code)
    if order is None:
        order = {'weight': 0.0, 'attempts': 0, 'last_reason': ''}
    order['attempts'] = int(order.get('attempts') or 0) + 1
    order['last_reason'] = reason
    if order['attempts'] > cfg.max_defer_days:
        pending.pop(code, None)
        res.rejected.append({'date': date, 'code': code, 'side': side,
                             'reason': f'连续 {cfg.max_defer_days} 个交易日无法成交：{reason}'})
    else:
        pending[code] = order


def panel_to_returns_and_prices(panel) -> tuple:
    """v7.24 FR-2: 行情面板(date×symbol) → (收益矩阵, prices 字典)。

    prices 键为 YYYYMMDD，供 run_execution 直接使用；面板为空返回 (None, None)。
    """
    if panel is None or getattr(panel, 'empty', True):
        return None, None
    df = panel.reset_index()
    df['date'] = df['date'].astype(str).str.replace('-', '', regex=False).str[:8]
    df['symbol'] = df['symbol'].astype(str)
    returns = df.pivot_table(index='date', columns='symbol',
                             values='close').sort_index().pct_change()
    prices: Dict[str, Dict[str, dict]] = {}
    for row in df.to_dict('records'):
        code, date = str(row.get('symbol') or ''), str(row.get('date') or '')
        if not code or not date:
            continue
        prices.setdefault(code, {})[date] = {
            'open': row.get('open'), 'close': row.get('close'),
            'high': row.get('high'), 'low': row.get('low')}
    return returns, prices


def load_qfq_bars(codes: List[str], start: str = None, end: str = None) -> Dict[str, Dict[str, dict]]:
    """从 DWH 前复权视图加载 OHLCV（不可用时返回空 dict，由调用方明确失败）。"""
    try:
        from dwh.adapter import get_backend
        backend = get_backend()
        rows = backend.panel(start=start, adjust='forward', limit=200000)
    except Exception:  # noqa: BLE001
        return {}
    if not rows:
        return {}
    code_set = set(str(c) for c in (codes or []))
    bars: Dict[str, Dict[str, dict]] = {}
    for row in rows:
        code = str(row.get('thscode') or row.get('ts_code') or '')
        if code_set and code not in code_set:
            continue
        date = str(row.get('date') or '')[:10].replace('-', '')
        if end and date > str(end).replace('-', ''):
            continue
        series = bars.setdefault(code, {})
        series[date] = {
            'open': _num(row.get('open')),
            'close': _num(row.get('close')),
            'high': _num(row.get('high')),
            'low': _num(row.get('low')),
            'amount': _num(row.get('amount')) or _num(row.get('turnover')),
            'suspended': False,
            'is_st': False,
        }
    # 补前收与涨跌停价
    for code, series in bars.items():
        for date in sorted(series):
            bar = series[date]
            keys = sorted(series)
            idx = keys.index(date)
            if idx > 0:
                prev_close = series[keys[idx - 1]].get('close')
                bar['prev_close'] = prev_close
            up, down = _bar_limits(code, bar)
            if up is not None:
                bar['limit_up'] = up
                bar['limit_down'] = down
    return bars
