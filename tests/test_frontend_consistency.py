# -*- coding: utf-8 -*-
"""
v3.16 (16.3-16.5 / FR-3.16.2, FR-3.16.3, FR-3.16.8): 前端一致性回归测试
- qcState 导出清单无重复键 / watch(currentPage) 唯一
- themes.js 纯数据模块 / apiFetch 无重复鉴权
- 行情涨跌色统一（--color-rise/fall，红涨绿跌，不混用 el-danger/success）
- 浅色主题 --text-tertiary 对比度达标（≥4.5:1）
- 无原生 confirm()；快捷键帮助面板与实现同步
"""
import os
import re

import pytest

FRONTEND_ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__))) + os.sep + "frontend"


def _read(rel: str) -> str:
    with open(os.path.join(FRONTEND_ROOT, rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def _read_backend(rel: str) -> str:
    with open(os.path.join(ROOT, "backend", rel.replace("/", os.sep)), encoding="utf-8") as f:
        return f.read()


def _extract_qcstate_keys(src: str) -> list:
    """提取 qcState 对象字面量的全部键（支持一行多键与 saveAiModels: saveAiVendors 别名）"""
    m = re.search(r"const qcState = \{([\s\S]*?)\n\s*\};[\s\S]*?return qcState", src)
    assert m, "qcState 块未找到"
    keys = []
    for line in m.group(1).split("\n"):
        line = line.strip()
        if not line or line.startswith("//"):
            continue
        for seg in line.split(","):
            seg = seg.strip()
            if not seg:
                continue
            name = seg.split(":")[0].strip()
            if re.fullmatch(r"[A-Za-z_$][\w$]*", name):
                keys.append(name)
    return keys


def test_qcstate_no_duplicate_keys():
    """FR-3.16.2 (16.3): qcState 导出清单无重复键（后者覆盖前者的历史遗留已清除）"""
    keys = _extract_qcstate_keys(_read("js/app-logic.js"))
    seen = set()
    dups = [k for k in keys if k in seen or seen.add(k)]
    assert not dups, f"qcState 存在重复键: {dups}"


def test_qcstate_key_count_stable():
    """FR-3.16.2/3.16.4/3.16.5: qcState 唯一键数量应为当前基线 459（v3.17.14 i18n +3:
    t/locale/changeLanguage；v3.17.12 健康面板 +2；v3.17.9 FR-3.17.9 历史懒加载/自选骨架屏 +5:
    aiHistoryTotal/aiHistoryLoadingMore/hasMoreAiHistory/loadMoreAiHistory/watchlistLoading；
    v3.17.7 实时化 FR-3.17.7 +12:
    realtimeQuotes/realtimeDegraded/realtimeWsState/connectRealtimeQuotes/
    disconnectRealtimeQuotes/quoteWarningFor/realtimeQuoteColor/realtimePriceText/
    realtimePctText/realtimeRatioText/REALTIME_DEGRADED_TEXT/REALTIME_FALLBACK_TEXT）"""
    keys = _extract_qcstate_keys(_read("js/app-logic.js"))
    assert len(set(keys)) == 459, f"qcState 唯一键数异常: {len(set(keys))} (期望 459)"


def test_watch_currentpage_single():
    """FR-3.16.2 (16.3): watch(currentPage) 仅一处（两处已合并为统一副作用编排）"""
    src = _read("js/app-logic.js")
    assert src.count("watch(currentPage") == 1, "watch(currentPage) 应合并为唯一"


def test_themes_module_authority():
    """FR-3.17.11.4: themes.js 为权威单一 applyTheme（定义 data-theme+持久化实现），
    app-logic/system.js 仅引用不重复实现主题应用函数体"""
    src = _read("js/themes.js")
    # 权威 applyTheme 定义在 themes.js（含 data-theme 设置 + quant_theme 持久化）
    assert "function applyTheme(theme)" in src, "themes.js 应定义权威 applyTheme"
    assert "setAttribute('data-theme'" in src, "themes.js applyTheme 应设置 data-theme"
    assert "localStorage.setItem('quant_theme'" in src, "themes.js applyTheme 应持久化 quant_theme"
    # 主题应用（data-theme/持久化）实现不得散落在其他文件
    for rel in ("js/app-logic.js", "js/system.js"):
        other = _read(rel)
        assert "setAttribute('data-theme'" not in other, f"{rel} 不应重复设置 data-theme"
        assert "localStorage.setItem('quant_theme'" not in other, f"{rel} 不应重复持久化 quant_theme"
    # app-logic 委托权威实现（引用 themes.applyTheme）
    app = _read("js/app-logic.js")
    assert "themes.applyTheme(theme)" in app, "app-logic 应委托 themes.applyTheme 权威实现"
    assert "function changeTheme" not in src, "themes.js 不应再含 changeTheme 重复实现"
    assert "window.__quantModules.themes" in src


def test_auth_injection_single_impl():
    """FR-3.17.11.3: 鉴权注入仅一份实现 —— core.js withAuthHeaders 唯一负责拼接
    Authorization；index.html 全局 fetch monkey-patch 仅委托，不重复实现"""
    core = _read("js/core.js")
    m = re.search(r"function withAuthHeaders[\s\S]*?\n  \}", core)
    assert m, "core.js 应定义唯一鉴权注入实现 withAuthHeaders"
    auth_impl = m.group(0)
    assert "Authorization" in auth_impl, "withAuthHeaders 应负责拼接 Authorization"
    assert "localStorage.getItem('quant_token')" in auth_impl, "withAuthHeaders 应读取 quant_token"
    # apiFetch 通过 withAuthHeaders 注入（不另起一套鉴权）
    assert "withAuthHeaders(url, options)" in core, "apiFetch 应调用 withAuthHeaders 统一注入"
    idx = _read("index.html")
    # index.html monkey-patch 只委托 withAuthHeaders，不内联拼接 Authorization
    assert "core.withAuthHeaders" in idx, "index.html 应委托 core.withAuthHeaders"
    m2 = re.search(r"window\.fetch = function[\s\S]*?originalFetch\.apply", idx)
    assert m2, "index.html monkey-patch 未找到"
    assert "withAuthHeaders(url, options)" in m2.group(0), "monkey-patch 应调用 withAuthHeaders"
    assert "options.headers['Authorization']" not in m2.group(0), "monkey-patch 不应重复拼接 Authorization"


def test_apifetch_no_token_duplication():
    """FR-3.17.11.3: apiFetch 经唯一 withAuthHeaders 注入 Authorization（不另起鉴权实现）"""
    src = _read("js/core.js")
    m = re.search(r"async function apiFetch[\s\S]*?^  \}\n", src, re.M)
    assert m, "apiFetch 函数未找到"
    # apiFetch 内不应自行拼 Authorization（应由 withAuthHeaders 统一注入）
    assert "options.headers['Authorization']" not in m.group(0), "apiFetch 不应重复拼接 Authorization"
    assert "withAuthHeaders(url, options)" in m.group(0), "apiFetch 应经 withAuthHeaders 注入鉴权"


# ─── v3.16 (16.5 / FR-3.16.3) 一致性回归 ────────────────────────────────

def test_rise_fall_tokens_defined():
    """FR-3.16.3 (16.5): 令牌层定义 --color-rise/--color-fall（行情涨跌专用）"""
    src = _read("css/tokens.css")
    assert "--color-rise:" in src, "tokens.css 应定义 --color-rise"
    assert "--color-fall:" in src, "tokens.css 应定义 --color-fall"
    assert "--color-down:" in src and "#2E7D32" in src, "--color-down 应为绿色（红涨绿跌）"


def test_quote_colors_no_el_success_danger():
    """FR-3.16.3 (16.5): 涨跌色不得再混用 --el-danger/--el-success（应使用 --color-rise/fall）"""
    for rel in ["js/components/dialogs/stock-detail.js", "js/components/dialogs/index-detail.js"]:
        src = _read(rel)
        # 涨跌幅/涨跌额/MA20 偏离 等行情涨跌语义不再用 el-danger/success
        assert "pct_chg >= 0 ? 'var(--el-" not in src, f"{rel} 涨跌色仍混用 el-danger/success"
        assert "var(--color-rise)" in src and "var(--color-fall)" in src, f"{rel} 应使用 --color-rise/fall"


def test_light_theme_tertiary_contrast():
    """FR-3.16.3 (16.5): 浅色主题 --text-tertiary 不再使用低对比度色（#999/#94a3b8/#a0947c）"""
    src = _read("css/themes.css")
    # 仅暗色主题(dark-pro)可保留浅色弱对比；浅色主题的 tertiary 必须加深
    for bad in ["--text-tertiary: #999", "--text-tertiary: #94a3b8", "--text-tertiary: #a0947c"]:
        assert bad not in src, f"浅色主题 --text-tertiary 仍含低对比度值: {bad}"


def test_no_native_confirm():
    """FR-3.16.3 (16.5): 全前端不再使用原生 confirm()（统一 ElMessageBox.confirm）"""
    hits = []
    for root, _dirs, files in os.walk(FRONTEND_ROOT):
        for fn in files:
            if not fn.endswith(".js") or fn.endswith(".min.js"):
                continue
            p = os.path.join(root, fn)
            with open(p, encoding="utf-8") as f:
                for i, line in enumerate(f, 1):
                    if re.search(r"\bconfirm\(", line) and "ElMessageBox" not in line:
                        hits.append(f"{os.path.relpath(p, FRONTEND_ROOT)}:{i}")
    assert not hits, f"仍存在原生 confirm() 调用: {hits}"


def test_shortcut_help_synced():
    """FR-3.16.3 (16.5): 快捷键帮助面板与 handleGlobalKeydown 实现同步（含方向键）"""
    src = _read("js/app-logic.js")
    # 帮助面板须含方向键条目（实现支持 ←/→/↑/↓ 日历导航）
    assert "← / →" in src and "↑ / ↓" in src, "帮助面板应补齐 ←/→/↑/↓ 方向键说明"
    # 面板条目数 = 6（Ctrl+K / Ctrl+/ / 1-5 / R / 左右 / 上下）
    m = re.search(r"const shortcutHelpItems = \[([\s\S]*?)\];", src)
    assert m, "shortcutHelpItems 未找到"
    count = len(re.findall(r"\{ keys:", m.group(1)))
    assert count == 6, f"帮助面板应含 6 条快捷键，当前 {count} 条"


# ─── v3.16 (16.6 / FR-3.16.4) 无障碍回归 ────────────────────────────────

def test_core_has_sanitize_html():
    """FR-3.16.4 (16.6): core.js 提供 sanitizeHtml（v-html 前端双保险）"""
    src = _read("js/core.js")
    assert "function sanitizeHtml" in src, "core.js 应实现 sanitizeHtml"
    assert "DOMParser" in src, "sanitizeHtml 应基于 DOM 白名单解析"


def test_all_vhtml_sanitized():
    """FR-3.16.4 (16.6): 全前端 v-html 使用点必须经 sanitizeHtml / renderMarkdown 消毒"""
    hits = []
    for root, _dirs, files in os.walk(FRONTEND_ROOT):
        for fn in files:
            if not (fn.endswith(".js") or fn == "index.html") or fn.endswith(".min.js"):
                continue
            p = os.path.join(root, fn)
            with open(p, encoding="utf-8") as f:
                for i, line in enumerate(f, 1):
                    if line.lstrip().startswith("//"):
                        continue  # 注释/定义说明行不参与扫描
                    if "v-html" in line and "sanitizeHtml(" not in line and "renderMarkdown(" not in line:
                        hits.append(f"{os.path.relpath(p, FRONTEND_ROOT)}:{i}")
    assert not hits, f"存在未消毒的 v-html 使用点: {hits}"


def test_keyboard_accessible_core():
    """FR-3.16.4 (16.6): 键盘可达核心助手 keyClick 存在且注入 qcState"""
    src = _read("js/app-logic.js")
    assert "function keyClick" in src, "app-logic 应提供 keyClick（Enter/Space 触发 click）"
    keys = _extract_qcstate_keys(src)
    assert "keyClick" in keys, "qcState 应注入 keyClick"
    assert "sanitizeHtml" in keys, "qcState 应注入 sanitizeHtml"


def test_keyboard_reach_in_components():
    """FR-3.16.4 (16.6): 关键交互组件具备 tabindex + Enter/Space 键盘触发"""
    checks = {
        "js/components/sidebar.js": ["tabindex=\"0\"", "keyClick", "aria-current"],
        "js/components/global-header.js": ["role=\"tab\"", "aria-selected", "keyClick"],
        "js/components/calendar-page.js": ["role=\"tab\"", "aria-selected", "keyClick"],
        "js/components/ai-page.js": ["tabindex=\"0\"", "keyClick"],
        "js/components/dialogs/stock-detail.js": ["renderMarkdown"],
        "js/components/dialogs/index-detail.js": ["sanitizeHtml"],
    }
    for rel, markers in checks.items():
        src = _read(rel)
        for m in markers:
            assert m in src, f"{rel} 缺少 {m}"


def test_focus_visible_global():
    """FR-3.16.4 (16.6): 全局键盘焦点可见性样式兜底"""
    src = _read("css/themes.css")
    assert ":focus-visible" in src, "themes.css 应提供 :focus-visible 全局 outline"
    assert "outline" in src[src.index(":focus-visible"):src.index(":focus-visible") + 120], \
        ":focus-visible 应含 outline"


def test_dialog_focus_management():
    """FR-3.16.4 (16.6): 弹窗焦点管理（打开前记忆 + 关闭后归还）"""
    src = _read("js/app-logic.js")
    assert "rememberDialogTrigger" in src, "应实现 rememberDialogTrigger"
    assert "restoreDialogFocus" in src, "应实现 restoreDialogFocus"
    assert "stockDetailVisible" in src and "indexDetailVisible" in src


# ─── v3.16 (16.7 / FR-3.16.5) 性能与错误态回归 ──────────────────────────

def test_ai_page_virtual_scroll():
    """FR-3.16.5 (16.7): ai-page 三列表（历史/问股/自选）接入 qc-virtual-list 虚拟滚动"""
    src = _read("js/components/ai-page.js")
    count = src.count("qc-virtual-list")
    # 自选列表 + 历史3视图 + 问股3视图 = 7 处
    assert count >= 7, f"ai-page 应 ≥7 处虚拟滚动，当前 {count} 处"
    assert src.count(":items=\"records\"") >= 3, "历史/问股分组内层应虚拟化"
    assert ":items=\"sortedWatchlist\"" in src, "自选列表应虚拟化"


def test_ai_history_error_state():
    """FR-3.16.5 (16.7): 评估历史加载/错误态状态机（可重试）"""
    wl = _read("js/watchlist.js")
    assert "aiHistoryLoading" in wl and "aiHistoryError" in wl, "watchlist 应维护加载/错误态"
    assert "aiHistoryError.value = true" in wl, "loadAiHistory 失败应置错误态"
    page = _read("js/components/ai-page.js")
    assert "type=\"error\"" in page and '@retry="loadAiHistory"' in page, "历史子页应提供错误态可重试"
    assert "type=\"offline\"" in page, "应提供离线态"


def test_chat_history_error_state():
    """FR-3.16.5 (16.7): 问股历史加载/错误态状态机（可重试）"""
    ac = _read("js/ai-chat.js")
    assert "chatHistoryLoading" in ac and "chatHistoryError" in ac, "ai-chat 应维护加载/错误态"
    assert "chatHistoryError.value = true" in ac, "loadChatHistory 失败应置错误态"
    page = _read("js/components/ai-page.js")
    assert '@retry="loadChatHistory"' in page, "问股子页应提供错误态可重试"


def test_offline_detection_global():
    """FR-3.16.5 (16.7): 全局离线检测 isOnline（online/offline 监听）"""
    src = _read("js/app-logic.js")
    assert "const isOnline" in src, "app-logic 应定义 isOnline"
    assert "addEventListener('offline'" in src and "addEventListener('online'" in src, \
        "应监听 online/offline 事件"


# ─── v3.16 (16.8 / FR-3.16.6) 并发与惰性加载回归 ─────────────────────────

def test_pool_signals_concurrency():
    """FR-3.16.6 (16.8): 池信号并发拉取 + AbortController 可取消"""
    src = _read("js/ai.js")
    assert "AbortController" in src, "池信号拉取应支持取消"
    assert "POOL_SIGNAL_CONCURRENCY" in src, "应限流并发"
    assert "cancelPoolSignals" in src, "应提供取消入口"
    app = _read("js/app-logic.js")
    assert "cancelPoolSignals" in app, "app-logic 应解构并调用取消入口"
    assert "page !== 'calendar'" in app, "离开日历页应取消在途池信号"


def test_chat_history_lazy_load():
    """FR-3.16.6 (16.8): 问股历史消息惰性加载（首屏不 N 连发）"""
    ac = _read("js/ai-chat.js")
    m = re.search(r"async function loadChatHistory[\s\S]*?\n\}", ac)
    assert m, "loadChatHistory 未找到"
    assert "fetch('/api/ai/chat/history/' + s.id" not in m.group(0), \
        "loadChatHistory 不应预拉取每条会话消息体"
    assert "chatSessionMessagesCache" in ac, "应有消息体缓存"
    assert "async function viewChatSession" in ac, "viewChatSession 应异步惰性加载"
    sd = _read("js/components/dialogs/stock-detail.js")
    assert "加载历史消息中" in sd, "问股 Tab 应展示历史加载提示"


def test_research_page_placeholder():
    """FR-3.16.6 (16.8): 研究页占位统一为 qc-state-panel + 功能未开启守卫"""
    src = _read("js/components/research-page.js")
    assert "researchMenuEnabled" in src, "应守卫功能未开启状态"
    assert src.count("qc-state-panel") >= 4, "研究页占位应统一为 qc-state-panel"
    assert "敬请期待" in src


# ─── v3.16 (16.9 / FR-3.16.7) 品牌化与模板收敛回归 ────────────────────────

def test_login_branded():
    """FR-3.16.7 (16.9): 登录页品牌化（品牌区/副标题/页脚）"""
    idx = _read("index.html")
    assert "login-brand" in idx and "login-subtitle" in idx, "登录页应有品牌区与副标题"
    assert "login-footer" in idx, "登录页应有品牌页脚"
    assert "login-btn" in idx, "登录按钮应使用类而非 inline width"
    assert 'style="width: 100%"' not in idx.split("<!-- 登录页")[1].split("</div>")[0], \
        "登录页不应残留 inline width"
    css = _read("css/themes.css")
    for cls in (".login-screen", ".login-brand", ".login-subtitle", ".login-desc", ".login-footer"):
        assert cls in css, f"themes.css 应定义 {cls}"


def test_history_record_dedup():
    """FR-3.16.7 (16.9): 历史/问股行模板收敛至 qc-history-record 组件"""
    comp = _read("js/components/history-record.js")
    assert "qc-history-record" in comp, "应有 qc-history-record 组件"
    src = _read("js/components/ai-page.js")
    assert src.count("qc-history-record") >= 6, "ai-page 应 6 处引用 qc-history-record"
    # 旧的内联重复行模板应消失
    assert "viewAiResult(record)" not in src.replace("qc-history-record", ""), \
        "ai-page 不应再残留内联历史行模板"
    assert src.count("deleteChatSession(session.id)") == 0 or "qc-history-record" in src, \
        "问股行删除应收敛到组件"


def test_inline_style_governance():
    """FR-3.16.7 (16.9): 高频 inline style 收敛为类（date-group-header/count-badge-sm）"""
    css = _read("css/themes.css")
    assert ".date-group-header" in css, "应新增 .date-group-header 类"
    assert ".count-badge-sm" in css, "应新增 .count-badge-sm 类"
    src = _read("js/components/ai-page.js")
    assert "padding: 10px 12px; background: var(--bg-card-header)" not in src, \
        "ai-page 不应残留 date-group-header 内联样式"
    assert 'class="count-badge" style="background: var(--primary-color)' not in src, \
        "ai-page 不应残留 primary 色 count-badge 内联样式"
    assert src.count("class=\"count-badge-sm\"") >= 6, "count-badge-sm 应应用 6 处"


# ─── v3.16 (16.10 / FR-3.16.8) 质量护栏回归 ─────────────────────────────

def test_seven_themes_defined():
    """FR-3.16.8 (16.10): 主题数量应为 7（前端 themes.css 数据主题块）"""
    css = _read("css/themes.css")
    themes = re.findall(r'data-theme="([^"]+)"', css)
    assert len(set(themes)) == 7, f"应恰有 7 个主题，当前 {len(set(themes))}: {sorted(set(themes))}"


def test_state_panel_four_states():
    """FR-3.16.8 (16.10): 状态面板四态齐全且错误/离线可重试"""
    core = _read("js/state-panel-core.js")
    for v in ('empty', 'loading', 'error', 'offline'):
        assert f"{v}: {{" in core, f"state-panel-core 应含 {v} 态"
    m = re.search(r"error: \{[\s\S]*?retry: (true|false)", core)
    assert m and m.group(1) == 'true', "error 态应可重试"
    m2 = re.search(r"offline: \{[\s\S]*?retry: (true|false)", core)
    assert m2 and m2.group(1) == 'true', "offline 态应可重试"


def test_keyboard_reach_extended():
    """FR-3.16.8 (16.10): 16.6 补齐 menu-config 键盘可达；逻辑模块不要求模板键"""
    checks = {
        "js/components/dialogs/menu-config.js": ["tabindex=\"0\"", "keyClick", "role=\"button\""],
    }
    for rel, markers in checks.items():
        src = _read(rel)
        for m in markers:
            assert m in src, f"{rel} 缺少 {m}"
    # watchlist / ai-chat 为逻辑域模块，其模板面（ai-page / stock-detail）已在
    # test_keyboard_reach_in_components 覆盖，此处仅验证两者仍被前端加载引用
    idx = _read("index.html")
    assert "js/watchlist.js" in idx and "js/ai-chat.js" in idx, "watchlist/ai-chat 应加载"


def test_virtual_list_infrastructure():
    """FR-3.16.8 (16.10): 虚拟滚动基建（core 纯函数 + 组件）齐备"""
    core = _read("js/virtual-list-core.js")
    assert "computeVisibleRange" in core, "virtual-list-core 应提供 computeVisibleRange"
    comp = _read("js/components/virtual-list.js")
    assert "qc-virtual-list" in comp, "VirtualList 组件应存在"
    assert "QuantVirtualList" in comp, "组件应消费 QuantVirtualList core"


def test_history_record_script_loaded():
    """FR-3.16.8 (16.10): history-record.js 已注册到入口 HTML"""
    idx = _read("index.html")
    assert "components/history-record.js" in idx, "index.html 应加载 history-record.js"
    assert idx.index("history-record.js") < idx.index("app-logic.js"), \
        "history-record.js 应早于 app-logic.js 加载"


# ─── v3.16 (16.10-fix / 详情弹窗性能优化) 回归 ──────────────────────────

def test_stock_detail_immediate_open():
    """16.10-fix: 点击股票立即弹窗（加载态），数据异步填充，不被行情接口阻塞"""
    app = _read("js/app-logic.js")
    seg = app[app.index("async function showStockDetail"):]
    seg = seg[:seg.index("// v3.16 (16.6): 详情弹窗关闭后焦点归还触发器")]
    # 弹窗显示须在 await fetch 之前
    open_pos = seg.index("stockDetailVisible.value = true")
    fetch_pos = seg.index("await fetch(`/api/calendar/stock/")
    assert open_pos < fetch_pos, "showStockDetail 应先弹窗再拉数据"
    assert "stockDetailLoading" in seg, "showStockDetail 应维护加载态"
    assert "stockDetailLoading.value = true" in seg, "应置加载态"
    assert "stockDetailLoading.value = false" in seg, "应结束加载态"
    # 弹窗组件应含加载态视图（文案经 i18n 抽取，zh 语言包保留原文）
    sd = _read("js/components/dialogs/stock-detail.js")
    zh = _read("js/locales/zh-CN.js")
    assert "正在加载股票详情" in zh, "zh 语言包应保留'正在加载股票详情'加载态文案"
    assert "detail.loading" in sd, "弹窗应经 t('detail.loading') 渲染加载态"
    # 自选入口同样立即弹窗
    wl = _read("js/watchlist.js")
    assert wl.index("stockDetailVisible.value = true") < wl.index("await fetch(`/api/calendar/stock/"), \
        "showStockKline 应先弹窗再拉数据"


def test_quote_data_backend_cache():
    """16.10-fix: 后端行情/均线接口应带 TTL 缓存（避免重复拉 tushare 阻塞）"""
    src = _read_backend("stock_info.py")
    assert "QUOTE_CACHE_TTL" in src, "StockInfoManager 应定义缓存 TTL"
    assert "self._quote_cache" in src, "应初始化行情缓存"
    assert "def _cache_get" in src and "def _cache_set" in src, "应有缓存读写"
    assert "f\"daily|{ts_code}|{trade_date}\"" in src, "get_daily_data 应按股+日缓存"
    assert "f\"ma|{ts_code}|{end_date}|{days}\"" in src, "get_ma_data 应按股+日+周期缓存"


# ─── v3.16 (bugfix / 智能评估三处修复) 回归 ─────────────────────────────

def test_history_record_ref_unwrap():
    """bugfix-2: qc-history-record 对 state ref 须取 .value（否则渲染 TypeError → 展开区空白）"""
    src = _read("js/components/history-record.js")
    assert "state.selectedHistoryIds.value.includes" in src, "isSelected 应取 .value"
    assert "state.selectedChatIds.value.includes" in src, "chat 选择态应取 .value"
    assert "state.watchlistCodes.value.has" in src, "watchState 应取 .value"
    # 不应再直接对 ref 调用 .has/.includes
    assert "state.watchlistCodes.has(" not in src
    assert "state.selectedHistoryIds.includes(" not in src


def test_chat_history_flat_metadata():
    """bugfix-3: 问股历史不应以 s.messages 为过滤条件（16.8 惰性后仅元数据）"""
    src = _read("js/ai-chat.js")
    seg = src[src.index("const allChatSessionsFlat"):]
    seg = seg[:seg.index("const chatGroupedByDate")]
    assert "if (s.messages) {" not in seg, "不应再以 s.messages 过滤"
    assert "s.first_msg" in seg, "应直接用 first_msg 元数据"
    assert "s.msg_count" in seg, "应直接用 msg_count 元数据"


def test_watchlist_kline_tab_reset():
    """bugfix-1: showStockKline 应强制切回 K线 tab 并销毁旧图（否则停留在 AI/问股 tab 时 K线不加载）"""
    src = _read("js/watchlist.js")
    seg = src[src.index("async function showStockKline"):]
    seg = seg[:seg.index("const preloadingKline")]
    assert "stockDetailTab.value = 'kline'" in seg, "应重置 K线 tab"
    assert "disposeStockKline('stockKlineChart')" in seg, "应销毁旧图表实例"
    assert seg.index("stockDetailTab.value = 'kline'") < seg.index("stockDetailVisible.value = true"), \
        "tab 重置应先于弹窗打开"


# ─── v3.17 (FR-3.17.3 / 多因子体检面板) 回归 ─────────────────────────────

def test_factor_panel_endpoint_invoked():
    """FR-3.17.3: 多因子体检面板应调用因子端点（/api/calendar/stock/{code}/factors）并展示分组/语义"""
    src = _read("js/components/dialogs/stock-detail.js")
    assert "loadFactorPanel" in src, "应实现 loadFactorPanel 加载函数"
    assert "factors" in src and "/api/calendar/stock/" in src, \
        "应调用 /api/calendar/stock/{code}/factors 端点"
    zh = _read("js/locales/zh-CN.js")
    assert "正在加载体检数据" in zh, "zh 语言包应保留加载中提示（detail.factorLoading）"
    assert "无数据" in zh, "zh 语言包应保留无数据占位（detail.factorNoData）"
    assert "detail.factorLoading" in src and "detail.factorNoData" in src, \
        "体检面板应经 t() 渲染加载/无数据文案"


def test_factor_panel_no_inline_style():
    """FR-3.17.3: 多因子体检面板新增代码不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    src = _read("js/components/dialogs/stock-detail.js")
    seg = src[src.index("loadFactorPanel"):]
    assert 'style="' not in seg, "多因子体检面板不应含内联 style 属性"
    assert "style={" not in seg, "多因子体检面板不应含绑定式内联 style"


# ─── v3.17 (FR-3.17.2 / AI 每日市场复盘) 回归 ─────────────────────────

def test_market_review_subpage_present():
    """FR-3.17.2: 研究页市场复盘子页应调用 /api/market/reviews 与 /api/market/review 并含'市场复盘'文案"""
    src = _read("js/components/research-page.js")
    assert "/api/market/reviews" in src, "应调用 /api/market/reviews 列表端点"
    assert "/api/market/review" in src, "应调用 /api/market/review 详情端点"
    assert "research.marketReview" in src, "应经 t('research.marketReview') 渲染'市场复盘'标题"
    assert "市场复盘" in _read("js/locales/zh-CN.js"), "zh 语言包应保留'市场复盘'文案"


def test_market_review_no_inline_style():
    """FR-3.17.2: 市场复盘新增代码片段不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    src = _read("js/components/research-page.js")
    seg = src[src.index("v3.17.2 FR-3.17.2 市场复盘代码起点"):]
    assert 'style="' not in seg, "市场复盘代码不应含内联 style 属性"
    assert "style={" not in seg, "市场复盘代码不应含绑定式内联 style"


# ─── v3.17 (FR-3.17.4 / 回测可视化工作台) 回归 ─────────────────────────

def test_backtest_workbench_endpoint_invoked():
    """FR-3.17.4: 回测工作台应调用回测端点并含'回测'文案"""
    bt = _read("js/backtest.js")
    assert "window.__quantModules.backtest" in bt, "应注册 __quantModules.backtest 域模块"
    assert "create(deps)" in bt, "应遵循 create(deps) 工厂模式"
    assert "/api/backtest/" in bt, "应调用单策略回测端点 /api/backtest/{strategy_id}"
    assert "/api/backtest/multi" in bt, "应调用多策略回测端点 /api/backtest/multi"
    assert "回测" in bt, "应含'回测'文案"
    page = _read("js/components/strategies-page.js")
    assert "回测工作台" in page, "策略总览应含'回测工作台'入口"
    assert "currentSubPage === 'backtest'" in page, "应支持 backtest 子页"
    idx = _read("index.html")
    assert "js/backtest.js" in idx, "index.html 应加载 backtest.js"
    assert idx.index("backtest.js") < idx.index("app-logic.js"), "backtest.js 应早于 app-logic.js 加载"


def test_backtest_workbench_no_inline_style():
    """FR-3.17.4: 回测工作台新增代码片段不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    bt = _read("js/backtest.js")
    assert 'style="' not in bt, "backtest.js 不应含内联 style 属性"
    assert "style={" not in bt, "backtest.js 不应含绑定式内联 style"
    page = _read("js/components/strategies-page.js")
    seg = page[page.index("v3.17.4 (FR-3.17.4): 回测工作台 代码起点"):]
    assert 'style="' not in seg, "回测工作台模板不应含内联 style 属性"
    assert "style={" not in seg, "回测工作台模板不应含绑定式内联 style"


def test_backtest_core_consumed():
    """FR-3.17.4: 回测核心纯函数（净值/回撤/年度/CSV）齐备且被工作台消费"""
    core = _read("js/backtest-core.js")
    for fn in ("computeMaxDrawdownRegion", "buildAnnualReturns", "buildNavSeries", "buildMetrics", "buildBacktestCsv"):
        assert fn in core, f"backtest-core 应提供 {fn}"
    bt = _read("js/backtest.js")
    assert "QuantBacktest" in bt, "backtest.js 应消费 QuantBacktest 核心"
    charts = _read("js/charts.js")
    for fn in ("renderBacktestTo", "redrawBacktest"):
        assert fn in charts, f"charts.js 应提供 {fn}"


def test_backtest_core_node():
    """FR-3.17.4: backtest-core 纯函数 node 单测（最大回撤/年度收益/净值系列/指标/CSV）"""
    import shutil
    import subprocess
    import json as _json

    core_path = os.path.join(FRONTEND_ROOT, "js", "backtest-core.js")
    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    code = (
        "const BT = require(process.argv[1]);\n"
        "const out = (function(){\n"
        "  const curve = [\n"
        "    {date:'2025-01-02', equity:100000},\n"
        "    {date:'2025-01-03', equity:110000},\n"
        "    {date:'2025-01-06', equity:99000},\n"
        "    {date:'2025-01-07', equity:108900},\n"
        "    {date:'2025-01-08', equity:95000}\n"
        "  ];\n"
        "  const dd = BT.computeMaxDrawdownRegion(curve);\n"
        "  const annual = BT.buildAnnualReturns({'2025-01':1.2,'2025-02':-0.8,'2026-01':2.0});\n"
        "  const nav = BT.buildNavSeries([\n"
        "    {name:'A', points:[{date:'2025-01-02',value:100},{date:'2025-01-03',value:105}]},\n"
        "    {name:'B', points:[{date:'2025-01-03',value:200},{date:'2025-01-04',value:190}]}\n"
        "  ]);\n"
        "  const metrics = BT.buildMetrics({total_return:12.34,max_drawdown:8.5,sharpe_ratio:1.2,win_rate:55,profit_loss_ratio:1.8,total_trades:120});\n"
        "  const csv = BT.buildBacktestCsv({\n"
        "    metrics:[{label:'总收益',value:'12.34%'}],\n"
        "    dates:['2025-01-02'],\n"
        "    series:[{name:'A',data:[100]}],\n"
        "    trades:[{date:'2025-01-03',stock:'000001',action:'买入',reason:'策略调仓'}]\n"
        "  });\n"
        "  return { dd, annual, nav, metricKeys: metrics.map(m=>m.key), csv };\n"
        "})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(["node", "-e", code, core_path], capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    out = _json.loads(proc.stdout)

    # 最大回撤：峰值 110000 → 谷底 95000 → (110000-95000)/110000 ≈ 13.64%
    assert abs(out["dd"]["maxDrawdown"] - 13.64) < 0.01, f"最大回撤计算错误: {out['dd']}"
    assert out["dd"]["peakDate"] == "2025-01-03"
    assert out["dd"]["troughDate"] == "2025-01-08"
    # 年度收益：2025 = 1.2 + (-0.8) = 0.4；2026 = 2.0
    assert out["annual"] == [{"year": "2025", "return": 0.4}, {"year": "2026", "return": 2.0}], out["annual"]
    # 净值系列：日期并集升序，缺值补 null
    assert out["nav"]["dates"] == ["2025-01-02", "2025-01-03", "2025-01-04"]
    assert out["nav"]["series"][0]["data"] == [100, 105, None]
    assert out["nav"]["series"][1]["data"] == [None, 200, 190]
    # 指标卡键顺序
    assert out["metricKeys"][:2] == ["total_return", "annual_return"]
    # CSV：含三个分节标题
    assert "回测指标" in out["csv"] and "净值曲线" in out["csv"] and "交易明细" in out["csv"]


# ─── v3.17.6 (FR-3.17.6 / AI 评估命中率追踪) 回归 ─────────────────────

def test_eval_track_endpoint_invoked():
    """FR-3.17.6: ai-page 应调用 /api/ai/track 端点并含'命中率'文案与空态"""
    src = _read("js/components/ai-page.js")
    assert "/api/ai/track" in src, "ai-page 应调用 /api/ai/track 端点"
    assert "ai.evalHitRate" in src, "应经 t('ai.evalHitRate') 渲染'评估命中率'"
    assert "命中率" in src, "ai-page 应含'命中率'文案（t() key + 注释）"
    zh = _read("js/locales/zh-CN.js")
    assert "暂无足够评估样本" in zh, "zh 语言包应保留空态文案（ai.insufficientSamples）"
    # 后端路由配套存在
    ai_api = _read_backend("api/v1/ai.py")
    assert '@router.get("/track")' in ai_api, "后端应提供 GET /api/ai/track 路由"


def test_eval_track_no_inline_style():
    """FR-3.17.6: 评估命中率新增片段不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    src = _read("js/components/ai-page.js")
    seg = src[src.index("v3.17.6 (FR-3.17.6): 评估命中率"):]
    seg = seg[:seg.index("<!-- 批量操作工具栏 -->")]
    assert 'style="' not in seg, "评估命中率卡片不应含内联 style 属性"
    assert "style={" not in seg, "评估命中率卡片不应含绑定式内联 style"
    css = _read("css/themes.css")
    for cls in (".eval-track-card", ".eval-track-overall", ".eval-track-stat", ".eval-track-table", ".eval-track-note"):
        assert cls in css, f"themes.css 应定义 {cls}"


# ─── v3.17.7 (FR-3.17.7 / 盘中增强：异动扫描 + 事件提醒) 回归 ─────────────

def test_scan_subpage_endpoint_invoked():
    """FR-3.17.7: 研究页异动扫描子页应调用 /api/market/scan 与 /api/market/events 并含'异动'文案"""
    src = _read("js/components/research-page.js")
    assert "/api/market/scan" in src, "应调用 /api/market/scan 扫描端点"
    assert "/api/market/events" in src, "应调用 /api/market/events 事件端点"
    assert "异动" in src, "应含'异动'文案"
    # 后端路由配套存在
    api = _read_backend("api/v1/market.py")
    assert '@router.get("/scan")' in api, "后端应提供 GET /api/market/scan 路由"
    assert '@router.get("/events")' in api, "后端应提供 GET /api/market/events 路由"


def test_scan_subpage_registered():
    """FR-3.17.7: 研究页菜单应注册 scan 子页（subPages + subPageNames）"""
    app = _read("js/app-logic.js")
    m = re.search(r"\{ key: 'research'.*?\}", app)
    assert m and "'scan'" in m.group(0), "research 菜单 subPages 应含 'scan'"
    assert "'market-review'" in m.group(0), "research 菜单 subPages 应含 'market-review'(FR-3.17.2)"
    assert "'scan': '异动扫描'" in app, "subPageNames 应映射 'scan' → 异动扫描"
    assert "'market-review': '市场复盘'" in app, "subPageNames 应映射 'market-review' → 市场复盘"


def test_research_menu_enabled_by_default():
    """v3.17 修复: 策略研究菜单默认可见（市场复盘/异动扫描 P0 功能可达）"""
    app = _read("js/app-logic.js")
    assert "research_menu_enabled') !== '0'" in app, "research 菜单应默认开启（opt-out）"
    # 后端用户配置默认同样为开启
    ucfg = _read_backend("api/v1/user_config.py")
    assert '"research_menu_enabled": True' in ucfg, "BASE_CONFIG_DEFAULTS 应将 research_menu_enabled 默认为 True"


def test_scan_subpage_no_inline_style():
    """FR-3.17.7: 异动扫描新增代码片段不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    src = _read("js/components/research-page.js")
    seg = src[src.index("v3.17.7 (FR-3.17.7): 异动扫描 + 事件提醒 代码起点"):]
    assert 'style="' not in seg, "异动扫描代码不应含内联 style 属性"
    assert "style={" not in seg, "异动扫描代码不应含绑定式内联 style"
    css = _read("css/themes.css")
    for cls in (".scan-group", ".scan-row", ".scan-tag", ".scan-note", ".scan-section", ".scan-toolbar", ".scan-event-row"):
        assert cls in css, f"themes.css 应定义 {cls}"


# ─── v3.17.9 (内联样式收敛治理) 回归 ─────────────────────────────

def test_static_inline_style_budget():
    """v3.17.9: 前端静态内联 style="..." 总数 ≤279（≥60% 已收敛为类；排除 :style= 动态绑定）"""
    roots = ("js", "js/components", "js/components/dialogs")
    total = 0
    for rel in roots:
        d = os.path.join(FRONTEND_ROOT, *rel.split("/"))
        for fn in os.listdir(d):
            if not fn.endswith(".js"):
                continue
            with open(os.path.join(d, fn), encoding="utf-8") as f:
                total += len(re.findall(r'(?<!:)style="', f.read()))
    assert total <= 279, f"静态内联 style 计数 {total} 超过预算 279"


def test_migrated_utility_classes_defined():
    """v3.17.9: 迁移后所有模板静态 class 引用的类必须在 CSS 中定义（未定义类不得新增）"""
    import glob as _glob
    defined = set()
    for fn in _glob.glob(os.path.join(FRONTEND_ROOT, "css", "*.css")):
        with open(fn, encoding="utf-8") as f:
            defined.update(re.findall(r"\.([A-Za-z_][\w-]*)\s*[,{]", f.read()))
    refs = {}
    for rel in ("js", "js/components", "js/components/dialogs", "js/app-logic"):
        d = os.path.join(FRONTEND_ROOT, *rel.split("/"))
        if not os.path.isdir(d):
            continue
        for fn in os.listdir(d):
            if not fn.endswith(".js"):
                continue
            with open(os.path.join(d, fn), encoding="utf-8") as f:
                src = f.read()
            for m in re.finditer(r'(?<!:)(?<![A-Za-z0-9_-])class="([^"]*)"', src):
                for tok in m.group(1).split():
                    if re.fullmatch(r"[A-Za-z_][A-Za-z0-9_-]*", tok):
                        refs[tok] = refs.get(tok, 0) + 1
    # 基线 34 个已知未定义类（qc-* 组件名/审计正则漏检），不得新增
    baseline_undef = {
        "status-info", "date-group-card", "date-group-records", "market-review-sector-col",
        "market-review-sector-list", "is-loading", "hover-row", "spinning", "command-palette",
        "command-group", "global-search-wrapper", "history-time", "history-provider", "history-dims",
        "market-review-card", "qc-state-panel", "qc-state-info", "qc-state-icon", "qc-state-title",
        "qc-state-desc", "qc-state-action", "qc-state-retry", "backtest-workbench", "system-page-root",
        "qc-virtual-list", "qc-vlist-spacer", "qc-vrow", "detail-score", "ai-result-box", "ai-analysis",
        "merrill-detail-dialog", "risk-section", "shortcut-keys", "tour-dialog",
    }
    undef = {c for c in refs if c not in defined}
    new_undef = undef - baseline_undef
    assert not new_undef, f"新增未定义类: {sorted(new_undef)}"


# ─── v3.17.11 (FR-3.17.11.3/4/5) 收敛与清理回归 ──────────────────────

def test_no_empty_shell_scripts_loaded():
    """FR-3.17.11.5: 空壳脚本 calendar.js/strategies.js 已删除，index.html 不得再加载"""
    idx = _read("index.html")
    assert "js/calendar.js" not in idx, "index.html 不应加载已删除的空壳 calendar.js"
    assert "js/strategies.js" not in idx, "index.html 不应加载已删除的空壳 strategies.js"
    # 空壳文件本身不得存在
    for rel in ("js/calendar.js", "js/strategies.js"):
        assert not os.path.exists(os.path.join(FRONTEND_ROOT, rel.replace("/", os.sep))), \
            f"空壳文件 {rel} 应已删除"


def test_no_debug_console_log_in_entry():
    """FR-3.17.11.5: index.html 与 app-logic* 不再含 [DEBUG] 调试日志"""
    idx = _read("index.html")
    assert "[DEBUG]" not in idx, "index.html 不应残留 [DEBUG] console.log"
    for root, _dirs, files in os.walk(os.path.join(FRONTEND_ROOT, "js")):
        if "app-logic" not in root:
            continue
        for fn in files:
            if not fn.endswith(".js"):
                continue
            p = os.path.join(root, fn)
            with open(p, encoding="utf-8") as f:
                assert "[DEBUG]" not in f.read(), f"{os.path.relpath(p, FRONTEND_ROOT)} 不应残留 [DEBUG]"


def test_backend_print_count_budget():
    """FR-3.17.11.5: 后端 print() 计数 ≤16（print→logging 收敛 ≥80%）"""
    import glob as _glob
    count = 0
    for fn in _glob.glob(os.path.join(ROOT, "backend", "**", "*.py"), recursive=True):
        with open(fn, encoding="utf-8") as f:
            count += len(re.findall(r"\bprint\(", f.read()))
    assert count <= 16, f"后端 print() 计数 {count} 超过预算 16（应改为 logging）"


# ─── v3.17.12 (FR-3.17.12 / 可观测性) 回归 ─────────────────────

def test_health_detail_endpoint_invoked():
    """FR-3.17.12: 前端应调用 /api/system/health-detail 并展示调度任务'最近运行'文案"""
    ops = _read("js/app-logic/ops.js")
    assert "/api/system/health-detail" in ops, "ops.js 应调用 /api/system/health-detail"
    syspage = _read("js/components/system-page.js")
    assert "最近运行" in syspage, "system-page 应含'最近运行'文案"
    assert "调度任务" in syspage, "system-page 应展示调度任务面板"
    # 后端路由配套存在
    sysapi = _read_backend("api/v1/system.py")
    assert "health-detail" in sysapi, "后端应提供 /api/system/health-detail 路由"
    # /metrics 端点配套存在
    main = _read_backend("main_new.py")
    assert "@app.get(\"/metrics\")" in main, "后端应注册 GET /metrics 端点"


def test_health_detail_no_inline_style():
    """FR-3.17.12: 调度任务健康面板新增片段不得使用内联 style（须走 CSS 类 + tokens 变量）"""
    src = _read("js/components/system-page.js")
    start = src.index("v3.17.12 (FR-3.17.12): 调度任务健康面板 代码起点")
    end = src.index("v3.17.12 (FR-3.17.12): 调度任务健康面板 代码结束")
    seg = src[start:end]
    assert 'style="' not in seg, "调度任务健康面板不应含内联 style 属性"
    assert "style={" not in seg, "调度任务健康面板不应含绑定式内联 style"


# ─── v3.17.13 (FR-3.17.13 / 多用户隔离与数据一致性收敛) 回归 ────────────

def test_chat_no_hardcoded_default_user():
    """FR-3.17.13: chat.py 业务路径不得硬编码 username="default"（仅函数默认参数单引号兜底）"""
    src = _read_backend("api/v1/chat.py")
    assert 'username="default"' not in src, "chat.py 仍存在 username=\"default\" 硬编码"
    # 按当前用户隔离: 统一经 _resolve_username 解析 + 读写按 username
    assert "_resolve_username" in src, "应提供 _resolve_username 统一解析当前用户"


def test_chat_history_isolated_by_user():
    """FR-3.17.13: 聊天历史读写按用户（SQLite chat_all/clear/append 均按 username）"""
    src = _read_backend("api/v1/chat.py")
    assert "db.chat_all(username)" in src, "_load_history 应按 username 过滤"
    assert "db.chat_clear(username)" in src, "_save_history 应按 username 清空"
    assert "db.chat_append(username," in src, "_save_history 应按 username 写入"


def test_rate_limiter_backend_abstraction():
    """FR-3.17.13: rate_limit.py 提供 RateLimiterBackend 接口 + SimpleMemoryBackend 默认实现"""
    src = _read_backend("rate_limit.py")
    assert "class RateLimiterBackend" in src, "应定义 RateLimiterBackend 接口"
    assert "def check(self, key: str, limit: int, window: int)" in src, \
        "接口应定义 check(key, limit, window) -> (allowed, remaining)"
    assert "class SimpleMemoryBackend(RateLimiterBackend)" in src, "应保留单机内存实现"
    assert "class SimpleLimiter" in src, "应保留 SimpleLimiter 向后兼容门面"
    assert "RATE_LIMIT_BACKEND" in src, "应提供后端类型配置项"


def test_db_chat_ownership_migration():
    """FR-3.17.13: db.py 提供存量归属迁移函数 migrate_chat_ownership + username 列增量迁移"""
    src = _read_backend("db.py")
    assert "def migrate_chat_ownership" in src, "应提供存量归属迁移函数 migrate_chat_ownership"
    assert "ADD COLUMN username" in src, "migrate 应含 chat_history.username 列增量迁移"


def test_storage_convergence_no_json_double_write():
    """FR-3.17.13: 用户/聊天/自选写路径收敛 SQLite 为主（写实现不再落 JSON）"""
    chat_src = _read_backend("api/v1/chat.py")
    wl_src = _read_backend("api/v1/watchlist.py")
    um_src = _read_backend("user_manager.py")
    # 聊天写路径: _save_history 内不得再 open 写 HISTORY_FILE
    save_seg = chat_src[chat_src.index("def _save_history"):chat_src.index("def _load_session_messages")]
    assert "json.dump" not in save_seg and 'HISTORY_FILE, \'w\'' not in save_seg, \
        "_save_history 不应再写 JSON (SQLite 为主)"
    # 自选写路径: _save_watchlist 内不得再写 watchlist.json
    wl_seg = wl_src[wl_src.index("def _save_watchlist"):wl_src.index("@router.get(\"\")")]
    assert "json.dump" not in wl_seg, "_save_watchlist 不应再写 JSON (SQLite 为主)"
    # 用户写路径: _save_users 内不得再写 users.json
    um_seg = um_src[um_src.index("def _save_users"):um_src.index("def _hash_password")]
    assert "json.dump" not in um_seg, "_save_users 不应再写 JSON (SQLite 为主)"


# ─── v3.17.8 (FR-3.17.8 / 移动端一等公民) 回归 ─────────────────────

def test_responsive_mobile_breakpoints():
    """FR-3.17.8: responsive.css 含移动端断点（≥375px 适配：768 / 480）"""
    css = _read("css/responsive.css")
    assert "@media (max-width: 768px)" in css, "缺少 <768px 移动断点"
    assert "@media (max-width: 480px)" in css, "缺少 <480px 小屏断点"


def test_responsive_overflow_guard():
    """FR-3.17.8: 移动端防横向溢出守卫存在（body/.main-content overflow-x:hidden）"""
    css = _read("css/responsive.css")
    assert "overflow-x: hidden" in css, "应含 overflow-x:hidden 横向溢出守卫"
    assert "@media (max-width: 768px)" in css


def test_responsive_dialog_internal_scroll():
    """FR-3.17.8: 移动端弹窗高度封顶 + 内部滚动（375px 弹窗可滚动不超出视口）"""
    css = _read("css/responsive.css")
    assert "max-height: calc(100vh" in css, "弹窗应高度封顶"
    assert ".el-dialog__body" in css, "应控制弹窗 body"


def test_responsive_swipe_reveal_classes():
    """FR-3.17.8: 左滑露出操作面板类齐备（.swipe-reveal / .swipe-reveal-actions）"""
    css = _read("css/responsive.css")
    assert ".swipe-reveal" in css and ".swipe-reveal-actions" in css and ".swipe-reveal-main" in css, \
        "应定义左滑露出面板三件套类"


def test_manifest_fields_complete():
    """FR-3.17.8: manifest 字段齐全（name/short_name/icons/theme_color/display/start_url）"""
    import json as _json
    man = _json.loads(_read("manifest.json"))
    assert man.get("name") and man.get("short_name"), "应含 name/short_name"
    assert man.get("start_url") == "/", "start_url 应为 /"
    assert man.get("display") == "standalone", "display 应为 standalone"
    assert man.get("theme_color") and man.get("background_color"), "应含主题/背景色"
    assert isinstance(man.get("icons"), list) and len(man["icons"]) >= 3, "应含 ≥3 个图标"
    assert man.get("id"), "应含 id（PWA 唯一标识）"
    assert man.get("orientation") == "portrait-primary", "应限竖屏"


# ─── v3.17.9 (FR-3.17.9 / 首屏性能优化) 回归 ─────────────────────

def test_index_all_external_scripts_deferred():
    """FR-3.17.9: index.html 全部外链 <script src> 均带 defer（并行下载、按序执行，首屏不被阻塞）；
    非首屏大组件同样以 defer 在首屏清单注册（避免挂载后注册触发 KeepAlive 重建错误）"""
    idx = _read("index.html")
    src_tags = re.findall(r'<script[^>]*src="([^"]+)"[^>]*>', idx)
    assert len(src_tags) >= 50, f"脚本数量异常: {len(src_tags)}"
    for m in re.finditer(r'<script[^>]*src="[^"]+"[^>]*>', idx):
        tag = m.group(0)
        assert "defer" in tag, f"脚本未加 defer: {tag}"
    assert "components/dialogs/stock-detail.js" in idx, "对话框组件应在首屏清单 (defer)"
    assert "components/ai-page.js" in idx, "页面组件应在首屏清单 (defer)"


def test_index_echarts_lazy_loaded():
    """FR-3.17.9: echarts 不再同步加载（移除首屏 1MB 阻塞），改由 charts.js ensureEcharts 按需注入"""
    idx = _read("index.html")
    assert "echarts.min.js" not in idx, "index.html 不应再同步引入 echarts.min.js"
    charts = _read("js/charts.js")
    assert "function ensureEcharts" in charts, "charts.js 应提供 ensureEcharts 懒加载器"
    assert "echarts.min.js" in charts, "ensureEcharts 应动态加载 /static/lib/echarts.min.js"
    # 三个渲染入口均先确保 echarts 就绪
    assert "await ensureEcharts()" in charts, "renderKlineTo 应 await ensureEcharts"


def test_index_boot_skeleton_and_vcloak():
    """FR-3.17.9: 启动骨架屏（#qc-boot）+ v-cloak 防模板闪现 + 挂载后移除"""
    idx = _read("index.html")
    assert 'id="qc-boot"' in idx, "index.html 应含启动骨架屏 #qc-boot"
    assert 'class="qc-boot-skeleton"' in idx, "骨架屏应使用 qc-boot-skeleton CSS 类"
    assert 'v-cloak' in idx and 'id="app" v-cloak' in idx, "#app 应带 v-cloak 防原始模板闪现"
    assert "bootEl.remove()" in idx, "挂载后应移除启动骨架屏"
    css = _read("css/tokens.css")
    assert "[v-cloak]" in css, "tokens.css 应定义 [v-cloak]{display:none}"
    css2 = _read("css/themes.css")
    for cls in (".qc-boot-skeleton", ".qc-boot-skeleton-sidebar", ".qc-boot-skeleton-card"):
        assert cls in css2, f"themes.css 应定义 {cls}"


def test_skeleton_classes_no_inline_style():
    """FR-3.17.9: 骨架屏零内联样式（骨架屏结构不得携带 style 属性）"""
    idx = _read("index.html")
    boot = idx[idx.index('id="qc-boot"'):idx.index('id="app"')]
    assert 'style="' not in boot, "启动骨架屏不应含内联 style"
    assert "style={" not in boot, "启动骨架屏不应含绑定式内联 style"
    page = _read("js/components/ai-page.js")
    assert 'type="loading"' in page and "watchlistLoading" in page, \
        "自选加载态应接入骨架屏 (qc-state-panel loading)"


def test_lazy_history_pagination_params():
    """FR-3.17.9: 评估历史懒加载 — 前端首屏只拉前 N 条 (limit/offset) + loadMore 追加; 后端支持 offset"""
    wl = _read("js/watchlist.js")
    assert "AI_HISTORY_PAGE_SIZE" in wl, "应定义分页大小"
    assert "limit=${AI_HISTORY_PAGE_SIZE}&offset=0" in wl, "loadAiHistory 首屏应带 limit/offset=0"
    assert "async function loadMoreAiHistory" in wl, "应提供 loadMoreAiHistory"
    assert "offset=${aiHistory.value.length}" in wl, "loadMore 应以已加载数作为 offset"
    assert "hasMoreAiHistory" in wl, "应提供 hasMoreAiHistory 判断"
    ai_api = _read_backend("api/v1/ai.py")
    assert "offset: int = 0" in ai_api, "后端 /api/ai/history 应支持 offset 参数"
    assert '"total": total' in ai_api, "后端应返回 total 供前端判断是否还有更多"
    ai_eval = _read_backend("ai_evaluator.py")
    assert "def count_history" in ai_eval, "ai_evaluator 应提供 count_history"


def test_chat_history_backend_pagination():
    """FR-3.17.9: 问股历史接口支持 limit/offset 分页（后端切片会话后再分组）"""
    chat = _read_backend("api/v1/chat.py")
    assert "limit: int = 50, offset: int = 0" in chat, "chat 历史应支持 limit/offset"
    assert "sessions[offset:offset + limit]" in chat, "应切片会话再分组"


def test_lifecycle_first_screen_parallel():
    """FR-3.17.9: 首屏请求并行化 — 有会话在 setup 先恢复主界面, 业务数据后台并行加载"""
    app = _read("js/app-logic.js")
    lc = _read("js/app-logic/lifecycle.js")
    assert "currentUser.value = JSON.parse(savedUser)" in app, "app-logic setup 应先行恢复会话"
    assert "Promise.all" in lc, "业务数据应并行加载 (Promise.all)"
    assert "loadUserConfig(), 2000" in lc and "loadDates(), 2000" in lc, \
        "用户配置与交易日历应并行"
    assert "loadUsers(), 2000" in lc and "loadAiHistory(), 2000" in lc, \
        "用户列表与评估历史应并行"


# ─── v3.17.10 (FR-3.17.10) 个性化与搜索 一致性回归 ───────────────────

def test_preferences_keys_constants():
    """FR-3.17.10: 偏好键常量齐备（default_view/theme/chart_period + localStorage key）"""
    prefs = _read("js/preferences.js")
    for key in ("'default_view'", "'theme'", "'chart_period'"):
        assert key in prefs, f"preferences.js 应含偏好键 {key}"
    assert "PREFERENCE_KEYS" in prefs and "PREFERENCE_DEFAULTS" in prefs, \
        "应定义 PREFERENCE_KEYS/PREFERENCE_DEFAULTS"
    assert "'quant_preferences'" in prefs, "偏好 localStorage key 应为 quant_preferences"
    # 偏好键与后端 PREFERENCE_KEYS 一致（后端三键）
    ucfg = _read_backend("api/v1/user_config.py")
    for key in ("default_view", "theme", "chart_period"):
        assert f'"{key}"' in ucfg, f"后端 user_config 应支持偏好键 {key}"
    assert "PREFERENCE_KEYS" in ucfg, "后端应定义 PREFERENCE_KEYS"


def test_preferences_valid_values():
    """FR-3.17.10: 各偏好键合法取值约束（default_view=页面; theme=亮/暗/系统; chart_period=日/周/月）"""
    prefs = _read("js/preferences.js")
    assert "'strategies'" in prefs and "'calendar'" in prefs, "default_view 应含 strategies/calendar"
    assert "'light'" in prefs and "'dark'" in prefs and "'system'" in prefs, \
        "theme 应支持 light/dark/system"
    assert "'daily'" in prefs and "'weekly'" in prefs and "'monthly'" in prefs, \
        "chart_period 应支持 daily/weekly/monthly"


def test_theme_authority_not_duplicated_in_preferences():
    """FR-3.17.10: 偏好模块不得另起主题实现 — data-theme/quant_theme 仍唯一于 themes.js"""
    prefs = _read("js/preferences.js")
    assert "setAttribute('data-theme'" not in prefs, "preferences.js 不应重复设置 data-theme"
    assert "localStorage.setItem('quant_theme'" not in prefs, "preferences.js 不应重复持久化 quant_theme"
    # 偏好通过 themes.applyTheme 权威实现应用（映射具体主题名）
    assert "THEME_MODE_TO_THEME" in prefs, "偏好应提供主题模式→具体主题映射"
    assert "resolveTheme" in prefs, "偏好应提供 resolveTheme"
    # 主题仍走 applyTheme 单一权威（既有断言持续生效）
    themes = _read("js/themes.js")
    assert "function applyTheme(theme)" in themes, "themes.js 应保持唯一 applyTheme 权威"


def test_i18n_module_exists():
    """FR-3.17.10: i18n.js 骨架存在且含 t()/setLocale/getLocale/语言包占位 zh-CN+en"""
    i18n = _read("js/i18n.js")
    assert "function t(key" in i18n or "t: t" in i18n, "i18n.js 应提供 t(key)"
    assert "function setLocale" in i18n, "应提供 setLocale"
    assert "function getLocale" in i18n, "应提供 getLocale"
    assert "'zh-CN'" in i18n and "'en'" in i18n, "语言包占位应含 zh-CN 与 en"
    assert "DEFAULT_LOCALE" in i18n and "zh-CN" in i18n.split("DEFAULT_LOCALE")[1][:60], \
        "默认语言应为 zh-CN"
    assert "window.__quantModules.i18n" in i18n, "应注册到 __quantModules.i18n"


def test_recent_viewed_localstorage_key():
    """FR-3.17.10: 最近查看 localStorage key 断言（quant_recent_viewed，上限 10）"""
    recent = _read("js/recent.js")
    assert "RECENT_VIEWED_KEY" in recent and "'quant_recent_viewed'" in recent, \
        "最近查看 localStorage key 应为 quant_recent_viewed"
    assert "RECENT_MAX" in recent, "应定义上限 RECENT_MAX"
    assert "function recordViewed" in recent, "应提供 recordViewed（去重、最近在前）"
    assert "function getRecentViewed" in recent, "应提供 getRecentViewed"
    # 记录点接线：app-logic showStockDetail 与 watchlist showStockKline 均记录
    app = _read("js/app-logic.js")
    assert "recordViewed(stockCode" in app, "showStockDetail 应记录最近查看"
    wl = _read("js/watchlist.js")
    assert "recordViewed" in wl, "watchlist 应记录最近查看"


def test_new_personalization_modules_registered():
    """FR-3.17.10: 新模块（i18n/pinyin/preferences/recent）已注册到入口 HTML 且早于 app-logic"""
    idx = _read("index.html")
    for mod in ("i18n.js", "pinyin.js", "preferences.js", "recent.js"):
        assert mod in idx, f"index.html 应加载 {mod}"
        assert idx.index(mod) < idx.index("app-logic.js"), f"{mod} 应早于 app-logic.js 加载"
    # preferences 早于 app-logic（启动 setup 同步读偏好）
    assert idx.index("preferences.js") < idx.index("app-logic.js")


def test_pinyin_module_pure_functions():
    """FR-3.17.10: pinyin.js 提供拼音纯函数 + 内置核心股票清单"""
    p = _read("js/pinyin.js")
    for fn in ("toPinyinInitials", "toPinyin", "buildStockIndex", "searchStocksByQuery",
               "registerExtraStocks", "searchCoreStocks"):
        assert fn in p, f"pinyin.js 应提供 {fn}"
    assert "CORE_STOCKS" in p, "应内置核心股票清单"
    assert "CHAR_PINYIN" in p, "应内置汉字拼音映射"
    assert "'贵州茅台'" in p, "内置清单应含 贵州茅台（测试样例）"
    assert "module.exports" in p, "应支持 Node require（供 pytest 单测）"


def test_command_panel_pinyin_quick_entries():
    """FR-3.17.10: 命令面板接入本地拼音检索 + 空查询直达（最近查看/自选）"""
    cp = _read("js/components/command-panel.js")
    assert "searchLocal" in cp and "buildLocalIndex" in cp, "命令面板应构建本地拼音索引"
    assert "window.__quantModules.pinyin" in cp, "命令面板应消费 pinyin 模块"
    assert "buildQuickEntries" in cp, "命令面板应提供空查询直达条目"
    assert "最近查看" in cp, "直达条目应含'最近查看'"
    assert "我的自选" in cp, "直达条目应含'我的自选'"
    keys = _read("js/app-logic/keys.js")
    assert "searchCoreStocks" in keys, "全局搜索应接本地拼音兜底"


# ─── v3.17.7 实时化 (FR-3.17.7) 前端一致性回归 ─────────────────────────

def test_realtime_ws_path_constant():
    """FR-3.17.7 实时化: WS 连接地址常量唯一于 core.js，watchlist.js 消费"""
    core = _read("js/core.js")
    assert "REALTIME_WS_PATH" in core and "'/api/market/ws/quotes'" in core, \
        "core.js 应定义 REALTIME_WS_PATH=/api/market/ws/quotes"
    assert "function buildRealtimeWsUrl" in core, "core.js 应提供 buildRealtimeWsUrl"
    wl = _read("js/watchlist.js")
    assert "REALTIME_WS_PATH" in wl, "watchlist.js 应消费 WS 路径常量"
    assert "new WebSocket(url)" in wl, "watchlist.js 应使用原生 WebSocket API（零构建）"
    # 后端路由配套存在
    ws_api = _read_backend("api/v1/market_ws.py")
    assert '@router.websocket("/ws/quotes")' in ws_api, "后端应提供 WS /api/market/ws/quotes 路由"
    main = _read_backend("main_new.py")
    assert "ws: wss:" in main, "CSP connect-src 应放行 ws/wss"


def test_realtime_warn_thresholds_constants():
    """FR-3.17.7 实时化: 预警阈值常量（|涨速|>1%、量比>2.5），与后端一致"""
    core = _read("js/core.js")
    assert "WARN_RISE_SPEED_THRESHOLD = 1.0" in core, "涨速阈值应为 1.0"
    assert "WARN_VOLUME_RATIO_THRESHOLD = 2.5" in core, "量比阈值应为 2.5"
    assert "function checkQuoteWarning" in core, "core.js 应提供 checkQuoteWarning 纯函数"
    wl = _read("js/watchlist.js")
    assert "WARN_RISE_SPEED_THRESHOLD" in wl and "WARN_VOLUME_RATIO_THRESHOLD" in wl, \
        "watchlist.js 应消费预警阈值"
    assert "quoteWarningFor" in wl, "watchlist.js 应提供 quoteWarningFor 预警标记"
    backend = _read_backend("realtime_quotes.py")
    assert "WARN_RISE_SPEED_THRESHOLD = 1.0" in backend, "后端涨速阈值应与前端一致"
    assert "WARN_VOLUME_RATIO_THRESHOLD = 2.5" in backend, "后端量比阈值应与前端一致"


def test_realtime_degraded_placeholder_text():
    """FR-3.17.7 实时化: degraded 占位文案'数据不可达'（core.js 常量 + 模板使用）"""
    core = _read("js/core.js")
    assert "REALTIME_DEGRADED_TEXT" in core and "'数据不可达'" in core, \
        "core.js 应定义 REALTIME_DEGRADED_TEXT='数据不可达'"
    wl = _read("js/watchlist.js")
    assert "REALTIME_DEGRADED_TEXT" in wl, "watchlist.js 应消费占位文案"
    page = _read("js/components/ai-page.js")
    assert "数据不可达" in page, "自选页模板应显示'数据不可达'占位"
    assert "rt-degraded" in page, "降级态应使用 rt-degraded 样式类"


def test_realtime_fallback_path_exists():
    """FR-3.17.7 实时化: WS 不可用时回退路径存在（降级不刷新，不中断其它功能）"""
    wl = _read("js/watchlist.js")
    # 回退轮询路径: WS 不可用/失败 → 降级占位 + 不刷新（对其它功能零影响）
    assert "REALTIME_FALLBACK_TEXT" in wl, "watchlist.js 应定义回退文案常量"
    assert "'不刷新'" in wl or "REALTIME_FALLBACK_TEXT" in wl, "回退路径应存在"
    assert "REALTIME_RETRY_MAX" in wl, "应限制连续重连次数（防抖）"
    assert "realtimeDegraded.value = true" in wl, "onerror/onclose 应置降级标记"
    page = _read("js/components/ai-page.js")
    assert "REALTIME_FALLBACK_TEXT" in page, "自选页模板应消费回退文案"
    assert "realtimeQuotes" in wl, "watchlist.js 应维护行内报价状态"


def test_realtime_no_inline_style():
    """FR-3.17.7 实时化: 实时报价新增片段不得使用内联 style（走 CSS 类 + 动态绑定色）"""
    page = _read("js/components/ai-page.js")
    seg = page[page.index("v3.17.7 实时化 (FR-3.17.7): 自选实时报价区"):]
    seg = seg[:seg.index("<!-- 搜索添加 -->")]
    assert 'style="' not in seg, "实时报价区不应含静态内联 style 属性"
    assert ":style=\"{color: realtimeQuoteColor" in page, "涨跌色应经动态绑定（--color-rise/fall）"
    wl = _read("js/watchlist.js")
    assert "quoteFmt.color" in wl or "var(--color-rise)" in wl, "涨跌色应使用 --color-rise/fall 令牌"


def test_realtime_css_classes_defined():
    """FR-3.17.7 实时化: 实时报价区新增类已定义于 themes.css"""
    css = _read("css/themes.css")
    for cls in (".rt-bar", ".rt-title", ".rt-live", ".rt-connecting",
                ".rt-degraded", ".rt-degraded-text", ".watchlist-quote",
                ".quote-price", ".quote-pct", ".quote-meta", ".rt-warn-tag"):
        assert cls in css, f"themes.css 应定义 {cls}"


def test_realtime_backend_pure_function_exists():
    """FR-3.17.7 实时化: 后端报价聚合纯函数 + 订阅校验 + 数据源降级齐备"""
    rt = _read_backend("realtime_quotes.py")
    assert "def build_quote_payload" in rt, "应提供 build_quote_payload 纯函数"
    assert "def parse_subscribe" in rt, "应提供 parse_subscribe 订阅校验"
    assert "class RealtimeQuoteSource" in rt, "应提供 RealtimeQuoteSource 数据源"
    assert "degraded" in rt, "应支持 degraded 降级标记"
    assert "MAX_SUBSCRIBE_CODES" in rt, "应定义订阅上限"
    ws_api = _read_backend("api/v1/market_ws.py")
    assert "get_current_user" in ws_api, "WS 鉴权应复用现有 JWT 校验"
    assert "QUOTE_PUSH_INTERVAL" in ws_api, "WS 应按间隔推送"


def test_realtime_core_node_pure():
    """FR-3.17.7 实时化: core.js checkQuoteWarning 纯函数 node 单测（涨速/量比阈值）"""
    import shutil
    import subprocess

    if shutil.which("node") is None:
        pytest.skip("node 不可用")
    core_path = os.path.join(FRONTEND_ROOT, "js", "core.js")
    code = (
        "const C = require(process.argv[1]);\n"
        "const out = (function(){\n"
        "  return {\n"
        "    riseUp: C.checkQuoteWarning({rise_speed: 1.5, volume_ratio: 1.0}),\n"
        "    riseDown: C.checkQuoteWarning({rise_speed: -1.5, volume_ratio: 1.0}),\n"
        "    vol: C.checkQuoteWarning({rise_speed: 0.0, volume_ratio: 3.0}),\n"
        "    none: C.checkQuoteWarning({rise_speed: 0.5, volume_ratio: 2.0}),\n"
        "    path: C.REALTIME_WS_PATH,\n"
        "    price: C.quoteFmt.price(12.345),\n"
        "    pct: C.quoteFmt.pct(-1.234),\n"
        "    colorUp: C.quoteFmt.color({change_pct: 1.0}),\n"
        "    colorDown: C.quoteFmt.color({change_pct: -1.0}),\n"
        "  };\n"
        "})();\n"
        "process.stdout.write(JSON.stringify(out));\n"
    )
    proc = subprocess.run(["node", "-e", code, core_path], capture_output=True, text=True, timeout=15)
    assert proc.returncode == 0, f"node 执行失败: {proc.stderr}"
    import json as _json
    out = _json.loads(proc.stdout)
    assert out["riseUp"] == "涨速预警"
    assert out["riseDown"] == "跌速预警"
    assert out["vol"] == "放量预警"
    assert out["none"] is None
    assert out["path"] == "/api/market/ws/quotes"
    assert out["price"] == "12.35"
    assert out["pct"] == "-1.23%"
    assert out["colorUp"] == "var(--color-rise)"
    assert out["colorDown"] == "var(--color-fall)"


# ─── v3.17.15 (FR-3.17.15 / 开放 API v2) 一致性回归 ─────────────

def test_system_page_openapi_card():
    """FR-3.17.15: 系统配置页应含'开放 API'卡片 + Key 管理入口"""
    src = _read("js/components/system-page.js")
    assert "开放 API" in src, "system-page 应含'开放 API'卡片"
    assert "生成 Key" in src, "应提供 Key 生成入口"
    assert "吊销" in src, "应提供 Key 吊销入口"
    assert "只读" in src, "应说明 Key 为只读权限"


def test_system_page_openapi_no_plaintext():
    """FR-3.17.15: 生成不显示明文 — 列表只显示前缀, 明文一次性展示且注明不落库"""
    src = _read("js/components/system-page.js")
    start = src.index("<!-- v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->")
    end = src.index("<!-- /v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->")
    seg = src[start:end]
    # 列表只显示前缀 (prefix...), 不展示完整明文
    assert "k.prefix" in seg, "Key 列表应只显示前缀"
    assert "明文" in seg and "仅展示一次" in seg, "应注明明文只展示一次"
    assert "哈希" in seg, "应注明库中仅存哈希"
    # 后端管理端点在签发响应才一次性返回明文
    oa = _read_backend("api/v1/openapi.py")
    assert '"api_key": plain_key' in oa, "明文应仅在签发响应一次性返回"


def test_system_page_openapi_no_inline_style():
    """FR-3.17.15: 开放 API 卡片新增模板不得使用内联 style（走 CSS 类 + tokens）"""
    src = _read("js/components/system-page.js")
    start = src.index("<!-- v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->")
    end = src.index("<!-- /v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 -->")
    seg = src[start:end]
    assert 'style="' not in seg, "开放 API 卡片不应含内联 style 属性"
    assert "style={" not in seg, "开放 API 卡片不应含绑定式内联 style"
    css = _read("css/themes.css")
    for cls in (".openapi-new-key", ".openapi-key-code", ".openapi-key-row", ".openapi-key-prefix"):
        assert cls in css, f"themes.css 应定义 {cls}"


def test_openapi_route_constant():
    """FR-3.17.15: openapi 路由常量单一来源 (core.js) 且被系统页消费"""
    core = _read("js/core.js")
    assert "OPENAPI_ROUTE_BASE" in core and "'/api/openapi'" in core, \
        "core.js 应定义 OPENAPI_ROUTE_BASE=/api/openapi"
    page = _read("js/components/system-page.js")
    assert "OPENAPI_ROUTE_BASE" in page, "system-page 应消费 OPENAPI_ROUTE_BASE 路由常量"
    # 后端路由配套存在
    oa = _read_backend("api/v1/openapi.py")
    assert 'prefix="/openapi"' in oa, "后端应提供 /api/openapi 路由"
    assert '@router.get("/keys"' in oa, "后端应提供 GET /api/openapi/keys"
    assert '@router.post("/keys"' in oa, "后端应提供 POST /api/openapi/keys"
    assert '@router.delete("/keys/{key_id}"' in oa, "后端应提供 DELETE /api/openapi/keys/{key_id}"
    assert 'X-API-Key' in oa, "开放 API 应以 X-API-Key 鉴权"
    # config 提供 OPENAPI_ENABLED 开关
    cfg = _read_backend("config.py")
    assert "OPENAPI_ENABLED" in cfg, "config 应提供 OPENAPI_ENABLED 开关"
    # main_new 按开关挂载 Swagger
    main = _read_backend("main_new.py")
    assert "OPENAPI_ENABLED" in main, "main_new 应按 OPENAPI_ENABLED 挂载 Swagger"


# ─── v3.17.14 (FR-3.17.14 / i18n 国际化) 一致性回归 ─────────────

def test_i18n_language_switch_entry_exists():
    """FR-3.17.14: 语言切换入口存在（系统配置页：language 卡片 + changeLanguage 接线）"""
    page = _read("js/components/system-page.js")
    assert "changeLanguage" in page, "system-page 应提供语言切换事件接线"
    assert "system.language" in page, "系统配置页应含'语言'卡片标题"
    assert "locale" in page, "语言卡片应绑定当前 locale"
    app = _read("js/app-logic.js")
    assert "function changeLanguage" in app, "app-logic 应实现 changeLanguage"
    assert "setPreference('language'" in app, "切换语言应写入 preferences language 偏好"
    keys = _extract_qcstate_keys(app)
    assert "t" in keys and "locale" in keys and "changeLanguage" in keys, \
        "qcState 应注入 t/locale/changeLanguage（模板可用 + 响应式）"


def test_i18n_default_locale_zh_cn():
    """FR-3.17.14: 默认语言仍为 zh-CN（i18n 模块 + app-logic 恢复兜底）"""
    i18n = _read("js/i18n.js")
    assert "DEFAULT_LOCALE = 'zh-CN'" in i18n, "i18n.js 默认语言应为 zh-CN"
    app = _read("js/app-logic.js")
    assert "'zh-CN'" in app, "app-logic locale 恢复默认应为 zh-CN"
    # 语言包注册入口在 index.html 早于 app-logic 装配
    idx = _read("index.html")
    assert "locales/zh-CN.js" in idx and "locales/en.js" in idx, \
        "index.html 应加载 zh-CN/en 语言包"
    assert idx.index("locales/zh-CN.js") < idx.index("app-logic.js"), \
        "语言包应早于 app-logic.js 加载"


def test_i18n_preferences_language_key():
    """FR-3.17.14: 语言偏好持久化 — preferences.js language 键 + 后端 user_config 同步"""
    prefs = _read("js/preferences.js")
    assert "'language'" in prefs, "preferences.js 应含 language 偏好键"
    assert "'zh-CN'" in prefs and "'en'" in prefs, "language 取值应含 zh-CN/en"
    assert "language" in prefs.split("PREFERENCE_VALUES")[1], \
        "language 应注册到 PREFERENCE_VALUES"
    ucfg = _read_backend("api/v1/user_config.py")
    assert '"language"' in ucfg, "后端 user_config 应支持 language 偏好键（重启保持）"



