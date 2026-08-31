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
