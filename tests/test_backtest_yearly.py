"""T-5.1.26: 基准与分年度报告 (benchmark.yearly_*) — 分年度收益 + 分年度超额。

FR-5.1.2.6: 报告分年度策略/基准收益 + 分年度超额, 识别策略优势年份。
"""
import pytest
from benchmark import (
    yearly_returns, yearly_benchmark_report, yearly_excess,
)


class TestYearlyReturns:
    def test_basic(self):
        # 每日收益 + 对应日期 → 分年度
        dates = ['2025-01-02', '2025-01-03', '2026-01-02', '2026-01-05']
        rets = [0.01, 0.01, 0.02, 0.02]
        out = yearly_returns(dates, rets)
        assert '2025' in out and '2026' in out
        # 2025: (1.01*1.01-1)=0.0201, 2026: (1.02*1.02-1)=0.0404
        assert out['2025'] == pytest.approx(0.0201, abs=1e-9)
        assert out['2026'] == pytest.approx(0.0404, abs=1e-9)

    def test_empty(self):
        assert yearly_returns([], []) == {}

    def test_single_year(self):
        out = yearly_returns(['2025-01-01', '2025-01-02'], [0.01, 0.02])
        assert set(out.keys()) == {'2025'}

    def test_compound_negative(self):
        dates = ['2025-01-01', '2025-01-02']
        rets = [0.10, -0.10]
        out = yearly_returns(dates, rets)
        assert out['2025'] == pytest.approx(-0.01, abs=1e-9)


class TestYearlyExcess:
    def test_excess_per_year(self):
        dates = ['2025-01-01', '2026-01-01', '2026-01-02']
        strat = [0.02, 0.03, 0.03]
        bench = [0.01, 0.01, 0.01]
        out = yearly_excess(dates, strat, bench)
        assert '2025' in out and '2026' in out
        assert out['2025'] == pytest.approx(0.01, abs=1e-9)  # 0.02-0.01
        # 2026 两日复利: (1.03²-1)-(1.01²-1) = 0.0609-0.0201 = 0.0408
        assert out['2026'] == pytest.approx(0.0408, abs=1e-9)


class TestYearlyBenchmarkReport:
    def test_report_structure(self):
        dates = ['2025-01-01', '2025-01-02', '2026-01-01', '2026-01-02']
        strat = [0.02, 0.02, 0.01, 0.01]
        bench = [0.01, 0.01, 0.02, 0.02]
        rep = yearly_benchmark_report(dates, strat, bench)
        assert 'years' in rep
        assert 'years' in rep and len(rep['years']) == 2
        y = rep['years'][0]
        assert 'year' in y and 'strategy' in y and 'benchmark' in y and 'excess' in y

    def test_report_sorted_by_year(self):
        dates = ['2026-01-01', '2025-01-01']
        strat = [0.01, 0.01]
        bench = [0.02, 0.02]
        rep = yearly_benchmark_report(dates, strat, bench)
        assert [y['year'] for y in rep['years']] == ['2025', '2026']

    def test_report_best_year(self):
        dates = ['2025-01-01', '2026-01-01']
        strat = [0.01, 0.05]
        bench = [0.02, 0.01]
        rep = yearly_benchmark_report(dates, strat, bench)
        assert 'best_year' in rep
        assert rep['best_year'] == '2026'  # 超额最大年份

    def test_report_worst_year(self):
        dates = ['2025-01-01', '2026-01-01']
        strat = [0.01, 0.05]
        bench = [0.02, 0.01]
        rep = yearly_benchmark_report(dates, strat, bench)
        assert rep['worst_year'] == '2025'  # 超额最小 (负)
