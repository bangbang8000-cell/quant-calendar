# -*- coding: utf-8 -*-
"""6.1.1 (A3): 可撤销操作注册栈测试 (undo-core.js, node 跑 UMD)

覆盖: 注册/执行撤销/重复撤销拒绝/超时自动移除/activeCount。
"""
import json
import os
import shutil
import subprocess
import time

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "undo-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = ("const UC = require(process.argv[1]);\n"
            "(async () => {\n"
            "  const out = await (async function(){\n" + script + "\n  })();\n"
            "  process.stdout.write(JSON.stringify(out));\n"
            "})();\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_create_stack_exposes_api():
    out = _run_js("const s = UC.createUndoStack(); return ['register','undo','remove','activeCount'].map(k => typeof s[k]);")
    assert out == ["function", "function", "function", "function"]


@NEEDS_NODE
def test_register_returns_id_and_counts():
    out = _run_js(
        "const s = UC.createUndoStack();"
        "let called = 0;"
        "const id = s.register(function(){ called = 1; }, 'label', 0);"
        "return [typeof id, s.activeCount()];")
    assert out[0] == "string" and out[0]
    assert out[1] == 1


@NEEDS_NODE
def test_undo_executes_and_removes():
    out = _run_js(
        "const s = UC.createUndoStack();"
        "let called = 0;"
        "const id = s.register(function(){ called = 1; }, 'label', 0);"
        "const ok1 = s.undo(id);"
        "const ok2 = s.undo(id);"
        "return [called, ok1, ok2, s.activeCount()];")
    assert out == [1, True, False, 0]


@NEEDS_NODE
def test_timeout_auto_removes():
    out = _run_js(
        "const s = UC.createUndoStack();"
        "const id = s.register(function(){}, 'label', 30);"
        "await new Promise(r => setTimeout(r, 80));"
        "return s.activeCount();")
    assert out == 0


@NEEDS_NODE
def test_undo_after_timeout_fails():
    out = _run_js(
        "const s = UC.createUndoStack();"
        "let called = 0;"
        "const id = s.register(function(){ called = 1; }, 'label', 30);"
        "await new Promise(r => setTimeout(r, 80));"
        "return s.undo(id);")
    assert out is False
