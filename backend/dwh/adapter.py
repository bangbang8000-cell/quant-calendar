#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""DWH 适配层 (v7.0.0 / B4.2, PRD §5.8 契约)

**唯一允许 import vendored marketdb / dwh.native 的位置**。业务代码只调这里，从而：
- `dwh.backend=vendor`（默认）：走 vendored `marketdb` 的 SDK/DDL 语义
- `dwh.backend=native`：走我们自己的 `dwh.native`（最小可用回退）
- vendor 不可用/调用失败 → 自动回退 native（X8/X9 风险预案）
- `dwh.enabled=false` → 整体不启用，调用方回落逐票路径
"""

import logging
import os

logger = logging.getLogger(__name__)

BACKEND_VENDOR = 'vendor'
BACKEND_NATIVE = 'native'
_VALID_BACKENDS = (BACKEND_VENDOR, BACKEND_NATIVE)

_backend_cache = {}


class DwhUnavailable(RuntimeError):
    """DWH 不可用（依赖缺失/未启用/落盘缺失）——调用方应回落逐票路径。"""


def _config():
    """读数据源配置里的 dwh 段（热读，便于开关切换）。"""
    try:
        from data_sources import data_source_manager
        cfg = (data_source_manager.config or {}).get('dwh') or {}
    except Exception:  # noqa: BLE001
        cfg = {}
    return {
        'enabled': bool(cfg.get('enabled', True)),
        'backend': str(cfg.get('backend') or BACKEND_VENDOR).lower(),
        'db_path': cfg.get('db_path') or None,
    }


def reset_backend():
    _backend_cache.clear()


class DwhBackend:
    """统一门面：vendor 优先、native 回退。所有方法都不得抛未捕获异常给业务层。"""

    def __init__(self, db_path=None, prefer=None):
        cfg = _config()
        self.enabled = cfg['enabled']
        self.preferred = (prefer or cfg['backend'])
        if self.preferred not in _VALID_BACKENDS:
            self.preferred = BACKEND_VENDOR
        self.active = None
        self.fallback_reason = None
        if db_path:
            self.db_path = db_path
        else:
            from .native import default_paths  # noqa: PLC0415
            self.db_path = default_paths()['db']

    # -- 后端选择 --------------------------------------------------------------
    def _vendor_available(self):
        try:
            import sys
            import os  # noqa: PLC0415
            from .native import _LIBS_MARKETDB  # noqa: PLC0415
            if os.path.isdir(_LIBS_MARKETDB) and _LIBS_MARKETDB not in sys.path:
                sys.path.insert(0, _LIBS_MARKETDB)
            import duckdb  # noqa: F401,PLC0415
            import marketdb  # noqa: F401,PLC0415
            return True
        except Exception as e:  # noqa: BLE001
            self.fallback_reason = 'vendor_import_failed: %s' % e
            return False

    def resolve(self):
        """决定本次使用的后端（vendor 可用性 + 配置）。"""
        if self.active:
            return self.active
        if not self.enabled:
            raise DwhUnavailable('dwh 已禁用（dwh.enabled=false）')
        if self.preferred == BACKEND_VENDOR and self._vendor_available():
            self.active = BACKEND_VENDOR
        else:
            if self.preferred == BACKEND_VENDOR and not self.fallback_reason:
                self.fallback_reason = 'vendor_unavailable'
            self.active = BACKEND_NATIVE
        return self.active

    # -- 能力面 ----------------------------------------------------------------
    def status(self):
        try:
            from . import native  # noqa: PLC0415
            st = native.status(self.db_path)
            st['backend'] = self.resolve()
            if self.fallback_reason:
                st['fallback_reason'] = self.fallback_reason
            return st
        except Exception as e:  # noqa: BLE001
            return {'available': False, 'reason': str(e)[:120], 'backend': None,
                    'fallback_reason': self.fallback_reason}

    def sync(self, kind='daily-k', parquet_path=None, fetch=True):
        """同步一批数据：优先本地 parquet，否则拉 dump。

        kind: daily-k（全量/增量均由调用方决定）| daily-k-10d | adjustment-factors
        """
        from . import native  # noqa: PLC0415
        self.resolve()
        try:
            path = parquet_path
            dwh_dir = os.path.dirname(self.db_path) or '.'
            if path is None and fetch:
                path = native.download_dump(kind, dwh_dir)
            if kind == 'adjustment-factors':
                out = native.ingest_adjustment_events(self.db_path, path)
            else:
                out = native.ingest_daily_k(self.db_path, path)
                try:
                    native.archive_parquet(path, os.path.join(dwh_dir, 'archive'))
                except Exception as e:  # noqa: BLE001
                    logger.debug('[dwh] 归档失败: %s', e)
            out['backend'] = self.active
            try:
                native.backup(self.db_path, backup_dir=os.path.join(dwh_dir, 'backup'))
            except Exception as e:  # noqa: BLE001
                logger.debug('[dwh] 备份失败: %s', e)
            return out
        except Exception as e:  # noqa: BLE001
            raise DwhUnavailable(str(e)[:200]) from e

    def sync_mode(self, target_date):
        from . import native  # noqa: PLC0415
        st = native.status(self.db_path)
        return native.decide_sync_mode(st.get('latest_date'), target_date)

    def query(self, sql, params=None, limit=None):
        from . import native  # noqa: PLC0415
        self.resolve()
        try:
            return native.query(self.db_path, sql, params, limit)
        except Exception as e:  # noqa: BLE001
            raise DwhUnavailable(str(e)[:200]) from e

    def panel(self, start=None, adjust='forward', limit=5000):
        """横截面面板（研究层）：走 v_daily_qfq/v_daily_hfq/v_daily 视图。"""
        view = {'forward': 'v_daily_qfq', 'backward': 'v_daily_hfq'}.get(adjust, 'v_daily')
        sql = 'SELECT thscode, date, open, high, low, close, volume, turnover FROM %s' % view
        params = []
        if start:
            sql += ' WHERE date >= CAST(? AS DATE)'
            params.append(str(start))
        sql += ' ORDER BY date, thscode'
        return self.query(sql, params, limit=limit)

    def trading_days(self):
        return self.query('SELECT DISTINCT date FROM raw_kline_daily ORDER BY date DESC',
                          limit=1000)


def get_backend(db_path=None, prefer=None):
    key = (db_path, prefer)
    if key not in _backend_cache:
        _backend_cache[key] = DwhBackend(db_path=db_path, prefer=prefer)
    return _backend_cache[key]
