#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Fuyao 影子对拍 (v6.7.0 / B1.4, PRD FR-6.7.3)

目的：新源（Fuyao）与现有源（东财/tushare）**同日同口径**并行取数、只比对不切换，
用连续 5 个交易日的差异率决定能否切主（G1 决策门，阈值：三池 ≤2%、日 K 收盘 =0）。

设计：
- 纯函数 ``compare_pools`` / ``compare_closes`` / ``build_record``：无 IO，便于单测
- ``run_shadow``：注入两侧取数函数，落盘 ``data/fuyao_shadow.json``（按日滚动保留）
- 差异超阈值 → ``should_alert`` 为 True，由上层接既有事件提醒通道
"""

import json
import logging
import os
from datetime import datetime, timedelta, timezone

logger = logging.getLogger(__name__)

#: 三池差异率阈值（D14：≤2%）
POOL_DIFF_THRESHOLD = 0.02
#: 日 K 收盘差异阈值：必须完全一致
CLOSE_DIFF_THRESHOLD = 0.0
#: 台账保留天数
SHADOW_KEEP_DAYS = 30

POOL_KEYS = ('zt', 'zb', 'dt')
POOL_LABELS = {'zt': '涨停池', 'zb': '炸板池', 'dt': '跌停池'}


def _codes(rows, code_field):
    out = set()
    for r in rows or []:
        v = r.get(code_field)
        if v is None:
            continue
        s = str(v).strip()
        if s:
            out.add(s)
    return out


def compare_pools(app_rows, fuyao_rows, *, app_field='ts_code', fuyao_field='ticker'):
    """比对一侧三池；返回 {app_count, fuyao_count, diff_pct, app_only, fuyao_only, ok}。

    diff_pct 以「并集」为分母（对称差异率），避免某一侧为 0 时除零：
    ``len(对称差) / max(1, len(并集))``
    """
    a = _codes(app_rows, app_field)
    f = _codes(fuyao_rows, fuyao_field)
    sym = a ^ f
    union = a | f
    diff_pct = (len(sym) / len(union)) if union else 0.0
    return {
        'app_count': len(a),
        'fuyao_count': len(f),
        'diff_count': len(sym),
        'diff_pct': round(diff_pct, 4),
        'app_only': sorted(a - f)[:50],
        'fuyao_only': sorted(f - a)[:50],
        'ok': diff_pct <= POOL_DIFF_THRESHOLD,
    }


def _norm_date(v):
    """把 '20261030' / '2026-10-30' / 1761...ms 统一成 'YYYYMMDD'。"""
    if v is None:
        return ''
    if isinstance(v, (int, float)):
        try:
            ms = int(v)
            if ms > 10 ** 11:  # 毫秒 → 按 Asia/Shanghai（+08:00）取自然日
                dt = datetime.fromtimestamp(ms / 1000, tz=timezone(timedelta(hours=8)))
                return dt.strftime('%Y%m%d')
            return str(ms)
        except Exception:  # noqa: BLE001
            return ''
    s = str(v).strip().replace('-', '')
    return s[:8]


def compare_closes(app_rows, fuyao_rows, *, tol=1e-6):
    """比对日 K 收盘价。

    app_rows: [{'trade_date': '20261030', 'close': 1392.05}, ...] 或 list[list]
    fuyao_rows: [{'date_ms': 1761..., 'close_price': 1392.05}, ...]
    返回 {compared, mismatches:[{date, app, fuyao}], ok}
    """
    def app_map(rows):
        out = {}
        for r in rows or []:
            if isinstance(r, dict):
                d, c = _norm_date(r.get('trade_date')), r.get('close')
            elif isinstance(r, (list, tuple)) and len(r) >= 2:
                # 本项目 kline 内部行格式: [trade_date, open, close, low, high, vol, ...]
                d = _norm_date(r[0])
                c = r[2] if len(r) >= 6 else r[1]
            else:
                continue
            try:
                out[d] = float(c)
            except (TypeError, ValueError):
                continue
        return out

    def fuyao_map(rows):
        out = {}
        for r in rows or []:
            if not isinstance(r, dict):
                continue
            d = _norm_date(r.get('date_ms'))
            c = r.get('close_price')
            try:
                out[d] = float(c)
            except (TypeError, ValueError):
                continue
        return out

    a, f = app_map(app_rows), fuyao_map(fuyao_rows)
    common = sorted(set(a) & set(f))
    mismatches = []
    for d in common:
        if abs(a[d] - f[d]) > tol:
            mismatches.append({'date': d, 'app': a[d], 'fuyao': f[d]})
    return {
        'compared': len(common),
        'mismatches': mismatches[:50],
        'mismatch_count': len(mismatches),
        'ok': len(mismatches) == 0 and len(common) > 0,
    }


def build_record(date, pools, closes, *, include_st=True):
    """组装一天的台账。pools: {'zt': {...compare_pools 结果}, ...}"""
    items = {}
    for key in POOL_KEYS:
        if key in pools:
            items[key] = dict(pools[key], label=POOL_LABELS[key])
    ok_pools = all(v['ok'] for v in items.values()) if items else False
    ok_closes = bool(closes.get('ok')) if closes else False
    return {
        'date': str(date),
        'include_st': bool(include_st),
        'items': items,
        'closes': closes or {},
        'ok': bool(ok_pools and ok_closes and items),
        'thresholds': {'pool_diff_pct': POOL_DIFF_THRESHOLD, 'close_diff': CLOSE_DIFF_THRESHOLD},
        'ts': datetime.now().strftime('%Y-%m-%d %H:%M:%S'),
    }


def should_alert(record):
    """是否应进事件提醒：任一一池超阈值，或日 K 收盘存在不一致或未参与比对。"""
    if not record:
        return False
    for v in (record.get('items') or {}).values():
        if not v.get('ok'):
            return True
    closes = record.get('closes') or {}
    if closes and not closes.get('ok'):
        return True
    return False


def load_records(path):
    try:
        with open(path, encoding='utf-8') as f:
            data = json.load(f)
        return data if isinstance(data, list) else []
    except Exception:  # noqa: BLE001
        return []


def save_record(path, record, keep_days=SHADOW_KEEP_DAYS):
    """按日期 upsert 后落盘（保留最近 keep_days 天）。"""
    records = [r for r in load_records(path) if str(r.get('date')) != str(record['date'])]
    records.append(record)
    records.sort(key=lambda r: str(r.get('date')))
    records = records[-keep_days:]
    os.makedirs(os.path.dirname(path) or '.', exist_ok=True)
    tmp = path + '.tmp'
    with open(tmp, 'w', encoding='utf-8') as f:
        json.dump(records, f, ensure_ascii=False, indent=2)
    os.replace(tmp, path)  # 原子替换，避免半写
    return records


def run_shadow(date, *, fetch_app_pool, fetch_fuyao_pool, fetch_app_kline, fetch_fuyao_kline,
               sample_codes, path, include_st=True):
    """执行一次对拍并落盘；返回台账记录（失败侧如实留空，不伪造 0）。"""
    pools = {}
    for key in POOL_KEYS:
        try:
            app_rows = fetch_app_pool(key) or []
        except Exception as e:  # noqa: BLE001
            logger.warning('[shadow] %s app 侧失败: %s', key, e)
            app_rows = []
        try:
            f_rows = fetch_fuyao_pool(key) or []
        except Exception as e:  # noqa: BLE001
            logger.warning('[shadow] %s fuyao 侧失败: %s', key, e)
            f_rows = []
        if not app_rows or not f_rows:
            # 非交易日 / 单侧失败：如实标注，不判 ok
            pools[key] = {
                'app_count': len(app_rows), 'fuyao_count': len(f_rows),
                'diff_count': None, 'diff_pct': None, 'app_only': [], 'fuyao_only': [],
                'ok': False, 'reason': 'empty_side',
                'label': POOL_LABELS[key],
            }
            continue
        pools[key] = compare_pools(app_rows, f_rows)

    closes = {'compared': 0, 'mismatches': [], 'mismatch_count': 0, 'ok': False}
    rows_app, rows_f = [], []
    for code in sample_codes or []:
        try:
            rows_app.extend(fetch_app_kline(code) or [])
        except Exception as e:  # noqa: BLE001
            logger.warning('[shadow] %s app kline 失败: %s', code, e)
        try:
            rows_f.extend(fetch_fuyao_kline(code) or [])
        except Exception as e:  # noqa: BLE001
            logger.warning('[shadow] %s fuyao kline 失败: %s', code, e)
    if rows_app and rows_f:
        closes = compare_closes(rows_app, rows_f)

    record = build_record(date, pools, closes, include_st=include_st)
    try:
        save_record(path, record)
    except Exception as e:  # noqa: BLE001
        logger.warning('[shadow] 台账落盘失败: %s', e)
    return record
