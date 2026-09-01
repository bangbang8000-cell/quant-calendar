"""V5.2 T-5.2.2: 基准对比测试 (TEST-PLAN 3.1 test_backtest_benchmark.py)

沪深300/中证500/中证1000/自定义基准 + 超额收益 + IR + alpha/beta/tracking error。
"""
import math

import numpy as np
import pytest

from benchmark import (BENCHMARKS, compare_with_benchmark, fetch_benchmark_series,
                       attach_benchmark, benchmark_label, _resolve_code)


def _series(n=60, base=0.001, vol=0.01, seed=1):
    rng = np.random.default_rng(seed)
    return list(base + rng.normal(0, vol, n))


class TestRegistry:
    def test_has_major_indices(self):
        assert set(BENCHMARKS) >= {"hs300", "zz500", "zz1000"}

    def test_labels_and_codes(self):
        assert BENCHMARKS["hs300"]["label"] == "沪深300"
        assert BENCHMARKS["hs300"]["code"].endswith(".SH")

    def test_benchmark_label(self):
        assert benchmark_label("hs300") == "沪深300"
        assert benchmark_label("__nope__") == "__nope__"

    def test_custom_benchmark_by_code(self):
        """自定义基准: 直接传指数代码 (不在注册表 → 原样使用)"""
        assert _resolve_code("000688.SH") == "000688.SH"


class TestCompareMath:
    def test_outperform_positive_excess(self):
        strat = _series(seed=1)
        bench = _series(seed=2)
        # 强制跑赢: 策略整体抬高
        strat = [x + 0.002 for x in strat]
        cmp = compare_with_benchmark(strat, bench)
        assert cmp["excess_total"] > 0
        assert cmp["information_ratio"] > 0

    def test_underperform_negative_excess(self):
        strat = _series(seed=3)
        bench = [x + 0.003 for x in _series(seed=4)]
        cmp = compare_with_benchmark(strat, bench)
        assert cmp["excess_total"] < 0

    def test_excess_total_math(self):
        strat = [0.01] * 10
        bench = [0.005] * 10
        cmp = compare_with_benchmark(strat, bench)
        # 复利差额 ≈ (1.01^10)/(1.005^10) - 1
        expect = (1.01 ** 10) / (1.005 ** 10) - 1
        assert cmp["excess_total"] == pytest.approx(expect, rel=1e-6)

    def test_beta_equals_k(self):
        """策略 = k × 基准 → beta ≈ k, alpha ≈ 0"""
        bench = _series(seed=5)
        k = 1.5
        strat = [b * k for b in bench]
        cmp = compare_with_benchmark(strat, bench)
        assert cmp["beta"] == pytest.approx(k, abs=0.05)

    def test_ir_math(self):
        """IR = 年化超额均值 / 年化跟踪误差"""
        strat = _series(seed=6)
        bench = _series(seed=7)
        cmp = compare_with_benchmark(strat, bench)
        exc = np.array(strat) - np.array(bench)
        ann_exc = exc.mean() * 252
        ann_te = exc.std() * math.sqrt(252)
        assert cmp["information_ratio"] == pytest.approx(ann_exc / ann_te, rel=1e-6)

    def test_tracking_error_math(self):
        strat = _series(seed=8)
        bench = _series(seed=9)
        cmp = compare_with_benchmark(strat, bench)
        exc = np.array(strat) - np.array(bench)
        assert cmp["tracking_error"] == pytest.approx(exc.std() * math.sqrt(252), rel=1e-6)

    def test_identical_series_ir_zero(self):
        s = _series(seed=10)
        cmp = compare_with_benchmark(s, list(s))
        assert cmp["information_ratio"] == pytest.approx(0.0, abs=1e-9)
        assert cmp["excess_total"] == pytest.approx(0.0, abs=1e-9)

    def test_empty_benchmark_none(self):
        cmp = compare_with_benchmark([0.01, 0.02], [])
        assert cmp is None or cmp["information_ratio"] is None

    def test_unequal_lengths_truncate(self):
        strat = [0.01] * 20
        bench = [0.005] * 10
        cmp = compare_with_benchmark(strat, bench)
        assert cmp["tracking_error"] is not None


class TestFetchBenchmark:
    def test_fetch_with_injectable_source(self):
        """fetch_benchmark_series 支持注入取数器 (沙箱离线确定性测试)"""
        def fake(code, start, end):
            return [0.01] * 30
        series = fetch_benchmark_series("hs300", "20260101", "20260201",
                                        fetcher=fake)
        assert len(series) == 30

    def test_fetch_default_registry_code(self):
        def fake(code, start, end):
            assert code == BENCHMARKS["zz500"]["code"]
            return [0.0]
        series = fetch_benchmark_series("zz500", "20260101", "20260201",
                                        fetcher=fake)
        assert series == [0.0]

    def test_fetch_custom_benchmark(self):
        def fake(code, start, end):
            assert code == "000688.SH"
            return [0.02]
        series = fetch_benchmark_series("000688.SH", "20260101", "20260201",
                                        fetcher=fake)
        assert series == [0.02]


class TestAttachAndIntegration:
    def test_attach_benchmark_adds_fields(self):
        result = {"total_return": 0.2, "annual_return": 0.1}
        bench = _series(seed=11)
        out = attach_benchmark(result, [0.001] * len(bench),
                               strategy_returns=[0.002] * len(bench))
        assert "benchmark" in out
        b = out["benchmark"]
        for k in ("benchmark_name", "excess_total", "information_ratio",
                  "alpha", "beta", "tracking_error"):
            assert k in b

    def test_attach_no_benchmark_skips(self):
        result = {"total_return": 0.2}
        out = attach_benchmark(result, None)
        assert "benchmark" not in out

    def test_sdk_backtest_with_benchmark(self):
        """backtest_holdings(benchmark_returns=...) → 结果含基准对比"""
        import pandas as pd
        from strategy_sdk.backtest import backtest_holdings
        from cost_model import CostConfig, CostModel
        dates = ["20260101", "20260102", "20260103", "20260104", "20260105"]
        h = pd.DataFrame({"A": [1.0, 0.5, 0.0, 0.5, 1.0],
                          "B": [0.0, 0.5, 1.0, 0.5, 0.0]}, index=dates)
        r = pd.DataFrame({"A": [0.01] * 5, "B": [0.01] * 5}, index=dates)
        zero = CostConfig(0, 0, 0, 0, 0)
        res = backtest_holdings(h, r, cost_model=CostModel(zero),
                                benchmark_returns=[0.005] * 5)
        assert res["success"] is True
        assert "benchmark" in res
        assert res["benchmark"]["excess_total"] > 0
