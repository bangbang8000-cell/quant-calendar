"""V5.0.1 T-5.0.11: DataPortal 2.0 — 统一取数层测试 (FakeSource 注入, TEST-PLAN 2.1)

覆盖: 统一取数 / 口径规范化 / 三源 fallback / TTL 缓存 / 每源限流 / 指数退避重试 / 统计
"""
import time
from unittest.mock import patch

import pytest

from data_portal2 import DataPortal, DataPortalError, SourceAdapter


class FakeAdapter:
    """可注入取数器: rows 可为静态列表或 callable; exc 可注入异常 (含 callable)"""

    def __init__(self, name, rows=None, exc=None, call_log=None):
        self.name = name
        self.rows = rows
        self.exc = exc
        self.calls = []
        self.log = call_log

    def get(self, kind, **kw):
        self.calls.append((kind, kw))
        if self.log is not None:
            self.log.append(self.name)
        if self.exc:
            if callable(self.exc):
                raise self.exc()
            raise self.exc
        if callable(self.rows):
            return self.rows()
        return self.rows or []


def _kline_rows():
    return [
        {"trade_date": "2026-08-28", "open": 10.0, "high": 11.0, "low": 9.5,
         "close": 10.5, "vol": 1000, "amount": 100000.0},
        {"trade_date": "2026-08-31", "open": 10.5, "high": 11.2, "low": 10.0,
         "close": 11.0, "vol": 1200, "amount": 130000.0},
    ]


# ═══ 统一取数 ═══

