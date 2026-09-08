# -*- coding: utf-8 -*-
"""V4.8 (R1): 时间轴小阶段独有信息 — STAGE_BRIEFS + build_timeline 注入"""
import pytest

from merrill_history import build_timeline, STAGE_BRIEFS, HISTORICAL_TRANSITIONS


def _tr(cycle, f_stage, t_stage, date, months, trigger, f_name, t_name):
    return {
        "from_stage": f_stage, "to_stage": t_stage,
        "transition_date": date, "duration_months": months,
        "cycle_label": cycle, "trigger": trigger,
        "from_name": f_name, "to_name": t_name,
    }


def _sample():
    return [
        _tr("第4轮", "recession", "recovery", "2024-09-24", 20.4, "降准降息", "衰退期", "复苏期"),
        _tr("第3轮", "stagflation", "recession", "2023-01-15", 10.2, "地产下滑", "滞胀期", "衰退期"),
        _tr("第3轮", "overheat", "stagflation", "2022-03-15", 7.5, "俄乌战争", "过热期", "滞胀期"),
        _tr("第3轮", "recovery", "overheat", "2021-07-15", 15.8, "全球大放水", "复苏期", "过热期"),
        _tr("第3轮", "recession", "recovery", "2020-03-15", 1.6, "疫情冲击", "衰退期", "复苏期"),
    ]


# ==================== STAGE_BRIEFS 数据完整性 ====================


def test_stage_briefs_cover_all_transitions():
    """每个 HISTORICAL_TRANSITIONS 到达阶段在 STAGE_BRIEFS 有 essence (或可回落)"""
    for t in HISTORICAL_TRANSITIONS:
        key = (t["cycle_label"], t["to_stage"])
        brief = STAGE_BRIEFS.get(key)
        if brief is None:
            # 允许缺失: 回落 HISTORICAL_TRANSITIONS 自带 essence
            assert t.get("essence"), f"{key} 无 essence 且无 STAGE_BRIEFS"
        else:
            assert brief.get("essence"), f"{key} STAGE_BRIEFS 缺 essence"


def test_stage_briefs_current_stage_has_essence():
    """当前阶段 (第4轮 recovery) 有 essence (V4.8 补全空白)"""
    brief = STAGE_BRIEFS.get(("第4轮", "recovery"))
    assert brief and brief.get("essence"), "当前阶段需有 essence"


def test_stage_briefs_highlight_optional_but_present_for_major():
    """主要阶段 (第3轮 recovery/第1轮 recovery 等) 有 highlight"""
    for key in [("第3轮", "recovery"), ("第1轮", "recovery"), ("第1轮", "stagflation")]:
        brief = STAGE_BRIEFS.get(key)
        assert brief and brief.get("highlight"), f"{key} 应含 highlight"


# ==================== build_timeline 注入 ====================


def test_build_timeline_injects_brief_fields():
    """build_timeline 每阶段注入 essence/highlight/key_indicators"""
    result = build_timeline(_sample(), "recovery", "2026-01-01")
    c3 = next(c for c in result["cycles"] if c["label"] == "第3轮")
    rec = next(s for s in c3["stages"] if s["stage"] == "recovery")
    # STAGE_BRIEFS 注入
    assert rec.get("essence"), "第3轮复苏应注入 essence"
    assert "key_indicators" in rec, "应含 key_indicators"
    # 触发原因保留
    assert rec.get("trigger") == "疫情冲击"


def test_build_timeline_current_stage_brief():
    """当前阶段 (第4轮 recovery) 注入 essence (来自 STAGE_BRIEFS 当前阶段条目)"""
    result = build_timeline(_sample(), "recovery", "2026-01-01")
    c4 = next(c for c in result["cycles"] if c["label"] == "第4轮")
    cur = next(s for s in c4["stages"] if s.get("is_current"))
    assert cur.get("essence"), "当前阶段应注入 essence"
    assert cur.get("stage") == "recovery"
