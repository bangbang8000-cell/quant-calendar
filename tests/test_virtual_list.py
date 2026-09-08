"""
虚拟滚动核心逻辑测试 (v3.11 / FR-3.11.3, TC-11.6)

核心逻辑为纯函数模块 frontend/js/virtual-list-core.js（UMD 导出），
测试通过 subprocess 调 node require 该模块并断言 JSON 输出。
覆盖：
- TC-11.6 仅渲染可视区行数；滚动位置与索引映射正确
"""
import json
import os
import shutil
import subprocess

import pytest

FRONTEND_JS = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    'frontend', 'js', 'virtual-list-core.js',
)

NEEDS_NODE = pytest.mark.skipif(shutil.which('node') is None, reason='node 不可用')


def _run_js(script: str):
    """在 node 中 require core 模块并执行脚本，返回 JSON 结果"""
    code = (
        "const VL = require(process.argv[1]);\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(
        ['node', '-e', code, FRONTEND_JS],
        capture_output=True, text=True, timeout=15,
    )
    assert proc.returncode == 0, f'node 执行失败: {proc.stderr}'
    return json.loads(proc.stdout)


# ─── 基础窗口计算 ───────────────────────────────────

@NEEDS_NODE
def test_vl_total_height():
    """总高 = 行数 × 行高；空列表为 0"""
    out = _run_js("""
        return {
            h2000: VL.computeTotalHeight(2000, 78),
            hEmpty: VL.computeTotalHeight(0, 78),
            hNeg: VL.computeTotalHeight(-5, 78),
        };
    """)
    assert out['h2000'] == 2000 * 78
    assert out['hEmpty'] == 0
    assert out['hNeg'] == 0


@NEEDS_NODE
def test_vl_range_top_windows():
    """2000 行、视口 400、行高 40：顶部仅渲染 ~26 行（含上下 8 行缓冲）"""
    out = _run_js("""
        const r = VL.computeVisibleRange(0, 400, 40, 2000, 8);
        return { start: r.startIndex, end: r.endIndex, count: r.endIndex - r.startIndex };
    """)
    # start=0, end=ceil(400/40)+8=18 → 渲染 18 行；含缓冲后 start=0,end=18
    assert out['start'] == 0
    assert out['end'] <= 26
    assert out['count'] <= 26


@NEEDS_NODE
def test_vl_range_middle_scroll():
    """滚动到第 1000 行：窗口包含目标行，且 startIndex 前移了缓冲行数"""
    out = _run_js("""
        const r = VL.computeVisibleRange(1000 * 40, 400, 40, 2000, 8);
        return {
            start: r.startIndex,
            end: r.endIndex,
            includes1000: r.startIndex <= 1000 && 1000 < r.endIndex,
            includes999: r.startIndex <= 999 && 999 < r.endIndex,
        };
    """)
    assert out['start'] == 1000 - 8          # 缓冲 8 行
    assert out['includes1000'] is True
    assert out['includes999'] is True


@NEEDS_NODE
def test_vl_range_bottom_clamps():
    """滚动到底：endIndex 收敛到 total，包含最后一行"""
    out = _run_js("""
        const r = VL.computeVisibleRange(2000 * 40, 400, 40, 2000, 8);
        return { start: r.startIndex, end: r.endIndex, endClamped: r.endIndex === 2000, includes1999: r.startIndex <= 1999 && 1999 < r.endIndex };
    """)
    assert out['end'] == 2000
    assert out['endClamped'] is True
    assert out['includes1999'] is True


@NEEDS_NODE
def test_vl_range_empty_and_small():
    """空列表 0 行；小列表（30 行）顶部仍只渲染可视区窗口（含缓冲）"""
    out = _run_js("""
        const e = VL.computeVisibleRange(0, 400, 78, 0, 8);
        const s = VL.computeVisibleRange(0, 400, 78, 30, 8);
        return { eStart: e.startIndex, eEnd: e.endIndex, sStart: s.startIndex, sEnd: s.endIndex, sCount: s.endIndex - s.startIndex };
    """)
    assert out['eStart'] == 0 and out['eEnd'] == 0
    assert out['sStart'] == 0
    assert 0 < out['sEnd'] < 30          # 视口 400/78≈6 行 + 8 缓冲 → 14 行，不渲染全部
    assert out['sCount'] <= 26


@NEEDS_NODE
def test_vl_range_rowheight_zero_safe():
    """行高非法（0）时兜底不崩溃（内部按 1 计算）"""
    out = _run_js("""
        const r = VL.computeVisibleRange(100, 400, 0, 100, 8);
        return { start: r.startIndex, end: r.endIndex, totalH: VL.computeTotalHeight(100, 0) };
    """)
    assert out['totalH'] == 0
    assert out['start'] >= 0 and out['end'] >= out['start']


# ─── sliceVisible 切片 ─────────────────────────────

@NEEDS_NODE
def test_vl_slice_visible_middle():
    """sliceVisible 返回可见切片 + 窗口 + offsetY，映射正确"""
    out = _run_js("""
        const items = [];
        for (let i = 0; i < 2000; i++) items.push({ code: 'S' + i });
        const s = VL.sliceVisible(items, 1000 * 40, 400, 40, 8);
        return {
            count: s.visible.length,
            first: s.visible[0].code,
            last: s.visible[s.visible.length - 1].code,
            startIndex: s.startIndex,
            offsetY: s.offsetY,
            totalHeight: s.totalHeight,
            hasMid: s.visible.some(x => x.code === 'S1000'),
        };
    """)
    assert out['count'] <= 26
    assert out['first'] == 'S992'            # 1000-8
    assert out['last'] == 'S1017'            # 1010+8-1
    assert out['startIndex'] == 992
    assert out['offsetY'] == 992 * 40
    assert out['totalHeight'] == 2000 * 40
    assert out['hasMid'] is True


@NEEDS_NODE
def test_vl_slice_empty():
    """空数组切片返回空 visible、totalHeight 0"""
    out = _run_js("""
        const s = VL.sliceVisible([], 0, 400, 40, 8);
        return { visibleLen: s.visible.length, totalHeight: s.totalHeight, startIndex: s.startIndex };
    """)
    assert out['visibleLen'] == 0
    assert out['totalHeight'] == 0
    assert out['startIndex'] == 0


# ─── key 生成 ──────────────────────────────────────

@NEEDS_NODE
def test_vl_key_priority():
    """key 优先 code → id → ts_code → 索引兜底"""
    out = _run_js("""
        return {
            code: VL.getRowKey({ code: 'A', id: 1 }, 0),
            id: VL.getRowKey({ id: 2, ts_code: 'B' }, 0),
            ts: VL.getRowKey({ ts_code: 'C' }, 0),
            idx: VL.getRowKey(null, 42),
            idx2: VL.getRowKey({ name: 'x' }, 7),
        };
    """)
    assert out == {'code': 'A', 'id': 2, 'ts': 'C', 'idx': 42, 'idx2': 7}
