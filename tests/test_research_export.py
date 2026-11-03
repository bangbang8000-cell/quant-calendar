#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""离线单文件导出测试 (v7.1.0 / B5.3, TC-FY-7.1-05/06)

守护：单文件自包含、断网可用、尾注四要素、零凭据/零预签名、禁称拦截。
"""
import re

import pytest

import research_export as rx

MATRIX = {
    'available': True,
    'generated_at': '2026-11-03 21:00:00',
    'requested': 2,
    'covered': 2,
    'rows': [
        {'index_code': '881129.TI', 'name': '通信设备',
         'rel': {'rel_5': 2.1, 'rel_20': 5.6, 'rel_60': 9.1}, 'acceleration': -3.5,
         'volume_pulse': 1.21, 'rank_20': 1, 'rank_change': 2},
        {'index_code': '881273.TI', 'name': '白酒',
         'rel': {'rel_5': -1.2, 'rel_20': -2.4, 'rel_60': 1.0}, 'acceleration': 1.2,
         'volume_pulse': 0.88, 'rank_20': 2, 'rank_change': -1},
    ],
    'meta': {'source': 'fuyao',
             'endpoints': ['/api/a-share-index/catalog/ths-index-list',
                           '/api/a-share-index/prices/historical'],
             'caliber': '等权涨跌代理', 'disclaimer': '仅供数据观察，不构成投资建议'},
}


def test_export_builds_self_contained_html(tmp_path):
    """TC-FY-7.1-05: 单文件自包含（无外链资源），断网可打开"""
    out = str(tmp_path / 'industry.html')
    res = rx.export_industry_matrix(MATRIX, out)
    assert res['rows'] == 2 and res['bytes'] > 1000
    doc = open(out, encoding='utf-8').read()
    assert rx.is_self_contained(doc) is True
    assert 'http://' not in doc and 'https://' not in doc.replace('https://example', '')
    assert '<style>' in doc and '<table>' in doc


def test_footer_four_elements_present(tmp_path):
    """TC-FY-7.1-04: 导出物必须含四要素尾注"""
    out = str(tmp_path / 'x.html')
    rx.export_industry_matrix(MATRIX, out)
    doc = open(out, encoding='utf-8').read()
    for key in ('数据时间', '来源', '口径', '不构成投资建议'):
        assert key in doc
    assert 'qc-footer-meta' in doc


def test_no_credentials_or_presigned(tmp_path):
    """TC-FY-7.1-06: 导出物零凭据、零预签名"""
    matrix = dict(MATRIX)
    matrix['meta'] = dict(MATRIX['meta'], endpoints=['/api/x?key=sk-fuyao-SHOULD-NOT-LEAK'])
    out = str(tmp_path / 'leak.html')
    with pytest.raises(ValueError) as ei:
        rx.export_industry_matrix(matrix, out)
    assert '凭据' in str(ei.value)
    assert not __import__('os').path.exists(out), '检查失败时不得留下半成品'


def test_forbidden_term_blocks_export(tmp_path):
    matrix = dict(MATRIX)
    matrix['meta'] = dict(MATRIX['meta'], caliber='按指数贡献加权')
    with pytest.raises(ValueError) as ei:
        rx.export_industry_matrix(matrix, str(tmp_path / 'bad.html'))
    assert '指数贡献' in str(ei.value)


def test_empty_matrix_marks_no_data_mode(tmp_path):
    empty = dict(MATRIX, rows=[], covered=0)
    out = str(tmp_path / 'empty.html')
    rx.export_industry_matrix(empty, out)
    doc = open(out, encoding='utf-8').read()
    assert '未取到数据' in doc and '未取到数据（非模拟）' in doc
    assert '未取到数据' in doc


def test_data_payload_inlined_without_breaking_script(tmp_path):
    matrix = dict(MATRIX)
    matrix['rows'] = [dict(MATRIX['rows'][0], name='携</script>攻击')]
    out = str(tmp_path / 'esc.html')
    rx.export_industry_matrix(matrix, out)
    doc = open(out, encoding='utf-8').read()
    assert doc.count('<script') == 2, '只应有 data + 排序脚本两块'
    assert '</script>攻击' not in doc


def test_bar_renders_without_external_lib(tmp_path):
    out = str(tmp_path / 'bar.html')
    rx.export_industry_matrix(MATRIX, out)
    doc = open(out, encoding='utf-8').read()
    assert 'class="bar"' in doc
    assert not re.search(r'<script src=', doc)
