"""V5.1 T-5.1.5: 幸存者偏差治理测试 (TEST-PLAN 2.1 test_survivorship.py)

退市/改名股票必须按 PIT 纳入历史池 (as_of 时点可交易即纳入), 杜绝幸存者偏差。
"""
import pytest

from survivorship import (SurvivorshipError, load_registry, is_delisted,
                          delist_date, is_tradable_on, resolve_name,
                          universe_as_of, check_survivorship)


# 内置种子 (backend/survivorship_registry.json) 已知案例
DELISTED = "300104.SZ"   # 乐视网, 2020-07-20 退市
RENAMED = "000001.SZ"    # 深发展A → 平安银行 (2012-07)
ACTIVE = "600519.SH"     # 贵州茅台 (无退市/改名)


class TestRegistry:
    def test_load_has_seed(self):
        reg = load_registry()
        assert reg["version"] >= 1
        stocks = reg["stocks"]
        assert DELISTED in stocks and RENAMED in stocks

    def test_is_delisted(self):
        assert is_delisted(DELISTED)
        assert not is_delisted(ACTIVE)

    def test_delist_date(self):
        assert delist_date(DELISTED) == "2020-07-20"
        assert delist_date(ACTIVE) is None

    def test_unknown_code_not_delisted(self):
        assert not is_delisted("999999.XS")


class TestTradableOn:
    def test_delisted_before_delist_date(self):
        assert is_tradable_on(DELISTED, "2020-01-15") is True

    def test_delisted_after_delist_date(self):
        assert is_tradable_on(DELISTED, "2020-08-01") is False

    def test_active_always_tradable(self):
        assert is_tradable_on(ACTIVE, "2015-01-01") is True

    def test_unknown_tradable_default(self):
        assert is_tradable_on("999999.XS", "2020-01-01") is True


class TestUniverse:
    def test_universe_adds_delisted_tradable_on_asof(self):
        pool = [ACTIVE]
        uni = universe_as_of(pool, "2020-01-15")
        assert DELISTED in uni and ACTIVE in uni

    def test_universe_excludes_delisted_after_asof(self):
        pool = [ACTIVE]
        uni = universe_as_of(pool, "2021-01-15")
        assert DELISTED not in uni

    def test_universe_dedup(self):
        uni = universe_as_of([ACTIVE, ACTIVE], "2020-01-15")
        assert uni.count(ACTIVE) == 1


class TestResolveName:
    def test_renamed_historical_name(self):
        """改名股: as_of 之前返回历史名, 之后返回现名"""
        assert resolve_name(RENAMED, "2011-06-01") == "深发展A"
        assert resolve_name(RENAMED, "2013-06-01") == "平安银行"

    def test_unknown_name_none(self):
        assert resolve_name("999999.XS", "2020-01-01") is None


class TestCheckSurvivorship:
    def test_flag_already_delisted_in_historical_pool(self):
        """历史池含已退市标的 → 命中幸存者偏差诊断"""
        issues = check_survivorship([DELISTED, ACTIVE], "2021-01-15")
        assert any(i["code"] == DELISTED for i in issues)

    def test_clean_pool_no_issues(self):
        issues = check_survivorship([ACTIVE, DELISTED], "2020-01-15")
        assert issues == []

    def test_not_yet_listed_flagged(self):
        """as_of 早于上市日 → 尚未上市标的标记"""
        issues = check_survivorship(["300104.SZ"], "2000-01-01")
        assert any(i["code"] == "300104.SZ" for i in issues)


class TestPipelineIntegration:
    def test_resolve_pool_asof_includes_delisted(self):
        """data_pipeline.resolve_stock_pool(as_of=...) 纳入当时可交易的退市股"""
        from data_pipeline import resolve_stock_pool
        pool = ["600519.SH"]
        uni = resolve_stock_pool(pool, as_of="2020-01-15")
        assert "300104.SZ" in uni  # 乐视网 2020-01 未退市
        uni2 = resolve_stock_pool(pool, as_of="2021-01-15")
        assert "300104.SZ" not in uni2  # 已退市

    def test_resolve_pool_no_asof_unchanged(self):
        from data_pipeline import resolve_stock_pool
        pool = ["600519.SH"]
        assert resolve_stock_pool(pool) == ["600519.SH"]
