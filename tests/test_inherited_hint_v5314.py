#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P2.6): 部分策略滞后降级提示守护测试

根因: _resolve_holdings_date 对部分策略数据滞后时静默继承最近持仓, 无任何提示
→ 用户误以为当日全策略已更新. 守护: get_holdings_by_date 返回每策略 inherited_from
字段(继承的真实日期); 全策略就绪时无该字段(或为空); API 透出供前端 note.
"""
import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(__file__), '..', 'backend'))

from data_parser import DataParser


def _parser(holdings, dates):
    p = object.__new__(DataParser)
    p.holdings_data = holdings
    p.date_list = sorted(dates)
    p.carried_dates = ['2026-09-07']
    p.stock_info = {}
    return p


class TestInheritedHint:
    def test_lagging_strategy_has_inherited_from(self):
        """策略 A 数据到 9/4, 策略 B 到 8/28: 9/7(carried) 两者都应继承并标注 inherited_from."""
        holdings = {
            'multifactor': {'2026-09-04': {'600000.SH'}},
            'industry_rotation': {'2026-08-28': {'600004.SH'}},
        }
        p = _parser(holdings, ['2026-08-28', '2026-09-04'])
        r = p.get_holdings_by_date('2026-09-07')
        assert r['multifactor']['inherited_from'] == '2026-09-04', r['multifactor']
        assert r['industry_rotation']['inherited_from'] == '2026-08-28', r['industry_rotation']

    def test_fresh_strategy_no_inherited_from(self):
        """真实交易日 9/4: 策略有当日数据 → 无 inherited_from(或为空)."""
        holdings = {'multifactor': {'2026-09-04': {'600000.SH'}}}
        p = _parser(holdings, ['2026-09-04'])
        r = p.get_holdings_by_date('2026-09-04')
        assert 'inherited_from' not in r['multifactor'] or not r['multifactor'].get('inherited_from')

    def test_all_lagging_but_in_range(self):
        """所有策略滞后但在 CARRY 上限内: 都带 inherited_from."""
        holdings = {
            'multifactor': {'2026-09-03': {'600000.SH'}},
            'industry_rotation': {'2026-09-03': {'600004.SH'}},
        }
        p = _parser(holdings, ['2026-09-03'])
        r = p.get_holdings_by_date('2026-09-07')
        assert r['multifactor']['inherited_from'] == '2026-09-03'
        assert r['industry_rotation']['inherited_from'] == '2026-09-03'
