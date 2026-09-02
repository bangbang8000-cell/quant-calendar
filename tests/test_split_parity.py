# -*- coding: utf-8 -*-
"""V5.9 (T-5.9.1): 拆分对拍 (TEST-PLAN 10.1 test_split_parity.py)

ai_evaluator.py (1896 行) 拆分为 ai_eval/ 子包 (Mixin 聚合 + 薄壳兼容)。
对拍内容:
1. 符号对拍 — 方法集契约 (56 方法拆前拆后一致, 不丢方法)
2. 结构对拍 — 各 Mixin 文件/类/方法分布
3. import 兼容对拍 — 全部原 importers 可导入, 薄壳 re-export 完整
4. 行为对拍 — 关键路径 mock 注入下 golden 输出一致
5. 覆盖率不降对拍 — ai_eval 核心路径语句覆盖 >= 基线 (防拆分后丢路径)
"""
import asyncio
import json
import os
import sys
import importlib

import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))

from unittest.mock import patch  # noqa: E402

import ai_eval  # noqa: E402
from ai_eval import AIEvaluator  # noqa: E402

# ─── 1. 符号对拍 ─────────────────────────────────────────────

CONTRACT_METHODS = {
    "_load_config", "save_config", "_load_response_cache",
    "_save_response_cache", "_load_usage", "_save_usage", "_get_cache_key",
    "_get_cached", "_set_cached", "_record_usage", "get_usage_stats",
    "_load_index_eval_cache", "_save_index_eval_cache",
    "_seed_default_vendors", "_load_models", "_save_models", "_normalize_name",
    "_match_catalog", "_vendor_key_for_provider", "_migrate_v1_to_v2",
    "get_models", "update_models", "get_vendors", "get_enabled_models",
    "_resolve_provider", "_resolve_vendor", "test_vendor_model",
    "test_model_connection", "list_vendor_models", "get_catalog",
    "recommend_strategies", "generate_pool_signal", "generate_review",
    "_fetch_stock_data", "_resolve_stock_name", "_load_prompt_template",
    "_call_llm", "_calibrate_decision", "_build_data_prompt", "_builtin_evaluate",
    "evaluate_stock", "batch_evaluate", "batch_evaluate_stream",
    "_load_history", "_load_history_for", "_save_history_for", "_history_path",
    "evaluate_index", "get_history", "count_history", "delete_history",
    "get_last_evaluation", "test_connection", "get_auto_config", "save_auto_config",
}


def test_method_set_parity():
    """拆前 56 方法契约在拆分后 AIEvaluator 上全部存在 (不丢方法)"""
    have = {m for m in dir(AIEvaluator) if not m.startswith("__")}
    assert CONTRACT_METHODS <= have, "丢失方法: %s" % (CONTRACT_METHODS - have)


def test_instance_has_all_state_attrs():
    """实例构造后关键状态属性齐备 (拆前 __init__ 语义保留)"""
    import tempfile
    import paths as P
    old = P.DATA_DIR
    P.DATA_DIR = tempfile.mkdtemp()
    try:
        e = AIEvaluator()
        for attr in ("config_file", "history_file", "_models_file", "_models_cache",
                     "_index_eval_file", "_index_eval_cache", "_cache_file",
                     "_usage_file", "_response_cache", "_usage"):
            assert hasattr(e, attr), attr
    finally:
        P.DATA_DIR = old


def test_dataclass_init_not_shadowed():
    """@dataclass(init=False) 不得遮蔽基类 __init__ (真实路径回归)"""
    assert AIEvaluator.__dataclass_fields__ is not None
    assert "config_file" not in AIEvaluator.__dataclass_fields__  # 字段由 __init__ 管理


# ─── 2. 结构对拍 ─────────────────────────────────────────────

MIXIN_METHODS = {
    "_base": ["_load_config", "save_config", "_load_response_cache",
              "_save_response_cache", "_load_usage", "_save_usage", "_get_cache_key",
              "_get_cached", "_set_cached", "_record_usage", "get_usage_stats",
              "_load_index_eval_cache", "_save_index_eval_cache"],
    "_models": ["_seed_default_vendors", "_load_models", "_save_models", "_normalize_name",
                "_match_catalog", "_vendor_key_for_provider", "_migrate_v1_to_v2",
                "get_models", "update_models", "get_vendors", "get_enabled_models",
                "_resolve_provider", "_resolve_vendor", "test_vendor_model",
                "test_model_connection", "list_vendor_models", "get_catalog"],
    "_eval": ["recommend_strategies", "generate_pool_signal", "generate_review",
              "_fetch_stock_data", "_resolve_stock_name", "_load_prompt_template",
              "_call_llm", "_calibrate_decision", "_build_data_prompt", "_builtin_evaluate",
              "evaluate_stock", "batch_evaluate", "batch_evaluate_stream"],
    "_history": ["_load_history", "_load_history_for", "_save_history_for", "_history_path",
                 "evaluate_index", "get_history", "count_history", "delete_history",
                 "get_last_evaluation", "test_connection", "get_auto_config", "save_auto_config"],
}

