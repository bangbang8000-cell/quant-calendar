#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""涨停情绪脉冲屏测试 (v7.2.0 / B6.1, TC-FY-7.2-01/02/03)

守护：早封率/封单留存口径、原因分布按 + 切词、板位矩阵、口径标注、缺数不填 0。
"""
import pytest

import sentiment_pulse as sp

ROWS = [
    {'ts_code': '000001', 'boards': 2, 'first_seal_time': '09:25:00',
     'seal_amount': 90, 'max_seal_money': 100, 'reason': '重组复牌+铜锂矿'},
    {'ts_code': '000002', 'boards': 1, 'first_seal_time': '10:15:00',
     'seal_amount': 40, 'max_seal_money': 100, 'reason': '铜锂矿+民爆'},
    {'ts_code': '000003', 'boards': 4, 'first_seal_time': '09:30',
     'seal_amount': None, 'max_seal_money': None, 'reason': '民爆'},
    {'ts_code': '000004', 'boards': 1, 'first_seal_time': None,
     'seal_amount': 50, 'max_seal_money': 50, 'reason': ''},
]

POOL = {'available': True, 'source': 'fuyao+eastmoney', 'include_st': True, 'rows': ROWS}


def test_early_seal_rate():
    """TC-FY-7.2-01: 09:25 与 09:30 都算早封（≤09:30）, 10:15 与无时间不算"""
    assert sp.early_seal_rate(ROWS) == pytest.approx(2 / 3, abs=1e-3)
    assert sp.early_seal_rate([]) is None
    assert sp.early_seal_rate([{'first_seal_time': None}]) is None


def test_seal_retention_ignores_missing():
    """封单留存只统计两个字段都有效的行：(0.9, 0.4, 1.0) → 均值 0.7667"""
    assert sp.seal_retention(ROWS) == pytest.approx(0.7667, abs=1e-3)
    assert sp.seal_retention([{'seal_amount': 1, 'max_seal_money': 0}]) is None


def test_reason_distribution_splits_by_plus():
    """TC-FY-7.2-03: 原因按 "+" 切词, 原始词不合并"""
    dist = sp.reason_distribution(ROWS)
    top = {d['token']: d['count'] for d in dist}
    assert top['铜锂矿'] == 2 and top['民爆'] == 2 and top['重组复牌'] == 1
    assert dist[0]['count'] >= dist[-1]['count']


def test_board_stats():
    st = sp.board_stats(ROWS)
    assert st['limit_up_count'] == 4
    assert st['consec_count'] == 2          # 2 板与 4 板
    assert st['max_boards'] == 4
    assert st['one_board'] == 2


def test_ladder_matrix_shape():
    ladder = {'available': True, 'board_caps': {'two_board': 1},
              'days': [{'date': '2026-11-03', 'counts': {'two_board': 12, 'three_board': 1}}]}
    m = sp.ladder_matrix(ladder)
    assert m['available'] is True and m['rows'][0]['two_board'] == 12
    assert '仅代表样本内' in m['meta']['caliber']

    assert sp.ladder_matrix({'available': False, 'reason': 'capability_disabled'})['available'] is False


def test_build_pulse_full():
    """TC-FY-7.2-02: 脉冲屏含统计/早封/留存/原因/矩阵 + 口径标注"""
    ladder = {'available': True, 'days': [{'date': '2026-11-03', 'counts': {'two_board': 2}}]}
    out = sp.build_pulse('2026-11-03', POOL, ladder)
    assert out['available'] is True
    assert out['include_st'] is True and out['source'] == 'fuyao+eastmoney'
    assert out['counts']['max_boards'] == 4
    assert out['early_seal_rate'] is not None and out['seal_retention'] is not None
    assert out['reasons']
    for key in ('early_seal', 'seal_retention', 'reasons', 'caliber', 'disclaimer'):
        assert key in out['meta']
    assert '不做行业分布' in out['meta']['caliber']


def test_build_pulse_without_pool_data_is_honest():
    """缺数据如实降级，不填 0"""
    out = sp.build_pulse('2026-11-03', {'available': False, 'reason': '[⚠️ 涨停池取数失败]'})
    assert out['available'] is False
    assert '取数失败' in out['reason']
    assert 'counts' not in out
