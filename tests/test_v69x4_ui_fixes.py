# -*- coding: utf-8 -*-
"""V6.9.4 (PRD-v6.9.4): 存量问题整改契约测试 — 共识条移除 / EP CSS 对齐 / 导航面板精简 / 主题模式响应式 / 深色输入框 / 策略研究可诊断 / 宽度类收敛。

覆盖 TEST-PLAN-v6.9.4 的 L1/L2 可静态断言部分 (视觉/交互项以浏览器实测为准)。
"""
import os
import re

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
FRONTEND = os.path.join(BASE, "frontend")
BACKEND = os.path.join(BASE, "backend")


def _read_f(rel):
    p = os.path.join(FRONTEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


def _read_b(rel):
    p = os.path.join(BACKEND, *rel.split("/"))
    with open(p, encoding="utf-8") as f:
        return f.read()


# ─── F1 (A1): 移除共识度进度条 ─────────────────────────────

def test_stocklist_no_consensus_bar():
    """T1/T4: StockList 无进度条渲染, 保留共识文本与徽章"""
    src = _read_f("src/components/common/StockList.vue")
    assert "qc-stock-consensus-bar" not in src, "StockList 不应再含进度条容器"
    assert "qc-stock-consensus-fill" not in src, "StockList 不应再含进度条填充"
    assert "qc-stock-consensus" in src, "应保留共识文本元素"
    assert "qc-stock-badge" in src, "应保留 N 策略徽章"
    assert "% 共识" in src, "共识文本应含百分比与标签"


def test_components_css_no_consensus_bar():
    """T2: components.css 清理进度条规则"""
    css = _read_f("css/components.css")
    assert ".qc-stock-consensus-bar" not in css, "CSS 不应再含进度条容器规则"
    assert ".qc-stock-consensus-fill" not in css, "CSS 不应再含进度条填充规则"


# ─── F2 (A2): EP 样式表对齐 2.14.5 ─────────────────────────

def test_lib_ep_css_matches_node_modules():
    """T5: lib/element-plus.css 与 node_modules 2.14.5 字节一致"""
    lib = os.path.join(FRONTEND, "lib", "element-plus.css")
    mod = os.path.join(FRONTEND, "node_modules", "element-plus", "dist", "index.css")
    assert os.path.exists(mod), "node_modules element-plus css 缺失"
    with open(lib, encoding="utf-8") as f:
        a = f.read()
    with open(mod, encoding="utf-8") as f:
        b = f.read()
    assert a == b, "lib/element-plus.css 应与 node_modules 2.14.5 一致 (字节比对)"


def test_lib_ep_css_has_select_wrapper():
    """T6: lib css 含 .el-select__wrapper 基础规则 (EP 2.4+ DOM)"""
    css = _read_f("lib/element-plus.css")
    assert css.count("select__wrapper") >= 10, "lib css 应含 el-select__wrapper 基础规则"


def test_components_css_select_overrides_kept():
    """T7: 自有覆盖保留 — nowrap/省略/防拉伸/语义宽度"""
    css = _read_f("css/components.css")
    assert "flex-wrap: nowrap !important" in css, "应保留 nowrap 覆盖"
    assert ".el-select__selected-item" in css and "text-overflow: ellipsis" in css, "应保留选中项省略"
    assert ".qc-page-tools .el-select" in css and "flex: 0 0 auto" in css, "应保留防拉伸"
    for cls in ("w-select-xs", "w-select-sm", "w-select", "w-select-md", "w-select-lg", "w-100px"):
        assert "." + cls in css, f"应定义语义宽度类 .{cls}"


# ─── F3 (A3): 导航形态面板精简 ─────────────────────────────

def test_navmode_panel_simplified():
    """T10/T11: Header 移除描述行; header.css 无 desc 规则"""
    hdr = _read_f("src/components/Header.vue")
    assert "qc-navmode-item-desc" not in hdr, "Header 不应再渲染导航形态描述行"
    css = _read_f("css/header.css")
    assert ".qc-navmode-item-desc" not in css, "header.css 不应再含 desc 样式"
    assert ".qc-navmode-item-main" in css and "font-size: var(--qc-font-size-sm)" in css, "主标签字号应统一为 sm"


def test_navmode_panel_opaque_kept():
    """T12: 面板不透明背景保留 (通用块含 popover 背景)"""
    css = _read_f("css/header.css")
    m = re.search(r"\.qc-navmode-menu\s*\{([^}]*)\}", css)
    assert m, "应定义 .qc-navmode-menu 面板样式"
    assert "var(--qc-popover)" in m.group(1), "面板背景应为不透明 popover 色"
    # 收窄 min-width 覆盖应位于通用面板块之后
    assert css.index(".qc-navmode-menu { min-width: 200px; }") > css.index("var(--qc-popover)"), \
        "min-width 收窄覆盖应位于通用面板块之后"


# ─── F4 (A4): 主题模式响应式 ───────────────────────────────

def test_theme_mode_is_reactive_ref():
    """T13: themeMode 为响应式 ref 且 changeTheme 内同步"""
    src = _read_f("js/app-logic.js")
    assert re.search(r"const themeMode = ref\(", src), "themeMode 应为 ref"
    assert "themeMode.value = mode;" in src, "changeTheme 应同步 themeMode.value"


def test_theme_mode_shared():
    """T15: Header 与功能配置子页共用 state.themeMode"""
    hdr = _read_f("src/components/Header.vue")
    assert "state.themeMode" in hdr, "Header 应引用共享 themeMode"
    sys = _read_f("js/components/system-page.js")
    assert "state.themeMode" in sys, "功能配置子页应引用共享 themeMode"


# ─── F5 (A5): 深色输入框适配 ───────────────────────────────

def test_dark_input_vars_mapped():
    """T17: dark-pro 块含 --el-input-*/--el-fill-color-* 映射"""
    css = _read_f("css/themes.css")
    dark_block = css[css.index('[data-theme="dark-pro"] {'):]
    for token in ("--el-input-bg-color", "--el-fill-color-blank", "--el-input-text-color"):
        assert token in dark_block, f"dark-pro 块应映射 {token}"


def test_dark_input_wrapper_override():
    """T18/T19: dark-pro 覆盖 .el-input__wrapper/.el-select__wrapper 背景"""
    css = _read_f("css/themes.css")
    assert re.search(r'\[data-theme="dark-pro"\] \.el-input__wrapper', css), "应覆盖 .el-input__wrapper"
    assert re.search(r'\[data-theme="dark-pro"\] \.el-select__wrapper', css), "应覆盖 .el-select__wrapper"


# ─── F6 (B1): 策略研究可诊断性 + seq 修复 ──────────────────

def test_strategies_api_warn():
    """T21: /api/strategies 数据缺失返回 warn"""
    src = _read_b("api/v1/strategy_research.py")
    assert '"warn"' in src and "未找到策略持仓数据文件" in src, "后端应返回持仓数据缺失 warn"


def test_research_seq_fixed():
    """T23: 5 处 finally seq 引用均补声明"""
    src = _read_f("js/components/research-page.js")
    for fn in ("runFactorIc", "runFactorLayer", "runFactorDetail", "runResearchCompare", "exportResearchHistory"):
        assert fn + "() {\n        const seq = ++_reqSeq" in src, f"{fn} 应补 const seq 声明"
    # 无裸引用 (seq 声明数 ≥ finally 引用数)
    assert src.count("const seq = ++_reqSeq") >= src.count("if (seq === _reqSeq)"), "seq 声明数应不少于引用数"


def test_research_warn_ui():
    """T22: 前端处理 warn → 提示条 + 错误卡 detail"""
    src = _read_f("js/components/research-page.js")
    assert "strategiesWarn" in src, "前端应有策略 warn 状态"
    assert "strategiesErrorText" in src, "前端应有错误卡 detail 状态"
    assert "Array.isArray(res.strategies)" in src, "loadStrategies 应兼容 { strategies, warn } 结构"


# ─── F7 (B2): 宽度类收敛 ──────────────────────────────────

def test_select_no_legacy_width_classes():
    """T27: 模板 el-select 不再使用旧 w-* 类 (w-100px 别名除外)"""
    legacy = re.compile(r'<el-select[^>]*class="w-(?:90|100|110|120|140|160|180|200|220)"')
    for rel in (
        "js/components/ai-page.js",
        "js/components/research-page.js",
        "js/components/shortterm-page.js",
        "js/components/dialogs/add-user.js",
        "js/components/dialogs/auto-evaluate.js",
        "js/components/strategies-page.js",
        "js/components/system-page.js",
        "js/components/dialogs/setup-wizard.js",
    ):
        src = _read_f(rel)
        hits = legacy.findall(src)
        assert not hits, f"{rel} 仍有旧宽度类: {hits}"


# ─── C1: 版本号 ──────────────────────────────────────────

def test_version_bumped_694():
    """T32: APP_VERSION = 6.9.4"""
    assert 'APP_VERSION = "6.9.4"' in _read_b("main_new.py"), "APP_VERSION 应为 6.9.4"
