// quant-calendar: AI 评估域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：AI 评估、AI 模型管理、自动评估配置、评估历史选择状态。
// 工厂模式：window.__quantModules.ai.create(deps) → 该域状态与函数。
// 依赖仅浏览器全局（fetch/localStorage/ElementPlus），后续可扩展 AI 问股/快捷评股。
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules.ai = {
    create(deps) {
      const { ref, computed } = Vue;
      const { configChanged, consensus } = deps;

// ===== AI评估 =====
const aiResult = ref(null);
const lastEvalTime = ref('');
const evalHistoryComparison = ref(null);  // {prevScore, currScore, diff}
const checklistItems = ref([]);  // [{icon, label}]
const aiHistory = ref([]);
const selectedHistoryIds = ref([]);
const expandedDates = ref([]);  // 已展开的日期 (YYYY-MM-DD)
const expandedMonths = ref([]);  // 已展开的月份 (YYYY-MM)
const expandedStocks = ref([]);  // 已展开的股票代码
const poolSignals = ref({});  // v3.7.11: 入池信号解读缓存

// 切换月份展开
function toggleMonthExpand(month) {
    const idx = expandedMonths.value.indexOf(month);
    if (idx >= 0) expandedMonths.value.splice(idx, 1);
    else expandedMonths.value.push(month);
}
const aiHistoryView = ref('date');  // date 或 stock
const selectedWatchlistCodes = ref([]);
const showAutoEvaluateSettings = ref(false);
const savingConfig = ref(false);
const autoEvaluateScope = ref('watchlist');  // v1.8.0: 默认自选

// ─── AI 模型管理 ──────────────────────────────────
const aiModels = ref([]);
const aiModelsError = ref('');
const testingAllModels = ref(false);
const savingAiModels = ref(false);

async function loadAiModels() {
    try {
        aiModelsError.value = '';
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch('/api/ai/models', { headers });
        if (res.status === 401) {
            aiModelsError.value = '请先登录后再查看模型配置';
            return;
        }
        if (!res.ok) {
            aiModelsError.value = `服务器错误 (${res.status})`;
            return;
        }
        const data = await res.json();
        if (data.success) {
            aiModels.value = (data.data || []).map(m => ({ ...m, _expanded: false, _testing: false, testResult: undefined }));
            aiModelsError.value = '';
        } else {
            aiModelsError.value = data.message || '加载失败';
        }
    } catch(e) {
        aiModelsError.value = '网络错误: ' + e.message;
    }
}

function onModelToggle(model) {
    // 仅更新优先级，不重新排序（避免 v-for 渲染混乱）
    const enabled = aiModels.value.filter(m => m.enabled);
    enabled.forEach((m, i) => m.priority = i);
    const disabled = aiModels.value.filter(m => !m.enabled);
    disabled.forEach((m, i) => m.priority = enabled.length + i);
    // 排序延迟到保存时执行
}

async function testModel(model) {
    model._testing = true;
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch(`/api/ai/models/test/${encodeURIComponent(model.id)}`, {
            method: 'POST', headers
        });
        const data = await res.json();
        model.testResult = data;
    } catch(e) {
        model.testResult = { success: false, message: e.message };
    }
    model._testing = false;
}

async function testAllModels() {
    testingAllModels.value = true;
    for (const m of aiModels.value) {
        if (m.api_key) {
            await testModel(m);
        } else {
            m.testResult = { success: false, message: '未配置 API Key' };
        }
    }
    testingAllModels.value = false;
    ElementPlus.ElMessage.success('全部探测完成');
}

async function saveAiModels() {
    savingAiModels.value = true;
    try {
        const token = localStorage.getItem('quant_token');
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = `Bearer ${token}`;
        // Re-prioritize before save
        aiModels.value.forEach((m, i) => m.priority = i);
        const res = await fetch('/api/ai/models', {
            method: 'POST',
            headers,
            body: JSON.stringify({ models: aiModels.value.map(m => {
                const { _expanded, _testing, testResult, ...clean } = m;
                return clean;
            })})
        });
        const data = await res.json();
        if (data.success) {
    // 模型配置已静默保存
        } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
        }
    } catch(e) {
        ElementPlus.ElMessage.error('保存失败: ' + e.message);
    }
    savingAiModels.value = false;
}

