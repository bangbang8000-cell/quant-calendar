#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多视图聚合 API 路由
"""
import csv
import io
import logging
import threading
from typing import Dict

from fastapi import APIRouter, Depends, HTTPException, Query
from fastapi.responses import StreamingResponse

from auth import get_non_guest_user
from views_aggregator import views_aggregator

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/view", tags=["多视图聚合"])


def _last_strategy_error(date: str) -> str:
    """v7.24 FR-5: 该日期最近一次策略运行失败原因（无则空串）。"""
    try:
        from scheduler import scheduler
        history = scheduler.get_execution_history(days=30, task='strategy_run', limit=200)
        for rec in history or []:
            if rec.get('success'):
                continue
            if date in str(rec.get('detail') or ''):
                return str(rec.get('detail') or '策略运行失败')[:200]
    except Exception as e:  # noqa: BLE001 — 历史不可读不阻塞状态接口
        logger.info('读取调度历史失败: %s', e)
    return ''


@router.get('/status/{date}')
async def view_status(date: str):
    """v7.24 FR-5: 日历空态三分类 —— 非交易日 / 尚未生成 / 生成失败。"""
    trading = True
    try:
        from stock_calendar import is_trade_date_str
        trading = bool(is_trade_date_str(date))
    except Exception as e:  # noqa: BLE001 — 日历不可用时按交易日保守处理
        logger.info('交易日判断失败: %s', e)
    total = 0
    try:
        total = int((views_aggregator.get_day_view(date) or {}).get('total') or 0)
    except Exception:
        total = 0
    if not trading:
        status, reason = 'non_trading_day', '所选日期为非交易日'
    elif total > 0:
        status, reason = 'ok', ''
    else:
        status, reason = 'not_generated', '尚未生成该交易日持仓'
        err = _last_strategy_error(date)
        if err:
            status, reason = 'failed', err
    return {
        'success': True,
        'date': date,
        'is_trading_day': trading,
        'has_holdings': total > 0,
        'total': total,
        'status': status,
        'reason': reason,
        'can_generate': trading and total == 0,
    }


@router.post('/generate-today')
async def generate_today_holdings(_: Dict = Depends(get_non_guest_user)):
    """v7.24 FR-5: 立即生成今日持仓（后台执行，避免阻塞请求）。"""
    def _run():
        try:
            from scheduler import run_strategy_once
            from data_parser import parser as _parser
            run_strategy_once()
            _parser.reload()
            views_aggregator.reload()
        except Exception as e:  # noqa: BLE001
            logger.exception('立即生成今日持仓失败: %s', e)

    threading.Thread(target=_run, daemon=True, name='qc-generate-today').start()
    return {'success': True, 'accepted': True,
            'message': '已开始生成今日持仓，请稍后刷新'}


def _stocks_to_csv(stocks, view_type, date):
    """将股票列表转为CSV流"""
    output = io.StringIO()
    writer = csv.writer(output)
    writer.writerow(["code", "name", "strategy_count", "strategies", "status", "days_count", "first_appear", "last_appear"])
    for s in stocks:
        writer.writerow([
            s.get("code", ""),
            s.get("name", ""),
            s.get("strategy_count", 0),
            "|".join(s.get("strategies", [])),
            s.get("status", ""),
            s.get("days_count", 1),
            s.get("first_appear", ""),
            s.get("last_appear", ""),
        ])
    output.seek(0)
    return output


@router.get("/{view_type}/{date}")
async def get_view_data(
    view_type: str,
    date: str,
    status: str = "all",
    format: str = Query(default="json", description="输出格式: json 或 csv"),
):
    """
    获取多视图数据

    Args:
        view_type: day/week/month/year (日/周/月/年视图)
        date: 日期 YYYY-MM-DD
        status: all/new/current/out 状态筛选
        format: json (默认) 或 csv 导出
    """
    try:
        if view_type == "day":
            result = views_aggregator.get_day_view(date)
        elif view_type == "week":
            result = views_aggregator.get_week_view(date)
        elif view_type == "month":
            result = views_aggregator.get_month_view(date)
        elif view_type == "year":
            result = views_aggregator.get_year_view(date)
        else:
            raise HTTPException(status_code=400, detail="不支持的视图类型")

        # v7.12 (PRD §6.5.2): 读侧合并股票级勾选 — 手工票进视图片, 并标 manual
        try:
            import custom_selection as cs
            result = cs.merge_into_view(result, date)
        except Exception as exc:      # 合并失败不影响视图本身
            logger.warning("视图合并自定义勾选失败: %s", exc)

        # v7.16 FR-3: 继承日不计算入池/出池 — 全部标 current(而非误报 new/0),
        # 并由 data_inherited/inherited_from 显式告知前端"沿用上一交易日持仓"。
        _inherited = bool(result.get("data_inherited"))
        result["inherited_from"] = result.get("inherited_from")
        # 给所有股票添加状态字段
        if "stocks" in result:
            for s in result["stocks"]:
                if _inherited and view_type == "day":
                    s["status"] = "current"
                else:
                    s["status"] = views_aggregator.calculate_status(s["code"], date, view_type)
            if status != "all":
                result["stocks"] = [s for s in result["stocks"] if s["status"] == status]
                result["filtered_count"] = len(result["stocks"])
        result["data_inherited"] = _inherited

        # CSV 导出
        if format == "csv":
            csv_stream = _stocks_to_csv(result.get("stocks", []), view_type, date)
            filename = f"quant_{view_type}_{date}.csv"
            return StreamingResponse(
                csv_stream,
                media_type="text/csv; charset=utf-8-sig",
                headers={"Content-Disposition": f'attachment; filename="{filename}"'}
            )

        return result
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
