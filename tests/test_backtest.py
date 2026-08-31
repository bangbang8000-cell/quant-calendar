"""Tests for backtest.py — strategy backtesting engine"""
import pytest
from backtest import BacktestEngine, BacktestResult


class TestBacktestResult:
    """BacktestResult dataclass"""

    def test_default_values(self):
        r = BacktestResult(strategy_id="test", start_date="2026-01-01", end_date="2026-01-31")
        assert r.total_return == 0.0
        assert r.sharpe_ratio == 0.0
        assert r.max_drawdown == 0.0
        assert r.win_rate == 0.0
        assert r.success is False

    def test_success_flag(self):
        r = BacktestResult(strategy_id="test", start_date="2026-01-01", end_date="2026-01-31", success=True)
        assert r.success is True

    def test_custom_values(self):
        r = BacktestResult(
            strategy_id="trend", start_date="2026-01-01", end_date="2026-06-30",
            total_return=15.5, sharpe_ratio=1.8, max_drawdown=8.2, win_rate=62.0,
            total_days=120
        )
        assert r.total_return == 15.5
        assert r.sharpe_ratio == 1.8
        assert r.max_drawdown == 8.2
        assert r.win_rate == 62.0


class TestBacktestEngine:
    """BacktestEngine functional tests"""

    def test_engine_init(self):
        engine = BacktestEngine()
        assert engine is not None

    def test_empty_strategy(self):
        """Backtest with non-existent strategy returns error result"""
        engine = BacktestEngine()
        result = engine.run_backtest('nonexistent_strategy_xyz')
        assert isinstance(result, BacktestResult)
        assert result.success is False
        assert len(result.message) > 0

    def test_run_backtest_returns_backtestresult(self):
        """run_backtest always returns BacktestResult"""
        engine = BacktestEngine()
        result = engine.run_backtest('trend', start_date='2099-01-01', end_date='2099-01-31')
        assert isinstance(result, BacktestResult)
        # Should have sensible defaults even for future dates
        assert result.total_return == 0.0

    def test_known_strategy_no_date_range(self):
        """Backtest with known strategy and default dates"""
        engine = BacktestEngine()
        result = engine.run_backtest('trend')
        assert isinstance(result, BacktestResult)
        # Even if data exists, result should be a valid BacktestResult
        assert hasattr(result, 'total_return')
        assert hasattr(result, 'sharpe_ratio')
        assert hasattr(result, 'max_drawdown')

    def test_custom_params(self):
        """Custom initial capital and commission"""
        engine = BacktestEngine()
        result = engine.run_backtest(
            'trend', 
            initial_capital=500000.0,
            commission_rate=0.0001,
            slippage=0.0005
        )
        assert isinstance(result, BacktestResult)

    def test_strategy_id_preserved(self):
        """Strategy ID is preserved in result"""
        engine = BacktestEngine()
        result = engine.run_backtest('momentum')
        assert result.strategy_id == 'momentum'

# ==================== 回测真实性 (FR-3.18.8 / T8) ====================


def test_split_insample_outsample():
    from backtest import split_insample_outsample
    rets = [0.01] * 10
    ins, outs = split_insample_outsample(rets, 0.2)
    assert len(ins) == 8 and len(outs) == 2
    assert split_insample_outsample([]) == ([], [])


def test_compute_period_metrics():
    from backtest import compute_period_metrics
    m = compute_period_metrics([0.01] * 10)
    assert m['total_return'] == pytest.approx(10.0, abs=0.1)
    assert m['win_rate'] == 100.0
    empty = compute_period_metrics([])
    assert empty['total_return'] == 0.0 and empty['win_rate'] == 0.0


def test_sensitivity_analysis():
    from backtest import sensitivity_analysis
    base = 10.0
    s = sensitivity_analysis(base, lambda pct: round(base * (1 + pct), 2))
    assert s['variants'] == {-0.2: 8.0, -0.1: 9.0, 0.1: 11.0, 0.2: 12.0}
    assert s['min'] == 8.0 and s['max'] == 12.0
    assert s['spread_ratio'] == pytest.approx(0.4)


def test_overfitting_assessment_trigger():
    from backtest import overfitting_assessment
    # 样本外 5% < 样本内 10%*0.7=7% → 触发
    r = overfitting_assessment({'total_return': 10.0}, {'total_return': 5.0}, None)
    assert r['overfit'] is True
    assert '样本外' in r['reason']
    # 样本外 9% → 不触发
    r2 = overfitting_assessment({'total_return': 10.0}, {'total_return': 9.0}, None)
    assert r2['overfit'] is False


def test_overfitting_assessment_sensitivity_trigger():
    from backtest import overfitting_assessment, sensitivity_analysis
    s = sensitivity_analysis(10.0, lambda pct: round(10.0 * (1 + pct * 3), 2))  # spread 远超 50%
    r = overfitting_assessment({'total_return': 10.0}, {'total_return': 9.0}, s)
    assert r['overfit'] is True
    assert '极差' in r['reason']


def test_attach_overfitting_analysis_fields():
    from backtest import BacktestResult, attach_overfitting_analysis
    r = BacktestResult(strategy_id='s', start_date='2026-01-01', end_date='2026-12-31')
    r.daily_returns = [0.01] * 20
    r.total_return = 20.0
    attach_overfitting_analysis(r)
    assert r.insample_total_return != 0.0
    assert r.outsample_total_return != 0.0
    assert 'spread_ratio' in r.parameter_sensitivity
    assert isinstance(r.overfit_warning, bool)
