"""
美林时钟历史周期时间轴 (v3.22-I4)

覆盖:
- build_timeline: transitions → 按轮分组 + 阶段序列
- 每阶段含 起止日期/时长/trigger
- 最近 4 轮限制
- 当前阶段补全(从 current_stage + start 推到今)
- 空数据降级
"""
import pytest

from merrill_history import build_timeline


# ===== 测试数据 =====

def _tr(cycle, from_stage, to_stage, date, months=6.0, trigger="触发",
        from_name="阶段A", to_name="阶段B"):
    """构造一条 transition"""
    return {
        "from_stage": from_stage, "to_stage": to_stage,
        "transition_date": date,
        "from_name": from_name, "to_name": to_name,
        "duration_days": int(months * 30), "duration_months": months,
        "cycle_label": cycle, "trigger": trigger,
        "key_indicators": {"gdp_growth": 4.5, "cpi": 2.0, "pmi": 50.0},
    }


def _sample_transitions():
    """4 轮完整样例(第1-4轮), 每轮衰退→复苏→过热→滞胀"""
    return [
        _tr("第4轮", "recession", "recovery", "2024-09-24", 20.4, "降准降息", "衰退期", "复苏期"),
        _tr("第3轮", "stagflation", "recession", "2023-01-15", 10.2, "需求不足", "滞胀期", "衰退期"),
        _tr("第3轮", "overheat", "stagflation", "2022-03-15", 7.5, "俄乌", "过热期", "滞胀期"),
        _tr("第3轮", "recovery", "overheat", "2021-07-15", 15.8, "PPI飙升", "复苏期", "过热期"),
        _tr("第3轮", "recession", "recovery", "2020-03-15", 1.6, "疫情", "衰退期", "复苏期"),
        _tr("第2轮", "recession", "recovery", "2019-06-15", 16.3, "贸易缓和", "衰退期", "复苏期"),
        _tr("第2轮", "overheat", "recession", "2018-02-15", 6.0, "去杠杆", "过热期", "衰退期"),
        _tr("第2轮", "recovery", "overheat", "2016-08-15", 44.3, "供给侧", "复苏期", "过热期"),
        _tr("第2轮", "recession", "recovery", "2013-01-15", 5.5, "稳增长", "衰退期", "复苏期"),
        _tr("第1轮", "stagflation", "recession", "2012-08-15", 12.6, "欧债", "滞胀期", "衰退期"),
        _tr("第1轮", "overheat", "stagflation", "2011-07-15", 5.6, "CPI破6", "过热期", "滞胀期"),
        _tr("第1轮", "recovery", "overheat", "2010-02-15", 12.6, "四万亿", "复苏期", "过热期"),
        _tr("第1轮", "recession", "recovery", "2009-01-15", 3.6, "金融危机", "衰退期", "复苏期"),
    ]


def test_build_timeline_structure():
    """结构: {cycles: [{label, stages: [...]}]}"""
    result = build_timeline(_sample_transitions(), "recovery", "2026-01-01")
    assert "cycles" in result
    assert len(result["cycles"]) > 0
    c0 = result["cycles"][0]
    assert "label" in c0 and "stages" in c0
    assert len(c0["stages"]) >= 1


def test_recent_4_cycles():
    """最近 4 轮(第4/3/2/1轮)"""
    result = build_timeline(_sample_transitions(), "recovery", "2026-01-01")
    labels = [c["label"] for c in result["cycles"]]
    assert labels == ["第4轮", "第3轮", "第2轮", "第1轮"]


def test_cycle_stages_chronological():
    """每轮 stages 按日期升序"""
    result = build_timeline(_sample_transitions(), "recovery", "2026-01-01")
    c3 = next(c for c in result["cycles"] if c["label"] == "第3轮")
    dates = [s["start"] for s in c3["stages"]]
    assert dates == sorted(dates)


def test_stage_fields_complete():
    """每阶段含 stage/name/start/end/duration/trigger; 第4轮从衰退起点进入复苏"""
    result = build_timeline(_sample_transitions(), "recovery", "2026-01-01")
    c4 = next(c for c in result["cycles"] if c["label"] == "第4轮")
    s = c4["stages"][0]
    for key in ("stage", "name", "start", "end", "duration_months", "trigger"):
        assert key in s, f"缺少字段 {key}"
    # 起点阶段(从衰退期开始)
    assert s["stage"] == "recession"
    assert s["to_stage"] == "recession"
    # 随后进入复苏期
    s2 = c4["stages"][1]
    assert s2["stage"] == "recovery"
    assert s2["trigger"] != ""


def test_current_stage_appended():
    """当前阶段补全(从 current_stage_start 到 now)"""
    result = build_timeline(_sample_transitions(), "overheat", "2026-01-01")
    last_cycle = result["cycles"][0]
    last_stage = last_cycle["stages"][-1]
    assert last_stage["is_current"] is True
    assert last_stage["stage"] == "overheat"


def test_empty_transitions_degrades():
    """空 transitions + 无当前阶段 → 空 cycles 非抛错"""
    result = build_timeline([], "", "")
    assert result["cycles"] == []


def test_single_cycle_less_than_4():
    """少于 4 轮时返回实际轮数"""
    data = _sample_transitions()[:1]
    result = build_timeline(data, "recovery", "2026-01-01")
    assert len(result["cycles"]) == 1
    assert result["cycles"][0]["label"] == "第4轮"
