// quant-calendar v7.11 (FR-7.11-5): 执行计划面板 — 消费 /api/execution/plans* (v7.8 交付的执行域)
// 状态机: plan draft→active→closed / draft|active→cancelled; leg pending→filled|cancelled。
// 成交回写复用组合存储(不建第二份持仓), 故成交后持仓变化以组合页为准。
(function () {
  const { ref, computed, onMounted } = Vue;
  function S() { return window.__quantModules.v711; }

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ExecPlansPanel = {
    name: 'qc-exec-plans',
    template: `
      <div class="qc711-panel">
        <div class="qc711-head">
          <div class="card-title"><qc-icon name="clipboard-list" :size="14" /> 执行计划</div>
          <span class="qc711-hint">草稿→执行中→已结束 · 成交回写组合 · CSV 交换供外部通道人工确认</span>
        </div>

        <div class="qc711-toolbar">
          <el-select v-model="statusFilter" size="small" class="qc711-w140" @change="loadPlans">
            <el-option label="全部状态" value=""></el-option>
            <el-option label="草稿" value="draft"></el-option>
            <el-option label="执行中" value="active"></el-option>
            <el-option label="已结束" value="closed"></el-option>
            <el-option label="已取消" value="cancelled"></el-option>
          </el-select>
          <el-button size="small" :loading="loading" @click="loadPlans"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
          <span class="qc711-label">狩猎日</span>
          <el-date-picker v-model="huntDate" size="small" type="date" value-format="yyyy-MM-dd"
                          placeholder="狩猎日" class="qc711-w140"></el-date-picker>
          <el-button size="small" :loading="building" @click="buildFromHunting">
            <qc-icon name="target" :size="14" /> 从狩猎场生成草稿
          </el-button>
        </div>

        <qc-state-panel v-if="error" type="error" title="计划加载失败" :desc="error" @retry="loadPlans"></qc-state-panel>

        <div v-else class="qc711-card">
          <el-table v-if="plans.length" :data="plans" size="small" border max-height="240"
                    highlight-current-row @row-click="pickPlan">
            <el-table-column prop="name" label="计划" min-width="180" show-overflow-tooltip></el-table-column>
            <el-table-column label="状态" width="90">
              <template #default="p"><span :class="statusTone(p.row.status)">{{ S.planStatus(p.row.status) }}</span></template>
            </el-table-column>
            <el-table-column prop="leg_count" label="腿" width="60"></el-table-column>
            <el-table-column prop="plan_date" label="计划日" width="110"></el-table-column>
            <el-table-column prop="created_at" label="创建" width="160"></el-table-column>
            <el-table-column label="操作" width="110">
              <template #default="p">
                <el-button size="small" type="text" @click.stop="openPlan(p.row.id)">明细</el-button>
                <el-button size="small" type="text" @click.stop="exportCsv(p.row.id)">导出</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div v-else class="qc711-empty">暂无执行计划。可从狩猎场生成草稿，或导入外部 CSV。</div>
        </div>

        <!-- 计划明细 -->
        <div v-if="detail" class="qc711-card">
          <div class="qc711-card-title">
            {{ detail.name }} · {{ S.planStatus(detail.status) }}
            <el-button size="small" type="text" @click="detail = null">收起</el-button>
          </div>
          <div class="qc711-toolbar">
            <el-button v-if="detail.status === 'draft'" size="small" type="primary" @click="setStatus('active')">启用计划</el-button>
            <el-button v-if="detail.status === 'active'" size="small" type="success" @click="setStatus('closed')">结束计划</el-button>
            <el-button v-if="detail.status === 'draft' || detail.status === 'active'" size="small" @click="setStatus('cancelled')">取消计划</el-button>
          </div>

          <el-table v-if="legs.length" :data="legs" size="small" border>
            <el-table-column prop="symbol" label="代码" width="110"></el-table-column>
            <el-table-column prop="name" label="名称" width="100" show-overflow-tooltip></el-table-column>
            <el-table-column label="方向" width="70">
              <template #default="l">
                <span :class="l.row.side === 'buy' ? 'qc711-tone-up' : 'qc711-tone-down'">{{ l.row.side === 'buy' ? '买入' : '卖出' }}</span>
              </template>
            </el-table-column>
            <el-table-column label="买入区间" width="130">
              <template #default="l">{{ S.num(l.row.buy_low, 2) }} ~ {{ S.num(l.row.buy_high, 2) }}</template>
            </el-table-column>
            <el-table-column label="仓位" width="70"><template #default="l">{{ S.pct(l.row.position_ratio) }}</template></el-table-column>
            <el-table-column label="止损" width="80"><template #default="l">{{ S.num(l.row.stop_loss, 2) }}</template></el-table-column>
            <el-table-column label="止盈" width="80"><template #default="l">{{ S.num(l.row.take_profit, 2) }}</template></el-table-column>
            <el-table-column label="状态" width="80"><template #default="l">{{ S.legStatus(l.row.status) }}</template></el-table-column>
            <el-table-column label="成交回填" width="190">
              <template #default="l">
                <template v-if="l.row.status === 'pending'">
                  <el-input v-model="fillPrice[l.row.id]" size="small" placeholder="成交价" class="qc711-w90"></el-input>
                  <el-button size="small" type="text" @click="fill(l.row)">成交</el-button>
                  <el-button size="small" type="text" @click="cancelLeg(l.row)">撤销</el-button>
                </template>
                <span v-else class="qc711-dim">{{ l.row.fill_price ? S.num(l.row.fill_price, 2) : '—' }}</span>
              </template>
            </el-table-column>
          </el-table>
          <!-- v7.16 FR-8: 买卖点纯公式推算, 免责同屏可见 (本组件未注入 i18n t, 用中文) -->
          <div class="qc711-note qc-disclaimer" style="font-size:var(--qc-font-size-xs);opacity:.8">本内容为模型估计与研究参考, 不构成投资建议; 买卖点为规则推算, 非交易指令。</div>

          <div class="qc711-card-title qc711-mt12">事件流</div>
          <el-table v-if="events.length" :data="events" size="small" border max-height="180">
            <el-table-column prop="ts" label="时间" width="160"></el-table-column>
            <el-table-column prop="event_type" label="事件" width="110"></el-table-column>
            <el-table-column prop="operator" label="操作人" width="110"></el-table-column>
            <el-table-column prop="reason" label="说明" show-overflow-tooltip></el-table-column>
          </el-table>
          <div v-else class="qc711-empty">暂无事件。</div>
        </div>

        <!-- CSV 导入 -->
        <div class="qc711-card">
          <div class="qc711-card-title">导入交换 CSV</div>
          <el-input v-model="csvText" size="small" type="textarea" :rows="4" class="qc711-mono"
                    placeholder="symbol,name,side,buy_low,buy_high,position_ratio,stop_loss,take_profit,note"></el-input>
          <div class="qc711-form">
            <el-input v-model="csvName" size="small" placeholder="计划名（留空自动生成）" class="qc711-w240" />
            <el-button size="small" type="primary" :loading="importing" @click="importCsv">导入为草稿</el-button>
          </div>
          <div class="qc711-note">交换文件仅承载计划意图，导出的 CSV 需在外部通道人工确认后才下单；系统不代下单。</div>
        </div>
      </div>
    `,
    setup() {
      const plans = ref([]);
      const detail = ref(null);
      const statusFilter = ref('');
      const huntDate = ref('');
      const loading = ref(false);
      const building = ref(false);
      const importing = ref(false);
      const error = ref('');
      const fillPrice = ref({});
      const csvText = ref('');
      const csvName = ref('');

      const legs = computed(() => (detail.value && detail.value.legs) || []);
      const events = computed(() => (detail.value && detail.value.events) || []);

      function statusTone(s) {
        if (s === 'active') return 'qc711-tone-up';
        if (s === 'cancelled') return 'qc711-tone-down';
        if (s === 'closed') return 'qc711-tone-mute';
        return '';
      }

      async function loadPlans() {
        loading.value = true;
        error.value = '';
        try {
          const q = statusFilter.value ? ('?status=' + encodeURIComponent(statusFilter.value)) : '';
          const j = await S().api('/api/execution/plans' + q);
          plans.value = (j && j.items) || [];
        } catch (e) {
          error.value = S().errText(e);
          plans.value = [];
        } finally {
          loading.value = false;
        }
      }

      function pickPlan(row) { openPlan(row.id); }
      function openPlan(id) {
        const found = plans.value.filter(function (p) { return p.id === id; })[0];
        detail.value = found || null;
        if (found && !found.legs) refreshDetail(id);
      }
      async function refreshDetail(id) {
        try {
          detail.value = await S().api('/api/execution/plans/' + encodeURIComponent(id));
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function setStatus(st) {
        if (!detail.value) return;
        const act = { active: '启用', closed: '结束', cancelled: '取消' }[st] || st;
        try {
          await ElementPlus.ElMessageBox.confirm('确认' + act + '计划「' + detail.value.name + '」？', '状态流转', { type: 'warning' });
        } catch (e) { return; }
        try {
          await S().post('/api/execution/plans/' + encodeURIComponent(detail.value.id) + '/status', { status: st });
          ElementPlus.ElMessage.success('已' + act);
          await loadPlans();
          await refreshDetail(detail.value.id);
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function fill(leg) {
        if (!detail.value) return;
        const px = Number(fillPrice.value[leg.id]);
        if (!isFinite(px) || px <= 0) { ElementPlus.ElMessage.warning('请填写有效成交价'); return; }
        try {
          await S().post('/api/execution/plans/' + encodeURIComponent(detail.value.id) +
            '/legs/' + leg.id + '/fill', { price: px });
          ElementPlus.ElMessage.success('已回填成交，持仓已同步');
          await refreshDetail(detail.value.id);
          await loadPlans();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function cancelLeg(leg) {
        if (!detail.value) return;
        try {
          await S().post('/api/execution/plans/' + encodeURIComponent(detail.value.id) +
            '/legs/' + leg.id + '/cancel', { reason: '前端撤销' });
          ElementPlus.ElMessage.success('已撤销该腿');
          await refreshDetail(detail.value.id);
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function buildFromHunting() {
        if (!huntDate.value) { ElementPlus.ElMessage.warning('请选择狩猎日（选股产物日期）'); return; }
        building.value = true;
        try {
          const j = await S().post('/api/execution/plans/from-hunting', { date: huntDate.value });
          ElementPlus.ElMessage.success('已生成草稿：' + ((j && j.name) || ''));
          await loadPlans();
          if (j && j.id) { openPlan(j.id); await refreshDetail(j.id); }
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          building.value = false;
        }
      }

      async function importCsv() {
        if (!csvText.value.trim()) { ElementPlus.ElMessage.warning('请粘贴 CSV 内容'); return; }
        importing.value = true;
        try {
          const j = await S().post('/api/execution/plans/import', { csv: csvText.value, name: csvName.value });
          ElementPlus.ElMessage.success('已导入草稿：' + ((j && j.name) || ''));
          csvText.value = '';
          await loadPlans();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          importing.value = false;
        }
      }

      // 导出走原生 fetch: 端点是 text/csv(非 JSON), apiFetch 会按 JSON 解析失败
      async function exportCsv(planId) {
        try {
          const token = localStorage.getItem('quant_token') || '';
          const res = await fetch('/api/execution/plans/' + encodeURIComponent(planId) + '/export', {
            headers: token ? { Authorization: 'Bearer ' + token } : {},
          });
          if (!res.ok) throw new Error('导出失败（HTTP ' + res.status + '）');
          const text = await res.text();
          const blob = new Blob([text], { type: 'text/csv;charset=utf-8' });
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = planId + '.csv';
          document.body.appendChild(a);
          a.click();
          document.body.removeChild(a);
          URL.revokeObjectURL(url);
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      onMounted(loadPlans);

      return {
        S: window.__quantModules.v711,
        plans, detail, statusFilter, huntDate, loading, building, importing, error,
        fillPrice, csvText, csvName, legs, events,
        statusTone, loadPlans, pickPlan, openPlan, setStatus, fill, cancelLeg,
        buildFromHunting, importCsv, exportCsv,
      };
    },
  };
})();
