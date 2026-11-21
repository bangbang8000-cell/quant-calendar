#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.12 P2 收尾项测试 (L9 形态匹配导出+异步 / L10 五维报告 AI / L11 内容池 seed)

- L9: /pattern/match/async 走 jobs 队列; /pattern/match/export CSV (BOM + 表头);
      同步 /match 行为不变 (400 语义); 异步任务在检查点响应取消
- L10: build_ai_prompt 确定性构造; /reports/stock/{s}/ai 成功与诚实 503
- L11: seed_marketplace AST 解析 + 发布幂等 + ref_id 与内置 sid 隔离
"""
import importlib.util
import os
import sys

import numpy as np
import pandas as pd
import pytest
from fastapi import FastAPI
from fastapi.testclient import TestClient

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))
sys.path.insert(0, os.path.join(BASE, "scripts"))


def _load_script(name):
    path = os.path.join(BASE, "scripts", name)
    spec = importlib.util.spec_from_file_location(name[:-3], path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _panel(n=160, seed=5):
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2025-01-01", periods=n).strftime("%Y-%m-%d")
    close = 20 + np.linspace(0, 6, n) + rng.normal(0, 0.4, n)
    close = np.maximum(close, 1)
    return pd.DataFrame({
        "date": dates, "open": close * rng.uniform(0.99, 1.01, n),
        "high": close * rng.uniform(1.01, 1.04, n),
        "low": close * rng.uniform(0.96, 0.99, n),
        "close": close, "volume": rng.uniform(1e6, 3e6, n),
    })


# ─── L9: 形态匹配导出 + 异步 ─────────────────────────────────

def _pattern_client():
    from api.v1.pattern import router
    from auth import get_non_guest_user
    app = FastAPI()
    app.include_router(router, prefix="/api")
    app.dependency_overrides[get_non_guest_user] = lambda: {"username": "tester"}
    return TestClient(app)


def _bars_payload(n=2):
    return [{"symbol": "60000%d.SH" % i,
             "bars": _panel(seed=5 + i).to_dict("records")} for i in range(n)]


def test_match_sync_unchanged(tmp_path, monkeypatch):
    import jobs as jobs_mod
    monkeypatch.setattr(jobs_mod, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs_mod.reset_jobs()
    jobs_mod.shutdown()
    client = _pattern_client()
    r = client.post("/api/pattern/match", json={"cases": [], "candidates": []})
    assert r.status_code == 400                      # 原语义保持
    payload = {"cases": [{"case_id": "c1", "name": "样例",
                          "features": {"trend": {"ma5": 1.1}, "volume": {},
                                       "partner": {}, "zone": {}}}],
               "candidates": _bars_payload()}
    r = client.post("/api/pattern/match", json=payload)
    assert r.status_code == 200 and r.json()["count"] >= 0


def test_match_export_direct_items():
    client = _pattern_client()
    items = [{"symbol": "600000.SH", "case_name": "样例", "total_score": 88.5,
              "trend": 0.91234, "volume": 0.5, "partner": 0.4, "zone": 0.3}]
    r = client.post("/api/pattern/match/export", json={"items": items})
    assert r.status_code == 200
    assert "text/csv" in r.headers["content-type"]
    body = r.content.decode("utf-8-sig")
    assert "代码,案例,总分" in body
    assert "600000.SH" in body and "88.5" in body
    assert "0.9123" in body                           # 浮点已截断到 4 位


def test_match_export_runs_match_when_no_items():
    client = _pattern_client()
    payload = {"cases": [{"case_id": "c1", "name": "样例",
                          "features": {"trend": {"ma5": 1.1}, "volume": {},
                                       "partner": {}, "zone": {}}}],
               "candidates": _bars_payload()}
    r = client.post("/api/pattern/match/export", json=payload)
    assert r.status_code == 200
    assert "text/csv" in r.headers["content-type"]


def test_match_async_creates_job(tmp_path, monkeypatch):
    import jobs as jobs_mod
    monkeypatch.setattr(jobs_mod, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs_mod.reset_jobs()
    jobs_mod.shutdown()
    monkeypatch.setattr(jobs_mod, "_wake_worker", lambda: None, raising=False)
    client = _pattern_client()
    r = client.post("/api/pattern/match/async", json={"candidates": []})
    assert r.status_code == 400
    payload = {"cases": [{"case_id": "c1", "name": "样例",
                          "features": {"trend": {"ma5": 1.1}, "volume": {},
                                       "partner": {}, "zone": {}}}],
               "candidates": _bars_payload()}
    r = client.post("/api/pattern/match/async", json=payload)
    assert r.status_code == 200
    jid = r.json()["job_id"]
    j = jobs_mod.get_task(jid)
    assert j is not None and j["task_type"] == "pattern_match"
    jobs_mod.shutdown()


def test_match_async_task_runs_and_respects_cancel(tmp_path, monkeypatch):
    """注册的 jobs 任务能跑出结果; 取消标志置位后在检查点收尾为 cancelled"""
    import jobs as jobs_mod
    from api.v1 import pattern as pattern_api
    monkeypatch.setattr(jobs_mod, "JOBS_FILE", str(tmp_path / "jobs.json"))
    jobs_mod.reset_jobs()
    jobs_mod.shutdown()
    pattern_api._ensure_match_task_registered()
    payload = {"cases": [{"case_id": "c1", "name": "样例",
                          "features": {"trend": {"ma5": 1.1}, "volume": {},
                                       "partner": {}, "zone": {}}}],
               "candidates": _bars_payload()}
    jid = jobs_mod.create_task("pattern_match", payload)
    j = jobs_mod._run_task_sync(jid) if hasattr(jobs_mod, "_run_task_sync") else None
    if j is None:
        # 直接驱动任务函数 (不经 worker, 避免 CI 调度竞态)
        ctx = jobs_mod._TaskCtx(jid)
        result = jobs_mod._registry["pattern_match"](payload, ctx)
        assert result["count"] >= 0
        assert result["case_count"] == 1
    else:
        assert j["status"] == "success"
    # 取消场景: cancelled 标志置位后 check_paused 返回 False → JobCancelled
    jobs_mod.reset_jobs()
    jid2 = jobs_mod.create_task("pattern_match", payload)
    jobs_mod.cancel_task(jid2)
    ctx2 = jobs_mod._TaskCtx(jid2)
    with pytest.raises(jobs_mod.JobCancelled):
        jobs_mod._registry["pattern_match"](payload, ctx2)
    jobs_mod.shutdown()


# ─── L10: 五维报告 AI ────────────────────────────────────────

def _fake_report():
    from report_stock import build_report
    bars = [{"date": "2026-01-%02d" % (i + 1), "open": 10 + 0.1 * i,
             "high": 10.5 + 0.1 * i, "low": 9.8 + 0.1 * i, "close": 10.2 + 0.1 * i,
             "volume": 1e6 + i} for i in range(60)]
    return build_report("600000.SH", "浦发银行", "2026-03-01", bars,
                        flows=[1e6] * 60, basics={"pe": 5.0, "pb": 0.5})


def test_build_ai_prompt_is_deterministic_and_factual():
    from report_stock import build_ai_prompt
    report = _fake_report()
    p1, p2 = build_ai_prompt(report), build_ai_prompt(report)
    assert p1 == p2                                   # 确定性
    for label in ("技术", "资金", "基本面"):
        assert label in p1
    assert "600000.SH" in p1 and "不构成投资建议" in p1
    # 造一个缺维报告: prompt 必须诚实标注"缺失"
    empty = dict(report, dimensions={k: {"score": None, "reasons": []}
                                     for k in report["dimensions"]})
    assert "缺失" in build_ai_prompt(empty)


def _report_client():
    from api.v1 import stock_report
    from auth import get_current_active_user
    app = FastAPI()
    app.include_router(stock_report.router)
    app.dependency_overrides[get_current_active_user] = lambda: {"username": "tester"}
    return TestClient(app), stock_report


def test_report_ai_endpoint_success(monkeypatch):
    client, mod = _report_client()
    monkeypatch.setattr(mod, "collect_facts", lambda *a, **k: {
        "symbol": "600000.SH", "date": "2026-03-01", "bars": [], "basics": {}, "flows": []})
    import ai_evaluator
    calls = {}

    def _fake_review(prompt, system_prompt=None, max_tokens=0):
        calls["prompt"] = prompt
        return "总评: 样本解读。\n风险提示: 数据为空仅为演示。"

    monkeypatch.setattr(ai_evaluator.ai_evaluator, "generate_review", _fake_review)
    r = client.get("/reports/stock/600000.SH/ai")
    assert r.status_code == 200
    j = r.json()
    assert "样本解读" in j["ai_review"] and j["prompt_chars"] > 0
    assert "【技术】" in calls["prompt"]              # prompt 确实由报告数据构造


def test_report_ai_endpoint_honest_503(monkeypatch):
    """无可用模型 → 503 并明说, 不用模板话术冒充 AI 输出"""
    client, mod = _report_client()
    monkeypatch.setattr(mod, "collect_facts", lambda *a, **k: {
        "symbol": "600000.SH", "date": "2026-03-01", "bars": [], "basics": {}, "flows": []})
    import ai_evaluator
    monkeypatch.setattr(ai_evaluator.ai_evaluator, "generate_review",
                        lambda *a, **k: "")
    r = client.get("/reports/stock/600000.SH/ai")
    assert r.status_code == 503
    assert "不编造" in r.json()["detail"] or "无可用" in r.json()["detail"]


def test_report_ai_endpoint_data_missing_404(monkeypatch):
    client, mod = _report_client()
    monkeypatch.setattr(mod, "collect_facts",
                        lambda *a, **k: (_ for _ in ()).throw(LookupError("无行情数据")))
    r = client.get("/reports/stock/600000.SH/ai")
    assert r.status_code == 404


# ─── L11: 内容池 seed ────────────────────────────────────────

_KHUNTER_SAMPLE = '''
"""样例策略（SampleStrategy）

