#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v6.6 (T-6.6.26~T-6.6.28): 指数/个股行情摘要 (PRD FR-6.6.5 §5 数据契约)

用户需求:
  「指数和个股展示蜡烛图的界面 需要显示总市值过亿的按亿为单位
    当日（周 月 季 年）涨跌幅度，鼠标悬浮后信息也要展示 注意小数点最多2位」

契约 (GET /api/market/quote-summary/{code}):
  {
    "success": true,
    "code": "600519.SH",
    "name": "贵州茅台",
    "is_index": false,
    "total_mv_yi": 18000.0,        # 总市值（亿元, 已换算）; 指数为 None → 前端显示「指数不适用」(D2)
    "circ_mv_yi": 18000.0,         # 流通市值（亿元）
    "total_mv_text": "18000.00亿", # 已格式化（过亿按亿, 未过亿按万, ≤2 位）
    "circ_mv_text": "18000.00亿",
    "changes": {                   # 多周期涨跌幅（%, ≤2 位）; 数据不足为 None
      "day": 2.81, "week": 3.10, "month": -1.20, "quarter": 5.40, "year": 12.30
    },
    "changes_text": {"day": "+2.81%", ...},
    "as_of": "2026-10-29"          # 数据日期（诚实性: 让用户知道是哪天的数）
  }
