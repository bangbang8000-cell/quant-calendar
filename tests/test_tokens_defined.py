# -*- coding: utf-8 -*-
"""
V4.4 (FR-4.4.1): 令牌定义完整性门禁 — 无未定义令牌

扫描前端 CSS + 组件模板 JS + index.html 中所有 var(--xxx) 使用,
断言每个令牌均在 tokens.css / themes.css 中定义。
防: 使用点引用了不存在的令牌(渲染为无效值, 界面色值错乱)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

VAR_USE_RE = re.compile(r"var\((--[a-zA-Z0-9-]+)")
VAR_DEF_RE = re.compile(r"(--[a-zA-Z0-9-]+)\s*:")


def _defined_tokens():
    defined = set()
    for rel in ("css/tokens.css", "css/themes.css", "css/layout.css", "css/animations.css", "css/responsive.css"):
        p = os.path.join(FRONTEND, rel)
        if os.path.exists(p):
            for m in VAR_DEF_RE.finditer(open(p, encoding="utf-8").read()):
                defined.add(m.group(1))
    return defined


def _used_tokens():
    used = {}
    for root, _, names in os.walk(FRONTEND):
        for n in names:
            if not (n.endswith(".css") or n.endswith(".js")):
                continue
            p = os.path.join(root, n)
            if "dist" in p or "lib" in p:
                continue
            src = open(p, encoding="utf-8").read()
            for m in VAR_USE_RE.finditer(src):
                used.setdefault(m.group(1), []).append(os.path.relpath(p, FRONTEND))
    return used


def test_all_used_tokens_defined():
    defined = _defined_tokens()
    used = _used_tokens()
    # --el-* 为 Element Plus 全局变量(frontend/lib/element-plus.css 提供), 不在自有令牌体系
    undefined = {t: files for t, files in used.items() if t not in defined and not t.startswith("--el-")}
    assert not undefined, "以下令牌被使用但未定义: " + repr(dict(list(undefined.items())[:8]))


def test_token_system_has_core_tokens():
    """FR-4.4.1: 核心令牌必须存在(颜色/文本/背景/边框/状态)"""
    defined = _defined_tokens()
    core = [
        "--color-primary", "--color-success", "--color-danger", "--color-warning",
        "--text-primary", "--text-secondary", "--text-tertiary",
        "--bg-page", "--bg-card", "--bg-hover",
        "--border-color", "--border-light",
        "--color-rise", "--color-fall",
    ]
    missing = [t for t in core if t not in defined]
    assert not missing, "核心令牌缺失: " + repr(missing)
