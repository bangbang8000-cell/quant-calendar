#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v6.6 (T-6.6.21~T-6.6.25): 行情单位换算与格式化纯函数 (PRD FR-6.6.5)

用户原话:
  「指数和个股展示蜡烛图的界面 需要显示总市值过亿的按亿为单位
    当日（周 月 季 年）涨跌幅度，鼠标悬浮后信息也要展示 注意小数点最多2位」

现场 bug (EVAL-v6.6 §3.1.3):
  指数成交额显示 71,562 亿, 真实约 7,156 亿 —— **10 倍虚高**。
  tushare `amount` 单位是**千元**; 千元→亿元 应除 1e5, 旧代码写成 1e4。
  tushare `total_mv` / `circ_mv` 单位是**万元**; 万元→亿元 应除 1e4。

本模块保持纯函数、零 IO, 便于单测与前后端口径一致。
"""
import re

UNIT_YI = "亿"
UNIT_WAN = "万"

# 1 亿元 = 1e5 千元（tushare amount 单位）
KYUAN_PER_YI = 100000.0
# 1 亿元 = 1e4 万元（tushare total_mv/circ_mv 单位）
WAN_PER_YI = 10000.0

_EMPTY = "—"


def _to_float(value):
    """安全转 float; 失败返回 None（含 None / NaN / 空串 / 非数字）。"""
    if value is None or isinstance(value, bool):
        return None
    try:
        if isinstance(value, str):
            txt = value.strip().replace(",", "").replace("%", "")
            if txt in ("", "-", "--", "nan", "None"):
                return None
            num = float(txt)
        else:
            num = float(value)
    except (TypeError, ValueError):
        return None
    if num != num:  # NaN
        return None
    if num in (float("inf"), float("-inf")):
        return None
    return num


def amount_kyuan_to_yi(amount):
    """成交额: 千元 → 亿元（tushare amount 口径）。"""
    num = _to_float(amount)
    return None if num is None else num / KYUAN_PER_YI


def mv_wan_to_yi(mv):
    """市值: 万元 → 亿元（tushare total_mv / circ_mv 口径）。"""
    num = _to_float(mv)
    return None if num is None else num / WAN_PER_YI


def fmt_yi(value_yi):
    """把「亿元」数值格式化: ≥1 亿按亿, 否则按万, 一律 ≤2 位小数。

    用户要求「过亿的按亿为单位」; 未过亿用万避免出现「0.00亿」这种无信息量展示。
    """
    num = _to_float(value_yi)
    if num is None:
        return _EMPTY
    if abs(num) >= 1:
        return f"{num:.2f}{UNIT_YI}"
    return f"{num * 10000:.2f}{UNIT_WAN}"


def fmt_pct(pct):
    """涨跌幅: 带符号, ≤2 位小数（用户明确要求）。"""
    num = _to_float(pct)
    if num is None:
        return _EMPTY
    if num > 0:
        return f"+{num:.2f}%"
    return f"{num:.2f}%"


def _day_key(row):
    for key in ("trade_date", "date", "datetime", "time"):
        if isinstance(row, dict) and row.get(key) is not None:
            return re.sub(r"[^0-9]", "", str(row.get(key)))
    return ""


def period_change_pct(rows, base_close=None):
    """区间涨跌幅(%): (最新收盘 - 基准收盘) / 基准收盘 × 100。

    决策 D3（自然周期口径）: 基准 = **上一周期最后一个交易日的收盘价**,
    由调用方按周期取好 base_close 传入; 未传入时退化为「序列首行收盘」。

    严谨性要求:
      - 输入可能乱序 → 一律按日期升序后取首尾（不能相信传入顺序）;
      - 基准为 0/缺失/数据不足 → 返回 None（宁可不显示, 也不给错数）。
    """
    if not rows:
        return None
    ordered = sorted(
        [r for r in rows if isinstance(r, dict) and _to_float(r.get("close")) is not None],
        key=_day_key,
    )
    if len(ordered) < 2:
        return None
    last_close = _to_float(ordered[-1].get("close"))
    base = _to_float(base_close) if base_close is not None else _to_float(ordered[0].get("close"))
    if last_close is None or base is None or base == 0:
        return None
    return (last_close - base) / base * 100.0
