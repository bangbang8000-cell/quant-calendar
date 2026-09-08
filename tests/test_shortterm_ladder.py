#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.2.0 (T-5.2.03): 连板梯队 + 断层检测测试"""
from shortterm.ladder import tier_counts, ladder_gap


def _rows(board_list):
    return [{'ts_code': f'00{i:04d}', 'name': f'股{i}', 'boards': b}
            for i, b in enumerate(board_list)]


def test_tier_counts():
    rows = _rows([1, 1, 2, 2, 3, 5])
    assert tier_counts(rows) == {1: 2, 2: 2, 3: 1, 5: 1}


def test_tier_counts_ignores_none_and_zero():
    rows = _rows([1, 2, None, 0, -1])
    assert tier_counts(rows) == {1: 1, 2: 1}


def test_ladder_continuous():
    out = ladder_gap(_rows([1, 1, 2, 3, 4]))
    assert out['highest'] == 4
    assert out['continuous'] is True
    assert out['gaps'] == []
    assert out['tiers'] == {1: 2, 2: 1, 3: 1, 4: 1}


def test_ladder_gap_detected():
    out = ladder_gap(_rows([1, 2, 5]))
    assert out['highest'] == 5
    assert out['continuous'] is False
    assert out['gaps'] == [3, 4]
    assert '断层' in out['note']
    assert '3, 4' in out['note']


def test_ladder_gap_no_gap_below_2():
    """1 板和 2 板之间不算断层(断层从 2 板起算)"""
    out = ladder_gap(_rows([1, 2]))
    assert out['continuous'] is True


def test_ladder_empty():
    out = ladder_gap([])
    assert out['highest'] is None
    assert out['continuous'] is True
    assert out['note'] == '无连板样本'


def test_ladder_tiers_sorted():
    out = ladder_gap(_rows([5, 3, 2, 1, 4]))
    assert list(out['tiers'].keys()) == [1, 2, 3, 4, 5]
