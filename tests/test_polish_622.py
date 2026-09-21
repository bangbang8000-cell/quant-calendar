# -*- coding: utf-8 -*-
"""6.2.2 (F7/F8/F9): 打磨门禁 — 动效 token 化 + 内联 hex 清零 + 徽标语义槽位

F7: 卡片入场/骨架 shimmer 时长走 --duration-* token;
F8: 模板内联 :style 无硬编码 hex (#xxx) — 颜色必须走 token (qc-allow-hardcode 豁免);
F9: qc-chip 语义变体走 --state-* 槽位 (不再用 --badge-* 旧体系)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    with open(os.path.join(FRONTEND, rel), encoding="utf-8") as f:
        return f.read()


def _walk(root, exts):
    for dirpath, _dirs, files in os.walk(root):
        for fn in files:
            if any(fn.endswith(e) for e in exts):
                yield os.path.join(dirpath, fn)


def test_card_enter_uses_token():
    """qc-card 入场动画时长走 token (非 0.35s 硬编码)"""
    css = _read("css/components.css")
    assert "animation: qc-card-enter var(--duration-base)" in css, "卡片入场应走 --duration-base"
    assert "qc-card-enter 0.35s" not in css, "不应残留 0.35s 硬编码"


def test_skeleton_duration_token():
    """骨架 shimmer 时长走 --duration-skeleton"""
    anim = _read("css/animations.css")
    assert "var(--duration-skeleton)" in anim, "skeleton-shimmer 应走 token"
    assert "skeleton-shimmer 1.5s" not in anim, "不应残留 1.5s 硬编码"


def test_chip_uses_state_slots():
    """qc-chip 语义变体走 --state-* 槽位"""
    css = _read("css/components.css")
    assert "--state-success-tint" in css and "--state-success-text" in css
    block = re.search(r"\.qc-chip\s*\{[^}]*\}", css)
    assert block, "应有 .qc-chip"
    # qc-chip 变体不再引用 --badge-* 旧体系
    chip_area = css[css.index(".qc-chip"):css.index(".qc-chip") + 1200]
    assert "--badge-" not in chip_area, "qc-chip 变体不应再用 --badge-*"


# ─── F8: 内联 hex 清零 ──────────────────────────────────

_HEX = re.compile(r"#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\b")


def test_inline_style_no_hardcoded_hex():
    """js 模板内联 :style 无硬编码 hex (qc-allow-hardcode 豁免)"""
    hits = []
    for p in _walk(os.path.join(FRONTEND, "js"), (".js",)):
        src = open(p, encoding="utf-8", errors="ignore").read()
        for i, line in enumerate(src.splitlines(), 1):
            # 仅在 :style 上下文行内检测
            if ":style" not in line and "style=\"" not in line and "style='" not in line:
                continue
            if _HEX.search(line) and "qc-allow-hardcode" not in line:
                hits.append((os.path.relpath(p, FRONTEND), i, line.strip()[:90]))
    assert not hits, f"内联 :style 硬编码 hex {len(hits)} 处: {hits[:8]}"
