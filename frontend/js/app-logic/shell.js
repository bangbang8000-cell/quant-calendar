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
                    // 6.4.2 (FR-646): 离线恢复后广播事件, 由 keys.js 自动重取当前页数据
                    window.addEventListener('online', () => {
                        const wasOffline = !isOnline.value;
                        isOnline.value = true;
                        if (wasOffline) {
                            const EM = window.ElementPlus && window.ElementPlus.ElMessage;
                            if (EM) EM.success('网络已恢复，正在刷新当前页');
                            try { window.dispatchEvent(new CustomEvent('qc:online-recovered')); } catch (e) { console.warn('[shell] 离线恢复事件派发失败', e); }
                        }
                    });
                    window.addEventListener('offline', () => { isOnline.value = false; });
                    // 6.4.2 (FR-646 第 4/5 条): 全局离线提示 + 未捕获异常上报 (不静默)
                    window.addEventListener('unhandledrejection', (ev) => {
                        const reason = ev && ev.reason;
                        try {
                            if (window.QuantEvents && typeof window.QuantEvents.report === 'function') {
                                window.QuantEvents.report(reason, 'unhandledrejection');
                            } else {
                                console.warn('[qc] 未捕获的 Promise 异常', reason);
                            }
                            const EM = window.ElementPlus && window.ElementPlus.ElMessage;
                            if (EM && isOnline.value === false) EM.warning('网络已断开，恢复后会自动刷新当前页');
                        } catch (e) {
                            console.warn('[shell] 异常上报失败', e);
                        }
                    });
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

// 6.5.0 (FR-653): 一级导航 7→5 — 结构由 nav-merge-core 单一来源驱动
                // member.page/member.sub 保持旧内部键: 懒加载/pageComp/子页 watch 零改动;
                // activePages 供激活态判定 (workbench 收纳 strategies/calendar/shortterm 三个旧一级)
                const _navMerge = (typeof window !== 'undefined' && window.QuantNavMerge) || null;
                const allMenuDefs = (_navMerge ? _navMerge.nav() : []).map(function (p) {
                    var pages = [];
                    p.members.forEach(function (m) { if (pages.indexOf(m.page) < 0) pages.push(m.page); });
                    p.activePages = pages;
                    p.subPages = p.members.map(function (m) { return m.key; });
                    return p;
                });
                const menus = computed(() => {
                    const role = currentUser.value?.role || 'guest';
                    const groupId = currentUser.value?.group || role;
                    const group = groupsConfig.value?.[groupId] || null;
                    let items = allMenuDefs.map(m => {
                        // group-based visibility (default: show if no group config)
                        // 6.5.0 (FR-653): 可见性读时迁移 — 新键值优先, 旧配置 key 仍生效
                        if (group && !_navMerge.primaryVisible(group, m.key)) return null;
                        const item = { ...m, name: t('nav.' + m.key) || m.name };
                        // 6.5.0 (FR-653): 成员级过滤 (新键直查 + 旧键回查, 迁移前后可见性一致)
                        if (group && (group.visible_sub_pages || group.visible_menus)) {
                            item.members = m.members.filter(mm => _navMerge.memberVisible(group, m.key, mm));
                            item.subPages = item.members.map(mm => mm.key);
                            if (!item.members.length) return null;
                        }
                        // Guest: system limited subPages
                        if (m.key === 'system' && role === 'guest' && m.guestSubPages) {
                            item.members = item.members.filter(mm => m.guestSubPages.indexOf(mm.sub) >= 0);
                            item.subPages = item.members.map(mm => mm.key);
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
                    { keys: '1-7', desc: '切换导航页面 (非输入态)' },
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
                // 6.5.0 (FR-653 第 2 条): 一级 7→5 漏斗 — navigateTo 是唯一收口。
                // 调用方仍传旧键 (strategies/merrill 等), 在此归一为新键/旧内部坐标:
                //   - 新键: navigateTo('workbench','strategies-merrill') → 内部 (strategies, merrill)
                //   - 旧键: navigateTo('strategies','merrill') → 原样 (兼容全部既有调用点)
                // hash/存储持久化经 nav-merge-core.toHash 写新格式。
                function navigateTo(page, subPage = '') {
                    hapticFeedback('light');
                    const C = (typeof window !== 'undefined') ? window.QuantNavMerge : null;
                    if (C) {
                        const internal = C.normalize(page, subPage || '');
                        if (internal) {
                            currentPage.value = internal.page;
                            currentSubPage.value = internal.sub;
                            try {
                                localStorage.setItem('quant_last_subpage', internal.sub);
                                localStorage.setItem('quant_last_page',
                                    C.toHash(internal.page, internal.sub).slice(1));
                            } catch (e) { /* 存储失败不影响导航 */ }
                            return;
                        }
                        // 解析失败 (未知页) → 保持旧行为, 由 ensureVisiblePage 兜底
                    }
                    currentPage.value = page;
                    currentSubPage.value = subPage;
                    localStorage.setItem('quant_last_subpage', subPage);
                }

                // V5.15 (F2): 页面可见性校验 — 用户组过滤后当前页被隐藏时重定向到首个可见菜单
                // 6.5.0 (FR-653): 一级合并后 currentPage 可能是任一成员旧键 — 以 activePages 判定;
                // 子页越界以「当前旧坐标所属成员」校验 (成员 key 与旧 sub 键解耦)。
                function ensureVisiblePage() {
                    const items = menus.value;
                    if (!items || !items.length) return;
                    const C = (typeof window !== 'undefined') ? window.QuantNavMerge : null;
                    const visible = items.some(function (m) {
                        return m.activePages ? m.activePages.indexOf(currentPage.value) >= 0
                                             : m.key === currentPage.value;
                    });
                    if (!visible) {
                        const first = items[0];
                        console.info('[nav] 当前页已被用户组隐藏, 跳转至', first.key);
                        const firstMember = first.members && first.members[0];
                        if (C && firstMember) {
                            currentPage.value = firstMember.page;
                            currentSubPage.value = firstMember.sub;
                        } else {
                            currentPage.value = first.key;
                            currentSubPage.value = (first.subPages && first.subPages[0]) || '';
                        }
                        return;
                    }
                    // 子页越界兜底: 归一后子页不在该一级可见成员集合 → 重置为首个可见成员
                    const menu = items.find(function (m) {
                        return m.activePages ? m.activePages.indexOf(currentPage.value) >= 0
                                             : m.key === currentPage.value;
                    });
                    if (menu && menu.members && menu.members.length) {
                        const cur = C ? C.normalize(currentPage.value, currentSubPage.value) : null;
                        const inMenu = cur && menu.members.some(function (mm) {
                            return mm.page === cur.page && mm.sub === cur.sub;
                        });
                        if (!inMenu) {
                            currentPage.value = menu.members[0].page;
                            currentSubPage.value = menu.members[0].sub;
                        }
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
