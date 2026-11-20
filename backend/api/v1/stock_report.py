#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""五维分析报告 API (v7.9 FR-7.9-2)

`GET /api/reports/stock/{symbol}`: 一次取数(行情+估值+资金) → 五维分析 → JSON 或自包含 HTML。
板块与事件维需要外部数据源, 本版本以 query 参数显式注入(不猜不编):
    sector_rank=<0-100 行业强度分位>&sector_name=<行业名>
缺数维度在响应中显式标注, 不用 0 分冒充"很差"。
"""
import logging
from typing import Optional

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import HTMLResponse

from auth import get_current_active_user
from execution.support import normalize_date

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/reports", tags=["分析报告"])

PANEL_FIELDS = ["open", "high", "low", "close", "volume",
                "pe", "pb", "total_mv", "main_net_inflow"]
LOOKBACK_DAYS = 200


def _resolve_portal(portal=None):
    if portal is not None:
        return portal
    from strategy_sdk.data_portal import RealDataPortal
    return RealDataPortal()


def collect_facts(symbol: str, date: Optional[str] = None, portal=None) -> dict:
    """取数并整理为报告入参; 行情为空时抛 LookupError(由 API 转 404)"""
    from datetime import datetime, timedelta

    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df

    end = (date or datetime.now().strftime("%Y-%m-%d"))[:10]
    start = (datetime.strptime(end, "%Y-%m-%d") - timedelta(days=LOOKBACK_DAYS)).strftime("%Y-%m-%d")
    portal_obj = _resolve_portal(portal)
    panel = portal_obj.get_panel(PANEL_FIELDS, start, end, universe=[symbol])
    if panel is None or len(panel) == 0:
        raise LookupError(f"{symbol} 在 {start}~{end} 无行情数据")
    frame = panel_to_desc_df(panel, symbol, fields=PANEL_FIELDS)
    if frame is None or len(frame) == 0:
        raise LookupError(f"{symbol} 无单股面板数据")
    # 数据源面板日期可能是 YYYYMMDD; 统一归一后再截断, 避免字符串比较把整段行情滤空
    frame = frame.copy()
    frame["date"] = frame["date"].map(normalize_date)
    frame = frame[frame["date"] <= end].sort_values("date")
    if frame.empty:
        raise LookupError(f"{symbol} 在 {end} 及之前无可用 K 线")
    bars = frame.to_dict("records")
    basics = {}
    for key in ("pe", "pb", "total_mv"):
        series = [v for v in frame[key].tolist() if v is not None and v == v] if key in frame else []
        if series:
            basics[key] = series[-1]
    flows = [v for v in frame["main_net_inflow"].tolist()] if "main_net_inflow" in frame else []
    return {"symbol": symbol, "date": end, "bars": bars, "basics": basics, "flows": flows}


@router.get("/stock/{symbol}")
async def stock_report(symbol: str, date: Optional[str] = Query(None, description="报告日 YYYY-MM-DD"),
                       format: str = Query("json", description="json 或 html"),
                       sector_rank: Optional[float] = Query(None, ge=0, le=100,
                                                            description="行业强度分位 0-100"),
                       sector_name: Optional[str] = None,
                       user: dict = Depends(get_current_active_user)):
    """个股五维分析报告(技术/资金/基本面/板块/事件)"""
    from report_stock import build_report, render_html

    try:
        facts = collect_facts(symbol, date)
    except LookupError as exc:
        raise HTTPException(status_code=404, detail=str(exc)) from exc
    except Exception as exc:  # 数据源不可达不编造报告
        logger.warning("五维报告取数失败 %s: %s", symbol, exc)
        raise HTTPException(status_code=503, detail=f"数据源不可用: {exc}") from exc

    name = ""
    try:
        from stock_info import stock_manager
        name = stock_manager.get_name(symbol) or ""
    except Exception:
        name = ""

    sector = None
    if sector_rank is not None:
        sector = {"name": sector_name or "", "rank_pct": float(sector_rank)}
    report = build_report(symbol, name, facts["date"], facts["bars"],
                          flows=facts["flows"], basics=facts["basics"], sector=sector)
    if format.lower() == "html":
        return HTMLResponse(render_html(report))
    return report
