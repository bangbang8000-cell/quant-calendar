"""v7.24 FR-5: 持仓产物按生效日 T+1 落盘（日历规则 + 源码守卫）。"""
from pathlib import Path

import stock_calendar

ROOT = Path(__file__).resolve().parents[1]


def test_next_trade_day_friday_to_monday(monkeypatch):
    monkeypatch.setattr(stock_calendar, 'is_trade_day', lambda d: d.weekday() < 5)
    assert stock_calendar.next_trade_date_str('2026-11-27') == '2026-11-30'
    assert stock_calendar.next_trade_date_str('2026-11-28') == '2026-11-30'


def test_bad_date_returns_as_is():
    assert stock_calendar.next_trade_date_str('bad-date') == 'bad-date'


def test_governance_writes_effective_date():
    src = (ROOT / 'backend' / 'strategy_governance.py').read_text(encoding='utf-8')
    assert 'def effective_date_for(' in src
    assert 'out_dir = os.path.join(HOLDINGS_ROOT, effective_date)' in src
    assert '"signal_date": date' in src


def test_scheduler_uses_effective_date_and_catchup():
    core = (ROOT / 'backend' / 'scheduler' / '_core.py').read_text(encoding='utf-8')
    helpers = (ROOT / 'backend' / 'scheduler' / '_helpers.py').read_text(encoding='utf-8')
    assert 'strategy_catchup_due' in core
    assert 'count_holdings_rows(effective)' in core
    assert 'latest_date=effective' in core
    assert 'next_trade_date_str(today)' in helpers
    assert 'count_holdings_rows(_sc.next_trade_date_str(today))' in helpers
