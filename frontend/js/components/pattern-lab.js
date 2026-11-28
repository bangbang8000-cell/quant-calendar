// quant-calendar v7.11 (FR-7.11-2): 形态匹配实验室 — 消费 /api/pattern/* (v7.6 交付的 DTW 域)
// 四维特征: trend_structure / kdj_state / volume_pattern / price_shape, 加权 DTW 打分。
// 产物口径: 只产分数 + 四维 breakdown; 默认不产持仓矩阵、不进日历(materialize 才给等权建议, 本面板不开启)。
(function () {
  const { ref, computed, onMounted } = Vue;
  function S() { return window.__quantModules.v711; }

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.PatternLab = {
    name: 'qc-pattern-lab',
    template: `
      <div class="qc711-panel">
        <qc-page-head icon="dna" title="形态匹配实验室" desc="四维加权 DTW · 分数 + breakdown · 不产持仓矩阵 / 不进日历"></qc-page-head>

        <div class="qc711-grid-2">
          <!-- 案例库 -->
          <div class="qc711-card">
            <div class="qc711-card-title">
              案例库（{{ cases.length }}）
              <el-button size="small" type="text" :loading="caseLoading" @click="loadCases">刷新</el-button>
            </div>
            <el-table v-if="cases.length" :data="cases" size="small" border max-height="280">
              <el-table-column prop="case_id" label="案例" width="150" show-overflow-tooltip></el-table-column>
              <el-table-column prop="name" label="名称" width="120" show-overflow-tooltip></el-table-column>
              <el-table-column prop="symbol" label="代码" width="100"></el-table-column>
              <el-table-column prop="breakout_date" label="突破日" width="100"></el-table-column>
              <el-table-column label="特征" width="70">
                <template #default="c">
                  <el-tag size="small" :type="hasFeatures(c.row) ? 'success' : 'info'">{{ hasFeatures(c.row) ? '有' : '缺' }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="70">
                <template #default="c">
                  <el-button size="small" type="text" @click="togglePick(c.row.case_id)">{{ picked.indexOf(c.row.case_id) >= 0 ? '取消' : '选用' }}</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div v-else class="qc711-empty">案例库为空。先在右侧「新建案例」用真实行情提取特征入库。</div>
            <div class="qc711-note">已选用 {{ picked.length }} 个案例参与匹配；未选用时后端默认取最近 50 个案例。</div>
          </div>

          <!-- 新建案例 -->
          <div class="qc711-card">
            <div class="qc711-card-title">新建案例（从行情提取特征）</div>
            <div class="qc711-form">
              <el-input v-model="form.name" size="small" placeholder="案例名，如 缩量回踩起爆" class="qc711-w200" />
              <el-input v-model="form.symbol" size="small" placeholder="代码，如 600000.SH" class="qc711-w140" />
              <el-date-picker v-model="form.breakout_date" size="small" type="date" value-format="yyyy-MM-dd"
                              placeholder="突破日" class="qc711-w140"></el-date-picker>
              <el-input-number v-model="form.lookback_days" size="small" :min="5" :max="120" :step="5" class="qc711-w120"></el-input-number>
              <el-input v-model="form.tags" size="small" placeholder="标签，逗号分隔" class="qc711-w180" />
              <el-button size="small" type="primary" :loading="saving" @click="saveCase">提取并入库</el-button>
            </div>
            <div class="qc711-note">特征由后端按所选区间真实 K 线提取；提取不到数据时如实报错，不写入空特征案例。</div>
          </div>
        </div>

        <!-- 匹配 -->
        <div class="qc711-card">
          <div class="qc711-card-title">相似度匹配</div>
          <!-- v7.26 (FR-13): 候选池来源 — 自选股一键填充 / 日历新增 / 全市场 TopN / 手工 -->
          <div class="qc711-form">
            <span class="qc711-label">候选池</span>
            <el-radio-group v-model="poolSource" size="mini" @change="onPoolSourceChange">
              <el-radio-button value="watchlist">自选股</el-radio-button>
              <el-radio-button value="calendar">日历新增</el-radio-button>
              <el-radio-button value="market">全市场</el-radio-button>
              <el-radio-button value="manual">手工</el-radio-button>
            </el-radio-group>
            <el-date-picker v-if="poolSource === 'calendar'" v-model="poolDate" type="date" size="mini"
                            value-format="YYYY-MM-DD" placeholder="池日期" class="qc711-w140"></el-date-picker>
            <template v-if="poolSource === 'market'">
              <span class="qc711-label">TopN</span>
              <el-input-number v-model="marketTopN" size="mini" :min="10" :max="500" :step="10" class="qc711-w120"></el-input-number>
            </template>
            <el-button v-if="poolSource !== 'manual'" size="mini" :loading="poolLoading" @click="loadPool">
              <qc-icon name="download" :size="12" /> 载入候选
            </el-button>
            <span v-if="candidateCount" class="qc711-dim">
              候选 {{ candidateCount }} 只<span v-if="poolTruncated">（全市场前 {{ candidateCount }} / 共 {{ poolRequested }} 只）</span>
            </span>
          </div>
          <div class="qc711-form">
            <el-input v-model="candidates" size="small" type="textarea" :rows="2" class="qc711-grow"
                      :placeholder="candidatesPlaceholder"></el-input>
          </div>
          <div class="qc711-form">
            <span class="qc711-label">回看</span>
            <el-input-number v-model="lookback" size="small" :min="5" :max="120" :step="5" class="qc711-w120"></el-input-number>
            <span class="qc711-label">阈值</span>
            <el-input-number v-model="minSim" size="small" :min="0" :max="100" :step="5" class="qc711-w120"></el-input-number>
            <span class="qc711-label">TopN</span>
            <el-input-number v-model="topN" size="small" :min="1" :max="200" :step="5" class="qc711-w120"></el-input-number>
            <el-button size="small" type="primary" :loading="matching" @click="runMatch">
              <qc-icon name="search" :size="14" /> 开始匹配
            </el-button>
          </div>

          <!-- v7.26 (FR-13): 异步任务进度 — 大候选池不假死 -->
          <div v-if="matching" class="qc711-note" role="status">
            匹配中 {{ matchProgress }}%<span v-if="matchMessage"> · {{ matchMessage }}</span>
          </div>

          <qc-state-panel v-if="matchError" type="error" title="匹配失败" :desc="matchError" @retry="runMatch"></qc-state-panel>

          <template v-else-if="matchResult">
            <div class="qc711-note">命中 {{ matchResult.count }} 只 / 案例 {{ matchResult.case_count }} 个 · 阈值 {{ matchResult.min_similarity }} · 引擎权重 {{ weightText }}</div>
            <div v-if="partialEval" class="qc711-note qc711-tone-warn">
              已评估 {{ matchResult.evaluated_count }} / {{ matchResult.requested_count }} 只，未评估的候选数据不足或超时（不造分）。
            </div>
            <el-table v-if="matchRows.length" :data="matchRows" size="small" border max-height="320">
              <el-table-column type="index" label="#" width="50"></el-table-column>
              <el-table-column prop="symbol" label="代码" width="110"></el-table-column>
              <el-table-column prop="case_name" label="最像案例" width="140" show-overflow-tooltip></el-table-column>
              <el-table-column label="总分" width="80">
                <template #default="m"><span class="qc711-strong">{{ S.num(m.row.total_score, 1) }}</span></template>
              </el-table-column>
              <el-table-column label="趋势" width="70"><template #default="m">{{ dim(m.row, 'trend_structure') }}</template></el-table-column>
              <el-table-column label="KDJ" width="70"><template #default="m">{{ dim(m.row, 'kdj_state') }}</template></el-table-column>
              <el-table-column label="量能" width="70"><template #default="m">{{ dim(m.row, 'volume_pattern') }}</template></el-table-column>
              <el-table-column label="形态" width="70"><template #default="m">{{ dim(m.row, 'price_shape') }}</template></el-table-column>
              <el-table-column label="缺维" width="90">
                <template #default="m">{{ (m.row.missing_dimensions || []).length ? m.row.missing_dimensions.join(',') : '无' }}</template>
              </el-table-column>
              <el-table-column label="引擎" width="100"><template #default="p">{{ LX.engine(p.row.engine) }}</template></el-table-column>
              <!-- v7.26 (FR-13): 高分结果一键加入自选 / 组合 -->
              <el-table-column label="操作" width="130" fixed="right">
                <template #default="m">
                  <el-button size="mini" type="text" @click="addWatch(m.row.symbol)">加自选</el-button>
                  <el-button size="mini" type="text" @click="addPortfolio(m.row.symbol)">加组合</el-button>
                </template>
              </el-table-column>
            </el-table>
            <div v-else class="qc711-empty">无候选达到阈值。可下调阈值或放宽回看区间（不达标不造分）。</div>
          </template>
          <div v-else class="qc711-empty">输入候选代码后开始匹配；结果按总分降序。</div>
        </div>
      </div>
    `,
    setup() {
      const cases = ref([]);
      const picked = ref([]);
      const caseLoading = ref(false);
      const saving = ref(false);
      const matching = ref(false);
      const matchError = ref('');
      const matchResult = ref(null);
      const candidates = ref('');
      const lookback = ref(25);
      const minSim = ref(60);
      const topN = ref(20);
      const form = ref({ name: '', symbol: '', breakout_date: '', lookback_days: 25, tags: '' });
      // v7.26 (FR-13): 候选池来源 + 异步进度
      const poolSource = ref('watchlist');
      const poolDate = ref(localToday());
      const marketTopN = ref(50);
      const poolLoading = ref(false);
      const candidateCount = ref(0);
      const poolTruncated = ref(false);
      const poolRequested = ref(0);
      const matchProgress = ref(0);
      const matchMessage = ref('');

      function localToday() {
        const d = new Date();
        return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      }
      const candidatesPlaceholder = computed(() => {
        if (poolSource.value === 'watchlist') return '选「自选股」后点「载入候选」，自动填入自选列表（也可手工追加）';
        if (poolSource.value === 'calendar') return '选「日历新增」后点「载入候选」，自动填入当日新增股票';
        if (poolSource.value === 'market') return '选「全市场」后点「载入候选」，按 TopN 截取本地股票清单';
        return '候选代码，逗号或换行分隔，如 600000.SH,000001.SZ';
      });
      const partialEval = computed(() => {
        const r = matchResult.value;
        if (!r) return false;
        const e = Number(r.evaluated_count);
        const q = Number(r.requested_count);
        return isFinite(e) && isFinite(q) && q > 0 && e < q;
      });

      const matchRows = computed(() => (matchResult.value && matchResult.value.items) || []);
      const weightText = computed(() => {
        const w = (matchResult.value && matchResult.value.weights) || {};
        return Object.keys(w).map(function (k) { return k + ' ' + w[k]; }).join(' / ') || '—';
      });

      function hasFeatures(row) {
        const f = row && row.features;
        if (!f) return false;
        return Object.keys(f).length > 0;
      }
      function dim(row, key) {
        const b = (row && row.breakdown) || {};
        return b[key] === undefined || b[key] === null ? '—' : Number(b[key]).toFixed(1);
      }
      function togglePick(id) {
        const i = picked.value.indexOf(id);
        if (i >= 0) picked.value.splice(i, 1);
        else picked.value.push(id);
      }

      async function loadCases() {
        caseLoading.value = true;
        try {
          const j = await S().api('/api/pattern/cases?limit=100');
          cases.value = (j && j.items) || [];
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          caseLoading.value = false;
        }
      }

      async function saveCase() {
        const f = form.value;
        if (!f.name.trim()) { ElementPlus.ElMessage.warning('请填写案例名'); return; }
        if (!f.symbol.trim()) { ElementPlus.ElMessage.warning('请填写标的代码'); return; }
        saving.value = true;
        try {
          const body = {
            name: f.name.trim(),
            symbol: f.symbol.trim(),
            breakout_date: f.breakout_date || '',
            lookback_days: f.lookback_days || 25,
            tags: String(f.tags || '').split(',').map(function (x) { return x.trim(); }).filter(Boolean),
            description: '',
          };
          const j = await S().post('/api/pattern/cases/from-symbol', body);
          ElementPlus.ElMessage.success('案例已入库：' + ((j && j.case_id) || ''));
          form.value = { name: '', symbol: '', breakout_date: '', lookback_days: 25, tags: '' };
          await loadCases();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          saving.value = false;
        }
      }

      function parseCandidates() {
        return String(candidates.value || '')
          .split(/[\s,，;；]+/).map(function (x) { return x.trim(); }).filter(Boolean);
      }

      // v7.26 (FR-13): 一键填充候选池 — 自选股候选数 = 自选数
      async function onPoolSourceChange() {
        if (poolSource.value === 'manual') return;
        await loadPool();
      }

      async function loadPool() {
        if (poolSource.value === 'manual') return;
        poolLoading.value = true;
        matchError.value = '';
        try {
          const q = '/api/pattern/candidates?source=' + encodeURIComponent(poolSource.value)
            + '&date=' + encodeURIComponent(poolDate.value || '')
            + '&top_n=' + encodeURIComponent(marketTopN.value || 50);
          const j = await S().api(q);
          const list = (j && j.symbols) || [];
          candidates.value = list.join(',');
          candidateCount.value = list.length;
          poolTruncated.value = !!(j && j.truncated);
          poolRequested.value = (j && j.requested) || list.length;
          if (!list.length) {
            ElementPlus.ElMessage.warning(
              poolSource.value === 'watchlist' ? '自选股为空，请先在自选页添加标的' : '该来源暂无候选标的');
          }
        } catch (e) {
          matchError.value = S().errText(e);
        } finally {
          poolLoading.value = false;
        }
      }

      async function pollJob(jobId) {
        for (let i = 0; i < 900; i += 1) {
          const r = await S().api('/api/jobs/' + encodeURIComponent(jobId));
          const d = (r && r.data) || {};
          matchProgress.value = Number(d.progress) || 0;
          if (d.message) matchMessage.value = d.message;
          if (d.status === 'success') {
            matchResult.value = d.result || {};
            matchMessage.value = '';
            return;
          }
          if (d.status === 'failed') throw new Error(d.error || '匹配任务失败');
          if (d.status === 'cancelled') throw new Error('匹配任务已取消');
          await new Promise(function (res) { setTimeout(res, 800); });
        }
        throw new Error('匹配超时（10 分钟），请缩小候选池后重试');
      }

      // v7.26 (FR-13): 统一走异步任务 + 轮询进度 (大候选池不假死, 支持暂停/取消)
      async function runMatch() {
        let list = parseCandidates();
        if (!list.length && poolSource.value !== 'manual') {
          await loadPool();
          list = parseCandidates();
        }
        if (!list.length) { ElementPlus.ElMessage.warning('请先载入或填写候选代码'); return; }
        matching.value = true;
        matchError.value = '';
        matchResult.value = null;
        matchProgress.value = 0;
        matchMessage.value = '提交任务…';
        try {
          const job = await S().post('/api/pattern/match/async', {
            candidates: list.map(function (s) { return { symbol: s }; }),
            case_ids: picked.value,
            lookback_days: lookback.value || 25,
            min_similarity: minSim.value,
            top_n: topN.value,
          });
          if (!job || !job.job_id) throw new Error('异步任务提交失败');
          await pollJob(job.job_id);
        } catch (e) {
          matchError.value = S().errText(e);
          matchResult.value = null;
        } finally {
          matching.value = false;
        }
      }

      async function addWatch(code) {
        if (!code) return;
        try {
          await S().post('/api/watchlist', { code: code });
          ElementPlus.ElMessage.success(code + ' 已加入自选');
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function addPortfolio(code) {
        if (!code) return;
        try {
          await S().post('/api/portfolio/positions/batch', { stocks: [{ stock_code: code, stock_name: '' }] });
          ElementPlus.ElMessage.success(code + ' 已登记到组合');
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      onMounted(loadCases);

      return {
        S: window.__quantModules.v711,
        // v7.19 (FR-9): 引擎枚举中文化（fastdtw → 快速DTW）
        LX: (window.__quantModules && window.__quantModules.researchLexicon)
          || { engine: function (k) { return k; } },
        cases, picked, caseLoading, saving, matching, matchError, matchResult,
        candidates, lookback, minSim, topN, form,
        matchRows, weightText,
        poolSource, poolDate, marketTopN, poolLoading, candidateCount,
        poolTruncated, poolRequested, candidatesPlaceholder,
        matchProgress, matchMessage, partialEval,
        onPoolSourceChange, loadPool, addWatch, addPortfolio,
        hasFeatures, dim, togglePick, loadCases, saveCase, runMatch,
      };
    },
  };
})();
