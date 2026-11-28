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
import portfolio_plan
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
                    logger.warning('portfolio:57 静默异常 ((TypeError, ValueError))')
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
        'cost_price': round(p['cost_price'] or 0, 2),
        'quantity': round(p['quantity'] or 0, 2),
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


@router.post("/positions/batch")
async def batch_add_positions(req: dict, user: dict = Depends(get_current_active_user)):
    """V5.3.0 (T-5.3.3.4 / FR-5.3.3.4): 批量加入组合 (评估→组合一键化).

    允许零价登记 (cost_price/quantity=0 仅加代码/名称占位, 用户后补),
    已存在持仓保持原成本/数量不被覆盖。
    """
    stocks = req.get("stocks") or []
    if not isinstance(stocks, list) or not stocks:
        raise HTTPException(status_code=400, detail="stocks 不能为空")
    added = 0
    for s in stocks:
        stock_code = (s.get("stock_code") or "").strip()
        if not stock_code:
            raise HTTPException(status_code=400, detail="股票代码不能为空")
        stock_name = (s.get("stock_name") or "").strip()
        db.portfolio_upsert_position(user["username"], stock_code, stock_name, 0, 0)
        added += 1
    _audit("portfolio_batch_add", user["username"], {"count": added})
    return {"success": True, "count": added, "message": f"已登记 {added} 只到组合"}


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


def _portfolio_values(days: int, username: str):
    """组合近 N 日每日市值序列 (dates, values, positions) — equity_curve/risk 共用"""
    positions = db.portfolio_get_positions(username)
    if not positions:
        return [], [], []
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
                    logger.debug('portfolio:248 跳过 ((TypeError, ValueError, IndexError))')
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
    return dates, values, positions


@router.get("/equity_curve")
async def get_equity_curve(days: int = 30, user: dict = Depends(get_current_active_user)):
    """组合收益曲线: 近 N 日持仓股历史 close × 当前数量 = 每日组合市值, 归一化净值"""
    days = max(1, min(days, 365))
    dates, values, positions = _portfolio_values(days, user["username"])
    if not positions:
        return {"success": True, "dates": [], "values": [], "equity": [], "note": "", "count": 0}
    equity = []
    if values and values[0]:
        base = values[0]
        equity = [round(v / base * 100, 2) for v in values]
    note = '' if values else '数据暂不可用'
    return {
        "success": True, "dates": dates, "values": values, "equity": equity,
        "note": note, "count": len(positions),
    }


# ─── V5.0.3 T-5.0.31: 组合风险指标 ───

@router.get("/risk")
async def get_portfolio_risk(days: int = 60, benchmark: str = None,
                             user: dict = Depends(get_current_active_user)):
    """组合风险指标: 由近 N 日市值序列计算 波动/VaR(历史+参数)/CVaR/回撤/夏普/Sortino/Calmar/Beta"""
    days = max(10, min(days, 365))
    dates, values, positions = _portfolio_values(days, user["username"])
    if not positions or len(values) < 3 or not values[0]:
        return {"success": True, "risk": None, "note": "组合市值数据不足"}
    base = values[0]
    equity = [v / base for v in values]
    from risk import compute_risk_metrics
    risk = compute_risk_metrics(equity, is_equity=True, var_level=0.95)
    note = ""
    if risk["var_historical"] > 0:
        note = "VaR 采用历史模拟+参数法双实现交叉核对"
    return {"success": True, "risk": risk, "dates": dates, "note": note,
            "count": len(positions)}


# ─── V5.0.3 T-5.0.34: 风控规则评估 + 再平衡建议 ───

def _stock_vol_from_kline(ts_code: str, days: int = 60):
    """由近 N 日收盘价估算年化波动 (数据不可达返回 None)"""
    try:
        kline = data_source_manager.get_kline_data(ts_code, 'daily', days)
        bars = kline.get('data') if isinstance(kline, dict) else kline
        if not bars:
            return None
        closes = []
        for b in bars:
            try:
                closes.append(float(b[2]))
            except (TypeError, ValueError, IndexError):
                continue
        if len(closes) < 5:
            return None
        rets = [(closes[i] / closes[i - 1] - 1.0) for i in range(1, len(closes))
                if closes[i - 1] > 0]
        from risk import volatility_annual
        return volatility_annual(rets)
    except Exception as e:
        logger.warning("portfolio _stock_vol(%s) 失败: %s", ts_code, e)
        return None


