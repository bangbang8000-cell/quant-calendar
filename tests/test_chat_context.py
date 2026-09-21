# -*- coding: utf-8 -*-
"""6.1.6 (F4): 智能问股上下文增强测试 (chat_context.py)"""
from datetime import datetime

from chat_context import build_context_snippet, search_history, annotate_timestamp


def test_context_snippet_with_data():
    out = build_context_snippet(
        [{"code": "600036", "name": "招商银行"}, "000001"],
        ["600519"],
    )
    assert "持仓" in out["snippet"] and "招商银行" in out["snippet"]
    assert out["holding_count"] == 2 and out["watch_count"] == 1


def test_context_snippet_empty():
    out = build_context_snippet([], [])
    assert out["snippet"] == "用户暂无持仓与自选"


def test_context_snippet_limits():
    holdings = [{"code": "60000%d" % i, "name": "股%d" % i} for i in range(10)]
    out = build_context_snippet(holdings, [], max_items=5)
    assert out["holding_count"] == 5


def test_search_history_match_and_limit():
    messages = [
        {"role": "user", "content": "招商银行如何"},
        {"role": "assistant", "content": "招行基本面稳健"},
        {"role": "user", "content": "茅台估值"},
    ]
    out = search_history(messages, "招商", top=3)
    assert len(out) == 1 and out[0]["content"] == "招商银行如何"


def test_search_history_no_match():
    assert search_history([{"role": "user", "content": "x"}], "不存在的词") == []


def test_annotate_timestamp_appends():
    out = annotate_timestamp("结论", datetime(2026, 9, 21, 10, 30))
    assert "结论" in out and "数据截至 2026-09-21 10:30" in out


def test_annotate_empty_text():
    assert annotate_timestamp("") == ""
