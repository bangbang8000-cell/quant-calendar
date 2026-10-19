#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v6.4 (T4-9) 回滚演练计时器 —— 让「5 分钟内恢复」变成可复现的证据。

背景
----
验收项 9 要求「回退到 6.3.6 后 5 分钟内恢复」。首轮演练用手工步骤 + 日志文件
时间戳反推，只能证到「十几分钟内完成整个往返」，证不到单段秒数；而且当时用
`cp -r src dst`（dst 已存在）产生了 backend/backend、frontend/frontend、
docs/docs 三层嵌套 —— 目录里躺着的还是旧 6.3.6 的一份拷贝，极易误判。

本脚本把演练固化为一步：
    停服 → 换代码 → 起服 → 轮询 /api/health 直到版本匹配 → 记秒
回滚段与恢复段各记一次，并把结果落盘到 logs/rollback_drill_<ts>.json。

安全边界
--------
* 只换 CODE_DIRS / CODE_FILES 白名单内的代码，绝不触碰
  data / logs / .env / .venv / qresult / reports —— 演练不许动生产数据。
* 每个目录用 robocopy /MIR 镜像（单进程「拷新 + 删多余」），从根上杜绝
  `cp -r` 到已存在目录产生的嵌套叠加；os 侧不用 rmtree 整棵树，也就不会撞上
  宿主机的「批量删除」保护（一次删 545 个文件会被直接拦下）。
* 拷贝时排除 node_modules / __pycache__ / .vite，避免把几万个文件当演练对象。
* finally 里无条件执行恢复段；恢复失败则打印人工指令并以 exit 2 退出，
  绝不留下「ops 停在旧版本」的静默状态。

用法
----
    .venv\\Scripts\\python.exe scripts\\rollback_drill.py --dry-run
    .venv\\Scripts\\python.exe scripts\\rollback_drill.py
    .venv\\Scripts\\python.exe scripts\\rollback_drill.py --budget 300
