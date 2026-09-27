// quant-calendar: 自选/评估历史域模块 6.3.0 (T-6.3.0.8) 结构分治片段 —— list
// 由 frontend/js/watchlist.js 的 create(deps) 逐字符下沉; 经 create(ctx) 装配。
(function () {
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.watchlist = window.__quantModules.watchlist || {};
  window.__quantModules.watchlist.list = {
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
      dataRefreshSaving, levelVar, levelBgVar, undoStack, showUndoMessage, loadAiHistory
      } = ctx;

// v1.8.0: 自选股 CRUD
// v3.17.9 (FR-3.17.9): 自选加载态（自选区骨架屏）
const watchlistLoading = ref(false);
async function loadWatchlist() {
    watchlistLoading.value = true;
    try {
        const res = await fetch('/api/watchlist');
        const data = await res.json();
        if (data.success) watchlist.value = data.stocks || [];
    } catch (e) { console.warn('loadWatchlist failed:', e); }
    finally { watchlistLoading.value = false; }
}
async function addToWatchlist(code, name) {
    try {
        const res = await fetch('/api/watchlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code, name })
        });
        const data = await res.json();
        if (data.success) {
            if (!data.existed) watchlist.value.push({ code, name, added_at: new Date().toISOString() });
            return true;
        }
    } catch (e) { console.warn('addToWatchlist failed:', e); }
    return false;
}
async function removeFromWatchlist(code) {
    try {
        const item = watchlist.value.find(s => s.code === code);
        const name = item ? (item.name || '') : '';
        await fetch(`/api/watchlist/${encodeURIComponent(code)}`, {
            method: 'DELETE'
        });
        watchlist.value = watchlist.value.filter(s => s.code !== code);
        if (watchlistCodes.value && watchlistCodes.value.delete) watchlistCodes.value.delete(code);
        // 6.1.1 (A3): 5s 内可撤销 (恢复 = 重新加入自选)
        if (undoStack) {
            const id = undoStack.register(() => { addToWatchlist(code, name); }, '移除自选', 5000);
            showUndoMessage('已移除自选', id);
        } else {
            ElementPlus.ElMessage.info('已移除自选');
        }
    } catch (e) { console.warn('removeFromWatchlist failed:', e); }
}
async function clearWatchlist() {
    try {
        await ElementPlus.ElMessageBox.confirm('确定清空所有自选股？', '提示', { type: 'warning' });
        const snapshot = watchlist.value.slice();
        await fetch('/api/watchlist', {
            method: 'DELETE'
        });
        watchlist.value = [];
        if (watchlistCodes.value && watchlistCodes.value.clear) watchlistCodes.value.clear();
        ElementPlus.ElMessage.success('自选已清空');
        // 6.1.1 (A3): 5s 内可撤销 (恢复 = 快照重加入)
        if (undoStack && snapshot.length) {
            const id = undoStack.register(() => {
                snapshot.forEach(s => addToWatchlist(s.code, s.name || ''));
            }, '清空自选', 5000);
            showUndoMessage('自选已清空', id);
        }
    } catch (e) { console.warn('clearWatchlist failed:', e); }
}
async function toggleWatchlist(code, name) {
    if (watchlistCodes.value.has(code)) {
        await removeFromWatchlist(code);
        ElementPlus.ElMessage.info('已移除自选');
    } else {
        const ok = await addToWatchlist(code, name);
        if (ok) ElementPlus.ElMessage.success('已加入自选');
    }
}
async function showStockKline(code, name) {
    // v3.17.10 (FR-3.17.10): 记录最近查看
    if (window.__quantModules && window.__quantModules.recent) {
        window.__quantModules.recent.recordViewed(code, name || '');
    }
    // v1.8.0: 先获取完整股票详情（含今日行情+均线+评分）
    const today = new Date().toISOString().split('T')[0];
    const date = selectedDate.value || today;
    // v3.16 (16.10-fix): 立即弹窗（加载态），数据异步填充 — 避免行情接口慢导致弹窗延迟
    // v3.16 (bugfix): 强制切到 K线 tab + 销毁旧图表实例 — 否则上次停留在 AI/问股 tab 时
    // 打开自选个股，#stockKlineChart 不存在 → loadStockKline 抛错 → 不加载K线
    stockDetailTab.value = 'kline';
    // V4.9.x (bugfix): 打开个股必须重置 AI 评估状态 — 否则 aiResult 残留上一只
    // 股票的评估结果, AI tab 会串股显示"最近某只股票的评估"
    aiResult.value = null;
    aiEvalError.value = '';
    disposeStockKline('stockKlineChart');
    stockDetail.value = null;
    stockDetailLoading.value = true;
    stockKlineLoaded.value = false;
    stockDetailVisible.value = true;
    nextTick(() => animateScoreEntrance());
    try {
        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}?date=${date}`);
        stockDetail.value = await res.json();
    } catch(e) {
        stockDetail.value = { stock: code, name, total_days: 0 };
    } finally {
        stockDetailLoading.value = false;
    }
    await nextTick();
    await loadStockKline('daily');
    refreshStockScore();
    // V4.9.x (bugfix): 异步加载本股最近评估 (与 showStockDetail 一致), 评估过则展示本股结果
    loadLastEvaluation(code);
}
const preloadingKline = ref(false);
async function preloadWatchlistKline() {
    if (watchlist.value.length === 0) return;
    preloadingKline.value = true;
    try {
        const res = await fetch('/api/watchlist/kline/preload', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
        const data = await res.json();
        if (data.success && data.loaded > 0) {
            // 标记已加载K线的股票
            (data.details?.loaded || []).forEach(item => klineLoadedCodes.value.add(item.code));
            // v1.8.0: 静默预加载, 不弹提示
        } else if (data.loaded === 0 && data.total > 0) {
            ElementPlus.ElMessage.warning('K线预加载: 全部失败, 请检查数据源');
        }
    } catch(e) {
        console.error('预加载K线失败:', e);
    } finally {
        preloadingKline.value = false;
    }
}
async function watchlistEvaluate(code, name) {
    // v1.10: 始终触发新评估，弹窗展示完整结果
    aiLoading.value = true;
    aiResult.value = null;
    aiEvalError.value = '';
    aiEvalStage.value = 'fetching';
    stockKlineLoaded.value = false;
    disposeStockKline();
    const today = new Date().toISOString().split('T')[0];
    const date = selectedDate.value || today;
    try {
        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}?date=${date}`);
        stockDetail.value = await res.json();
    } catch(e) {
        stockDetail.value = { stock: code, name, total_days: 0 };
    }
    stockDetailTab.value = 'ai';
    stockDetailVisible.value = true;
    await nextTick();
    // 触发新评估
    try {
        const evalRes = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ stock_code: code, stock_name: name })
        });
        const evalData = await evalRes.json();
        if (evalData.success) {
            aiResult.value = evalData.data;
            loadAiHistory();
        } else {
            aiEvalError.value = evalData.message || '评估失败';
            ElementPlus.ElMessage.error(aiEvalError.value);
        }
    } catch(e) {
        aiEvalError.value = '网络异常或后端不可用，评估失败';
        ElementPlus.ElMessage.error(aiEvalError.value);
    } finally {
        aiLoading.value = false;
        aiEvalStage.value = '';
    }
    // v3.17.6 (bugfix): 弹窗停在 AI tab 时容器不存在, 此处加载必失败 — 删除;
    // 切到 K线 tab 由 watch(stockDetailTab) 自动加载
}
async function batchEvaluateWatchlist() {
    if (watchlist.value.length === 0) return;
    showBatchEvaluate.value = true;
    batchStocks.value = watchlist.value.map(s => s.code).join(',');
}
async function batchEvaluateSelected() {
    if (selectedWatchlistCodes.value.length === 0) return;
    showBatchEvaluate.value = true;
    batchStocks.value = selectedWatchlistCodes.value.join(',');
}
async function searchStockForWatchlist() {
    if (!watchlistSearch.value.trim()) { watchlistResults.value = []; return; }
    watchlistSearching.value = true;
    try {
        const res = await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(watchlistSearch.value)}`);
        const data = await res.json();
        watchlistResults.value = (data.results || []).filter(r => !watchlistCodes.value.has(r.code));
    } catch (e) { console.warn('searchStockForWatchlist failed:', e); } finally { watchlistSearching.value = false; }
}

// v1.8.0: 加载数据刷新配置
async function loadDataRefreshConfig() {
    try {
        const res = await fetch('/api/data-refresh/config');
        const data = await res.json();
        dataRefreshConfig.value = data;
    } catch (e) {
        console.error('加载数据刷新配置失败:', e);
    }
}

// v1.8.0: 保存数据刷新配置
async function saveDataRefreshConfig() {
    dataRefreshSaving.value = true;
    try {
        const res = await fetch('/api/data-refresh/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dataRefreshConfig.value)
        });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success('数据刷新配置已保存');
        } else {
            ElementPlus.ElMessage.error('保存失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('保存失败');
    } finally {
        dataRefreshSaving.value = false;
    }
}

// v1.8.0: 手动触发数据重载
async function triggerDataReload() {
    dataRefreshReloading.value = true;
    try {
        const res = await fetch('/api/data-refresh/reload', { method: 'POST' });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success(`数据刷新成功: ${data.parser_stats?.dates_count || 0}交易日`);
            viewCache.clear();  // 清空客户端视图缓存
            await loadDataRefreshConfig();
        } else {
            ElementPlus.ElMessage.error(data.error || '刷新失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('刷新请求失败');
    } finally {
        dataRefreshReloading.value = false;
    }
}

// v3.12 (FR-3.12.1): 手动触发日线/财务拉取
const dataPullRunning = ref(false);
async function triggerDataPull() {
    dataPullRunning.value = true;
    try {
        const res = await fetch('/api/data-refresh/pull', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // V6.9.3 (F11.1): 自选股票池拉取项已移除 — 全量拉取(留空=全部)
            body: JSON.stringify({ stock_pool: [] })
        });
        const data = await res.json();
        if (data.success) {
            const r = data.result || {};
            const f = data.financial || {};
            ElementPlus.ElMessage.success(
                `拉取完成: 日线 ${r.pulled || 0}/${r.total || 0}, 财务 ${f.pulled || 0}/${f.total || 0}`
            );
            viewCache.clear();
            await loadDataRefreshConfig();
        } else {
            ElementPlus.ElMessage.error(data.error || '拉取失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('拉取请求失败');
    } finally {
        dataPullRunning.value = false;
    }
}
      return {
        watchlistLoading, loadWatchlist, addToWatchlist, removeFromWatchlist, clearWatchlist, toggleWatchlist, showStockKline, preloadingKline, preloadWatchlistKline, watchlistEvaluate, batchEvaluateWatchlist, batchEvaluateSelected, searchStockForWatchlist, loadDataRefreshConfig, saveDataRefreshConfig, triggerDataReload, dataPullRunning, triggerDataPull,
      };
    },
  };
})();
