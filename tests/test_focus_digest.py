# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.6 / FR-5.4.5): 重点跟踪 digest 渲染测试

覆盖: 与 PRD §3 模板逐字一致 / 5 档动作 emoji 与计数 / 6位码带后缀 /
      动作档位降序 + 组内评分降序 / 行数上限(默认20, 摘要N保持真实总数) /
      持仓感知动作 / 免责声明 / 市场状态文案 / 飞书 text+卡片双模。
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

from focus_digest import (build_digest_text, enrich_actions, sort_rows,
                          market_state_text, DISCLAIMER, DEFAULT_MAX_ROWS)
from focus_action_map import EMOJI, ACTION_ORDER


def _row(code="601985.SH", name="中国核电", score=67.0, level="推荐",
         direction="看多", session="after_close"):
    return {"trade_date": "2026-09-08", "session": session, "stock_code": code,
            "stock_name": name, "total_score": score, "level": level,
            "direction": direction, "model_provider": "mock"}


# ─── 持仓感知动作 ───────────────────────────────────────────

def test_enrich_actions_with_holdings():
    rows = [_row("601985.SH", score=66.0, level="推荐", direction="看多"),
            _row("300760.SZ", name="迈瑞医疗", score=66.0, level="推荐", direction="看多")]
    enriched = enrich_actions(rows, holdings={"601985.SH"})
    by_code = {r["stock_code"]: r for r in enriched}
    assert by_code["601985.SH"]["action"] == "持有"   # 已持仓 → 持有
    assert by_code["601985.SH"]["holding"] is True
    assert by_code["300760.SZ"]["action"] == "买入"   # 未持仓 → 买入
    assert by_code["300760.SZ"]["holding"] is False


def test_enrich_actions_no_holdings_default_watch():
    rows = [_row("000063.SZ", name="中兴通讯", score=48.0, level="中性", direction="震荡")]
    enriched = enrich_actions(rows, holdings=None)
    assert enriched[0]["action"] == "观望"


# ─── 排序 ───────────────────────────────────────────────────

def test_sort_action_desc_then_score_desc():
    rows = [
        _row("A", score=50, level="中性", direction="震荡"),
        _row("B", score=70, level="推荐", direction="看多"),
        _row("C", score=66, level="推荐", direction="看多"),
        _row("D", score=28, level="观望", direction="震荡"),
    ]
    enriched = enrich_actions(rows, holdings=None)
    s = sort_rows(enriched)
    acts = [r["action"] for r in s]
    assert acts == ["买入", "买入", "观望", "观望"]
    scores = [r["total_score"] for r in s[:2]]
    assert scores == [70.0, 66.0]   # 组内评分降序
    assert s[2]["stock_code"] == "A" and s[3]["stock_code"] == "D"


# ─── 模板逐字 ───────────────────────────────────────────────

def test_build_digest_text_template():
    rows = [_row("601985.SH", "中国核电", 67, "推荐", "看多"),
            _row("300760.SZ", "迈瑞医疗", 66, "推荐", "看多"),
            _row("000063.SZ", "中兴通讯", 48, "中性", "震荡")]
    enriched = enrich_actions(rows, holdings={"601985.SH"})
    text = build_digest_text("2026-09-08", "after_close", enriched)
    lines = text.split("\n")
    assert lines[0] == "股票智能分析报告"
    assert lines[1] == "🎯 2026-09-08 决策仪表盘"
    assert lines[3] == "💬 共分析 3 只 | 🟢买入:1 🟡持有:1 ⚪观望:1 🟠减仓:0 🔴卖出:0"
    assert lines[4] == "市场状态：A股 · 盘后"
    assert lines[6] == "📊 分析结果摘要"
    # 逐股行: emoji + 名称(代码): 动作 | 评分 N | 方向
    assert "🟡 中国核电(601985.SH): 持有 | 评分 67 | 看多" in lines
    assert "🟢 迈瑞医疗(300760.SZ): 买入 | 评分 66 | 看多" in lines
    assert "⚪ 中兴通讯(000063.SZ): 观望 | 评分 48 | 震荡" in lines
    assert lines[-1] == DISCLAIMER


def test_digest_code_suffix_uniform():
    rows = [_row("601985.SH", "中国核电", 67), _row("600105.SH", "永鼎股份", 28)]
    enriched = enrich_actions(rows, holdings=None)
    text = build_digest_text("2026-09-08", "after_close", enriched)
    assert "601985.SH" in text and "600105.SH" in text
    # 无裸 6 位码出现 (例如 "601985:" 不带后缀)
    for line in text.split("\n"):
        if "(" in line and ")" in line:
            assert "." in line.split("(")[1].split(")")[0]


def test_digest_counts_match_inline_actions():
    rows = [_row("A", score=70), _row("B", score=65), _row("C", score=28)]
    enriched = enrich_actions(rows, holdings={"C"})
    text = build_digest_text("2026-09-08", "after_close", enriched)
    summary = [l for l in text.split("\n") if l.startswith("💬")][0]
    assert summary == "💬 共分析 3 只 | 🟢买入:2 🟡持有:0 ⚪观望:0 🟠减仓:0 🔴卖出:1"


def test_digest_cap_default_20_keeps_total():
    rows = [_row("%06d.SH" % i, "股%d" % i, 40 + i, "中性", "震荡") for i in range(25)]
    enriched = enrich_actions(rows, holdings=None)
    text = build_digest_text("2026-09-08", "after_close", enriched)
    # 摘要 N = 真实总数 25, 行数截断至 20
    assert "共分析 25 只" in text
    shown = [l for l in text.split("\n") if l.startswith(tuple(EMOJI.values()))]
    assert len(shown) == DEFAULT_MAX_ROWS


def test_custom_max_rows():
    rows = [_row("A%d.SH" % i, "股%d" % i, 50) for i in range(3)]
    enriched = enrich_actions(rows, holdings=None)
    text = build_digest_text("2026-09-08", "after_close", enriched, max_rows=2)
    shown = [l for l in text.split("\n") if l.startswith(tuple(EMOJI.values()))]
    assert len(shown) == 2


# ─── 市场状态文案 ───────────────────────────────────────────

def test_market_state_text():
    assert market_state_text("2026-09-08", "pre_open") == "A股 · 盘前"
    assert market_state_text("2026-09-08", "intraday_1") == "A股 · 盘中"
    assert market_state_text("2026-09-08", "after_close") == "A股 · 盘后"
    assert market_state_text("2026-09-08", None) == "A股 · 已收盘"
