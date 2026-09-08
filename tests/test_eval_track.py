# -*- coding: utf-8 -*-
"""Tests for eval_track.py — AI 评估胜率追踪（决策复盘闭环）FR-3.17.6"""
import json
import os
from datetime import date, timedelta

import pytest

from eval_track import (
    compute_hit,
    compute_stats,
    get_track_summary,
    group_samples_by_date,
    parse_level_direction,
    track_evaluations,
    DISCLAIMER,
    TRACK_WINDOWS,
)


@pytest.fixture
def isolated_data_dir(tmp_path):
    """隔离 DATA_DIR 到独立临时目录，用完恢复（避免污染会话级数据）"""
    import paths
    old = paths.DATA_DIR
    paths.DATA_DIR = str(tmp_path)
    yield
    paths.DATA_DIR = old


# ─── 工具 ───────────────────────────────────────────────────────

def _mk_kline(base: date, closes):
    """构造 data_source_manager.get_kline_data 返回结构（fake，不触网）。
    row = [trade_date, open, close, low, high, vol]，close 在 index 2。
    """
    dates = [(base + timedelta(days=i)).strftime("%Y-%m-%d") for i in range(len(closes))]
    return {
        "data": [[d, c, c, c, c, 1000] for d, c in zip(dates, closes)],
        "data_source": "fake",
    }


def _write_history(username, records):
    """写入指定用户的评估历史文件（用户名隔离）"""
    import paths
    path = os.path.join(paths.DATA_DIR, "users", username, "ai_evaluation_history.json")
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(records, f, ensure_ascii=False)


def _rec(rid, code, eval_time, level, provider="DeepSeek"):
    return {
        "id": rid,
        "stock_code": code,
        "stock_name": code,
        "evaluate_time": eval_time,
        "result": {"level": level, "total_score": 80, "level_color": "#67c23a", "provider": provider},
        "model_provider": provider,
    }


# 30 个交易日，评估日 2026-01-10（index 9）基线 close=10
# +5 → close=12（+20%）、+10 → close=12（+20%）、+20 → close=9（-10%）
_CLOSES_UP = [10] * 10 + [12] * 10 + [9] * 10
# 看空标的：基线 close=10，+5 → 8（-20%，命中看空）
_CLOSES_DOWN_SHORT = [10] * 10 + [8] * 12  # 共 22 天：n5/n10 可算，n20 数据不足
_CLOSES_DOWN = [10] * 10 + [8] * 20


# ─── parse_level_direction ──────────────────────────────────────

class TestParseLevelDirection:
    def test_bullish_levels(self):
        """看多系评级 → +1（含项目实际 level：强烈推荐/推荐/谨慎推荐）"""
        for level in ("强烈推荐", "推荐", "谨慎推荐", "看多", "买入", "增持", "强势", "加仓", "看涨"):
            assert parse_level_direction(level) == 1, level

    def test_bearish_levels(self):
        """看空系评级 → -1"""
        for level in ("看空", "卖出", "减持", "回避", "弱势", "减仓", "看跌"):
            assert parse_level_direction(level) == -1, level

    def test_neutral_levels(self):
        """中性/观望/空值/失败态 → 0"""
        for level in ("中性", "观望", "", None, "评估失败", "无可用模型"):
            assert parse_level_direction(level) == 0, level

    def test_keyword_substring_not_misjudged(self):
        """「不推荐」含「推荐」但应判为 0（看空系优先校验）"""
        assert parse_level_direction("不推荐") == 0
        assert parse_level_direction("中性观望") == 0


# ─── compute_hit ────────────────────────────────────────────────

class TestComputeHit:
    def test_bullish_hit(self):
        """看多方向 + 实际上涨 → 命中"""
        assert compute_hit(3.5, 1) is True
        assert compute_hit(0.01, 1) is True

    def test_bearish_hit(self):
        """看空方向 + 实际下跌 → 命中"""
        assert compute_hit(-4.2, -1) is True

    def test_wrong_direction(self):
        """方向与实际涨跌相反 → 未命中"""
        assert compute_hit(-2.0, 1) is False
        assert compute_hit(2.0, -1) is False

    def test_neutral_direction_not_counted(self):
        """direction=0 → None，不计入命中分母"""
        assert compute_hit(5.0, 0) is None
        assert compute_hit(-5.0, None) is None

    def test_flat_pct_not_counted(self):
        """pct≈0 → None，视为横盘中性"""
        assert compute_hit(0.0, 1) is None
        assert compute_hit(1e-10, -1) is None

    def test_invalid_pct_not_counted(self):
        """pct 缺失/非法 → None"""
        assert compute_hit(None, 1) is None
        assert compute_hit("abc", -1) is None


