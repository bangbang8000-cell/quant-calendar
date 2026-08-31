"""
状态面板四态元数据测试 (v3.11 / FR-3.11.5, TC-11.8)

元数据位于 frontend/js/state-panel-core.js（UMD 导出，纯数据），
测试通过 subprocess 调 node require 该模块并断言 JSON 输出。
覆盖：
- TC-11.8 空/加载/错误/离线四态元数据齐全且渲染所需字段正确
"""
import json
import os
import shutil
import subprocess

import pytest

FRONTEND_JS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'frontend', 'js', 'state-panel-core.js',
)

NEEDS_NODE = pytest.mark.skipif(shutil.which('node') is None, reason='node 不可用')


def _run_js(script: str):
    """在 node 中 require 模块并执行脚本，返回 JSON 结果"""
    code = (
        "const SP = require(process.argv[1]);\n"
        "Promise.resolve((function(){\n" + script + "\n})())\n"
        "  .then(o => process.stdout.write(JSON.stringify(o)))\n"
        "  .catch(e => { process.stderr.write(String(e && e.stack || e)); process.exit(1); });\n"
    )
    proc = subprocess.run(
        ['node', '-e', code, FRONTEND_JS],
        capture_output=True, text=True, timeout=20,
    )
    assert proc.returncode == 0, f'node 执行失败: {proc.stderr}'
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_sp_four_variants_complete():
    """四态齐全：空/加载/错误/离线"""
    out = _run_js("return SP.KEYS;")
    assert sorted(out) == ['empty', 'error', 'loading', 'offline']


@NEEDS_NODE
def test_sp_resolve_defaults():
    """各态默认 title/desc 非空；loading 走骨架屏，error/offline 可重试"""
    out = _run_js("""
        const t = k => SP.resolve(k);
        return {
            empty: t('empty'),
            loading: t('loading'),
            error: t('error'),
            offline: t('offline'),
        };
    """)
    assert out['empty']['title'] == '暂无数据'
    assert out['empty']['retry'] is False
    assert out['loading']['title'] == '加载中'
    assert out['loading']['skeleton'] is True
    assert out['loading']['retry'] is False
    assert out['error']['title'] == '加载失败'
    assert out['error']['retry'] is True
    assert out['error']['skeleton'] is False
    assert out['offline']['title'] == '网络不可用'
    assert out['offline']['retry'] is True
    assert out['offline']['skeleton'] is False


@NEEDS_NODE
def test_sp_resolve_fallback():
    """未知类型回退 empty，保证四态一致不裸奔"""
    out = _run_js("""
        return { u: SP.resolve('weird'), u2: SP.resolve(''), loading: SP.resolve('loading').title };
    """)
    assert out['u']['title'] == '暂无数据'
    assert out['u2']['title'] == '暂无数据'
    assert out['loading'] == '加载中'


@NEEDS_NODE
def test_sp_icons_present():
    """除 loading（骨架屏）外，各态图标非空"""
    out = _run_js("""
        const keys = SP.KEYS;
        const icons = {};
        keys.forEach(k => { icons[k] = SP.resolve(k).icon; });
        return { icons };
    """)
    for k in ('empty', 'error', 'offline'):
        assert out['icons'][k], f'{k} 态缺图标'
    assert out['icons']['loading'] == ''


@NEEDS_NODE
def test_sp_flags_consistency():
    """skeleton 与 retry 互斥语义：loading 是唯一骨架态；仅 error/offline 可重试"""
    out = _run_js("""
        return SP.KEYS.map(k => ({ k, retry: SP.resolve(k).retry, skeleton: SP.resolve(k).skeleton }));
    """)
    for v in out:
        if v['k'] == 'loading':
            assert v['skeleton'] is True and v['retry'] is False
        elif v['k'] in ('error', 'offline'):
            assert v['retry'] is True and v['skeleton'] is False
        else:
            assert v['skeleton'] is False and v['retry'] is False


@NEEDS_NODE
def test_sp_validate_ok():
    """四态元数据自检通过（title/icon/flag 字段齐全）"""
    out = _run_js("return SP.validate();")
    assert out['ok'] is True
    assert out['errors'] == []
