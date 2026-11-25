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
                <span class="qc711-v"><el-tag size="small" :type="actionTagType()">{{ result.current_signal.label || S.actionLabel(result.current_signal.action) }}</el-tag></span>
              </div>
              <div class="qc711-kv"><span class="qc711-k">信号强度</span><span class="qc711-v">{{ S.num(result.current_signal.strength, 3) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">目标仓位</span><span class="qc711-v">{{ S.pct(result.current_exposure) }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">数据来源</span><span class="qc711-v">{{ sourceText }}</span></div>
              <!-- v7.16 FR-5: 信号三要素 — 数据截止/生成时间/口径 -->
              <div class="qc711-kv"><span class="qc711-k">信号截至</span><span class="qc711-v">{{ signalAsOf }}</span></div>
              <div class="qc711-kv"><span class="qc711-k">生成于</span><span class="qc711-v">{{ signalGeneratedAt }}</span></div>
              <div v-if="result.degraded" class="qc711-degraded-warn">⚠ 真实行情不可用, 当前为模拟信号, 仅供研究参考, 不构成投资建议。</div>
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

        <!-- 自选股择时矩阵 (v7.13): 自动加载自选股 × 全部择时策略 -->
        <div class="qc711-card qc711-matrix-card">
          <div class="qc711-matrix-head">
            <div class="qc711-card-title">
              <qc-icon name="bar-chart" :size="14" /> 择时信号矩阵
              <span class="qc711-matrix-meta" v-if="matrix && !calendarInherited">
                已评估 {{ matrix.evaluated_count }} / {{ matrix.symbol_count }} 只
                <span v-if="matrixSource === 'calendar'">· 日历新增（池日期 {{ matrix.poolDate || calendarDate }}）</span>
                <span v-else-if="matrix.from_watchlist">· 来源: 自选股列表</span>
                <span v-else>· 显式标的</span>
                <span v-if="matrix.truncated"> · 已评估 {{ matrix.symbol_count }} / 请求 {{ matrix.requested_count }} 只，超出上限已截断</span>
              </span>
            </div>
            <div class="qc711-toolbar">
              <el-radio-group v-model="matrixSource" size="mini" @change="loadMatrix">
                <el-radio-button value="watchlist">自选股</el-radio-button>
                <el-radio-button value="calendar">日历新增</el-radio-button>
              </el-radio-group>
              <el-date-picker v-if="matrixSource === 'calendar'" v-model="calendarDate" type="date"
                              size="mini" value-format="YYYY-MM-DD" placeholder="选池日期"
                              class="qc711-w160" @change="loadMatrix" />
              <el-button size="mini" :loading="matrixLoading" @click="loadMatrix">
                <qc-icon name="refresh" :size="12" /> 刷新矩阵
              </el-button>
            </div>
          </div>
          <!-- v7.16 FR-9: 日历新增口径标注 / 继承态提示 -->
          <div v-if="matrixSource === 'calendar'" class="qc711-note">
            池日期 = {{ calendarDate }}；信号取数 = {{ matrix && matrix.data_sources && matrix.data_sources.join('/') || '实时/模拟' }}（实时行情，非该历史日的信号）。
            <span v-if="calendarInherited">当日沿用上一交易日持仓，无新增股票。</span>
          </div>
          <qc-state-panel v-if="matrixError" type="error" title="矩阵加载失败" :desc="matrixError" @retry="loadMatrix"></qc-state-panel>
          <template v-else-if="matrix">
            <div v-if="!matrix.rows.length" class="qc711-empty">
              <span v-if="matrixSource === 'calendar'">{{ calendarInherited ? '当日沿用上一交易日持仓，无新增股票。' : '该日期无新增股票（或非真实持仓日），请换一个交易日。' }}</span>
              <span v-else>自选股为空 — 在自选股列表添加标的后, 矩阵会自动加载并计算全部择时信号。</span>
            </div>
            <template v-else>
              <div class="qc711-matrix-aggregate">
                <span v-for="st in matrix.strategies" :key="'agg-' + st.id" class="qc711-agg-chip"
                      :title="'该策略在自选股上的共识: ' + aggText(st.id)">
                  {{ st.name }} <b>{{ aggText(st.id) }}</b>
                </span>
              </div>
              <div class="qc711-matrix-tools">
                <el-radio-group v-model="matrixSortMode" size="mini">
                  <el-radio-button value="exposure">按平均仓位</el-radio-button>
                  <el-radio-button value="symbol">按代码</el-radio-button>
                </el-radio-group>
                <el-checkbox v-model="matrixOnlySignaled" size="mini">仅看有信号（仓位 > 0）</el-checkbox>
                <span class="qc711-dim">共 {{ matrixRows.length }} / {{ matrix.rows.length }} 只</span>
              </div>
              <el-table :data="matrixRows" size="mini" border class="qc711-matrix-table">
                <el-table-column label="标的" width="140" fixed="left">
                  <template #default="p">
                    <span class="qc711-sym">{{ p.row.symbol }}</span>
                    <span class="qc711-dim" v-if="p.row.name"> {{ p.row.name }}</span>
                    <div v-if="p.row.error" class="qc711-matrix-err">{{ p.row.error }}</div>
                  </template>
                </el-table-column>
                <el-table-column v-for="st in matrix.strategies" :key="st.id"
                                 :prop="'signals.' + st.id" :label="st.name"
                                 min-width="68" align="center">
                  <!-- v7.19 (T3.4): 表头横排简称 + hover 全名（全称会让 8 列一起换行/撑爆） -->
                  <template #header>
                    <span class="qc711-matrix-th" :title="st.name">{{ shortStrategyName(st.name) }}</span>
                  </template>
                  <template #default="p">
                    <div v-if="p.row.signals && p.row.signals[st.id]" class="qc711-cell"
                         :title="cellTitle(st, p.row.signals[st.id])">
                      <span class="qc711-sig" :class="'tone-' + (p.row.signals[st.id].tone || 'flat')">{{ p.row.signals[st.id].label || S.actionLabel(p.row.signals[st.id].action) }}</span>
                      <span v-if="p.row.signals[st.id].strength_band" class="qc711-sig-band">{{ p.row.signals[st.id].strength_band }}</span>
                    </div>
                    <span v-else class="qc711-dim">—</span>
                  </template>
                </el-table-column>
                <el-table-column label="平均仓位" width="84" align="center">
                  <template #default="p">{{ S.pct(p.row.avg_exposure, 0) }}</template>
                </el-table-column>
              </el-table>
              <div class="qc711-note">
                单元格 = 择时动作文字 + 信号强度档（T+1 生效口径）；悬停看仓位系数与判定理由；行末 = 平均仓位。
                <span v-if="simulatedWarn">⚠ 数据源含模拟数据（真实行情不可用），信号仅供研究参考。</span>
                <span v-else>Overlay 契约不变：矩阵只承载仓位系数，不产持仓、不进日历。</span>
              </div>
            </template>
          </template>
          <div v-else class="qc711-empty">正在自动加载自选股矩阵…</div>
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
                <template #default="p"><el-tag size="small" :type="actionTagTypeOf(p.row.action)">{{ p.row.label || S.actionLabel(p.row.action) }}</el-tag></template>
              </el-table-column>
              <el-table-column label="价格" width="90">
                <template #default="p">{{ S.num(p.row.price, 2) }}</template>
              </el-table-column>
              <el-table-column label="强度" width="80">
                <template #default="p">{{ S.num(p.row.strength, 2) }}</template>
              </el-table-column>
              <el-table-column label="仓位" width="80">
                <template #default="p">{{ S.pct(p.row.exposure) }}</template>
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

      // v7.16 FR-5: 时间戳展示 (北京时间)
      const signalAsOf = computed(() => {
        const a = result.value && result.value.as_of;
        return a ? ('信号截至 ' + a + (result.value.use_prev_day_signal ? '（基于上一交易日）' : '')) : '—';
      });
      const signalGeneratedAt = computed(() => {
        const g = result.value && result.value.generated_at;
        if (!g) return '—';
        const d = new Date(g);
        return isNaN(d.getTime()) ? String(g) : d.toLocaleString('zh-CN', { hour12: false });
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

      // ── v7.13: 自选股择时矩阵 ──────────────────────────────
      // v7.20: 单元格改为文字+强度档(后端字典下发), 弃旧色点/仓位条/百分比。
      const matrixSortMode = ref('exposure');   // exposure | symbol
      const matrixOnlySignaled = ref(false);
      const matrix = ref(null);
      const matrixLoading = ref(false);
      const matrixError = ref('');
      // v7.16 FR-9: 数据源 tab — watchlist(自选股) / calendar(日历新增)
      const matrixSource = ref('watchlist');

      // 策略简称：去括号/后缀, 4 字封顶, 全名走 title
      function shortStrategyName(name) {
        // 直接 slice(0,4) 会切出「布林带择」「顺势宝(」这种半截词, 更难读。
        var raw = String(name || '').trim();
        var n = raw.replace(/[（(].*$/, '').replace(/(择时|信号|策略|选股|模型|系统)$/g, '').trim();
        if (!n) n = raw;
        n = n.replace(/plus$/i, '+');
        return n.length > 4 ? n.slice(0, 4) : n;
      }
      const matrixRows = computed(function () {
        var m = matrix.value;
        if (!m || !m.rows) return [];
        var rows = m.rows.slice();
        if (matrixOnlySignaled.value) {
          rows = rows.filter(function (r) {
            var sig = r.signals || {};
            return Object.keys(sig).some(function (k) { return sig[k] && sig[k].exposure > 0; });
          });
        }
        if (matrixSortMode.value === 'symbol') {
          rows.sort(function (a, b) { return String(a.symbol) < String(b.symbol) ? -1 : 1; });
        } else {
          rows.sort(function (a, b) {
            var ae = Number(a.avg_exposure) || 0;
            var be = Number(b.avg_exposure) || 0;
            if (be !== ae) return be - ae;                       // 平均仓位倒序
            var ac = Number(a.hold_count) || 0;
            var bc = Number(b.hold_count) || 0;
            return bc - ac;                                      // 同等仓位下"更多策略持有"优先
          });
        }
        return rows;
      });
      const calendarDate = ref(localToday());
      const calendarInherited = ref(false);
      function localToday() {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      }

      const simulatedWarn = computed(() => {
        const srcs = (matrix.value && matrix.value.data_sources) || [];
        return srcs.indexOf('simulated') !== -1;
      });

      // 策略共识摘要: 平均仓位 + top2 动作计数
      function aggText(sid) {
        const agg = matrix.value && matrix.value.aggregate && matrix.value.aggregate[sid];
        if (!agg || agg.avg_exposure === null || agg.avg_exposure === undefined) return '—';
        const counts = agg.action_counts || {};
        const labels = agg.action_labels || {};
        const parts = Object.keys(counts)
          .sort((a, b) => counts[b] - counts[a])
          .slice(0, 2)
          .map(a => (labels[a] || S_().actionLabel(a)) + '×' + counts[a]);
        return parts.length ? parts.join('/') : '—';
      }
      // v7.20: 单元格 tooltip — 动作语义 + 强度 + 仓位系数(辅助) + 判定理由
      function cellTitle(st, cell) {
        const label = cell.label || S_().actionLabel(cell.action);
        const band = cell.strength_band ? ' · 强度' + cell.strength_band : '';
        const exp = cell.exposure_note || ('仓位 ' + S_.pct(cell.exposure, 0));
        const msg = cell.message ? ' · ' + cell.message : '';
        return st.name + ' · ' + label + band + ' · ' + exp + msg;
      }

      async function loadMatrix() {
        matrixLoading.value = true;
        matrixError.value = '';
        calendarInherited.value = false;
        try {
          if (matrixSource.value === 'calendar') {
            // v7.16 FR-9: 先取日历新增股票, 再传 symbols 给矩阵 (后端零改动)
            const day = await S_().api('/api/view/day/' + encodeURIComponent(calendarDate.value) + '?status=new');
            calendarInherited.value = !!(day && day.data_inherited);
            const codes = calendarInherited.value ? [] : ((day && day.stocks) || [])
              .map(s => s.code || s.stock).filter(Boolean);
            const empty = { rows: [], strategies: [], aggregate: {}, evaluated_count: 0,
                            symbol_count: 0, data_sources: [], poolDate: calendarDate.value };
            if (!codes.length) {
              matrix.value = empty;
              return;
            }
            const m = await S_().post('/api/timing/matrix', { symbols: codes });
            m.poolDate = calendarDate.value;
            matrix.value = m;
          } else {
            // 不传 symbols: 后端自动读当前用户自选股
            const m = await S_().post('/api/timing/matrix', {});
            m.poolDate = null;
            matrix.value = m;
          }
        } catch (e) {
          matrixError.value = S_().errText(e);
          matrix.value = null;
        } finally {
          matrixLoading.value = false;
        }
      }

      onMounted(async () => {
        await loadStrategies();
        loadMatrix();  // 自动加载: 进雷达即出矩阵
      });

      return {
        // v7.19 (T3.4): 矩阵重排
        matrixSortMode, matrixOnlySignaled, matrixRows, shortStrategyName,
        S: window.__quantModules.v711,
        symbol, sid, strategies, evaluating, stateLoading, error, result, mktState,
        points, perf, timeline, sourceText,
        actionTagType, actionTagTypeOf,
        loadStrategies, runEvaluate, loadState,
        matrix, matrixLoading, matrixError, simulatedWarn, aggText, cellTitle, loadMatrix,
        matrixSource, calendarDate, calendarInherited,
        signalAsOf, signalGeneratedAt,
      };
    },
  };
})();
