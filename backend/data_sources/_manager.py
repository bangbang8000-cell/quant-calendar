#!/usr/bin/env python3
# ruff: noqa: F405
# -*- coding: utf-8 -*-
"""V5.0.9 (T-5.0.93): DataSourceManager (拆自 data_sources.py)"""
import json
import os
import threading
import time
import logging
from datetime import datetime  # noqa: F401  # 原模块公开名(取数段已移出), 保持兼容

import data_sources as _ds_mod  # 调用期读包级 _ds_mod.DATASOURCE_CONFIG_FILE
from ._constants import *  # noqa: F401,F403
from ._health import (record_call, _is_rate_limited, get_route_order)
from ._mapping import *  # noqa: F401,F403
from ._mapping import (_safe_float, _ts_code_to_akshare_index, _ts_code_to_akshare_stock,
              _ts_code_to_sina_symbol, _is_index_code, _map_akshare_columns)

logger = logging.getLogger(__name__)

# V5.4.0 (FR-5.4.8): 分钟周期常量 — 6.3.0 (T-6.3.0.4) 定义移至 _manager_fetch, 此处再导出保持原导入路径
from ._manager_fetch import (  # noqa: F401
    MINUTE_PERIODS, MINUTE_PERIOD_TO_FREQ, MINUTE_PERIOD_TO_AKSHARE,
    DataSourceFetchMixin,
)

# V5.4.1 (R1 / FR-5.4.8 可用化): 分钟接口限频器 — tushare stk_mins 公开限 1 次/分钟
# 同源冷却期内跳过 (不阻塞请求), 全部冷却则走降级逻辑。线程安全。
_MINUTE_LOCK = threading.Lock()
_MINUTE_LAST_CALL = {}  # source -> last call timestamp
_MINUTE_COOLDOWN_OVERRIDE = None  # 测试注入: {'source': timestamp} 覆盖冷却判断

def _minute_default_interval():
    """分钟限频间隔 (秒), 从 config minute.interval_seconds 读取, 缺省 60。"""
    from data_sources import data_source_manager
    try:
        return int((data_source_manager.config or {}).get('minute', {}).get('interval_seconds', 60))
    except Exception:
        return 60

def reset_minute_rate_limiter():
    """清空分钟限频状态 (测试隔离用)。"""
    global _MINUTE_LAST_CALL
    with _MINUTE_LOCK:
        _MINUTE_LAST_CALL = {}

def _minute_source_in_cooldown(source, now=None):
    """判断数据源是否在分钟限频冷却期 (60s 内已调用过 → True)。"""
    now_f = now if now is not None else time.time()
    if _MINUTE_COOLDOWN_OVERRIDE is not None:
        ts = _MINUTE_COOLDOWN_OVERRIDE.get(source)
        return ts is not None and (now_f - ts) < _minute_default_interval()
    with _MINUTE_LOCK:
        ts = _MINUTE_LAST_CALL.get(source)
        return ts is not None and (now_f - ts) < _minute_default_interval()

def _minute_mark_called(source, now=None):
    """记录数据源分钟调用时间 (调用成功后调用)。"""
    now_f = now if now is not None else time.time()
    with _MINUTE_LOCK:
        _MINUTE_LAST_CALL[source] = now_f

def _minute_lock_acquire(source):
    """测试用: 手动标记某源已调用 (进入冷却)。"""
    _minute_mark_called(source)

def _minute_lock_release(source):
    """测试用: 清除某源冷却 (等价复位)。"""
    with _MINUTE_LOCK:
        _MINUTE_LAST_CALL.pop(source, None)

