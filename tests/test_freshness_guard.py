# -*- coding: utf-8 -*-
"""v6.4 (FR-6.4.5): 数据新鲜度双向判定与基准自检。

背景（真实事故）
---------------
生产数据停在 2026-07-16 共 95 天，而 `/api/reliability/freshness` 把
`calendar_views` 判为 **fresh**：

- `expected_latest_date()` 取的是 `parser.get_available_dates()` 的最大值 ——
  该值本身就是 07-16，基准和被判定对象一起停更；
- `evaluate_asset()` 只算 `expected_latest - latest_d` 的单边差，差为负时被
  `max(…, 0)` 吃掉，于是"数据停在基准那天"恒判 fresh。

即：**基准日期自身失效时，体系自我通过**。本组用例锁死修复后的双向语义。
"""
import os
import sys
from datetime import date, datetime, timedelta

import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from reliability import freshness  # noqa: E402
from reliability.freshness import (  # noqa: E402
    ASSET_REGISTRY,
    evaluate_asset,
    is_calendar_stale,
    calendar_lag_days,
    expected_latest_with_source,
)

TRADING_DAY_ASSETS = ('strategy_holdings', 'calendar_views', 'market_daily', 'market_review')


def _clear_records(monkeypatch):
    """清空 freshness 记录，保证用例独立。"""
    import paths
    p = os.path.join(paths.DATA_DIR, 'freshness.json')
    if os.path.exists(p):
        os.remove(p)


def test_calendar_stale_never_reports_fresh(monkeypatch):
    """U-201: 基准落后 30 天 → trading_day 资产一律 unknown（改前判 fresh）。"""
    _clear_records(monkeypatch)
    now = datetime(2026, 10, 19, 12)
    stale_base = date(2026, 9, 11)          # 约 26 个工作日之前
    for aid in TRADING_DAY_ASSETS:
        freshness.record_update(aid, latest_date=stale_base.isoformat(), now=now)

    s = freshness.status_summary(now=now, calendar=[stale_base])

    assert s['calendar_stale'] is True, '基准自身失效必须被识别'
    assert s['expected_latest'] == stale_base.isoformat()
    assert s['expected_source'] == 'calendar'
    assert s['expected_age_days'] == (now.date() - stale_base).days == 38
    assert s['calendar_lag_days'] > freshness.CALENDAR_MAX_LAG_TRADING_DAYS

    by_id = {i['asset_id']: i['status'] for i in s['items']}
    for aid in TRADING_DAY_ASSETS:
        assert by_id[aid] == 'unknown', '%s 不得在基准失效时判 %s' % (aid, by_id[aid])
    assert 'fresh' not in [by_id[a] for a in TRADING_DAY_ASSETS]


def test_calendar_stale_marks_flag_even_when_records_fresh(monkeypatch):
    """基准失效 + 记录"跟基准一样新" —— 这正是事故现场，必须不再判 fresh。"""
    _clear_records(monkeypatch)
    now = datetime(2026, 10, 19, 12)
    base = date(2026, 7, 16)                 # 事故真实日期
    freshness.record_update('calendar_views', latest_date='2026-07-16', now=now)

    s = freshness.status_summary(now=now, calendar=[base])

    assert s['calendar_stale'] is True
    cv = [i for i in s['items'] if i['asset_id'] == 'calendar_views'][0]
    assert cv['status'] == 'unknown', '改前此断言会拿到 fresh —— 体系自我通过'


def test_fresh_when_calendar_healthy(monkeypatch):
    """U-204: 基准正常（今日即交易日）+ 数据当日 → fresh。"""
    _clear_records(monkeypatch)
    now = datetime(2026, 10, 19, 12)
    today = date(2026, 10, 19)
    freshness.record_update('market_daily', latest_date=today.isoformat(), now=now)

    s = freshness.status_summary(now=now, calendar=[today])

    assert s['calendar_stale'] is False
    md = [i for i in s['items'] if i['asset_id'] == 'market_daily'][0]
    assert md['status'] == 'fresh'


def test_real_stale_still_reported(monkeypatch):
    """U-202: 基准正常但数据落后 → stale（不能因为引入 unknown 就吞掉真实过期）。"""
    _clear_records(monkeypatch)
    now = datetime(2026, 10, 19, 12)
    today = date(2026, 10, 19)
    old = today - timedelta(days=30)
    freshness.record_update('market_daily', latest_date=old.isoformat(), now=now)

    s = freshness.status_summary(now=now, calendar=[today])

    md = [i for i in s['items'] if i['asset_id'] == 'market_daily'][0]
    assert s['calendar_stale'] is False
    assert md['status'] == 'stale'


def test_weekday_fallback_marks_calendar_stale(monkeypatch):
    """基准回退到"最近工作日"兜底时，基准不可信 → calendar_stale=True。"""
    _clear_records(monkeypatch)
    now = datetime(2026, 10, 19, 12)
    monkeypatch.setattr(freshness, '_default_trade_dates', lambda today: [])

    exp, src = expected_latest_with_source(now=now, calendar=None)
    assert src == 'weekday_fallback'
    assert exp.weekday() < 5
    assert is_calendar_stale(now=now, calendar=None, expected=exp, source=src) is True


def test_evaluate_asset_contract():
    """evaluate_asset 的三态 + unknown 契约（纯函数）。"""
    spec = ASSET_REGISTRY['market_daily']
    now = datetime(2026, 10, 19, 12)
    base = date(2026, 9, 11)

    rec = {'latest_date': '2026-09-11'}
    assert evaluate_asset(spec, rec, base, now=now) == 'fresh'
    assert evaluate_asset(spec, rec, base, now=now, calendar_stale=True) == 'unknown'
    assert evaluate_asset(spec, {}, base, now=now) == 'missing'          # 无记录仍报 missing
    assert evaluate_asset(spec, rec, base + timedelta(days=30), now=now) == 'stale'


def test_calendar_lag_counts_weekdays():
    """滞后按工作日计：周一 → 上周五 = 1。"""
    assert calendar_lag_days(now=datetime(2026, 10, 19, 12), expected=date(2026, 10, 16)) == 1
    # 跨越周末不重复计数
    assert calendar_lag_days(now=datetime(2026, 10, 19, 12), expected=date(2026, 10, 15)) == 2


def test_meta_freshness_never_succeeded_flag():
    """U-203: /api/meta/freshness 的 never_succeeded 区分"从未成功"与"已过期"。"""
    from freshness import build_freshness
    items = build_freshness([{'name': 'tushare', 'last_success': None}])
    assert items
    assert all(i['never_succeeded'] is True for i in items if i['source'] == 'tushare')

    items2 = build_freshness([{'name': 'tushare', 'last_success': '2026-10-19T09:00:00'}])
    t = [i for i in items2 if i['source'] == 'tushare'][0]
    assert t['never_succeeded'] is False
