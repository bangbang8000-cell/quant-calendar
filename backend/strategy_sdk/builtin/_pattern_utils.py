#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
形态策略公共工具 (v7.4 FR-7.4-8)
- expand_holding_window: 命中信号 → 持有期化的 0/1 矩阵(避免形态稀疏致 hold_days 恒 1)
- panel_to_desc_df: MultiIndex(date,symbol) 面板 → 单股倒序 DataFrame(最新在前, 与 KHunter 口径一致)
"""
from typing import Iterable, List, Set

import numpy as np
import pandas as pd


def expand_holding_window(dates: List[str], symbols: List[str],
                          signals_by_symbol: dict, hold_days: int = 3) -> pd.DataFrame:
    """把"命中日集合"按持有期扩展成 0/1 持仓矩阵。

    Args:
        dates: 升序日期序列(矩阵 index)
        symbols: 股票代码列
        signals_by_symbol: {symbol: set(命中日)} 或全局 set(对所有列生效)
        hold_days: 命中后持有 N 个交易日(含命中日)

    Returns:
        DataFrame(index=dates, columns=symbols, 值=0/1)。命中日 idx i 起 i..i+N-1 为 1,
        不越界; 重叠窗口合并(同一 cell 最多 1)。
    """
    n = int(hold_days)
    if n < 1:
        raise ValueError("hold_days 必须 >= 1")
    date_pos = {d: i for i, d in enumerate(dates)}
    mat = pd.DataFrame(0.0, index=dates, columns=symbols, dtype=float)
    for sym in symbols:
        # 信号集合: 支持 per-symbol dict 或全局 set
        if isinstance(signals_by_symbol, dict) and sym in signals_by_symbol:
            sigs: Set[str] = set(signals_by_symbol[sym])
        elif isinstance(signals_by_symbol, (set, list, tuple)):
            sigs = set(signals_by_symbol)
        else:
            sigs = set()
        for d in sigs:
            i = date_pos.get(d)
            if i is None:
                continue
            end = min(i + n, len(dates))
            mat.iloc[i:end, mat.columns.get_loc(sym)] = 1.0
    return mat


def panel_to_desc_df(panel: pd.DataFrame, symbol: str,
                     fields: Iterable[str] = ("open", "high", "low", "close", "volume")) -> pd.DataFrame:
    """从 MultiIndex(date,symbol) 面板抽取单股, 返回按日期**降序**(最新在前)的 DataFrame。

    KHunter 形态策略以"倒序,iloc[0]=最新"为口径; 此函数统一转换, 避免调用方顺序依赖(未来函数)。
    若面板为普通单股 DataFrame(已含 date 列), 直接排序返回。
    """
    cols = [c for c in fields]
    if isinstance(panel.index, pd.MultiIndex) and "symbol" in panel.index.names:
        try:
            df = panel.xs(symbol, level="symbol")
        except KeyError:
            return pd.DataFrame(columns=cols)
    elif "symbol" in panel.columns:
        df = panel[panel["symbol"] == symbol].drop(columns=["symbol"])
    else:
        df = panel.copy()
    if "date" in df.index.names:
        df = df.reset_index()
    if "date" not in df.columns:
        return pd.DataFrame(columns=cols)
    df = df.copy()
    df["date"] = df["date"].astype(str).str.slice(0, 10)
    df = df.sort_values("date", ascending=False).reset_index(drop=True)
    for c in cols:
        if c not in df.columns:
            df[c] = np.nan
    return df


def descending_dates_from_panel(panel: pd.DataFrame) -> List[str]:
    """从面板 unique date 返回升序日期列表(矩阵 index 用)。"""
    if isinstance(panel.index, pd.MultiIndex) and "date" in panel.index.names:
        dates = panel.index.get_level_values("date").unique().astype(str)
    elif "date" in panel.columns:
        dates = panel["date"].astype(str).unique()
    else:
        return []
    return sorted(dates)
