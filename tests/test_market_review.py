"""Tests for market_review.py — AI 每日市场复盘 (FR-3.17.2)

数据源与 AI 全部用 fake/monkeypatch 注入, 不触真实网络。
复盘报告存储目录经 paths.DATA_DIR 重定向到 tmp_path 隔离。
"""
import json
import os
import pytest
import pandas as pd

import market_review
import paths


# ==================== 假数据源 / 假 AI / 假板块 ====================

class FakeDataSourceManager:
    """返回预置指数行; get_moneyflow 默认不可达"""

    def __init__(self, index_rows=None, moneyflow_rows=None):
        self.index_rows = index_rows or {}
        self.moneyflow_rows = moneyflow_rows

    def get_index_daily(self, ts_code, trade_date=None):
        return self.index_rows.get(ts_code)

    def get_moneyflow(self, ts_code, limit=10):
        return self.moneyflow_rows


class FakeAI:
    """可配置返回文本或抛异常的假 AI"""

    def __init__(self, result="今日市场整体震荡, 沪指小幅收涨。明日关注量能变化。", fail=False):
        self.result = result
        self.fail = fail
        self.calls = []

    def generate_review(self, prompt):
        self.calls.append(prompt)
        if self.fail:
            raise RuntimeError("mock AI 调用失败")
        return self.result


FAKE_INDEX_ROWS = {
    "000001.SH": {"close": 3456.78, "pct_chg": 1.25, "data_source": "tushare"},
    "399001.SZ": {"close": 11234.5, "pct_chg": 0.86, "data_source": "tushare"},
    "399006.SZ": {"close": 2200.1, "pct_chg": -0.32, "data_source": "tushare"},
    "000300.SH": {"close": 4123.45, "pct_chg": 0.99, "data_source": "tushare"},
}

FAKE_SECTORS = (
    [{"name": "半导体", "pct_chg": 3.5}, {"name": "白酒", "pct_chg": 2.0}, {"name": "券商", "pct_chg": 1.0}],
    [{"name": "煤炭", "pct_chg": -2.5}, {"name": "银行", "pct_chg": -1.2}],
)


@pytest.fixture
def isolated_reviews_dir(tmp_path, monkeypatch):
    """把复盘存储目录隔离到 tmp_path, 不触碰真实 data/"""
    monkeypatch.setattr(paths, "DATA_DIR", str(tmp_path))
    return os.path.join(str(tmp_path), "market_reviews")


@pytest.fixture
def fake_ds(monkeypatch):
    """注入假 data_source_manager"""
    ds = FakeDataSourceManager(FAKE_INDEX_ROWS)
    monkeypatch.setattr(market_review, "data_source_manager", ds)
    return ds


@pytest.fixture
def fake_ai(monkeypatch):
    """注入假 ai_evaluator (不触网)"""
    ai = FakeAI()
    monkeypatch.setattr(market_review, "ai_evaluator", ai)
    return ai


@pytest.fixture
def stub_sectors(monkeypatch):
    """拦截 akshare 板块获取, 默认返回假领涨/领跌"""
    monkeypatch.setattr(market_review, "_fetch_sector_performance", lambda: FAKE_SECTORS)


# ==================== generate_review ====================

