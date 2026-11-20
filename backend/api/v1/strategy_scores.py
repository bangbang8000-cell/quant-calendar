#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""五维评分 API (v7.4 FR-7.4-3/4/6) — 独立模块, 避免 strategy_research.py 超 700 行"""
import logging
from typing import Any, Dict

from fastapi import APIRouter, Depends, HTTPException

from auth import get_non_guest_user

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/strategies/scores", tags=["五维评分"])


@router.get("/config")
async def scores_config(_: Dict = Depends(get_non_guest_user)):
    """评分引擎默认配置: 五维权重 + 等级边界 + 一票否决说明"""
    from strategy_sdk.scoring import DEFAULT_WEIGHTS, SCORE_DIMENSIONS, VETO_SCORE
    return {
        "dimensions": list(SCORE_DIMENSIONS),
        "default_weights": DEFAULT_WEIGHTS,
        "veto_score": VETO_SCORE,
        "levels": [">=80 强烈推荐", ">=60 推荐", ">=40 中性", ">=20 谨慎", "<20 回避", "-100 淘汰"],
    }


@router.post("/calculate")
async def scores_calculate(payload: Dict[str, Any], _: Dict = Depends(get_non_guest_user)):
    """计算个股五维综合评分 (缺维度诚实标注 unknown, 附带 score 研究历史)"""
    from strategy_sdk.scoring import ScoreEngine
    from research_store import save_experiment
    from backend_info import APP_VERSION
    try:
        dims = payload.get("dimension_scores") or {}
        weights = payload.get("weights")
        engine = ScoreEngine(weights=weights)
        result = engine.calculate(
            dims,
            veto=bool(payload.get("veto", False)),
            veto_reason=str(payload.get("veto_reason", "")),
            details={"stock_code": payload.get("stock_code", "")},
        )
        top_n = payload.get("top_n")
        if top_n is not None:
            one = {payload.get("stock_code", "unknown"): result}
            result["top_n_suggestion"] = engine.to_holdings(one, top_n=int(top_n))
        # 研究历史(score 类型), 静默失败不阻塞
        try:
            save_experiment({
                "type": "score", "subject": payload.get("stock_code", "score"),
                "params": {"weights": engine.weights, "veto": bool(payload.get("veto", False))},
                "date_range": [], "app_version": APP_VERSION,
                "summary": {"total_score": result["total_score"], "level": result["level"]},
                "result": result,
            })
        except Exception as e:
            logger.warning("[research_store] 评分实验记录跳过: %s", e)
        return result
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        logger.exception("五维评分失败: %s", e)
        raise HTTPException(status_code=500, detail=f"五维评分失败: {e}")
