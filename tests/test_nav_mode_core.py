# -*- coding: utf-8 -*-
"""V6.3 (TEST-PLAN 6.3 TC-6.3.1.x): 导航形态/页签开关状态机单元测试 (nav-mode-core.js UMD, 经 Node 执行断言)"""
import os
import subprocess

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def test_nav_mode_core_state_machine():
    """导航形态状态机全量断言: 归一化/真值表/形态谓词/偏好读写"""
    script = os.path.join(BASE, "tests", "nav_mode_core.test.js")
    res = subprocess.run(["node", script], capture_output=True, text=True)
    assert res.returncode == 0, "Node 导航形态断言失败:\n" + res.stdout + res.stderr
    assert "all assertions passed" in res.stdout


def test_nav_mode_core_registered_to_quant_modules():
    """浏览器环境: nav-mode-core 必须挂载到 __quantModules.navModeCore (app-logic 经此调用)"""
    p = os.path.join(BASE, "frontend", "js", "nav-mode-core.js")
    with open(p, encoding="utf-8") as f:
        src = f.read()
    assert "__quantModules.navModeCore" in src, "nav-mode-core.js 应注册到 __quantModules.navModeCore"
    assert "window.QuantNavModeCore" in src, "UMD 应保留 window.QuantNavModeCore 导出"
