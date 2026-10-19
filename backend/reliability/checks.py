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
        return _ok("env_config", ".env 存在")
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


# v6.4 (FR-6.4.2): 盘中实时报价 WS 可用性 — 依赖 + 路由注册双条件。
# 背景: requirements.lock 声明了 websockets/wsproto 但 ops 未安装,
# uvicorn 静默降级 → 全站 /api/market/ws/quotes 返回 404, 而 health/自检全绿。
# 因此必须把"依赖可导入"与"路由已注册"变成显式检查项。
_WS_ROUTE_PATH = "/api/market/ws/quotes"


def _ws_route_registered() -> bool:
    """WS 路由是否已挂载到 v1 路由表 (不依赖 app 实例)。

    兼容两种 FastAPI 结构：
    - 旧版：include_router 后 route 被拍平，`route.path` 即完整路径；
    - 新版：路由表里是 `_IncludedRouter` 惰性包装，需比对 `original_router` 身份。
    """
    ws_router = None
    ws_endpoint_ok = False
    try:
        from api.v1.market_ws import router as ws_router
        # 注意: 该 router 自带 prefix="/market"，故 route.path 已是 /market/ws/quotes
        ws_endpoint_ok = any(
            str(getattr(r, "path", "")).endswith("/ws/quotes")
            for r in getattr(ws_router, "routes", [])
        )
    except Exception:
        return False
    if not ws_endpoint_ok:
        return False

    try:
        from api.v1.router import api_router
        for r in getattr(api_router, "routes", []):
            if getattr(r, "path", None) == _WS_ROUTE_PATH:
                return True
            for attr in ("original_router", "router"):
                if getattr(r, attr, None) is ws_router:
                    return True
    except Exception:
        return False
    return False


def _check_ws_dependency():
    """导入 websockets/wsproto + 路由注册；任一失败计 fail（功能承诺必须成立）。"""
    problems = []
    versions = []
    for mod in ("websockets", "wsproto"):
        try:
            m = __import__(mod)
            versions.append(f"{mod}={getattr(m, '__version__', '?')}")
        except Exception as e:
            problems.append(f"{mod} 导入失败({type(e).__name__})")
    if not _ws_route_registered():
        problems.append(f"WS 路由未注册({_WS_ROUTE_PATH})")
    if problems:
        hint = "修复: .venv/Scripts/python.exe -m pip install -r requirements.lock"
        return _fail("ws_dependency", "; ".join(problems) + f" | {hint}")
    return _ok("ws_dependency", " ".join(versions) + f" route={_WS_ROUTE_PATH}")


# v6.4 (FR-6.4.7): 环境与 requirements.lock 漂移检查。
# 只报 warn（漂移不必然致命），但必须列名 —— 让"装了但版本不对"这类静默差异可见。
_HEAVY_LOCK_PKGS = ("websockets", "wsproto", "uvicorn", "fastapi", "pydantic")


def _marker_applies(marker: str) -> bool:
    """判断 PEP 508 环境标记在当前解释器上是否成立。

    无法判定时返回 True (保守: 宁可多比一次, 也不静默跳过用户实际要装的包)。
    """
    marker = (marker or "").strip()
    if not marker:
        return True
    try:
        from packaging.markers import Marker
        return bool(Marker(marker).evaluate())
    except Exception:
        return True


def _read_lock_versions(path: str):
    """解析 requirements.lock → {包名: 版本}，仅保留「当前环境实际生效」的条目。

    v6.4 (FR-6.4.7) 修正: lock 行普遍带 PEP 508 环境标记，例如
        colorama==0.4.6 ; sys_platform == 'win32'
        numpy==2.4.6   ; python_full_version < '3.12'
        numpy==2.5.3   ; python_full_version >= '3.12'
        akracer==0.0.14 ; sys_platform == 'linux'
    旧实现直接把 ';' 之后整段当成版本串，导致
      ① 版本比对全部报「漂移」(0.4.6 != "0.4.6 ; sys_platform == 'win32'")
      ② 同名多行互相覆盖 (numpy 取到最后一条)
      ③ linux-only 包被判「缺失」(Windows 上 akracer / py-mini-racer)
    现按标记求值后再收进结果:
      · 标记成立 → 采用该行版本 (同名后行覆盖前行, 与 pip 依赖解析顺序一致)
      · 标记不成立 → 跳过
    """
    out = {}
    try:
        with open(path, "r", encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line or line.startswith("#") or "==" not in line:
                    continue
                spec, _, marker = line.partition(";")
                name, _, ver = spec.partition("==")
                name = name.split("[")[0].strip().lower().replace("_", "-")
                ver = ver.strip().split()[0] if ver.strip() else ""
                if not name or not ver:
                    continue
                if not _marker_applies(marker):
                    continue
                out[name] = ver
    except Exception:
        return None
    return out


def _check_dep_lock():
    import paths
    lock_path = os.path.join(paths.BASE_DIR, "requirements.lock")
    locked = _read_lock_versions(lock_path)
    if not locked:
        return _warn("dep_lock", f"未找到/无法解析 requirements.lock ({lock_path})")
    try:
        from importlib.metadata import version as _pkg_version
    except Exception as e:  # pragma: no cover
        return _warn("dep_lock", f"importlib.metadata 不可用: {e}")

    missing, drift = [], []
    for name, want in locked.items():
        try:
            got = _pkg_version(name)
        except Exception:
            missing.append(name)
            continue
        if got != want:
            drift.append(f"{name} {got}!={want}")
    if not missing and not drift:
        return _ok("dep_lock", f"{len(locked)} 个包与 lock 一致")
    parts = []
    if missing:
        parts.append(f"缺失 {len(missing)}: " + ", ".join(missing[:8]))
    if drift:
        parts.append(f"版本漂移 {len(drift)}: " + ", ".join(drift[:8]))
    heavy = [p for p in _HEAVY_LOCK_PKGS if p in missing or any(d.startswith(p + " ") for d in drift)]
    if heavy:
        parts.append("关键包: " + ", ".join(heavy))
    return _warn("dep_lock", "; ".join(parts))


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
        _check_ws_dependency(),
        _check_dep_lock(),
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
