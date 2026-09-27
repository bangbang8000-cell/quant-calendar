// quant-calendar: AiPage 组件 (v3.6.0-T7 / FR-3.6.2)
// AI评估页: 单根div, 4子页 v-if 链 (overview/history/chat_history/watchlist)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.AiPage = {
    name: 'qc-ai-page',
    template: window.__quantModules.aiPage.view,
    setup() {
      const { ref, watch, onUnmounted } = Vue;
      const state = inject('qcState');
      if (!state) return {};

      // v3.17.9 (FR-3.17.9): 评估历史滚动加载更多 — 窗口触底自动拉取下一页 (懒加载)
      function onHistoryScroll() {
        if (!state.hasMoreAiHistory || !state.loadMoreAiHistory) return;
        if (state.currentPage.value !== 'ai' || state.currentSubPage.value !== 'history') return;
        const d = document.documentElement;
        if (d.scrollTop + window.innerHeight >= d.scrollHeight - 300) {
          state.loadMoreAiHistory();
        }
      }
      window.addEventListener('scroll', onHistoryScroll, { passive: true });
      onUnmounted(() => window.removeEventListener('scroll', onHistoryScroll));

      // v3.17.6 (FR-3.17.6): 评估命中率（决策复盘闭环）
      const trackData = ref(null);
      const trackLoading = ref(false);
      const trackWindows = [
        { key: 'n5', label: '5 日' },
        { key: 'n10', label: '10 日' },
        { key: 'n20', label: '20 日' },
      ];
      function fmtTrackRate(st) {
        if (!st || st.total === 0 || st.rate === null || st.rate === undefined) return '--';
        return st.rate.toFixed(2) + '%';
      }
      // v3.18 (FR-3.18.6): 决策复盘 — 按日期浏览窗口切换 + 命中标注
      const trackWindow = ref(5);
      function setTrackWindow(w) { trackWindow.value = w; }
      function trackHitText(s, w) {
        if (!s) return '--';
        if (s.available === false) return '— 数据不可达';
        const hit = s['hit_n' + w];
        if (hit === true) return '✓ 命中';
        if (hit === false) return '✗ 未中';
        return '– 中性/待验证';
      }
      async function loadTrack() {
        trackLoading.value = true;
        try {
          const res = await fetch('/api/ai/track');
          const data = await res.json();
          trackData.value = data && data.success ? data.data : null;
        } catch (e) {
          console.warn('[eval-track] 评估命中率加载失败:', e);
          trackData.value = null;
        } finally {
          trackLoading.value = false;
        }
      }
      watch(
        function () { return state.currentPage.value + '/' + state.currentSubPage.value; },
        function (key) { if (key === 'ai/evaluation-analysis') loadTrack(); }, // V5.0.11: 命中率随评估分析子页加载
        { immediate: true }
      );
      // v3.17.8 (FR-3.17.5): 组合/模拟持仓域 (工厂模块, 不经 qcState)
      const __portfolioDomain = (window.__quantModules && window.__quantModules.portfolio)
        ? window.__quantModules.portfolio.create({})
        : {};
      const {
        positions, summary, trades, loading, loadError,
        showAddForm, addForm, addSaving,
        tradeFormVisible, tradeForm, tradeSaving,
        portfolioTab, equityDays, equityLoading, equityNote, equityHasData,
        loadPortfolio, addPosition, removePosition,
        openTradeForm, submitTrade, loadTrades, loadEquity,
        fmtSigned, fmtSignedPct, signClass,
        riskTab, riskLoading, riskNote, riskHasData, riskData,
        riskMetricList, loadRisk,
      } = __portfolioDomain;
      // v3.17.10 (FR-3.17.10): 持仓纳入本地拼音检索索引（自选/持仓/评估历史构造可测索引）
      watch(positions, function (list) {
        if (window.__quantModules && window.__quantModules.pinyin) {
          window.__quantModules.pinyin.registerExtraStocks((list || []).map(function (p) {
            return { code: p.stock_code, name: p.stock_name || p.stock_code };
          }));
        }
      }, { deep: true });
      // 进入「组合」子页 / 概览时加载数据 (概览用于统计卡计数)
      watch(
        function () { return state.currentPage.value + '/' + state.currentSubPage.value; },
        function (key) {
          if (key === 'ai/portfolio') {
            loadPortfolio();
            loadTrades();
            loadEquity(equityDays ? equityDays.value : 30);
            if (typeof loadRisk === 'function') loadRisk();
          } else if (key === 'ai/overview') {
            loadPortfolio();
          }
        },
        { immediate: true }
      );
      // ===== V5.20 (F2): 双栏模式默认载入首条 — 自动展开首组 + 载入该组首条到右栏 =====
      // 仅双栏生效; 同一子页内已有内容时不覆盖用户选择; 切换子页时重新载入
      // (镜像 strategies-page.js 的 V5.16 双栏默认选中 watch)
      let _autoFocusSub = '';
      let _autoFocusLoading = false;
      watch(function () {
        const sub = state.currentSubPage && state.currentSubPage.value;
        const split = !!(state.detailSplitEnabled && state.detailSplitEnabled.value);
        const out = { sub: sub, split: split, kind: '', view: '', key: '', first: null, expandList: null, expandFn: null };
        if (sub === 'history') {
          const v = (state.aiHistoryView && state.aiHistoryView.value) || 'date';
          const src = (v === 'date' ? state.groupedByDate : v === 'month' ? state.groupedByMonth : state.aiHistoryByStock);
          const data = (src && src.value) || {};
          const keys = Object.keys(data);
          out.kind = 'history';
          out.view = v;
          out.key = keys.length ? keys[0] : '';
          out.first = keys.length ? ((data[keys[0]] || [])[0] || null) : null;
          out.expandList = v === 'date' ? state.expandedDates : v === 'month' ? state.expandedMonths : state.expandedStocks;
          out.expandFn = v === 'date' ? state.toggleDateExpand : v === 'month' ? state.toggleMonthExpand : state.toggleStockExpand;
        } else if (sub === 'chat_history') {
          const v = (state.chatHistoryView && state.chatHistoryView.value) || 'date';
          const src = (v === 'date' ? state.chatGroupedByDate : v === 'month' ? state.chatGroupedByMonth : state.chatGroupedByStock);
          const data = (src && src.value) || {};
          const keys = Object.keys(data);
          out.kind = 'chat';
          out.view = v;
          out.key = keys.length ? keys[0] : '';
          out.first = keys.length ? ((data[keys[0]] || [])[0] || null) : null;
          out.expandList = v === 'date' ? state.expandedChatDates : v === 'month' ? state.expandedChatMonths : state.expandedChatStocks;
          out.expandFn = v === 'date' ? state.toggleChatDateExpand : v === 'month' ? state.toggleChatMonthExpand : state.toggleChatStockExpand;
        }
        return out;
      }, function (v) {
        if (!v.split || !v.first || !v.kind) return;
        const subChanged = v.sub !== _autoFocusSub;
        const cur = state.stockDetail && state.stockDetail.value;
        const hasContent = !!(cur && cur.stock);
        if (!subChanged && hasContent) return;
        if (_autoFocusLoading) return;
        _autoFocusSub = v.sub;
        _autoFocusLoading = true;
        try {
          if (v.key && v.expandList && v.expandFn && v.expandList.value && v.expandList.value.indexOf(v.key) < 0) v.expandFn(v.key);
        } catch (e) { /* 展开失败不阻断载入 */ }
        const p = v.kind === 'history' ? state.viewAiResult(v.first) : state.viewChatSession(v.first);
        if (p && typeof p.finally === 'function') p.finally(function () { _autoFocusLoading = false; });
        else _autoFocusLoading = false;
      }, { immediate: true });

      return {
        ...state, trackData, trackLoading, trackWindows, fmtTrackRate, loadTrack,
        trackWindow, setTrackWindow, trackHitText,
        positions, summary, trades, loading, loadError,
        showAddForm, addForm, addSaving,
        tradeFormVisible, tradeForm, tradeSaving,
        portfolioTab, equityDays, equityLoading, equityNote, equityHasData,
        loadPortfolio, addPosition, removePosition,
        openTradeForm, submitTrade, loadTrades, loadEquity,
        fmtSigned, fmtSignedPct, signClass,
        riskTab, riskLoading, riskNote, riskHasData, riskData,
        riskMetricList, loadRisk,
      };
    },
  };
})();
