#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""择时与市场状态 API (v7.5 FR-7.5-2/3/4/5)

- GET  /api/timing/strategies  8 策略清单 + Overlay 仓位映射
- POST /api/timing/evaluate    买卖点序列 + 研究预览绩效 (不产矩阵)
- POST /api/timing/state       市场状态 + 迁移概率 + 历史时间轴

择时只输出仓位系数注入 generate_signals, 共用单一回测引擎; 不进日历。
评估写入 research_experiments(timing / market_state), 失败静默不阻塞。
"""
import logging
from dataclasses import asdict
from datetime import date, timedelta
from typing import Any, Dict, List

import numpy as np
import pandas as pd
from fastapi import APIRouter, Depends, HTTPException

from auth import get_non_guest_user

logger = logging.getLogger(__name__)
router = APIRouter(prefix="/timing", tags=["择时研究"])

_FIELDS = ("open", "high", "low", "close", "volume")
_STATE_EXPOSURE = {
    "bull_trend": 1.0, "bull_shock": 0.8,
    "bear_shock": 0.5, "bear_trend": 0.2, "unknown": 0.5,
}
_TRADE_ACTIONS = ("buy", "sell", "add", "reduce")


def _jsonable(obj):
    """numpy / pandas 标量 → JSON 原生类型, 避免响应序列化失败"""
    if isinstance(obj, dict):
        return {str(k): _jsonable(v) for k, v in obj.items()}
    if isinstance(obj, (list, tuple)):
        return [_jsonable(v) for v in obj]
    if isinstance(obj, np.integer):
        return int(obj)
    if isinstance(obj, np.floating):
        return float(obj)
    if isinstance(obj, np.bool_):
        return bool(obj)
    if isinstance(obj, pd.Timestamp):
        return obj.strftime("%Y-%m-%d")
    return obj


def _resolve_bars(payload: Dict[str, Any]):
    """优先 payload.bars, 其次真实门户, 最后可复现模拟数据。返回 (df, source)。"""
    bars = payload.get("bars")
    if bars:
        df = pd.DataFrame(bars)
        if "date" not in df.columns:
            df.insert(0, "date", [str(x) for x in df.index])
        return df, "payload"
    symbol = str(payload.get("symbol") or "000001.SH")
    end = str(payload.get("end_date") or date.today().isoformat())
    start = str(payload.get("start_date") or (date.today() - timedelta(days=240)).isoformat())
    try:
        from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
        from strategy_sdk.data_portal import RealDataPortal
        panel = RealDataPortal().get_panel(list(_FIELDS), start, end, universe=[symbol])
        if panel is not None and not panel.empty:
            df = panel_to_desc_df(panel, symbol, _FIELDS)
            if len(df) >= 20:
                return df, "realtime"
    except Exception as e:
        logger.info("[timing] 真实数据不可用, 降级模拟: %s", e)
    from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
    from strategy_sdk.testsupport import FakePortal
    dates = pd.bdate_range(end=end, periods=120).strftime("%Y-%m-%d").tolist()
    panel = FakePortal(dates=dates, symbols=[symbol], seed=2026).get_panel(
        list(_FIELDS), start, end, universe=[symbol])
    return panel_to_desc_df(panel, symbol, _FIELDS), "simulated"


def _ascending(df: pd.DataFrame) -> pd.DataFrame:
    """择时判定统一用正序(最旧在前), 与 _signal_bar 的 iloc[-1] 口径一致"""
    out = df.copy()
    out["date"] = out["date"].astype(str).str.slice(0, 10)
    return out.sort_values("date").reset_index(drop=True)


def _date_range(asc: pd.DataFrame) -> List[str]:
    if asc.empty or "date" not in asc.columns:
        return []
    return [str(asc["date"].iloc[0]), str(asc["date"].iloc[-1])]


def _record(etype, subject, params, date_range, summary, result):
    """写研究历史, 失败静默不阻塞 (与 v7.4 评分 API 一致)"""
    try:
        from backend_info import APP_VERSION
        from research_store import save_experiment
        save_experiment({
            "type": etype, "subject": subject, "params": params,
            "date_range": date_range, "app_version": APP_VERSION,
            "summary": summary, "result": result,
        })
    except Exception as e:
        logger.warning("[research_store] %s 实验记录跳过: %s", etype, e)


def _simple_performance(asc: pd.DataFrame, points: List[Dict]) -> Dict[str, Any]:
    """研究预览绩效: 信号次日生效, 按 exposure 加权净值 (最终以共用回测引擎为准)"""
    if len(asc) < 2 or "close" not in asc.columns:
        return {"total_return": 0.0, "note": "数据不足"}
    close = pd.to_numeric(asc["close"], errors="coerce").reset_index(drop=True)
    rets = close.pct_change().fillna(0.0).tolist()
    by_date: Dict[str, float] = {}
    for p in points:
        by_date[p["date"]] = float(p["exposure"])
    exposure, pending, equity, peak, max_dd = 1.0, None, 1.0, 1.0, 0.0
    for i, r in enumerate(rets):
        if pending is not None:
            exposure = pending
            pending = None
        equity *= (1.0 + exposure * float(r))
        peak = max(peak, equity)
        max_dd = max(max_dd, (peak - equity) / peak)
        # 当日收盘产生信号, 次日生效
        sig = by_date.get(str(asc["date"].iloc[i]))
        if sig is not None:
            pending = sig
    return {
        "total_return": round(equity - 1.0, 4),
        "max_drawdown": round(max_dd, 4),
        "trade_count": len(points),
        "note": "研究预览口径: 信号次日生效; 最终绩效以共用回测引擎为准",
    }


@router.get("/strategies")
async def timing_strategies(_: Dict = Depends(get_non_guest_user)):
    """8 个择时策略清单 + Overlay 仓位映射 (不产持仓矩阵)"""
    from timing.overlay import _EXPOSURE
    from timing.registry import list_timing
    strategies = list_timing()
    return {
        "strategies": strategies,
        "count": len(strategies),
        "exposure_mapping": _EXPOSURE,
        "output_contract": "TimingSignal -> Overlay 仓位系数; 不产持仓矩阵, 不进日历",
    }


@router.post("/evaluate")
async def timing_evaluate(payload: Dict[str, Any], _: Dict = Depends(get_non_guest_user)):
    """逐日评估择时信号 → 买卖点序列 + 研究预览绩效 (Overlay 口径)"""
    sid = payload.get("sid") or payload.get("strategy_id")
    if not sid:
        raise HTTPException(status_code=400, detail="缺少 sid")
    try:
        from timing.registry import get_timing
        st = get_timing(str(sid))
    except KeyError as e:
        raise HTTPException(status_code=404, detail=str(e))

    df, source = _resolve_bars(payload)
    if df is None or df.empty or not {"close", "high", "low"}.issubset(df.columns):
        raise HTTPException(status_code=422, detail="K线数据不足, 无法评估择时")
    asc = _ascending(df)
    use_prev = bool(payload.get("use_prev_day_signal", True))
    params = payload.get("params")
    warmup = max(int(payload.get("warmup", 30)), 0)

    # 逐日切片: 第 i 日只用 [:i+1] 的数据, 杜绝整段前视
    points: List[Dict] = []
    for i in range(warmup, len(asc)):
        sig = st.evaluate(asc.iloc[:i + 1].copy(), use_prev_day_signal=use_prev, params=params)
        if sig.action in _TRADE_ACTIONS:
            points.append({
                "date": str(asc["date"].iloc[i]),
                "price": float(asc["close"].iloc[i]),
                "action": sig.action,
                "strength": round(float(sig.strength), 4),
                "exposure": round(float(sig.target_exposure), 4),
                "message": sig.message,
            })

    from timing.overlay import signal_to_exposure
    current = st.evaluate(asc, use_prev_day_signal=use_prev, params=params)
    exposure = signal_to_exposure(current)
    perf = _simple_performance(asc, points)
    result = {
        "sid": sid, "name": st.name, "data_source": source,
        "use_prev_day_signal": use_prev,
        "current_signal": _jsonable(asdict(current)),
        "current_exposure": round(float(exposure), 4),
        "points": points, "point_count": len(points), "performance": perf,
        "overlay_only": True, "holdings_matrix": None, "calendar_opt_in": False,
    }
    _record("timing", str(sid),
            {"params": params or {}, "use_prev_day_signal": use_prev, "warmup": warmup},
            _date_range(asc),
            {"point_count": len(points), "current_action": current.action,
             "total_return": perf.get("total_return")},
            result)
    return result


@router.post("/state")
async def timing_state(payload: Dict[str, Any], _: Dict = Depends(get_non_guest_user)):
    """市场状态: 四状态 + 迁移概率 + 历史时间轴 + 温度/ADX 仓位上限"""
    df, source = _resolve_bars(payload)
    if df is None or df.empty or "close" not in df.columns:
        raise HTTPException(status_code=422, detail="K线数据不足, 无法识别市场状态")
    asc = _ascending(df)
    from timing.market_state import MarketStateAnalyzer
    analyzer = MarketStateAnalyzer()
    st = analyzer.detect_state(asc)
    state = _jsonable(asdict(st))
    state.update({
        "data_source": source,
        "exposure_cap": _STATE_EXPOSURE.get(st.state, 0.5),
        "temperature_exposure": round(max(0.2, min(1.0, st.temperature / 100.0)), 4),
        "timeline": analyzer.state_timeline(asc),
        "transition_matrix": analyzer.transition_matrix(asc),
    })
    _record("market_state", str(payload.get("symbol") or "index"),
            {"source": source}, _date_range(asc),
            {"state": st.state, "confidence": st.confidence,
             "temperature": st.temperature, "adx_tier": st.adx_tier},
            state)
    return state
