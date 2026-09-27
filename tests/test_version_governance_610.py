# -*- coding: utf-8 -*-
"""
6.1.0 (T-6.1.0.1): 版本治理门禁 — 5 类来源一致性

口径:
  ① backend/main_new.py APP_VERSION (单一来源)
  ② README.md 版本历史首行 (标 **当前开发版本**)
  ③ docs/HANDOVER.md 顶部「当前状态」
  ④ scripts/bump_version.py 存在且 --check 通过 (含最近 tag 校验)

任何一处滞后即红 —— 阻止「三套编号并存」回归 (规划前: APP_VERSION=5.12.2 /
git 提交线 V6.11.4 / README v5.12.2 / HANDOVER v5.20)。
"""
import os
import re
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent

APP_RE = re.compile(r'^APP_VERSION = "([0-9]+\.[0-9]+\.[0-9]+)"')
README_ROW_RE = re.compile(r"^\| \*\*v([0-9]+\.[0-9]+\.[0-9]+)\*\* \| 2026-09 \| \*\*当前开发版本\*\*")
HANDOVER_STATE_RE = re.compile(r"^> 当前状态: \*\*v([0-9]+\.[0-9]+\.[0-9]+)")


def _read_version(path: Path, rx: re.Pattern) -> str | None:
    for line in path.read_text(encoding="utf-8").splitlines():
        m = rx.match(line)
        if m:
            return m.group(1)
    return None


def _app_version() -> str:
    v = _read_version(ROOT / "backend" / "main_new.py", APP_RE)
    assert v, "backend/main_new.py 缺少 APP_VERSION = \"x.y.z\""
    return v


def test_app_version_defined():
    v = _app_version()
    assert re.fullmatch(r"[0-9]+\.[0-9]+\.[0-9]+", v)
    assert v.startswith(("6.1.", "6.2.", "6.3.")), "演进线要求 APP_VERSION 为 6.1.N / 6.2.N / 6.3.N"


def test_readme_first_row_matches_app_version():
    v = _read_version(ROOT / "README.md", README_ROW_RE)
    assert v, "README 版本历史首行缺失 (需含 **当前开发版本** 标记)"
    assert v == _app_version(), f"README 首行 {v} ≠ APP_VERSION {_app_version()}"


def test_handover_state_matches_app_version():
    v = _read_version(ROOT / "docs" / "HANDOVER.md", HANDOVER_STATE_RE)
    assert v, "HANDOVER 顶部「当前状态」缺失"
    assert v == _app_version(), f"HANDOVER 状态 {v} ≠ APP_VERSION {_app_version()}"


def test_bump_script_check_passes():
    script = ROOT / "scripts" / "bump_version.py"
    assert script.exists(), "scripts/bump_version.py 不存在"
    proc = subprocess.run(
        [sys.executable, str(script), "--check"],
        capture_output=True, text=True, timeout=60,
    )
    assert proc.returncode == 0, (
        f"bump_version --check 失败 (rc={proc.returncode})\n"
        f"stdout: {proc.stdout[-1500:]}\nstderr: {proc.stderr[-1500:]}"
    )
