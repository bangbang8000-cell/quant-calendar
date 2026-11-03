#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""回测实验室 (v7.3.0 / B7.3, PRD FR-7.3.3)

设计要点（防未来函数是硬约束）：
1. **信号只用 t 日及之前的数据**（`score` 基于 `closes[-lookback:]`）
2. **收益从 t+1 开始计**（`lag=1`）：t 日收盘生成信号，t+1 日才吃到收益
3. 每个交易日按信号换仓，**换手按双边成本**计（佣金 + 印花税 + 滑点）
4. 样本内外分割：`in_sample_frac` 之前训练、之后评估（同一套参数，不做参数搜索，
   避免"用样本外调参"这种自欺）

所有回测结果必须与 `pit_audit` 一起展示（`/api/research/backtest-lab` 会带审计快照）。
"""

import logging
import math

logger = logging.getLogger(__name__)

#: 默认成本（bps）：佣金 2.5 + 印花税 10（仅卖出）+ 滑点 5
DEFAULT_COST_BPS = {'commission': 2.5, 'stamp': 10.0, 'slippage': 5.0}


def _num(v):
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def build_returns(panel):
    """面板 → {code: [(date, close)]}，并按日期升序。忽略无效行。"""
    by_code = {}
    for row in panel or []:
        code = row.get('ts_code') or row.get('thscode')
        date = row.get('trade_date') or row.get('date')
        close = _num(row.get('close'))
        if not code or not date or close is None or close <= 0:
            continue
        by_code.setdefault(code, []).append((str(date), close))
    for code in by_code:
        by_code[code].sort(key=lambda x: x[0])
    return by_code


def all_dates(by_code):
    ds = set()
    for series in (by_code or {}).values():
        ds.update(d for d, _ in series)
    return sorted(ds)


def momentum_score(series, idx, lookback):
    """t 日动量：close[t] / close[t-lookback] - 1。数据不足返回 None。"""
    if idx - lookback < 0:
        return None
    c0 = series[idx - lookback][1]
    c1 = series[idx][1]
    if not c0:
        return None
    return c1 / c0 - 1.0


def _cost_rate(cost_bps, selling=False):
    bps = float(cost_bps.get('commission', 0)) + float(cost_bps.get('slippage', 0))
    if selling:
        bps += float(cost_bps.get('stamp', 0))
    return bps / 10000.0


def run_backtest(panel, lookback=20, top_k=5, cost_bps=None, lag=1):
    """按动量选股回测。

    panel: [{ts_code, trade_date, close}]（已按 PIT 截断）
    返回 {'daily': [...], 'metrics': {...}, 'trades': [...]}
    """
    cost_bps = cost_bps or dict(DEFAULT_COST_BPS)
    by_code = build_returns(panel)
    dates = all_dates(by_code)
    if len(dates) < lookback + lag + 2:
        return {'available': False, 'reason': 'insufficient_history',
                'dates': len(dates), 'need': lookback + lag + 2}

    # 每只股票建立 date → index 映射，便于 PIT 定位
    index_of = {c: {d: i for i, (d, _) in enumerate(s)} for c, s in by_code.items()}
    equity = 1.0
    daily = []
    prev_holdings = set()
    total_turnover = 0.0

    for t_idx in range(lookback, len(dates) - lag):
        t = dates[t_idx]
        scored = []
        for code, series in by_code.items():
            i = index_of[code].get(t)
            if i is None:
                continue
            s = momentum_score(series, i, lookback)
            if s is not None:
                scored.append((code, s))
        if not scored:
            continue
        scored.sort(key=lambda kv: -kv[1])
        holdings = [c for c, _ in scored[:max(1, int(top_k))]]

        # 换手成本：买入/卖出各按各自方向计
        bought = [c for c in holdings if c not in prev_holdings]
        sold = [c for c in prev_holdings if c not in holdings]
        w_buy = len(bought) / max(1, len(holdings))
        w_sell = len(sold) / max(1, len(prev_holdings) or 1)
        total_turnover += w_buy + w_sell
        cost = w_buy * _cost_rate(cost_bps) + w_sell * _cost_rate(cost_bps, selling=True)
        equity *= (1.0 - cost)

        # 收益：t → t+lag（用 lag=1 即次日；信号来自 t 日收盘，收益不含 t 日）
        rets = []
        for code in holdings:
            series = by_code[code]
            i = index_of[code][t]
            j = i + lag
            if j >= len(series):
                continue
            r = series[j][1] / series[i][1] - 1.0
            rets.append(r)
        if rets:
            port_ret = sum(rets) / len(rets)
            equity *= (1.0 + port_ret)
            daily.append({'date': t, 'ret': round(port_ret, 6), 'equity': round(equity, 6),
                          'holdings': len(holdings)})
        prev_holdings = set(holdings)

    if not daily:
        return {'available': False, 'reason': 'no_trades'}
    metrics = compute_metrics([d['ret'] for d in daily], total_turnover, len(daily))
    metrics['final_equity'] = round(equity, 4)
    return {
        'available': True,
        'params': {'lookback': lookback, 'top_k': top_k, 'lag': lag,
                   'cost_bps': cost_bps},
        'daily': daily,
        'metrics': metrics,
        'meta': {
            'pit': 't 日收盘生成信号, 收益自 t+%d 起计（lag=%d），不使用未来数据' % (lag, lag),
            'cost': '佣金+滑点按买入/卖出双边, 印花税仅卖出',
            'benchmark': '暂无基准对比（不做择时, 仅衡量选股组合自身表现）',
            'disclaimer': '历史回测不代表未来表现，不构成投资建议',
        },
    }


def compute_metrics(returns, turnover=0.0, periods=None):
    """由日收益序列算绩效指标。"""
    rets = [_num(r) for r in (returns or [])]
    rets = [r for r in rets if r is not None]
    n = periods if periods is not None else len(rets)
    if not rets:
        return {'periods': 0, 'total_return': None, 'annual_return': None,
                'sharpe': None, 'max_drawdown': None, 'win_rate': None,
                'turnover': round(turnover, 4)}
    eq = 1.0
    peak = 1.0
    max_dd = 0.0
    for r in rets:
        eq *= (1.0 + r)
        peak = max(peak, eq)
        max_dd = min(max_dd, eq / peak - 1.0)
    mean = sum(rets) / len(rets)
    var = sum((r - mean) ** 2 for r in rets) / len(rets)
    std = math.sqrt(var)
    sharpe = None if std == 0 else round(mean / std * math.sqrt(252.0), 3)
    total = eq - 1.0
    years = n / 252.0 if n else 0
    annual = None if years <= 0 else round((eq ** (1.0 / years) - 1.0) * 100.0, 2)
    return {
        'periods': n,
        'total_return': round(total * 100.0, 2),
        'annual_return': annual,
        'sharpe': sharpe,
        'max_drawdown': round(max_dd * 100.0, 2),
        'win_rate': round(sum(1 for r in rets if r > 0) / len(rets) * 100.0, 2),
        'turnover': round(turnover, 4),
    }


def split_dates(dates, in_sample_frac=0.7):
    """按时间切分样本内/样本外（不打乱，时间序列必须顺序切）。"""
    ds = list(dates or [])
    if len(ds) < 4:
        return ds, []
    cut = max(1, int(len(ds) * float(in_sample_frac)))
    return ds[:cut], ds[cut:]


def walkforward(panel, lookback=20, top_k=5, in_sample_frac=0.7, cost_bps=None):
    """样本内/样本外分别回测（**同一套参数**，不做样本外调参）。"""
    by_code = build_returns(panel)
    dates = all_dates(by_code)
    if len(dates) < lookback + 4:
        return {'available': False, 'reason': 'insufficient_history', 'dates': len(dates)}
    is_dates, oos_dates = split_dates(dates, in_sample_frac)

    def _slice(keep):
        keep_set = set(keep)
        rows = [r for r in panel or []
                if str(r.get('trade_date') or r.get('date')) in keep_set]
        return rows

    full = run_backtest(panel, lookback=lookback, top_k=top_k, cost_bps=cost_bps)
    is_bt = run_backtest(_slice(is_dates), lookback=lookback, top_k=top_k, cost_bps=cost_bps)
    oos_bt = run_backtest(_slice(oos_dates), lookback=lookback, top_k=top_k, cost_bps=cost_bps)
    return {
        'available': bool(full.get('available')),
        'split': {'in_sample': [is_dates[0], is_dates[-1]] if is_dates else [],
                  'out_of_sample': [oos_dates[0], oos_dates[-1]] if oos_dates else []},
        'full': full.get('metrics'),
        'in_sample': is_bt.get('metrics') or {'reason': is_bt.get('reason')},
        'out_of_sample': oos_bt.get('metrics') or {'reason': oos_bt.get('reason')},
        'meta': {
            'params_fixed': '样本内外使用同一套参数, 不做样本外调参',
            'shrink_note': '样本外明显弱于样本内属正常衰减, 不应据此"再调参"',
            'disclaimer': '历史回测不代表未来表现，不构成投资建议',
        },
    }
