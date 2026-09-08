"""T-5.1.25: 回测可信度清单 (credibility_guard) — 交易次数/样本期/基准/成本警示。

FR-5.1.2.5: 交易次数<20/样本期短/无基准/成本过低 → 可信度警示。
"""
import pytest
from credibility_guard import (
    MIN_TRADES, MIN_SAMPLE_DAYS, MIN_COST_RATE,
    credibility_check, credibility_report,
)


class TestCredibilityCheck:
    def test_healthy_backtest(self):
        flags = credibility_check(trades=100, sample_days=500, has_benchmark=True,
                                  cost_rate=0.0013)
        assert flags == []

    def test_few_trades(self):
        flags = credibility_check(trades=10, sample_days=500, has_benchmark=True,
                                  cost_rate=0.0013)
        assert any('交易次数' in f for f in flags)

    def test_short_sample(self):
        flags = credibility_check(trades=100, sample_days=15, has_benchmark=True,
                                  cost_rate=0.0013)
        assert any('样本' in f for f in flags)

    def test_no_benchmark(self):
        flags = credibility_check(trades=100, sample_days=500, has_benchmark=False,
                                  cost_rate=0.0013)
        assert any('基准' in f for f in flags)

    def test_low_cost(self):
        flags = credibility_check(trades=100, sample_days=500, has_benchmark=True,
                                  cost_rate=0.00001)
        assert any('成本' in f for f in flags)

    def test_multiple_flags(self):
        flags = credibility_check(trades=5, sample_days=10, has_benchmark=False,
                                  cost_rate=0.0)
        assert len(flags) >= 3


class TestCredibilityReport:
    def test_report_structure(self):
        rep = credibility_report(trades=100, sample_days=500, has_benchmark=True,
                                 cost_rate=0.0013)
        assert 'warnings' in rep and 'healthy' in rep and 'score' in rep
        assert rep['healthy'] is True
        assert rep['warnings'] == []

    def test_report_warning(self):
        rep = credibility_report(trades=5, sample_days=500, has_benchmark=True,
                                 cost_rate=0.0013)
        assert rep['healthy'] is False
        assert len(rep['warnings']) >= 1

    def test_report_score_drops(self):
        good = credibility_report(trades=200, sample_days=1000, has_benchmark=True,
                                  cost_rate=0.0013)
        bad = credibility_report(trades=5, sample_days=10, has_benchmark=False,
                                 cost_rate=0.0)
        assert bad['score'] < good['score']

    def test_report_grade(self):
        rep = credibility_report(trades=100, sample_days=500, has_benchmark=True,
                                 cost_rate=0.0013)
        assert rep['grade'] == '可信'
