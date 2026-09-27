# -*- coding: utf-8 -*-
"""6.3.1 (T-6.3.1.4): 无障碍收尾门禁 — 列表角色/选中语义 + 焦点可见性复验

覆盖三件事：

1. **列表角色**：``qc-virtual-list`` 只渲染可视区行，DOM 行数与数据量不等，
   必须按 WAI-ARIA 虚拟化列表惯例给出 ``role=list`` / ``role=listitem``
   与 ``aria-setsize`` / ``aria-posinset``（否则读屏播报「仅 N 条」）。
2. **选中语义**：可选中列表的当前项必须暴露 ``aria-current``（行本身是
   ``role=button``，不是 option，故用 aria-current 而非 aria-selected）；
   自选股勾选框必须暴露 ``role=checkbox`` + ``aria-checked`` + 键盘可切换。
3. **焦点可见性复验**：全局 ``:focus-visible`` 焦点环仍在，可点行须键盘可达
   （``role=button`` + ``tabindex=0``），否则焦点环无处可显。
"""
import os
import re
import sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import page_source  # noqa: E402

# 长列表（虚拟滚动）→ 必须有可读名称（6.3.1.5 起经 t(key) 渲染，五语可播报）
VLIST_NAMES = [
    ("js/components/shortterm/view-part1.js", "shortterm-date-items", "a11y.shorttermDateList"),
    ("js/components/research/view-part2.js", "market-review-date-items", "a11y.reviewDateList"),
    ("js/components/research/view-part2.js", "market-review-list-vlist", "a11y.dailyReviewList"),
    ("js/components/ai/view-part2.js", "watchlist-vlist", "a11y.watchlistList"),
]

# 可选中列表的当前项 → aria-current 绑定表达式（须与被选状态同源）
SELECTED_ROWS = [
    ("js/components/shortterm/view-part1.js",
     ":aria-current=\"d.date === shortDate ? 'true' : null\""),
    ("js/components/research/view-part2.js",
     ":aria-current=\"item.date === selectedReviewDate ? 'true' : null\""),
    ("js/components/ai/view-part2.js",
     ":aria-current=\"(detailSplitEnabled && stockDetail && stockDetail.stock === stock.code) ? 'true' : null\""),
]

# 键盘可达的可点行：role=button + tabindex=0
KEYBOARD_ROWS = [
    ("js/components/shortterm/view-part1.js", "shortterm-date-item"),
    ("js/components/research/view-part2.js", "market-review-date-item"),
    ("js/components/research/view-part2.js", "market-review-row"),
]


def _read(rel):
    return page_source.read(rel)


def _vlist_tags(src):
    """源码中全部 qc-virtual-list 开标签"""
    return re.findall(r"<qc-virtual-list[^>]*>", src)


def _tag_with_class(src, cls):
    for tag in _vlist_tags(src):
        m = re.search(r'class="([^"]*)"', tag)
        if m and cls in m.group(1).split():
            return tag
    return None


# ─── 列表角色 ──────────────────────────────────────────────────

def test_virtual_list_structural_roles():
    """qc-virtual-list 须给 role=list/listitem + setsize/posinset + 可读名 prop"""
    src = _read("js/components/virtual-list.js")
    assert 'role="list"' in src, "虚拟列表容器缺 role=list"
    assert 'role="listitem"' in src, "虚拟列表行缺 role=listitem"
    assert ':aria-setsize="items.length"' in src, "缺 aria-setsize（读屏无法播报总条数）"
    assert ":aria-posinset=\"startIndex + i + 1\"" in src, "缺 aria-posinset（读屏无法播报行序号）"
    assert "ariaLabel" in src, "缺 ariaLabel prop（列表可读名）"


def test_virtualized_lists_have_accessible_name():
    """四处长列表的虚拟滚动容器必须带可读名（经 t(key) 绑定，键须在五语齐备）"""
    import test_i18n_631 as i18n631
    for rel, cls, key in VLIST_NAMES:
        tag = _tag_with_class(_read(rel), cls)
        assert tag is not None, "%s: 未找到 class 含 %s 的 qc-virtual-list" % (rel, cls)
        expect = ":aria-label=\"t('%s')\"" % key
        assert expect in tag, (
            "%s: %s 缺可读名 %s，实际: %s" % (rel, cls, expect, tag.strip()))
        i18n631.assert_key_all_locales(key)


# ─── 选中语义 ──────────────────────────────────────────────────

def test_selected_rows_expose_aria_current():
    """当前选中行须暴露 aria-current（与被选状态同源表达式）"""
    for rel, expr in SELECTED_ROWS:
        src = _read(rel)
        assert expr in src, "%s: 选中行缺 %s" % (rel, expr)


def test_watchlist_checkbox_is_accessible():
    """自选股勾选框：role=checkbox + aria-checked + tabindex + 键盘可切换"""
    src = _read("js/components/ai/view-part2.js")
    m = re.search(r'<div class="watchlist-checkbox"[^>]*>', src, re.S)
    assert m, "watchlist-checkbox 元素未找到"
    tag = m.group(0)
    assert 'role="checkbox"' in tag, "勾选框缺 role=checkbox"
    assert ":aria-checked=" in tag, "勾选框缺 aria-checked（读屏无法播报勾选态）"
    assert 'tabindex="0"' in tag, "勾选框缺 tabindex=0（键盘不可达）"
    assert "@keydown.enter.prevent" in tag and "@keydown.space.prevent" in tag, (
        "勾选框缺回车/空格键盘切换")
    assert ":aria-label=" in tag, "勾选框缺 aria-label（读屏无法辨识勾选对象）"
    # 保留原有鼠标行为
    assert '@click.stop="toggleSelectWatchlist(stock.code)"' in tag


# ─── 焦点可见性复验 ────────────────────────────────────────────

def test_focus_visible_ring_global():
    """全局 :focus-visible 焦点环仍在（2px 主色 + offset），键盘导航可见焦点"""
    themes = _read("css/themes.css")
    m = re.search(r":focus-visible\s*\{([^}]*)\}", themes)
    assert m, "全局 :focus-visible 规则缺失 —— 键盘用户看不到焦点"
    block = m.group(1)
    assert "outline:" in block and "var(--primary-color)" in block, "焦点环描边缺失"
    assert "outline-offset" in block, "焦点环 offset 缺失"


def test_interactive_rows_are_keyboard_focusable():
    """可点行须 role=button + tabindex=0（焦点环的前提是元素可聚焦）"""
    for rel, cls in KEYBOARD_ROWS:
        src = _read(rel)
        m = re.search(r'<div class="%s"[^>]*>' % re.escape(cls), src, re.S)
        assert m, "%s: %s 行元素未找到" % (rel, cls)
        tag = m.group(0)
        assert 'role="button"' in tag and 'tabindex="0"' in tag, (
            "%s: %s 行须 role=button + tabindex=0，实际: %s" % (rel, cls, tag.strip()))


def test_icon_scan_covers_split_fragments():
    """图标按钮扫描面须覆盖 6.3.0 拆分后的 components/<域>/ 片段（无盲区）"""
    import test_accessibility2 as a11y
    count, bad = a11y._scan_icon_only_buttons()
    assert count >= 40, "扫描面疑似漏掉拆分子目录（实际仅 %d 个组件文件）" % count
    assert not bad, "纯图标按钮缺 aria-label:\n" + "\n".join(bad)
    # 至少要扫到拆分后的域片段目录
    nested = [f for f in a11y._component_files()
              if os.path.dirname(f) not in (os.path.join(FRONTEND, "js", "components"),)]
    assert nested, "未扫到任何拆分子目录片段"