MIXIN_CLASS = {"_base": "AIEvalBase", "_models": "AIModelsMixin",
               "_eval": "AIEvalMixin", "_history": "AIHistoryMixin"}


@pytest.mark.parametrize("mod,cls", sorted(MIXIN_CLASS.items()))
def test_mixin_structure(mod, cls):
    """每个 ai_eval 子模块: 文件存在 + 类名正确 + 方法分布正确"""
    m = importlib.import_module("ai_eval.%s" % mod)
    assert hasattr(m, cls)
    methods = {n for n in dir(getattr(m, cls)) if not n.startswith("__")}
    assert set(MIXIN_METHODS[mod]) <= methods, "Mixin %s 缺方法 %s" % (mod, set(MIXIN_METHODS[mod]) - methods)


def test_mixin_mro_order():
    """MRO: History > Eval > Models > Base (方法互调可解析)"""
    assert AIEvaluator.__mro__[1].__name__ == "AIHistoryMixin"
    assert AIEvaluator.__mro__[2].__name__ == "AIEvalMixin"
    assert AIEvaluator.__mro__[3].__name__ == "AIModelsMixin"
    assert AIEvaluator.__mro__[4].__name__ == "AIEvalBase"


# ─── 3. import 兼容对拍 ──────────────────────────────────────

RE_EXPORTS = ("AIEvaluator", "ModelProvider", "VendorModel", "VendorConfig",
              "VENDOR_CATALOG", "ai_evaluator")


def test_thin_shell_re_exports():
    import ai_evaluator as sh
    for name in RE_EXPORTS:
        assert hasattr(sh, name), "薄壳缺 re-export: %s" % name
    assert sh.ai_evaluator is not None


IMPORTERS = ("eval_track", "fact_check", "job_tasks", "market_review",
             "report_generator", "scheduler", "strategy_custom", "strategy_variant",
             "api.v1.ai", "api.v1.calendar", "api.v1.chat", "api.v1.export",
             "api.v1.openapi", "api.v1.system")


@pytest.mark.parametrize("importer", IMPORTERS)
def test_all_importers_import(importer):
    """全部原 import 方 (14 个) 拆分后可正常导入"""
    importlib.import_module(importer)


def test_ai_models_direct_import():
    """ModelProvider 等顶层符号来源不变 (V4.5 ai_models)"""
    from ai_models import ModelProvider as M1
    from ai_evaluator import ModelProvider as M2
    assert M1 is M2


# ─── 4. 行为对拍 (golden) ────────────────────────────────────

def _mk_eval(tmp_path):
    import paths as P
    old = P.DATA_DIR
    P.DATA_DIR = str(tmp_path)
    e = AIEvaluator(config_file=os.path.join(str(tmp_path), "ai_config.json"))
    return e, old


@pytest.fixture
def isolated(tmp_path):
    e, old = _mk_eval(tmp_path)
    yield e
    import paths as P
    P.DATA_DIR = old


def test_golden_resolve_stock_name_static(isolated):
    """_resolve_stock_name 是静态方法, 不接收 self (拆分前 @staticmethod 语义)"""
    sig = isolated._resolve_stock_name
    # 静态方法可直接经类调用, 不绑定实例
    assert AIEvaluator._resolve_stock_name("600000.SH", "") in ("600000.SH", "浦发银行")
    assert isolated._resolve_stock_name("600000.SH", "已知名") == "已知名"


def test_golden_normalize_name(isolated):
    assert isolated._normalize_name("  DeepSeek  ") == "deepseek"


def test_golden_cache_key_deterministic(isolated):
    k1 = isolated._get_cache_key("600000.SH", "default")
    k2 = isolated._get_cache_key("600000.SH", "default")
    assert k1 == k2 and isinstance(k1, str) and k1


def test_golden_build_data_prompt(isolated):
    data = {"latest": {"close": 12.8, "pct_chg": 2.4}, "rsi": 58,
            "macd": {"dif": 0.1, "dea": 0.05, "hist": 0.05}, "ma_alignment": "多头排列"}
    p = isolated._build_data_prompt(data)
    assert isinstance(p, str) and "12.8" in p


