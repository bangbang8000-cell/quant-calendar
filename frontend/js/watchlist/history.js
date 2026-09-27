// quant-calendar: 自选/评估历史域模块 6.3.0 (T-6.3.0.8) 结构分治片段 —— history
// 由 frontend/js/watchlist.js 的 create(deps) 逐字符下沉; 经 create(ctx) 装配。
(function () {
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.watchlist = window.__quantModules.watchlist || {};
  window.__quantModules.watchlist.history = {
    create: function (ctx) {
      const {
      ref, computed, watch, currentUser, selectedDate, stockDetail, stockDetailTab,
      stockDetailVisible, stockDetailLoading, stockKlineLoaded, viewCache, animateScoreEntrance,
      loadStockKline, refreshStockScore, disposeStockKline, aiHistory, aiLoading, aiEvalStage,
      aiEvalElapsed, aiEvalError, aiResult, loadLastEvaluation, autoEvaluateConfig,
      autoEvaluateScope, batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent,
      batchStatuses, batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig,
      selectedHistoryIds, selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate,
      getCSSVar, quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes,
      aiHistoryLoading, aiHistoryError, sortedWatchlist, getWatchlistScore, getLatestScore,
      addSearchResult, evaluatedCodes, klineLoadedCodes, markKlineLoaded, watchlistSearch,
      watchlistResults, watchlistSearching, dataRefreshConfig, dataRefreshReloading,
      dataRefreshSaving, levelVar, levelBgVar, undoStack, showUndoMessage, addToWatchlist,
      removeFromWatchlist
      } = ctx;

async function doAiEvaluate() {
    if (!stockDetail.value) return;
    aiLoading.value = true;
    aiResult.value = null;
    aiEvalError.value = '';
    // v3.15: 诚实进度 — 移除假阶段定时器, 阶段文案与真实 await 联动 + 实时已用秒数
    aiEvalStage.value = 'fetching';
    aiEvalElapsed.value = 0;
    const t0 = Date.now();
    const elapsedTimer = setInterval(() => {
        if (aiLoading.value) aiEvalElapsed.value = Math.round((Date.now() - t0) / 1000);
    }, 500);
    try {
        const res = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                stock_code: stockDetail.value.stock,
                stock_name: stockDetail.value.name || stockDetail.value.stock,
                strategy: evalStrategy.value
            })
        });
        aiEvalStage.value = 'calculating';  // 响应已到达, 解析中
        const data = await res.json();
        aiEvalStage.value = 'analyzing';  // 整理结果中
        if (data.success) {
            await nextTick();
            aiResult.value = data.data;
            stockDetailTab.value = 'ai';  // auto-switch to AI tab
            loadAiHistory();
        } else {
            aiEvalError.value = data.message || '评估失败';
            ElementPlus.ElMessage.error(aiEvalError.value);
        }
    } catch (e) {
        aiEvalError.value = (e && e.message && !String(e.message).includes('Failed to fetch'))
            ? e.message : '网络异常或后端不可用，评估失败';
        ElementPlus.ElMessage.error(aiEvalError.value);
    } finally {
        clearInterval(elapsedTimer);
        aiLoading.value = false;
        aiEvalElapsed.value = 0;
        if (aiEvalError.value) {
            aiEvalStage.value = '';
        } else {
            aiEvalStage.value = 'done';  // 完成即跳 done, 短暂停留后复位
            setTimeout(() => { if (aiEvalStage.value === 'done') aiEvalStage.value = ''; }, 800);
        }
    }
}

// v3.17.9 (FR-3.17.9): 评估历史懒加载分页 — 首屏只拉前 N 条, 滚动/按钮加载更多
const AI_HISTORY_PAGE_SIZE = 50;
const aiHistoryTotal = ref(0);
const aiHistoryLoadingMore = ref(false);
const hasMoreAiHistory = computed(() => aiHistory.value.length < aiHistoryTotal.value);

