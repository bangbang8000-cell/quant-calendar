#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
盘中增强：异动扫描（离线日线级）— FR-3.17.7 离线部分

- classify_moves: 纯函数，对单只个股日线序列计算异动标签
  （涨停/跌停/放量/异动振幅/连板，按市场 ST/创业板/科创板 区分阈值）
- filter_pool: 按股票池/自选过滤
- run_scan: 遍历股票池拉取日线并扫描；数据不可达优雅降级（不报错）
"""
import logging
from typing import List, Optional

logger = logging.getLogger(__name__)

# ==================== 规则常量（可配） ====================
LIMIT_TOLERANCE = 0.3          # 涨停/跌停判定容差（%），接近阈值即判定（四舍五入误差）
VOLUME_RATIO_THRESHOLD = 2.0   # 量比阈值（当日量 / 前 N 日均量）
AMPLITUDE_THRESHOLD = 8.0      # 振幅阈值（%）— PRD 振幅>8%
LINKED_LIMIT_DAYS = 2          # 连板判定：连续涨停天数 ≥2
VOLUME_WINDOW = 5              # 量比基准窗口（前 N 日均量）

# 异动标签
LABEL_LIMIT_UP = '涨停'
LABEL_LIMIT_DOWN = '跌停'
LABEL_VOLUME = '放量'
LABEL_AMPLITUDE = '异动振幅'
LABEL_LINKED = '连板'

# 前端分组展示顺序
LABEL_ORDER = [LABEL_LIMIT_UP, LABEL_LINKED, LABEL_VOLUME, LABEL_AMPLITUDE, LABEL_LIMIT_DOWN]

DEFAULT_SCAN_LIMIT = 60        # 默认拉取日线条数（需覆盖连板/量比窗口）

# 涨停幅度按市场: 创业板/科创板 20%，北交所 30%，ST 5%，主板 10%
_CHINEXT_STAR_PREFIXES = ('300', '301', '688', '689')
_BSE_PREFIXES = ('8', '4', '92')


def _safe_float(value, default=None):
    """安全转 float，无法转换返回 default（含 NaN）"""
    try:
        if value is None:
            return default
        f = float(value)
        if f != f:  # NaN
            return default
        return f
    except (TypeError, ValueError):
        return default


def _normalize_date_key(d):
    """把 '2026-07-14' / '20260714' / '2026/07/14' 归一化为 8 位数字串"""
    return str(d).replace('-', '').replace('/', '')[:8]


def _limit_ratio(code: str = '', name: str = '') -> float:
    """按市场/ST 返回涨停幅度比例（供涨停/跌停/连板判定）"""
    if name and 'ST' in str(name).upper():
        return 0.05
    code = str(code)
    if code.startswith(_CHINEXT_STAR_PREFIXES):
        return 0.20
    if code.startswith(_BSE_PREFIXES):
        return 0.30
    return 0.10


def _volume_ratio(rows: List[dict], window: int = VOLUME_WINDOW) -> Optional[float]:
    """量比 = 当日成交量 / 前 window 日均量；数据不足返回 None"""
    vols = [_safe_float(r.get('vol')) for r in rows]
    vols = [v for v in vols if v is not None and v > 0]
    if len(vols) < window + 1:
        return None
    base = sum(vols[-(window + 1):-1]) / window
    if base <= 0:
        return None
    return vols[-1] / base


def _amplitude(rows: List[dict]) -> Optional[float]:
    """当日振幅 = (high-low)/前收*100；缺 high/low/前收 返回 None"""
    last = rows[-1]
    high = _safe_float(last.get('high'))
    low = _safe_float(last.get('low'))
    if high is None or low is None or low <= 0:
        return None
    pre_close = None
    if len(rows) >= 2:
        pre_close = _safe_float(rows[-2].get('close'))
    if not pre_close:
        pre_close = low
    return (high - low) / pre_close * 100


def _row_pct_chg(rows: List[dict], i: int) -> Optional[float]:
    """取第 i 根日线的涨跌幅：优先 pct_chg 字段，缺失时由收盘价推算"""
    row = rows[i]
    pct = _safe_float(row.get('pct_chg'))
    if pct is not None:
        return pct
    if i >= 1:
        prev_close = _safe_float(rows[i - 1].get('close'))
        cur_close = _safe_float(row.get('close'))
        if prev_close and cur_close:
            return (cur_close - prev_close) / prev_close * 100
    return None


def _is_limit_day(pct: float, ratio: float, tolerance: float, up: bool = True) -> bool:
    """是否触及涨/跌停：涨跌幅落在 [limit-tol, limit+tol] 带内（近似）"""
    limit = ratio * 100
    if up:
        return limit - tolerance <= pct <= limit + tolerance
    return -(limit + tolerance) <= pct <= -(limit - tolerance)


def _linked_limit_days(rows: List[dict], ratio: float, tolerance: float) -> int:
    """自最新日起连续涨停天数"""
    cnt = 0
    for i in range(len(rows) - 1, -1, -1):
        pct = _row_pct_chg(rows, i)
        if pct is not None and _is_limit_day(pct, ratio, tolerance, up=True):
            cnt += 1
        else:
            break
    return cnt


def classify_moves(rows: List[dict], code: str = '', name: str = '') -> List[str]:
    """对单只个股日线序列计算异动标签列表

    Args:
        rows: 升序（旧→新）的日线 dict 列表，含 date/close，可选
              pct_chg/high/low/vol（缺失字段自动跳过对应规则）
        code: 股票 ts_code（用于按市场判定涨停幅度）
        name: 股票名称（含 ST 时按 5% 涨停判定）

    Returns:
        异动标签列表（如 ['涨停', '连板']）
    """
    if not rows:
        return []
    labels: List[str] = []
    ratio = _limit_ratio(code, name)

    pct_chg = _row_pct_chg(rows, len(rows) - 1)
    if pct_chg is not None and _is_limit_day(pct_chg, ratio, LIMIT_TOLERANCE, up=True):
        labels.append(LABEL_LIMIT_UP)
    if pct_chg is not None and _is_limit_day(pct_chg, ratio, LIMIT_TOLERANCE, up=False):
        labels.append(LABEL_LIMIT_DOWN)

    vol_ratio = _volume_ratio(rows)
    if vol_ratio is not None and vol_ratio >= VOLUME_RATIO_THRESHOLD:
        labels.append(LABEL_VOLUME)

    amplitude = _amplitude(rows)
    if amplitude is not None and amplitude >= AMPLITUDE_THRESHOLD:
        labels.append(LABEL_AMPLITUDE)

    if _linked_limit_days(rows, ratio, LIMIT_TOLERANCE) >= LINKED_LIMIT_DAYS:
        labels.append(LABEL_LINKED)

    return labels


def filter_pool(scan_results: List[dict], pool_codes: Optional[List[str]]) -> List[dict]:
    """按股票池/自选过滤异动结果；pool_codes 为空/None 则不过滤"""
    if not pool_codes:
        return list(scan_results)
    pool = set(str(c).strip() for c in pool_codes if str(c).strip())
    return [m for m in scan_results if str(m.get('code', '')).strip() in pool]


def _normalize_kline_response(ts_code: str, result) -> List[dict]:
    """将 data_source_manager.get_kline_data 返回结构归一化为日线 dict 列表

    兼容两种输入：
    - {"data": [[date, open, close, low, high, vol, ...], ...], "data_source": src}
    - 直接传入 kline 数组列表（market_data.get_kline_data 形态）
    """
    if not result:
        return []
    data = result.get('data') if isinstance(result, dict) else result
    if not isinstance(data, list):
        return []
    rows = []
    prev_close = None
    for bar in data:
        if isinstance(bar, dict):
            try:
                date = str(bar.get('date') or bar.get('trade_date') or '')
                close = float(bar['close'])
                open_ = float(bar.get('open') or close)
                low = float(bar.get('low') or close)
                high = float(bar.get('high') or close)
                vol = float(bar.get('vol') or bar.get('volume') or 0)
            except (TypeError, ValueError, KeyError):
                continue
        elif isinstance(bar, (list, tuple)) and len(bar) >= 6:
            try:
                date = str(bar[0])
                open_ = float(bar[1])
                close = float(bar[2])
                low = float(bar[3])
                high = float(bar[4])
                vol = float(bar[5])
            except (TypeError, ValueError):
                continue
        else:
            continue
        pct_chg = None
        if prev_close:
            pct_chg = (close - prev_close) / prev_close * 100
        rows.append({
            'date': date, 'open': open_, 'close': close,
            'low': low, 'high': high, 'vol': vol,
            'pct_chg': pct_chg, 'amount': None,
        })
        prev_close = close
    return rows


def _name_of(code: str) -> str:
    """股票代码 → 中文名（尽力而为，失败回退代码）"""
    try:
        from stock_info import stock_manager
        name = stock_manager.get_name(code)
        return name if name and name != code else code
    except Exception:
        return code


def _build_move(code: str, rows: List[dict], labels: List[str]) -> dict:
    last = rows[-1]
    vol_ratio = _volume_ratio(rows)
    return {
        'code': code,
        'name': _name_of(code),
        'labels': labels,
        'close': _safe_float(last.get('close')),
        'pct_chg': _safe_float(last.get('pct_chg')),
        'amount': _safe_float(last.get('amount')),
        'volume_ratio': round(vol_ratio, 2) if vol_ratio is not None else None,
        'date': last.get('date'),
    }


def _strategy_pool_codes() -> List[str]:
    """最新交易日策略持仓并集（扫描默认范围之一）"""
    try:
        from data_parser import parser
        dates = parser.get_available_dates()
        if not dates:
            return []
        holdings = parser.get_holdings_by_date(dates[-1])
        codes = set()
        for d in holdings.values():
            for s in d.get('stocks', []):
                if isinstance(s, dict):
                    codes.add(s.get('code', ''))
                else:
                    codes.add(str(s))
        return sorted(c for c in codes if c)
    except Exception as e:
        logger.warning('解析策略池失败: %s', e)
        return []


def _resolve_scan_codes(pool: Optional[List[str]]) -> List[str]:
    """解析待扫描代码列表：显式 pool（含空列表）原样使用；
    None 时按 配置股票池 → 策略池 → 股票清单（全量，性能受限）"""
    if pool is not None:
        return list(dict.fromkeys(str(c).strip() for c in pool if str(c).strip()))
    try:
        from data_refresh_config import get_stock_pool
        cfg_pool = get_stock_pool()
        if cfg_pool:
            return list(cfg_pool)
    except Exception:
        pass
    strat = _strategy_pool_codes()
    if strat:
        return strat
    try:
        from stock_info import stock_manager
        return sorted(stock_manager.stock_map.keys())
    except Exception:
        return []


def resolve_scan_pool(pool: str = 'all', username: Optional[str] = None) -> Optional[List[str]]:
    """将 pool 名称解析为代码列表；返回 None 表示使用默认扫描范围（由 run_scan 决定）

    pool: all | strategies | watchlist
    """
    pool = (pool or 'all').lower()
    if pool == 'watchlist':
        if not username:
            return []
        from event_alert import get_alertable_codes
        return [c['code'] for c in get_alertable_codes(username, scope='watchlist')]
    if pool == 'strategies':
        return _strategy_pool_codes()
    return None  # 'all' → 默认范围


def run_scan(date: Optional[str] = None, pool: Optional[List[str]] = None,
             limit_n: int = DEFAULT_SCAN_LIMIT, manager=None) -> dict:
    """离线异动扫描（日线级）

    Args:
        date: 扫描日期 YYYY-MM-DD（可选；指定时仅纳入截至该日的K线，异动以该日为准）
        pool: 待扫描 ts_code 列表；None 时取配置股票池/策略池/股票清单
        limit_n: 每只股票拉取的日线条数
        manager: 数据源管理器（默认 data_source_manager，测试可注入 fake）

    Returns:
        {date, moves: [{code,name,labels,close,pct_chg,amount,volume_ratio}], note}
        数据不可达整体降级: {date, moves: [], note: '数据暂不可用'}
    """
    if manager is None:
        try:
            from data_sources import data_source_manager
            manager = data_source_manager
        except Exception as e:
            logger.warning('数据源管理器不可用: %s', e)
            return {'date': date, 'moves': [], 'note': '数据暂不可用'}

    codes = _resolve_scan_codes(pool)
    if not codes:
        return {'date': date, 'moves': [], 'note': '暂无扫描范围'}

    req_key = _normalize_date_key(date) if date else None
    moves: List[dict] = []
    failed = 0
    for code in codes:
        try:
            raw = manager.get_kline_data(code, period='daily', limit=limit_n)
            rows = _normalize_kline_response(code, raw)
            if not rows:
                failed += 1
                continue
            if req_key:
                rows = [r for r in rows if _normalize_date_key(r.get('date')) <= req_key]
                if not rows or _normalize_date_key(rows[-1].get('date')) != req_key:
                    failed += 1
                    continue
            labels = classify_moves(rows, code=code, name=_name_of(code))
            if labels:
                moves.append(_build_move(code, rows, labels))
        except Exception as e:
            failed += 1
            logger.warning('异动扫描失败 %s: %s', code, e)

    if not moves and failed >= len(codes):
        return {'date': date, 'moves': [], 'note': '数据暂不可用'}

    note = None
    if failed:
        note = f'{failed}/{len(codes)} 只股票数据不可达'
    moves.sort(key=lambda m: (-len(m.get('labels') or []), -(m.get('pct_chg') or 0)))
    result_date = date or (moves[0].get('date') if moves else None)
    return {'date': result_date, 'moves': moves, 'note': note}
