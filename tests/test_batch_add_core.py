# -*- coding: utf-8 -*-
"""6.1.4 (D3): 批量加入自选工具测试 (batch-add-core.js, node)"""
import json
import os
import shutil
import subprocess

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND_JS = os.path.join(BASE, "frontend", "js", "batch-add-core.js")

NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _run_js(script):
    code = ("const BA = require(process.argv[1]);\n"
            "const out = (function(){" + script + "})();\n"
            "process.stdout.write(JSON.stringify(out));\n")
    proc = subprocess.run(["node", "-e", code, FRONTEND_JS],
                          capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


@NEEDS_NODE
def test_build_text_from_objects():
    out = _run_js("return BA.buildImportText([{code:'600036',name:'招商银行'},{code:'000001'}]);")
    assert out == "600036 招商银行\n000001"


@NEEDS_NODE
def test_build_text_from_strings_and_skips_empty():
    out = _run_js("return BA.buildImportText(['600036', null, '', '000001']);")
    assert out == "600036\n000001"


@NEEDS_NODE
def test_summarize_success():
    out = _run_js("return BA.summarize({success:true,added:2,existed:1,invalid:1,total:4});")
    assert out["added"] == 2 and out["existed"] == 1 and out["invalid"] == 1
    assert "已加入 2 只" in out["message"] and "1 只已存在" in out["message"] and "1 行无效" in out["message"]


@NEEDS_NODE
def test_summarize_failure():
    out = _run_js("return BA.summarize({success:false});")
    assert out["failed"] == 0 and "失败" in out["message"]


@NEEDS_NODE
def test_summarize_null():
    out = _run_js("return BA.summarize(null);")
    assert out["message"] == "批量加入失败"
