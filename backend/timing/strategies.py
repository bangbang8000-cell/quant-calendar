#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""8 个择时策略 (v7.5 FR-7.5-1, 移植自 KHunter timing 系列)

全部基于 T1 OHLCV, T-1 信号防前视, 输出 TimingSignal(Overlay), 不产矩阵。
- 均值回归: 布林(触下轨买/上轨卖)、RSI(超卖买/超买卖)、支撑位(近低支撑买/破位卖)
- 海龟族: 唐奇安通道突破入场 + ATR 加仓 + 通道离场(turtle/low_turtle/turtle_plus)
- 组合: 趋势回调缩量、顺势宝(MACD+布林)
"""

import numpy as np
import pandas as pd

from timing.base import TimingSignal, TimingStrategy, _signal_bar


def _rsi(close: pd.Series, period: int = 14) -> pd.Series:
    delta = close.diff()
    gain = delta.clip(lower=0)
    loss = (-delta).clip(lower=0)
    avg_gain = gain.ewm(alpha=1 / period, adjust=False).mean()
    avg_loss = loss.ewm(alpha=1 / period, adjust=False).mean()
    rs = avg_gain / avg_loss.replace(0, np.nan)
    return 100 - 100 / (1 + rs)


def _atr(df: pd.DataFrame, period: int = 14) -> pd.Series:
    h, lo, c = df["high"], df["low"], df["close"]
    prev_c = c.shift(1)
    tr = pd.concat([h - lo, (h - prev_c).abs(), (lo - prev_c).abs()], axis=1).max(axis=1)
    return tr.rolling(period).mean()


def _boll(close: pd.Series, period: int, mult: float):
    mid = close.rolling(period).mean()
    std = close.rolling(period).std()
    return mid, mid + mult * std, mid - mult * std


class BollingerTiming(TimingStrategy):
    id = "bollinger"
    name = "布林带择时"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        p = self._params(params)
        d = self._ascending(df)
        period, mult, buf = int(p.get("period", 20)), float(p.get("multiplier", 2.0)), float(p.get("buy_buffer", 0.02))
        mid, up, low = _boll(d["close"], period, mult)
        d["boll_mid"], d["boll_upper"], d["boll_lower"] = mid, up, low
        bar = _signal_bar(d, use_prev_day_signal)
        if bar.empty or pd.isna(bar.get("boll_lower")):
            return TimingSignal(message="数据不足")
        price = float(bar["close"])
        lower_t = float(bar["boll_lower"]) * (1 + buf)
        if price <= lower_t:
            s = min(abs((float(bar["boll_lower"]) - price) / float(bar["boll_lower"])), 1.0)
            return TimingSignal("buy", s, 1.0, support=float(bar["boll_lower"]),
                                resistance=float(bar["boll_upper"]), message="触及布林下轨")
        if price >= float(bar["boll_upper"]):
            s = min((price - float(bar["boll_upper"])) / float(bar["boll_upper"]), 1.0)
            return TimingSignal("sell", s, 0.0, support=float(bar["boll_lower"]),
                                resistance=float(bar["boll_upper"]), message="触及布林上轨")
        return TimingSignal("hold", 0.0, 1.0, support=float(bar["boll_lower"]),
                            resistance=float(bar["boll_upper"]))


class RSITiming(TimingStrategy):
    id = "rsi"
    name = "RSI择时"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        p = self._params(params)
        d = self._ascending(df)
        period = int(p.get("period", 14))
        oversold, overbought = float(p.get("oversold", 30)), float(p.get("overbought", 70))
        d["rsi"] = _rsi(d["close"], period)
        bar = _signal_bar(d, use_prev_day_signal)
        rsi = float(bar.get("rsi", 50)) if not pd.isna(bar.get("rsi")) else 50.0
        if rsi < oversold:
            return TimingSignal("buy", min((oversold - rsi) / oversold, 1.0), 1.0,
                                indicators={"rsi": rsi}, message="RSI超卖")
        if rsi > overbought:
            return TimingSignal("sell", min((rsi - overbought) / (100 - overbought), 1.0), 0.0,
                                indicators={"rsi": rsi}, message="RSI超买")
        return TimingSignal("hold", 0.0, 1.0, indicators={"rsi": rsi})


class SupportTiming(TimingStrategy):
    id = "support"
    name = "支撑位择时"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        p = self._params(params)
        d = self._ascending(df)
        window = int(p.get("lookback", 20))
        bar = _signal_bar(d, use_prev_day_signal)
        if bar.empty:
            return TimingSignal(message="数据不足")
        # 支撑=近window日最低价; 价格回踩支撑附近买, 跌破支撑卖
        idx = d.index[-1] if use_prev_day_signal else len(d) - 1
        hist = d.iloc[max(0, idx - window):idx]
        support = float(hist["low"].min()) if len(hist) else float(bar["low"])
        price = float(bar["close"])
        buf = float(p.get("buffer", 0.03))
        if price <= support * (1 + buf) and price >= support * 0.98:
            return TimingSignal("buy", 0.6, 1.0, support=support, message="回踩支撑")
        if price < support * 0.98:
            return TimingSignal("sell", 0.8, 0.0, support=support, message="跌破支撑")
        return TimingSignal("hold", 0.0, 1.0, support=support)


class TurtleTiming(TimingStrategy):
    id = "turtle"
    name = "海龟择时"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        return _turtle_core(self, df, use_prev_day_signal, params, low=False, plus=False)


class LowTurtleTiming(TimingStrategy):
    id = "low_turtle"
    name = "低位海龟"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        return _turtle_core(self, df, use_prev_day_signal, params, low=True, plus=False)


class TurtlePlusTiming(TimingStrategy):
    id = "turtle_plus"
    name = "海龟plus"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        return _turtle_core(self, df, use_prev_day_signal, params, low=False, plus=True)


def _turtle_core(st, df, use_prev, params, low, plus):
    """海龟族核心: 唐奇安通道突破入场, ATR 加仓, 反向通道离场"""
    p = st._params(params)
    d = st._ascending(df)
    n_in = int(p.get("n_entry", 10 if not low else 1))
    n_out = int(p.get("n_exit", 5 if not low else 6))
    atr_p = int(p.get("atr_period", 10 if not low else 12))
    if len(d) < max(n_in, n_out, atr_p) + 1:
        return TimingSignal(message="数据不足")
    idx = d.index[-1] if use_prev else len(d) - 1
    bar = _signal_bar(d, use_prev)  # _turtle_core 内参数名为 use_prev
    entry_high = float(d["high"].iloc[max(0, idx - n_in):idx].max())  # 前n_in日最高(不含当日)
    exit_low = float(d["low"].iloc[max(0, idx - n_out):idx].min())
    atr_v = float(_atr(d, atr_p).iloc[idx]) if not pd.isna(_atr(d, atr_p).iloc[idx]) else 0.0
    price = float(bar["close"])
    # 离场优先(跌破短期通道低点)
    if price < exit_low:
        return TimingSignal("sell", 0.8, 0.0, support=exit_low, message="跌破海龟离场通道")
    # 入场(突破n_in日高点); low 变体额外要求不高于MA20(低位)
    if price > entry_high:
        if low and "close" in d.columns:
            ma20 = float(d["close"].iloc[max(0, idx - 19):idx + 1].mean())
            if price > ma20 * 1.05:
                return TimingSignal("hold", 0.0, 1.0, message="低位海龟: 价格过高过滤")
        strength = min((price - entry_high) / max(atr_v, 1e-6) * 0.1, 1.0)
        if plus:
            # turtle_plus 只做第二买点: 有持仓则加仓(此处以突破强度代理)
            return TimingSignal("add", strength, 1.0, add_count=1, message="海龟plus突破加仓")
        return TimingSignal("buy", strength, 1.0, message="海龟通道突破")
    return TimingSignal("hold", 0.0, 1.0, message="海龟无信号")


class UptrendPullbackTiming(TimingStrategy):
    id = "uptrend_pullback"
    name = "趋势回调缩量"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        p = self._params(params)
        d = self._ascending(df)
        ma_n = int(p.get("ma_period", 20))
        vol_ratio = float(p.get("vol_ratio", 0.8))
        bar = _signal_bar(d, use_prev_day_signal)
        if bar.empty or len(d) < ma_n + 1:
            return TimingSignal(message="数据不足")
        idx = d.index[-1] if use_prev_day_signal else len(d) - 1
        ma = float(d["close"].iloc[idx - ma_n + 1:idx + 1].mean())
        vol_now = float(bar["volume"])
        vol_avg = float(d["volume"].iloc[max(0, idx - 5):idx].mean())
        price = float(bar["close"])
        trend_up = price > ma and d["close"].iloc[idx] > d["close"].iloc[max(0, idx - ma_n)]
        if trend_up and vol_avg > 0 and vol_now < vol_avg * vol_ratio and price < d["high"].iloc[max(0, idx - 5):idx + 1].max():
            return TimingSignal("add", 0.6, 1.0, add_count=1, message="上升趋势回调缩量")
        if price < ma * 0.95:
            return TimingSignal("sell", 0.7, 0.0, message="跌破趋势均线")
        return TimingSignal("hold", 0.0, 1.0)


class ShunShiBaoTiming(TimingStrategy):
    id = "macd_bollinger"
    name = "顺势宝(MACD+布林)"
    def evaluate(self, df, use_prev_day_signal=True, params=None):
        p = self._params(params)
        d = self._ascending(df)
        period, mult = int(p.get("period", 20)), float(p.get("multiplier", 2.0))
        mid, up, low = _boll(d["close"], period, mult)
        d["mid"], d["up"], d["low"] = mid, up, low
        ef = d["close"].ewm(span=12, adjust=False).mean()
        es = d["close"].ewm(span=26, adjust=False).mean()
        d["dif"] = ef - es
        d["dea"] = d["dif"].ewm(span=9, adjust=False).mean()
        bar = _signal_bar(d, use_prev_day_signal)
        if bar.empty or pd.isna(bar.get("mid")):
            return TimingSignal(message="数据不足")
        price = float(bar["close"])
        macd_up = float(bar["dif"]) > float(bar["dea"])
        if macd_up and price > float(bar["mid"]) and price <= float(bar["up"]):
            return TimingSignal("buy", 0.7, 1.0, message="MACD多头+站中轨")
        if not macd_up and price < float(bar["mid"]):
            return TimingSignal("sell", 0.7, 0.0, message="MACD空头+破中轨")
        return TimingSignal("hold", 0.0, 1.0)
