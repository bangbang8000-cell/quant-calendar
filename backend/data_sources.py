#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
统一数据源管理器
按优先级 fallback: sxsc-tushare → tushare → akshare
"""
import json
import os
import time
import logging
import threading
import pandas as pd
from datetime import datetime
from paths import DATA_DIR

# v3.8.1: K线内存缓存 TTL (秒) — 同股票同周期短时间重复请求直接命中, 避免每次切换实时调外部API
KLINE_CACHE_TTL = 300
KLINE_CACHE_MAX = 1000

logger = logging.getLogger(__name__)

# 配置文件路径
DATASOURCE_CONFIG_FILE = os.path.join(DATA_DIR, "datasource_config.json")

# 默认配置
DEFAULT_CONFIG = {
    "sources": {
        "sxsc_tushare": {
            "enabled": True,
            "token": "",  # v1.8: 从 .env SXSC_TUSHARE_TOKEN 读取
            "timeout": 30
        },
        "tushare": {
            "enabled": True,
            "token": "",
            "endpoint": "http://api.tushare.pro",
            "timeout": 30
        },
        "akshare": {
            "enabled": True
        }
    }
}

SOURCE_ORDER = ['sxsc_tushare', 'tushare', 'akshare']

# akshare 列名映射
AKSHARE_INDEX_COLUMN_MAP = {
    'date': 'trade_date', 'open': 'open', 'close': 'close',
    'high': 'high', 'low': 'low', 'volume': 'vol',
}
AKSHARE_STOCK_COLUMN_MAP = {
    '日期': 'trade_date', '开盘': 'open', '收盘': 'close',
    '最高': 'high', '最低': 'low', '成交量': 'vol', '成交额': 'amount',
    '涨跌幅': 'pct_chg', '换手率': 'turnover_rate',
}


# ==================== 数据源健康监控 (v3.10 / FR-3.10.3) ====================
# 记录每个数据源的调用成功/失败/延迟；连续失败达阈值标记 degraded，
# 输出到 /api/system/metrics 供运维可见。v3.11 数据自动化将消费该指标。

DEGRADE_THRESHOLD = 3  # 连续失败次数达到该值 → degraded
FRESHNESS_STALE_HOURS = 24  # v3.12 (FR-3.12.2): 距上次成功拉取超过该小时数 → stale 超期标黄

_health_lock = threading.Lock()
_health = {}


def _health_slot(source):
    if source not in _health:
        _health[source] = {
            'name': source,
            'calls': 0,
            'successes': 0,
            'failures': 0,
            'total_latency_ms': 0.0,
            'success_rate': None,
            'avg_latency_ms': None,
            'last_success': None,
            'last_failure': None,
            'consecutive_failures': 0,
            'degraded': False,
        }
    return _health[source]


def record_call(source, success, elapsed_ms):
    """记录一次数据源调用结果（线程安全）"""
    with _health_lock:
        s = _health_slot(source)
        s['calls'] += 1
        s['total_latency_ms'] += elapsed_ms
        if success:
            s['successes'] += 1
            s['last_success'] = datetime.now().isoformat()
            s['consecutive_failures'] = 0
        else:
            s['failures'] += 1
            s['last_failure'] = datetime.now().isoformat()
            s['consecutive_failures'] += 1
        s['success_rate'] = round(s['successes'] / s['calls'] * 100, 1)
        s['avg_latency_ms'] = round(s['total_latency_ms'] / s['calls'], 1)
        s['degraded'] = s['consecutive_failures'] >= DEGRADE_THRESHOLD
    return s


def _age_hours(iso_ts, now=None):
    """ISO 时间戳 → 距今小时数; 为空/无法解析 → None (v3.12/FR-3.12.2 新鲜度)"""
    if not iso_ts:
        return None
    try:
        dt = datetime.fromisoformat(iso_ts)
    except (TypeError, ValueError):
        return None
    now = now or datetime.now()
    return round((now - dt).total_seconds() / 3600.0, 1)


def get_health_metrics(now=None):
    """返回各数据源健康指标快照（供 /api/system/metrics 输出）。

    v3.12 (FR-3.12.2): 附加新鲜度字段
    - data_age_hours: 距 last_success 小时数 (从未成功 → None)
    - stale: 从未成功 或 data_age_hours > FRESHNESS_STALE_HOURS → True
    - last_fetch: 最近成功拉取时间 (与 last_success 一致)
    """
    now = now or datetime.now()
    with _health_lock:
        out = []
        for v in _health.values():
            slot = dict(v)
            age = _age_hours(slot.get('last_success'), now)
            slot['data_age_hours'] = age
            slot['stale'] = age is None or age > FRESHNESS_STALE_HOURS
            slot['last_fetch'] = slot.get('last_success')
            out.append(slot)
        return out


def reset_health():
    """清空健康记录（测试用）"""
    with _health_lock:
        _health.clear()


# ==================== 拉取失败补偿 + 告警队列 (v3.12 / FR-3.12.3) ====================
# 指数退避重试最多 MAX_RETRIES 次; 批次连续失败达阈值写入告警队列, 供 v3.13 通知通道消费。

MAX_RETRIES = 3  # 最多尝试次数 (含首次)
BACKOFF_BASE_SECONDS = 2.0  # 指数退避基数: 第 n 次失败后等待 base*2^(n-1) 秒
PULL_FAILURE_ALERT_THRESHOLD = 3  # 连续失败达到该值 → 告警入队

_alert_lock = threading.Lock()
ALERT_QUEUE = []  # 简单列表模拟队列 (front 旧), 上限 ALERT_QUEUE_MAX
ALERT_QUEUE_MAX = 200


def enqueue_alert(level, source, message):
    """写入告警队列 (供 v3.13 通知通道消费)"""
    with _alert_lock:
        ALERT_QUEUE.append({
            'level': level, 'source': source, 'message': message,
            'created_at': datetime.now().isoformat(),
        })
        if len(ALERT_QUEUE) > ALERT_QUEUE_MAX:
            del ALERT_QUEUE[:len(ALERT_QUEUE) - ALERT_QUEUE_MAX]
    return ALERT_QUEUE[-1]


def get_alerts(limit=100):
    """读取最近告警 (新→旧)"""
    with _alert_lock:
        return list(ALERT_QUEUE)[-limit:][::-1]


def clear_alerts():
    """清空告警队列（测试用）"""
    with _alert_lock:
        ALERT_QUEUE.clear()


def retry_with_backoff(fn, *, attempts=MAX_RETRIES, base_delay=BACKOFF_BASE_SECONDS,
                       sleep_fn=time.sleep, ok_check=None):
    """指数退避重试: 最多 attempts 次 (含首次), 第 n 次失败后等待 base*2^(n-1) 秒。

    - ok_check(result) 可判定“软失败” (如返回 None/空): 不满足则视为失败重试
    - 返回 (result, None) 或 (None, last_error)
    - sleep_fn 可注入 (测试用), 默认 time.sleep
    """
    last = None
    for i in range(attempts):
        try:
            result = fn()
            if ok_check is None or ok_check(result):
                return result, None
            last = result
        except Exception as e:
            last = e
        if i < attempts - 1:
            sleep_fn(base_delay * (2 ** i))
    return None, last


def record_batch_failure(source, consecutive_failures, message='', threshold=PULL_FAILURE_ALERT_THRESHOLD):
    """批次连续失败达阈值 → 告警入队; 返回是否触发告警 (v3.12/FR-3.12.3)"""
    if consecutive_failures >= threshold:
        enqueue_alert('error', source, message or f"{source} 连续 {consecutive_failures} 次拉取失败")
        return True
    return False


def timed_record(source, fn, *args, **kwargs):
    """带健康记录的调用封装：记录耗时与成功/失败，异常原样抛出"""
    t0 = time.monotonic()
    try:
        result = fn(*args, **kwargs)
        record_call(source, True, (time.monotonic() - t0) * 1000)
        return result
    except Exception:
        record_call(source, False, (time.monotonic() - t0) * 1000)
        raise


def _safe_float(value, default=None):
    """安全转 float, 无法转换返回 default"""
    try:
        if value is None or (isinstance(value, float) and value != value):  # NaN
            return default
        return float(value)
    except (TypeError, ValueError):
        return default


def _ts_code_to_akshare_index(ts_code):
    """tushare指数代码 → akshare 指数符号
    000001.SH → sh000001, 399001.SZ → sz399001
    """
    code, exchange = ts_code.split('.')
    prefix = 'sh' if exchange == 'SH' else 'sz'
    return f"{prefix}{code}"


def _ts_code_to_akshare_stock(ts_code):
    """tushare股票代码 → akshare 股票符号
    000001.SZ → 000001 (去后缀)
    """
    return ts_code.split('.')[0]


def _is_index_code(ts_code):
    """判断是否为指数代码"""
    if ts_code.endswith('.SH'):
        return ts_code.startswith('000') or ts_code.startswith('0000')
    if ts_code.endswith('.SZ'):
        return ts_code.startswith('399')
    return False


def _map_akshare_columns(df, column_map):
    """映射 akshare DataFrame 列名为 tushare 标准列名"""
    df = df.rename(columns={k: v for k, v in column_map.items() if k in df.columns})
    # 保留映射后存在的列
    keep_cols = [v for v in column_map.values() if v in df.columns]
    return df[keep_cols]


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

    def _load_config(self):
        if os.path.exists(DATASOURCE_CONFIG_FILE):
            try:
                with open(DATASOURCE_CONFIG_FILE, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except Exception as e:
                logger.warning(f"加载数据源配置失败: {e}")
        return DEFAULT_CONFIG

    def _save_config(self):
        os.makedirs(os.path.dirname(DATASOURCE_CONFIG_FILE), exist_ok=True)
        with open(DATASOURCE_CONFIG_FILE, 'w', encoding='utf-8') as f:
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
                if not token:
                    try:
                        from config import settings
                        token = getattr(settings, 'SXSC_TUSHARE_TOKEN', '')
                    except Exception:
                        logger.debug("数据源回退尝试")
                        pass
                timeout = sxsc.get('timeout', 30)
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
                if not token:
                    try:
                        from config import settings
                        token = getattr(settings, 'TUSHARE_TOKEN', '')
                    except Exception:
                        logger.debug("数据源回退尝试")
                        pass
                if token:
                    ts.set_token(token)
                    self._clients['tushare'] = ts.pro_api()
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

    def get_kline_data(self, ts_code, period='daily', limit=60):
        """获取K线数据（带 fallback + MA计算）

        支持 period: daily, weekly, monthly, quarterly, yearly
        quarterly/yearly 使用月线数据聚合
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
            for src_name in SOURCE_ORDER:
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
                    record_call(src_name, False, (time.monotonic() - _t0) * 1000)

        if result:
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
        for src_name in SOURCE_ORDER:
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
                record_call(src_name, False, (time.monotonic() - _t0) * 1000)
        return None

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
                symbol = _ts_code_to_akshare_stock(ts_code)
                df = ak.stock_zh_a_hist(symbol=symbol, period=period, adjust="qfq")
                df = _map_akshare_columns(df, AKSHARE_STOCK_COLUMN_MAP)
                return df.tail(limit)

        return None

    def _fetch_financial(self, src_name, ts_code):
        """各数据源获取财务指标 (FR-3.12.1: 财务数据拉取)

        字段: roe / netprofit_yoy / grossprofit_margin / debt_to_assets
        (tushare fina_indicator 最近一期)
        """
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

    def _fetch_daily_basic(self, src_name, ts_code, limit):
        """各数据源获取基本面数据"""
        if src_name == 'sxsc_tushare':
            api = self._clients.get('sxsc_tushare')
            if not api:
                return None
            df = api.query('daily_basic', ts_code=ts_code, limit=limit,
                           fields='trade_date,pe,pb,turnover_rate,total_mv')
            if df is None or len(df) == 0:
                return None
            return df.iloc[0].to_dict()

        elif src_name == 'tushare':
            pro = self._clients.get('tushare')
            if not pro:
                return None
            df = pro.daily_basic(ts_code=ts_code, limit=limit,
                                 fields='trade_date,pe,pb,turnover_rate,total_mv')
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

        kline_data = []
        for _, row in df.iterrows():
            kline_data.append([
                str(row['trade_date']),
                float(row['open']),
                float(row['close']),
                float(row['low']),
                float(row['high']),
                float(row['vol']),
                float(row['ma5']) if pd.notna(row.get('ma5')) else None,
                float(row['ma10']) if pd.notna(row.get('ma10')) else None,
                float(row['ma20']) if pd.notna(row.get('ma20')) else None,
                float(row['ma60']) if pd.notna(row.get('ma60')) else None,
                float(row['vol_ma5']) if pd.notna(row.get('vol_ma5')) else None,
            ])

        return {"data": kline_data, "data_source": source_name}


# 模块级单例
data_source_manager = DataSourceManager()


if __name__ == '__main__':
    # 测试
    mgr = DataSourceManager()
    print("=== 测试 get_index_daily ===")
    result = mgr.get_index_daily('000001.SH')
    print(json.dumps(result, ensure_ascii=False, indent=2, default=str))

    print("\n=== 测试 get_kline_data ===")
    result = mgr.get_kline_data('000001.SZ', limit=5)
    if result:
        print(f"数据源: {result['data_source']}, K线条数: {len(result['data'])}")
    else:
        print("获取失败")

    print("\n=== 测试 test_connection ===")
    for src in SOURCE_ORDER:
        r = mgr.test_connection(src)
        print(f"  {src}: {r['message']}")
