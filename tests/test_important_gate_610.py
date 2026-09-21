# -*- coding: utf-8 -*-
"""
6.1.0 (T-6.1.0.3): !important 收敛门禁 — 禁止「直写色值 + !important」

背景: V6.11 (需求轮2·批次4) 已删除 8 条「!important 直写属性」双源规则,
按钮/标签配色统一由 --el-button-*/--state-*-soft 变量驱动。
本门禁防止死灰复燃: 含 !important 的声明不得携带 var() 之外的色值字面量
(#hex / rgb / rgba / hsl / hsla)。

豁免:
- 不含色值的 !important (display:none / flex-wrap / 内嵌化覆盖等) 不受限
- var() 内的色值 (变量定义处) 不受限
- 行注释内的色值不受限
"""
import os
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
CSS_DIR = ROOT / "frontend" / "css"

_VAR_FREE = re.compile(r"var\([^)]*\)")
_HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
_FUNC = re.compile(r"rgba?\(|hsla?\(")
_COMMENT = re.compile(r"/\*.*?\*/")


def _literal_colors(line: str) -> list:
    """var() 之外的色值字面量 (注释已剔除)。"""
    no_comment = _COMMENT.sub("", line)
    stripped = _VAR_FREE.sub("", no_comment)
    hits = _HEX.findall(stripped) + _FUNC.findall(stripped)
    return hits


def _iter_css():
    for p in sorted(CSS_DIR.glob("*.css")):
        for i, line in enumerate(p.read_text(encoding="utf-8").splitlines(), 1):
            yield p.name, i, line


def test_no_hardcoded_color_with_important():
    offenders = []
    for name, i, line in _iter_css():
        if "!important" not in line:
            continue
        hits = _literal_colors(line)
        if hits:
            offenders.append(f"{name}:{i} {line.strip()[:90]}  ← {hits}")
    assert not offenders, (
        f"发现「直写色值 + !important」{len(offenders)} 处 (应改为变量驱动):\n  " + "\n  ".join(offenders[:15]))


def test_important_uses_vars_when_color_related():
    """含色值的 !important 声明必须引用 var() (变量驱动)。"""
    suspicious = []
    for name, i, line in _iter_css():
        if "!important" not in line:
            continue
        hits = _literal_colors(line)
        if hits and "var(" not in line:
            suspicious.append(f"{name}:{i} {line.strip()[:90]}")
    assert not suspicious, (
        f"含色值但不引用 var() 的 !important 声明 {len(suspicious)} 处:\n  " + "\n  ".join(suspicious[:15]))
