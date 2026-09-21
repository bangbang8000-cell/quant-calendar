#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
自选股 API — per-user 隔离
数据文件: data/users/{username}/watchlist.json
"""
import json
import logging
import os
import re
from datetime import datetime
from fastapi import APIRouter, HTTPException, Depends
from auth import get_current_active_user
from paths import DATA_DIR

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/watchlist", tags=["自选股"])

BASE_USERS_DIR = os.path.join(DATA_DIR, "users")

# 6.1.2 (B2): 批量导入 — 6 位代码(可带 .SH/.SZ/.BJ 后缀)
_CODE_RE = re.compile(r'^(\d{6})(\.(SH|SZ|BJ))?$', re.IGNORECASE)


def parse_stock_lines(text: str) -> list:
    """解析批量导入文本 (每行一只, 兼容 4 格式):
      600036 / 600036 招商银行 / 招商银行 600036 / 600036,招商银行
    返回 [{code, name, ok, reason}]
    """
    out = []
    for raw in (text or "").splitlines():
        line = raw.strip()
        if not line:
            continue
        tokens = [t for t in re.split(r'[\s,，;；]+', line) if t]
        code = None
        name_parts = []
        for t in tokens:
            if _CODE_RE.match(t):
                code = t.upper()
            else:
                name_parts.append(t)
        if not code:
            out.append({"code": "", "name": line, "ok": False, "reason": "未识别 6 位股票代码"})
            continue
        out.append({"code": code, "name": " ".join(name_parts), "ok": True, "reason": ""})
    return out


def _get_watchlist_path(username: str) -> str:
    return os.path.join(BASE_USERS_DIR, username, "watchlist.json")


def _load_watchlist(username: str) -> list:
    """加载自选股 (v3.3.0: 优先 SQLite, 回退 JSON)
    返回 [{code, name, added_at}] dict 列表 (保持与原 JSON 结构兼容)"""
    try:
        import db
        if db.schema_ok():
            rows = db.watchlist_get(username)
            if rows:
                return [{
                    "code": r['stock_code'],
                    # v3.14.2: 使用 DB 存的股票名, 缺失时才回退代码 (旧数据 name='')
                    "name": (r.get('name') or '').strip() or r['stock_code'],
                    "added_at": r['added_at'],
                } for r in rows]
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
        pass
    path = _get_watchlist_path(username)
    if os.path.exists(path):
        try:
            with open(path, 'r', encoding='utf-8') as f:
                return json.load(f).get("stocks", [])
        except Exception:
            logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
            pass
    return []


def _save_watchlist(username: str, stocks: list):
    """保存自选股 (v3.17.13: SQLite 为主; 6.1.2 B2: SQLite 不可用时回退 JSON, 防止数据静默丢失)"""
    saved_db = False
    try:
        import db
        if db.schema_ok():
            for code in db.watchlist_get(username):
                db.watchlist_remove(username, code['stock_code'])
            for item in stocks:
                # stocks 元素可能是 dict {code,name,added_at} 或纯字符串
                code = item.get('code') if isinstance(item, dict) else item
                name = item.get('name', '') if isinstance(item, dict) else ''
                db.watchlist_set(username, code, name or code)
            saved_db = True
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
    if not saved_db:
        try:
            path = _get_watchlist_path(username)
            os.makedirs(os.path.dirname(path), exist_ok=True)
            with open(path, 'w', encoding='utf-8') as f:
                json.dump({"stocks": stocks}, f, ensure_ascii=False, indent=2)
        except Exception:
            logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")


@router.get("")
async def get_watchlist(user: dict = Depends(get_current_active_user)):
    """获取当前用户自选列表"""
    stocks = _load_watchlist(user["username"])
    return {"success": True, "stocks": stocks, "count": len(stocks)}


@router.post("")
async def add_to_watchlist(req: dict, user: dict = Depends(get_current_active_user)):
    """添加自选股"""
    code = req.get("code", "").strip()
    name = req.get("name", "").strip()
    if not code:
        raise HTTPException(status_code=400, detail="股票代码不能为空")

    stocks = _load_watchlist(user["username"])
    # 去重
    existing = [s for s in stocks if s["code"] == code]
    if existing:
        return {"success": True, "message": "已在自选中", "existed": True}

    # v3.14.2: 未传名字时经 stock_manager 解析中文名
    if not name or name == code:
        try:
            from stock_info import stock_manager
            name = stock_manager.get_name(code)
        except Exception:
            name = name or code

    stocks.append({"code": code, "name": name, "added_at": datetime.now().isoformat()})
    _save_watchlist(user["username"], stocks)
    return {"success": True, "message": "已加入自选", "count": len(stocks)}


@router.post("/import")
async def import_watchlist(req: dict, user: dict = Depends(get_current_active_user)):
    """6.1.2 (B2): 批量导入 — 粘贴代码列表 (dry_run 仅校验不写入)"""
    text = (req.get("text") or "")
    dry_run = bool(req.get("dry_run"))
    parsed = parse_stock_lines(text)
    valid = [p for p in parsed if p["ok"]]
    invalid = [p for p in parsed if not p["ok"]]
    added = existed = 0
    if not dry_run:
        for p in valid:
            r = await add_to_watchlist({"code": p["code"], "name": p["name"]}, user)
            if r.get("existed"):
                existed += 1
            else:
                added += 1
    return {
        "success": True,
        "total": len(parsed),
        "valid": len(valid),
        "invalid": len(invalid),
        "added": added,
        "existed": existed,
        "invalid_items": invalid[:20],
    }


# ─── 6.1.2 (B3): 自选分组管理 (JSON 配置: groups + mapping) ─────────────────
def _groups_path(username: str) -> str:
    return os.path.join(BASE_USERS_DIR, username, "watch_groups.json")


def _load_groups_cfg(username: str):
    """返回 (groups, mapping); 未配置时返回 (None, None)"""
    try:
        path = _groups_path(username)
        if os.path.exists(path):
            with open(path, "r", encoding="utf-8") as f:
                d = json.load(f)
            return d.get("groups") or [], d.get("mapping") or {}
    except Exception:
        logger.warning("watchlist:groups 读取异常")
    return None, None


def _save_groups_cfg(username: str, groups: list, mapping: dict):
    path = _groups_path(username)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump({"groups": groups, "mapping": mapping}, f, ensure_ascii=False, indent=2)


def _ensure_groups(username: str):
    from watch_groups import default_groups, normalize_groups
    groups, mapping = _load_groups_cfg(username)
    if groups is None:
        groups, mapping = default_groups(), {}
    return normalize_groups(groups, mapping), mapping


@router.get("/groups")
async def get_watch_groups(user: dict = Depends(get_current_active_user)):
    """读取自选分组配置 (groups + mapping)"""
    groups, mapping = _ensure_groups(user["username"])
    return {"success": True, "groups": groups, "mapping": mapping}


@router.put("/groups")
async def save_watch_groups(req: dict, user: dict = Depends(get_current_active_user)):
    """全量保存自选分组 (归一化后落盘)"""
    from watch_groups import normalize_groups
    groups = normalize_groups(req.get("groups") or [], req.get("mapping") or {})
    mapping = {str(k): str(v) for k, v in (req.get("mapping") or {}).items()}
    _save_groups_cfg(user["username"], groups, mapping)
    return {"success": True, "groups": groups, "mapping": mapping}


@router.post("/groups/move")
async def move_watch_group(req: dict, user: dict = Depends(get_current_active_user)):
    """移动股票到分组 (分组不存在回默认)"""
    from watch_groups import move_stock
    code = (req.get("code") or "").strip()
    group = (req.get("group") or "").strip()
    if not code:
        raise HTTPException(status_code=400, detail="股票代码不能为空")
    groups, mapping = _ensure_groups(user["username"])
    mapping = move_stock(mapping, code, group, groups)
    _save_groups_cfg(user["username"], groups, mapping)
    return {"success": True, "mapping": mapping}


@router.post("/groups/rename")
async def rename_watch_group(req: dict, user: dict = Depends(get_current_active_user)):
    """重命名分组 (mapping 同步)"""
    from watch_groups import rename_group
    old = (req.get("old") or "").strip()
    new = (req.get("new") or "").strip()
    groups, mapping = _ensure_groups(user["username"])
    groups, new_name, err = rename_group(groups, old, new)
    if err:
        raise HTTPException(status_code=400, detail=err)
    if old != new_name:
        mapping = {k: (new_name if v == old else v) for k, v in mapping.items()}
    _save_groups_cfg(user["username"], groups, mapping)
    return {"success": True, "groups": groups, "mapping": mapping}


@router.post("/groups/color")
async def set_watch_group_color(req: dict, user: dict = Depends(get_current_active_user)):
    """设置分组颜色 (8 色白名单)"""
    from watch_groups import set_color
    groups, mapping = _ensure_groups(user["username"])
    groups, ok = set_color(groups, (req.get("name") or "").strip(), (req.get("color") or "").strip())
    if not ok:
        raise HTTPException(status_code=400, detail="颜色无效或分组不存在")
    _save_groups_cfg(user["username"], groups, mapping)
    return {"success": True, "groups": groups}


@router.delete("/groups/{name}")
async def delete_watch_group(name: str, user: dict = Depends(get_current_active_user)):
    """删除分组 → 股票并入默认分组 (默认分组不可删)"""
    from watch_groups import delete_group
    groups, mapping = _ensure_groups(user["username"])
    groups, mapping, ok = delete_group(groups, mapping, name.strip())
    if not ok:
        raise HTTPException(status_code=400, detail="默认分组不可删除或分组不存在")
    _save_groups_cfg(user["username"], groups, mapping)
    return {"success": True, "groups": groups, "mapping": mapping}


@router.delete("/{code}")
async def remove_from_watchlist(code: str, user: dict = Depends(get_current_active_user)):
    """移除自选股"""
    stocks = _load_watchlist(user["username"])
    new_stocks = [s for s in stocks if s["code"] != code]
    if len(new_stocks) == len(stocks):
        return {"success": False, "message": "未在自选中"}
    _save_watchlist(user["username"], new_stocks)
    return {"success": True, "message": "已移除自选", "count": len(new_stocks)}


@router.delete("")
async def clear_watchlist(user: dict = Depends(get_current_active_user)):
    """清空自选"""
    stocks = _load_watchlist(user["username"])
    cnt = len(stocks)
    _save_watchlist(user["username"], [])
    # v3.21 (P0-5): 高危操作审计
    try:
        from audit_log import log
        log("clear_watchlist", user["username"], {"count": cnt})
    except Exception:
        logger.warning('watchlist:123 静默异常 (Exception)')
    return {"success": True, "message": "自选已清空", "count": cnt}


@router.get("/check/{code}")
async def check_watchlist(code: str, user: dict = Depends(get_current_active_user)):
    """检查股票是否已自选"""
    stocks = _load_watchlist(user["username"])
    in_list = any(s["code"] == code for s in stocks)
    return {"success": True, "in_watchlist": in_list}


# 股票搜索（从 consensus 数据中匹配）
@router.get("/stock/search")
async def search_stocks(q: str = "", user: dict = Depends(get_current_active_user)):
    """搜索股票（代码或名称模糊匹配）"""
    if len(q) < 1:
        return {"success": True, "results": []}

    results = []
    try:
        from views_aggregator import views_aggregator
        seen = set()
        for date_stocks in views_aggregator.daily_data.values():
            for s in date_stocks:
                code = s.get('stock', '') or s.get('code', '')
                name = s.get('name', '')
                if code in seen:
                    continue
                if q.lower() in code.lower() or (name and q in name):
                    seen.add(code)
                    results.append({"code": code, "name": name})
                if len(results) >= 20:
                    break
            if len(results) >= 20:
                break
    except Exception:
        logging.getLogger(__name__).warning("操作异常 (v3.4.0-T8)")
        pass

    return {"success": True, "results": results}


# ============================================================
# K线预加载 — 定时缓存自选股K线数据，加速弹窗展示
# ============================================================
@router.post("/kline/preload")
async def preload_watchlist_kline(
    user: dict = Depends(get_current_active_user),
    period: str = "daily",
    limit: int = 60
):
    """预加载自选股K线数据到缓存

    遍历用户自选股列表，逐只调用 get_kline_data 填充 MarketData 缓存。
    预加载后点击「📈 K线」按钮即可即时展示，无需等待 API 调用。

    Args:
        period: K线周期 (daily/weekly/monthly)
        limit: 数据条数
    """
    import logging
    logger = logging.getLogger(__name__)

    stocks = _load_watchlist(user["username"])
    if not stocks:
        return {"success": True, "message": "自选股为空，无需预加载", "loaded": 0, "failed": 0, "total": 0}

    from market_data import get_kline_data

    loaded = []
    failed = []

    for stock in stocks:
        code = stock["code"]
        try:
            data = get_kline_data(code, period, limit)
            if data and len(data) > 0:
                loaded.append({"code": code, "name": stock.get("name", ""), "bars": len(data)})
            else:
                failed.append({"code": code, "name": stock.get("name", ""), "reason": "无数据"})
        except Exception as e:
            logger.warning(f"预加载K线失败 {code}: {e}")
            failed.append({"code": code, "name": stock.get("name", ""), "reason": str(e)[:100]})

    return {
        "success": True,
        "message": f"预加载完成: {len(loaded)}/{len(stocks)} 成功",
        "loaded": len(loaded),
        "failed": len(failed),
        "total": len(stocks),
        "details": {"loaded": loaded, "failed": failed}
    }
