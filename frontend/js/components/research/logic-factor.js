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
      const { ref, seqOf, withAuth, authHeaders, activeStrategyId, paramValues, activeStrategy, lastRunSymbols } = ctx;
      // 6.3.1 (T-6.3.1.5): i18n 助手 — 本轮新增站内消息文案走翻译函数
      const _i18n = (window.__quantModules && window.__quantModules.i18n) || {};
      const t = (typeof _i18n.t === 'function') ? _i18n.t : (function (k) { return String(k); });
      // ===== 因子研究 (v3.20 P1-F8) =====
      const factorKey = ref('mom20');
      const factorIcLoading = ref(false);
      const factorLayerLoading = ref(false);
      const factorIcReport = ref(null);
      const factorLayerResult = ref(null);
      // v7.14 (FR-2): 因子研究时间窗口(默认空 = 后端动态最近6个月); FR-3: 降级持久标志
      const factorRange = ref(null);
      const factorIcDegraded = ref(false);
      const factorLayerDegraded = ref(false);
      const factorDetailDegraded = ref(false);
      const sweepDegraded = ref(false);
      const factorOptions = [
        { name: 'mom20', category: 'technical' },
        { name: 'pe', category: 'valuation' },
        { name: 'pb', category: 'valuation' },
        { name: 'turnover20', category: 'sentiment' },
        { name: 'capital_flow', category: 'capital' },
      ];
      const FACTOR_CATEGORY_LABELS = {
        technical: '技术类', valuation: '估值类', sentiment: '情绪类',
        capital: '资金类', fundamental: '基本面类', score: '综合评分', composite: '综合评分',
      };
      // v7.14 (FR-8): 参数扫描网格模板
      const SWEEP_TEMPLATES = [
        { key: 'topn', label: '选股数梯度', grid: '{"top_n":[10,20,30,50]}' },
        { key: 'topn_cycle', label: '选股数×调仓周期', grid: '{"top_n":[10,20,30],"rebalance_cycle":[5,10,20]}' },
        { key: 'topn_st', label: '选股数×剔除ST', grid: '{"top_n":[10,20,30],"st_filter":[true,false]}' },
      ];
      function applySweepTemplate(key) {
        const tpl = SWEEP_TEMPLATES.find(function (t) { return t.key === key; });
        if (tpl) sweepGrid.value = tpl.grid;
      }
      function _factorDates() {
        const out = {};
        if (factorRange.value && factorRange.value.length === 2) {
          out.start_date = factorRange.value[0];
          out.end_date = factorRange.value[1];
        }
        return out;
      }
      // v7.14 (FR-4): ECharts 懒加载渲染助手(研究页 IC 曲线 / 分层柱状图)
      let _icChart = null;
      let _layerChart = null;
      function _ensureEcharts(cb) {
        const ensure = (window.__quantModules && window.__quantModules.charts
          && typeof window.__quantModules.charts.ensureEcharts === 'function')
          ? window.__quantModules.charts.ensureEcharts : null;
        if (ensure) { ensure().then(cb).catch(function () { try { cb(); } catch (e2) {} }); }
        else { try { cb(); } catch (e) { console.error('[factor] echarts 渲染失败', e); } }
      }
      function _themeOption() {
        return (window.__quantModules && window.__quantModules.echartsTheme
          && typeof window.__quantModules.echartsTheme.getEChartsTheme === 'function')
          ? window.__quantModules.echartsTheme.getEChartsTheme() : {};
      }
      // ic_series 兼容两种序列化形态: {date: value} 或 [[date, value], ...]
      function _normalizeIcSeries(series) {
        if (!series) return [];
        let entries = [];
        if (Array.isArray(series) && series.length && typeof series[0] === 'number') {
          // 后端形态3: 纯数值数组(按交易日排序, 无日期配对) → 样本序号作 x 轴
          entries = series.map(function (v, i) { return ['S' + (i + 1), v]; });
        }
        else if (Array.isArray(series)) entries = series.map(function (p) { return [p.date || p[0], p.value != null ? p.value : p[1]]; });
        else if (typeof series === 'object') entries = Object.keys(series).map(function (d) { return [d, series[d]]; });
        return entries.filter(function (p) { return p[0] != null && p[1] != null && !isNaN(Number(p[1])); })
          .sort(function (a, b) { return String(a[0]).localeCompare(String(b[0])); });
      }
      function renderFactorIcChart() {
        const el = document.getElementById('factorIcChart');
        const rep = factorIcReport.value;
        if (!el || !rep) return;
        const pts = _normalizeIcSeries(rep.ic_series);
        if (!pts.length) return;
        _ensureEcharts(function () {
          if (_icChart) { _icChart.dispose(); _icChart = null; }
          _icChart = echarts.init(el);
          _icChart.setOption(_themeOption());
          const zeroColor = getComputedStyle(document.documentElement).getPropertyValue('--text-tertiary').trim() || '#999'; /* qc-allow-hardcode: v7.14 ECharts 运行时兜底 */
          _icChart.setOption({
            tooltip: { trigger: 'axis', valueFormatter: function (v) { return Number(v).toFixed(4); } },
            grid: { left: 56, right: 16, top: 24, bottom: 40 },
            xAxis: { type: 'category', data: pts.map(function (p) { return p[0]; }), boundaryGap: false },
            yAxis: { type: 'value', scale: true, axisLabel: { formatter: function (v) { return Number(v).toFixed(2); } } },
            dataZoom: [{ type: 'inside' }],
            series: [{
              name: 'Rank IC', type: 'line', data: pts.map(function (p) { return Number(p[1]); }),
              smooth: false, symbol: 'circle', symbolSize: 4,
              lineStyle: { width: 1.5, color: '#6366f1' }, /* qc-allow-hardcode: v7.14 IC 曲线主色 — ECharts canvas 无法解析 CSS 变量 */
              markLine: { silent: true, symbol: 'none', label: { show: false },
                lineStyle: { type: 'dashed', color: zeroColor },
                data: [{ yAxis: 0 }] },
            }],
          });
        });
      }
      // 分层柱状图 — A 股配色惯例: 涨红跌绿
      function renderFactorLayerChart() {
        const el = document.getElementById('factorLayerChart');
        const r = factorLayerResult.value;
        if (!el || !r || !Array.isArray(r.layers) || !r.layers.length) return;
        _ensureEcharts(function () {
          if (_layerChart) { _layerChart.dispose(); _layerChart = null; }
          _layerChart = echarts.init(el);
          _layerChart.setOption(_themeOption());
          _layerChart.setOption({
            tooltip: { trigger: 'axis', valueFormatter: function (v) { return Number(v).toFixed(2) + '%'; } },
            grid: { left: 56, right: 16, top: 24, bottom: 40 },
            xAxis: { type: 'category', data: r.layers.map(function (ly) { return '层 ' + ly.layer; }) },
            yAxis: { type: 'value', axisLabel: { formatter: function (v) { return v + '%'; } } },
            series: [{
              name: '分层累计收益', type: 'bar',
              data: r.layers.map(function (ly) {
                return {
                  value: Number(ly.return),
                  itemStyle: { color: Number(ly.return) >= 0 ? '#c23b3b' : '#2e8b57' }, /* qc-allow-hardcode: v7.14 分层柱涨红跌绿(A股惯例) — ECharts canvas 无法解析 CSS 变量 */
                };
              }),
              barMaxWidth: 48,
              label: { show: true, position: 'top', formatter: function (p) { return Number(p.value).toFixed(2) + '%'; } },
            }],
          });
        });
      }
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
        sweepDegraded.value = false;
        try {
          const res = await fetch('/api/strategies/' + activeStrategyId.value + '/sweep', {
            method: 'POST', headers: authHeaders(),
            body: JSON.stringify(Object.assign({ param_grid: grid }, _factorDates())),
          }).then(function (r) { return r.json(); });
          if (res && Array.isArray(res.results)) {
            sweepResult.value = res.results;
            sweepMessage.value = '完成 ' + res.count + ' 组';
            sweepDegraded.value = !!res.data_degraded;
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
        factorIcDegraded.value = false;
        try {
          const res = await withAuth('/api/strategies/factors/ic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }, _factorDates())),
          }).then(function (r) { return r.json(); });
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          const rep = res && res.report ? (res.report.n1 || {}) : {};
          factorIcReport.value = rep;
          factorIcDegraded.value = !!(res && res.data_degraded);
          // v7.14 (FR-4): IC 时序曲线(等 DOM 更新后渲染)
          Vue.nextTick(function () { renderFactorIcChart(); });
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
        factorLayerDegraded.value = false;
        try {
          const res = await withAuth('/api/strategies/factors/layer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }, _factorDates())),
          }).then(function (r) { return r.json(); });
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          if (res && res.layers) {
            factorLayerResult.value = res;
            factorLayerDegraded.value = !!res.data_degraded;
            // v7.14 (FR-4): 分层柱状图
            Vue.nextTick(function () { renderFactorLayerChart(); });
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
        factorDetailDegraded.value = false;
        try {
          const res = await withAuth('/api/strategies/factors/detail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(Object.assign({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }, _factorDates())),
          }).then(function (r) { return r.json(); });
          if (seq !== _s.n) return;  // v6.4: 过期响应不覆盖新数据
          if (res && res.detail) {
            factorDetail.value = res.detail;
            factorDetailDegraded.value = !!res.data_degraded;
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
      // v7.15 (FR-1): 评分一键预填 — 从最近运行结果选股 + 维度分自动预估(诚实 unknown)
      const scoreAutoLoading = ref(false);
      const scoreAutoMsg = ref('');

      function prefillFromRun(code) {
        if (code) scoreCode.value = String(code);
      }

      async function autoEstimateDims() {
        const code = String(scoreCode.value || '').trim();
        if (!code || scoreAutoLoading.value) return;
        scoreAutoLoading.value = true;
        scoreAutoMsg.value = '';
        try {
          const res = await fetch('/api/strategies/scores/auto?stock_code=' + encodeURIComponent(code), {
            headers: authHeaders(),
          }).then(function (r) { return r.json(); });
          if (res && res.estimates) {
            let filled = 0;
            Object.keys(res.estimates).forEach(function (k) {
              const v = res.estimates[k];
              if (v !== null && v !== undefined) {
                scoreDims.value[k] = v;
                filled += 1;
              }
            });
            const unknown = (res.unknown_dims || []).length;
            scoreAutoMsg.value = filled > 0
              ? '已自动预估 ' + filled + ' 个维度' + (unknown ? ', ' + unknown + ' 个维度数据不可得保持 unknown' : '')
              : '数据不可得, 无法自动预估(请手动填写或稍后重试)';
            if (filled > 0) ElementPlus.ElMessage.success(scoreAutoMsg.value);
            else ElementPlus.ElMessage.warning(scoreAutoMsg.value);
          } else {
            scoreAutoMsg.value = (res && res.detail) || '自动预估失败';
            ElementPlus.ElMessage.error(scoreAutoMsg.value);
          }
        } catch (e) {
          console.error('[score] 自动预估失败', e);
          scoreAutoMsg.value = '自动预估失败: ' + (e.message || e);
          ElementPlus.ElMessage.error(scoreAutoMsg.value);
        } finally {
          scoreAutoLoading.value = false;
        }
      }

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

      // v7.14.1: 切换策略后校验因子仍属于新策略 — 不在则重置为首个可用因子
      if (window.Vue && typeof window.Vue.watch === 'function' && activeStrategyId) {
        window.Vue.watch(activeStrategyId, function () {
          const names = factorSelectOptions().map(function (f) { return f.name; });
          if (names.length && names.indexOf(factorKey.value) < 0) factorKey.value = names[0];
        });
      }
      // v7.14 (FR-6 派生): 因子下拉按类别分组(el-option-group), 同类内保持原序
      function factorGroupedOptions() {
        const list = factorSelectOptions();
        const groups = [];
        const idx = {};
        list.forEach(function (f) {
          const cat = f.category || 'other';
          if (!(cat in idx)) {
            idx[cat] = { category: cat, label: FACTOR_CATEGORY_LABELS[cat] || cat, items: [] };
            groups.push(idx[cat]);
          }
          idx[cat].items.push(f);
        });
        return groups;
      }


      return {
        factorKey, factorIcLoading, factorLayerLoading, factorIcReport,
        factorLayerResult, factorOptions, runFactorIc, runFactorLayer,
        factorDetail, factorDetailLoading, runFactorDetail, sweepGrid,
        sweepResult, sweepMessage, sweepLoading, sweepStability,
        runSweep,
        // v7.14: 时间窗口 / 降级透明 / 图表 / 分组 / 扫描模板
        factorRange, factorIcDegraded, factorLayerDegraded, factorDetailDegraded, sweepDegraded,
        factorGroupedOptions, applySweepTemplate,
        // v7.12 FR-7.4-4 评分卡
        scoreCode, scoreDims, scoreConfigDims, scoreWeights, scoreVeto, scoreVetoReason,
        scoreAutoLoading, scoreAutoMsg, prefillFromRun, autoEstimateDims,  // v7.15 (FR-1)
        scoreLoading, scoreError, scoreResult, scoreTopN,
        scoreDimLabel, scoreDimRows, scoreRadarAxes, scoreRadarPolygon,
        loadScoreConfig, runScore, exportScore, factorSelectOptions,
      };
    },
  };
})();
