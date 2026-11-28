"""v7.24 FR-1/FR-2: strategy_sdk 统一入口接入 T+1 撮合。"""
import pandas as pd

from strategy_sdk.backtest import backtest_holdings


def _bars(code, dates):
    out = {code: {}}
    price = 10.0
    for i, d in enumerate(dates):
        price = 10.0 + i * 0.1
        out[code][d] = {'open': price, 'close': price + 0.05,
                        'high': price + 0.1, 'low': price - 0.1,
                        'prev_close': price - 0.1}
    return out


def test_backtest_holdings_with_prices_uses_t_plus_1_open():
    dates = ['20260105', '20260106', '20260107', '20260108']
    holdings = pd.DataFrame({ '600000': [1.0, 1.0, 1.0, 1.0] }, index=dates)
    prices = _bars('600000', dates)
    res = backtest_holdings(holdings, returns=None, prices=prices,
                            initial_capital=100000)
    assert res['success'] is True
    assert res['execution_mode'] == 'T+1_open'
    assert res['adjust_mode'] == 'qfq'
    assert res['trades'] and res['trades'][0]['date'] == '20260106'
    # 4 个交易日 → 样本不足，不出年化
    assert res['annual_return'] is None
    assert '样本不足' in res['annual_return_reason']


def test_backtest_holdings_without_prices_marks_close_approx():
    dates = ['20260105', '20260106', '20260107']
    holdings = pd.DataFrame({'600000': [1.0, 1.0, 1.0]}, index=dates)
    returns = pd.DataFrame({'600000': [0.0, 0.01, -0.01]}, index=dates)
    res = backtest_holdings(holdings, returns=returns)
    assert res['success'] is True
    assert res['execution_mode'] == 'close_approx'
    assert res['annual_return'] is None
