// quant-calendar: 短线复盘页逻辑域 — 盘中情绪与事件流 (v6.9.0 / B3.5)
// 经 window.__quantModules.shorttermPage.sentiment.create(ctx) 装配, 由 shortterm-page.js 解构返回
// ctx 依赖: ref / cachedGet
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.shorttermPage = window.__quantModules.shorttermPage || {};
  window.__quantModules.shorttermPage.sentiment = {
    create: function (ctx) {
      const { ref, computed, cachedGet, fmtPct, fmtAmount } = ctx;

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
      // v7.2.0: 情绪脉冲屏
      const pulse = ref(null);
      const pulseLoading = ref(false);
      const pulseError = ref(false);
      const pulseReason = ref('');

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

      // v7.3.0: 回测与审计（审计 + 样本内外回测 + 财务分位）
      const lab = ref(null);
      const labLoading = ref(false);
      const labError = ref(false);
      const labReason = ref('');

      async function loadLab(force) {
        labLoading.value = true;
        labError.value = false;
        const safe = function (u) { return cachedGet(u, force).catch(function () { return null; }); };
        try {
          const res = await Promise.all([
            safe('/api/research/pit-audit'),
            safe('/api/research/backtest-lab?lookback=20&top_k=10'),
          ]);
          const audit = res[0] || null;
          const bt = res[1] || null;
          if (!((audit && audit.available) || (bt && bt.available))) {
            lab.value = null;
            labError.value = true;
            labReason.value = (audit && audit.reason) || (bt && bt.reason) || '该数据未启用';
          } else {
            lab.value = { audit: audit, backtest: bt };
          }
        } catch (e) {
          lab.value = null;
          labError.value = true;
          labReason.value = '加载失败，请检查服务后重试';
        } finally {
          labLoading.value = false;
        }
      }

      const labBlocks = computed(function () {
        const l = lab.value || {};
        const a = l.audit || {};
        const b = l.backtest || {};
        const m = b.full || {};
        const pct = function (v) { return v == null ? '—' : v + '%'; };
        return [
          { title: 'PIT 审计', hint: '审计通过只说明当前检查项无异常，不构成对结果正确性的担保', items: [
            kv('结论', a.passed ? '通过' : '未通过'),
            kv('检查项 / 失败', (a.total || 0) + ' / ' + (a.failed || 0)),
            kv('目标日', a.target_date || '—'),
          ] },
          { title: '动量回测（全样本）', hint: 't 日收盘出信号，收益自 t+1 起计', items: [
            kv('总收益', pct(m.total_return)),
            kv('年化', pct(m.annual_return)),
            kv('Sharpe', m.sharpe == null ? '—' : m.sharpe),
            kv('最大回撤', pct(m.max_drawdown)),
          ] },
          { title: '样本内外', hint: '样本内外同一套参数，不做样本外调参', items: [
            kv('样本内', pct((b.in_sample || {}).total_return)),
            kv('样本外', pct((b.out_of_sample || {}).total_return)),
            kv('切分点', (b.split && (b.split.out_of_sample || [])[0]) || '—'),
          ] },
        ];
      });

      // 情绪脉冲屏（三端点并行；单点失败不拖垮整卡）
      async function loadPulse(force) {
        pulseLoading.value = true;
        pulseError.value = false;
        const safe = function (u) { return cachedGet(u, force).catch(function () { return null; }); };
        try {
          const res = await Promise.all([
            safe('/api/research/sentiment-pulse'),
            safe('/api/research/lhb-topology?days=3'),
            safe('/api/research/attention-resonance?window=5'),
          ]);
          const sp = res[0] || null;
          const tp = res[1] || null;
          const ar = res[2] || null;
          if (!((sp && sp.available) || (tp && tp.available) || (ar && ar.available))) {
            pulse.value = null;
            pulseError.value = true;
            pulseReason.value = (sp && sp.reason) || (tp && tp.reason) || (ar && ar.reason) || '该数据未启用';
          } else {
            pulse.value = { sentiment: sp, topology: tp, resonance: ar };
          }
        } catch (e) {
          pulse.value = null;
          pulseError.value = true;
          pulseReason.value = '加载失败，请检查服务后重试';
        } finally {
          pulseLoading.value = false;
        }
      }

      // 四组指标（模板只做 v-for）
      function kv(k, v, cls, hint) { return { k: k, v: v, cls: cls || '', hint: hint || '' }; }
      const pulseGroups = computed(function () {
        const p = pulse.value || {};
        const sp = p.sentiment || {};
        const tp = p.topology || {};
        const ar = p.resonance || {};
        const cnt = sp.counts || {};
        // 复用宿主 shortterm-page 已有的格式化函数，避免第二套实现
        const pct = function (v) { return v == null ? '—' : fmtPct(v * 100); };
        return [
          { title: '涨停结构', hint: '', items: [
            kv('涨停 / 连板', (cnt.limit_up_count == null ? '—' : cnt.limit_up_count) + ' / ' + (cnt.consec_count == null ? '—' : cnt.consec_count)),
            kv('最高板', cnt.max_boards == null ? '—' : cnt.max_boards),
            kv('早封率', pct(sp.early_seal_rate)),
            kv('封单留存', sp.seal_retention == null ? '—' : sp.seal_retention),
          ] },
          { title: '涨停原因 Top5', hint: '', items: (sp.reasons || []).slice(0, 5).map(function (r) { return kv(r.token, r.count); }) },
          { title: '龙虎榜概念（近3日）', hint: tp.conservation_ok === undefined ? '' : ('守恒校验：' + (tp.conservation_ok ? '通过' : '未通过')),
            items: (tp.concepts || []).slice(0, 5).map(function (c) { return kv(c.concept, fmtAmount(c.cum_net), c.cum_net >= 0 ? 'up' : 'down'); }) },
          { title: '热榜共振（5日）', hint: '同期同向不代表因果，不能当预测信号', items: [
            kv('秩相关', ar.spearman == null ? '—' : ar.spearman),
            kv('判定', ar.verdict_text || '—'),
            kv('上涨占比', pct(ar.up_ratio)),
          ] },
        ];
      });

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
        pulse, pulseLoading, pulseError, pulseReason, pulseGroups, loadPulse,
        lab, labLoading, labError, labReason, labBlocks, loadLab,
        industry, industryLoading, industryError, industryReason, industryStale,
        loadIndustryStrength,
        sentiment, sentimentLoading, sentimentError, sentimentReason, sentimentCaliber,
        eventsRows, eventsLoading, eventsError, eventsReason, eventsSource,
        loadSentiment, loadEventsFlash,
      };
    },
  };
})();
