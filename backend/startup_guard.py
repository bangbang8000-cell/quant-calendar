#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.4.1 (FR-643c): 启动前置体检 — 把"起不来"变成"看得懂、可处置"。

在 uvicorn 绑定端口**之前**执行（main_new.py 的 __main__ 分支）：
1. 端口占用 → 报出占用 PID + 处置命令（端口检查必须在绑定前，故不放进 lifespan 自检）
2. 数据目录不可写 → 报出路径
3. 依赖缺失 → 报出模块名
4. 数据库损坏 → 报出 PRAGMA integrity_check 结果与表名线索

阻断项（端口占用/目录不可写/依赖缺失/库损坏）写入 data/startup_check.json 后退出码 2，
日志给出可直接执行的修复命令。非阻断项只告警，不阻止启动。
"""
from __future__ import annotations

import json
import logging
import os
import socket
import subprocess
import sys
from datetime import datetime

logger = logging.getLogger(__name__)

REQUIRED_MODULES = ("fastapi", "uvicorn", "pydantic", "data_parser", "views_aggregator", "db")
EXIT_BLOCKED = 2


def _report_file() -> str:
    import paths
    return os.path.join(paths.DATA_DIR, "startup_check.json")


def find_port_owner(port: int) -> int | None:
    """返回占用端口的 PID（尽力而为，取不到返回 None）。"""
    try:
        import psutil
        for conn in psutil.net_connections(kind="inet"):
            if conn.laddr and conn.laddr.port == port and conn.status == psutil.CONN_LISTEN:
                return conn.pid
        return None
    except Exception:
        logger.debug("psutil 端口探测不可用, 回退 netstat/lsof", exc_info=True)
    if os.name != "nt":
        try:
            out = subprocess.check_output(["lsof", "-ti", "tcp:%d" % port], text=True,
                                          stderr=subprocess.DEVNULL)
            return int(out.strip().splitlines()[0]) if out.strip() else None
        except Exception:
            logger.debug("lsof 不可用或端口无占用进程, 返回 None", exc_info=True)
            return None
    try:
        out = subprocess.check_output(["netstat", "-ano", "-p", "TCP"], text=True,
                                      stderr=subprocess.DEVNULL, timeout=10)
        for line in out.splitlines():
            parts = line.split()
            if len(parts) >= 5 and parts[1].endswith(":%d" % port) and "LISTEN" in parts[3]:
                return int(parts[4])
    except Exception:
        logger.debug("netstat 解析端口占用失败, 返回 None", exc_info=True)
    return None


def check_port(host: str, port: int) -> dict:
    """能绑定即空闲；绑定失败则查占用 PID。"""
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    try:
        sock.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, 1)
        sock.bind((host, port))
        return {"ok": True, "port": port, "pid": None}
    except OSError as e:
        pid = find_port_owner(port)
        action = ("taskkill /PID %d /F" % pid) if pid else "netstat -ano | findstr :%d" % port
        return {
            "ok": False, "port": port, "pid": pid, "error": str(e),
            "action": "端口 %d 已被 PID %s 占用；可执行: %s，或改 .env 的 PORT"
                      % (port, pid if pid else "未知", action),
        }
    finally:
        sock.close()


def check_data_dir() -> dict:
    import paths
    d = paths.DATA_DIR
    if not os.path.isdir(d):
        return {"ok": False, "path": d, "action": "数据目录不存在；请创建目录并授予写权限: %s" % d}
    probe = os.path.join(d, ".startup_guard_probe")
    try:
        with open(probe, "w", encoding="utf-8") as f:
            f.write("ok")
        os.remove(probe)
        return {"ok": True, "path": d}
    except OSError as e:
        return {"ok": False, "path": d, "error": str(e),
                "action": "数据目录不可写 (%s)；请检查目录权限或磁盘空间: %s" % (e, d)}


def check_dependencies() -> dict:
    missing = []
    for mod in REQUIRED_MODULES:
        try:
            __import__(mod)
        except Exception as e:
            missing.append({"module": mod, "error": "%s: %s" % (type(e).__name__, e)})
    if missing:
        return {"ok": False, "missing": missing,
                "action": "依赖缺失或导入失败: %s；修复: .venv/Scripts/python.exe -m pip install -r requirements.lock"
                          % ", ".join(m["module"] for m in missing)}
    return {"ok": True, "missing": []}


def check_database() -> dict:
    try:
        import db as db_module
    except Exception as e:
        return {"ok": False, "error": str(e),
                "action": "db 模块导入失败 (%s)；请检查 backend/db.py 是否完整" % e}
    db_path = getattr(db_module, "DB_FILE", None)
    if not db_path:
        return {"ok": True, "note": "未声明 DB_FILE（跳过数据库体检）"}
    if not os.path.exists(db_path):
        return {"ok": True, "path": db_path, "note": "数据库尚未创建（首次启动会初始化）"}
    try:
        import sqlite3
        conn = sqlite3.connect(db_path, timeout=5)
        try:
            row = conn.execute("PRAGMA integrity_check").fetchone()
            result = (row or ["unknown"])[0]
            tables = [r[0] for r in conn.execute(
                "SELECT name FROM sqlite_master WHERE type='table'").fetchall()]
        finally:
            conn.close()
    except Exception as e:
        return {"ok": False, "path": db_path, "error": str(e),
                "action": "数据库无法打开 (%s)；请从 data/backups 恢复最近备份: %s" % (e, db_path)}
    if str(result).lower() != "ok":
        return {"ok": False, "path": db_path, "integrity": result, "tables": tables[:20],
                "action": "数据库损坏 (integrity_check=%s)；受影响表: %s；请从 data/backups 恢复"
                          % (result, ", ".join(tables[:10]))}
    return {"ok": True, "path": db_path, "integrity": "ok", "table_count": len(tables)}


def preflight(host: str = "127.0.0.1", port: int = None, persist: bool = True) -> dict:
    """执行启动体检。返回 {ok, blocking, checks, actions, ts}。"""
    if port is None:
        try:
            from config import settings
            port = int(settings.PORT)
        except Exception:
            port = 8000
    report = {
        "ts": datetime.now().isoformat(timespec="seconds"),
        "stage": "preflight",
        "host": host,
        "port": port,
        "checks": {
            "port": check_port(host, port),
            "data_dir": check_data_dir(),
            "dependencies": check_dependencies(),
            "database": check_database(),
        },
    }
    blocking = []
    actions = []
    for name, item in report["checks"].items():
        if not item.get("ok"):
            blocking.append(name)
            if item.get("action"):
                actions.append(item["action"])
    report["blocking"] = blocking
    report["actions"] = actions
    report["ok"] = not blocking
    report["status"] = "ok" if not blocking else "blocked"
    if persist and blocking:
        _persist_failure(report)
    return report


def _persist_failure(report: dict) -> None:
    """写入 data/startup_check.json（与 reliability.checks 同一文件，合并而非覆盖）。"""
    try:
        p = _report_file()
        os.makedirs(os.path.dirname(p), exist_ok=True)
        payload = dict(report)
        if os.path.exists(p):
            try:
                with open(p, "r", encoding="utf-8") as f:
                    previous = json.load(f)
                if isinstance(previous, dict) and "stage" not in previous:
                    payload["last_self_check"] = previous  # 保留上一次自检摘要
            except (OSError, ValueError):
                logger.debug("上一次 startup_check.json 不可读, 直接覆盖", exc_info=True)
        tmp = p + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(payload, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)
    except Exception as e:  # pragma: no cover
        logger.warning("启动失败报告写入失败: %s", e)


def log_report(report: dict) -> None:
    if report.get("ok"):
        logger.info("✅ 启动前置体检通过 (端口 %s, 依赖/目录/数据库正常)", report.get("port"))
        return
    logger.critical("❌ 启动被阻断: %s", ", ".join(report.get("blocking") or []))
    for action in report.get("actions") or []:
        logger.critical("  处置建议: %s", action)
    logger.critical("  详情已写入 %s", _report_file())


def main(argv=None) -> int:
    """独立运行：python -m startup_guard（便于部署前手工体检）。"""
    logging.basicConfig(level=logging.INFO, format="%(levelname)s %(message)s")
    argv = argv if argv is not None else sys.argv[1:]
    port = int(argv[0]) if argv else None
    report = preflight(port=port)
    log_report(report)
    print(json.dumps(report, ensure_ascii=False, indent=2))
    return 0 if report["ok"] else EXIT_BLOCKED


if __name__ == "__main__":
    sys.exit(main())
