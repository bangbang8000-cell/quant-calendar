// quant-calendar: 研究页逻辑域 — 研究历史（实验列表/详情/对比/导出）
// 6.3.0 (T-6.3.0.6): 自 components/research-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.researchPage.history.create(ctx) 装配, 由 research-page.js 解构返回
// ctx 依赖: seq / state(qcState 注入: navigateTo / currentSubPage)
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchPage = window.__quantModules.researchPage || {};
  window.__quantModules.researchPage.history = {
    create: function (ctx) {
      const { seq: _seq, state } = ctx;
      // ===== 5.1.0 (T-5.1.4): 研究历史 (实验持久化列表/对比) =====
      const researchHistory = Vue.ref([]);
      const researchHistoryLoading = Vue.ref(false);
      const researchHistoryError = Vue.ref(false);
      const researchHistoryType = Vue.ref('');
      const researchHistorySelected = Vue.ref([]);
      const researchDetailId = Vue.ref('');
      const researchCompareRows = Vue.ref([]);
      const researchCompareLoading = Vue.ref(false);
      const researchExportLoading = Vue.ref(false);

      const RESEARCH_TYPE_LABELS = {
        'factor_ic': '因子IC', 'layer': '分层', 'sweep': '扫描',
        'backtest': '回测', 'stability': '稳定性',
      };
      function researchTypeLabel(type) {
        return RESEARCH_TYPE_LABELS[type] || type || '—';
      }
      function goShortterm(sub) {
        // V5.2.3: 市场复盘移入短线复盘 → 研究页入口跳转过去 (V6.9.1-fix: 异动扫描已删除)
        if (state && state.navigateTo) state.navigateTo('shortterm', sub);
      }

      function openResearchHistory() {
        // currentSubPage 由 qcState provide 注入 (state.currentSubPage), setup 内不可裸用
        state.currentSubPage.value = 'research-history';
        loadResearchHistory();
      }
      async function loadResearchHistory() {
        const seq = ++_seq.n;
        researchHistoryLoading.value = true;
        researchHistoryError.value = false;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const q = researchHistoryType.value ? '?type=' + encodeURIComponent(researchHistoryType.value) : '';
          const res = await fetch('/api/strategies/research-history' + q, { headers }).then(function (r) { return r.json(); });
        if (seq !== _seq.n) return;
          researchHistory.value = (res && res.items) || [];
        } catch (e) {
          console.error('[research-history] 加载失败:', e);
          researchHistoryError.value = true;
        } finally {
        if (seq === _seq.n) researchHistoryLoading.value = false;
        }
      }
      async function exportResearchHistory() {
        const seq = ++_seq.n;  // V6.9.4 (H3): 补竞态序号
        researchExportLoading.value = true;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const q = researchHistoryType.value ? '?type=' + encodeURIComponent(researchHistoryType.value) : '';
          const res = await fetch('/api/strategies/research-history/export' + q, { headers });
          if (!res.ok) throw new Error('HTTP ' + res.status);
          const blob = await res.blob();
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'research_history.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (e) {
          console.error('[research-history] 导出失败:', e);
        } finally {
        if (seq === _seq.n) researchExportLoading.value = false;
        }
      }
      function toggleResearchSelect(id) {
        const i = researchHistorySelected.value.indexOf(id);
        if (i >= 0) researchHistorySelected.value.splice(i, 1);
        else if (researchHistorySelected.value.length < 10) researchHistorySelected.value.push(id);
      }
      function toggleResearchDetail(id) {
        researchDetailId.value = (researchDetailId.value === id) ? '' : id;
      }
      async function runResearchCompare() {
        const seq = ++_seq.n;  // V6.9.4 (H3): 补竞态序号
        const ids = researchHistorySelected.value;
        if (ids.length < 2) return;
        researchCompareLoading.value = true;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const res = await fetch('/api/strategies/research-history/compare', {
            method: 'POST',
            headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
            body: JSON.stringify({ ids: ids }),
          }).then(function (r) { return r.json(); });
          researchCompareRows.value = (res && res.items) || [];
        } catch (e) {
          console.error('[research-history] 对比失败:', e);
        } finally {
        if (seq === _seq.n) researchCompareLoading.value = false;
        }
      }
      async function deleteResearchHistory(id) {
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const res = await fetch('/api/strategies/research-history/' + id, {
            method: 'DELETE', headers: headers,
          }).then(function (r) { return r.json(); });
          if (res && res.deleted) {
            researchHistory.value = researchHistory.value.filter(function (e) { return e.id !== id; });
            const si = researchHistorySelected.value.indexOf(id);
            if (si >= 0) researchHistorySelected.value.splice(si, 1);
          }
        } catch (e) {
          console.error('[research-history] 删除失败:', e);
        }
      }

      return {
        researchHistory, researchHistoryLoading, researchHistoryError, researchHistoryType,
        researchHistorySelected, researchDetailId, researchCompareRows, researchCompareLoading,
        researchExportLoading, researchTypeLabel, goShortterm, openResearchHistory,
        loadResearchHistory, exportResearchHistory, toggleResearchSelect, toggleResearchDetail,
        runResearchCompare, deleteResearchHistory,
      };
    },
  };
})();