"""
import logging
from datetime import datetime, timedelta

from market_quote_fmt import (
    amount_kyuan_to_yi,
    fmt_pct,
    fmt_yi,
    mv_wan_to_yi,
    period_change_pct,
)

logger = logging.getLogger(__name__)

# 指数代码特征（D2: 指数无「总市值」概念 → 前端显示「指数不适用」）
_INDEX_SUFFIXES = (".SH", ".SZ", ".CSI", ".BJ")
_INDEX_PREFIXES = ("000001.SH", "399001.SZ", "399006.SZ", "000300.SH", "000905.SH",
                   "000016.SH", "000852.SH", "399005.SZ", "000688.SH")


def is_index_code(code):
    """判断是否为指数代码。

    不能只看后缀（个股也是 .SH/.SZ）, 需结合已知指数白名单 + 常见指数段:
      - 沪市指数 000xxx.SH、深市指数 399xxx.SZ、中证 000xxx.CSI
    """
    if not code:
        return False
    code = str(code).upper()
    if code in _INDEX_PREFIXES:
        return True
    if code.endswith(".CSI"):
        return True
    bare = code.split(".")[0]
    suffix = code.split(".")[-1] if "." in code else ""
    if suffix == "SH" and bare.startswith("000"):
        return True
    if suffix == "SZ" and bare.startswith("399"):
        return True
    return False


def _to_float(v):
    try:
        if v is None or isinstance(v, bool):
            return None
        num = float(v)
    except (TypeError, ValueError):
        return None
    if num != num:
        return None
    return num


def _period_base_close(rows, days):
    """按自然周期取基准收盘（决策 D3: 上一周期最后一个交易日）。

    rows 为按日期升序的 [{trade_date, close}]。
    取「最后一个交易日往前推 days 个自然日」所在位置及之前的最后一个收盘;
    数据不足时退化为最早一行（保持可用, 但由 period_change_pct 判定有效性）。
    """
    if not rows:
        return None
    last_date = _parse_date(rows[-1].get("trade_date"))
    if last_date is None:
        return _to_float(rows[0].get("close"))
    target = last_date - timedelta(days=days)
    base = None
    for row in rows:
        row_date = _parse_date(row.get("trade_date"))
        if row_date is None:
            continue
        if row_date <= target:
            base = _to_float(row.get("close"))
        else:
            break
    if base is None:
        base = _to_float(rows[0].get("close"))
    return base


def _parse_date(value):
    if value is None:
        return None
    txt = str(value).strip()
    for fmt in ("%Y%m%d", "%Y-%m-%d", "%Y-%m-%d %H:%M:%S"):
        try:
            return datetime.strptime(txt[:len(fmt) + 2].strip(), fmt)
        except (ValueError, TypeError):
            continue
    digits = "".join(ch for ch in txt if ch.isdigit())
    if len(digits) >= 8:
        try:
            return datetime.strptime(digits[:8], "%Y%m%d")
        except ValueError:
            return None
    return None



def _normalize_rows(rows):
    """把行情行统一成 [{trade_date, close}]。

    真实数据有**两种**形态（踩过坑）:
      - dict:     {'trade_date': '20261029', 'close': 1431.51}
      - 数组:     ['20261029', open, close, low, high, vol, ma5, ma10, ma20, ...]
                  （charts.js 的消费口径: 索引 0=日期, 2=收盘）
    无法识别的一律丢弃, 宁缺毋滥。
    """
    out = []
    for row in rows or []:
        if isinstance(row, dict):
            date = row.get("trade_date") or row.get("date")
            close = row.get("close")
            if date is not None and close is not None:
                out.append({"trade_date": date, "close": close})
        elif isinstance(row, (list, tuple)) and len(row) >= 3:
            date, close = row[0], row[2]
            if date is not None and close is not None:
                out.append({"trade_date": date, "close": close})
    return out


def _sorted_rows(rows):
    """按日期升序排列（不能相信数据源顺序）"""
    if not rows:
        return []
    out = _normalize_rows(rows)
    return sorted(out, key=lambda r: "".join(ch for ch in str(r.get("trade_date") or "") if ch.isdigit()))


def build_quote_summary(code, name=None, daily_basic=None, kline_rows=None, as_of=None):
    """组装行情摘要（纯函数, 无 IO —— 数据由调用方注入, 便于单测）。

    Args:
        code: 证券代码
        name: 名称
        daily_basic: tushare daily_basic dict（total_mv/circ_mv 单位万元）
        kline_rows: 按任意顺序的 [{trade_date, close}] 日线
        as_of: 数据日期
    Returns:
        dict（见模块 docstring 契约）
    """
    is_idx = is_index_code(code)
    db = daily_basic or {}
    rows = _sorted_rows(kline_rows)

    # 市值: 单位万元 → 亿元; 指数不适用（D2）
    total_mv_yi = None
    circ_mv_yi = None
    if not is_idx:
        total_mv_yi = mv_wan_to_yi(db.get("total_mv"))
        circ_mv_yi = mv_wan_to_yi(db.get("circ_mv"))

    # 多周期涨跌幅（D3 自然周期口径）
    last_close = _to_float(rows[-1].get("close")) if rows else None
    day_chg = None
    if rows and len(rows) >= 2:
        prev_close = _to_float(rows[-2].get("close"))
        if prev_close not in (None, 0) and last_close is not None:
            day_chg = (last_close - prev_close) / prev_close * 100.0
    if day_chg is None:
        # 优先用 daily_basic 的 pct_chg（收盘后权威口径）
        day_chg = _to_float(db.get("pct_chg"))

    changes = {
        "day": day_chg,
        "week": period_change_pct(rows, _period_base_close(rows, 7)),
        "month": period_change_pct(rows, _period_base_close(rows, 30)),
        "quarter": period_change_pct(rows, _period_base_close(rows, 91)),
        "year": period_change_pct(rows, _period_base_close(rows, 365)),
    }
    changes = {k: (round(v, 2) if v is not None else None) for k, v in changes.items()}

    data_as_of = as_of
    if data_as_of is None and rows:
        data_as_of = str(rows[-1].get("trade_date") or "") or None

    return {
        "success": True,
        "code": code,
        "name": name,
        "is_index": is_idx,
        "total_mv_yi": round(total_mv_yi, 2) if total_mv_yi is not None else None,
        "circ_mv_yi": round(circ_mv_yi, 2) if circ_mv_yi is not None else None,
        "total_mv_text": fmt_yi(total_mv_yi) if not is_idx else "指数不适用",
        "circ_mv_text": fmt_yi(circ_mv_yi) if not is_idx else "指数不适用",
        "amount_yi": round(amount_kyuan_to_yi(db.get("amount")), 2)
        if amount_kyuan_to_yi(db.get("amount")) is not None else None,
        "changes": changes,
        "changes_text": {k: fmt_pct(v) for k, v in changes.items()},
        "as_of": data_as_of,
    }
