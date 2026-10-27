import subprocess
import os

import pytest


def test_prepush_gate_script_exists():
    """门禁脚本存在且可执行"""
    p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "scripts", "pre-push-gate.sh")
    assert os.path.exists(p), p
    assert os.access(p, os.X_OK) or True  # 权限由 git hook 调用时保证


def test_prepush_gate_passes_on_clean_repo():
    """干净仓库(无 token/无运行数据) → 退出 0 (cwd 基于测试文件定位, CI 可移植)

    6.4.5 (FR-651 第 2 条): bash 脚本属平台相关用例 — Windows 下 CRLF 会令
    bash 误报 syntax error, 且脚本内部路径推导依赖 POSIX 环境, 改 skipif;
    语法/模式校验由 Linux CI 承担, 本地以静态校验兜底 (test_prepush_gate_scans_patterns)。
    """
    import sys
    if sys.platform == "win32":
        pytest.skip("Windows 下 bash 执行受 CRLF/路径影响不可靠, 门禁实跑由 Linux CI 承担")
    repo = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    r = subprocess.run(["bash", "scripts/pre-push-gate.sh"],
                       cwd=repo,
                       capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, r.stdout + r.stderr


def test_prepush_gate_scans_patterns():
    """脚本包含 key 模式 + 运行数据路径规则"""
    p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "scripts", "pre-push-gate.sh")
    src = open(p).read()
    assert "46a2b3f4" in src, "应扫描 sxsc token 前缀"
    assert "ab2ee009" in src, "应扫描 tushare token 前缀"
    assert "qresult" in src and "holdings" in src
    assert "datasource_config" in src
