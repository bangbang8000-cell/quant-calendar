"""v7.24 FR-4/FR-5: 样本信息展示与日历空态三分类。"""
import asyncio

from api.v1 import views as views_api
from api.v1.backtest import _sample_info


def test_sample_info_meets_threshold():
    info = _sample_info({'start_date': '2024-01-01', 'end_date': '2025-12-31',
                         'sample_months': 24, 'total_days': 480,
                         'annual_return_reason': ''})
    assert info['meets_min_sample'] is True
    assert info['reason'] == ''
    assert info['required_months'] == 18
    assert info['required_days'] == 360


def test_sample_info_short_reports_gap():
    info = _sample_info({'start_date': '2026-01-01', 'end_date': '2026-05-01',
                         'sample_months': 4, 'total_days': 80,
                         'annual_return_reason': '样本不足（<18个月）'})
    assert info['meets_min_sample'] is False
    assert '18' in info['reason']
    assert info['repair']['endpoint'] == '/api/dwh/refresh'


def _status(monkeypatch, trading, total, err=''):
    monkeypatch.setattr('stock_calendar.is_trade_date_str', lambda d: trading)
    monkeypatch.setattr(views_api.views_aggregator, 'get_day_view', lambda d: {'total': total})
    monkeypatch.setattr(views_api, '_last_strategy_error', lambda d: err)
    return asyncio.run(views_api.view_status('2026-11-28'))


def test_status_non_trading_day(monkeypatch):
    out = _status(monkeypatch, False, 0)
    assert out['status'] == 'non_trading_day'
    assert out['can_generate'] is False


def test_status_not_generated(monkeypatch):
    out = _status(monkeypatch, True, 0)
    assert out['status'] == 'not_generated'
    assert out['can_generate'] is True


def test_status_failed_uses_scheduler_reason(monkeypatch):
    out = _status(monkeypatch, True, 0, err='策略运行失败: DWH 不可用')
    assert out['status'] == 'failed'
    assert 'DWH' in out['reason']
