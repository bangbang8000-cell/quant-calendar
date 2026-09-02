"""T-5.1.33: 风险报告 (risk_report) — 回撤区间标注 + 尾部风险专测。

FR-5.1.3.3: 风险报告含最大回撤起止区间标注 + 尾部风险 (VaR95/CVaR) 专项说明。
"""
import pytest
from risk import (
    drawdown_period, risk_report, tail_risk_summary,
)


class TestDrawdownPeriod:
    def test_basic_drawdown_period(self):
        # 净值: 峰值在 idx2, 谷底在 idx5 → 回撤区间 [2, 5]
        equity = [1.0, 1.05, 1.10, 1.05, 1.02, 1.00, 1.03]
        d = drawdown_period(equity)
        assert d['start'] == 2
        assert d['end'] == 5
        assert d['depth'] == pytest.approx((1.10 - 1.00) / 1.10, abs=1e-9)

    def test_no_drawdown(self):
        equity = [1.0, 1.02, 1.04, 1.06]
        d = drawdown_period(equity)
        assert d is None or d['depth'] == 0.0

    def test_empty(self):
        assert drawdown_period([]) is None


class TestTailRiskSummary:
    def test_summary_structure(self):
        rets = [-0.05, -0.03, -0.04, 0.01, 0.02, -0.02, 0.005, -0.01, 0.015]
        s = tail_risk_summary(rets)
        assert 'var_95' in s and 'cvar' in s
        assert 'note' in s

    def test_tail_risk_nonnegative(self):
        rets = [-0.05, -0.03, -0.04, 0.01, 0.02, -0.02, 0.005, -0.01, 0.015]
        s = tail_risk_summary(rets)
        assert s['var_95'] >= 0.0
        assert s['cvar'] >= 0.0


class TestRiskReport:
    def test_report_structure(self):
        equity = [1.0, 1.05, 1.10, 1.05, 1.02, 1.00, 1.03]
        rep = risk_report(equity, is_equity=True)
        assert 'metrics' in rep
        assert 'drawdown_period' in rep
        assert 'tail' in rep
        assert 'summary' in rep

    def test_report_drawdown_period_present(self):
        equity = [1.0, 1.05, 1.10, 1.05, 1.02, 1.00, 1.03]
        rep = risk_report(equity, is_equity=True)
        assert rep['drawdown_period'] is not None
        assert rep['drawdown_period']['start'] == 2

    def test_report_metrics_include_tail(self):
        equity = [1.0, 1.05, 1.10, 1.05, 1.02, 1.00, 1.03]
        rep = risk_report(equity, is_equity=True)
        assert 'var_historical' in rep['metrics']
        assert 'calmar_ratio' in rep['metrics']

    def test_report_empty(self):
        rep = risk_report([], is_equity=True)
        assert 'metrics' in rep and rep['metrics']['total_days'] == 0
