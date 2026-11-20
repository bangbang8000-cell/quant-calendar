# -*- coding: utf-8 -*-
"""v7.11 回测口径重跑件测试 (FR-7.11-8)

守三件事:
  1. 复算脚本可跑通(离线 synthetic), 产出结构完整, 不依赖网络;
  2. 旧口径复现方式正确: shift(-1) 喂同一内核 = 「当日权重 × 当日收益」;
  3. 归档清点结论可复现 — 清点结果为 0 时才允许声称"无需覆盖旧数字"。
"""
import json
import os
import subprocess
import sys



BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PY = sys.executable
SCRIPT = os.path.join(BASE, "scripts", "recalib_backtest.py")


def test_recalib_script_runs_offline(tmp_path):
    """离线跑通: 不访问真实门户, 输出 JSON 结构完整(写临时路径, 不覆盖归档样例)"""
    out = str(tmp_path / "recalib.json")
    proc = subprocess.run([PY, SCRIPT, "--synthetic", "--days", "160", "--out", out],
                          capture_output=True, text=True, timeout=300, cwd=BASE)
    assert proc.returncode == 0, proc.stderr[-2000:]

    with open(out, encoding="utf-8") as f:
        data = json.load(f)
    assert data["data_source"] == "simulated"
    assert data["symbols"] and data["days"] == 160
    keys = {r["metric"] for r in data["comparison"]}
    assert {"total_return", "annual_return", "sharpe_ratio", "max_drawdown"} <= keys
    for row in data["comparison"]:
        assert "legacy_same_day_weight" in row and "fixed_t_minus_1" in row
    assert "archived_experiments" in data
    assert "note" in data and data["note"]


def test_legacy_reproduction_is_shifted_weights():
    """旧口径等价性: shift(-1) 后的矩阵经同一内核, 结果应与未移位矩阵不同"""
    sys.path.insert(0, os.path.join(BASE, "backend"))
    import numpy as np
    import pandas as pd

    from vector_backtest import vector_backtest

    idx = pd.bdate_range("2026-01-01", periods=40).strftime("%Y-%m-%d")
    cols = ["A", "B"]
    rng = np.random.default_rng(7)
    rets = pd.DataFrame(rng.normal(0.0005, 0.01, (40, 2)), index=idx, columns=cols)
    # 交替持仓, 保证 shift 后确实不同
    w = pd.DataFrame([[1.0, 0.0] if i % 2 == 0 else [0.0, 1.0] for i in range(40)],
                     index=idx, columns=cols, dtype=float)

    fixed = vector_backtest(w, rets)
    legacy = vector_backtest(w.shift(-1).fillna(0.0), rets)
    assert fixed["success"] and legacy["success"]
    assert fixed["metrics"]["total_return"] != legacy["metrics"]["total_return"]


def test_doc_states_no_archive_when_db_empty():
    """文档口径与库状态一致: 库里 0 条归档时, 文档必须说明"无需覆盖\""""
    doc = os.path.join(BASE, "docs", "BACKTEST-RECALIB-v7.11.0.md")
    with open(doc, encoding="utf-8") as f:
        text = f.read()
    assert "口径分界日" in text
    assert "research_experiments" in text
    assert "backtest-lab" in text, "必须说明 backtest-lab 不受影响(否则 v7.3 数字会被误废)"

    sys.path.insert(0, os.path.join(BASE, "backend"))
    try:
        import db
        conn = db.get_conn()
        try:
            n = conn.execute("SELECT COUNT(*) AS n FROM research_experiments").fetchone()["n"]
        finally:
            conn.close()
    except Exception:  # 表尚未创建 = 尚无归档, 按 0 条处理(不跳过, 保留守卫)
        n = 0
    if n == 0:
        assert "无归档结论" in text or "无需作废" in text
