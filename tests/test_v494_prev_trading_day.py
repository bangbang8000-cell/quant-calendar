# -*- coding: utf-8 -*-
"""
V4.9.4: 入池/出池对比基准 — 上一交易日(非日历昨天)
覆盖: 周一 8/31 的对比基准必须是上周五 8/28(周末自动跳过),
      当日沿用持仓(data_inherited)透明提示, day 视图 status 用上一交易日对比.
根因: 用户反馈 8/31(周一) 新入池为 0, 担心程序用"昨天(周日)"对比;
      实际 all_dates 已剔除周末, prev=all_dates[idx-1] 即上一交易日.
      本版显式暴露 prev_trading_date + data_inherited + note, 让语义可验证.
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))


def _agg_with(dates, daily):
    """构造仅注入内存数据的 ViewsAggregator(确定性)"""
    from views_aggregator import ViewsAggregator
    a = object.__new__(ViewsAggregator)
    a.all_dates = list(dates)
    a.daily_data = daily
    a._cache = {}
    a._period_set_cache = {}
    return a


class TestPrevTradingDate:
    def test_monday_prev_is_friday_not_sunday(self):
        """8/31(周一) 的上一交易日 = 8/28(周五), 而非周日 8/30"""
        a = _agg_with(["2026-08-27", "2026-08-28", "2026-08-31"], {})
        assert a.get_prev_trading_date("2026-08-31") == "2026-08-28"

    def test_first_date_has_no_prev(self):
        a = _agg_with(["2026-08-31"], {})
        assert a.get_prev_trading_date("2026-08-31") is None

    def test_unknown_date_returns_none(self):
        a = _agg_with(["2026-08-28"], {})
        assert a.get_prev_trading_date("2026-09-01") is None


class TestInheritedDay:
    def test_inherited_when_identical(self):
        a = _agg_with(["2026-08-28", "2026-08-31"],
                      {"2026-08-28": [{"stock": "600519.SH"}],
                       "2026-08-31": [{"stock": "600519.SH"}]})
        assert a.is_inherited_day("2026-08-31") is True

    def test_not_inherited_when_changed(self):
        a = _agg_with(["2026-08-28", "2026-08-31"],
                      {"2026-08-28": [{"stock": "600519.SH"}],
                       "2026-08-31": [{"stock": "000001.SZ"}]})
        assert a.is_inherited_day("2026-08-31") is False


class TestDayStatusUsesPrevTradingDay:
    def test_new_entry_vs_prev_trading_day(self):
        """8/31 新出现、8/28 不在池 → 'new'(基准是 8/28, 与周日无关)"""
        a = _agg_with(["2026-08-27", "2026-08-28", "2026-08-31"],
                      {"2026-08-27": [{"stock": "000001.SZ"}],
                       "2026-08-28": [{"stock": "600519.SH"}],
                       "2026-08-31": [{"stock": "600519.SH"}, {"stock": "300308.SZ"}]})
        assert a.calculate_status("300308.SZ", "2026-08-31", "day") == "new"
        assert a.calculate_status("600519.SH", "2026-08-31", "day") == "current"

    def test_out_status_uses_prev_trading_day(self):
        a = _agg_with(["2026-08-27", "2026-08-28"],
                      {"2026-08-27": [{"stock": "000001.SZ"}],
                       "2026-08-28": [{"stock": "600519.SH"}]})
        assert a.calculate_status("000001.SZ", "2026-08-28", "day") == "out"


class TestDayViewExposesReference:
    def test_day_view_exposes_prev_and_inherited(self):
        a = _agg_with(["2026-08-28", "2026-08-31"],
                      {"2026-08-28": [{"stock": "600519.SH"}],
                       "2026-08-31": [{"stock": "600519.SH"}]})
        res = a.get_day_view("2026-08-31")
        assert res["prev_trading_date"] == "2026-08-28"
        assert res["data_inherited"] is True
        assert "2026-08-28" in res.get("note", "")

    def test_day_view_note_when_changed(self):
        a = _agg_with(["2026-08-28", "2026-08-31"],
                      {"2026-08-28": [{"stock": "600519.SH"}],
                       "2026-08-31": [{"stock": "000001.SZ"}]})
        res = a.get_day_view("2026-08-31")
        assert res["data_inherited"] is False
        assert "上一交易日" in res.get("note", "")
