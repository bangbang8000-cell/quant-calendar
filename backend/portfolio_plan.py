#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.19 (FR-6): 自选股等权建仓计划 — 纯计算 + 计划持久化

诉求: 「组合持仓可考虑把自选股放进去, 总额 100 万元, 可以考虑均分」。
本模块负责两件事:
1. `build_plan()` 纯函数: 给「代码/名称/现价」与总资金, 按等权均分,
   按 A 股交易规则折算成整手数量, 尾差(不足一手的零头)留作现金。
   纯函数不含 IO, 便于单测; 现价由调用方(API 层)注入。
2. 计划持久化: portfolio_plan / portfolio_plan_item(迁移 0013),
   `plan_fingerprint()` 做幂等指纹 —— 同一计划重复确认不会重复加仓。

交易单位约定 (A 股现行规则):
- 沪深主板/创业板: 100 股/手, 买入须为 100 股整数倍
- 科创板 (688/689): 单笔申报不少于 200 股
- 北交所 (8/4 开头): 100 股起, 之后可按 1 股递增 → 本模块按 100 股整数倍保守处理
"""
import hashlib
import logging
from datetime import datetime, timedelta, timezone

import db

logger = logging.getLogger(__name__)

LOT_SIZE = 100
STAR_LOT_SIZE = 200
STAR_PREFIXES = ('688', '689')
SUPPORTED_MODES = ('equal',)
TZ_CN = timezone(timedelta(hours=8))


def lot_size(stock_code: str) -> int:
    """该标的的最小交易单位 (股)"""
    code = str(stock_code or '').strip().split('.')[0]
    return STAR_LOT_SIZE if code.startswith(STAR_PREFIXES) else LOT_SIZE


def _num(value, default=None):
    """宽松数值解析: 非法/空 → default"""
    if value is None or value == '':
        return default
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def _now_cn() -> str:
    """东八区时间戳 (与报表/契约里的 generated_at 口径一致)"""
    return datetime.now(TZ_CN).isoformat(timespec='seconds')


def build_plan(items, total_capital, mode: str = 'equal', source: str = 'watchlist') -> dict:
    """等权均分建仓计划 (纯函数)。

    Args:
        items: [{'stock_code','stock_name','price'}, ...]; price 缺失/≤0 → 计入 skipped
        total_capital: 建仓总资金 (元), 必须 > 0
        mode: 目前仅支持 'equal'(等权); 其它值抛 ValueError
        source: 计划来源标记 (watchlist / manual), 仅回显

    Returns:
        {'mode','source','total_capital','invested','cash_reserve','cash_reserve_pct',
         'position_count','items','skipped','warnings','lot_rule','generated_at'}
        items 每项: stock_code/stock_name/price/lot_size/lots/quantity/amount/
                   target_weight/weight_actual/note
    不投足额时的剩余现金 (cash_reserve) 永远 ≥ 0 —— 每只标的都向下取整到整手,
    因此不会出现「计划金额超过本金」。
    """
    if mode not in SUPPORTED_MODES:
        raise ValueError('不支持的建仓模式: %r (当前仅支持 equal)' % (mode,))
    total = _num(total_capital, 0) or 0
    if total <= 0:
        raise ValueError('总资金须为正数')

    valid, skipped, seen = [], [], set()
    for raw in (items or []):
        if not isinstance(raw, dict):
            skipped.append({'stock_code': '', 'stock_name': '', 'reason': '计划项格式非法'})
            continue
        code = str(raw.get('stock_code') or raw.get('code') or '').strip()
        name = str(raw.get('stock_name') or raw.get('name') or '').strip()
        price = _num(raw.get('price'))
        if not code:
            skipped.append({'stock_code': '', 'stock_name': name, 'reason': '股票代码缺失'})
            continue
        if code in seen:
            skipped.append({'stock_code': code, 'stock_name': name, 'reason': '重复代码(已按首次出现计)'})
            continue
        seen.add(code)
        if price is None or price <= 0:
            skipped.append({'stock_code': code, 'stock_name': name, 'reason': '现价不可用'})
            continue
        valid.append({'stock_code': code, 'stock_name': name or code, 'price': price})

    warnings = []
    plan = {
        'mode': mode,
        'source': source,
        'total_capital': round(total, 2),
        'invested': 0.0,
        'cash_reserve': round(total, 2),
        'cash_reserve_pct': 100.0,
        'position_count': 0,
        'items': [],
        'skipped': skipped,
        'warnings': warnings,
        'lot_rule': 'A股 100 股/手(整手买入); 科创板 688/689 单笔不少于 200 股',
        'generated_at': _now_cn(),
    }
    if not valid:
        warnings.append('无可建仓标的: 自选股为空或现价不可用')
        return plan

    target = total / len(valid)
    target_weight = round(1.0 / len(valid), 6)
    invested = 0.0
    rows = []
    for it in valid:
        lot = lot_size(it['stock_code'])
        per_lot = it['price'] * lot
        lots = int(target // per_lot) if per_lot > 0 else 0
        quantity = lots * lot
        amount = round(quantity * it['price'], 2)
        note = ''
        if lots <= 0:
            note = '不足一手(需 %.0f 元)' % round(per_lot, 0)
            warnings.append('%s %s 资金不足一手, 未纳入建仓' % (it['stock_code'], it['stock_name']))
        else:
            invested += amount
        rows.append({
            'stock_code': it['stock_code'],
            'stock_name': it['stock_name'],
            'price': round(it['price'], 4),
            'lot_size': lot,
            'lots': lots,
            'quantity': quantity,
            'amount': amount,
            'target_weight': target_weight,
            'weight_actual': 0.0,
            'note': note,
        })

    invested = round(invested, 2)
    for row in rows:
        row['weight_actual'] = round(row['amount'] / total, 6) if total else 0.0
    plan['items'] = rows
    plan['invested'] = invested
    plan['cash_reserve'] = round(total - invested, 2)
    plan['cash_reserve_pct'] = round(plan['cash_reserve'] / total * 100, 2) if total else 0.0
    plan['position_count'] = sum(1 for r in rows if r['lots'] > 0)
    if plan['position_count'] == 0:
        warnings.append('所有标的均不足一手, 建议提高总资金或剔除高价股')
    return plan


def plan_fingerprint(plan: dict) -> str:
    """计划指纹: 同一组 (代码, 数量) 恒定 —— 用于幂等校验"""
    items = (plan or {}).get('items') or []
    payload = '|'.join('%s:%s' % (r.get('stock_code', ''), int(r.get('quantity') or 0))
                       for r in sorted(items, key=lambda r: str(r.get('stock_code') or ''))
                       if int(r.get('quantity') or 0) > 0)
    return hashlib.sha1(payload.encode('utf-8')).hexdigest()


# ─── 持久化 (portfolio_plan / portfolio_plan_item, 见迁移 0013) ───

def save_plan(username: str, plan: dict, status: str = 'preview') -> int:
    """写入计划快照, 返回 plan_id"""
    rows = [r for r in ((plan or {}).get('items') or []) if (r.get('quantity') or 0) > 0]
    with db._db_lock:
        conn = db.get_conn()
        cur = conn.execute(
            "INSERT INTO portfolio_plan (username, mode, source, total_capital, invested,"
            " cash_reserve, position_count, plan_hash, status, created_at)"
            " VALUES (?,?,?,?,?,?,?,?,?,?)",
            (username, plan.get('mode', 'equal'), plan.get('source', 'watchlist'),
             round(plan.get('total_capital') or 0, 2), round(plan.get('invested') or 0, 2),
             round(plan.get('cash_reserve') or 0, 2), int(plan.get('position_count') or 0),
             plan_fingerprint(plan), status,
             datetime.now().strftime('%Y-%m-%d %H:%M:%S'))
        )
        plan_id = cur.lastrowid
        for r in rows:
            conn.execute(
                "INSERT INTO portfolio_plan_item (plan_id, stock_code, stock_name, price,"
                " lots, quantity, amount, target_weight, note) VALUES (?,?,?,?,?,?,?,?,?)",
                (plan_id, r.get('stock_code', ''), r.get('stock_name', ''),
                 round(_num(r.get('price'), 0) or 0, 4), int(r.get('lots') or 0),
                 round(_num(r.get('quantity'), 0) or 0, 2), round(_num(r.get('amount'), 0) or 0, 2),
                 round(_num(r.get('target_weight'), 0) or 0, 6), r.get('note') or '')
            )
        conn.commit()
        conn.close()
    return plan_id


def list_plans(username: str, limit: int = 20) -> list:
    """计划列表 (新→旧)"""
    with db._db_lock:
        conn = db.get_conn()
        rows = conn.execute(
            "SELECT id, mode, source, total_capital, invested, cash_reserve, position_count,"
            " plan_hash, status, applied_at, created_at FROM portfolio_plan"
            " WHERE username=? ORDER BY id DESC LIMIT ?",
            (username, int(limit))
        ).fetchall()
        conn.close()
    return [dict(r) for r in rows]


def get_plan(username: str, plan_id: int) -> dict | None:
    """按 id 取计划头 + 明细 (含非本项目权限的隔离)"""
    with db._db_lock:
        conn = db.get_conn()
        head = conn.execute(
            "SELECT id, mode, source, total_capital, invested, cash_reserve, position_count,"
            " plan_hash, status, applied_at, created_at FROM portfolio_plan"
            " WHERE id=? AND username=?", (int(plan_id), username)
        ).fetchone()
        if not head:
            conn.close()
            return None
        items = conn.execute(
            "SELECT stock_code, stock_name, price, lots, quantity, amount, target_weight, note"
            " FROM portfolio_plan_item WHERE plan_id=? ORDER BY amount DESC, stock_code",
            (int(plan_id),)
        ).fetchall()
        conn.close()
    out = dict(head)
    out['items'] = [dict(r) for r in items]
    return out


def find_applied_plan(username: str, plan_hash: str) -> int | None:
    """已确认过的同指纹计划 id (幂等保护); 无则 None"""
    if not plan_hash:
        return None
    with db._db_lock:
        conn = db.get_conn()
        row = conn.execute(
            "SELECT id FROM portfolio_plan WHERE username=? AND plan_hash=? AND status='applied'"
            " ORDER BY id DESC LIMIT 1", (username, plan_hash)
        ).fetchone()
        conn.close()
    return int(row['id']) if row else None


def mark_applied(username: str, plan_id: int) -> None:
    with db._db_lock:
        conn = db.get_conn()
        conn.execute(
            "UPDATE portfolio_plan SET status='applied', applied_at=? WHERE id=? AND username=?",
            (datetime.now().strftime('%Y-%m-%d %H:%M:%S'), int(plan_id), username)
        )
        conn.commit()
        conn.close()


def apply_plan(username: str, plan: dict, overwrite: bool = False) -> dict:
    """把计划落到 portfolio_positions。

    - overwrite=False (追加): 与既有持仓按成交价加权合并, 保留手工维护的其它股票
    - overwrite=True  (覆盖): 先清空该用户全部持仓, 再按计划重建
    只处理 quantity > 0 的明细。
    """
    rows = [r for r in ((plan or {}).get('items') or []) if (r.get('quantity') or 0) > 0]
    cleared = 0
    if overwrite:
        with db._db_lock:
            conn = db.get_conn()
            cur = conn.execute("DELETE FROM portfolio_positions WHERE username=?", (username,))
            cleared = cur.rowcount or 0
            conn.commit()
            conn.close()
    for r in rows:
        db.portfolio_upsert_position(username, r['stock_code'], r.get('stock_name', ''),
                                     _num(r.get('price'), 0) or 0, _num(r.get('quantity'), 0) or 0)
    return {'updated': len(rows), 'cleared': cleared,
            'write_mode': 'replace' if overwrite else 'append'}
