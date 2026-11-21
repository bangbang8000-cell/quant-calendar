#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.12 (FR-7.7-3): 指标回填与 ADX 自检工具链测试

覆盖:
- indicator_utils: SMA/TR/Wilder 平滑/ATR/Wilder ADX/档位/indicator_frame/missing_dates
- scripts/backfill_indicators.py: 归一化、dry-run 不落盘、--apply 落快照、缺口统计
- scripts/selfcheck_adx.py: 自检(合成趋势 vs 震荡)、对拍函数
- scripts/backfill_backtest_metrics.py: 净值反推收益、重算与生产口径一致、
  漂移/缺失识别、dry-run 不写库、--apply 写回并打标
"""
import importlib.util
import json
import math
import os
import sys

import numpy as np
import pandas as pd
import pytest

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "backend"))
sys.path.insert(0, os.path.join(BASE, "scripts"))

import indicator_utils as iu  # noqa: E402
from backtest import compute_period_metrics  # noqa: E402


def _load_script(name):
    """按路径加载 scripts/ 下的脚本模块(避免与测试目录 import 约定耦合)"""
    path = os.path.join(BASE, "scripts", name)
    spec = importlib.util.spec_from_file_location(name[:-3], path)
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


# ─── indicator_utils ─────────────────────────────────────────

def test_sma_matches_manual():
    vals = [1, 2, 3, 4, 5]
    out = iu.sma(vals, 3)
    assert math.isnan(out.iloc[0]) and math.isnan(out.iloc[1])
    assert out.iloc[2] == pytest.approx(2.0)
    assert out.iloc[4] == pytest.approx(4.0)


def test_true_range_uses_prev_close():
    tr = iu.true_range([10, 11, 12], [8, 9, 10], [9, 10, 11])
    assert tr.iloc[0] == pytest.approx(2.0)   # 首日无 prev: H-L
    assert tr.iloc[1] == pytest.approx(2.0)   # max(2, |11-9|, |9-9|)=2
    assert tr.iloc[2] == pytest.approx(2.0)


def test_wilder_smooth_first_value_is_period_mean():
    s = pd.Series([1.0] * 10 + [2.0] * 10)
    out = iu.wilder_smooth(s, 5)
    assert out.iloc[4] == pytest.approx(1.0)
    assert out.iloc[9] == pytest.approx(1.0)           # 前 10 个都是 1
    assert out.iloc[10] == pytest.approx((1.0 * 4 + 2.0) / 5)   # 1.2
    assert iu.wilder_smooth(pd.Series([1.0, 2.0]), 5).isna().all()


def test_wilder_adx_trend_vs_flat():
    """合成强上涨序列 ADX 应远高于震荡序列; 常数序列(无任何 DM)返回 None"""
    n = 120
    rng = np.random.default_rng(7)
    close = np.cumsum(rng.normal(0.4, 0.3, n)) + 50
    high, low = close + 0.5, close - 0.5
    adx_trend = iu.wilder_adx(high, low, close)
    osc = 50 + np.sin(np.arange(n) * 0.3) * 1.2        # 有方向交替的震荡
    adx_flat = iu.wilder_adx(osc + 0.5, osc - 0.5, osc)
    assert adx_trend is not None and adx_trend > 25
    assert adx_flat is None or adx_flat < 25  # 震荡不应落入"清晰趋势"档(实测 ~24)
    # 完全常数序列: +DM/-DM 全 0 → DI/DX 无定义 → None 而不是 0 假值
    assert iu.wilder_adx(np.full(n, 50.5), np.full(n, 49.5), np.full(n, 50.0)) is None


def test_wilder_adx_insufficient_data():
    assert iu.wilder_adx([1, 2, 3], [0, 1, 2], [0.5, 1.5, 2.5]) is None


def test_adx_tier_thresholds():
    assert iu.adx_tier_of(30) == "clear"
    assert iu.adx_tier_of(25) == "clear"
    assert iu.adx_tier_of(22) == "emerging"
    assert iu.adx_tier_of(19.9) == "ranging"
    assert iu.adx_tier_of(None) == "ranging"


def test_indicator_frame_attrs_and_columns():
    n = 80
    rng = np.random.default_rng(11)
    close = pd.Series(np.cumsum(rng.normal(0.05, 0.4, n)) + 40)
    frame = iu.indicator_frame(close + 0.6, close - 0.6, close,
                               volume=np.abs(rng.normal(1e6, 1e5, n)))
    for col in ("ma5", "ma10", "ma20", "ma60", "atr14", "vol_ma5", "vol_ma10"):
        assert col in frame.columns
    assert "adx14" in frame.attrs and "adx_tier" in frame.attrs
    assert frame["ma20"].notna().iloc[19] and frame["ma20"].isna().iloc[18]


def test_missing_dates():
    assert iu.missing_dates(["2026-01-01", "2026-01-03"],
                            ["2026-01-01", "2026-01-02", "2026-01-03"]) == ["2026-01-02"]
    assert iu.missing_dates([], []) == []


# ─── backfill_indicators.py ──────────────────────────────────

def _fake_rows(n=60, seed=3):
    rng = np.random.default_rng(seed)
    dates = pd.bdate_range("2026-01-05", periods=n).strftime("%Y-%m-%d").tolist()
    close = np.cumsum(rng.normal(0.1, 0.5, n)) + 30
    return [{"trade_date": d, "open": c - 0.2, "high": c + 0.5, "low": c - 0.5,
             "close": float(c), "vol": float(abs(rng.normal(1e6, 1e5)))}
            for d, c in zip(dates, close)]


def test_backfill_normalize_sorts_and_dedupes():
    bi = _load_script("backfill_indicators.py")
    rows = _fake_rows(20)
    rows = rows[::-1] + [dict(rows[-1])]  # 乱序 + 重复(保留最后一条)
    df = bi._normalize(rows)
    assert list(df["date"]) == sorted(df["date"]) and len(df) == 20
    assert list(df.columns) == ["date", "open", "high", "low", "close", "volume"]


def test_backfill_normalize_rejects_missing_columns():
    bi = _load_script("backfill_indicators.py")
    assert bi._normalize([{"date": "2026-01-01", "close": 1.0}]).empty
    assert bi._normalize([]).empty


def test_backfill_dry_run_no_snapshot(tmp_path, monkeypatch):
    bi = _load_script("backfill_indicators.py")
    snap_dir = tmp_path / "snaps"
    monkeypatch.setattr(bi, "_rows_from_source", lambda sym, limit=260: _fake_rows(60))
    monkeypatch.setattr(bi, "SNAPSHOT_DIR", str(snap_dir))
    report = bi.backfill(["600000.SH"], limit=60, apply=False, snap_dir=str(snap_dir))
    assert report["ok"] and not report["failures"]
    assert report["symbols"]["600000.SH"]["bars"] == 60
    assert report["symbols"]["600000.SH"]["snapshot"] is None
    assert not snap_dir.exists()


def test_backfill_apply_writes_snapshot(tmp_path, monkeypatch):
    bi = _load_script("backfill_indicators.py")
    snap_dir = tmp_path / "snaps"
    monkeypatch.setattr(bi, "_rows_from_source", lambda sym, limit=260: _fake_rows(60))
    report = bi.backfill(["600000.SH", "000001.SZ"], limit=60, apply=True,
                         snap_dir=str(snap_dir))
    path = report["symbols"]["600000.SH"]["snapshot"]
    assert path and os.path.exists(path)
    payload = json.load(open(path, encoding="utf-8"))
    assert payload["symbol"] == "600000.SH" and len(payload["rows"]) == 60
    assert set(report["failures"]) == set()  # 两个标的都成功


def test_backfill_reports_failures(tmp_path, monkeypatch):
    bi = _load_script("backfill_indicators.py")
    monkeypatch.setattr(bi, "_rows_from_source", lambda sym, limit=260: [])
    report = bi.backfill(["600000.SH"], apply=False, snap_dir=str(tmp_path))
    assert report["ok"] is False and report["failures"] == ["600000.SH"]


# ─── selfcheck_adx.py ────────────────────────────────────────

def test_selfcheck_adx_self_test_passes():
    sa = _load_script("selfcheck_adx.py")
    res = sa.self_test()
    assert res["trend_above_flat"] is True
    assert res["trend_tier"] == "clear" and res["flat_tier"] == "ranging"


def test_selfcheck_adx_compare_agreement():
    sa = _load_script("selfcheck_adx.py")
    n = 150
    rng = np.random.default_rng(5)
    close = pd.Series(np.cumsum(rng.normal(0.3, 0.4, n)) + 40)
    df = pd.DataFrame({"high": close + 0.5, "low": close - 0.5, "close": close})
    cmp = sa.compare(df)
    assert cmp["agree"] is True
    assert cmp["production"] == cmp["wilder"]


# ─── backfill_backtest_metrics.py ────────────────────────────

def _equity_from_rets(rets):
    eq, acc = [], 1.0
    for r in rets:
        acc *= (1 + r)
        eq.append(round(acc, 6))
    return eq


def _make_exp(equity=None, summary=None, subject="demo"):
    result = {"success": True, "equity_curve": equity or []}
    if summary is None:
        summary = {}
    return {"id": "exp_demo", "type": "backtest", "subject": subject,
            "params": {}, "date_range": ["2026-01-01", "2026-03-01"],
            "app_version": "7.12", "summary": dict(summary),
            "result": {"result": result}, "created_at": "2026-03-01T10:00:00"}


def test_returns_from_equity_roundtrip():
    bbm = _load_script("backfill_backtest_metrics.py")
    rets = [0.01, -0.02, 0.005, 0.03, -0.01, 0.02]
    equity = _equity_from_rets(rets)
    back = bbm.returns_from_equity(equity)
    for a, b in zip(rets, back):
        assert b == pytest.approx(a, abs=1e-6)


def test_recompute_matches_production_metrics():
    """净值反推 + 生产同一绩效函数 ⇒ 与直接用日收益算完全一致"""
    bbm = _load_script("backfill_backtest_metrics.py")
    rng = np.random.default_rng(9)
    rets = list(rng.normal(0.001, 0.02, 120))
    fresh = bbm.recompute({"equity_curve": _equity_from_rets(rets)})
    want = compute_period_metrics(rets)
    for key in ("total_return", "annual_return", "max_drawdown",
                "volatility", "sharpe_ratio", "win_rate"):
        assert fresh[key] == pytest.approx(want[key], abs=0.02), key
    assert fresh["total_days"] == 120


def test_recompute_rejects_short_or_dirty_curve():
    bbm = _load_script("backfill_backtest_metrics.py")
    assert bbm.recompute({"equity_curve": [1.0, 1.01]}) == {}
    assert bbm.recompute({}) == {}
    assert bbm.recompute({"equity_curve": ["x", "y", "z"]}) == {}


def test_result_of_nested_and_flat():
    bbm = _load_script("backfill_backtest_metrics.py")
    exp = _make_exp(equity=[1.0, 1.01, 1.02])
    assert bbm._result_of(exp)["equity_curve"][0] == 1.0
    flat = {"id": "x", "result": {"success": True, "equity_curve": [1.0, 1.01]}}
    assert bbm._result_of(flat)["equity_curve"][-1] == pytest.approx(1.01)


def test_diff_metrics_flags_missing_and_drift():
    bbm = _load_script("backfill_backtest_metrics.py")
    fresh = {"total_return": 12.0, "win_rate": 55.0, "sharpe_ratio": 1.2}
    diffs = bbm.diff_metrics({"total_return": 12.0}, fresh)
    keys = {d["key"]: d["why"] for d in diffs}
    assert keys["win_rate"] == "missing"
    assert keys["sharpe_ratio"] == "missing"
    drift = bbm.diff_metrics({"total_return": 30.0, "win_rate": 55.0,
                              "sharpe_ratio": 1.2}, fresh)
    assert any(d["key"] == "total_return" and d["why"] == "drift" for d in drift)


def _patch_records(monkeypatch, bbm, records):
    class _Row(dict):
        def __getitem__(self, k):
            return dict.__getitem__(self, k)

    monkeypatch.setattr(bbm, "_load_records",
                        lambda eid=None, types=bbm.DEFAULT_TYPES, limit=500:
                        ([(r["id"], r["type"], r.get("created_at", ""),
                          r.get("data", r)) for r in records], None))


def test_run_dry_run_reports_drift_without_write(monkeypatch):
    bbm = _load_script("backfill_backtest_metrics.py")
    rets = [0.01, 0.02, -0.01] * 20
    equity = _equity_from_rets(rets)
    want = compute_period_metrics(rets)
    exp = _make_exp(equity=equity,
                    summary={"total_return": want["total_return"] + 50})  # 人为漂移
    _patch_records(monkeypatch, bbm, [{"id": "exp_demo", "type": "backtest", "data": exp}])
    # 假 DB: 记录写回是否发生
    written = []
    monkeypatch.setattr(bbm.research_store, "save_experiment",
                        lambda e: written.append(e))
    report = bbm.run(apply=False)
    assert report["scanned"] == 1 and report["drifted"] == 1
    assert report["applied"] == 0 and not written
    assert report["items"][0]["diffs"][0]["key"] == "total_return"


def test_run_apply_writes_back_and_stamps(monkeypatch):
    bbm = _load_script("backfill_backtest_metrics.py")
    rets = [0.005, 0.01, -0.005] * 30
    equity = _equity_from_rets(rets)
    want = compute_period_metrics(rets)
    exp = _make_exp(equity=equity, summary={"total_return": 999.0})
    _patch_records(monkeypatch, bbm, [{"id": "exp_demo", "type": "backtest", "data": exp}])
    saved = {}

    def _fake_save(e):
        saved.update(e)
        return e["id"]

    monkeypatch.setattr(bbm.research_store, "save_experiment", _fake_save)
    report = bbm.run(apply=True)
    assert report["applied"] == 1
    assert report["items"][0]["status"] == "applied"
    assert saved["summary"]["total_return"] == pytest.approx(want["total_return"], abs=0.05)
    assert saved["summary"]["total_days"] == 90
    assert saved["result"]["result"]["total_return"] == saved["summary"]["total_return"]
    assert saved["backfilled_at"] and saved["backfill_source"]


def test_run_clean_record_untouched(monkeypatch):
    bbm = _load_script("backfill_backtest_metrics.py")
    # 交替收益(常数收益会让 std≈0, 夏普数值退化到天文数字, 不是真实回测形态)
    rets = [0.004, -0.002, 0.006, 0.001, -0.003, 0.005] * 10
    equity = _equity_from_rets(rets)
    want = compute_period_metrics(rets)
    exp = _make_exp(equity=equity, summary=want)
    _patch_records(monkeypatch, bbm, [{"id": "exp_demo", "type": "backtest", "data": exp}])
    saved = []
    monkeypatch.setattr(bbm.research_store, "save_experiment", lambda e: saved.append(e))
    report = bbm.run(apply=True)
    assert report["clean"] == 1 and report["drifted"] == 0 and report["applied"] == 0
    assert not saved


def test_run_skips_no_curve_and_bad_json(monkeypatch):
    bbm = _load_script("backfill_backtest_metrics.py")
    records = [
        {"id": "exp_a", "type": "backtest", "data": _make_exp(equity=[])},
        {"id": "exp_b", "type": "backtest", "data": None},  # JSON 损坏
    ]
    _patch_records(monkeypatch, bbm, records)
    report = bbm.run()
    statuses = {it["id"]: it["status"] for it in report["items"]}
    assert statuses == {"exp_a": "no_equity_curve", "exp_b": "bad_json"}
    assert report["skipped"] == 2


def test_cli_strict_exit_code(monkeypatch, capsys):
    bbm = _load_script("backfill_backtest_metrics.py")
    rets = [0.01, 0.02, -0.01] * 20
    exp = _make_exp(equity=_equity_from_rets(rets),
                    summary={"total_return": 777.0})
    monkeypatch.setattr(bbm, "_load_records",
                        lambda **kw: ([("exp_demo", "backtest", exp["created_at"], exp)], None))
    assert bbm.main(["--strict"]) == 1          # dry-run 有漂移 → strict 下 1
    assert bbm.main([]) == 0                    # 默认只报告
    monkeypatch.setattr(bbm.research_store, "save_experiment", lambda e: e["id"])
    assert bbm.main(["--apply"]) == 0           # 写回后 0
