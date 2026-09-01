"""V5.2 T-5.2.4: 参数稳定性分析测试 (TEST-PLAN 3.1 test_param_stability.py)

SENSITIVITY_SPREAD_RATIO 过拟合诊断 + 参数高原可视化数据。
"""
import pytest

from param_stability import (plateau_analysis, sensitivity_spread_ratio,
                             overfit_diagnosis, SENSITIVITY_SPREAD_RATIO)


def _sweep(values, perfs):
    return [{"params": {"window": v}, "annual_return": p}
            for v, p in zip(values, perfs)]


class TestSensitivitySpreadRatio:
    def test_ratio_zero_when_no_drop(self):
        assert sensitivity_spread_ratio(0.20, 0.20) == pytest.approx(0.0)

    def test_ratio_half_when_half_drop(self):
        assert sensitivity_spread_ratio(0.20, 0.10) == pytest.approx(0.5)

    def test_ratio_one_when_zero_perf(self):
        assert sensitivity_spread_ratio(0.20, 0.0) == pytest.approx(1.0)

    def test_ratio_negative_when_perturbed_better(self):
        """扰动后更好 → 比值取 0 (不判过拟合)"""
        assert sensitivity_spread_ratio(0.20, 0.30) == pytest.approx(0.0)

    def test_ratio_positive_perturbed_worse(self):
        assert sensitivity_spread_ratio(0.30, 0.15) == pytest.approx(0.5)

    def test_constant_exported(self):
        assert isinstance(SENSITIVITY_SPREAD_RATIO, (int, float))


class TestPlateauAnalysis:
    def test_wide_plateau(self):
        """平缓高原: 20% 容差内覆盖全扫描范围 → 高原宽"""
        vals = list(range(5, 50, 5))  # 5..45
        perfs = [0.14, 0.15, 0.155, 0.16, 0.16, 0.16, 0.155, 0.15, 0.14]
        rep = plateau_analysis(_sweep(vals, perfs), "window")
        assert rep["best_param"] == 25
        assert rep["plateau_ratio"] >= 0.5  # 高原覆盖过半扫描范围

    def test_sharp_peak(self):
        """尖锐尖峰: 偏离最佳即大幅衰减 → 高原窄 (过拟合迹象)"""
        vals = list(range(5, 55, 5))
        perfs = [0.02, 0.03, 0.05, 0.08, 0.16, 0.05, 0.04, 0.03, 0.02, 0.01]
        rep = plateau_analysis(_sweep(vals, perfs), "window")
        assert rep["best_param"] == 25
        assert rep["plateau_ratio"] < 0.3

    def test_best_identifies_global_max(self):
        vals = [10, 20, 30, 40]
        perfs = [0.1, 0.3, 0.2, 0.05]
        rep = plateau_analysis(_sweep(vals, perfs), "window")
        assert rep["best_param"] == 20
        assert rep["best_perf"] == 0.3

    def test_plateau_bounds(self):
        vals = [5, 10, 15, 20, 25, 30, 35]
        perfs = [0.08, 0.09, 0.10, 0.10, 0.10, 0.09, 0.08]
        rep = plateau_analysis(_sweep(vals, perfs), "window", tolerance=0.1)
        assert rep["plateau_min"] <= rep["best_param"] <= rep["plateau_max"]
        assert rep["plateau_max"] >= rep["plateau_min"]

    def test_empty_results(self):
        rep = plateau_analysis([], "window")
        assert rep["best_param"] is None

    def test_perf_key_custom(self):
        vals = [10, 20, 30]
        rows = [{"params": {"k": v}, "custom": p} for v, p in zip(vals, [0.2, 0.5, 0.3])]
        rep = plateau_analysis(rows, "k", perf_key="custom")
        assert rep["best_param"] == 20


class TestOverfitDiagnosis:
    def test_robust_flat(self):
        """平坦参数面 → robust"""
        sweep = _sweep([10, 20, 30], [0.12, 0.13, 0.12])
        diag = overfit_diagnosis(sweep, "window")
        assert diag["verdict"] == "robust"
        assert diag["spread_ratio"] < 0.5

    def test_overfit_sharp(self):
        """尖峰 → overfit"""
        sweep = _sweep([10, 20, 30], [0.04, 0.16, 0.03])
        diag = overfit_diagnosis(sweep, "window")
        assert diag["verdict"] == "overfit"
        assert diag["spread_ratio"] >= 0.5

    def test_missing_neighbors_single(self):
        """单点无邻居 → 无法诊断 (verdict unknown)"""
        sweep = _sweep([20], [0.15])
        diag = overfit_diagnosis(sweep, "window")
        assert diag["verdict"] in ("robust", "overfit", "unknown")

    def test_keys_present(self):
        sweep = _sweep([10, 20, 30], [0.10, 0.12, 0.11])
        diag = overfit_diagnosis(sweep, "window")
        for k in ("verdict", "spread_ratio", "best_param", "plateau_ratio"):
            assert k in diag
