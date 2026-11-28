// quant-calendar v7.11 (FR-7.11-3): 策略市场 — 消费 /api/marketplace/* (v7.10 交付的生态域)
// 发布物是不可变快照(同 kind+ref_id+version 覆盖并留痕); 导入策略 → mk_* variant, 导入案例 → case_mk_*。
// 本面板只做浏览/发布/导入/下架, 不做回测(向量化回测走 API 与回测页)。
(function () {
  const { ref, computed, onMounted } = Vue;
  function S() { return window.__quantModules.v711; }

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.MarketplacePanel = {
    name: 'qc-marketplace-panel',
    template: `
      <div class="qc711-panel">
        <qc-page-head icon="package" title="策略市场" desc="发布为不可变快照 · 导入生成副本，不影响原物"></qc-page-head>

        <div class="qc711-stats">
          <div class="qc711-stat"><div class="qc711-stat-v">{{ stats.total || 0 }}</div><div class="qc711-stat-l">条目总数</div></div>
          <div class="qc711-stat"><div class="qc711-stat-v">{{ publishedOf('strategy') }}</div><div class="qc711-stat-l">在架策略</div></div>
          <div class="qc711-stat"><div class="qc711-stat-v">{{ publishedOf('pattern_case') }}</div><div class="qc711-stat-l">在架案例</div></div>
          <div class="qc711-stat"><div class="qc711-stat-v">{{ stats.downloads || 0 }}</div><div class="qc711-stat-l">累计导入</div></div>
        </div>

        <div class="qc711-toolbar">
          <el-select v-model="kind" size="small" class="qc711-w140" @change="load">
            <el-option label="全部类型" value=""></el-option>
            <el-option label="策略" value="strategy"></el-option>
            <el-option label="形态案例" value="pattern_case"></el-option>
          </el-select>
          <el-input v-model="keyword" size="small" placeholder="搜索标题/说明/引用 ID" class="qc711-w220"
                    @keyup.enter.native="load" />
          <el-checkbox v-model="includeArchived" @change="load">含已下架</el-checkbox>
          <el-button size="small" :loading="loading" @click="load"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
        </div>

        <qc-state-panel v-if="error" type="error" title="市场加载失败" :desc="error" @retry="load"></qc-state-panel>

        <div v-else class="qc711-card">
          <el-table v-if="items.length" :data="items" size="small" border max-height="340">
            <el-table-column prop="title" label="标题" min-width="180" show-overflow-tooltip></el-table-column>
            <el-table-column label="类型" width="90">
              <template #default="m"><el-tag size="small" :type="m.row.kind === 'strategy' ? 'warning' : 'info'">{{ kindLabel(m.row.kind) }}</el-tag></template>
            </el-table-column>
            <el-table-column prop="ref_id" label="引用" width="150" show-overflow-tooltip></el-table-column>
            <el-table-column prop="version" label="版本" width="80"></el-table-column>
            <el-table-column prop="author" label="发布者" width="100"></el-table-column>
            <el-table-column prop="downloads" label="导入" width="70"></el-table-column>
            <el-table-column label="状态" width="80">
              <template #default="m"><span :class="m.row.status === 'published' ? 'qc711-tone-up' : 'qc711-tone-mute'">{{ m.row.status === 'published' ? '在架' : '已下架' }}</span></template>
            </el-table-column>
            <el-table-column label="操作" width="150">
              <template #default="m">
                <el-button size="small" type="text" @click="doImport(m.row)">导入</el-button>
                <el-button size="small" type="text" @click="togglePayload(m.row.id)">{{ opened === m.row.id ? '收起' : '快照' }}</el-button>
                <el-button v-if="m.row.status === 'published'" size="small" type="text" @click="doUnpublish(m.row)">下架</el-button>
              </template>
            </el-table-column>
          </el-table>
          <div v-else class="qc711-empty">市场暂无条目。可在下方发布本机策略或形态案例。</div>

          <div v-if="opened && payloadText" class="qc711-json">
            <div class="qc711-card-title">快照内容（{{ opened }}）</div>
            <pre class="qc711-pre">{{ payloadText }}</pre>
          </div>
        </div>

        <!-- 发布 -->
        <div class="qc711-card">
          <div class="qc711-card-title">发布条目</div>
          <div class="qc711-form">
            <el-select v-model="form.kind" size="small" class="qc711-w140">
              <el-option label="策略" value="strategy"></el-option>
              <el-option label="形态案例" value="pattern_case"></el-option>
            </el-select>
            <el-input v-model="form.ref_id" size="small" placeholder="引用 ID（策略 id / 案例 case_id）" class="qc711-w240" />
            <el-input v-model="form.version" size="small" placeholder="版本 1.0.0" class="qc711-w120" />
            <el-button size="small" type="primary" :loading="publishing" @click="doPublish">
              <qc-icon name="upload" :size="14" /> 发布
            </el-button>
          </div>
          <div class="qc711-form">
            <el-input v-model="form.title" size="small" placeholder="标题（留空取策略名）" class="qc711-w240" />
            <el-input v-model="form.summary" size="small" placeholder="一句话说明" class="qc711-grow" />
          </div>
          <div class="qc711-note">同 类型 + 引用 + 版本 再次发布会覆盖并在审计日志留痕；快照只含能力，不含私有持仓数据。</div>
        </div>
      </div>
    `,
    setup() {
      const items = ref([]);
      const stats = ref({});
      const kind = ref('');
      const keyword = ref('');
      const includeArchived = ref(false);
      const loading = ref(false);
      const publishing = ref(false);
      const error = ref('');
      const opened = ref('');
      const form = ref({ kind: 'strategy', ref_id: '', version: '1.0.0', title: '', summary: '' });

      const payloadText = computed(() => {
        const row = items.value.filter(function (x) { return x.id === opened.value; })[0];
        if (!row) return '';
        try { return JSON.stringify(row.payload || {}, null, 2); } catch (e) { return ''; }
      });

      function kindLabel(k) { return k === 'strategy' ? '策略' : (k === 'pattern_case' ? '形态案例' : k); }
      // stats 结构: {by_kind: {strategy: {published, archived}, pattern_case: {...}}, total, downloads}
      function publishedOf(k) {
        const by = (stats.value && stats.value.by_kind) || {};
        return (by[k] && by[k].published) || 0;
      }

      async function load() {
        loading.value = true;
        error.value = '';
        try {
          const q = [];
          if (kind.value) q.push('kind=' + encodeURIComponent(kind.value));
          if (keyword.value.trim()) q.push('keyword=' + encodeURIComponent(keyword.value.trim()));
          if (includeArchived.value) q.push('include_archived=true');
          q.push('limit=200');
          const j = await S().api('/api/marketplace/items?' + q.join('&'));
          items.value = (j && j.items) || [];
          const s = await S().api('/api/marketplace/stats');
          stats.value = s || {};
        } catch (e) {
          error.value = S().errText(e);
          items.value = [];
        } finally {
          loading.value = false;
        }
      }

      function togglePayload(id) { opened.value = opened.value === id ? '' : id; }

      async function doPublish() {
        if (!form.value.ref_id.trim()) { ElementPlus.ElMessage.warning('请填写引用 ID'); return; }
        publishing.value = true;
        try {
          const j = await S().post('/api/marketplace/items', {
            kind: form.value.kind, ref_id: form.value.ref_id.trim(),
            version: form.value.version.trim() || '1.0.0',
            title: form.value.title.trim(), summary: form.value.summary.trim(),
          });
          ElementPlus.ElMessage.success('已发布：' + ((j && j.title) || ''));
          form.value.ref_id = ''; form.value.title = ''; form.value.summary = '';
          await load();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        } finally {
          publishing.value = false;
        }
      }

      async function doImport(row) {
        try {
          const j = await S().post('/api/marketplace/items/' + row.id + '/import', {});
          const made = (j && j.new_id) || '';
          ElementPlus.ElMessage.success('已导入' + (made ? '：' + made : '') + (j && j.kind === 'strategy' ? '（策略副本）' : '（案例副本）'));
          await load();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      async function doUnpublish(row) {
        try {
          await S().del('/api/marketplace/items/' + row.id);
          ElementPlus.ElMessage.success('已下架');
          await load();
        } catch (e) {
          ElementPlus.ElMessage.error(S().errText(e));
        }
      }

      onMounted(load);

      return {
        S: window.__quantModules.v711,
        items, stats, kind, keyword, includeArchived, loading, publishing, error, opened, form,
        payloadText, kindLabel, publishedOf, load, togglePayload, doPublish, doImport, doUnpublish,
      };
    },
  };
})();
