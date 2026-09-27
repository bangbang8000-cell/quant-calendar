// quant-calendar: ResearchPage 组件 (v3.6.0-T8 / FR-3.6.2)
// 策略研究页: 单根div, 5子页 v-if 链
// v3.17.2 (FR-3.17.2): 研究页新增「市场复盘」子页 (列表 + 详情, 全 CSS 类无内联 style)
(function () {
  const { ref, computed, watch, inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ResearchPage = {
    name: 'qc-research-page',
    template: window.__quantModules.researchPage.view,
    setup() {
      const state = inject('qcState');
      const savingProfile = Vue.ref(false);
      const variantSaving = Vue.ref(false);
      // V5.2.8 (T-5.2.53): 竞态防护推广 — 页面级请求序号
      // 6.3.0 (T-6.3.0.6): 页面级请求序号持有者 — 逻辑域共用（语义同拆分前的单计数器）
      const _seq = { n: 0 };
      if (!state) return {};

      // V6.6.1 (PRD F-6.6.7): 策略管理子页 — 模板编辑/全新创建两态 (原 strategy-write/custom-write 合并)
      const strategyManageMode = ref(localStorage.getItem('quant_strategy_mode') === 'custom' ? 'custom' : 'template');
      function openStrategyManage(mode) {
        strategyManageMode.value = mode;
        try { localStorage.setItem('quant_strategy_mode', mode); } catch (e) {}
        state.currentSubPage.value = 'strategy-manage';
      }

      // ===== 策略管理 (v3.19 策略研究 P0) =====
      const strategies = ref([]);
      const strategiesLoading = ref(false);
      const strategiesError = ref(false);
      const strategiesErrorText = ref('');  // V6.9.4 (F6.2): 错误卡标题 (含接口 detail)
      const strategiesWarn = ref('');        // V6.9.4 (F6.2): 数据文件缺失提示条
      const activeStrategyId = ref('');
      const paramValues = ref({});
      const strategyRunning = ref(false);
      const runAsOf = ref('');  // v3.21: 手工运行评估日(可选, 默认最近交易日)
      const ptradeCode = ref('');
      const strategyRuns = ref([]);
      const profiles = ref([]);           // v3.21 (P0-3): 已存参数方案
      const profileSelect = ref('');
      const profileName = ref('');
      const govEnabled = ref(true);        // v3.21 (P0-6): 纳管状态
      const govShowCalendar = ref(true);    // V4.0 M3: 完全体闭环 — 引擎持仓是否进日历展示
      const govSchedule = ref('20:00');
      const govUniverse = ref('default');  // v3.21: default=内置池 | all=全市场5530
      const govRunning = ref(false);
      const lastHoldings = ref('');
      const activeStrategy = computed(function () {
        return strategies.value.find(function (s) { return s.id === activeStrategyId.value; }) || null;
      });

      async function withAuth(url, opts) {
        opts = opts || {};
        opts.headers = Object.assign({}, opts.headers || {});
        const token = localStorage.getItem('quant_token') || '';
        if (token) opts.headers['Authorization'] = 'Bearer ' + token;
        return fetch(url, opts);
      }

      async function loadStrategies() {
        const seq = ++_seq.n;
        strategiesLoading.value = true;
        strategiesError.value = false;
        strategiesErrorText.value = '';
        strategiesWarn.value = '';
        try {
          const res = await withAuth('/api/strategies').then(function (r) { return r.json(); });
          if (seq !== _seq.n) return;
          // V6.9.4 (F6.2): 兼容 { strategies, warn } 结构; 非数组/非策略列表响应视为错误并给出可诊断文案
          let list = null;
          if (Array.isArray(res)) {
            list = res;
          } else if (res && Array.isArray(res.strategies)) {
            list = res.strategies;
            if (res.warn) strategiesWarn.value = String(res.warn);
          } else {
            strategiesError.value = true;
            strategiesErrorText.value = (res && res.detail) ? String(res.detail) : '策略列表加载失败（接口返回异常）';
          }
          if (list !== null) {
            strategies.value = list;
            if (strategies.value.length && !activeStrategyId.value) {
              activeStrategyId.value = strategies.value[0].id;
              onStrategyChange();
            }
          }
        } catch (e) {
          console.error('[research] 策略列表加载失败:', e);
          strategiesError.value = true;
          strategiesErrorText.value = '策略列表加载失败: ' + ((e && e.message) || '网络错误');
        } finally {
          if (seq === _seq.n) strategiesLoading.value = false;
        }
      }

      function onStrategyChange() {
        const st = activeStrategy.value;
        if (!st) return;
        paramValues.value = {};
        st.schema.forEach(function (f) { paramValues.value[f.key] = f.default; });
        ptradeCode.value = '';
        loadRuns();
        loadProfiles();
        loadGov();
      }

      // ─── v3.21 (P0-3): 参数方案 CRUD ───
      async function loadProfiles() {
        if (!activeStrategyId.value) { profiles.value = []; return; }
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles')
            .then(function (r) { return r.json(); });
          profiles.value = (res && res.data && res.data.profiles) || [];
          profileSelect.value = '';
        } catch (e) {
          console.error('[research] 方案列表加载失败:', e);
          profiles.value = [];
        }
      }

      async function saveProfile() {
        savingProfile.value = true;
        const name = (profileName.value || '').trim();
        if (!name) { window._core && window._core.showToast('请输入方案名称'); return; }
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles', {
            method: 'POST',
            body: JSON.stringify({ name: name, params: paramValues.value }),
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { window._core && window._core.showToast(String(res.detail)); return; }
          profileName.value = '';
          await loadProfiles();
          window._core && window._core.showToast('方案已保存');
        } catch (e) {
          console.error('[research] 方案保存失败:', e);
          window._core && window._core.showToast('方案保存失败');
        }
      }

      function applyProfile() {
        const p = profiles.value.find(function (x) { return x.id === profileSelect.value; });
        if (!p) return;
        Object.keys(p.params || {}).forEach(function (k) { paramValues.value[k] = p.params[k]; });
        window._core && window._core.showToast('已应用方案: ' + p.name);
      }

      async function deleteProfile() {
        if (!profileSelect.value) return;
        try {
          await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles/' + profileSelect.value, {
            method: 'DELETE',
          }).then(function (r) { return r.json(); });
          await loadProfiles();
          window._core && window._core.showToast('方案已删除');
        } catch (e) {
          console.error('[research] 方案删除失败:', e);
        }
      }

      // ─── v3.21 (P0-6): 策略纳管 ───
      async function loadGov() {
        try {
          const res = await withAuth('/api/strategies/governance').then(function (r) { return r.json(); });
          const s = (res && res.data && res.data.strategies) || {};
          const cur = s[activeStrategyId.value] || {};
          govEnabled.value = cur.enabled !== false;
          govSchedule.value = cur.schedule || '20:00';
          govUniverse.value = cur.universe === 'all' ? 'all' : 'default';
          govShowCalendar.value = cur.show_in_calendar !== false;
          lastHoldings.value = cur.last_holdings || '';
        } catch (e) {
          console.error('[research] 纳管状态加载失败:', e);
        }
      }

      async function updateGov() {
        try {
          await withAuth('/api/strategies/governance', {
            method: 'PUT',
            body: JSON.stringify({
              strategies: (function () {
                const o = {};
                o[activeStrategyId.value] = { enabled: govEnabled.value, schedule: govSchedule.value, universe: govUniverse.value, show_in_calendar: govShowCalendar.value };
                return o;
              })(),
            }),
          }).then(function (r) { return r.json(); });
          window._core && window._core.showToast('纳管设置已更新');
        } catch (e) {
          console.error('[research] 纳管更新失败:', e);
        }
      }

      async function runOnceActive() {
        if (!activeStrategyId.value) return;
        govRunning.value = true;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/run-once', {
            method: 'POST',
            body: JSON.stringify({ as_of: runAsOf.value || undefined }),
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { window._core && window._core.showToast(String(res.detail)); return; }
          window._core && window._core.showToast('持仓已生成');
          await loadGov();
        } catch (e) {
          console.error('[research] run-once 失败:', e);
          window._core && window._core.showToast('持仓生成失败');
        } finally {
          govRunning.value = false;
        }
      }

      function openLastHoldings() {
        if (!lastHoldings.value) return;
        window.open(lastHoldings.value.replace(/\./g, '/').replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//, '/api/static/'), '_blank');
      }

      function cloneStrategy() {
        const st = activeStrategy.value;
        if (!st) return;
        const name = (profileName.value || '').trim() || (st.name + '-副本');
        saveProfileAs(name, Object.assign({}, paramValues.value));
        window._core && window._core.showToast('已复制为副本方案: ' + name);
      }

      async function saveProfileAs(name, params) {
        try {
          await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles', {
            method: 'POST',
            body: JSON.stringify({ name: name, params: params }),
          }).then(function (r) { return r.json(); });
          await loadProfiles();
        } catch (e) {
          console.error('[research] 副本保存失败:', e);
        }
      }

      async function loadRuns() {
        const seq = ++_seq.n;
        if (!activeStrategyId.value) return;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/runs?limit=5')
                    .then(function (r) { return r.json(); });
        if (seq !== _seq.n) return;
          strategyRuns.value = Array.isArray(res) ? res : [];
        } catch (e) {
          strategyRuns.value = [];
        }
      }

      async function runActiveStrategy() {
        if (!activeStrategyId.value) return;
        strategyRunning.value = true;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ params: paramValues.value, as_of: runAsOf.value || undefined }),
          }).then(function (r) { return r.json(); });
          if (res && res.status === 'success') {
            loadRuns();
          } else {
            ElementPlus.ElMessage.error(state.t('msg.runFailed', { msg: res.detail || JSON.stringify(res) }));
          }
        } catch (e) {
          console.error('[research] 策略运行失败:', e);
          ElementPlus.ElMessage.error(state.t('msg.runFailed', { msg: e.message }));
        } finally {
          strategyRunning.value = false;
        }
      }

      async function exportActivePtradeCode() {
        if (!activeStrategyId.value) return;
        try {
          const qs = Object.keys(paramValues.value).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(paramValues.value[k]);
          }).join('&');
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/ptrade-code?' + qs)
            .then(function (r) { return r.json(); });
          if (res && res.code) {
            ptradeCode.value = res.code;
          } else {
            ElementPlus.ElMessage.error(state.t('msg.exportFailed', { msg: res.detail || JSON.stringify(res) }));
          }
        } catch (e) {
          console.error('[research] PTrade 导出失败:', e);
          ElementPlus.ElMessage.error(state.t('msg.exportFailed', { msg: e.message }));
        }
      }

      function copyPtradeCode() {
        if (!ptradeCode.value) return;
        const ta = document.createElement('textarea');
        ta.value = ptradeCode.value;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) { /* noop */ }
        document.body.removeChild(ta);
      }

      // ===== 6.3.0 (T-6.3.0.6): 逻辑域装配 — 取数/状态下沉 components/research/ =====
      // 片段以 create(ctx) 工厂装配（片段须先于本文件加载，见 src/main.js）
      const __marketReview = window.__quantModules.researchPage.marketReview.create({
        ref, seq: _seq, authHeaders: _authHeaders,
      });
      const { marketReviews, marketReviewLoading, marketReviewError, selectedReviewDate, marketReviewDetail, marketReviewDetailLoading } = __marketReview;
      const { marketReviewDetailError, loadMarketReviews, openMarketReview, toggleMarketReviewDate, backToMarketReviewList, loadMarketReviewDetail } = __marketReview;
      const { marketReviewChgClass, marketReviewChgText, marketReviewSrcEntries, fmtPct, fmtEmotion } = __marketReview;
      const __factor = window.__quantModules.researchPage.factor.create({
        ref, seq: _seq, withAuth, authHeaders: _authHeaders, activeStrategyId, paramValues,
      });
      const { factorKey, factorIcLoading, factorLayerLoading, factorIcReport, factorLayerResult, factorOptions } = __factor;
      const { runFactorIc, runFactorLayer, factorDetail, factorDetailLoading, runFactorDetail, sweepGrid } = __factor;
      const { sweepResult, sweepMessage, sweepLoading, sweepStability, runSweep } = __factor;
      const __history = window.__quantModules.researchPage.history.create({
        seq: _seq, state,
      });
      const { researchHistory, researchHistoryLoading, researchHistoryError, researchHistoryType, researchHistorySelected, researchDetailId } = __history;
      const { researchCompareRows, researchCompareLoading, researchExportLoading, researchTypeLabel, goShortterm, openResearchHistory } = __history;
      const { loadResearchHistory, exportResearchHistory, toggleResearchSelect, toggleResearchDetail, runResearchCompare, deleteResearchHistory } = __history;

      watch(
        function () {
          return state.currentPage.value + '/' + state.currentSubPage.value;
        },
        function (key) {
          // V4.9 (P2): 进入研究概览时加载各子页数据
          if (key === 'research/research-overview') {
            loadStrategies();
            loadMarketReviews();
            loadVariants();
            loadCustoms();
          }
          // 进入「市场复盘」且未停留在详情时加载列表 (V5.2.3: 移入短线复盘后 key=shortterm/market-review)
          if ((key === 'research/market-review' || key === 'shortterm/market-review') && !selectedReviewDate.value) {
            loadMarketReviews();
          }
          // v3.19: 进入「量化研究」时加载策略列表
          if (key === 'research/quant-research') {
            loadStrategies();
          }
          // V4.9 (P3): 进入回测历史时加载列表
          if (key === 'research/backtest-history') {
            loadBtHistory();
          }
        },
        { immediate: true }
      );

      // ===== v3.22 (I3A): 策略微调向导 — variant 复制 / SelectionSpec / AI 交易码 =====
      const variants = ref([]);
      const variantSelected = ref(null);
      const variantSpec = ref(null);
      const specFields = ref(null);
      const aiCode = ref("");
      const aiCodeLoading = ref(false);
      const variantBusy = ref(false);
      const variantMsg = ref("");
      const specIndustryText = ref("");
      const specCapText = ref("");

      function _authHeaders() {
        const t = localStorage.getItem("quant_token") || "";
        return t ? { "Authorization": "Bearer " + t, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
      }

      async function loadVariants() {
        const seq = ++_seq.n;
        try {
          const res = await fetch("/api/strategies/variants", { headers: _authHeaders() }).then(function (r) { return r.json(); });
        if (seq !== _seq.n) return;
          variants.value = (res && res.data && res.data.variants) || [];
        } catch (e) { console.error("[i3a] 加载 variants 失败:", e); }
      }

      async function cloneNewStrategy() {
        if (!activeStrategyId.value) { variantMsg.value = "请先在量化研究选择母本策略"; return; }
        variantBusy.value = true; variantMsg.value = "";
        try {
          const res = await fetch("/api/strategies/" + activeStrategyId.value + "/clone", {
            method: "POST", headers: _authHeaders(),
            body: JSON.stringify({ name: (profileName.value || "").trim() || undefined, params: Object.assign({}, paramValues.value) })
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { variantMsg.value = String(res.detail); return; }
          const d = res && res.data;
          if (d && d.sid) {
            variantSelected.value = d.sid;
            variantMsg.value = "已复制为新策略: " + d.name;
            await loadVariants();
            await loadVariantSpec(d.sid);
          }
        } catch (e) { console.error("[i3a] 复制失败:", e); variantMsg.value = "复制失败: " + e.message; }
        finally { variantBusy.value = false; }
      }

      async function selectVariant(sid) {
        variantSelected.value = sid;
        variantMsg.value = "";
        aiCode.value = "";
        await loadVariantSpec(sid);
      }

      async function loadVariantSpec(sid) {
        try {
          const res = await fetch("/api/strategies/" + sid + "/selection-spec", { headers: _authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.data && res.data.spec) {
            variantSpec.value = Object.assign({}, res.data.spec);
            specFields.value = res.data.fields;
            specIndustryText.value = (res.data.spec.industry_scope || []).join(",");
            specCapText.value = (res.data.spec.market_cap_range || []).join(",");
          }
        } catch (e) { console.error("[i3a] 加载 spec 失败:", e); }
      }

      async function saveVariantSpec() {
        variantSaving.value = true;
        if (!variantSelected.value || !variantSpec.value) return;
        try {
          variantSpec.value.industry_scope = specIndustryText.value ? specIndustryText.value.split(/[,，]/).map(function(s){ return s.trim(); }).filter(Boolean) : [];
          variantSpec.value.market_cap_range = specCapText.value ? specCapText.value.split(/[,，]/).map(Number).filter(function(n){ return !isNaN(n); }) : [];
          const res = await fetch("/api/strategies/" + variantSelected.value + "/selection-spec", {
            method: "PUT", headers: _authHeaders(),
                        body: JSON.stringify({ spec: variantSpec.value })
          }).then(function (r) { return r.json(); });
          if (res && res.data && res.data.spec) { variantSpec.value = res.data.spec; variantMsg.value = "SelectionSpec 已保存"; }
        } catch (e) { console.error("[i3a] 保存 spec 失败:", e); variantMsg.value = "保存失败"; }
      }

      async function runVariantOnce() {
        if (!variantSelected.value) { variantMsg.value = "请先选择/创建微调策略"; return; }
        variantBusy.value = true; variantMsg.value = "";
        try {
          const res = await fetch("/api/strategies/" + variantSelected.value + "/run-once", {
            method: "POST", headers: _authHeaders(), body: "{}"
          }).then(function (r) { return r.json(); });
          variantMsg.value = (res && res.detail) ? String(res.detail) : ("持仓已生成: " + ((res && res.data && res.data.symbols) || 0) + " 只");
        } catch (e) { console.error("[i3a] run-once 失败:", e); variantMsg.value = "生成持仓失败"; }
        finally { variantBusy.value = false; }
      }

      async function genVariantAiCode() {
        if (!variantSelected.value) { variantMsg.value = "请先选择/创建微调策略"; return; }
        if (!variantSpec.value) await loadVariantSpec(variantSelected.value);
        aiCodeLoading.value = true; variantMsg.value = "";
        try {
          const res = await fetch("/api/strategies/" + variantSelected.value + "/ai-trade-code", {
            method: "POST", headers: _authHeaders(),
            body: JSON.stringify({ spec: variantSpec.value })
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { variantMsg.value = String(res.detail); return; }
          if (res && res.data) {
            aiCode.value = res.data.code || "";
            if (res.data.api_errors && res.data.api_errors.length) {
              variantMsg.value = "生成成功(含 API 校验告警 " + res.data.api_errors.length + " 条)";
            } else { variantMsg.value = "AI 交易码已生成, 已通过矩阵内校验"; }
          }
        } catch (e) { console.error("[i3a] AI 交易码失败:", e); variantMsg.value = "AI 生成失败: " + e.message; }
        finally { aiCodeLoading.value = false; }
      }

      function copyVariantCode() {
        if (!aiCode.value) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(aiCode.value).then(function () { variantMsg.value = "代码已复制"; });
        } else {
          const ta = document.createElement("textarea"); ta.value = aiCode.value; document.body.appendChild(ta); ta.select();
          document.execCommand("copy"); document.body.removeChild(ta); variantMsg.value = "代码已复制";
        }
      }

      // ===== v3.22 (I3B): 全新 PTrade 策略 (AI 代写 + 本地回测 + AI 优化) =====
      const customName = ref("");
      const customPrompt = ref("");
      const customs = ref([]);
      const customSelected = ref("");
      const customCode = ref("");
      const customMsg = ref("");
      const customBtResult = ref(null);
      const customGenLoading = ref(false);
      const customBtLoading = ref(false);
      const customOptLoading = ref(false);

      function _customAuthHeaders() {
        const t = localStorage.getItem("quant_token") || "";
        return t ? { "Authorization": "Bearer " + t, "Content-Type": "application/json" } : { "Content-Type": "application/json" };
      }

      async function loadCustoms() {
        const seq = ++_seq.n;
        try {
          const res = await fetch("/api/strategies/custom", { headers: _customAuthHeaders() }).then(function (r) { return r.json(); });
        if (seq !== _seq.n) return;
          customs.value = (res && res.data && res.data.customs) || [];
        } catch (e) { console.error("[i3b] 加载自定义策略失败:", e); }
      }

      async function genCustomCode() {
        if (!customPrompt.value.trim()) { customMsg.value = "请描述策略思路"; return; }
        customGenLoading.value = true; customMsg.value = "";
        try {
          const res = await fetch("/api/strategies/custom", {
            method: "POST", headers: _customAuthHeaders(),
            body: JSON.stringify({ name: customName.value.trim() || "自定义策略", prompt: customPrompt.value })
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { customMsg.value = String(res.detail); return; }
          if (res && res.data) {
            customCode.value = res.data.code || "";
            customMsg.value = "AI 代写成功: " + res.data.sid + (res.data.api_errors && res.data.api_errors.length ? " (API 告警 " + res.data.api_errors.length + " 条)" : " (校验通过)");
            await loadCustoms();
          }
        } catch (e) { console.error("[i3b] AI 代写失败:", e); customMsg.value = "AI 代写失败: " + e.message; }
        finally { customGenLoading.value = false; }
      }

      async function loadCustomCode() {
        if (!customSelected.value) return;
        try {
          const res = await fetch("/api/strategies/custom/" + customSelected.value + "/code", { headers: _customAuthHeaders() }).then(function (r) { return r.json(); });
          if (res && res.data) { customCode.value = res.data.code || ""; customMsg.value = ""; }
        } catch (e) { console.error("[i3b] 读取代码失败:", e); }
      }

      async function runCustomBacktest() {
        if (!customSelected.value) { customMsg.value = "请先选择自定义策略"; return; }
        customBtLoading.value = true; customMsg.value = "";
        try {
          const res = await fetch("/api/strategies/custom/" + customSelected.value + "/backtest", {
            method: "POST", headers: _customAuthHeaders(), body: "{}"
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { customMsg.value = String(res.detail); return; }
          if (res && res.data) { customBtResult.value = res.data; customMsg.value = "回测完成"; }
        } catch (e) { console.error("[i3b] 回测失败:", e); customMsg.value = "回测失败: " + e.message; }
        finally { customBtLoading.value = false; }
      }

      async function runCustomOptimize() {
        if (!customSelected.value) { customMsg.value = "请先选择自定义策略"; return; }
        customOptLoading.value = true; customMsg.value = "";
        try {
          const res = await fetch("/api/strategies/custom/" + customSelected.value + "/ai-optimize", {
            method: "POST", headers: _customAuthHeaders(),
            body: JSON.stringify({ backtest: customBtResult.value })
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { customMsg.value = String(res.detail); return; }
          if (res && res.data) { customCode.value = res.data.code || ""; customMsg.value = "AI 优化完成" + (res.data.api_errors && res.data.api_errors.length ? " (API 告警 " + res.data.api_errors.length + " 条)" : " (校验通过)"); }
        } catch (e) { console.error("[i3b] AI 优化失败:", e); customMsg.value = "AI 优化失败: " + e.message; }
        finally { customOptLoading.value = false; }
      }

      function copyCustomCode() {
        if (!customCode.value) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(customCode.value).then(function () { customMsg.value = "代码已复制"; });
        } else {
          const ta = document.createElement("textarea"); ta.value = customCode.value; document.body.appendChild(ta); ta.select();
          document.execCommand("copy"); document.body.removeChild(ta); customMsg.value = "代码已复制";
        }
      }

      // ─── V4.9 (P3): 回测历史 ───
      const btHistory = Vue.ref([]);
      const btHistoryLoading = Vue.ref(false);
      const btHistoryError = Vue.ref(false);
      const btHistoryDays = Vue.ref(30);

      async function loadBtHistory() {
        const seq = ++_seq.n;
        btHistoryLoading.value = true;
        btHistoryError.value = false;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const res = await fetch('/api/backtest/history?days=' + btHistoryDays.value, { headers }).then(function (r) { return r.json(); });
        if (seq !== _seq.n) return;
          btHistory.value = (res && res.data) || [];
        } catch (e) {
          console.error('[backtest] 回测历史加载失败:', e);
          btHistoryError.value = true;
        } finally {
        if (seq === _seq.n) btHistoryLoading.value = false;
        }
      }

      // 6.3.1 (T-6.3.1.3): 回测子页四态 — backtestError 下沉至 app-logic workspace.runBacktest 真实置位,
      // 经 qcState 展开, 本页直接引用; @click/@retry 指向同一 loader (runBacktest)

      return {
        ...state,
        strategyManageMode, openStrategyManage,
        btHistory, btHistoryLoading, btHistoryError, btHistoryDays, loadBtHistory,
        // 5.1.0 (T-5.1.4): 研究历史
        researchHistory, researchHistoryLoading, researchHistoryError, researchHistoryType,
        researchHistorySelected, researchDetailId, researchCompareRows, researchCompareLoading,
        researchTypeLabel, goShortterm, openResearchHistory, loadResearchHistory, researchExportLoading, exportResearchHistory,
        toggleResearchSelect, toggleResearchDetail, runResearchCompare, deleteResearchHistory,
        marketReviews, marketReviewLoading, marketReviewError,
        selectedReviewDate, marketReviewDetail, marketReviewDetailLoading, marketReviewDetailError,
        loadMarketReviews, openMarketReview, toggleMarketReviewDate, backToMarketReviewList, loadMarketReviewDetail,
        marketReviewChgClass, marketReviewChgText, marketReviewSrcEntries,
        fmtPct, fmtEmotion,
        strategies, strategiesLoading, strategiesError, strategiesErrorText, strategiesWarn,
        activeStrategyId, activeStrategy, paramValues,
        strategyRunning, ptradeCode, strategyRuns,
        savingProfile, variantSaving,
        loadStrategies, onStrategyChange, runActiveStrategy,
        exportActivePtradeCode, copyPtradeCode,
        profiles, profileSelect, profileName,
        loadProfiles, saveProfile, applyProfile, deleteProfile,
        govEnabled, govSchedule, govUniverse, govRunning, lastHoldings,
        loadGov, updateGov, runOnceActive, openLastHoldings, cloneStrategy,
        govShowCalendar,
        factorKey, factorIcLoading, factorLayerLoading,
        factorIcReport, factorLayerResult, factorOptions,
        runFactorIc, runFactorLayer,
        factorDetail, factorDetailLoading, runFactorDetail,
        variants, variantSelected, variantSpec, specFields, aiCode, aiCodeLoading, variantBusy, variantMsg,
        loadVariants, cloneNewStrategy, selectVariant, loadVariantSpec, saveVariantSpec, runVariantOnce, genVariantAiCode, copyVariantCode,
        customName, customPrompt, customs, customSelected, customCode, customMsg, customBtResult,
        customGenLoading, customBtLoading, customOptLoading,
        loadCustoms, genCustomCode, loadCustomCode, runCustomBacktest, runCustomOptimize, copyCustomCode,
        // V4.0 M2-1 参数扫描 (修复未进 return 的绑定缺口) + V5.0.2 T-5.0.24 稳定性
        sweepGrid, sweepResult, sweepMessage, sweepLoading, sweepStability, runSweep,
      };
    },
  };
})();
