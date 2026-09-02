"""T-5.1.24: Walk-forward 报告 (walkforward.build_walkforward_report) — 滚动 OOS 各段 + 稳定性诊断。

FR-5.1.2.4: 滚动 OOS 报告含各折指标明细 + CV 稳定性诊断 + 结论。
"""
import pytest
from walkforward import (
    build_walkforward_report, evaluate_walkforward, walkforward_folds,
)


class TestWalkforwardReport:
    def test_report_structure(self):
        returns = [0.001] * 120 + [0.002] * 60  # 180 日
        def predict_fn(train_rets):
            # 简单: 训练段均值预测 (无前视, 仅用训练信息)
            import statistics
            m = statistics.mean(train_rets) if len(train_rets) else 0.0
            return [m] * 10
        rep = build_walkforward_report(returns, predict_fn, train_frac=0.6, n_folds=3)
        assert 'folds' in rep and 'summary' in rep and 'verdict' in rep
        assert len(rep['folds']) == 3
        assert 'stable' in rep['summary']

    def test_report_verdict_stable(self):
        # 各折 OOS 收益接近 → 稳定
        returns = [0.002] * 200
        def predict_fn(train_rets):
            return [0.002] * 8
        rep = build_walkforward_report(returns, predict_fn, n_folds=4, train_frac=0.5)
        assert rep['verdict'] == '稳定'

    def test_report_verdict_unstable(self):
        # 各折收益方差大 → 不稳定
        # rolling 每折训练段独立: 前段正收益, 后段负收益 → 各折 OOS 差异显著 (CV≥0.5)
        def predict_fn(train_rets):
            import statistics
            m = statistics.mean(train_rets) if train_rets else 0.0
            return [m * 100000] * 6
        returns = [0.01] * 60 + [-0.01] * 60
        rep = build_walkforward_report(returns, predict_fn, n_folds=2,
                                       train_frac=0.5, expanding=False)
        assert rep['verdict'] == '不稳定'

    def test_report_fold_details(self):
        returns = [0.001] * 150
        def predict_fn(train_rets):
            return [0.001] * 6
        rep = build_walkforward_report(returns, predict_fn, n_folds=3)
        fold = rep['folds'][0]
        for key in ('oos_total_return', 'oos_annual_return', 'oos_sharpe_ratio',
                    'train_start', 'test_start', 'test_end'):
            assert key in fold

    def test_report_short_series(self):
        # 短序列 → 优雅降级
        rep = build_walkforward_report([0.001] * 3, lambda t: [0.001], n_folds=2)
        assert rep['verdict'] in ('样本不足', '不稳定', '稳定')
        assert isinstance(rep['folds'], list)


class TestFoldsNoLookahead:
    def test_train_before_test(self):
        # 每折训练段严格在测试段之前 (无前视核心)
        folds = walkforward_folds(100, train_frac=0.6, n_folds=3)
        for tr, te in folds:
            assert tr.stop <= te.start
        # 测试段不相交
        test_ranges = [(te.start, te.stop) for _, te in folds]
        for i in range(len(test_ranges)):
            for j in range(i + 1, len(test_ranges)):
                a, b = test_ranges[i], test_ranges[j]
                assert a[1] <= b[0] or b[1] <= a[0]

    def test_uses_only_train_info(self):
        # predict_fn 只接收训练段收益 (长度 = 训练段, 严格在测试段之前)
        returns = list(range(100))
        seen = []
        def predict_fn(train_rets):
            seen.append(len(train_rets))
            return [0.0] * 5
        evaluate_walkforward(returns, predict_fn, train_frac=0.5, n_folds=2)
        # 两折训练段: fold0=[0,50)=50, fold1 expanding=[0,75)=75
        assert seen == [50, 75]
