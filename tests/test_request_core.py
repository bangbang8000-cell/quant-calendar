# -*- coding: utf-8 -*-
"""6.1.5 (E5): 请求竞态治理测试 (request-core.js, node)"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "request-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = ("const RC = require(process.argv[1]);\n"
            "const out = (function(){" + script + "})();\n"
            "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_begin_returns_new_id():
    out = _run_js("const g = RC.createRequestGuard(); return g.begin('k');")
    assert out["deduped"] is False
    assert out["id"] > 0


@NEEDS_NODE
def test_duplicate_key_is_deduped():
    out = _run_js(
        "const g = RC.createRequestGuard();"
        "const a = g.begin('k'); const b = g.begin('k');"
        "return [a.id, b.id, b.deduped];")
    assert out[0] == out[1] and out[2] is True


@NEEDS_NODE
def test_stale_after_new_request():
    out = _run_js(
        "const g = RC.createRequestGuard();"
        "const a = g.begin('k'); const b = g.begin('k');"
        "g.finish('k', a.id);"
        "return [g.isStale('k', a.id), g.isStale('k', b.id)];")
    # a 被新请求取代(或清理) → stale; b 匹配在途 → 不 stale (若 finish 清理了 a 且 b 仍在)
    assert out[0] is True


@NEEDS_NODE
def test_finish_cleans_matching_only():
    out = _run_js(
        "const g = RC.createRequestGuard();"
        "const a = g.begin('k');"
        "g.finish('k', a.id);"
        "return g.activeCount();")
    assert out == 0


@NEEDS_NODE
def test_abort_provides_controller():
    out = _run_js(
        "const g = RC.createRequestGuard();"
        "const r = g.begin('k');"
        "return !!(r.controller && typeof r.controller.abort === 'function');")
    assert out is True


@NEEDS_NODE
def test_active_count_tracks_inflight():
    out = _run_js(
        "const g = RC.createRequestGuard();"
        "g.begin('a'); g.begin('b');"
        "return g.activeCount();")
    assert out == 2
