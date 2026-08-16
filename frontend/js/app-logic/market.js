// quant-calendar: App 逻辑层 — 行情/指数详情/评分动画/触摸手势域 (FR-3.17.11.1 拆分自 app-logic.js)
// 经 window.__quantAppLogic.market.create(ctx) 装配, 由 app-logic.js 解构注入 qcState
// ctx 依赖: currentKlinePeriod/loadIndexKline/rememberDialogTrigger/menus
//           currentPage/currentSubPage/stockDetail/selectedDate
(function () {
  window.__quantAppLogic = window.__quantAppLogic || {};
  window.__quantAppLogic.market = {
    create: function (ctx) {
      const { nextTick } = Vue;
      const { currentKlinePeriod, loadIndexKline, rememberDialogTrigger, menus,
              currentPage, currentSubPage, stockDetail, selectedDate } = ctx;

      // ===== 市场行情数据 =====
      const marketData = ref({ indices: [], market_sentiment: null });
      let marketRefreshTimer = null;

      // ===== 指数详情 =====
      const indexDetailVisible = ref(false);
      const indexDetail = ref(null);
      const indexAiResult = ref(null);
      const indexAiLoading = ref(false);

      // v3.16 (16.4): K线实例生命周期已下沉 charts.js — 不再持有实例/缓存变量
      // disposeStockKline 供 ai-chat/watchlist 域安全释放（委托 charts.js 注册表）
      function disposeStockKline() {
        window.__quantModules.charts.disposeKline('stockKlineChart');
      }
      const isMobile = ref(window.innerWidth <= 768);

      // 监听窗口大小变化
      window.addEventListener('resize', () => {
        isMobile.value = window.innerWidth <= 768;
        window.__quantModules.charts.resizeKline('stockKlineChart');
        window.__quantModules.charts.resizeKline('indexKlineChart');
      });

      // v1.9.2: 评分动画
      const scoreAnimating = ref(false);
      const scoreDelta = ref(null);  // { value: +3, dir: 'up' } or null
      const scorePulse = ref(false);  // triggers CSS pulse
      let lastScoreValue = null;  // tracks previous score for comparison

      // 触摸手势：左右滑动切换页面（仅移动端）
      const touchStartX = ref(0);
      const touchStartY = ref(0);

      // ===== 市场行情API =====
      async function fetchMarketData() {
        try {
          const res = await fetch('/api/market/overview');
          const data = await res.json();
          marketData.value = data;
          // 智能设置下次更新时间
          scheduleNextMarketRefresh(data);
        } catch (e) { console.error('获取市场行情失败:', e); }
      }

      // ===== 智能设置行情刷新 =====
      function scheduleNextMarketRefresh(data) {
        if (marketRefreshTimer) clearInterval(marketRefreshTimer);
        // 交易时间内：每10分钟刷新一次
        if (data && data.in_trading_hours) {
          marketRefreshTimer = setInterval(fetchMarketData, 600000);
        }
      }

      // ===== 显示指数详情 =====
      function showIndexDetail(indexData) {
        rememberDialogTrigger(); // v3.16 (16.6): 记录打开前焦点，关闭后归还
        indexDetail.value = indexData;
        indexAiResult.value = null;
        currentKlinePeriod.value = 'daily';
        // 自动加载今日缓存评估
        loadCachedIndexEval(indexData.code);
        // 先销毁旧图表（实例生命周期下沉 charts.js）
        window.__quantModules.charts.disposeKline('indexKlineChart');
        indexDetailVisible.value = true;
        // 弹窗打开动画需要时间，等待500ms确保DOM完全渲染
        setTimeout(async () => {
          await loadIndexKline('daily');
        }, 500);
      }

      // ===== 加载缓存的指数评估 =====
      async function loadCachedIndexEval(indexCode) {
        try {
          const res = await fetch('/api/ai/index-eval/' + indexCode);
          const data = await res.json();
          if (data.success && data.data) {
            indexAiResult.value = data.data;
          }
        } catch(e) { console.warn('[getIndexAiScore] cache check failed:', e); }
      }

      // ===== 指数AI智能评估 =====
      async function doIndexAiEvaluate() {  // 技术指标评估（内置引擎）
        if (!indexDetail.value) return;
        indexAiLoading.value = true;
        try {
          const res = await fetch('/api/ai/evaluate-index', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              index_code: indexDetail.value.code,
              index_name: indexDetail.value.name,
              current_price: indexDetail.value.close,
              pct_chg: indexDetail.value.pct_chg
            })
          });
          const data = await res.json();
          if (data.success) {
            indexAiResult.value = data.data;
            // AI指数评估结果已在弹窗展示
          } else {
            ElementPlus.ElMessage.error(data.message || '评估失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('评估失败，请稍后重试');
        } finally {
          indexAiLoading.value = false;
        }
      }

      // ===== K线图渲染函数 =====
      // v3.16 (16.4): K线渲染/实例生命周期/缩放已全部下沉 charts.js — 此处仅保留状态与编排
      // 时间范围快捷缩放（委托 charts.js 实例注册表，供 stock-detail 弹窗使用）
      function zoomKlineRange(tradingDays) {
        window.__quantModules.charts.zoomKline('stockKlineChart', tradingDays);
      }

      // v1.9.2: 评分脉冲动画（每次刷新都触发）
      function triggerScorePulse() {
        scorePulse.value = true;
        setTimeout(() => { scorePulse.value = false; }, 600);
      }
      // v1.9.2: 评分计数动画（仅分数变化时触发）
      function animateScoreChange(from, to) {
        if (from === to) { triggerScorePulse(); return; }
        const duration = 800; // ms
        const start = performance.now();
        const delta = to - from;
        scoreAnimating.value = true;
        scoreDelta.value = { value: delta, dir: delta > 0 ? 'up' : 'down' };
        scorePulse.value = true;
        setTimeout(() => { scorePulse.value = false; }, 600);
        setTimeout(() => { scoreDelta.value = null; }, 2300);
        function step(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(from + delta * eased);
          if (stockDetail.value && stockDetail.value.score_data) {
            stockDetail.value.score_data.score = current;
          }
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            if (stockDetail.value && stockDetail.value.score_data) {
              stockDetail.value.score_data.score = to;
            }
            scoreAnimating.value = false;
            lastScoreValue = to;
          }
        }
        requestAnimationFrame(step);
      }
      // v1.9.2: 对话框打开时入场动画
      function animateScoreEntrance() {
        if (!stockDetail.value || !stockDetail.value.score_data) return;
        const score = stockDetail.value.score_data.score;
        if (score == null) return;
        // Count up from 0
        const duration = 600;
        const start = performance.now();
        scorePulse.value = true;
        setTimeout(() => { scorePulse.value = false; }, 600);
        function step(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(score * eased);
          if (stockDetail.value && stockDetail.value.score_data) {
            stockDetail.value.score_data.score = current;
          }
          if (progress < 1) {
            requestAnimationFrame(step);
          } else {
            if (stockDetail.value && stockDetail.value.score_data) {
              stockDetail.value.score_data.score = score;
            }
          }
        }
        requestAnimationFrame(step);
      }
      // v1.9.2: K线加载后刷新评分
      async function refreshStockScore() {
        if (!stockDetail.value || !stockDetail.value.stock) return;
        const code = stockDetail.value.stock;
        const oldScore = stockDetail.value.score_data?.score;
        try {
          const today = new Date().toISOString().split('T')[0];
          const date = selectedDate.value || today;
          const res = await fetch(`/api/calendar/stock/${encodeURIComponent(code)}/score?date=${date}`);
          const data = await res.json();
          if (data.success && data.score_data) {
            const newScore = data.score_data.score;
            if (stockDetail.value) {
              stockDetail.value.score_data = data.score_data;
            }
            if (oldScore != null && newScore !== oldScore) {
              animateScoreChange(oldScore, newScore);
            } else {
              // 分数未变但依然脉冲，表示"已刷新"
              triggerScorePulse();
            }
          } else {
            triggerScorePulse();
          }
        } catch (e) {
          console.warn('[refreshStockScore] failed:', e);
        }
      }

      function onTouchStart(e) {
        if (!isMobile.value) return;
        touchStartX.value = e.touches[0].clientX;
        touchStartY.value = e.touches[0].clientY;
      }
      function onTouchEnd(e) {
        if (!isMobile.value) return;
        const diffX = touchStartX.value - e.changedTouches[0].clientX;
        const diffY = touchStartY.value - e.changedTouches[0].clientY;
        // 仅水平滑动有效（|diffX| > |diffY| 且 |diffX| > 80px）
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 80) {
          const menuKeys = menus.value.map(function(m) { return m.key; });
          const idx = menuKeys.indexOf(currentPage.value);
          if (diffX > 0 && idx < menuKeys.length - 1) {
            currentPage.value = menuKeys[idx + 1];
            currentSubPage.value = '';
          } else if (diffX < 0 && idx > 0) {
            currentPage.value = menuKeys[idx - 1];
            currentSubPage.value = '';
          }
        }
      }

      return {
        marketData, marketRefreshTimer, fetchMarketData,
        indexDetailVisible, indexDetail, indexAiResult, indexAiLoading,
        showIndexDetail, loadCachedIndexEval, doIndexAiEvaluate,
        disposeStockKline, isMobile, zoomKlineRange,
        scoreAnimating, scoreDelta, scorePulse,
        triggerScorePulse, animateScoreChange, animateScoreEntrance, refreshStockScore,
        touchStartX, touchStartY, onTouchStart, onTouchEnd,
      };
    },
  };
})();
