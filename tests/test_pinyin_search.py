#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
v3.17.10 (FR-3.17.10): 拼音/首字母检索纯函数单测
- 拼音全拼 / 首字母命中（贵州茅台 → gzmt / guizhoumaotai）
- 代码命中、名称命中、混合输入、空输入、无命中返回空
- 内置核心清单 + 额外股票（自选/持仓/评估）索引
"""
import json
import os
import shutil
import subprocess

import pytest

FRONTEND_JS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'frontend', 'js', 'pinyin.js',
)

NEEDS_NODE = pytest.mark.skipif(shutil.which('node') is None, reason='node 不可用')


def _run_js(script: str):
    """在 node 中 require pinyin.js 并执行脚本，返回 JSON 结果"""
    code = (
        "const P = require(process.argv[1]);\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(
        ['node', '-e', code, FRONTEND_JS],
        capture_output=True, text=True, timeout=15,
    )
    assert proc.returncode == 0, f'node 执行失败: {proc.stderr}'
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_pinyin_initials_gzmt():
    """首字母：贵州茅台 → gzmt"""
    out = _run_js("return P.toPinyinInitials('贵州茅台');")
    assert out == 'gzmt'


@NEEDS_NODE
def test_pinyin_full_guizhoumaotai():
    """全拼：贵州茅台 → guizhoumaotai"""
    out = _run_js("return P.toPinyin('贵州茅台');")
    assert out == 'guizhoumaotai'


@NEEDS_NODE
def test_pinyin_initials_multiple_stocks():
    """首字母：平安银行/招商银行/中国神华/五粮液"""
    out = _run_js("""
        return {
            payh: P.toPinyinInitials('平安银行'),
            zsyh: P.toPinyinInitials('招商银行'),
            zgsh: P.toPinyinInitials('中国神华'),
            wly: P.toPinyinInitials('五粮液'),
        };
    """)
    assert out == {'payh': 'payh', 'zsyh': 'zsyh', 'zgsh': 'zgsh', 'wly': 'wly'}


@NEEDS_NODE
def test_search_by_initials():
    """首字母检索：gzmt 命中 贵州茅台"""
    out = _run_js("return P.searchStocksByQuery('gzmt', P.buildStockIndex());")
    assert out == [{'code': '600519.SH', 'name': '贵州茅台', 'source': 'core'}]


@NEEDS_NODE
def test_search_by_full_pinyin():
    """全拼检索：guizhoumaotai / guizhou 命中 贵州茅台"""
    out = _run_js("""
        const idx = P.buildStockIndex();
        return {
            full: P.searchStocksByQuery('guizhoumaotai', idx),
            prefix: P.searchStocksByQuery('guizhou', idx).map(x => x.code),
        };
    """)
    assert out['full'][0]['code'] == '600519.SH'
    assert out['prefix'] == ['600519.SH']


@NEEDS_NODE
def test_search_by_code():
    """代码命中：600519 与 000001 均命中"""
    out = _run_js("""
        const idx = P.buildStockIndex();
        return {
            a: P.searchStocksByQuery('600519', idx).map(x => x.code),
            b: P.searchStocksByQuery('000001', idx).map(x => x.code),
        };
    """)
    assert out['a'] == ['600519.SH']
    assert out['b'] == ['000001.SZ']


@NEEDS_NODE
def test_search_by_name_contains():
    """名称包含：茅台 命中 贵州茅台"""
    out = _run_js("return P.searchStocksByQuery('茅台', P.buildStockIndex()).map(x => x.code);")
    assert out == ['600519.SH']


@NEEDS_NODE
def test_search_mixed_input():
    """混合输入：'gz 茅台'（首字母 + 汉字分词）命中 贵州茅台"""
    out = _run_js("return P.searchStocksByQuery('gz 茅台', P.buildStockIndex()).map(x => x.code);")
    assert out == ['600519.SH']


@NEEDS_NODE
def test_search_empty_query():
    """空输入返回空数组"""
    out = _run_js("return P.searchStocksByQuery('', P.buildStockIndex()).length;")
    assert out == 0


@NEEDS_NODE
def test_search_no_match():
    """无命中返回空数组"""
    out = _run_js("return P.searchStocksByQuery('zzzz', P.buildStockIndex()).length;")
    assert out == 0


@NEEDS_NODE
def test_search_extra_stocks_registered():
    """额外股票（自选/持仓/评估历史来源）经 registerExtraStocks 后可被检索"""
    out = _run_js("""
        P.registerExtraStocks([{ code: '600000.SH', name: '浦发银行' }]);
        return {
            pinyin: P.searchCoreStocks('pufa').map(x => x.code),
            initials: P.searchCoreStocks('pfyh').map(x => x.code),
        };
    """)
    assert out['pinyin'] == ['600000.SH']
    assert out['initials'] == ['600000.SH']


@NEEDS_NODE
def test_build_index_dedup():
    """索引按 code 去重：额外股票与内置核心清单重复 code 不重复入索引"""
    out = _run_js("""
        const idx = P.buildStockIndex([{ code: '600519.SH', name: '贵州茅台' }]);
        const hits = idx.filter(s => s.code === '600519.SH');
        return { count: hits.length, sources: hits.map(h => h.source) };
    """)
    assert out['count'] == 1
    assert out['sources'] == ['core']


@NEEDS_NODE
def test_search_multi_token_intersection():
    """多 token 需全部命中：'gz 平安' 不应命中 贵州茅台（token 交集）"""
    out = _run_js("""
        const idx = P.buildStockIndex();
        return {
            both: P.searchStocksByQuery('gz 平安', idx).map(x => x.code),
            all: P.searchStocksByQuery('gz 茅台', idx).map(x => x.code),
        };
    """)
    assert '600519.SH' not in out['both']
    assert out['all'] == ['600519.SH']
