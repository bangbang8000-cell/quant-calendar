# -*- coding: utf-8 -*-
"""6.1.3 (C3): 动效打磨 — 页面过渡 + 系统减动效降级 (WCAG 2.3.3)"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS = (ROOT / "frontend" / "css" / "components.css").read_text(encoding="utf-8")


def test_page_enter_animation_defined():
    assert "qc-page-enter" in CSS
    assert "@keyframes qc-page-enter" in CSS
    assert "translateY(8px)" in CSS


def test_page_enter_applied_to_content():
    assert ".qc-work-area-content > *" in CSS


def test_reduced_motion_block_present():
    assert "@media (prefers-reduced-motion: reduce)" in CSS


def test_reduced_motion_disables_animations():
    seg = CSS[CSS.index("@media (prefers-reduced-motion: reduce)"):]
    assert "animation-duration: 0.01ms" in seg
    assert "transition-duration: 0.01ms" in seg
    assert "scroll-behavior: auto" in seg
