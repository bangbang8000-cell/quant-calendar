// quant-calendar: App 逻辑层 — 副作用 watch 编排域 (FR-3.17.11.1 拆分自 app-logic.js)
// 由 app-logic.js 在全部域装配完成后调用 register(ctx) 注册非 currentPage 的副作用监听
// 注意: watch(currentPage) 为测试护栏片段, 必须保留在 app-logic.js 中, 不在此注册
// ctx 依赖: 各域 refs 与加载函数（装配完成后均可用, 直接引用）
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.watch = {
    register: function (ctx) {
      const { watch } = Vue;
      let usageRefreshTimer = null;  // v3.17.6: 用量统计子页 30s 自动刷新
      const { strategyFilter, currentView, statusFilter,
              currentPage, currentSubPage, menus, currentUser, strategyFilterCounts, lazyTick,
              dates, selectedDate, consensus, loadConsensusData,
              fetchMerrillClock, fetchMarketData,
              loadWatchlist, loadAiHistory, preloadWatchlistKline, loadChatHistory,
              loadSystemStatus, checkTushareConnection, loadSysMonitor, loadAnalytics,
              loadHealthDetail, loadHealthMetrics, loadAiUsage, loadFactCheck,
              loadAutoEvaluateConfig, loadDatasourceConfig, loadFeishuConfig, loadAiConfig, loadAiVendors,
              loadRateLimit, loadDataRefreshConfig, loadBackups, loadAllGroups, loadUsers,
              stockDetailTab, stockDetailVisible, stockKlineLoaded, loadStockKline,
              currentKlinePeriod,
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
        // V6.0 (P1-3): URL hash 同步 — 支持刷新定位与浏览器前进后退
        // 格式: #<page>/<sub>（如 #system/health）；hash 由 hashchange 监听回写状态
        // V6.6.1: 日历主视图 (sub=calendar) 写 #calendar 裸 hash（避免 #calendar/calendar 冗余）
        try {
          const CAL_BARE = (page === 'calendar' && sub === 'calendar');
          const hashSub = (!CAL_BARE && sub) || '';
          const target = hashSub ? '#' + page + '/' + hashSub : '#' + page;
          if (window.location.hash !== target) {
            window.location.hash = target;
          }
        } catch (e) { /* hash 同步失败不阻塞导航 */ }
        // 保存当前子页
        if (sub) localStorage.setItem('quant_last_subpage', sub);
        // 自动设置子页默认值（首次进入时 sub 可能为空）
        if (!sub && menus.value.find(m => m.key === page)) {
          const menu = menus.value.find(m => m.key === page);
          if (menu && menu.subPages.length > 0) {
            currentSubPage.value = menu.subPages[0];
          }
        }
        // V5.2.12 (FIX-2): 短线复盘的 market-review 渲染 qc-research-page —
        // 懒加载 chunk 按 currentPage 分组(切短线复盘只加载 shortterm chunk),
        // research 组件未注册时 <component :is> 解析失败 → 页面空白
        if (page === 'shortterm' && sub === 'market-review') {
          const rl = window.__lazyLoaders && window.__lazyLoaders['research'];
          if (rl) {
            rl().then(function () {
              if (window.__quantApp && window.__quantComponents) {
                Object.values(window.__quantComponents).forEach(function (comp) {
                  if (comp && comp.name && !comp.__quantRegistered) {
                    window.__quantApp.component(comp.name, comp);
                    comp.__quantRegistered = true;
                  }
                });
              }
              // 注册完成后 tick 强制 pageComp 重算, 让 <component :is> 重新解析到新注册组件
              if (lazyTick) lazyTick.value++;
            }).catch(function (e) { console.warn('[lazy] research 组件补加载失败', e); });
          }
        }
        // 日历页：主视图 (V6.6.1 合并后 sub=calendar) — 视图由页内切换器/↑↓ 经 switchView 驱动, currentView 变更由 watch([currentView,...]) 兜底重载
        if (page === 'calendar' && sub === 'calendar') {
          if (!consensus.value || consensus.value.length === 0) {
            if (dates.value.length > 0 && !selectedDate.value) {
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
          if (sub === 'health') { loadHealthDetail(); loadHealthMetrics(); }  // V6.0 (P1-3): 数据源健康独立子页
          if (sub === 'schedule') { loadHealthDetail(); }  // V6.0 (P1-3): 调度任务独立子页 (任务队列由组件轮询)
          if (sub === 'guard') { loadFactCheck(); }  // V6.0 (P1-3): AI 事实护栏独立子页
          if (sub === 'usage') { loadSysMonitor(); loadAnalytics(); loadHealthDetail(); loadHealthMetrics(); loadAiUsage(); loadFactCheck(); }
          if (sub === 'autoeval') { loadAutoEvaluateConfig(); loadAiVendors(); }  // V4.6: 进入自动评估强制加载厂商卡
          if (sub === 'datasource') loadDatasourceConfig();
          if (sub === 'feature') { loadFeishuConfig(); loadAiConfig(); loadRateLimit(); loadDataRefreshConfig(); loadBackups(); }
          if (sub === 'user') { loadAllGroups(); loadUsers(); }
        }
        // v3.17.6 (FR-3.17.6): 用量统计子页 30s 自动刷新 (离开时停止)
        if (page === 'system' && sub === 'usage') {
          if (!usageRefreshTimer) {
            usageRefreshTimer = setInterval(() => {
              loadSysMonitor(); loadAnalytics(); loadHealthDetail(); loadHealthMetrics(); loadAiUsage();
            }, 30000);
          }
        } else if (usageRefreshTimer) {
          clearInterval(usageRefreshTimer);
          usageRefreshTimer = null;
        }
      });

      // K线标签切换时自动加载
      // v3.17.6 (bugfix): 用当前周期(currentKlinePeriod)而非硬编码 daily; 失败后 800ms 自动重试一次
      watch(stockDetailTab, (tab, oldTab) => {
        if (tab === 'kline' && oldTab && oldTab !== 'kline' && stockDetailVisible.value) {
          stockKlineLoaded.value = false;
          setTimeout(async () => {
            const ok = await loadStockKline(currentKlinePeriod.value);
            if (!ok && stockDetailVisible.value && stockDetailTab.value === 'kline') {
              setTimeout(() => loadStockKline(currentKlinePeriod.value), 800);
            }
          }, 50);
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
