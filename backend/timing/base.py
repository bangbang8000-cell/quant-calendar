#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""择时域核心契约 (v7.5 FR-7.5-1)

设计决策(PRD §8.2): 择时是 Overlay, 不是独立执行引擎, 不产持仓矩阵、不进日历。
TimingSignal 只输出 {action, strength, target_exposure, support/resistance},
经 overlay.apply_timing_overlay 注入 generate_signals 的目标仓位, 共用单一回测引擎,
避免 KHunter "回测与实盘双份逻辑" 反模式(L2)。

T-1 防前视: 回测模式(use_prev_day_signal=True)用倒数第二根K线判信号, 末日仅作交易价参考。
"""
from dataclasses import dataclass, field
from typing import Dict, Optional

import pandas as pd

VALID_ACTIONS = ("buy", "sell", "add", "reduce", "hold")


@dataclass
class TimingSignal:
    action: str = "hold"              # buy/sell/add/reduce/hold
    strength: float = 0.0             # 信号强度 0-1
    target_exposure: float = 1.0      # 建议目标仓位系数 0-1
    support: float = 0.0
    resistance: float = 0.0
    add_count: int = 0
    indicators: Dict = field(default_factory=dict)
    message: str = ""

    def __post_init__(self):
        if self.action not in VALID_ACTIONS:
            raise ValueError(f"非法 action {self.action!r}, 允许 {VALID_ACTIONS}")
        self.strength = max(0.0, min(1.0, float(self.strength)))
        self.target_exposure = max(0.0, min(1.0, float(self.target_exposure)))


def _signal_bar(df: pd.DataFrame, use_prev_day_signal: bool) -> pd.Series:
    """返回用于判信号的K线(回测模式用 T-1, 防前视)"""
    if df is None or df.empty:
        return pd.Series(dtype=float)
    if use_prev_day_signal and len(df) >= 2:
        return df.iloc[-2]
    return df.iloc[-1]


class TimingStrategy:
    """择时策略基类: 子类实现 evaluate(df, use_prev_day_signal) -> TimingSignal

    支持两种传参: 构造期默认值 TimingStrategy(oversold=25) 与调用期 params 覆盖。
    """
    id = ""
    name = ""
    version = "0.1.0"

    def __init__(self, **defaults):
        self.defaults = defaults

    def _params(self, params: Optional[Dict]) -> Dict:
        merged = dict(self.defaults)
        if params:
            merged.update(params)
        return merged

    def evaluate(self, df: pd.DataFrame, use_prev_day_signal: bool = True,
                 params: Optional[Dict] = None) -> TimingSignal:
        raise NotImplementedError

    @staticmethod
    def _ascending(df: pd.DataFrame) -> pd.DataFrame:
        """统一正序(最旧在前); 兼容 date 列或 DatetimeIndex"""
        d = df.copy()
        if "date" in d.columns:
            d["date"] = d["date"].astype(str).str.slice(0, 10)
            return d.sort_values("date").reset_index(drop=True)
        return d
