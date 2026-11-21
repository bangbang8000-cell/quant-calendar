#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""股票级受控入库 (v7.12 / PRD §6.5.2 + FR-7.4-9 增强)

策略级入库已有 `show_in_calendar` 开关; 本模块补"股票级"这一层:
用户在日历里勾选个股 → 落 `custom_selections` 表 → 读侧合并进当日持仓。

设计要点
- 一个 (user, date, strategy_id) 一行, symbols_json 存该行的手工勾选清单;
  重复提交即覆盖(幂等), 不产生重复行。
- symbol 统一归一化为 `600000.SH` 形态并校验; 非法代码直接拒绝, 不做"猜一个"降级。
- 所有写操作落 audit_log(与 market / 参数锁定同源), 便于回溯"谁在何时加了哪只票"。
- `custom_selections` 是**人工输入**, 与策略产出分开展示(读侧用 strategy_id='custom_selection'),
  绝不覆盖策略自己的持仓, 避免把人工票误当成策略信号。
"""
import json
import logging
import re
import time
import uuid
from typing import Dict, List, Optional

import db

logger = logging.getLogger(__name__)

# 读侧合并用的固定分组 id(与策略 id 不可能冲突: 策略 id 由注册表约束)
MANUAL_GROUP_ID = "custom_selection"
MANUAL_GROUP_NAME = "手动勾选"

_SYMBOL_RE = re.compile(r"^(\d{6})(?:\.(SH|SZ|BJ))?$")
_EXCHANGE_BY_PREFIX = (
    ("6", "SH"), ("9", "SH"),          # 沪市 A/B
    ("0", "SZ"), ("2", "SZ"), ("3", "SZ"),  # 深市主板/中小/创业
    ("4", "BJ"), ("8", "BJ"),          # 北交所
)

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS custom_selections ("
    " id TEXT PRIMARY KEY,"
    " user TEXT NOT NULL DEFAULT '',"
    " date TEXT NOT NULL,"
    " strategy_id TEXT NOT NULL DEFAULT '',"
    " symbols_json TEXT NOT NULL DEFAULT '[]',"
    " note TEXT NOT NULL DEFAULT '',"
    " created_at TEXT NOT NULL,"
    " UNIQUE(user, date, strategy_id))",
    "CREATE INDEX IF NOT EXISTS idx_custom_sel_date ON custom_selections(date, user)",
)


class CustomSelectionError(ValueError):
    """入参非法(日期格式 / 股票代码 / 空清单)"""


def _now() -> str:
    return time.strftime("%Y-%m-%dT%H:%M:%S")


def _ensure_table():
    with db._db_lock:
        conn = db.get_conn()
        try:
            for sql in _SCHEMA:
                conn.execute(sql)
            conn.commit()
        finally:
            conn.close()


def normalize_symbol(raw) -> str:
    """归一化股票代码为 `600000.SH`; 无后缀时按首位数字推断交易所"""
    s = str(raw or "").strip().upper()
    m = _SYMBOL_RE.match(s)
    if not m:
        raise CustomSelectionError(f"非法股票代码: {raw!r} (需 6 位数字, 可带 .SH/.SZ/.BJ)")
    code, suffix = m.group(1), m.group(2)
    if suffix:
        return f"{code}.{suffix}"
    for prefix, ex in _EXCHANGE_BY_PREFIX:
        if code.startswith(prefix):
            return f"{code}.{ex}"
    raise CustomSelectionError(f"无法推断交易所: {raw!r} (请显式带 .SH/.SZ/.BJ)")


def _normalize_date(raw) -> str:
    d = str(raw or "").strip()[:10]
    try:
        time.strptime(d, "%Y-%m-%d")
    except ValueError:
        raise CustomSelectionError(f"非法日期: {raw!r} (需 YYYY-MM-DD)")
    return d


def _audit(action: str, actor: str, detail: Dict):
    try:
        from audit_log import log
        log(action=action, actor=actor or "-", detail=detail)
    except Exception as exc:  # 审计失败不阻塞主流程, 但要留日志
        logger.warning("custom_selection audit 失败(%s): %s", action, exc)


def _row(row) -> Dict:
    """sqlite3.Row → dict, 并反序列化 symbols_json"""
    item = dict(row)
    try:
        symbols = json.loads(item.get("symbols_json") or "[]")
    except (TypeError, ValueError):
        symbols = []
    return {
        "id": item.get("id", ""),
        "user": item.get("user", ""),
        "date": item.get("date", ""),
        "strategy_id": item.get("strategy_id", ""),
        "symbols": symbols if isinstance(symbols, list) else [],
        "note": item.get("note") or "",
        "created_at": item.get("created_at", ""),
    }


def _fetch(sql: str, params=()):
    """只读查询: 自动开关连接(与 marketplace 同范式, row_factory=sqlite3.Row)"""
    conn = db.get_conn()
    try:
        return conn.execute(sql, params).fetchall()
    finally:
        conn.close()


def list_selections(date: Optional[str] = None, user: Optional[str] = None,
                    strategy_id: Optional[str] = None) -> List[Dict]:
    """查询勾选记录(全部条件为 AND); 无记录返回空列表"""
    _ensure_table()
    where, params = [], []
    if date:
        where.append("date = ?")
        params.append(_normalize_date(date))
    if user is not None:
        where.append("user = ?")
        params.append(str(user))
    if strategy_id is not None:
        where.append("strategy_id = ?")
        params.append(str(strategy_id))
    sql = "SELECT * FROM custom_selections"
    if where:
        sql += " WHERE " + " AND ".join(where)
    sql += " ORDER BY date DESC, created_at DESC"
    with db._db_lock:
        rows = _fetch(sql, tuple(params))
    return [_row(r) for r in rows]


def upsert_selection(user: str, date: str, symbols: List[str],
                     strategy_id: str = "", note: str = "") -> Dict:
    """写入/覆盖一组勾选(同一 user+date+strategy_id 只保留最新一份)"""
    _ensure_table()
    d = _normalize_date(date)
    sid = str(strategy_id or "").strip()
    if sid == MANUAL_GROUP_ID:
        raise CustomSelectionError(f"strategy_id 不能占用保留名 {MANUAL_GROUP_ID!r}")
    if not isinstance(symbols, (list, tuple)):
        raise CustomSelectionError("symbols 必须是数组")
    normalized: List[str] = []
    for s in symbols:
        code = normalize_symbol(s)
        if code not in normalized:
            normalized.append(code)
    if not normalized:
        raise CustomSelectionError("symbols 不能为空 (清空请用删除接口)")

    actor = str(user or "").strip()
    payload = json.dumps(normalized, ensure_ascii=False)
    now = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            existing = conn.execute(
                "SELECT id FROM custom_selections WHERE user = ? AND date = ? AND strategy_id = ?",
                (actor, d, sid)).fetchall()
            if existing:
                rec_id = existing[0][0]
                conn.execute(
                    "UPDATE custom_selections SET symbols_json = ?, note = ? WHERE id = ?",
                    (payload, str(note or ""), rec_id))
            else:
                rec_id = "cs_" + uuid.uuid4().hex[:16]
                conn.execute(
                    "INSERT INTO custom_selections"
                    " (id, user, date, strategy_id, symbols_json, note, created_at)"
                    " VALUES (?, ?, ?, ?, ?, ?, ?)",
                    (rec_id, actor, d, sid, payload, str(note or ""), now))
            conn.commit()
        finally:
            conn.close()
    _audit("custom_selection_upsert", actor,
           {"date": d, "strategy_id": sid, "symbols": normalized, "count": len(normalized)})
    rows = list_selections(date=d, user=actor, strategy_id=sid)
    if rows:
        return rows[0]
    return {"id": rec_id, "user": actor, "date": d, "strategy_id": sid,
            "symbols": normalized, "note": str(note or ""), "created_at": now}


def delete_selection(user: str, date: str, symbol: Optional[str] = None,
                     strategy_id: Optional[str] = None) -> Dict:
    """删除勾选: 给 symbol 只摘掉该票, 不给则删整行"""
    _ensure_table()
    d = _normalize_date(date)
    actor = str(user or "").strip()
    sid = None if strategy_id is None else str(strategy_id)
    with db._db_lock:
        conn = db.get_conn()
        try:
            sql = "SELECT * FROM custom_selections WHERE user = ? AND date = ?"
            params = [actor, d]
            if sid is not None:
                sql += " AND strategy_id = ?"
                params.append(sid)
            rows = [_row(x) for x in conn.execute(sql, tuple(params)).fetchall()]
            if not rows:
                raise CustomSelectionError("未找到对应的勾选记录")
            removed = 0
            if symbol is None:
                conn.execute("DELETE FROM custom_selections WHERE user = ? AND date = ?"
                             + (" AND strategy_id = ?" if sid is not None else ""),
                             tuple(params))
                removed = sum(len(r.get("symbols") or []) for r in rows)
            else:
                target = normalize_symbol(symbol)
                for rec in rows:
                    syms = rec.get("symbols") or []
                    if target not in syms:
                        continue
                    left = [x for x in syms if x != target]
                    removed += 1
                    if left:
                        conn.execute("UPDATE custom_selections SET symbols_json = ? WHERE id = ?",
                                     (json.dumps(left, ensure_ascii=False), rec["id"]))
                    else:
                        conn.execute("DELETE FROM custom_selections WHERE id = ?", (rec["id"],))
            conn.commit()
        finally:
            conn.close()
    if not removed:
        raise CustomSelectionError("未找到对应的勾选记录")
    _audit("custom_selection_delete", actor,
           {"date": d, "strategy_id": sid, "symbol": symbol, "removed": removed})
    return {"deleted": removed, "date": d}


def merge_into_view(result: Dict, date: str) -> Dict:
    """读侧合并(日历主视图 /api/view/*): 把当日勾选并入 stocks, 并打 manual 标记。

    - 已在策略持仓里的股票: 只加 manual 标记 + "手动勾选" 策略名, 不重复成一行;
    - 只在手工清单里的股票: 作为 status='new' 的新条目追加(首次出现=当日);
    - 顶层加 manual_count, 便于前端做徽标/筛选。
    """
    try:
        rows = list_selections(date=date)
    except Exception as exc:
        logger.warning("自定义勾选读取失败, 视图按无勾选返回: %s", exc)
        return result
    codes: List[str] = []
    for r in rows:
        for s in r.get("symbols") or []:
            if s not in codes:
                codes.append(s)
    if not codes:
        return result

    stocks = list(result.get("stocks") or [])
    by_code = {}
    for s in stocks:
        by_code[str(s.get("code") or "").upper()] = s

    for code in codes:
        key = code.upper()
        if key in by_code:
            item = by_code[key]
            item["manual"] = True
            names = item.get("strategies")
            if not isinstance(names, list):
                names = []
                item["strategies"] = names
            if MANUAL_GROUP_NAME not in names:
                names.append(MANUAL_GROUP_NAME)
                item["strategy_count"] = int(item.get("strategy_count") or 0) + 1
            continue
        name = code
        try:
            from stock_info import stock_manager
            name = stock_manager.get_name(code) or code
        except Exception:
            name = code
        entry = {
            "code": code, "name": name, "strategy_count": 1,
            "strategies": [MANUAL_GROUP_NAME], "status": "new",
            "days_count": 1, "first_appear": date, "last_appear": date,
            "manual": True,
        }
        stocks.append(entry)
        by_code[key] = entry

    out = dict(result or {})
    out["stocks"] = stocks
    out["manual_count"] = len(codes)
    return out


def merge_into_holdings(holdings: Dict, date: str, strategy_manager=None) -> Dict:
    """读侧合并: 把当日人工勾选作为独立分组并入持仓字典(不覆盖策略分组)"""
    try:
        rows = list_selections(date=date)
    except Exception as exc:
        logger.warning("自定义勾选读取失败, 日历按无勾选渲染: %s", exc)
        return holdings
    codes: List[str] = []
    for r in rows:
        for s in r.get("symbols") or []:
            if s not in codes:
                codes.append(s)
    if not codes:
        return holdings

    stocks = []
    for code in codes:
        name = code
        if strategy_manager is not None:
            try:
                name = strategy_manager.get_name(code) or code
            except Exception:
                name = code
        stocks.append({"code": code, "name": name})
    out = dict(holdings or {})
    out[MANUAL_GROUP_ID] = {
        "name": MANUAL_GROUP_NAME,
        "stocks": stocks,
        "count": len(stocks),
        "manual": True,
        "note": "; ".join(r.get("note") or "" for r in rows if r.get("note")),
    }
    return out
