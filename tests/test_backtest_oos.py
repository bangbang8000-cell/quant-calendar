"""T-5.1.23: 样本外纪律 (backtest_oos) — 70/30 切分 + OOS「未触碰」标注。

FR-5.1.2.3: 样本外 30% 绝不参与参数选择/训练; 报告 OOS 段未触碰标注与隔离纪律。
"""
import pytest
from backtest_oos import (
    split_train_test, OOS_RATIO, oos_untouched_marker, oos_audit_report,
    assert_oos_untouched, OutOfSampleViolation,
)


class TestSplit:
    def test_7030_split(self):
        returns = list(range(100))
        train, test = split_train_test(returns)
        assert len(test) == pytest.approx(30, abs=1)
        assert len(train) + len(test) == 100

    def test_ratio_const(self):
        assert 0.25 <= OOS_RATIO <= 0.35  # 70/30 附近

    def test_small_series(self):
        train, test = split_train_test([1, 2, 3])
        assert len(test) >= 1

    def test_empty(self):
        train, test = split_train_test([])
        assert train == [] and test == []

    def test_order_preserved(self):
        returns = list(range(50))
        train, test = split_train_test(returns)
        assert train == list(range(0, len(train)))
        assert test == list(range(len(train), 50))


class TestUntouchedMarker:
    def test_marker_basic(self):
        m = oos_untouched_marker(n_train=70, n_test=30)
        assert m['oos_untouched'] is True
        assert m['train_days'] == 70 and m['test_days'] == 30
        assert '标记' in m['note'] or '未触碰' in m['note']

    def test_marker_params_isolated(self):
        m = oos_untouched_marker(n_train=70, n_test=30, params_tuned_on='train')
        assert m['params_tuned_on'] == 'train'
        assert m['oos_untouched'] is True

    def test_marker_warns_if_touched(self):
        # 参数在 OOS 上调过 → 标记 false + 警示
        m = oos_untouched_marker(n_train=70, n_test=30, params_tuned_on='oos')
        assert m['oos_untouched'] is False


class TestAuditReport:
    def test_report_structure(self):
        returns = list(range(100))
        rep = oos_audit_report(returns, params_tuned_on='train')
        assert 'train_days' in rep and 'test_days' in rep
        assert 'oos_untouched' in rep
        assert rep['oos_untouched'] is True

    def test_report_violation_flag(self):
        returns = list(range(100))
        rep = oos_audit_report(returns, params_tuned_on='oos')
        assert rep['oos_untouched'] is False
        assert rep['violation'] is True


class TestAssertion:
    def test_pass_when_untouched(self):
        assert_oos_untouched(untouched=True)

    def test_raises_when_touched(self):
        with pytest.raises(OutOfSampleViolation):
            assert_oos_untouched(untouched=False)
