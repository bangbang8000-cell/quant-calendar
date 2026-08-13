// quant-calendar: 自选/评估历史域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：自选股管理、快捷评估、批量评估、评估历史分组/选择、数据刷新配置。
// 工厂模式：window.__quantModules.watchlist.create(deps) → 该域全部状态与函数。
// deps（共享依赖）:
//   currentUser selectedDate stockDetail stockDetailTab stockDetailVisible
//   stockKlineLoaded viewCache animateScoreEntrance loadStockKline refreshStockScore
//   AI 域状态: aiHistory aiLoading aiEvalStage autoEvaluateConfig autoEvaluateScope
//   batchStocks batchRunning batchTotal batchCompleted batchCurrent batchStatuses batchResults
//   expandedDates expandedStocks savingConfig selectedHistoryIds selectedWatchlistCodes
//   showAutoEvaluateSettings showBatchEvaluate
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.watchlist = {
    create(deps) {
      const { ref, computed, watch } = Vue;
      const { currentUser, selectedDate, stockDetail, stockDetailTab, stockDetailVisible,
               stockKlineLoaded, viewCache, animateScoreEntrance, loadStockKline, refreshStockScore, disposeStockKline,
               aiHistory, aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, aiResult, autoEvaluateConfig, autoEvaluateScope,
               batchStocks, batchRunning, batchTotal, batchCompleted, batchCurrent, batchStatuses,
               batchResults, batchEvalErrors, expandedDates, expandedStocks, savingConfig, selectedHistoryIds,
               selectedWatchlistCodes, showAutoEvaluateSettings, showBatchEvaluate } = deps;

// v3.15 (15.4): 运行时读 CSS 令牌 — ECharts canvas 无法解析 var(), 令牌优先字面量兜底
// qc-allow-hardcode: 以下 #hex 为显式运行时兜底, 非静态硬编码
const getCSSVar = (n) => (getComputedStyle(document.documentElement).getPropertyValue(n) || '').trim();

const quickEvalStock = ref('');  // v1.10: 快捷评估下拉
const evalStrategy = ref('default');  // v1.10: 评估策略
const watchlistSort = ref('default');  // v1.10: 自选排序
const watchlist = ref([]);
const watchlistCodes = computed(() => new Set(watchlist.value.map(s => s.code)));
// v1.10: 排序后的自选列表
const sortedWatchlist = computed(() => {
    const list = [...watchlist.value];
    if (watchlistSort.value === 'name') {
        list.sort((a, b) => a.name.localeCompare(b.name, 'zh'));
    } else if (watchlistSort.value === 'added') {
        list.sort((a, b) => (b.added_at || '').localeCompare(a.added_at || ''));
    } else if (watchlistSort.value === 'score') {
        list.sort((a, b) => {
            const sa = getLatestScore(a.code);
            const sb = getLatestScore(b.code);
            return sb - sa;
        });
    }
    return list;
});
// v1.10: 获取某股票最近评分和颜色
function getWatchlistScore(code) {
    const records = aiHistory.value.filter(r => r.stock_code === code);
    if (records.length === 0) return null;
    const latest = records.reduce((a, b) => (a.evaluate_time > b.evaluate_time) ? a : b);
    return { score: latest.result.total_score, color: latest.result.level_color };
}
function getLatestScore(code) {
    const s = getWatchlistScore(code);
    return s ? s.score : 0;
}
// v1.10: 搜索结果添加（提取模板逻辑）
function addSearchResult(r) {
    addToWatchlist(r.code, r.name);
    watchlistResults.value = watchlistResults.value.filter(x => x.code !== r.code);
    watchlistSearch.value = '';
}
// 已评估股票集合（来自AI历史）
const evaluatedCodes = computed(() => new Set(aiHistory.value.map(r => r.stock_code)));
// K线已加载集合（当前session）
const klineLoadedCodes = ref(new Set());
function markKlineLoaded(code) { klineLoadedCodes.value.add(code); }
const watchlistSearch = ref('');
const watchlistResults = ref([]);
const watchlistSearching = ref(false);

// v1.8.0: 数据刷新配置
const dataRefreshConfig = ref({
    scheduled_enabled: false,
    scheduled_time: '22:00',
    watch_enabled: false,
    last_refresh: null,
    last_refresh_status: null,
    // v3.12 (FR-3.12.1): 定时拉取配置
    pull_enabled: false,
    pull_time: '22:30',
    pull_frequency: 'daily',
    pull_weekday: '0',
    stock_pool: []
});
const dataRefreshReloading = ref(false);
const dataRefreshSaving = ref(false);

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
        const token = localStorage.getItem('quant_token');
        const res = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
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

async function loadAiHistory() {
    try {
        const token = localStorage.getItem('quant_token');
        if (!token) { aiHistory.value = []; return; }
        const headers = { 'Authorization': `Bearer ${token}` };
        const res = await fetch('/api/ai/history', { headers });
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
            aiHistory.value = data.data;
        }
    } catch (e) { console.error('[loadAiHistory] error:', e); }
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
        const token = localStorage.getItem('quant_token');
        const res = await fetch(`/api/ai/history/${id}`, {
            method: 'DELETE',
            headers: { 'Authorization': `Bearer ${token}` }
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
        const token = localStorage.getItem('quant_token');
        const res = await fetch('/api/ai/history/batch-delete', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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

// v1.8.0: 自选股 CRUD
async function loadWatchlist() {
    try {
        const token = localStorage.getItem('quant_token');
        const res = await fetch('/api/watchlist', { headers: { 'Authorization': `Bearer ${token}` } });
        const data = await res.json();
        if (data.success) watchlist.value = data.stocks || [];
    } catch (e) { console.warn('loadWatchlist failed:', e); }
}
async function addToWatchlist(code, name) {
    try {
        const token = localStorage.getItem('quant_token');
        const res = await fetch('/api/watchlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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
        const token = localStorage.getItem('quant_token');
        await fetch(`/api/watchlist/${encodeURIComponent(code)}`, {
            method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }
        });
        watchlist.value = watchlist.value.filter(s => s.code !== code);
    } catch (e) { console.warn('removeFromWatchlist failed:', e); }
}
async function clearWatchlist() {
    try {
        await ElementPlus.ElMessageBox.confirm('确定清空所有自选股？', '提示', { type: 'warning' });
        const token = localStorage.getItem('quant_token');
        await fetch('/api/watchlist', {
            method: 'DELETE', headers: { 'Authorization': `Bearer ${token}` }
        });
        watchlist.value = [];
        ElementPlus.ElMessage.success('自选已清空');
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
    // v1.8.0: 先获取完整股票详情（含今日行情+均线+评分）
    const today = new Date().toISOString().split('T')[0];
    const date = selectedDate.value || today;
    try {
        const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}?date=${date}`);
        stockDetail.value = await res.json();
    } catch(e) {
        stockDetail.value = { stock: code, name, total_days: 0 };
    }
    stockKlineLoaded.value = false;
    stockDetailVisible.value = true;
    nextTick(() => animateScoreEntrance());
    await nextTick();
    await loadStockKline('daily');
    refreshStockScore();
}
const preloadingKline = ref(false);
async function preloadWatchlistKline() {
    if (watchlist.value.length === 0) return;
    preloadingKline.value = true;
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` } : { 'Content-Type': 'application/json' };
        const res = await fetch('/api/watchlist/kline/preload', { method: 'POST', headers });
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
        const token = localStorage.getItem('quant_token');
        const evalRes = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
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
    // 加载K线
    setTimeout(async () => { await loadStockKline('daily'); refreshStockScore(); }, 500);
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
        const token = localStorage.getItem('quant_token');
        const res = await fetch(`/api/watchlist/stock/search?q=${encodeURIComponent(watchlistSearch.value)}`, { headers: { 'Authorization': `Bearer ${token}` } });
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
        const token = localStorage.getItem('quant_token');
        const headers = token
            ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            : { 'Content-Type': 'application/json' };
        const res = await fetch('/api/data-refresh/config', {
            method: 'POST',
            headers,
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
        const token = localStorage.getItem('quant_token');
        const headers = token
            ? { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
            : { 'Content-Type': 'application/json' };
        const res = await fetch('/api/data-refresh/pull', {
            method: 'POST',
            headers,
            body: JSON.stringify({ stock_pool: dataRefreshConfig.value.stock_pool || [] })
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

// 按日期聚合的计算属性
const groupedByDate = computed(() => {
    const groups = {};
    for (const item of aiHistory.value) {
        const date = (item.evaluate_time || '').split('T')[0];  // ISO format: 2026-05-29T02:07:28
        if (!groups[date]) groups[date] = [];
        groups[date].push(item);
    }
    // 每组内按时间倒序
    for (const d in groups) {
        groups[d].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
    }
    return groups;
});

// 按股票聚合
const aiHistoryByStock = computed(() => {
    const groups = {};
    for (const item of aiHistory.value) {
        const code = item.stock_code;
        if (!groups[code]) groups[code] = [];
        groups[code].push(item);
    }
    for (const code in groups) {
        groups[code].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
    }
    return groups;
});

// 按月聚合
const groupedByMonth = computed(() => {
    const groups = {};
    for (const item of aiHistory.value) {
        const month = (item.evaluate_time || '').split('T')[0].slice(0, 7);  // YYYY-MM
        if (!groups[month]) groups[month] = [];
        groups[month].push(item);
    }
    for (const m in groups) {
        groups[m].sort((a, b) => b.evaluate_time.localeCompare(a.evaluate_time));
    }
    return groups;
});

const aiHistoryStockCount = computed(() => Object.keys(aiHistoryByStock.value).length);

// v1.10: 评分分布（用于 Overview 仪表盘）
const scoreDistribution = computed(() => {
    const total = aiHistory.value.length;
    if (total === 0) return [];
    const bins = [
        { label: '90+', min: 90, max: 100, color: 'var(--el-success)' },
        { label: '80-89', min: 80, max: 89, color: 'var(--color-success)' },
        { label: '70-79', min: 70, max: 79, color: 'color-mix(in srgb, var(--color-success) 55%, var(--bg-card))' },
        { label: '60-69', min: 60, max: 69, color: 'var(--el-warning)' },
        { label: '<60', min: 0, max: 59, color: 'var(--el-danger)' },
    ];
    return bins.map(b => {
        const count = aiHistory.value.filter(r => r.result.total_score >= b.min && r.result.total_score <= b.max).length;
        return { ...b, count, pct: Math.round(count / total * 100) };
    });
});

// v1.10: 快捷评估
async function quickEvaluate() {
    if (!quickEvalStock.value) return;
    const stock = watchlist.value.find(s => s.code === quickEvalStock.value);
    if (!stock) return;
    aiLoading.value = true;
    aiResult.value = null;
    aiEvalError.value = '';
    aiEvalStage.value = 'fetching';
    try {
        stockDetail.value = { stock: stock.code, name: stock.name, total_days: 0 };
        stockDetailVisible.value = true;
        stockDetailTab.value = 'ai';
        await nextTick();
        // 借用 doAiEvaluate 逻辑
        const token = localStorage.getItem('quant_token');
        const res = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
            body: JSON.stringify({ stock_code: stock.code, stock_name: stock.name, strategy: evalStrategy.value })
        });
        const data = await res.json();
        if (data.success) {
            aiResult.value = data.data;
            loadAiHistory();
            quickEvalStock.value = '';
        } else {
            aiEvalError.value = data.message || '评估失败';
            ElementPlus.ElMessage.error(aiEvalError.value);
        }
    } catch (e) {
        aiEvalError.value = '网络异常或后端不可用，评估失败';
        ElementPlus.ElMessage.error(aiEvalError.value);
    } finally {
        aiLoading.value = false;
        aiEvalStage.value = '';
    }
}

// 切换日期展开
function toggleDateExpand(date) {
    const idx = expandedDates.value.indexOf(date);
    if (idx >= 0) expandedDates.value.splice(idx, 1);
    else expandedDates.value.push(date);
}

// 切换某日全部记录的选中状态
function toggleSelectDate(date) {
    const records = groupedByDate.value[date] || [];
    const ids = records.map(r => r.id);
    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
    if (allSelected) {
        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
    } else {
        ids.forEach(id => {
            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
        });
    }
}

// 切换某月全部记录的选中状态
function toggleSelectMonth(month) {
    const records = groupedByMonth.value[month] || [];
    const ids = records.map(r => r.id);
    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
    if (allSelected) {
        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
    } else {
        ids.forEach(id => {
            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
        });
    }
}

function toggleStockExpand(code) {
    const idx = expandedStocks.value.indexOf(code);
    if (idx >= 0) expandedStocks.value.splice(idx, 1);
    else expandedStocks.value.push(code);
}

// 切换某股票全部记录的选中状态
function toggleSelectStock(code) {
    const records = aiHistoryByStock.value[code] || [];
    const ids = records.map(r => r.id);
    const allSelected = ids.every(id => selectedHistoryIds.value.includes(id));
    if (allSelected) {
        selectedHistoryIds.value = selectedHistoryIds.value.filter(id => !ids.includes(id));
    } else {
        ids.forEach(id => {
            if (!selectedHistoryIds.value.includes(id)) selectedHistoryIds.value.push(id);
        });
    }
}

// v3.7.14: 评估历史趋势图
const _trendChartCache = {};
const _trendChartData = {};  // v3.15: 主题重绘数据缓存 (code → {el, records})
function registerTrendChart(el, code, records) {
    if (!el) return; // dispose
    if (records) _trendChartData[code] = { el, records };
    if (_trendChartCache[code] === el) return; // same element
    // dispose old instance if exists
    Object.keys(_trendChartCache).forEach(key => {
        if (_trendChartCache[key] && _trendChartCache[key] !== el) {
            try { _trendChartCache[key].dispose(); } catch (e) { /* ignore */ }
            delete _trendChartCache[key];
        }
    });
    const sorted = [...records].sort((a, b) => a.evaluate_time.localeCompare(b.evaluate_time));
    const dates = sorted.map(r => (r.evaluate_time || '').split('T')[0]);
    const scores = sorted.map(r => r.result?.total_score ?? null);
    const levels = sorted.map(r => r.result?.level ?? '');
    // v3.15: 主题感知色 — 渲染时读令牌, 暗色下轴/文字不糊
    // qc-allow-hardcode: 下方 #hex 为 ECharts 运行时兜底字面量
    const themeColors = {
        primary: getCSSVar('--primary-color') || '#2563eb',
        textPrimary: getCSSVar('--text-primary') || '#1f2937',
        textSecondary: getCSSVar('--text-secondary') || '#6b7280',
        border: getCSSVar('--border-light') || '#e5e7eb',
        up: getCSSVar('--color-success') || '#67c23a',
        down: getCSSVar('--color-danger') || '#f56c6c',
    };
    // find significant changes (>20 pts between consecutive evals)
    const markPoints = [];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] != null && scores[i - 1] != null && Math.abs(scores[i] - scores[i - 1]) >= 15) {
            markPoints.push({ name: '大幅变化', coord: [dates[i], scores[i]], value: (scores[i] - scores[i - 1] > 0 ? '↑' : '↓') + Math.abs(scores[i] - scores[i - 1]), symbol: 'pin', symbolSize: 32, itemStyle: { color: scores[i] - scores[i - 1] > 0 ? themeColors.up : themeColors.down } });
        }
    }
    const chart = echarts.init(el);
    chart.setOption({
        tooltip: { trigger: 'axis', backgroundColor: getCSSVar('--bg-card') || '#ffffff', borderColor: themeColors.border, textStyle: { color: themeColors.textPrimary }, formatter: function (params) {
            const idx = params[0]?.dataIndex;
            const level = idx != null ? levels[idx] : '';
            return dates[idx] + '<br/>得分: ' + scores[idx] + (level ? ' (' + level + ')' : '');
        }},
        grid: { left: 40, right: 16, top: 16, bottom: 24 },
        xAxis: { type: 'category', data: dates, axisLabel: { fontSize: 10, rotate: 30, color: themeColors.textSecondary }, axisLine: { lineStyle: { color: themeColors.border } }, boundaryGap: false },
        yAxis: { type: 'value', min: 0, max: 100, axisLabel: { fontSize: 10, color: themeColors.textSecondary }, splitLine: { lineStyle: { color: themeColors.border } } },
        series: [{
            data: scores, type: 'line', smooth: true,
            lineStyle: { color: themeColors.primary, width: 2 },
            itemStyle: { color: themeColors.primary },
            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.3)' : 'rgba(64,158,255,0.3)' }, { offset: 1, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.02)' : 'rgba(64,158,255,0.02)' }]) },
            markPoint: markPoints.length > 0 ? { data: markPoints } : undefined,
        }],
    });
    _trendChartCache[code] = chart;
}
// v3.15 (15.4): 趋势图随主题重绘 — dispose 后按缓存数据重建
function _refreshTrendCharts() {
    Object.keys(_trendChartData).forEach(code => {
        const entry = _trendChartData[code];
        if (!entry || !entry.el) return;
        if (_trendChartCache[code]) {
            try { _trendChartCache[code].dispose(); } catch (e) { /* ignore */ }
            delete _trendChartCache[code];
        }
        registerTrendChart(entry.el, code, entry.records);
    });
}
if (window.__quantModules && window.__quantModules.echartsTheme && !window.__quantModules.echartsTheme.__watchlistTrendRegistered) {
    window.__quantModules.echartsTheme.__watchlistTrendRegistered = true;
    window.__quantModules.echartsTheme.registerChart(_refreshTrendCharts);
}

async function viewAiResult(item) {
    // 查看历史评估记录
    aiResult.value = item;
    stockKlineLoaded.value = false;
    disposeStockKline();
    try {
        const res = await fetch(`/api/calendar/stock/${item.stock_code}?date=${selectedDate.value}`);
        stockDetail.value = await res.json();
    } catch (e) {
        stockDetail.value = {
            stock: item.stock_code,
            name: item.stock_name || item.stock_code,
            total_days: 0,
            history: []
        };
    }
    stockDetailVisible.value = true;
    stockDetailTab.value = 'ai';
    // 弹窗打开后加载K线
    setTimeout(async () => {
        await loadStockKline('daily');
        refreshStockScore();
    }, 500);
}

async function doBatchEvaluate() {
    if (!batchStocks.value.trim()) {
        ElementPlus.ElMessage.warning('请输入股票代码');
        return;
    }
    const stockCodes = batchStocks.value.split(/[,，\s]+/).filter(s => s.trim());
    if (stockCodes.length === 0) return;

    batchRunning.value = true;
    batchTotal.value = stockCodes.length;
    batchCompleted.value = 0;
    batchCurrent.value = '';
    batchStatuses.value = {};
    batchResults.value = {};
    batchEvalErrors.value = {};
    stockCodes.forEach(c => { batchStatuses.value[c] = 'pending'; batchResults.value[c] = null; });

    const token = localStorage.getItem('quant_token');
    const headers = { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` };

    // v3.15: SSE 流式 — 后端逐只完成后实时推送, 进度条真实推进 (替代一次性响应 0→N 瞬跳)
    let successCount = 0, failCount = 0, streamUsed = false;
    try {
        const res = await fetch('/api/ai/batch-evaluate/stream', {
            method: 'POST', headers, body: JSON.stringify({ stock_codes: stockCodes })
        });
        if (res.ok && res.body) {
            streamUsed = true;
            const reader = res.body.getReader();
            const decoder = new TextDecoder('utf-8');
            let buf = '', done = false;
            while (!done) {
                const { value, done: rd } = await reader.read();
                done = rd;
                buf += decoder.decode(value || new Uint8Array(), { stream: !done });
                let idx;
                while ((idx = buf.indexOf('\n\n')) >= 0) {
                    const chunk = buf.slice(0, idx);
                    buf = buf.slice(idx + 2);
                    const line = chunk.split('\n').find(l => l.startsWith('data: '));
                    if (!line) continue;
                    let evt;
                    try { evt = JSON.parse(line.slice(6)); } catch { continue; }
                    if (evt.type === 'start') {
                        if (evt.total) batchTotal.value = evt.total;
                    } else if (evt.type === 'item') {
                        batchCompleted.value++;
                        batchCurrent.value = evt.stock_code;
                        if (evt.success) {
                            batchStatuses.value[evt.stock_code] = 'success';
                            batchResults.value[evt.stock_code] = evt;
                            successCount++;
                        } else {
                            batchStatuses.value[evt.stock_code] = 'error';
                            batchEvalErrors.value[evt.stock_code] = evt.error || '评估失败';
                            failCount++;
                        }
                    } else if (evt.type === 'done') {
                        if (typeof evt.success === 'number') successCount = evt.success;
                        if (typeof evt.fail === 'number') failCount = evt.fail;
                    }
                }
            }
            // 尾部残留缓冲 (末次 chunk 可能无 \n\n 结尾)
            if (buf.trim()) {
                const line = buf.split('\n').find(l => l.startsWith('data: '));
                if (line) {
                    try {
                        const evt = JSON.parse(line.slice(6));
                        if (evt.type === 'item') {
                            batchCompleted.value++;
                            batchCurrent.value = evt.stock_code;
                            if (evt.success) {
                                batchStatuses.value[evt.stock_code] = 'success';
                                batchResults.value[evt.stock_code] = evt;
                                successCount++;
                            } else {
                                batchStatuses.value[evt.stock_code] = 'error';
                                batchEvalErrors.value[evt.stock_code] = evt.error || '评估失败';
                                failCount++;
                            }
                        } else if (evt.type === 'done') {
                            if (typeof evt.success === 'number') successCount = evt.success;
                            if (typeof evt.fail === 'number') failCount = evt.fail;
                        }
                    } catch { }
                }
            }
        }
    } catch (e) {
        streamUsed = false;
    }

    // SSE 不可用/失败 → 降级: 单只逐个评估 (串行), 保留失败原因 (v3.15)
    if (!streamUsed) {
        successCount = 0; failCount = 0;
        batchCompleted.value = 0;
        for (const code of stockCodes) {
            batchCurrent.value = code;
            batchStatuses.value[code] = 'running';
            try {
                const sr = await fetch('/api/ai/evaluate', {
                    method: 'POST', headers,
                    body: JSON.stringify({ stock_code: code.trim(), stock_name: code.trim() })
                });
                const sd = await sr.json();
                if (sd.success) {
                    batchStatuses.value[code] = 'success';
                    batchResults.value[code] = sd.data;
                    successCount++;
                } else {
                    batchStatuses.value[code] = 'error';
                    batchEvalErrors.value[code] = (sd.message && sd.message !== 'success') ? sd.message : '评估失败';
                    failCount++;
                }
            } catch (e) {
                batchStatuses.value[code] = 'error';
                batchEvalErrors.value[code] = '网络错误: ' + (e && e.message ? e.message : e);
                failCount++;
            }
            batchCompleted.value++;
        }
    }

    batchCurrent.value = '';
    await loadAiHistory();
    const total = stockCodes.length;
    setTimeout(() => {
        if (failCount === 0) {
            ElementPlus.ElMessage.success(`评估完成 成功 ${successCount}/${total}`);
        } else {
            ElementPlus.ElMessage.warning(`评估完成 成功 ${successCount}/${total} · 失败 ${failCount}`);
        }
        batchRunning.value = false;
    }, 500);
}

// ===== v3.11(11.3): 系统配置域 — 逻辑移至 js/system.js 模块 =====

      return {
        quickEvalStock, evalStrategy, watchlistSort, watchlist, watchlistCodes, sortedWatchlist,
        getWatchlistScore, getLatestScore, addSearchResult, evaluatedCodes, klineLoadedCodes,
        markKlineLoaded, watchlistSearch, watchlistResults, watchlistSearching,
        dataRefreshConfig, dataRefreshReloading, dataRefreshSaving,
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
      };
    }
  };
})();
