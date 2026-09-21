# -*- coding: utf-8 -*-
"""6.1.4 (D5): 会话恢复测试 (session-restore-core.js, node + sessionStorage shim)"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "session-restore-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = (
        "const store = {};\n"
        "global.sessionStorage = {\n"
        "  getItem: k => (k in store ? store[k] : null),\n"
        "  setItem: (k, v) => { store[k] = String(v); },\n"
        "  removeItem: k => { delete store[k]; },\n"
        "};\n"
        "const SR = require(process.argv[1]);\n"
        "const out = (function(){" + script + "})();\n"
        "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_save_then_restore_roundtrip():
    out = _run_js(
        "SR.save({page: 'ai', sub: 'watchlist'});"
        "return SR.restore();")
    assert out == {"page": "ai", "sub": "watchlist"}


@NEEDS_NODE
def test_restore_empty_returns_null():
    out = _run_js("return SR.restore();")
    assert out is None


@NEEDS_NODE
def test_clear_removes():
    out = _run_js(
        "SR.save({page: 'calendar'});"
        "SR.clear();"
        "return SR.restore();")
    assert out is None


@NEEDS_NODE
def test_corrupt_json_returns_null():
    out = _run_js(
        "global.sessionStorage.setItem(SR.KEY, '{bad json');"
        "return SR.restore();")
    assert out is None


@NEEDS_NODE
def test_key_is_scoped():
    out = _run_js("return SR.KEY;")
    assert out == "qc_session_restore"
