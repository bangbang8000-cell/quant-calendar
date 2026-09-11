# -*- coding: utf-8 -*-
"""V6.3 (TEST-PLAN 6.3 TC-6.3.3.x): 导航形态组件条件渲染与布局联动 — L3 门禁 (M2)"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")


def _read(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _norm(s):
    return re.sub(r"\s+", " ", s)


def test_sidebar_children_tree_only():
    """TC-6.3.3.2: tree 形态才渲染侧栏 chevron 与树状 children (subnav/toptab 侧栏仅一级)"""
    src = _norm(_read("src/components/Sidebar.vue"))
    assert "navMode === 'tree' && hasChildren(menu)" in src, \
        "chevron 应仅 tree 形态渲染"
    assert "navMode === 'tree' && hasChildren(menu) && expandedMenus[menu.key]" in src, \
        "树状 children 应仅 tree 形态渲染"


def test_subnav_subnav_only():
    """TC-6.3.3.1/2/3: 中栏 SubNav 仅 subnav 形态渲染 (tree/toptab 隐藏)"""
    src = _norm(_read("src/components/SubNav.vue"))
    assert "v-if=\"navMode === 'subnav'\"" in src, \
        "SubNav 根 aside 应带 v-if=\"navMode === 'subnav'\""


def test_main_content_margin_by_navmode():
    """TC-6.3.3.1/2/3: tree/toptab 左边距仅含侧栏; subnav 默认规则保留中栏宽度"""
    css = _read("css/nav.css")
    # 默认 (subnav): 含中栏宽度
    assert "var(--qc-sidebar-width) + var(--qc-subnav-width)" in css, \
        "subnav 默认 main-content 左边距应含中栏"
    # tree/toptab: 仅侧栏 (选择器列表以逗号连接, 用 [^{]* 吸收)
    for mode in ("tree", "toptab"):
        m = re.search(r"\[data-navmode=\"%s\"\] \.main-content[^{]*\{([^}]*)\}" % mode, css)
        assert m, "缺少 [data-navmode=%s] .main-content 规则" % mode
        block = m.group(1)
        assert "var(--qc-sidebar-width)" in block, "%s 形态左边距应仅含侧栏宽" % mode
        assert "var(--qc-subnav-width)" not in block, "%s 形态左边距不应含中栏宽" % mode
    # 中栏在 tree/toptab 隐藏
    m = re.search(r"\[data-navmode=\"(?:tree|toptab)\"\] \.qc-subnav-column\s*\{([^}]*)\}", css)
    assert m and "display: none" in m.group(1), "tree/toptab 应隐藏中栏 .qc-subnav-column"


def test_dynamic_tabs_removed_and_crumbs_in_tree():
    """TC-6.3.3.4 (V6.4): 动态页签已移除; 面包屑仅 tree 形态渲染 (subnav/toptab 由中栏/顶部标签承担)"""
    src = _norm(_read("src/components/Header.vue"))
    assert "qc-dynamic-tabs" not in src, "Header 不应再渲染动态页签"
    assert "qc-header-crumbs" in src, "Header 应含面包屑元素"
    assert "navMode === 'tree' && !isMobile" in src, "面包屑应仅 tree 形态展示"
    assert os.path.exists(os.path.join(FRONTEND, "src", "components", "TopTabs.vue")), \
        "顶部二级标签组件应保留"


def test_breakpoint_overrides_present():
    """平板/移动断点: tree/toptab 覆盖规则存在, 避免属性选择器高优先级导致溢出"""
    css = _read("css/nav.css")
    # 按 @media 分段, 找到含 data-navmode 覆盖的移动断点块
    for seg in re.split(r"@media ", css):
        if seg.startswith("(max-width: 767px)") and "[data-navmode=\"tree\"] .main-content" in seg:
            assert "[data-navmode=\"toptab\"] .main-content" in seg, \
                "移动端应覆盖 toptab 左边距"
            assert "margin-left: 0;" in seg, "移动端 tree/toptab 左边距应归零"
            break
    else:
        assert False, "移动端断点缺少 tree/toptab 左边距覆盖"


def test_header_renders_toptabs_only_in_toptab():
    """TC-6.3.3.3: toptab 形态 Header 渲染二级 tab (M5.1: 移动端隐藏由 picker 承担); 动态页签形态互斥
    V6.7.1 (F-6.7.9/OBS-4): 外包 template 门控 toptab, 无子页时兜底显示当前页名"""
    src = _norm(_read("src/components/Header.vue"))
    assert "navMode === 'toptab'" in src, "qc-top-tabs 应仅在 toptab 形态渲染"
    assert "qc-top-tabs v-if=\"hasToptabs\"" in src, "qc-top-tabs 应由 hasToptabs 门控"
    assert "hasToptabs" in src and "crumbRoot" in src, "无子页兜底应显示当前页名"
    assert "!isMobile" in src, "移动端应隐藏 qc-top-tabs (由二级下拉承担)"


def test_toptabs_registered_and_open_tab_driven():
    """TC-6.3.3.3: TopTabs 注册到 __quantComponents; 点击走 openTab (hash/Ctrl+Tab 联动)"""
    main_src = _read("src/main.js")
    assert "__quantComponents.TopTabs" in main_src, "TopTabs 应注册到 __quantComponents"
    tabs_src = _norm(_read("src/components/TopTabs.vue"))
    assert "name: 'qc-top-tabs'" in tabs_src, "TopTabs 组件 name 应为 qc-top-tabs"
    assert "state.openTab(currentPage.value, sp)" in tabs_src, \
        "TopTabs 点击应走 openTab (经 navigateTo 同步 hash)"
    assert "qc-top-tab-close" not in tabs_src, "TopTabs 不应含关闭按钮 (不可关闭)"
    assert "subPageNames" in tabs_src, "TopTabs label 应回退 subPageNames (中文显示)"


def test_toptab_style_rectangular():
    """TC-6.3.3.3: toptab 二级 tab 圆角矩形 (small), 与动态页签一致"""
    header = _read("css/header.css")
    m = re.search(r"\.qc-top-tabs \.qc-top-tab\s*\{([^}]*)\}", header)
    assert m, ".qc-top-tabs .qc-top-tab 规则缺失"
    assert "var(--qc-radius-small)" in m.group(1), "top-tab 圆角应为 small (6px 矩形)"
    assert "var(--qc-radius-full)" not in m.group(1), "top-tab 不应为胶囊"