async function loadAiHistory() {
    // v3.16 (16.7): 统一错误态状态机
    aiHistoryLoading.value = true;
    aiHistoryError.value = false;
    try {
        const token = localStorage.getItem('quant_token');
        if (!token) { aiHistory.value = []; return; }
        // v3.17.9: 分页首屏只拉前 N 条 (offset=0)
        const res = await fetch(`/api/ai/history?limit=${AI_HISTORY_PAGE_SIZE}&offset=0`);
        if (res.status === 401) {
            // token 过期，清除登录状态
            console.warn('[loadAiHistory] 401, clearing session');
            localStorage.removeItem('quant_user');
            localStorage.removeItem('quant_token');
            currentUser.value = null;
            return;
        }
        const data = await res.json();
        if (data.success) {
            aiHistory.value = data.data || [];
            aiHistoryTotal.value = (data.total != null) ? data.total : aiHistory.value.length;
        } else {
            aiHistoryError.value = true;
        }
    } catch (e) { console.error('[loadAiHistory] error:', e); aiHistoryError.value = true; }
    finally { aiHistoryLoading.value = false; }
}

// 滚动/按钮加载下一页 (offset = 已加载条数), 去重追加
async function loadMoreAiHistory() {
    if (aiHistoryLoadingMore.value || !hasMoreAiHistory.value) return;
    aiHistoryLoadingMore.value = true;
    try {
        const res = await fetch(`/api/ai/history?limit=${AI_HISTORY_PAGE_SIZE}&offset=${aiHistory.value.length}`);
        const data = await res.json();
        if (data.success && Array.isArray(data.data)) {
            const existing = new Set(aiHistory.value.map(r => r.id));
            const fresh = data.data.filter(r => !existing.has(r.id));
            aiHistory.value = aiHistory.value.concat(fresh);
            if (data.total != null) aiHistoryTotal.value = data.total;
        }
    } catch (e) { console.warn('[loadMoreAiHistory] error:', e); }
    finally { aiHistoryLoadingMore.value = false; }
}

// 删除单条记录
async function deleteSingleHistory(id) {
    try {
        await ElementPlus.ElMessageBox.confirm(
            '确定要删除这条评估记录吗？',
            '确认删除',
            {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }
        );
        const res = await fetch(`/api/ai/history/${id}`, {
            method: 'DELETE'
        });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success('删除成功');
            loadAiHistory();
            // 从选中列表中移除
            const idx = selectedHistoryIds.value.indexOf(id);
            if (idx >= 0) selectedHistoryIds.value.splice(idx, 1);
        } else {
            ElementPlus.ElMessage.error(data.message || '删除失败');
        }
    } catch (e) {
        // 用户取消
    }
}

// 切换选择历史记录
function toggleSelectHistory(id) {
    const idx = selectedHistoryIds.value.indexOf(id);
    if (idx >= 0) {
        selectedHistoryIds.value.splice(idx, 1);
    } else {
        selectedHistoryIds.value.push(id);
    }
}

// 清空选择
function clearSelection() {
    selectedHistoryIds.value = [];
}
function clearWatchlistSelection() {
    selectedWatchlistCodes.value = [];
}

