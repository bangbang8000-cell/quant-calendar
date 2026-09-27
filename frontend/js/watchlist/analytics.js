// quant-calendar: 自选/评估历史域模块 6.3.0 (T-6.3.0.8) 结构分治片段 —— analytics
// 由 frontend/js/watchlist.js 的 create(deps) 逐字符下沉; 经 create(ctx) 装配。
(function () {
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.watchlist = window.__quantModules.watchlist || {};
  window.__quantModules.watchlist.analytics = {
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
        // V6.12 (需求轮3·item3): 原用「文字色」当条填充 (过深) → 改柔和条填充档
        { label: '90+', min: 90, max: 100, color: 'var(--bar-fill-ok)' },
        { label: '80-89', min: 80, max: 89, color: 'var(--bar-fill-ok)' },
        { label: '70-79', min: 70, max: 79, color: 'color-mix(in srgb, var(--state-success-solid) 42%, var(--surface-card))' },
        { label: '60-69', min: 60, max: 69, color: 'var(--bar-fill-warn)' },
        { label: '<60', min: 0, max: 59, color: 'var(--bar-fill-bad)' },
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
        const res = await fetch('/api/ai/evaluate', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
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
    // v3.17.9 (FR-3.17.9): echarts 懒加载 — 非首屏按需引入, 未加载先注入再渲染
    const ensureCharts = (window.__quantModules && window.__quantModules.charts
        && typeof window.__quantModules.charts.ensureEcharts === 'function')
        ? window.__quantModules.charts.ensureEcharts : null;
    const doRender = () => {
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
        primary: getCSSVar('--qc-primary-600') || '#b8922a',
        textPrimary: getCSSVar('--text-primary') || '#1f2937',
        textSecondary: getCSSVar('--text-secondary') || '#6b7280',
        border: getCSSVar('--chart-axis') || '#b9b2a6',
        // V5.12.0 (FR-5.12.4.2): 轴/网格走专用图表令牌 (原来借用 --border-light, 明暗层次不统一)
        axis: getCSSVar('--chart-axis') || '#b9b2a6',
        split: getCSSVar('--chart-split') || '#e7e1d6',
        // V5.12.0 (FR-5.12.4): 修正为 A 股口径 (红涨绿跌) — 原用 success/danger 语义 (绿涨红跌) 与全站相反
        up: getCSSVar('--qc-market-up') || '#e63946',
        down: getCSSVar('--qc-market-down') || '#2e7d32',
    };
    // find significant changes (>20 pts between consecutive evals)
    const markPoints = [];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] != null && scores[i - 1] != null && Math.abs(scores[i] - scores[i - 1]) >= 15) {
            markPoints.push({ name: '大幅变化', coord: [dates[i], scores[i]], value: (scores[i] - scores[i - 1] > 0 ? '↑' : '↓') + Math.abs(scores[i] - scores[i - 1]), symbol: 'pin', symbolSize: 32, itemStyle: { color: scores[i] - scores[i - 1] > 0 ? themeColors.up : themeColors.down } });
        }
    }
    const chart = echarts.init(el);
    // V5.12.0 (FR-5.12.4.1): 基础 option 统一来自 getEChartsTheme() (文字/轴/网格/提示框/序列色板)
    const _EC = window.__quantModules && window.__quantModules.echartsTheme;
    if (_EC && typeof _EC.getEChartsTheme === 'function') chart.setOption(_EC.getEChartsTheme());
    chart.setOption({
        tooltip: { trigger: 'axis', backgroundColor: getCSSVar('--bg-card') || '#ffffff', borderColor: themeColors.border, textStyle: { color: themeColors.textPrimary }, formatter: function (params) {
            const idx = params[0]?.dataIndex;
            const level = idx != null ? levels[idx] : '';
            return dates[idx] + '<br/>得分: ' + scores[idx] + (level ? ' (' + level + ')' : '');
        }},
        grid: { left: 40, right: 16, top: 16, bottom: 24 },
        xAxis: { type: 'category', data: dates, axisLabel: { fontSize: 10, rotate: 30, color: themeColors.textSecondary }, axisLine: { lineStyle: { color: themeColors.axis } }, boundaryGap: false },
        yAxis: { type: 'value', min: 0, max: 100, axisLabel: { fontSize: 10, color: themeColors.textSecondary }, splitLine: { lineStyle: { color: themeColors.split } } },
        series: [{
            data: scores, type: 'line', smooth: true,
            lineStyle: { color: themeColors.primary, width: 2 },
            itemStyle: { color: themeColors.primary },
            areaStyle: { color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{ offset: 0, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.3)' : 'rgba(64,158,255,0.3)' }, { offset: 1, color: getCSSVar('--primary-rgb') ? 'rgba(' + getCSSVar('--primary-rgb') + ',0.02)' : 'rgba(64,158,255,0.02)' }]) },
            markPoint: markPoints.length > 0 ? { data: markPoints } : undefined,
        }],
    });
    _trendChartCache[code] = chart;
    };
    if (ensureCharts) {
        ensureCharts().then(doRender).catch(() => { /* echarts 加载失败则跳过趋势图 */ });
    } else {
        doRender();
    }
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
    // v3.17.6 (bugfix): 弹窗停在 AI tab 时容器不存在, 定时加载必失败 — 删除;
    // 切到 K线 tab 由 watch(stockDetailTab) 自动加载
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

    const headers = { 'Content-Type': 'application/json' };

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
      return {
        groupedByDate, aiHistoryByStock, groupedByMonth, aiHistoryStockCount, scoreDistribution, quickEvaluate, toggleDateExpand, toggleSelectDate, toggleSelectMonth, toggleStockExpand, toggleSelectStock, registerTrendChart, viewAiResult, doBatchEvaluate,
      };
    },
  };
})();
