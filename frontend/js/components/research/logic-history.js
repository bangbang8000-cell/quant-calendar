// quant-calendar: 研究页逻辑域 — 研究历史（实验列表/详情/对比/导出）
// 6.3.0 (T-6.3.0.6): 自 components/research-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.researchPage.history.create(ctx) 装配, 由 research-page.js 解构返回
// ctx 依赖: seq / state(qcState 注入: navigateTo / currentSubPage)
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchPage = window.__quantModules.researchPage || {};
  window.__quantModules.researchPage.history = {
    create: function (ctx) {
      // v6.4 (FR-6.4.1): 序号按加载器隔离
      const { seqOf, state } = ctx;
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
      // v7.15 (FR-7): 研究总览跨策略对比 — backtest 实验按 sid 分组取最新
      const overviewCompareRows = Vue.ref([]);
      const overviewCompareLoading = Vue.ref(false);


      const RESEARCH_TYPE_LABELS = {
        'factor_ic': '因子IC', 'layer': '分层', 'sweep': '扫描',
        'backtest': '回测', 'stability': '稳定性',
        'timing_matrix': '择时矩阵', 'timing': '择时', 'market_state': '市场状态',
        'score': '评分', 'pattern_strategy': '形态策略', 'pattern_match': '形态匹配',
      };
      function researchTypeLabel(type) {
        return RESEARCH_TYPE_LABELS[type] || type || '—';
      }
      // v7.22 (FR-5): 代码 + 中文名展示（后端只读补字段；查不到名称显示 —）
      function researchSubjectLabel(exp) {
        if (!exp) return '—';
        const names = exp.subject_names || {};
        const codes = exp.subject_codes || [];
        if (codes.length) {
          const parts = codes.slice(0, 3).map(function (c) { return c + (names[c] ? ' ' + names[c] : ' —'); });
          if (codes.length > 3) parts.push('等 ' + codes.length + ' 只');
          return parts.join('、');
        }
        return exp.subject || '—';
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
        const _s = seqOf('researchHistory');
        const seq = ++_s.n;
        researchHistoryLoading.value = true;
        researchHistoryError.value = false;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const q = researchHistoryType.value ? '?type=' + encodeURIComponent(researchHistoryType.value) : '';
          const res = await fetch('/api/strategies/research-history' + q, { headers }).then(function (r) { return r.json(); });
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          researchHistory.value = (res && res.items) || [];
        } catch (e) {
          console.error('[research-history] 加载失败:', e);
          researchHistoryError.value = true;
        } finally {
        researchHistoryLoading.value = false;  // v6.4: 无条件复位
        }
      }
      async function exportResearchHistory() {
        const _s = seqOf('researchExport');
        const seq = ++_s.n;
        researchExportLoading.value = true;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const q = researchHistoryType.value ? '?type=' + encodeURIComponent(researchHistoryType.value) : '';
          const res = await fetch('/api/strategies/research-history/export' + q, { headers });
          if (!res.ok) throw new Error('HTTP ' + res.status);
          const blob = await res.blob();
          if (seq !== _s.n) return;  // v6.4: 连点导出时, 旧响不再触发第二次下载
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
        researchExportLoading.value = false;  // v6.4: 无条件复位
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
        const _s = seqOf('researchCompare');
        const seq = ++_s.n;
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
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          researchCompareRows.value = (res && res.items) || [];
        } catch (e) {
          console.error('[research-history] 对比失败:', e);
        } finally {
        researchCompareLoading.value = false;  // v6.4: 无条件复位
        }
      }
      async function deleteResearchHistory(id) {
        // v7.24 FR-16: 二次确认走 ElementPlus（原生弹窗门禁）
        try {
          await window.ElementPlus.ElMessageBox.confirm(
            '确定删除该条实验记录？删除后不可恢复。', '确认删除', { type: 'warning' });
        } catch (e) { return; }
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

      // ===== v7.26 (FR-16 / T-7.25.32): 策略管理 → 回测记录（按选中策略过滤） =====
      // 数据源仍是 research_experiments(type=backtest) 单源，经 /api/backtest/history?sid= 读取；
      // legacy 只读记录（backtest_history.json）无 id/标 legacy，不提供删除入口。
      const smBtRows = Vue.ref([]);
      const smBtLoading = Vue.ref(false);
      const smBtError = Vue.ref(false);
      const smBtSelected = Vue.ref([]);
      const smBtAllSelected = Vue.ref(false);

      function _smBtHeaders() {
        const core = (window.__quantModules && window.__quantModules.core) || {};
        return (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
      }

      async function loadSmBtRecords(sid) {
        const target = sid || (state && state.activeStrategyId && state.activeStrategyId.value) || '';
        if (!target) { smBtRows.value = []; smBtSelected.value = []; return; }
        const _s = seqOf('smBtRecords');
        const seq = ++_s.n;
        smBtLoading.value = true;
        smBtError.value = false;
        try {
          const res = await fetch('/api/backtest/history?days=0&limit=100&sid=' + encodeURIComponent(target),
            { headers: _smBtHeaders() }).then(function (r) { return r.json(); });
          if (seq !== _s.n) return;
          smBtRows.value = (res && res.data) || [];
          // 选择器只保留仍存在的 id
          const alive = smBtRows.value.filter(function (r) { return r.id && !r.legacy; })
            .map(function (r) { return r.id; });
          smBtSelected.value = smBtSelected.value.filter(function (id) { return alive.indexOf(id) >= 0; });
        } catch (e) {
          if (seq !== _s.n) return;
          console.error('[strategy-manage] 回测记录加载失败:', e);
          smBtError.value = true;
        } finally {
          smBtLoading.value = false;
        }
      }

      function toggleSmBtSelect(id) {
        if (!id) return;
        const i = smBtSelected.value.indexOf(id);
        if (i >= 0) smBtSelected.value.splice(i, 1);
        else smBtSelected.value.push(id);
      }

      function toggleSmBtSelectAll(val) {
        smBtSelected.value = val
          ? smBtRows.value.filter(function (r) { return r.id && !r.legacy; }).map(function (r) { return r.id; })
          : [];
      }

      async function _smBtConfirm(message) {
        const ep = window.ElementPlus || {};
        if (!ep.ElMessageBox) return false;
        try {
          await ep.ElMessageBox.confirm(message, '确认删除', { type: 'warning' });
          return true;
        } catch (e) { return false; }
      }

      async function deleteSmBtRecord(row) {
        if (!row || !row.id || row.legacy) return;
        if (!(await _smBtConfirm('确定删除该条回测结果？删除后不可恢复。'))) return;
        try {
          const res = await fetch('/api/strategies/research-history/' + encodeURIComponent(row.id),
            { method: 'DELETE', headers: _smBtHeaders() }).then(function (r) { return r.json(); });
          if (!res || !res.deleted) throw new Error((res && res.detail) || '删除失败');
          await loadSmBtRecords();
          await loadResearchHistory();
        } catch (e) {
          console.error('[strategy-manage] 删除回测记录失败:', e);
          const ep = window.ElementPlus || {};
          if (ep.ElMessage && ep.ElMessage.error) ep.ElMessage.error('删除失败: ' + e.message);
        }
      }

      async function batchDeleteSmBtRecords() {
        const ids = (smBtSelected.value || []).slice(0, 50);
        if (!ids.length) return;
        if (!(await _smBtConfirm('确定删除选中的 ' + ids.length + ' 条回测结果？删除后不可恢复。'))) return;
        try {
          const res = await fetch('/api/strategies/research-history/batch-delete', {
            method: 'POST',
            headers: Object.assign({ 'Content-Type': 'application/json' }, _smBtHeaders()),
            body: JSON.stringify({ ids: ids }),
          }).then(function (r) { return r.json(); });
          if (!res) throw new Error('删除失败');
          smBtSelected.value = [];
          smBtAllSelected.value = false;
          await loadSmBtRecords();
          await loadResearchHistory();
        } catch (e) {
          console.error('[strategy-manage] 批量删除回测记录失败:', e);
          const ep = window.ElementPlus || {};
          if (ep.ElMessage && ep.ElMessage.error) ep.ElMessage.error('批量删除失败: ' + e.message);
        }
      }

      // v7.15 (FR-7): 跨策略对比聚合
      async function loadOverviewCompare() {
        overviewCompareLoading.value = true;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const res = await fetch('/api/strategies/research-history?limit=200', { headers })
            .then(function (r) { return r.json(); });
          const list = (res && res.items) || [];
          const bySid = {};
          list.forEach(function (e) {
            if (e.type !== 'backtest') return;
            const sid = e.subject || '';
            if (!bySid[sid] || String(e.created_at) > String(bySid[sid].created_at)) bySid[sid] = e;
          });
          overviewCompareRows.value = Object.keys(bySid).map(function (sid) {
            const s = bySid[sid].summary || {};
            return { sid: sid, ts: bySid[sid].created_at,
              annual_return: s.annual_return, max_drawdown: s.max_drawdown,
              sharpe_ratio: s.sharpe_ratio, win_rate: s.win_rate };
          });
        } catch (e) {
          console.error('[overview-compare] 加载失败:', e);
        } finally {
          overviewCompareLoading.value = false;
        }
      }

      // ===== v7.19 (T3.2): 策略工作台 —— 「先罗列，再在列表上操作」 =====
      // 一次 /api/strategies/overview 拿到 16 个策略的纳管状态、最近运行、选股数、最近回测绩效，
      // 页面首屏就是一张可筛选/可排序的表，而不是"先选一个策略再点运行"的盲盒。
      const strategyOverview = Vue.ref([]);
      const strategyOverviewLoading = Vue.ref(false);
      const strategyOverviewError = Vue.ref('');
      const strategyOverviewDegraded = Vue.ref(false);
      const overviewKeyword = Vue.ref('');
      const overviewSortKey = Vue.ref('recent');   // recent | return | holdings
      const overviewOnlyEnabled = Vue.ref(false);

      async function loadStrategyOverview(force) {
        if (strategyOverview.value.length && !force) return;
        strategyOverviewLoading.value = true;
        strategyOverviewError.value = '';
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const res = await fetch('/api/strategies/overview', { headers: headers });
          if (!res.ok) throw new Error('HTTP ' + res.status);
          const data = await res.json();
          strategyOverview.value = (data && data.items) || [];
          strategyOverviewDegraded.value = !!(data && data.degraded);
        } catch (e) {
          strategyOverviewError.value = String(e && e.message ? e.message : e);
        } finally {
          strategyOverviewLoading.value = false;
        }
      }

      function _num(v) { const n = Number(v); return isFinite(n) ? n : null; }

      const strategyCardRows = Vue.computed(function () {
        var kw = (overviewKeyword.value || '').trim().toLowerCase();
        var rows = strategyOverview.value.filter(function (r) {
          if (overviewOnlyEnabled.value && !r.enabled) return false;
          if (!kw) return true;
          return (String(r.name) + ' ' + String(r.id) + ' ' + String(r.id_cn)).toLowerCase().indexOf(kw) >= 0;
        });
        var key = overviewSortKey.value;
        rows = rows.slice().sort(function (a, b) {
          if (key === 'return') {
            var av = _num(a.last_backtest && a.last_backtest.annual_return);
            var bv = _num(b.last_backtest && b.last_backtest.annual_return);
            // 没有回测记录的排最后（而不是当 0 参与排序 —— 那会让"未回测"看起来像"零收益"）
            if (av === null && bv === null) return 0;
            if (av === null) return 1;
            if (bv === null) return -1;
            return bv - av;
          }
          if (key === 'holdings') return (_num(b.holdings_count) || 0) - (_num(a.holdings_count) || 0);
          // recent：最近运行为空排最后
          var at = (a.last_run && a.last_run.started_at) || '';
          var bt = (b.last_run && b.last_run.started_at) || '';
          if (!at && !bt) return 0;
          if (!at) return 1;
          if (!bt) return -1;
          return String(bt) > String(at) ? 1 : -1;
        });
        return rows;
      });

      function strategyStatusText(r) {
        if (!r) return '—';
        var st = r.last_run && r.last_run.status;
        if (st === 'running') return '运行中';
        if (st === 'failed') return '上次失败';
        if (!r.enabled) return '未纳管';
        return '正常';
      }

      function openStrategyManageFor(sid) {
        if (!sid) return;
        if (state.activeStrategyId) state.activeStrategyId.value = sid;
        state.currentSubPage.value = 'strategy-manage';
      }

      function goBacktestFor(sid) {
        if (!sid) return;
        state.currentSubPage.value = 'backtest';
        if (state.activeStrategyId) state.activeStrategyId.value = sid;
        // v7.19 (T3.2): 旧实现只改「母本策略」，回测下拉没变 —— 用户从列表点「回测」进来，
        // 看到的仍是上一个策略，跑出来的自然不是自己点的那一个。这里同步选中回测策略，
        // 并把区间重置为默认 18 个月（PRD 需求 ⑧ 的建议区间）。
        if (state.backtestStrategy) state.backtestStrategy.value = sid;
        if (state.setBacktestMonths) state.setBacktestMonths(18);
      }

      return {
        researchHistory, researchHistoryLoading, researchHistoryError, researchHistoryType,
        researchHistorySelected, researchDetailId, researchCompareRows, researchCompareLoading,
        researchExportLoading, researchTypeLabel, researchSubjectLabel, goShortterm, openResearchHistory,
        loadResearchHistory, exportResearchHistory, toggleResearchSelect, toggleResearchDetail,
        runResearchCompare, deleteResearchHistory,
        // v7.26 (FR-16 / T-7.25.32): 策略管理 → 回测记录
        smBtRows, smBtLoading, smBtError, smBtSelected, smBtAllSelected,
        loadSmBtRecords, toggleSmBtSelect, toggleSmBtSelectAll,
        deleteSmBtRecord, batchDeleteSmBtRecords,
        overviewCompareRows, overviewCompareLoading, loadOverviewCompare, goBacktestFor,  // v7.15 (FR-7)
        // v7.19 (T3.2): 策略工作台
        strategyOverview, strategyOverviewLoading, strategyOverviewError, strategyOverviewDegraded,
        overviewKeyword, overviewSortKey, overviewOnlyEnabled, strategyCardRows,
        loadStrategyOverview, strategyStatusText, openStrategyManageFor,
      };
    },
  };
})();
