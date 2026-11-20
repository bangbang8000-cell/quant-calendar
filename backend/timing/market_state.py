#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""市场状态 (v7.5 FR-7.5-3/4): HMM四状态 + 迁移概率 + 历史时间轴 + 温度 + ADX

仅用 T1 指数 K 线(close/high/low), 不依赖高积分 Tushare 字段, 免费数据源可运行。
优先 hmmlearn.GaussianHMM; 依赖缺失/样本不足时降级"收益均值×波动率"分类,
四状态语义(牛趋/牛震/熊震/熊趋)保持一致, 数据不足诚实标注 unknown(L3/E4/O1)。
"""
from dataclasses import dataclass, field
from typing import Dict, List, Tuple

import numpy as np
import pandas as pd

_STATES = ("bull_trend", "bull_shock", "bear_shock", "bear_trend", "unknown")
# 隐藏状态按 (收益均值, 波动率) 映射: 低收益组→熊, 高收益组→牛; 组内低波动→震, 高波动→趋
_SEMANTIC = ("bear_trend", "bear_shock", "bull_shock", "bull_trend")
_TIMELINE_LEN = 90


@dataclass
class MarketState:
    state: str
    confidence: float
    adx_tier: str = "ranging"
    temperature: float = 50.0
    transition_probs: Dict[str, float] = field(default_factory=dict)
    timeline: List[Dict] = field(default_factory=list)
    engine: str = "heuristic"   # hmmlearn / heuristic

    def __post_init__(self):
        self.confidence = round(float(max(0.0, min(1.0, self.confidence))), 4)


def _series(df: pd.DataFrame):
    """统一抽取 (dates, close, ret); 输入允许 date 列或 DatetimeIndex"""
    if df is None or df.empty:
        return [], pd.Series(dtype=float), pd.Series(dtype=float)
    d = df.copy()
    if "date" in d.columns:
        d["date"] = d["date"].astype(str).str.slice(0, 10)
        d = d.sort_values("date").reset_index(drop=True)
        dates = [str(x) for x in d["date"]]
    else:
        dates = [str(x)[:10] for x in d.index]
    close = pd.to_numeric(d["close"], errors="coerce").reset_index(drop=True)
    ret = close.pct_change().reset_index(drop=True)
    return dates, close, ret


def _heuristic_state_at(close: pd.Series, ret: pd.Series, end: int) -> Tuple[str, float]:
    """简化状态分类: 近期收益均值定方向, 相对波动定趋势/震荡 (T-1 截止 end)"""
    recent = ret.iloc[max(0, end - 19):end + 1].dropna()
    if len(recent) < 10:
        return "unknown", 0.0
    mu = float(recent.mean())
    vol = float(recent.std()) if len(recent) > 1 else 0.0
    older = ret.iloc[max(0, end - 59):max(0, end - 19)].dropna()
    vol_ref = float(older.std()) if len(older) > 5 else vol
    high_vol = vol > vol_ref * 1.1 if vol_ref > 0 else False
    seg = close.iloc[max(0, end - 19):end + 1].dropna()
    ma20 = float(seg.mean()) if len(seg) else float(close.iloc[end])
    ma60 = float(close.iloc[max(0, end - 59):end + 1].mean())
    trend_up = mu > 0 and ma20 > ma60
    trend_down = mu < 0 and ma20 < ma60
    if trend_up:
        state = "bull_trend" if high_vol else "bull_shock"
    elif trend_down:
        state = "bear_trend" if high_vol else "bear_shock"
    else:
        state = "bull_shock" if mu >= 0 else "bear_shock"
    conf = min(abs(mu) / (vol + 1e-9) * 0.3 + 0.4, 1.0)
    return state, round(float(conf), 4)


def _fit_hmm(ret: pd.Series):
    """GaussianHMM 拟合日收益 → (model, hidden, label, proba); 不可用返回 None"""
    if len(ret) < 60:
        return None
    try:
        from hmmlearn.hmm import GaussianHMM
    except ImportError:
        return None
    try:
        x = np.nan_to_num(ret.to_numpy(dtype=float).reshape(-1, 1), nan=0.0)
        model = GaussianHMM(n_components=4, covariance_type="diag",
                            n_iter=100, tol=1e-4, random_state=42)
        model.fit(x)
        hidden = model.predict(x)
        proba = model.predict_proba(x)
        # 隐藏状态 → 四状态语义: 按均值分熊/牛两组, 组内按波动分震荡/趋势
        stats = []
        for k in range(4):
            seg = x[hidden == k, 0]
            stats.append((float(seg.mean()) if len(seg) else 0.0,
                          float(seg.std()) if len(seg) > 1 else 0.0, k))
        by_mean = sorted(stats, key=lambda t: t[0])
        label: Dict[int, str] = {}
        for group, prefix in ((by_mean[:2], "bear"), (by_mean[2:], "bull")):
            by_vol = sorted(group, key=lambda t: t[1])
            label[by_vol[0][2]] = prefix + "_shock"
            label[by_vol[1][2]] = prefix + "_trend"
        return model, hidden, label, proba
    except Exception:
        # HMM 拟合失败(样本退化/协方差奇异) → 降级启发式, 不抛给调用方
        return None


class MarketStateAnalyzer:
    """T1 指数 K 线 → 四状态 + 迁移概率 + 历史时间轴 (HMM 优先, 启发式兜底)"""

    def detect_state(self, df: pd.DataFrame) -> MarketState:
        dates, close, ret = _series(df)
        if len(close) < 30:
            return MarketState("unknown", 0.0, engine="heuristic")
        fit = _fit_hmm(ret)
        timeline = self.state_timeline(df)
        if fit is not None:
            _, hidden, label, proba = fit
            state = label.get(int(hidden[-1]), "unknown")
            conf = float(proba[-1, int(hidden[-1])])
            trans = self.transition_matrix(df)
            engine = "hmmlearn"
        else:
            state, conf = _heuristic_state_at(close, ret, len(ret) - 1)
            trans = self.transition_matrix(df)
            engine = "heuristic"
        return MarketState(
            state=state, confidence=conf,
            adx_tier=adx_tier(df), temperature=market_temperature(df),
            transition_probs=trans, timeline=timeline, engine=engine,
        )

    def state_timeline(self, df: pd.DataFrame, limit: int = _TIMELINE_LEN) -> List[Dict]:
        """状态历史时间轴 (最近 limit 个交易日, 每条含 date/state/confidence)"""
        dates, close, ret = _series(df)
        if not dates:
            return []
        fit = _fit_hmm(ret)
        if fit is not None:
            _, hidden, label, proba = fit
            n = min(len(dates), limit)
            return [{
                "date": dates[i], "state": label.get(int(hidden[i]), "unknown"),
                "confidence": round(float(proba[i, int(hidden[i])]), 4),
            } for i in range(len(dates) - n, len(dates))]
        out = []
        for i in range(max(20, len(dates) - limit), len(dates)):
            state, conf = _heuristic_state_at(close, ret, i)
            out.append({"date": dates[i], "state": state, "confidence": conf})
        return out

    def transition_matrix(self, df: pd.DataFrame) -> Dict[str, float]:
        """当前状态的下一状态迁移概率 (HMM 用 transmat_, 否则启发式频次估计)"""
        dates, _, ret = _series(df)
        if not dates:
            return {}
        fit = _fit_hmm(ret)
        if fit is not None:
            model, hidden, label, _ = fit
            cur = int(hidden[-1])
            row = model.transmat_[cur]
            return {label[j]: round(float(row[j]), 4) for j in range(4)}
        timeline = self.state_timeline(df)
        if not timeline:
            return {}
        cur = timeline[-1]["state"]
        counts: Dict[str, int] = {}
        for a, b in zip(timeline, timeline[1:]):
            if a["state"] == cur:
                counts[b["state"]] = counts.get(b["state"], 0) + 1
        total = sum(counts.values())
        if not total:
            return {}
        return {k: round(v / total, 4) for k, v in sorted(counts.items())}


def market_temperature(df: pd.DataFrame) -> float:
    """市场温度 0-100: 近 20 日平均涨幅 + 上涨占比"""
    if df is None or len(df) < 20:
        return 50.0
    _, close, _ = _series(df)
    if len(close) < 20:
        return 50.0
    ret = close.pct_change().dropna().iloc[-20:]
    up_ratio = float((ret > 0).mean())
    mom = float(ret.mean()) * 100
    temp = 50 + mom * 5 + (up_ratio - 0.5) * 40
    return round(max(0.0, min(100.0, temp)), 1)


def adx_tier(df: pd.DataFrame, period: int = 14) -> str:
    """ADX 档位: clear(>=25 趋势明确) / emerging(20-25) / ranging(<20 震荡)"""
    if df is None or len(df) < period + 2:
        return "ranging"
    high = pd.to_numeric(df["high"], errors="coerce")
    low = pd.to_numeric(df["low"], errors="coerce")
    close = pd.to_numeric(df["close"], errors="coerce")
    up = high.diff()
    down = -low.diff()
    plus = np.where((up > down) & (up > 0), up, 0.0)
    minus = np.where((down > up) & (down > 0), down, 0.0)
    atr = pd.concat([high - low, (high - close.shift(1)).abs(),
                     (low - close.shift(1)).abs()], axis=1).max(axis=1).rolling(period).mean()
    if atr.iloc[-1] <= 0 or pd.isna(atr.iloc[-1]):
        return "ranging"
    pdi = 100 * pd.Series(plus).rolling(period).mean() / atr
    mdi = 100 * pd.Series(minus).rolling(period).mean() / atr
    dx = 100 * (pdi - mdi).abs() / (pdi + mdi).replace(0, np.nan)
    adx = dx.rolling(period).mean().iloc[-1]
    if pd.isna(adx):
        return "ranging"
    if adx >= 25:
        return "clear"
    if adx >= 20:
        return "emerging"
    return "ranging"
