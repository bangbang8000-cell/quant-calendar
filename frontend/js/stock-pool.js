// quant-calendar: 股票池域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：股票池分布、策略筛选应用、共识榜过滤、池变化徽标、时间进度条。
// 工厂模式：window.__quantModules['stock-pool'].create(deps) → 该域全部状态与函数。
// deps（共享依赖）:
//   consensus currentPage currentSubPage dashboardData searchKeyword
//   statusFilter strategyFilter strategyFilterCounts
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules['stock-pool'] = {
    create(deps) {
      const { ref, computed, watch } = Vue;
      const { consensus, currentPage, currentSubPage, dashboardData, searchKeyword,
               statusFilter, strategyFilter, strategyFilterCounts } = deps;

// ===== 股票池 =====
// 策略过滤函数（复用，兼容 strategies 和 strategy_names 字段）
function applyStrategyFilter(stocks) {
    const selected = strategyFilter.value.selected;
    if (!selected || selected.length === 0) return stocks;
    const mode = strategyFilter.value.mode;
    // 同时检查 strategies 和 strategy_names 两个字段
    return stocks.filter(item => {
        const names = item.strategy_names || item.strategies || [];
        return mode === 'union'
            ? selected.some(s => names.includes(s))
            : selected.every(s => names.includes(s));
    });
}
const statusCounts = computed(() => {
    const filtered = applyStrategyFilter(consensus.value || []);
    return {
        all: filtered.length,
        newCount: filtered.filter(s => s.status === 'new').length,
        current: filtered.filter(s => s.status === 'current').length,
        out: filtered.filter(s => s.status === 'out').length,
    };
});
const stockPool = computed(() => {
    let result = consensus.value || [];
    // 本地按状态过滤
    if (statusFilter.value !== 'all') {
        result = result.filter(item => item.status === statusFilter.value);
    }
    // 策略过滤
    result = applyStrategyFilter(result);
    // 搜索过滤
    if (searchKeyword.value) {
        const keyword = searchKeyword.value.toLowerCase();
        result = result.filter(item =>
            item.code.toLowerCase().includes(keyword) ||
            (item.name && item.name.toLowerCase().includes(keyword))
        );
    }
    return result;
});
// 各策略股票分布（饼图用）
const strategyDistribution = computed(() => {
    const stocks = consensus.value || [];
    const map = {};
    // 先建 code→name 映射
    const nameMap = {};
    for (const s of stocks) {
        if (s.code && s.name) nameMap[s.code] = s.name;
    }
    for (const s of stocks) {
        const snames = s.strategy_names || s.strategies || [];
        for (const sn of snames) {
            if (!map[sn]) map[sn] = { strategy: sn, count: 0, codes: [], names: [] };
            map[sn].count++;
            if (!map[sn].codes.includes(s.code)) {
                map[sn].codes.push(s.code);
                map[sn].names.push({ code: s.code, name: nameMap[s.code] || s.code });
            }
        }
    }
    return Object.values(map).sort((a, b) => b.count - a.count);
});
// 策略筛选预览计数（按4个视图分别计算）
const strategyPreviewCount = computed(() => {
    const selected = strategyFilter.value.selected;
    const mode = strategyFilter.value.mode;
    const counts = {};
    for (const [view, stocks] of Object.entries(strategyFilterCounts.value)) {
        const all = stocks || [];
        if (!selected || selected.length === 0) {
            counts[view] = all.length;
        } else if (mode === 'union') {
            counts[view] = all.filter(s => s.strategies && selected.some(sel => s.strategies.includes(sel))).length;
        } else {
            counts[view] = all.filter(s => s.strategies && selected.every(sel => s.strategies.includes(sel))).length;
        }
    }
    return counts;
});
function saveStrategyFilter() {
    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(strategyFilter.value.selected));
    localStorage.setItem('quant_strategy_filter_mode', strategyFilter.value.mode);
    // 策略筛选配置已静默保存
}
// v1.8: 策略回测（已移除 backtest 相关代码）
// 策略总览共识度排行也按策略过滤
const filteredConsensusRank = computed(() => {
    const rank = (dashboardData.value || {}).consensus_rank || [];
    return applyStrategyFilter(rank);
});
// 当前在池股票（过滤后）
const currentPoolSize = computed(() => {
    const dayStocks = consensus.value || strategyFilterCounts.value.day || [];
    return applyStrategyFilter(dayStocks).length;
});
// 各策略选股数量（过滤后）
const filteredStrategyCounts = computed(() => {
    const raw = (dashboardData.value || {}).strategy_counts || [];
    const dayStocks = consensus.value || strategyFilterCounts.value.day || [];
    // 没有共识数据时显示原始统计
    if (dayStocks.length === 0) return raw;
    const filtered = applyStrategyFilter(dayStocks);
    // 统计过滤后的每个策略出现的次数
    const counts = {};
    filtered.forEach(s => {
        const names = s.strategy_names || s.strategies || [];
        names.forEach(n => { counts[n] = (counts[n] || 0) + 1; });
    });
    const total = filtered.length || 1;
    // 保持原始策略顺序和名称
    return raw.map(item => {
        const chineseName = item.strategy_name || item.strategy_id;
        const cnt = counts[chineseName] || 0;
        return { ...item, count: cnt, percentage: Math.round(cnt / total * 1000) / 10 };
    });
});

// ===== v1.11: 策略总览增强 =====
// 池子趋势徽标
const poolChangeBadge = computed(() => {
    const changes = (dashboardData.value || {}).pool_changes || {};
    const net = (changes.new_count || 0) - (changes.out_count || 0);
    if (net > 0) return { dir: 'up', text: '↑' + net };
    if (net < 0) return { dir: 'down', text: '↓' + Math.abs(net) };
    return { dir: 'flat', text: '→0' };
});
// 时间覆盖进度条百分比
const timeBarPercent = computed(() => {
    const cov = (dashboardData.value || {}).time_coverage || {};
    const start = new Date(cov.start_date);
    const end = new Date(cov.end_date);
    const now = new Date();
    if (!start.getTime() || !end.getTime()) return 100;
    if (now >= end) return 100;
    if (now <= start) return 0;
    const total = end - start;
    const elapsed = now - start;
    return Math.round(elapsed / total * 100);
});
// 上次刷新时间文字
const lastRefreshTime = ref(null);
const timeSinceRefresh = computed(() => {
    if (!lastRefreshTime.value) return '';
    const sec = Math.floor((Date.now() - lastRefreshTime.value) / 1000);
    if (sec < 60) return sec + '秒前刷新';
    if (sec < 3600) return Math.floor(sec/60) + '分钟前刷新';
    return Math.floor(sec/3600) + '小时前刷新';
});
// 点击策略跳转日历筛选
function navigateToStrategyFilter(strategyName) {
    // 设置策略筛选为仅该策略
    strategyFilter.value.selected = [strategyName];
    strategyFilter.value.mode = 'union';
    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify([strategyName]));
    localStorage.setItem('quant_strategy_filter_mode', 'union');
    // 跳转到日历页
    currentPage.value = 'calendar';
    currentSubPage.value = 'daily';
}

      return {
        applyStrategyFilter, statusCounts, stockPool, strategyDistribution, strategyPreviewCount,
        saveStrategyFilter, filteredConsensusRank, currentPoolSize, filteredStrategyCounts,
        poolChangeBadge, timeBarPercent, lastRefreshTime, timeSinceRefresh,
        navigateToStrategyFilter,
      };
    }
  };
})();
