# -*- coding: utf-8 -*-
"""V5.3.0 (T-5.3.2.5 / FR-5.3.2.5): 动效令牌统一测试

- 时长令牌 --duration-* 与缓动令牌 --easing-* 在 tokens.css 定义
- animations.css 的 transition/animation 引用令牌而非硬编码时长
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")

DUR_RE = re.compile(r"(--duration-[a-z0-9-]+)\s*:")
EASE_RE = re.compile(r"(--easing-[a-z0-9-]+)\s*:")


def _css(*names):
    text = ""
    for f in names:
        p = os.path.join(CSS_DIR, f)
        if os.path.exists(p):
            text += open(p, encoding="utf-8").read() + chr(10)
    return text


def test_duration_tokens_defined():
    """时长令牌族: 快/基/慢 三档"""
    css = _css("tokens.css")
    for name in ("--duration-fast", "--duration-base", "--duration-slow"):
        assert DUR_RE.search(css) and re.search(name + r"\s*:", css), \
            f"缺时长令牌 {name}"


def test_easing_tokens_defined():
    """缓动令牌族: 标准/进入/退出"""
    css = _css("tokens.css")
    for name in ("--easing-standard", "--easing-enter", "--easing-exit"):
        assert re.search(name + r"\s*:", css), f"缺缓动令牌 {name}"


def test_animations_reference_duration_tokens():
    """animations.css transition/animation 时长引用 --duration-* 令牌"""
    css = _css("animations.css")
    # transition: X var(--duration-base) ... 或 animation: ... var(--duration-slow) ...
    trans = re.findall(r"transition:\s*([^;]+)", css)
    anim = re.findall(r"animation(?:-[a-z]+)?:\s*([^;]+)", css)
    refs = " ".join(trans) + " " + " ".join(anim)
    assert "--duration-" in refs, "animations.css 应引用 --duration-* 令牌"


def test_no_hardcoded_transition_duration_in_animations():
    """animations.css 无硬编码 transition 时长 (如 0.25s/250ms 直写)"""
    css = _css("animations.css")
    hard = re.findall(r"transition(?:-[a-z]+)?:\s*[^;]*?\b(?:0\.\d+s|\d+ms)\b", css)
    hard += re.findall(r"(?<!var\(--)(?:0\.\d+s|\d+ms)\s*(?:ease|linear|cubic-bezier)", css)
    assert not hard, f"animations.css 硬编码动效时长: {hard[:5]}"
