#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0 T-5.0.2: 健康巡检 + 自愈动作注册表 (reliability/heal.py)

- 巡检 inspect(): 基于 freshness.status_summary 找出过期/缺失资产 + db schema + 解析器可用数据
- 自愈 heal(): 只对 stale_policy='heal' 的资产按 ASSET_HEAL_PLAN 应用幂等动作 (每轮每动作只执行一次)
- 循环 run_cycle(): 巡检 → 自愈 → 复检(是否解决) → 记录时间线 heal_history.json (供 T-5.0.6 面板)
- 安全: 所有动作 try/except 捕获, dry_run 支持; 不抛异常, 不中断业务

存储: DATA_DIR/heal_history.json (原子写, 上限 200 条, 读路径在调用时解析以配合测试隔离)。
"""
import json
import logging
import os
import threading
from dataclasses import dataclass
from datetime import datetime

logger = logging.getLogger(__name__)

_WRITE_LOCK = threading.RLock()  # RLock: persist 整段(读-改-写)持有, _save_history 内重入
_HEAL_HISTORY_MAX = 200


@dataclass
class HealAction:
    """自愈动作: run() 必须幂等 (重复执行无害)"""
    name: str
    summary: str
    asset_id: str  # None = 全局动作
    run: callable  # () -> (ok: bool, detail: str)
    idempotent: bool = True


# ─── 内建自愈动作 (全部幂等) ───

def _reload_parser():
    from data_parser import parser
    parser.reload()
    return True, "解析器已重载"


def _rebuild_views():
    from views_aggregator import views_aggregator
    views_aggregator.reload()
    return True, "视图聚合器已重建"


def _rerun_migrations():
    import db
    db.migrate()          # 幂等建表/补列 (历史兼容入口)
    db.apply_migrations()  # V5.3.0 (T-5.3.0.5): 版本化迁移 (补列已收归 0005)
    ok = db.schema_ok()
    return ok, "数据库迁移已重跑" if ok else "迁移重跑后 schema 仍异常"


HEAL_REGISTRY: dict = {
    "reload_parser": HealAction("reload_parser", "重载数据解析器 (从 CSV/DB 重读)", None, _reload_parser),
    "rebuild_views": HealAction("rebuild_views", "重建视图聚合器 (含前向填充后重载)", "calendar_views", _rebuild_views),
    "rerun_migrations": HealAction("rerun_migrations", "重跑数据库迁移 (幂等补表补列)", None, _rerun_migrations),
}

# 资产 → 该资产过期时应执行的自愈动作 (只对 stale_policy='heal' 的资产生效)
ASSET_HEAL_PLAN: dict = {
    "strategy_holdings": ["reload_parser", "rebuild_views"],
    "calendar_views": ["rebuild_views"],
}


# ─── 持久化 (时间线) ───

def _heal_file() -> str:
    import paths
    return os.path.join(paths.DATA_DIR, "heal_history.json")


def _load_history() -> list:
    p = _heal_file()
    if not os.path.exists(p):
        return []
    try:
        with open(p, "r", encoding="utf-8") as f:
            data = json.load(f)
        return data if isinstance(data, list) else []
    except Exception as e:  # pragma: no cover - 防御损坏文件
        logger.warning("heal_history.json 读取失败, 按空处理: %s", e)
        return []


def _save_history(store: list) -> None:
    p = _heal_file()
    tmp = p + ".tmp"
    with _WRITE_LOCK:
        with open(tmp, "w", encoding="utf-8") as f:
            json.dump(store, f, ensure_ascii=False, indent=2)
        os.replace(tmp, p)


def persist(records: list, max_len: int = None) -> None:
    """追加自愈记录到时间线 (超出上限截断尾部)"""
    cap = max_len or _HEAL_HISTORY_MAX
    with _WRITE_LOCK:  # T-5.0.4: 读-改-写整段加锁, 防并发丢记录
        store = _load_history()
        store.extend(records)
        _save_history(store[-cap:])


def heal_history(limit: int = 100) -> list:
    return _load_history()[-limit:]


# ─── 巡检 ───

def inspect(now: datetime = None, calendar=None) -> list:
    """健康巡检 → findings 列表 (不抛异常)

    每项: {kind, severity(info/warning/error), ...}
    kind ∈ stale_asset | db_schema | no_data | inspection_error
    """
    from reliability import freshness
    now = now or datetime.now()
    findings = []
    # 1) 数据资产新鲜度
    try:
        s = freshness.status_summary(now=now, calendar=calendar)
        for item in s["items"]:
            if item["status"] != "fresh":
                findings.append({
                    "kind": "stale_asset",
                    "severity": "warning" if item["status"] == "stale" else "info",
                    "asset_id": item["asset_id"],
                    "name": item["name"],
                    "status": item["status"],
                    "stale_policy": item["stale_policy"],
                    "expected_latest": item["expected_latest"],
                    "latest_date": item["latest_date"],
                    "last_update": item["last_update"],
                })
    except Exception as e:
        findings.append({"kind": "inspection_error", "severity": "error", "detail": f"新鲜度巡检异常: {e}"})
    # 2) 数据库 schema
    try:
        import db
        if not db.schema_ok():
            findings.append({"kind": "db_schema", "severity": "error", "detail": "数据库 schema 异常"})
    except Exception as e:
        findings.append({"kind": "db_schema", "severity": "error", "detail": f"db 检查异常: {e}"})
    # 3) 解析器可用数据
    try:
        from data_parser import parser
        if not parser.get_available_dates():
            findings.append({"kind": "no_data", "severity": "error", "detail": "解析器无可用交易日"})
    except Exception as e:
        findings.append({"kind": "no_data", "severity": "error", "detail": f"解析器异常: {e}"})
    return findings


# ─── 自愈 ───

def heal(findings: list, dry_run: bool = False, now: datetime = None) -> list:
    """按 findings 应用自愈动作 (幂等: 每轮每个动作只执行一次)

    只处理 stale_asset 且 stale_policy=='heal' 的资产, 按其 ASSET_HEAL_PLAN 执行。
    返回记录列表, 每项含 ok/detail; 动作异常被捕获, 不中断。
    """
    now = now or datetime.now()
    records = []
    applied = set()
    for f in findings:
        if f.get("kind") != "stale_asset" or f.get("stale_policy") != "heal":
            continue
        plan = ASSET_HEAL_PLAN.get(f.get("asset_id"), [])
        for action_name in plan:
            if action_name in applied:  # 幂等: 每轮只执行一次
                continue
            applied.add(action_name)
            action = HEAL_REGISTRY.get(action_name)
            rec = {
                "ts": now.isoformat(timespec="seconds"),
                "action": action_name,
                "summary": action.summary if action else f"未知动作 {action_name}",
                "asset_id": f.get("asset_id"),
                "target": f.get("status"),
                "dry_run": dry_run,
                "ok": None,
                "detail": "",
                "resolved": None,
            }
            if action is None:
                rec["ok"] = False
                rec["detail"] = f"未注册的自愈动作: {action_name}"
            elif dry_run:
                rec["ok"] = True
                rec["detail"] = "dry-run 未执行"
            else:
                try:
                    ok, detail = action.run()
                    rec["ok"] = bool(ok)
                    rec["detail"] = detail
                except Exception as e:
                    rec["ok"] = False
                    rec["detail"] = f"执行异常: {e}"
            records.append(rec)
    return records


# ─── 巡检 + 自愈循环 ───

def run_cycle(now: datetime = None, calendar=None, dry_run: bool = False) -> dict:
    """执行一轮 巡检→自愈→复检→记录时间线。

    返回摘要: {ts, dry_run, findings, findings_count, heal_attempted, heal_ok,
              heal_failed, resolved, still_affected, healthy}
    - healthy: 无 error 级 finding 且没有仍未解决的受影响资产
    """
    from reliability import freshness
    now = now or datetime.now()
    findings = inspect(now=now, calendar=calendar)
    healable = [f for f in findings if f.get("stale_policy") == "heal"]
    records = heal(findings, dry_run=dry_run, now=now)

    still = []
    if not dry_run:
        try:
            post = freshness.status_summary(now=now, calendar=calendar)
            by_id = {i["asset_id"]: i["status"] for i in post["items"]}
            still = [f["asset_id"] for f in healable if by_id.get(f["asset_id"]) != "fresh"]
            for rec in records:
                rec["resolved"] = bool(rec.get("ok")) and rec.get("asset_id") not in still
        except Exception:
            for rec in records:
                rec["resolved"] = None

    if records:
        try:
            persist(records)
        except Exception as e:  # pragma: no cover - 时间线写失败不致命
            logger.warning("自愈时间线写入失败: %s", e)

    errors = [f for f in findings if f.get("severity") == "error"]
    return {
        "ts": now.isoformat(timespec="seconds"),
        "dry_run": dry_run,
        "findings": findings,
        "findings_count": len(findings),
        "heal_attempted": len(records),
        "heal_ok": sum(1 for r in records if r.get("ok")),
        "heal_failed": sum(1 for r in records if r.get("ok") is False),
        "resolved": sum(1 for r in records if r.get("resolved")),
        "still_affected": still,
        "healthy": len(errors) == 0 and not still,
    }
