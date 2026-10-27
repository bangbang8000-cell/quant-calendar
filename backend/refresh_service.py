#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.4.1 (FR-641): 数据刷新闭环 — 配置校验 / 首启限量 / 退避重试 / 连续失败告警 / 结构化日志。

单一事实源：
- 开关开启的前置条件（stock_pool 非空、首启二次确认）
- 刷新执行（手动 / 定时共用），含 3 次指数退避重试
- 每次刷新的结构化日志（data/refresh_log.jsonl）
- 连续失败计数与告警（data/refresh_state.json + data_sources.enqueue_alert）

设计约束：
- 「成功但 0 行」不得计为成功（FR-641 验收第 4 条）。
- 刷新成功后原子更新 freshness 并通知视图聚合层重载（沿用 v6.4 链路）。
- 所有文件路径在调用时解析，保证 tests/conftest.py 的 DATA_DIR 重定向生效。
"""
from __future__ import annotations

import json
import logging
import os
import time
from datetime import datetime

logger = logging.getLogger(__name__)

FIRST_RUN_DAYS_DEFAULT = 5       # 首次开启仅拉取最近 N 个交易日
MAX_ATTEMPTS = 3                 # 失败重试次数（含首次）
BACKOFF_BASE_SECONDS = 30        # 指数退避基数
BACKOFF_CAP_SECONDS = 600        # 退避上限 10 分钟
CONSECUTIVE_FAILURE_ALERT = 2    # 连续失败 N 次触发告警
LOG_MAX = 1000                   # refresh_log.jsonl 保留条数

CODE_OK = "OK"
CODE_POOL_EMPTY = "POOL_EMPTY"
CODE_FIRST_RUN_CONFIRM = "FIRST_RUN_CONFIRM_REQUIRED"

# ─── 示例组合 (6.4.2 / FR-644) ───
# 一键载入/删除: 覆盖沪深主板 + 创业板, 6 只高流动性标的, 便于首日就能跑通刷新与评估。
EXAMPLE_POOL = [
    ("600519.SH", "贵州茅台"),
    ("000001.SZ", "平安银行"),
    ("600036.SH", "招商银行"),
    ("000858.SZ", "五粮液"),
    ("601318.SH", "中国平安"),
    ("300750.SZ", "宁德时代"),
]


def example_pool() -> list:
    """示例组合清单 (code + name)。"""
    return [{"code": c, "name": n} for c, n in EXAMPLE_POOL]


def example_codes() -> list:
    return [c for c, _ in EXAMPLE_POOL]


def merge_pool(current, codes) -> list:
    """把 codes 并入 current (去重、保持现有顺序在前的追加语义)。"""
    out = [str(c) for c in (current or [])]
    seen = set(out)
    for c in (codes or []):
        c = str(c)
        if c and c not in seen:
            seen.add(c)
            out.append(c)
    return out


def remove_from_pool(current, codes) -> list:
    drop = {str(c) for c in (codes or [])}
    return [str(c) for c in (current or []) if str(c) not in drop]



# ─── 路径 ───

def _data_path(name: str) -> str:
    import paths
    return os.path.join(paths.DATA_DIR, name)


def _log_file() -> str:
    return _data_path("refresh_log.jsonl")


def _state_file() -> str:
    return _data_path("refresh_state.json")


# ─── 状态 ───

def load_state() -> dict:
    p = _state_file()
    if not os.path.exists(p):
        return {"consecutive_failures": 0, "alerted": False, "last_error": "", "last_success": None}
    try:
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, dict) else {}
    except (OSError, ValueError):
        return {"consecutive_failures": 0, "alerted": False, "last_error": "", "last_success": None}


def _save_state(state: dict) -> None:
    try:
        from reliability.atomic import atomic_write_json
        atomic_write_json(_state_file(), state)
    except Exception as e:  # pragma: no cover - 原子写不可用时回退
        logger.warning("刷新状态写入失败: %s", e)


# ─── 结构化日志 ───

def log_event(record: dict) -> dict:
    """追加一条刷新日志（JSONL，超上限截断保留最近 LOG_MAX 条）。"""
    rec = dict(record)
    rec.setdefault("ts", datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    try:
        line = json.dumps(rec, ensure_ascii=False)
        p = _log_file()
        existing = []
        if os.path.exists(p):
            with open(p, "r", encoding="utf-8") as f:
                existing = [ln for ln in f.read().splitlines() if ln.strip()]
        existing = existing[-(LOG_MAX - 1):] + [line]
        tmp = p + ".tmp"
        with open(tmp, "w", encoding="utf-8") as f:
            f.write("\n".join(existing) + "\n")
        os.replace(tmp, p)
    except Exception as e:  # pragma: no cover
        logger.warning("刷新日志写入失败: %s", e)
    return rec


def get_recent_logs(limit: int = 50) -> list:
    p = _log_file()
    if not os.path.exists(p):
        return []
    try:
        with open(p, "r", encoding="utf-8") as f:
            lines = [ln for ln in f.read().splitlines() if ln.strip()]
        out = []
        for ln in lines[-limit:]:
            try:
                out.append(json.loads(ln))
            except ValueError:
                continue
        return list(reversed(out))
    except OSError:
        return []


# ─── 配置校验 ───

def _truthy(v) -> bool:
    return bool(v)


def validate_config_update(current: dict, incoming: dict) -> dict:
    """校验刷新配置变更。返回 {ok, code, message}。

    - 从关到开（scheduled_enabled / pull_enabled）时：stock_pool 必须非空（POOL_EMPTY）
    - 首次开启自动刷新：必须显式确认（FIRST_RUN_CONFIRM_REQUIRED），避免误触发全量拉取
    - 已开启状态下的普通修改（时间、频率）不受影响
    """
    current = current or {}
    incoming = incoming or {}
    enabling = (
        (_truthy(incoming.get("scheduled_enabled")) and not _truthy(current.get("scheduled_enabled")))
        or (_truthy(incoming.get("pull_enabled")) and not _truthy(current.get("pull_enabled")))
    )
    if not enabling:
        return {"ok": True, "code": CODE_OK, "message": ""}
    pool = incoming.get("stock_pool", current.get("stock_pool"))
    if not (pool or []):
        return {
            "ok": False, "code": CODE_POOL_EMPTY,
            "message": "尚未配置数据池，自动刷新将无标的可拉取；请先在数据源配置添加标的池",
        }
    if not (incoming.get("first_run_confirmed") or current.get("first_run_confirmed")):
        return {
            "ok": False, "code": CODE_FIRST_RUN_CONFIRM,
            "message": "首次开启自动刷新需二次确认：确认后将仅拉取最近 N 个交易日，不执行全量回补",
        }
    return {"ok": True, "code": CODE_OK, "message": ""}


def effective_first_run_days(config: dict = None) -> int:
    """首日拉取范围（交易日），配置缺失或非法时回退默认 5。"""
    cfg = config or {}
    try:
        n = int(cfg.get("first_run_days") or FIRST_RUN_DAYS_DEFAULT)
    except (TypeError, ValueError):
        n = FIRST_RUN_DAYS_DEFAULT
    return max(1, min(n, 60))


def is_first_run(config: dict = None) -> bool:
    """是否处于「首次开启尚未完成首日限量拉取」状态。"""
    cfg = config or {}
    return bool(cfg.get("scheduled_enabled") or cfg.get("pull_enabled")) and not bool(
        cfg.get("first_run_completed"))


def config_view(config: dict = None) -> dict:
    """配置 + 派生状态（供 GET /config 与前端引导使用）。"""
    from data_refresh_config import load_config
    cfg = config or load_config()
    pool = list(cfg.get("stock_pool") or [])
    out = dict(cfg)
    out["pool_empty"] = not pool
    out["first_run_pending"] = is_first_run(cfg)
    out["effective_first_run_days"] = effective_first_run_days(cfg)
    if not pool and (cfg.get("scheduled_enabled") or cfg.get("pull_enabled")):
        out["guide_code"] = CODE_POOL_EMPTY
        out["guide_message"] = "已开启自动刷新但数据池为空：请添加标的池，否则每日空跑"
    return out


# ─── 刷新执行 ───

def _latest_data_date() -> str | None:
    try:
        from views_aggregator import views_aggregator as _va
        dates = getattr(_va, "all_dates", None) or []
        if dates:
            return dates[-1]
    except Exception:
        logger.debug("读取视图最新日期失败", exc_info=True)
    try:
        from data_parser import parser as _dp
        dates = _dp.get_available_dates() or []
        return dates[-1] if dates else None
    except Exception:
        return None


def _record_freshness(latest_date: str, rows: int) -> None:
    try:
        from reliability.freshness import record_update
        record_update("market_daily", latest_date=latest_date, count=rows, detail="data_refresh ok")
        record_update("calendar_views", latest_date=latest_date, count=rows, detail="data_refresh ok")
    except Exception as e:
        logger.warning("刷新后新鲜度写入失败: %s", e)


def _notify_views_reload() -> dict:
    stats = {}
    try:
        from data_parser import parser as _dp
        stats["parser"] = _dp.reload()
    except Exception as e:
        logger.warning("刷新后 parser.reload 失败: %s", e)
        stats["parser_error"] = str(e)[:120]
    try:
        from views_aggregator import views_aggregator as _va
        stats["views"] = _va.reload()
    except Exception as e:
        logger.warning("刷新后 views_aggregator.reload 失败: %s", e)
        stats["views_error"] = str(e)[:120]
    return stats


def _raise_alert(message: str) -> None:
    try:
        from data_sources._health import enqueue_alert
        enqueue_alert("error", "refresh", message)
    except Exception as e:  # pragma: no cover
        logger.warning("刷新告警入队失败: %s", e)
    try:
        from scheduler import scheduler as _sched
        _sched._send_feishu_alert("数据刷新连续失败", message)
    except Exception:
        logger.debug("飞书告警不可用", exc_info=True)


def run_refresh_once(trigger: str = "manual", pull: bool = False, pool: list | None = None,
                     date: str | None = None, attempts: int = MAX_ATTEMPTS,
                     sleep_fn=time.sleep, now_fn=datetime.now) -> dict:
    """执行一次刷新（含重试）。返回统一结果结构。

    pull=True 时调用 data_pipeline.run_daily_pull；pull=False 仅重载本地数据（reload）。
    pool 为空且 pull=True → 直接返回 POOL_EMPTY，不写任何「成功」记录。
    """
    from data_refresh_config import load_config, save_config, update_refresh_status
    cfg = load_config()
    pool = list(pool if pool is not None else (cfg.get("stock_pool") or []))
    started = now_fn()
    base = {"trigger": trigger, "pull": bool(pull), "pool_size": len(pool),
            "started_at": started.strftime("%Y-%m-%d %H:%M:%S")}

    if pull and not pool and not cfg.get("stock_pool_allow_empty"):
        result = dict(base, success=False, code=CODE_POOL_EMPTY,
                      message="数据池为空，已跳过拉取", elapsed_ms=0, rows=0)
        log_event(dict(result, status="skipped"))
        return result

    remaining = 1 if not pull else max(1, int(attempts))
    attempt = 0
    last_error = ""
    pull_result = {}
    while attempt < remaining:
        attempt += 1
        try:
            rows = 0
            if pull:
                from data_pipeline import run_daily_pull
                pull_days = effective_first_run_days(cfg) if is_first_run(cfg) else None
                pull_result = run_daily_pull(pool=pool, date=date, recent_days=pull_days) \
                    if pull_days else run_daily_pull(pool=pool, date=date)
                rows = int(pull_result.get("pulled") or 0)
                failed = int(pull_result.get("failed") or 0)
                if failed:
                    last_error = "拉取失败 %d 只: %s" % (
                        failed, "; ".join(str(e) for e in (pull_result.get("errors") or [])[:3]))
                    raise RuntimeError(last_error)
                if rows <= 0:
                    # 成功但 0 行 → 假成功，按失败处理（FR-641 验收第 4 条）
                    last_error = "拉取完成但写入 0 行（非成功）"
                    raise RuntimeError(last_error)
            stats = _notify_views_reload()
            latest = _latest_data_date() or (now_fn().strftime("%Y-%m-%d") if pull else None)
            if latest:
                _record_freshness(latest, rows)
            update_refresh_status(True, f"{trigger} 刷新成功, 最新日期 {latest}")
            elapsed = int((now_fn() - started).total_seconds() * 1000)
            state = load_state()
            state.update({"consecutive_failures": 0, "alerted": False, "last_error": "",
                          "last_success": started.strftime("%Y-%m-%d %H:%M:%S")})
            _save_state(state)
            result = dict(base, success=True, code=CODE_OK, message="刷新成功",
                          attempts=attempt, latest_date=latest, rows=rows,
                          elapsed_ms=elapsed, stats=stats)
            log_event(dict(result, status="success"))
            if pull and cfg.get("first_run_completed") is not True:
                cfg2 = load_config()
                cfg2["first_run_completed"] = True
                save_config(cfg2)
            return result
        except Exception as e:
            last_error = str(e)[:200]
            logger.warning("刷新第 %d/%d 次失败: %s", attempt, remaining, last_error)
            if attempt < remaining:
                wait = min(BACKOFF_BASE_SECONDS * (2 ** (attempt - 1)), BACKOFF_CAP_SECONDS)
                try:
                    sleep_fn(wait)
                except Exception:
                    logger.debug("退避等待被中断", exc_info=True)

    elapsed = int((now_fn() - started).total_seconds() * 1000)
    state = load_state()
    state["consecutive_failures"] = int(state.get("consecutive_failures") or 0) + 1
    state["last_error"] = last_error
    if state["consecutive_failures"] >= CONSECUTIVE_FAILURE_ALERT and not state.get("alerted"):
        state["alerted"] = True
        _raise_alert("数据刷新连续失败 %d 次，最近错误：%s"
                     % (state["consecutive_failures"], last_error))
    _save_state(state)
    update_refresh_status(False, last_error)
    result = dict(base, success=False, code="REFRESH_FAILED", message=last_error,
                  attempts=attempt, rows=0, elapsed_ms=elapsed,
                  consecutive_failures=state["consecutive_failures"])
    log_event(dict(result, status="failed"))
    return result


def reset_state() -> None:
    """测试/运维用：清空连续失败计数。"""
    _save_state({"consecutive_failures": 0, "alerted": False, "last_error": "", "last_success": None})
