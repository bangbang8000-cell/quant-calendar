#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""形态匹配实验室 API (v7.6 FR-7.6-2/3/4/5)

- GET    /api/pattern/config
- GET    /api/pattern/cases
- POST   /api/pattern/cases
- POST   /api/pattern/cases/from-symbol   按真实行情提取四维特征后入库 (v7.11 前端新建案例走此路径)
- DELETE /api/pattern/cases/{case_id}
- POST   /api/pattern/match   候选池 → 逐股四维匹配 → 相似度排行

产物是分数, 默认走研究实验通道; 物化持仓矩阵须显式 materialize=True,
不进日历(与 PRD §6.5.1 产物分流一致)。
"""
import logging
from datetime import date
from typing import Any, Dict, List

import pandas as pd
from fastapi import APIRouter, Depends, HTTPException

import jobs as jobs_mod
from auth import get_non_guest_user

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/pattern", tags=["形态匹配实验室"])

_FIELDS = ("open", "high", "low", "close", "volume")


def _record(etype, subject, params, date_range, summary, result):
    try:
        from backend_info import APP_VERSION
        from research_store import save_experiment
        save_experiment({
            "type": etype, "subject": subject, "params": params,
            "date_range": date_range, "app_version": APP_VERSION,
            "summary": summary, "result": result,
        })
    except Exception as e:
        logger.warning("[research_store] %s 记录跳过: %s", etype, e)


def _resolve_bars(item: Dict) -> pd.DataFrame:
    """候选 bars 优先; 缺失时走真实门户, 再降级可复现模拟数据"""
    bars = item.get("bars")
    if bars:
        df = pd.DataFrame(bars)
        if "date" not in df.columns:
            df.insert(0, "date", [str(x) for x in df.index])
        return df
    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
    from strategy_sdk.testsupport import FakePortal
    symbol = str(item.get("symbol") or "600000.SH")
    end = str(item.get("end_date") or date.today().isoformat())
    dates = pd.bdate_range(end=end, periods=160).strftime("%Y-%m-%d").tolist()
    panel = FakePortal(dates=dates, symbols=[symbol], seed=2026).get_panel(
        list(_FIELDS), str(item.get("start_date") or dates[0]), end, universe=[symbol])
    return panel_to_desc_df(panel, symbol, _FIELDS)


@router.get("/config")
async def pattern_config(_: Dict = Depends(get_non_guest_user)):
    """四维权重/容差/默认阈值 — 前端实验室页零改前端可读"""
    from pattern_match.matcher import DEFAULT_TOLERANCES, DEFAULT_WEIGHTS
    return {
        "weights": DEFAULT_WEIGHTS,
        "tolerances": DEFAULT_TOLERANCES,
        "min_similarity": 60.0,
        "default_lookback": 25,
        "dimensions": ["trend_structure", "kdj_state", "volume_pattern", "price_shape"],
        "output_contract": "分数 + 四维 breakdown; 不产持仓矩阵, 不进日历",
    }


@router.get("/cases")
async def list_pattern_cases(limit: int = 100,
                             _: Dict = Depends(get_non_guest_user)):
    from pattern_match.store import list_cases
    items = list_cases(limit)
    return {"items": items, "count": len(items)}


@router.post("/cases")
async def create_pattern_case(payload: Dict[str, Any],
                              _: Dict = Depends(get_non_guest_user)):
    """创建/覆盖案例; 可传已提取 features, 便于导入导出"""
    from pattern_match.store import save_case
    try:
        case_id = save_case(payload)
    except Exception as e:
        logger.exception("形态案例保存失败")
        raise HTTPException(status_code=500, detail=f"案例保存失败: {e}")
    return {"success": True, "case_id": case_id}


@router.post("/cases/from-symbol")
async def create_case_from_symbol(payload: Dict[str, Any],
                                 _: Dict = Depends(get_non_guest_user)):
    """按标的 + 突破日提取四维特征后入库

    v7.11 补口: 原 POST /cases 只存调用方送来的 features, 前端若不带特征就会
    写入空特征案例 —— 列表里看得见、匹配时被静默跳过(422 无可用案例特征)。
    本端点把"提特征"放到后端, 取数失败如实 422, 不写空壳案例。
    """
    from pattern_match import PatternFeatureExtractor
    from pattern_match.store import save_case

    symbol = str(payload.get("symbol") or "").strip()
    if not symbol:
        raise HTTPException(status_code=400, detail="symbol 不能为空")
    try:
        lookback = int(payload.get("lookback_days") or 25)
    except (TypeError, ValueError):
        raise HTTPException(status_code=400, detail="lookback_days 必须为整数")
    lookback = max(5, min(lookback, 120))
    breakout = str(payload.get("breakout_date") or "").strip()
    end = breakout or date.today().isoformat()
    start = (pd.Timestamp(end) - pd.Timedelta(days=max(150, lookback * 8))).date().isoformat()

    df = None
    source = "simulated"
    try:
        from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
        from strategy_sdk.data_portal import RealDataPortal
        panel = RealDataPortal().get_panel(list(_FIELDS), start, end, universe=[symbol])
        if panel is not None and not panel.empty:
            frame = panel_to_desc_df(panel, symbol, _FIELDS)
            if len(frame) >= 40:
                df, source = frame, "realtime"
    except Exception as e:
        logger.info("[pattern] 真实数据不可用, 降级模拟: %s", e)
    if df is None:
        df = _resolve_bars({"symbol": symbol, "start_date": start, "end_date": end})

    features = PatternFeatureExtractor(lookback_days=lookback).extract(df)
    if not any(features.values()):
        raise HTTPException(
            status_code=422,
            detail=f"{symbol} 在 {end} 及之前 K 线不足, 无法提取四维特征(请换标的或放宽突破日)")

    case_id = save_case({
        "name": str(payload.get("name") or "").strip() or f"{symbol} {end}",
        "symbol": symbol,
        "breakout_date": breakout,
        "lookback_days": lookback,
        "tags": payload.get("tags") or [],
        "description": str(payload.get("description") or ""),
        "features": features,
    })
    return {"success": True, "case_id": case_id, "data_source": source,
            "bar_count": int(len(df)), "features": features}


@router.delete("/cases/{case_id}")
async def delete_pattern_case(case_id: str,
                              _: Dict = Depends(get_non_guest_user)):
    from pattern_match.store import delete_case
    if not delete_case(case_id):
        raise HTTPException(status_code=404, detail=f"案例 {case_id} 不存在")
    return {"deleted": True, "case_id": case_id}


@router.post("/match")
async def pattern_match(payload: Dict[str, Any],
                        _: Dict = Depends(get_non_guest_user)):
    """逐股四维匹配 → 排行榜; 显式 materialize 才生成等权持仓建议"""
    try:
        return _run_match(payload)
    except ValueError as e:  # 入参/权重/案例缺失 → 与原实现一致的 4xx
        raise HTTPException(status_code=400, detail=str(e))


def _run_match(payload: Dict[str, Any], ctx=None) -> Dict[str, Any]:
    """匹配主逻辑 (同步端点与异步任务共用; ctx 非空时在候选间做暂停检查点)。"""
    from pattern_match import PatternFeatureExtractor, PatternMatcher
    from pattern_match.store import get_case, list_cases

    candidates = payload.get("candidates") or []
    if not candidates:
        raise ValueError("candidates 不能为空")

    cases: List[Dict] = []
    for raw in payload.get("cases") or []:
        if isinstance(raw, dict) and raw.get("features"):
            cases.append({"case_id": str(raw.get("case_id") or raw.get("id") or ""),
                          "name": str(raw.get("name") or ""), "features": raw["features"]})
    for cid in payload.get("case_ids") or []:
        row = get_case(str(cid))
        if row and row.get("features"):
            cases.append({"case_id": cid, "name": row.get("name", ""), "features": row["features"]})
    if not cases:
        for row in list_cases(limit=50):
            if row.get("features"):
                cases.append({"case_id": row["case_id"], "name": row.get("name", ""),
                              "features": row["features"]})
    if not cases:
        raise ValueError("无可用案例特征(请先创建含 features 的案例)")

    matcher = PatternMatcher(weights=payload.get("weights"))
    extractor = PatternFeatureExtractor(lookback_days=int(payload.get("lookback_days") or 25))
    min_sim = float(payload.get("min_similarity") or 60.0)
    top_n = payload.get("top_n")

    ranked: List[Dict] = []
    for item in candidates:
        # v7.12 (L5/L9): 异步任务在候选边界检查暂停/取消; 同步端点 ctx=None 不受影响
        if ctx is not None:
            if not ctx.check_paused():
                raise jobs_mod.JobCancelled()
            ctx.progress(int(len(ranked) / max(1, len(candidates)) * 90) + 5,
                         "matched %d/%d" % (len(ranked), len(candidates)))
        df = _resolve_bars(item if isinstance(item, dict) else {"bars": item})
        features = extractor.extract(df)
        if not any(features.values()):
            continue  # 数据不足诚实跳过, 不造分
        best = None
        for case in cases:
            result = matcher.match(features, case["features"])
            if best is None or result["total_score"] > best["total_score"]:
                best = dict(result)
                best["case_id"] = case["case_id"]
                best["case_name"] = case["name"]
        if best and best["total_score"] >= min_sim:
            best["symbol"] = str((item or {}).get("symbol", "")) if isinstance(item, dict) else ""
            ranked.append(best)

    ranked.sort(key=lambda x: -x["total_score"])
    if top_n is not None:
        ranked = ranked[:max(1, int(top_n))]

    result: Dict[str, Any] = {
        "items": ranked, "count": len(ranked),
        "min_similarity": min_sim, "weights": matcher.weights,
        "case_count": len(cases), "holdings_matrix": None, "calendar_opt_in": False,
    }
    if bool(payload.get("materialize")) and ranked:
        weight = round(1.0 / len(ranked), 6)
        result["materialized_suggestion"] = {x["symbol"]: weight for x in ranked if x["symbol"]}
    _record("pattern_match", "pattern_match",
            {"weights": matcher.weights, "min_similarity": min_sim,
             "top_n": top_n, "case_ids": [c["case_id"] for c in cases]},
            [], {"count": len(ranked), "case_count": len(cases)}, result)
    return result


@router.post("/match/async")
async def pattern_match_async(payload: Dict[str, Any],
                              _: Dict = Depends(get_non_guest_user)):
    """异步匹配 (v7.12 / L9, FR-7.6 异步口径): 大候选池走 jobs 队列, 返回 job_id 轮询"""
    _ensure_match_task_registered()
    if not (payload.get("candidates") or []):
        raise HTTPException(status_code=400, detail="candidates 不能为空")
    job_id = jobs_mod.create_task("pattern_match", dict(payload))
    return {"success": True, "job_id": job_id, "task_type": "pattern_match"}


def _ensure_match_task_registered() -> None:
    """幂等注册 jobs 任务 (worker 按 task_type 分派)"""
    if "pattern_match" in jobs_mod._registry:
        return

    @jobs_mod.register("pattern_match")
    def _task(payload, ctx):  # noqa: ANN001
        return _run_match(payload, ctx=ctx)


_EXPORT_COLS = ("symbol", "case_name", "total_score", "trend", "volume", "partner", "zone")


@router.post("/match/export")
async def pattern_match_export(payload: Dict[str, Any],
                               _: Dict = Depends(get_non_guest_user)):
    """匹配结果导出 CSV (v7.12 / L9, FR-7.6 导出口径)。

    两种入参: {"items": [...]} 直接导已有结果; 或完整 match payload → 先同步跑一遍。
    产物 text/csv (UTF-8 BOM, Excel 直开), 不落盘。
    """
    import csv as _csv
    import io

    items = payload.get("items")
    if not isinstance(items, list):
        try:
            items = _run_match(payload).get("items") or []
        except ValueError as e:
            raise HTTPException(status_code=422, detail=str(e))
    buf = io.StringIO()
    writer = _csv.writer(buf)
    writer.writerow(["代码", "案例", "总分", "趋势", "量能", "同伴", "位置"])
    for it in items:
        if not isinstance(it, dict):
            continue
        row = []
        for col in _EXPORT_COLS:
            v = it.get(col)
            if col != "total_score" and isinstance(v, (int, float)):
                v = round(float(v), 4)
            row.append("" if v is None else v)
        writer.writerow(row)
    csv_text = buf.getvalue()
    symbol = str(payload.get("symbol") or "pattern_match")
    from fastapi import Response
    return Response(
        content="\ufeff" + csv_text,
        media_type="text/csv; charset=utf-8",
        headers={"Content-Disposition":
                 "attachment; filename=%s_match.csv" % symbol.replace(".", "_")})
