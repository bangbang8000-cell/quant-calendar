# -*- coding: utf-8 -*-
"""
V4.9.3: 日历"今天"可用性修复测试
覆盖: data_parser 前向填充(工作日到 today, 周末跳过) + 间隔上限 +
      get_holdings_by_date / get_available_dates / _resolve_holdings_date 回退
根因: 8/29、8/30 周末运行后聚合器停留在 8/28, 8/31(周一)无持仓数据且日期不可选,
      导致"无法查看 8/31 日历". 前向填充让今天/下个交易日自动继承最近收盘持仓.
"""
import os
import sys
from unittest.mock import patch

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))
sys.path.insert(0, os.path.join(os.path.dirname(__file__), ".."))


def _parser_with(holdings, dates):
    """构造一个仅注入内存数据的 DataParser(避免文件 I/O, 确定性)"""
    from data_parser import DataParser
    p = object.__new__(DataParser)
    p.holdings_data = holdings
    p.date_list = list(dates)
    p.carried_dates = []
    p.stock_info = {}
    return p


class TestCarryForward:
    def test_weekday_only_skips_weekend(self):
        """周五收盘 → 周一被填充, 周六日(非工作日)不填充"""
        p = _parser_with({}, ["2026-08-28"])
        p._carry_forward_to_today(today="2026-08-31")
        assert p.carried_dates == ["2026-08-31"], p.carried_dates

    def test_overnight_single_day(self):
        """周一收盘 → 周二被填充"""
        p = _parser_with({}, ["2026-08-31"])
        p._carry_forward_to_today(today="2026-09-01")
        assert p.carried_dates == ["2026-09-01"], p.carried_dates

    def test_gap_limit_no_fabrication(self):
        """数据陈旧超过 CARRY_FORWARD_MAX_GAP_DAYS → 不伪造日期(缺口可见)"""
        p = _parser_with({}, ["2026-08-01"])
        p._carry_forward_to_today(today="2026-08-31")  # 30 天 > 10 天
        assert p.carried_dates == []

    def test_noop_when_today_has_data(self):
        """最新数据日 >= today → 不填充"""
        p = _parser_with({}, ["2026-08-31"])
        p._carry_forward_to_today(today="2026-08-31")
        assert p.carried_dates == []

    def test_get_available_dates_includes_carried(self):
        p = _parser_with({"multifactor": {"2026-08-28": {"600519.SH"}}}, ["2026-08-28"])
        p.carried_dates = ["2026-08-31"]
        assert p.get_available_dates() == ["2026-08-28", "2026-08-31"]

    def test_resolve_holdings_date_falls_back(self):
        p = _parser_with({"multifactor": {"2026-08-28": {"600519.SH"}}}, ["2026-08-28"])
        p.carried_dates = ["2026-08-31"]
        assert p._resolve_holdings_date("multifactor", "2026-08-31") == "2026-08-28"
        # 真实日期直接命中
        assert p._resolve_holdings_date("multifactor", "2026-08-28") == "2026-08-28"
        # 不在 carried 的未来日期 → None
        assert p._resolve_holdings_date("multifactor", "2026-09-01") is None

    def test_get_holdings_by_date_carried(self):
        p = _parser_with({"multifactor": {"2026-08-28": {"600519.SH"}}}, ["2026-08-28"])
        p.carried_dates = ["2026-08-31"]
        with patch("data_parser.stock_manager.get_name", return_value="贵州茅台"):
            res = p.get_holdings_by_date("2026-08-31")
        assert "multifactor" in res
        assert res["multifactor"]["count"] == 1
        assert res["multifactor"]["stocks"][0]["code"] == "600519.SH"
