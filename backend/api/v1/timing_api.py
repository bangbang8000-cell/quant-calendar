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

# v7.20: 信号字典单一事实来源 (策略判断 -> 界面文案)
from timing.signal_dict import (
    SIGNAL_DICTIONARY, action_display, signal_display, matrix_legend,
)



def _signal_meta(df, source: str, degraded: bool = False, reason: str = "") -> dict:
    """v7.16 FR-5: 信号三要素 — 数据截止/生成时间/数据来源 + 降级标记。"""
    from timeutil import cst_iso
    asc = _ascending(df) if df is not None and not df.empty else None
    dr = _date_range(asc) if asc is not None else []
    return {
        "as_of": dr[-1] if dr else None,
        "generated_at": cst_iso(),
        "date_range": dr,
        "data_source": source,
        "degraded": bool(degraded),
        "degrade_reason": reason,
    }


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


def _bars_sufficient(df, fields=("close", "high", "low"), min_valid=20):
    """v7.16 FR-1: 字段契约校验到值 — 列名齐全且每字段 notna >= min_valid。

    历史实现只做 set(fields).issubset(df.columns), high/low 全 NaN 时仍通过,
    导致 5/8 策略恒 hold 且 data_source 仍标 realtime。此处升级为值校验。
    """
    if df is None or df.empty or not set(fields).issubset(df.columns):
        return False
    try:
        return all(int(df[f].notna().sum()) >= min_valid for f in fields)
    except Exception:
        return False


