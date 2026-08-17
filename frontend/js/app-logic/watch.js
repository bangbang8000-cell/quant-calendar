// quant-calendar: App 逻辑层 — 副作用 watch 编排域 (FR-3.17.11.1 拆分自 app-logic.js)
// 由 app-logic.js 在全部域装配完成后调用 register(ctx) 注册非 currentPage 的副作用监听
// 注意: watch(currentPage) 为测试护栏片段, 必须保留在 app-logic.js 中, 不在此注册
// ctx 依赖: 各域 refs 与加载函数（装配完成后均可用, 直接引用）
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.watch = {
    register: function (ctx) {
      const { watch } = Vue;
      const { strategyFilter, currentView, statusFilter,
              currentPage, currentSubPage, menus, currentUser, strategyFilterCounts,
              dates, selectedDate, consensus, loadConsensusData,
              fetchMerrillClock, fetchMarketData,
              loadWatchlist, loadAiHistory, preloadWatchlistKline, loadChatHistory,
              loadSystemStatus, checkTushareConnection, loadSysMonitor, loadAnalytics,
              loadHealthDetail,
              loadAutoEvaluateConfig, loadDatasourceConfig, loadFeishuConfig, loadAiConfig,
              loadRateLimit, loadDataRefreshConfig, loadBackups, loadAllGroups, loadUsers,
              stockDetailTab, stockDetailVisible, stockKlineLoaded, loadStockKline,
              showMerrillDetail, indexDetailVisible, restoreDialogFocus } = ctx;

      // 自动保存策略筛选配置
      watch(strategyFilter, (val) => {
        localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(val.selected));
        localStorage.setItem('quant_strategy_filter_mode', val.mode);
      }, { deep: true });

      // ===== 监听变化 =====
      watch([currentView, statusFilter], (newVal, oldVal) => {
        if (newVal[0] !== oldVal[0]) {
          loadConsensusData();
        }
      });

      // ===== v1.5.0: 子页面切换同步 =====
      watch([currentPage, currentSubPage], ([page, sub]) => {
        // 保存当前子页
        if (sub) localStorage.setItem('quant_last_subpage', sub);
        // 自动设置子页默认值（首次进入时 sub 可能为空）
        if (!sub && menus.value.find(m => m.key === page)) {
          const menu = menus.value.find(m => m.key === page);
          if (menu && menu.subPages.length > 0) {
            currentSubPage.value = menu.subPages[0];
          }
        }
        // 日历页：同步 currentSubPage → currentView
        if (page === 'calendar' && ['daily','weekly','monthly','yearly'].includes(sub)) {
          const viewMap = { daily: 'day', weekly: 'week', monthly: 'month', yearly: 'year' };
          if (viewMap[sub] && currentView.value !== viewMap[sub]) {
            currentView.value = viewMap[sub];
            if (dates.value.length > 0) {
              selectedDate.value = dates.value[dates.value.length - 1] || '';
            }
            setTimeout(loadConsensusData, 50);
          }
        }
        // 日历页 pool：确保共识数据已加载
        if (page === 'calendar' && sub === 'pool') {
          if (!consensus.value || consensus.value.length === 0) {
            if (dates.value.length > 0 && !selectedDate.value) {
              selectedDate.value = dates.value[dates.value.length - 1] || '';
            }
            setTimeout(loadConsensusData, 50);
          }
        }
        // 策略总览子页切换
        if (page === 'strategies') {
          if (sub === 'merrill') fetchMerrillClock();
          if (sub === 'market') fetchMarketData();
          if (sub === 'consensus') {
            if (!consensus.value || consensus.value.length === 0) {
              setTimeout(loadConsensusData, 50);
            }
          }
        }
        // AI 子页切换
        if (page === 'ai') {
          if (sub === 'watchlist') { loadWatchlist(); loadAiHistory(); setTimeout(preloadWatchlistKline, 500); }
          if (sub === 'history') loadAiHistory();
          if (sub === 'overview') { loadAiHistory(); loadWatchlist(); }
          if (sub === 'chat_history') loadChatHistory();
        }
        // 系统配子页切换
        if (page === 'system' && currentUser.value?.role === 'admin') {
          if (sub === 'status') { loadSystemStatus(); checkTushareConnection(); }
          if (sub === 'usage') { loadSysMonitor(); loadAnalytics(); loadHealthDetail(); }
          if (sub === 'autoeval') loadAutoEvaluateConfig();
          if (sub === 'datasource') loadDatasourceConfig();
          if (sub === 'feature') { loadFeishuConfig(); loadAiConfig(); loadRateLimit(); loadDataRefreshConfig(); loadBackups(); }
          if (sub === 'user') { loadAllGroups(); loadUsers(); }
        }
      });

      // K线标签切换时自动加载
      watch(stockDetailTab, (tab, oldTab) => {
        if (tab === 'kline' && oldTab && oldTab !== 'kline' && stockDetailVisible.value) {
          stockKlineLoaded.value = false;
          setTimeout(() => loadStockKline('daily'), 50);
        }
      });

      // 美林时钟弹窗关闭时恢复背景滚动
      watch(showMerrillDetail, (val) => {
        if (!val) {
          document.documentElement.style.overflow = '';
          document.body.style.overflow = '';
        }
      });

      // v3.16 (16.6): 详情弹窗关闭后焦点归还触发器
      watch([stockDetailVisible, indexDetailVisible], ([sv, iv]) => {
        if (!sv && !iv) restoreDialogFocus();
      });
    },
  };
})();
