#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v7.25 FR-9: 研究域样式门禁

约束（PRD FR-9）：
- 内联 style 数量 ≤ 5，且只允许主题派生色（禁止硬编码 #hex / rgb()）
- 原生 <table> 数量不得超过基线（禁止新增 bt-* 原生表）
- 研究域组件只允许一套容器类（禁止新增 bt- 前缀别名类）

用法: python scripts/ci/check_research_style.py
"""
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
RESEARCH = ROOT / "frontend" / "js" / "components" / "research"

INLINE_LIMIT = 5
# 原生表格基线：FR-9 起禁止新增（存量 3 处待在后续视觉批次迁移为 el-table）
NATIVE_TABLE_BASELINE = 3
# 统一页面头：研究域 6 个内联子页必须使用 qc-page-head
PAGE_HEAD_MIN = 6

HARDCODED_COLOR = re.compile(r"style=\"[^\"]*(#[0-9a-fA-F]{3,8}\b|rgba?\(|hsla?\()")
BT_ALIAS = re.compile(r"(?<![A-Za-z0-9_-])bt-[A-Za-z0-9_-]+")
# 存量别名类白名单：禁止新增，存量待后续视觉批次迁移为统一面板类
BT_ALIAS_BASELINE = {"bt-compare-table"}


def scan():
    """返回 (violations, stats)。"""
    files = sorted(RESEARCH.glob("*.js"))
    violations = []
    inline_total = 0
    table_total = 0
    page_head_total = 0
    for f in files:
        text = f.read_text(encoding="utf-8")
        inline_total += text.count('style="')
        table_total += len(re.findall(r"<table\b", text))
        page_head_total += text.count("<qc-page-head")
        for m in HARDCODED_COLOR.finditer(text):
            line = text[:m.start()].count("\n") + 1
            violations.append(f"{f.name}:{line} 内联硬编码色值: {m.group(0)[:60]}")
        for m in BT_ALIAS.finditer(text):
            if m.group(0) in BT_ALIAS_BASELINE:
                continue
            line = text[:m.start()].count("\n") + 1
            violations.append(f"{f.name}:{line} 新增 bt-* 别名类: {m.group(0)}")
    if inline_total > INLINE_LIMIT:
        violations.append(f"研究域内联 style {inline_total} 处 > {INLINE_LIMIT}")
    if table_total > NATIVE_TABLE_BASELINE:
        violations.append(f"研究域原生 <table> {table_total} 个 > 基线 {NATIVE_TABLE_BASELINE}")
    if page_head_total < PAGE_HEAD_MIN:
        violations.append(f"使用 qc-page-head 的页面 {page_head_total} 个 < 应统一 {PAGE_HEAD_MIN} 个")
    return violations, {"files": len(files), "inline": inline_total,
                        "tables": table_total, "page_head": page_head_total}


def main():
    violations, stats = scan()
    print(f"[研究域样式门禁] 文件={stats['files']} 内联style={stats['inline']} 原生table={stats['tables']} 统一头={stats['page_head']}")
    if violations:
        for v in violations:
            print("  ✗ " + v)
        return 1
    print("  ✓ 通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())
