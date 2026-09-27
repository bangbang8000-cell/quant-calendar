// quant-calendar: StrategiesPage 组件 (v3.6.0-T5 / FR-3.6.2)
// 策略总览页: 单根div 内含 4 子页 (overview/merrill/market/consensus) v-if 链
// 注: 原始模板含跨行 div 标签, 行号正则易漏计; 组件化时保留原始结构 (根div 90-357)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StrategiesPage = {
    name: 'qc-strategies-page',
    template: window.__quantModules.strategiesPage.view,
    setup() {
      const state = inject('qcState');
      const merrillConfigOpen = Vue.ref(false);  // V4.5 (FR-4.5.1): 内联配置展开
      if (!state) return {};
      const { computed } = Vue;
      // V5.2.8 (T-5.2.53): 竞态防护推广 — 页面级请求序号
      let _reqSeq = 0;

      // ===== v3.11 (FR-3.11.7) 今日一屏: 聚合当日决策要素的派生视图 =====
      const merrill = computed(() => state.merrillData?.value || {});
      const market = computed(() => state.marketData?.value || {});
      const dashboard = computed(() => state.dashboardData?.value || {});
      const health = computed(() => state.healthMetrics?.value || []);
      const consensusRank = computed(() => state.filteredConsensusRank?.value || []);

      // code → name 查找表（来自共识榜/当前池），用于今日新入池显示股票名
      const codeNameMap = computed(() => {
        const m = {};
        for (const it of consensusRank.value) if (it.code && it.name) m[it.code] = it.name;
        return m;
      });

      const HEALTH_NAMES = { 'sxsc_tushare': '东财', 'tushare': 'Tushare', 'akshare': 'AkShare' };
      function healthName(name) { return HEALTH_NAMES[name] || name; }

      // 今日日期 + 交易状态
      const todayText = computed(() => market.value.date || dashboard.value.latest_date || '-');
      const tradingStatus = computed(() => {
        const mk = market.value;
        if (!mk || Object.keys(mk).length === 0) return '数据加载中...';
        if (mk.is_trading_day && mk.in_trading_hours) return '● 交易中';
        if (mk.is_trading_day) return '已收盘';
        return '○ 非交易日';
      });

      // 美林下一阶段预测
      const merrillNext = computed(() => {
        const nsp = merrill.value.next_stage_prediction;
        if (nsp && nsp.next_stage_name && nsp.transition_probability > 0.2) {
          return `→${nsp.next_stage_name} ${(nsp.transition_probability * 100).toFixed(2)}%`;
        }
        return '';
      });

      // 今日重点（新入池/预警），点击跳转对应页
      const todayFocus = computed(() => {
        const items = [];
        const pc = dashboard.value.pool_changes || {};
        const n = pc.new_count || 0;
        if (n > 0) {
          // v3.15: 优先用后端 new_stock_names, 再回退前端 codeNameMap → 代码
          const newNames = pc.new_stock_names || {};
          const names = (pc.new_stocks || []).map(c => newNames[c] || codeNameMap.value[c] || c).slice(0, 4).join('、');
          items.push({
            icon: 'sparkles', level: 'new',
            text: `今日新入池 ${n} 只${names ? ' · ' + names : ''}`,
            action: () => { if (window.__quantGoPage) window.__quantGoPage('calendar', 'pool'); else { state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; } state.statusFilter.value = 'new'; },
          });
        }
        for (const s of health.value.filter(x => x.degraded)) {
          items.push({
            icon: 'alert-triangle', level: 'warn',
            text: `数据源 ${healthName(s.name)} degraded（连续失败）`,
            action: () => { if (window.__quantGoPage) window.__quantGoPage('system', ''); else { state.currentPage.value = 'system'; } },
          });
        }
        const t = merrill.value.timing;
        if (t && t.progress_percent && t.progress_percent > 100) {
          items.push({
            icon: 'clock', level: 'warn',
            text: `美林「${merrill.value.name}」已超期 ${t.progress_percent}%`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        } else if (t && t.maturity && merrill.value.name) {
          items.push({
            icon: 'clock', level: 'info',
            text: `美林「${merrill.value.name}」阶段成熟度 ${t.maturity}`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        }
        const mk = market.value;
        if (mk && mk.is_trading_day === false && mk.date) {
          items.push({
            icon: 'calendar', level: 'info',
            text: `${mk.date} 非交易日`,
            action: () => { state.currentSubPage.value = 'market'; },
          });
        }
        return items;
      });

      // V5.3.0 (T-5.3.5.2 / FR-5.3.5.2): 今日一屏信号化 — 机会/风险角标 (纯计算, 不经过 AI)
      const todaySignals = computed(() => {
        const signals = [];
        const mName = merrill.value.name || '';
        const timing = merrill.value.timing || {};
        const bullStages = ['复苏', '成长', '过热'];
        const bearStages = ['滞胀', '衰退'];
        if (bullStages.some(s => mName.includes(s))) signals.push({ kind: 'opportunity', source: '美林', text: mName + ' 顺势', action: () => { state.currentSubPage.value = 'merrill'; } });
        if (bearStages.some(s => mName.includes(s))) signals.push({ kind: 'risk', source: '美林', text: mName + ' 防守', action: () => { state.currentSubPage.value = 'merrill'; } });
        if (timing.progress_percent && timing.progress_percent > 100) signals.push({ kind: 'risk', source: '美林', text: '阶段超期', action: () => { state.currentSubPage.value = 'merrill'; } });
        const pc = dashboard.value.pool_changes || {};
        const net = (pc.new_count || 0) - (pc.out_count || 0);
        if (net >= 3) signals.push({ kind: 'opportunity', source: '池变动', text: '净入池 +' + net, action: () => { state.statusFilter.value = 'new'; state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; } });
        else if (net <= -3) signals.push({ kind: 'risk', source: '池变动', text: '净出池 ' + net, action: () => { state.currentSubPage.value = 'consensus'; } });
        const sent = market.value.market_sentiment;
        const st = (sent && sent.text) || '';
        if (st.includes('乐观') || st.includes('积极') || st.includes('亢奋')) signals.push({ kind: 'opportunity', source: '情绪', text: st, action: () => { state.currentSubPage.value = 'market'; } });
        if (st.includes('悲观') || st.includes('恐慌') || st.includes('低迷')) signals.push({ kind: 'risk', source: '情绪', text: st, action: () => { state.currentSubPage.value = 'market'; } });
        for (const s of health.value.filter(x => x.degraded)) signals.push({ kind: 'risk', source: '数据', text: healthName(s.name) + ' 降级', action: () => { if (window.__quantGoPage) window.__quantGoPage('system', ''); else { state.currentPage.value = 'system'; } } });
        return signals;
      });

      // v3.22-I4: 美林时间轴 (显式解包 ref)
      const merrillTimeline = computed(() => state.merrillTimeline?.value || state.merrillTimeline || { cycles: [] });
      const timelineLoading = computed(() => state.timelineLoading?.value || false);
      // V4.0.5: 修复时间轴点击无弹窗 — qcState 未注入 showTimelineStage, 改用同源的 showStageDetail(阶段详情弹窗)
      // V4.8 (R1): 点击改为时间轴内嵌紧凑弹窗 — 仅展示该小阶段独有信息(essence/highlight/指标),
      //            不再跳转大而全的阶段详情弹窗 (showStageDetail 保留其他入口用)
      // V6.11 (需求轮2·批次3): 旧「时间轴内嵌紧凑弹窗」(.tl-click-pop) 的标记已随旧时间轴移除,
      // 其状态与定位逻辑成为死代码 (且导致点击阶段无任何反馈) —— 统一委派到阶段详情弹窗。
      function showTimelineStage(stageKey) {
        // showStageDetail 由 qcState 注入 (经 ...state 暴露给模板), 故此处从 state 取, 不能当本地绑定用
        const fn = state.showStageDetail;
        if (typeof fn === 'function') fn(stageKey);
      }

      // v3.22-I4: 美林时间轴阶段取色
      function getTimelineStageColor(stage) {
        // v3.22-timeline-fix: setupState 已解包 ref — 兼容 .value 与直接对象两种形态
        const raw = state.merrillStagesConfig;
        const cfg = (raw && raw.value) ? raw.value : (raw || {});
        const s = cfg[stage] || {};
        // v3.22-timeline-fix: fallback 用主题主色 — 原 'var(--border-strong)' 未定义 → 透明底+白字看不清
        return s.color || s.bg_color || 'var(--color-primary)';
      }
      // v3.22-timeline-fix: 阶段中文名兜底 — API timeline 部分 stage 的 name 为空, 用 stages 配置补名
      function getTimelineStageName(stage) {
        const raw = state.merrillStagesConfig;
        const cfg = (raw && raw.value) ? raw.value : (raw || {});
        return (cfg[stage] && cfg[stage].name) || '';
      }

      // ─── V4.0.1: 时间轴重设计 — 历史在上/最新在下 · 蛇形折行连线 · hover 介绍 ───
      function _tlCfg() {
        const raw = state.merrillStagesConfig;
        return (raw && raw.value) ? raw.value : (raw || {});
      }
      function getTimelineStageDesc(stage) {
        return (_tlCfg()[stage] && _tlCfg()[stage].description) || '';
      }
      // V6.11 (需求轮2·批次3): 旧「历史周期时间轴」下线后的死代码已删除 ——
      //   tlCycleYears / tlTipYears / tlTipBrief / tlCurrentBrief / tlGanttStyle / timelineRows /
      //   tlChipStyle / tlPathFor / tlPaths / tlHoverKey / setTlHover / clearTlHover /
      //   collapsedCycles / isCycleCollapsed / toggleCycle / scrollToLatest / tlLegendStages /
      //   连线测量 buildTlPaths / scheduleTlRebuild 与 body 级 MutationObserver 观察器。
      //   旧 CSS (71 条规则约 11.9KB) 同步删除; .merrill-timeline-empty 仍在用故保留。

      // ─── V4.9 (P1): 执行看板 ───
      const execHistory = Vue.ref([]);
      const execSummary = Vue.ref(null);
      const execLoading = Vue.ref(false);
      const execError = Vue.ref(false);
      const execDays = Vue.ref(7);
      const execTaskFilter = Vue.ref('');
      const execStatusFilter = Vue.ref('');
      const execTaskOptions = Vue.computed(() => {
        const tasks = new Set();
        (execHistory.value || []).forEach(function (r) { if (r.task) tasks.add(r.task); });
        return Array.from(tasks).sort();
      });
      // V4.9 (P1): 成功率颜色走 CSS 类（仓库约定禁内联 style）
      const execSuccessClass = Vue.computed(function () {
        const rate = (execSummary.value && execSummary.value.success_rate) || 0;
        return rate >= 80 ? 'color-success' : rate >= 50 ? 'color-warning' : 'color-danger';
      });

      // V4.9.5: 各任务成功率进度条状态色 → CSS 类 (status-ok/warn/bad, 遵守禁内联 style 约定)
      function execRateClass(total, success) {
        if (total > 0 && success / total >= 0.8) return 'status-ok';
        if (total > 0 && success / total >= 0.5) return 'status-warn';
        return 'status-bad';
      }

      async function loadExecutionData() {
        const seq = ++_reqSeq;
        execLoading.value = true;
        execError.value = false;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const params = new URLSearchParams({ days: String(execDays.value) });
          if (execTaskFilter.value) params.set('task', execTaskFilter.value);
          if (execStatusFilter.value) params.set('status', execStatusFilter.value);
          const [histRes, sumRes] = await Promise.all([
            fetch('/api/system/execution-history?' + params.toString(), { headers }).then(function (r) { return r.json(); }),
            fetch('/api/system/execution-summary?days=' + execDays.value, { headers }).then(function (r) { return r.json(); }),
          ]);
          if (seq !== _reqSeq) return;
          execHistory.value = (histRes && histRes.data) || [];
          execSummary.value = (sumRes && sumRes.data) || null;
        } catch (e) {
          console.error('[execution] 执行数据加载失败:', e);
          execError.value = true;
        } finally {
          if (seq === _reqSeq) execLoading.value = false;
        }
      }


      // ─── V4.9.2 (P1): 每日策略执行监控 ───
      const _execI18n = (window.__quantModules && window.__quantModules.i18n) || {};
      const _execT = (typeof _execI18n.t === 'function') ? _execI18n.t : (function (k) { return String(k); });
      const execPlan = Vue.ref([]);
      const execStatus = Vue.ref(null);
      const execResults = Vue.ref(null);
      const execTraceDate = Vue.ref('');
      const execTraceSteps = Vue.ref([]);
      const execTraceLoading = Vue.ref(false);
      let _execPollTimer = null;

      const execResultsDates = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        if (d.length && !execTraceDate.value) execTraceDate.value = d[d.length - 1].date;
        return d;
      });
      const execCountdownText = Vue.computed(function () {
        const p = (execPlan.value || []).find(function (x) { return x.enabled; });
        if (!p || p.countdown_seconds == null) return '—';
        const s = p.countdown_seconds;
        return Math.floor(s / 3600) + 'h' + String(Math.floor((s % 3600) / 60)).padStart(2, '0') + 'm';
      });
      // V6.7.1 (PRD F-6.7.9 / OBS-1): 明确「下次自动更新 HH:MM」时间点 (不依赖倒计时歧义)
      const execNextRunText = Vue.computed(function () {
        const p = (execPlan.value || []).find(function (x) { return x.enabled; });
        if (!p || p.countdown_seconds == null || p.countdown_seconds < 0) return '';
        try {
          return new Date(Date.now() + p.countdown_seconds * 1000)
            .toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false });
        } catch (e) { return ''; }
      });
      const execPhaseText = Vue.computed(function () {
        const st = execStatus.value;
        if (!st || st.phase === 'idle') return _execT('exec.waiting');
        if (st.phase === 'running') return _execT('exec.running') + (st.current_sid ? ' · ' + st.current_sid : '');
        return st.phase === 'done' ? _execT('exec.done') : _execT('exec.failed');
      });
      const execStatusIcon = Vue.computed(function () {
        return execStatus.value && execStatus.value.phase === 'running' ? 'loader' : 'check-circle-2';
      });
      const execLastDate = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        return d.length ? d[d.length - 1].date : '—';
      });
      const execVisibleClass = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        const last = d[d.length - 1];
        return last && last.visible ? 'color-success' : 'color-danger';
      });
      const execVisibleText = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        const last = d[d.length - 1];
        if (!last) return '—';
        return last.day_view_total;
      });

      function _execFetch(url) {
        const core = (window.__quantModules && window.__quantModules.core) || {};
        const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
        return fetch(url, { headers }).then(function (r) { return r.json(); });
      }

      async function loadExecutionMonitor() {
        const seq = ++_reqSeq;
        try {
          const [planRes, statusRes, resRes] = await Promise.all([
            _execFetch('/api/strategies/execution/plan'),
            _execFetch('/api/strategies/execution/status'),
            _execFetch('/api/strategies/execution/results?days=7'),
          ]);
          if (seq !== _reqSeq) return;
          execPlan.value = (planRes && planRes.data && planRes.data.plans) || [];
          execStatus.value = (statusRes && statusRes.data) || null;
          execResults.value = (resRes && resRes.data) || null;
          if (execStatus.value && execStatus.value.phase === 'running') {
            _startExecPoll();
          } else {
            _stopExecPoll();
          }
        } catch (e) {
          console.error('[execution-monitor] 监控数据加载失败:', e);
        }
      }

      function _startExecPoll() {
        _stopExecPoll();
        _execPollTimer = setInterval(function () {
          _execFetch('/api/strategies/execution/status').then(function (res) {
            execStatus.value = (res && res.data) || null;
            if (execStatus.value && execStatus.value.phase !== 'running') {
              _stopExecPoll();
              loadExecutionMonitor();
            }
          }).catch(function () { });
        }, 5000);
      }
      function _stopExecPoll() {
        if (_execPollTimer) { clearInterval(_execPollTimer); _execPollTimer = null; }
      }

      async function loadExecutionTrace(date) {
        if (!date) return;
        const seq = ++_reqSeq;
        execTraceLoading.value = true;
        try {
          const res = await _execFetch('/api/strategies/execution/trace/' + encodeURIComponent(date));
          if (seq !== _reqSeq) return;
          const data = (res && res.data) || null;
          execTraceSteps.value = (data && data.steps) || [];
        } catch (e) {
          console.error('[execution-trace] 追溯加载失败:', e);
        } finally {
          if (seq === _reqSeq) execTraceLoading.value = false;
        }
      }

      // V5.2.3-fix: 执行看板移入系统配置后, 组件在 (system, execution) 下是"新挂载"
      // (currentSubPage 已是 execution), 无 immediate 的 watch 不会对当前值触发 → 看板空。
      // immediate 让挂载即按当前子页加载/停止, 对原策略总览路径无副作用。
      Vue.watch(function () { return state.currentSubPage && state.currentSubPage.value; }, function (sub) {
        if (sub === 'execution') { loadExecutionData(); loadExecutionMonitor(); }
        else { _stopExecPoll(); }
      }, { immediate: true });

      // V5.16 (F2/F3/F4): 双栏模式默认选中第一条 (股票/指数)
      Vue.watch(function () {
        const sub = state.currentSubPage && state.currentSubPage.value;
        const rank = (state.filteredConsensusRank && state.filteredConsensusRank.value) || [];
        const mkt = (state.marketData && state.marketData.value) || {};
        return {
          sub: sub,
          split: !!state.detailSplitEnabled.value,
          top5: rank.slice(0, 5),
          rank: rank,
          indices: (mkt.indices || []).map(function (x) { return x; }),
        };
      }, function (v, old) {
        if (!v.split) return;  // 仅双栏模式
        if (v.sub === 'overview') {
          if (!v.top5.length) return;
          const cur = state.stockDetail && state.stockDetail.value && state.stockDetail.value.stock;
          const inList = v.top5.some(function (s) { return s.code === cur; });
          if (!cur || !inList) { if (state.showStockDetail) state.showStockDetail(v.top5[0].code); }
        } else if (v.sub === 'consensus') {
          if (!v.rank.length) return;
          const cur = state.stockDetail && state.stockDetail.value && state.stockDetail.value.stock;
          const inList = v.rank.some(function (s) { return s.code === cur; });
          if (!cur || !inList) { if (state.showStockDetail) state.showStockDetail(v.rank[0].code); }
        } else if (v.sub === 'market') {
          if (!v.indices.length) return;
          const cur = state.indexDetail && state.indexDetail.value && state.indexDetail.value.code;
          const inList = v.indices.some(function (x) { return x.code === cur; });
          if (!cur || !inList) { if (state.showIndexDetail) state.showIndexDetail(v.indices[0]); }
        }
      }, { immediate: true });

      // ===== V5.21: 周期演进板 (Living Cycle Board) =====
      // 设计要点: ①当前阶段=进行中 (进度/剩余/成熟度随时间为实时值) ②本轮带: 实色=已发生 /
      //          斜纹=预测, 当前段宽度随进度"生长" ③历史周期压缩 (可切阶段矩阵) ④评估轨迹:
      //          快照按阶段压缩成连续段, 阶段切换即出现第二段 => "大模型评估修订"可见
      const mcHistView = Vue.ref('band');
      const MC_STAGE_KEYS = ['recession', 'recovery', 'overheating', 'stagflation'];
      function _mcYm(s) {
        if (!s) return null;
        const p = String(s).split('-');
        const y = parseInt(p[0], 10), m = parseInt(p[1] || '1', 10);
        if (!isFinite(y)) return null;
        return y + (m - 1) / 12;
      }
      function _mcYmStr(v) {
        const y = Math.floor(v);
        let m = Math.round((v - y) * 12) + 1;
        if (m > 12) m = 12;
        if (m < 1) m = 1;
        return y + '-' + (m < 10 ? '0' + m : '' + m);
      }
      function _mcTiming() {
        return (state.merrillData && state.merrillData.value && state.merrillData.value.timing) || {};
      }
      function _mcColor() {
        return (state.merrillData && state.merrillData.value && state.merrillData.value.color) || 'var(--color-success)';
      }
      // 生成一条"首尾相接"的周期带 (V5.22 需求4):
      //   1) 各阶段按持续时间累计铺满整条轴 -- 不再按真实日期留数据间隙, 阶段之间严丝合缝;
      //   2) 每段携带真实起止月份(start/end)与时长(months), 可直接读出"哪个阶段在什么时候";
      //   3) 当前阶段 = 实色(已发生) + 斜纹(预测剩余) [+ 下一阶段预测], "今天"落在实色/斜纹分界。
      function _mcBand(stages, withNext) {
        const tm = _mcTiming();
        const avg = Number(tm.avg_duration_months) || 0;
        const prog = Math.min(100, Number(tm.progress_percent) || 0);
        const curStart = _mcYm(tm.current_stage_start_date);
        const parts = [];
        let firstStart = null;
        (stages || []).forEach(function (s) {
          const t0 = _mcYm(s.start);
          if (firstStart == null && t0 != null) firstStart = t0;
          const isCur = !!(s.is_current || (curStart != null && t0 === curStart && !s.duration_months));
          const nm = s.name || getTimelineStageName(s.stage);
          if (isCur && avg > 0) {
            const elapsed = avg * prog / 100;
            if (elapsed > 0.5) parts.push({ stage: s.stage, name: nm, months: elapsed, live: true, start: s.start });
            const remain = avg - elapsed;
            if (remain > 0.5) parts.push({ stage: s.stage, name: '剩余(预测)', months: remain, ghost: true, start: s.start });
          } else {
            let months = Number(s.duration_months) || 0;
            if (!months && t0 != null) {
              const e0 = _mcYm(s.end);
              if (e0 != null && e0 > t0) months = Math.max(1, Math.round((e0 - t0) * 12));
            }
            if (!months) months = 1;
            parts.push({ stage: s.stage, name: nm, months: months, live: isCur, start: s.start, end: s.end });
          }
          if (isCur && withNext && avg > 0) {
            const np = state.merrillData && state.merrillData.value && state.merrillData.value.next_stage_prediction;
            if (np) parts.push({ stage: np.next_stage, name: (np.next_stage_name || '下一阶段') + ' (预测)',
                                 months: avg, ghost: true, prob: np.transition_probability });
          }
        });
        if (!parts.length) return { segs: [], axisStart: '', axisEnd: '', nowPct: null };
        const total = parts.reduce(function (a, p) { return a + p.months; }, 0) || 1;
        const base = firstStart != null ? firstStart : 0;
        let acc = 0, doneMonths = 0;
        const segs = parts.map(function (p) {
          const leftM = acc;
          if (!p.ghost) doneMonths += p.months;
          acc += p.months;
          const seg = { stage: p.stage, name: p.name, months: Math.round(p.months), ghost: !!p.ghost, live: !!p.live,
                        prob: p.prob, left: leftM / total * 100, width: Math.max(2, p.months / total * 100) };
          // 时间信息统一为"年-月": 源数据里 end 与 duration_months 口径不一致,
          // 故只展示 真实起始月 + 时长(与带宽一致), 不展示推算区间。
          const ss = _mcYm(p.start), ee = _mcYm(p.end);
          seg.start = ss != null ? _mcYmStr(ss) : _mcYmStr(base + (leftM / 12));
          seg.end = ee != null ? _mcYmStr(ee) : '';
          seg.predicted = ss == null;
          return seg;
        });
        const last = parts[parts.length - 1];
        const hasGhost = parts.some(function (p) { return p.ghost; });
        const axisEnd = (last && last.end) ? last.end : _mcYmStr(base + total / 12);
        return { segs: segs, axisStart: _mcYmStr(base), axisEnd: axisEnd,
                 nowPct: hasGhost ? doneMonths / total * 100 : null };
      }
      function _mcIsCurrentCycle(c) {
        return (c.stages || []).some(function (s) { return s.is_current; });
      }
      const mcCurrentBand = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        if (!cycles.length) return { segs: [], axisStart: '', axisEnd: '', nowPct: null };
        let cur = null;
        for (let i = cycles.length - 1; i >= 0; i--) { if (_mcIsCurrentCycle(cycles[i])) { cur = cycles[i]; break; } }
        if (!cur) cur = cycles[cycles.length - 1];
        return _mcBand(cur.stages, true);
      });
      // V4.0.5-A: 轮次年份范围 (首阶段 start → 末阶段 end 取年)
      // V6.11: 仍被 mcHistoryBands 使用 (历史周期行左侧「轮次 + 年份」标签), 不属于死代码。
      function tlCycleYears(cycle) {
        const stages = cycle && cycle.stages ? cycle.stages : [];
        if (!stages.length) return '';
        const y1 = stages[0] && stages[0].start ? String(stages[0].start).slice(0, 4) : '';
        const last = stages[stages.length - 1] || {};
        const y2 = last.end ? String(last.end).slice(0, 4) : (last.start ? String(last.start).slice(0, 4) : '');
        return (y1 || y2) ? (y1 ? y1 + '–' + y2 : y2) : '';
      }

      const mcHistoryBands = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        return cycles.filter(function (c) { return !_mcIsCurrentCycle(c); }).map(function (c) {
          return { label: c.label, years: tlCycleYears(c), segs: _mcBand(c.stages, false).segs };
        });
      });
      const mcStageKeys = MC_STAGE_KEYS;
      const mcMatrix = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        return cycles.map(function (c) {
          const sum = {};
          MC_STAGE_KEYS.forEach(function (k) { sum[k] = 0; });
          let cur = null;
          (c.stages || []).forEach(function (s) {
            if (sum[s.stage] != null) sum[s.stage] += (Number(s.duration_months) || 0);
            if (s.is_current) cur = s.stage;
          });
          return { label: c.label, sum: sum, cur: cur };
        });
      });
      const mcMaxMonths = Vue.computed(function () {
        let m = 0;
        mcMatrix.value.forEach(function (r) { MC_STAGE_KEYS.forEach(function (k) { if (r.sum[k] > m) m = r.sum[k]; }); });
        return m || 1;
      });
      const mcTrailRuns = Vue.computed(function () {
        const items = (state.merrillSnapshots && state.merrillSnapshots.value) || [];
        const runs = [];
        items.forEach(function (it) {
          const last = runs[runs.length - 1];
          if (last && last.stage === it.stage) { last.count++; last.last = it.timestamp; }
          else runs.push({ stage: it.stage, name: it.stage_name || getTimelineStageName(it.stage), count: 1, first: it.timestamp, last: it.timestamp });
        });
        return runs;
      });
      const mcProgScale = Vue.computed(function () {
        return Math.max(100, Math.min(200, Number(_mcTiming().progress_percent) || 0));
      });
      const mcProgStyle = Vue.computed(function () {
        const p = Number(_mcTiming().progress_percent) || 0;
        return {
          width: Math.max(0, Math.min(100, p / mcProgScale.value * 100)) + '%',
          // V6.12 (需求轮3·item3): 阶段色细条同步走柔和条填充档
          background: p > 100
            ? 'linear-gradient(90deg, color-mix(in srgb, ' + _mcColor() + ' var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))'
            : 'color-mix(in srgb, ' + _mcColor() + ' var(--bar-mix), var(--surface-card))'
        };
      });
      const mcAvgMark = Vue.computed(function () { return 100 / mcProgScale.value * 100; });
      const mcEndRange = Vue.computed(function () {
        const pe = _mcTiming().predicted_end;
        if (!pe) return '';
        if (typeof pe === 'string') return pe;
        const lo = pe.optimistic || pe.earliest || '';
        const hi = pe.pessimistic || pe.latest || '';
        if (lo && hi) return lo + ' ~ ' + hi;
        return pe.base || pe.mid || lo || hi || '';
      });
      // V6.10 (配色专项·C·f2): 阶段色来自后端配置 (不随主题), 文字色必须按底色亮度自适应,
      //   原固定 chip 文字色只对浅色底有效; 且 `c + '44'` 拼 alpha 仅对 6 位 hex 颜色成立。
      function _chipFg(c) {
        const m = /^#([0-9a-f]{6})$/i.exec(String(c || '').trim());
        if (!m) return 'var(--merrill-chip-text)';
        const n = parseInt(m[1], 16);
        const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
        const L = 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
        return L > 0.42 ? 'var(--merrill-chip-text)' : 'var(--merrill-chip-text-invert)';
      }
      // V6.11 (需求轮2·批次3 / 用户需求2): 阶段带改「主题原生底 + 阶段色标识」——
      //   原实现直接把后端下发的 Material 浅色当底色, 与主题/明暗无关:
      //   亮色下对白卡片仅 1.73–2.23:1 (发糊), 暗色下对深卡片 7.5–9.7:1 (刺眼)。
      //   现改为阶段色 22% 与卡片表面混合 (自动随 6 色相 + 明暗联动), 左侧 3px 阶段色条保留阶段身份,
      //   文字统一用正文色 (实测对合成底色 >= 13:1)。
      var MC_SEG_MIX = 22;
      function _segFill(c) { return 'color-mix(in srgb, ' + c + ' ' + MC_SEG_MIX + '%, var(--surface-card))'; }
      function mcSegStyle(g) {
        const c = getTimelineStageColor(g.stage) || 'var(--color-primary)';
        if (g.ghost) {
          // 预测段: 低透明度斜纹 + 正文色文字
          return { left: g.left + '%', width: g.width + '%', color: 'var(--text-primary)',
                   borderLeft: '3px solid ' + c,
                   background: 'repeating-linear-gradient(45deg, ' + _segFill(c) + ' 0, '
                     + _segFill(c) + ' 5px, var(--surface-card) 5px, var(--surface-card) 10px)' };
        }
        return { left: g.left + '%', width: g.width + '%', background: _segFill(c), color: 'var(--text-primary)',
                 borderLeft: '3px solid ' + c };
      }
      function mcSegTitle(g) {
        const parts = [g.name];
        if (g.start) parts.push((g.predicted ? '预计起始 ' : '起始 ') + g.start + (g.end ? ' → ' + g.end : ''));
        if (g.months) parts.push('约 ' + g.months + ' 个月');
        if (g.ghost) parts.push('预测(尚未发生)');
        if (g.prob != null) parts.push('转移概率 ' + (g.prob * 100).toFixed(0) + '%');
        return parts.join(' · ');
      }
      function mcMxCellStyle(k, v) {
        const c = getTimelineStageColor(k) || 'var(--color-primary)';
        const p = Math.max(0.28, v / mcMaxMonths.value);
        // V6.11: 阶段矩阵同步走主题原生底 (原 opacity 叠色在暗色下与卡片底混浊、亮色下过淡)
        const mix = Math.round(14 + 30 * p);
        return { background: 'color-mix(in srgb, ' + c + ' ' + mix + '%, var(--surface-card))',
                 color: 'var(--text-primary)' };
      }

      // V6.12 (需求轮3·item1): 当前阶段徽标 — 浅色阶段底 + 压深文字 + 中等字重
      //  原实现直接用后端阶段实色 (Material 饱和色) 作底, 在细长徽标上色彩过浓 (用户反馈
      //  「衰退期色彩太浓、粗体取消」)。改用与美林阶段卡 active 态同源的公式:
      //  底 = 阶段色 14% 混卡片底; 字 = 阶段色 48% 混前景色 (随明暗主题自适应)。
      const merrillChipStyle = Vue.computed(function () {
        const md = (state.merrillData && state.merrillData.value) || state.merrillData || {};
        const c = md.color || getTimelineStageColor(md.stage) || 'var(--color-primary)';
        return {
          background: 'color-mix(in srgb, ' + c + ' 14%, var(--surface-card))',
          color: 'color-mix(in srgb, ' + c + ' 48%, var(--text-primary))',
          borderColor: 'color-mix(in srgb, ' + c + ' 26%, transparent)',
        };
      });

      return { ...state, todayText, tradingStatus, merrillNext, todayFocus, todaySignals, merrillConfigOpen,
        getTimelineStageColor, getTimelineStageName, getTimelineStageDesc, merrillChipStyle,
        // V5.21: 周期演进板
        mcHistView, mcCurrentBand, mcHistoryBands, mcStageKeys, mcMatrix, mcTrailRuns,
        mcProgStyle, mcAvgMark, mcEndRange, mcSegStyle, mcSegTitle, mcMxCellStyle,
        merrillTimeline, timelineLoading, showTimelineStage,
        execHistory, execSummary, execLoading, execError,
        execDays, execTaskFilter, execStatusFilter, execTaskOptions, execSuccessClass,
        loadExecutionData,
        execRateClass,
        execPlan, execStatus, execResults, execTraceDate, execTraceSteps, execTraceLoading,
        execResultsDates, execCountdownText, execNextRunText, execPhaseText, execStatusIcon,
        execLastDate, execVisibleClass, execVisibleText,
        loadExecutionTrace, };
    },
  };
})();
