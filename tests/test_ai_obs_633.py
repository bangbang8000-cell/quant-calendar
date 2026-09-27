# -*- coding: utf-8 -*-
"""6.3.3 (T-6.3.3.2): AI 观测门禁 — 调用次数/耗时/失败率进入用量统计

- metrics.record_ai_call 计数 + ai_usage 聚合 (calls/failures/failure_rate/avg_ms/p95_ms)
- quant_ai_* Prometheus 指标块
- AI 调用路径同步写入用量统计 (ai_eval._eval_llm._emit_ai_event)
- /api/system/metrics 输出 ai_usage + 失败率偏高 ai_alert 提示
"""
import io
import os
import re

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read(rel):
    with io.open(os.path.join(BASE, rel), encoding="utf-8") as f:
        return f.read()


def test_ai_usage_aggregation():
    """record_ai_call 计数 + ai_usage 聚合正确"""
    import metrics
    metrics.reset()
    metrics.record_ai_call(True, 100.0)
    metrics.record_ai_call(True, 200.0)
    metrics.record_ai_call(False, 300.0)
    u = metrics.ai_usage()
    assert u["calls"] == 3
    assert u["failures"] == 1
    assert u["failure_rate"] == pytest.approx(33.33, abs=0.01)
    assert u["avg_ms"] == pytest.approx(200.0)
    # 与 slo_report 同源 p95 语义: int(0.95*n)-1 位 → 3 样本取中位
    assert u["p95_ms"] == pytest.approx(200.0)
    # 无调用时全 0
    metrics.reset()
    assert metrics.ai_usage() == {"calls": 0, "failures": 0, "failure_rate": 0.0,
                                  "avg_ms": 0.0, "p95_ms": 0.0}


def test_ai_metrics_rendered():
    """quant_ai_* Prometheus 指标块随 render_metrics 输出"""
    import metrics
    metrics.reset()
    metrics.record_ai_call(True, 100.0)
    metrics.record_ai_call(False, 300.0)
    out = metrics.render_metrics()
    assert "quant_ai_calls_total 2" in out
    assert "quant_ai_failures_total 1" in out
    assert re.search(r"quant_ai_failure_rate 50(?:\.0)?", out), out
    # 2 样本 p95 语义 (int(0.95*n)-1) → 取首样本 100ms
    assert re.search(r"quant_ai_latency_p95_seconds 0\.1", out), out


def test_ai_call_path_writes_usage():
    """AI 调用路径 (LLM) 同步写入用量统计"""
    llm = _read("backend/ai_eval/_eval_llm.py")
    assert "metrics.record_ai_call" in llm, "LLM 调用路径未写入 AI 用量统计"
    assert "_emit_ai_event" in llm, "LLM 调用事件缺 _emit_ai_event"


def test_metrics_endpoint_exposes_ai_usage():
    """系统指标接口输出 ai_usage 且失败率偏高有提示"""
    src = _read("backend/api/v1/system.py")
    assert 'result["ai_usage"]' in src, "metrics 接口未输出 ai_usage"
    assert 'result["ai_alert"]' in src, "metrics 接口未输出 ai_alert 提示"
    assert "failure_rate" in src, "ai_usage 缺失败率字段"


def test_ai_alert_threshold():
    """失败率偏高 (量级>=10 且 >20%) → ai_alert=True"""
    import metrics
    from api.v1.system import get_metrics
    metrics.reset()
    for _ in range(8):
        metrics.record_ai_call(True, 100.0)
    for _ in range(3):
        metrics.record_ai_call(False, 300.0)
    m = get_metrics()
    assert m["ai_usage"]["calls"] == 11
    assert m["ai_alert"] is True, "失败率 27% 且 11 次调用应触发提示"
    metrics.reset()
    m2 = get_metrics()
    assert m2["ai_alert"] is False, "无调用不应触发提示"