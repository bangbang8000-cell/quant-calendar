// quant-calendar: 系统配置域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：AI/飞书/Tushare/多数据源配置、限流、配置导入导出、系统状态。
// 工厂模式：window.__quantModules.system.create(deps) → 该域全部状态与函数。
// deps（共享依赖，均为 ref/函数，由 app-logic 传入）:
//   configChanged aiConfig aiLoading feishuConfig currentTheme changeTheme autoEvaluateConfig
//   iconSystem researchMenuEnabled currentUser strategyFilter applyTheme
//   dashboardData lastRefreshTime saveAiModels
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.system = {
    create(deps) {
      const { ref, computed, watch } = Vue;
      const { configChanged, aiConfig, aiLoading, feishuConfig, currentTheme, changeTheme, autoEvaluateConfig,
              iconSystem, researchMenuEnabled, currentUser, strategyFilter, applyTheme,
              dashboardData, lastRefreshTime, saveAiModels } = deps;

const configSaving = ref(false);
// configChanged: 由 app-logic 提升为共享 ref（AI 配置段与本域共用），此处不再定义
// v1.3.0: 全局配置变更跟踪
const globalConfigDirty = ref(false);
const lastSavedTime = ref(null);
const feishuConfigOriginal = ref(null);
const aiConfigOriginal = ref(null);
const tushareConfigOriginal = ref(null);
// v1.3.0: Tushare 配置
const tushareConfig = ref({ token: '', endpoint: 'http://api.tushare.pro', timeout: 30 });
const tushareStatus = ref('disconnected');
// v1.8.0: 多数据源配置
const datasourceConfig = ref({
    sxsc_tushare: { enabled: true, token: '', timeout: 30 },
    tushare: { enabled: true, token: '', endpoint: 'http://api.tushare.pro', timeout: 30 },
    akshare: { enabled: true }
});
const datasourceStatus = ref({
    sxsc_tushare: 'unknown',
    tushare: 'unknown',
    akshare: 'unknown'
});
const syncingData = ref(false);
const stockCount = ref(null);
const tradeDateCount = ref(null);
const aiStatus = ref('pending');
const appVersion = ref('...'); // v1.12: 从 /api/health 动态获取
const showImportDialog = ref(false);
const rateLimitConfig = ref({ api_limit: 600 });
const rateLimitDirty = ref(false);
const rateLimitSaving = ref(false);
async function loadRateLimit() {
    try {
        const res = await fetch('/api/system/rate-limit');
        const data = await res.json();
        if (data.success) rateLimitConfig.value = data.data;
    } catch (e) { console.warn('loadRateLimit failed:', e); }
}
async function saveRateLimit() {
    rateLimitSaving.value = true;
    try {
        const res = await fetch('/api/system/rate-limit', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rateLimitConfig.value)
        });
        const data = await res.json();
        if (data.success) {
            rateLimitDirty.value = false;
            ElementPlus.ElMessage.success('限流配置已更新');
        } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('保存失败');
    } finally {
        rateLimitSaving.value = false;
    }
}

// 监听配置变化
watch(() => [aiConfig.value.provider, aiConfig.value.apiKey, aiConfig.value.endpoint, aiConfig.value.model], () => {
    configChanged.value = true;
}, { deep: true });

async function saveAiConfig() {
    configSaving.value = true;
    try {
        // 1. 本地存储（立即生效）
        localStorage.setItem('quant_ai_config', JSON.stringify(aiConfig.value));

        // 2. 后端同步
        const res = await fetch('/api/ai/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aiConfig.value)
        });
        const data = await res.json();

        if (data.success) {
            configChanged.value = false;
            ElementPlus.ElMessage.success('AI配置已保存');
        } else {
            ElementPlus.ElMessage.warning('已保存到本地，同步失败');
        }
    } catch (e) {
        localStorage.setItem('quant_ai_config', JSON.stringify(aiConfig.value));
        ElementPlus.ElMessage.warning('已保存到本地（离线）');
        console.error('保存配置失败:', e);
    } finally {
        configSaving.value = false;
    }
}