@router.get("/risk-rules")
async def get_portfolio_risk_rules(days: int = 60,
                                   user: dict = Depends(get_current_active_user)):
    """风控规则评估 + 再平衡建议 (V5.0.3 T-5.0.33/5.3.4)。

    由持仓市值权重/浮亏/日收益/净值 + 个股波动率驱动; 数据不可达优雅降级。
    返回 {rules: [{rule_id,type,triggered,severity,action,message}], rebalance, note}
    """
    from risk import position_sizing
    from rules import evaluate_rules, make_rule
    days = max(10, min(days, 365))
    positions = db.portfolio_get_positions(user["username"])
    if not positions:
        return {"success": True, "rules": [], "rebalance": None, "note": "暂无持仓"}
    views = [_position_view(p) for p in positions]
    available = [v for v in views if v.get("market_value")]
    weights = {}
    if available:
        total_mv = sum(v["market_value"] for v in available)
        if total_mv:
            weights = {v["stock_code"]: round(v["market_value"] / total_mv, 4) for v in available}
    # 单持仓浮亏 (小数, 供止损规则): float_profit_pct 为 % (负值)
    losses = {}
    for v in views:
        pct = v.get("float_profit_pct")
        if pct is not None and float(pct) < 0:
            losses[v["stock_code"]] = round(float(pct) / 100.0, 6)
    summary = _build_summary(views)
    day_return = round((summary.get("day_profit_pct") or 0.0) / 100.0, 6)
    # 净值序列 (归一化)
    _, values, _ = _portfolio_values(days, user["username"])
    equity = [v / values[0] for v in values] if values and values[0] else [1.0]
    # 个股波动率
    vols = {}
    for v in views:
        vol = _stock_vol_from_kline(v["stock_code"], days)
        if vol is not None:
            vols[v["stock_code"]] = vol
    state = {"weights": weights, "sector_weights": {}, "day_return": day_return,
             "equity": equity, "losses": losses}
    rules = [
        make_rule("r1", "concentration", max_stock_weight=0.2, max_sector_weight=0.3),
        make_rule("r2", "stop_loss", single_loss_threshold=0.08, day_loss_threshold=0.03),
        make_rule("r3", "take_profit", day_profit_threshold=0.05),
        make_rule("r4", "drawdown_circuit", trigger=0.1, action="reduce"),
    ]
    results = evaluate_rules(state, rules)
    # 再平衡建议: 波动率目标仓位 vs 当前权重
    rebalance = None
    if vols:
        sizing = position_sizing(vols, target_vol=0.12, max_position=0.2,
                                 method="vol_target")
        current = {k: round(weights.get(k, 0.0), 4) for k in sizing["positions"]}
        diffs = {k: round(sizing["positions"][k] - current.get(k, 0.0), 4)
                 for k in sizing["positions"]}
        rebalance = {"targets": sizing["positions"], "current": current,
                     "diffs": diffs, "total": sizing["total"],
                     "method": sizing["method"], "max_position": sizing["max_position"]}
    note = "数据不可达降级" if not vols else ""
    return {"success": True, "rules": results, "rebalance": rebalance,
            "note": note, "count": len(positions)}


# ─── v7.19 (FR-6): 自选等权均分建仓计划 ────────────────────────

DEFAULT_PLAN_CAPITAL = 1_000_000


def _resolve_plan_items(user: dict, body: dict):
    """组装建仓标的: 显式 codes 优先, 否则取全部自选股 → (source, items)"""
    raw = body.get("codes") or []
    source = (body.get("source") or ("codes" if raw else "watchlist")).strip().lower()
    picked = []
    if raw:
        for c in raw:
            if isinstance(c, dict):
                code = (c.get("stock_code") or c.get("code") or "").strip()
                name = (c.get("stock_name") or c.get("name") or "").strip()
            else:
                code, name = str(c or "").strip(), ""
            if code:
                picked.append({"stock_code": code, "stock_name": name})
    else:
        watch = _load_watchlist_items(user["username"])
        for w in watch:
            picked.append({"stock_code": w.get("stock_code", ""), "stock_name": w.get("name") or ""})
    return source, picked


def _load_watchlist_items(username: str) -> list:
    """自选股 → [{stock_code, name}]。

    复用自选域自己的读取口径 (SQLite 优先 / JSON 回退), 避免「自选页有、建仓页没有」。
    """
    try:
        from api.v1.watchlist import load_watchlist
        rows = load_watchlist(username) or []
        return [{"stock_code": (r.get("code") or "").strip(), "name": (r.get("name") or "").strip()}
                for r in rows if r.get("code")]
    except Exception as e:
        logger.warning("读取自选股失败, 回退 db 直读: %s", e)
    try:
        return [{"stock_code": r.get("stock_code", ""), "name": r.get("name") or ""}
                for r in db.watchlist_get(username)]
    except Exception as e:
        logger.warning("自选股回退读取也失败, 按空自选处理: %s", e)
        return []


