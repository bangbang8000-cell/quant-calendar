# -*- coding: utf-8 -*-
"""
V4.6 (FR-4.6.2): 过渡动画令牌化门禁
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CSS_DIR = os.path.join(BASE, "frontend", "css")
FILES = ["tokens.css", "themes.css", "layout.css", "animations.css", "responsive.css"]
TRANS_RE = re.compile(r"transition(?:-[a-z]+)?:\s*([^;{]+)")
PROP_RE = re.compile(r"([a-z0-9-]+)\s+(?:\.2s|0\.2s)\s*(ease(?:-out)?)?")


def _css():
    text = ""
    for f in FILES:
        p = os.path.join(CSS_DIR, f)
        if os.path.exists(p):
            text += open(p, encoding="utf-8").read() + chr(10)
    return text


def test_transition_uses_tokens_or_standard():
    css = _css()
    bad = []
    for m in TRANS_RE.finditer(css):
        line_start = css.rfind(chr(10), 0, m.start()) + 1
        line = css[line_start:m.start()]
        if line.strip().startswith("--"):
            continue  # 令牌定义行
        t = m.group(1).strip()
        if "var(--" in t or "0.01ms" in t:
            continue
        # 每段属性都必须 <prop> 0.2s [ease(-out)?]
        ok = True
        for seg in t.split(","):
            seg = seg.strip()
            if not PROP_RE.fullmatch(seg):
                ok = False
                break
        if ok:
            continue
        bad.append(t[:60])
    assert not bad, "非标准过渡: " + str(sorted(set(bad))[:10])
