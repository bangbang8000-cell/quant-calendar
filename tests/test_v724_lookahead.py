"""v7.24 FR-3: 未来函数门禁（批量报告 + 越界/未来数据拦截）。"""
import pandas as pd

from lookahead_guard import (SyntheticPortal, build_lookahead_report,
                             check_strategy_truncation)
from strategy_sdk.base import BaseStrategy, StrategyContext
from strategy_sdk.registry import registry


class _CausalStrategy(BaseStrategy):
    """合法策略：只用当日及历史收盘价。"""

    id = 'test_causal'
    name = '因果测试策略'

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        panel = ctx.panel(['close'], start='2024-01-01')
        if panel is None or panel.empty:
            return pd.DataFrame()
        close = panel['close'].unstack('symbol')
        return (close > close.rolling(5).mean()).astype(float)


class _FutureStrategy(BaseStrategy):
    """违规策略：用下一交易日收盘价决定当日信号（读取未来数据）。"""

    id = 'test_future'
    name = '前视测试策略'

    def generate_signals(self, ctx: StrategyContext) -> pd.DataFrame:
        panel = ctx.panel(['close'], start='2024-01-01')
        if panel is None or panel.empty:
            return pd.DataFrame()
        close = panel['close'].unstack('symbol')
        return (close.shift(-1) > close).astype(float)


def test_builtin_strategies_all_reported():
    report = build_lookahead_report(refresh=True)
    expected = len(registry.objects())
    assert report['total'] == expected >= 16
    assert len(report['results']) == expected
    for r in report['results']:
        assert r['strategy_id']
        assert isinstance(r['passed'], bool)
        assert r['reason']
        assert r['method'] in ('dynamic', 'contract', 'error')
    assert report['failed'] == 0


def test_causal_strategy_passes():
    rep = check_strategy_truncation(_CausalStrategy(), SyntheticPortal())
    assert rep['passed'] is True
    assert rep['changed_cells'] == 0
    assert rep['method'] == 'dynamic'


def test_future_strategy_blocked():
    rep = check_strategy_truncation(_FutureStrategy(), SyntheticPortal())
    assert rep['passed'] is False
    assert rep['changed_cells'] > 0
    assert rep['violations']
    assert '未来数据' in rep['reason']