class DataSourceManager(DataSourceFetchMixin):
    """统一数据源管理器 — 模块级单例"""

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
    def _source_client_ready(self, source_name):
        """V5.3.13: 数据源客户端是否就绪 (路由遍历跳过未初始化源)。

        sxsc_tushare/tushare 需要 _clients 中的客户端对象; 客户端缺失
        (如 dev 未配置 SXSC_TUSHARE_TOKEN) → False, 遍历跳过且不记失败,
        避免假失败触发冷却 + 污染健康统计。akshare 按需 import → True。
        """
        if source_name in ('sxsc_tushare', 'tushare'):
            return source_name in self._clients and self._clients.get(source_name) is not None
        return True

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
        """测试指定数据源连接

        V6.9.3 (F10): sxsc 客户端缺失时即时重建 (不依赖启动态); 测试用独立 timeout=10s;
        错误分类提示 (未初始化/网络超时/token 无效)。
        """
        sources = self.config.get('sources', {})
        cfg = sources.get(source_name, {})

        if not cfg.get('enabled', True):
            return {"success": False, "message": f"数据源 {source_name} 已禁用"}

        _t0 = time.monotonic()

        # sxsc: 客户端缺失或超时配置 < 10s 时, 用 .env/配置 token 即时重建专用测试客户端
        if source_name == 'sxsc_tushare':
            token = cfg.get('token', '')
            if not self._is_valid_token(token):
                try:
                    from config import settings
                    token = getattr(settings, 'SXSC_TUSHARE_TOKEN', '')
                except Exception:
                    token = ''
            if not token:
                return {"success": False, "message": "❌ 未配置 Token (环境变量 SXSC_TUSHARE_TOKEN 或配置页填写)"}
            try:
                from sxsc_tushare import get_api
                api = get_api(token, timeout=10, env='prd')
                df = api.query('index_daily', ts_code='000001.SH', limit=1)
                record_call(source_name, True, (time.monotonic() - _t0) * 1000)
                return {"success": True, "message": f"✅ 连接成功，返回 {len(df)} 条数据"}
            except Exception as e:
                err = str(e)[:200]
                record_call(source_name, False, (time.monotonic() - _t0) * 1000)
                low = err.lower()
                if 'timeout' in low or 'timed out' in low or 'connect' in low:
                    return {"success": False, "message": f"❌ 网络超时: {err}"}
                if 'token' in low or 'auth' in low or 'code' in low and 'msg' in low:
                    return {"success": False, "message": f"❌ Token 无效或未授权: {err}"}
                return {"success": False, "message": f"❌ 连接失败: {err}"}

        if source_name not in self._clients:
            return {"success": False, "message": f"数据源 {source_name} 未初始化"}

        try:
            if source_name == 'tushare':
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
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
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

        支持 period: daily, weekly, monthly, quarterly, yearly + 分钟级 15min/30min/60min
        quarterly/yearly 使用月线数据聚合
        preferred: 优先数据源(如 'tushare'); 用于高并发场景(如异动扫描)绕开
                   sxsc 20次/秒限流 — 指定时先试 preferred, 失败再按路由顺序 fallback

        V5.4.1 (R1 / FR-5.4.8 可用化):
        - 分钟 period: 按 config minute.priority 路由 (券商版 sxsc 默认优先, 可配置切换)
        - 分钟限频: 同源 interval_seconds(默认60s) 冷却期内跳过, 不阻塞请求
        - 降级: 全分钟源失败/冷却 → 降级日线并标记 degraded_from (前端展示提示)
        """
        # v3.8.1: 内存 TTL 缓存 — 同股票同周期短时间重复请求直接命中
        key = (ts_code, period, limit)
        now = time.time()
        cached = self._kline_cache.get(key)
        if cached and now - cached[0] < KLINE_CACHE_TTL:
            return cached[1]

        is_minute = period in MINUTE_PERIODS
        result = None
        degraded_from = None

        # quarterly/yearly: 用月线数据聚合
        if period in ('quarterly', 'yearly'):
            result = self._get_resampled_kline(ts_code, period, limit)
        else:
            # v3.22: preferred 优先 — 高并发场景(异动扫描)先走 tushare 绕开 sxsc 20次/秒限流
            # V5.4.1: 分钟 period 用 minute.priority (券商版优先, 可配置); 非分钟沿用既有路由
            if is_minute:
                route = self._minute_priority()
            else:
                route = [preferred] + [s for s in get_route_order() if s != preferred] if preferred else get_route_order()

            for src_name in route:
                if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                    continue
                src_cfg = self._get_source_config(src_name)
                if not src_cfg.get('enabled', True):
                    continue
                # V5.4.1: 分钟源冷却跳过 (同源 60s 内不重复拉, 尊重 stk_mins 1次/分钟)
                if is_minute and _minute_source_in_cooldown(src_name, now):
                    continue
                _t0 = time.monotonic()
                try:
                    df = self._fetch_kline(src_name, ts_code, period, limit)
                    _elapsed = (time.monotonic() - _t0) * 1000
                    if df is not None and len(df) > 0:
                        result = self._build_kline_response(df, src_name)
                        record_call(src_name, True, _elapsed)
                        if is_minute:
                            _minute_mark_called(src_name, time.time())
                        break
                    record_call(src_name, False, _elapsed)  # 空数据记为一次失败
                except Exception as e:
                    logger.warning(f"{src_name} get_kline_data({ts_code}) 失败: {e}")
                    self._errors[src_name] = str(e)
                    record_call(src_name, False, (time.monotonic() - _t0) * 1000, rate_limited=_is_rate_limited(e))

        # V5.4.1: 分钟全源失败/冷却 → 降级日线 (degrade_to_daily 开关, 默认开)
        if is_minute and not result:
            cfg_minute = (self.config or {}).get('minute', {})
            if cfg_minute.get('degrade_to_daily', True):
                daily = self.get_kline_data(ts_code, period='daily', limit=limit)
                if daily and daily.get('data'):
                    result = dict(daily)
                    degraded_from = period
                    logger.info("[kline] %s %s 分钟数据不可用, 降级日线展示", ts_code, period)

        if result:
            if degraded_from:
                result['degraded_from'] = degraded_from
            # v3.22: 仅缓存 data 非空的结果 — 空数据(如数据源限流/无行)不落缓存,
            # 避免"坏缓存"污染后续请求(曾导致异动扫描 78/80 只读到空 K 线)
            if isinstance(result, dict):
                _cacheable = bool(result.get('data')) and not degraded_from
            else:
                _cacheable = bool(result)
            if _cacheable:
                # 简单淘汰: 缓存条目超限时整体清空 (K线场景条目有限, 无需 LRU)
                if len(self._kline_cache) >= KLINE_CACHE_MAX:
                    self._kline_cache.clear()
                self._kline_cache[key] = (now, result)
        return result

    def get_daily_basic(self, ts_code, limit=5):
        """获取基本面数据（带 fallback）"""
        for src_name in get_route_order():
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
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
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
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

    def get_financial_data(self, ts_code):
        """获取财务指标（带 fallback）— FR-3.12.1 财务数据拉取"""
        for src_name in SOURCE_ORDER:
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
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
            if not self._source_client_ready(src_name):  # V5.3.13: 客户端缺失跳过, 不记失败
                continue  # V5.3.13: 客户端缺失跳过, 不记失败
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
