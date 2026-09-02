"""V5.0.1 T-5.0.13: PIT 治理 — 防前视断言四路径 (TEST-PLAN 2.1 test_pit_no_lookahead.py)

四条取数路径 (评估/回测/因子/日历) 的数据都必须满足 end <= as_of。
- pit_filter(rows, as_of, strict=True): 过滤未来数据; strict 时对未来数据抛 PitError
- 路径守卫: PATH_PIT_GUARDS 注册表, 每条路径统一断言 end<=as_of
- DataPortal.fetch(as_of=...): 统一取数层按 as_of 过滤 (PIT 进入主链路)
"""
import pytest

from data_quality import DataQualityError
from pit import (PATH_PIT_GUARDS, PitError, assert_pit, pit_filter)


def _rows(n=8, start="2026-07-01", as_of=None):
    from datetime import date, timedelta
    out = []
    d = date.fromisoformat(start)
    for i in range(n):
        out.append({"trade_date": (d + timedelta(days=i)).isoformat(),
                    "close": 10.0 + i * 0.1})
    return out


def _future_rows(as_of="2026-07-05"):
    """构造含 as_of 之后数据的序列 (模拟未来数据泄漏)"""
    return _rows(10, start="2026-07-01")  # 07-01..07-10, 含 > 07-05


FUTURE_DATE = "2026-07-08"
PAST_DATE = "2026-07-02"


# ═══ pit_filter / assert_pit 基础 ═══

class TestPitBasics:
    def test_filter_removes_future(self):
        rows = _future_rows(as_of="2026-07-05")
        out = pit_filter(rows, "2026-07-05", strict=False)
        assert all(r["trade_date"] <= "2026-07-05" for r in out)
        assert len(out) == 5  # 07-01..07-05

    def test_strict_raises_on_future(self):
        rows = _future_rows(as_of="2026-07-05")
        with pytest.raises(PitError):
            pit_filter(rows, "2026-07-05", strict=True)

    def test_inclusive_boundary(self):
        rows = [{"trade_date": "2026-07-05", "close": 10.0}]
        out = pit_filter(rows, "2026-07-05", strict=True)
        assert len(out) == 1  # == as_of 允许

    def test_all_past_passes(self):
        rows = _rows(5, start="2026-06-01")
        assert len(pit_filter(rows, "2026-07-05", strict=True)) == 5

    def test_empty_rows_passes(self):
        assert pit_filter([], "2026-07-05", strict=True) == []

    def test_missing_trade_date_kept(self):
        rows = [{"close": 10.0}, {"trade_date": FUTURE_DATE, "close": 11.0}]
        out = pit_filter(rows, "2026-07-05", strict=False)
        assert len(out) == 1 and out[0]["close"] == 10.0

    def test_assert_pit_no_violation(self):
        rows = _rows(5, start="2026-07-01")
        assert assert_pit(rows, "2026-07-05") is None

    def test_assert_pit_violation_message(self):
        rows = _future_rows(as_of="2026-07-05")
        with pytest.raises(PitError) as ei:
            assert_pit(rows, "2026-07-05")
        assert FUTURE_DATE in str(ei.value)

    def test_tolerance_days(self):
        rows = [{"trade_date": "2026-07-06", "close": 10.0}]
        out = pit_filter(rows, "2026-07-05", tolerance_days=1, strict=True)
        assert len(out) == 1  # 容差 1 天: 07-06 允许
        with pytest.raises(PitError):
            pit_filter(rows, "2026-07-05", tolerance_days=0, strict=True)


# ═══ 四路径断言 (评估/回测/因子/日历) ═══

class TestFourPaths:
    PATH_NAMES = ["evaluation", "backtest", "factor", "calendar"]

    def test_registry_has_four_paths(self):
        assert set(PATH_PIT_GUARDS) >= set(self.PATH_NAMES)

    @pytest.mark.parametrize("path", PATH_NAMES)
    def test_each_path_raises_on_lookahead(self, path):
        """每条路径: 含未来数据必须抛 PitError (end<=as_of 强制)"""
        rows = _future_rows(as_of="2026-07-05")
        guard = PATH_PIT_GUARDS[path]
        with pytest.raises(PitError):
            guard(rows, "2026-07-05")

    @pytest.mark.parametrize("path", PATH_NAMES)
    def test_each_path_passes_on_pit_data(self, path):
        rows = _rows(5, start="2026-07-01")
        out = PATH_PIT_GUARDS[path](rows, "2026-07-05")
        assert len(out) == 5

    @pytest.mark.parametrize("path", PATH_NAMES)
    def test_each_path_end_le_as_of(self, path):
        """PIT 断言四路径不变量: 过滤后每行 trade_date <= as_of + 路径容差"""
        from datetime import timedelta
        from pit import PATH_TOLERANCE, _parse_day
        as_of = "2026-07-05"
        tol = PATH_TOLERANCE[path]
        cutoff = (_parse_day(as_of) + timedelta(days=tol)).isoformat()
        rows = _future_rows(as_of=as_of)
        out = PATH_PIT_GUARDS[path](rows, as_of, strict=False)
        assert all(r["trade_date"] <= cutoff for r in out)

    def test_backtest_tolerance_next_open(self):
        """回测路径: 容差 1 天(允许次日开盘价作为成交价)"""
        rows = [{"trade_date": "2026-07-06", "close": 10.0}]  # as_of+1
        out = PATH_PIT_GUARDS["backtest"](rows, "2026-07-05")
        assert len(out) == 1
        rows2 = [{"trade_date": "2026-07-07", "close": 10.0}]  # as_of+2
        with pytest.raises(PitError):
            PATH_PIT_GUARDS["backtest"](rows2, "2026-07-05")

    def test_calendar_strict_no_tolerance(self):
        rows = [{"trade_date": "2026-07-06", "close": 10.0}]  # as_of+1
        with pytest.raises(PitError):
            PATH_PIT_GUARDS["calendar"](rows, "2026-07-05")


# ═══ DataPortal 集成 (PIT 进主链路) ═══

class TestDataPortalPit:
    def test_fetch_as_of_filters_future(self):
        from data_portal2 import DataPortal, SourceAdapter

        class Adapter(SourceAdapter):
            def __init__(self):
                super().__init__("fake")
            def get(self, kind, **kw):
                return _future_rows(as_of="2026-07-05")

        dp = DataPortal(adapters=[Adapter()], retry_base=0)
        rows = dp.fetch("kline", "000001.SZ", as_of="2026-07-05")
        assert all(r["trade_date"] <= "2026-07-05" for r in rows)

    def test_fetch_without_as_of_unfiltered(self):
        from data_portal2 import DataPortal, SourceAdapter

        class Adapter(SourceAdapter):
            def __init__(self):
                super().__init__("fake")
            def get(self, kind, **kw):
                return _future_rows(as_of="2026-07-05")

        dp = DataPortal(adapters=[Adapter()], retry_base=0)
        rows = dp.fetch("kline", "000001.SZ")
        assert any(r["trade_date"] > "2026-07-05" for r in rows)

    def test_pit_filter_idempotent(self):
        rows = _future_rows(as_of="2026-07-05")
        once = pit_filter(rows, "2026-07-05", strict=False)
        twice = pit_filter(once, "2026-07-05", strict=False)
        assert once == twice
