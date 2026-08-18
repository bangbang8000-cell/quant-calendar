"""
AI 事实护栏抽查测试 (FR-3.18.9 / T9)

覆盖:
- extract_numbers: 从 AI 回复抽取数值 (排除年份/代码)
- find_card_numbers: 从数据卡收集数值
- check_consistency: 引用数据卡数字 → 通过; 编造数字 → 失败 (容忍度)
- run_daily_audit: 抽查历史回复 → 通过率统计 + 失败明细; 无数据卡 → 未验证
- 报告持久化: save/list/get
"""
import json
import os

import pytest

import fact_check as fc


# ==================== extract_numbers ====================


def test_extract_numbers():
    text = "上证指数收于 3200.50 点，涨跌幅 0.35%，市盈率 12.4 倍"
    nums = fc.extract_numbers(text)
    assert 3200.5 in nums and 0.35 in nums and 12.4 in nums


def test_extract_numbers_excludes_year():
    nums = fc.extract_numbers("2026年8月18日，代码600519，价格1500元")
    assert 2026 not in nums      # 年份排除
    assert 600519 not in nums    # 6 位代码排除
    assert 1500 in nums


# ==================== find_card_numbers ====================


def test_find_card_numbers():
    card = {
        "indexes": [{"name": "上证指数", "close": 3200.5, "pct_chg": 0.35}],
        "moneyflow": {"detail": "最新主力净流入 123.45 万元"},
        "sectors": {"leader": [{"name": "银行", "pct_chg": 1.2}]},
    }
    nums = fc.find_card_numbers(card)
    assert 3200.5 in nums and 0.35 in nums and 123.45 in nums and 1.2 in nums


# ==================== check_consistency ====================


def test_consistency_pass_when_cites_card():
    card = {"indexes": [{"close": 3200.5}]}
    r = fc.check_consistency("上证收于 3200.50 点", card)
    assert r["checked"] == 1
    assert r["passed"] == 1 and r["failed"] == 0


def test_consistency_fail_on_made_up_number():
    card = {"indexes": [{"close": 3200.5}]}
    r = fc.check_consistency("上证收于 9999.0 点", card)
    assert r["checked"] == 1
    assert r["failed"] == 1
    assert any(f["number"] == 9999.0 for f in r["failures"])


def test_consistency_tolerance():
    card = {"indexes": [{"close": 3200.5}]}
    # 轻微舍入差异 → 通过
    assert fc.check_consistency("上证收于 3200.5 点", card)["passed"] == 1


# ==================== run_daily_audit ====================


def _history_reply(card, ai_text):
    return {"result": {"data_card": card, "ai_summary": ai_text}}


def test_daily_audit_pass_rate():
    history = [
        _history_reply({"indexes": [{"close": 3200.5}]}, "上证收于 3200.5 点"),
        _history_reply({"indexes": [{"close": 12.3}]}, "平安银行收于 12.3 元"),
        _history_reply({"indexes": [{"close": 3200.5}]}, "上证收于 9999.0 点"),  # 编造
    ]
    audit = fc.run_daily_audit(history)
    assert audit["sampled"] == 3
    assert audit["checked"] == 3
    assert audit["passed"] == 2 and audit["failed"] == 1
    assert audit["pass_rate"] == pytest.approx(round(2 / 3 * 100, 1))
    assert audit["failures"], "应有失败明细"


def test_daily_audit_unverified_without_card():
    history = [
        {"result": {"ai_summary": "上证收于 3200 点"}},  # 无数据卡 → 未验证
    ]
    audit = fc.run_daily_audit(history)
    assert audit["sampled"] == 1
    assert audit["checked"] == 0
    assert audit["unverified"] == 1


# ==================== 报告持久化 ====================


def test_report_persistence(tmp_path):
    fc.set_audit_dir(str(tmp_path))
    report = fc.run_daily_audit([
        _history_reply({"indexes": [{"close": 3200.5}]}, "上证收于 3200.5 点"),
    ])
    path = fc.save_audit_report(report, date="2026-08-18")
    assert os.path.exists(path)
    loaded = fc.get_audit_report("2026-08-18")
    assert loaded["passed"] == 1
    assert fc.get_latest_audit()["date"] == "2026-08-18"