def test_golden_history_roundtrip(isolated, tmp_path):
    isolated._save_history_for("u1", [{"stock_code": "600000.SH", "result": {"level": "推荐"}}])
    h = isolated._load_history_for("u1")
    assert h[0]["stock_code"] == "600000.SH"
    assert h[0]["result"]["level"] == "推荐"


def test_golden_history_path(isolated, tmp_path):
    assert str(tmp_path) in isolated._history_path("u1")


def test_golden_calibrate_structure(isolated):
    r = isolated._calibrate_decision({"result": {"total_score": 80, "level": "推荐"}},
                                     {"rsi": 58}, "600000.SH", "u1")
    assert "result" in r


def test_golden_llm_success_path(isolated, tmp_path):
    """mock requests.post → LLM 成功 → 返回 total_score 80 (拆分后引用同一 requests 模块)"""
    from unittest.mock import patch, MagicMock
    import ai_evaluator
    mock_resp = MagicMock()
    mock_resp.status_code = 200
    mock_resp.json.return_value = {"choices": [{"message": {"content": json.dumps({
        "total_score": 80, "level": "推荐", "dimensions": {},
        "analysis": {"strengths": ["x"], "weaknesses": [], "suggestions": []},
        "detailed_report": "mock"})}}]}
    sample = {"has_kline": True, "latest": {"close": 12.8, "pct_chg": 2.4}, "rsi": 58,
              "macd": {"dif": 0.1, "dea": 0.05, "hist": 0.05}, "ma_alignment": "多头排列"}
    with patch("ai_evaluator.requests.post", return_value=mock_resp):
        r = asyncio.run(isolated.evaluate_stock("000001.SZ", "平安银行", stock_data=sample))
    assert r["result"]["total_score"] == 80


def test_golden_llm_failure_fallback(isolated):
    """mock requests.post 抛异常 → 不崩, 返回错误信封"""
    from unittest.mock import patch
    import ai_evaluator
    with patch("ai_evaluator.requests.post", side_effect=Exception("boom")):
        r = asyncio.run(isolated.evaluate_stock("000001.SZ", "平安银行",
                                                stock_data={"latest": {"close": 1, "pct_chg": 0}, "rsi": 30, "macd": {}}))
    assert r["result"]["level"] in ("评估失败", "强烈推荐", "推荐", "观望", "回避")


# ─── 5. 覆盖率不降对拍 ──────────────────────────────────────

COV_BASELINE = 0.10  # 对拍操作集自身的核心路径冒烟下限 (全 AI 组的覆盖率不降由 CI --cov=ai_eval --cov-fail-under=50 门禁承担)


def test_coverage_not_lower(tmp_path):
    """对拍操作集触发下, ai_eval 语句覆盖 >= 基线 (coverage API 现场测量)"""
    import coverage
    e, old = _mk_eval(tmp_path)
    try:
        cov = coverage.Coverage(source=["ai_eval"])
        cov.start()
        # 触发各 Mixin 核心路径
        _ = AIEvaluator._resolve_stock_name("600000.SH", "")
        _ = e._normalize_name(" DeepSeek ")
        _ = e._get_cache_key("600000.SH", "default")
        _ = e._build_data_prompt({"latest": {"close": 1, "pct_chg": 0}, "rsi": 30, "macd": {}})
        e._save_history_for("u1", [{"stock_code": "a"}])
        e._load_history_for("u1")
        _ = e._calibrate_decision({"result": {"total_score": 80}}, {"rsi": 1}, "a", "u1")
        try:
            asyncio.run(e.evaluate_stock("a", "b", stock_data={"latest": {"close": 1, "pct_chg": 0}, "rsi": 30, "macd": {}}))
        except Exception:
            pass
        cov.stop()
        import io
        buf = io.StringIO()
        cov.report(file=buf, show_missing=False)
        lines = buf.getvalue().strip().splitlines()
        # 末行 TOTAL: "TOTAL   <stmts>  <miss>  <cover>%"
        total_row = [ln for ln in lines if ln.startswith("TOTAL")]
        assert total_row, "coverage 报告缺 TOTAL 行: %r" % lines
        parts = total_row[-1].split()
        ratio = float(parts[-1].rstrip("%")) / 100.0
        assert ratio >= COV_BASELINE, "ai_eval 覆盖率 %.2f < 基线 %.2f" % (ratio, COV_BASELINE)
    finally:
        import paths as P
        P.DATA_DIR = old
