"""T-5.1.11: 截面处理三步 (factor_preprocess) — 去极值/中性化/标准化纯函数。

FR-5.1.1.1: 去极值(MAD/winsorize) → 行业+市值中性化回归 → z-score, 顺序固定, 可复现。
"""
import pytest
import pandas as pd
import numpy as np
from factor_preprocess import (
    mad_winsorize, winsorize, zscore, neutralize,
    preprocess_pipeline, preprocess_with_report,
)


# ==================== 1. 去极值 ====================

class TestMadWinsorize:
    def test_normal_data_unchanged(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, 5.0])
        out = mad_winsorize(s)
        assert list(out) == pytest.approx(list(s))

    def test_extreme_clipped(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, 100.0])
        out = mad_winsorize(s)
        assert out[4] < 100.0  # 极端值被拉回
        assert out[4] > 5.0    # 但仍高于正常值
        assert out[:4].tolist() == pytest.approx([1.0, 2.0, 3.0, 4.0])

    def test_nan_handled(self):
        s = pd.Series([1.0, np.nan, 3.0, 4.0, 100.0])
        out = mad_winsorize(s)
        assert pd.isna(out[1])  # NaN 保留
        assert out[4] < 100.0

    def test_constant_series_safe(self):
        s = pd.Series([5.0, 5.0, 5.0])
        out = mad_winsorize(s)
        assert list(out) == pytest.approx([5.0, 5.0, 5.0])

    def test_two_values_safe(self):
        s = pd.Series([1.0, 2.0])
        out = mad_winsorize(s)
        assert list(out) == pytest.approx([1.0, 2.0])

    def test_negative_extreme(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, -100.0])
        out = mad_winsorize(s)
        assert out[4] > -100.0

    def test_custom_sigma(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, 50.0])
        out = mad_winsorize(s, n_sigma=1.0)  # 更严
        assert out[4] < mad_winsorize(s, n_sigma=3.0)[4]


class TestWinsorize:
    def test_percentile_clip(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, 100.0])
        out = winsorize(s, limits=(0.1, 0.1))
        assert out[4] < 100.0
        assert out[4] > 4.0

    def test_limits_symmetric_default(self):
        s = pd.Series(np.arange(1, 101, dtype=float))
        out = winsorize(s, limits=(0.01, 0.01))
        assert out.max() <= s.quantile(0.99) + 1e-9
        assert out.min() >= s.quantile(0.01) - 1e-9


# ==================== 2. 标准化 ====================

class TestZscore:
    def test_mean_zero_std_one(self):
        s = pd.Series([1.0, 2.0, 3.0, 4.0, 5.0])
        out = zscore(s)
        assert out.mean() == pytest.approx(0.0, abs=1e-9)
        # z-score 用总体标准差 (ddof=0) 归一
        assert out.std(ddof=0) == pytest.approx(1.0, abs=1e-9)

    def test_constant_safe(self):
        s = pd.Series([3.0, 3.0, 3.0])
        out = zscore(s)
        assert list(out) == pytest.approx([0.0, 0.0, 0.0])

    def test_nan_preserved(self):
        s = pd.Series([1.0, np.nan, 3.0])
        out = zscore(s)
        assert pd.isna(out[1])

    def test_index_preserved(self):
        s = pd.Series([1.0, 2.0, 3.0], index=['a', 'b', 'c'])
        out = zscore(s)
        assert list(out.index) == ['a', 'b', 'c']


# ==================== 3. 中性化回归 ====================

class TestNeutralize:
    def _setup(self):
        # 3 期 × 4 股票
        dates = ['20260101', '20260102', '20260103']
        stocks = ['A', 'B', 'C', 'D']
        idx = pd.MultiIndex.from_product([dates, stocks], names=['date', 'symbol'])
        factor = pd.Series([10, 20, 30, 40, 11, 21, 31, 41, 12, 22, 32, 42], index=idx)
        # 行业: A,B=银行; C,D=科技
        industry = pd.DataFrame(
            {'bank': [1, 1, 0, 0] * 3, 'tech': [0, 0, 1, 1] * 3},
            index=idx)
        # 市值 (对数): 正比于 factor 制造相关性
        mcap = pd.Series([100, 200, 300, 400, 110, 210, 310, 410, 120, 220, 320, 420],
                         index=idx)
        return factor, industry, mcap

    def test_neutralize_returns_residual(self):
        factor, industry, mcap = self._setup()
        out = neutralize(factor, industry, mcap)
        assert isinstance(out, pd.Series)
        assert len(out) == 12
        assert out.notna().all()

    def test_residual_uncorrelated_with_size(self):
        factor, industry, mcap = self._setup()
        out = neutralize(factor, industry, mcap)
        # 残差与市值相关性应显著降低 (原本 factor 与 mcap 强正相关)
        corr_raw = factor.corr(mcap)
        corr_res = out.corr(mcap)
        assert abs(corr_res) < abs(corr_raw)

    def test_residual_mean_near_zero_per_period(self):
        factor, industry, mcap = self._setup()
        out = neutralize(factor, industry, mcap)
        per_period = out.groupby(level=0).mean()
        assert per_period.abs().max() < 1e-8

    def test_missing_factor_nan(self):
        factor, industry, mcap = self._setup()
        factor.iloc[0] = np.nan
        out = neutralize(factor, industry, mcap)
        assert pd.isna(out.iloc[0])
        assert out.iloc[1:].notna().all()

    def test_single_industry_dummy_dropped(self):
        # 只有一个行业哑变量时不应报错 (多重共线性降维)
        factor, industry, mcap = self._setup()
        only_bank = industry[['bank']]
        out = neutralize(factor, only_bank, mcap)
        assert out.notna().all()

    def test_index_mismatch_raises(self):
        factor = pd.Series([1, 2, 3], index=pd.MultiIndex.from_product([['d1'], ['A', 'B', 'C']]))
        mcap = pd.Series([1, 2], index=pd.MultiIndex.from_product([['d1'], ['A', 'B']]))
        with pytest.raises(ValueError):
            neutralize(factor, pd.DataFrame({'x': [1, 1, 1]}, index=factor.index), mcap)