class TestGenerateReview:
    def test_report_structure_complete(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """报告结构完整性: 顶层字段齐全"""
        report = market_review.generate_review("2026-08-14")
        for key in ("date", "generated_at", "market", "sectors", "moneyflow", "sentiment", "ai_summary", "data_sources"):
            assert key in report
        assert report["date"] == "2026-08-14"
        assert isinstance(report["market"]["indexes"], list)
        assert isinstance(report["sectors"]["leader"], list)
        assert isinstance(report["sectors"]["laggard"], list)
        assert "detail" in report["moneyflow"]
        assert "up_down" in report["sentiment"] and "note" in report["sentiment"]

    def test_indexes_at_least_three_from_source(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """至少 3 个指数, 且 name/code/close/pct_chg 全部来自数据源"""
        report = market_review.generate_review("2026-08-14")
        indexes = report["market"]["indexes"]
        assert len(indexes) >= 3
        by_code = {i["code"]: i for i in indexes}
        assert by_code["000001.SH"]["name"] == "上证指数"
        assert by_code["000001.SH"]["close"] == 3456.78
        assert by_code["000001.SH"]["pct_chg"] == 1.25
        assert by_code["000001.SH"]["code"] == "000001.SH"

    def test_data_card_priority_over_ai(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """数据卡优先于 AI: AI 文本含虚构数字, 不影响数据卡数值"""
        fake_ai.result = "大盘涨到 99999 点, 明日关注 88888。"
        report = market_review.generate_review("2026-08-14")
        assert report["ai_summary"] == fake_ai.result
        close = report["market"]["indexes"][0]["close"]
        assert close != 99999
        assert close == 3456.78

    def test_ai_failure_fallback(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """AI 抛异常时不报错, ai_summary 置 'AI解读暂不可用' 并含数据卡摘要"""
        fake_ai.fail = True
        report = market_review.generate_review("2026-08-14")
        assert report["ai_summary"].startswith("AI解读暂不可用")
        assert "3456.78" in report["ai_summary"]
        assert "上证指数" in report["ai_summary"]

    def test_ai_empty_result_fallback(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """AI 返回空串同样走兜底"""
        fake_ai.result = "   "
        report = market_review.generate_review("2026-08-14")
        assert report["ai_summary"].startswith("AI解读暂不可用")

    def test_sectors_leader_laggard_filled(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """板块领涨/领跌来自数据源"""
        report = market_review.generate_review("2026-08-14")
        assert report["sectors"]["leader"] == FAKE_SECTORS[0]
        assert report["sectors"]["laggard"] == FAKE_SECTORS[1]
        assert report["data_sources"]["sectors"] == "ths"

    def test_all_unavailable_degrade(self, isolated_reviews_dir, monkeypatch):
        """数据源全部不可达时优雅降级: 空列表 + unavailable, 不抛错, 且数据卡如实告知 AI"""
        ds = FakeDataSourceManager({})  # 无任何指数数据
        ai = FakeAI()
        monkeypatch.setattr(market_review, "data_source_manager", ds)
        monkeypatch.setattr(market_review, "ai_evaluator", ai)
        monkeypatch.setattr(market_review, "_fetch_sector_performance", lambda: ([], []))

        report = market_review.generate_review("2026-08-14")
        assert report["market"]["indexes"] == []
        assert report["sectors"]["leader"] == []
        assert report["sectors"]["laggard"] == []
        assert report["moneyflow"]["detail"] == "数据不可达"
        assert report["sentiment"]["up_down"] is None
        assert report["data_sources"]["indexes"] == "unavailable"
        assert report["data_sources"]["sectors"] == "unavailable"
        assert report["data_sources"]["moneyflow"] == "unavailable"
        # 数据卡把不可达信息如实传给 AI, 防止 AI 编造数字
        assert ai.calls and "unavailable" in ai.calls[0]
        assert isinstance(report["ai_summary"], str) and report["ai_summary"].strip()

    def test_persists_file(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """报告持久化到 data/market_reviews/<date>.json"""
        market_review.generate_review("2026-08-14")
        path = os.path.join(isolated_reviews_dir, "2026-08-14.json")
        assert os.path.exists(path)
        with open(path, "r", encoding="utf-8") as f:
            saved = json.load(f)
        assert saved["date"] == "2026-08-14"
        assert "generated_at" in saved

    def test_explicit_date_used(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        """传入指定日期时, 报告日期与文件名一致"""
        report = market_review.generate_review("2026-08-10")
        assert report["date"] == "2026-08-10"
        assert os.path.exists(os.path.join(isolated_reviews_dir, "2026-08-10.json"))


# ==================== get_review / list_reviews ====================

class TestReadReviews:
    def test_get_review_specific_date(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        market_review.generate_review("2026-08-14")
        got = market_review.get_review("2026-08-14")
        assert got is not None
        assert got["date"] == "2026-08-14"
        assert got["ai_summary"] == fake_ai.result

    def test_get_review_latest(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        market_review.generate_review("2026-08-14")
        market_review.generate_review("2026-08-15")
        got = market_review.get_review()
        assert got["date"] == "2026-08-15"

    def test_get_review_missing_returns_none(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        market_review.generate_review("2026-08-14")
        assert market_review.get_review("2020-01-01") is None

    def test_list_reviews_desc_order(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        for d in ("2026-08-12", "2026-08-14", "2026-08-13"):
            market_review.generate_review(d)
        metas = market_review.list_reviews()
        dates = [m["date"] for m in metas]
        assert dates == ["2026-08-14", "2026-08-13", "2026-08-12"]
        for m in metas:
            assert {"date", "generated_at", "data_sources"} <= set(m.keys())

    def test_list_reviews_limit(self, isolated_reviews_dir, fake_ds, fake_ai, stub_sectors):
        for d in ("2026-08-10", "2026-08-11", "2026-08-12", "2026-08-13", "2026-08-14"):
            market_review.generate_review(d)
        assert len(market_review.list_reviews(limit=2)) == 2
        assert len(market_review.list_reviews(limit=99)) == 5


# ==================== market_data_context / 纯函数 ====================

class TestMarketDataContext:
    def test_context_indexes_populated(self, isolated_reviews_dir, fake_ds, stub_sectors):
        card = market_review.market_data_context("2026-08-14")
        assert card["date"] == "2026-08-14"
        assert isinstance(card["indexes"], list) and len(card["indexes"]) >= 3
        assert card["data_sources"]["indexes"] == "tushare"

    def test_context_unavailable_marks(self, isolated_reviews_dir, monkeypatch):
        ds = FakeDataSourceManager({})
        monkeypatch.setattr(market_review, "data_source_manager", ds)
        monkeypatch.setattr(market_review, "_fetch_sector_performance", lambda: ([], []))
        card = market_review.market_data_context("2026-08-14")
        assert card["indexes"] == "unavailable"
        assert card["sectors"] == "unavailable"
        assert card["moneyflow"] == "数据不可达"
        assert card["sentiment"] == "unavailable"
        assert card["data_sources"]["indexes"] == "unavailable"
        assert card["data_sources"]["sectors"] == "unavailable"

    def test_context_moneyflow_available(self, isolated_reviews_dir, monkeypatch):
        ds = FakeDataSourceManager(FAKE_INDEX_ROWS, moneyflow_rows=[{"trade_date": "20260814", "net_mf_amount": 1234.5}])
        monkeypatch.setattr(market_review, "data_source_manager", ds)
        monkeypatch.setattr(market_review, "_fetch_sector_performance", lambda: FAKE_SECTORS)
        card = market_review.market_data_context("2026-08-14")
        assert "1234.50" in card["moneyflow"]
        assert card["data_sources"]["moneyflow"] == "tushare"

    def test_parse_sector_rows_pure(self):
        """纯函数: 领涨/领跌按涨跌幅正确排序"""
        df = pd.DataFrame([
            {"板块名称": "半导体", "涨跌幅": 3.5},
            {"板块名称": "银行", "涨跌幅": -1.2},
            {"板块名称": "白酒", "涨跌幅": 2.0},
            {"板块名称": "煤炭", "涨跌幅": -2.5},
            {"板块名称": "券商", "涨跌幅": 1.0},
        ])
        leader, laggard = market_review._parse_sector_rows(df)
        assert leader == [
            {"name": "半导体", "pct_chg": 3.5},
            {"name": "白酒", "pct_chg": 2.0},
            {"name": "券商", "pct_chg": 1.0},
        ]
        assert laggard == [
            {"name": "煤炭", "pct_chg": -2.5},
            {"name": "银行", "pct_chg": -1.2},
        ]

    def test_parse_sector_rows_empty(self):
        assert market_review._parse_sector_rows(None) == ([], [])
        assert market_review._parse_sector_rows(pd.DataFrame()) == ([], [])
