# -*- coding: utf-8 -*-
"""V6.9.3 (PRD-v6.9.3): 存量优化整改契约测试 — 菜单序重排 / 主题共享 / 股票列表增强 / 功能配置精简 / R1 清理 / sxsc 重建 / 版本。

覆盖 TC-6.9.3.01~.07、.21、.25~.28 的可静态断言部分 (视觉/性能项以浏览器实测为准)。
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


def test_system_subpages_order():
    """TC-6.9.3.01: 系统配置二级菜单序 — config→feature→autoeval→datasource→user→about→notification"""
    src = _read_f("js/app-logic.js")
    m = re.search(r"subPages: (\[[^\]]*\]), guestSubPages", src)
    assert m, "system 菜单定义缺失"
    order = m.group(1)
    seq = [x.strip("'") for x in re.findall(r"'([^']+)'", order)]
    assert seq == ['config', 'feature', 'autoeval', 'datasource', 'user', 'about', 'notification'], \
        f"系统配置子页顺序应为 config→feature→autoeval→datasource→user→about→notification, 当前 {seq}"


def test_ops_menu_before_system():
    """TC-6.9.3.02: 系统状态(ops) 一级菜单位于系统配置(system) 之前"""
    src = _read_f("js/app-logic.js")
    i_ops = src.index("{ key: 'ops'")
    i_sys = src.index("{ key: 'system'")
    assert i_ops < i_sys, "ops 菜单应位于 system 之前"


def test_research_menu_constant():
    """TC-6.9.3.26: 策略研究菜单恒显 — researchMenuEnabled 过滤已移除"""
    src = _read_f("js/app-logic.js")
    assert "researchMenuEnabled.value" not in src, "菜单过滤不应再引用 researchMenuEnabled"
    page = _read_f("js/components/research-page.js")
    assert "!researchMenuEnabled" not in page, "research-page 不应有研究开关占位"


def test_stocklist_consensus_props():
    """TC-6.9.3.05/06/07: StockList 支持共识徽章/进度条/价格/虚拟滚动/+N 折叠"""
    src = _read_f("src/components/common/StockList.vue")
    for prop in ("showConsensus", "showPrice", "virtual", "copyCode"):
        assert f"{prop}:" in src, f"StockList 应含 {prop} prop"
    assert "displayTags" in src and "qc-stock-badge" in src, "应含标签折叠与共识徽章渲染"
    assert "qc-virtual-list" in src, "应支持虚拟滚动分支"
    # 调用点: TOP5 启用 show-consensus/show-price; 共识榜虚拟; 日历池统一组件
    sp = _read_f("js/components/strategies-page.js")
    assert "show-consensus" in sp and "show-price" in sp, "TOP5/共识榜应启用共识+价格"
    cal = _read_f("js/components/calendar-page.js")
    assert "qc-stock-list" in cal and "copy-code" in cal, "日历股票池应统一 StockList"


def test_consensus_joins_price():
    """TC-6.9.3.04: 后端 consensus join 行情补 price/change_pct (无行情降级不报错)"""
    src = _read_f("../backend/data_parser.py") if False else _read_b("data_parser.py")
    assert "from market_cache import get_market_daily" in src, "consensus 应 join 行情缓存"
    assert "'price'" in src and "'change_pct'" in src, "应输出 price/change_pct 字段"


def test_theme_shared_state():
    """TC-6.9.3.15/16: 主题状态全局共享 — app-logic 暴露 themeHue/themeMode/hueColor; system-page 复用"""
    app = _read_f("js/app-logic.js")
    for token in ("themeHues", "themeHueNames", "themeHue", "themeMode", "hueColor", "hueName"):
        assert token in app, f"app-logic 应暴露 {token}"
    sys = _read_f("js/components/system-page.js")
    assert "state.themeHues" in sys and "state.changeThemeHue" in sys, "system-page 应复用全局主题状态"
    hdr = _read_f("src/components/Header.vue")
    assert "palette" in hdr and "pickThemeHue" in hdr and "themeHues" in hdr, "Header 应含主题面板(色板+模式)"


def test_bell_panel_wired():
    """TC-6.9.3.12/13: 铃铛面板 — @click + /api/alerts/history + 跳转通知中心"""
    hdr = _read_f("src/components/Header.vue")
    assert "toggleBell" in hdr and "/api/alerts/history" in hdr, "铃铛应绑定点击并拉取投递历史"
    assert "goNotificationCenter" in hdr and "'system', 'notification'" in hdr, "面板应含前往通知中心"


def test_navmode_panel_opaque():
    """TC-6.9.3.14: 导航形态面板不透明 — qc-navmode-menu 有背景/边框/阴影"""
    css = _read_f("css/header.css")
    m = re.search(r"\.qc-navmode-menu\s*\{([^}]*)\}", css)
    assert m, "应定义 .qc-navmode-menu 面板样式"
    block = m.group(1)
    assert "var(--qc-popover)" in block, "面板背景应为不透明 popover 色"


def test_shortterm_prefetch_and_lru():
    """TC-6.9.3.17/18: 短线复盘并行预取 + 缓存 LRU 上限"""
    src = _read_f("js/components/shortterm-page.js")
    assert "prefetchShortterm" in src, "应含并行预取函数"
    assert "CACHE_MAX" in src and "50" in src, "应含缓存容量上限 50"
    assert "prefetchShortterm();" in src, "onMounted 应触发预取"
    # 后端 overview 聚合并行化
    st = _read_b("api/v1/shortterm.py")
    assert "ThreadPoolExecutor" in st, "overview 应并行构建"


def test_r1_purge():
    """TC-6.9.3.20: DeepSeek R1 清理 — _purge_r1 存在且默认模型已更新"""
    src = _read_b("ai_eval/_models.py")
    assert "_purge_r1" in src, "应含 R1 清理迁移函数"
    assert "'r1' in key_l" in src, "vendor_key 含 r1 应过滤"
    ai = _read_f("js/ai.js")
    assert "deepseek-v4-flash" in ai and "deepseek-chat" not in ai.replace("v4-flash", ""), \
        "ai.js 默认模型应更新为 deepseek-v4-flash"
    auth = _read_f("js/app-logic/auth.js")
    assert "aiModel: 'deepseek-v4-flash'" in auth, "向导默认模型应更新"


def test_sxsc_rebuild_on_test():
    """TC-6.9.3.22/23/24: sxsc 测试 — 客户端缺失即时重建 + 10s 超时 + 前端先保存"""
    mgr = _read_b("data_sources/_manager.py")
    assert "get_api(token, timeout=10, env='prd')" in mgr, "测试应使用独立 10s 超时重建客户端"
    assert "未配置 Token" in mgr, "应含未配置 token 分类提示"
    sysjs = _read_f("js/system.js")
    assert "cfg._editing" in sysjs and "saveDatasourceConfig" in sysjs, "解锁编辑态应先保存再测试"


def test_version_bumped():
    """TC-6.9.3.28: 版本号提升 (随发布迭代: 6.9.3 → 6.9.4)"""
    main = _read_b("main_new.py")
    assert 'APP_VERSION = "6.9.4"' in main, "APP_VERSION 应为 6.9.4"