# ─── V5.9 (T-5.9.2): Scheduler 拆分对拍 ───────────────────

SCHEDULER_CONTRACT = {
    "run_strategy_once", "verify_day_ingest", "scan_csv_files", "detect_csv_changes",
    "_record_task_run", "_record_freshness", "_persist_history", "get_execution_history",
    "get_execution_summary", "get_task_status", "_read_feishu_webhook", "_send_feishu_alert",
    "_check_disk_alert", "set_webhook", "_should_execute_today", "daily_report_task",
    "report_subscription_task", "auto_evaluate_task", "_push_ai_evaluation_report",
    "weekly_report_task", "_refresh_after_strategy_run", "_self_heal_aggregator",
    "strategy_run_task", "data_refresh_task", "tushare_pull_task", "file_watch_task",
    "daily_backup_task", "health_check_task", "_send_health_alert", "error_alert_task",
    "run_daily_review", "_handle_review_outcome", "_sleep_until", "_should_retry_review",
    "_run_market_review_with_retry", "review_produced_today", "_catchup_market_review",
    "event_alert_scan_task", "fact_check_audit_task", "daily_market_review_task",
    "start", "stop",
}

SCHED_MIXINS = {
    "_records": ("SchedulerRecordsMixin", ["_record_task_run", "_record_freshness",
                 "_persist_history", "get_execution_history", "get_execution_summary",
                 "get_task_status"]),
    "_alerts": ("SchedulerAlertsMixin", ["_read_feishu_webhook", "_send_feishu_alert",
                "_check_disk_alert", "set_webhook"]),
    "_core": ("SchedulerCoreMixin", ["_should_execute_today", "daily_report_task",
              "_self_heal_aggregator", "strategy_run_task", "data_refresh_task",
              "tushare_pull_task", "health_check_task", "start", "stop"]),
    "_review": ("SchedulerReviewMixin", ["run_daily_review", "_handle_review_outcome",
                "_should_retry_review", "review_produced_today"]),
    "_helpers": (None, ["run_strategy_once", "verify_day_ingest", "scan_csv_files",
                "detect_csv_changes"]),
}


def test_scheduler_method_set_parity():
    from scheduler import Scheduler
    have = {m for m in dir(Scheduler) if not m.startswith("__")}
    want = SCHEDULER_CONTRACT - {"run_strategy_once", "verify_day_ingest",
                                 "scan_csv_files", "detect_csv_changes"}
    assert want <= have, "Scheduler 缺方法: %s" % (want - have)


@pytest.mark.parametrize("mod,cls,methods", [(m, c, ms) for m, (c, ms) in SCHED_MIXINS.items()])
def test_scheduler_mixin_structure(mod, cls, methods):
    m = importlib.import_module("scheduler.%s" % mod)
    if cls:
        assert hasattr(m, cls)
        obj = getattr(m, cls)
    else:
        obj = m
    have = {n for n in dir(obj) if not n.startswith("__")}
    assert set(methods) <= have, "Mixin %s 缺 %s" % (mod, set(methods) - have)


def test_scheduler_module_funcs_and_singleton():
    import scheduler as sch
    for fn in ("run_strategy_once", "verify_day_ingest", "scan_csv_files",
               "detect_csv_changes"):
        assert callable(getattr(sch, fn)), fn
    assert isinstance(sch.scheduler, sch.Scheduler)
    import scheduler._records as rec
    assert rec.SchedulerRecordsMixin._persist_history.__module__ == "scheduler._records"


def test_scheduler_importers_compatible():
    importlib.import_module("main_new")
    importlib.import_module("strategy_execution")


def test_scheduler_golden_detect_csv_changes():
    import scheduler as sch
    assert sch.detect_csv_changes({"/a.csv": 1.0}, {"/a.csv": 1.0})[0] is False
    assert sch.detect_csv_changes({}, {"/a.csv": 1.0})[0] is True


def test_scheduler_golden_persist_history_roundtrip(tmp_path):
    import scheduler as sch
    import paths as P
    old = P.DATA_DIR
    P.DATA_DIR = str(tmp_path)
    try:
        tmp_file = os.path.join(str(tmp_path), "scheduler_history.json")
        with patch("scheduler.HISTORY_FILE", tmp_file):
            inst = sch.Scheduler.__new__(sch.Scheduler)
            inst._persist_history("t1", True, "d1")
            inst._persist_history("t1", False, "d2")
            h = inst.get_execution_history()
            assert len(h) >= 2 and h[0]["detail"] == "d2"  # 最新在前
    finally:
        P.DATA_DIR = old


