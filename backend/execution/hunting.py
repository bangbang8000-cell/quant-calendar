#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""狩猎场 (v7.8 FR-7.8-1): 选股结果 → 支撑位比较 → 入库跟踪

链路:
1. 从 `data/holdings/{date}/{策略}持仓.csv` 取当日选股结果(日历唯一通道的产物, 不重复造池);
2. 经 DataPortal 取该批股票的日线, 截断到狩猎日(防前视);
3. 逐股算支撑位 → 现价与支撑位偏离 → 位置分类 → 买入区间/止损/止盈;
4. "入库跟踪" 落 hunting_tracks 表, 记录跟踪状态与依据, 形成 候选→计划→持仓 的前半段闭环。

上游对应: KHunter 狩猎场 + khunter_support_calculator + hunting_results。
差异: 上游把结果写入自建 hunting 表且无归属/无审计, 这里按 owner 隔离并保留支撑位依据(ref_date)。
"""
import csv
import logging
import os
from datetime import datetime, timedelta
from typing import Dict, List, Optional

import db
from paths import DATA_DIR

from .support import (POSITION_LABELS, SupportError, build_buy_plan, calc_support,
                      classify_distance, distance_to_support, method_for_strategy,
                      normalize_date, normalize_method)

logger = logging.getLogger(__name__)

HOLDINGS_ROOT = os.path.join(DATA_DIR, "holdings")
LOOKBACK_DAYS = 220          # 覆盖 ma20 + 关键日回溯余量
MAX_CANDIDATES = 300
TRACK_STATUSES = ("watching", "planned", "entered", "dropped", "closed")

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS hunting_tracks ("
    " id INTEGER PRIMARY KEY AUTOINCREMENT,"
    " owner TEXT NOT NULL DEFAULT '',"
    " symbol TEXT NOT NULL,"
    " name TEXT NOT NULL DEFAULT '',"
    " strategy TEXT NOT NULL DEFAULT '',"
    " hunt_date TEXT NOT NULL DEFAULT '',"
    " support_level REAL NOT NULL DEFAULT 0,"
    " support_method TEXT NOT NULL DEFAULT '',"
    " ref_close REAL NOT NULL DEFAULT 0,"
    " distance_pct REAL,"
    " position TEXT NOT NULL DEFAULT 'unknown',"
    " status TEXT NOT NULL DEFAULT 'watching',"
    " note TEXT NOT NULL DEFAULT '',"
    " operator TEXT NOT NULL DEFAULT '',"
    " created_at TEXT NOT NULL,"
    " updated_at TEXT NOT NULL,"
    " UNIQUE(owner, symbol, strategy, hunt_date))"
)


def _now() -> str:
    return datetime.now().strftime("%Y-%m-%dT%H:%M:%S")


def _ensure_table():
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute(_SCHEMA)
            conn.commit()
        finally:
            conn.close()


# ─── 选股结果读取 ─────────────────────────────────────────────

def resolve_holdings_date(date: str) -> Optional[str]:
    """给定日期无持仓目录时回退到最近一个 <= 该日的目录(非交易日/未运行时仍可用)"""
    target = normalize_date(date)
    if not os.path.isdir(HOLDINGS_ROOT):
        return None
    dirs = sorted(d for d in os.listdir(HOLDINGS_ROOT)
                  if os.path.isdir(os.path.join(HOLDINGS_ROOT, d)))
    if not dirs:
        return None
    if target in dirs:
        return target
    earlier = [d for d in dirs if normalize_date(d) <= target]
    return earlier[-1] if earlier else dirs[-1]


def _strategy_of_filename(stem: str) -> str:
    """文件名 → 策略标识: 优先内置 sid, 否则按展示名反查, 兜底原样返回"""
    import strategy_governance as gov
    if stem in gov.BUILTIN_SIDS:
        return stem
    for sid in gov.BUILTIN_SIDS:
        if gov._display_name(sid) == stem:
            return sid
    return stem


def load_holdings(date: str, strategy: Optional[str] = None) -> Dict[str, List[str]]:
    """读取某日持仓矩阵, 返回 {策略标识: [股票代码...]}(仅取该日行, 值 >0 视为持有)"""
    day_dir = resolve_holdings_date(date)
    if not day_dir:
        return {}
    target = normalize_date(date)
    out: Dict[str, List[str]] = {}
    full = os.path.join(HOLDINGS_ROOT, day_dir)
    for fn in sorted(os.listdir(full)):
        if not fn.endswith(".csv"):
            continue
        sid = _strategy_of_filename(fn[:-4].replace("持仓", ""))
        if strategy and sid != strategy:
            continue
        path = os.path.join(full, fn)
        try:
            with open(path, encoding="utf-8-sig", errors="ignore") as f:
                reader = csv.reader(f)
                header = next(reader, None) or []
                codes = [c.strip() for c in header[1:]]
                for row in reader:
                    if not row or not row[0]:
                        continue
                    if normalize_date(row[0]) != target:
                        continue
                    held = []
                    for idx, cell in enumerate(row[1:]):
                        try:
                            if cell and float(cell) > 0 and idx < len(codes):
                                held.append(codes[idx])
                        except (TypeError, ValueError):
                            continue
                    out[sid] = held
                    break
        except OSError as exc:
            logger.warning("读取持仓 %s 失败: %s", path, exc)
    return out


def _stock_name(code: str) -> str:
    try:
        from stock_info import stock_manager
        return stock_manager.get_name(code) or ""
    except Exception:  # 名称非关键路径, 取不到就用代码
        return ""


# ─── 扫描 ─────────────────────────────────────────────────────

def _resolve_portal(portal=None):
    """优先真实 DataPortal; 注入 portal 时直接用(测试/离线)"""
    if portal is not None:
        return portal, True
    try:
        from strategy_sdk.data_portal import RealDataPortal
        return RealDataPortal(), True
    except Exception as exc:
        logger.warning("DataPortal 不可用, 狩猎场降级为空结果: %s", exc)
        return None, False


def scan(date: str, strategy: Optional[str] = None, method: Optional[str] = None,
         symbols: Optional[List[str]] = None, portal=None,
         band_pct: float = 0.02, stop_buffer: float = 0.05,
         take_profit_pct: float = 0.20, limit: int = MAX_CANDIDATES) -> Dict:
    """狩猎场扫描: 选股结果 → 支撑位比较。

    Returns:
        {"date","trade_date","date_adjusted","strategy","method","source","items","errors","degraded"}
        单股不可算时进入 errors(含原因), 不编造支撑位。
    """
    target = normalize_date(date)
    by_strategy = load_holdings(target, strategy)
    pool: List[str] = list(symbols or [])
    for codes in by_strategy.values():
        pool.extend(codes)
    pool = sorted({c for c in pool if c})[:max(1, int(limit))]
    base = {
        "date": target,
        "strategy": strategy or "",
        "method": normalize_method(method) if method else "",
        "source": "holdings" if by_strategy else ("explicit" if symbols else "none"),
        "items": [],
        "errors": [],
        "degraded": False,
    }
    if not pool:
        base["degraded"] = True
        base["message"] = "当日无选股结果, 请先运行策略或显式传入 symbols"
        return base

    portal_obj, ok = _resolve_portal(portal)
    if portal_obj is None:
        base["degraded"] = True
        base["message"] = "数据源不可用, 无法计算支撑位"
        return base
    base["source"] = "real" if ok and portal is None else "injected"

    start = (datetime.strptime(target, "%Y-%m-%d") - timedelta(days=LOOKBACK_DAYS)).strftime("%Y-%m-%d")
    try:
        panel = portal_obj.get_panel(["open", "high", "low", "close"], start, target, universe=pool)
    except Exception as exc:
        logger.warning("狩猎场取数失败: %s", exc)
        base["degraded"] = True
        base["message"] = f"取数失败: {exc}"
        return base

    if panel is None or len(panel) == 0:
        base["degraded"] = True
        base["message"] = "K 线为空(数据源无返回)"
        return base

    trade_date = _max_date(panel, target)
    base["trade_date"] = trade_date
    base["date_adjusted"] = trade_date != target

    for code in pool:
        item, err = _scan_one(panel, code, trade_date, strategy, method,
                              band_pct, stop_buffer, take_profit_pct)
        if item:
            base["items"].append(item)
        elif err:
            base["errors"].append({"symbol": code, "reason": err})
    base["items"].sort(key=lambda x: (x["position"] != "near",
                                      abs(x["distance_pct"] if x["distance_pct"] is not None else 9)))
    base["count"] = len(base["items"])
    base["error_count"] = len(base["errors"])
    return base


def _max_date(panel, target: str) -> str:
    """面板中 <= 目标的最近交易日"""
    if hasattr(panel.index, "get_level_values") and "date" in (panel.index.names or []):
        dates = [normalize_date(d) for d in panel.index.get_level_values("date").unique()]
    elif "date" in getattr(panel, "columns", []):
        dates = [normalize_date(d) for d in panel["date"].unique()]
    else:
        dates = []
    usable = [d for d in dates if d and d <= target]
    return max(usable) if usable else target


def _scan_one(panel, code: str, trade_date: str, strategy: Optional[str],
              method: Optional[str], band_pct: float, stop_buffer: float,
              take_profit_pct: float):
    """单股: 返回 (item, None) 或 (None, 失败原因)"""
    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
    try:
        frame = panel_to_desc_df(panel, code, fields=("open", "high", "low", "close"))
    except Exception as exc:
        return None, f"取单股面板失败: {exc}"
    if frame is None or len(frame) == 0:
        return None, "面板中无该股数据"
    frame = frame[frame["date"] <= trade_date]
    if frame.empty:
        return None, "狩猎日前无 K 线"
    close = _num(frame.iloc[0].get("close"))
    if not close:
        return None, "最新收盘价为空"
    try:
        info = calc_support(frame, method=method or method_for_strategy(strategy),
                            key_date=trade_date)
    except SupportError as exc:
        return None, str(exc)
    dist = distance_to_support(close, info["level"])
    position = classify_distance(dist)
    plan = build_buy_plan(close, info["level"], band_pct=band_pct,
                          stop_buffer=stop_buffer, take_profit_pct=take_profit_pct)
    return {
        "symbol": code,
        "name": _stock_name(code),
        "strategy": strategy or "",
        "hunt_date": trade_date,
        "close": plan["close"],
        "support_level": info["level"],
        "support_method": info["method"],
        "support_ref_date": info["ref_date"],
        "support_fallback": info["fallback"],
        "distance_pct": dist,
        "position": position,
        "position_label": POSITION_LABELS.get(position, position),
        "buy_low": plan["buy_low"],
        "buy_high": plan["buy_high"],
        "stop_loss": plan["stop_loss"],
        "take_profit": plan["take_profit"],
        "risk_reward": plan["risk_reward"],
    }, None


def _num(value):
    try:
        v = float(value)
    except (TypeError, ValueError):
        return None
    return v if v > 0 else None


# ─── 入库跟踪 ─────────────────────────────────────────────────

def add_tracks(items: List[Dict], owner: str, operator: str = "",
               default_status: str = "watching") -> Dict:
    """候选入库(hunting_tracks): 同 owner+symbol+strategy+hunt_date 幂等跳过"""
    _ensure_table()
    if default_status not in TRACK_STATUSES:
        default_status = "watching"
    added, skipped = 0, 0
    ts = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            for it in items or []:
                sym = str(it.get("symbol") or "").strip()
                if not sym:
                    continue
                cur = conn.execute(
                    "INSERT OR IGNORE INTO hunting_tracks"
                    " (owner,symbol,name,strategy,hunt_date,support_level,support_method,"
                    " ref_close,distance_pct,position,status,note,operator,created_at,updated_at)"
                    " VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
                    (owner, sym, str(it.get("name") or ""), str(it.get("strategy") or ""),
                     str(it.get("hunt_date") or ""), float(it.get("support_level") or 0),
                     str(it.get("support_method") or ""), float(it.get("close") or 0),
                     it.get("distance_pct"), str(it.get("position") or "unknown"),
                     str(it.get("status") or default_status), str(it.get("note") or ""),
                     operator or owner, ts, ts))
                if cur.rowcount:
                    added += 1
                else:
                    skipped += 1
            conn.commit()
        finally:
            conn.close()
    return {"added": added, "skipped": skipped, "total": added + skipped}


def list_tracks(owner: str, status: Optional[str] = None, limit: int = 100) -> List[Dict]:
    _ensure_table()
    n = max(1, min(int(limit), 500))
    sql = "SELECT * FROM hunting_tracks WHERE owner = ?"
    args: list = [owner]
    if status:
        sql += " AND status = ?"
        args.append(status)
    sql += " ORDER BY id DESC LIMIT ?"
    args.append(n)
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(sql, tuple(args)).fetchall()
        finally:
            conn.close()
    return [dict(r) for r in rows]


def update_track(track_id: int, owner: str, status: Optional[str] = None,
                 note: Optional[str] = None, operator: str = "") -> Optional[Dict]:
    """更新跟踪状态/备注; 返回更新后记录, 不存在或越权返回 None"""
    _ensure_table()
    if status and status not in TRACK_STATUSES:
        raise ValueError(f"未知跟踪状态: {status} (可选 {', '.join(TRACK_STATUSES)})")
    sets, args = [], []
    if status:
        sets.append("status = ?")
        args.append(status)
    if note is not None:
        sets.append("note = ?")
        args.append(str(note))
    if not sets:
        raise ValueError("无可更新字段")
    sets.append("updated_at = ?")
    args.append(_now())
    sets.append("operator = ?")
    args.append(operator or owner)
    args.extend([int(track_id), owner])
    with db._db_lock:
        conn = db.get_conn()
        try:
            cur = conn.execute(
                f"UPDATE hunting_tracks SET {', '.join(sets)} WHERE id = ? AND owner = ?",
                tuple(args))
            conn.commit()
            if not cur.rowcount:
                return None
            row = conn.execute("SELECT * FROM hunting_tracks WHERE id = ?",
                               (int(track_id),)).fetchone()
        finally:
            conn.close()
    return dict(row) if row else None


def delete_track(track_id: int, owner: str) -> bool:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            cur = conn.execute("DELETE FROM hunting_tracks WHERE id = ? AND owner = ?",
                               (int(track_id), owner))
            conn.commit()
            return bool(cur.rowcount)
        finally:
            conn.close()


def track_summary(owner: str) -> Dict:
    """跟踪概览: 各状态计数(首页/狩猎场顶部用)"""
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(
                "SELECT status, COUNT(*) AS n FROM hunting_tracks WHERE owner = ?"
                " GROUP BY status", (owner,)).fetchall()
        finally:
            conn.close()
    counts = {s: 0 for s in TRACK_STATUSES}
    for r in rows:
        counts[str(r["status"])] = int(r["n"])
    return {"counts": counts, "total": sum(counts.values())}
