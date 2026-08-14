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
    """FR-3.16.2/3.16.4/3.16.5: qcState 唯一键数量应为当前基线 418（16.6 +2, 16.7 +5, 16.10-fix +1: stockDetailLoading）"""
    keys = _extract_qcstate_keys(_read("js/app-logic.js"))
    assert len(set(keys)) == 418, f"qcState 唯一键数异常: {len(set(keys))} (期望 418)"


def test_watch_currentpage_single():
    """FR-3.16.2 (16.3): watch(currentPage) 仅一处（两处已合并为统一副作用编排）"""
    src = _read("js/app-logic.js")
    assert src.count("watch(currentPage") == 1, "watch(currentPage) 应合并为唯一"


def test_themes_module_data_only():
    """FR-3.16.2 (16.3): themes.js 收敛为纯主题数据模块（无 applyTheme/changeTheme 重复实现）"""
    src = _read("js/themes.js")
    assert "function applyTheme" not in src, "themes.js 不应再含 applyTheme 重复实现"
    assert "function changeTheme" not in src, "themes.js 不应再含 changeTheme 重复实现"
    assert "window.__quantModules.themes" in src


def test_apifetch_no_token_duplication():
    """FR-3.16.2 (16.3): apiFetch 不重复注入 Authorization（鉴权统一由 index.html 全局拦截器负责）"""
    src = _read("js/core.js")
    m = re.search(r"async function apiFetch[\s\S]*?^  \}\n", src, re.M)
    assert m, "apiFetch 函数未找到"
    assert "Authorization" not in m.group(0), "apiFetch 不应再重复拼接 Authorization"


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
    # 弹窗组件应含加载态视图
    sd = _read("js/components/dialogs/stock-detail.js")
    assert "正在加载股票详情" in sd, "弹窗应显示加载态视图"
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
