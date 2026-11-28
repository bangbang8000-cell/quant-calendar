"""v7.24 FR-2: 撮合约束（PRD 用例 A–F）。"""
import pytest

from backtest_execution import (ExecutionConfig, _sellable_shares, board_of,
                                limit_pct, run_execution)


def _bar(open_, close=None, prev=None, high=None, low=None, **kw):
    b = {'open': open_, 'close': close if close is not None else open_,
         'high': high if high is not None else max(open_, close or open_),
         'low': low if low is not None else min(open_, close or open_),
         'prev_close': prev if prev is not None else open_}
    b.update(kw)
    return b


def _flat_bars(code, dates, price=10.0, prev=10.0):
    return {code: {d: _bar(price, price, prev) for d in dates}}


D0, D1, D2, D3, D4, D5, D6 = ('2024-01-02', '2024-01-03', '2024-01-04',
                              '2024-01-05', '2024-01-08', '2024-01-09', '2024-01-10')


def test_case_a_one_word_limit_up_no_trade():
    """用例 A：T+1 一字涨停 → 不成交，原因可查。"""
    bars = {'600000.SH': {
        D0: _bar(10, 10, 10, high=10, low=10),
        D1: _bar(11, 11, 10, high=11, low=11),  # 一字涨停
    }}
    res = run_execution({D0: {'600000.SH': 1.0}}, bars,
                        ExecutionConfig(initial_capital=100000, max_defer_days=0))
    assert res.trades == []
    assert res.rejected
    assert '涨停' in res.rejected[0]['reason']


def test_case_b_suspension_deferred_to_resume():
    """用例 B：T+1 停牌 → 顺延至复牌开盘，收益无异常跳变。"""
    bars = {'600000.SH': {
        D0: _bar(10, 10, 10),
        D1: {'open': None, 'close': None, 'suspended': True},
        D2: _bar(10.2, 10.3, 10.0),
    }}
    res = run_execution({D0: {'600000.SH': 1.0}}, bars,
                        ExecutionConfig(initial_capital=100000))
    assert [t['date'] for t in res.trades] == [D2]
    worst = min(res.daily_returns)
    assert worst > -0.12  # 不得出现 -20% 级别跳变


def test_case_c_st_limit_rejected():
    """用例 C：ST ±5% 之外的成交价被拒绝。"""
    bars = {'600001.SH': {
        D0: _bar(10, 10, 10),
        D1: _bar(10.6, 10.6, 10.0, is_st=True),
    }}
    res = run_execution({D0: {'600001.SH': 1.0}}, bars,
                        ExecutionConfig(initial_capital=100000, max_defer_days=0))
    assert res.trades == []
    assert '涨停' in res.rejected[0]['reason']


def test_case_d_lot_size_and_cash_non_negative():
    """用例 D：10 万元买 3 只 100 元股 → 各 300 股，余款 ≥0。"""
    codes = ['600000.SH', '600001.SH', '600002.SH']
    bars = {c: {D0: _bar(100, 100, 100), D1: _bar(100, 100, 100),
                D2: _bar(100, 100, 100)} for c in codes}
    res = run_execution({D0: {c: 1 / 3 for c in codes}}, bars,
                        ExecutionConfig(initial_capital=100000))
    assert len(res.trades) == 3
    assert all(t['shares'] == 300 for t in res.trades)
    assert res.equity_curve[-1]['cash'] >= 0


def test_case_e_costs_deducted():
    """用例 E：佣金（最低 5 元）+ 印花税（仅卖出）+ 滑点 + 冲击均扣除。"""
    bars = {'600000.SH': {D0: _bar(100, 100, 100), D1: _bar(100, 101, 100),
                          D2: _bar(101, 101, 100)}}
    res = run_execution({D0: {'600000.SH': 1.0}}, bars,
                        ExecutionConfig(initial_capital=100000))
    buy = res.trades[0]
    assert buy['cost'] > 0
    # 卖出：信号 D1 清仓 → D2 卖出，含印花税
    res2 = run_execution({D0: {'600000.SH': 1.0}, D1: {}}, bars,
                         ExecutionConfig(initial_capital=100000))
    sells = [t for t in res2.trades if t['side'] == 'sell']
    assert sells and sells[0]['cost'] > 0


def test_case_f_t_plus_one_lock():
    """用例 F：当日买入不可当日卖出。"""
    assert _sellable_shares({'shares': 300, 'bought_date': D1, 'bought_today': 300}, D1) == 0
    assert _sellable_shares({'shares': 300, 'bought_date': D1, 'bought_today': 0}, D2) == 300


def test_case_g_five_day_suspension_gives_up():
    """连续 5 个交易日无法成交 → 放弃并记录原因。"""
    bars = {'600000.SH': {D0: _bar(10, 10, 10)}}
    for d in (D1, D2, D3, D4, D5, D6):
        bars['600000.SH'][d] = {'open': None, 'suspended': True}
    res = run_execution({D0: {'600000.SH': 1.0}}, bars,
                        ExecutionConfig(initial_capital=100000, max_defer_days=5))
    assert res.trades == []
    assert any('连续 5 个交易日' in r['reason'] for r in res.rejected)


def test_limit_down_defers_sell():
    """跌停不可卖，顺延到下一可交易开盘卖出。"""
    bars = {'600000.SH': {
        D0: _bar(10, 10, 10),
        D1: _bar(10, 10.2, 10),
        D2: _bar(9, 9, 10.2, high=9, low=9),   # 一字跌停
        D3: _bar(9.2, 9.3, 9.0),
    }}
    res = run_execution({D0: {'600000.SH': 1.0}, D1: {}}, bars,
                        ExecutionConfig(initial_capital=100000))
    sells = [t for t in res.trades if t['side'] == 'sell']
    assert sells and sells[0]['date'] == D3


def test_board_and_limit_rules():
    assert board_of('688001.SH') == 'star'
    assert board_of('300001.SZ') == 'gem'
    assert board_of('600000.SH') == 'main'
    assert limit_pct('688001.SH') == 0.20
    assert limit_pct('600000.SH') == 0.10
    assert limit_pct('600000.SH', is_st=True) == 0.05
