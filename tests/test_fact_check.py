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


@pytest.fixture(autouse=True)
def _isolate_audit_dir(tmp_path, monkeypatch):
    """每个测试用独立审计目录并自动恢复全局 override, 避免跨测试污染导致 get_latest_audit 读到真实报告"""
    fc.set_audit_dir(str(tmp_path / "audit"))
    yield
    monkeypatch.setattr(fc, "_AUDIT_DIR_OVERRIDE", None)


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
    assert audit["pass_rate"] == pytest.approx(round(2 / 3 * 100, 2))
    assert audit["failures"], "应有失败明细"


def test_daily_audit_unverified_without_card():
    history = [
        {"result": {"ai_summary": "上证收于 3200 点"}},  # 无数据卡 → 未验证
    ]
    audit = fc.run_daily_audit(history)
    assert audit["sampled"] == 1
    assert audit["checked"] == 0
    assert audit["unverified"] == 1


# ==================== T-6.3.4: 数据卡回退 + 用户名聚合 ====================


def test_audit_uses_market_data_snapshot_as_card():
    """T-6.3.4: 评估记录无 data_card 字段, 事实源应回退 market_data_snapshot
    (修复前只读 result.data_card → 全部 unverified, 事实护栏永远 checked=0)"""
    history = [{
        "stock_code": "600519.SH", "stock_name": "贵州茅台",
        "evaluate_time": "2026-09-19T10:30:00",
        "market_data_snapshot": {
            "has_kline": True, "has_fundamentals": True,
            "latest": {"date": "20260910", "open": 18.89, "close": 18.97,
                       "low": 18.8, "high": 19.03, "volume": 1335636,
                       "ma5": 18.97, "ma10": 19.1, "ma20": 19.13, "pct_chg": 0.32},
            "rsi": 44.33,
        },
        "result": {"analysis": "收盘价 18.97 元，RSI 44.33，涨跌幅 0.32%"},
    }]
    audit = fc.run_daily_audit(history)
    assert audit["sampled"] == 1
    assert audit["checked"] >= 3, f"应从 market_data_snapshot 检出数值: {audit}"
    assert audit["unverified"] == 0
    assert audit["failed"] == 0, f"引用快照数值应全部通过: {audit['failures']}"


def test_audit_data_card_preferred_over_snapshot():
    """result.data_card 存在时优先 (未来管线补齐 data_card 的兼容性)"""
    history = [{
        "market_data_snapshot": {"latest": {"close": 18.97}},
        "result": {"data_card": {"indexes": [{"close": 3200.5}]},
                   "analysis": "上证收于 3200.50 点"},
    }]
    audit = fc.run_daily_audit(history)
    assert audit["checked"] == 1 and audit["passed"] == 1


def test_audit_system_wide_aggregates_all_users(tmp_path, monkeypatch):
    """T-6.3.4: username=None (系统级) 聚合 data/users/*/ 下所有用户历史
    (修复前硬编码 "default" 用户名 → 真实用户数据永远读不到 → sampled=0)"""
    users_dir = tmp_path / "users"
    (users_dir / "alice").mkdir(parents=True)
    (users_dir / "bob").mkdir()
    with open(users_dir / "alice" / "ai_evaluation_history.json", "w", encoding="utf-8") as f:
        json.dump([_history_reply({"indexes": [{"close": 3200.5}]}, "上证收于 3200.5 点")], f)
    with open(users_dir / "bob" / "ai_evaluation_history.json", "w", encoding="utf-8") as f:
        json.dump([_history_reply({"indexes": [{"close": 12.3}]}, "平安银行收于 12.3 元")], f)
    monkeypatch.setattr(fc.paths, "DATA_DIR", str(tmp_path))
    audit = fc.run_daily_audit(username=None, limit=20)
    assert audit["sampled"] == 2, f"系统级抽查应聚合两用户: {audit}"
    assert audit["checked"] == 2


def test_audit_specific_username(monkeypatch):
    """T-6.3.4: 指定 username 时仅抽查该用户历史 (ai_evaluator.get_history)"""
    class _FakeEval:
        def get_history(self, username, limit=50, offset=0):
            assert username == "alice", "应传当前用户名而非 default"
            return [_history_reply({"indexes": [{"close": 3200.5}]}, "上证收于 3200.5 点")]
    import sys
    class _FakeMod:
        ai_evaluator = _FakeEval()
    monkeypatch.setitem(sys.modules, "ai_evaluator", _FakeMod())
    audit = fc.run_daily_audit(username="alice", limit=20)
    assert audit["sampled"] == 1 and audit["checked"] == 1


def test_extract_ai_text_handles_dict_analysis():
    """T-6.3.4: analysis 为 dict 时拼接字符串字段而非 repr (修复前 str(dict) 抽不到数字)"""
    rec = {"result": {"analysis": {"strengths": ["放量上涨 12.3%"],
                                   "weaknesses": [], "suggestions": ["关注 3200 支撑"]}}}
    text = fc._extract_ai_text(rec)
    assert "12.3" in text and "3200" in text
    assert "{'strengths'" not in text, "不应是 dict repr"


def test_extract_ai_text_prefers_detailed_report():
    """T-6.3.4: detailed_report 为人类可读正文, 优先于 analysis"""
    rec = {"result": {"analysis": "旧格式文本 9.9 元", "detailed_report": "收盘 12.34 元"}}
    assert fc._extract_ai_text(rec) == "收盘 12.34 元"


def test_interleave_samples_across_users():
    """T-6.3.4: 系统级抽样按用户轮转交错, 单一大用户不应占满样本"""
    groups = [
        [{"stock_code": "A%d" % i} for i in range(20)],   # 大用户
        [{"stock_code": "B0"}],                            # 小用户
        [{"stock_code": "C0"}],                            # 小用户
    ]
    out = fc._interleave(groups, 5)
    codes = [r["stock_code"] for r in out]
    assert codes[:3] == ["A0", "B0", "C0"], f"应先各取 1 条: {codes}"
    assert codes[3] == "A1", f"第二轮取大用户下一条: {codes}"


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
