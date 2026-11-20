#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""策略/案例市场 (v7.10 FR-7.10-1)

把"内置策略 + 用户沉淀的形态案例"变成可发布、可检索、可一键导入的资产池。
上游对应: KHunter 的 9 策略归档目录(仅软删除, 无版本、无归属、无导入契约)。

设计要点:
- 发布物是不可变快照(payload JSON), 版本号显式; 同 (kind, ref_id, version) 重复发布会覆盖并留痕,
  历史版本可按 version 取回(不做软删除式的"文件还在但信息已丢")。
- 只发布"能力", 不发布"别人的持仓/私有数据": 策略只带 type + params, 案例只带特征与标签。
- 导入即克隆: 策略生成新 variant(mk_*), 案例生成新 case_id; 原物支持删除不影响已导入副本。
- 全流程审计: publish/unpublish/import 都落 audit_log, 并累计 downloads 作为热度依据。
"""
import json
import logging
import time
import uuid
from typing import Dict, List, Optional

import db

logger = logging.getLogger(__name__)

KINDS = ("strategy", "pattern_case")
STATUSES = ("published", "archived")

_SCHEMA = (
    "CREATE TABLE IF NOT EXISTS market_items ("
    " id TEXT PRIMARY KEY,"
    " kind TEXT NOT NULL,"
    " ref_id TEXT NOT NULL,"
    " title TEXT NOT NULL,"
    " summary TEXT NOT NULL DEFAULT '',"
    " version TEXT NOT NULL DEFAULT '1.0.0',"
    " payload_json TEXT NOT NULL DEFAULT '{}',"
    " status TEXT NOT NULL DEFAULT 'published',"
    " author TEXT NOT NULL DEFAULT '',"
    " downloads INTEGER NOT NULL DEFAULT 0,"
    " created_at TEXT NOT NULL,"
    " updated_at TEXT NOT NULL,"
    " UNIQUE(kind, ref_id, version))",
    "CREATE INDEX IF NOT EXISTS idx_market_kind_status ON market_items(kind, status, updated_at)",
)


class MarketError(ValueError):
    """发布/导入非法(未知类型、引用不存在、已归档等)"""


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


def _audit(action: str, actor: str, detail: Dict):
    try:
        from audit_log import log
        log(action, actor, detail)
    except Exception as exc:
        logger.warning("market audit 失败(%s): %s", action, exc)


def _row(row) -> Dict:
    item = dict(row)
    try:
        item["payload"] = json.loads(item.pop("payload_json", "{}"))
    except (TypeError, ValueError):
        item["payload"] = {}
    return item


def _build_payload(kind: str, ref_id: str) -> Dict:
    """从本地存储派生发布物快照(只含能力, 不含私有数据)"""
    if kind == "strategy":
        import strategy_governance as gov
        from strategy_db import get_def
        d = get_def(ref_id)
        if d:
            return {"type": d.get("type") or ref_id, "params": d.get("params") or {},
                    "name": d.get("name") or ref_id}
        if ref_id in gov.BUILTIN_SIDS:
            return {"type": ref_id, "params": {}, "name": gov._display_name(ref_id)}
        raise MarketError(f"策略不存在: {ref_id}")
    if kind == "pattern_case":
        from pattern_match.store import get_case
        case = get_case(ref_id)
        if not case:
            raise MarketError(f"案例不存在: {ref_id}")
        return {"features": case.get("features") or {}, "tags": case.get("tags") or [],
                "lookback_days": case.get("lookback_days") or 25,
                "description": case.get("description") or "",
                "symbol": case.get("symbol") or "",
                "breakout_date": case.get("breakout_date") or ""}
    raise MarketError(f"未知发布类型: {kind} (可选 {', '.join(KINDS)})")


def publish_item(kind: str, ref_id: str, actor: str = "", title: str = "",
                 summary: str = "", version: str = "1.0.0",
                 payload: Optional[Dict] = None) -> Dict:
    """发布策略/案例; 同 (kind, ref_id, version) 覆盖并留痕"""
    _ensure_table()
    if kind not in KINDS:
        raise MarketError(f"未知发布类型: {kind} (可选 {', '.join(KINDS)})")
    ref = str(ref_id or "").strip()
    if not ref:
        raise MarketError("ref_id 不能为空")
    ver = str(version or "1.0.0").strip()
    body = payload if isinstance(payload, dict) else _build_payload(kind, ref)
    name = title.strip() or str(body.get("name") or ref)
    ts = _now()
    with db._db_lock:
        conn = db.get_conn()
        try:
            existing = conn.execute(
                "SELECT id FROM market_items WHERE kind = ? AND ref_id = ? AND version = ?",
                (kind, ref, ver)).fetchone()
            if existing:
                item_id = existing["id"]
                conn.execute(
                    "UPDATE market_items SET title=?, summary=?, payload_json=?, status='published',"
                    " author=?, updated_at=? WHERE id=?",
                    (name, summary.strip(), json.dumps(body, ensure_ascii=False, default=str),
                     actor, ts, item_id))
            else:
                item_id = uuid.uuid4().hex[:12]
                conn.execute(
                    "INSERT INTO market_items (id,kind,ref_id,title,summary,version,payload_json,"
                    "status,author,downloads,created_at,updated_at)"
                    " VALUES (?,?,?,?,?,?,?,?,?,0,?,?)",
                    (item_id, kind, ref, name, summary.strip(), ver,
                     json.dumps(body, ensure_ascii=False, default=str), "published", actor, ts, ts))
            conn.commit()
        finally:
            conn.close()
    _audit("market_publish", actor, {"item_id": item_id, "kind": kind, "ref_id": ref, "version": ver})
    return get_item(item_id) or {}


def list_items(kind: Optional[str] = None, keyword: Optional[str] = None,
               include_archived: bool = False, limit: int = 100) -> List[Dict]:
    _ensure_table()
    sql = "SELECT * FROM market_items WHERE 1=1"
    args: list = []
    if kind:
        sql += " AND kind = ?"
        args.append(kind)
    if not include_archived:
        sql += " AND status = 'published'"
    if keyword:
        sql += " AND (title LIKE ? OR summary LIKE ? OR ref_id LIKE ?)"
        like = f"%{keyword}%"
        args.extend([like, like, like])
    sql += " ORDER BY downloads DESC, updated_at DESC LIMIT ?"
    args.append(max(1, min(int(limit), 500)))
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute(sql, tuple(args)).fetchall()
        finally:
            conn.close()
    return [_row(r) for r in rows]


def get_item(item_id: str, count_view: bool = False) -> Optional[Dict]:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            row = conn.execute("SELECT * FROM market_items WHERE id = ?", (item_id,)).fetchone()
            if not row:
                return None
            if count_view:
                conn.execute("UPDATE market_items SET downloads = downloads + 1 WHERE id = ?",
                             (item_id,))
                conn.commit()
        finally:
            conn.close()
    return _row(row)


def unpublish_item(item_id: str, actor: str = "") -> bool:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            cur = conn.execute(
                "UPDATE market_items SET status='archived', updated_at=? WHERE id = ? AND status='published'",
                (_now(), item_id))
            conn.commit()
            if not cur.rowcount:
                return False
        finally:
            conn.close()
    _audit("market_unpublish", actor, {"item_id": item_id})
    return True


def import_item(item_id: str, owner: str) -> Dict:
    """导入: 策略 → 新 variant; 案例 → 新 case。下载计数 +1, 全程审计。"""
    item = get_item(item_id)
    if not item:
        raise MarketError("市场条目不存在")
    if item["status"] != "published":
        raise MarketError("该条目已下架, 不可导入")
    payload = item.get("payload") or {}
    if item["kind"] == "strategy":
        from strategy_db import upsert_def
        new_id = "mk_" + uuid.uuid4().hex[:8]
        upsert_def(new_id, {"name": f"{item['title']}(市场导入)", "version": "0.1.0",
                            "type": payload.get("type") or item["ref_id"],
                            "params": payload.get("params") or {}})
        result = {"kind": "strategy", "new_id": new_id, "type": payload.get("type")}
    elif item["kind"] == "pattern_case":
        from pattern_match.store import save_case
        new_id = "case_mk_" + uuid.uuid4().hex[:8]
        save_case({"case_id": new_id, "name": f"{item['title']}(市场导入)",
                   "symbol": payload.get("symbol") or "",
                   "breakout_date": payload.get("breakout_date") or "",
                   "lookback_days": payload.get("lookback_days") or 25,
                   "tags": payload.get("tags") or [],
                   "description": payload.get("description") or "",
                   "features": payload.get("features") or {}})
        result = {"kind": "pattern_case", "new_id": new_id}
    else:
        raise MarketError(f"未知发布类型: {item['kind']}")
    with db._db_lock:
        conn = db.get_conn()
        try:
            conn.execute("UPDATE market_items SET downloads = downloads + 1 WHERE id = ?",
                         (item_id,))
            conn.commit()
        finally:
            conn.close()
    _audit("market_import", owner, {"item_id": item_id, "new_id": result["new_id"]})
    result["source_item"] = item_id
    result["owner"] = owner
    return result


def stats() -> Dict:
    _ensure_table()
    with db._db_lock:
        conn = db.get_conn()
        try:
            rows = conn.execute("SELECT kind, status, COUNT(*) AS n FROM market_items"
                                " GROUP BY kind, status").fetchall()
            total = conn.execute("SELECT COUNT(*) AS n FROM market_items").fetchone()
            downloads = conn.execute("SELECT COALESCE(SUM(downloads),0) AS n"
                                     " FROM market_items").fetchone()
        finally:
            conn.close()
    by_kind = {k: {"published": 0, "archived": 0} for k in KINDS}
    for r in rows:
        by_kind.setdefault(str(r["kind"]), {"published": 0, "archived": 0})[str(r["status"])] = int(r["n"])
    return {"by_kind": by_kind,
            "total": int(total["n"]) if total else 0,
            "downloads": int(downloads["n"]) if downloads else 0}
