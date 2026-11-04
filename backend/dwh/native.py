#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH 原生实现 (v7.0.0 / B4.2, PRD FR-7.0.1 / D22 / D23)

设计取舍（重要）：
- **DDL 与复权因子算法复用官方 `marketdb`**（vendored 到 `libs/marketdb`）——
  视图名 `v_daily/v_daily_qfq/v_daily_hfq/v_symbol` 与因子推导直接对齐官方语义（D22），
  避免自创一套口径。
- **落盘、增量判定、备份、运维面由我们自己的代码实现**（本模块），因为官方 CLI 是给
  agent/终端的入口，不适合嵌入服务端进程。
- 存储模型（D23）：单 `data/dwh/market.duckdb` + **保留 1 份最新全量 Parquet** 供复现；
  DuckDB 文件每日备份保留 7 天。
"""

import logging
import os
import shutil
import sys
import time

logger = logging.getLogger(__name__)

#: 官方包路径（与 libs/sxsc_tushare 同样的 vendoring 方式）
_LIBS_MARKETDB = os.path.abspath(
    os.path.join(os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))),
                 'libs', 'marketdb'))
if os.path.isdir(_LIBS_MARKETDB) and _LIBS_MARKETDB not in sys.path:
    sys.path.insert(0, _LIBS_MARKETDB)

#: 增量阈值（对齐官方 auto-sync：落后 ≤7 个交易日走增量，>7 回退全量）
INCREMENTAL_MAX_LAG_DAYS = 7
#: DuckDB 备份保留天数（D25）
BACKUP_KEEP_DAYS = 7
#: 复现用 Parquet 保留份数（D23：只留最新 1 份全量）
PARQUET_KEEP = 1

_SCHEMA_READY = {}


class DwhUnavailable(RuntimeError):
    """依赖缺失（duckdb/pyarrow 不可用）——上层据此回退逐票路径。"""


def _require_duckdb():
    try:
        import duckdb  # noqa: PLC0415
        return duckdb
    except Exception as e:  # noqa: BLE001
        raise DwhUnavailable('duckdb 不可用: %s' % e) from e


def _require_pyarrow():
    try:
        import pyarrow  # noqa: F401,PLC0415
        return True
    except Exception as e:  # noqa: BLE001
        raise DwhUnavailable('pyarrow 不可用: %s' % e) from e


def _sql_dir():
    return os.path.join(_LIBS_MARKETDB, 'marketdb', 'sql')


def default_paths(base_dir=None):
    """返回 DWH 相关路径（D25：固定 data/dwh/market.duckdb）。"""
    if base_dir is None:
        from paths import DATA_DIR  # noqa: PLC0415
        base_dir = DATA_DIR
    d = os.path.join(base_dir, 'dwh')
    return {
        'dir': d,
        'db': os.path.join(d, 'market.duckdb'),
        'archive': os.path.join(d, 'archive'),
        'backup': os.path.join(d, 'backup'),
    }


def connect(db_path):
    """打开 DuckDB 连接并确保 schema/视图就绪（幂等）。"""
    duckdb = _require_duckdb()
    os.makedirs(os.path.dirname(db_path) or '.', exist_ok=True)
    con = duckdb.connect(db_path)
    if not _SCHEMA_READY.get(db_path):
        _ensure_schema(con)
        _SCHEMA_READY[db_path] = True
    return con


def _ensure_schema(con):
    """执行官方 schema.sql + views.sql（语义对齐，避免自创 DDL）。"""
    for name in ('schema.sql', 'views.sql'):
        path = os.path.join(_sql_dir(), name)
        if not os.path.exists(path):
            raise DwhUnavailable('缺少官方 SQL 资产: %s' % path)
        with open(path, encoding='utf-8') as f:
            con.execute(f.read())


def _batch_id(prefix):
    return '%s-%s' % (prefix, time.strftime('%Y%m%d%H%M%S'))


def ingest_daily_k(db_path, parquet_path):
    """把全市场日 K Parquet 合并进 raw_kline_daily（按 (thscode, date) upsert）。

    列口径来自官方 dump：thscode/date_ms/open_price/high_price/low_price/close_price/volume/turnover。
    """
    _require_pyarrow()
    con = connect(db_path)
    batch = _batch_id('daily-k')
    try:
        con.execute('BEGIN')
        con.execute('''
            INSERT OR REPLACE INTO raw_kline_daily
              (thscode, date, open, high, low, close, volume, turnover,
               currency, interval, adjusted, source_batch_id)
            SELECT thscode,
                   -- v7.3.3-fix: 不能直接用 to_timestamp（受进程 TZ 影响：UTC 容器里日期会退一天）。
                   -- dump 的 date_ms 是「北京时间当日 00:00」→ 固定按 +08:00 折算成日期，与时区无关。
                   CAST(DATE '1970-01-01' + CAST(floor((date_ms / 1000 + 28800) / 86400) AS BIGINT)
                        * INTERVAL 1 DAY AS DATE) AS date,
                   open_price, high_price, low_price, close_price,
                   volume, turnover,
                   COALESCE(currency, 'CNY') AS currency,
                   COALESCE(interval, '1d') AS interval,
                   COALESCE(adjusted, 'none') AS adjusted,
                   ? AS source_batch_id
            FROM read_parquet(?)
        ''', [batch, parquet_path])
        rows = con.execute('SELECT COUNT(*) FROM raw_kline_daily').fetchone()[0]
        con.execute('COMMIT')
    except Exception:
        con.execute('ROLLBACK')
        raise
    finally:
        con.close()
    return {'rows_total': int(rows), 'batch_id': batch}


def ingest_adjustment_events(db_path, parquet_path):
    """把复权事件 Parquet 合并进 raw_adjustment_events，并重算前后复权因子。"""
    _require_pyarrow()
    con = connect(db_path)
    batch = _batch_id('adj-events')
    try:
        con.execute('BEGIN')
        con.execute('''
            INSERT OR REPLACE INTO raw_adjustment_events
              (thscode, ticker, ex_date, dividend_per_share, per_share_bonus,
               allotment_ratio, allotment_price, currency, source_batch_id)
            SELECT thscode, ticker,
                   -- 同上：按 +08:00 固定折算，避免 UTC 部署时复权事件整体前移一天
                   CAST(DATE '1970-01-01' + CAST(floor((ex_date_ms / 1000 + 28800) / 86400) AS BIGINT)
                        * INTERVAL 1 DAY AS DATE) AS ex_date,
                   dividend_per_share, per_share_bonus,
                   COALESCE(allotment_ratio, 0.0), COALESCE(allotment_price, 0.0),
                   COALESCE(currency, 'CNY'), ? AS source_batch_id
            FROM read_parquet(?)
        ''', [batch, parquet_path])
        rebuilt = 0
        try:
            from marketdb.calculations.adjustment import rebuild_adjustment_factors  # noqa: PLC0415
            rebuilt = int(rebuild_adjustment_factors(con) or 0)
        except Exception as e:  # noqa: BLE001 — 因子重算失败不阻断原始事件入库
            logger.warning('[dwh] 复权因子重算失败（原始事件已入库）: %s', e)
        ev = con.execute('SELECT COUNT(*) FROM raw_adjustment_events').fetchone()[0]
        con.execute('COMMIT')
    except Exception:
        con.execute('ROLLBACK')
        raise
    finally:
        con.close()
    return {'events_total': int(ev), 'factors_rebuilt': rebuilt, 'batch_id': batch}


def status(db_path):
    """库状态：最新日期、行数、因子覆盖、是否陈旧。"""
    if not os.path.exists(db_path):
        return {'available': False, 'reason': 'db_missing', 'path': db_path}
    con = connect(db_path)
    try:
        latest = con.execute('SELECT MAX(date) FROM raw_kline_daily').fetchone()[0]
        rows = con.execute('SELECT COUNT(*) FROM raw_kline_daily').fetchone()[0]
        symbols = con.execute('SELECT COUNT(DISTINCT thscode) FROM raw_kline_daily').fetchone()[0]
        events = con.execute('SELECT COUNT(*) FROM raw_adjustment_events').fetchone()[0]
        factors = con.execute('SELECT COUNT(*) FROM calc_adjust_factor_daily').fetchone()[0]
    finally:
        con.close()
    return {
        'available': True,
        'path': db_path,
        'latest_date': str(latest) if latest else None,
        'rows': int(rows or 0),
        'symbols': int(symbols or 0),
        'adjust_events': int(events or 0),
        'factor_rows': int(factors or 0),
        'size_bytes': os.path.getsize(db_path),
    }


def query(db_path, sql, params=None, limit=None):
    """任意 SQL（研究层入口）；返回列名 + 行。"""
    con = connect(db_path)
    try:
        cur = con.execute(sql, params or [])
        cols = [d[0] for d in (cur.description or [])]
        rows = cur.fetchmany(limit) if limit else cur.fetchall()
        return {'columns': cols, 'rows': [list(r) for r in rows]}
    finally:
        con.close()


def decide_sync_mode(latest_date, target_date, max_lag=INCREMENTAL_MAX_LAG_DAYS):
    """增量/全量判定（对齐官方 auto-sync：本地空→FULL；≤7 交易日→INCREMENTAL；>7→FULL）。"""
    if not latest_date:
        return 'FULL'
    try:
        from datetime import date  # noqa: PLC0415
        a = latest_date if isinstance(latest_date, date) else _parse_date(latest_date)
        b = target_date if isinstance(target_date, date) else _parse_date(target_date)
        lag = (b - a).days
    except Exception:  # noqa: BLE001 — 日期不可解析时保守走全量
        return 'FULL'
    return 'INCREMENTAL' if 0 <= lag <= max_lag else 'FULL'


def _parse_date(v):
    from datetime import date  # noqa: PLC0415
    s = str(v).replace('-', '')[:8]
    return date(int(s[0:4]), int(s[4:6]), int(s[6:8]))


def backup(db_path, keep_days=BACKUP_KEEP_DAYS, backup_dir=None):
    """每日备份 DuckDB 文件（保留 keep_days 天，D25）。返回备份路径或 None。"""
    if not os.path.exists(db_path):
        return None
    bdir = backup_dir or os.path.join(os.path.dirname(db_path), 'backup')
    os.makedirs(bdir, exist_ok=True)
    stamp = time.strftime('%Y%m%d')
    dest = os.path.join(bdir, 'market_%s.duckdb' % stamp)
    if os.path.exists(dest):
        return dest
    tmp = dest + '.tmp'
    shutil.copy2(db_path, tmp)
    os.replace(tmp, dest)
    _prune_backups(bdir, keep_days)
    return dest


def _prune_backups(bdir, keep_days):
    try:
        files = sorted(f for f in os.listdir(bdir) if f.startswith('market_') and f.endswith('.duckdb'))
    except OSError:
        return
    for name in files[:-max(1, keep_days)]:
        try:
            os.remove(os.path.join(bdir, name))
        except OSError:
            logger.debug('[dwh] 旧备份清理失败: %s', name)


def archive_parquet(src, archive_dir, keep=PARQUET_KEEP):
    """保留最新 keep 份全量 Parquet 供复现（D23）。"""
    os.makedirs(archive_dir, exist_ok=True)
    stamp = time.strftime('%Y%m%d')
    dest = os.path.join(archive_dir, 'daily_k_%s.parquet' % stamp)
    shutil.copy2(src, dest)
    files = sorted(f for f in os.listdir(archive_dir) if f.endswith('.parquet'))
    for name in files[:-max(1, keep)]:
        try:
            os.remove(os.path.join(archive_dir, name))
        except OSError as e:  # noqa: BLE001 — 旧归档删不掉不影响本次落盘，但需留痕
            logger.warning('[dwh] 旧归档删除失败 %s: %s', name, e)
    return dest


def download_dump(kind, dest_dir, client=None):
    """取预签名链接并立即下载（300s 过期，禁止缓存 URL）。kind: daily-k|daily-k-10d|adjustment-factors。"""
    _require_pyarrow()
    if client is None:
        from data_sources import data_source_manager  # noqa: PLC0415
        client = data_source_manager.fuyao_client()
    if client is None:
        raise DwhUnavailable('未配置 Fuyao 客户端（无法拉取 dump）')
    path = '/api/dump/market-dumps/%s/download-url' % kind
    r = client.get('dwh.%s' % kind, path, {})
    if not r.get('ok'):
        raise DwhUnavailable('获取下载链接失败: %s' % (r.get('reason') or 'unknown'))
    url = (r.get('data') or {}).get('presigned_url')
    if not url:
        raise DwhUnavailable('响应缺少 presigned_url')
    os.makedirs(dest_dir, exist_ok=True)
    dest = os.path.join(dest_dir, '%s_%s.parquet' % (kind.replace('-', '_'), time.strftime('%Y%m%d')))
    import urllib.request  # noqa: PLC0415
    tmp = dest + '.part'
    with urllib.request.urlopen(url, timeout=120) as resp, open(tmp, 'wb') as f:
        shutil.copyfileobj(resp, f)
    with open(tmp, 'rb') as f:
        magic = f.read(4)
    if magic != b'PAR1':
        os.remove(tmp)
        raise DwhUnavailable('下载文件不是 Parquet(magic=%r)' % magic)
    os.replace(tmp, dest)
    return dest
