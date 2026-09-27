# -*- coding: utf-8 -*-
"""6.1.1 (A5): 空态/错误态巡检门禁 — 全站 v-for 列表必须有空态处理

口径: 每个含 v-for 渲染列表的页面/弹窗组件, 其模板必须包含至少一种空态处理:
  - 显式空态分支: v-if="...length === 0" / v-if="!...length" / v-if="... === 0"
  - qc-state-panel / qc-empty / qc-error 组件或类
  - 显式 empty/空态 文案标记
对未覆盖组件输出清单 (作为巡检清单, 可人工逐项确认后补)。
"""
import os
import re
import sys
from pathlib import Path

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

ROOT = Path(__file__).resolve().parent.parent
COMPONENTS = ROOT / "frontend" / "js" / "components"

_VFOR = re.compile(r"v-for=")
_EMPTY_PATTERNS = (
    r"length\s*===?\s*0",
    r"length\s*===\s*0\)",
    r"![\w.]*\.length",
    r"qc-state-panel",
    r"qc-empty",
    r"qc-error",
    r"empty",
    r"空",
    r"无数据",
    r"暂无",
)
_COMPILED = [re.compile(p) for p in _EMPTY_PATTERNS]

# 豁免清单 (6.1.1 A5 巡检结论): 静态清单/容器组件, 空态由调用方或静态数据保证
#   virtual-list.js   — 通用虚拟列表渲染器, 空态由上层 v-if 控制 (容器非页面)
#   shortcut-help.js  — 静态快捷键清单, 恒非空
#   menu-config.js    — 菜单配置弹窗, 内置菜单恒非空
#   global-header.js  — 顶栏导航, 菜单恒非空
#   sidebar.js        — 侧栏导航, 菜单恒非空
EXPLICIT_SKIP = {
    "frontend/js/components/virtual-list.js",
    "frontend/js/components/dialogs/shortcut-help.js",
    "frontend/js/components/dialogs/menu-config.js",
    "frontend/js/components/global-header.js",
    "frontend/js/components/sidebar.js",
}


def _iter_templates():
    for p in sorted(COMPONENTS.rglob("*.js")):
        rel = p.relative_to(ROOT).as_posix()
        # 6.3.0 结构分治: 页面模板下沉子目录 — 重建页源码（模板引用还原为字面量）
        src = page_source.read(rel)
        if "template:" not in src or _VFOR.search(src) is None:
            continue
        # 提取 template: `...` 内容 (UMD 组件)
        m = re.search(r"template:\s*`([^`]*)`", src, re.DOTALL)
        if not m:
            continue
        yield rel, m.group(1)


def test_all_vfor_components_have_empty_state():
    uncovered = []
    for rel, tmpl in _iter_templates():
        if rel in EXPLICIT_SKIP:
            continue
        if not any(p.search(tmpl) for p in _COMPILED):
            uncovered.append(rel)
    assert not uncovered, (
        f"以下组件含 v-for 列表但未检测到空态处理 ({len(uncovered)} 个, 巡检清单):\n  "
        + "\n  ".join(uncovered))


def test_component_scan_scope_not_empty():
    """巡检至少覆盖到主页面组件 (防止扫描范围失效)。"""
    rels = [rel for rel, _ in _iter_templates()]
    assert any("strategies-page" in r for r in rels), "扫描未命中策略总览组件"
    assert any("calendar-page" in r for r in rels), "扫描未命中日历组件"