# ─── compute_stats ──────────────────────────────────────────────

class TestComputeStats:
    def _records(self):
        return [
            {"direction": 1, "provider": "M1", "level": "推荐", "hit_n5": True, "hit_n10": True, "hit_n20": False},
            {"direction": 1, "provider": "M1", "level": "推荐", "hit_n5": False, "hit_n10": True, "hit_n20": True},
            {"direction": -1, "provider": "M2", "level": "看空", "hit_n5": True, "hit_n10": None, "hit_n20": None},
            {"direction": 0, "provider": "M2", "level": "中性", "hit_n5": None, "hit_n10": None, "hit_n20": None},
        ]

    def test_overall_agg(self):
        """总体聚合：None（中性/不可达）不计入分母"""
        stats = compute_stats(self._records())["overall"]
        assert stats["n5"] == {"hit": 2, "total": 3, "rate": 66.67}
        assert stats["n10"] == {"hit": 2, "total": 2, "rate": 100.0}
        assert stats["n20"] == {"hit": 1, "total": 2, "rate": 50.0}

    def test_by_model_agg(self):
        """分模型聚合"""
        by_model = compute_stats(self._records())["by_model"]
        assert set(by_model) == {"M1", "M2"}
        assert by_model["M1"]["n5"] == {"hit": 1, "total": 2, "rate": 50.0}
        assert by_model["M2"]["n5"] == {"hit": 1, "total": 1, "rate": 100.0}

    def test_by_level_agg(self):
        """分评级聚合"""
        by_level = compute_stats(self._records())["by_level"]
        assert set(by_level) == {"推荐", "看空", "中性"}
        assert by_level["推荐"]["n5"] == {"hit": 1, "total": 2, "rate": 50.0}
        assert by_level["中性"]["n5"] == {"hit": 0, "total": 0, "rate": None}

    def test_empty_records(self):
        """空样本 → 各窗口 total 0 / rate None"""
        stats = compute_stats([])
        for w in TRACK_WINDOWS:
            assert stats["overall"][w] == {"hit": 0, "total": 0, "rate": None}
        assert stats["by_model"] == {}
        assert stats["by_level"] == {}


# ─── track_evaluations（fake 注入，不触网） ─────────────────────

