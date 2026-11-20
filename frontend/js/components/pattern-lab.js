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
        <div class="qc711-head">
          <div class="card-title"><qc-icon name="dna" :size="14" /> 形态匹配实验室</div>
          <span class="qc711-hint">四维加权 DTW · 分数 + breakdown · 不产持仓矩阵 / 不进日历</span>
        </div>

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
                <template slot-scope="c">
                  <el-tag size="small" :type="hasFeatures(c.row) ? 'success' : 'info'">{{ hasFeatures(c.row) ? '有' : '缺' }}</el-tag>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="70">
                <template slot-scope="c">
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
          <div class="qc711-form">
            <el-input v-model="candidates" size="small" type="textarea" :rows="2" class="qc711-grow"
                      placeholder="候选代码，逗号或换行分隔，如 600000.SH,000001.SZ"></el-input>
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

          <qc-state-panel v-if="matchError" type="error" title="匹配失败" :desc="matchError" @retry="runMatch"></qc-state-panel>

          <template v-else-if="matchResult">
            <div class="qc711-note">命中 {{ matchResult.count }} 只 / 案例 {{ matchResult.case_count }} 个 · 阈值 {{ matchResult.min_similarity }} · 引擎权重 {{ weightText }}</div>
            <el-table v-if="matchRows.length" :data="matchRows" size="small" border max-height="320">
              <el-table-column type="index" label="#" width="50"></el-table-column>
              <el-table-column prop="symbol" label="代码" width="110"></el-table-column>
              <el-table-column prop="case_name" label="最像案例" width="140" show-overflow-tooltip></el-table-column>
              <el-table-column label="总分" width="80">
                <template slot-scope="m"><span class="qc711-strong">{{ S.num(m.row.total_score, 1) }}</span></template>
              </el-table-column>
              <el-table-column label="趋势" width="70"><template slot-scope="m">{{ dim(m.row, 'trend_structure') }}</template></el-table-column>
              <el-table-column label="KDJ" width="70"><template slot-scope="m">{{ dim(m.row, 'kdj_state') }}</template></el-table-column>
              <el-table-column label="量能" width="70"><template slot-scope="m">{{ dim(m.row, 'volume_pattern') }}</template></el-table-column>
              <el-table-column label="形态" width="70"><template slot-scope="m">{{ dim(m.row, 'price_shape') }}</template></el-table-column>
              <el-table-column label="缺维" width="90">
                <template slot-scope="m">{{ (m.row.missing_dimensions || []).length ? m.row.missing_dimensions.join(',') : '无' }}</template>
              </el-table-column>
              <el-table-column prop="engine" label="引擎" width="100"></el-table-column>
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

      async function runMatch() {
        const list = String(candidates.value || '')
          .split(/[\s,，;；]+/).map(function (x) { return x.trim(); }).filter(Boolean);
        if (!list.length) { ElementPlus.ElMessage.warning('请填写候选代码'); return; }
        matching.value = true;
        matchError.value = '';
        try {
          matchResult.value = await S().post('/api/pattern/match', {
            candidates: list.map(function (s) { return { symbol: s }; }),
            case_ids: picked.value,
            lookback_days: lookback.value || 25,
            min_similarity: minSim.value,
            top_n: topN.value,
          });
        } catch (e) {
          matchError.value = S().errText(e);
          matchResult.value = null;
        } finally {
          matching.value = false;
        }
      }

      onMounted(loadCases);

      return {
        S: window.__quantModules.v711,
        cases, picked, caseLoading, saving, matching, matchError, matchResult,
        candidates, lookback, minSim, topN, form,
        matchRows, weightText,
        hasFeatures, dim, togglePick, loadCases, saveCase, runMatch,
      };
    },
  };
})();
