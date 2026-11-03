#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""热榜—股价共振测试 (v7.2.0 / B6.3, TC-FY-7.2-06/07)

守护：Spearman 秩相关（含并列）、共振/脱钩/反向判定、缺数剔除、口径免责。
"""
import pytest

import attention_resonance as ar


def test_spearman_perfect_and_inverse():
    """TC-FY-7.2-06: 完全单调 → ±1"""
    assert ar.spearman([1, 2, 3, 4], [10, 20, 30, 40]) == pytest.approx(1.0)
    assert ar.spearman([1, 2, 3, 4], [40, 30, 20, 10]) == pytest.approx(-1.0)


def test_spearman_handles_ties_and_small_samples():
    assert ar.spearman([1, 2, 2, 3], [5, 5, 1, 1]) is not None
    assert ar.spearman([1, 2], [1, 2]) is None
    assert ar.spearman([1, 2, 3], [1, 1, 1]) is None


def test_resonance_detects_hot_rising():
    """排名越靠前（越小）涨幅越大 → 秩相关为负 → 判 resonant"""
    hot = [{'thscode': 'A', 'rank': 1, 'name': 'A'},
           {'thscode': 'B', 'rank': 2, 'name': 'B'},
           {'thscode': 'C', 'rank': 3, 'name': 'C'}]
    closes = {'A': [10, 10, 10, 10, 10, 12.0],
              'B': [10, 10, 10, 10, 10, 11.0],
              'C': [10, 10, 10, 10, 10, 10.1]}
    out = ar.resonance(hot, closes, window=5)
    assert out['available'] is True and out['samples'] == 3
    assert out['spearman'] < 0 and out['verdict'] == 'resonant'
    assert '不代表因果' in out['meta']['caveat']


def test_resonance_detects_decoupling():
    hot = [{'thscode': c, 'rank': i + 1} for i, c in enumerate('ABCDE')]
    closes = {c: [10, 10, 10, 10, 10, 10 + (i % 2) * 0.01] for i, c in enumerate('ABCDE')}
    out = ar.resonance(hot, closes, window=5)
    assert out['available'] is True
    assert out['verdict'] in ('decoupled', 'insufficient')


def test_missing_close_excluded_but_reported():
    """TC-FY-7.2-07: 缺收盘价的股票被剔除并列出, 不当作 0 涨跌"""
    hot = [{'thscode': 'A', 'rank': 1}, {'thscode': 'ZZ', 'rank': 2}]
    closes = {'A': [10, 11, 12, 13, 14, 15]}
    out = ar.resonance(hot, closes, window=5)
    assert out['samples'] == 1
    assert out['missing'] == ['ZZ']
    assert out['available'] is True


def test_no_overlap_is_honest():
    out = ar.resonance([{'thscode': 'X', 'rank': 1}], {}, window=5)
    assert out['available'] is False and out['reason'] == 'no_overlap'
    assert out['missing'] == ['X']


def test_pct_change_insufficient():
    assert ar.pct_change([10, 11], 5) is None
    assert ar.pct_change([10] * 5 + [20], 5) == pytest.approx(100.0)
