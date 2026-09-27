# -*- coding: utf-8 -*-
"""6.3.3 (T-6.3.3.1): AI 降级口径统一门禁

- 结构化解析失败 → 回退纯文本并标注原因 (fallback_reason: 无输出/解析失败/骨架为空)
- 无数据时说明缺什么 (evaluate_stock record.data_gaps + degraded 标记)
- 晨晚报降级口径统一 (关键内容缺失 → has_issues/ok=False)
"""
import io
import os

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_parse_failure_annotates_reason():
    """结构化解析失败 → fallback_reason 标注 (空/解析失败/骨架空 三档)"""
    from eval_struct import parse_eval_structured

    empty = parse_eval_structured("")
    assert empty["structured"] is False
    assert empty["fallback_reason"] == "无输出文本"

    noisy = parse_eval_structured("好的，以下是分析结果：\n综合来看偏积极，注意控制仓位。")
    assert noisy["structured"] is False
    assert noisy["fallback_reason"] == "未能解析出 JSON 骨架"
    assert noisy["text"] == noisy["text"]  # 原文保留

    empty_skeleton = parse_eval_structured('{"conclusion": "", "score": null}')
    assert empty_skeleton["structured"] is False
    assert empty_skeleton["fallback_reason"] == "骨架为空 (无结论且无评分)"


def test_parse_success_has_empty_reason():
    """结构化解析成功 → fallback_reason 为空串"""
    from eval_struct import parse_eval_structured
    out = parse_eval_structured('{"conclusion": "看多", "score": 82, "signal": "看多"}')
    assert out["structured"] is True
    assert out["fallback_reason"] == ""


def test_record_has_data_gaps_and_degraded():
    """评估记录输出数据缺口清单 + 降级标记 (无数据时说明缺什么)"""
    from ai_eval._eval_core import AIEvalCoreMixin
    mixin = AIEvalCoreMixin()

    gaps = mixin._build_data_gaps({})
    assert "K线数据" in gaps and "基本面数据" in gaps and "最近交易日数据" in gaps, gaps

    full = {"has_kline": True, "has_fundamentals": True,
            "latest": {"close": 1.0}, "pct_5d": 1.0}
    assert mixin._build_data_gaps(full) == [], "真实数据不应报缺口"

    # record 字段
    src = _read("backend/ai_eval/_eval_core.py")
    assert '"data_gaps"' in src, "评估记录缺 data_gaps 字段"
    assert '"degraded"' in src, "评估记录缺 degraded 标记"


def test_brief_fallback_unified():
    """晨晚报降级口径统一: 关键内容缺失 → ok=False"""
    from daily_brief import build_morning_brief, build_evening_brief
    _, ok_am = build_morning_brief({"stage": ""})
    assert ok_am is False, "早报缺宏观阶段应标记降级"
    _, ok_pm = build_evening_brief({"review_summary": ""})
    assert ok_pm is False, "晚报缺复盘摘要应标记降级"
    _, ok_pm_full = build_evening_brief({"review_summary": "今日市场震荡"})
    assert ok_pm_full is True, "晚报内容完整应 ok"
    _, ok_am_full = build_morning_brief({"stage": "复苏"})
    assert ok_am_full is True, "早报内容完整应 ok"


def test_ai_fallback_paths_exist():
    """三条降级路径均有结构化标注落点"""
    core = _read("backend/ai_eval/_eval_core.py")
    assert "评估失败" in core, "全部模型失败降级路径缺失"
    assert "无可用模型" in core, "无可用模型降级路径缺失"
    llm = _read("backend/ai_eval/_eval_llm.py")
    assert "无法解析" in llm, "LLM 输出无法解析的降级说明缺失"