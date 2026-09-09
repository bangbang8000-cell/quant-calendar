# -*- coding: utf-8 -*-
"""V6.1 (TEST-PLAN 6.1 TC-6.2.1): 动态页签状态机单元测试 (tabs-core.js UMD, 经 Node 执行断言)"""
import os
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def test_tabs_core_state_machine():
    """页签状态机全量断言: 打开/去重/上限淘汰/关闭邻接激活/默认页签/组空"""
    script = os.path.join(BASE, "tests", "tabs_core.test.js")
    res = subprocess.run(["node", script], capture_output=True, text=True)
    assert res.returncode == 0, "Node 页签断言失败:\n" + res.stdout + res.stderr
    assert "all assertions passed" in res.stdout
