"""T-5.1.14: 多因子合成 (factor_composite) — 等权/IC加权/ICIR加权 + 合成后重评价。

FR-5.1.1.4: 多因子合成提升稳健性; 合成后必须重新做完整因子评价。
"""
import pytest
import pandas as pd
import numpy as np
from factor_composite import (
    composite_equal_weight, composite_ic_weight, composite_icir_weight,
    composite_after_eval, build_composite_report, _validate_aligned,
)


def _fdf(seed):
    """构造 MultiIndex(date,symbol) 因子 DataFrame"""
    dates = ['20260101', '20260102', '20260103']
    stocks = ['a', 'b', 'c', 'd', 'e']
    idx = pd.MultiIndex.from_product([dates, stocks], names=['date', 'symbol'])
    rng = np.random.default_rng(seed)
    return pd.Series(rng.normal(size=len(idx)), index=idx)


class TestValidateAligned:
    def test_mismatched_index_raises(self):
        f1 = _fdf(1)
        f2 = _fdf(2).copy()
        # 构造不同 index: 不同日期
        f2.index = pd.MultiIndex.from_product(
            [['19990101', '19990102', '19990103'], ['a', 'b', 'c', 'd', 'e']],
            names=['date', 'symbol'])
        with pytest.raises(ValueError):
            _validate_aligned(f1, f2)


class TestEqualWeight:
    def test_equal_weight_mean(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        out = composite_equal_weight([f1, f2])
        # 等权 = 逐元素均值
        expected = (f1 + f2) / 2
        assert out.index.equals(f1.index)
        assert np.allclose(out.values, expected.values, atol=1e-9)

    def test_single_factor_identity(self):
        f = _fdf(1)
        out = composite_equal_weight([f])
        assert np.allclose(out.values, f.values, atol=1e-9)

    def test_three_factors(self):
        fs = [_fdf(i) for i in range(1, 4)]
        out = composite_equal_weight(fs)
        expected = sum(fs) / 3
        assert np.allclose(out.values, expected.values, atol=1e-9)

    def test_empty_raises(self):
        with pytest.raises(ValueError):
            composite_equal_weight([])


class TestIcWeight:
    def test_ic_weight_positive_corr(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        # f1 IC 高 → 权重高
        out = composite_ic_weight([f1, f2], [0.1, 0.01])
        # 计算期望权重: w_i = ic_i / sum(ic)
        w1 = 0.1 / 0.11
        expected = w1 * f1 + (1 - w1) * f2
        assert np.allclose(out.values, expected.values, atol=1e-9)

    def test_ic_weight_negative_ic_clamped(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        # 负 IC → 权重 0 (不反向押注, 保守)
        out = composite_ic_weight([f1, f2], [0.1, -0.05])
        assert np.allclose(out.values, f1.values, atol=1e-9)

    def test_ic_weight_all_zero(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        # 全部零/负 IC → 等权回退
        out = composite_ic_weight([f1, f2], [0.0, -0.1])
        assert np.allclose(out.values, (f1 + f2) / 2, atol=1e-9)

    def test_ic_weight_length_mismatch_raises(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        with pytest.raises(ValueError):
            composite_ic_weight([f1, f2], [0.1])


class TestIcIrWeight:
    def test_icir_weight(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        out = composite_icir_weight([f1, f2], [0.8, 0.2])
        w1 = 0.8 / 1.0
        expected = w1 * f1 + 0.2 * f2
        assert np.allclose(out.values, expected.values, atol=1e-9)

    def test_icir_weight_negative(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        out = composite_icir_weight([f1, f2], [0.5, -0.3])
        assert np.allclose(out.values, f1.values, atol=1e-9)

    def test_icir_all_negative_equal_fallback(self):
        f1 = _fdf(1)
        f2 = _fdf(2)
        out = composite_icir_weight([f1, f2], [-0.2, -0.1])
        assert np.allclose(out.values, (f1 + f2) / 2, atol=1e-9)


class TestAfterEval:
    def _panel_for(self, f):
        # 由因子序列构造 IC panel (future_return = 因子自身 → 完全正相关)
        panel = []
        for d in f.index.get_level_values(0).unique():
            sub = f[f.index.get_level_values(0) == d]
            panel.append({
                'date': d,
                'stocks': [{'code': s, 'factor_value': float(sub.loc[d, s]),
                            'future_return': {'n5': float(sub.loc[d, s])}}
                           for s in sub.index.get_level_values(1)]
            })
        return panel

    def test_after_eval_returns_ic_eval(self):
        f = _fdf(1)
        panel = self._panel_for(f)
        rep = composite_after_eval(f, panel, window='n5')
        assert 'ic_mean' in rep and 'icir' in rep and 'grade' in rep
        assert rep['ic_mean'] == pytest.approx(1.0, abs=0.01)  # 完全正相关


class TestBuildCompositeReport:
    def test_report_all_methods(self):
        fs = [_fdf(i) for i in range(1, 4)]
        ics = [0.1, 0.08, 0.05]
        icirs = [0.7, 0.5, 0.3]
        rep = build_composite_report(fs, ics, icirs)
        assert set(rep.keys()) == {'equal', 'ic', 'icir'}
        for k, v in rep.items():
            assert 'weights' in v
            assert 'factor' in v  # 合成因子值

    def test_report_weights_sum_to_one(self):
        fs = [_fdf(i) for i in range(1, 4)]
        rep = build_composite_report(fs, [0.1, 0.08, 0.05], [0.7, 0.5, 0.3])
        assert sum(rep['ic']['weights']) == pytest.approx(1.0, abs=0.001)
        assert sum(rep['icir']['weights']) == pytest.approx(1.0, abs=0.001)
        assert sum(rep['equal']['weights']) == pytest.approx(1.0, abs=0.001)

    def test_report_empty_factors(self):
        assert build_composite_report([], [], []) == {}
