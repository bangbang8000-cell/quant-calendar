#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
组合/模拟持仓 API (v3.17.8 / FR-3.17.5) — per-user 隔离
- 持仓 CRUD (同股累加, 加权平均成本)
- 调仓记录 (买入加权累加 / 卖出减仓, 数量 ≤0 自动删除持仓)
- 组合实时盈亏 (data_source_manager 取最新 close/pct_chg, 数据不可达优雅降级)
- 组合收益曲线 (近 N 日按当前权重重算)
全部写操作走 audit_log 简单审计; 数据不可达时返回 "数据暂不可用" 而非报错。
"""
import logging

from fastapi import APIRouter, Depends, HTTPException

from auth import get_current_active_user
import db
from data_sources import data_source_manager

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/portfolio", tags=["组合持仓"])


# ─── 内部工具 ────────────────────────────────────────────────

def _audit(action: str, username: str, detail: dict = None):
    """写操作简单审计 (尽力而为, 失败不影响主流程)"""
    try:
        from audit_log import log
        log(action, username, detail)
    except Exception as e:
        logger.warning("portfolio audit 失败: %s", e)


def _get_quote(ts_code: str) -> dict | None:
    """取最新 close/pct_chg: 优先 daily_basic(含 close), 回退 K线末两根计算, 均不可达返回 None"""
    try:
        basic = data_source_manager.get_daily_basic(ts_code)
        if basic and (basic.get('close') is not None or basic.get('pct_chg') is not None):
            return basic
    except Exception as e:
        logger.warning("portfolio get_daily_basic(%s) 失败: %s", ts_code, e)
    try:
        kline = data_source_manager.get_kline_data(ts_code, 'daily', 2)
        bars = kline.get('data') if isinstance(kline, dict) else kline
        if bars and len(bars) >= 1:
            try:
                close = float(bars[-1][2])
            except (TypeError, ValueError, IndexError):
                return None
            pct_chg = None
            if len(bars) >= 2 and bars[-2][2]:
                try:
                    prev = float(bars[-2][2])
                    if prev:
                        pct_chg = round((close - prev) / prev * 100, 2)
                except (TypeError, ValueError):
                    pass
            return {'close': close, 'pct_chg': pct_chg}
    except Exception as e:
        logger.warning("portfolio get_kline_data(%s) 失败: %s", ts_code, e)
    return None


def _day_profit(close: float, pct_chg, quantity: float):
    """当日收益 (元): 基于前收 = close/(1+pct/100) 推算; pct 缺失/极端时返回 None"""
    if pct_chg is None or pct_chg == -100:
        return None
    return quantity * close * pct_chg / (100 + pct_chg)


def _position_view(p: dict) -> dict:
    """单只持仓 + 实时盈亏 (数据不可达时 close 为 None, 盈亏标 '数据暂不可用')"""
    view = {
        'stock_code': p['stock_code'],
        'stock_name': p['stock_name'] or p['stock_code'],
        'cost_price': round(p['cost_price'] or 0, 4),
        'quantity': round(p['quantity'] or 0, 4),
        'created_at': p['created_at'],
        'updated_at': p['updated_at'],
        'close': None, 'pct_chg': None,
        'market_value': None, 'float_profit': None, 'float_profit_pct': None,
        'day_profit': None, 'data_available': False,
    }
    q = _get_quote(p['stock_code'])
    if q and q.get('close') is not None:
        close = float(q['close'])
        pct_chg = q.get('pct_chg')
        cost = view['cost_price']
        qty = view['quantity']
        market_value = close * qty
        float_profit = (close - cost) * qty
        float_pct = ((close - cost) / cost * 100) if cost else None
        day_profit = _day_profit(close, pct_chg, qty)
        view.update({
            'close': round(close, 2),
            'pct_chg': round(float(pct_chg), 2) if pct_chg is not None else None,
            'market_value': round(market_value, 2),
            'float_profit': round(float_profit, 2),
            'float_profit_pct': round(float_pct, 2) if float_pct is not None else None,
            'day_profit': round(day_profit, 2) if day_profit is not None else None,
            'data_available': True,
        })
    return view


def _build_summary(positions_view: list) -> dict:
    """组合汇总: 总市值/总成本/浮动盈亏/当日收益/累计收益 (数据不可达优雅降级)"""
    total_cost = sum((p['cost_price'] * p['quantity']) for p in positions_view)
    summary = {
        'total_cost': round(total_cost, 2),
        'total_market_value': None, 'float_profit': None, 'float_profit_pct': None,
        'day_profit': None, 'day_profit_pct': None, 'cumulative_profit': None,
        'data_available': False,
        'note': '数据暂不可用',
    }
    available = [p for p in positions_view if p['data_available']]
    if not available:
        if not positions_view:
            summary['note'] = ''
        return summary
    total_mv = sum(p['market_value'] for p in available)
    cost_base = sum(p['cost_price'] * p['quantity'] for p in available)
    float_profit = sum(p['float_profit'] for p in available)
    day_profit = sum(p['day_profit'] for p in available if p['day_profit'] is not None)
    yesterday_mv = total_mv - day_profit
    summary.update({
        'total_market_value': round(total_mv, 2),
        'float_profit': round(float_profit, 2),
        'float_profit_pct': round(float_profit / cost_base * 100, 2) if cost_base else None,
        'day_profit': round(day_profit, 2),
        'day_profit_pct': round(day_profit / yesterday_mv * 100, 2) if yesterday_mv else None,
        'cumulative_profit': round(float_profit, 2),
        'data_available': len(available) == len(positions_view),
        'note': '' if len(available) == len(positions_view) else '部分数据暂不可用',
    })
    return summary


def _num(value, default=None):
    """宽松数值解析: 非法/空 → default"""
    if value is None or value == '':
        return default
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


# ─── 端点 ─────────────────────────────────────────────────────

@router.get("")
async def get_portfolio(user: dict = Depends(get_current_active_user)):
    """持仓列表 + 实时盈亏 + 组合汇总"""
    positions = db.portfolio_get_positions(user["username"])
    positions_view = [_position_view(p) for p in positions]
    return {
        "success": True,
        "positions": positions_view,
        "summary": _build_summary(positions_view),
        "count": len(positions_view),
    }


@router.post("/positions")
async def upsert_position(req: dict, user: dict = Depends(get_current_active_user)):
    """新增/更新持仓: 同股累加, 加权平均成本"""
    stock_code = (req.get("stock_code") or "").strip()
    if not stock_code:
        raise HTTPException(status_code=400, detail="股票代码不能为空")
    cost_price = _num(req.get("cost_price"), 0)
    quantity = _num(req.get("quantity"), 0)
    if cost_price <= 0 or quantity <= 0:
        raise HTTPException(status_code=400, detail="成本价与数量须为正数")
    stock_name = (req.get("stock_name") or "").strip()
    db.portfolio_upsert_position(user["username"], stock_code, stock_name, cost_price, quantity)
    _audit("portfolio_upsert", user["username"], {"stock_code": stock_code, "cost_price": cost_price, "quantity": quantity})
    return {"success": True, "message": "持仓已更新"}


@router.delete("/positions/{stock_code}")
async def delete_position(stock_code: str, user: dict = Depends(get_current_active_user)):
    """删除持仓"""
    ok = db.portfolio_delete_position(user["username"], stock_code)
    if not ok:
        return {"success": False, "message": "未找到该持仓"}
    _audit("portfolio_delete", user["username"], {"stock_code": stock_code})
    return {"success": True, "message": "持仓已删除"}


@router.post("/trades")
async def record_trade(req: dict, user: dict = Depends(get_current_active_user)):
    """记录调仓: 买入加权累加 / 卖出减仓, 数量 ≤0 自动删除持仓"""
    stock_code = (req.get("stock_code") or "").strip()
    if not stock_code:
        raise HTTPException(status_code=400, detail="股票代码不能为空")
    action = (req.get("action") or "buy").lower()
    if action not in ("buy", "sell"):
        raise HTTPException(status_code=400, detail="调仓方向须为 buy 或 sell")
    price = _num(req.get("price"), 0)
    quantity = _num(req.get("quantity"), 0)
    if price <= 0 or quantity <= 0:
        raise HTTPException(status_code=400, detail="价格与数量须为正数")
    stock_name = (req.get("stock_name") or "").strip()
    note = (req.get("note") or "").strip()
    trade_date = (req.get("trade_date") or "").strip()

    effect = db.portfolio_apply_trade(user["username"], stock_code, stock_name, action, price, quantity)
    trade_id = db.portfolio_add_trade(user["username"], stock_code, stock_name, action, price, quantity, trade_date, note)
    _audit("portfolio_trade", user["username"], {
        "trade_id": trade_id, "stock_code": stock_code, "action": action,
        "price": price, "quantity": quantity,
    })
    message = "买入已记录并累加持仓" if effect == 'buy' else (
        "卖出已记录" if effect == 'sell' else "卖出后持仓清零, 已自动删除")
    return {"success": True, "message": message, "effect": effect, "trade_id": trade_id}


@router.get("/trades")
async def get_trades(user: dict = Depends(get_current_active_user)):
    """调仓记录 (按时间倒序)"""
    trades = db.portfolio_list_trades(user["username"])
    return {"success": True, "trades": trades, "count": len(trades)}


@router.get("/equity_curve")
async def get_equity_curve(days: int = 30, user: dict = Depends(get_current_active_user)):
    """组合收益曲线: 近 N 日持仓股历史 close × 当前数量 = 每日组合市值, 归一化净值"""
    days = max(1, min(days, 365))
    positions = db.portfolio_get_positions(user["username"])
    if not positions:
        return {"success": True, "dates": [], "values": [], "equity": [], "note": "", "count": 0}
    qty_by_code = {p['stock_code']: p['quantity'] for p in positions}
    series = {}   # code -> {date: close}
    all_dates = set()
    missing = []
    for p in positions:
        try:
            kline = data_source_manager.get_kline_data(p['stock_code'], 'daily', days)
            bars = kline.get('data') if isinstance(kline, dict) else kline
            if not bars:
                missing.append(p['stock_code'])
                continue
            day_close = {}
            for b in bars:
                try:
                    day_close[str(b[0])] = float(b[2])
                except (TypeError, ValueError, IndexError):
                    continue
            if day_close:
                series[p['stock_code']] = day_close
                all_dates.update(day_close.keys())
            else:
                missing.append(p['stock_code'])
        except Exception as e:
            logger.warning("portfolio equity_curve kline(%s) 失败: %s", p['stock_code'], e)
            missing.append(p['stock_code'])

    dates = sorted(all_dates)
    values = []
    for day in dates:
        v = 0.0
        for code, day_close in series.items():
            if day in day_close:
                v += day_close[day] * qty_by_code.get(code, 0)
        values.append(round(v, 2))
    equity = []
    if values and values[0]:
        base = values[0]
        equity = [round(v / base * 100, 2) for v in values]

    if missing and not series:
        note = '数据暂不可用'
    elif missing:
        note = f"{len(missing)} 只股票历史数据暂不可用"
    else:
        note = ''
    return {
        "success": True, "dates": dates, "values": values, "equity": equity,
        "note": note, "count": len(positions),
    }
