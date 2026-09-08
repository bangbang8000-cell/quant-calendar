#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P0.2): 周视图「上一周」口径统一守护测试

根因: get_week_view 与 calculate_status('week') 用不同切片公式计算上一周, 实测
get_week_view prev=8/20~8/27(6天) vs calculate_status prev=8/21~8/28(6天) -> 同一股票
展示与状态徽标矛盾. 守护: 抽取 _prev_week_dates 统一, 两处 prev 一致, 周视图已出池
列表 == status=='out' 集合, 且 prev 数量与当前周交易日数量一致.
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from views_aggregator import ViewsAggregator


def _va(holdings_by_date):
    va = object.__new__(ViewsAggregator)
    va.daily_data = holdings_by_date
    va.all_dates = sorted(holdings_by_date.keys())
    va._cache = {}
    va._period_set_cache = {}
    return va


def _mk(stocks):
    return [{'stock': c, 'name': c, 'strategy_count': 1, 'strategies': ['x']} for c in stocks]


class TestWeekViewConsistency:
    def test_prev_week_dates_implemented(self):
        dates = [
            '2026-08-17', '2026-08-18', '2026-08-19', '2026-08-20', '2026-08-21',
            '2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28',
            '2026-08-31', '2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04',
        ]
        va = _va({d: _mk(['600000.SH']) for d in dates})
        assert hasattr(va, '_prev_week_dates') and callable(getattr(va, '_prev_week_dates')), '_prev_week_dates 未实现'
        prev = va._prev_week_dates('2026-09-04')
        assert prev == ['2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28'], prev

    def test_week_view_out_equals_status_out(self):
        dates = [
            '2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28',
            '2026-08-31', '2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04',
        ]
        prev_week = {'600000.SH', '600004.SH', '600519.SH', '601318.SH', '000858.SZ'}
        curr_week = {'600000.SH', '000858.SZ', '002371.SZ'}
        hb = {}
        for d in dates[:5]:
            hb[d] = _mk(sorted(prev_week))
        for d in dates[5:]:
            hb[d] = _mk(sorted(curr_week))
        va = _va(hb)
        r = va.get_week_view('2026-09-04')
        out_from_view = set(s['code'] for s in r['stocks']
                            if va.calculate_status(s['code'], '2026-09-04', 'week') == 'out')
        expect_out = prev_week - curr_week
        assert out_from_view == expect_out, (out_from_view, expect_out)

    def test_prev_week_dates_no_overlap_same_length(self):
        dates = ['2026-08-24', '2026-08-25', '2026-08-26', '2026-08-27', '2026-08-28',
                 '2026-08-31', '2026-09-01', '2026-09-02', '2026-09-03', '2026-09-04']
        va = _va({d: _mk(['600000.SH']) for d in dates})
        prev = va._prev_week_dates('2026-09-04')
        week_dates = va._get_week_range('2026-09-04')
        assert set(prev) & set(week_dates) == set()
        assert len(prev) == len(week_dates) == 5
