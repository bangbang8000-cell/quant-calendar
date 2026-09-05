#!/usr/bin/env python3
# ruff: noqa: F405
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): DataSourceManager (拆自 data_sources.py)"""
import json
import os
import time
import pandas as pd
from datetime import datetime

import data_sources as _ds_mod  # 调用期读包级 _ds_mod.DATASOURCE_CONFIG_FILE
from ._constants import *  # noqa: F401,F403
from ._health import (record_call, _is_rate_limited, get_route_order)
from ._mapping import *  # noqa: F401,F403
from ._mapping import (_safe_float, _ts_code_to_akshare_index, _ts_code_to_akshare_stock,
              _ts_code_to_sina_symbol, _is_index_code, _map_akshare_columns)

class DataSourceManager:
    """统一数据源管理器 — 模块级单例"""

    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self):
        if self._initialized:
            return
        self._initialized = True
        self.config = self._load_config()
        self._clients = {}
        self._errors = {}
        self._kline_cache = {}  # (ts_code, period, limit) -> (fetch_time, result)
        self._init_clients()

    @staticmethod
    def _is_valid_token(token) -> bool:
        """V5.3.9 (BUG-FIX): 识别占位符/假 token 而非仅空值

        真实 tushare/sxsc token 为 32-64 位十六进制; 占位符如 'new-token-zzz'/
        'sxsc-real-token-456' 含连字符与非 hex 字符 → 视为无效, 触发回退 .env。
        """
        if not isinstance(token, str) or not token:
            return False
        return len(token) >= 32 and len(token) <= 64 and all(
            c in '0123456789abcdefABCDEF' for c in token)

    def _load_config(self):
        if os.path.exists(_ds_mod.DATASOURCE_CONFIG_FILE):
            try:
                with open(_ds_mod.DATASOURCE_CONFIG_FILE, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                logger.warning(f"加载数据源配置失败: {e}")
        return DEFAULT_CONFIG

    def _save_config(self):
        os.makedirs(os.path.dirname(_ds_mod.DATASOURCE_CONFIG_FILE), exist_ok=True)
        with open(_ds_mod.DATASOURCE_CONFIG_FILE, 'w', encoding='utf-8') as f:
            json.dump(self.config, f, ensure_ascii=False, indent=2)

    def _init_clients(self):
        """初始化各数据源 client"""
        sources = self.config.get('sources', {})

        # sxsc-tushare
        sxsc = sources.get('sxsc_tushare', {})
        if sxsc.get('enabled', True):
            try:
                from sxsc_tushare import get_api
                token = sxsc.get('token', '')
                # v1.8: 回退到 config.py 的 SXSC_TUSHARE_TOKEN
                if not self._is_valid_token(token):
                    try:
                        from config import settings
                        token = getattr(settings, 'SXSC_TUSHARE_TOKEN', '')
                    except Exception:
                        logger.debug("数据源回退尝试")
                        pass
                timeout = sxsc.get('timeout', 5)
                if token:
                    self._clients['sxsc_tushare'] = get_api(token, timeout=timeout, env='prd')
                    logger.info("✅ sxsc-tushare 初始化成功")
            except Exception as e:
                logger.warning(f"⚠️ sxsc-tushare 初始化失败: {e}")
                self._errors['sxsc_tushare'] = str(e)

        # tushare
        ts_cfg = sources.get('tushare', {})
        if ts_cfg.get('enabled', True):
            try:
                import tushare as ts
                token = ts_cfg.get('token', '')
                # 回退到 config.py 的 TUSHARE_TOKEN
                if not self._is_valid_token(token):
                    try:
                        from config import settings
                        token = getattr(settings, 'TUSHARE_TOKEN', '')
                    except Exception:
                        logger.debug("数据源回退尝试")
                        pass
                if token:
                    # V4.6 修复: 直接传 token 给 pro_api, 跳过 ts.set_token 写 ~/tk.csv
                    # (沙箱家目录只读导致 set_token 写文件失败 -> tushare 未初始化)
                    self._clients['tushare'] = ts.pro_api(token)
                    logger.info("✅ tushare 初始化成功")
            except Exception as e:
                logger.warning(f"⚠️ tushare 初始化失败: {e}")
                self._errors['tushare'] = str(e)

        # akshare (无 token，按需 import)
        if sources.get('akshare', {}).get('enabled', True):
            self._clients['akshare'] = True  # 占位，使用时 import
            logger.info("✅ akshare 就绪（按需导入）")

    def _get_source_config(self, source_name):
        return self.config.get('sources', {}).get(source_name, {})

    def get_config(self):
        """获取数据源配置（不含 token）"""
        config_copy = json.loads(json.dumps(self.config))
        return config_copy

    def save_config(self, new_config):
        """保存数据源配置并重新初始化"""
        self.config = new_config
        self._save_config()
        self._clients.clear()
        self._errors.clear()
        self._init_clients()

    def test_connection(self, source_name):
        """测试指定数据源连接"""
        sources = self.config.get('sources', {})
        cfg = sources.get(source_name, {})

        if not cfg.get('enabled', True):
            return {"success": False, "message": f"数据源 {source_name} 已禁用"}

        if source_name not in self._clients:
            return {"success": False, "message": f"数据源 {source_name} 未初始化"}

        _t0 = time.monotonic()
        try:
            if source_name == 'sxsc_tushare':
                api = self._clients['sxsc_tushare']
                df = api.query('index_daily', ts_code='000001.SH', limit=1)
                record_call(source_name, True, (time.monotonic() - _t0) * 1000)
                return {"success": True, "message": f"✅ 连接成功，返回 {len(df)} 条数据"}

            elif source_name == 'tushare':
                pro = self._clients['tushare']
                df = pro.trade_cal(start_date='20240101', end_date='20240105')
                record_call(source_name, True, (time.monotonic() - _t0) * 1000)
                return {"success": True, "message": f"✅ 连接成功，返回 {len(df)} 条数据"}

            elif source_name == 'akshare':
                import akshare as ak
                df = ak.stock_zh_index_daily(symbol="sh000001")
                if df is not None and len(df) > 0:
                    record_call(source_name, True, (time.monotonic() - _t0) * 1000)
                    return {"success": True, "message": "✅ 连接成功"}
                record_call(source_name, False, (time.monotonic() - _t0) * 1000)
                return {"success": False, "message": "❌ 返回数据为空"}

        except Exception as e:
            record_call(source_name, False, (time.monotonic() - _t0) * 1000)
            return {"success": False, "message": f"❌ 连接失败: {str(e)}"}

    # ==================== 数据获取方法 ====================

    def get_index_daily(self, ts_code, trade_date=None):
        """获取指数日线数据（带 fallback）"""
        for src_name in SOURCE_ORDER:
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            _t0 = time.monotonic()
            try:
                result = self._fetch_index_daily(src_name, ts_code, trade_date)
                _elapsed = (time.monotonic() - _t0) * 1000
                if result:
                    result['data_source'] = src_name
                    record_call(src_name, True, _elapsed)
                    return result
                record_call(src_name, False, _elapsed)  # 空数据记为一次失败
            except Exception as e:
                logger.warning(f"{src_name} get_index_daily({ts_code}) 失败: {e}")
                self._errors[src_name] = str(e)
                record_call(src_name, False, (time.monotonic() - _t0) * 1000)
        return None

    def get_kline_data(self, ts_code, period='daily', limit=60, preferred=None):
        """获取K线数据（带 fallback + MA计算）

        支持 period: daily, weekly, monthly, quarterly, yearly
        quarterly/yearly 使用月线数据聚合
        preferred: 优先数据源(如 'tushare'); 用于高并发场景(如异动扫描)绕开
                   sxsc 20次/秒限流 — 指定时先试 preferred, 失败再按路由顺序 fallback
        """
        # v3.8.1: 内存 TTL 缓存 — 同股票同周期短时间重复请求直接命中
        key = (ts_code, period, limit)
        now = time.time()
        cached = self._kline_cache.get(key)
        if cached and now - cached[0] < KLINE_CACHE_TTL:
            return cached[1]

        # quarterly/yearly: 用月线数据聚合
        result = None
        if period in ('quarterly', 'yearly'):
            result = self._get_resampled_kline(ts_code, period, limit)
        else:
            # v3.22: preferred 优先 — 高并发场景(异动扫描)先走 tushare 绕开 sxsc 20次/秒限流
            route = [preferred] + [s for s in get_route_order() if s != preferred] if preferred else get_route_order()
            for src_name in route:
                src_cfg = self._get_source_config(src_name)
                if not src_cfg.get('enabled', True):
                    continue
                _t0 = time.monotonic()
                try:
                    df = self._fetch_kline(src_name, ts_code, period, limit)
                    _elapsed = (time.monotonic() - _t0) * 1000
                    if df is not None and len(df) > 0:
                        result = self._build_kline_response(df, src_name)
                        record_call(src_name, True, _elapsed)
                        break
                    record_call(src_name, False, _elapsed)  # 空数据记为一次失败
                except Exception as e:
                    logger.warning(f"{src_name} get_kline_data({ts_code}) 失败: {e}")
                    self._errors[src_name] = str(e)
                    record_call(src_name, False, (time.monotonic() - _t0) * 1000, rate_limited=_is_rate_limited(e))

        if result:
            # v3.22: 仅缓存 data 非空的结果 — 空数据(如数据源限流/无行)不落缓存,
            # 避免"坏缓存"污染后续请求(曾导致异动扫描 78/80 只读到空 K 线)
            if isinstance(result, dict):
                _cacheable = bool(result.get('data'))
            else:
                _cacheable = bool(result)
            if _cacheable:
                # 简单淘汰: 缓存条目超限时整体清空 (K线场景条目有限, 无需 LRU)
                if len(self._kline_cache) >= KLINE_CACHE_MAX:
                    self._kline_cache.clear()
                self._kline_cache[key] = (now, result)
        return result

    def _get_resampled_kline(self, ts_code, period, limit):
        """获取季线/年线数据：拉取月线 + 聚合"""
        import pandas as pd

        # 拉取足够的月线数据
        monthly_limit = limit * 12  # 季度需要3x月线，年度需要12x
        monthly_data = None
        for src_name in SOURCE_ORDER:
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            try:
                df = self._fetch_kline(src_name, ts_code, 'monthly', monthly_limit)
                if df is not None and len(df) > 0:
                    monthly_data = df
                    break
            except Exception as e:
                logger.warning(f"{src_name} resampled kline failed: {e}")

        if monthly_data is None or len(monthly_data) == 0:
            return None

        # 聚合: quarterly(3个月) / yearly(12个月)
        try:
            monthly_data['trade_date'] = pd.to_datetime(monthly_data['trade_date'], format='%Y%m%d', errors='coerce')
            monthly_data = monthly_data.dropna(subset=['trade_date'])
            monthly_data = monthly_data.sort_values('trade_date', ascending=True)

            if period == 'quarterly':
                monthly_data['period_key'] = monthly_data['trade_date'].dt.to_period('Q')
            else:
                monthly_data['period_key'] = monthly_data['trade_date'].dt.to_period('Y')

            grouped = monthly_data.groupby('period_key').agg(
                trade_date=('trade_date', 'last'),
                open=('open', 'first'),
                high=('high', 'max'),
                low=('low', 'min'),
                close=('close', 'last'),
                vol=('vol', 'sum'),
            ).reset_index(drop=True)

            # 格式化日期回 %Y%m%d
            grouped['trade_date'] = grouped['trade_date'].dt.strftime('%Y%m%d')

            return self._build_kline_response(grouped, 'monthly_resampled')
        except Exception as e:
            logger.warning(f"resample kline error: {e}")
            return None

    def get_daily_basic(self, ts_code, limit=5):
        """获取基本面数据（带 fallback）"""
        for src_name in get_route_order():
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            _t0 = time.monotonic()
            try:
                result = self._fetch_daily_basic(src_name, ts_code, limit)
                _elapsed = (time.monotonic() - _t0) * 1000
                if result:
                    result['data_source'] = src_name
                    record_call(src_name, True, _elapsed)
                    return result
                record_call(src_name, False, _elapsed)  # 空数据记为一次失败
            except Exception as e:
                logger.warning(f"{src_name} get_daily_basic({ts_code}) 失败: {e}")
                self._errors[src_name] = str(e)
                record_call(src_name, False, (time.monotonic() - _t0) * 1000, rate_limited=_is_rate_limited(e))
        return None

    def get_daily_basic_series(self, ts_code, limit=20):
        """获取基本面历史序列（旧→新列表, 用于因子分位计算）— v3.21
        优先 tushare 标准版(多日); sxsc 券商版返回格式不兼容跳过; akshare 单元素快照"""
        for src_name in ('tushare', 'sxsc_tushare', 'akshare'):
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            _t0 = time.monotonic()
            try:
                result = self._fetch_daily_basic_series(src_name, ts_code, limit)
                _elapsed = (time.monotonic() - _t0) * 1000
                if result:
                    record_call(src_name, True, _elapsed)
                    return result
                record_call(src_name, False, _elapsed)
            except Exception as e:
                logger.warning(f"{src_name} get_daily_basic_series({ts_code}) 失败: {e}")
                record_call(src_name, False, (time.monotonic() - _t0) * 1000, rate_limited=_is_rate_limited(e))
        return []

    def _fetch_daily_basic_series(self, src_name, ts_code, limit):
        """各数据源获取基本面历史序列（旧→新）
        tushare 系(标准版/券商版)走 daily_basic 多日; akshare 无历史接口返回单元素快照"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name in ('sxsc_tushare', 'tushare'):
            api = self._clients.get(src_name)
            if not api:
                return []
            try:
                if src_name == 'sxsc_tushare':
                    df = api.query('daily_basic', ts_code=ts_code, limit=limit,
                                   fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
                else:
                    df = api.daily_basic(ts_code=ts_code, limit=limit,
                                         fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            except Exception:
                return []
            if df is None or len(df) == 0:
                return []
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                d = {'trade_date': row.get('trade_date')}
                for f in ('pe', 'pb', 'turnover_rate', 'total_mv'):
                    d[f] = _safe_float(row.get(f))
                rows.append(d)
            return rows
        # akshare: 无历史接口, 返回单元素快照(自身异常不影响路由)
        try:
            one = self._fetch_daily_basic(src_name, ts_code, 1)
        except Exception:
            one = None
        return [one] if one else []

    # ==================== 各数据源适配器 ====================

    def _fetch_index_daily(self, src_name, ts_code, trade_date):
        """各数据源获取指数日线"""
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('index_daily', ts_code=ts_code, trade_date=trade_date, limit=10)
            if df is None or len(df) == 0:
                return None
            df = df.sort_values('trade_date', ascending=False)
            return df.iloc[0].to_dict()

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.index_daily(ts_code=ts_code, trade_date=trade_date, limit=10)
            if df is None or len(df) == 0:
                return None
            df = df.sort_values('trade_date', ascending=False)
            return df.iloc[0].to_dict()

        elif src_name == 'akshare':
            symbol = _ts_code_to_akshare_index(ts_code)
            import akshare as ak
            df = ak.stock_zh_index_daily(symbol=symbol)
            if df is None or len(df) == 0:
                return None
            df = _map_akshare_columns(df, AKSHARE_INDEX_COLUMN_MAP)
            df = df.sort_values('trade_date', ascending=False)
            row = df.iloc[0].to_dict()
            row['ts_code'] = ts_code
            return row

        return None

    def _fetch_kline(self, src_name, ts_code, period, limit):
        """各数据源获取K线 DataFrame"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        is_index = _is_index_code(ts_code)

        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            api_name_map = {'daily': 'daily', 'weekly': 'weekly', 'monthly': 'monthly'}
            api_name = api_name_map.get(period, 'daily')
            if is_index:
                api_name = f"index_{api_name}"
            df = api.query(api_name, ts_code=ts_code, limit=limit)
            return df

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            if is_index:
                if period == 'weekly':
                    df = pro.index_weekly(ts_code=ts_code, limit=limit)
                elif period == 'monthly':
                    df = pro.index_monthly(ts_code=ts_code, limit=limit)
                else:
                    df = pro.index_daily(ts_code=ts_code, limit=limit)
            else:
                if period == 'weekly':
                    df = pro.weekly(ts_code=ts_code, limit=limit)
                elif period == 'monthly':
                    df = pro.monthly(ts_code=ts_code, limit=limit)
                else:
                    df = pro.daily(ts_code=ts_code, limit=limit)
            return df

        elif src_name == 'akshare':
            import akshare as ak
            if is_index:
                symbol = _ts_code_to_akshare_index(ts_code)
                df = ak.stock_zh_index_daily(symbol=symbol)
                df = _map_akshare_columns(df, AKSHARE_INDEX_COLUMN_MAP)
                return df.tail(limit)
            else:
                # v3.20.1 (网络修复): 东财源反爬拦截时 fallback 到新浪源
                try:
                    symbol = _ts_code_to_akshare_stock(ts_code)
                    df = ak.stock_zh_a_hist(symbol=symbol, period=period, adjust="qfq")
                except Exception as e:
                    logger.warning('akshare 东财源失败(%s), 切新浪源', e)
                    sina = _ts_code_to_sina_symbol(ts_code)
                    df = ak.stock_zh_a_daily(symbol=sina, adjust="qfq")
                    # 新浪源返回英文列: date/volume/amount 等, 补一层映射到 tushare 标准列
                    df = _map_akshare_columns(df, _SINA_STOCK_COLUMN_MAP)
                df = _map_akshare_columns(df, AKSHARE_STOCK_COLUMN_MAP)
                return df.tail(limit)

        return None

    def _fetch_financial(self, src_name, ts_code):
        """各数据源获取财务指标 (FR-3.12.1: 财务数据拉取)

        字段: roe / netprofit_yoy / grossprofit_margin / debt_to_assets
        (tushare fina_indicator 最近一期)
        """
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        try:
            if src_name in ('sxsc_tushare', 'tushare'):
                api = self._clients.get(src_name)
                if not api:
                    return None
                if src_name == 'sxsc_tushare':
                    df = api.query('fina_indicator', ts_code=ts_code, limit=1)
                else:
                    df = api.fina_indicator(ts_code=ts_code, limit=1)
                if df is None or len(df) == 0:
                    return None
                row = df.iloc[0].to_dict()
                return {
                    'ts_code': ts_code,
                    'ann_date': row.get('ann_date'),
                    'end_date': row.get('end_date'),
                    'roe': _safe_float(row.get('roe')),
                    'netprofit_yoy': _safe_float(row.get('netprofit_yoy')),
                    'grossprofit_margin': _safe_float(row.get('grossprofit_margin')),
                    'debt_to_assets': _safe_float(row.get('debt_to_assets')),
                    'eps': _safe_float(row.get('eps')),
                    'bps': _safe_float(row.get('bps')),
                }
            elif src_name == 'akshare':
                # akshare 无统一财务接口, 退化为 daily_basic 中的 pe/pb
                return None
        except Exception as e:
            logger.warning(f"{src_name} _fetch_financial({ts_code}) 失败: {e}")
            return None
        return None

    def get_financial_data(self, ts_code):
        """获取财务指标（带 fallback）— FR-3.12.1 财务数据拉取"""
        for src_name in SOURCE_ORDER:
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            _t0 = time.monotonic()
            try:
                result = self._fetch_financial(src_name, ts_code)
                _elapsed = (time.monotonic() - _t0) * 1000
                if result:
                    result['data_source'] = src_name
                    record_call(src_name, True, _elapsed)
                    return result
                record_call(src_name, False, _elapsed)
            except Exception as e:
                logger.warning(f"{src_name} get_financial_data({ts_code}) 失败: {e}")
                self._errors[src_name] = str(e)
                record_call(src_name, False, (time.monotonic() - _t0) * 1000)
        return None

    def get_moneyflow(self, ts_code, limit=10):
        """获取个股主力资金流向（带 fallback）— v3.17 / FR-3.17.3 资金面因子
        返回 [{trade_date, net_mf_amount}, ...]（旧→新）或 None"""
        for src_name in get_route_order():
            src_cfg = self._get_source_config(src_name)
            if not src_cfg.get('enabled', True):
                continue
            _t0 = time.monotonic()
            try:
                result = self._fetch_moneyflow(src_name, ts_code, limit)
                _elapsed = (time.monotonic() - _t0) * 1000
                if result:
                    record_call(src_name, True, _elapsed)
                    return result
                record_call(src_name, False, _elapsed)
            except Exception as e:
                logger.warning(f"{src_name} get_moneyflow({ts_code}) 失败: {e}")
                self._errors[src_name] = str(e)
                record_call(src_name, False, (time.monotonic() - _t0) * 1000, rate_limited=_is_rate_limited(e))
        return None

    def _fetch_moneyflow(self, src_name, ts_code, limit):
        """各数据源获取资金流向（仅支持 tushare 系；akshare 不可达返回 None → 因子降级）"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('moneyflow', ts_code=ts_code, limit=limit,
                           fields='trade_date,net_mf_amount')
            if df is None or len(df) == 0:
                return None
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                rows.append({'trade_date': row.get('trade_date'), 'net_mf_amount': _safe_float(row.get('net_mf_amount'))})
            return rows

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.moneyflow(ts_code=ts_code, limit=limit,
                               fields='trade_date,net_mf_amount')
            if df is None or len(df) == 0:
                return None
            rows = []
            for _, row in df.sort_values('trade_date').iterrows():
                rows.append({'trade_date': row.get('trade_date'), 'net_mf_amount': _safe_float(row.get('net_mf_amount'))})
            return rows

        # akshare 无统一逐日主力净流入接口，降级
        return None

    # ==================== V4.7: 按交易日全市场批量取数 (引擎 universe 扩大后逐股取数太慢/限流) ====================

    def get_trade_dates(self, start_date: str, end_date: str):
        """交易日历: 返回 [YYYYMMDD, ...] 开市日 (tushare trade_cal, 单次调用)"""
        pro = self._clients.get('tushare')
        if pro is None:
            return []
        try:
            df = pro.trade_cal(exchange='SSE', start_date=start_date.replace('-', ''),
                               end_date=end_date.replace('-', ''), is_open='1')
            if df is None or len(df) == 0:
                return []
            return sorted(df['cal_date'].astype(str).tolist())
        except Exception as e:
            logger.warning('get_trade_dates(%s~%s) 失败: %s', start_date, end_date, e)
            return []

    def get_market_daily_batch(self, trade_date: str):
        """按交易日一次拉全市场日线 (tushare daily(trade_date=...) → 全市场 5500+ 只)

        返回 DataFrame(ts_code, trade_date, open, high, low, close, volume, amount) 或 None。
        单次调用替代逐股 5500 次请求 — 引擎全市场 universe 的核心提速。
        """
        pro = self._clients.get('tushare')
        if pro is None:
            return None
        try:
            df = pro.daily(trade_date=trade_date)
            if df is None or len(df) == 0:
                return None
            df = df.rename(columns={'vol': 'volume'})
            return df
        except Exception as e:
            logger.warning('get_market_daily_batch(%s) 失败: %s', trade_date, e)
            self._errors['tushare'] = str(e)
            record_call('tushare', False, 0, rate_limited=_is_rate_limited(e))
            return None

    def get_market_daily_basic_batch(self, trade_date: str):
        """按交易日一次拉全市场基本面 (tushare daily_basic(trade_date=...) → pe/pb/turnover)"""
        pro = self._clients.get('tushare')
        if pro is None:
            return None
        try:
            df = pro.daily_basic(trade_date=trade_date,
                                 fields='ts_code,trade_date,pe,pb,turnover_rate,total_mv,circ_mv,float_mv')
            if df is None or len(df) == 0:
                return None
            return df
        except Exception as e:
            logger.warning('get_market_daily_basic_batch(%s) 失败: %s', trade_date, e)
            self._errors['tushare'] = str(e)
            record_call('tushare', False, 0, rate_limited=_is_rate_limited(e))
            return None

    def get_market_moneyflow_batch(self, trade_date: str):
        """按交易日一次拉全市场资金流 (tushare moneyflow(trade_date=...) → net_mf_amount)"""
        pro = self._clients.get('tushare')
        if pro is None:
            return None
        try:
            df = pro.moneyflow(trade_date=trade_date,
                               fields='ts_code,trade_date,net_mf_amount,buy_lg_amount,sell_lg_amount')
            if df is None or len(df) == 0:
                return None
            return df
        except Exception as e:
            logger.warning('get_market_moneyflow_batch(%s) 失败: %s', trade_date, e)
            self._errors['tushare'] = str(e)
            record_call('tushare', False, 0, rate_limited=_is_rate_limited(e))
            return None

    def _fetch_daily_basic(self, src_name, ts_code, limit):
        """各数据源获取基本面数据"""
        ts_code = _normalize_ts_code(ts_code)  # V5.3.11: 6位无后缀→带后缀
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('daily_basic', ts_code=ts_code, limit=limit,
                           fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            if df is None or len(df) == 0:
                return None
            return df.iloc[0].to_dict()

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.daily_basic(ts_code=ts_code, limit=limit,
                                 fields='trade_date,pe,pb,turnover_rate,total_mv,circ_mv')
            if df is None or len(df) == 0:
                return None
            return df.iloc[0].to_dict()

        elif src_name == 'akshare':
            # akshare 基本面信息字段不同，返回有限字段
            import akshare as ak
            try:
                symbol = _ts_code_to_akshare_stock(ts_code)
                info = ak.stock_individual_info_em(symbol=symbol)
                # info 是 DataFrame，'item' 列是字段名，'value' 列是值
                result = {'ts_code': ts_code, 'trade_date': datetime.now().strftime('%Y%m%d')}
                for _, row in info.iterrows():
                    item = str(row.get('item', ''))
                    val = row.get('value', '')
                    if '市盈率' in item:
                        try:
                            result['pe'] = float(val)
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                    elif '市净率' in item:
                        try:
                            result['pb'] = float(val)
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                    elif '总市值' in item:
                        try:
                            result['total_mv'] = float(val) / 10000  # 元→万元
                        except Exception:
                            logger.debug("数据源回退尝试")
                            pass
                return result
            except Exception as e:
                logger.warning(f"akshare daily_basic 失败: {e}")
                return None

        return None

    # ==================== K线响应构建 ====================

    def _build_kline_response(self, df, source_name):
        """将 DataFrame 构建为前端 K 线数组格式，含 MA 计算"""
        df = df.sort_values('trade_date', ascending=True).reset_index(drop=True)
        df['ma5'] = df['close'].rolling(window=5).mean()
        df['ma10'] = df['close'].rolling(window=10).mean()
        df['ma20'] = df['close'].rolling(window=20).mean()
        df['ma60'] = df['close'].rolling(window=60).mean()
        df['vol_ma5'] = df['vol'].rolling(window=5).mean()

        # v3.22-kline-fix: 主字段 NaN/Inf → None — 数据源缺行/异常值若直接 float() 会产出 NaN,
        #   FastAPI JSON 序列化报 "Out of range float values are not JSON compliant" → K线加载失败(ops 实测)
        def _safe(v):
            try:
                f = float(v)
                return f if (f == f and f not in (float('inf'), float('-inf'))) else None
            except (TypeError, ValueError):
                return None
        kline_data = []
        for _, row in df.iterrows():
            # V4.0 bugfix: 统一日期为 YYYYMMDD — akshare 源返回 YYYY-MM-DD, 前端按 YYYYMMDD 切片致 ops K线日期错乱
            _d = str(row['trade_date']).replace('-', '')
            kline_data.append([
                _d,
                _safe(row['open']),
                _safe(row['close']),
                _safe(row['low']),
                _safe(row['high']),
                _safe(row['vol']),
                float(row['ma5']) if pd.notna(row.get('ma5')) else None,
                float(row['ma10']) if pd.notna(row.get('ma10')) else None,
                float(row['ma20']) if pd.notna(row.get('ma20')) else None,
                float(row['ma60']) if pd.notna(row.get('ma60')) else None,
                float(row['vol_ma5']) if pd.notna(row.get('vol_ma5')) else None,
            ])

        return {"data": kline_data, "data_source": source_name}