function addModel() {
    const newId = 'new-model-' + Date.now();
    aiModels.value.push({
        id: newId,
        provider: '',
        model: '',
        base_url: '',
        api_key: '',
        enabled: false,
        priority: aiModels.value.length,
        timeout: 60,
        max_tokens: 4096,
        _expanded: false,
        _testing: false,
        testResult: undefined
    });
    ElementPlus.ElMessage.success('模型已添加');
}

function deleteModel(idx) {
    const m = aiModels.value[idx];
    if (!m) return;
    if (confirm('确定删除模型 "' + m.id + '"？')) {
        aiModels.value.splice(idx, 1);
        ElementPlus.ElMessage.success('已删除，请点击保存生效');
    }
}
const autoEvaluateConfig = ref({
    enabled: false,
    schedule_type: 'daily',
    schedule_time: '09:00',
    selected_strategies: [],
    selected_stocks: [],
    push_to_feishu: true,
    feishu_webhook: ''
});

// ===== AI 评估配置（v3.11 从 app-logic 前段并入；configChanged 由 deps 共享）=====
const aiLoading = ref(false);
const aiEvalStage = ref('');  // '', 'fetching', 'calculating', 'analyzing'
const showBatchEvaluate = ref(false);
const batchStocks = ref('');
const batchRunning = ref(false);
const batchTotal = ref(0);
const batchCompleted = ref(0);
const batchCurrent = ref('');
const batchStatuses = ref({});
const batchResults = ref({});  // v1.10: 批量结果详情
const aiConfig = ref({
    provider: 'codingplan',
    apiKey: '',
    endpoint: '',
    model: 'gpt-3.5-turbo'
});
const selectedPreset = ref('manual');
const providerInfo = computed(() => {
    const presets = {
        deepseek: { name: 'DeepSeek', endpoint: 'https://api.deepseek.com/v1', model: 'deepseek-chat', website: 'https://platform.deepseek.com' },
        qwen: { name: '通义千问', endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus', website: 'https://help.aliyun.com/zh/dashscope' },
        glm: { name: '智谱 GLM', endpoint: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-plus', website: 'https://open.bigmodel.cn' },
        ernie: { name: '百度文心 ERNIE', endpoint: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat', model: 'ernie-4.0-8k-latest', website: 'https://yiyan.baidu.com' },
        siliconflow: { name: '硅基流动', endpoint: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-72B-Instruct', website: 'https://siliconflow.cn' },
        volcengine: { name: '火山引擎', endpoint: 'https://ark.cn-beijing.volces.com/api/v3', model: 'ep-20250101000000-xxxxx', website: 'https://console.volcengine.com/ark' },
        custom: { name: '自定义 API', endpoint: '', model: '', website: '' }
    };
    return presets[aiConfig.value.provider] || presets.custom;
});
const aiPresets = {
    deepseek: { name: 'DeepSeek', endpoint: 'https://api.deepseek.com/v1', model: 'deepseek-chat' },
    qwen: { name: '通义千问', endpoint: 'https://dashscope.aliyuncs.com/compatible-mode/v1', model: 'qwen-plus' },
    glm: { name: '智谱GLM', endpoint: 'https://open.bigmodel.cn/api/paas/v4', model: 'glm-4-plus' },
    ernie: { name: '百度文心', endpoint: 'https://aip.baidubce.com/rpc/2.0/ai_custom/v1/wenxinworkshop/chat', model: 'ernie-4.0' },
    siliconflow: { name: '硅基流动', endpoint: 'https://api.siliconflow.cn/v1', model: 'Qwen/Qwen2.5-72B-Instruct' },
    volcengine: { name: '火山引擎', endpoint: 'https://ark.cn-beijing.volces.com/api/v3', model: 'ep-20250101000000-xxxxx' }
};
function applyPreset(presetKey) {
    if (presetKey === 'manual') return;
    const preset = aiPresets[presetKey];
    if (preset) {
        aiConfig.value.endpoint = preset.endpoint;
        aiConfig.value.model = preset.model;
        configChanged.value = true;
    }
}
function onProviderChange() {
    configChanged.value = true;
    // 选择预设时自动填充 endpoint 和 model
    if (aiConfig.value.provider !== 'codingplan' && aiConfig.value.provider !== 'custom') {
        const info = providerInfo.value;
        if (info) {
            aiConfig.value.endpoint = info.endpoint;
            aiConfig.value.model = info.model;
        }
    } else if (aiConfig.value.provider === 'codingplan') {
        if (!aiConfig.value.endpoint) {
            aiConfig.value.endpoint = 'https://ark.cn-beijing.volces.com/api/coding/v3';
        }
        if (!aiConfig.value.model) {
            aiConfig.value.model = 'ark-code-latest';
        }
    }
}
// ===== 数据加载域（v3.11 从 app-logic 数据加载段并入；consensus 经 deps 注入）=====
// v3.7.11: 获取入池/出池 AI 解读
async function fetchPoolSignals() {
    const items = consensus.value || [];
    const targets = items.filter(i => i.status === 'new' || i.status === 'out');
    for (const item of targets) {
        if (poolSignals.value[item.code]) continue; // 已有缓存
        try {
            const res = await fetch('/api/calendar/pool-signal', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ stock_code: item.code, stock_name: item.name, event_type: item.status === 'new' ? 'enter' : 'exit' })
            });
            const data = await res.json();
            if (data.success && data.signal) {
                poolSignals.value = { ...poolSignals.value, [item.code]: data.signal };
            }
        } catch (e) {
            // 静默失败
        }
    }
}

// 加载最近一次 AI 评估（供 showStockDetail 弹窗使用）
async function loadLastEvaluation(stockCode) {
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch(`/api/ai/history/last/${encodeURIComponent(stockCode)}`, { headers });
        const data = await res.json();
        if (data.success && data.data) {
            aiResult.value = data.data;
            lastEvalTime.value = data.data.evaluate_time;
            // 加载历史对比
            updateEvalComparison(stockCode, data.data);
            // 生成操作检查清单
            updateChecklist(data.data);
        }
    } catch(e) {
        // 静默失败
    }
}

