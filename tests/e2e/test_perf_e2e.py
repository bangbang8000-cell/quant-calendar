# -*- coding: utf-8 -*-
"""
v3.17.9 (FR-3.17.9): 性能对比 e2e 包装 (pytest)

复用 tests/e2e/perf_smoke.py 的可重复测量脚本:
  - 对比基线 (tests/e2e/perf_baseline.json, 由 --store-baseline 生成)
  - 断言: 首屏可交互 ≤ 基线×0.7 (≥30% 提升, 容差 5%) / 脚本字节明显下降 /
          5000 点 K线渲染耗时 ≤2s 且降采样后点数 ≤2100

运行前提: dev server 运行在 :8001 (admin/admin)。
用法:
  python -m pytest tests/e2e/test_perf_e2e.py -m e2e -s
"""
import os
import subprocess
import sys

import pytest

pytestmark = pytest.mark.e2e

BASE = os.path.dirname(os.path.abspath(__file__))
SCRIPT = os.path.join(BASE, "perf_smoke.py")


def test_perf_first_screen_and_kline_thresholds():
    """FR-3.17.9: 首屏 ≥30% 提升 (≤基线×0.7) + 5000 点渲染在阈值内"""
    if not os.path.exists(os.path.join(BASE, "perf_baseline.json")):
        pytest.skip("缺少 perf_baseline.json, 先运行 perf_smoke.py --store-baseline")
    proc = subprocess.run(
        [sys.executable, SCRIPT, "--compare", "--runs", "3"],
        capture_output=True, text=True, timeout=300,
    )
    print("\n" + (proc.stdout or ""))
    if proc.stderr:
        print("[stderr]", proc.stderr[-2000:])
    assert proc.returncode == 0, "性能对比未达标 (见上方输出)"
