#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
多因子引擎 (v3.17 / FR-3.17.3)
- 估值面 / 基本面 / 资金面 / 情绪面 / 技术面 因子计算 + 历史分位语义标注
- 纯函数无网络依赖（分位/标注/聚合均可单测）；facade `build_factor_panel` 依赖
  data_source_manager 与 stock_info 做数据获取，数据缺失一律优雅降级为"无数据"占位
- 供：① 个股详情"多因子体检"面板展示 ② AI 评估 prompt 增强注入
"""
from typing import List, Dict, Optional, Any

# 分位语义边界
LOW_QUANTILE = 0.3
HIGH_QUANTILE = 0.7


# ─── 纯函数：分位与语义标注 ─────────────────────────

def percentile_rank(values: List[Optional[float]], current: Optional[float]) -> Optional[float]:
    """当前值在历史序列中的分位 (0~1)；数据不足返回 None"""
    vals = [v for v in values if v is not None]
    if not vals or current is None:
        return None
    below = sum(1 for v in vals if v < current)
    return below / len(vals)


def label_by_percentile(pct: Optional[float]) -> Optional[str]:
    """按分位标注 偏低/中性/偏高（描述因子自身水平：如 PE 分位低 → 估值偏低）"""
    if pct is None:
        return None
    if pct <= LOW_QUANTILE:
        return '偏低'
    if pct >= HIGH_QUANTILE:
        return '偏高'
    return '中性'


def _to_float(v: Any) -> Optional[float]:
    try:
        if v is None:
            return None
        f = float(v)
        return f
    except (TypeError, ValueError):
        return None


def _factor(category: str, key: str, label: str, value: Any, unit: str = '',
            pct: Optional[float] = None) -> Dict:
    """构造因子条目（含语义标注）"""
    return {
        'category': category,
        'key': key,
        'label': label,
        'value': value,
        'unit': unit,
        'percentile': round(pct, 2) if pct is not None else None,
        'semantic': label_by_percentile(pct),
    }


# ─── 估值面 ─────────────────────────────────────────

def compute_valuation_factors(rows: List[Dict]) -> List[Dict]:
    """rows: [{trade_date, pe, pb, ps, dv_ratio, total_mv...}...]（**旧→新**，最新在末尾）
    估值类因子按原始分位标注：PE 历史低位 → '偏低'（便宜）"""
    factors: List[Dict] = []
    if not rows:
        return factors
    cur = rows[-1]

    def _add(key, label, vk, unit=''):
        vals = [_to_float(r.get(vk)) for r in rows]
        v = _to_float(cur.get(vk))
        if v is None:
            return
        pct = percentile_rank(vals, v)
        factors.append(_factor('估值', key, label, v, unit, pct))

    _add('pe', '市盈率(PE)', 'pe', '倍')
    _add('pb', '市净率(PB)', 'pb', '倍')
    _add('ps', '市销率(PS)', 'ps', '倍')
    _add('dv', '股息率', 'dv_ratio', '%')
    _add('mv', '总市值', 'total_mv', '万')
    return factors


# ─── 基本面 ─────────────────────────────────────────

def compute_fundamental_factors(fin: Optional[Dict]) -> List[Dict]:
    """fin: {roe, gross_margin, net_margin, revenue_yoy, profit_yoy...}"""
    factors: List[Dict] = []
    if not fin:
        return factors

    def _add(key, label, fk, unit=''):
        v = _to_float(fin.get(fk))
        if v is None:
            return
        factors.append(_factor('基本面', key, label, v, unit))

    _add('roe', '净资产收益率(ROE)', 'roe', '%')
    _add('gross_margin', '毛利率', 'gross_margin', '%')
    _add('net_margin', '净利率', 'net_margin', '%')
    _add('revenue_yoy', '营收同比', 'revenue_yoy', '%')
    _add('profit_yoy', '净利同比', 'profit_yoy', '%')
    return factors


# ─── 资金面 ─────────────────────────────────────────

def compute_moneyflow_factors(rows: List[Dict], recent_n: int = 5) -> List[Dict]:
    """rows: [{trade_date, net_mf_amount(主力净流入, 万元)...}]（**旧→新**）
    产出近 N 日主力净流入合计（5/20）"""
    factors: List[Dict] = []
    if not rows:
        return factors

    def _sum_n(n):
        vals = [_to_float(r.get('net_mf_amount')) for r in rows[-n:]]
        vals = [v for v in vals if v is not None]
        return sum(vals) if vals else None

    f5 = _sum_n(min(recent_n, 5))
    f20 = _sum_n(20)
    if f5 is not None:
        factors.append(_factor('资金', 'net_mf_5d', f'近{min(recent_n, 5)}日主力净流入', f5, '万'))
    if f20 is not None:
        factors.append(_factor('资金', 'net_mf_20d', '近20日主力净流入', f20, '万'))
    return factors


# ─── 情绪面 ─────────────────────────────────────────

def compute_sentiment_factors(quotes: List[Dict]) -> List[Dict]:
    """quotes: [{trade_date, turnover_rate, pct_chg, amount...}]（**旧→新**）
    产出最新换手率/量比(近5日均量比)/最新涨跌幅/成交额"""
    factors: List[Dict] = []
    if not quotes:
        return factors
    cur = quotes[-1]
    amounts = [_to_float(q.get('amount')) for q in quotes]
    amounts = [a for a in amounts if a is not None]

    def _add(key, label, vk, unit=''):
        v = _to_float(cur.get(vk))
        if v is None:
            return
        factors.append(_factor('情绪', key, label, v, unit))

    _add('turnover', '换手率', 'turnover_rate', '%')
    _add('pct_chg', '涨跌幅', 'pct_chg', '%')
    _add('amount', '成交额', 'amount', '万')
    if len(amounts) >= 6:
        cur_a = amounts[-1]
        avg5 = sum(amounts[-6:-1]) / 5
        if avg5 and avg5 > 0:
            factors.append(_factor('情绪', 'vol_ratio', '量比', round(cur_a / avg5, 2), '倍'))
    return factors


# ─── 技术面 ─────────────────────────────────────────

def compute_technical_factors(closes: List[float]) -> List[Dict]:
    """closes: 收盘价序列（**旧→新** 时序，最新在末尾）
    产出价格位置分位 / RSI / 20日均线乖离"""
    factors: List[Dict] = []
    if not closes:
        return factors
    cur = closes[-1]
    pct = percentile_rank(closes, cur)
    factors.append(_factor('技术', 'price_pos', '价格位置', round(cur, 2), '', pct))
    try:
        from ai_indicators import calc_rsi
        rsi = calc_rsi(list(closes))
        if rsi is not None:
            factors.append(_factor('技术', 'rsi', 'RSI(14)', rsi, ''))
    except Exception:
        pass
    if len(closes) >= 21:
        ma20 = sum(closes[-20:]) / 20
        if ma20 > 0:
            dev = (cur - ma20) / ma20 * 100
            factors.append(_factor('技术', 'ma20_dev', '20日均线乖离', round(dev, 2), '%'))
    return factors


# ─── 面板聚合（facade）──────────────────────────────

def build_factor_panel(stock_code: str, data_source=None, stock_info=None,
                       today: Optional[str] = None) -> Dict:
    """组装个股多因子体检面板。
    - data_source: 提供 get_daily_basic / get_financial_data / get_moneyflow（均可缺 → 降级）
    - stock_info: 提供 get_daily_data(ts_code, trade_date)（行情/换手等，可缺 → 降级）
    返回 {factors:[...], summary:{available, categories, generated_at}}
    """
    factors: List[Dict] = []
    generated_at = today or ''

    if data_source is not None:
        try:
            # v3.21: 优先取基本面历史序列算真实分位(PE/PB历史低位→偏低)
            if hasattr(data_source, 'get_daily_basic_series'):
                series = data_source.get_daily_basic_series(stock_code, limit=20)
                if series:
                    factors.extend(compute_valuation_factors(series))
                else:
                    basic = data_source.get_daily_basic(stock_code, limit=1)
                    if basic:
                        factors.extend(compute_valuation_factors([basic]))
            else:
                basic = data_source.get_daily_basic(stock_code, limit=20)
                if basic:
                    factors.extend(compute_valuation_factors([basic]))
        except Exception:
            pass
        try:
            fin = data_source.get_financial_data(stock_code)
            factors.extend(compute_fundamental_factors(fin))
        except Exception:
            pass
        try:
            mf = data_source.get_moneyflow(stock_code, limit=20)
            factors.extend(compute_moneyflow_factors(mf or [], 5))
        except Exception:
            pass

    if stock_info is not None:
        try:
            closes = []
            # 尝试从 K 线/历史行情提取收盘价序列（由调用方注入的 stock_info 实现决定）
            if hasattr(stock_info, 'get_close_series'):
                closes = stock_info.get_close_series(stock_code, 60) or []
            factors.extend(compute_technical_factors([float(c) for c in closes if c is not None]))
        except Exception:
            pass

    cats = sorted({f['category'] for f in factors})
    return {
        'stock_code': stock_code,
        'factors': factors,
        'summary': {
            'available': len(factors),
            'categories': cats,
            'generated_at': generated_at,
        },
    }
