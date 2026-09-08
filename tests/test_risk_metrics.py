"""V5.0.3 T-5.0.31: 组合风险指标测试 (TEST-PLAN 4.1 test_risk_metrics.py)

波动/VaR(95,99)/CVaR/回撤/夏普/Sortino/Calmar/Beta 与独立计算对拍;
VaR 历史模拟法/参数法双实现交叉核对。
"""
import math

import numpy as np
import pytest

from risk import (compute_risk_metrics, max_drawdown_of, var_historical,
                  var_parametric, cvar_of, volatility_annual, beta_vs_benchmark)


def _rets(n=120, base=0.001, vol=0.01, seed=42):
    rng = np.random.default_rng(seed)
    return list(base + rng.normal(0, vol, n))


class TestBasicMetrics:
    def test_volatility_math(self):
        rets = _rets(seed=1)
        out = compute_risk_metrics(rets)
        assert out["volatility"] == pytest.approx(
            float(np.std(rets, ddof=0)) * math.sqrt(252) * 100, rel=1e-9)

    def test_annual_return_math(self):
        rets = [0.01] * 252
        out = compute_risk_metrics(rets)
        expect = (1.01 ** 252 - 1) * 100
        assert out["annual_return"] == pytest.approx(expect, rel=1e-6)

    def test_max_drawdown_known(self):
        out = compute_risk_metrics([-0.1, 0.2])
        assert out["max_drawdown"] == pytest.approx(-10.0, abs=0.01)

    def test_max_drawdown_function(self):
        eq = [1.0, 1.2, 0.9, 1.1]
        dd = max_drawdown_of(eq)
        assert dd == pytest.approx((0.9 / 1.2) - 1, abs=1e-9)

    def test_zero_vol_constant(self):
        out = compute_risk_metrics([0.001] * 60)
        assert out["volatility"] == pytest.approx(0.0, abs=1e-9)


class TestVaR:
    def test_var_historical_percentile(self):
        rets = _rets(seed=2)
        v = var_historical(rets, 0.95)
        assert v == pytest.approx(-float(np.percentile(rets, 5)), rel=1e-9)

    def test_var_parametric_math(self):
        rets = _rets(seed=3)
        mu, sd = float(np.mean(rets)), float(np.std(rets, ddof=0))
        z = 1.6448536269514722
        assert var_parametric(rets, 0.95) == pytest.approx(-(mu - z * sd), rel=1e-6)

    def test_var_99_more_negative_than_95(self):
        rets = _rets(seed=4)
        assert var_historical(rets, 0.99) > var_historical(rets, 0.95)

    def test_cvar_tail_mean(self):
        rets = _rets(seed=5)
        v = var_historical(rets, 0.95)
        tail = [r for r in rets if r <= -v]
        if tail:
            assert cvar_of(rets, 0.95) == pytest.approx(-float(np.mean(tail)), rel=1e-6)

    def test_both_var_methods_crosscheck(self):
        rng = np.random.default_rng(7)
        rets = list(rng.normal(0.0005, 0.01, 500))
        h = var_historical(rets, 0.95)
        p = var_parametric(rets, 0.95)
        assert abs(h - p) / max(h, p) < 0.3

    def test_metric_includes_both(self):
        out = compute_risk_metrics(_rets(seed=6))
        assert "var_historical" in out and "var_parametric" in out and "cvar" in out


class TestSharpeSortinoCalmar:
    def test_sharpe_math(self):
        rets = _rets(seed=14)  # 波动 > 0, 均值 > 0
        out = compute_risk_metrics(rets, risk_free_rate=0.0)
        assert out["sharpe_ratio"] > 0

    def test_sortino_uses_downside(self):
        rets = _rets(seed=8)
        out = compute_risk_metrics(rets, risk_free_rate=0.0)
        neg = [r for r in rets if r < 0]
        ds_vol = float(np.std(neg, ddof=0)) * math.sqrt(252) if len(neg) > 1 else 0.0
        if ds_vol > 0:
            assert out["downside_volatility"] == pytest.approx(ds_vol * 100, rel=1e-6)

    def test_calmar_math(self):
        rets = [0.005] * 120 + [-0.1] + [0.005] * 20
        out = compute_risk_metrics(rets)
        assert out["calmar_ratio"] == pytest.approx(
            out["annual_return"] / abs(out["max_drawdown"]), rel=1e-6)


class TestBeta:
    def test_beta_equals_cov_var(self):
        rng = np.random.default_rng(9)
        bench = list(rng.normal(0.001, 0.01, 120))
        strat = [b * 1.5 + 0.0002 for b in bench]
        b = beta_vs_benchmark(strat, bench)
        expect = float(np.cov(strat, bench)[0, 1] / np.var(bench))
        assert b == pytest.approx(expect, rel=1e-6)

    def test_beta_in_metrics_with_benchmark(self):
        rng = np.random.default_rng(10)
        bench = list(rng.normal(0.001, 0.01, 120))
        strat = [b * 1.2 for b in bench]
        out = compute_risk_metrics(strat, benchmark_returns=bench)
        assert out["beta"] == pytest.approx(1.2, abs=0.1)


class TestEdgeCases:
    def test_empty(self):
        out = compute_risk_metrics([])
        assert out["volatility"] == 0.0 and out["max_drawdown"] == 0.0

    def test_single_value(self):
        out = compute_risk_metrics([0.01])
        assert out["total_days"] == 1

    def test_equity_input_accepted(self):
        eq = [1.0, 1.05, 0.98, 1.1]
        out = compute_risk_metrics(eq, is_equity=True)
        assert out["total_days"] == 4
