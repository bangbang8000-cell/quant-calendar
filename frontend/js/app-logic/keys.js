// quant-calendar: App 逻辑层 — 全局搜索/快捷键/命令面板状态域 (FR-3.17.11.1 拆分自 app-logic.js)
// 经 window.__quantAppLogic.keys.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: menus/subPageNames/navigateTo/currentPage/currentView/navigateDate/switchView
//           getLoadDashboardData/refreshCalendarData/getLoadAiHistory/exportCSV
//           getShowBatchEvaluate/openAiFab/toggleSidebar/showStockDetail (get* 为惰性访问器)
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.keys = {
    create: function (ctx) {
      const { menus, subPageNames, navigateTo, currentPage, currentView,
              navigateDate, switchView, getLoadDashboardData, refreshCalendarData,
              getLoadAiHistory, exportCSV, getShowBatchEvaluate,
              openAiFab, toggleSidebar, showStockDetail } = ctx;

      // ===== v1.10 / v3.11(11.2): 全局搜索 =====
      // v3.11: 升级为三域检索——菜单跳页 / 指令动作 / 股票直达详情（复用 command-panel-core 纯逻辑）
      const searchQuery = ref('');
      async function searchStocks(queryString, cb) {
        if (!queryString || queryString.trim().length < 1) { cb([]); return; }
        const QCP = window.QuantCommandPanel;
        let localHits = [];
        if (QCP && menus.value) {
          localHits = QCP.buildSearchSuggestions(queryString, menus.value, subPageNames, QCP.DEFAULT_COMMANDS);
        }
        // v3.17.10 (FR-3.17.10): 本地拼音检索兜底（内置核心清单 + 注册股票；数据源不可达时仍可直达）
        const P = window.__quantModules && window.__quantModules.pinyin;
        if (P) {
          P.searchCoreStocks(queryString).forEach(function (r) {
            localHits.push({ value: r.code + ' ' + r.name, type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' });
          });
        }
        try {
          const res = await fetch('/api/search?q=' + encodeURIComponent(queryString));
          const data = await res.json();
          if (data.success && data.results) {
            const stocks = data.results.map(function(r) {
              return { value: r.code + ' ' + r.name, type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' };
            });
            cb(localHits.concat(stocks));
          } else { cb(localHits); }
        } catch(e) { console.warn('[searchStocks] fetch failed:', e); cb(localHits); }
      }
      // V4.8.1 (UMD 修复): 不再依赖 window.QuantCommandPanel (Rollup CJS 转换下挂载被跳过),
      // dispatchSearchSelection 逻辑内联 (与 command-panel-core.js 保持一致, TC-11.4)
      function _dispatchSearchSelection(item) {
        if (!item) return null;
        if (item.type === 'menu') return { action: 'menu', menuKey: item.menuKey, subPage: item.subPage };
        if (item.type === 'command') return { action: 'command', key: item.key };
        if (item.type === 'stock' || (item.code && item.name)) return { action: 'stock', code: item.code, name: item.name };
        return null;
      }
      function onSearchSelect(item) {
        searchQuery.value = '';
        const QCP = window.QuantCommandPanel;
        const d = QCP ? QCP.dispatchSearchSelection(item) : _dispatchSearchSelection(item);
        if (!d) return;
        if (d.action === 'menu') { navigateTo(d.menuKey, d.subPage); return; }
        if (d.action === 'command') { runGlobalCommand(d.key); return; }
        if (d.action === 'stock' && typeof showStockDetail === 'function') {
          showStockDetail(d.code, d.name);
        }
      }
      function runGlobalCommand(key) {
        if (key === 'refresh') {
          const p = currentPage.value;
          if (p === 'strategies') getLoadDashboardData().catch(function(){});
          else if (p === 'calendar') refreshCalendarData().catch(function(){});
          else if (p === 'ai') getLoadAiHistory().catch(function(){});
        } else if (key === 'export') { exportCSV(); }
        else if (key === 'batch') { getShowBatchEvaluate().value = true; }
        else if (key === 'ai') { openAiFab(); }
        else if (key === 'sidebar') { toggleSidebar(); }
      }

      const shortcutHelpVisible = ref(false);
      const commandPaletteVisible = ref(false);
      function isTypingTarget(el) {
        if (!el) return false;
        const tag = el.tagName;
        return tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || el.isContentEditable;
      }
      function handleGlobalKeydown(e) {
        if (isTypingTarget(e.target)) return;
        const k = e.key.toLowerCase();
        if (e.ctrlKey && k === 'k') { e.preventDefault(); commandPaletteVisible.value = true; return; }
        if (e.ctrlKey && k === '/') { e.preventDefault(); shortcutHelpVisible.value = !shortcutHelpVisible.value; return; }
        if (e.ctrlKey || e.metaKey || e.altKey) return;
        if (k >= '1' && k <= '5') {
          const idx = parseInt(k) - 1;
          const page = menus.value[idx];
          if (page) navigateTo(page.key, page.subPages[0] || '');
          return;
        }
        if (k === 'r') { refreshCurrentPage(); }
        // v3.11 (FR-3.11.5): 日历页方向键导航
        // ←/→ 上一/下一交易日；↑/↓ 循环切换 日/周/月/年 视图
        if (k === 'arrowleft' || k === 'arrowright' || k === 'arrowup' || k === 'arrowdown') {
          if (currentPage.value === 'calendar') {
            e.preventDefault();
            if (k === 'arrowleft' || k === 'arrowright') {
              navigateDate(k === 'arrowleft' ? -1 : 1);
            } else {
              const vIdx = ['day', 'week', 'month', 'year'].indexOf(currentView.value);
              const next = ['day', 'week', 'month', 'year'][(vIdx + (k === 'arrowup' ? -1 : 1) + 4) % 4];
              switchView(next);
            }
          }
        }
      }
      function refreshCurrentPage() {
        const page = currentPage.value;
        if (page === 'strategies') getLoadDashboardData().catch(() => {});
        else if (page === 'calendar') refreshCalendarData().catch(() => {});
        else if (page === 'ai') getLoadAiHistory().catch(() => {});
      }

      return {
        searchQuery, searchStocks, onSearchSelect, runGlobalCommand,
        shortcutHelpVisible, commandPaletteVisible,
        isTypingTarget, handleGlobalKeydown, refreshCurrentPage,
      };
    },
  };
})();
