// quant-calendar: App 逻辑层 — 编排/装配层 (v3.6.0-T8 / FR-3.6.2, FR-3.17.11.1)
// 原巨型 setup() body 按域拆分至 js/app-logic/*.js (data/market/ops/nav/keys/auth/watch/lifecycle)
// 本文件保留: qcState 对象字面量(437键护栏) + createAppLogic 定义 + 根状态 + 护栏片段 + 域装配胶水
// 通过 window.createAppLogic() 调用, 供 index.html setup() provide/inject 注入各组件
(function () {
  window.createAppLogic = function () {
    const { ref, computed, onMounted, onUnmounted, watch, nextTick } = Vue;
                // ===== 6.3.0 (T-6.3.0.10): 根壳域 — i18n / 核心 UI 助手 / 菜单与导航 (js/app-logic/shell.js) =====
                const __shell = window.__quantAppLogic.shell.create({ ref, computed, watch });
                const { configChanged, locale, t, changeLanguage, sanitizeHtml, keyClick,
                        rememberDialogTrigger, restoreDialogFocus, focusFirstInDialog, isOnline,
                        hapticFeedback, sidebarCollapsed, toggleSidebar,
                        groupsConfig, allMenuDefs, menus, loadGroupConfig,
                        currentPage, currentSubPage, navMode, setNavMode, shortcutHelpItems,
                        navigateTo, ensureVisiblePage, currentUser } = __shell;
                // ===== 导航菜单 =====
                // 全局搜索/快捷键已下沉 js/app-logic/keys.js（searchQuery/searchStocks/onSearchSelect/handleGlobalKeydown）

                // v3.0: 美林时钟模块 - 从 merrill.js 加载
                const merrill = useMerrillClock();
                const { merrillData, merrillStagesConfig, showMerrillDetail, merrillDetailData, merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading, stages, indicatorList, dimensionScoreList, detailDimensionScoreList, confidenceColor, timelineStages, clockPosition, merrillProgressStyle, FULL_CYCLE_MONTHS, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted, getCharLabel, getAssetName, getRankColor, fetchMerrillStages, fetchMerrillClock, merrillError, loadMerrillTimeline, showTimelineStage, merrillTimeline, timelineLoading, showStageDetail, saveMerrillClockConfig, doMerrillReevaluate, startAutoRefresh, stopAutoRefresh,
                    // V5.21: 评估轨迹 (快照) — 周期演进板的"随大模型评估更新"数据源
                    merrillSnapshots, merrillSnapshotsTotal, fetchMerrillSnapshots } = merrill;

                // V6.1 (PRD-6.1 F4): 图标系统统一 — 移除 emoji/ink/edge/crystal 四套冗余映射 (原 js/icons.js)
                // 图标仅经 AppIcon.vue (lucide) 渲染, 菜单数据只保留 iconName


                // V6.9.3 (F11.2): 策略研究菜单恒显 — researchMenuEnabled 开关已删除

                // ===== 6.3.0 (T-6.3.0.10): 工作区状态域 (js/app-logic/workspace.js) =====
                const __workspace = window.__quantAppLogic.workspace.create({
                  ref, computed, watch, currentPage, currentSubPage, allMenuDefs, menus,
                  navigateTo, ensureVisiblePage, currentUser,
                });
                const { backtestStrategies, backtestStrategy, backtestRange, backtestCapital,
                        backtestRunning, backtestResult, backtestError, runBacktest,
                        currentPageName, lazyTick, pageComp, showUserMenu,
                        dashboardData, healthMetrics, dashboardDate, views, currentView, statusFilter,
                        stockDetailVisible, stockDetailTab, stockDetail, stockDetailLoading,
                        detailDisplayMode, setDetailDisplayMode, isNarrow, detailSplitEnabled,
                        splitWidth, setSplitWidth, SPLIT_DEFAULT_PCT,
                        subPageNames, tabGroups, openTab, closeTab, activateTab, _onTabKeydown,
                        themes, currentTheme, themeHues, themeHueNames, themeHue, themeMode,
                        density, hueColor, hueName, applyTheme, changeTheme, changeThemeMode,
                        changeDensity, changeThemeHue,
                        searchKeyword, strategyList, strategyFilter, strategyFilterOptions,
                        strategyFilterCounts, expandedStrategies, saveSessionState } = __workspace;



                // ===== 登录状态 =====
                // 登录表单/密码/初始化向导已下沉 js/app-logic/auth.js

                // ===== v3.11(11.3): AI 问股域 — 共享状态（前置，供 ai-chat 域 deps 与 K线/评分/自选段引用）=====





                // ===== 6.3.0 (T-6.3.0.10): 详情/K线域 — 后置域经惰性访问器引用 (TDZ 安全) =====
                const __detail = window.__quantAppLogic.detail.create({
                  ref, computed, nextTick,
                  stockDetail, stockDetailTab, stockDetailVisible, stockDetailLoading,
                  rememberDialogTrigger,
                  getIsMobile: () => isMobile,
                  getIndexDetail: () => indexDetail,
                  getIndexDetailVisible: () => indexDetailVisible,
                  getMarkKlineLoaded: () => markKlineLoaded,
                  getAiResult: () => aiResult,
                  getLoadLastEvaluation: () => loadLastEvaluation,
                  getSelectedDateRef: () => selectedDate,
                  getRefreshStockScore: () => refreshStockScore,
                  getAnimateScoreEntrance: () => animateScoreEntrance,
                });
                const { klineShowMinutes, toggleKlineShowMinutes, klinePeriods, currentKlinePeriod,
                        klineLoading, klineDegradeNote, indexKlineLoading, stockKlineLoaded,
                        klineMaVisible, MA_LINES, indexKlineLoaded,
                        loadStockKline, loadIndexKline, switchKlinePeriod, switchIndexKlinePeriod,
                        toggleKlineMa, resetKlineMaVisible, loadIndexKlineWithPeriod,
                        loadHealthMetrics, markExternalStock, externalStockActive,
                        showStockDetail, levelColor, levelBg } = __detail;

                // ===== 惰性访问器：供拆分域在装配完成前引用后置域输出（仅运行时调用, TDZ 安全）=====
                const getLoadDashboardData = () => loadDashboardData;
                const getLastRefreshTime = () => lastRefreshTime;
                const getFetchPoolSignals = () => fetchPoolSignals;
                const getLoadAiHistory = () => loadAiHistory;
                const getShowBatchEvaluate = () => showBatchEvaluate;
                const getSelectedDate = () => selectedDate;

                // ===== 域装配: 拆分工厂（FR-3.17.11.1）=====
                // v3.17.11.1: 日历数据加载/缓存域 (js/app-logic/data.js)
                const __data = window.__quantAppLogic.data.create({
                    currentView, statusFilter, dashboardData, loadHealthMetrics,
                    getLoadDashboardData, getLastRefreshTime, getFetchPoolSignals,
                });
                const { loading, loadingView, viewCache, dates, selectedDate, lastLoadTime, consensus, viewNote,
                        loadDates, refreshCalendarData, exportCSV, loadConsensusData, loadDashboardCached, consensusError } = __data;
                // v3.17.11.1: 行情/指数详情/评分动画/触摸手势域 (js/app-logic/market.js)
                const __market = window.__quantAppLogic.market.create({
                    currentKlinePeriod, loadIndexKline, rememberDialogTrigger, menus,
                    currentPage, currentSubPage, stockDetail, selectedDate,
                });
                const { marketData, marketError, indexDetailVisible, indexDetail, indexAiResult, indexAiLoading,
                        fetchMarketData, showIndexDetail, loadCachedIndexEval, doIndexAiEvaluate,
                        disposeStockKline, isMobile, zoomKlineRange,
                        scoreAnimating, scoreDelta, scorePulse,
                        refreshStockScore, animateScoreEntrance, onTouchStart, onTouchEnd } = __market;
                // v3.17.11.1: 运维与辅助功能域 (js/app-logic/ops.js)
                const __ops = window.__quantAppLogic.ops.create({
                    navigateTo, currentPage, currentSubPage,
                });
                const { feishuConfig, feishuTestStatus, feishuTestMessage,
                        testFeishuWebhook, saveFeishuConfig,
                        aiFabHidden, openAiFab,
                        strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
                        sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics, sysMonitorError,
                        healthDetail, loadHealthDetail, healthDetailError,
                        reviewTriggering, triggerMarketReview,
                        factCheck, factCheckRunning, loadFactCheck, triggerFactCheck, factCheckError,
                        backups, backupCreating, loadBackups, createBackup, restoreBackup,
                        reportExporting, reportExportMsg, exportReport,
                        tourVisible, tourStep, tourSteps, maybeShowTour, skipTour, finishTour,
                        feedbackText, feedbackSubmitting, submitFeedback } = __ops;
                // v3.17.11.1: 视图/日期导航域 (js/app-logic/nav.js)
                const __nav = window.__quantAppLogic.nav.create({
                    currentView, selectedDate, dates, loadConsensusData, hapticFeedback,
                });
                const { viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
                        switchView, navigateDate, disabledDate, onDateChange } = __nav;
                // v3.17.11.1: 全局搜索/快捷键/命令面板状态域 (js/app-logic/keys.js)
                const __keys = window.__quantAppLogic.keys.create({
                    menus, subPageNames, navigateTo, currentPage, currentSubPage, currentView,
                    navigateDate, switchView, getLoadDashboardData, refreshCalendarData,
                    getLoadAiHistory, exportCSV, getShowBatchEvaluate,
                    openAiFab, toggleSidebar, showStockDetail, getSelectedDate, markExternalStock,
                });
                const { searchQuery, searchStocks, onSearchSelect,
                        shortcutHelpVisible, commandPaletteVisible,
                        handleGlobalKeydown } = __keys;
                // ===== v3.11(11.3): AI 问股域 — 逻辑移至 js/ai-chat.js 模块 =====
                const __aiChatDomain = (window.__quantModules && window.__quantModules['ai-chat'])
                    ? window.__quantModules['ai-chat'].create({ stockKlineLoaded, stockDetailVisible, stockDetailTab, stockDetail, disposeStockKline })
                    : {};
                const { chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
                        chatHistoryLoading, chatHistoryError,
                        allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
                        toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
                        toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
                        selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
                        loadChatHistory, deleteChatSession, renderMarkdown,
                        stockChatInput, stockChatMessages, stockChatLoading, stockChatError,
                        askStockSend, askStockQuick } = __aiChatDomain;
                // ===== v3.11(11.3): 用户/分组域 — 逻辑移至 js/users.js 模块 =====
                const __usersDomain = (window.__quantModules && window.__quantModules.users)
                    ? window.__quantModules.users.create({ currentUser, applyTheme, allMenuDefs, loadGroupConfig })
                    : {};
                const { userList, userSearch, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
                        filteredUsers, toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline,
                        changeUserGroup, showAddUser, editingUser, userForm, savingUser,
                        editingGroup, menuConfigDialog, memberDialog, groupEditForm, subPageCache,
                        showAddGroup, addGroupForm, savingGroup, groupMembers, addMemberUsername,
                        selectedMemberGroup, subPageSectionExpanded, toggleSubPageSection,
                        getGroupMemberCount, getMenuEnabledCount, groupCount,
                        openMemberManager, loadGroupMembers, addMemberToGroup, removeMemberFromGroup,
                        availableUsersForGroup, onParentToggle, openMenuConfig, saveMenuConfig,
                        deleteGroupConfig, createGroup,
                        allGroups, getGroupName, loadAllGroups, loadUsers, editUser, saveUser, deleteUser,
                        toggleUserEnabled, resetUserPassword } = __usersDomain;

                // ===== v3.11(11.3): 股票池域 — 逻辑移至 js/stock-pool.js 模块 =====
                const __stockPoolDomain = (window.__quantModules && window.__quantModules['stock-pool'])
                    ? window.__quantModules['stock-pool'].create({ consensus, currentPage, currentSubPage, dashboardData, searchKeyword, statusFilter, strategyFilter, strategyFilterCounts })
                    : {};
                const { applyStrategyFilter, statusCounts, stockPool, strategyDistribution, strategyPreviewCount,
                        saveStrategyFilter, filteredConsensusRank, currentPoolSize, filteredStrategyCounts,
                        poolChangeBadge, timeBarPercent, lastRefreshTime,
                        navigateToStrategyFilter } = __stockPoolDomain;

                // ===== v3.11(11.3): AI 评估域 — 逻辑移至 js/ai.js 模块 =====
                const __aiDomain = (window.__quantModules && window.__quantModules.ai)
                    ? window.__quantModules.ai.create({ configChanged, consensus })
                    : {};
                const { aiResult, lastEvalTime, evalHistoryComparison, checklistItems,
                        aiHistory, selectedHistoryIds, expandedDates, expandedMonths, expandedStocks,
                        poolSignals, toggleMonthExpand, aiHistoryView, selectedWatchlistCodes,
                        showAutoEvaluateSettings, savingConfig, autoEvaluateScope,
                        aiVendors, aiCatalog, aiModelsError, testingAllModels, savingAiModels,
                        loadAiVendors, loadAiCatalog, saveAiVendors, saveAiModels,
                        testVendorModel, testAllVendorModels, fetchVendorModels,
                        addVendorFromCatalog, addCustomVendor, addVendorModel,
                        removeVendorModel, removeVendor, toggleVendorKeyReveal, toggleVendorEdit, autoEvaluateConfig,
                        // v3.11: AI 评估配置（原 app-logic 前段并入本域）
                        aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, showBatchEvaluate, batchStocks, batchRunning,
                        batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors,
                        aiConfig, selectedPreset, providerInfo, aiPresets,
                        applyPreset, onProviderChange,
                        // v3.11: 数据加载域（原 app-logic 数据加载段并入）
                        fetchPoolSignals, cancelPoolSignals, loadLastEvaluation } = __aiDomain;
                // ===== v3.11(11.3): 自选/评估历史域 — 逻辑移至 js/watchlist.js 模块 =====
                const __watchlistDomain = (window.__quantModules && window.__quantModules.watchlist)
                    ? window.__quantModules.watchlist.create({ currentUser, selectedDate, stockDetail, stockDetailTab, stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance, loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig, autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig, selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate })
                    : {};
                const { quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes, sortedWatchlist,
                        getWatchlistScore, getLatestScore, addSearchResult, evaluatedCodes, klineLoadedCodes,
                        markKlineLoaded, watchlistSearch, watchlistResults, watchlistSearching,
                        dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                        aiHistoryLoading, aiHistoryError,
                        aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadMoreAiHistory,
                        watchlistLoading,
                        doAiEvaluate, loadAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection,
                        clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchRemoveWatchlist,
                        toggleSelectWatchlist, selectAllHistory, selectAllWatchlist, deleteSelectedHistory,
                        loadAutoEvaluateConfig, saveAutoEvaluateConfig, loadWatchlist, addToWatchlist,
                        removeFromWatchlist, clearWatchlist, toggleWatchlist, showStockKline, preloadingKline,
                        preloadWatchlistKline, watchlistEvaluate, batchEvaluateWatchlist, batchEvaluateSelected,
                        searchStockForWatchlist, loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                        triggerDataPull, dataPullRunning,
                        groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution,
                        quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand,
                        toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate,
                        // v3.17.7 实时化 (FR-3.17.7): 自选实时报价
                        realtimeQuotes, realtimeDegraded, realtimeWsState, connectRealtimeQuotes,
                        disconnectRealtimeQuotes, quoteWarningFor, realtimeQuoteColor,
                        realtimePriceText, realtimePctText, realtimeRatioText, REALTIME_DEGRADED_TEXT,
                        REALTIME_FALLBACK_TEXT } = __watchlistDomain;
                // ===== v3.17.4 (FR-3.17.4): 回测工作台域 — 逻辑移至 js/backtest.js 模块 =====
                const __backtestDomain = (window.__quantModules && window.__quantModules.backtest)
                    ? window.__quantModules.backtest.create({ backtestStrategies })
                    : {};
                const { btStrategyOptions, btSelectedStrategies, toggleBtStrategy,
                        btDateRange, btCapital, btCommissionRate, btIncludeBenchmark,
                        btRunning, btResult, btError,
                        btMetrics, btAnnualReturns, btTrades, btStrategyMetricsRows, btDrawdownRegion,
                        runBacktestWorkbench, exportBacktestCSV, registerBacktestNavChart, btFmtNum } = __backtestDomain;
                const __systemDomain = (window.__quantModules && window.__quantModules.system)
                    ? window.__quantModules.system.create({ configChanged, aiConfig, aiLoading, feishuConfig, currentTheme, changeTheme, autoEvaluateConfig, currentUser, strategyFilter, applyTheme, dashboardData, lastRefreshTime, saveAiModels })
                    : {};
                const { configSaving, globalConfigDirty, lastSavedTime,
                        feishuConfigOriginal, aiConfigOriginal, tushareConfigOriginal,
                        tushareConfig, tushareStatus, datasourceConfig, datasourceStatus,
                        syncingData, stockCount, tradeDateCount, aiStatus, appVersion, showImportDialog,
                        rateLimitConfig, rateLimitDirty, rateLimitSaving, loadRateLimit, saveRateLimit,
                        saveAiConfig, testAiApi, exportConfig, importConfig,
                        saveAllConfig, resetAllConfig, testTushareConnection, checkTushareConnection,
                        syncStockData, loadTushareConfig, loadDatasourceConfig, saveDatasourceConfig, testDatasource, toggleDatasourceKeyReveal,
                        toggleDatasourceEdit,
                        loadFeishuConfig, loadAiConfig, loadUserConfig, loadSystemStatus, loadDashboardData,
                        overviewError, feishuConfigError } = __systemDomain;

                // ===== v3.17.11.1: 登录/登出/密码/初始化向导域 (js/app-logic/auth.js) =====
                const __auth = window.__quantAppLogic.auth.create({
                    currentUser, loadUserConfig, loadDates, loadDashboardData, loadDashboardCached,
                    loadHealthMetrics, loadConsensusData, applyTheme, maybeShowTour,
                    loadAiVendors,  // V4.6: 登录成功即加载 AI 厂商(修复自动评估子页厂商卡不显示)
                    // V5.21-fix: 组菜单可见性配置 — 登录流程必须重新加载。此前仅在应用启动的
                    // 会话恢复路径 (lifecycle.js) 加载, 表单登录不刷新页面时 groupsConfig 为空,
                    // 使 menus 的组过滤整体失效 => 已关闭的一级菜单(如策略研究)仍然显示
                    loadGroupConfig, groupsConfig,
                });
                const { loginForm, logining, guestLogining,
                        showChangePassword, changePasswordForm, changingPassword,
                        showSetupWizard, setupForm, setupStep,
                        checkSetupWizard, completeSetupWizard, resetSetupWizard,
                        handleLogin, handleGuestLogin, handleLogout, doChangePassword } = __auth;

                // ===== v3.17.11.1: 副作用 watch 编排 (js/app-logic/watch.js, 不含页面切换监听) =====
                window.__quantAppLogic.watch.register({
                    strategyFilter, currentView, statusFilter,
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
                    showMerrillDetail, indexDetailVisible, restoreDialogFocus,
                });

                // ===== v3.17.11.1: 生命周期初始化域 (js/app-logic/lifecycle.js) =====
                const __lifecycle = window.__quantAppLogic.lifecycle.create({
                    handleGlobalKeydown, applyTheme, menus,
                    currentPage, currentSubPage, currentView, currentKlinePeriod,
                    selectedDate, dates, loadDates, loadConsensusData, loadDashboardCached,
                    appVersion, themes, fetchMarketData,
                    fetchMerrillStages, fetchMerrillClock, loadMerrillTimeline, showTimelineStage,
                    merrillTimeline, timelineLoading,
                    loadAiConfig, loadAiVendors, loadAiCatalog, currentUser,
                    loadUserConfig, loadAutoEvaluateConfig, loadGroupConfig,
                    loadUsers, loadAllGroups, loadAiHistory,
                });
                const { runOnMounted } = __lifecycle;

                // ===== 6.3.0 (T-6.3.0.10): 页面运行时域 (js/app-logic/runtime.js) =====
                window.__quantAppLogic.runtime.create({
                  watch, onMounted, onUnmounted,
                  lazyTick, currentPage, currentSubPage, hapticFeedback, allMenuDefs,
                  saveSessionState, _onTabKeydown, handleGlobalKeydown, runOnMounted,
                  startAutoRefresh, loadMerrillTimeline,
                  cancelPoolSignals, loadDashboardCached, selectedDate, loadConsensusData,
                  loadStrategyRecommendations, loadAiUsage, loadAiHistory, strategyFilterCounts,
                  consensus, currentUser, loadUsers, loadFeishuConfig, loadTushareConfig,
                  loadSystemStatus, loadAiConfig, loadRateLimit, checkTushareConnection,
                });

                // ===== v3.8.1: 通用数值格式化 (弹窗展示用, 最多保留 digits 位小数, null/NaN 回退 '--')
                function fmtNum(v, digits = 2) {
                    if (v == null || v === '' || isNaN(Number(v))) return '--';
                    return Number(v).toFixed(digits);
                }

                // v3.6.0: 整个 setup 状态对象提升为 qcState, provide 给所有子组件 (T4+: System/Strategies/Calendar/AI 共用)
                const qcState = {
                    currentPage, pageComp, currentSubPage, sidebarCollapsed, menus,
                    // V6.3 (PRD-6.3 F3/F4): 导航形态 (V6.4: 动态页签开关已移除)
                    navMode, setNavMode,
                    // V6.1 (PRD-6.1 F8): 动态页签状态 (内部导航副作用保留: openTab 同步 hash/当前二级)
                    tabGroups, openTab, closeTab, activateTab,
                    fmtNum, sanitizeHtml, keyClick, isOnline,
                    currentUser, allMenuDefs,
                    // v3.17.14 (FR-3.17.14): i18n（全局 t / 当前 locale / 语言切换）
                    t, locale, changeLanguage,
                    currentPageName, subPageNames, searchQuery, searchStocks, onSearchSelect,
                    selectedDate, onDateChange, disabledDate, refreshCalendarData, exportCSV, viewNote,
                    loading, lastLoadTime, resetSetupWizard, showChangePassword,
                    themes, currentTheme, changeTheme, changeThemeMode, changeThemeHue, handleLogout,
                    // V6.9.3 (F6.2): 主题面板全局共享状态
                    themeHues, themeHueNames, themeHue, themeMode, hueColor, hueName,
                    density, changeDensity,

                    marketData, marketError, merrillData, merrillError, merrillTimeline, timelineLoading, merrillStagesConfig, fetchMerrillStages,
                    merrillSnapshots, merrillSnapshotsTotal, healthMetrics, feishuConfig, feishuTestStatus, feishuTestMessage,
                    shortcutHelpVisible, shortcutHelpItems, commandPaletteVisible,
                    tourVisible, tourStep, tourSteps, skipTour, finishTour,
                    backups, backupCreating, loadBackups, createBackup, restoreBackup,
                    reportExporting, reportExportMsg, exportReport,
                    sysMonitor, analyticsRank, analyticsDays, loadSysMonitor, loadAnalytics, sysMonitorError,
                    healthDetail, loadHealthDetail, healthDetailError,
                    reviewTriggering, triggerMarketReview,
                    factCheck, factCheckRunning, loadFactCheck, triggerFactCheck, factCheckError,
                    strategyRecommendations, aiUsage, loadStrategyRecommendations, loadAiUsage,
                    aiFabHidden, openAiFab,
                    feedbackText, feedbackSubmitting, submitFeedback,
                    backtestStrategies, backtestStrategy, backtestRange, backtestCapital,
                    backtestRunning, backtestResult, backtestError, runBacktest,
                    // v3.17.4 (FR-3.17.4): 回测工作台
                    btStrategyOptions, btSelectedStrategies, toggleBtStrategy,
                    btDateRange, btCapital, btCommissionRate, btIncludeBenchmark,
                    btRunning, btResult, btError,
                    btMetrics, btAnnualReturns, btTrades, btStrategyMetricsRows, btDrawdownRegion,
                    runBacktestWorkbench, exportBacktestCSV, registerBacktestNavChart, btFmtNum,
                    fetchMarketData, fetchMerrillClock, testFeishuWebhook, saveFeishuConfig,
                    // v2.0: 美林时钟配置
                    merrillClockConfig, merrillClockLastUpdated, merrillReevalResult, merrillReevalLoading,
                    saveMerrillClockConfig, doMerrillReevaluate,
                    // v1.8.0: 数据刷新配置
                    dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
                    loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload,
                    // v3.12 (FR-3.12.1): 手动拉取
                    triggerDataPull, dataPullRunning,
                    indexDetailVisible, indexDetail, indexAiResult, indexAiLoading, loadCachedIndexEval,
                    showIndexDetail, doIndexAiEvaluate,
                    klinePeriods, currentKlinePeriod, klineLoading, indexKlineLoading, stockKlineLoaded, indexKlineLoaded,
                    klineDegradeNote,
                    klineShowMinutes, toggleKlineShowMinutes,
                    loadStockKline, switchKlinePeriod, loadIndexKline, switchIndexKlinePeriod,
                    zoomKlineRange,
                    // v3.11 (FR-3.11.8): MA 图例开关
                    MA_LINES, klineMaVisible, toggleKlineMa,
                    // v1.9.2: 评分动画
                    scoreAnimating, scoreDelta, scorePulse, refreshStockScore, animateScoreEntrance,
                    showMerrillDetail, merrillDetailData, showStageDetail, getCharLabel, getAssetName, getRankColor,
                    levelColor, levelBg,
                    timelineStages, getStageAngle, getCycleProgress, getCurrentStageMonths, getStageTotalMonths, isStageCompleted,
                    stages, indicatorList, dimensionScoreList, confidenceColor,
                    views, currentView, statusFilter,
                    loginForm, logining, guestLogining,
                    dashboardData,
                    // v1.10
                    loadingView, dates, consensus, searchKeyword,
                    stockDetailVisible, stockDetailTab, stockDetail, stockDetailLoading,
                    detailDisplayMode, setDetailDisplayMode, isNarrow, detailSplitEnabled,
                    splitWidth, setSplitWidth, SPLIT_DEFAULT_PCT,
                    aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, showBatchEvaluate, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors, aiConfig,
                    userList, showAddUser, editingUser, userForm, savingUser,
                    userSearch, filteredUsers, groupFilter, userPageTab, expandedGroups, addMemberGroupMap,
                    toggleGroupExpand, removeMemberFromGroupInline, addMemberToGroupInline, changeUserGroup,
                    statusCounts, stockPool, poolSignals, aiResult, aiHistory, groupedByDate, groupedByMonth, expandedDates,
                    expandedMonths, aiHistoryByStock, aiHistoryStockCount, expandedStocks, aiHistoryView,
                    aiHistoryLoading, aiHistoryError,
                    aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadMoreAiHistory,
                    watchlistLoading,
                    scoreDistribution, quickEvalStock, evalStrategy, checklistItems, evalHistoryComparison, quickEvaluate,
                    selectedHistoryIds, showAutoEvaluateSettings, savingConfig, autoEvaluateConfig, autoEvaluateScope, strategyList,
                    toggleDateExpand, toggleMonthExpand, toggleSelectDate, toggleSelectMonth, toggleSelectStock, toggleStockExpand, registerTrendChart,
                    selectedWatchlistCodes, clearWatchlistSelection, toggleSelectWatchlist,
                    selectAllHistory, selectAllWatchlist,
                    batchRemoveWatchlist, batchEvaluateSelected, batchReevaluateHistory, batchAddToWatchlist,
                    viewUnit, datePickerType, dateFormat, canNavPrev, canNavNext,
                    handleLogin, handleGuestLogin, switchView, navigateDate, navigateTo,
                    loadDashboardData, loadConsensusData, showStockDetail, consensusError, overviewError,
                    externalStockActive,
                    doAiEvaluate, doBatchEvaluate, loadAiHistory, loadLastEvaluation, lastEvalTime, viewAiResult, saveAiConfig, testAiApi, exportConfig, importConfig, configSaving, configChanged,
                    // v1.8.0: 自选股
                    watchlist, watchlistCodes, watchlistSearch, watchlistResults, watchlistSearching,
                    watchlistSort, sortedWatchlist, getWatchlistScore, addSearchResult,
                    evaluatedCodes, klineLoadedCodes, markKlineLoaded,
                    loadWatchlist, addToWatchlist, removeFromWatchlist, clearWatchlist,
                    searchStockForWatchlist, toggleWatchlist, batchEvaluateWatchlist, watchlistEvaluate, showStockKline,
                    preloadWatchlistKline, preloadingKline,
                    // v3.17.7 实时化 (FR-3.17.7): 自选实时报价
                    realtimeQuotes, realtimeDegraded, realtimeWsState, connectRealtimeQuotes,
                    disconnectRealtimeQuotes, quoteWarningFor, realtimeQuoteColor,
                    realtimePriceText, realtimePctText, realtimeRatioText, REALTIME_DEGRADED_TEXT,
                    REALTIME_FALLBACK_TEXT,
                    toggleSelectHistory, clearSelection, deleteSingleHistory, deleteSelectedHistory, saveAutoEvaluateConfig,
                    editUser, saveUser, deleteUser, loadUsers,
                    allGroups, loadAllGroups, getGroupName,
                    toggleUserEnabled, resetUserPassword,
                    selectedPreset, applyPreset, onProviderChange, providerInfo,
                    // v1.3.0 settings page
                    globalConfigDirty, lastSavedTime, tushareConfig, tushareStatus, syncingData,
                    stockCount, tradeDateCount, aiStatus, appVersion, showImportDialog,
                    rateLimitConfig, rateLimitDirty, rateLimitSaving, loadRateLimit, saveRateLimit,
                    saveAllConfig, resetAllConfig, testTushareConnection, syncStockData,
                    loadTushareConfig, loadFeishuConfig, loadSystemStatus, loadAiConfig, feishuConfigError,
                    // AI 模型管理 (v3.14 厂商化)
                    aiVendors, aiCatalog, aiModelsError, testingAllModels, savingAiModels,
                    loadAiVendors, loadAiCatalog, saveAiVendors, saveAiModels: saveAiVendors,
                    testVendorModel, testAllVendorModels, fetchVendorModels,
                    addVendorFromCatalog, addCustomVendor, addVendorModel,
                    removeVendorModel, removeVendor, toggleVendorKeyReveal, toggleVendorEdit,
                    checkTushareConnection,
                    // v1.8.0: 多数据源
                    datasourceConfig, datasourceStatus,
                    loadDatasourceConfig, saveDatasourceConfig, testDatasource, toggleDatasourceKeyReveal, toggleDatasourceEdit,
                    strategyFilter, strategyFilterOptions, strategyFilterCounts, strategyPreviewCount, saveStrategyFilter,
                    filteredConsensusRank, currentPoolSize, filteredStrategyCounts, strategyDistribution,
                    expandedStrategies,
                    // v1.11: 策略总览增强
                    poolChangeBadge, timeBarPercent, navigateToStrategyFilter,
                    // v1.5.0
                    showUserMenu,
                    // v3.0: 侧边栏折叠
                    toggleSidebar,
                    // v1.9.2: 策略研究菜单
                    // v1.9.2: 用户组配置
                    groupsConfig, loadGroupConfig,
                    // v1.9.2: 分组管理
                    editingGroup, groupEditForm, showAddGroup, addGroupForm, savingGroup,
                    menuConfigDialog, memberDialog, groupMembers, addMemberUsername, selectedMemberGroup,
                    subPageSectionExpanded, toggleSubPageSection,
                    getGroupMemberCount, getMenuEnabledCount, groupCount,
                    openMemberManager, loadGroupMembers, addMemberToGroup, removeMemberFromGroup, availableUsersForGroup,
                    subPageCache, onParentToggle,
                    openMenuConfig, saveMenuConfig, deleteGroupConfig, createGroup,
                    changePasswordForm, changingPassword, doChangePassword,
                    // v2.2: 初始化向导
                    showSetupWizard, setupForm, setupStep, checkSetupWizard, completeSetupWizard,
                    // v2.4: AI 问股
                    chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
                    chatHistoryLoading, chatHistoryError,
                    allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
                    toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
                    toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
                    selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
                    loadChatHistory, deleteChatSession, renderMarkdown,
                    stockChatInput, stockChatMessages, stockChatLoading, stockChatError, askStockSend, askStockQuick,
                    // v2.5.2: 触摸手势
                    onTouchStart, onTouchEnd,
                    // v3.8.11: 触觉反馈
                    hapticFeedback,
                };
                // 6.1.7 (G5): 前端 state 域注册表 — theme/auth/prefs/ui/page 五域 (兼容入口: qcState 扁平结构不变)
                // state 拆分不改变行为: 仅提供域化访问/快照对拍, 组件既有的 qcState.xxx 读取路径原样可用
                let stateRegistry = null;
                if (window.QuantStateRegistry && window.QuantStateRegistry.createStateRegistry) {
                    stateRegistry = window.QuantStateRegistry.createStateRegistry();
                    stateRegistry.defineDomain('theme', ['currentTheme', 'themeMode', 'themeHue', 'density', 'currentKlinePeriod']);
                    stateRegistry.defineDomain('auth', ['currentUser', 'loginForm', 'logining', 'guestLogining', 'showSetupWizard']);
                    stateRegistry.defineDomain('prefs', ['navMode', 'detailDisplayMode', 'splitWidth', 'sidebarCollapsed', 'klineShowMinutes']);
                    stateRegistry.defineDomain('ui', ['currentPage', 'currentSubPage', 'currentView', 'showUserMenu', 'searchKeyword', 'shortcutHelpVisible', 'commandPaletteVisible']);
                    stateRegistry.defineDomain('page', ['loading', 'dates', 'selectedDate', 'consensus', 'dashboardData', 'lastLoadTime']);
                    stateRegistry.attach('theme', 'currentTheme', currentTheme);
                    stateRegistry.attach('theme', 'themeMode', themeMode);
                    stateRegistry.attach('theme', 'themeHue', themeHue);
                    stateRegistry.attach('theme', 'density', density);
                    stateRegistry.attach('theme', 'currentKlinePeriod', currentKlinePeriod);
                    stateRegistry.attach('auth', 'currentUser', currentUser);
                    stateRegistry.attach('auth', 'loginForm', loginForm);
                    stateRegistry.attach('auth', 'logining', logining);
                    stateRegistry.attach('auth', 'guestLogining', guestLogining);
                    stateRegistry.attach('auth', 'showSetupWizard', showSetupWizard);
                    stateRegistry.attach('prefs', 'navMode', navMode);
                    stateRegistry.attach('prefs', 'detailDisplayMode', detailDisplayMode);
                    stateRegistry.attach('prefs', 'splitWidth', splitWidth);
                    stateRegistry.attach('prefs', 'sidebarCollapsed', sidebarCollapsed);
                    stateRegistry.attach('prefs', 'klineShowMinutes', klineShowMinutes);
                    stateRegistry.attach('ui', 'currentPage', currentPage);
                    stateRegistry.attach('ui', 'currentSubPage', currentSubPage);
                    stateRegistry.attach('ui', 'currentView', currentView);
                    stateRegistry.attach('ui', 'showUserMenu', showUserMenu);
                    stateRegistry.attach('ui', 'searchKeyword', searchKeyword);
                    stateRegistry.attach('ui', 'shortcutHelpVisible', shortcutHelpVisible);
                    stateRegistry.attach('ui', 'commandPaletteVisible', commandPaletteVisible);
                    stateRegistry.attach('page', 'loading', loading);
                    stateRegistry.attach('page', 'dates', dates);
                    stateRegistry.attach('page', 'selectedDate', selectedDate);
                    stateRegistry.attach('page', 'consensus', consensus);
                    stateRegistry.attach('page', 'dashboardData', dashboardData);
                    stateRegistry.attach('page', 'lastLoadTime', lastLoadTime);
                    qcState.stateRegistry = stateRegistry;  // 兼容入口: 组件可按域读取, 也可继续扁平访问
                }
    return qcState;
  };
})();
