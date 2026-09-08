"""T-5.1.15: 多重检验提示 (factor_ic) — 试验因子数 + IC 显著性校正。

FR-5.1.1.5: 试验因子越多, 偶然显著概率越大; 用 t 统计量 + Bonferroni/FDR 校正。
"""
import pytest
from factor_ic import (
    ic_t_statistic, bonferroni_alpha, fdr_alpha,
    multiple_testing_warning, multiple_testing_report,
)


class TestIcTStatistic:
    def test_positive_ic_t(self):
        # IC 序列有正变差 → t 大 (均值/std_er)
        ics = [0.03, 0.04, 0.05, 0.06, 0.07, 0.04, 0.05, 0.06, 0.05, 0.04]
        t = ic_t_statistic(ics)
        assert t is not None and t > 1

    def test_zero_ics_zero_t(self):
        ics = [0.0, 0.0, 0.0, 0.0]
        t = ic_t_statistic(ics)
        assert t == pytest.approx(0.0, abs=1e-9)

    def test_empty_none(self):
        assert ic_t_statistic([]) is None
        assert ic_t_statistic([None, None]) is None

    def test_single_sample_none(self):
        # 单样本无法估标准误 → None
        assert ic_t_statistic([0.05]) is None


class TestBonferroni:
    def test_no_correction_single_factor(self):
        assert bonferroni_alpha(1, 0.05) == pytest.approx(0.05)

    def test_correction_10_factors(self):
        assert bonferroni_alpha(10, 0.05) == pytest.approx(0.005)

    def test_zero_factors(self):
        assert bonferroni_alpha(0, 0.05) == pytest.approx(0.05)  # 退化不除零


class TestFdr:
    def test_fdr_bh_10_factors(self):
        # BH 步骤: alpha * i / m, 最显著 (最小 p) 的阈值 = alpha/m
        alphas = fdr_alpha([0.001, 0.01, 0.1], alpha=0.05)
        assert len(alphas) == 3
        # 最小 p 的阈值 <= alpha
        assert alphas[0] <= 0.05

    def test_fdr_empty(self):
        assert fdr_alpha([], alpha=0.05) == []


class TestWarning:
    def test_many_factors_flagged(self):
        # 50 个试验因子, 名义 t 显著 → 警示
        w = multiple_testing_warning(n_factors=50, t_stats=[2.2] * 5, alpha=0.05)
        assert w['n_factors'] == 50
        assert w['flagged'] is True
        assert w['bonferroni_alpha'] == pytest.approx(0.001)
        assert w['n_survive'] == 0  # 2.2 的 t 不显著于 0.001

    def test_few_factors_no_flag(self):
        w = multiple_testing_warning(n_factors=3, t_stats=[2.5], alpha=0.05)
        assert w['flagged'] is False

    def test_report_structure(self):
        # {factor: {ic_mean, icir, t_stat}} → 综合报告
        results = {
            'mom': {'ic_mean': 0.05, 'icir': 1.0, 't_stat': 3.0},
            'rev': {'ic_mean': 0.02, 'icir': 0.4, 't_stat': 1.2},
        }
        rep = multiple_testing_report(results, n_factors=20, alpha=0.05)
        assert 'n_factors' in rep
        assert 'bonferroni_alpha' in rep
        assert 'survive' in rep
        assert 'flagged' in rep
        assert rep['n_factors'] == 20
