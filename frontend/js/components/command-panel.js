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
      <el-dialog v-model="visible" width="640px" top="12vh" class="command-palette"
                 :show-close="false" :close-on-click-modal="true" :append-to-body="true">
        <div class="command-palette-body">
          <el-input ref="inputEl" v-model="query" size="large" placeholder="搜索股票 / 板块 / 策略 / 页面 / 指令 / 记录…"
                    aria-label="搜索股票 / 板块 / 策略 / 页面 / 指令 / 记录"
                    @keydown="onKeydown">
            <template #prefix><span class="opacity-6"><qc-icon name="search" :size="16" /></span></template>
          </el-input>

          <div class="command-groups" v-if="results.flat.length">
            <div v-for="g in results.groups" :key="g.key" class="command-group">
              <div class="command-group-label">{{ g.label }}
                <!-- 6.4.2 (FR-645 第 2 条): 最近访问可清除 -->
                <button v-if="g.key === 'record' && !query && recentEntities.length" type="button"
                        class="qc-recent-clear" @click.stop="clearRecent">清除</button>
              </div>
              <div v-for="item in g.items" :key="itemKey(item)" class="command-item"
                   :class="{active: isActive(item)}" @click="execute(item)" @mouseenter="setActive(item)">
                <span class="command-item-icon">
                  <qc-icon v-if="isIconName(iconOf(item))" :name="iconOf(item)" :size="14" />
                  <template v-else v-html="sanitizeHtml(iconOf(item))"></template>
                </span>
                <span class="command-item-label">{{ item.label }}</span>
                <span class="command-item-sub">{{ item.subLabel }}</span>
              </div>
            </div>
          </div>
          <!-- 6.4.2 (FR-645): 无结果 → 替代建议 (拼写/输入偏差) -->
          <div v-else-if="query" class="command-empty">
            无匹配结果
            <div v-if="alternatives.length" class="qc-search-alts">
              <span>你是不是想找：</span>
              <button v-for="a in alternatives" :key="a" type="button" class="qc-search-alt" @click="query = a">{{ a }}</button>
            </div>
          </div>
          <div v-else class="command-empty">输入关键词搜索股票、板块、策略、页面、指令或记录 · ↑↓ 选择 · Tab 切组 · Enter 执行 · Esc 关闭</div>
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
      // 6.4.2 (FR-645): 最近访问 (任意实体)
      const RECENT_KEY = 'qc_recent_entities';
      const recentEntities = ref(QCP.parseRecent(localStorage.getItem(RECENT_KEY)));

      // ─── 指令定义（共享 core 常量，避免与全局搜索重复）───
      const commandDefs = computed(() => {
        const defs = (QCP.DEFAULT_COMMANDS || []).map(function (c) { return Object.assign({}, c); });
        // 动态主题切换指令
        const themeKeys = Object.keys(state.themes.value || {});
        themeKeys.forEach(function (tk) {
          const t = state.themes.value[tk];
          defs.push({ key: 'theme:' + tk, label: '切换主题 · ' + (t.name || tk), icon: 'palette', keywords: 'theme 主题' });
        });
        return defs;
      });

      // ─── 检索 ───
      // V6.6: Lucide 图标名识别 (白名单名 → qc-icon; 其余 emoji/HTML → 原 v-html 渲染)
      function isIconName(n) {
        return typeof n === 'string' && /^[a-z][a-z0-9-]*$/.test(n);
      }
      // 6.4.2: 按实体类型给默认图标 (远程条目不带 icon)
      const TYPE_ICONS = {
        stock: 'trending-up', sector: 'pie-chart', strategy: 'layers',
        menu: 'file-text', command: 'terminal', eval: 'history', dict: 'book-open',
      };
      function iconOf(item) {
        return (item && item.icon) || TYPE_ICONS[item && item.type] || 'circle';
      }
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
          return { type: 'stock', code: r.code, name: r.name, label: r.name, subLabel: r.code, icon: 'trending-up' };
        });
      }
      // v3.17.10 (FR-3.17.10): 空查询 → 最近查看 + 我的自选直达
      // 6.4.2 (FR-645): 最近访问扩展到任意实体类型 (股票/板块/策略/页面/记录)
      function buildQuickEntries() {
        const recent = [];
        const R = window.__quantModules && window.__quantModules.recent;
        if (R) {
          R.getRecentViewed().slice(0, 5).forEach(function (r) {
            recent.push({ type: 'stock', code: r.code, name: r.name || r.code, label: r.name || r.code, subLabel: '最近查看 · ' + r.code, icon: 'trending-up' });
          });
        }
        const wl = (state.watchlist && state.watchlist.value || []).slice(0, 8).map(function (s) {
          return { type: 'stock', code: s.code, name: s.name || s.code, label: s.name || s.code, subLabel: '我的自选 · ' + s.code, icon: 'trending-up' };
        });
        return recent.concat(wl);
      }

      // 6.4.2 (FR-645): 远程 /api/search 建议项 → 六类实体桶
      // 远程 type: stock/sector/strategy/menu/eval/dict → eval/dict 归入 record(记录) 域
      function bucketRemote(items) {
        const buckets = { stock: [], sector: [], strategy: [], menu: [], command: [], record: [] };
        let hasRecord = false;
        (items || []).forEach(function (it) {
          if (!it) return;
          if (it.type === 'stock' && it.code) {
            buckets.stock.push({ type: 'stock', code: it.code, name: it.name, label: it.name, subLabel: it.code });
          } else if (it.type === 'sector') {
            buckets.sector.push({ type: 'sector', name: it.name, label: it.name, subLabel: it.subLabel || '板块' });
          } else if (it.type === 'strategy') {
            buckets.strategy.push({ type: 'strategy', id: it.id, name: it.name, label: it.name, subLabel: it.subLabel || '策略' });
          } else if (it.type === 'eval') {
            hasRecord = true;
            buckets.record.push({ type: 'eval', code: it.code, name: it.name, label: it.name || it.code, subLabel: '评估历史' });
          } else if (it.type === 'dict') {
            hasRecord = true;
            buckets.record.push({ type: 'dict', field: it.field, label: it.label || it.field, subLabel: '数据字典' });
          }
        });
        if (hasRecord) buckets.record_label = '记录（评估历史 / 数据字典）';
        return buckets;
      }

      const result = computed(() => {
        const q = query.value;
        if (!q) {
          const quick = buildQuickEntries();
          const buckets = { stock: quick, record: recentEntities.value, record_label: '最近访问' };
          return QCP.mergeEntityGroups(buckets);
        }
        const m = QCP.searchMenus(q, menus.value, state.subPageNames);
        const c = QCP.searchCommands(q, commandDefs.value);
        const localStocks = searchLocal(q);
        const remote = bucketRemote(stockResults.value);
        // 股票域: 本地拼音优先, 远程按 code 去重补充
        const seen = {};
        const stock = [];
        localStocks.concat(remote.stock).forEach(function (it) {
          if (!it || !it.code || seen[it.code]) return;
          seen[it.code] = true;
          stock.push(it);
        });
        return QCP.mergeEntityGroups({
          stock: stock,
          sector: remote.sector,
          strategy: remote.strategy,
          menu: m,
          command: c,
          record: remote.record,
          record_label: remote.record_label,
        });
      });
      const results = computed(() => result.value);

      // 6.4.2: 无结果时的替代建议 (菜单/指令/股票名)
      // 6.5.2 (FR-653): 成员经 memberLabel 取名 (subPageNames 键为旧 sub, 成员键查不到)
      const alternatives = computed(() => {
        if (!query.value || results.value.flat.length) return [];
        const NC = window.QuantNavMerge;
        const labels = [];
        (menus.value || []).forEach(function (m) {
          labels.push(m.name);
          (m.members || []).forEach(function (mm) {
            labels.push(NC ? NC.memberLabel(mm, state.t) : (state.subPageNames[mm.sub] || mm.sub));
          });
        });
        commandDefs.value.forEach(function (c) { labels.push(c.label); });
        return QCP.suggestAlternatives(query.value, labels, 3);
      });


      function isActive(item) {
        const flat = results.value.flat;
        return flat[activeIndex.value] === item;
      }
      function setActive(item) {
        activeIndex.value = results.value.flat.indexOf(item);
      }
      function itemKey(item) {
        return (item.type || '') + ':' + (item.code || item.field || item.menuKey || item.key || item.id || item.label);
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
            // 6.4.2 (FR-645): 全类型建议 (股票/板块/策略页面/记录) 交给 bucketRemote 分组
            const remote = (items || []).filter(function (r) {
              return r && (r.code || r.type === 'sector' || r.type === 'strategy' || r.type === 'dict');
            });
            const seen = {};
            const merged = [];
            local.forEach(function (it) { if (!seen['s:' + it.code]) { seen['s:' + it.code] = true; merged.push(it); } });
            remote.forEach(function (it) {
              const k = it.type + ':' + (it.code || it.field || it.id || it.label);
              if (seen[k]) return;
              seen[k] = true;
              merged.push(it);
            });
            stockResults.value = merged;
            activeIndex.value = 0;
          });
        }, 200);
      }

      // ─── 键盘导航 (6.4.2 / FR-645: 全键盘 + IME 安全) ───
      // 输入法组合期 (中文/日文) 不拦截按键, 避免候选词上屏被当成导航
      function composing(ev) { return typeof QCP.isComposing === 'function' && QCP.isComposing(ev); }
      function onDown(ev) {
        if (composing(ev)) return;
        if (ev && ev.preventDefault) ev.preventDefault();
        activeIndex.value = QCP.moveIndex(activeIndex.value, results.value.flat.length, 1);
      }
      function onUp(ev) {
        if (composing(ev)) return;
        if (ev && ev.preventDefault) ev.preventDefault();
        activeIndex.value = QCP.moveIndex(activeIndex.value, results.value.flat.length, -1);
      }
      function onEnter(ev) {
        if (composing(ev)) return;
        if (ev && ev.preventDefault) ev.preventDefault();
        const item = results.value.flat[activeIndex.value];
        if (item) execute(item);
      }
      // Tab / Shift+Tab 切组 (跳到目标组首项)
      function onTab(ev) {
        if (composing(ev)) return;
        if (ev && ev.preventDefault) ev.preventDefault();
        const groups = results.value.groups;
        activeIndex.value = QCP.groupIndexAfterKey(groups, activeIndex.value, !!(ev && ev.shiftKey));
      }
      function onKeydown(ev) {
        if (!ev) return;
        const key = String(ev.key || '');
        if (key === 'ArrowDown') return onDown(ev);
        if (key === 'ArrowUp') return onUp(ev);
        if (key === 'Enter') return onEnter(ev);
        if (key === 'Tab') return onTab(ev);
        if (key === 'Escape') { visible.value = false; if (ev.preventDefault) ev.preventDefault(); return; }
      }
      function track(event, props) {
        try {
          if (window.QuantEvents && typeof window.QuantEvents.track === 'function') {
            window.QuantEvents.track(event, props || {});
          }
        } catch (err) {
          console.warn('[command-panel] 埋点失败', err);
        }
      }
      // 6.4.2 (FR-645): 记录最近访问 (任意实体, 上限 8, localStorage)
      function rememberRecent(item) {
        try {
          const entry = {
            type: item.type, code: item.code || '', field: item.field || '', id: item.id || '',
            name: item.name || item.label || '', label: item.label || item.name || '',
            subLabel: item.subLabel || '', icon: iconOf(item),
          };
          recentEntities.value = QCP.addRecentItem(recentEntities.value, entry);
          localStorage.setItem(RECENT_KEY, QCP.serializeRecent(recentEntities.value));
        } catch (err) {
          console.warn('[command-panel] 最近访问写入失败', err);
        }
      }
      function clearRecent() {
        recentEntities.value = [];
        try { localStorage.removeItem(RECENT_KEY); } catch (e) { console.warn('[command-panel] 清除最近访问失败', e); }
        activeIndex.value = 0;
      }
      function execute(item) {
        if (!item) return;
        state.commandPaletteVisible.value = false;
        track('search_select', { entity: item.type || '', label: item.label || item.name || '' });
        rememberRecent(item);
        if (item.type === 'menu') {
          state.navigateTo(item.menuKey, item.subPage);
        } else if (item.type === 'stock') {
          state.showStockDetail(item.code, item.name);
        } else if (item.type === 'command') {
          runCommand(item.key);
        } else if (item.type === 'sector') {
          state.navigateTo('shortterm', 'sector');
        } else if (item.type === 'strategy') {
          state.navigateTo('research', 'strategy-manage');
        } else if (item.type === 'dict') {
          state.navigateTo('ops', 'datadict');
        } else if (item.type === 'eval') {
          if (item.code) state.showStockDetail(item.code, item.name);
          else state.navigateTo('ai', 'history');
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
        } else if (key === 'onboarding') {
          // 6.1.1 (A2): 新手引导可回看
          window.dispatchEvent(new CustomEvent('qc:onboarding-replay'));
        } else if (key === 'add-portfolio') {
          state.currentPage.value = 'ai'; state.currentSubPage.value = 'portfolio';
        } else if (key === 'open-system') {
          // 6.3.1 (T-6.3.1.6): status 已迁至「系统状态」一级页, 系统设置落 config
          state.navigateTo('system', 'config');
        } else if (key === 'open-shortterm') {
          state.navigateTo('shortterm', 'overview');
        } else if (key === 'open-research') {
          // 6.3.1: research 子页无 overview, 落 research-overview
          state.navigateTo('research', 'research-overview');
        } else if (key === 'open-calendar') {
          state.navigateTo('calendar', 'calendar');
        } else if (key === 'refresh-data-source') {
          state.navigateTo('system', 'datasource');
        } else if (key === 'open-watchlist') {
          state.navigateTo('ai', 'watchlist');
        } else if (key === 'manage-groups') {
          // 6.1.2 (B3): 打开自选分组管理弹窗
          window.dispatchEvent(new CustomEvent('qc:show-watch-groups'));
        } else if (key === 'open-focus') {
          state.navigateTo('ai', 'focus');
        } else if (key === 'open-portfolio') {
          state.navigateTo('ai', 'portfolio');
        } else if (key === 'open-backtest') {
          state.navigateTo('research', 'backtest');
        } else if (key === 'open-market-review') {
          state.navigateTo('shortterm', 'market-review');
        } else if (key === 'open-shortterm-sectors') {
          state.navigateTo('shortterm', 'sector');
        } else if (key === 'open-shortterm-intraday') {
          state.navigateTo('shortterm', 'intraday');
        } else if (key === 'open-status') {
          state.navigateTo('ops', 'status');
        } else if (key === 'open-health') {
          state.navigateTo('ops', 'health');
        } else if (key === 'open-schedule') {
          state.navigateTo('ops', 'schedule');
        } else if (key === 'open-guard') {
          state.navigateTo('ops', 'guard');
        } else if (key === 'open-usage') {
          state.navigateTo('ops', 'usage');
        } else if (key === 'open-datadict') {
          state.navigateTo('ops', 'datadict');
        } else if (key === 'open-notification') {
          state.navigateTo('system', 'notification');
        } else if (key === 'open-users') {
          state.navigateTo('system', 'user');
        } else if (key === 'open-autoeval') {
          state.navigateTo('system', 'autoeval');
        } else if (key === 'open-feature') {
          state.navigateTo('system', 'feature');
        } else if (key === 'open-config') {
          state.navigateTo('system', 'config');
          // 6.3.1 (T-6.3.1.6): 补齐子页直达 — 策略总览 / 量化日历 / 智能评估 / 策略研究 / 短线复盘 / 系统状态 / 系统配置
        } else if (key === 'open-strategies-overview') {
          state.navigateTo('strategies', 'overview');
        } else if (key === 'open-merrill') {
          state.navigateTo('strategies', 'merrill');
        } else if (key === 'open-strategies-market') {
          state.navigateTo('strategies', 'market');
        } else if (key === 'open-consensus') {
          state.navigateTo('strategies', 'consensus');
        } else if (key === 'open-pool') {
          state.navigateTo('calendar', 'pool');
        } else if (key === 'open-ai-overview') {
          state.navigateTo('ai', 'overview');
        } else if (key === 'open-eval-analysis') {
          state.navigateTo('ai', 'evaluation-analysis');
        } else if (key === 'open-eval-history') {
          state.navigateTo('ai', 'history');
        } else if (key === 'open-chat-history') {
          state.navigateTo('ai', 'chat_history');
        } else if (key === 'open-quant-research') {
          state.navigateTo('research', 'quant-research');
        } else if (key === 'open-strategy-manage') {
          state.navigateTo('research', 'strategy-manage');
        } else if (key === 'open-backtest-history') {
          state.navigateTo('research', 'backtest-history');
        } else if (key === 'open-ztpool') {
          state.navigateTo('shortterm', 'ztpool');
        } else if (key === 'open-lhb') {
          state.navigateTo('shortterm', 'lhb');
        } else if (key === 'open-execution') {
          state.navigateTo('ops', 'execution');
        } else if (key === 'open-about') {
          state.navigateTo('system', 'about');
        } else if (key === 'theme-dark') {
          state.changeTheme('dark-pro');
        } else if (key === 'theme-light') {
          state.changeTheme('gold');
        } else if (key === 'theme-gold') {
          // 6.3.1 (T-6.3.1.6): 6 条预设主题色此前已注册但无分支 (选中无反应) — 接线到色相切换
          state.changeThemeHue(45);
        } else if (key === 'theme-blue') {
          state.changeThemeHue(220);
        } else if (key === 'theme-red') {
          state.changeThemeHue(0);
        } else if (key === 'theme-green') {
          state.changeThemeHue(140);
        } else if (key === 'theme-purple') {
          state.changeThemeHue(270);
        } else if (key === 'theme-pink') {
          state.changeThemeHue(320);
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
          track('search_open', { page: state.currentPage.value || '' });
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
        } else if (action === 'open-eval-history') {
          // 6.3.1 (T-6.3.1.6): Ctrl+H 此前已注册但未接线 (按下无反应)
          runCommand('open-eval-history');
        } else if (action === 'open-shortterm') {
          // 6.3.1 (T-6.3.1.6): Ctrl+Shift+S 此前已注册但未接线 (按下无反应)
          runCommand('open-shortterm');
        }
      }
      function onGlobalKeydown(ev) {
        // 6.4.2 (FR-645): Ctrl+K / Cmd+K 均打开面板 (mac 习惯)
        if ((ev.ctrlKey || ev.metaKey) && !ev.altKey && String(ev.key || '').toLowerCase() === 'k') {
          ev.preventDefault();
          state.commandPaletteVisible.value = !state.commandPaletteVisible.value;
          return;
        }
        if (!QCP.createDefaultShortcuts || !QCP.createShortcutRegistry) return;
        const reg = QCP.createDefaultShortcuts();
        const action = reg.resolve({ key: ev.key, ctrlKey: ev.ctrlKey, altKey: ev.altKey, shiftKey: ev.shiftKey, metaKey: ev.metaKey });
        if (action) {
          ev.preventDefault();
          runShortcut(action);
        }
      }
      // 6.4.2 (FR-645): 移动端/头部可见入口 → 事件打开面板
      function openPalette() { state.commandPaletteVisible.value = true; }
      onMounted(function () {
        document.addEventListener('keydown', onGlobalKeydown);
        window.addEventListener('qc:open-command-palette', openPalette);
      });

      return {
        visible, query, results, alternatives, inputEl, recentEntities,
        sanitizeHtml: state.sanitizeHtml,
        isIconName, iconOf, clearRecent,
        onDown, onUp, onEnter, onTab, onKeydown, execute, isActive, setActive, itemKey,
        onGlobalKeydown,
      };
    },
  };
})();
