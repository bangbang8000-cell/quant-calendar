// quant-calendar v7.11 (FR-7.11-6): 五维分析报告 — 消费 /api/reports/stock/{symbol} (v7.9 交付)
// 五维: 技术 / 资金 / 基本 / 板块 / 事件; 缺维诚实标"缺"并按剩余维度加权, 全缺时判"数据不足"而非 0 分。
// 只读展示, 不给买卖指令(与后端 disclaimer 一致)。
(function () {
  const { ref, computed, watch } = Vue;
  function S() { return window.__quantModules.v711; }

  const DIM_LABELS = {
    technical: '技术', moneyflow: '资金', fundamental: '基本', sector: '板块', event: '事件',
  };

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StockReportPanel = {
    name: 'qc-stock-report',
    props: {
      symbol: { type: String, default: '' },
      name: { type: String, default: '' },
      date: { type: String, default: '' },
      auto: { type: Boolean, default: true },
    },
    template: `
      <div class="qc711-panel qc711-panel-inline">
        <div class="qc711-head">
          <div class="qc711-card-title"><qc-icon name="file-text" :size="14" /> 五维分析报告</div>
          <span class="qc711-hint">技术 / 资金 / 基本 / 板块 / 事件 · 缺维不猜分</span>
        </div>

        <div class="qc711-toolbar">
          <el-button size="small" type="primary" :loading="loading" :disabled="!symbol" @click="load">
            <qc-icon name="play" :size="14" /> {{ report ? '重新生成' : '生成报告' }}
          </el-button>
          <el-button size="small" :disabled="!report" @click="openHtml">打开完整报告</el-button>
          <span class="qc711-dim">{{ symbol }} {{ name }}</span>
        </div>

        <qc-state-panel v-if="error" type="error" title="报告生成失败" :desc="error" @retry="load"></qc-state-panel>

        <template v-else-if="report">
          <div class="qc711-stats">
            <div class="qc711-stat">
              <div class="qc711-stat-v">{{ scoreText }}</div>
              <div class="qc711-stat-l">综合评分</div>
            </div>
            <div class="qc711-stat"><div class="qc711-stat-v">{{ levelText }}</div><div class="qc711-stat-l">等级</div></div>
            <div class="qc711-stat"><div class="qc711-stat-v">{{ S.pct(report.data_completeness, 0) }}</div><div class="qc711-stat-l">数据完整度</div></div>
            <div class="qc711-stat">
              <div class="qc711-stat-v" :class="veto ? 'qc711-tone-down' : ''">{{ veto ? '已触发' : '无' }}</div>
              <div class="qc711-stat-l">一票否决</div>
            </div>
          </div>

          <div class="qc711-note">{{ conclusionText }}</div>
          <div v-if="missingText" class="qc711-note qc711-tone-warn">缺维：{{ missingText }}（加权按剩余维度归一，不补 0 分）</div>

          <el-table :data="dimRows" size="small" border>
            <el-table-column prop="label" label="维度" width="90"></el-table-column>
            <el-table-column label="评分" width="90">
              <template slot-scope="d">
                <span :class="d.row.score === null ? 'qc711-tone-mute' : 'qc711-strong'">{{ d.row.score === null ? '缺' : S.num(d.row.score, 0) }}</span>
              </template>
            </el-table-column>
            <el-table-column label="要点" show-overflow-tooltip>
              <template slot-scope="d">{{ d.row.reasons || '—' }}</template>
            </el-table-column>
          </el-table>

          <div class="qc711-note">{{ report.disclaimer || '本报告为研究辅助材料，不构成投资建议。' }}</div>
        </template>

        <div v-else-if="!loading" class="qc711-empty">点「生成报告」按该标的最新可用行情计算五维评分。</div>
      </div>
    `,
    setup(props) {
      const report = ref(null);
      const loading = ref(false);
      const error = ref('');

      const scoreText = computed(() => {
        const s = report.value && report.value.score;
        if (!s || s.total_score === null || s.total_score === undefined) return '—';
        return S().num(s.total_score, 1);
      });
      const levelText = computed(() => {
        const s = report.value && report.value.score;
        return (s && s.level) || '—';
      });
      const veto = computed(() => !!(report.value && report.value.score && report.value.score.veto_flag));
      const conclusionText = computed(() => {
        const c = report.value && report.value.conclusion;
        return (c && c.text) || '—';
      });
      const missingText = computed(() => {
        const m = (report.value && report.value.missing_dimensions) || [];
        return m.join('、');
      });
      const dimRows = computed(() => {
        const dims = (report.value && report.value.dimensions) || {};
        return Object.keys(DIM_LABELS).map(function (k) {
          const d = dims[k] || {};
          const reasons = (d.reasons || []).slice(0, 3).join('；');
          return { key: k, label: DIM_LABELS[k], score: (d.score === undefined ? null : d.score), reasons: reasons };
        });
      });

      async function load() {
        if (!props.symbol) return;
        loading.value = true;
        error.value = '';
        try {
          const q = [];
          if (props.date) q.push('date=' + encodeURIComponent(props.date));
          report.value = await S().api('/api/reports/stock/' + encodeURIComponent(props.symbol) +
            (q.length ? ('?' + q.join('&')) : ''));
        } catch (e) {
          error.value = S().errText(e);
          report.value = null;
        } finally {
          loading.value = false;
        }
      }

      // HTML 报告端点是 text/html: apiFetch 会按 JSON 解析, 故用原生 fetch + blob 打开
      async function openHtml() {
        try {
          const token = localStorage.getItem('quant_token') || '';
          const res = await fetch('/api/reports/stock/' + encodeURIComponent(props.symbol) + '?format=html', {
            headers: token ? { Authorization: 'Bearer ' + token } : {},
          });
          if (!res.ok) throw new Error('打开失败（HTTP ' + res.status + '）');
          const html = await res.text();
          const url = URL.createObjectURL(new Blob([html], { type: 'text/html;charset=utf-8' }));
          window.open(url, '_blank');
          setTimeout(function () { URL.revokeObjectURL(url); }, 60000);
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      watch(() => props.symbol, function (v) {
        report.value = null;
        error.value = '';
        if (v && props.auto) load();
      }, { immediate: true });

      return {
        S: window.__quantModules.v711,
        report, loading, error,
        scoreText, levelText, veto, conclusionText, missingText, dimRows,
        load, openHtml,
      };
    },
  };
})();
