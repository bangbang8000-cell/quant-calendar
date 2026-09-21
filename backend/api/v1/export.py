#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
数据导出 (v3.9.13: 增强 PDF/Excel)
- GET  /api/export       → 导出用户数据 JSON
- GET  /api/export/csv   → 导出股票/策略数据 CSV
- GET  /api/export/excel → 导出完整数据集 Excel
- POST /api/import        → 导入恢复
"""
import logging
import json
import os
import io
import csv
from typing import Any, Dict
from datetime import datetime

from fastapi import APIRouter, Depends, Query
from fastapi.responses import Response
from pydantic import BaseModel

from auth import get_non_guest_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/data", tags=["数据导出导入"])


def _content_disposition(filename: str) -> str:
    """RFC 5987 编码 Content-Disposition — 中文文件名经 filename*=UTF-8'' 传递 (header 仅 latin-1)"""
    from urllib.parse import quote
    ascii_fallback = "quant_calendar_export.xlsx" if filename.endswith(".xlsx") else "quant_calendar_export.csv"
    return f"attachment; filename=\"{ascii_fallback}\"; filename*=UTF-8''{quote(filename)}"


class ImportRequest(BaseModel):
    data: Dict[str, Any]


def _collect_user_data(username: str) -> dict:
    """收集用户数据: 自选/聊天/评估历史"""
    data = {"username": username, "exported_at": None}

    # 自选股 (SQLite 优先)
    try:
        import db
        wl = db.watchlist_get(username)
        data["watchlist"] = [{"code": r["stock_code"], "added_at": r["added_at"]} for r in wl]
    except Exception:
        data["watchlist"] = []

    # 聊天历史
    try:
        import db
        chats = db.chat_all(username)
        data["chat_history"] = chats
    except Exception:
        data["chat_history"] = []

    # 评估历史 (读 ai_evaluation_history.json)
    try:
        from paths import AI_EVALUATION_HISTORY_FILE
        if os.path.exists(AI_EVALUATION_HISTORY_FILE):
            with open(AI_EVALUATION_HISTORY_FILE, 'r', encoding='utf-8') as f:
                hist = json.load(f)
            # 按 username 过滤
            if isinstance(hist, list):
                data["evaluation_history"] = [h for h in hist if h.get("username") == username]
            else:
                data["evaluation_history"] = hist.get(username, [])
        else:
            data["evaluation_history"] = []
    except Exception:
        data["evaluation_history"] = []

    from datetime import datetime
    data["exported_at"] = datetime.now().isoformat()
    return data


@router.get("/export")
async def export_data(user: dict = Depends(get_non_guest_user)):
    """导出当前用户数据 (JSON)"""
    username = user.get("username", "default")
    data = _collect_user_data(username)
    return {"success": True, "data": data, "message": f"导出 {username} 的数据完成"}


@router.post("/import")
async def import_data(req: ImportRequest, user: dict = Depends(get_non_guest_user)):
    """导入用户数据 (自选/聊天/评估历史)"""
    username = user.get("username", "default")
    d = req.data
    imported = {"watchlist": 0, "chat": 0, "evaluation_history": 0}

    # 自选股
    try:
        import db
        for item in d.get("watchlist", []):
            code = item.get("code") if isinstance(item, dict) else item
            if code:
                db.watchlist_set(username, code)
                imported["watchlist"] += 1
    except Exception as e:
        return {"success": False, "message": f"自选导入失败: {e}"}

    # 聊天历史
    try:
        import db
        for msg in d.get("chat_history", []):
            db.chat_append(username, msg.get("stock_code", ""), msg.get("role", "user"), msg.get("content", ""))
            imported["chat"] += 1
    except Exception as e:
        return {"success": False, "message": f"聊天导入失败: {e}"}

    # 评估历史 (合并写入 ai_evaluation_history.json)
    try:
        from paths import AI_EVALUATION_HISTORY_FILE
        entries = d.get("evaluation_history", [])
        if entries:
            if os.path.exists(AI_EVALUATION_HISTORY_FILE):
                with open(AI_EVALUATION_HISTORY_FILE, 'r', encoding='utf-8') as f:
                    hist = json.load(f)
            else:
                hist = []
            if isinstance(hist, list):
                hist.extend(entries)
            else:
                hist.setdefault(username, []).extend(entries)
            with open(AI_EVALUATION_HISTORY_FILE, 'w', encoding='utf-8') as f:
                json.dump(hist, f, ensure_ascii=False, indent=2)
            imported["evaluation_history"] = len(entries)
    except Exception as e:
        return {"success": False, "message": f"评估历史导入失败: {e}"}

    return {"success": True, "message": "导入完成", "imported": imported}


# ─── v3.9.13: CSV / Excel 导出 ─────────────────────────────────

@router.get("/export/csv")
async def export_csv(
    type: str = Query("strategies", description="导出类型: strategies|stocks|evaluation"),
    user: dict = Depends(get_non_guest_user)
):
    """导出股票/策略数据为 CSV"""
    output = io.StringIO()
    writer = csv.writer(output)
    now = datetime.now().strftime('%Y-%m-%d %H:%M:%S')

    writer.writerow(["# 量化选股日历 数据导出", f"导出时间: {now}"])

    if type == "strategies":
        writer.writerow([])
        writer.writerow(["策略名称", "持仓股票", "日期"])
        try:
            from data_parser import parser as dp
            dates = dp.get_available_dates()
            if dates:
                latest = dates[-1]
                holdings = dp.get_holdings_by_date(latest)
                for sid, data in holdings.items():
                    stocks = data.get("stocks", [])
                    codes = ",".join([s.get("code", s) if isinstance(s, dict) else str(s) for s in stocks])
                    writer.writerow([data.get("strategy_name", sid), codes, latest])
        except Exception as e:
            writer.writerow([f"加载失败: {e}", "", ""])

    elif type == "stocks":
        writer.writerow([])
        writer.writerow(["股票代码", "股票名称", "来源"])
        try:
            from stock_info import StockInfoManager
            manager = StockInfoManager()
            info = manager.get_all() or {}
            for code, name in sorted(info.items()):
                writer.writerow([code, name, "stock_info"])
        except Exception as e:
            writer.writerow([f"加载失败: {e}", "", ""])

    elif type == "evaluation":
        writer.writerow([])
        writer.writerow(["股票代码", "股票名称", "总分", "等级", "评估时间", "模型"])
        try:
            from ai_evaluator import ai_evaluator
            username = user.get("username", "default")
            history = ai_evaluator.get_history(username, limit=200)
            for r in history:
                res = r.get("result", {})
                writer.writerow([
                    r.get("stock_code", ""),
                    r.get("stock_name", ""),
                    res.get("total_score", ""),
                    res.get("level", ""),
                    r.get("evaluate_time", ""),
                    r.get("model_provider", "")
                ])
        except Exception as e:
            writer.writerow([f"加载失败: {e}", "", "", "", "", ""])

    output.seek(0)
    # UTF-8 BOM for Excel compatibility
    return Response(
        content="\ufeff" + output.getvalue(),
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition": _content_disposition(f"量化日历-{type}-{datetime.now().strftime('%Y%m%d')}.csv")}
    )


@router.get("/export/excel")
async def export_excel(
    user: dict = Depends(get_non_guest_user)
):
    """导出完整数据集为 Excel (.xlsx)"""
    try:
        import pandas as pd
    except ImportError:
        # 回退到 CSV 格式
        return await export_csv(type="strategies", user=user)

    try:
        buffer = io.BytesIO()
        with pd.ExcelWriter(buffer, engine='openpyxl') as writer:
            # Sheet 0: 口径说明 (6.1.1 B1: 导出元信息/来源/免责)
            try:
                from main_new import APP_VERSION
            except Exception:
                APP_VERSION = ""
            pd.DataFrame([
                {"项": "导出时间", "值": datetime.now().strftime('%Y-%m-%d %H:%M:%S')},
                {"项": "应用版本", "值": APP_VERSION},
                {"项": "数据来源", "值": "sxsc-tushare / tushare / akshare 三源热备"},
                {"项": "指标口径", "值": "涨跌幅为前复权口径; 评估评分 0-100; 术语见系统配置-术语表"},
                {"项": "免责声明", "值": "本导出数据仅供学习研究，不构成任何投资建议"},
            ]).to_excel(writer, sheet_name="口径说明", index=False)
            # Sheet 1: 策略持仓
            try:
                from data_parser import parser as dp
                dates = dp.get_available_dates()
                if dates:
                    latest = dates[-1]
                    holdings = dp.get_holdings_by_date(latest)
                    rows = []
                    for sid, data in holdings.items():
                        stocks = data.get("stocks", [])
                        codes = ",".join([s.get("code", s) if isinstance(s, dict) else str(s) for s in stocks])
                        rows.append({"策略名称": data.get("strategy_name", sid), "持仓股票": codes, "日期": latest})
                    if rows:
                        pd.DataFrame(rows).to_excel(writer, sheet_name="策略持仓", index=False)
            except Exception:
                logger.warning('export:231 静默异常 (Exception)')

            # Sheet 2: 股票信息
            try:
                from stock_info import StockInfoManager
                manager = StockInfoManager()
                info = manager.get_all() or {}
                rows = [{"股票代码": k, "股票名称": v} for k, v in sorted(info.items())]
                if rows:
                    pd.DataFrame(rows).to_excel(writer, sheet_name="股票信息", index=False)
            except Exception:
                logger.warning('export:242 静默异常 (Exception)')

            # Sheet 3: AI 评估历史
            try:
                from ai_evaluator import ai_evaluator
                username = user.get("username", "default")
                history = ai_evaluator.get_history(username, limit=500)
                rows = []
                for r in history:
                    res = r.get("result", {})
                    rows.append({
                        "股票代码": r.get("stock_code", ""),
                        "股票名称": r.get("stock_name", ""),
                        "总分": res.get("total_score", ""),
                        "等级": res.get("level", ""),
                        "评估时间": r.get("evaluate_time", ""),
                        "模型": r.get("model_provider", "")
                    })
                if rows:
                    pd.DataFrame(rows).to_excel(writer, sheet_name="AI评估历史", index=False)
            except Exception:
                logger.warning('export:263 静默异常 (Exception)')

        buffer.seek(0)
        return Response(
            content=buffer.getvalue(),
            media_type="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            headers={"Content-Disposition": _content_disposition(f"量化日历-全量导出-{datetime.now().strftime('%Y%m%d')}.xlsx")}
        )
    except Exception as e:
        # 回退
        return {"success": False, "message": f"Excel 导出失败，请使用 CSV: {str(e)}"}
