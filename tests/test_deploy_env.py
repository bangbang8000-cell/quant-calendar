# -*- coding: utf-8 -*-
"""v6.4 FR-6.4.7: 依赖环境一致性门禁。

背景
----
`requirements.lock` 早已声明 `websockets` / `wsproto`，但 ops 环境的安装流程
只按 `requirements.in` 装（或完全不装），于是这两个包缺失、uvicorn 静默降级，
全站 `/api/market/ws/quotes` 返回 404 —— 而 `/api/health`、启动自检、验收脚本全绿。
更隐蔽的是 `verify_chain.sh` 用 `PYTHONPATH=/home/evergreen/qc_ws_pkgs` 从外部注入
websockets，把"生产缺依赖"掩盖成了"链上通过"。

本用例把"装了什么"变成可断言的：故意 `pip uninstall websockets` 后必须失败。
"""
import os
import sys

import pytest

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
LOCK_PATH = os.path.join(ROOT, 'requirements.lock')

# 与 backend/reliability/checks.py 的关键包列表保持一致
CRITICAL_PACKAGES = ('websockets', 'wsproto', 'uvicorn', 'fastapi', 'pydantic')


def _parse_lock(path):
    """解析 `name==version` 行；返回 {归一化包名: 版本}。

    v6.4 (FR-6.4.7) 修正: 不再在本文件里手写解析，直接复用
    `backend/reliability/checks.py::_read_lock_versions`。
    本文件原先的裸 partition('==') 实现与启动自检踩同一个坑 —— 把 ';' 之后
    整段 PEP 508 标记当成版本串，同名多行后行覆盖前行。解析口径必须只有一处。
    """
    if not os.path.exists(path):
        pytest.fail(f'requirements.lock 不存在: {path}')
    sys.path.insert(0, os.path.join(ROOT, 'backend'))
    from reliability.checks import _read_lock_versions
    parsed = _read_lock_versions(path)
    if not parsed:
        pytest.fail(f'requirements.lock 无法解析: {path}')
    return parsed


LOCKED = _parse_lock(LOCK_PATH)


def _installed_version(pkg):
    from importlib.metadata import version, PackageNotFoundError
    try:
        return version(pkg)
    except PackageNotFoundError:
        return None


# 说明：本文件校验的是「当前解释器已装依赖与 lock 是否一致」，因此必须在
# 项目 .venv（或 CI 里装了 requirements.lock 的 runner 解释器）内运行：
#     .venv\Scripts\python.exe -m pytest tests/ -m "not e2e"
# 刻意不加「缺包就跳过」的兜底 —— 本文件要拦的正是「有人把 websockets 卸掉」，
# 一旦按缺包跳过，最该报红的场景反而变绿，护栏就形同虚设。
# CI 侧以 `uv pip install --system -r requirements.lock` 装进 runner，故同样生效。


@pytest.mark.parametrize('pkg', CRITICAL_PACKAGES)
def test_critical_package_matches_lock(pkg):
    """关键包已安装，且版本与 lock 完全一致（含补丁号）。"""
    want = LOCKED.get(pkg)
    assert want, f'{pkg} 未在 requirements.lock 中声明'
    got = _installed_version(pkg)
    assert got is not None, (
        f'{pkg} 未安装（期望 {want}）；'
        f'修复: {sys.executable} -m pip install -r requirements.lock'
    )
    assert got == want, f'{pkg} 版本漂移: 已装 {got} != 锁定 {want}'


def test_ws_packages_importable():
    """WS 依赖必须能真实导入 —— 仅装到 site-packages 但导入失败同样算不可用。"""
    import importlib
    for mod in ('websockets', 'wsproto'):
        m = importlib.import_module(mod)
        assert getattr(m, '__version__', None), f'{mod} 导入成功但无 __version__'


def test_ws_route_registered():
    """WS 端点已注册到 v1 路由表（依赖缺失或路由未挂载都不允许）。"""
    sys.path.insert(0, os.path.join(ROOT, 'backend'))
    from reliability.checks import _ws_route_registered
    assert _ws_route_registered() is True, '/api/market/ws/quotes 未注册到路由表'


