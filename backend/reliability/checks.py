#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0 T-5.0.3: 启动自检 (reliability/checks.py)

- run_checks(): 依赖(python 版本/内部模块) + 目录(数据目录/子目录) + DB schema + 关键配置(.env/飞书/数据刷新)
- 报告: {ts, app_version, healthy, ok/warn/fail_count, checks:[{name,status,detail}]}
- 持久化: DATA_DIR/startup_check.json (原子写, 覆盖最近一次); get_report() 读取供 API/面板
- 设计: 关键故障 fail(→healthy False), 可选功能缺失 warn(不阻断启动); 单检查异常兜底为 fail 不中断整体

main_new.py 启动时调用 run_checks(app_version=APP_VERSION) 并记录摘要日志。
"""
import json
import logging
import os
import sys
import threading
from datetime import datetime

logger = logging.getLogger(__name__)

_WRITE_LOCK = threading.Lock()


# ─── 工具 ───

def _entry(name, status, detail):
    return {"name": name, "status": status, "detail": detail}


def _ok(name, detail=""):
    return _entry(name, "ok", detail)


def _warn(name, detail=""):
    return _entry(name, "warn", detail)


def _fail(name, detail=""):
    return _entry(name, "fail", detail)


# 可独立打补丁的判定函数 (供测试注入故障)
def _db_schema_ok():
    import db
    return bool(db.schema_ok())


def _feishu_configured():
    import paths
    p = os.path.join(paths.DATA_DIR, "feishu_config.json")
    if not os.path.exists(p):
        return False
    try:
        with open(p, "r", encoding="utf-8") as f:
            return bool((json.load(f) or {}).get("webhook_url"))
    except Exception:
        return False


def _data_dir_ok():
    import paths
    d = paths.DATA_DIR
    if not os.path.isdir(d):
        return False, f"目录不存在: {d}"
    probe = os.path.join(d, ".startup_check_probe")
    try:
        with open(probe, "w", encoding="utf-8") as f:
            f.write("ok")
        os.remove(probe)
        return True, d
    except OSError as e:
        return False, f"目录不可写: {e}"


# ─── 检查项 ───

def _check_python():
    v = sys.version_info
    if (v.major, v.minor) >= (3, 10):
        return _ok("python_version", f"{v.major}.{v.minor}.{v.micro}")
    return _fail("python_version", f"{v.major}.{v.minor}.{v.micro} < 3.10")


def _check_internal_modules():
    missing = []
    for m in ("data_parser", "views_aggregator", "db", "scheduler", "strategy_sdk", "strategy_governance"):
        try:
            __import__(m)
        except Exception as e:
            missing.append(f"{m}({type(e).__name__})")
    if missing:
        return _warn("internal_modules", "缺失/导入失败: " + ",".join(missing))
    return _ok("internal_modules", "关键内部模块均可导入")


def _check_data_dir():
    ok, detail = _data_dir_ok()
    return _ok("data_dir", detail) if ok else _fail("data_dir", detail)


def _check_subdirs():
    import paths
    names = ["holdings", "qresult", "logs", "backups"]
    parts = []
    bad = []
    for n in names:
        d = os.path.join(paths.DATA_DIR, n)
        try:
            os.makedirs(d, exist_ok=True)
            parts.append(f"{n}=ok")
        except OSError as e:
            bad.append(n)
            parts.append(f"{n}=失败:{e}")
    detail = "; ".join(parts)
    return _ok("data_subdirs", detail) if not bad else _fail("data_subdirs", detail)


def _check_db():
    try:
        ok = _db_schema_ok()
        return _ok("db_schema", "schema 校验通过") if ok else _fail("db_schema", "schema 异常")
    except Exception as e:
        return _fail("db_schema", f"检查异常: {e}")


def _check_env():
    import paths
    p = os.path.join(paths.BASE_DIR, ".env")
    if os.path.exists(p):
        return _ok("env_config", f".env 存在")
    return _warn("env_config", ".env 缺失, 使用默认配置")


def _check_feishu():
    if _feishu_configured():
        return _ok("feishu_config", "webhook 已配置")
    return _warn("feishu_config", "未配置飞书 webhook (可选)")


def _check_refresh_config():
    try:
        from data_refresh_config import load_config
        cfg = load_config()
        return _ok("data_refresh_config",
                   f"scheduled={cfg.get('scheduled_enabled', False)} pull={cfg.get('pull_enabled', False)}")
    except Exception as e:
        return _warn("data_refresh_config", f"加载失败(用默认): {e}")


# ─── 持久化 ───

def _report_file() -> str:
    import paths
    return os.path.join(paths.DATA_DIR, "startup_check.json")


def _persist(report: dict) -> None:
    p = _report_file()
    tmp = p + ".tmp"
    with _WRITE_LOCK:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)


def get_report():
    """读取最近一次启动自检报告 (未运行过返回 None)"""
    p = _report_file()
    if not os.path.exists(p):
        return None
    try:
        with open(p, "r", encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


# ─── 入口 ───

def run_checks(now: datetime = None, app_version: str = None) -> dict:
    """执行全部启动自检, 返回结构化报告 (不抛异常)"""
    now = now or datetime.now()
    checks = [
        _check_python(),
        _check_internal_modules(),
        _check_data_dir(),
        _check_subdirs(),
        _check_db(),
        _check_env(),
        _check_feishu(),
        _check_refresh_config(),
    ]
    counts = {"ok": 0, "warn": 0, "fail": 0}
    for c in checks:
        counts[c["status"]] += 1
    report = {
        "ts": now.isoformat(timespec="seconds"),
        "app_version": app_version or "unknown",
        "healthy": counts["fail"] == 0,
        "ok_count": counts["ok"],
        "warn_count": counts["warn"],
        "fail_count": counts["fail"],
        "checks": checks,
    }
    try:
        _persist(report)
    except Exception as e:  # pragma: no cover - 报告写失败不致命
        logger.warning("启动自检报告持久化失败: %s", e)
    return report
