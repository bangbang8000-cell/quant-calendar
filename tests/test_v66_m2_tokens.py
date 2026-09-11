# -*- coding: utf-8 -*-
"""V6.6 (TEST-PLAN 6.6 TC-6.6.1.x): 语义工具类 + 旧 token 迁移 — L1 门禁"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def test_semantic_utility_classes():
    """TC-6.6.1.7: 语义工具类存在"""
    src = _read_f("css/components.css")
    for cls in (".qc-text-success", ".qc-text-warning", ".qc-text-error",
                ".qc-text-info", ".qc-text-muted",
                ".qc-bg-success-subtle", ".qc-bg-warning-subtle",
                ".qc-bg-error-subtle",
                ".qc-merrill-bearish", ".qc-merrill-bullish"):
        assert cls in src, f"components.css 缺工具类 {cls}"


def test_radius_tokens_migrated():
    """TC-6.6.1.8: 旧圆角 token 引用归零"""
    for rel in ("css/themes.css", "css/layout.css", "css/responsive.css", "css/animations.css"):
        src = _read_f(rel)
        for old in ("var(--r-sm)", "var(--r-md)", "var(--r-lg)", "var(--r-xl)", "var(--r-full)"):
            assert old not in src, f"{rel} 仍含 {old}"


def test_spacing_tokens_migrated():
    """TC-6.6.1.8: 旧间距 token 引用归零 (layout/responsive/animations)"""
    for rel in ("css/layout.css", "css/responsive.css", "css/animations.css"):
        src = _read_f(rel)
        for m in re.finditer(r"var\(--sp-(\d+)", src):
            n = int(m.group(1))
            assert f"var(--sp-{n})" not in src.replace(f"var(--qc-space-{n})", ""), \
                f"{rel} 仍含 var(--sp-{n})"


def test_font_tokens_reduced():
    """TC-6.6.1.8: 旧字号 token 引用显著下降 (布局/响应式归零或大幅下降)"""
    responsive = _read_f("css/responsive.css")
    assert "var(--font-md)" not in responsive and "var(--font-lg)" not in responsive, \
        "responsive.css 旧字号应已迁移"


def test_compat_layer_preserved():
    """TC-6.6.1.9: tokens.css 兼容层保留"""
    src = _read_f("css/tokens.css")
    assert "--sp-1: var(--qc-space-1)" in src, "tokens.css 兼容层 sp 应保留"
    assert "--r-sm: var(--qc-radius-small)" in src, "tokens.css 兼容层 r 应保留"
