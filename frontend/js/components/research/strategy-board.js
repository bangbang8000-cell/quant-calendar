// quant-calendar: 策略工作台列表 (v7.19 / T3.2 / PRD 需求 ⑧)
// 纯展示组件：rows/loading/error 由父级传入，交互以事件回抛。
// 这样「策略管理」与「策略回测」两个子页可以共用同一张表（避免两处各写一份列表而漂移）。
(function () {
  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StrategyBoard = {
    name: 'qc-strategy-board',
    props: {
      rows: { type: Array, default: () => [] },
      loading: { type: Boolean, default: false },
      error: { type: String, default: '' },
      keyword: { type: String, default: '' },
      sortKey: { type: String, default: 'recent' },
      onlyEnabled: { type: Boolean, default: false },
      degraded: { type: Boolean, default: false },
    },
    emits: ['update:keyword', 'update:sortKey', 'update:onlyEnabled', 'backtest', 'detail', 'retry'],
    computed: {
      // 汇总一行"当前能在列表上做什么"的提示，避免用户以为表是只读的
      summaryText() {
        const n = this.rows.length;
        const bt = this.rows.filter((r) => r.last_backtest).length;
        return `共 ${n} 个策略 · 已有回测记录 ${bt} 个 · 点「回测」直接带入默认 18 个月/100 万`;
      },
    },
    methods: {
      fmtPct(v) {
        const n = Number(v);
        if (v === null || v === undefined || !isFinite(n)) return '—';
        return n.toFixed(2) + '%';
      },
      fmtNum(v) {
        const n = Number(v);
        if (v === null || v === undefined || !isFinite(n)) return '—';
        return n.toFixed(2);
      },
      statusClass(r) {
        const st = r && r.last_run && r.last_run.status;
        if (st === 'running') return 'is-running';
        if (st === 'failed') return 'is-failed';
        if (r && !r.enabled) return 'is-idle';
        return 'is-ok';
      },
      statusText(r) {
        const st = r && r.last_run && r.last_run.status;
        if (st === 'running') return '运行中';
        if (st === 'failed') return '上次失败';
        if (r && !r.enabled) return '未纳管';
        return '正常';
      },
      lastRunText(r) {
        const t = r && r.last_run && (r.last_run.finished_at || r.last_run.started_at);
        return t ? String(t).replace('T', ' ').slice(0, 16) : '从未运行';
      },
      pnlClass(v) {
        // 无值不得染色 —— Number(null) === 0 会把「没有回测记录」渲染成绿色/红色的 "—"
        if (v === null || v === undefined || v === '') return '';
        const n = Number(v);
        if (!isFinite(n)) return '';
        return n >= 0 ? 'is-rise' : 'is-fall';
      },
    },
    template: `
    <div class="qc-strategy-board">
      <div class="qc-sb-head">
        <div class="qc-sb-title"><qc-icon name="layers" :size="16" /> 策略工作台</div>
        <div class="qc-sb-tools">
          <el-input class="w-200" size="small" clearable :model-value="keyword" placeholder="搜索策略名 / id"
                    @update:model-value="$emit('update:keyword', $event)"></el-input>
          <el-select class="w-select-sm" size="small" :model-value="sortKey" @update:model-value="$emit('update:sortKey', $event)">
            <el-option value="recent" label="按最近运行"></el-option>
            <el-option value="return" label="按年化收益"></el-option>
            <el-option value="holdings" label="按选股数"></el-option>
          </el-select>
          <el-checkbox :model-value="onlyEnabled" @update:model-value="$emit('update:onlyEnabled', $event)">仅看已纳管</el-checkbox>
          <el-button size="small" @click="$emit('retry')"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
        </div>
      </div>
      <div class="qc-sb-note">{{ summaryText }}</div>
      <div v-if="degraded" class="qc-sb-warn" role="status">
        <qc-icon name="alert-triangle" :size="14" /> 运行历史不可达，最近运行与收益列可能为空（策略定义与纳管状态仍准确）
      </div>
      <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
      <qc-state-panel v-else-if="error" type="error" title="策略列表加载失败" :desc="error" @retry="$emit('retry')"></qc-state-panel>
      <div v-else-if="!rows.length" class="text-sm-tertiary">没有匹配的策略。清空搜索条件或到「全新创建」新建一个。</div>
      <div v-else class="qc-sb-scroll">
      <table class="qr-compare-table qc-sb-table">
        <thead>
          <tr>
            <th class="qc-sb-col-name">策略</th>
            <th>状态</th>
            <th>最近运行</th>
            <th class="qc-sb-col-num">选股数</th>
            <th class="qc-sb-col-num">年化</th>
            <th class="qc-sb-col-num">回撤</th>
            <th class="qc-sb-col-num">夏普</th>
            <th class="qc-sb-col-ops">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="r in rows" :key="r.id" :data-sid="r.id">
            <td class="qc-sb-col-name">
              <div class="qc-sb-name">{{ r.name }}</div>
              <div class="qc-sb-id">{{ r.id }}<span v-if="r.version"> · v{{ r.version }}</span></div>
            </td>
            <td><span class="qc-sb-status" :class="statusClass(r)">{{ statusText(r) }}</span></td>
            <td class="text-sm-tertiary">{{ lastRunText(r) }}<span v-if="r.run_count_30d"> · 30日 {{ r.run_count_30d }} 次</span></td>
            <td class="qc-sb-col-num">{{ r.holdings_count || 0 }}</td>
            <td class="qc-sb-col-num" :class="pnlClass(r.last_backtest && r.last_backtest.annual_return)">{{ r.last_backtest ? fmtPct(r.last_backtest.annual_return) : '—' }}</td>
            <td class="qc-sb-col-num" :class="pnlClass(r.last_backtest && r.last_backtest.max_drawdown)">{{ r.last_backtest ? fmtPct(r.last_backtest.max_drawdown) : '—' }}</td>
            <td class="qc-sb-col-num">{{ r.last_backtest ? fmtNum(r.last_backtest.sharpe_ratio) : '—' }}</td>
            <td class="qc-sb-col-ops">
              <el-button size="small" type="primary" plain @click="$emit('backtest', r.id)">回测</el-button>
              <el-button size="small" @click="$emit('detail', r.id)">明细</el-button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
    `,
  };
})();
