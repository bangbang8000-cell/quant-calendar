# -*- coding: utf-8 -*-
"""v7.25 FR-9: 研究域样式门禁（内联样式 / 硬编码色 / 原生表 / bt-* 别名）"""
import os
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(BASE, "scripts", "ci"))

import check_research_style as gate  # noqa: E402


def test_research_style_gate_passes():
    violations, stats = gate.scan()
    assert stats["inline"] <= gate.INLINE_LIMIT, stats
    assert stats["tables"] <= gate.NATIVE_TABLE_BASELINE, stats
    assert stats["page_head"] >= gate.PAGE_HEAD_MIN, stats
    assert not violations, "研究域样式违规: %s" % violations


def test_child_components_use_unified_page_head():
    for rel in ("frontend/js/components/pattern-lab.js",
                "frontend/js/components/marketplace-panel.js"):
        src = open(os.path.join(BASE, rel), encoding="utf-8").read()
        assert "<qc-page-head" in src, rel + " 需使用统一页面头"


def test_gate_detects_hardcoded_color(tmp_path, monkeypatch):
    f = tmp_path / "demo.js"
    f.write_text('<div style="color:#ff0000">x</div>', encoding="utf-8")
    monkeypatch.setattr(gate, "RESEARCH", tmp_path)
    violations, stats = gate.scan()
    assert any("硬编码色值" in v for v in violations), violations
    assert stats["inline"] == 1


def test_gate_detects_extra_native_table(tmp_path, monkeypatch):
    f = tmp_path / "demo.js"
    f.write_text("<table></table>" * (gate.NATIVE_TABLE_BASELINE + 1), encoding="utf-8")
    monkeypatch.setattr(gate, "RESEARCH", tmp_path)
    violations, stats = gate.scan()
    assert any("原生 <table>" in v for v in violations), violations