# ==================== 4. 流水线 ====================

class TestPipeline:
    def _data(self):
        dates = ['20260101', '20260102']
        stocks = ['A', 'B', 'C', 'D', 'E']
        idx = pd.MultiIndex.from_product([dates, stocks], names=['date', 'symbol'])
        factor = pd.Series([1, 2, 3, 4, 100, 1.5, 2.5, 3.5, 4.5, 90], index=idx)
        industry = pd.DataFrame(
            {'g1': [1, 1, 0, 0, 0] * 2, 'g2': [0, 0, 1, 1, 1] * 2},
            index=idx)
        mcap = pd.Series(np.linspace(100, 500, 10), index=idx)
        return factor, industry, mcap

    def test_pipeline_order_fixed(self):
        factor, industry, mcap = self._data()
        out = preprocess_pipeline(factor, industry, mcap)
        # 输出 z-score: 每期均值≈0
        per = out.groupby(level=0).mean()
        assert per.abs().max() < 1e-8

    def test_pipeline_extreme_removed(self):
        factor, industry, mcap = self._data()
        out = preprocess_pipeline(factor, industry, mcap)
        # 极端值 100/90 不再主导 (z-score 后界内)
        assert out.abs().max() < 5.0

    def test_pipeline_skip_steps(self):
        factor, industry, mcap = self._data()
        out_mad = preprocess_pipeline(factor, industry, mcap, do_mad=True, do_neutralize=True, do_zscore=True)
        out_no_mad = preprocess_pipeline(factor, industry, mcap, do_mad=False, do_neutralize=True, do_zscore=True)
        # 去极值会改变结果
        assert not out_mad.equals(out_no_mad)

    def test_pipeline_all_false_identity(self):
        factor, industry, mcap = self._data()
        out = preprocess_pipeline(factor, industry, mcap,
                                  do_mad=False, do_neutralize=False, do_zscore=False)
        assert out.equals(factor)

    def test_pipeline_nan_preserved(self):
        factor, industry, mcap = self._data()
        factor.iloc[0] = np.nan
        out = preprocess_pipeline(factor, industry, mcap)
        assert pd.isna(out.iloc[0])

    def test_pipeline_reproducible(self):
        factor, industry, mcap = self._data()
        out1 = preprocess_pipeline(factor, industry, mcap)
        out2 = preprocess_pipeline(factor, industry, mcap)
        assert out1.equals(out2)


# ==================== 5. 报告 ====================

class TestReport:
    def _data(self):
        dates = ['20260101']
        stocks = ['A', 'B', 'C', 'D']
        idx = pd.MultiIndex.from_product([dates, stocks], names=['date', 'symbol'])
        factor = pd.Series([1.0, 2.0, 3.0, 100.0], index=idx)
        industry = pd.DataFrame({'g1': [1, 1, 0, 0], 'g2': [0, 0, 1, 1]}, index=idx)
        mcap = pd.Series([100, 200, 300, 400], index=idx)
        return factor, industry, mcap

    def test_report_has_stats(self):
        factor, industry, mcap = self._data()
        rep = preprocess_with_report(factor, industry, mcap)
        assert 'n' in rep
        assert 'coverage' in rep
        assert 'n_extreme' in rep
        assert 'factor_mean' in rep
        assert 'factor_std' in rep

    def test_report_extreme_count(self):
        factor, industry, mcap = self._data()
        rep = preprocess_with_report(factor, industry, mcap)
        assert rep['n_extreme'] >= 1  # 100 是极端值

    def test_report_coverage(self):
        factor, industry, mcap = self._data()
        rep = preprocess_with_report(factor, industry, mcap)
        assert rep['coverage'] == pytest.approx(1.0)
