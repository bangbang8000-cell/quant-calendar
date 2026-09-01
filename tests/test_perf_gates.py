# -*- coding: utf-8 -*-
"""V5.7 (T-5.7.5): 前端虚拟滚动 + 性能门禁 (TEST-PLAN 8.1 test_perf_gates.py)

- 虚拟滚动纯计算 (node 跑 virtual-list-core.js): 窗口正确性/边界/渲染比例门禁
- 性能基准: 10 万行 sliceVisible 只渲染窗口内行且耗时 < 阈值 (阻塞门禁)
- CI 增量: ci.yml 含 jobs/cache/downsample 覆盖率门禁 (阻塞, 无 continue-on-error)
既有 tests/test_performance.py 为 v3.17.9 图表降采样回归, 本文件专注 V5.7 虚拟滚动+CI 门禁。
"""
import json
import os
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "virtual-list-core.js")

NEEDS_NODE = pytest.mark.skipif(subprocess.run(["node", "--version"], capture_output=True).returncode != 0,
                                reason="需要 node")


def _run_js(code):
    src = "const V = require(" + repr(FRONTEND_JS) + ");\n" + code + "\nconsole.log(JSON.stringify(out));"
    r = subprocess.run(["node", "-e", src], capture_output=True, text=True, timeout=60)
    assert r.returncode == 0, "node 失败: " + r.stderr
    return json.loads(r.stdout.strip().split("\n")[-1])


# ─── 窗口正确性 ─────────────────────────────────────────────

@NEEDS_NODE
def test_visible_range_basic():
    out = _run_js("out = V.computeVisibleRange(0, 600, 30, 1000, 8);")
    assert out["startIndex"] == 0
    assert 20 <= out["endIndex"] <= 30


@NEEDS_NODE
def test_visible_range_mid_scroll():
    out = _run_js("out = V.computeVisibleRange(3000, 600, 30, 1000, 8);")
    assert out["startIndex"] == 92
    assert out["endIndex"] == 128


@NEEDS_NODE
def test_visible_range_bounds():
    out = _run_js("out = { neg: V.computeVisibleRange(-5, 600, 30, 1000), empty: V.computeVisibleRange(0, 600, 30, 0), big: V.computeVisibleRange(99999, 600, 30, 1000) };")
    assert out["neg"]["startIndex"] == 0
    assert out["empty"]["endIndex"] == 0
    assert out["big"]["endIndex"] <= 1000


@NEEDS_NODE
def test_slice_visible():
    out = _run_js("""
        const items = [];
        for (let i = 0; i < 1000; i++) items.push({ id: i });
        const s = V.sliceVisible(items, 3000, 600, 30, 8);
        out = { len: s.visible.length, first: s.visible[0].id, last: s.visible[s.visible.length - 1].id,
                offsetY: s.offsetY, totalHeight: s.totalHeight };
    """)
    assert out["len"] == 36
    assert out["first"] == 92 and out["last"] == 127
    assert out["offsetY"] == 2760
    assert out["totalHeight"] == 30000


@NEEDS_NODE
def test_total_height():
    out = _run_js("out = { a: V.computeTotalHeight(100, 30), b: V.computeTotalHeight(0, 30), c: V.computeTotalHeight(10, 0) };")
    assert out == {"a": 3000, "b": 0, "c": 0}


@NEEDS_NODE
def test_get_row_key_priority():
    out = _run_js("out = { code: V.getRowKey({code:'600000.SH', id:'x'}, 1), id: V.getRowKey({id:'y'}, 2), ts: V.getRowKey({ts_code:'000001.SZ'}, 3), idx: V.getRowKey(null, 7) };")
    assert out == {"code": "600000.SH", "id": "y", "ts": "000001.SZ", "idx": 7}


# ─── V5.7 增强 ──────────────────────────────────────────────

@NEEDS_NODE
def test_estimate_dynamic_height():
    out = _run_js("out = V.estimateDynamicRowHeight([{rowHeight:20},{rowHeight:40}], 30, 50);")
    assert out == 30


@NEEDS_NODE
def test_estimate_dynamic_height_fallback():
    out = _run_js("out = { noH: V.estimateDynamicRowHeight([{},{}], 40, 50), empty: V.estimateDynamicRowHeight([], 25, 50) };")
    assert out == {"noH": 40, "empty": 25}


@NEEDS_NODE
def test_rendered_ratio_small():
    out = _run_js("out = V.renderedRatio(0, 600, 30, 100, 8);")
    assert out <= 0.5


# ─── 性能基准门禁 (10 万行) ─────────────────────────────────

@NEEDS_NODE
def test_100k_rows_rendered_ratio_gate():
    """10 万行只渲染窗口内行: 渲染比例 < 1% (阻塞门禁)"""
    out = _run_js("out = V.renderedRatio(0, 600, 30, 100000, 8);")
    assert out < 0.01, f"渲染比例超标: {out}"


@NEEDS_NODE
def test_100k_rows_slice_latency():
    """10 万行 sliceVisible 耗时 < 20ms (性能基准, 阻塞)"""
    out = _run_js("""
        const items = [];
        for (let i = 0; i < 100000; i++) items.push({ id: i });
        const t0 = process.hrtime.bigint();
        for (let k = 0; k < 50; k++) V.sliceVisible(items, k * 100, 600, 30, 8);
        out = { ms: Number(process.hrtime.bigint() - t0) / 1e6 };
    """)
    assert out["ms"] < 20, f"sliceVisible 50 次耗时 {out['ms']:.2f}ms"


# ─── CI 覆盖率门禁 (增量) ───────────────────────────────────

def test_ci_has_jobs_cache_coverage_gate():
    """ci.yml 含 jobs/cache/downsample 覆盖率门禁 (阻塞, 无 continue-on-error)"""
    ci = open(os.path.join(BASE, ".github", "workflows", "ci.yml"), encoding="utf-8").read()
    assert "--cov=jobs" in ci and "--cov=cache" in ci and "--cov=downsample" in ci
    assert "--cov-fail-under=70" in ci