async function testAiApi() {
    aiLoading.value = true;
    try {
        const res = await fetch('/api/ai/test');
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success(data.message || 'API连接正常');
        } else {
            ElementPlus.ElMessage.error(data.message || '测试失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('连接失败');
    } finally {
        aiLoading.value = false;
    }
}

// ===== 配置导出 =====
function exportConfig() {
    const allConfig = {
        ai: aiConfig.value,
        feishu: feishuConfig.value,
        theme: currentTheme.value,
        export_time: new Date().toISOString()
    };
    const blob = new Blob([JSON.stringify(allConfig, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `quant-calendar-config-${new Date().toISOString().slice(0,10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    ElementPlus.ElMessage.success('配置已导出');
}

// ===== 配置导入 =====
function importConfig(event) {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const config = JSON.parse(e.target.result);
            if (config.ai) {
                aiConfig.value = { ...aiConfig.value, ...config.ai };
                await saveAiConfig();
            }
            if (config.feishu) {
                Object.assign(feishuConfig.value, config.feishu);
                // 保存到后端
                await fetch('/api/feishu/config', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(config.feishu)
                });
            }
            if (config.theme) {
                currentTheme.value = config.theme;
                changeTheme(config.theme);
            }
            ElementPlus.ElMessage.success('配置已导入');
        } catch (err) {
            ElementPlus.ElMessage.error('导入失败：格式错误');
        }
    };
    reader.readAsText(file);
    event.target.value = '';
}

async function saveAllConfig() {
    configSaving.value = true;

    // v1.12: 并行保存，容错不中断
    const saves = [
        fetch('/api/user/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ config: {
                tushare: tushareConfig.value,
                feishu: feishuConfig.value,
                ai: aiConfig.value,
                rate_limit: rateLimitConfig.value,
                auto_evaluate: autoEvaluateConfig.value,
                theme: currentTheme.value,
                icon_system: iconSystem.value,
                research_menu_enabled: researchMenuEnabled.value
            }})
        }).then(r => ['userConfig', r.ok]),
        fetch('/api/market/tushare/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(tushareConfig.value)
        }).then(r => ['tushare', r.ok]),
        fetch('/api/market/datasource/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sources: datasourceConfig.value })
        }).then(r => ['datasource', r.ok]),
        fetch('/api/feishu/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(feishuConfig.value)
        }).then(r => ['feishu', r.ok]),
        fetch('/api/ai/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(aiConfig.value)
        }).then(r => ['ai', r.ok]),
        fetch('/api/system/rate-limit', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(rateLimitConfig.value)
        }).then(r => ['rateLimit', r.ok]),
        saveAiModels().then(() => ['aiModels', true], () => ['aiModels', false])
    ];

    const results = await Promise.allSettled(saves);
    const ok = results.filter(r => r.status === 'fulfilled' && r.value[1]).length;
    const fail = results.filter(r => r.status === 'rejected' || (r.status === 'fulfilled' && !r.value[1])).length;

    rateLimitDirty.value = false;
    // 策略筛选保存到 localStorage
    localStorage.setItem('quant_strategy_filter_selected', JSON.stringify(strategyFilter.value.selected));
    localStorage.setItem('quant_strategy_filter_mode', strategyFilter.value.mode);
    // 主题同步到用户后端
    if (currentUser.value) {
        fetch(`/api/users/${currentUser.value.username}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ theme: currentTheme.value })
        }).catch(() => {});
    }

    globalConfigDirty.value = false;
    lastSavedTime.value = new Date().toLocaleString('zh-CN');
    configSaving.value = false;
    // v1.12: 静默保存（仅在状态栏体现，不弹 toast）
    if (fail > 0) {
        console.error(`[saveAllConfig] ${ok}/${ok+fail} 项保存成功，${fail} 项失败`);
    }
}
async function resetAllConfig() {
    // v1.12: 真正从后端重新加载配置
    try {
        const res = await fetch('/api/user/config');
        const data = await res.json();
        if (data.success && data.config) {
            const c = data.config;
            if (c.tushare) tushareConfig.value = { ...tushareConfig.value, ...c.tushare };
            if (c.feishu) feishuConfig.value = { ...feishuConfig.value, ...c.feishu };
            if (c.ai) aiConfig.value = { ...aiConfig.value, ...c.ai };
            if (c.rate_limit) rateLimitConfig.value = { ...rateLimitConfig.value, ...c.rate_limit };
            if (c.auto_evaluate) autoEvaluateConfig.value = { ...autoEvaluateConfig.value, ...c.auto_evaluate };
            // Only apply config theme if user hasn't manually selected one
            if (c.theme && !localStorage.getItem('quant_theme')) applyTheme(c.theme);
            if (c.icon_system) { iconSystem.value = c.icon_system; localStorage.setItem('icon_system', c.icon_system); }
            if (c.research_menu_enabled !== undefined) { researchMenuEnabled.value = c.research_menu_enabled; localStorage.setItem('research_menu_enabled', c.research_menu_enabled ? '1' : '0'); }
        }
        globalConfigDirty.value = false;
        rateLimitDirty.value = false;
    } catch (e) {
        console.error('[resetAllConfig] 重新加载配置失败:', e);
        globalConfigDirty.value = false;
    }
}
async function testTushareConnection() {
    tushareStatus.value = 'testing';
    try {
        const res = await fetch('/api/market/tushare/test', { method: 'POST' });
        const data = await res.json();
        tushareStatus.value = data.success ? 'connected' : 'disconnected';
        if (data.success) {
            const detail = data.data_count ? ` (获取到 ${data.data_count} 条数据)` : '';
            ElementPlus.ElMessage.success('Tushare 连接成功' + detail);
        } else {
            ElementPlus.ElMessage.error(data.message || '连接失败');
        }
    } catch (e) {
        tushareStatus.value = 'disconnected';
        ElementPlus.ElMessage.error('连接失败');
    }
}
// 静默检测 Tushare 连接（不弹提示）
async function checkTushareConnection() {
    try {
        const res = await fetch('/api/market/tushare/test', { method: 'POST' });
        const data = await res.json();
        tushareStatus.value = data.success ? 'connected' : 'disconnected';
    } catch (e) {
        tushareStatus.value = 'disconnected';
    }
}
async function syncStockData() {
    syncingData.value = true;
    try {
        const res = await fetch('/api/market/tushare/sync', { method: 'POST', headers: { 'Content-Type': 'application/json' } });
        const data = await res.json();
        if (data.success) {
            stockCount.value = parseInt(data.message.match(/\d+/)?.[0] || '0');
            ElementPlus.ElMessage.success(data.message);
        } else {
            ElementPlus.ElMessage.error(data.message || '同步失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('同步失败');
    } finally {
        syncingData.value = false;
    }
}
async function loadTushareConfig() {
    try {
        const res = await fetch('/api/market/tushare/config');
        const data = await res.json();
        if (data.success && data.config) {
            tushareConfig.value = { ...tushareConfig.value, ...data.config };
        }
    } catch (e) { console.warn('loadTushareConfig failed:', e); }
}
// V4.0 需求2: 密钥部分掩码 (与后端 secret_utils.mask_secret 同规则)
function _maskSecret(s) {
    if (!s) return '';
    const str = String(s);
    const n = str.length;
    if (n <= 4) return str[0] + '*'.repeat(n - 1);
    const head = n <= 8 ? 2 : 4;
    return str.slice(0, head) + '*'.repeat(n - head - head) + str.slice(-head);
}

// V4.0 需求2: 查看完整密钥 — 密码框验证后经 /api/system/reveal-secret 取完整值
async function _revealSecret(target) {
    let password;
    try {
        const r = await ElementPlus.ElMessageBox.prompt('请输入查看密码（默认密码见项目 README「密钥查看」说明）', '查看完整密钥', {
            inputType: 'password',
            inputPattern: /^.+$/,
            inputErrorMessage: '密码不能为空',
            confirmButtonText: '查看',
            cancelButtonText: '取消',
        });
        password = r.value;
    } catch (e) {
        return null; // 用户取消
    }
    try {
        const res = await fetch('/api/system/reveal-secret', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password, target }),
        });
        const data = await res.json();
        if (data.success) return data.secret;
        ElementPlus.ElMessage.error(data.message || '查看失败');
    } catch (e) {
        ElementPlus.ElMessage.error('查看失败: ' + e.message);
    }
    return null;
}

