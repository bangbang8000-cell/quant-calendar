# -*- coding: utf-8 -*-
"""6.2.1 (F2): 字号标尺门禁 — 全站 font-size 硬编码清零

方案: tokens 补 --qc-font-size-lg2(20px) / --qc-font-size-2xl(32px) 档,
CSS/JS 模板中 font-size 一律走 token。硬编码行需带 qc-allow-hardcode 白名单注释。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

# CSS 中 font-size: <n>px 硬编码 (允许 qc-allow-hardcode 行)
_CSS_HARD = re.compile(r"font-size:\s*\d+px")
# JS 模板内联 :style fontSize:'<n>px' 硬编码
_JS_HARD = re.compile(r"fontSize:\s*'(\d+)px'")


def _walk(root, exts):
    for dirpath, _dirs, files in os.walk(root):
        for fn in files:
            if any(fn.endswith(e) for e in exts):
                yield os.path.join(dirpath, fn)


def _hard_lines(path, rx):
    hits = []
    with open(path, encoding="utf-8", errors="ignore") as f:
        for i, line in enumerate(f, 1):
            if rx.search(line) and "qc-allow-hardcode" not in line:
                hits.append((i, line.strip()[:100]))
    return hits


def test_css_font_size_hardcoded_cleared():
    """frontend/css/*.css 无 font-size 硬编码 (qc-allow-hardcode 白名单除外)"""
    all_hits = []
    for p in _walk(os.path.join(FRONTEND, "css"), (".css",)):
        all_hits += [(os.path.relpath(p, FRONTEND), i, l) for i, l in _hard_lines(p, _CSS_HARD)]
    assert not all_hits, f"CSS 硬编码 font-size {len(all_hits)} 处: {all_hits[:8]}"


def test_js_inline_font_size_cleared():
    """frontend/js 模板内联 fontSize:'<n>px' 清零 (token 替代)"""
    all_hits = []
    for p in _walk(os.path.join(FRONTEND, "js"), (".js",)):
        all_hits += [(os.path.relpath(p, FRONTEND), i, l) for i, l in _hard_lines(p, _JS_HARD)]
    assert not all_hits, f"JS 内联硬编码字号 {len(all_hits)} 处: {all_hits[:8]}"


def test_scale_tokens_available():
    """tokens 应提供 20px(lg2) / 32px(2xl) 档"""
    tokens = open(os.path.join(FRONTEND, "css", "tokens.css"), encoding="utf-8").read()
    assert "--qc-font-size-lg2: 20px" in tokens, "应有 lg2=20px 标尺"
    assert "--qc-font-size-2xl: 32px" in tokens, "应有 2xl=32px 标尺"
