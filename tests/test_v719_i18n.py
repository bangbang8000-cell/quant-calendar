#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-9): 策略研究术语中文化 —— 后端 label 契约 + 前端映射一致性 + 英文泄漏扫描"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONT = os.path.join(BASE, 'frontend', 'js')


def _read(*parts):
    with open(os.path.join(*parts), encoding='utf-8') as f:
        return f.read()


def test_registry_emits_chinese_labels():
    from strategy_sdk.registry import registry
    items = registry.list()
    assert items
    for s in items:
        assert s.get('id_cn'), s['id']
        for f in s.get('factor_specs') or []:
            assert f.get('label'), (s['id'], f['name'])
            assert f.get('category_cn'), (s['id'], f['name'])
            # 中文而非英文原值
            assert re.search(r'[\u4e00-\u9fa5]', f['label']), f


def test_all_registered_sids_have_labels():
    from strategy_sdk.labels import STRATEGY_LABELS
    from strategy_sdk.registry import registry
    for s in registry.list():
        assert s['id'] in STRATEGY_LABELS, s['id']


def test_frontend_lexicon_matches_backend_tables():
    from strategy_sdk import labels
    js = _read(FRONT, 'research-lexicon.js')
    for kind, table in labels.MAPS.items():
        for key in table:
            assert key in js, f'{kind}.{key} 未在 research-lexicon.js 中'
    # 白名单式的关键 enum 必须覆盖
    for key in ('success', 'failed', 'running', 'manual', 'scheduled', 'fastdtw'):
        assert key in js


def test_research_views_do_not_render_raw_enums():
    part1 = _read(FRONT, 'components', 'research', 'view-part1.js')
    assert '{{ run.status }}' not in part1
    assert '{{ run.mode }}' not in part1
    assert '{{ r.sid }}' not in part1
    assert 'LX.status(' in part1 and 'LX.mode(' in part1 and 'LX.sid(' in part1
    # 因子下拉不再拼英文类别
    assert "' (' + f.category + ')'" not in part1
    assert 'LX.factorWithCategory(' in part1


def test_pattern_lab_engine_localized():
    src = _read(FRONT, 'components', 'pattern-lab.js')
    assert 'LX.engine(' in src
    assert 'prop="engine"' not in src


def test_lexicon_loaded_before_components():
    main = _read(os.path.join(BASE, 'frontend', 'src', 'main.js'))
    assert "import '../js/research-lexicon.js'" in main
