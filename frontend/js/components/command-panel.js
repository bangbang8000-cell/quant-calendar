// quant-calendar: CommandPanel 组件 (v3.11 / FR-3.11.1)
// 智能命令面板：Ctrl+K 打开，三域检索（股票/菜单/指令）+ 全键盘操作。
// 纯逻辑在 command-panel-core.js（可单测），本组件仅做渲染薄壳。
(function () {
  const { ref, computed, watch, nextTick, inject, onMounted } = Vue;
  const QCP = window.QuantCommandPanel;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.CommandPanel = {
    name: 'qc-command-panel',
    template: `
      <el-dialog v-model="visible" width="580px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 菜单 / 指令…"
                    aria-label="搜索股票 / 菜单 / 指令"
                    @keydown.up.prevent="onUp" @keydown.down.prevent="onDown"
                    @keydown.enter.prevent="onEnter">
            <template #prefix><span class="opacity-6">🔍</span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}</div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon" v-html="sanitizeHtml(item.icon || '')"></span>
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
      // v3.17.10 (FR-3.17.10): 本地拼音检索索引（内置核心清单 + 自选 + 评估历史 + 持仓）
      function buildLocalIndex() {
        const P = window.__quantModules && window.__quantModules.pinyin;
        if (!P) return [];
        const extra = [];
        (state.watchlist && state.watchlist.value || []).forEach(function (s) {
          extra.push({ code: s.code, name: s.name });
        });
        (state.aiHistory && state.aiHistory.value || []).forEach(function (r) {
          if (r && r.stock_code) extra.push({ code: r.stock_code, name: r.stock_name || r.stock_code });
        });
        extra.push.apply(extra, P.getExtraStocks());
        return P.buildStockIndex(extra);
      }
      function searchLocal(q) {
        const P = window.__quantModules && window.__quantModules.pinyin;
        if (!P) return [];
        return P.searchStocksByQuery(q, buildLocalIndex()).map(function (r) {
          return { type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' };
        });
      }
      // v3.17.10 (FR-3.17.10): 空查询 → 最近查看 + 我的自选直达
      function buildQuickEntries() {
        const recent = [];
        const R = window.__quantModules && window.__quantModules.recent;
        if (R) {
          R.getRecentViewed().slice(0, 5).forEach(function (r) {
            recent.push({ type: 'stock', code: r.code, name: r.name || r.code, label: r.name || r.code, subLabel: '最近查看 · ' + r.code, icon: '📈' });
          });
        }
        const wl = (state.watchlist && state.watchlist.value || []).slice(0, 8).map(function (s) {
          return { type: 'stock', code: s.code, name: s.name || s.code, label: s.name || s.code, subLabel: '我的自选 · ' + s.code, icon: '📈' };
        });
        return recent.concat(wl);
      }
      const result = computed(() => {
        const q = query.value;
        if (!q) {
          return QCP.mergeResults([], [], buildQuickEntries());
        }
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

      // ─── 股票远程搜索（防抖，本地拼音索引优先 + 远程补充）───
      let stockTimer = null;
      function fetchStocks() {
        const q = query.value.trim();
        if (q.length < 1) { stockResults.value = []; return; }
        if (stockTimer) clearTimeout(stockTimer);
        stockTimer = setTimeout(function () {
          // v3.17.10 (FR-3.17.10): 本地拼音索引结果立即展示（不等待远程，数据源不可达也可直达）
          const local = searchLocal(q);
          stockResults.value = local;
          activeIndex.value = 0;
          state.searchStocks(q, function (items) {
            if (query.value.trim() !== q) return; // 过期回调丢弃
            const remote = items.map(function (r) {
              return { type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: '📈' };
            });
            // v3.17.10 (FR-3.17.10): 本地拼音索引优先，远程结果按 code 去重补充
            const seen = {};
            const merged = [];
            local.forEach(function (it) { if (!seen[it.code]) { seen[it.code] = true; merged.push(it); } });
            remote.forEach(function (it) { if (!seen[it.code]) { seen[it.code] = true; merged.push(it); } });
            stockResults.value = merged;
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
        } else if (key === 'today') {
          state.navigateTo('strategies', 'overview');
        } else if (key === 'add-portfolio') {
          state.currentPage.value = 'ai'; state.currentSubPage.value = 'portfolio';
        } else if (key === 'open-system') {
          state.navigateTo('system', 'status');
        } else if (key === 'open-shortterm') {
          state.navigateTo('shortterm', 'overview');
        } else if (key === 'open-research') {
          state.navigateTo('research', 'overview');
        } else if (key === 'open-calendar') {
          state.navigateTo('calendar', '');
        } else if (key === 'refresh-data-source') {
          state.navigateTo('system', 'datasource');
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

      // ─── V5.0.6 (T-5.0.63): 全局快捷键 (Ctrl+K 打开面板 + 常用快捷键) ───
      function runShortcut(action) {
        if (action === 'toggle-palette') {
          state.commandPaletteVisible.value = !state.commandPaletteVisible.value;
        } else if (action === 'toggle-sidebar') {
          state.toggleSidebar();
        } else if (action === 'open-ai') {
          state.openAiFab();
        } else if (action === 'refresh') {
          runCommand('refresh');
        } else if (action === 'open-today') {
          runCommand('today');
        } else if (action === 'batch-eval') {
          runCommand('batch');
        } else if (action === 'add-portfolio') {
          runCommand('add-portfolio');
        }
      }
      function onGlobalKeydown(ev) {
        if (!QCP.createDefaultShortcuts || !QCP.createShortcutRegistry) return;
        const reg = QCP.createDefaultShortcuts();
        const action = reg.resolve({ key: ev.key, ctrlKey: ev.ctrlKey, altKey: ev.altKey, shiftKey: ev.shiftKey, metaKey: ev.metaKey });
        if (action) {
          ev.preventDefault();
          runShortcut(action);
        }
      }
      onMounted(function () {
        document.addEventListener('keydown', onGlobalKeydown);
      });

      return {
        visible, query, results, inputEl,
        sanitizeHtml: state.sanitizeHtml,
        onDown, onUp, onEnter, execute, isActive, setActive, itemKey,
        onGlobalKeydown,
      };
    },
  };
})();
