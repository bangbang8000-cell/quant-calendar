// quant-calendar v7.11 (FR-7.11-1): 择时雷达 — 消费 /api/timing/* (v7.5 交付的 Overlay 域)
// 产物口径: 8 个择时策略只输出 TimingSignal -> 仓位系数, 不产持仓矩阵、不进选股日历。
// 本面板为只读研究视图: 不写库、不生成持仓, 仅在页脚双写该契约, 避免误读为选股信号。
(function () {
  const { ref, computed, onMounted } = Vue;
  const S = () => window.__quantModules.v711;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.TimingRadar = {
    name: 'qc-timing-radar',
    template: `
      <div class="qc711-panel">
        <div class="qc711-head">
          <div class="card-title"><qc-icon name="gauge" :size="14" /> 择时雷达</div>
          <span class="qc711-hint">Overlay 口径 · 只输出仓位系数 · 不产持仓矩阵 / 不进日历</span>
        </div>

        <div class="qc711-toolbar">
          <el-input v-model="symbol" size="small" placeholder="标的代码，如 000001.SH"
                    class="qc711-w160" @keyup.enter.native="runEvaluate" />
          <el-select v-model="sid" size="small" placeholder="选择择时策略" class="qc711-w260" filterable>
            <el-option v-for="s in strategies" :key="s.id" :label="s.name + '（' + s.id + '）'" :value="s.id" />
          </el-select>
          <el-button type="primary" size="small" :loading="evaluating" @click="runEvaluate">
            <qc-icon name="play" :size="14" /> 评估信号
          </el-button>
          <el-button size="small" :loading="stateLoading" @click="loadState">
            <qc-icon name="refresh" :size="14" /> 市场状态
          </el-button>
        </div>

        <qc-state-panel v-if="error" type="error" title="择时评估失败" :desc="error" @retry="runEvaluate"></qc-state-panel>

        <div v-else class="qc711-grid-2">
          <!-- 当前信号 -->
          <div class="qc711-card">
            <div class="qc711-card-title">当前信号</div>
            <template v-if="result && result.current_signal">
              <div class="qc711-kv">
                <span class="qc711-k">动作</span>
                <span class="qc711-v"><el-tag size="small" :type="actionTagType()">{{ S.actionLabel(result.current_signal.action) }}</el-tag></span>
              </div>
              <div class="qc711-kv"><span class="qc711-k">信号强度</span><span class="qc711-v">{{ S.num(result.current_signal.strength, 3) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">目标仓位</span><span class="qc711-v">{{ S.pct(result.current_exposure) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">数据来源</span><span class="qc711-v">{{ sourceText }}</span></div>
              <div class="qc711-note">{{ result.current_signal.message || '—' }}</div>
            </template>
            <div v-else class="qc711-empty">选择策略后点「评估信号」；信号次日生效（T+1 口径）。</div>
          </div>

          <!-- 市场状态 -->
          <div class="qc711-card">
            <div class="qc711-card-title">市场状态（HMM 四态）</div>
            <template v-if="mktState">
              <div class="qc711-kv">
                <span class="qc711-k">状态</span>
                <span class="qc711-v">
                  <span class="qc711-badge" :class="S.stateTone(mktState.state)">{{ S.stateLabel(mktState.state) }}</span>
                  <span class="qc711-dim">{{ mktState.engine === 'hmmlearn' ? 'HMM' : '启发式' }}</span>
                </span>
              </div>
              <div class="qc711-kv"><span class="qc711-k">置信度</span><span class="qc711-v">{{ S.pct(mktState.confidence) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">市场温度</span><span class="qc711-v">{{ S.num(mktState.temperature, 1) }} / 100</span></div>
              <div class="qc711-kv"><span class="qc711-k">ADX 档位</span><span class="qc711-v">{{ mktState.adx_tier || '—' }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">状态仓位上限</span><span class="qc711-v">{{ S.pct(mktState.exposure_cap) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">温度仓位系数</span><span class="qc711-v">{{ S.pct(mktState.temperature_exposure) }}</span></div>
            </template>
            <div v-else class="qc711-empty">尚未拉取。市场状态用于解释择时信号所处环境，不改写信号。</div>
          </div>
        </div>

        <!-- 绩效 + 买卖点 -->
        <template v-if="result">
          <div class="qc711-card">
            <div class="qc711-card-title">研究预览绩效</div>
            <div class="qc711-stats">
              <div class="qc711-stat"><div class="qc711-stat-v" :class="S.pnlTone(perf.total_return)">{{ S.pct(perf.total_return) }}</div><div class="qc711-stat-l">区间收益</div></div>
              <div class="qc711-stat"><div class="qc711-stat-v qc711-tone-down">{{ S.pct(perf.max_drawdown) }}</div><div class="qc711-stat-l">最大回撤</div></div>
              <div class="qc711-stat"><div class="qc711-stat-v">{{ perf.trade_count || 0 }}</div><div class="qc711-stat-l">信号点数</div></div>
              <div class="qc711-stat"><div class="qc711-stat-v">{{ result.point_count || 0 }}</div><div class="qc711-stat-l">买卖点</div></div>
            </div>
            <div class="qc711-note">{{ perf.note || '研究预览口径，最终绩效以共用回测引擎为准。' }}</div>
          </div>

          <div class="qc711-card">
            <div class="qc711-card-title">买卖点序列（最近 {{ Math.min(points.length, 12) }} / 共 {{ points.length }}）</div>
            <el-table v-if="points.length" :data="points.slice(0, 12)" size="small" border>
              <el-table-column prop="date" label="日期" width="110"></el-table-column>
              <el-table-column label="动作" width="80">
                <template slot-scope="p"><el-tag size="small" :type="actionTagTypeOf(p.row.action)">{{ S.actionLabel(p.row.action) }}</el-tag></template>
              </el-table-column>
              <el-table-column label="价格" width="90">
                <template slot-scope="p">{{ S.num(p.row.price, 2) }}</template>
              </el-table-column>
              <el-table-column label="强度" width="80">
                <template slot-scope="p">{{ S.num(p.row.strength, 2) }}</template>
              </el-table-column>
              <el-table-column label="仓位" width="80">
                <template slot-scope="p">{{ S.pct(p.row.exposure) }}</template>
              </el-table-column>
              <el-table-column prop="message" label="说明" show-overflow-tooltip></el-table-column>
            </el-table>
            <div v-else class="qc711-empty">该策略在所选区间内未触发买卖点（形态类信号稀疏属正常）。</div>
          </div>
        </template>

        <!-- 状态时间轴 -->
        <div v-if="timeline.length" class="qc711-card">
          <div class="qc711-card-title">状态时间轴（最近 {{ timeline.length }} 个交易日）</div>
          <div class="qc711-timeline">
            <span v-for="t in timeline" :key="t.date" class="qc711-tl-cell" :class="S.stateTone(t.state)"
                  :title="t.date + ' · ' + S.stateLabel(t.state) + ' · 置信度 ' + S.pct(t.confidence)"></span>
          </div>
          <div class="qc711-note">{{ timeline[0] && timeline[0].date }} → {{ timeline[timeline.length - 1] && timeline[timeline.length - 1].date }}</div>
        </div>
      </div>
    `,
    setup() {
      const symbol = ref(localStorage.getItem('qc711_timing_symbol') || '000001.SH');
      const sid = ref('');
      const strategies = ref([]);
      const evaluating = ref(false);
      const stateLoading = ref(false);
      const error = ref('');
      const result = ref(null);
      const mktState = ref(null);

      function S_() { return window.__quantModules.v711; }

      const points = computed(() => (result.value && result.value.points) || []);
      const perf = computed(() => (result.value && result.value.performance) || {});
      const timeline = computed(() => (mktState.value && mktState.value.timeline) || []);
      const sourceText = computed(() => {
        const map = { realtime: '真实行情', simulated: '模拟数据（真实行情不可用）', payload: '请求内 K 线' };
        const s = result.value && result.value.data_source;
        return map[s] || s || '—';
      });

      function actionTagType() { return tagOf(result.value && result.value.current_signal && result.value.current_signal.action); }
      function actionTagTypeOf(a) { return tagOf(a); }
      function tagOf(a) {
        if (a === 'buy' || a === 'add') return 'danger';
        if (a === 'sell' || a === 'reduce') return 'success';
        return 'info';
      }

      async function loadStrategies() {
        try {
          const j = await S_().api('/api/timing/strategies');
          strategies.value = (j && j.strategies) || [];
          if (!sid.value && strategies.value.length) sid.value = strategies.value[0].id;
        } catch (e) {
          error.value = S_().errText(e);
        }
      }

      async function runEvaluate() {
        if (!sid.value) { ElementPlus.ElMessage.warning('请先选择择时策略'); return; }
        evaluating.value = true;
        error.value = '';
        try {
          localStorage.setItem('qc711_timing_symbol', symbol.value || '');
          result.value = await S_().post('/api/timing/evaluate', { sid: sid.value, symbol: symbol.value });
        } catch (e) {
          error.value = S_().errText(e);
          result.value = null;
        } finally {
          evaluating.value = false;
        }
      }

      async function loadState() {
        stateLoading.value = true;
        try {
          mktState.value = await S_().post('/api/timing/state', { symbol: symbol.value });
        } catch (e) {
          ElementPlus.ElMessage.error(S_().errText(e));
        } finally {
          stateLoading.value = false;
        }
      }

      onMounted(loadStrategies);

      return {
        S: window.__quantModules.v711,
        symbol, sid, strategies, evaluating, stateLoading, error, result, mktState,
        points, perf, timeline, sourceText,
        actionTagType, actionTagTypeOf,
        loadStrategies, runEvaluate, loadState,
      };
    },
  };
})();