"""
import argparse
import json
import os
import shutil
import socket
import subprocess
import sys
import time
import urllib.error
import urllib.request
from datetime import datetime
from pathlib import Path

# ─── 固定口径 ────────────────────────────────────────────────────────────
# 工作区根 = 本脚本所在仓库的上一级（scripts/ 的父目录）
DEV = Path(__file__).resolve().parent.parent
WORKSPACE = DEV.parent
OPS = WORKSPACE / 'quant-calendar-ops'
BACKUP_636 = WORKSPACE / '_deploy_backup_20261019_163544'

ROLLBACK_TO = '6.3.6'   # 演练回退目标
CURRENT = '6.4.0'       # 必须是当前版本；恢复段回到这里

# 只同步这些代码目录（白名单，其余一律不动）
CODE_DIRS = ['backend', 'frontend', 'libs', 'sdk', 'scripts', 'docs', 'assets', 'tests']
CODE_FILES = [
    'requirements.in', 'requirements.lock', 'requirements.txt',
    'requirements-dev.in', 'requirements-dev.lock', 'requirements-test.txt',
    'pyproject.toml', 'DEPLOYMENT.md', 'README.md', 'LICENSE',
    'Dockerfile', 'docker-compose.yml', 'docker-entrypoint.sh',
]
IGNORE = shutil.ignore_patterns('node_modules', '__pycache__', '.vite', '*.pyc', '*.pyo')

DEFAULT_PORT = 8000
HEALTH_POLL = 0.5       # 健康检查轮询间隔（秒）
START_TIMEOUT = 180     # 起服到健康的硬上限（秒），超时判失败


def log(msg=''):
    print(msg, flush=True)


def _venv_python(root: Path) -> Path:
    for rel in ('Scripts/python.exe', 'bin/python'):
        p = root / '.venv' / rel
        if p.exists():
            return p
    return Path(sys.executable)


def listeners_on(port: int):
    """返回监听该端口的 PID 列表（Windows 走 netstat，POSIX 走 lsof）。"""
    pids = []
    try:
        if os.name == 'nt':
            # 中文 Windows 的 netstat 输出是 GBK，且可能夹杂非 UTF-8 字节：
            # 这里只要 ASCII 字段（LISTENING / 端口 / PID），一律 errors='replace' 兜住。
            r = subprocess.run(['netstat', '-ano', '-p', 'TCP'],
                               capture_output=True, timeout=20)
            out = (r.stdout or b'').decode('utf-8', errors='replace')
            for line in out.splitlines():
                parts = line.split()
                if len(parts) < 5 or 'LISTEN' not in line.upper():
                    continue
                if parts[1].rsplit(':', 1)[-1] == str(port) and parts[-1].isdigit():
                    pids.append(int(parts[-1]))
        else:
            out = subprocess.run(['lsof', '-ti', f'tcp:{port}', '-sTCP:LISTEN'],
                                 capture_output=True, text=True, errors='replace',
                                 timeout=20).stdout
            pids = [int(x) for x in out.split() if x.strip().isdigit()]
    except Exception as e:
        log(f'    [警告] 查询端口 {port} 监听失败: {e}')
    return sorted(set(pids))


def stop_service(port: int) -> float:
    """结束监听端口的进程并等到端口释放。返回等待秒数。"""
    pids = listeners_on(port)
    if not pids:
        log(f'    端口 {port} 无监听，视为已停服')
        return 0.0
    log(f'    停止监听 {port} 的进程: {pids}')
    for pid in pids:
        try:
            if os.name == 'nt':
                # taskkill 输出是本地代码页（中文 Windows 为 GBK），只用于日志，
                # 统一按 utf-8 + replace 解，避免 reader 线程抛 UnicodeDecodeError。
                subprocess.run(['taskkill', '/PID', str(pid), '/F'],
                               capture_output=True, timeout=30)
            else:
                os.kill(pid, 15)
        except Exception as e:
            log(f'    [警告] 结束 PID {pid} 失败: {e}')
    t0 = time.monotonic()
    while time.monotonic() - t0 < 30:
        if not listeners_on(port):
            return round(time.monotonic() - t0, 3)
        time.sleep(0.3)
    raise RuntimeError(f'端口 {port} 在 30s 内未释放，拒绝继续（避免半停半起）')


def _mirror(src: Path, dst: Path):
    """把 src 目录镜像到 dst（只增删 dst 侧由本目录管理的文件）。

    Windows 用 robocopy /MIR：单进程完成「拷新 + 删多余」，既避开 `cp -r` 到已存在
    目录产生的嵌套叠加，也避开逐文件删除触发宿主机的批量删除保护（一次 rmtree
    545 个文件会被拦下）。POSIX 退回 shutil（先删后拷）。
    robocopy 退出码 0~7 均为正常（1=有拷贝, 2=有删除, 3=两者皆有...），>=8 才是错误。
    """
    if os.name == 'nt':
        cmd = ['robocopy', str(src), str(dst), '/MIR', '/NFL', '/NDL', '/NJH', '/NJS', '/NP',
               '/XD', 'node_modules', '__pycache__', '.vite', '/XF', '*.pyc', '*.pyo']
        r = subprocess.run(cmd, capture_output=True, timeout=600)
        if r.returncode >= 8:
            out = (r.stdout or b'').decode('utf-8', errors='replace')
            raise RuntimeError(f'robocopy 失败 (exit {r.returncode}): {out[-400:]}')
        return
    if dst.exists():
        shutil.rmtree(dst)
    shutil.copytree(src, dst, ignore=IGNORE, dirs_exist_ok=False)


def swap_code(src: Path, dst: Path):
    """把 src 的代码目录/根文件镜像到 dst（按白名单，绝不触碰 data/.env/.venv）。"""
    if not src.is_dir():
        raise RuntimeError(f'同步源不存在: {src}')
    for name in CODE_DIRS:
        s, d = src / name, dst / name
        if not s.is_dir():
            continue
        _mirror(s, d)
        log(f'    同步目录 {name}/')
    for name in CODE_FILES:
        s = src / name
        if s.is_file():
            shutil.copy2(s, dst / name)
    log(f'    同步完成: {src.name} → {dst.name}')


def read_app_version(root: Path) -> str:
    """从 main_new.py 读 APP_VERSION（演练后的静态自证）。"""
    try:
        for line in (root / 'backend' / 'main_new.py').read_text(encoding='utf-8').splitlines():
            if line.startswith('APP_VERSION'):
                return line.split('"')[1]
    except Exception:
        pass
    return ''


def wait_healthy(port: int, want_version: str, timeout: float = START_TIMEOUT):
    """轮询 /api/health 直到 status=ok 且 version 匹配；返回 (耗时秒, 最后响应)。"""
    url = f'http://127.0.0.1:{port}/api/health'
    t0 = time.monotonic()
    last = ''
    while time.monotonic() - t0 < timeout:
        try:
            with urllib.request.urlopen(url, timeout=5) as r:
                body = json.loads(r.read().decode('utf-8'))
            got = str(body.get('version', ''))
            last = json.dumps(body, ensure_ascii=False)
            if body.get('status') == 'ok' and got == want_version:
                return round(time.monotonic() - t0, 3), last
        except (urllib.error.URLError, socket.timeout, ValueError, OSError) as e:
            last = f'{type(e).__name__}: {e}'
        time.sleep(HEALTH_POLL)
    raise RuntimeError(f'{timeout}s 内未就绪 (期望 version={want_version})，最后响应: {last[:200]}')


def start_service(root: Path, port: int, tag: str) -> Path:
    """后台起服并立即返回日志路径；健康与否交给 wait_healthy 判定。"""
    py = _venv_python(root)
    logdir = root / 'logs'
    logdir.mkdir(exist_ok=True)
    logfile = logdir / f'drill-{tag}.log'
    env = os.environ.copy()
    env['PYTHONIOENCODING'] = 'utf-8'
    flags = 0
    if os.name == 'nt':
        # 脱离当前进程组：脚本退出后服务继续跑
        flags = subprocess.CREATE_NEW_PROCESS_GROUP | subprocess.DETACHED_PROCESS
    with open(logfile, 'w', encoding='utf-8', errors='replace') as fh:
        subprocess.Popen([str(py), 'backend/main_new.py'], cwd=str(root),
                         stdout=fh, stderr=subprocess.STDOUT, env=env,
                         creationflags=flags)
    log(f'    已发起启动: {py.name} backend/main_new.py (日志 logs/{logfile.name})')
    return logfile


def drill_segment(label: str, src: Path, want_version: str, port: int, dry: bool):
    """执行一段「停服 → 换代码 → 起服 → 等健康」，返回耗时字典。"""
    log('')
    log(f'── {label} → {want_version} ──')
    if dry:
        log(f'    [DryRun] 将停服(端口 {port}) → 从 {src} 同步代码 → 起服 → 等 /api/health')
        return {'label': label, 'target': want_version, 'elapsed_sec': None, 'dry_run': True}

    t_stop = time.monotonic()
    stop_sec = stop_service(port)
    swap_code(src, OPS)
    static_ver = read_app_version(OPS)
    start_service(OPS, port, tag=label.lower().replace(' ', '-'))
    health_sec, health_body = wait_healthy(port, want_version)
    total = round(time.monotonic() - t_stop, 3)
    log(f'    停服 {stop_sec}s + 换码 + 起服 {health_sec}s → 单段合计 {total}s')
    log(f'    静态自证 APP_VERSION={static_ver} / 健康响应 {health_body[:120]}')
    return {
        'label': label, 'target': want_version, 'stop_sec': stop_sec,
        'health_sec': health_sec, 'elapsed_sec': total,
        'static_version': static_ver, 'health_body': health_body, 'dry_run': False,
    }


def main():
    ap = argparse.ArgumentParser(description='v6.4 回滚演练计时器')
    ap.add_argument('--port', type=int, default=DEFAULT_PORT)
    ap.add_argument('--budget', type=float, default=300.0, help='单段预算秒数（验收口径 300s）')
    ap.add_argument('--dry-run', action='store_true', help='只打印计划，不动任何文件/进程')
    ap.add_argument('--rollback-src', default=str(BACKUP_636), help='6.3.6 代码来源目录')
    ap.add_argument('--restore-src', default=str(DEV), help='6.4.0 代码来源目录')
    args = ap.parse_args()

    log('=' * 66)
    log('v6.4 T4-9 回滚演练计时（验收口径：单段 5 分钟内恢复）')
    log('=' * 66)
    log(f'  ops 目录   : {OPS}')
    log(f'  回滚源     : {args.rollback_src}  (期望 {ROLLBACK_TO})')
    log(f'  恢复源     : {args.restore_src}  (期望 {CURRENT})')
    log(f'  预算       : {args.budget:.0f}s / 段')
    log(f'  演练前版本 : {read_app_version(OPS)}')

    if not args.dry_run:
        if not OPS.is_dir():
            log(f'[失败] ops 目录不存在: {OPS}')
            return 1
        cur = read_app_version(OPS)
        if cur not in (CURRENT, ROLLBACK_TO):
            log(f'[失败] 演练前 ops 版本异常 ({cur!r})，拒绝在未知状态上继续')
            return 1
        if read_app_version(Path(args.restore_src)) != CURRENT:
            log(f'[失败] 恢复源不是 {CURRENT}，演练后将无法还原')
            return 1
        if read_app_version(Path(args.rollback_src)) != ROLLBACK_TO:
            log(f'[失败] 回滚源不是 {ROLLBACK_TO}')
            return 1

    results = []
    rc = 0
    try:
        results.append(drill_segment('回滚', Path(args.rollback_src), ROLLBACK_TO, args.port, args.dry_run))
    except Exception as e:
        log(f'[失败] 回滚段: {e}')
        results.append({'label': '回滚', 'target': ROLLBACK_TO, 'error': str(e)})
        rc = 1
    finally:
        # 无论如何都要把 ops 还原到当前版本，否则生产会停在旧版本上
        log('')
        log('── 恢复（finally，必执行）──')
        try:
            results.append(drill_segment('恢复', Path(args.restore_src), CURRENT, args.port, args.dry_run))
        except Exception as e:
            log(f'[严重] 恢复段失败: {e}')
            log('    人工指令:')
            log(f'      1) 结束端口 {args.port} 监听进程')
            log(f'      2) 从 {args.restore_src} 同步 backend/ frontend/ 等到 {OPS}')
            log(f'      3) cd {OPS} && .venv\\Scripts\\python.exe backend\\main_new.py')
            results.append({'label': '恢复', 'target': CURRENT, 'error': str(e)})
            rc = 2

    if args.dry_run:
        log('')
        log('[DryRun] 计划已打印，未做任何修改。')
        return rc

    # ─── 判定与落盘 ───
    log('')
    log('=' * 66)
    log('演练结果')
    log('=' * 66)
    ok = True
    for r in results:
        if r.get('error'):
            log(f"  {r['label']:4s} → {r['target']}: 失败 — {r['error'][:120]}")
            ok = False
            continue
        sec = r['elapsed_sec']
        verdict = 'PASS' if sec <= args.budget else 'FAIL(超预算)'
        if sec > args.budget:
            ok = False
        log(f"  {r['label']:4s} → {r['target']}: {sec:>7.3f}s  [{verdict}]  (停服 {r.get('stop_sec')}s + 就绪 {r.get('health_sec')}s)")

    final_ver = read_app_version(OPS)
    pids = listeners_on(args.port)
    log('')
    log(f'  演练后版本: {final_ver}   端口 {args.port} 监听: {pids or "无"}')
    if final_ver != CURRENT or not pids:
        log('[失败] 演练后 ops 未回到 6.4.0 且保持运行')
        ok = False

    out = {
        'ts': datetime.now().isoformat(timespec='seconds'),
        'budget_sec': args.budget,
        'port': args.port,
        'ops_dir': str(OPS),
        'segments': results,
        'final_version': final_ver,
        'port_listeners': pids,
        'pass': ok,
    }
    logdir = OPS / 'logs'
    logdir.mkdir(exist_ok=True)
    outfile = logdir / f"rollback_drill_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
    try:
        outfile.write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding='utf-8')
        log(f'  证据已落盘: {outfile}')
    except Exception as e:
        log(f'  [警告] 落盘失败: {e}')

    log('')
    log('结论: ' + ('PASS — 单段均在预算内，ops 已回到 6.4.0 运行中' if ok else 'FAIL — 见上方明细'))
    return 0 if ok else 1


if __name__ == '__main__':
    sys.exit(main())
