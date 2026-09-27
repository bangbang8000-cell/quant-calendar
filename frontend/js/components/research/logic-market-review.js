// quant-calendar: 研究页逻辑域 — 市场复盘（AI 每日复盘列表/详情 + 涨跌语义/数据源标签）
// 6.3.0 (T-6.3.0.6): 自 components/research-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.researchPage.marketReview.create(ctx) 装配, 由 research-page.js 解构返回
// ctx 依赖: ref / seq(共享请求序号持有者) / authHeaders(注册文件 _authHeaders 声明经 ctx 注入)
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchPage = window.__quantModules.researchPage || {};
  window.__quantModules.researchPage.marketReview = {
    create: function (ctx) {
      const { ref, seq: _seq, authHeaders } = ctx;
      // ===== v3.17.2 (FR-3.17.2): AI 每日市场复盘 — 列表 + 详情 =====
      const marketReviews = ref([]);
      const marketReviewLoading = ref(false);
      const marketReviewError = ref(false);
      const selectedReviewDate = ref('');
      const marketReviewDetail = ref(null);
      const marketReviewDetailLoading = ref(false);
      const marketReviewDetailError = ref(false);

      async function loadMarketReviews() {
        const seq = ++_seq.n;
        marketReviewLoading.value = true;
        marketReviewError.value = false;
        try {
          const res = await fetch('/api/market/reviews?limit=30', { headers: authHeaders() }).then(r => r.json());
        if (seq !== _seq.n) return;
          if (res && res.success) {
            marketReviews.value = Array.isArray(res.data) ? res.data : [];
          } else {
            marketReviewError.value = true;
          }
        } catch (e) {
          console.error('[market-review] 复盘列表加载失败:', e);
          marketReviewError.value = true;
        } finally {
        if (seq === _seq.n) marketReviewLoading.value = false;
        }
      }

      function openMarketReview(date) {
        selectedReviewDate.value = date;
        loadMarketReviewDetail(date);
      }

      // V5.15 (F8.2): 左中栏点击 — 选中/取消日期 (再点收起详情回列表)
      function toggleMarketReviewDate(date) {
        if (selectedReviewDate.value === date) {
          backToMarketReviewList();
        } else {
          openMarketReview(date);
        }
      }

      // V5.15 (F8.2): 中栏指标格式化 (与复盘日历口径一致)
      function fmtPct(v) {
        if (v == null || isNaN(Number(v))) return '—';
        return (Number(v) >= 0 ? '+' : '') + Number(v).toFixed(2) + '%';
      }
      function fmtEmotion(v) {
        if (v == null || isNaN(Number(v))) return '—';
        return Number(v).toFixed(2);
      }

      function backToMarketReviewList() {
        selectedReviewDate.value = '';
        marketReviewDetail.value = null;
        marketReviewDetailError.value = false;
      }

      async function loadMarketReviewDetail(date) {
        const seq = ++_seq.n;
        marketReviewDetailLoading.value = true;
        marketReviewDetailError.value = false;
        marketReviewDetail.value = null;
        try {
          const url = date
            ? '/api/market/review?date=' + encodeURIComponent(date)
            : '/api/market/review';
          const res = await fetch(url, { headers: authHeaders() }).then(r => r.json());
        if (seq !== _seq.n) return;
          if (res && res.success) {
            marketReviewDetail.value = res.data;
          } else {
            marketReviewDetailError.value = true;
          }
        } catch (e) {
          console.error('[market-review] 复盘详情加载失败:', e);
          marketReviewDetailError.value = true;
        } finally {
        if (seq === _seq.n) marketReviewDetailLoading.value = false;
        }
      }

      // 行情涨跌语义: 红涨绿跌 (pct_chg > 0 → .up / 红)
      function marketReviewChgClass(pct) {
        return pct > 0 ? 'up' : (pct < 0 ? 'down' : 'flat');
      }

      function marketReviewChgText(pct) {
        if (pct === null || pct === undefined || isNaN(Number(pct))) return '—';
        return (pct > 0 ? '+' : '') + Number(pct).toFixed(2) + '%';
      }

      // 数据源状态: 展示为 标签 + 来源/不可达
      function marketReviewSrcEntries(dataSources) {
        const labels = { indexes: '指数', sectors: '板块', moneyflow: '资金', sentiment: '情绪' };
        return Object.entries(dataSources || {}).map(function (entry) {
          const key = entry[0];
          const val = entry[1];
          const unavailable = !val || val === 'unavailable' || val === '数据不可达';
          return { label: labels[key] || key, value: unavailable ? '数据不可达' : val, unavailable: unavailable };
        });
      }

      return {
        marketReviews, marketReviewLoading, marketReviewError, selectedReviewDate,
        marketReviewDetail, marketReviewDetailLoading, marketReviewDetailError, loadMarketReviews,
        openMarketReview, toggleMarketReviewDate, backToMarketReviewList, loadMarketReviewDetail,
        marketReviewChgClass, marketReviewChgText, marketReviewSrcEntries, fmtPct,
        fmtEmotion,
      };
    },
  };
})();
