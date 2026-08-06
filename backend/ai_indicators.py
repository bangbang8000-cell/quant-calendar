#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
技术指标计算模块 (v3.5.0-T7 拆分自 ai_evaluator.py)
- RSI / MACD / EMA / MA 纯函数
- 无状态, 无依赖, 便于单测
"""
from typing import List, Optional

RSI_PERIOD = 14
MACD_FAST = 12
MACD_SLOW = 26
MACD_SIGNAL = 9


def _ema(data, period):
    """指数移动平均 (返回最新值, 兼容 ai_evaluator 原行为)"""
    if len(data) < period:
        return data[-1] if data else None
    k = 2.0 / (period + 1)
    ema = sum(data[:period]) / period
    for price in data[period:]:
        ema = price * k + ema * (1 - k)
    return ema


def _ma(data, period):
    """简单移动平均 (返回最新值)"""
    if len(data) < period:
        return data[-1] if data else None
    return sum(data[-period:]) / period


def calc_rsi(closes: List[float], period: int = RSI_PERIOD) -> Optional[float]:
    """RSI 相对强弱指标 (返回最新值)"""
    if len(closes) < period + 1:
        return None
    gains, losses = [], []
    for i in range(1, len(closes)):
        diff = closes[i] - closes[i - 1]
        gains.append(max(diff, 0))
        losses.append(max(-diff, 0))
    avg_gain = sum(gains[:period]) / period
    avg_loss = sum(losses[:period]) / period
    for i in range(period, len(gains)):
        avg_gain = (avg_gain * (period - 1) + gains[i]) / period
        avg_loss = (avg_loss * (period - 1) + losses[i]) / period
    if avg_loss == 0:
        return 100.0
    rs = avg_gain / avg_loss
    return round(100 - 100 / (1 + rs), 2)


def calc_macd(closes):
    """MACD 指标 — 返回 (dif, dea, hist) tuple (兼容 ai_evaluator 调用)"""
    if len(closes) < MACD_SLOW + MACD_SIGNAL:
        return 0, 0, 0
    ema_fast = _ema(closes, MACD_FAST)
    ema_slow = _ema(closes, MACD_SLOW)
    dif = ema_fast - ema_slow
    dea = dif  # 简化 signal
    hist = (dif - dea) * 2
    return round(dif, 2), round(dea, 2), round(hist, 2)
