#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""全市场概念图谱 (v7.0.0 / B4.3, PRD FR-7.0.2)

用 Fuyao `ths-index-list-by-stock` 批量反查（实测 **100 只/请求**，全市场约 56 批），
落 DuckDB 表 `dim_stock_concept`，供题材轮动/概念级因子使用。

纪律：
- 覆盖不足（<95%）必须如实标注，不得用"其余股票无概念"糊弄
- 概念标签只做聚合统计，不构成推荐
- 能力关闭/未配置 → available=False + reason
"""

import logging
import time

logger = logging.getLogger(__name__)

BATCH_SIZE = 100          # 上游单请求上限（实测）
COVERAGE_MIN = 0.95       # D7 验收线
CONCEPT_TYPES = ('cn_concept', 'industry', 'region', 'tszs')


def _client():
    try:
        from data_sources import data_source_manager
        if not data_source_manager.fuyao_capability_enabled('concept'):
            return None, 'capability_disabled'
        client = data_source_manager.fuyao_client()
        if client is None:
            return None, 'not_configured'
        return client, None
    except Exception as e:  # noqa: BLE001
        return None, '%s: %s' % (type(e).__name__, str(e)[:60])


def thscode_of(code):
    """6 位代码 → thscode（.SH/.SZ/.BJ 粗判）。"""
    s = str(code or '').strip()
    if '.' in s:
        return s
    if len(s) != 6 or not s.isdigit():
        return s
    if s.startswith('92') or s[0] in ('4', '8'):
        return s + '.BJ'   # 北交所：920xxx / 43xxxx / 83xxxx / 87xxxx
    if s[0] == '6':
        return s + '.SH'
    return s + '.SZ'


def fetch_concepts_for(codes, ctype=None):
    """批量反查概念（内部按 100 只切批）。返回 {thscode: [ {code,name,type} ]}。"""
    client, why = _client()
    if client is None:
        return {}, {'available': False, 'reason': why}
    codes = [thscode_of(c) for c in (codes or []) if c]
    out, batches, failures = {}, 0, 0
    for i in range(0, len(codes), BATCH_SIZE):
        chunk = codes[i:i + BATCH_SIZE]
        params = {'thscode': ','.join(chunk)}
        if ctype:
            params['type'] = ctype
        r = client.get('concept.index-list-by-stock',
                       '/api/a-share-index/constituents/ths-index-list-by-stock', params)
        batches += 1
        if not r.get('ok'):
            failures += 1
            logger.warning('[concepts] 批次失败(%d): %s', batches, r.get('reason'))
            continue
        for item in (r.get('data') or {}).get('item') or []:
            code = item.get('thscode')
            tags = [{'code': x.get('thscode'), 'name': x.get('name'), 'type': x.get('type')}
                    for x in (item.get('index_list') or []) if isinstance(x, dict)]
            out[code] = tags
    return out, {'available': True, 'batches': batches, 'failed_batches': failures,
                 'requested': len(codes), 'covered': len(out)}


def coverage(covered, requested):
    return round(covered / requested, 4) if requested else 0.0


def to_rows(mapping):
    """{thscode: [tags]} → 扁平行（供 DuckDB upsert）。"""
    rows = []
    now = time.strftime('%Y-%m-%d %H:%M:%S')
    for code, tags in (mapping or {}).items():
        for t in tags:
            rows.append((code, t.get('code'), t.get('name'), t.get('type'), now))
    return rows


def persist(rows, db_path=None):
    """写入 DuckDB 的 dim_stock_concept（幂等 upsert）。"""
    import dwh.native as native  # noqa: PLC0415 — 仅此处使用 DWH
    path = db_path or native.default_paths()['db']
    con = native.connect(path)
    try:
        con.execute('''
            CREATE TABLE IF NOT EXISTS dim_stock_concept (
                thscode VARCHAR NOT NULL,
                concept_code VARCHAR,
                concept_name VARCHAR,
                concept_type VARCHAR,
                updated_at VARCHAR,
                PRIMARY KEY (thscode, concept_code)
            )
        ''')
        if rows:
            con.executemany(
                'INSERT OR REPLACE INTO dim_stock_concept VALUES (?,?,?,?,?)', rows)
        total = con.execute('SELECT COUNT(*) FROM dim_stock_concept').fetchone()[0]
        stocks = con.execute(
            'SELECT COUNT(DISTINCT thscode) FROM dim_stock_concept').fetchone()[0]
    finally:
        con.close()
    return {'rows': int(total or 0), 'stocks': int(stocks or 0)}


def refresh(universe_codes, db_path=None, ctype=None, persist_rows=True):
    """刷新概念图谱：批量反查 → （可选）落库 → 覆盖率标注。"""
    mapping, meta = fetch_concepts_for(universe_codes, ctype=ctype)
    requested = meta.get('requested') or len(universe_codes or [])
    cov = coverage(len(mapping), requested)
    out = {
        'available': bool(mapping),
        'reason': None if mapping else (meta.get('reason') or 'empty'),
        'requested': requested,
        'covered': len(mapping),
        'coverage': cov,
        'meets_min': cov >= COVERAGE_MIN,
        'batches': meta.get('batches'),
        'failed_batches': meta.get('failed_batches'),
        'source': 'fuyao',
        'note': '概念标签用于聚合统计，不构成推荐；覆盖率不足时需如实标注',
    }
    if persist_rows and mapping:
        try:
            out.update(persist(to_rows(mapping), db_path))
        except Exception as e:  # noqa: BLE001 — 落库失败不阻断取数结果
            out['persist_error'] = str(e)[:120]
    return out


def load_concepts(db_path=None):
    """读取已落库的概念（供因子/前端使用）。"""
    import dwh.native as native  # noqa: PLC0415
    path = db_path or native.default_paths()['db']
    try:
        res = native.query(
            path,
            'SELECT thscode, concept_code, concept_name, concept_type FROM dim_stock_concept')
        return {'available': True, 'columns': res['columns'], 'rows': res['rows']}
    except Exception as e:  # noqa: BLE001 — 表不存在等
        return {'available': False, 'reason': str(e)[:120]}
