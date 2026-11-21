// quant-calendar: 研究页逻辑域 — 因子研究与参数扫描（IC/分层/详情 + 网格扫描与稳定性）
// 6.3.0 (T-6.3.0.6): 自 components/research-page.js 的 setup body 逐字符搬出（保留原缩进）
// 经 window.__quantModules.researchPage.factor.create(ctx) 装配, 由 research-page.js 解构返回
// ctx 依赖: ref / seq / withAuth / authHeaders / activeStrategyId / paramValues
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchPage = window.__quantModules.researchPage || {};
  window.__quantModules.researchPage.factor = {
    create: function (ctx) {
      // v6.4 (FR-6.4.1): 序号按加载器隔离（seqOf(key) 返回该加载器专属计数器）
      const { ref, seqOf, withAuth, authHeaders, activeStrategyId, paramValues, activeStrategy } = ctx;
      // 6.3.1 (T-6.3.1.5): i18n 助手 — 本轮新增站内消息文案走翻译函数
      const _i18n = (window.__quantModules && window.__quantModules.i18n) || {};
      const t = (typeof _i18n.t === 'function') ? _i18n.t : (function (k) { return String(k); });
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
        const _s = seqOf('factorIc');
        const seq = ++_s.n;
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
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          const rep = res && res.report ? (res.report.n1 || {}) : {};
          factorIcReport.value = rep;
        } catch (e) {
          console.error('[research] 因子IC分析失败:', e);
          ElementPlus.ElMessage.error(t('msg.factorIcFailed', { msg: e.message }));
        } finally {
        factorIcLoading.value = false;  // v6.4: 无条件复位
        }
      }

      async function runFactorLayer() {
        const _s = seqOf('factorLayer');
        const seq = ++_s.n;
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
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          if (res && res.layers) {
            factorLayerResult.value = res;
          } else {
            ElementPlus.ElMessage.warning(t('msg.layerBacktest', { msg: res.message || t('msg.noData') }));
          }
        } catch (e) {
          console.error('[research] 分层回测失败:', e);
          ElementPlus.ElMessage.error(t('msg.layerBacktestFailed', { msg: e.message }));
        } finally {
        factorLayerLoading.value = false;  // v6.4: 无条件复位
        }
      }

      // T-5.1.16: 因子详情面板
      const factorDetail = ref(null);
      const factorDetailLoading = ref(false);
      async function runFactorDetail() {
        const _s = seqOf('factorDetail');
        const seq = ++_s.n;
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
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          if (res && res.detail) {
            factorDetail.value = res.detail;
          } else {
            ElementPlus.ElMessage.warning(t('msg.factorDetail', { msg: res.message || t('msg.noData') }));
          }
        } catch (e) {
          console.error('[research] 因子详情失败:', e);
          ElementPlus.ElMessage.error(t('msg.factorDetailFailed', { msg: e.message }));
        } finally {
        factorDetailLoading.value = false;  // v6.4: 无条件复位
        }
      }


      // ===== v7.12 (FR-7.4-4): 个股评分卡 — 五维雷达 + 总分 + 否决标记 + 导出 =====
      // 维度键与后端 strategy_sdk.scoring.SCORE_DIMENSIONS 同源; 配置由 /scores/config 拉取,
      // 拿不到配置时用本地兜底键(不阻塞手工填分)。
      const SCORE_DIM_LABELS = {
        technical: '技术面', moneyflow: '资金面', fundamental: '基本面',
        sector: '板块', event: '事件',
      };
      const scoreConfigDims = ref(Object.keys(SCORE_DIM_LABELS));
      const scoreWeights = ref(null);
      const scoreCode = ref('');
      const scoreDims = ref({ technical: null, moneyflow: null, fundamental: null, sector: null, event: null });
      const scoreVeto = ref(false);
      const scoreVetoReason = ref('');
      const scoreLoading = ref(false);
      const scoreError = ref('');
      const scoreResult = ref(null);
      const scoreTopN = ref(10);

      function scoreDimLabel(k) { return SCORE_DIM_LABELS[k] || k; }

      async function loadScoreConfig() {
        try {
          const res = await fetch('/api/strategies/scores/config', { headers: authHeaders() })
            .then(function (r) { return r.json(); });
          if (res && Array.isArray(res.dimensions) && res.dimensions.length) {
            scoreConfigDims.value = res.dimensions.slice();
            const next = {};
            res.dimensions.forEach(function (d) { next[d] = null; });
            scoreDims.value = next;
          }
          if (res && res.default_weights) scoreWeights.value = res.default_weights;
        } catch (e) {
          console.warn('[score] 评分配置不可用, 使用本地兜底维度', e);
        }
      }

      async function runScore() {
        scoreLoading.value = true;
        scoreError.value = '';
        scoreResult.value = null;
        try {
          const dims = {};
          scoreConfigDims.value.forEach(function (k) {
            const v = scoreDims.value[k];
            dims[k] = (v === '' || v === null || v === undefined || isNaN(Number(v))) ? null : Number(v);
          });
          const body = {
            stock_code: String(scoreCode.value || '').trim(),
            dimension_scores: dims,
            veto: !!scoreVeto.value,
            veto_reason: scoreVetoReason.value || '',
          };
          if (scoreTopN.value) body.top_n = Number(scoreTopN.value);
          const res = await fetch('/api/strategies/scores/calculate', {
            method: 'POST', headers: authHeaders(), body: JSON.stringify(body),
          }).then(function (r) { return r.json(); });
          if (res && res.total_score !== undefined && res.total_score !== null) {
            scoreResult.value = res;
          } else {
            scoreError.value = (res && res.detail) || '评分失败';
          }
        } catch (e) {
          console.error('[score] 评分失败', e);
          scoreError.value = '评分失败: ' + e.message;
        } finally {
          scoreLoading.value = false;
        }
      }

      // 雷达图几何: viewBox 120x120, 中心 60,60, 半径 44(轴), 标签半径 1.18R
      const RADAR_C = 60;
      const RADAR_R = 44;

      function _radarPoint(i, n, ratio) {
        const ang = (-90 + (360 / Math.max(n, 1)) * i) * Math.PI / 180;
        const r = RADAR_R * Math.max(0, Math.min(1, ratio));
        return [(RADAR_C + r * Math.cos(ang)).toFixed(1), (RADAR_C + r * Math.sin(ang)).toFixed(1)];
      }

      function scoreRadarAxes() {
        const keys = scoreConfigDims.value || [];
        const n = keys.length || 1;
        return keys.map(function (k, i) {
          const tip = _radarPoint(i, n, 1);
          const lab = _radarPoint(i, n, 1.18);
          return { key: k, label: scoreDimLabel(k), x: tip[0], y: tip[1], lx: lab[0], ly: lab[1] };
        });
      }

      function scoreRadarPolygon() {
        const r = scoreResult.value;
        if (!r || !r.dimensions) return '';
        const keys = scoreConfigDims.value || [];
        const n = keys.length || 1;
        return keys.map(function (k, i) {
          const d = r.dimensions[k] || {};
          const s = (d.score === null || d.score === undefined) ? 0 : Number(d.score);
          return _radarPoint(i, n, s / 100).join(',');
        }).join(' ');
      }

      function scoreDimRows() {
        const r = scoreResult.value;
        if (!r || !r.dimensions) return [];
        return (scoreConfigDims.value || []).map(function (k) {
          const d = r.dimensions[k] || {};
          return {
            key: k, label: scoreDimLabel(k), score: d.score,
            weight: d.weight, weighted: d.weighted_score, status: d.status || 'ok',
          };
        });
      }

      function exportScore() {
        const r = scoreResult.value;
        if (!r) { ElementPlus.ElMessage.warning('请先计算评分'); return; }
        const lines = ['维度,分数,权重,加权分'];
        scoreDimRows().forEach(function (row) {
          lines.push([
            row.label,
            (row.score === null || row.score === undefined) ? 'unknown' : row.score,
            row.weight == null ? '' : row.weight,
            (row.weighted === null || row.weighted === undefined) ? '' : row.weighted,
          ].join(','));
        });
        lines.push('');
        lines.push(['总分', r.total_score, '等级', r.level].join(','));
        lines.push(['一票否决', r.veto_flag ? '是' : '否', r.veto_reason || '', ''].join(','));
        if (r.missing_dimensions && r.missing_dimensions.length) {
          lines.push(['缺失维度', r.missing_dimensions.join('|'), '', ''].join(','));
        }
        if (r.top_n_suggestion) {
          const syms = Object.keys(r.top_n_suggestion);
          lines.push(['TopN 建议', syms.join('|'), '', ''].join(','));
        }
        const blob = new Blob(['\ufeff' + lines.join('\n')], { type: 'text/csv;charset=utf-8' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'score-' + (String(scoreCode.value || '').trim() || 'stock') + '.csv';
        a.click();
        URL.revokeObjectURL(url);
      }

      // 因子下拉: 策略自带 factor_specs 优先, 但"综合评分"必须恒在(FR-7.4-4)
      function factorSelectOptions() {
        const specs = (activeStrategy && activeStrategy.value && activeStrategy.value.factor_specs) || null;
        const list = ((specs && specs.length) ? specs : factorOptions).slice();
        if (!list.some(function (f) { return f.name === 'composite_score'; })) {
          list.push({ name: 'composite_score', category: 'score', label: '综合评分' });
        }
        return list;
      }


      return {
        factorKey, factorIcLoading, factorLayerLoading, factorIcReport,
        factorLayerResult, factorOptions, runFactorIc, runFactorLayer,
        factorDetail, factorDetailLoading, runFactorDetail, sweepGrid,
        sweepResult, sweepMessage, sweepLoading, sweepStability,
        runSweep,
        // v7.12 FR-7.4-4 评分卡
        scoreCode, scoreDims, scoreConfigDims, scoreWeights, scoreVeto, scoreVetoReason,
        scoreLoading, scoreError, scoreResult, scoreTopN,
        scoreDimLabel, scoreDimRows, scoreRadarAxes, scoreRadarPolygon,
        loadScoreConfig, runScore, exportScore, factorSelectOptions,
      };
    },
  };
})();