def _fill_plan_prices(items: list):
    """批量取现价 (一次请求) + 补齐中文名 → (items, degraded)。

    取价失败不抛错: price 留 None, 由 build_plan 记为「现价不可用」的 skipped 项,
    保证前端永远拿到可读的计划而不是 500。
    """
    codes = [i["stock_code"] for i in items]
    quotes, degraded = {}, False
    if codes:
        try:
            from realtime_quotes import RealtimeQuoteSource
            quotes, degraded = RealtimeQuoteSource().fetch_quotes(codes)
        except Exception as e:
            logger.warning("建仓计划批量取价失败, 按现价不可用降级: %s", e)
            quotes, degraded = {}, True
    if any(not i["stock_name"] for i in items):
        try:
            from stock_info import stock_manager
            # 名称服务是可选增强: 取不到 get_name 或抛错都只影响「代码回退显示」
            get_name = getattr(stock_manager, "get_name", None)
            if callable(get_name):
                for i in items:
                    if not i["stock_name"]:
                        i["stock_name"] = get_name(i["stock_code"]) or i["stock_code"]
        except Exception as e:
            logger.warning("建仓计划补股票名失败, 回退代码显示: %s", e)
    for i in items:
        q = quotes.get(i["stock_code"]) or {}
        i["price"] = _num(q.get("price"))
    return items, degraded


def _build_plan_of(user: dict, body: dict):
    """请求体 → (plan, degraded); 参数非法抛 400"""
    source, items = _resolve_plan_items(user, body)
    items, degraded = _fill_plan_prices(items)
    total = _num(body.get("total_capital"), None)
    if total is None:
        total = DEFAULT_PLAN_CAPITAL
    if total <= 0:
        raise HTTPException(status_code=400, detail="总资金须为正数")
    try:
        plan = portfolio_plan.build_plan(items, total,
                                         mode=(body.get("mode") or "equal"), source=source)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    plan["degraded"] = degraded
    return plan, degraded


@router.post("/plans/preview")
async def preview_plan(body: dict, user: dict = Depends(get_current_active_user)):
    """建仓计划预览 (只算不落库): 等权均分 + 整手取整 + 尾差现金"""
    plan, degraded = _build_plan_of(user, body)
    return {
        "success": True,
        "plan": plan,
        "degraded": degraded,
        "note": "现价不可达, 部分标的未能纳入计划" if degraded else "",
        "generated_at": plan.get("generated_at"),
    }


@router.post("/plans")
async def create_plan(body: dict, user: dict = Depends(get_current_active_user)):
    """确认建仓: 落库计划快照 + 写入持仓 (append 加权合并 / overwrite 覆盖)。

    幂等: 同一 (代码, 数量) 指纹已确认过 → 直接返回 already_applied, 不重复加仓。
    """
    plan, _degraded = _build_plan_of(user, body)
    if plan["position_count"] <= 0:
        raise HTTPException(status_code=400, detail="没有可建仓的标的(资金不足一手或现价不可用)")
    overwrite = bool(body.get("overwrite"))
    fingerprint = portfolio_plan.plan_fingerprint(plan)
    if not overwrite:
        applied_id = portfolio_plan.find_applied_plan(user["username"], fingerprint)
        if applied_id:
            return {"success": True, "already_applied": True, "plan_id": applied_id,
                    "plan": plan, "written": 0,
                    "message": "该计划此前已建仓, 未重复加仓"}
    plan_id = portfolio_plan.save_plan(user["username"], plan, status="preview")
    result = portfolio_plan.apply_plan(user["username"], plan, overwrite=overwrite)
    portfolio_plan.mark_applied(user["username"], plan_id)
    _audit("portfolio_plan_apply", user["username"], {
        "plan_id": plan_id, "positions": result["updated"],
        "write_mode": result["write_mode"], "cleared": result["cleared"],
        "total_capital": plan["total_capital"], "invested": plan["invested"],
    })
    message = "已按计划建仓 %d 只 (投入 %.2f 元, 留现金 %.2f 元)" % (
        result["updated"], plan["invested"], plan["cash_reserve"])
    return {"success": True, "plan_id": plan_id, "plan": plan,
            "written": result["updated"], "cleared": result["cleared"],
            "write_mode": result["write_mode"], "message": message}


