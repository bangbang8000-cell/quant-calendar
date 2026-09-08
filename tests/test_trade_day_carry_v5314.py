#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P1.3): 前向填充识别法定节假日守护测试

根因: _carry_forward_to_today 仅 d.weekday()<5 判断工作日, 不识别 A 股法定节假日
→ 国庆/春节等休市日被填充为可看日期; 长假 > CARRY_FORWARD_MAX_GAP_DAYS(10) 不填充.
守护: 节假日不填充; 真实交易日(已知/数据源)填充; 长假超限返回提示; 缓存生效.
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))
from unittest.mock import patch

import stock_calendar as sc


def _parser_with(holdings, dates):
    from data_parser import DataParser
    p = object.__new__(DataParser)
    p.holdings_data = holdings
    p.date_list = list(dates)
    p.carried_dates = []
    p.stock_info = {}
    return p





class TestTradeDay:
    def setup_method(self):
        sc.clear_cache()

    def test_weekend_is_not_trade_day(self):
        sc.seed_known_trade_days(['2026-09-04'])
        from datetime import date
        assert sc.is_trade_day(date(2026, 9, 5)) is False  # 周六
        assert sc.is_trade_day(date(2026, 9, 6)) is False  # 周日

    def test_known_trade_day_is_true(self):
        sc.seed_known_trade_days(['2026-09-04'])
        from datetime import date
        assert sc.is_trade_day(date(2026, 9, 4)) is True

    def test_holiday_not_filled_when_known_present(self):
        """已知交易日含 9/30(周五收盘), 国庆 10/1~10/7 为节假日应不填充."""
        sc.seed_known_trade_days([
            '2026-09-28', '2026-09-29', '2026-09-30',
            '2026-10-08', '2026-10-09',  # 国庆后交易日
        ])
        p = _parser_with({}, ['2026-09-30'])
        # 数据源交易日历(压缩 YYYYMMDD): 10/1~10/7 国庆休市不在其中
        cal = {'20260928', '20260929', '20260930', '20261008', '20261009'}
        with patch.object(sc, '_fetch_trade_calendar', return_value=cal):
            p._carry_forward_to_today(today='2026-10-09')
        # 只填充真实交易日 10/8、10/9, 不填充 10/1~10/7
        assert '2026-10-01' not in p.carried_dates
        assert '2026-10-07' not in p.carried_dates
        assert '2026-10-08' in p.carried_dates
        assert '2026-10-09' in p.carried_dates

    def test_long_holiday_over_gap_limit_not_filled(self):
        """长假超过 CARRY_FORWARD_MAX_GAP_DAYS(10) → 不填充(数据未更新可见)."""
        sc.seed_known_trade_days(['2026-09-30', '2026-10-13'])
        p = _parser_with({}, ['2026-09-30'])
        with patch.object(sc, '_fetch_trade_calendar', return_value=set()):
            p._carry_forward_to_today(today='2026-10-13')  # 13 天 > 10
        assert p.carried_dates == [], p.carried_dates

    def test_data_source_fetch_failure_falls_back_weekday(self):
        """数据源交易日历不可达 → 不抛错, 降级 weekday 并标记."""
        sc.seed_known_trade_days([])
        from datetime import date
        with patch.object(sc, '_fetch_trade_calendar', return_value=set()):
            # 周一(非已知) → 兜底视为交易日
            assert sc.is_trade_day(date(2026, 10, 12)) is True
            assert sc.is_degraded() is True

    def test_cache_hit_no_refetch(self):
        """同一天二次调用命中缓存, 不再触发数据源."""
        sc.seed_known_trade_days([])
        from datetime import date
        calls = {'n': 0}
        def fake_fetch(year):
            calls['n'] += 1
            return set()
        with patch.object(sc, '_fetch_trade_calendar', fake_fetch):
            sc.is_trade_day(date(2026, 10, 12))
            sc.is_trade_day(date(2026, 10, 12))
        assert calls['n'] == 1
