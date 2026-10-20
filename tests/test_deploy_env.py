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


def _lock_provisionable() -> bool:
    """当前解释器能否按 requirements.lock 供给依赖（site-packages 可写）。

    只读部署（如本机 dev/ops：根文件系统 ro，~/.local 不可写，WS 依赖经
    qc_ws_pkgs 覆盖注入）无法 pip install lock 版本 —— 版本漂移是既成事实，
    运行时自检（reliability/checks.py::_check_dep_lock）对漂移也只给 warn。
    此时仍须守住「关键包存在且可导入」的硬门禁，但不强求补丁号一致；
    CI runner / Windows 生产（site-packages 可写，upgrade.ps1 装 lock）则维持
    严格校验。判定口径与 checks.py 的 warn 严重级一致，避免护栏比运行时更严。
    """
    import sysconfig
    for path in (sysconfig.get_paths().get('purelib'), sysconfig.get_paths().get('platlib')):
        if path and os.path.isdir(path) and os.access(path, os.W_OK):
            return True
    return False


@pytest.mark.parametrize('pkg', CRITICAL_PACKAGES)
def test_critical_package_matches_lock(pkg):
    """关键包已安装且可导入（缺失必红）；lock 可供给的环境须版本一致（含补丁号）。

    本用例要拦的原始事故是「websockets 被卸掉 → uvicorn 静默降级 → WS 404」，
    因此「存在且可导入」是硬门禁，任何环境都不得跳过。
    版本一致性只在 lock 可供给的环境（CI / Windows 生产 / 项目 .venv）强制；
    只读部署无法装 lock 版本，漂移属已文档化的既成事实（运行时自检同样只 warn）。
    """
    want = LOCKED.get(pkg)
    assert want, f'{pkg} 未在 requirements.lock 中声明'
    got = _installed_version(pkg)
    assert got is not None, (
        f'{pkg} 未安装（期望 {want}）；'
        f'修复: {sys.executable} -m pip install -r requirements.lock'
    )
    if _lock_provisionable():
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
    """成立的环境标记不得污染版本串（曾把整段 `; sys_platform == 'win32'` 当版本）。

    标记用恒成立表达式（python_version >= '3.0'），保证在所有平台上都进入
    「标记成立 → 版本串必须干净」的分支；原先用 sys_platform == 'win32'，
    只在 Windows 上成立，Linux 上整行被跳过导致用例误红。
    """
    lock = _write_lock(tmp_path, "colorama==0.4.6 ; python_version >= '3.0'\n")
    got = read_lock(lock)
    assert got == {'colorama': '0.4.6'}, f'版本串被标记污染: {got}'


def test_non_applicable_marker_is_skipped(tmp_path, read_lock):
    """标记不成立的条目应整体跳过 —— 否则 linux-only 包在 Windows 上被判「缺失」。

    标记用恒不成立表达式（python_version < '3.0'），保证在所有平台上都进入
    「标记不成立 → 跳过」分支；原先用 sys_platform == 'linux'，只在 Windows 上
    不成立，Linux 上 akracer 被正确收入结果集导致用例误红。
    """
    lock = _write_lock(
        tmp_path,
        "akracer==0.0.14 ; python_version < '3.0'\n"
        "requests==2.32.3\n",
    )
    got = read_lock(lock)
    assert 'akracer' not in got, '标记不成立的包不应进入当前环境的结果集'
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

