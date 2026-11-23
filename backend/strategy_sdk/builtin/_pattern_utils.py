#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
形态策略公共工具 (v7.4 FR-7.4-8 / v7.12)
- expand_holding_window: 命中信号 → 持有期化的 0/1 矩阵(避免形态稀疏致 hold_days 恒 1)
- panel_to_desc_df: MultiIndex(date,symbol) 面板 → 单股倒序 DataFrame(最新在前, 与 KHunter 口径一致)
- rolling_desc / pct_change_desc / cummax_desc: 在倒序数据上做"仅向后看"的滚动计算
  (内部先转正序计算再翻回, 保证滚动窗口只含 <= 当前日 的数据, 无未来函数)
"""
import logging
from typing import Iterable, List, Set

import numpy as np
import pandas as pd

logger = logging.getLogger(__name__)


# ---------- 倒序序列上的"仅向后看"计算 ----------

def _asc(series: pd.Series) -> pd.Series:
    return series.reset_index(drop=True).iloc[::-1].reset_index(drop=True)


def rolling_stat_desc(series: pd.Series, window: int, how: str = "mean",
                      min_periods: int = None) -> pd.Series:
    """在倒序序列上计算滚动统计量, 返回与入参同序(倒序)的 Series。

    实现: 翻转成正序 → rolling → 再翻回。因翻转是位置对称的, 每行窗口内只含
    "该日及更早"的数据, 与正序 rolling 完全等价, 不引入未来数据。
    """
    s = series.reset_index(drop=True)
    asc = _asc(s)
    r = asc.rolling(int(window), min_periods=min_periods if min_periods is not None else int(window))
    out = getattr(r, how)()
    return out.iloc[::-1].reset_index(drop=True)


def pct_change_desc(series: pd.Series, periods: int = 1) -> pd.Series:
    """倒序序列上的日涨跌幅(相对 N 个交易日前收盘), 口径与正序 pct_change 一致"""
    s = series.reset_index(drop=True)
    asc = _asc(s)
    out = asc.pct_change(int(periods))
    return out.iloc[::-1].reset_index(drop=True)


def cummax_desc(series: pd.Series) -> pd.Series:
    """倒序序列上的累计最大值(= 上市以来最高, 截至当日), 无未来函数"""
    s = series.reset_index(drop=True)
    asc = _asc(s)
    out = asc.cummax()
    return out.iloc[::-1].reset_index(drop=True)


def ewm_desc(series: pd.Series, span: int = None, alpha: float = None) -> pd.Series:
    """倒序序列上的 EMA(KDJ/MACD 用), 无未来函数"""
    s = series.reset_index(drop=True)
    asc = _asc(s)
    if alpha is not None:
        out = asc.ewm(alpha=alpha, adjust=False).mean()
    else:
        out = asc.ewm(span=span, adjust=False).mean()
    return out.iloc[::-1].reset_index(drop=True)


def rolling_sum_desc(series: pd.Series, window: int) -> pd.Series:
    return rolling_stat_desc(series, window, "sum", min_periods=1)


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
            # v7.16 FR-1: 缺字段补 NaN 不再静默 — 显式告警, 消费方须做值校验
            logger.warning("[panel_to_desc_df] 字段 %s 缺失(symbol=%s), 以 NaN 补齐; "
                           "消费方必须校验 notna, 不得静默计算", c, symbol)
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
