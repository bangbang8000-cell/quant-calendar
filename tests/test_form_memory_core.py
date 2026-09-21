# -*- coding: utf-8 -*-
"""6.1.1 (A4): 表单参数记忆测试 (form-memory-core.js, node + localStorage shim)

覆盖: 保存/读取/缺失返回 null/版本隔离/用户隔离/clear。
"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "form-memory-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = (
        "const store = {};\n"
        "global.localStorage = {\n"
        "  getItem: k => (k in store ? store[k] : null),\n"
        "  setItem: (k, v) => { store[k] = String(v); },\n"
        "  removeItem: k => { delete store[k]; },\n"
        "};\n"
        "const FM = require(process.argv[1]);\n"
        "const out = (function(){" + script + "})();\n"
        "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_save_then_load_roundtrip():
    out = _run_js(
        "FM.saveForm('f1', {a: 1, b: 'x'}, 'alice', 1);"
        "return FM.loadForm('f1', 'alice', 1);")
    assert out == {"a": 1, "b": "x"}


@NEEDS_NODE
def test_load_missing_returns_null():
    out = _run_js("return FM.loadForm('nope', 'alice', 1);")
    assert out is None


@NEEDS_NODE
def test_version_isolation():
    out = _run_js(
        "FM.saveForm('f2', {v: 1}, 'alice', 1);"
        "FM.saveForm('f2', {v: 2}, 'alice', 2);"
        "return [FM.loadForm('f2', 'alice', 1), FM.loadForm('f2', 'alice', 2)];")
    assert out == [{"v": 1}, {"v": 2}]


@NEEDS_NODE
def test_user_isolation():
    out = _run_js(
        "FM.saveForm('f3', {who: 'alice'}, 'alice', 1);"
        "return FM.loadForm('f3', 'bob', 1);")
    assert out is None


@NEEDS_NODE
def test_clear_removes():
    out = _run_js(
        "FM.saveForm('f4', {x: 1}, 'alice', 1);"
        "FM.clearForm('f4', 'alice', 1);"
        "return FM.loadForm('f4', 'alice', 1);")
    assert out is None
