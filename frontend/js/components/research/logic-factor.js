// quant-calendar: 研究页逻辑域 — 因子研究与参数扫描（IC/分层/详情 + 网格扫描与稳定性）
// 6.3.0 (T-6.3.0.6): 自 components/research-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.researchPage.factor.create(ctx) 装配, 由 research-page.js 解构返回
// ctx 依赖: ref / seq / withAuth / authHeaders / activeStrategyId / paramValues
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchPage = window.__quantModules.researchPage || {};
  window.__quantModules.researchPage.factor = {
    create: function (ctx) {
      const { ref, seq: _seq, withAuth, authHeaders, activeStrategyId, paramValues } = ctx;
      // ===== 因子研究 (v3.20 P1-F8) =====
      const factorKey = ref('mom20');
      const factorIcLoading = ref(false);
      const factorLayerLoading = ref(false);
      const factorIcReport = ref(null);
      const factorLayerResult = ref(null);
      const factorOptions = [
        { name: 'mom20', category: 'technical' },
        { name: 'pe', category: 'valuation' },
        { name: 'pb', category: 'valuation' },
        { name: 'turnover20', category: 'sentiment' },
        { name: 'capital_flow', category: 'capital' },
      ];
      // V4.0 M2-1: 参数扫描 (策略实验室)
      const sweepGrid = ref('{"top_n":[10,20,30]}');
      const sweepResult = ref(null);
      const sweepMessage = ref('');
      const sweepLoading = ref(false);
      const sweepStability = ref(null); // V5.0.2 T-5.0.24: 参数稳定性诊断

      async function runSweep() {
        if (!activeStrategyId.value) { ElementPlus.ElMessage.warning('请先选择策略'); return; }
        let grid;
        try { grid = JSON.parse(sweepGrid.value); }
        catch (e) { ElementPlus.ElMessage.error('网格 JSON 格式错误'); return; }
        if (!grid || Object.keys(grid).length === 0) { ElementPlus.ElMessage.warning('网格不能为空'); return; }
        sweepLoading.value = true; sweepResult.value = null; sweepMessage.value = '';
        try {
          const res = await fetch('/api/strategies/' + activeStrategyId.value + '/sweep', {
            method: 'POST', headers: authHeaders(), body: JSON.stringify({ param_grid: grid }),
          }).then(function (r) { return r.json(); });
          if (res && Array.isArray(res.results)) {
            sweepResult.value = res.results;
            sweepMessage.value = '完成 ' + res.count + ' 组' + (res.data_degraded ? ' (数据不可达, 结果降级)' : '');
            sweepStability.value = res.param_stability || null;
          } else {
            sweepMessage.value = (res && res.detail) || '扫描失败';
          }
        } catch (e) { console.error('[sweep]', e); sweepMessage.value = '扫描失败: ' + e.message; }
        finally { sweepLoading.value = false; }
      }

      async function runFactorIc() {
        const seq = ++_seq.n;  // V6.9.4 (H3): 补竞态序号 — 原 finally 引用未定义 seq 抛 ReferenceError
        factorIcLoading.value = true;
        try {
          const res = await withAuth('/api/strategies/factors/ic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }),
          }).then(function (r) { return r.json(); });
          const rep = res && res.report ? (res.report.n1 || {}) : {};
          factorIcReport.value = rep;
        } catch (e) {
          console.error('[research] 因子IC分析失败:', e);
          ElementPlus.ElMessage.error('因子 IC 分析失败: ' + e.message);
        } finally {
        if (seq === _seq.n) factorIcLoading.value = false;
        }
      }

      async function runFactorLayer() {
        const seq = ++_seq.n;  // V6.9.4 (H3): 补竞态序号
        factorLayerLoading.value = true;
        try {
          const res = await withAuth('/api/strategies/factors/layer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }),
          }).then(function (r) { return r.json(); });
          if (res && res.layers) {
            factorLayerResult.value = res;
          } else {
            ElementPlus.ElMessage.warning('分层回测: ' + (res.message || '无数据'));
          }
        } catch (e) {
          console.error('[research] 分层回测失败:', e);
          ElementPlus.ElMessage.error('分层回测失败: ' + e.message);
        } finally {
        if (seq === _seq.n) factorLayerLoading.value = false;
        }
      }

      // T-5.1.16: 因子详情面板
      const factorDetail = ref(null);
      const factorDetailLoading = ref(false);
      async function runFactorDetail() {
        const seq = ++_seq.n;  // V6.9.4 (H3): 补竞态序号
        factorDetailLoading.value = true;
        factorDetail.value = null;
        try {
          const res = await withAuth('/api/strategies/factors/detail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }),
          }).then(function (r) { return r.json(); });
          if (res && res.detail) {
            factorDetail.value = res.detail;
          } else {
            ElementPlus.ElMessage.warning('因子详情: ' + (res.message || '无数据'));
          }
        } catch (e) {
          console.error('[research] 因子详情失败:', e);
          ElementPlus.ElMessage.error('因子详情失败: ' + e.message);
        } finally {
        if (seq === _seq.n) factorDetailLoading.value = false;
        }
      }


      return {
        factorKey, factorIcLoading, factorLayerLoading, factorIcReport,
        factorLayerResult, factorOptions, runFactorIc, runFactorLayer,
        factorDetail, factorDetailLoading, runFactorDetail, sweepGrid,
        sweepResult, sweepMessage, sweepLoading, sweepStability,
        runSweep,
      };
    },
  };
})();
