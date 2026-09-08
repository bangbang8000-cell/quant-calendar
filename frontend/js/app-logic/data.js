// quant-calendar: App 逻辑层 — 日历数据加载与缓存域 (FR-3.17.11.1 拆分自 app-logic.js)
// 经 window.__quantAppLogic.data.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: currentView/statusFilter/dashboardData/loadHealthMetrics
//           getLoadDashboardData/getLastRefreshTime/getFetchPoolSignals (惰性访问器, 运行时取值)
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.data = {
    create: function (ctx) {
      const { ref, nextTick } = Vue;
      const { currentView, statusFilter, dashboardData, loadHealthMetrics,
              getLoadDashboardData, getLastRefreshTime, getFetchPoolSignals } = ctx;

      // ===== 数据 =====
      const loading = ref(false);
      const loadingView = ref('');  // 当前加载中的视图名称
      const viewCache = new Map();   // 客户端视图缓存: key="view_date" → data
      const dates = ref([]);
      const selectedDate = ref('');
      const lastLoadTime = ref('');  // 上次数据加载时间
      const consensus = ref([]);
      const viewNote = ref('');  // V4.9.4: 日视图对比基准/沿用持仓提示(来自 /api/view note 字段)

      // ===== v3.11 (FR-3.11.4): 数据缓存与静默刷新 =====
      // 请求级 TTL 缓存（同参数短 TTL）+ 后台静默刷新 + 变更提示
      const __core11 = window.__quantModules.core || {};
      const qcCache = (typeof __core11.createTtlCache === 'function') ? __core11.createTtlCache(15000) : null;
      let _lastDataToast = 0;
      function notifyDataChanged() {
        const now = Date.now();
        if (now - _lastDataToast < 5000) return;   // 5s 内去重，避免重复进入/多页刷屏
        _lastDataToast = now;
        ElementPlus.ElMessage.success('有新数据，已更新');
      }
      // 后台静默刷新：命中缓存后仍悄悄拉取最新，数据有变才提示
      function backgroundRefresh(url, cacheKey, extract, apply) {
        if (!qcCache || !cacheKey || typeof __core11.silentRefresh !== 'function') return;
        __core11.silentRefresh({
          cache: qcCache,
          key: cacheKey,
          fetchFn: async () => {
            const res = await fetch(url);
            if (!res.ok) throw new Error('HTTP ' + res.status);
            const data = await res.json();
            return extract ? extract(data) : data;
          },
          ttl: qcCache.defaultTtl,
          apply,
          onChanged: notifyDataChanged,
          onError: () => {},
        });
      }
      // 同一请求在途去重：首次进入日历 page/sub 双触发时只拉取一次
      const _consensusInflight = new Set();

      // ===== 数据加载 =====
      async function loadDates() {
        try {
          const res = await fetch('/api/dates');
          const data = await res.json();
          dates.value = data.data?.dates || data.dates || [];
          if (dates.value.length > 0) {
            selectedDate.value = dates.value[dates.value.length - 1];
          }
          lastLoadTime.value = new Date().toLocaleTimeString();
        } catch (e) { console.error(e); }
      }

      async function refreshCalendarData() {
        // 触发后端数据刷新，然后重新加载日历数据
        try {
          await fetch('/api/data-refresh/reload', { method: 'POST' });
          lastLoadTime.value = '刷新中...';
          viewCache.clear();
          await loadDates();
          await loadConsensusData();
          lastLoadTime.value = new Date().toLocaleTimeString();
        } catch(e) {
          console.error('数据刷新失败', e);
        }
      }

      function exportCSV() {
        if (!selectedDate.value) return;
        const view = currentView.value || 'day';
        const url = '/api/view/' + view + '/' + selectedDate.value + '?status=' + (statusFilter.value || 'all') + '&format=csv';
        window.open(url, '_blank');
      }

      async function loadConsensusData() {
        if (!selectedDate.value) return;
        const cacheKey = `${currentView.value}_${selectedDate.value}`;
        // v3.11 (11.6): 同一 key 请求在途时跳过重复拉取（首次进入 page/sub 双触发去重）
        if (_consensusInflight.has(cacheKey)) return;
        _consensusInflight.add(cacheKey);
        const viewUrl = `/api/view/${currentView.value}/${selectedDate.value}?status=all`;
        // v3.11 (11.6): 请求级缓存键（method|url|params，与传参顺序无关）
        const reqKey = (qcCache && typeof __core11.makeCacheKey === 'function')
          ? __core11.makeCacheKey('GET', `/api/view/${currentView.value}/${selectedDate.value}`, { status: 'all' })
          : null;
        const applyStocks = (stocks, note) => {
          consensus.value = stocks;
          viewNote.value = note || '';
          viewCache.set(cacheKey, { stocks, note: note || '' });
        };
        // V4.9.4: 应用完整视图数据(含 note 提示), 供主请求/缓存命中/后台静默刷新共用
        const applyViewData = (data) => {
          applyStocks((data && data.stocks) || [], (data && data.note) || '');
        };
        // 客户端缓存命中 → 直接渲染不闪烁，再后台静默刷新（有变才提示）
        if (viewCache.has(cacheKey)) {
          applyViewData(viewCache.get(cacheKey));
          backgroundRefresh(viewUrl, reqKey, (d) => d, applyViewData);
          _consensusInflight.delete(cacheKey);
          return;
        }
        // v3.11 (11.6): 命中请求级 TTL 缓存 → 不闪烁 + 后台刷新
        const cached = (reqKey && qcCache) ? qcCache.get(reqKey) : undefined;
        if (cached !== undefined) {
          applyViewData(cached);
          backgroundRefresh(viewUrl, reqKey, (d) => d, applyViewData);
          _consensusInflight.delete(cacheKey);
          return;
        }
        loading.value = true;
        loadingView.value = {day:'日', week:'周', month:'月', year:'年'}[currentView.value] || currentView.value;
        try {
          // 调用多视图 API（始终获取全量数据，前端做状态过滤+计数）
          const res = await fetch(viewUrl);
          const data = await res.json();
          const stocks = data.stocks || [];
          applyStocks(stocks, data.note || '');
          if (qcCache && reqKey) qcCache.set(reqKey, { stocks, note: data.note || '' });  // 写入请求级 TTL 缓存
        } catch (e) {
          // 降级到旧API
          try {
            const res = await fetch(`/api/calendar/${selectedDate.value}/consensus`);
            const data = await res.json();
            consensus.value = (data.consensus || []).map(item => ({
              ...item,
              code: item.stock,
              status: 'current'
            }));
          } catch (e2) {
            ElementPlus.ElMessage.error('数据加载失败');
          }
        } finally {
          loading.value = false;
        }
        // v3.7.11: 异步加载入池出池信号
        getFetchPoolSignals();
        _consensusInflight.delete(cacheKey);
      }

      // v3.11 (11.6): 总览页缓存 + 静默刷新（包装 system 域 loadDashboardData）
      // 重复进入"策略总览"命中缓存不闪烁；后台拉到新数据自动更新并提示
      async function loadDashboardCached() {
        const reqKey = (qcCache && typeof __core11.makeCacheKey === 'function')
          ? __core11.makeCacheKey('GET', '/api/dashboard', null)
          : '/api/dashboard';
        if (qcCache) {
          const hit = qcCache.get(reqKey);
          if (hit !== undefined) {
            dashboardData.value = hit;
            loadHealthMetrics().catch(() => {});
            backgroundRefresh('/api/dashboard', reqKey, (d) => d.data || d, (data) => {
              dashboardData.value = data;
              getLastRefreshTime().value = Date.now();
            });
            return;
          }
        }
        await getLoadDashboardData()();
        loadHealthMetrics().catch(() => {});
        if (qcCache) qcCache.set(reqKey, dashboardData.value);
      }

      return {
        loading, loadingView, viewCache, dates, selectedDate, lastLoadTime, consensus, viewNote,
        loadDates, refreshCalendarData, exportCSV, loadConsensusData, loadDashboardCached,
      };
    },
  };
})();
