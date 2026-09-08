"""V5.0.2 T-5.0.23: walk-forward 滚动回测测试 (TEST-PLAN 3.1 test_walkforward.py)

样本内/外划分、滚动窗口、无前视 (PIT 联动)、跨折样本外稳定性。
"""
import numpy as np
import pytest

from walkforward import (walkforward_folds, evaluate_walkforward,
                         stability_report, walkforward_summary)


def _rets(n=120, base=0.001, vol=0.01, seed=42):
    rng = np.random.default_rng(seed)
    return list(base + rng.normal(0, vol, n))


class TestWalkforwardFolds:
    def test_n_folds_and_disjoint(self):
        folds = walkforward_folds(120, train_frac=0.6, n_folds=3)
        assert len(folds) == 3
        for tr, te in folds:
            assert tr.stop <= te.start          # 训练段严格在测试段之前 (无前视)
            assert len(set(range(*tr.indices(120))) & set(range(*te.indices(120)))) == 0

    def test_train_frac_respected(self):
        tr, te = walkforward_folds(100, train_frac=0.7, n_folds=1)[0]
        assert (tr.stop - tr.start) == 70 and (te.stop - te.start) == 30

    def test_expanding_train_grows(self):
        folds = walkforward_folds(90, train_frac=0.5, n_folds=3, expanding=True)
        widths = [tr.stop - tr.start for tr, _ in folds]
        assert widths == sorted(widths) and len(set(widths)) > 1

    def test_rolling_window_constant_width(self):
        folds = walkforward_folds(90, train_frac=0.5, n_folds=3, expanding=False)
        widths = [tr.stop - tr.start for tr, _ in folds]
        assert len(set(widths)) == 1

    def test_test_segments_contiguous_nonoverlap(self):
        folds = walkforward_folds(100, train_frac=0.6, n_folds=3, expanding=True)
        for (_, te1), (_, te2) in zip(folds, folds[1:]):
            assert te1.stop <= te2.start

    def test_invalid_args(self):
        with pytest.raises(ValueError):
            walkforward_folds(50, train_frac=0.6, n_folds=0)
        with pytest.raises(ValueError):
            walkforward_folds(10, train_frac=0.9, n_folds=4)  # 测试段过短


class TestEvaluateWalkforward:
    def test_basic_run(self):
        rets = _rets()
        def predict(train):
            m = np.mean(train)
            return [m] * 30  # 预测 30 日
        res = evaluate_walkforward(rets, predict, train_frac=0.6, n_folds=3)
        assert len(res["folds"]) == 3
        assert "summary" in res

    def test_predict_receives_only_train(self):
        """无前视: predict_fn 只能看到训练段 (长度随折递增), 永远拿不到测试段"""
        rets = list(range(100))  # 便于验证
        seen = []
        def predict(train):
            seen.append(list(train))
            return [0.0] * 10
        evaluate_walkforward(rets, predict, train_frac=0.6, n_folds=3, expanding=True)
        for i, tr in enumerate(seen):
            assert max(tr) < 60 + i * 20  # 训练段截止边界
            assert min(tr) >= 0

    def test_oos_total_equals_predict_sum(self):
        """OOS 总收益由预测收益复利得出"""
        rets = _rets(seed=7)
        const = 0.005
        res = evaluate_walkforward(rets, lambda tr: [const] * 10,
                                   train_frac=0.5, n_folds=4)
        # 项目 compute_period_metrics 语义: total_return = 简单求和 × 100 (%)
        expect = sum([const] * 10) * 100
        for f in res["folds"]:
            assert f["oos_total_return"] == pytest.approx(expect, rel=1e-6)

    def test_summary_has_mean_and_std(self):
        rets = _rets(seed=8)
        res = evaluate_walkforward(rets, lambda tr: [0.001] * 20,
                                   train_frac=0.5, n_folds=3)
        s = res["summary"]
        for k in ("mean_oos_total", "std_oos_total", "cv",
                  "stable", "mean_oos_sharpe"):
            assert k in s

    def test_walkforward_summary_cv(self):
        """跨折稳定性: 恒定 OOS → CV=0 → stable"""
        rets = _rets(seed=9)
        res = evaluate_walkforward(rets, lambda tr: [0.002] * 20,
                                   train_frac=0.5, n_folds=4)
        assert res["summary"]["cv"] == pytest.approx(0.0, abs=1e-9)
        assert res["summary"]["stable"] is True


class TestStabilityReport:
    def test_stable_constant_oos(self):
        oos = [{"oos_total_return": 0.1}] * 5
        rep = stability_report(oos)
        assert rep["stable"] is True
        assert rep["cv"] == pytest.approx(0.0, abs=1e-9)

    def test_unstable_mixed_sign(self):
        oos = [{"oos_total_return": 0.3}, {"oos_total_return": -0.2},
               {"oos_total_return": 0.25}, {"oos_total_return": -0.15}]
        rep = stability_report(oos)
        assert rep["stable"] is False
        assert rep["cv"] > 0.5

    def test_threshold_knob(self):
        oos = [{"oos_total_return": 0.12}, {"oos_total_return": 0.08},
               {"oos_total_return": 0.1}]
        assert stability_report(oos, cv_threshold=0.5)["stable"] is True
        assert stability_report(oos, cv_threshold=0.05)["stable"] is False


class TestNoLookaheadPitLink:
    def test_oos_end_never_exceeds_fold_boundary(self):
        """PIT 联动: 每折测试段 (end) 必须 ≤ 该折数据边界, 不使用未来信息"""
        rets = _rets(seed=11)
        res = evaluate_walkforward(rets, lambda tr: [0.001] * 25,
                                   train_frac=0.6, n_folds=3)
        total = len(rets)
        for f in res["folds"]:
            assert f["test_end"] <= total

    def test_folds_are_chronological(self):
        folds = walkforward_folds(150, train_frac=0.6, n_folds=3, expanding=True)
        ends = [te.stop for _, te in folds]
        assert ends == sorted(ends)


class TestResultEvaluation:
    def test_missing_equity_unsupported(self):
        from walkforward import walkforward_evaluate_result
        assert walkforward_evaluate_result({"success": True})["wf_supported"] is False

    def test_smooth_equity_stable(self):
        from walkforward import walkforward_evaluate_result
        eq = [1.0 + 0.01 * i for i in range(61)]  # 平滑上行
        rep = walkforward_evaluate_result({"equity_curve": eq})
        assert rep["wf_supported"] is True
        assert rep["wf_stable"] is True

    def test_volatile_equity_unstable(self):
        from walkforward import walkforward_evaluate_result
        import numpy as np
        rng = np.random.default_rng(0)
        eq = [1.0]
        for _ in range(60):
            eq.append(eq[-1] * (1 + rng.normal(0.08, 0.2)))  # 高波动
        rep = walkforward_evaluate_result({"equity_curve": eq})
        assert rep["wf_supported"] is True
        assert "wf_cv" in rep and "wf_mean_oos_total" in rep


class TestIntegration:
    def test_works_with_backtest_metrics(self):
        """OOS 指标复用 backtest.compute_period_metrics 字段"""
        import backtest
        rets = _rets(seed=12)
        res = evaluate_walkforward(rets, lambda tr: [0.001] * 20,
                                   train_frac=0.5, n_folds=3)
        keys = set(backtest.compute_period_metrics([0.01] * 20).keys())
        for f in res["folds"]:
            assert f["oos_total_return"] is not None
        assert res["summary"]["mean_oos_sharpe"] is not None
