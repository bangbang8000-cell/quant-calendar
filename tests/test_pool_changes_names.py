"""v3.15 今日重点名称回归 (TC-15.1) — dashboard _get_pool_changes 返回 new_stock_names

根因: 入池 diff 只返回代码串, 前端 codeNameMap 覆盖不到新入池股票 → 今日重点仅显示代码。
"""
from unittest.mock import patch


def _sample_holdings(d):
    """按日期返回持仓 (模拟 parser.get_holdings_by_date)"""
    if d == '2026-08-10':
        return {'s1': {'stocks': ['600519.SH']}}
    return {'s1': {'stocks': ['600519.SH', '000858.SZ']}}


class TestPoolChangesNames:
    def test_pool_changes_includes_new_stock_names(self):
        from dashboard_api import DashboardAnalyzer, parser
        a = DashboardAnalyzer()
        with patch.object(parser, 'get_available_dates', return_value=['2026-08-10', '2026-08-11']), \
             patch.object(parser, 'get_holdings_by_date', side_effect=_sample_holdings), \
             patch('dashboard_api.stock_manager') as sm:
            sm.get_name.side_effect = lambda c: {'600519.SH': '贵州茅台', '000858.SZ': '五粮液'}[c]
            r = a._get_pool_changes('2026-08-11')
        assert r['new_stocks'] == ['000858.SZ']
        assert r['new_stock_names'] == {'000858.SZ': '五粮液'}

    def test_pool_changes_keeps_existing_keys(self):
        from dashboard_api import DashboardAnalyzer, parser
        a = DashboardAnalyzer()
        with patch.object(parser, 'get_available_dates', return_value=['2026-08-10', '2026-08-11']), \
             patch.object(parser, 'get_holdings_by_date', side_effect=_sample_holdings), \
             patch('dashboard_api.stock_manager') as sm:
            sm.get_name.side_effect = lambda c: {'600519.SH': '贵州茅台', '000858.SZ': '五粮液'}[c]
            r = a._get_pool_changes('2026-08-11')
        assert r['new_count'] == 1
        assert list(r['new_stock_names'].keys()) == r['new_stocks']

    def test_pool_changes_empty_on_value_error(self):
        from dashboard_api import DashboardAnalyzer, parser
        a = DashboardAnalyzer()
        with patch.object(parser, 'get_available_dates', return_value=[]):
            r = a._get_pool_changes('2026-08-11')
        assert r['new_stock_names'] == {}
        assert r['new_stocks'] == []
