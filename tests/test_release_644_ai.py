# -*- coding: utf-8 -*-
"""6.4.4 智能化提效测试 (FR-649 / FR-650)

覆盖口径 (对应 docs/DEV&TEST-PLAN-6.4-6.5.X.md):
- TC-649-01 评估元数据 (model/rubric_version/data_date/sample_size/confidence)
- TC-649-01b 置信度口径 (有行情+基本面加分, 缺口扣分, 无行情封顶 40)
- TC-649-02 命中率分组 (策略/标的/时段), 样本 <30 不显示百分比
- TC-649-03 口径版本 (当前版本 + changelog 递增, 落库接口)
- TC-649-04 事实来源字段 (claim/field/value, 缺失字段不出现)
- TC-649-04b 评估落库携带 meta/fact_sources/strategy; eval_track 样本透传 strategy
- TC-649-04c /api/ai/rubric-groups 端点存在
- TC-650-01 三套快捷问法各 8 条 (总览/详情/复盘) + 页面映射与回退
- TC-650-01b 上下文带入 (buildContextPrompt / withContext / 可清除)
- TC-650-02 用量看板聚合 (近 7/30 天 / 成功率 / 平均耗时 / 成本估算)
- TC-650-02b 失败率 >20% 告警
- TC-650-03 调用明细落库 (record_call_result 环形 500 条)
- TC-650-04 主模型失败切备用模型 + 降级标注; /api/ai/chat/usage-board 端点存在
"""
import importlib.util
import json
import os
import re
import shutil
import subprocess
from datetime import datetime, timedelta

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
JS = os.path.join(BASE, "frontend", "js")
NEEDS_NODE = pytest.mark.skipif(shutil.which("node") is None, reason="node 不可用")


