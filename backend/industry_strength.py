#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""行业强度作战矩阵 (v7.1.0 / B5.1, PRD FR-7.1.1)

数据来源（T2 周边）：
- 同花顺行业指数目录  `/api/a-share-index/catalog/ths-index-list`
- 行业指数历史日 K    `/api/a-share-index/prices/historical`
- 行业成分 + 个股快照  `/api/a-share-index/constituents/ths-stock-list` + `/api/a-share/prices/snapshot`

指标（全部为**横截面相对**口径）：
- rel_strength_N：行业 N 日涨幅 − 全行业 N 日涨幅中位数（相对强度）
- acceleration：rel_5 − rel_20（强度在加速还是退潮）
- volume_pulse：近 5 日均额 / 近 20 日均额（成交额脉冲）
- rank_change：按 rel_20 的排名变化（5 日排名 vs 20 日排名）
- breadth：行业当前成分中上涨家数占比（**当前成分近似，不等于历史成分**）

纪律（PRD §4.2 禁称清单）：
- 当前成分的等权涨跌只能称「等权涨跌代理」，**不得称「指数贡献」**
- 必须标注数据时间 / 来源 endpoint / 计算口径 / 非投资建议
- 缺数行业显式 `available=false`，**不得填 0**
"""

import json
import logging
import os
import statistics
import time
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

CACHE_TTL = 24 * 3600          # 24h 缓存（PRD 5.4）
LOOKBACKS = (5, 20, 60)
#: 单次刷新的行业上限（防御配额；320 全量 ≈ 64s @5QPS）
MAX_INDUSTRIES = 400

CACHE_FILE = 'industry_strength.json'


def _cst_now():
    return datetime.now(tz=timezone(timedelta(hours=8)))


def _cache_path():
    from paths import DATA_DIR  # noqa: PLC0415
    return os.path.join(DATA_DIR, CACHE_FILE)


def _client():
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('special'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


def _ms(day):
    dt = datetime.strptime(day, '%Y%m%d').replace(tzinfo=timezone(timedelta(hours=8)))
    return int(dt.timestamp() * 1000)


# ==================== 纯函数（可单测，无 IO） ====================


def pct_change(closes, n):
    """N 日涨幅（%）：用 close[-1] / close[-(n+1)]。数据不足返回 None。"""
    if not closes or len(closes) < n + 1:
        return None
    base = closes[-(n + 1)]
    last = closes[-1]
    try:
        if not base:
            return None
        return round((last / base - 1.0) * 100.0, 2)
    except (TypeError, ZeroDivisionError):
        return None


def rel_strength(values, n):
    """相对强度：每个值 − 中位数。全 None 返回空 dict。"""
    valid = {k: v for k, v in (values or {}).items() if v is not None}
    if not valid:
        return {}
    med = statistics.median(valid.values())
    return {k: round(v - med, 2) for k, v in valid.items()}


def volume_pulse(amounts):
    """成交额脉冲：近 5 日均额 / 近 20 日均额。数据不足返回 None。"""
    if not amounts or len(amounts) < 20:
        return None
    a5 = sum(amounts[-5:]) / 5.0
    a20 = sum(amounts[-20:]) / 20.0
    if not a20:
        return None
    return round(a5 / a20, 3)


def rank_of(values):
    """按数值降序排名（1 为最强）；None 不参与。"""
    pairs = [(k, v) for k, v in (values or {}).items() if v is not None]
    pairs.sort(key=lambda kv: kv[1], reverse=True)
    return {k: i + 1 for i, (k, _) in enumerate(pairs)}


def breadth_of(pcts):
    """等权涨跌代理：上涨家数占比（0–1）。空返回 None。"""
    vals = [p for p in (pcts or []) if p is not None]
    if not vals:
        return None
    up = sum(1 for p in vals if p > 0)
    return round(up / len(vals), 4)


def build_row(code, name, closes, amounts, ranks5, ranks20):
    pct = {n: pct_change(closes, n) for n in LOOKBACKS}
    return {
        'index_code': code,
        'name': name,
        'pct': pct,
        'rel': {},
        'volume_pulse': volume_pulse(amounts),
        'rank_20': ranks20.get(code),
        'rank_5': ranks5.get(code),
        'rank_change': (ranks5.get(code) - ranks20.get(code))
        if (code in ranks5 and code in ranks20) else None,
        'bars': len(closes or []),
        'available': bool(closes),
    }


# ==================== 取数（有 IO，可注入 client） ====================


def fetch_catalog(client, tag='industry'):
    r = client.get('index.catalog', '/api/a-share-index/catalog/ths-index-list', {'tag': tag})
    if not r.get('ok'):
        return [], r.get('reason') or 'fetch_failed'
    return (r.get('data') or {}).get('item') or [], None


def fetch_history(client, code, days=90):
    end = _cst_now()
    start = end - timedelta(days=days)
    r = client.get('index.historical', '/api/a-share-index/prices/historical',
                   {'thscode': code, 'interval': '1d',
                    'start': _ms(start.strftime('%Y%m%d')),
                    'end': _ms(end.strftime('%Y%m%d'))})
    if not r.get('ok'):
        return None, r.get('reason') or 'fetch_failed'
    items = (r.get('data') or {}).get('item') or []
    closes = [float(x.get('close_price')) for x in items if x.get('close_price') is not None]
    amounts = [float(x.get('turnover') or 0) for x in items]
    return {'closes': closes, 'amounts': amounts,
            'last_date': _ms_to_day(items[-1].get('date_ms')) if items else None}, None


def _ms_to_day(ms):
    try:
        return datetime.fromtimestamp(int(ms) / 1000, tz=timezone(timedelta(hours=8))).strftime('%Y-%m-%d')
    except (TypeError, ValueError, OSError):
        return None


def refresh(limit=None, client=None):
    """拉取全部行业并计算矩阵，结果写缓存文件。返回 {'available', 'industries', ...}。"""
    if client is None:
        client, why = _client()
        if client is None:
            return {'available': False, 'reason': why}
    catalog, err = fetch_catalog(client)
    if err:
        return {'available': False, 'reason': err}
    codes = catalog[:MAX_INDUSTRIES] if limit is None else catalog[:int(limit)]
    closes_by, amounts_by, names, failed = {}, {}, {}, []
    for item in codes:
        code = item.get('thscode')
        if not code:
            continue
        hist, why = fetch_history(client, code)
        if why or not hist or not hist['closes']:
            failed.append({'code': code, 'reason': why or 'empty'})
            continue
        closes_by[code] = hist['closes']
        amounts_by[code] = hist['amounts']
        names[code] = item.get('name') or code

    valid = list(closes_by)
    if not valid:
        return {'available': False, 'reason': 'no_history',
                'failed': failed[:20], 'requested': len(codes)}

    pct_by_n = {n: {c: pct_change(closes_by[c], n) for c in valid} for n in LOOKBACKS}
    rel_by_n = {n: rel_strength(pct_by_n[n], n) for n in LOOKBACKS}
    ranks5 = rank_of(rel_by_n[5])
    ranks20 = rank_of(rel_by_n[20])
    rows = []
    for c in valid:
        row = build_row(c, names.get(c), closes_by[c], amounts_by[c], ranks5, ranks20)
        row['rel'] = {('rel_%d' % n): rel_by_n[n].get(c) for n in LOOKBACKS}
        row['acceleration'] = (round(rel_by_n[5].get(c, 0) - rel_by_n[20].get(c, 0), 2)
                               if (c in rel_by_n[5] and c in rel_by_n[20]) else None)
        row['available'] = True
        rows.append(row)

    out = {
        'available': True,
        'generated_at': _cst_now().strftime('%Y-%m-%d %H:%M:%S'),
        'data_date': _cst_now().strftime('%Y-%m-%d'),
        'requested': len(codes),
        'covered': len(valid),
        'failed': failed[:20],
        'lookbacks': list(LOOKBACKS),
        'rows': rows,
        'meta': {
            'source': 'fuyao',
            'endpoints': ['/api/a-share-index/catalog/ths-index-list',
                          '/api/a-share-index/prices/historical'],
            'formula': {
                'rel_N': '行业 N 日涨幅 − 全行业 N 日涨幅中位数',
                'acceleration': 'rel_5 − rel_20（>0 加速, <0 退潮）',
                'volume_pulse': '近5日均成交额 / 近20日均成交额',
                'rank_change': 'rank_5 − rank_20（正数表示排名上升）',
            },
            # 注意：此处**不要**写出被禁的词本身，否则导出物会被口径守护拦下
            'caliber': '当前成分的等权涨跌只能称「等权涨跌代理」（不得称指数权重贡献）',
            'disclaimer': '仅供数据观察，不构成投资建议',
        },
    }
    try:
        save_cache(out)
    except Exception as e:  # noqa: BLE001 — 缓存写失败不影响本次返回
        logger.warning('[industry] 缓存写入失败: %s', e)
    return out


def save_cache(data):
    path = _cache_path()
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    tmp = path + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False)
    os.replace(tmp, path)


def load_cache(max_age=CACHE_TTL):
    """读缓存；过期仍返回但标 stale（比返回空更有用）。"""
    path = _cache_path()
    try:
        with open(path, encoding='utf-8') as f:
            data = json.load(f)
    except Exception:  # noqa: BLE001
        return None
    try:
        age = time.time() - os.path.getmtime(path)
    except OSError:
        age = None
    data['cache_age_seconds'] = int(age) if age is not None else None
    data['stale'] = bool(age is not None and age > max_age)
    return data


def get_matrix(auto_refresh=True, limit=None):
    """对外入口：优先缓存，缺失时按需刷新。"""
    cached = load_cache()
    if cached:
        return cached
    if not auto_refresh:
        return {'available': False, 'reason': 'cache_missing'}
    return refresh(limit=limit)
