# -*- coding: utf-8 -*-
"""6.1.3 (C4): 移动端 PWA 补强 — 安装引导条 + 触控命中区 44px"""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
TOKENS = (ROOT / "frontend" / "css" / "tokens.css").read_text(encoding="utf-8")
COMPONENTS = (ROOT / "frontend" / "css" / "components.css").read_text(encoding="utf-8")
INSTALL = (ROOT / "frontend" / "js" / "install-prompt.js").read_text(encoding="utf-8")


def test_install_prompt_handlers_present():
    assert "beforeinstallprompt" in INSTALL
    assert "appinstalled" in INSTALL
    assert "prompt()" in INSTALL


def test_install_prompt_dismiss_memory():
    assert "qc_install_dismissed" in INSTALL


def test_install_bar_styles_present():
    assert ".qc-install-bar" in COMPONENTS
    assert ".qc-install-btn" in COMPONENTS
    assert "qc-page-enter" in COMPONENTS


def test_coarse_pointer_hit_target_44px():
    seg = TOKENS[TOKENS.index("@media (pointer: coarse)"):]
    assert "--qc-hit-min: 44px" in seg, "触控命中区下限未定义为 44px (WCAG 2.5.8)"
