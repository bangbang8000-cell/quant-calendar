#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P1.4): 年视图已出池不截断守护测试

根因: get_year_view 用 for code in sorted(out_codes)[:200] 硬截断, 前端计数基于
截断列表 → out 真实数失真, CSV 导出缺行. 守护: out 全量返回(>200), total=真实数,
含 out_total 字段, status 计数和=total.
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


class TestYearViewFull:
    def test_out_over_200_all_returned(self):
        """去年 out 超过 200 只: 全量返回(不截断)."""
        # 去年 300 只, 今年只留 10 只(其余 290 出池)
        prev_codes = [f'6{str(i).zfill(5)}.SH' for i in range(300)]
        curr_codes = prev_codes[:10]
        dates = ['2025-01-02', '2025-01-03', '2025-01-06'] + ['2026-01-02', '2026-01-05', '2026-01-06']
        hb = {}
        for d in dates[:3]:
            hb[d] = _mk(sorted(prev_codes))
        for d in dates[3:]:
            hb[d] = _mk(sorted(curr_codes))
        va = _va(hb)
        r = va.get_year_view('2026-01-06')
        # total = 今年 10 + 出池 290 = 300 (若截断 200 则只有 210)
        assert r['total'] == 300, r['total']
        assert len(r['stocks']) == 300, len(r['stocks'])
        assert r.get('out_total') == 290, r.get('out_total')

    def test_status_sum_equals_total(self):
        """年视图 status 计数和 = total(无截断后自洽)."""
        prev_codes = [f'6{str(i).zfill(5)}.SH' for i in range(30)]
        curr_codes = prev_codes[:5] + ['000001.SZ']
        dates = ['2025-01-02', '2025-01-03'] + ['2026-01-02', '2026-01-05']
        hb = {}
        for d in dates[:2]:
            hb[d] = _mk(sorted(prev_codes))
        for d in dates[2:]:
            hb[d] = _mk(sorted(curr_codes))
        va = _va(hb)
        r = va.get_year_view('2026-01-05')
        st = {}
        for s in r['stocks']:
            k = va.calculate_status(s['code'], '2026-01-05', 'year')
            st[k] = st.get(k, 0) + 1
        assert sum(st.values()) == r['total'] == len(r['stocks']), (st, r['total'])

    def test_no_out_when_same_year_same_pool(self):
        """今年与去年池相同: 无出池, out_total=0."""
        codes = ['600000.SH', '600004.SH']
        dates = ['2025-01-02', '2026-01-02']
        hb = {d: _mk(codes) for d in dates}
        va = _va(hb)
        r = va.get_year_view('2026-01-02')
        assert r['total'] == 2
        assert r.get('out_total') == 0
