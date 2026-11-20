#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""执行计划 (v7.8 FR-7.8-2): 生成/导入/导出/跟踪买卖计划

对应上游 KHunter `strategy_execution_plan.py` + `trading_plan_generator.py`, 但修掉三处工程缺陷:
1. 上游方案存 `config/execution_plans/*.json`, 无归属、无鉴权、无审计 → 这里入 SQLite,
   按 owner 隔离, 状态流转与逐腿成交全部落 exec_plan_events 事件流;
2. 上游 `save()` 用"同名"做唯一性检查, 并发下可写重 → 这里用主键 id, 名称允许重复;
3. 上游 plan 只有配置(选股+择时组合), 没有可执行的买卖腿 → 这里 plan 带 legs(买入区间/止损/止盈/仓位),
   并支持成交回报回写组合持仓(复用 portfolio 存储, 不建第二份持仓)。

状态机:
    plan: draft → active → closed
          draft/active → cancelled (终态)
    leg : pending → filled / cancelled / expired (终态)
"""
import csv
import io
import logging
import re
import uuid
from datetime import datetime
from typing import Dict, List, Optional

import db

logger = logging.getLogger(__name__)

PLAN_STATUSES = ("draft", "active", "closed", "cancelled")
LEG_STATUSES = ("pending", "filled", "cancelled", "expired")
PLAN_TRANSITIONS = {
    "draft": ("active", "cancelled"),
    "active": ("closed", "cancelled"),
    "closed": (),
    "cancelled": (),
}
SIDES = ("buy", "sell")
MAX_LEGS = 50
CSV_HEADER = ["symbol", "name", "side", "buy_low", "buy_high", "position_ratio",
              "stop_loss", "take_profit", "note"]
_SYMBOL_RE = re.compile(r"^(\d{6})(\.(SH|SZ|BJ))?$", re.IGNORECASE)

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS exec_plans ("
    " id TEXT PRIMARY KEY,"
    " owner TEXT NOT NULL DEFAULT '',"
    " name TEXT NOT NULL,"
    " plan_date TEXT NOT NULL DEFAULT '',"
    " hunt_date TEXT NOT NULL DEFAULT '',"
    " strategy TEXT NOT NULL DEFAULT '',"
    " status TEXT NOT NULL DEFAULT 'draft',"
    " source TEXT NOT NULL DEFAULT 'manual',"
    " exposure REAL NOT NULL DEFAULT 1.0,"
    " note TEXT NOT NULL DEFAULT '',"
    " operator TEXT NOT NULL DEFAULT '',"
    " created_at TEXT NOT NULL,"
    " updated_at TEXT NOT NULL)",
    "CREATE TABLE IF NOT EXISTS exec_plan_legs ("
    " id INTEGER PRIMARY KEY AUTOINCREMENT,"
    " plan_id TEXT NOT NULL,"
    " seq INTEGER NOT NULL DEFAULT 0,"
    " symbol TEXT NOT NULL,"
    " name TEXT NOT NULL DEFAULT '',"
    " side TEXT NOT NULL DEFAULT 'buy',"
    " buy_low REAL NOT NULL DEFAULT 0,"
    " buy_high REAL NOT NULL DEFAULT 0,"
    " position_ratio REAL NOT NULL DEFAULT 0.05,"
    " stop_loss REAL NOT NULL DEFAULT 0,"
    " take_profit REAL NOT NULL DEFAULT 0,"
    " status TEXT NOT NULL DEFAULT 'pending',"
    " filled_price REAL,"
    " filled_qty REAL,"
    " filled_at TEXT,"
    " note TEXT NOT NULL DEFAULT '')",
    "CREATE TABLE IF NOT EXISTS exec_plan_events ("
    " id INTEGER PRIMARY KEY AUTOINCREMENT,"
    " plan_id TEXT NOT NULL,"
    " leg_id INTEGER,"
    " event TEXT NOT NULL,"
    " detail TEXT NOT NULL DEFAULT '',"
    " operator TEXT NOT NULL DEFAULT '',"
    " ts TEXT NOT NULL)",
    "CREATE INDEX IF NOT EXISTS idx_exec_legs_plan ON exec_plan_legs(plan_id, seq)",
    "CREATE INDEX IF NOT EXISTS idx_exec_events_plan ON exec_plan_events(plan_id, id)",
)


class PlanError(ValueError):
    """计划非法输入/非法状态流转"""


def _now() -> str:
    return datetime.now().strftime("%Y-%m-%dT%H:%M:%S")


def _ensure_tables():
    with db._db_lock:
        conn = db.get_conn()
        try:
            for sql in _SCHEMA:
                conn.execute(sql)
            conn.commit()
        finally:
            conn.close()


def _audit(action: str, owner: str, detail: Dict):
    """全局安全审计(尽力而为): 与 exec_plan_events 双层留痕"""
    try:
        from audit_log import log
        log(action, owner, detail)
    except Exception as exc:  # 审计失败不阻断业务, 但必须留日志
        logger.warning("execution audit 失败(%s): %s", action, exc)


def _event(conn, plan_id: str, event: str, detail: str = "",
           operator: str = "", leg_id: Optional[int] = None):
    conn.execute(
        "INSERT INTO exec_plan_events (plan_id,leg_id,event,detail,operator,ts)"
        " VALUES (?,?,?,?,?,?)", (plan_id, leg_id, event, detail, operator, _now()))


# ─── 校验 ─────────────────────────────────────────────────────

def _num(value, field: str, allow_zero: bool = False) -> float:
    try:
        v = float(value)
    except (TypeError, ValueError):
        raise PlanError(f"{field} 必须为数字") from None
    if v < 0 or (v == 0 and not allow_zero):
        raise PlanError(f"{field} 必须{'非负' if allow_zero else '为正数'}")
    return v


def normalize_symbol(raw) -> str:
    """6 位代码(可带 .SH/.SZ/.BJ 后缀), 统一大写; 其它形式显式拒绝"""
    s = str(raw or "").strip().upper()
    if not _SYMBOL_RE.match(s):
        raise PlanError(f"股票代码非法: {raw}")
    return s


def _normalize_leg(leg: Dict, seq: int) -> Dict:
    side = str(leg.get("side") or "buy").lower()
    if side not in SIDES:
        raise PlanError(f"方向须为 buy/sell: {side}")
    low = _num(leg.get("buy_low"), "买入下沿")
    high = _num(leg.get("buy_high", low), "买入上沿")
    if high < low:
        raise PlanError("买入上沿不得低于下沿")
    ratio = _num(leg.get("position_ratio", 0.05), "仓位比例")
    if ratio > 1:
        raise PlanError("仓位比例不得超过 1")
    stop = _num(leg.get("stop_loss", 0), "止损价", allow_zero=True)
    take = _num(leg.get("take_profit", 0), "止盈价", allow_zero=True)
    if side == "buy":
        if stop and stop >= low:
            raise PlanError("止损价必须低于买入下沿")
        if take and take <= high:
            raise PlanError("止盈价必须高于买入上沿")
    return {
        "seq": seq,
        "symbol": normalize_symbol(leg.get("symbol")),
        "name": str(leg.get("name") or "").strip(),
        "side": side,
        "buy_low": round(low, 2),
        "buy_high": round(high, 2),
        "position_ratio": round(ratio, 4),
        "stop_loss": round(stop, 2),
        "take_profit": round(take, 2),
        "note": str(leg.get("note") or "").strip(),
    }


# ─── 创建 / 查询 ──────────────────────────────────────────────

def create_plan(payload: Dict, owner: str, operator: str = "") -> Dict:
    """创建计划(draft)。legs 逐条校验, 任一条非法则整单拒绝(不做半截写入)"""
    _ensure_tables()
    name = str(payload.get("name") or "").strip()
    if not name:
        raise PlanError("计划名称不能为空")
    raw_legs = payload.get("legs") or []
    if not isinstance(raw_legs, list) or not raw_legs:
        raise PlanError("计划至少需要一条买卖腿")
    if len(raw_legs) > MAX_LEGS:
        raise PlanError(f"单计划买卖腿不得超过 {MAX_LEGS} 条")
    legs = [_normalize_leg(x, i) for i, x in enumerate(raw_legs)]
    exposure = payload.get("exposure", 1.0)
    try:
        exposure = min(max(float(exposure), 0.0), 1.0)
    except (TypeError, ValueError):
        raise PlanError("exposure 必须为 0~1 的数字") from None

    plan_id = uuid.uuid4().hex[:12]
    ts = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(
                "INSERT INTO exec_plans (id,owner,name,plan_date,hunt_date,strategy,status,"
                "source,exposure,note,operator,created_at,updated_at)"
                " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",
                (plan_id, owner, name, str(payload.get("plan_date") or ""),
                 str(payload.get("hunt_date") or ""), str(payload.get("strategy") or ""),
                 "draft", str(payload.get("source") or "manual"), round(exposure, 4),
                 str(payload.get("note") or ""), operator or owner, ts, ts))
            for leg in legs:
                conn.execute(
                    "INSERT INTO exec_plan_legs (plan_id,seq,symbol,name,side,buy_low,buy_high,"
                    "position_ratio,stop_loss,take_profit,note) VALUES (?,?,?,?,?,?,?,?,?,?,?)",
                    (plan_id, leg["seq"], leg["symbol"], leg["name"], leg["side"],
                     leg["buy_low"], leg["buy_high"], leg["position_ratio"],
                     leg["stop_loss"], leg["take_profit"], leg["note"]))
            _event(conn, plan_id, "create", f"{len(legs)} 条腿, 来源 {payload.get('source') or 'manual'}",
                   operator or owner)
            conn.commit()
        finally:
            conn.close()
    _audit("exec_plan_create", owner,
           {"plan_id": plan_id, "legs": len(legs), "strategy": payload.get("strategy")})
    return get_plan(plan_id, owner)


def list_plans(owner: str, status: Optional[str] = None, limit: int = 50) -> List[Dict]:
    _ensure_tables()
    n = max(1, min(int(limit), 200))
    sql = ("SELECT p.*, (SELECT COUNT(*) FROM exec_plan_legs l WHERE l.plan_id = p.id)"
           " AS leg_count FROM exec_plans p WHERE p.owner = ?")
    args: list = [owner]
    if status:
        sql += " AND p.status = ?"
        args.append(status)
    sql += " ORDER BY p.updated_at DESC, p.created_at DESC LIMIT ?"
    args.append(n)
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(sql, tuple(args)).fetchall()
        finally:
            conn.close()
    return [dict(r) for r in rows]


def get_plan(plan_id: str, owner: str) -> Optional[Dict]:
    """读取计划(含腿与事件流); 非本人计划返回 None(不泄露存在性)"""
    _ensure_tables()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute("SELECT * FROM exec_plans WHERE id = ? AND owner = ?",
                               (plan_id, owner)).fetchone()
            if not row:
                return None
            legs = conn.execute("SELECT * FROM exec_plan_legs WHERE plan_id = ?"
                                " ORDER BY seq", (plan_id,)).fetchall()
            events = conn.execute("SELECT * FROM exec_plan_events WHERE plan_id = ?"
                                 " ORDER BY id", (plan_id,)).fetchall()
        finally:
            conn.close()
    plan = dict(row)
    plan["legs"] = [dict(x) for x in legs]
    plan["events"] = [dict(x) for x in events]
    plan["filled_ratio"] = round(
        sum(_num_leg(leg.get("position_ratio"))
            for leg in plan["legs"] if leg["status"] == "filled"), 4)
    return plan


def _num_leg(value) -> float:
    try:
        return float(value or 0)
    except (TypeError, ValueError):
        return 0.0


# ─── 状态流转 ─────────────────────────────────────────────────

def set_status(plan_id: str, owner: str, status: str, operator: str = "",
               reason: str = "") -> Dict:
    _ensure_tables()
    if status not in PLAN_STATUSES:
        raise PlanError(f"未知计划状态: {status}")
    plan = get_plan(plan_id, owner)
    if not plan:
        raise PlanError("计划不存在")
    if status == plan["status"]:
        return plan
    if status not in PLAN_TRANSITIONS.get(plan["status"], ()):
        raise PlanError(f"非法状态流转: {plan['status']} → {status}")
    ts = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("UPDATE exec_plans SET status = ?, updated_at = ? WHERE id = ?",
                         (status, ts, plan_id))
            _event(conn, plan_id, f"status:{status}", reason or "", operator or owner)
            conn.commit()
        finally:
            conn.close()
    _audit("exec_plan_status", owner, {"plan_id": plan_id, "from": plan["status"], "to": status})
    return get_plan(plan_id, owner)


def fill_leg(plan_id: str, leg_id: int, owner: str, price: float, quantity: float,
             operator: str = "", sync_portfolio: bool = True) -> Dict:
    """成交回报: 仅 active 计划可回报; 可选同步写入组合持仓与调仓流水(复用 portfolio 存储)"""
    _ensure_tables()
    plan = get_plan(plan_id, owner)
    if not plan:
        raise PlanError("计划不存在")
    if plan["status"] != "active":
        raise PlanError(f"仅 active 计划可回报成交(当前 {plan['status']})")
    leg = next((x for x in plan["legs"] if int(x["id"]) == int(leg_id)), None)
    if not leg:
        raise PlanError("买卖腿不存在")
    if leg["status"] != "pending":
        raise PlanError(f"该腿已处于 {leg['status']}, 不可重复回报")
    px = _num(price, "成交价")
    qty = _num(quantity, "成交数量")
    ts = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("UPDATE exec_plan_legs SET status='filled', filled_price=?,"
                         " filled_qty=?, filled_at=? WHERE id = ? AND plan_id = ?",
                         (round(px, 4), round(qty, 4), ts, int(leg_id), plan_id))
            _event(conn, plan_id, "leg_filled", f"{leg['symbol']} {px}×{qty}",
                   operator or owner, int(leg_id))
            conn.commit()
        finally:
            conn.close()
    synced = False
    if sync_portfolio:
        try:
            db.portfolio_apply_trade(owner, leg["symbol"], leg["name"] or leg["symbol"],
                                     leg["side"], round(px, 4), round(qty, 4))
            db.portfolio_add_trade(owner, leg["symbol"], leg["name"] or leg["symbol"],
                                   leg["side"], round(px, 4), round(qty, 4),
                                   ts[:10], f"执行计划 {plan_id}")
            synced = True
        except Exception as exc:
            logger.warning("成交回写组合失败(计划 %s 腿 %s): %s", plan_id, leg_id, exc)
    _audit("exec_plan_fill", owner,
           {"plan_id": plan_id, "leg_id": leg_id, "symbol": leg["symbol"], "price": px,
            "quantity": qty, "portfolio_synced": synced})
    out = get_plan(plan_id, owner)
    out["portfolio_synced"] = synced
    return out


def cancel_leg(plan_id: str, leg_id: int, owner: str, operator: str = "",
               reason: str = "") -> Dict:
    _ensure_tables()
    plan = get_plan(plan_id, owner)
    if not plan:
        raise PlanError("计划不存在")
    leg = next((x for x in plan["legs"] if int(x["id"]) == int(leg_id)), None)
    if not leg:
        raise PlanError("买卖腿不存在")
    if leg["status"] != "pending":
        raise PlanError(f"该腿已处于 {leg['status']}, 不可取消")
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("UPDATE exec_plan_legs SET status='cancelled' WHERE id = ? AND plan_id = ?",
                         (int(leg_id), plan_id))
            _event(conn, plan_id, "leg_cancelled", reason or "", operator or owner, int(leg_id))
            conn.commit()
        finally:
            conn.close()
    return get_plan(plan_id, owner)


# ─── 生成 / 交换 ──────────────────────────────────────────────

def build_payload_from_scan(scan: Dict, name: str = "", exposure: float = 1.0,
                            position_ratio: float = 0.05, only_near: bool = False,
                            max_legs: int = MAX_LEGS) -> Dict:
    """把狩猎场扫描结果转成计划入参: 只取可交易(未破位)的候选, 破位股不入计划"""
    items = [x for x in (scan.get("items") or []) if x.get("position") != "broken"]
    if only_near:
        items = [x for x in items if x.get("position") == "near"]
    items = items[:max(1, int(max_legs))]
    legs = [{
        "symbol": x["symbol"], "name": x.get("name") or "", "side": "buy",
        "buy_low": x["buy_low"], "buy_high": x["buy_high"],
        "position_ratio": position_ratio, "stop_loss": x["stop_loss"],
        "take_profit": x["take_profit"],
        "note": f"{x.get('position_label') or ''} 支撑{x['support_level']}({x['support_method']})",
    } for x in items]
    return {
        "name": name or f"狩猎计划 {scan.get('hunt_date') or scan.get('date') or ''}".strip(),
        "plan_date": scan.get("trade_date") or scan.get("date") or "",
        "hunt_date": scan.get("trade_date") or scan.get("date") or "",
        "strategy": scan.get("strategy") or "",
        "source": "hunting",
        "exposure": exposure,
        "legs": legs,
    }


def export_csv(plan: Dict) -> str:
    """导出为交换 CSV(含 plan 元信息注脚), 供 PTrade 等外部通道人工确认后导入"""
    buf = io.StringIO()
    w = csv.writer(buf)
    w.writerow(CSV_HEADER)
    for leg in plan.get("legs") or []:
        w.writerow([leg["symbol"], leg.get("name") or "", leg["side"], leg["buy_low"],
                    leg["buy_high"], leg["position_ratio"], leg["stop_loss"],
                    leg["take_profit"], leg.get("note") or ""])
    w.writerow([])
    w.writerow([f"# plan={plan['id']} name={plan['name']} status={plan['status']}"]
               + [""] * (len(CSV_HEADER) - 1))
    w.writerow([f"# exposure={plan.get('exposure')} generated_at={_now()}"]
               + [""] * (len(CSV_HEADER) - 1))
    return buf.getvalue()


def import_csv(text: str, owner: str, operator: str = "", name: str = "",
               plan_date: str = "") -> Dict:
    """从交换 CSV 建计划; 允许 # 注释行与空行, 表头必须与导出格式一致"""
    reader = csv.reader(io.StringIO(text or ""))
    rows = [r for r in reader if r and any(str(c).strip() for c in r)
            and not str(r[0]).strip().startswith("#")]
    if not rows:
        raise PlanError("CSV 为空或无有效行")
    header = [str(c).strip().lower() for c in rows[0]]
    missing = [c for c in ("symbol", "buy_low") if c not in header]
    if missing:
        raise PlanError(f"CSV 表头缺少字段: {', '.join(missing)}")
    idx = {c: header.index(c) for c in CSV_HEADER if c in header}
    legs = []
    for r in rows[1:]:
        def pick(key, default=""):
            i = idx.get(key)
            return r[i] if i is not None and i < len(r) else default
        legs.append({
            "symbol": pick("symbol"), "name": pick("name"), "side": pick("side", "buy"),
            "buy_low": pick("buy_low"), "buy_high": pick("buy_high", pick("buy_low")),
            "position_ratio": pick("position_ratio", 0.05),
            "stop_loss": pick("stop_loss", 0), "take_profit": pick("take_profit", 0),
            "note": pick("note"),
        })
    return create_plan({"name": name or f"导入计划 {datetime.now():%Y-%m-%d %H:%M}",
                        "plan_date": plan_date, "source": "import", "legs": legs},
                       owner, operator)


def plan_stats(owner: str) -> Dict:
    """执行计划概览: 各状态计数 + 待成交腿数(首页卡片用)"""
    _ensure_tables()
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute("SELECT status, COUNT(*) AS n FROM exec_plans"
                                " WHERE owner = ? GROUP BY status", (owner,)).fetchall()
            pending = conn.execute(
                "SELECT COUNT(*) AS n FROM exec_plan_legs l JOIN exec_plans p"
                " ON p.id = l.plan_id WHERE p.owner = ? AND l.status = 'pending'",
                (owner,)).fetchone()
        finally:
            conn.close()
    counts = {s: 0 for s in PLAN_STATUSES}
    for r in rows:
        counts[str(r["status"])] = int(r["n"])
    return {"counts": counts, "total": sum(counts.values()),
            "pending_legs": int(pending["n"]) if pending else 0}