def _resolve_bars(payload: Dict[str, Any]):
    """优先 payload.bars, 其次真实门户, 最后可复现模拟数据。返回 (df, source)。"""
    bars = payload.get("bars")
    if bars:
        df = pd.DataFrame(bars)
        if "date" not in df.columns:
            df.insert(0, "date", [str(x) for x in df.index])
        return df, "payload"
    symbol = str(payload.get("symbol") or "000001.SH")
    # v7.16 FR-6: 业务"今天"统一北京时间 (UTC 容器下 date.today() 会退一天)
    from timeutil import cst_today
    from datetime import date as _date
    _end = str(payload.get("end_date") or cst_today())
    if payload.get("start_date"):
        _start = str(payload["start_date"])
    else:
        _start = (_date.fromisoformat(_end) - timedelta(days=240)).isoformat()
    end, start = _end, _start
    try:
        from strategy_sdk.builtin._pattern_utils import panel_to_desc_df
        from strategy_sdk.data_portal import RealDataPortal
        panel = RealDataPortal().get_panel(list(_FIELDS), start, end, universe=[symbol])
        if panel is not None and not panel.empty:
            df = panel_to_desc_df(panel, symbol, _FIELDS)
            # v7.16 FR-1: realtime 必须字段齐全且 notna 达标, 否则不冒充 realtime
            if len(df) >= 20 and _bars_sufficient(df):
                return df, "realtime"
            logger.warning("[timing] realtime 面板 OHLC 不完整, 降级模拟: %s", symbol)
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
    if not _bars_sufficient(df):
        raise HTTPException(status_code=422, detail="K线数据不足或 OHLC 字段缺失/全空, 无法评估择时")
    asc = _ascending(df)
    use_prev = bool(payload.get("use_prev_day_signal", True))
    params = payload.get("params")
    warmup = max(int(payload.get("warmup", 30)), 0)

    # 逐日切片: 第 i 日只用 [:i+1] 的数据, 杜绝整段前视
    points: List[Dict] = []
    for i in range(warmup, len(asc)):
        sig = st.evaluate(asc.iloc[:i + 1].copy(), use_prev_day_signal=use_prev, params=params)
        if sig.action in _TRADE_ACTIONS:
            disp = signal_display(sig)  # v7.20: 策略判断与展示文案同源
            points.append({
                "date": str(asc["date"].iloc[i]),
                "price": float(asc["close"].iloc[i]),
                "action": sig.action,
                "strength": round(float(sig.strength), 4),
                "exposure": round(float(sig.target_exposure), 4),
                "message": sig.message,
                "label": disp["label"],
                "tone": disp["tone"],
                "strength_band": disp["strength_band"],
            })

    from timing.overlay import signal_to_exposure
    current = st.evaluate(asc, use_prev_day_signal=use_prev, params=params)
    exposure = signal_to_exposure(current)
    perf = _simple_performance(asc, points)
    result = {
        "sid": sid, "name": st.name, "data_source": source,
        "use_prev_day_signal": use_prev,
        "current_signal": dict(_jsonable(asdict(current)), **{
            k: signal_display(current)[k]
            for k in ("label", "tone", "strength_band", "meaning", "exposure_note")
        }),
        "current_exposure": round(float(exposure), 4),
        "signal_dictionary": SIGNAL_DICTIONARY,  # v7.20: 前端不硬编码文案
        "points": points, "point_count": len(points), "performance": perf,
        "overlay_only": True, "holdings_matrix": None, "calendar_opt_in": False,
        # v7.16 FR-5: 时间戳 + 降级标记 (模拟数据时前端醒目提示)
        **_signal_meta(asc, source, degraded=(source == "simulated"),
                       reason=("真实行情不可用, 已降级模拟" if source == "simulated" else "")),
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
    dr = _date_range(asc)
    from timing.market_state import MarketStateAnalyzer
    analyzer = MarketStateAnalyzer()
    st = analyzer.detect_state(asc)
    state = _jsonable(asdict(st))
    state.update({
        "data_source": source,
        # v7.16 FR-5: 市场状态同样带时间戳
        "as_of": (dr or [None, None])[-1],
        "date_range": dr,
        "generated_at": _signal_meta(asc, source)["generated_at"],
        "degraded": source == "simulated",
        "exposure_cap": _STATE_EXPOSURE.get(st.state, 0.5),
        "temperature_exposure": round(max(0.2, min(1.0, st.temperature / 100.0)), 4),
        "timeline": analyzer.state_timeline(asc),
        "transition_matrix": analyzer.transition_matrix(asc),
        "signal_dictionary": SIGNAL_DICTIONARY,  # v7.20: 与 evaluate/matrix 同口径
    })
    _record("market_state", str(payload.get("symbol") or "index"),
            {"source": source}, dr,
            {"state": st.state, "confidence": st.confidence,
             "temperature": st.temperature, "adx_tier": st.adx_tier},
            state)
    return state


# ─── v7.13: 自选股择时矩阵 (FR-7.5 扩展) ─────────────────────────
_MATRIX_MAX_SYMBOLS = 30


def _watchlist_symbols(username: str) -> List[Dict[str, str]]:
    """当前用户自选股 [{code, name}]; 缺名回退代码。失败返回空, 上层 422。"""
    try:
        import db as db_mod
        rows = db_mod.watchlist_get(username) or []
        return [{"code": str(r.get("stock_code") or "").strip(),
                 "name": str(r.get("name") or "")}
                for r in rows if r.get("stock_code")]
    except Exception as e:
        logger.warning("[timing] 自选股读取失败: %s", e)
        return []


def _stock_name(code: str) -> str:
    # v7.16 FR-4: 修正坏导入(原 from stock_manager 模块不存在, 显式 symbols 时名称恒为空)
    try:
        from stock_info import stock_manager
        return stock_manager.get_name(code) or code
    except Exception:
        return code


def _signal_cell(sig) -> Dict[str, Any]:
    """单元格 = 原始信号(权威) + 字典文案(v7.20)。

    保留 action/strength/exposure/message 原字段, 不改变 overlay 契约;
    附加 label/tone/strength_band/meaning/exposure_note 供界面直读。
    """
    return signal_display(sig)


@router.post("/matrix")
async def timing_matrix(payload: Dict[str, Any], user: Dict = Depends(get_non_guest_user)):
    """自选股 × 择时策略矩阵 (v7.13)

    - symbols 缺省时自动加载当前用户自选股 (watchlist), 也可显式传入
    - 每行 = 一只标的, 每列 = 一个择时策略, 单元格 = 当前信号(action+仓位系数)
    - 仍是 Overlay 契约: 单元格只承载仓位系数, 不产持仓矩阵、不进日历
    - 单只标的数据失败不阻塞整表 (行内 honest error)
    """
    from timing.overlay import signal_to_exposure
    from timing.registry import TIMING_REGISTRY, get_timing

    use_prev = bool(payload.get("use_prev_day_signal", True))
    params = payload.get("params")

    symbols = [str(s).strip() for s in (payload.get("symbols") or []) if str(s).strip()]
    from_watchlist = not symbols
    rows_meta: List[Dict[str, str]] = []
    if from_watchlist:
        rows_meta = _watchlist_symbols(str(user.get("username") or ""))
        if not rows_meta:
            raise HTTPException(status_code=422, detail="自选股为空, 请先在自选股列表添加标的")
        symbols = [m["code"] for m in rows_meta]
    requested_count = len(symbols)
    symbols = symbols[:_MATRIX_MAX_SYMBOLS]
    truncated = requested_count > len(symbols)

    sids = [str(s).strip() for s in (payload.get("sids") or []) if str(s).strip()]
    if not sids:
        sids = list(TIMING_REGISTRY.keys())
    strategies = []
    for sid in sids:
        try:
            st = get_timing(sid)
        except KeyError as e:
            raise HTTPException(status_code=404, detail=str(e))
        strategies.append({"id": sid, "name": st.name})

    by_code = {m["code"]: m["name"] for m in rows_meta}
    matrix_rows: List[Dict[str, Any]] = []
    date_ranges: List[List[str]] = []
    for sym in symbols:
        try:
            df, source = _resolve_bars({"symbol": sym})
            asc = _ascending(df)
            if not _bars_sufficient(asc) or len(asc) < 20:
                matrix_rows.append({"symbol": sym, "name": by_code.get(sym) or _stock_name(sym),
                                    "signals": {}, "avg_exposure": None,
                                    "error": "K线数据不足(≥20根), 未评估"})
                continue
            cells: Dict[str, Dict[str, Any]] = {}
            exposures: List[float] = []
            for meta in strategies:
                st = get_timing(meta["id"])
                sig = st.evaluate(asc, use_prev_day_signal=use_prev, params=params)
                cells[meta["id"]] = _signal_cell(sig)
                exposures.append(float(signal_to_exposure(sig)))
            date_ranges.append(_date_range(asc))
            matrix_rows.append({
                "symbol": sym,
                "name": by_code.get(sym) or _stock_name(sym),
                "data_source": source,
                "signals": cells,
                "avg_exposure": round(sum(exposures) / len(exposures), 4) if exposures else None,
                "error": None,
            })
        except Exception as e:
            logger.warning("[timing] 矩阵行 %s 失败: %s", sym, e)
            matrix_rows.append({"symbol": sym, "name": by_code.get(sym) or _stock_name(sym),
                                "signals": {}, "avg_exposure": None,
                                "error": "评估失败: %s" % e})

    # 按策略聚合: 各动作计数 + 平均仓位, 供表头一眼看共识
    aggregate: Dict[str, Dict[str, Any]] = {}
    for meta in strategies:
        acts: Dict[str, int] = {}
        exps: List[float] = []
        for row in matrix_rows:
            cell = row["signals"].get(meta["id"])
            if cell:
                acts[cell["action"]] = acts.get(cell["action"], 0) + 1
                exps.append(float(cell["exposure"]))
        aggregate[meta["id"]] = {
            "action_counts": acts,
            "action_labels": {a: action_display(a)["label"] for a in acts},  # v7.20
            "action_tones": {a: action_display(a)["tone"] for a in acts},
            "avg_exposure": round(sum(exps) / len(exps), 4) if exps else None,
        }

    all_dates = sorted({d for dr in date_ranges for d in dr})
    ok_rows = [r for r in matrix_rows if not r.get("error")]
    sources = {r["data_source"] for r in ok_rows if r.get("data_source")}
    # v7.16 FR-5: 任一行走模拟 -> 整表降级标记 (前端醒目提示)
    source_degraded = "simulated" in sources
    result = {
        "rows": matrix_rows, "strategies": strategies,
        "aggregate": aggregate, "symbol_count": len(matrix_rows),
        "evaluated_count": len(ok_rows), "error_count": len(matrix_rows) - len(ok_rows),
        "from_watchlist": from_watchlist, "use_prev_day_signal": use_prev,
        "data_sources": sorted(sources),
        "overlay_only": True, "holdings_matrix": None, "calendar_opt_in": False,
        "max_symbols": _MATRIX_MAX_SYMBOLS,
        "requested_count": requested_count, "truncated": truncated,
        # v7.16 FR-5: 矩阵级时间戳; degraded=任一行为模拟数据
        "generated_at": _signal_meta(None, ",".join(sorted(sources)))["generated_at"],
        "as_of": all_dates[-1] if all_dates else None,
        "date_range": all_dates,
        "degraded": source_degraded,
        "signal_dictionary": SIGNAL_DICTIONARY,  # v7.20: 矩阵文案同源下发
        "legend": matrix_legend(),  # v7.21: 图例同源, 前端不硬编码颜色/动作说明
    }
    _record("timing_matrix", ",".join(symbols[:5]) + ("..." if len(symbols) > 5 else ""),
            {"sids": sids, "use_prev_day_signal": use_prev, "from_watchlist": from_watchlist},
            all_dates, {"symbol_count": len(matrix_rows), "error_count": result["error_count"]},
            {"rows": matrix_rows, "aggregate": aggregate})
    return result
