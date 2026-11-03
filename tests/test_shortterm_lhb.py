#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""龙虎榜与天梯测试 (v6.8.0 / B2.3, TC-FY-6.8-08/09/10)

守护：Fuyao 龙虎榜题材串/资金性质、range_days=1 去重、天梯样本内口径与对拍一致率。
"""
import pytest

from shortterm import ladder, lhb

ITEM = {
    'thscode': '002172.SZ', 'ticker': '002172', 'name': '澳洋健康',
    'change': 0.099831, 'net_value': 19984996.39, 'net_rate': 0.0071,
    'buy_value': 107932607, 'sell_value': 87947610,
    'concept_list': [{'name': '高压氧舱'}, {'name': '毛发医疗'}],
    'limit_reason': '脑机接口+医疗服务', 'range_days': 1,
    'org_net_value': 5000000, 'hot_money_net_value': -1000000,
}


def test_normalize_keeps_concepts_tags_reason():
    rows = lhb.normalize_fuyao_lhb_items([ITEM])
    r = rows[0]
    assert r['ts_code'] == '002172'
    assert r['concepts'] == ['高压氧舱', '毛发医疗']
    assert '机构' in r['tags'] and '游资' not in r['tags']
    assert r['reason'] == '脑机接口+医疗服务'
    assert r['pct_chg'] == pytest.approx(9.98, abs=0.01)
    assert r['net_buy_ratio'] == pytest.approx(0.71, abs=0.01)


def test_fuyao_lhb_filters_range_days(monkeypatch):
    """TC-FY-6.8-10: 默认只纳入 range_days=1，避免 1 日榜与 3 日榜重复计额"""
    class FakeClient:
        def get(self, cap, path, params=None):
            assert params['date'] == '2026-11-03', 'date 必须是 yyyy-MM-dd'
            return {'ok': True, 'data': {
                'trade_date': '2026-11-03',
                'stock_items': [ITEM, dict(ITEM, ticker='600000', range_days=3)],
                'hot_money_items': [],
            }}

    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return True

        def fuyao_client(self):
            return FakeClient()

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)
    rows, meta = lhb.fetch_lhb_fuyao('2026-11-03')
    assert len(rows) == 1 and rows[0]['ts_code'] == '002172'
    assert meta['raw_count'] == 2 and meta['excluded_multi_day'] == 1
    assert 'range_days=1' in meta['note']


def test_fuyao_lhb_degrades(monkeypatch):
    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return False

        def fuyao_client(self):
            raise AssertionError('能力关闭不应取数')

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)
    rows, meta = lhb.fetch_lhb_fuyao('2026-11-03')
    assert rows is None and meta['reason'] == 'capability_disabled'


def test_ladder_compare_agreement():
    """TC-FY-6.8-08: 天梯对拍按 2 板及以上家数比较，一致率 ≥98% 视为通过"""
    fuyao_ladder = {
        'available': True,
        'days': [
            {'date': '2026-11-03', 'counts': {'two_board': 12, 'three_board': 1}},
            {'date': '2026-11-02', 'counts': {'two_board': 10, 'three_board': 2}},
        ],
    }
    local = {
        '2026-11-03': {'two_board': 12, 'three_board': 1},
        '2026-11-02': {'two_board': 10, 'three_board': 2},
    }
    out = ladder.compare_ladder(fuyao_ladder, local)
    assert out['compared'] == 2 and out['ok'] is True and out['agree_rate'] == 1.0

    local['2026-11-02']['two_board'] = 3
    out2 = ladder.compare_ladder(fuyao_ladder, local)
    assert out2['ok'] is False and out2['mismatches']


def test_ladder_compare_without_fuyao():
    out = ladder.compare_ladder(None, {})
    assert out['ok'] is False and out['reason'] == 'fuyao_unavailable'


def test_ladder_meta_declares_sample_caliber(monkeypatch):
    class FakeClient:
        def get(self, cap, path, params=None):
            return {'ok': True, 'data': {
                'window': {'length': 1, 'date_list': ['2026-11-03'],
                           'board_caps': {'two_board': 1}},
                'item': [{'date': '2026-11-03', 'boards': {'two_board': [{'ticker': '000001'}, {'ticker': '000002'}]}}],
            }}

    class FakeMgr:
        def fuyao_capability_enabled(self, cap):
            return True

        def fuyao_client(self):
            return FakeClient()

    import data_sources
    monkeypatch.setattr(data_sources, 'data_source_manager', FakeMgr(), raising=False)
    lad, _ = ladder.fetch_ladder_fuyao()
    assert lad['available'] is True and lad['days'][0]['counts']['two_board'] == 2
    assert '不是全市场晋级率' in lad['meta']['caliber']
