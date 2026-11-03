#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""龙虎榜资金拓扑测试 (v7.2.0 / B6.2, TC-FY-7.2-04/05)

核心守护：概念等分后总额守恒（Σ概念 == Σ股票）、range_days 去重、无概念入 unmapped 桶。
"""
import pytest

import lhb_topology as tp

ROWS = [
    {'ts_code': '000001', 'name': 'A', 'net_buy': 100.0,
     'concepts': ['机器人', '减速器'], 'range_days': 1},
    {'ts_code': '000002', 'name': 'B', 'net_buy': -60.0,
     'concepts': ['机器人'], 'range_days': 1},
    {'ts_code': '000003', 'name': 'C', 'net_buy': 30.0,
     'concepts': [], 'range_days': 1},
    {'ts_code': '000004', 'name': 'D', 'net_buy': 1000.0,
     'concepts': ['机器人'], 'range_days': 3},      # 3 日榜, 必须被排除
]


def test_conservation_exact():
    """TC-FY-7.2-04: Σ概念净额 == Σ股票净额（<1e-6）"""
    kept, dropped = tp.filter_range_days(ROWS, 1)
    assert dropped == 1 and len(kept) == 3
    totals, stats = tp.allocate(kept)
    chk = tp.conservation(kept, totals)
    assert chk['ok'] is True and chk['diff'] < 1e-6
    # 机器人 = 50 + (-60) = -10；减速器 = 50；unmapped = 30
    assert totals['机器人'] == pytest.approx(-10.0)
    assert totals['减速器'] == pytest.approx(50.0)
    assert totals[tp.UNMAPPED] == pytest.approx(30.0)
    assert stats['unmapped'] == 1 and stats['max_concepts'] == 2


def test_multi_day_rows_excluded():
    """TC-FY-7.2-05: range_days≠1 的必须被排除（否则净额翻倍）"""
    kept, dropped = tp.filter_range_days(ROWS, 1)
    assert all(r['range_days'] == 1 for r in kept)
    assert dropped == 1


def test_range_days_missing_treated_as_one():
    rows = [{'ts_code': '000009', 'net_buy': 5.0, 'concepts': ['x']}]
    kept, dropped = tp.filter_range_days(rows, 1)
    assert len(kept) == 1 and dropped == 0


def test_null_net_skipped_but_conservation_holds():
    rows = ROWS[:3] + [{'ts_code': '000005', 'net_buy': None, 'concepts': ['机器人'],
                        'range_days': 1}]
    kept, _ = tp.filter_range_days(rows, 1)
    totals, stats = tp.allocate(kept)
    assert stats['skipped'] == 1
    assert tp.conservation(kept, totals)['ok'] is True


def test_build_topology_trajectory_and_ranking():
    out = tp.build_topology([('2026-11-02', ROWS), ('2026-11-03', ROWS)])
    assert out['available'] is True and out['days'] == 2
    assert out['conservation_ok'] is True
    assert out['dropped_multi_day'] == 2
    names = {c['concept'] for c in out['concepts']}
    assert '机器人' in names and tp.UNMAPPED in names
    robot = next(c for c in out['concepts'] if c['concept'] == '机器人')
    assert len(robot['trajectory']) == 2 and robot['cum_net'] == pytest.approx(-20.0)
    assert '等分' in out['meta']['rule'] and '投资建议' in out['meta']['disclaimer']


def test_build_topology_empty():
    out = tp.build_topology([])
    assert out['available'] is False
