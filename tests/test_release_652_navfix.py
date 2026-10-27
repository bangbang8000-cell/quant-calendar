#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""6.5.2 (FR-653 收尾): 导航形态回归修复门禁

背景: 6.5.0 一级 7→5 合并后, 仍有 9 处旧坐标消费方未适配 members 结构:
  - toptab 形态 TopTabs 永不挂载 (hasToptabs 用旧 key===page 匹配)
  - 快捷键 1-5 切一级把成员 key 当旧 sub 传 (跳错坐标)
  - watch/workspace 子页默认值取菜单首成员 (可能属合并组其他旧页)
  - 命令面板 searchMenus/alternatives 漏成员
  - 菜单授权对话框显示 raw 成员 key
  - tree 形态中栏面包屑与顶栏重复
本文件锁定上述修复 (FR-653.3 形态 parity)。
"""
import json
import os
import re
import subprocess
import sys

import pytest

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FE = os.path.join(ROOT, "frontend")


def _read(rel):
    with open(os.path.join(FE, rel), "r", encoding="utf-8") as f:
        return f.read()


def _node(modules, expr):
    """node UMD 纯逻辑单测: modules 为 {全局名: 源文件路径}, expr 返回 JSON 字符串"""
    prelude = "var window = global;\n" + "".join(
        'window.%s = require(%s);\n' % (g, json.dumps(os.path.join(FE, p)))
        for g, p in modules.items()
    )
    script = prelude + "process.stdout.write(JSON.stringify((function(){" + expr + "})()));"
    r = subprocess.run(["node", "-e", script], capture_output=True, text=True, timeout=30)
    assert r.returncode == 0, f"node 执行失败: {r.stderr[:400]}"
    return json.loads(r.stdout)


# ── TC-652-01: toptab 形态 TopTabs 挂载 (hasToptabs activePages 反查) ──
def test_has_toptabs_activepages_lookup():
    src = _read("src/components/Header.vue")
    assert "activePages" in src, "hasToptabs 未按 activePages 反查一级"
    assert "(m.activePages || [m.key]).indexOf(page) >= 0" in src
    # hasToptabs 块内不再用旧精确匹配 (6.5.0 后 currentPage 为内部旧键,
    # m.key 为一级新键, 永不相等); 块外其他代码的 m.key === page 属合法用法
    m = re.search(r'const hasToptabs = computed\(\(\) => \{(.*?)\n    \}\)', src, re.S)
    assert m, "hasToptabs computed 未找到"
    assert "m.key === page" not in m.group(1)
    assert "menu.members && menu.members.length" in m.group(1)


# ── TC-652-02: 快捷键 1-5 切一级 — 首成员旧坐标直达 ──
def test_hotkey_first_member_coords():
    src = _read("js/app-logic/keys.js")
    assert "members" in src and "m0.page" in src and "m0.sub" in src, \
        "快捷键未走首成员旧坐标"
    # 不再把 subPages[0] (成员 key) 当 sub 传
    assert "navigateTo(page.key, page.subPages[0]" not in src


# ── TC-652-03: 进入一级页的默认子页 — activePages 反查 + 该页首成员 ──
def test_watch_default_sub_via_activepages():
    src = _read("js/app-logic/watch.js")
    assert "(m.activePages || [m.key]).indexOf(page) >= 0" in src
    assert "menu.members.find(x => x.page === page) || menu.members[0]" in src
    assert "menu.subPages[0]" not in src


# ── TC-652-04: 页签默认/清空兜底 — 只取该内部页首成员 ──
def test_workspace_default_tab_page_member():
    src = _read("js/app-logic/workspace.js")
    # 两处 (默认页签 + 关闭后清空兜底) 均按页首成员
    assert src.count("menu.members.find(mm => mm.page === page)") >= 1
    assert src.count("menu.members && menu.members.find(mm => mm.page === page)") >= 1
    assert "menu.subPages[0]" not in src


# ── TC-652-05: 命令面板 searchMenus — members 优先, 旧格式兼容 ──
def test_command_panel_search_menus_members():
    out = _node(
        {"__quantCommandPanel": "js/command-panel-core.js"},
        r"""
        var QCP = window.__quantCommandPanel;
        var members = [
          { key: 'overview', page: 'strategies', sub: 'overview' },
          { key: 'pool', page: 'calendar', sub: 'pool' },
        ];
        var defs = [{ key: 'workbench', name: '投研工作台', icon: 'x', members: members }];
        var names = { overview: '策略总览', pool: '选股池' };
        // 成员命中: 输出成员旧坐标 (page/sub), 供 pick 处 navigateTo(旧键, 旧sub)
        var r1 = QCP.searchMenus('选股池', defs, names);
        var ok1 = r1.length === 1 && r1[0].menuKey === 'calendar' && r1[0].subPage === 'pool'
                  && r1[0].label === '选股池';
        // 一级名命中: 输出首成员坐标
        var r2 = QCP.searchMenus('投研工作台', defs, names);
        var ok2 = r2.length >= 1 && r2[0].menuKey === 'strategies' && r2[0].subPage === 'overview';
        // 旧格式 (无 members, 单测/历史调用) 兼容不回归
        var r3 = QCP.searchMenus('总览', [{ key: 'strategies', name: '策略', subPages: ['overview'] }],
                                 { overview: '策略总览' });
        var ok3 = r3.length === 1 && r3[0].menuKey === 'strategies' && r3[0].subPage === 'overview';
        return { ok1: ok1, ok2: ok2, ok3: ok3 };
        """,
    )
    assert out == {"ok1": True, "ok2": True, "ok3": True}


def test_command_panel_alternatives_member_labels():
    src = _read("js/components/command-panel.js")
    assert "QuantNavMerge" in src and "memberLabel" in src, \
        "alternatives 建议词未走 memberLabel (subPageNames 键为旧 sub, 成员 key 查不到)"


# ── TC-652-06: 菜单授权对话框 — members 遍历 + memberLabel + 新键格式 ──
def test_menu_config_dialog_members():
    src = _read("js/components/dialogs/menu-config.js")
    assert "v-for=\"mm in (menu.members || [])\"" in src
    # 键保持 一级.成员key (与 nav-merge-core memberVisible 新键查询一致)
    assert "visible_sub_pages[menu.key + '.' + mm.key]" in src
    assert ":active-text=\"memberLabel(mm)\"" in src
    # setup 提供 memberLabel
    assert "const memberLabel = (mm)" in src


# ── TC-652-07: tree 形态中栏去重面包屑 (顶栏面包屑 + 侧栏树已承担) ──
def test_tree_mode_dedupe_breadcrumb_css():
    css = _read("css/layout.css")
    assert re.search(r'\[data-navmode="tree"\]\s+\.qc-page-head\s+\.qc-breadcrumb\s*\{\s*display:\s*none', css)
    # 仅藏面包屑, h1 页面标题保留
    assert css.count(".qc-page-h1") >= 1


# ── TC-652-08: MobileNav 底部一级 tab 首成员直达 ──
def test_mobilenav_gotab_first_member():
    src = _read("src/components/MobileNav.vue")
    assert "menu.members && menu.members[0]" in src
    assert "m0 ? m0.page : tab.key" in src


if __name__ == "__main__":
    sys.exit(pytest.main([__file__, "-q"]))
