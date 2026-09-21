// quant-calendar: WatchGroupsDialog 6.1.2 (B3) — 自选分组管理弹窗
// 独立于 watchlist 域: 直连 /api/watchlist/groups API
// 能力: 列表 / 新建 / 重命名 / 颜色(8色) / 删除(并入默认) / 上下移动排序 / 保存
// 打开: window.dispatchEvent(new CustomEvent('qc:show-watch-groups'))
(function () {
  if (typeof window === 'undefined' || !window.Vue) return;
  const { ref, computed, onMounted } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  // qc-allow-hardcode: 8 色分组调色板 (与后端 watch_groups.COLORS 契约一致, 设计资产)
  const COLORS = ['#c49b2e', '#2563eb', '#dc2626', '#16a34a', '#7c3aed', '#db2777', '#64748b', '#b45309'];

  window.__quantComponents.WatchGroupsDialog = {
    name: 'qc-watch-groups-dialog',
    template: `
      <el-dialog class="max-w-520" :model-value="visible" title="自选分组管理" width="480px" @update:model-value="v => (visible = v)" @open="load">
        <div v-if="loading" class="qc-glossary-loading">加载中…</div>
        <div v-else class="qc-wg-list">
          <div v-for="(g, i) in groups" :key="g.name" class="qc-wg-row">
            <span class="qc-wg-color" :style="{background: g.color}" :title="'颜色: ' + g.color"
                  @click="cycleColor(i)"></span>
            <span class="qc-wg-name">{{ g.name }}</span>
            <span class="qc-wg-count" v-if="g.name !== '默认分组'">{{ countIn(g.name) }} 只</span>
            <div class="qc-wg-ops">
              <el-button size="small" text :disabled="i === 0" @click="moveUp(i)">↑</el-button>
              <el-button size="small" text :disabled="i === groups.length - 1" @click="moveDown(i)">↓</el-button>
              <el-button size="small" text @click="startRename(g.name)">重命名</el-button>
              <el-button size="small" text type="danger" :disabled="g.name === '默认分组'" @click="remove(g.name)">删除</el-button>
            </div>
            <div v-if="renaming === g.name" class="qc-wg-rename">
              <el-input v-model="renameVal" size="small" :placeholder="'新名称'" @keyup.enter="commitRename(g.name)" />
              <el-button size="small" type="primary" @click="commitRename(g.name)">确定</el-button>
            </div>
          </div>
          <div class="qc-wg-add">
            <el-input v-model="newName" size="small" placeholder="新分组名称" class="qc-wg-newinput" />
            <el-button size="small" type="primary" @click="addGroup">新建分组</el-button>
          </div>
        </div>
        <template #footer>
          <el-button size="small" @click="visible = false">取消</el-button>
          <el-button size="small" type="primary" :loading="saving" @click="save">保存</el-button>
        </template>
      </el-dialog>
    `,
    setup() {
      const visible = ref(false);
      const loading = ref(false);
      const saving = ref(false);
      const groups = ref([]);
      const mapping = ref({});
      const newName = ref('');
      const renaming = ref('');
      const renameVal = ref('');

      function withAuth(url, opts) {
        opts = opts || {};
        opts.headers = Object.assign({}, opts.headers || {});
        const token = localStorage.getItem('quant_token') || '';
        if (token) opts.headers['Authorization'] = 'Bearer ' + token;
        return fetch(url, opts);
      }

      async function load() {
        loading.value = true;
        try {
          const r = await withAuth('/api/watchlist/groups');
          const d = await r.json();
          if (d && d.success) {
            groups.value = d.groups || [];
            mapping.value = d.mapping || {};
          }
        } catch (e) { /* 忽略 */ }
        loading.value = false;
      }

      function countIn(name) {
        return Object.values(mapping.value).filter(function (v) { return v === name; }).length;
      }

      function cycleColor(i) {
        const g = groups.value[i];
        const idx = COLORS.indexOf(g.color);
        g.color = COLORS[(idx + 1) % COLORS.length];
      }

      function moveUp(i) {
        if (i <= 0) return;
        const arr = groups.value.slice();
        const t = arr[i - 1]; arr[i - 1] = arr[i]; arr[i] = t;
        groups.value = arr;
      }

      function moveDown(i) {
        if (i >= groups.value.length - 1) return;
        const arr = groups.value.slice();
        const t = arr[i + 1]; arr[i + 1] = arr[i]; arr[i] = t;
        groups.value = arr;
      }

      function addGroup() {
        const name = newName.value.trim();
        if (!name) return;
        if (groups.value.some(function (g) { return g.name === name; })) return;
        groups.value.push({ name: name, color: COLORS[groups.value.length % COLORS.length], sort_order: groups.value.length, expanded: true });
        newName.value = '';
      }

      function startRename(name) {
        renaming.value = name;
        renameVal.value = name;
      }

      function commitRename(oldName) {
        const v = renameVal.value.trim();
        if (!v || v === oldName || groups.value.some(function (g) { return g.name === v; })) {
          renaming.value = '';
          return;
        }
        groups.value = groups.value.map(function (g) { return g.name === oldName ? Object.assign({}, g, { name: v }) : g; });
        const m = {};
        Object.keys(mapping.value).forEach(function (k) {
          m[k] = mapping.value[k] === oldName ? v : mapping.value[k];
        });
        mapping.value = m;
        renaming.value = '';
      }

      function remove(name) {
        groups.value = groups.value.filter(function (g) { return g.name !== name; });
        const m = {};
        Object.keys(mapping.value).forEach(function (k) {
          m[k] = mapping.value[k] === name ? '默认分组' : mapping.value[k];
        });
        mapping.value = m;
      }

      async function save() {
        saving.value = true;
        try {
          await withAuth('/api/watchlist/groups', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ groups: groups.value, mapping: mapping.value }),
          });
          ElementPlus.ElMessage.success('分组已保存');
          visible.value = false;
        } catch (e) {
          ElementPlus.ElMessage.error('保存失败');
        }
        saving.value = false;
      }

      onMounted(function () {
        window.addEventListener('qc:show-watch-groups', function () {
          visible.value = true;
          load();
        });
      });

      return { visible, loading, saving, groups, mapping, newName, renaming, renameVal,
               load, countIn, cycleColor, moveUp, moveDown, addGroup, startRename, commitRename, remove, save };
    },
  };
})();
