#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""三池字段合并层 (v6.8.0 / B2.1, PRD FR-6.8.1)

核心约束：**合并非切换**。
- Fuyao（同花顺，T2 周边）**优先**提供其独有字段：涨停原因、封单峰值、连板文本、ST 标记、连板数
- 本地侧（东财/tushare）补齐 Fuyao 不提供的字段：流通市值、总市值、行业、成交额
- 冲突字段按 `data_tier.arbitrate_field`：T2 → 取 Fuyao；同时记录 `field_source` 便于溯源
- 顶层标注 `include_st`（D4：默认含 ST），页面家数与徽标必须同源

字段口径来自 2026-11-03 实测（limit-up-pool 14 字段 / limit-break-pool 9 / limit-down-pool 7）。
"""

import logging

import data_tier
from shortterm.limits import board_of

logger = logging.getLogger(__name__)

#: 池类型 → Fuyao 字段映射（Fuyao 字段 → 项目内部字段）
FUYAO_FIELD_MAP = {
    'zt': {
        'ticker': 'ts_code',
        'name': 'name',
        'price_change_ratio_pct': 'pct_chg',
        'last_price': 'price',
        'seal_money': 'seal_amount',
        'max_seal_money': 'max_seal_money',
        'continue_day_cnt': 'boards',
        'continue_day_text': 'zt_stat',
        'limit_up_time': 'first_seal_time',
        'open_times': 'break_times',
        'limit_up_reason': 'reason',
        'is_st': 'is_st',
        'is_new': 'is_new',
    },
    'zb': {
        'ticker': 'ts_code',
        'name': 'name',
        'price_change_ratio_pct': 'pct_chg',
        'last_price': 'price',
        'first_seal_time': 'first_seal_time',
        'last_seal_time': 'last_seal_time',
        'open_times': 'break_times',
        'turnover': 'amount',
        'turnover_ratio_pct': 'turnover_rate',
    },
    'dt': {
        'ticker': 'ts_code',
        'name': 'name',
        'price_change_ratio_pct': 'pct_chg',
        'last_price': 'price',
        'first_limit_time': 'first_seal_time',
        'last_limit_time': 'last_seal_time',
        'turnover_ratio_pct': 'turnover_rate',
    },
}

#: Fuyao 不提供、必须由本地侧补齐的字段（缺失时显式 None，**绝不填 0**）
LOCAL_ONLY_FIELDS = {
    'zt': ('float_mv', 'total_mv', 'industry'),
    'zb': ('float_mv', 'total_mv', 'industry'),
    'dt': ('float_mv', 'total_mv', 'industry', 'pe_ttm', 'seal_amount'),
}

#: Fuyao 独有字段（合并后必须保留，用于界面角标/原因展示）
FUYAO_ONLY_FIELDS = {
    'zt': ('reason', 'max_seal_money', 'is_st', 'is_new', 'boards', 'zt_stat'),
    'zb': (),
    'dt': (),
}


def _num(v):
    try:
        f = float(v)
        return None if f != f else f
    except (TypeError, ValueError):
        return None


def _code6(v):
    s = str(v or '').strip()
    if '.' in s:
        s = s.split('.')[0]
    return s.zfill(6) if s.isdigit() else s


def _norm_time(v):
    """'092500' / '09:25' / '09:25:00' → 'HH:MM:SS'；无法解析返回原值。"""
    if v is None:
        return None
    s = str(v).strip()
    if not s:
        return None
    if ':' in s:
        parts = s.split(':')
        if len(parts) == 2:
            parts.append('00')
        return ':'.join(p.zfill(2) for p in parts[:3])
    s = s.zfill(6)
    return f'{s[0:2]}:{s[2:4]}:{s[4:6]}' if len(s) == 6 else s


def normalize_fuyao_rows(pool_type, items):
    """把 Fuyao 池项归一成项目内部行结构。"""
    fmap = FUYAO_FIELD_MAP.get(pool_type) or {}
    out = []
    for it in items or []:
        if not isinstance(it, dict):
            continue
        row = {}
        for src_key, dst_key in fmap.items():
            row[dst_key] = it.get(src_key)
        if not row.get('ts_code'):
            continue
        row['ts_code'] = _code6(row['ts_code'])
        row['pct_chg'] = _num(row.get('pct_chg'))
        row['price'] = _num(row.get('price'))
        row['turnover_rate'] = _num(row.get('turnover_rate'))
        for tk in ('first_seal_time', 'last_seal_time'):
            if tk in row:
                row[tk] = _norm_time(row[tk])
        if 'break_times' in row:
            row['break_times'] = int(_num(row['break_times']) or 0)
        if 'boards' in row:
            row['boards'] = int(_num(row['boards']) or 0)
        row['board'] = board_of(row['ts_code'], row.get('name') or '')
        out.append(row)
    return out


def merge_rows(pool_type, fuyao_rows, local_rows):
    """按 ts_code 合并两侧行，返回 (merged_rows, stats)。

    - Fuyao 行优先（T2 周边，冲突以 Fuyao 为准）
    - 本地侧补齐 LOCAL_ONLY_FIELDS；Fuyao 缺失的其它字段也回落到本地值
    - 每行记录 `field_source`（fuyao / local / mixed）
    """
    local_by_code = {}
    for r in local_rows or []:
        code = _code6(r.get('ts_code'))
        if code:
            local_by_code[code] = r

    merged = []
    seen = set()
    for frow in fuyao_rows or []:
        code = frow['ts_code']
        seen.add(code)
        lrow = local_by_code.get(code) or {}
        row = dict(frow)
        filled = []
        # 本地补齐：先补 LOCAL_ONLY_FIELDS，再补 Fuyao 缺失/空值的任意字段
        for key, val in lrow.items():
            if key in ('ts_code',):
                continue
            cur = row.get(key)
            if key in LOCAL_ONLY_FIELDS.get(pool_type, ()) or cur is None:
                # 冲突字段走仲裁（T2 → incoming，即本地值仅在 Fuyao 缺失时生效）
                row[key] = data_tier.arbitrate_field(
                    data_tier.TIER_PERIPHERAL, val, val) if cur is None else cur
                if cur is None and val is not None:
                    filled.append(key)
        row['field_source'] = 'mixed' if filled else 'fuyao'
        row['enriched_by_local'] = sorted(set(filled))
        merged.append(row)

    # 仅本地侧存在的行（如 ST 口径差异导致的独有行）保留，标注来源
    for code, lrow in local_by_code.items():
        if code in seen:
            continue
        row = dict(lrow)
        row['ts_code'] = code
        row['board'] = row.get('board') or board_of(code, row.get('name') or '')
        row['field_source'] = 'local'
        row['enriched_by_local'] = []
        merged.append(row)

    stats = {
        'fuyao_count': len(fuyao_rows or []),
        'local_count': len(local_rows or []),
        'merged_count': len(merged),
        'local_only_rows': sum(1 for r in merged if r['field_source'] == 'local'),
        'enriched_rows': sum(1 for r in merged if r['field_source'] == 'mixed'),
    }
    return merged, stats


def build_merged(pool_type, date, fuyao_rows, local_result, include_st=True):
    """组装统一三池响应（available/source/rows/field_source 统计/口径标注）。"""
    local_rows = (local_result or {}).get('rows') or []
    # build_merged 接受**原始 Fuyao 项**，内部归一后再合并（调用方无需关心映射）
    normalized = normalize_fuyao_rows(pool_type, fuyao_rows)
    merged, stats = merge_rows(pool_type, normalized, local_rows)

    reason_missing = 0
    if pool_type == 'zt':
        reason_missing = sum(1 for r in merged if not r.get('reason'))
    local_missing = 0
    for f in LOCAL_ONLY_FIELDS.get(pool_type, ()):
        local_missing += sum(1 for r in merged if r.get(f) is None)

    return {
        'available': True,
        'source': 'fuyao+eastmoney' if local_rows else 'fuyao',
        'rows': merged,
        'include_st': bool(include_st),
        'stats': stats,
        'quality': {
            'reason_missing': reason_missing,
            'local_field_missing': local_missing,
            'total_fields_expected': len(LOCAL_ONLY_FIELDS.get(pool_type, ())),
        },
        'note': '%s｜Fuyao 优先 + 本地补齐（含 ST=%s）；涨停原因来自接口返回值，未自行扩写'
                % (date, '是' if include_st else '否'),
    }
