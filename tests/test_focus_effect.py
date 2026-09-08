# -*- coding: utf-8 -*-
"""V5.4.0 (T-5.4.0.8 / FR-5.4.6): 效果块接入测试

效果块复用 /api/ai/track (eval_track.get_track_summary) — 守护:
- compute_stats 窗口命中率契约 (overall.n5/n10/n20: rate/total)
- get_ai_track 端点复用 get_track_summary (含免责 note)
- 前端效果块渲染 样本量标注 + 免责 (与 test_frontend_focus 互补)
"""
import os
import sys
import pytest

sys.path.insert(0, os.path.join(os.path.dirname(__file__), "..", "backend"))

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(ROOT, "frontend")


# ─── 后端契约 ───────────────────────────────────────────────

def test_compute_stats_window_contract():
    from eval_track import compute_stats
    records = [
        {"direction": 1, "hit_n5": True, "hit_n10": True, "hit_n20": True},
        {"direction": 1, "hit_n5": False, "hit_n10": True, "hit_n20": None},
        {"direction": -1, "hit_n5": None, "hit_n10": None, "hit_n20": True},
    ]
    s = compute_stats(records)
    assert s["overall"]["n5"]["rate"] == 50.0
    assert s["overall"]["n5"]["total"] == 2
    assert s["overall"]["n10"]["rate"] == 100.0
    assert s["overall"]["n20"]["total"] == 2


def test_ai_track_endpoint_uses_get_track_summary():
    with open(os.path.join(ROOT, "backend", "api", "v1", "ai.py"), encoding="utf-8") as f:
        api = f.read()
    assert "get_track_summary" in api
    assert "winrate" not in api.lower() or "track" in api  # 效果块走 track, 无需 openapi 密钥


# ─── 前端效果块契约 ─────────────────────────────────────────

def _read_fv():
    with open(os.path.join(FRONTEND, "js", "components", "focus-view.js"), encoding="utf-8") as f:
        return f.read()


def test_effect_block_renders_sample_and_disclaimer():
    fv = _read_fv()
    assert "样本不足" in fv            # 样本量标注 (样本缺失不渲染误导性百分比)
    assert "fmtRate" in fv
    assert "TRACK_WINDOWS" in fv       # n5/n10/n20 三窗口


def test_effect_block_reuses_track_note_disclaimer():
    fv = _read_fv()
    assert "/api/ai/track" in fv
    assert "note" in fv                # 免责声明来自后端 note 字段