// 评估历史对比：比较本次与上次同一股票的评分
async function updateEvalComparison(stockCode, currentResult) {
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': `Bearer ${token}` } : {};
        const res = await fetch(`/api/ai/history?stock=${encodeURIComponent(stockCode)}&limit=2`, { headers });
        const data = await res.json();
        if (data.success && data.data && data.data.length >= 2) {
            const prev = data.data[1];  // 第二新的记录
            const currScore = currentResult.result?.total_score || 0;
            const prevScore = prev.result?.total_score || 0;
            if (currScore > 0 && prevScore > 0) {
                evalHistoryComparison.value = {
                    prevScore, currScore,
                    diff: currScore - prevScore
                };
            }
        }
    } catch(e) { console.warn('[refreshStrategyData] autoPoll failed:', e); }
}

// 操作检查清单：根据评估维度生成 ✅⚠️❌
function updateChecklist(result) {
    const dims = result.result?.dimensions || {};
    const items = [];
    const rules = [
        { key: '趋势强度', label: '趋势强度', good: 70, warn: 50 },
        { key: '均线排列', label: '均线排列', good: 70, warn: 50 },
        { key: '成交量', label: '量能配合', good: 70, warn: 50 },
        { key: '动能风险', label: '动能风险', good: 70, warn: 40 },
        { key: '指标共振', label: '指标共振', good: 70, warn: 50 },
        { key: '稳定性', label: '持仓稳定', good: 70, warn: 50 },
    ];
    for (const rule of rules) {
        const score = dims[rule.key];
        if (score !== undefined) {
            items.push({
                icon: score >= rule.good ? '●' : score >= rule.warn ? '▲' : '✕',
                label: `${rule.label} ${Math.round(score)}分`
            });
        }
    }
    checklistItems.value = items;
}

      return {
        aiResult, lastEvalTime, evalHistoryComparison, checklistItems,
        aiHistory, selectedHistoryIds, expandedDates, expandedMonths, expandedStocks,
        poolSignals, toggleMonthExpand, aiHistoryView, selectedWatchlistCodes,
        showAutoEvaluateSettings, savingConfig, autoEvaluateScope,
        aiModels, aiModelsError, testingAllModels, savingAiModels,
        loadAiModels, onModelToggle, testModel, testAllModels, saveAiModels,
        addModel, deleteModel, autoEvaluateConfig,
        aiLoading, aiEvalStage, showBatchEvaluate, batchStocks, batchRunning,
        batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults,
        aiConfig, selectedPreset, providerInfo, aiPresets,
        applyPreset, onProviderChange,
        // v3.11: 数据加载域（原 app-logic 数据加载段并入）
        fetchPoolSignals, loadLastEvaluation,
      };
    }
  };
})();
