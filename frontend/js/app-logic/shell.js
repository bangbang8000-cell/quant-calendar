// 6.3.0 (T-6.3.0.10): App 逻辑层 — 根壳域（i18n / 核心 UI 助手 / 菜单与导航 / 当前用户）
// 自 frontend/js/app-logic.js 按域逐字符切出（保留原缩进）；装配见 app-logic.js 的 create 调用
// ctx 依赖: ref/computed/watch
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.shell = {
    create: function (ctx) {
      const { ref, computed, watch } = ctx;
                // ===== v3.11(11.3): 共享配置脏标记（AI 配置段与系统配置域共用，提前声明避免 TDZ）=====
                const configChanged = ref(false);
                // ===== v3.17.14 (FR-3.17.14): i18n 装配（locale ref + 全局 t + 语言切换）=====
                // locale 为响应式 ref：模板 t(key) 读取其 .value → locale 变化整页重渲染
                const i18n = (window.__quantModules && window.__quantModules.i18n) || {};
                const _supportedLocales = (i18n.SUPPORTED_LOCALES || ['zh-CN', 'en']);
                const _prefLanguage = (window.__quantModules && window.__quantModules.preferences)
                  ? ((window.__quantModules.preferences.getLocal() || {}).language || 'zh-CN') : 'zh-CN';
                const locale = ref(_supportedLocales.indexOf(_prefLanguage) !== -1 ? _prefLanguage : 'zh-CN');
                if (typeof i18n.bindLocale === 'function') i18n.bindLocale(locale);
                const t = (typeof i18n.t === 'function') ? i18n.t : (function (k) { return String(k); });
                function changeLanguage(l) {
                  if (_supportedLocales.indexOf(l) === -1) return;
                  locale.value = l;
                  if (typeof i18n.setLocale === 'function') i18n.setLocale(l);
                  if (window.__quantModules && window.__quantModules.preferences) {
                    window.__quantModules.preferences.setPreference('language', l);
                  }
                }
                // ===== v3.16 (16.6): v-html 消毒委托（核心实现见 core.js；经 qcState 注入各组件模板使用）=====
                function sanitizeHtml(html, opts) {
                    if (window.__quantModules && window.__quantModules.core && window.__quantModules.core.sanitizeHtml) {
                        return window.__quantModules.core.sanitizeHtml(html, opts);
                    }
                    return html == null ? '' : String(html);
                }
                // v3.16 (16.6): 键盘可达通用助手 — tabindex=0 的可点击元素 Enter/Space 触发 click
                function keyClick(e) {
                    if (e.key === 'Enter' || e.key === ' ' || e.key === 'Spacebar') {
                        e.preventDefault();
                        if (e.currentTarget && typeof e.currentTarget.click === 'function') e.currentTarget.click();
                    }
                }
                // v3.16 (16.6): 弹窗焦点管理 — 记录打开前焦点，关闭后归还；打开后焦点首落首个 input/textarea
                let _dialogTrigger = null;
                function rememberDialogTrigger() {
                    if (document.activeElement && document.activeElement !== document.body) _dialogTrigger = document.activeElement;
                }
                function restoreDialogFocus() {
                    if (_dialogTrigger && _dialogTrigger.isConnected) {
                        try { _dialogTrigger.focus(); } catch (e) { /* ignore */ }
                    }
                    _dialogTrigger = null;
                }
                function focusFirstInDialog() {
                    Vue.nextTick(() => {
                        const dlg = document.querySelector('.el-dialog-overlay .el-dialog');
                        if (!dlg) return;
                        const first = dlg.querySelector('input:not([type=hidden]), textarea, [tabindex]:not([tabindex="-1"])');
                        if (first && typeof first.focus === 'function') first.focus();
                    });
                }
                // v3.16 (16.7): 离线检测 — 全局在线状态（供各页统一展示 offline 错误态）
                const isOnline = ref(typeof navigator !== 'undefined' ? navigator.onLine : true);
                if (typeof window !== 'undefined') {
                    window.addEventListener('online', () => { isOnline.value = true; });
                    window.addEventListener('offline', () => { isOnline.value = false; });
                }

                // 窗口关闭前确认（防止未保存配置丢失）
                window.addEventListener('beforeunload', (e) => {
                    if (configChanged.value) {
                        e.preventDefault();
                        e.returnValue = '您有未保存的配置变更，确定要离开吗？';
                        return e.returnValue;
                    }
                });

                // v3.8.11: 触觉反馈
                function hapticFeedback(style = 'light') {
                    if (typeof navigator !== 'undefined' && navigator.vibrate) {
                        if (style === 'light') navigator.vibrate(10);
                        else if (style === 'medium') navigator.vibrate(20);
                        else if (style === 'heavy') navigator.vibrate([10, 30, 10]);
                    }
                }
                // v3.0: 侧边栏折叠
                const sidebarCollapsed = ref(localStorage.getItem('sidebar_collapsed') === '1');
                function toggleSidebar() {
                    sidebarCollapsed.value = !sidebarCollapsed.value;
                    localStorage.setItem('sidebar_collapsed', sidebarCollapsed.value ? '1' : '0');
                }

// v1.9.2: 用户组配置（菜单可见性由此驱动）
                const groupsConfig = ref(null);

const allMenuDefs = [
                    // V6.0 (PRD-6.0 FR-6.0.1): 新增 group(一级分组) + iconName(Lucide 图标) 字段
                    // V6.1 (PRD-6.1 F4): 移除 icon(emoji) 字段 — 图标仅经 iconName + AppIcon 渲染
                    // 分组: research=量化投研 / platform=平台管理
                    { key: 'strategies', name: '策略总览', iconName: 'layout-dashboard', group: 'research', subPages: ['overview', 'merrill', 'market', 'consensus'] }, // V5.2.3: 执行看板移入系统配置; V6.6.1: market 更名「大盘行情」
                    { key: 'calendar', name: '量化日历', iconName: 'calendar', group: 'research', subPages: ['calendar', 'pool'] }, // V6.6.1: 日/周/月/年 4 视图合并为页内切换 (PRD F-6.6.7)
                    { key: 'ai', name: '智能评估', iconName: 'bot', group: 'research', subPages: ['overview', 'focus', 'watchlist', 'history', 'evaluation-analysis', 'portfolio', 'chat_history'] }, // V5.0.11: 评估分析独立子页; V5.4.0: 重点跟踪子页; V6.6.1: 组合持仓入口 (PRD 结论一)
                    { key: 'research', name: '策略研究', iconName: 'flask-conical', group: 'research', subPages: ['research-overview', 'quant-research', 'strategy-manage', 'backtest', 'backtest-history'] }, // V6.6.1: 策略编写+全新策略合并为「策略管理」 (PRD 结论五)
                    { key: 'shortterm', name: '短线复盘', iconName: 'zap', group: 'research', subPages: ['overview', 'market-review', 'ztpool', 'lhb', 'sector', 'intraday'] }, // V5.2.3: 市场复盘+异动扫描并入; V6.9.1-fix: 异动扫描删除
                    // V6.9.1-fix: 系统状态一级菜单 (自系统配置分离, 置于系统配置前) — 运行监控/数据/执行域
                    { key: 'ops', name: '系统状态', iconName: 'activity', group: 'platform', subPages: ['status', 'health', 'schedule', 'usage', 'guard', 'datadict', 'execution'] }, // V6.9.1-fix2: status(状态概览) 移入 ops 首位
                    { key: 'system', name: '系统配置', iconName: 'settings', group: 'platform', subPages: ['config', 'feature', 'autoeval', 'datasource', 'user', 'notification', 'about'], guestSubPages: ['config', 'about'] } // V6.9.3: 菜单序重排 — 基础配置置后/通知中心移最后; 6.2.x: 关于恒置于最后 (术语表已移除)
                ];
                const menus = computed(() => {
                    const role = currentUser.value?.role || 'guest';
                    const groupId = currentUser.value?.group || role;
                    const group = groupsConfig.value?.[groupId] || null;
                    let items = allMenuDefs.map(m => {
                        // group-based visibility (default: show if no group config)
                        if (group && group.visible_menus && m.key in group.visible_menus) {
                            if (!group.visible_menus[m.key]) return null;
                        }
                        const item = { ...m, name: t('nav.' + m.key) || m.name };
                        // Filter subPages by group config
                        if (group?.visible_sub_pages) {
                            item.subPages = m.subPages.filter(sp => {
                                const fullKey = m.key + '.' + sp;
                                return group.visible_sub_pages[fullKey] !== false;
                            });
                        }
                        // Guest: system limited subPages
                        if (m.key === 'system' && role === 'guest' && m.guestSubPages) {
                            item.subPages = m.guestSubPages;
                        }
                        return item;
                    }).filter(Boolean);
                    return items;
                });

                async function loadGroupConfig() {
                    try {
                        const token = localStorage.getItem('quant_token');
                        if (!token) return;
                        const res = await fetch('/api/groups/my');
                        if (res.ok) {
                            const data = await res.json();
                            groupsConfig.value = { [data.group_id]: data.group };
                        }
                    } catch(e) { console.warn('loadGroupConfig:', e); }
                }
                const currentPage = ref('strategies');
                // V6.3 (PRD-6.3 F3/F4): 导航形态 — localStorage 持久化全局偏好 (V6.9.6 起默认 toptab)
                // V6.4 (PRD-6.4): 动态页签已移除 (tabsEnabled 不再需要)
                const _navPrefs = (window.__quantModules && window.__quantModules.navModeCore)
                    ? window.__quantModules.navModeCore.readPrefs()
                    : { navMode: 'toptab' };
                const navMode = ref(_navPrefs.navMode);
                function setNavMode(v) {
                    const C = window.__quantModules && window.__quantModules.navModeCore;
                    navMode.value = C ? C.normalizeNavMode(v) : ((v === 'tree' || v === 'toptab') ? v : 'toptab');
                    if (C) C.writePrefs({ navMode: navMode.value });
                }
                const shortcutHelpItems = [
                    { keys: 'Ctrl+K', desc: '打开命令面板 (股票搜索/菜单/指令)' },
                    { keys: 'Ctrl+/', desc: '显示/隐藏快捷键帮助' },
                    { keys: '1-5', desc: '切换导航页面 (非输入态)' },
                    { keys: 'R', desc: '刷新当前页 (策略/日历/AI, 非输入态)' },
                    // v3.16 (16.5): 帮助面板与 handleGlobalKeydown 实现同步（补齐方向键）
                    { keys: '← / →', desc: '日历页：上一 / 下一交易日' },
                    { keys: '↑ / ↓', desc: '日历页：切换 日/周/月/年 视图' },
                    // V5.3.0 (T-5.3.3.2 / FR-5.3.3.2): 5.3.3 新增高频快捷键
                    { keys: 'Ctrl+D', desc: '今日一屏 (直接跳转)' },
                    { keys: 'Ctrl+E', desc: '批量 AI 评估' },
                    { keys: 'Ctrl+G', desc: '加入组合 (跳转组合持仓)' },
                    // V6.7.1 (PRD F-6.7.2): 高频直达快捷键
                    { keys: 'Ctrl+H', desc: '打开评估历史' },
                    { keys: 'Ctrl+Shift+S', desc: '打开短线复盘' },
                    { keys: 'F5', desc: '刷新当前页 (同 R)' },
                    { keys: 'Ctrl+B', desc: '折叠/展开侧边栏' },
                    { keys: 'Ctrl+J', desc: '打开 AI 问股' },
                ];
                // v3.8.2: 统一导航入口
                function navigateTo(page, subPage = '') {
                    hapticFeedback('light');
                    currentPage.value = page;
                    currentSubPage.value = subPage;
                    localStorage.setItem('quant_last_subpage', subPage);
                }

                // V5.15 (F2): 页面可见性校验 — 用户组过滤后当前页被隐藏时重定向到首个可见菜单
                function ensureVisiblePage() {
                    const items = menus.value;
                    if (!items || !items.length) return;
                    const visible = items.some(function (m) { return m.key === currentPage.value; });
                    if (!visible) {
                        const first = items[0];
                        console.info('[nav] 当前页已被用户组隐藏, 跳转至', first.key);
                        currentPage.value = first.key;
                        currentSubPage.value = (first.subPages && first.subPages[0]) || '';
                        return;
                    }
                    // 子页越界兜底: 当前子页不在可见子页列表时重置为默认子页
                    const menu = items.find(function (m) { return m.key === currentPage.value; });
                    if (menu && menu.subPages && menu.subPages.length
                        && !menu.subPages.includes(currentSubPage.value)) {
                        currentSubPage.value = menu.subPages[0];
                    }
                }
                const currentSubPage = ref('overview');
                const currentUser = ref(null);
                // V5.15 (F2): 组配置变更 → menus 重算 → 兜底重校验 (运行期任何隐藏都不滞留隐藏页)
                // 注意: watch 必须注册在 currentUser/groupsConfig 声明之后 — watch(source, cb) 创建时会立即求值 source 基线,
                // 若在 currentUser 声明前注册会触发 TDZ ReferenceError (Cannot access 'currentUser' before initialization)
                watch(menus, function () { ensureVisiblePage(); });
                // v3.17.9 (FR-3.17.9): 会话先行恢复 — 主界面首帧即渲染（无需等 onMounted 再恢复登录态）
                (function() {
                    if (typeof localStorage === 'undefined') return;
                    const savedUser = localStorage.getItem('quant_user');
                    const savedToken = localStorage.getItem('quant_token');
                    if (savedUser && savedToken) {
                        try { currentUser.value = JSON.parse(savedUser); } catch (e) { /* 解析失败按未登录 */ }
                    }
                })();
return {
        configChanged, locale, t, changeLanguage, sanitizeHtml, keyClick,
        rememberDialogTrigger, restoreDialogFocus, focusFirstInDialog, isOnline,
        hapticFeedback, sidebarCollapsed, toggleSidebar, groupsConfig, allMenuDefs,
        menus, loadGroupConfig, currentPage, currentSubPage, navMode, setNavMode,
        shortcutHelpItems, navigateTo, ensureVisiblePage, currentUser,
      };
    },
  };
})();