基于样例双底形态的测试策略。
"""
class SampleStrategy:
    def __init__(self, params=None):
        default_params = {
            'pattern_days': 40,
            'ratio': 1.01,
            'name': "demo",
        }
'''


def test_seed_extract_strategy(tmp_path):
    seed = _load_script("seed_marketplace.py")
    f = tmp_path / "sample_strategy.py"
    f.write_text(_KHUNTER_SAMPLE, encoding="utf-8")
    info = seed.extract_strategy(str(f))
    assert info["class_name"] == "SampleStrategy"
    assert info["params"]["pattern_days"] == 40
    assert info["params"]["ratio"] == 1.01
    item = seed.build_item(str(f))
    assert item["ref_id"] == "khunter_sample_strategy"
    assert item["payload"]["params"]["pattern_days"] == 40
    assert "样例策略" in item["title"]


def test_seed_extract_rejects_no_class(tmp_path):
    seed = _load_script("seed_marketplace.py")
    f = tmp_path / "empty.py"
    f.write_text("x = 1\n", encoding="utf-8")
    with pytest.raises(ValueError):
        seed.extract_strategy(str(f))


def test_seed_run_publishes_and_is_idempotent(tmp_path):
    seed = _load_script("seed_marketplace.py")
    src = tmp_path / "disabled"
    src.mkdir()
    (src / "sample_strategy.py").write_text(_KHUNTER_SAMPLE, encoding="utf-8")
    (src / "broken.py").write_text("def f(:\n", encoding="utf-8")  # 语法错误 → failed
    import marketplace
    report = seed.run(source_dir=str(src), apply=True)
    assert report["ok"] is False                       # broken.py 记失败
    assert len(report["seeded"]) == 1 and len(report["failed"]) == 1
    ref_id = "khunter_sample_strategy"
    items = marketplace.list_items(kind="strategy", keyword="khunter")
    assert any(x["ref_id"] == ref_id for x in items)
    payload = items[0]["payload"]
    assert payload["params"]["pattern_days"] == 40 and payload["archived"] is True
    # 重跑幂等: 同 ref_id+version 覆盖, 不产生第二条
    report2 = seed.run(source_dir=str(src), apply=True)
    assert report2["ok"] is False
    again = [x for x in marketplace.list_items(kind="strategy", keyword="khunter")
             if x["ref_id"] == ref_id]
    assert len(again) == 1


def test_seed_ref_ids_isolated_from_builtin():
    """khunter_* ref_id 不与内置策略 sid 冲突 (市场导入路径不会撞库)"""
    seed = _load_script("seed_marketplace.py")
    import strategy_governance as gov
    for it in seed.run(source_dir=seed.DEFAULT_DIR)["seeded"]:
        assert it["ref_id"] not in gov.BUILTIN_SIDS
        assert it["ref_id"].startswith("khunter_")
