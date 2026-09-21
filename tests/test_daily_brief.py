# -*- coding: utf-8 -*-
"""6.1.6 (F3): 智能晨晚报内容生成测试 (daily_brief.py)"""
from daily_brief import build_morning_brief, build_evening_brief


def test_morning_brief_with_data():
    text, ok = build_morning_brief({
        "stage": "复苏期",
        "stage_hint": "增长回升",
        "holdings": [{"code": "600036", "name": "招商银行"}, "000001"],
        "watch_count": 12,
        "notes": ["关注放量", "验证连板"],
    })
    assert ok is True
    assert "盘前早报" in text and "复苏期" in text and "招商银行" in text
    assert "自选关注: 12 只" in text and "待验证条件" in text


def test_morning_brief_degrades_without_stage():
    text, ok = build_morning_brief({})
    assert ok is False
    assert "数据暂不可用" in text


def test_morning_brief_no_holdings():
    text, _ = build_morning_brief({"stage": "过热期"})
    assert "当前无持仓" in text


def test_evening_brief_with_summary():
    text, ok = build_evening_brief({
        "review_summary": "市场放量上行，情绪回暖",
        "verify_items": ["明日量能是否延续", "龙头是否晋级"],
        "holdings_changed": 2,
    })
    assert ok is True
    assert "盘后晚报" in text and "复盘摘要" in text and "明日验证条件" in text
    assert "持仓变动: 今日 2 只" in text


def test_evening_brief_degrades_without_summary():
    text, _ = build_evening_brief({})
    assert "复盘数据暂不可用" in text
