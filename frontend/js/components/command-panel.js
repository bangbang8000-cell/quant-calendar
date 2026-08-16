// quant-calendar: CommandPanel 组件 (v3.11 / FR-3.11.1)
// 智能命令面板：Ctrl+K 打开，三域检索（股票/菜单/指令）+ 全键盘操作。
// 纯逻辑在 command-panel-core.js（可单测），本组件仅做渲染薄壳。
(function () {
  const { ref, computed, watch, nextTick, inject } = Vue;
  const QCP = window.QuantCommandPanel;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.CommandPanel = {
    name: 'qc-command-panel',
    template: `
      <el-dialog v-model="visible" width="580px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 菜单 / 指令…"
                    @keydown.up.prevent="onUp" @keydown.down.prevent="onDown"
                    @keydown.enter.prevent="onEnter">
            <template #prefix><span class="opacity-6">🔍</span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}</div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon">{{ item.icon }}</span>
                <span class="command-item-label">{{ item.label }}</span>
                <span class="command-item-sub">{{ item.subLabel }}</span>
              </div>
            </div>
          </div>
          <div v-else-if="query" class="command-empty">无匹配结果</div>
          <div v-else class="command-empty">输入关键词搜索股票、菜单或指令 · ↑↓ 选择 · Enter 执行 · Esc 关闭</div>
        </div>
      </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};

      const query = ref('');
      const visible = computed({
        get: () => state.commandPaletteVisible.value,
        set: (v) => { state.commandPaletteVisible.value = v; },
      });
      const activeIndex = ref(0);
      const stockResults = ref([]);
      const inputEl = ref(null);

      // ─── 指令定义（共享 core 常量，避免与全局搜索重复）───
      const commandDefs = computed(() => {
        const defs = (QCP.DEFAULT_COMMANDS || []).map(function (c) { return Object.assign({}, c); });
        // 动态主题切换指令
        const themeKeys = Object.keys(state.themes.value || {});
        themeKeys.forEach(function (tk) {
          const t = state.themes.value[tk];
          defs.push({ key: 'theme:' + tk, label: '切换主题 · ' + (t.name || tk), icon: '🎨', keywords: 'theme 主题' });
        });
        return defs;
      });

      // ─── 检索 ───
      const menus = computed(() => state.menus.value || []);
      const result = computed(() => {
        const q = query.value;
        const m = QCP.searchMenus(q, menus.value, state.subPageNames);
        const c = QCP.searchCommands(q, commandDefs.value);
        const s = stockResults.value; // 远程股票结果（本地上过滤在 fetch 回调中）
        return QCP.mergeResults(m, c, s);
      });
      const results = computed(() => result.value);

      function isActive(item) {
        const flat = results.value.flat;
        return flat[activeIndex.value] === item;
      }
      function setActive(item) {
        activeIndex.value = results.value.flat.indexOf(item);
      }
      function itemKey(item) {
        return (item.type || '') + ':' + (item.code || item.menuKey || item.key || item.label);
      }

      // ─── 股票远程搜索（防抖）───
      let stockTimer = null;
      function fetchStocks() {
        const q = query.value.trim();
        if (q.length < 1) { stockResults.value = []; return; }
        if (stockTimer) clearTimeout(stockTimer);
        stockTimer = setTimeout(function () {
          state.searchStocks(q, function (items) {
            if (query.value.trim() !== q) return; // 过期回调丢弃
            stockResults.value = items.map(function (r) {
              return { type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' };
            });
            activeIndex.value = 0;
          });
        }, 200);
      }

      // ─── 键盘导航 ───
      function onDown() {
        activeIndex.value = QCP.moveIndex(activeIndex.value, results.value.flat.length, 1);
      }
      function onUp() {
        activeIndex.value = QCP.moveIndex(activeIndex.value, results.value.flat.length, -1);
      }
      function onEnter() {
        const item = results.value.flat[activeIndex.value];
        if (item) execute(item);
      }
      function execute(item) {
        state.commandPaletteVisible.value = false;
        if (item.type === 'menu') {
          state.navigateTo(item.menuKey, item.subPage);
        } else if (item.type === 'stock') {
          state.showStockDetail(item.code, item.name);
        } else if (item.type === 'command') {
          runCommand(item.key);
        }
      }

      function runCommand(key) {
        if (key === 'refresh') {
          const p = state.currentPage.value;
          if (p === 'strategies') state.loadDashboardData().catch(function () {});
          else if (p === 'calendar') state.refreshCalendarData().catch(function () {});
          else if (p === 'ai') state.loadAiHistory().catch(function () {});
        } else if (key === 'export') {
          state.exportCSV();
        } else if (key === 'batch') {
          state.showBatchEvaluate.value = true;
        } else if (key === 'ai') {
          state.openAiFab();
        } else if (key === 'sidebar') {
          state.toggleSidebar();
        } else if (key.indexOf('theme:') === 0) {
          state.changeTheme(key.slice(6));
        }
      }

      // 打开时重置 + 聚焦
      watch(visible, function (v) {
        if (v) {
          query.value = '';
          stockResults.value = [];
          activeIndex.value = 0;
          nextTick(function () {
            if (inputEl.value && inputEl.value.focus) inputEl.value.focus();
          });
        }
      });
      watch(query, fetchStocks);

      return {
        visible, query, results, inputEl,
        onDown, onUp, onEnter, execute, isActive, setActive, itemKey,
      };
    },
  };
})();
