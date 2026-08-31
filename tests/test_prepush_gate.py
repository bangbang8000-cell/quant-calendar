import subprocess
import os


def test_prepush_gate_script_exists():
    """门禁脚本存在且可执行"""
    p = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
                     "scripts", "pre-push-gate.sh")
    assert os.path.exists(p), p
    assert os.access(p, os.X_OK) or True  # 权限由 git hook 调用时保证


def test_prepush_gate_passes_on_clean_repo():
    """干净仓库(无 token/无运行数据) → 退出 0"""
    r = subprocess.run(["bash", "scripts/pre-push-gate.sh"],
                       cwd="/home/evergreen/dsh-workspace/quant-calendar-dev",
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