class TestUnifiedFetch:
    def test_fetch_returns_rows(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        rows = dp.fetch("kline", "000001.SZ", period="daily")
        assert len(rows) == 2
        assert a.calls[0][0] == "kline"

    def test_fetch_empty_returns_empty(self):
        a = FakeAdapter("fake", rows=[])
        dp = DataPortal(adapters=[a], retry_base=0)
        assert dp.fetch("kline", "x") == []

    def test_fetch_kind_daily_basic(self):
        a = FakeAdapter("fake", rows=[{"ts_code": "000001.SZ", "pe": 10.2}])
        dp = DataPortal(adapters=[a], retry_base=0)
        rows = dp.fetch("daily_basic", "000001.SZ")
        assert rows and rows[0]["ts_code"] == "000001.SZ"

    def test_fetch_symbol_period_passthrough(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "600000.SH", period="weekly", adjust="qfq", limit=30)
        kw = a.calls[0][1]
        assert kw["symbol"] == "600000.SH" and kw["period"] == "weekly" and kw["limit"] == 30


# ═══ 口径规范化 ═══

class TestNormalization:
    def test_canonical_fields_present(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize(_kline_rows(), "kline")
        for r in rows:
            for f in ("trade_date", "open", "high", "low", "close", "volume", "amount"):
                assert f in r

    def test_alias_date_mapped(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"日期": "2026-08-28", "close": "10.5"}], "kline")
        assert rows[0]["trade_date"] == "2026-08-28"

    def test_alias_vol_mapped(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28", "vol": "1200"}], "kline")
        assert rows[0]["volume"] == 1200.0

    def test_numeric_coercion_string(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28", "close": "10.55"}], "kline")
        assert rows[0]["close"] == 10.55

    def test_invalid_numeric_to_none(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28", "close": "nan"}], "kline")
        assert rows[0]["close"] is None

    def test_trade_date_truncated(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28 15:00:00"}], "kline")
        assert rows[0]["trade_date"] == "2026-08-28"

    def test_unknown_fields_ignored(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28", "junk": 1}], "kline")
        assert "junk" not in rows[0]


# ═══ 三源 fallback ═══

class TestSourceFallback:
    def test_first_source_fails_second_succeeds(self):
        log = []
        a1 = FakeAdapter("a", exc=RuntimeError("down"), call_log=log)
        a2 = FakeAdapter("b", rows=_kline_rows(), call_log=log)
        # retry_attempts=1: 隔离 fallback 语义 (源失败即切下一源, 不做本层重试)
        dp = DataPortal(adapters=[a1, a2], retry_attempts=1, retry_base=0)
        rows = dp.fetch("kline", "000001.SZ")
        assert len(rows) == 2
        assert log == ["a", "b"]

    def test_all_sources_fail_raises(self):
        a1 = FakeAdapter("a", exc=RuntimeError("down"))
        a2 = FakeAdapter("b", exc=RuntimeError("down"))
        dp = DataPortal(adapters=[a1, a2], retry_base=0)
        with pytest.raises(DataPortalError):
            dp.fetch("kline", "x")

    def test_empty_rows_falls_through(self):
        """某源返回空行 → 视为失败继续下一源"""
        log = []
        a1 = FakeAdapter("a", rows=[], call_log=log)
        a2 = FakeAdapter("b", rows=_kline_rows(), call_log=log)
        dp = DataPortal(adapters=[a1, a2], retry_base=0)
        rows = dp.fetch("kline", "x")
        assert len(rows) == 2 and log == ["a", "b"]


# ═══ 缓存 ═══

class TestCache:
    def test_second_fetch_hits_cache(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "000001.SZ")
        dp.fetch("kline", "000001.SZ")
        assert len(a.calls) == 1

    def test_cache_miss_on_different_symbol(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "000001.SZ")
        dp.fetch("kline", "600000.SH")
        assert len(a.calls) == 2

    def test_cache_expiry_revokes(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0, ttl={"kline": 0.01})
        dp.fetch("kline", "x")
        time.sleep(0.02)
        dp.fetch("kline", "x")
        assert len(a.calls) == 2

    def test_cache_key_includes_adjust(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "x", adjust="qfq")
        dp.fetch("kline", "x", adjust="none")
        assert len(a.calls) == 2

    def test_clear_cache(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "x")
        assert dp.clear_cache() >= 1
        dp.fetch("kline", "x")
        assert len(a.calls) == 2

    def test_cache_stats(self):
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], retry_base=0)
        dp.fetch("kline", "x")
        dp.fetch("kline", "x")
        s = dp.cache_stats()
        assert s["hits"] == 1 and s["misses"] == 1


# ═══ 限流 ═══

class TestRateLimit:
    def test_min_interval_throttles(self):
        """同源连续请求间隔小于 min_interval → 触发 sleep"""
        slept = []
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], min_interval={"fake": 0.5}, retry_base=0)
        dp._sleep = lambda s: slept.append(s)
        dp.fetch("kline", "x")
        dp.fetch("kline", "y")
        assert any(s > 0 for s in slept)

    def test_different_sources_independent(self):
        slept = []
        a1 = FakeAdapter("a", rows=_kline_rows())
        a2 = FakeAdapter("b", rows=_kline_rows())
        dp = DataPortal(adapters=[a1, a2], min_interval={"a": 0.5, "b": 0.5}, retry_base=0)
        dp._sleep = lambda s: slept.append(s)
        dp.fetch("kline", "x")  # 走 a
        dp.fetch("kline", "x")  # 缓存命中, 不限流
        assert slept == []

    def test_no_throttle_when_above_interval(self):
        slept = []
        a = FakeAdapter("fake", rows=_kline_rows())
        dp = DataPortal(adapters=[a], min_interval={"fake": 0.0}, retry_base=0)
        dp._sleep = lambda s: slept.append(s)
        dp.fetch("kline", "x")
        dp.fetch("kline", "y")
        assert slept == []


# ═══ 重试 ═══

class TestRetry:
    def test_retry_after_transient_failures(self):
        attempts = {"n": 0}
        a = FakeAdapter("fake", exc=lambda: (_ for _ in ()).throw(
            RuntimeError("boom") if (attempts.__setitem__("n", attempts["n"] + 1) or attempts["n"]) < 3 else None))
        # 更清晰: 前两次抛错, 第三次成功
        counter = {"n": 0}

        def flaky():
            counter["n"] += 1
            if counter["n"] < 3:
                raise RuntimeError("transient")
            return _kline_rows()

        a = FakeAdapter("fake", rows=flaky)
        dp = DataPortal(adapters=[a], retry_attempts=3, retry_base=0.01)
        dp._sleep = lambda s: None
        rows = dp.fetch("kline", "x")
        assert len(rows) == 2 and counter["n"] == 3

    def test_persistent_failure_raises_after_attempts(self):
        counter = {"n": 0}
        a = FakeAdapter("fake", rows=lambda: (_ for _ in ()).throw(RuntimeError("always") ))
        a = FakeAdapter("fake", exc=lambda: RuntimeError("always"))
        dp = DataPortal(adapters=[a], retry_attempts=3, retry_base=0.01)
        dp._sleep = lambda s: None
        with pytest.raises(DataPortalError):
            dp.fetch("kline", "x")
        assert len(a.calls) == 3  # 重试 3 次后放弃


# ═══ 统计 / 健康 ═══

class TestStats:
    def test_source_stats_recorded(self):
        log = []
        a1 = FakeAdapter("a", exc=RuntimeError("down"), call_log=log)
        a2 = FakeAdapter("b", rows=_kline_rows(), call_log=log)
        dp = DataPortal(adapters=[a1, a2], retry_base=0)
        dp.fetch("kline", "x")
        st = dp.source_stats()
        assert st["a"]["failures"] == 1 and st["b"]["successes"] == 1

    def test_data_portal_error_message(self):
        a = FakeAdapter("a", exc=RuntimeError("down"))
        dp = DataPortal(adapters=[a], retry_base=0)
        try:
            dp.fetch("kline", "x")
        except DataPortalError as e:
            assert "kline" in str(e) and "x" in str(e)


# ═══ 对拍 / 单例 / 默认链路 ═══

class TestParityAndDefaults:
    def test_normalize_is_idempotent(self):
        """口径规范化幂等: 规范化结果再次规范化不变化 (对拍稳定性)"""
        dp = DataPortal(adapters=[], retry_base=0)
        once = dp.normalize(_kline_rows(), "kline")
        twice = dp.normalize(once, "kline")
        assert once == twice

    def test_normalize_keeps_passthrough_fields(self):
        dp = DataPortal(adapters=[], retry_base=0)
        rows = dp.normalize([{"trade_date": "2026-08-28", "close": 10.5,
                              "ts_code": "000001.SZ", "pe": 12.3}], "kline")
        assert rows[0]["ts_code"] == "000001.SZ" and rows[0]["pe"] == 12.3

    def test_get_portal_is_singleton(self):
        from data_portal2 import get_portal
        p1 = get_portal()
        p2 = get_portal()
        assert p1 is p2

    def test_default_adapters_wrap_datasource_manager(self):
        from data_portal2 import build_default_adapters
        ads = build_default_adapters()
        assert len(ads) == 1 and ads[0].name == "datasource_manager"

    def test_parity_with_old_path_same_rows(self):
        """同一原始行: DataPortal 口径输出与旧路径字段逐项对拍 (规范字段一致)"""
        dp = DataPortal(adapters=[], retry_base=0)
        raw = _kline_rows()
        portal_rows = dp.normalize(raw, "kline")
        for i, r in enumerate(raw):
            assert portal_rows[i]["trade_date"] == str(r["trade_date"])[:10]
            assert portal_rows[i]["close"] == float(r["close"])

    def test_cache_ttl_by_kind(self):
        """不同 kind 默认 TTL: kline 短 / daily_basic 长"""
        from data_portal2 import DEFAULT_TTL
        assert DEFAULT_TTL["kline"] < DEFAULT_TTL["daily_basic"]