async function toggleDatasourceKeyReveal(source) {
    const ds = datasourceConfig.value[source];
    if (!ds) return;
    if (ds._revealed) {
        // 已展示 → 收起并重新掩码（保留用户编辑后的值）
        ds._revealed = false;
        ds._masked = _maskSecret(ds.token);
        return;
    }
    const full = await _revealSecret(source);
    if (full === null) return;
    ds.token = full;
    ds._revealed = true;
}

// v1.8.0: 多数据源配置
async function loadDatasourceConfig() {
    try {
        const res = await fetch('/api/market/datasource/config');
        const data = await res.json();
        if (data.success && data.config && data.config.sources) {
            const srcs = data.config.sources;
            const decorate = (key) => {
                const merged = { ...datasourceConfig.value[key], ...(srcs[key] || {}) };
                merged._revealed = false;
                merged._masked = merged.token || '';
                return merged;
            };
            datasourceConfig.value = {
                sxsc_tushare: decorate('sxsc_tushare'),
                tushare: decorate('tushare'),
                akshare: { ...datasourceConfig.value.akshare, ...(srcs.akshare || {}) }
            };
        }
        // 同时获取状态
        try {
            const sr = await fetch('/api/market/datasource/status');
            const sd = await sr.json();
            if (sd.success && sd.status) {
                for (const [k, v] of Object.entries(sd.status)) {
                    datasourceStatus.value[k] = v.connected ? 'connected' : 'disconnected';
                }
            }
        } catch (e2) {}
    } catch (e) { console.warn('loadDatasourceConfig failed:', e); }
}
async function saveDatasourceConfig() {
    try {
        // 剔除前端掩码展示标志 (_revealed/_masked), 只提交后端 schema 字段
        const cleanSources = {};
        for (const [k, v] of Object.entries(datasourceConfig.value)) {
            const { _revealed, _masked, ...rest } = v;
            cleanSources[k] = rest;
        }
        await fetch('/api/market/datasource/config', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ sources: cleanSources })
        });
        globalConfigDirty.value = true;
    } catch (e) { console.warn('saveDatasourceConfig failed:', e); }
}
async function testDatasource(source) {
    datasourceStatus.value[source] = 'testing';
    try {
        const res = await fetch(`/api/market/datasource/test/${source}`, { method: 'POST' });
        const data = await res.json();
        datasourceStatus.value[source] = data.success ? 'connected' : 'disconnected';
        if (data.success) {
            ElementPlus.ElMessage.success(`${source} 连接成功`);
        } else {
            ElementPlus.ElMessage.error(`${source}: ${data.message}`);
        }
    } catch (e) {
        datasourceStatus.value[source] = 'disconnected';
        ElementPlus.ElMessage.error(`${source} 连接失败`);
    }
}
async function loadFeishuConfig() {
    try {
        const res = await fetch('/api/feishu/config');
        const data = await res.json();
        if (data && typeof data === 'object') {
            feishuConfig.value = { ...feishuConfig.value, ...data };
            feishuConfigOriginal.value = JSON.parse(JSON.stringify(feishuConfig.value));
        }
    } catch (e) { console.warn('loadFeishuConfig failed:', e); }
}
async function loadAiConfig() {
    try {
        const res = await fetch('/api/ai/config');
        const data = await res.json();
        if (data.success && data.data) {
            aiConfig.value = { ...aiConfig.value, ...data.data };
        } else {
            const savedAi = localStorage.getItem('quant_ai_config');
            if (savedAi) aiConfig.value = JSON.parse(savedAi);
        }
    } catch (e) {
        const savedAi = localStorage.getItem('quant_ai_config');
        if (savedAi) aiConfig.value = JSON.parse(savedAi);
    }
}
// v1.5.7: 从用户专属端点加载所有配置
async function loadUserConfig() {
    try {
        const res = await fetch('/api/user/config');
        const data = await res.json();
        if (data.success && data.config) {
            const c = data.config;
            if (c.tushare) tushareConfig.value = { ...tushareConfig.value, ...c.tushare };
            if (c.datasource && c.datasource.sources) {
                datasourceConfig.value = {
                    sxsc_tushare: { ...datasourceConfig.value.sxsc_tushare, ...(c.datasource.sources.sxsc_tushare || {}) },
                    tushare: { ...datasourceConfig.value.tushare, ...(c.datasource.sources.tushare || {}) },
                    akshare: { ...datasourceConfig.value.akshare, ...(c.datasource.sources.akshare || {}) }
                };
            }
            if (c.feishu) {
                feishuConfig.value = { ...feishuConfig.value, ...c.feishu };
                feishuConfigOriginal.value = JSON.parse(JSON.stringify(feishuConfig.value));
            }
            if (c.ai) aiConfig.value = { ...aiConfig.value, ...c.ai };
            if (c.rate_limit) rateLimitConfig.value = { ...rateLimitConfig.value, ...c.rate_limit };
            if (c.theme && !localStorage.getItem('quant_theme')) applyTheme(c.theme);
            if (c.auto_evaluate) autoEvaluateConfig.value = { ...autoEvaluateConfig.value, ...c.auto_evaluate };
            if (c.icon_system) { iconSystem.value = c.icon_system; localStorage.setItem('icon_system', c.icon_system); }
            if (c.research_menu_enabled !== undefined) { researchMenuEnabled.value = c.research_menu_enabled; localStorage.setItem('research_menu_enabled', c.research_menu_enabled ? '1' : '0'); }
        }
    } catch (e) {
        console.warn('加载用户配置失败，使用本地缓存', e);
    }
}