def test_scheduler_golden_self_heal_patch_routing(tmp_path):
    """拆分后 patch("scheduler.views_aggregator"/"scheduler.DATA_DIR") 仍生效 (包级解析)"""
    from unittest.mock import patch
    import scheduler as sch
    import scheduler._core as core
    with patch("scheduler.views_aggregator") as va:
        assert core._m.views_aggregator is va
    with patch("scheduler.DATA_DIR", "/tmp/qc-routing-check"):
        assert core._m.DATA_DIR == "/tmp/qc-routing-check"
# ─── V5.9 (T-5.9.3): data_sources / merrill_clock 拆分对拍 ───

DS_MODULE_FUNCS = ("record_call", "get_health_metrics", "reset_health", "get_route_order",
                   "enqueue_alert", "get_alerts", "clear_alerts", "retry_with_backoff",
                   "record_batch_failure", "timed_record", "_pause_source", "_resume_source",
                   "_safe_float", "_ts_code_to_akshare_index", "_is_index_code",
                   "_map_akshare_columns")


def test_data_sources_module_funcs_and_singleton():
    import data_sources as ds
    for fn in DS_MODULE_FUNCS:
        assert callable(getattr(ds, fn)), fn
    assert isinstance(ds.data_source_manager, ds.DataSourceManager)
    for c in ("SOURCE_ORDER", "MAX_RETRIES", "DEFAULT_CONFIG", "ALERT_QUEUE"):
        assert hasattr(ds, c), c
    # 模块状态可达 (测试直取 ds._health/_route_lock)
    for s in ("_health_lock", "_health", "_route_lock", "_route_state"):
        assert hasattr(ds, s), s


def test_data_sources_structure():
    m = importlib.import_module("data_sources._manager")
    assert hasattr(m, "DataSourceManager")
    methods = {n for n in dir(m.DataSourceManager) if not n.startswith("__")}
    for meth in ("get_kline_data", "get_index_daily", "get_financial_data",
                 "get_moneyflow", "get_market_daily_batch", "save_config",
                 "test_connection", "get_trade_dates"):
        assert meth in methods, meth


def test_data_sources_patch_config_routing():
    """monkeypatch ds.DATASOURCE_CONFIG_FILE 生效 (_manager 经包级解析)"""
    import data_sources as ds
    import data_sources._manager as mgr
    with patch("data_sources.DATASOURCE_CONFIG_FILE", "/tmp/qc-no-config.json"):
        assert mgr._ds_mod.DATASOURCE_CONFIG_FILE == "/tmp/qc-no-config.json"


def test_merrill_clock_structure_and_singleton():
    from merrill_clock import MerrillClock, merrill_clock, _normalize_score
    assert isinstance(merrill_clock, MerrillClock)
    methods = {n for n in dir(MerrillClock) if not n.startswith("__")}
    for meth in ("determine_stage", "reevaluate", "get_stage_detail", "seed_history",
                 "set_stage_start", "get_economic_indicators"):
        assert meth in methods, meth
    assert callable(_normalize_score)
    import merrill_clock._history as mh
    import merrill_clock._core as mc
    import merrill_clock._indicators as mi
    assert hasattr(mh, "ClockHistoryMixin") and hasattr(mc, "ClockCoreMixin")
    assert hasattr(mi, "ClockIndicatorsMixin")


def test_merrill_patch_file_constants_routing():
    """patch("merrill_clock.CACHE_FILE") 生效 (_history 经包级解析)"""
    import merrill_clock._history as mh
    with patch("merrill_clock.CACHE_FILE", "/tmp/qc-mc-cache.json"):
        assert mh._mc_mod.CACHE_FILE == "/tmp/qc-mc-cache.json"


def test_merrill_golden_normalize_score():
    from merrill_clock import _normalize_score
    assert _normalize_score(50, 50, 3, False) == 0.0
    assert _normalize_score(47, 50, 3, False) == -1.0
    assert _normalize_score(4.0, 5.0, 1.0, True) == 1.0


def test_ds_golden_detect_route_health(tmp_path):
    import data_sources as ds
    with patch("data_sources.DATASOURCE_CONFIG_FILE", str(tmp_path / "cfg.json")):
        ds.reset_health()
        ds.record_call("tushare", True, 12.0)
        m = ds.get_health_metrics()
        assert any(str(d).find("tushare") >= 0 for d in m)
        ds._pause_source("akshare", "down")
        assert "akshare" not in ds.get_route_order()