class TestTrackEvaluations:
    def test_samples_hit_flow(self, isolated_data_dir):
        """评估日后 N 日实际涨跌 → hit_n5/n10/n20 正确"""
        _write_history("alice", [
            _rec("r1", "000001.SZ", "2026-01-10T10:00:00", "推荐"),   # +1
            _rec("r2", "000002.SZ", "2026-01-10T10:00:00", "看空"),   # -1
        ])
        klines = {
            "000001.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_UP),
            "000002.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_DOWN),
        }
        samples = track_evaluations("alice", kline_getter=lambda code: klines.get(code))
        assert len(samples) == 2
        s1 = next(s for s in samples if s["stock_code"] == "000001.SZ")
        assert s1["available"] is True
        assert s1["direction"] == 1
        assert s1["pct_n5"] == pytest.approx(20.0)
        assert s1["hit_n5"] is True
        assert s1["hit_n10"] is True
        assert s1["hit_n20"] is False
        s2 = next(s for s in samples if s["stock_code"] == "000002.SZ")
        assert s2["direction"] == -1
        assert s2["pct_n5"] == pytest.approx(-20.0)
        assert s2["hit_n5"] is True

    def test_unavailable_not_pollute_stats(self, isolated_data_dir):
        """数据不可达样本 available=False，不进入命中率分母"""
        _write_history("alice", [
            _rec("r1", "000001.SZ", "2026-01-10T10:00:00", "推荐"),
            _rec("r2", "999999.SZ", "2026-01-10T10:00:00", "推荐"),
        ])
        klines = {"000001.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_UP)}
        samples = track_evaluations("alice", kline_getter=lambda code: klines.get(code))
        ok = [s for s in samples if s["available"]]
        bad = [s for s in samples if not s["available"]]
        assert len(ok) == 1 and len(bad) == 1
        assert bad[0]["stock_code"] == "999999.SZ"
        assert bad[0]["unavailable_reason"]
        assert bad[0]["hit_n5"] is None and bad[0]["hit_n10"] is None and bad[0]["hit_n20"] is None
        # 总体 n5 分母只计可达样本
        summary = get_track_summary("alice", kline_getter=lambda code: klines.get(code))
        assert summary["overall"]["n5"]["total"] == 1
        assert "未计入命中率统计" in summary["note"]

    def test_insufficient_future_days(self, isolated_data_dir):
        """未来交易日不足 N 的窗口不计入分母，样本仍 available"""
        _write_history("alice", [_rec("r1", "000001.SZ", "2026-01-10T10:00:00", "看空")])
        # 仅 22 天数据且后市下跌：看空方向 -20% 命中；n5/n10 可算，n20 数据不足
        klines = {"000001.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_DOWN_SHORT)}
        samples = track_evaluations("alice", kline_getter=lambda code: klines.get(code))
        s = samples[0]
        assert s["available"] is True
        assert s["hit_n5"] is True
        assert s["hit_n10"] is not None
        assert s["hit_n20"] is None  # 不足 20 日 → 不计入 n20 分母

    def test_failed_state_skipped(self, isolated_data_dir):
        """评估失败/无可用模型记录不参与追踪"""
        _write_history("alice", [
            _rec("r1", "000001.SZ", "2026-01-10T10:00:00", "评估失败"),
            _rec("r2", "000001.SZ", "2026-01-10T10:00:00", "无可用模型"),
        ])
        klines = {"000001.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_UP)}
        samples = track_evaluations("alice", kline_getter=lambda code: klines.get(code))
        assert samples == []

    def test_empty_history(self, isolated_data_dir):
        """无历史 → 空样本列表"""
        assert track_evaluations("bob", kline_getter=lambda code: None) == []


# ─── get_track_summary ──────────────────────────────────────────

class TestGetTrackSummary:
    def _summary(self, isolated_data_dir, window=None):
        _write_history("alice", [
            _rec("r1", "000001.SZ", "2026-01-10T10:00:00", "推荐"),
            _rec("r2", "000002.SZ", "2026-01-10T10:00:00", "看空"),
        ])
        klines = {
            "000001.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_UP),
            "000002.SZ": _mk_kline(date(2026, 1, 1), _CLOSES_DOWN),
        }
        return get_track_summary("alice", window=window, kline_getter=lambda code: klines.get(code))

    def test_summary_structure_complete(self, isolated_data_dir):
        """返回结构完整：overall/by_model/by_level/by_date/samples/note"""
        summary = self._summary(isolated_data_dir)
        assert set(summary) == {"overall", "by_model", "by_level", "by_date", "samples", "note"}
        for w in TRACK_WINDOWS:
            assert w in summary["overall"]
            assert "hit" in summary["overall"][w] and "total" in summary["overall"][w] and "rate" in summary["overall"][w]
        assert len(summary["samples"]) == 2
        assert summary["note"]

    def test_summary_note_disclaimer(self, isolated_data_dir):
        """note 含免责声明「历史命中率不代表未来收益」"""
        assert "历史命中率不代表未来收益" in self._summary(isolated_data_dir)["note"]

    def test_summary_by_model_and_level(self, isolated_data_dir):
        """分模型/分评级均含对应分组"""
        summary = self._summary(isolated_data_dir)
        assert set(summary["by_model"]) == {"DeepSeek"}
        assert set(summary["by_level"]) == {"推荐", "看空"}
        # 推荐(+1) pct5=+20% 命中；看空(-1) pct5=-20% 命中 → n5 2/2
        assert summary["overall"]["n5"]["hit"] == 2
        assert summary["overall"]["n5"]["total"] == 2

    def test_summary_window_filter(self, isolated_data_dir):
        """window=5 → 仅返回 n5 窗口"""
        summary = self._summary(isolated_data_dir, window=5)
        assert list(summary["overall"].keys()) == ["n5"]
        assert summary["overall"]["n5"]["total"] == 2
        for st in summary["by_model"].values():
            assert list(st.keys()) == ["n5"]

    def test_summary_empty_note(self, isolated_data_dir):
        """无样本 → note 提示暂无足够评估样本"""
        summary = get_track_summary("nobody", kline_getter=lambda code: None)
        assert summary["samples"] == []
        assert "暂无足够评估样本" in summary["note"]
        assert "历史命中率不代表未来收益" in summary["note"]


# ─── FR-3.18.6 决策复盘页 (by_date 分组 + 端点) ───────────────────────────


def test_group_samples_by_date():
    samples = [
        {"evaluate_date": "2026-08-10", "stock_code": "000001.SZ"},
        {"evaluate_date": "2026-08-10", "stock_code": "600519.SH"},
        {"evaluate_date": "2026-08-11", "stock_code": "000002.SZ"},
        {"evaluate_date": None, "stock_code": "300750.SZ"},
    ]
    grouped = group_samples_by_date(samples)
    assert len(grouped["2026-08-10"]) == 2
    assert len(grouped["2026-08-11"]) == 1
    assert grouped.get("未知") and len(grouped["未知"]) == 1


def test_summary_includes_by_date():
    """get_track_summary 返回 by_date 分组 (决策复盘页日历式)"""
    summary = get_track_summary("nobody", kline_getter=lambda code: None)
    assert "by_date" in summary
    assert summary["by_date"] == {}


def test_review_tracking_endpoint(monkeypatch):
    """GET /ai/track 返回决策复盘摘要 (窗口切换注入)"""
    import asyncio

    from api.v1 import ai as ai_api
    import eval_track

    fake = {
        "overall": {"n5": {"hit": 1, "total": 1, "rate": 100.0}},
        "by_model": {}, "by_level": {}, "by_date": {},
        "samples": [], "note": "历史命中率不代表未来收益",
    }
    monkeypatch.setattr(eval_track, "get_track_summary",
                        lambda username, window=None, kline_getter=None: fake)
    res = asyncio.run(ai_api.get_ai_track(window=5, user={"username": "admin"}))
    assert res["success"] is True
    assert res["data"]["overall"]["n5"]["rate"] == 100.0
    assert "历史命中率不代表未来收益" in res["data"]["note"]



# ─── V5.0.11: 命中率持久缓存 ───────────────────────────

def _cache_user_samples() -> list:
    return [{"stock_code": "000001.SZ", "evaluate_date": "2026-01-10", "direction": 1,
             "provider": "DeepSeek", "level": "推荐", "available": True,
             "hit_n5": True, "hit_n10": True, "hit_n20": True}]


def test_track_cache_hits_within_ttl(monkeypatch, isolated_data_dir):
    """V5.0.11: 无 kline_getter 时命中率结果走持久缓存, 第二次调用不再重算。
    命中率计算需同步拉全量 K 线, 无缓存时每次请求都超时; 缓存后 6h 内秒回。
    """
    import eval_track
    import paths
    calls = {"n": 0}
    def fake_track(username, kline_getter=None):
        calls["n"] += 1
        return _cache_user_samples()
    monkeypatch.setattr(eval_track, "track_evaluations", fake_track)
    s1 = eval_track.get_track_summary("cacheuser")
    s2 = eval_track.get_track_summary("cacheuser")
    assert calls["n"] == 1, "第二次调用应命中缓存, 不重复拉 K 线"
    assert s1["overall"]["n5"]["total"] == 1
    assert s2["overall"] == s1["overall"]
    assert os.path.isfile(os.path.join(paths.DATA_DIR, "eval_track_cache.json")), "缓存文件应落盘"


def test_track_cache_degrade_keeps_last_good(monkeypatch, isolated_data_dir):
    """V5.0.11: 数据源全不可达时保留最近一次成功缓存, 不覆盖为 0 样本。"""
    import eval_track
    state = {"mode": "ok"}
    def fake_track(username, kline_getter=None):
        if state["mode"] == "ok":
            return _cache_user_samples()
        return [{"stock_code": "000001.SZ", "evaluate_date": "2026-01-10", "direction": 1,
                 "provider": "DeepSeek", "level": "推荐", "available": False,
                 "hit_n5": None, "hit_n10": None, "hit_n20": None}]
    monkeypatch.setattr(eval_track, "track_evaluations", fake_track)
    s1 = eval_track.get_track_summary("degradeuser")
    assert s1["overall"]["n5"]["total"] == 1
    # 数据源故障后重算(缓存过期模拟: 直接改内存 ts 强制重算)
    eval_track._track_cache_mem["degradeuser"]["ts"] -= eval_track.TRACK_CACHE_TTL_SECONDS + 1
    state["mode"] = "bad"
    s2 = eval_track.get_track_summary("degradeuser")
    assert s2["overall"]["n5"]["total"] == 1, "数据源不可达应保留旧缓存"
