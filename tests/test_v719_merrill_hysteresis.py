#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-4): 美林时钟滞回规则测试

覆盖：滞回带（贴轴抖动 10 次翻转 0 次）、连续 2 次确认、最短持续期、
候选切换重置、自然日→交易日换算、切换后进度承接不归零。
"""
from datetime import datetime, timedelta

import pytest

import merrill_clock as mc
from merrill_clock import _hysteresis as hz


def test_band_noise_never_switches():
    """score 在 ±0.05 波动 10 次：翻转 0 次（旧逻辑 ≥4 次）"""
    current = 'recession'
    pending = None
    flips = 0
    for i in range(10):
        raw = 'recovery' if i % 2 == 0 else 'overheat'
        score = 0.05 if i % 2 == 0 else -0.05
        d = hz.decide(raw, current, score, pending, 60)
        assert d['stage'] == current
        assert d['decision'] == 'hysteresis'
        assert d['pending'] is None
        pending = d['pending']
        if d['stage'] != current:
            flips += 1
    assert flips == 0


def test_confirmation_requires_two_evaluations():
    d1 = hz.decide('recovery', 'recession', -0.8, None, 60)
    assert d1['decision'] == 'confirming'
    assert d1['stage'] == 'recession'
    assert d1['pending'] == {'stage': 'recovery', 'count': 1}

    d2 = hz.decide('recovery', 'recession', -0.8, d1['pending'], 60)
    assert d2['decision'] == 'switch'
    assert d2['stage'] == 'recovery'
    assert d2['trigger'] == 'confirmed'
    assert d2['pending'] is None


def test_min_dwell_blocks_then_allows():
    d = hz.decide('recovery', 'recession', -0.8, {'stage': 'recovery', 'count': 1}, 5)
    assert d['decision'] == 'blocked_dwell'
    assert d['stage'] == 'recession'
    assert d['dwell_blocked'] is True

    later = hz.decide('recovery', 'recession', -0.8, d['pending'], 25)
    assert later['decision'] == 'switch'
    assert later['stage'] == 'recovery'


def test_pending_resets_when_candidate_changes():
    d = hz.decide('recovery', 'recession', -0.8, {'stage': 'stagflation', 'count': 1}, 60)
    assert d['pending'] == {'stage': 'recovery', 'count': 1}
    assert d['decision'] == 'confirming'


def test_same_stage_clears_pending():
    d = hz.decide('recession', 'recession', -0.9, {'stage': 'recovery', 'count': 1}, 60)
    assert d['decision'] == 'same'
    assert d['pending'] is None


def test_first_evaluation_accepts_raw():
    d = hz.decide('recovery', None, 0.01, None, 0)
    assert d['decision'] == 'first'
    assert d['stage'] == 'recovery'


def test_trading_days_conversion():
    assert hz.to_trading_days(7) == 5
    assert hz.to_trading_days(0) == 0
    assert hz.to_trading_days(None) == 0
    assert hz.to_trading_days('bad') == 0


@pytest.fixture
def clock(tmp_path, monkeypatch):
    monkeypatch.setattr(mc, 'CACHE_FILE', str(tmp_path / 'cache.json'))
    monkeypatch.setattr(mc, 'HISTORY_FILE', str(tmp_path / 'history.json'))
    monkeypatch.setattr(mc, 'SNAPSHOT_FILE', str(tmp_path / 'snapshot.json'))
    c = mc.MerrillClock()
    c.history['current_stage'] = None
    c.history['current_stage_start'] = (datetime.now() - timedelta(days=5)).isoformat()
    c.history['transitions'] = []
    return c


def _dims(growth=0.0, inflation=0.0):
    return {
        'growth': {'score': growth, 'level': '中位', 'details': {}},
        'inflation': {'score': inflation, 'level': '适中', 'details': {}},
        'liquidity': {'score': 0.0, 'level': '中性', 'details': {}},
        'employment': {'score': 0.0, 'level': '中性', 'details': {}},
        'external': {'score': 0.0, 'level': '中性', 'details': {}},
    }


def _ind():
    return {'pmi': 44.0, 'gdp_growth': 3.5, 'industrial_added': 3.5,
            'cpi': 1.0, 'ppi': 0.0, 'm2_growth': 8.5, 'social_financing': 10.0,
            'lpr_1y': 3.5, 'surveyed_unemployment': 5.0,
            'exports_growth': 5.0, 'imports_growth': 3.0}


def test_switch_inherits_dwell_and_does_not_reset_progress(clock, monkeypatch):
    """切换后承接已持续天数：inherited_days > 0 且 progress 不归零"""
    clock.history['current_stage'] = 'recovery'
    clock.history['current_stage_start'] = (datetime.now() - timedelta(days=200)).isoformat()
    clock.history['stage_pending'] = {'stage': 'recession', 'count': 1}
    monkeypatch.setattr(clock, '_determine_stage_from_scores',
                        lambda dims: ('recession', 0.8, 0.5))
    monkeypatch.setattr(clock, '_compute_dimension_scores',
                        lambda ind: _dims(growth=-1.5, inflation=-1.2))

    info = clock.determine_stage(_ind())
    assert info['stage'] == 'recession'
    t = info['timing']
    assert t['duration_days'] == 0                      # 本阶段真实天数从 0 起
    assert t['inherited_days'] > 0                      # 但进度承接上一段
    assert t['cycle_days'] == t['duration_days'] + t['inherited_days']
    assert t['progress_percent'] > 0
    assert info['recent_transitions'][0]['hysteresis']['decision'] == 'switch'
