"""v7.24 FR-1: 回测绩效复利口径与 18 个月样本门槛。"""
import pytest

from backtest import (MIN_SAMPLE_DAYS, MIN_SAMPLE_MONTHS, compute_period_metrics,
                      _sample_months)


def _weekday_dates(start, count):
    from datetime import date, timedelta
    out, d = [], start
    while len(out) < count:
        if d.weekday() < 5:
            out.append(d.isoformat())
        d += timedelta(days=1)
    return out


def test_short_sample_annual_is_none():
    """5 个交易日样本 → 年化必须为 None 并说明样本不足。"""
    m = compute_period_metrics([0.01] * 5, require_min_sample=True)
    assert m['annual_return'] is None
    assert '样本不足' in m['annual_return_reason']
    assert m['total_days'] == 5
    assert m['sample_months'] < MIN_SAMPLE_MONTHS


def test_total_return_compound_not_arithmetic_sum():
    """总收益按净值复利，不是日收益算术和。"""
    rets = [0.01] * 252
    m = compute_period_metrics(rets)
    expect = (1.01 ** 252 - 1) * 100
    assert m['total_return'] == pytest.approx(expect, rel=1e-6)
    assert m['total_return'] > sum(rets) * 100  # 复利高于算术和


def test_eighteen_months_passes_gate():
    """18 个自然月 + ≥360 交易日 → 输出年化。"""
    dates = _weekday_dates(__import__('datetime').date(2024, 1, 1), 400)
    months = _sample_months(dates, len(dates))
    assert months >= MIN_SAMPLE_MONTHS
    m = compute_period_metrics([0.0005] * 400, dates=dates, require_min_sample=True)
    assert m['total_days'] >= MIN_SAMPLE_DAYS
    assert m['annual_return'] is not None
    assert m['annual_return_reason'] == ''


def test_twelve_months_fails_gate():
    """只有 252 个交易日（约 12 个月）→ 不出年化。"""
    dates = _weekday_dates(__import__('datetime').date(2024, 1, 1), 252)
    m = compute_period_metrics([0.0005] * 252, dates=dates, require_min_sample=True)
    assert m['annual_return'] is None
    assert '样本不足' in m['annual_return_reason']


def test_default_mode_keeps_annual_for_other_consumers():
    """默认（非回测结果组装）仍输出年化，避免影响因子分层等既有调用方。"""
    m = compute_period_metrics([0.001] * 60)
    assert m['annual_return'] is not None
    assert m['sample_months'] == pytest.approx(3.0)