async function batchReevaluateHistory() {
    const ids = selectedHistoryIds.value;
    if (ids.length === 0) return;
    const stocks = aiHistory.value.filter(h => ids.includes(h.id)).map(h => h.stock_code);
    showBatchEvaluate.value = true;
    batchStocks.value = [...new Set(stocks)].join(',');
}
async function batchAddToWatchlist() {
    const ids = selectedHistoryIds.value;
    if (ids.length === 0) return;
    const stocks = aiHistory.value.filter(h => ids.includes(h.id));
    const unique = [...new Map(stocks.map(s => [s.stock_code, s])).values()];
    let added = 0;
    for (const s of unique) {
        if (!watchlistCodes.value.has(s.stock_code)) {
            await addToWatchlist(s.stock_code, s.stock_name || s.stock_code);
            added++;
        }
    }
    if (added > 0) ElementPlus.ElMessage.success(`已加入 ${added} 只股票到自选`);
    else ElementPlus.ElMessage.info('所选股票已在自选中');
}
// V5.3.0 (T-5.3.3.4 / FR-5.3.3.4): 评估历史批量加入组合 — 评估→组合一键化
// 选中记录 → 去重 → 调 /api/portfolio/positions/batch 一次登记 (零价占位, 后补成本)
async function batchAddToPortfolio() {
    const ids = selectedHistoryIds.value;
    if (ids.length === 0) return;
    const stocks = aiHistory.value.filter(h => ids.includes(h.id));
    const unique = [...new Map(stocks.map(s => [s.stock_code, s])).values()];
    try {
        const res = await fetch('/api/portfolio/positions/batch', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                stocks: unique.map(s => ({ stock_code: s.stock_code, stock_name: s.stock_name || '' })),
            }),
        });
        const data = await res.json();
        if (data && data.success) {
            ElementPlus.ElMessage.success(`已登记 ${data.count || unique.length} 只到组合，请在组合页补充成本与数量`);
        } else {
            ElementPlus.ElMessage.error((data && data.detail) || '批量加入组合失败');
        }
    } catch (e) {
        console.warn('batchAddToPortfolio failed:', e);
        ElementPlus.ElMessage.error('批量加入组合失败，请稍后重试');
    }
    if (typeof loadPortfolio === 'function') loadPortfolio();
}
async function batchRemoveWatchlist() {
    if (selectedWatchlistCodes.value.length === 0) return;
    try {
        await ElementPlus.ElMessageBox.confirm(
            `确定移除选中的 ${selectedWatchlistCodes.value.length} 只股票？`, '提示', { type: 'warning' }
        );
        for (const code of selectedWatchlistCodes.value) {
            await removeFromWatchlist(code);
        }
        selectedWatchlistCodes.value = [];
        ElementPlus.ElMessage.success('已移除');
    } catch (e) { if (e && e.message !== 'cancel') console.warn('batchRemoveWatchlist:', e); }
}
function toggleSelectWatchlist(code) {
    const idx = selectedWatchlistCodes.value.indexOf(code);
    if (idx >= 0) selectedWatchlistCodes.value.splice(idx, 1);
    else selectedWatchlistCodes.value.push(code);
}
function selectAllHistory() {
    if (selectedHistoryIds.value.length === aiHistory.value.length) {
        selectedHistoryIds.value = [];
    } else {
        selectedHistoryIds.value = aiHistory.value.map(h => h.id);
    }
}
function selectAllWatchlist() {
    if (selectedWatchlistCodes.value.length === watchlist.value.length) {
        selectedWatchlistCodes.value = [];
    } else {
        selectedWatchlistCodes.value = watchlist.value.map(s => s.code);
    }
}

// 批量删除选中记录
async function deleteSelectedHistory() {
    if (selectedHistoryIds.value.length === 0) return;
    try {
        await ElementPlus.ElMessageBox.confirm(
            `确定要删除选中的 ${selectedHistoryIds.value.length} 条记录吗？`,
            '确认批量删除',
            {
                confirmButtonText: '确定删除',
                cancelButtonText: '取消',
                type: 'warning'
            }
        );
        const res = await fetch('/api/ai/history/batch-delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ids: selectedHistoryIds.value})
        });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success(data.message);
            selectedHistoryIds.value = [];
            loadAiHistory();
        } else {
            ElementPlus.ElMessage.error(data.message || '删除失败');
        }
    } catch (e) {
        // 用户取消
    }
}

// 加载自动评估配置
async function loadAutoEvaluateConfig() {
    try {
        const res = await fetch('/api/ai/auto-config');
        const data = await res.json();
        if (data.success) {
            autoEvaluateConfig.value = data.data;
            if (data.data.evaluate_scope) autoEvaluateScope.value = data.data.evaluate_scope;
        }
    } catch (e) { console.warn('loadAutoEvaluateConfig failed:', e); }
}

// 保存自动评估配置
async function saveAutoEvaluateConfig() {
    savingConfig.value = true;
    try {
        // 同步 scope 到配置
        autoEvaluateConfig.value.evaluate_scope = autoEvaluateScope.value;
        const res = await fetch('/api/ai/auto-config', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(autoEvaluateConfig.value)
        });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success('自动评估配置已保存');
            showAutoEvaluateSettings.value = false;
        } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('保存失败');
    } finally {
        savingConfig.value = false;
    }
}
      return {
        doAiEvaluate, aiHistoryTotal, aiHistoryLoadingMore, hasMoreAiHistory, loadAiHistory, loadMoreAiHistory, deleteSingleHistory, toggleSelectHistory, clearSelection, clearWatchlistSelection, batchReevaluateHistory, batchAddToWatchlist, batchAddToPortfolio, batchRemoveWatchlist, toggleSelectWatchlist, selectAllHistory, selectAllWatchlist, deleteSelectedHistory, loadAutoEvaluateConfig, saveAutoEvaluateConfig,
      };
    },
  };
})();
