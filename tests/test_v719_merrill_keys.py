#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-4): 美林时钟前后端键名/象限契约 + 前端静默兜底已移除"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONT = os.path.join(BASE, 'frontend', 'js')


def _read(*parts):
    with open(os.path.join(*parts), encoding='utf-8') as f:
        return f.read()


def test_backend_stage_keys_use_overheat():
    import merrill_clock as mc
    assert 'overheat' in mc.STAGES
    assert 'overheating' not in mc.STAGES


def test_frontend_has_no_overheating_token():
    offenders = []
    for root, _dirs, files in os.walk(os.path.join(BASE, 'frontend', 'js')):
        for name in files:
            if not name.endswith('.js'):
                continue
            p = os.path.join(root, name)
            with open(p, encoding='utf-8') as f:
                if 'overheating' in f.read():
                    offenders.append(os.path.relpath(p, BASE))
    assert offenders == []


def test_quadrants_are_clockwise():
    """2 列栅格：复苏(TL) → 过热(TR) → 滞胀(BR) → 衰退(BL)"""
    src = _read(FRONT, 'merrill.js')
    m = re.search(r"const order = \[([^\]]+)\]", src)
    assert m, 'stages 顺序常量丢失'
    order = [x.strip().strip("'\"") for x in m.group(1).split(',')]
    assert order == ['recovery', 'overheat', 'stagflation', 'recession']


def test_no_silent_recovery_fallback():
    src = _read(FRONT, 'merrill.js')
    assert "const stage = data.stage || 'recovery'" not in src
    # 初始态不得预置「复苏期 + 硬编码指标」
    assert "stage: 'recovery'" not in src
    assert "pmi: 50.8" not in src


def test_catch_branch_does_not_fake_indicators():
    src = _read(FRONT, 'merrill.js')
    catch_idx = src.find("获取美林时钟失败")
    assert catch_idx > 0
    segment = src[catch_idx:catch_idx + 500]
    assert 'gdp_growth: 5.2' not in segment
    assert 'merrillStale.value' in segment


def test_stale_state_exposed_and_rendered():
    merrill = _read(FRONT, 'merrill.js')
    assert 'merrillStale' in merrill and 'merrillDataAsOf' in merrill
    view = _read(FRONT, 'components', 'strategies', 'view-part1.js')
    assert 'merrillStale' in view
    assert '数据未更新' in view


def test_dead_code_get_stage_angle_removed():
    merrill = _read(FRONT, 'merrill.js')
    assert 'function getStageAngle' not in merrill
    app = _read(FRONT, 'app-logic.js')
    assert 'getStageAngle' not in app
