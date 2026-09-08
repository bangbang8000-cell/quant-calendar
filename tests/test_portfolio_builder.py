"""T-5.1.31: 组合构建 (portfolio_builder) — 合成因子→top N, 等权/市值加权, 组合净值。

FR-5.1.3.1: 由合成因子逐期选 top N 构建组合; 等权/市值加权; 组合净值序列。
"""
import pytest
import pandas as pd
import numpy as np
from portfolio_builder import (
    select_top_n, build_weights, portfolio_nav, build_portfolio,
)


def _factor_df():
    dates = ['20260101', '20260102', '20260103']
    stocks = ['a', 'b', 'c', 'd', 'e']
    return pd.DataFrame(
        [[5, 4, 3, 2, 1],
         [4.5, 4.2, 3.5, 2.1, 1.0],
         [4.8, 4.1, 3.0, 2.5, 0.9]],
        index=dates, columns=stocks)


class TestSelectTopN:
    def test_top_n_selection(self):
        f = _factor_df()
        top = select_top_n(f, n=3, as_of='20260101')
        assert top == ['a', 'b', 'c']  # 值最高 3 个

    def test_top_n_different_dates(self):
        f = _factor_df()
        top2 = select_top_n(f, n=2, as_of='20260102')
        assert top2 == ['a', 'b']
        top3 = select_top_n(f, n=2, as_of='20260103')
        assert top3 == ['a', 'b']

    def test_n_gt_universe(self):
        f = _factor_df()
        top = select_top_n(f, n=10, as_of='20260101')
        assert set(top) == {'a', 'b', 'c', 'd', 'e'}

    def test_nan_handled(self):
        f = _factor_df()
        f.loc['20260101', 'a'] = np.nan
        top = select_top_n(f, n=2, as_of='20260101')
        assert 'a' not in top
        assert top == ['b', 'c']


class TestBuildWeights:
    def test_equal_weight(self):
        f = _factor_df()
        w = build_weights(f, n=2, as_of='20260101', method='equal')
        assert set(w.keys()) == {'a', 'b'}
        assert sum(w.values()) == pytest.approx(1.0)
        assert w['a'] == pytest.approx(0.5)

    def test_mcap_weight(self):
        f = _factor_df()
        mcap = {'a': 100, 'b': 300, 'c': 50, 'd': 10, 'e': 5}
        w = build_weights(f, n=2, as_of='20260101', method='mcap', market_cap=mcap)
        assert set(w.keys()) == {'a', 'b'}
        assert w['a'] == pytest.approx(100 / 400)  # 100/(100+300)
        assert w['b'] == pytest.approx(300 / 400)

    def test_mcap_missing_symbol_dropped(self):
        f = _factor_df()
        mcap = {'a': 100}  # b 缺失
        w = build_weights(f, n=2, as_of='20260101', method='mcap', market_cap=mcap)
        # 缺失市值无法定价 → 剔除出市值加权组合
        assert set(w.keys()) == {'a'}
        assert w['a'] == pytest.approx(1.0)

    def test_invalid_method_raises(self):
        f = _factor_df()
        with pytest.raises(ValueError):
            build_weights(f, n=2, as_of='20260101', method='bad')


class TestPortfolioNav:
    def test_nav_basic(self):
        # 每日持仓 50% a + 50% b, 收益已知
        weights = {'a': 0.5, 'b': 0.5}
        returns = {'a': [0.10, 0.05], 'b': [0.0, 0.05]}  # 每期收益
        nav = portfolio_nav(weights, returns)
        # 期1: 0.5*0.10+0.5*0 = 0.05 → nav 1.05; 期2: 0.5*0.05+0.5*0.05=0.05 → 1.1025
        assert nav[0] == pytest.approx(1.05, abs=1e-9)
        assert nav[1] == pytest.approx(1.1025, abs=1e-9)

    def test_nav_empty(self):
        assert portfolio_nav({}, {}) == []


class TestBuildPortfolio:
    def test_build_portfolio_report(self):
        f = _factor_df()
        ret = pd.DataFrame(
            [[0.01, 0.02, 0.01, 0.03, 0.0],
             [0.02, 0.01, 0.02, 0.01, 0.01],
             [0.01, 0.02, 0.01, 0.01, 0.02]],
            index=f.index, columns=f.columns)
        rep = build_portfolio(f, ret, n=2, method='equal')
        assert 'weights' in rep
        assert 'nav' in rep
        assert 'total_return' in rep
        assert rep['nav'][-1] > 1.0

    def test_build_portfolio_mcap(self):
        f = _factor_df()
        ret = pd.DataFrame(np.full((3, 5), 0.01), index=f.index, columns=f.columns)
        mcap = {'a': 100, 'b': 300, 'c': 50, 'd': 10, 'e': 5}
        rep = build_portfolio(f, ret, n=2, method='mcap', market_cap=mcap)
        assert 'weights' in rep and rep['weights'] is not None
