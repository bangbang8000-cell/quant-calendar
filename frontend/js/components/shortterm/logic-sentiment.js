// quant-calendar: 短线复盘页逻辑域 — 盘中情绪与事件流 (v6.9.0 / B3.5)
// 经 window.__quantModules.shorttermPage.sentiment.create(ctx) 装配, 由 shortterm-page.js 解构返回
// ctx 依赖: ref / cachedGet
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.shorttermPage = window.__quantModules.shorttermPage || {};
  window.__quantModules.shorttermPage.sentiment = {
    create: function (ctx) {
      const { ref, cachedGet } = ctx;

      const sentiment = ref({ benchmark: null, hot: null, anomaly: null });
      const sentimentLoading = ref(false);
      const sentimentError = ref(false);
      const sentimentReason = ref('');
      const sentimentCaliber = ref('竞价 60s / 榜单 5min 刷新；数据源同花顺（T2 周边）');
      const eventsRows = ref([]);
      const eventsLoading = ref(false);
      const eventsError = ref(false);
      const eventsReason = ref('');
      const eventsSource = ref('fuyao');
      // v7.1.0 (B5.5): 行业强度作战矩阵（相对强度/加速度/成交额脉冲/排名变化）
      const industry = ref(null);
      const industryLoading = ref(false);
      const industryError = ref(false);
      const industryReason = ref('');
      const industryStale = ref(false);

      // 盘中情绪聚合（竞价基准 + 热榜 + 异动解读）
      async function loadSentiment(force) {
        sentimentLoading.value = true;
        sentimentError.value = false;
        try {
          const res = await cachedGet('/api/shortterm/auction', force);
          const hot = await cachedGet('/api/shortterm/hot-list?period=day&limit=10', force);
          const an = await cachedGet('/api/shortterm/anomaly?page=1&size=5', force);
          const unavail = (!res || res.available === false) && (!hot || hot.available === false);
          if (unavail) {
            sentimentError.value = true;
            sentimentReason.value = (res && res.reason) || (hot && hot.reason)
              || '该数据未启用（可在系统配置中开启）';
          } else {
            sentiment.value = {
              benchmark: (res && res.benchmark) || null,
              hot: hot && (hot.hot || null),
              anomaly: an && an.available !== false ? an : null,
            };
          }
        } catch (e) {
          sentimentError.value = true;
          sentimentReason.value = '数据加载失败，请检查服务后重试';
        } finally {
          sentimentLoading.value = false;
        }
      }

      // 行业强度矩阵（缓存优先；refresh=1 时刷新，有配额成本）
      async function loadIndustryStrength(force) {
        industryLoading.value = true;
        industryError.value = false;
        try {
          const url = '/api/research/industry-strength' + (force ? '?refresh=1' : '');
          const res = await cachedGet(url, force);
          if (res && res.available) {
            industry.value = res;
            industryStale.value = !!res.stale;
          } else {
            industry.value = null;
            industryError.value = true;
            industryReason.value = (res && res.reason) || '该数据未启用（可在系统配置中开启）';
          }
        } catch (e) {
          industry.value = null;
          industryError.value = true;
          industryReason.value = '加载失败，请检查服务后重试';
        } finally {
          industryLoading.value = false;
        }
      }

      // 事件流（市场快讯；标题 + 摘要 + 原文跳转，不内嵌正文）
      async function loadEventsFlash(force) {
        eventsLoading.value = true;
        eventsError.value = false;
        try {
          const res = await cachedGet('/api/events/flash?limit=15', force);
          if (res && res.available) {
            eventsRows.value = res.rows || [];
            eventsSource.value = res.source || 'fuyao';
          } else {
            eventsRows.value = [];
            eventsError.value = true;
            eventsReason.value = (res && res.reason) || '事件源暂不可用';
          }
        } catch (e) {
          eventsRows.value = [];
          eventsError.value = true;
          eventsReason.value = '事件加载失败';
        } finally {
          eventsLoading.value = false;
        }
      }

      return {
        industry, industryLoading, industryError, industryReason, industryStale,
        loadIndustryStrength,
        sentiment, sentimentLoading, sentimentError, sentimentReason, sentimentCaliber,
        eventsRows, eventsLoading, eventsError, eventsReason, eventsSource,
        loadSentiment, loadEventsFlash,
      };
    },
  };
})();
