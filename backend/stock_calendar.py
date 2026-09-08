#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.3.14 (T-SP.P1.3): 交易日判断模块 — 前向填充识别法定节假日

分层策略(优先级从高到低, 保证零网络确定性):
1. 已知交易日(由调用方注入 parser.date_list / 真实持仓日期) — 最可靠, 无网络
2. 数据源交易日历(tushare trade_cal / akshare) — 增强覆盖未来/长假, 失败静默
3. weekday 兜底(Mon-Fri) — 数据源不可达时不抛错, 但标注降级

对外: is_trade_day(date) / is_trade_date_str(date_str) / is_holiday(date_str)
"""
import logging
from datetime import datetime, date

logger = logging.getLogger(__name__)

# 内存缓存: {date_str: bool} + 标记数据源降级
_known = set()          # 权威交易日(来自 parser 真实持仓日)
_cache: dict = {}       # is_trade_day 结果缓存
_degraded = False       # 是否降级到 weekday(数据源不可达)


def seed_known_trade_days(dates) -> None:
    """注入已知交易日集合(parser.date_list 等真实数据), 清空派生缓存."""
    global _known, _cache
    _known = set(dates)
    _cache = {}


def clear_cache() -> None:
    global _cache
    _cache = {}


def _fetch_trade_calendar(year: int) -> set:
    """尝试从数据源获取某年全部交易日(增强). 失败返回空集, 不抛错."""
    try:
        from data_sources import data_source_manager
        mgr = data_source_manager
        start = f"{year}0101"
        end = f"{year}1231"
        # 优先 tushare trade_cal
        if mgr._source_client_ready('tushare'):
            pro = mgr._clients['tushare']
            df = pro.trade_cal(start_date=start, end_date=end, is_open='1')
            if df is not None and len(df) > 0:
                col = 'cal_date' if 'cal_date' in df.columns else df.columns[0]
                return {str(d)[:8] for d in df[col].tolist()}
        # 其次 akshare 交易日历
        try:
            import akshare as ak
            df = ak.tool_trade_date_hist_sina()
            if df is not None and len(df) > 0:
                s = set()
                for v in df.iloc[:, 0].tolist():
                    s.add(str(v)[:10].replace('-', ''))
                return {d for d in s if d.startswith(str(year))}
        except Exception:
            pass
    except Exception as e:
        logger.debug('stock_calendar: 数据源交易日历不可用: %s', e)
    return set()


def is_trade_day(d: date) -> bool:
    """判断 d 是否为交易日(带缓存).

    优先级: 已知交易日 → 数据源交易日历 → weekday 兜底(降级标记).
    """
    global _degraded
    ds = d.strftime('%Y-%m-%d')
    if ds in _cache:
        return _cache[ds]
    if d.weekday() >= 5:
        _cache[ds] = False
        return False
    # 已知交易日(真实持仓日): 权威
    if ds in _known:
        _cache[ds] = True
        return True
    # 数据源交易日历: 查询当年, 若命中且该日明确非交易日 → False
    year = d.year
    fetched = _fetch_trade_calendar(year)
    if fetched:
        compact = ds.replace('-', '')
        result = compact in fetched
        _cache[ds] = result
        return result
    # 兜底: weekday 且不在已知 → 视为交易日(降级标记)
    _degraded = True
    _cache[ds] = True
    return True


def is_trade_date_str(date_str: str) -> bool:
    try:
        return is_trade_day(datetime.strptime(date_str, '%Y-%m-%d').date())
    except Exception:
        return False


def is_degraded() -> bool:
    return _degraded