// v1.3.0: 加载系统状态
async function loadSystemStatus() {
    try {
        // 股票数据数量（从概览接口获取）
        const infoRes = await fetch('/api/dashboard');
        const infoData = await infoRes.json();
        const dashInfo = infoData.success ? infoData.data : infoData;
        stockCount.value = dashInfo?.stats?.total_stocks_covered || null;
        // 交易日数量
        const datesRes = await fetch('/api/dates');
        const datesData = await datesRes.json();
        tradeDateCount.value = datesData?.data?.total || datesData?.data?.dates?.length || null;
        // AI状态
        const aiRes = await fetch('/api/ai/history');
        const aiData = await aiRes.json();
        aiStatus.value = 'ok';
    } catch (e) {
        aiStatus.value = 'pending';
    }
}
async function loadDashboardData() {
    try {
        const res = await fetch('/api/dashboard');
        const dashResp = await res.json();
        dashboardData.value = dashResp.success ? dashResp.data : dashResp;
        lastRefreshTime.value = Date.now();
    } catch (e) {
        console.error('加载总览数据失败', e);
    }
}

      return {
        configSaving, configChanged, globalConfigDirty, lastSavedTime,
        feishuConfigOriginal, aiConfigOriginal, tushareConfigOriginal,
        tushareConfig, tushareStatus, datasourceConfig, datasourceStatus,
        syncingData, stockCount, tradeDateCount, aiStatus, appVersion, showImportDialog,
        rateLimitConfig, rateLimitDirty, rateLimitSaving, loadRateLimit, saveRateLimit,
        saveAiConfig, testAiApi, exportConfig, importConfig,
        saveAllConfig, resetAllConfig, testTushareConnection, checkTushareConnection,
        syncStockData, loadTushareConfig, loadDatasourceConfig, saveDatasourceConfig, testDatasource, toggleDatasourceKeyReveal,
        loadFeishuConfig, loadAiConfig, loadUserConfig, loadSystemStatus, loadDashboardData,
      };
    }
  };
})();