def test_selfcheck_reports_ws_ok():
    """启动自检中的 ws_dependency 项必须为 ok，而不是 warn/fail。"""
    sys.path.insert(0, os.path.join(ROOT, 'backend'))
    from reliability.checks import _check_ws_dependency
    entry = _check_ws_dependency()
    assert entry['status'] == 'ok', f"ws_dependency={entry['status']}: {entry['detail']}"



# ───────────────────────── PEP 508 环境标记回归 ─────────────────────────
# 2026-10-19 实测事故: 修好 checks.py 的标记求值前，自检报
#   "版本漂移 5: colorama 0.4.6!=0.4.6 ; sys_platform == 'win32' ..."
#   "缺失 2: akracer, py-mini-racer"
# —— 即「一切正常却报一片红」，比漏报更糟：真正的漂移会被噪音淹没。

def _write_lock(tmp_path, body):
    p = tmp_path / 'requirements.lock'
    p.write_text(body, encoding='utf-8')
    return str(p)


@pytest.fixture()
def read_lock():
    sys.path.insert(0, os.path.join(ROOT, 'backend'))
    from reliability.checks import _read_lock_versions
    return _read_lock_versions


def test_marker_is_not_part_of_version(tmp_path, read_lock):
    """成立的环境标记不得污染版本串（曾把整段 `; sys_platform == 'win32'` 当版本）。"""
    lock = _write_lock(tmp_path, "colorama==0.4.6 ; sys_platform == 'win32'\n")
    got = read_lock(lock)
    assert got == {'colorama': '0.4.6'}, f'版本串被标记污染: {got}'


def test_non_applicable_marker_is_skipped(tmp_path, read_lock):
    """标记不成立的条目应整体跳过 —— 否则 linux-only 包在 Windows 上被判「缺失」。"""
    lock = _write_lock(
        tmp_path,
        "akracer==0.0.14 ; sys_platform == 'linux'\n"
        "requests==2.32.3\n",
    )
    got = read_lock(lock)
    assert 'akracer' not in got, 'linux-only 包不应进入当前环境的结果集'
    assert got.get('requests') == '2.32.3'


def test_duplicate_name_keeps_applicable_version(tmp_path, read_lock):
    """同名多行（按 python_full_version 分叉）必须取「当前环境成立」的那条，而不是最后一条。"""
    lock = _write_lock(
        tmp_path,
        "numpy==2.4.6 ; python_full_version < '3.12'\n"
        "numpy==2.5.3 ; python_full_version >= '3.12'\n",
    )
    got = read_lock(lock)
    want = '2.4.6' if sys.version_info < (3, 12) else '2.5.3'
    assert got.get('numpy') == want, f'numpy 取错分支: {got.get("numpy")} (期望 {want})'


def test_real_lock_versions_are_clean():
    """真实 lock 解析后，任何版本值都不得含空白或 ';'。"""
    bad = {k: v for k, v in LOCKED.items() if any(c in v for c in (' ', ';', '#'))}
    assert not bad, f'解析出的版本串不干净: {bad}'


def test_real_lock_skips_foreign_platform_packages():
    """当前平台不该出现的包不得进入结果集（本仓 lock 在用 linux/win32 双向标记）。"""
    import platform
    if platform.system() == 'Windows':
        assert 'akracer' not in LOCKED and 'py-mini-racer' not in LOCKED
    else:
        assert 'colorama' not in LOCKED


def test_upgrade_ps1_reuses_single_parser():
    """升级脚本不得自己再写一份 lock 解析：口径分叉会让部署与自检互相打架。

    断言它 import 了 checks._read_lock_versions，且没有留下旧的正则版解析。
    """
    ps1 = os.path.join(ROOT, 'scripts', 'upgrade.ps1')
    assert os.path.exists(ps1), f'找不到 {ps1}'
    with open(ps1, 'r', encoding='utf-8-sig') as f:
        src = f.read()
    assert '_read_lock_versions' in src, 'upgrade.ps1 未复用 checks._read_lock_versions'
    assert 'Get-Content -Path $lockFile' not in src, (
        'upgrade.ps1 仍在用 PowerShell 正则自行解析 requirements.lock'
    )

