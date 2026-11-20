#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""形态匹配实验室 API (v7.6 FR-7.6-2/3/4/5)

- GET    /api/pattern/config
- GET    /api/pattern/cases
- POST   /api/pattern/cases
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
    from pattern_match import PatternFeatureExtractor, PatternMatcher
    from pattern_match.store import get_case, list_cases

    candidates = payload.get("candidates") or []
    if not candidates:
        raise HTTPException(status_code=400, detail="candidates 不能为空")

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
        raise HTTPException(status_code=422, detail="无可用案例特征(请先创建含 features 的案例)")

    try:
        matcher = PatternMatcher(weights=payload.get("weights"))
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    extractor = PatternFeatureExtractor(lookback_days=int(payload.get("lookback_days") or 25))
    min_sim = float(payload.get("min_similarity") or 60.0)
    top_n = payload.get("top_n")

    ranked: List[Dict] = []
    for item in candidates:
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