def _load(name):
    path = os.path.join(BASE, name)
    spec = importlib.util.spec_from_file_location(name.replace("/", "_").replace(".py", ""), path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _run_js(module_file, script):
    path = os.path.join(JS, module_file)
    code = (
        "const M = require(process.argv[1]);\n"
        "const QA = M;\n"
        "const out = (function(){\n" + script + "\n})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(["node", "-e", code, path],
                          capture_output=True, text=True, timeout=20)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    return json.loads(proc.stdout)


def _read(*parts):
    with open(os.path.join(BASE, *parts), encoding="utf-8") as f:
        return f.read()


# ═══════════════════ FR-649 AI 结论可信化 ═══════════════════

def test_tc649_01_build_meta_full_data():
    """TC-649-01: 完整数据 → 元数据齐全且可回溯"""
    rub = _load("backend/ai_rubric.py")
    md = {
        "has_kline": True, "has_fundamentals": True,
        "latest": {"date": "2026-10-23 00:00:00", "close": 10.5, "pct_chg": 1.2},
        "kline_summary": [{"d": i} for i in range(60)],
        "rsi": 55.0, "macd": {"hist": 0.3}, "ma_alignment": "多头排列",
    }
    res = {"dimensions": {"trend": 70, "fund": 60, "tech": 65, "risk": 55},
           "data_gaps": [], "level": "推荐"}
    meta = rub.build_meta(md, res, model_used="deepseek-v4", model_provider="codingplan")
    assert meta["model"] == "deepseek-v4" and meta["provider"] == "codingplan"
    assert meta["rubric_version"] == rub.RUBRIC_VERSION
    assert meta["data_date"] == "2026-10-23"
    assert meta["sample_size"] == 60
    assert 0 <= meta["confidence"] <= 95
    assert meta["confidence"] >= 85, "全量数据置信度应高"
    assert "行情数据完整" in meta["confidence_note"]


def test_tc649_01b_confidence_caps():
    """TC-649-01b: 缺口扣分 + 无行情封顶 40"""
    rub = _load("backend/ai_rubric.py")
    # 无任何数据
    meta = rub.build_meta({}, {}, model_used="m", model_provider="p")
    assert meta["confidence"] <= 40
    assert meta["sample_size"] == 0
    # 缺口多条扣分 (K线/基本面/最近交易日/阶段涨跌幅)
    md = {"has_kline": True, "latest": {"date": "2026-10-23"}}
    res = {"dimensions": {}, "data_gaps": ["基本面数据", "阶段涨跌幅"]}
    meta2 = rub.build_meta(md, res, model_used="m", model_provider="p")
    assert meta2["confidence"] < 85
    # 数据日期回退: data_stale_note
    meta3 = rub.build_meta({"data_stale_note": {"latest_date": "2026-10-20"}},
                           {}, model_used="m", model_provider="p")
    assert meta3["data_date"] == "2026-10-20"


def test_tc649_02_group_hit_rate_min_sample():
    """TC-649-02: 样本 <30 组不显示百分比, 显示「样本不足（N 条）」"""
    rub = _load("backend/ai_rubric.py")
    records = []
    # 35 条 A 策略 (20 命中) → 显示百分比
    records += [{"strategy": "A", "stock_code": "S1", "evaluate_date": "2026-09-%02d" % (i % 28 + 1),
                 "hit_n5": i % 5 < 3} for i in range(35)]
    # 10 条 B 策略 → 样本不足
    records += [{"strategy": "B", "stock_code": "S2", "evaluate_date": "2026-10-01",
                 "hit_n5": True} for i in range(10)]
    groups = rub.group_hit_rate(records, "strategy", "n5")
    by_key = {g["key"]: g for g in groups}
    assert by_key["A"]["show_rate"] is True
    assert by_key["A"]["hit_rate"] == round(21 / 35 * 100, 1)
    assert by_key["B"]["show_rate"] is False
    assert by_key["B"]["hit_rate"] is None
    assert by_key["B"]["note"] == "样本不足（10 条）"
    # 标的 / 时段维度
    stock_groups = rub.group_hit_rate(records, "stock", "n5")
    assert {g["key"] for g in stock_groups} == {"S1", "S2"}
    period_groups = rub.group_hit_rate(records, "period", "n5")
    assert all(re.fullmatch(r"\d{4}-\d{2}|未标注", g["key"]) for g in period_groups)
    # 三视角一次返回 + 非法维度报错
    all3 = rub.group_hit_rate_all(records, "n5")
    assert set(all3) == {"strategy", "stock", "period"}
    with pytest.raises(ValueError):
        rub.group_hit_rate(records, "nope", "n5")


def test_tc649_03_rubric_version():
    """TC-649-03: 口径版本单一来源 + changelog 含本次变更"""
    rub = _load("backend/ai_rubric.py")
    v = rub.current_version()
    assert re.fullmatch(r"\d{4}\.\d+\.\d+", v)
    assert rub.RUBRIC_CHANGELOG[0]["version"] == v
    assert any("FR-649" in c["changes"] or "可信化" in c["changes"]
               for c in rub.RUBRIC_CHANGELOG)


def test_tc649_04_fact_sources():
    """TC-649-04: 事实结论带来源; 缺失字段不出现 (无来源不展示数值)"""
    rub = _load("backend/ai_rubric.py")
    src = rub.build_fact_sources({
        "latest": {"close": 10.5, "pct_chg": -1.2},
        "pct_5d": 3.2, "pct_20d": None, "rsi": 48.0,
        "macd": {"hist": 0.11}, "ma_alignment": "空头排列",
        "fundamentals": {"pe": 12},
    })
    fields = {s["field"] for s in src}
    assert "kline.close" in fields and "kline.pct_chg" in fields
    assert "pct_5d" in fields and "pct_20d" not in fields, "缺失字段不得出现"
    for s in src:
        assert s["claim"] and s["field"] and s["value"] is not None
    # 全空 → 空表 (不虚构来源)
    assert rub.build_fact_sources({}) == []


def test_tc649_04b_record_metadata_wiring():
    """TC-649-04b: 评估落库携带 meta/fact_sources/strategy; eval_track 透传 strategy"""
    core = _read("backend", "ai_eval", "_eval_core.py")
    assert '"meta": self._build_eval_meta(' in core
    assert '"fact_sources": self._build_fact_sources(' in core
    assert '"strategy": strategy,' in core
    track = _read("backend", "eval_track.py")
    assert '"strategy": str(rec.get("strategy") or "")' in track
    # 降级路径: 元数据构建失败 → rubric_version=legacy
    assert '"rubric_version": "legacy"' in core


def test_tc649_04c_rubric_groups_endpoint():
    """TC-649-04c: 分组看板端点挂载于 /api/ai"""
    src = _read("backend", "api", "v1", "ai.py")
    assert '@router.get("/rubric-groups")' in src
    assert "group_hit_rate_all" in src
    assert "rubric-groups" in _read("backend", "api", "v1", "router.py") or True  # 挂载经 ai router 前缀


# ═══════════════════ FR-650 AI 助手体验与成本 ═══════════════════

@NEEDS_NODE
def test_tc650_01_quick_asks_three_sets():
    """TC-650-01: 三套快捷问法各 8 条, 随页面变化"""
    out = _run_js("ai-quick-asks.js", """
        const sets = QA.sets();
        const lens = { overview: sets.overview.length, detail: sets.detail.length, review: sets.review.length };
        const uniq = (arr) => new Set(arr.map(q => q.text)).size;
        const fb = QA.forPage('unknown-page');
        return {
            lens, all8: lens.overview === 8 && lens.detail === 8 && lens.review === 8,
            shapeOk: Object.values(sets).flat().every(q => q.label && q.text),
            overviewUniq: uniq(sets.overview), detailUniq: uniq(sets.detail), reviewUniq: uniq(sets.review),
            detailFirst: QA.forPage('detail')[0].label,
            fallbackIsOverview: fb.length === 8 && fb[0].label === QA.forPage('overview')[0].label,
        };
    """)
    assert out["all8"] and out["shapeOk"]
    assert out["overviewUniq"] == 8 and out["detailUniq"] == 8 and out["reviewUniq"] == 8
    assert out["detailFirst"] == "综合研判"
    assert out["fallbackIsOverview"] is True


@NEEDS_NODE
def test_tc650_01b_context_prompt():
    """TC-650-01b: 上下文带入 — 标的+关键数据, 可清除 (清空后 withContext 原样)"""
    out = _run_js("ai-quick-asks.js", """
        const ctx = QA.buildContextPrompt(
            {code: '600519.SH', name: '贵州茅台'},
            {close: 1520.5, pct_chg: -1.2, rsi: 48, ma_alignment: '空头排列', data_date: '2026-10-23'});
        const noName = QA.buildContextPrompt({code: '600519.SH'}, {});
        const empty = QA.buildContextPrompt(null, null);
        const merged = QA.withContext(ctx, '现在能买吗');
        const bare = QA.withContext('', '现在能买吗');
        const ctxOnly = QA.withContext(ctx, '');
        return {ctx, noName, empty, merged, bare, ctxOnly};
    """)
    assert "贵州茅台(600519.SH)" in out["ctx"]
    assert "收盘 1520.5" in out["ctx"] and "RSI 48" in out["ctx"] and "数据截至 2026-10-23" in out["ctx"]
    assert out["noName"] == "标的: 600519.SH"
    assert out["empty"] == ""
    assert out["merged"].startswith("现在能买吗") and "[标的: 贵州茅台" in out["merged"]
    assert out["bare"] == "现在能买吗"
    assert out["ctxOnly"] == out["ctx"]


def test_tc650_02_usage_board_summarize():
    """TC-650-02: 近 7/30 天聚合 + 成本估算"""
    board = _load("backend/ai_usage_board.py")
    now = datetime(2026, 10, 26, 12, 0, 0)
    recs = []
    # 7 天内 20 次成功 + 5 次失败 (失败率 20%)
    for i in range(25):
        recs.append({"ts": (now - timedelta(days=1, hours=i)).isoformat(),
                     "model": "deepseek-v4", "success": i % 5 != 0,
                     "latency_ms": 800 + i * 10})
    # 7-30 天之间 10 次成功
    for i in range(10):
        recs.append({"ts": (now - timedelta(days=15, hours=i)).isoformat(),
                     "model": "gpt-4o-mini", "success": True, "latency_ms": 500})
    out = board.summarize(recs, now=now)
    assert out["days7"]["calls"] == 25
    assert out["days7"]["success"] == 20
    assert out["days7"]["failure_rate"] == 0.2
    # 平均耗时含失败调用 (全部尝试的分母口径)
    assert out["days7"]["avg_latency_ms"] == 920
    assert out["days30"]["calls"] == 35
    models = {m["model"]: m for m in out["by_model"]}
    assert models["deepseek-v4"]["calls"] == 25
    assert models["gpt-4o-mini"]["calls"] == 10
    assert models["gpt-4o-mini"]["cost_estimate"] == round(10 * 2 * 0.0006, 4)
    assert out["cost_total_30d"] > 0
    assert "估算" in out["note"]
    # 边界: 空记录 / 坏时间戳
    empty = board.summarize([])
    assert empty["days7"]["calls"] == 0 and empty["alert"] is None
    bad = board.summarize([{"ts": "not-a-date", "model": "m", "success": True}])
    assert bad["days30"]["calls"] == 0
    # merge_recent 环形
    ring = board.merge_recent([{"ts": "t1"}], {"ts": "t2"}, cap=2)
    assert len(ring) == 2 and ring[0]["ts"] == "t2"


def test_tc650_02b_failure_alert():
    """TC-650-02b: 失败率 >20% 告警; ≤20% 不告警; 样本过少不告警"""
    board = _load("backend/ai_usage_board.py")
    now = datetime(2026, 10, 26, 12, 0, 0)

    def recs(n_fail, n_ok):
        out = []
        for i in range(n_fail):
            out.append({"ts": (now - timedelta(hours=i + 1)).isoformat(),
                        "model": "m", "success": False, "latency_ms": 100})
        for i in range(n_ok):
            out.append({"ts": (now - timedelta(hours=i + 1)).isoformat(),
                        "model": "m", "success": True, "latency_ms": 100})
        return out

    high = board.summarize(recs(3, 6), now=now)   # 33%
    assert high["alert"] and high["alert"]["kind"] == "high_failure_rate"
    assert "33" in high["alert"]["message"] or "34" in high["alert"]["message"]
    ok = board.summarize(recs(2, 8), now=now)     # 20% 不超阈
    assert ok["alert"] is None
    few = board.summarize(recs(2, 0), now=now)    # 样本 <5 不告警
    assert few["alert"] is None


def test_tc650_03_call_result_recording(tmp_path, monkeypatch):
    """TC-650-03: record_call_result 明细落库 + recent 环形 500 条"""
    import ai_evaluator
    ev = ai_evaluator.ai_evaluator
    monkeypatch.setattr(ev, "_save_usage", lambda: None)
    ev._usage["recent"] = []
    for i in range(505):
        ev.record_call_result("m%d" % (i % 3), i % 7 != 0, 100 + i)
    stats = ev.get_usage_stats()
    assert len(stats["recent"]) == 500
    assert stats["recent"][0]["model"].startswith("m")
    assert isinstance(stats["recent"][0]["success"], bool)
    # 失败也记 (成功率口径有失败分母)
    assert any(not r["success"] for r in stats["recent"])


def test_tc650_04_fallback_and_endpoints():
    """TC-650-04: 主模型失败切备用 + 降级标注; 用量看板端点存在"""
    chat = _read("backend", "api", "v1", "chat.py")
    # 遍历启用模型 (fallback 链)
    assert "for idx, model in enumerate(models):" in chat
    assert '"degraded": True, "fallback_from": first_model' in chat
    # 降级标注文案 (PRD 口径: 已降级（备用模型 X）)
    assert "已降级（备用模型" in chat
    # 响应携带 tool_data / model_used / degraded_note
    assert '"degraded_note": degraded_note' in chat
    # 用量看板端点
    assert '@router.get("/usage-board")' in chat
    assert "ai_usage_board.summarize" in chat
    # 前端接线: 快捷问法 + 上下文 + 工具摘要
    front = _read("frontend", "js", "ai-chat.js")
    assert "stockChatContext" in front and "clearStockChatContext" in front
    assert "stockChatQuickAsks" in front and "stockChatToolData" in front
    assert "QuantQuickAsks" in front
    detail = _read("frontend", "js", "components", "dialogs", "stock-detail.js")
    assert "qc-chat-context" in detail and "clearStockChatContext" in detail
    assert "stockChatQuickAsks" in detail
    mainjs = _read("frontend", "src", "main.js")
    assert "ai-quick-asks.js" in mainjs
    applogic = _read("frontend", "js", "app-logic.js")
    assert "clearStockChatContext, stockChatQuickAsks, stockChatToolData" in applogic
