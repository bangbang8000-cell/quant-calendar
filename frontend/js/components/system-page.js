// quant-calendar: SystemPage 组件 (v3.6.0-T4 / FR-3.6.2)
// 系统配置页: 结构 = system根(v-if, 含status/autoeval/datasource/feature四子页+根级配置区) + user(v-else-if) + about(v-else-if)
// 注: 原始 in-DOM 模板中 user/about 的 v-else-if 是 system 根 div 的兄弟节点 (KeepAlive 三节点), 组件化时原样保留
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.SystemPage = {
    name: 'qc-system-page',
    template: window.__quantModules.systemPage.view,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // V4.6 修复: 进入「自动评估」子页强制加载 AI 厂商卡(与刷新按钮同源, 规避 watch 时序/401 残留)
      // V6.6.1 (PRD F-6.6.8 方案A): 用量统计页内跳转对应详情子页
      function goSystemSub(sp) { state.currentSubPage.value = sp; }

      // V6.6.1 (PRD F-6.6.8 方案A): 通知中心独立子页 — 进入即加载三 Tab 数据
      function loadNotificationData() { ncError.value = false; loadAlertRules(); loadAlertHistory(); loadAlertChannels(); }

      Vue.watch(() => state.currentSubPage && state.currentSubPage.value, (sub) => {
        if (sub === 'autoeval' && state.loadAiVendors) state.loadAiVendors();
        if (sub === 'datadict') loadDataDict();
        // V6.0 (P1-3): 数据源健康子页加载健康面板数据 (refreshHealth 为组件本地方法)
        if (sub === 'health') refreshHealth();
        // V6.6.1 (PRD F-6.6.8 方案A): 通知中心独立子页 — 进入即加载三 Tab 数据
        if (sub === 'notification') loadNotificationData();
        // 6.1.2 (B5): 数据源子页进入即加载新鲜度
        if (sub === 'datasource') loadFreshness();
        // 6.1.5 (E4): 离开 usage 子页停止任务队列轮询
        if (sub !== 'usage') _stopJobQueuePolling();
      });
      // V6.9.3 (F6.2): 主题状态全局共享 — 复用 app-logic 的 themeHues/themeMode/themeHue/hueColor/hueName (Header 与基础配置子页一致)
      const themeHues = state.themeHues || [45, 220, 0, 140, 270, 320, 180, 25, 250, -1];  // 金/蓝/红/绿/紫/粉 + 青/橙/靛 + 中性无色相
      const themeHueNames = state.themeHueNames || {};
      const themeMode = state.themeMode || Vue.computed(() => 'light');
      const themeHue = state.themeHue || Vue.ref(45);
      function onThemeModeChange(mode) { if (state.changeThemeMode) state.changeThemeMode(mode); }
      function setThemeHue(h) { if (state.changeThemeHue) state.changeThemeHue(parseInt(h, 10)); }
      function hueColor(h) { return state.hueColor ? state.hueColor(h) : (h < 0 ? 'hsl(0, 0%, 46%)' : 'hsl(' + h + ', 75%, 42%)'); }
      function hueName(h) { return state.hueName ? state.hueName(h) : (themeHueNames[h] || ('自定义 ' + h)); }
      // V6.3 (PRD-6.3 F4): 界面与导航 — 导航形态即时生效 (V6.4: 页签开关已移除; state.navMode/setNavMode 经 ...state 展开)
      function onNavModeChange(v) { if (state.setNavMode) state.setNavMode(v); }
      // 展开全部状态 (100+ 字段, 避免遗漏导致模板静默 undefined)
      // v3.17.15 (FR-3.17.15): 开放 API — API Key 管理 (组件本地状态/方法, 不进 qcState)
      const openApiKeys = Vue.ref([]);
      // 6.1.2 (B5): 数据新鲜度 (datasource 子页)
      const freshnessItems = Vue.ref([]);
      const freshnessLoading = Vue.ref(false);
      const freshnessError = Vue.ref(false);   // 6.3.1 (T-6.3.1.3): 数据新鲜度取数失败 (真实置位)
      async function loadFreshness() {
        freshnessLoading.value = true;
        freshnessError.value = false;
        try {
          const r = await fetch('/api/meta/freshness');
          const d = await r.json();
          if (d && d.success) freshnessItems.value = d.items || [];
          else freshnessError.value = true;
        } catch (e) { freshnessError.value = true; }
        freshnessLoading.value = false;
      }
      const openApiKeyName = Vue.ref('');
      const openApiKeyRole = Vue.ref('read');
      const newOpenApiKey = Vue.ref('');
      const openApiLoading = Vue.ref(false);
      const _core = () => (window.__quantModules && window.__quantModules.core) || {};
      // v3.21 (遗留2): 操作审计
      const auditLogs = Vue.ref([]);
      const auditLoading = Vue.ref(false);

      async function loadAuditLogs() {
        auditLoading.value = true;
        try {
          const res = await fetch('/api/audit/logs?limit=20', { headers: _core().authHeaders ? _core().authHeaders() : {} })
            .then(function (r) { if (!r.ok) throw new Error('HTTP ' + r.status); return r.json(); });
          auditLogs.value = (res && res.logs) || [];
        } catch (e) {
          console.error('[system] 审计加载失败:', e);
          auditLogs.value = [];
        } finally {
          auditLoading.value = false;
        }
      }

      // V5.0 (T-5.0.6): 健康与可靠性面板 — 数据新鲜度 / 自愈时间线 / 启动自检 / 数据源可用性
      const healthLoading = Vue.ref(false);
      const healthError = Vue.ref(null);
      const healthUpdatedAt = Vue.ref(null);
      // V5.3.0 (T-5.3.3.5 / FR-5.3.3.5): 任务队列 — 批量任务进度可见可取消
      const jobQueue = Vue.ref([]);
      const jobQueueTimer = Vue.ref(null);
      function jobStatusText(s) {
        return s === 'completed' ? '完成' : s === 'running' ? '运行中' : s === 'pending' ? '排队中' : s === 'cancelled' ? '已取消' : '失败';
      }
      async function loadJobQueue() {
        try {
          const res = await fetch('/api/jobs?limit=20');
          const data = await res.json();
          if (data && data.success) jobQueue.value = (data.data && data.data.tasks) || [];
        } catch (e) { console.warn('[system] 加载任务队列失败:', e); }
      }
      async function cancelJob(jobId) {
        try {
          await fetch('/api/jobs/' + jobId + '/cancel', { method: 'POST' });
          ElementPlus.ElMessage.success('已请求取消任务');
          loadJobQueue();
        } catch (e) { console.warn('[system] 取消任务失败:', e); }
      }
      function _startJobQueuePolling() {
        loadJobQueue();
        jobQueueTimer.value = window.setInterval(loadJobQueue, 15000);
      }
      // 6.1.5 (E4): 定时器清理 — 离开 usage 子页/组件卸载时停止轮询 (防泄漏)
      function _stopJobQueuePolling() {
        if (jobQueueTimer.value) {
          clearInterval(jobQueueTimer.value);
          jobQueueTimer.value = null;
        }
      }
      if (Vue.onBeforeUnmount) {
        Vue.onBeforeUnmount(function () { _stopJobQueuePolling(); });
      }
      const freshnessData = Vue.ref({ items: [] });
      const healHistory = Vue.ref([]);
      const startupReport = Vue.ref(null);
      const sourceHealth = Vue.ref({ data_sources: [], alerts: [] });

      const _authH = function () { return _core().authHeaders ? _core().authHeaders() : {}; };
      const _healthFetch = function (url) {
        return fetch(url, { headers: _authH() }).then(function (r) {
          if (!r.ok) throw new Error('HTTP ' + r.status);
          return r.json();
        });
      };
      // ─── 6.3.1 (T-6.3.1.3): 调度/护栏/用量/功能配置 四态 ───
      // 错误标志 (healthDetailError/factCheckError/sysMonitorError/feishuConfigError) 均下沉到
      // 真实取数 loader (app-logic/ops.js 与 system.js), 经 qcState 展开, 本页不造探针/包装。

      async function refreshHealth() {
        healthLoading.value = true;
        healthError.value = null;
        try {
          const [f, h, s, sh] = await Promise.all([
            _healthFetch('/api/reliability/freshness'),
            _healthFetch('/api/reliability/heal-history?limit=20'),
            _healthFetch('/api/reliability/startup-report'),
            _healthFetch('/api/reliability/source-health'),
          ]);
          freshnessData.value = (f && f.data) || { items: [] };
          healHistory.value = (h && h.data) || [];
          startupReport.value = (s && s.data) || null;
          sourceHealth.value = sh || { data_sources: [], alerts: [] };
          healthUpdatedAt.value = new Date().toLocaleTimeString();
        } catch (e) {
          console.warn('[health] 加载失败:', e);
          healthError.value = '健康数据加载失败: ' + (e.message || '');
          freshnessData.value = { items: [] };
          healHistory.value = [];
        } finally {
          healthLoading.value = false;
        }
      }
      // V5.0.1 T-5.0.14: 数据字典子页
      const dictLoading = Vue.ref(false);
      const dictError = Vue.ref('');
      const dictCategory = Vue.ref('');
      const dictData = Vue.ref({ fields: [] });
      async function loadDataDict() {
        dictLoading.value = true;
        dictError.value = '';
        try {
          const url = '/api/data-dict' + (dictCategory.value ? '?category=' + dictCategory.value : '');
          const res = await _healthFetch(url);
          dictData.value = (res && res.data) || { fields: [] };
        } catch (e) {
          console.warn('[dict] 加载失败:', e);
          dictError.value = '数据字典加载失败: ' + (e.message || '');
          dictData.value = { fields: [] };
        } finally {
          dictLoading.value = false;
        }
      }
      function statusColor(st) {
        return { fresh: 'var(--color-success)', stale: 'var(--color-danger)', missing: 'var(--text-tertiary)', unknown: 'var(--color-warning)' }[st] || 'var(--text-secondary)';
      }
      function statusLabel(st) {
        return { fresh: '正常', stale: '过期', missing: '缺失', unknown: '未知' }[st] || st;
      }
      // V5.3.0 (T-5.3.6.2): 数据旧了 告警 — stale/missing 资产计数
      const staleAssetCount = Vue.computed(() => {
        const items = freshnessData.value ? (freshnessData.value.items || []) : [];
        return items.filter(it => it.status === 'stale' || it.status === 'missing').length;
      });
      // V5.0.4 T-5.0.45: 通知中心 (规则/投递历史/通道状态+静默) — 本地状态
      const ncTab = Vue.ref('rules');
      const ncRules = Vue.ref([]);
      const ncHistory = Vue.ref([]);
      const ncChannels = Vue.ref([]);
      const ncLoading = Vue.ref(false);
      const ncNewCode = Vue.ref('');
      const ncNewType = Vue.ref('price_above');
      const ncNewThreshold = Vue.ref('');
      const ncSilence = Vue.ref(false);
      const ncSilenceMinutes = Vue.ref(60);
      const ncMsg = Vue.ref('');
      const ncError = Vue.ref(false);   // 6.3.1 (T-6.3.1.3): 通知中心取数失败 (真实置位)
      function ncTypeLabel(t) {
        return { price_above: '价格突破', price_below: '价格跌破', pct_change: '涨跌幅超', volume_surge: '量比异动', new_pool: '入池' }[t] || t;
      }
      async function loadAlertRules() {
        ncLoading.value = true;
        ncError.value = false;
        try {
          const r = await (await fetch('/api/alerts/rules')).json();
          ncRules.value = (r && r.rules) || [];
        } catch (err) { ncMsg.value = '规则加载失败: ' + err; ncError.value = true; }
        finally { ncLoading.value = false; }
      }
      async function loadAlertHistory() {
        ncLoading.value = true;
        ncError.value = false;
        try {
          const r = await (await fetch('/api/alerts/history?limit=50')).json();
          ncHistory.value = (r && r.history) || [];
        } catch (err) { ncMsg.value = '历史加载失败: ' + err; ncError.value = true; }
        finally { ncLoading.value = false; }
      }
      async function loadAlertChannels() {
        ncLoading.value = true;
        ncError.value = false;
        try {
          const c = await (await fetch('/api/alerts/channels')).json();
          const s = await (await fetch('/api/alerts/silence')).json();
          ncChannels.value = (c && c.channels) || [];
          ncSilence.value = !!(s && s.silenced);
        } catch (err) { ncMsg.value = '通道状态加载失败: ' + err; ncError.value = true; }
        finally { ncLoading.value = false; }
      }
      function onNcTab(tab) {
        ncTab.value = tab;
        if (tab === 'rules') loadAlertRules();
        else if (tab === 'history') loadAlertHistory();
        else loadAlertChannels();
      }
      async function addAlertRule() {
        const code = ncNewCode.value.trim();
        if (!code) { ncMsg.value = '请填写股票代码'; return; }
        ncLoading.value = true;
        try {
          const body = { stock_code: code, rule_type: ncNewType.value };
          if (ncNewType.value !== 'new_pool') {
            const t = Number(ncNewThreshold.value);
            if (isNaN(t)) { ncMsg.value = '阈值必须为数值'; return; }
            body.threshold = t;
          }
          const r = await (await fetch('/api/alerts/rules', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) })).json();
          if (r && r.rule) { ncMsg.value = '规则已添加'; ncNewCode.value = ''; ncNewThreshold.value = ''; loadAlertRules(); }
          else ncMsg.value = (r && r.detail) || '添加失败';
        } catch (err) { ncMsg.value = '添加失败: ' + err; }
        finally { ncLoading.value = false; }
      }
      async function toggleAlertRule(rule) {
        try {
          await fetch('/api/alerts/rules/' + rule.id, { method: 'PUT', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ enabled: !rule.enabled }) });
          rule.enabled = !rule.enabled;
        } catch (err) { ncMsg.value = '切换失败: ' + err; }
      }
      async function removeAlertRule(rule) {
        try {
          const r = await (await fetch('/api/alerts/rules/' + rule.id, { method: 'DELETE' })).json();
          if (r && r.success) { ncMsg.value = '规则已删除'; loadAlertRules(); }
          else ncMsg.value = '删除失败';
        } catch (err) { ncMsg.value = '删除失败: ' + err; }
      }
      async function applySilence() {
        try {
          const minutes = ncSilence.value ? ncSilenceMinutes.value : 0;
          const r = await (await fetch('/api/alerts/silence', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ minutes }) })).json();
          ncSilence.value = !!(r && r.silenced);
          ncMsg.value = ncSilence.value ? '已静默' : '已恢复推送';
        } catch (err) { ncMsg.value = '静默设置失败: ' + err; }
      }
      async function clearSilence() {
        ncSilence.value = false;
        await applySilence();
      }
      function sourceOk(s) { return !!s && !s.degraded; }
      // 页面热度相对条最大参考值 (v3.17 UI优化) — v3.18.6 fix: state.analyticsRank 为 ref, 需 .value 取数组
      const analyticsMaxViews = Vue.computed(() => {
        const rank = (state && state.analyticsRank && state.analyticsRank.value) || [];
        return rank.reduce((m, r) => Math.max(m, r.views || 0), 0) || 1;
      });
      // 开放 API 路由常量 (core.js 单一来源, 供一致性测试断言)
      const _openapiBase = () => _core().OPENAPI_ROUTE_BASE || '/api/openapi';

      async function loadOpenApiKeys() {
        openApiLoading.value = true;
        try {
          const r = await _core().apiFetch(_openapiBase() + '/keys');
          openApiKeys.value = (r && r.data) || [];
        } catch (e) {
          ElementPlus.ElMessage.error('加载 API Key 失败: ' + (e.message || ''));
        } finally {
          openApiLoading.value = false;
        }
      }

      async function generateOpenApiKey() {
        try {
          const r = await _core().apiFetch(_openapiBase() + '/keys', {
            method: 'POST',
            body: JSON.stringify({
              name: openApiKeyName.value || '未命名',
              role: openApiKeyRole.value || 'read',
              expire_days: 365,
            }),
          });
          if (r && r.success) {
            // 明文仅本次返回一次性展示, 不落库/不落日志
            newOpenApiKey.value = r.api_key || '';
            openApiKeyName.value = '';
            ElementPlus.ElMessage.success('API Key 已生成（明文仅展示一次）');
            await loadOpenApiKeys();
          } else {
            ElementPlus.ElMessage.error((r && (r.detail || r.message)) || '生成失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('生成失败: ' + (e.message || ''));
        }
      }

      async function copyOpenApiKey() {
        if (!newOpenApiKey.value) return;
        try {
          await navigator.clipboard.writeText(newOpenApiKey.value);
          ElementPlus.ElMessage.success('已复制');
        } catch (e) {
          ElementPlus.ElMessage.error('复制失败，请手动复制');
        }
      }

      async function revokeOpenApiKey(k) {
        try {
          const r = await _core().apiFetch(_openapiBase() + '/keys/' + k.id, { method: 'DELETE' });
          if (r && r.success) {
            ElementPlus.ElMessage.success('Key 已吊销');
            if (newOpenApiKey.value && k.prefix && newOpenApiKey.value.includes(k.prefix)) {
              newOpenApiKey.value = '';
            }
            await loadOpenApiKeys();
          } else {
            ElementPlus.ElMessage.error((r && (r.detail || r.message)) || '吊销失败');
          }
        } catch (e) {
          ElementPlus.ElMessage.error('吊销失败: ' + (e.message || ''));
        }
      }

      // v3.17.5: 数据健康度 (自策略总览移入) — 各源成功率/degraded/延迟/新鲜度
      const HEALTH_NAMES = { 'sxsc_tushare': '东财', 'tushare': 'Tushare', 'akshare': 'AkShare' };
      function healthName(name) { return HEALTH_NAMES[name] || name; }
      const healthRows = computed(() => (state.healthMetrics?.value || []).map(s => ({
        name: healthName(s.name), source: s.name,
        success_rate: s.success_rate, avg_latency_ms: s.avg_latency_ms,
        calls: s.calls || 0, degraded: !!s.degraded,
        data_age_hours: s.data_age_hours != null ? s.data_age_hours : null,
        stale: !!s.stale, last_fetch: s.last_fetch || s.last_success || null,
      })));
      function healthClass(s) {
        if (s.degraded) return 'degraded';
        if (s.success_rate == null) return 'unknown';
        if (s.success_rate >= 90) return 'ok';
        if (s.success_rate >= 60) return 'warn';
        return 'bad';
      }
      // v3.12 (FR-3.12.2): 数据年龄格式化 (小时 → 友好文案)
      function fmtAge(hours) {
        if (hours == null) return '';
        if (hours < 1) return '刚刚';
        if (hours < 24) return Math.round(hours) + '小时前';
        const days = Math.floor(hours / 24);
        return days + '天前';
      }

      // v3.17.6 (FR-3.17.6): AI 用量 — 模型分布/近30天趋势/今日调用 (数据源 /api/ai/usage-stats)
      const aiUsageRef = state.aiUsage || Vue.ref({});
      const aiModelRank = Vue.computed(() => {
        const by = (aiUsageRef.value && aiUsageRef.value.by_model) || {};
        return Object.entries(by).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count);
      });
      const aiModelMax = Vue.computed(() => aiModelRank.value.reduce((m, r) => Math.max(m, r.count), 0) || 1);
      // v3.18.2 (UI 优化): 模型总调用数 / 趋势峰值 (用于占比与峰值标注)
      const aiTotal = Vue.computed(() => aiModelRank.value.reduce((s, r) => s + r.count, 0) || 1);
      const aiDayPeak = Vue.computed(() => aiDayTrend.value.reduce((m, d) => Math.max(m, d.count), 0) || 0);
      const aiDayTrend = Vue.computed(() => {
        const by = (aiUsageRef.value && aiUsageRef.value.by_day) || {};
        const out = [];
        const today = new Date();
        for (let i = 29; i >= 0; i--) {
          const d = new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
          const key = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
          out.push({ day: key, count: by[key] || 0 });
        }
        return out;
      });
      const aiDayMax = Vue.computed(() => aiDayTrend.value.reduce((m, d) => Math.max(m, d.count), 0) || 1);
      const todayAiCalls = Vue.computed(() => {
        const by = (aiUsageRef.value && aiUsageRef.value.by_day) || {};
        const t = new Date();
        const key = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
        return by[key] || 0;
      });
      const lastAiCallDay = Vue.computed(() => {
        const by = (aiUsageRef.value && aiUsageRef.value.by_day) || {};
        const days = Object.keys(by).filter(k => (by[k] || 0) > 0);
        return days.length ? days[days.length - 1] : '';
      });
      // v3.17.6: 页面热度天数切换 (7/14/30 天)
      function setAnalyticsDays(days) {
        if (state.analyticsDays) state.analyticsDays.value = days;
        if (typeof state.loadAnalytics === 'function') state.loadAnalytics();
      }

      // V4.0.1: 密钥查看/收起 — 线性 feather eye / eye-off SVG (替代 emoji 👁️/🙈)
      const VIEW_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>';
      const VIEW_OFF_ICON = '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/></svg>';
      function viewIcon(revealed) { return revealed ? VIEW_OFF_ICON : VIEW_ICON; }

      // V5.3.0 (T-5.3.3.5): 进入系统页即轮询任务队列 (15s 刷新, 批量长任务进度可见)
      _startJobQueuePolling();

      return {
        ...state,
        // V6.1 (PRD-6.1 F5): 外观设置
        themeHues, themeHueNames, themeMode, themeHue,
        onThemeModeChange, setThemeHue, hueColor, hueName,
        // V6.3 (PRD-6.3 F4): 界面与导航
        onNavModeChange,
        analyticsMaxViews,
        aiModelRank, aiModelMax, aiDayTrend, aiDayMax, todayAiCalls, lastAiCallDay,
        aiTotal, aiDayPeak,
        setAnalyticsDays,
        viewIcon,
        openApiKeys, openApiKeyName, openApiKeyRole, newOpenApiKey, openApiLoading,
        loadOpenApiKeys, generateOpenApiKey, copyOpenApiKey, revokeOpenApiKey,
        healthRows, healthClass, fmtAge,
        // V5.3.0 (T-5.3.6.2): 数据旧了告警
        staleAssetCount,
        // V5.3.0 (T-5.3.3.5): 任务队列
        jobQueue, loadJobQueue, cancelJob, jobStatusText,
        auditLogs, auditLoading, loadAuditLogs,
        // V5.0 T-5.0.6: 健康与可靠性面板
        healthLoading, healthError, healthUpdatedAt,
        freshnessData, healHistory, startupReport, sourceHealth,
        refreshHealth, statusColor, statusLabel, sourceOk,
        // V5.0.1 T-5.0.14: 数据字典
        dictLoading, dictError, dictCategory, dictData, loadDataDict,
        // V5.0.4 T-5.0.45: 通知中心
        ncTab, ncRules, ncHistory, ncChannels, ncLoading, ncNewCode, ncNewType,
        ncNewThreshold, ncSilence, ncSilenceMinutes, ncMsg, ncTypeLabel,
        onNcTab, loadAlertRules, loadAlertHistory, loadAlertChannels,
        addAlertRule, toggleAlertRule, removeAlertRule, applySilence, clearSilence,
        // 6.1.2 (B5): 数据新鲜度
        freshnessItems, freshnessLoading, freshnessError, loadFreshness,
        // 6.3.1 (T-6.3.1.3): 通知中心四态
        ncError,
        goSystemSub,
      };
    },
  };
})();
