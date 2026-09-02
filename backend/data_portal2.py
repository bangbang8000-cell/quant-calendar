#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""V5.0.1 T-5.0.11: DataPortal 2.0 — 统一取数层 (三源 + 缓存 + 限流 + 重试 + 口径)

定位: 所有取数路径 (评估/回测/因子/日历) 的统一入口, 收敛散落在各模块的直连调用。
- 口径: 源字段 (trade_date/日期/vol/... ) → 规范字段 (trade_date/open/.../volume/amount), 数值安全转换
- 缓存: TTL 缓存 (kline 1h / daily_basic & financial 24h), 带命中统计
- 限流: 每源最小请求间隔 (客户端节流, 防 429)
- 重试: 复用 data_sources.retry_with_backoff (可注入 sleep_fn)
- 三源: 按 adapters 顺序 fallback (默认包装 DataSourceManager 的真实三源链路)

测试: tests/test_data_portal2.py 用 FakeAdapter 注入全链路确定性验证 (TEST-PLAN 2.1)
"""
import logging
import threading
import time

logger = logging.getLogger(__name__)

# ─── 口径: 规范字段与源字段别名 ───
FIELD_ALIASES = {
    "trade_date": ("trade_date", "date", "日期", "day", "日历"),
    "open": ("open", "开盘", "open_price", "op"),
    "high": ("high", "最高"),
    "low": ("low", "最低"),
    "close": ("close", "收盘", "close_price"),
    "volume": ("volume", "vol", "成交量", "成交手", "vol_手"),
    "amount": ("amount", "成交额"),
}
_NUMERIC_FIELDS = ("open", "high", "low", "close", "volume", "amount")

# 口径白名单: 除规范字段外允许透传的通用字段 (标识/估值/股本), 其余一律丢弃
PASSTHROUGH_FIELDS = {
    "ts_code", "symbol", "name",
    "pe", "pe_ttm", "pb", "ps", "ps_ttm", "dv_ratio", "dv_ttm",
    "turnover_rate", "turnover_rate_f", "volume_ratio",
    "total_share", "float_share", "free_share", "total_mv", "circ_mv",
    "ann_date", "f_ann_date", "end_date", "eps", "revenue", "profit", "roe",
}

DEFAULT_TTL = {"kline": 3600, "daily_basic": 86400, "financial": 86400}
DEFAULT_MIN_INTERVAL = {"sxsc_tushare": 0.2, "tushare": 0.6, "akshare": 0.6}
DEFAULT_RETRY_ATTEMPTS = 3
DEFAULT_RETRY_BASE = 0.05


class DataPortalError(Exception):
    """统一取数失败 (全数据源不可用 / 不支持的类型)。"""


class SourceAdapter:
    """数据源适配器: .name + .get(kind, **kw) -> list[dict] (原始口径)"""

    def __init__(self, name, fn=None):
        self.name = name
        self._fn = fn

    def get(self, kind, **kw):
        if self._fn is None:
            raise DataPortalError(f"适配器 {self.name} 未提供取数实现")
        return self._fn(kind=kind, **kw)


class DataPortal:
    """统一取数层: 缓存 → 限流 → 重试 → 口径规范化 → 多源 fallback。"""

    def __init__(self, adapters=None, min_interval=None, ttl=None,
                 sleep_fn=time.sleep, retry_attempts=DEFAULT_RETRY_ATTEMPTS,
                 retry_base=DEFAULT_RETRY_BASE):
        self.adapters = list(adapters) if adapters is not None else build_default_adapters()
        self._min_interval = dict(min_interval or DEFAULT_MIN_INTERVAL)
        self._ttl = dict(ttl or DEFAULT_TTL)
        self._sleep = sleep_fn
        self._retry_attempts = retry_attempts
        self._retry_base = retry_base
        self._cache = {}
        self._cache_hits = 0
        self._cache_misses = 0
        self._last_call = {}
        self._stats = {a.name: {"successes": 0, "failures": 0} for a in self.adapters}
        self._lock = threading.Lock()

    # ─── 口径规范化 ───
    def normalize(self, rows, kind="kline"):
        """源字段 → 规范字段; 数值字段安全转 float; trade_date 截断为日期。"""
        import math
        out = []
        for row in rows or []:
            if not isinstance(row, dict):
                continue
            nr = {k: v for k, v in row.items()
                  if k in PASSTHROUGH_FIELDS or k in FIELD_ALIASES}  # 口径白名单透传
            for canon, aliases in FIELD_ALIASES.items():
                val = None
                for a in aliases:
                    if a in row and row[a] is not None:
                        val = row[a]
                        break
                if val is not None:
                    if canon in _NUMERIC_FIELDS:
                        try:
                            fv = float(val)
                            if math.isnan(fv) or math.isinf(fv):
                                val = None
                            else:
                                val = fv
                        except (TypeError, ValueError):
                            val = None
                    elif canon == "trade_date":
                        val = str(val)[:10]
                    nr[canon] = val
            out.append(nr)
        return out

    # ─── 缓存 ───
    def _cache_key(self, kind, symbol, period, adjust, kw, as_of=None):
        try:
            extra = tuple(sorted((k, v) for k, v in kw.items() if k not in ("symbol", "period", "adjust", "as_of")))
        except TypeError:
            extra = ()
        return (kind, symbol, period, adjust, as_of, extra)

    def _cache_get(self, key):
        with self._lock:
            hit = self._cache.get(key)
            if hit and hit[0] > time.time():
                return hit[1]
            if hit:
                self._cache.pop(key, None)
            return None

    def _cache_set(self, key, rows):
        with self._lock:
            self._cache[key] = (time.time() + self._ttl.get(key[0], 3600), rows)

    def clear_cache(self):
        with self._lock:
            n = len(self._cache)
            self._cache.clear()
        return n

    def cache_stats(self):
        return {"hits": self._cache_hits, "misses": self._cache_misses,
                "size": len(self._cache)}

    # ─── 限流 ───
    def _throttle(self, name):
        interval = self._min_interval.get(name, 0.0)
        if interval <= 0:
            return
        now = time.time()
        with self._lock:
            last = self._last_call.get(name, 0.0)
            wait = interval - (now - last)
            if wait > 0:
                self._last_call[name] = now + wait
            else:
                self._last_call[name] = now
        if wait > 0:
            self._sleep(wait)

    # ─── 重试 ───
    def _get_with_retry(self, adapter, kind, kw):
        from data_sources import retry_with_backoff
        result, err = retry_with_backoff(
            lambda: adapter.get(kind, **kw),
            attempts=self._retry_attempts, base_delay=self._retry_base,
            sleep_fn=self._sleep)
        if err is not None:
            raise err
        return result or []

    # ─── 主入口 ───
    def fetch(self, kind, symbol, *, period="daily", adjust="qfq", as_of=None, **kw):
        """统一取数: 缓存 → 逐源(限流+重试) → 口径 → PIT(as_of) → 缓存。

        as_of: 指定后按 PIT 过滤 trade_date <= as_of 的行 (防前视, 安全默认静默过滤)。
        全源失败抛 DataPortalError。
        """
        key = self._cache_key(kind, symbol, period, adjust, kw, as_of=as_of)
        cached = self._cache_get(key)
        if cached is not None:
            self._cache_hits += 1
            return cached
        self._cache_misses += 1

        last_err = None
        saw_success = False
        for adapter in self.adapters:
            self._throttle(adapter.name)
            try:
                rows = self._get_with_retry(adapter, kind,
                                            {"symbol": symbol, "period": period,
                                             "adjust": adjust, **kw})
                saw_success = True
            except Exception as e:
                self._stats[adapter.name]["failures"] += 1
                last_err = e
                logger.warning("[DataPortal] %s %s 取数失败: %s", adapter.name, kind, e)
                continue
            if rows:
                rows = self.normalize(rows, kind)
                if as_of is not None:
                    from pit import pit_filter
                    rows = pit_filter(rows, as_of, strict=False)
                self._stats[adapter.name]["successes"] += 1
                self._cache_set(key, rows)
                return rows
            # 空行 → 继续下一源 (空结果可能合法, 非错误)
        if saw_success:
            return []  # 至少一源正常返回(但为空)
        raise DataPortalError(
            f"全数据源取数失败 kind={kind} symbol={symbol}: {last_err}")

    def source_stats(self):
        with self._lock:
            return {k: dict(v) for k, v in self._stats.items()}


# ─── 默认真实链路 ───
def build_default_adapters():
    """默认适配器: 包装 DataSourceManager (内部含三源 fallback + K线 TTL 缓存)。

    返回单适配器列表; 业务侧如需并发绕行可自行传 preferred。
    """

    def dsm_get(kind, **kw):
        from data_sources import DataSourceManager
        mgr = DataSourceManager()
        symbol = kw.get("symbol", "")
        if kind == "kline":
            resp = mgr.get_kline_data(ts_code=symbol, period=kw.get("period", "daily"),
                                      limit=kw.get("limit", 120))
            return (resp or {}).get("data") or []
        if kind == "daily_basic":
            resp = mgr.get_daily_basic(ts_code=symbol, limit=kw.get("limit", 5))
            return (resp or {}).get("data") or []
        if kind == "financial":
            resp = mgr.get_financial_data(symbol)
            return (resp or {}).get("data") or []
        raise DataPortalError(f"不支持的取数类型: {kind}")

    return [SourceAdapter("datasource_manager", dsm_get)]


# 模块级便捷入口 (默认真实链路, 惰性初始化单例)
_portal = None
_portal_lock = threading.Lock()


def get_portal() -> DataPortal:
    """获取默认 DataPortal 单例 (真实链路, 惰性构建)。"""
    global _portal
    with _portal_lock:
        if _portal is None:
            _portal = DataPortal()
        return _portal
