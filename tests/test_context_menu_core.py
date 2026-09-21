# -*- coding: utf-8 -*-
"""6.1.4 (D4): 右键菜单核心测试 (context-menu-core.js, node)"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "context-menu-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = ("const QCM = require(process.argv[1]);\n"
            "const out = (function(){" + script + "})();\n"
            "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_position_inside_viewport_unchanged():
    out = _run_js("return QCM.positionMenu(100, 100, 180, 160, 1280, 800);")
    assert out == {"left": 100, "top": 100}


@NEEDS_NODE
def test_position_flips_right_edge():
    out = _run_js("return QCM.positionMenu(1200, 100, 180, 160, 1280, 800);")
    assert out["left"] <= 1280 - 180 - 8


@NEEDS_NODE
def test_position_flips_bottom_edge():
    out = _run_js("return QCM.positionMenu(100, 780, 180, 160, 1280, 800);")
    assert out["top"] <= 800 - 160 - 8


@NEEDS_NODE
def test_position_clamps_when_menu_larger_than_viewport():
    out = _run_js("return QCM.positionMenu(0, 0, 500, 400, 300, 200);")
    assert out["left"] >= 8 and out["top"] >= 8


@NEEDS_NODE
def test_actions_have_five_defaults():
    out = _run_js("return QCM.getActions().map(a => a.key);")
    assert out == ["detail", "add-watch", "copy", "export", "delete"]


@NEEDS_NODE
def test_is_long_press_threshold():
    out = _run_js("return [QCM.isLongPress(1000, 1600, 500), QCM.isLongPress(1000, 1200, 500)];")
    assert out == [True, False]
