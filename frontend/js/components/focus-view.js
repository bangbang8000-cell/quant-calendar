// quant-calendar: FocusView 组件 (v5.4.0 T-5.4.0.7/8 / FR-5.4.4)
// 重点跟踪视图: 今日概览 / 当日多时点 / 历史记录 / 效果块
// 数据: /api/focus/results|history|stock/{code} + /api/ai/track (效果块)
// 动作已由后端按当前用户持仓派生 (5 档: 买入/持有/观望/减仓/卖出)
(function () {
  const { ref, onMounted, inject } = Vue;
  window.__quantComponents = window.__quantComponents || {};

  const EMOJI = { '买入': '🟢', '持有': '🟡', '观望': '⚪', '减仓': '🟠', '卖出': '🔴' };
  const ACTION_ORDER = ['买入', '持有', '观望', '减仓', '卖出'];
  const SESSIONS = [
    { v: 'pre_open', l: '盘前 09:00' },
    { v: 'intraday_1', l: '盘中 10:30' },
    { v: 'intraday_2', l: '盘中 14:00' },
    { v: 'after_close', l: '盘后 20:00' },
  ];
  const SESSION_LABELS = { pre_open: '盘前', intraday_1: '盘中', intraday_2: '盘中', after_close: '盘后' };
  const TRACK_WINDOWS = [
    { key: 'n5', label: '5 日命中' },
    { key: 'n10', label: '10 日命中' },
    { key: 'n20', label: '20 日命中' },
  ];

  function apiFetch(url) {
    const core = (window.__quantModules && window.__quantModules.core) || {};
    const fn = core.apiFetch || window.fetch;
    return fn(url).then((r) => (r.json ? r.json() : r));
  }

  function toLocalDate() {
    const d = new Date();
    const p = (n) => (n < 10 ? '0' + n : '' + n);
    return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
  }

  window.__quantComponents.FocusView = {
    name: 'qc-focus-view',
    template: `
      <div>
        <!-- 今日概览卡 -->
        <div class="card mb-4">
          <div class="card-title">🎯 重点跟踪 · 今日概览</div>
          <div class="flex-between mb-8">
            <div class="flex-gap-8">
              <el-date-picker v-model="curDate" type="date" size="small"
                value-format="YYYY-MM-DD" placeholder="选择日期" @change="loadAll"></el-date-picker>
              <el-radio-group v-model="session" size="small" @change="loadResults">
                <el-radio-button v-for="s in SESSIONS" :key="s.v" :value="s.v">{{ s.l }}</el-radio-button>
              </el-radio-group>
            </div>
            <div class="color-secondary">共 {{ results.total }} 只 · 按当前登记持仓派生</div>
          </div>
          <!-- V5.4.1 (R3): 5档动作分布可视化 — 堆叠条 + 图例 (主题令牌色) -->
          <div v-if="results.total > 0" class="focus-action-bar-wrap">
            <div class="focus-action-bar">
              <div v-for="a in ACTION_ORDER" :key="a"
                   class="focus-action-seg" :class="'focus-action-' + a"
                   :style="{ width: actionPct(a) }"
                   :title="EMOJI[a] + ' ' + a + ': ' + (results.actions[a] || 0)"></div>
            </div>
            <div class="focus-action-legend">
              <span v-for="a in ACTION_ORDER" :key="a" class="focus-action-legend-item">
                <span class="focus-action-dot" :class="'focus-action-' + a"></span>
                {{ EMOJI[a] }} {{ a }} <b>{{ results.actions[a] || 0 }}</b>
              </span>
            </div>
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="a in ACTION_ORDER" :key="a" :type="tagType(a)" size="small" effect="light">
              {{ EMOJI[a] }} {{ a }}: 0
            </el-tag>
          </div>
        </div>

        <!-- 当日多时点结果 -->
        <div class="card mb-4">
          <div class="card-title">📊 当日多时点结果
            <span class="card-title-hint">时段: {{ sessionLabel }} · 点击行展开详情</span>
          </div>
          <div v-if="loading" class="color-secondary">加载中…</div>
          <div v-else-if="results.rows.length === 0" class="color-secondary">
            该日期/时段暂无评估结果（多时点评估由调度执行, 盘前 09:00 / 盘后 20:00 必做）
          </div>
          <div v-else>
            <div v-for="row in results.rows" :key="row.stock_code" class="focus-row"
              :class="{ 'focus-row-expanded': expanded.includes(row.stock_code) }"
              @click="toggle(row.stock_code)" tabindex="0" role="button"
              @keydown.enter.prevent="toggle(row.stock_code)">
              <span class="focus-row-emoji">{{ EMOJI[row.action] || '·' }}</span>
              <span class="focus-row-name">{{ row.stock_name }}
                <span class="color-secondary">({{ row.stock_code }})</span>
                <!-- V5.4.0 (FR-5.4.9): 自选/入池状态徽标 -->
                <span v-if="poolStatus[row.stock_code]" class="focus-row-badges">
                  <el-tag v-if="poolStatus[row.stock_code].source === 'both' || poolStatus[row.stock_code].source === 'watchlist'"
                    size="small" type="warning" effect="light" class="focus-badge">⭐ 自选</el-tag>
                  <el-tag v-if="poolStatus[row.stock_code].source === 'both' || poolStatus[row.stock_code].source === 'new_pool'"
                    size="small" type="success" effect="light" class="focus-badge">🆕 入池</el-tag>
                  <el-tag v-if="poolStatus[row.stock_code].holding" size="small" type="danger" effect="light" class="focus-badge">持仓</el-tag>
                </span>
              </span>
              <el-tag :type="tagType(row.action)" size="small">{{ row.action }}</el-tag>
              <span class="focus-row-score">评分 {{ fmtScore(row.total_score) }}</span>
              <span class="focus-row-dir">{{ row.direction || '震荡' }}</span>
              <!-- V5.4.1 (R3): K线详情 → 图表图标按钮 -->
              <el-button size="small" circle text type="primary" class="focus-row-open"
                @click.stop="openStockDetail(row.stock_code)"
                :title="'打开 ' + row.stock_code + ' 详情'">📈</el-button>
              <span class="focus-row-toggle">{{ expanded.includes(row.stock_code) ? '▲' : '▼' }}</span>
              <div v-if="expanded.includes(row.stock_code)" class="focus-detail">
                <div class="focus-detail-line">评估来源: {{ row.model_provider || '—' }} / {{ row.model_used || '—' }}
                  <span v-if="row.model_provider === 'rule'" class="color-secondary">（规则快评降级）</span>
                </div>
                <div class="focus-detail-line" v-if="detailOf(row).level">评级: {{ detailOf(row).level }}</div>
                <div class="focus-detail-line" v-if="detailOf(row).data_quality_note">数据时效: {{ detailOf(row).data_quality_note }}</div>
                <div class="focus-detail-line" v-if="detailOf(row).sniper_points">买卖点参考: {{ detailOf(row).sniper_points }}</div>
                <div class="focus-detail-line" v-if="detailOf(row).signal_attribution">信号归因: {{ detailOf(row).signal_attribution }}</div>
                <!-- V5.4.0 (FR-5.4.9): 入池历史 -->
                <div class="focus-detail-line" v-if="poolStatus[row.stock_code] && poolStatus[row.stock_code].pool_history">
                  <span class="color-secondary">入池:</span>
                  <template v-if="poolStatus[row.stock_code].pool_history.first_appear">
                    首入 {{ poolStatus[row.stock_code].pool_history.first_appear }} · 最近在池 {{ poolStatus[row.stock_code].pool_history.last_appear }}
                    <span v-if="poolStatus[row.stock_code].pool_history.pool_entries.length > 1" class="color-secondary">
                      · {{ poolStatus[row.stock_code].pool_history.pool_entries.length }} 段
                    </span>
                  </template>
                  <span v-else class="color-secondary">从未入池</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- 历史记录 -->
        <div class="card mb-4">
          <div class="card-title">🕘 历史记录 <span class="card-title-hint">当日时段分组</span></div>
          <div v-if="Object.keys(history.sessions || {}).length === 0" class="color-secondary">
            该日期暂无历史评估记录
          </div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="(cnt, s) in history.sessions" :key="s" size="small" type="info">
              {{ SESSION_LABELS[s] || s }}: {{ cnt }} 只
            </el-tag>
          </div>
          <div class="mt-8">
            <div class="color-secondary mb-4">单股历史对比（不同时点/日期变化）</div>
            <div class="flex-gap-8">
              <el-input v-model="stockCode" size="small" placeholder="输入代码, 如 601985.SH"
                style="width:220px" @keyup.enter="loadStockHistory"></el-input>
              <el-button size="small" @click="loadStockHistory">查询</el-button>
            </div>
            <div v-if="stockHistory && stockHistory.length" class="mt-8">
              <div v-for="h in stockHistory" :key="h.trade_date + h.session" class="focus-row-sm">
                {{ h.trade_date }} · {{ SESSION_LABELS[h.session] || h.session }} ·
                {{ h.level || '—' }} · 评分 {{ fmtScore(h.total_score) }} ·
                {{ h.direction || '震荡' }}
                <span class="color-secondary">({{ h.model_provider }})</span>
              </div>
            </div>
          </div>
        </div>

        <!-- 效果块 -->
        <div class="card">
          <div class="card-title">📈 评估效果 <span class="card-title-hint">历史命中率（决策复盘）</span></div>
          <div v-if="trackLoading" class="color-secondary">加载中…</div>
          <div v-else class="flex-gap-8">
            <el-tag v-for="w in TRACK_WINDOWS" :key="w.key" size="small" :type="rateTagType(w.key)">
              {{ w.label }}: {{ fmtRate(w.key) }}
            </el-tag>
          </div>
          <div v-if="trackNote" class="color-secondary mt-8">{{ trackNote }}</div>
        </div>
      </div>`,
    setup() {
      const state = inject('qcState');
      const curDate = ref(toLocalDate());
      const session = ref('after_close');
      const results = ref({ rows: [], actions: {}, total: 0 });
      const history = ref({ sessions: {}, total: 0 });
      const track = ref(null);
      const trackLoading = ref(false);
      const trackNote = ref('');
      const loading = ref(false);
      const expanded = ref([]);
      const stockCode = ref('');
      const stockHistory = ref(null);
      const detailCache = {};
      // V5.4.0 (FR-5.4.9): 自选/入池状态缓存 (code -> poolStatus)
      const poolStatus = ref({});
      let poolLoadSeq = 0;

      function fmtScore(s) {
        if (s === null || s === undefined) return '—';
        const f = Number(s);
        return f === Math.floor(f) ? String(f) : f.toFixed(1);
      }
      // V5.4.1 (R3): 动作分布堆叠条宽度百分比
      function actionPct(a) {
        const total = results.value.total || 0;
        const n = (results.value.actions || {})[a] || 0;
        if (!total) return '0%';
        const pct = (n / total) * 100;
        return pct > 0 && pct < 4 ? '4%' : pct.toFixed(1) + '%';  // 保底 4% 使小份额可见
      }
      function tagType(a) {
        return { '买入': 'success', '持有': 'warning', '观望': 'info', '减仓': 'danger', '卖出': 'danger' }[a] || 'info';
      }
      function rateTagType(k) {
        const st = (track.value && track.value.overall && track.value.overall[k]) || null;
        if (!st || st.total === 0 || st.rate === null || st.rate === undefined) return 'info';
        return st.rate >= 60 ? 'success' : (st.rate >= 40 ? 'warning' : 'danger');
      }
      function fmtRate(k) {
        const st = (track.value && track.value.overall && track.value.overall[k]) || null;
        if (!st || st.total === 0 || st.rate === null || st.rate === undefined) return '样本不足';
        return st.rate.toFixed(1) + '% (' + st.total + ' 样本)';
      }
      function sessionLabel() {
        return SESSION_LABELS[session.value] || session.value;
      }
      function toggle(code) {
        const i = expanded.value.indexOf(code);
        if (i >= 0) expanded.value.splice(i, 1);
        else expanded.value.push(code);
      }
      function detailOf(row) {
        if (!row || !row.raw_json) return {};
        if (detailCache[row.stock_code + row.session + row.trade_date]) {
          return detailCache[row.stock_code + row.session + row.trade_date];
        }
        let d = {};
        try { d = JSON.parse(row.raw_json) || {}; } catch (e) { d = {}; }
        detailCache[row.stock_code + row.session + row.trade_date] = d;
        return d;
      }
      async function loadResults() {
        loading.value = true;
        try {
          const res = await apiFetch('/api/focus/results?date=' + curDate.value + '&session=' + session.value);
          results.value = (res && res.success && res.data) || { rows: [], actions: {}, total: 0 };
          loadPoolStatuses((results.value.rows || []).map(function (r) { return r.stock_code; }));
        } catch (e) {
          console.warn('[focus] 结果加载失败:', e);
          results.value = { rows: [], actions: {}, total: 0 };
        } finally {
          loading.value = false;
        }
      }
      // V5.4.0 (FR-5.4.9): 批量加载自选/入池状态 (逐股 pool 端点, 缓存)
      async function loadPoolStatuses(codes) {
        const seen = poolStatus.value || {};
        const pending = (codes || []).filter(function (c) { return c && !seen[c]; });
        if (!pending.length) return;
        const seq = ++poolLoadSeq;
        const tasks = pending.map(function (code) {
          return apiFetch('/api/focus/stock/' + encodeURIComponent(code) + '/pool?date=' + curDate.value)
            .then(function (res) {
              if (res && res.success && res.data) {
                seen[code] = res.data;
              } else {
                seen[code] = { stock_code: code, source: 'none', sources: [], holding: false, pool_history: null };
              }
            })
            .catch(function () {
              seen[code] = { stock_code: code, source: 'none', sources: [], holding: false, pool_history: null };
            });
        });
        try { await Promise.all(tasks); } catch (e) { /* 单股失败已兜底 */ }
        if (seq === poolLoadSeq) poolStatus.value = Object.assign({}, seen);
      }
      // V5.4.0 (FR-5.4.9): 打开股票详情弹窗 (K线/评估/问股)
      function openStockDetail(code) {
        const sd = state && state.showStockDetail;
        if (typeof sd === 'function') { sd(code); return; }
        // 兜底: 无弹窗能力时仅提示
        const ep = (window.__quantModules && window.__quantModules.element) || {};
        const msg = ep.Message || (window.ElementPlus && window.ElementPlus.ElMessage);
        if (msg) msg.info('请从其他页面打开股票详情: ' + code);
      }
      async function loadHistory() {
        try {
          const res = await apiFetch('/api/focus/history?date=' + curDate.value);
          history.value = (res && res.success && res.data) || { sessions: {}, total: 0 };
        } catch (e) {
          console.warn('[focus] 历史加载失败:', e);
          history.value = { sessions: {}, total: 0 };
        }
      }
      async function loadTrack() {
        trackLoading.value = true;
        try {
          const res = await apiFetch('/api/ai/track');
          if (res && res.success && res.data) {
            track.value = res.data;
            trackNote.value = (res.data.note || '').replace(/^免责声明[:：]?\s*/i, '');
          } else {
            track.value = null;
          }
        } catch (e) {
          console.warn('[focus] 效果块加载失败:', e);
          track.value = null;
        } finally {
          trackLoading.value = false;
        }
      }
      async function loadStockHistory() {
        const code = (stockCode.value || '').trim();
        if (!code) return;
        stockHistory.value = null;
        try {
          const res = await apiFetch('/api/focus/stock/' + encodeURIComponent(code));
          stockHistory.value = (res && res.success && res.data && res.data.rows) || [];
        } catch (e) {
          console.warn('[focus] 单股历史加载失败:', e);
          stockHistory.value = [];
        }
      }
      async function loadAll() {
        await loadResults();
        await loadHistory();
        await loadTrack();
      }
      onMounted(loadAll);
      return { curDate, session, results, history, track, trackLoading, trackNote,
               loading, expanded, stockCode, stockHistory, SESSIONS, ACTION_ORDER,
               TRACK_WINDOWS, EMOJI, sessionLabel, fmtScore, tagType, rateTagType,
               fmtRate, toggle, detailOf, loadResults, loadHistory, loadTrack,
               loadStockHistory, loadAll, poolStatus, openStockDetail, actionPct };
    },
  };
})();