@router.get("/plans")
async def list_plans(limit: int = 20, user: dict = Depends(get_current_active_user)):
    """建仓计划历史 (新→旧)"""
    rows = portfolio_plan.list_plans(user["username"], limit=max(1, min(int(limit or 20), 100)))
    return {"success": True, "plans": rows, "count": len(rows)}


# ─── v7.25 (FR-7): 持仓组网 — 自选同步 / 重新均分 / 自动同步 ─────────

def _network_inputs(user: dict):
    watch = _load_watchlist_items(user["username"])
    positions = db.portfolio_get_positions(user["username"])
    return watch, positions


def _build_network_plan_of(user: dict, body: dict):
    """自选 ∪ 现有持仓 → 等权均分计划 + 差集（只增不删）"""
    watch, positions = _network_inputs(user)
    targets = portfolio_plan.merge_targets(watch, positions)
    items, degraded = _fill_plan_prices(targets)
    total = _num(body.get("total_capital"), None)
    if total is None:
        total = DEFAULT_PLAN_CAPITAL
    if total <= 0:
        raise HTTPException(status_code=400, detail="总资金须为正数")
    try:
        plan = portfolio_plan.build_plan(items, total,
                                         mode=(body.get("mode") or "equal"), source="network")
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    portfolio_plan.annotate_network_plan(plan, positions)
    plan["degraded"] = degraded
    return plan, portfolio_plan.network_diff(watch, positions), degraded


@router.get("/network/diff")
async def get_network_diff(user: dict = Depends(get_current_active_user)):
    """自选与组合的差异（只增不删）：to_add / only_in_portfolio + 自动同步开关"""
    watch, positions = _network_inputs(user)
    diff = portfolio_plan.network_diff(watch, positions)
    return {"success": True, **diff,
            "auto_sync": portfolio_plan.get_auto_sync(user["username"])}


@router.get("/network/auto-sync")
async def get_network_auto_sync(user: dict = Depends(get_current_active_user)):
    return {"success": True, "auto_sync": portfolio_plan.get_auto_sync(user["username"])}


@router.put("/network/auto-sync")
async def put_network_auto_sync(body: dict, user: dict = Depends(get_current_active_user)):
    enabled = portfolio_plan.set_auto_sync(user["username"], bool(body.get("auto_sync")))
    _audit("portfolio_network_auto_sync", user["username"], {"auto_sync": enabled})
    return {"success": True, "auto_sync": enabled}


@router.post("/network/preview")
async def preview_network_plan(body: dict, user: dict = Depends(get_current_active_user)):
    """组网预览：现有持仓 ∪ 自选 等权均分（已有持仓保留成本价，只增不删）"""
    plan, diff, degraded = _build_network_plan_of(user, body)
    return {
        "success": True, "plan": plan, "diff": diff, "degraded": degraded,
        "note": "现价不可达, 部分标的未能纳入计划" if degraded else "",
        "generated_at": plan.get("generated_at"),
    }


@router.post("/network/sync")
async def sync_network_plan(body: dict, user: dict = Depends(get_current_active_user)):
    """同步自选/重新均分：按总资金等权均分并落网（已有持仓保留成本价，绝不删除持仓）。"""
    plan, diff, _degraded = _build_network_plan_of(user, body)
    if plan["position_count"] <= 0:
        raise HTTPException(status_code=400, detail="没有可建仓的标的(资金不足一手或现价不可用)")
    fingerprint = portfolio_plan.plan_fingerprint(plan)
    applied_id = portfolio_plan.find_applied_plan(user["username"], fingerprint)
    if applied_id:
        return {"success": True, "already_applied": True, "plan_id": applied_id,
                "plan": plan, "diff": diff, "written": 0,
                "message": "该均分计划此前已同步, 未重复加仓"}
    plan_id = portfolio_plan.save_plan(user["username"], plan, status="preview")
    result = portfolio_plan.apply_network_plan(user["username"], plan)
    portfolio_plan.mark_applied(user["username"], plan_id)
    _audit("portfolio_network_sync", user["username"], {
        "plan_id": plan_id, "added": result["added"], "updated": result["updated"],
        "to_add": len(diff["to_add"]), "total_capital": plan["total_capital"],
    })
    message = "已同步 %d 只自选(新增 %d 只); 共 %d 只, 投入 %.2f 元, 留现金 %.2f 元" % (
        len(diff["to_add"]), result["added"], plan["position_count"],
        plan["invested"], plan["cash_reserve"])
    return {"success": True, "plan_id": plan_id, "plan": plan, "diff": diff,
            "written": result["updated"] + result["added"],
            "added": result["added"], "updated": result["updated"], "message": message}
