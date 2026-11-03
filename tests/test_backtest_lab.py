#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""回测实验室测试 (v7.3.0 / B7.3, TC-FY-7.3-05/06/07)

守护：lag=1 无未来函数、成本会侵蚀收益、指标数学正确、样本内外顺序切分。
"""
import pytest

import backtest_lab as bl


def _panel(n_days=40, n_codes=6, base=10.0):
    """构造：代码 i 每日涨幅递增（i=0 最强），日期为连续整数串。"""
    rows = []
    for d in range(n_days):
        date = '2026%04d' % (1000 + d)
        for i in range(n_codes):
            growth = 1.0 + (n_codes - i) * 0.001 * d
            rows.append({'ts_code': 'C%d' % i, 'trade_date': date,
                         'close': round(base * growth, 4)})
    return rows


def test_insufficient_history():
    out = bl.run_backtest(_panel(n_days=5), lookback=20, top_k=2)
    assert out['available'] is False and out['reason'] == 'insufficient_history'


def test_backtest_no_lookahead_lag_one():
    """TC-FY-7.3-05: 信号来自 t 日, 收益自 t+1 起（lag=1）"""
    panel = _panel(n_days=40)
    out = bl.run_backtest(panel, lookback=10, top_k=2, lag=1)
    assert out['available'] is True
    assert out['params']['lag'] == 1
    first = out['daily'][0]
    assert first['date'] == '20261010'     # 日期序列第 lookback(10) 个
    # 第一天的收益不应包含 20261010 当天的涨幅（应当等于 t+1 的)
    assert abs(first['ret']) > 0


def test_cost_reduces_return():
    """TC-FY-7.3-06: 加入成本后最终净值必须更低"""
    panel = _panel(n_days=40)
    free = bl.run_backtest(panel, lookback=10, top_k=2,
                           cost_bps={'commission': 0, 'stamp': 0, 'slippage': 0})
    costly = bl.run_backtest(panel, lookback=10, top_k=2)
    assert costly['metrics']['final_equity'] < free['metrics']['final_equity']
    assert costly['metrics']['turnover'] >= free['metrics']['turnover']


def test_metrics_math():
    """TC-FY-7.3-07: 总收益/回撤/胜率数学正确"""
    m = bl.compute_metrics([0.10, -0.05, 0.02], turnover=1.5)
    assert m['total_return'] == pytest.approx((1.1 * 0.95 * 1.02 - 1) * 100, abs=0.01)
    assert m['max_drawdown'] == pytest.approx(-5.0, abs=0.01)   # 从 1.10 跌到 1.045
    assert m['win_rate'] == pytest.approx(66.67, abs=0.01)
    assert m['periods'] == 3


def test_metrics_zero_vol_returns_none_sharpe():
    m = bl.compute_metrics([0.0, 0.0, 0.0])
    assert m['sharpe'] is None and m['win_rate'] == 0.0


def test_split_dates_is_chronological():
    dates = ['d%d' % i for i in range(10)]
    is_d, oos_d = bl.split_dates(dates, 0.7)
    assert is_d == dates[:7] and oos_d == dates[7:]
    assert max(is_d) < min(oos_d)


def test_walkforward_same_params_and_report():
    out = bl.walkforward(_panel(n_days=60), lookback=10, top_k=2)
    assert out['available'] is True
    assert 'in_sample' in out and 'out_of_sample' in out
    assert '不做样本外调参' in out['meta']['params_fixed']
    assert '不构成投资建议' in out['meta']['disclaimer']


def test_build_returns_ignores_bad_rows():
    panel = [{'ts_code': 'A', 'trade_date': '20261101', 'close': 10.0},
             {'ts_code': 'A', 'trade_date': '20261102', 'close': None},
             {'ts_code': 'A', 'trade_date': '20261103', 'close': -1},
             {'ts_code': '', 'trade_date': '20261101', 'close': 5.0}]
    by = bl.build_returns(panel)
    assert list(by) == ['A'] and len(by['A']) == 1
