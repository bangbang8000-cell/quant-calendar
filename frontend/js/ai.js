// quant-calendar: AI 评估域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：AI 评估、AI 模型管理、自动评估配置、评估历史选择状态。
// 工厂模式：window.__quantModules.ai.create(deps) → 该域状态与函数。
// 依赖仅浏览器全局（fetch/localStorage/ElementPlus），后续可扩展 AI 问股/快捷评估。
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

// ─── AI 模型管理 (v3.14 厂商化) ──────────────────────────
// 以厂商/厂家为主配置卡，卡内配 API (base_url+key+timeout) 后管理多个模型名；
// 数组顺序 = 全局评估优先级（厂商顺序 → 厂商内模型顺序），保存时不做客户端重排。
const aiVendors = ref([]);               // 厂商配置（_fetching/_testing 为客户端标志）
const aiCatalog = ref({ vendors: [] });  // 预置厂商目录（新增厂商下拉 + 模型名建议）
const aiModelsError = ref('');
const testingAllModels = ref(false);
const savingAiModels = ref(false);

// V4.0 需求2: 密钥部分掩码 (与后端 secret_utils.mask_secret 同规则)
function _maskSecret(s) {
    if (!s) return '';
    const str = String(s);
    const n = str.length;
    if (n <= 4) return str[0] + '*'.repeat(n - 1);
    const head = n <= 8 ? 2 : 4;
    return str.slice(0, head) + '*'.repeat(n - head - head) + str.slice(-head);
}

// V4.0 需求2: 查看完整密钥 — 先弹密码框, 验密通过后经 /api/system/reveal-secret 取完整值
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

async function toggleVendorKeyReveal(v) {
    if (v._revealed) {
        // 已展示 → 收起并重新掩码（保留用户编辑后的值）
        v._revealed = false;
        v._masked = _maskSecret(v.api_key);
        return;
    }
    const full = await _revealSecret('ai:' + v.vendor_key);
    if (full === null) return;
    v.api_key = full;
    v._revealed = true;
}

function _stripVendorClientFlags(v) {
    // 剔除前端临时标志，只提交后端 schema 字段
    const { _fetching, _testing, _revealed, _masked, ...clean } = v;
    clean.models = (v.models || []).map(m => {
        const { _testing: _t, testResult, ...mc } = m;
        return mc;
    });
    return clean;
}

async function loadAiVendors() {
    try {
        aiModelsError.value = '';
        const res = await fetch('/api/ai/models');
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
            aiVendors.value = (data.data?.vendors || []).map(v => ({
                ...v,
                _fetching: false,
                _testing: false,
                _revealed: false,
                _masked: v.api_key || '',
                models: (v.models || []).map(m => ({ ...m, _testing: false, testResult: undefined })),
            }));
            aiModelsError.value = '';
        } else {
            aiModelsError.value = data.message || '加载失败';
        }
    } catch (e) {
        aiModelsError.value = '网络错误: ' + e.message;
    }
}

async function loadAiCatalog() {
    // fire-and-forget：目录加载失败仅降级「新增厂商」下拉
    try {
        const res = await fetch('/api/ai/catalog');
        const data = await res.json();
        if (data.success && data.data) aiCatalog.value = data.data;
    } catch (e) {
        console.warn('AI 厂商目录加载失败', e);
    }
}

async function saveAiVendors() {
    savingAiModels.value = true;
    try {
        const headers = { 'Content-Type': 'application/json' };
        // 数组顺序即优先级，不做客户端重排
        const res = await fetch('/api/ai/models', {
            method: 'POST',
            headers,
            body: JSON.stringify({ vendors: aiVendors.value.map(_stripVendorClientFlags) }),
        });
        const data = await res.json();
        if (data.success) {
            ElementPlus.ElMessage.success('模型配置已保存');
        } else {
            ElementPlus.ElMessage.error(data.message || '保存失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('保存失败: ' + e.message);
    }
    savingAiModels.value = false;
}

async function testVendorModel(v, m) {
    m._testing = true;
    try {
        // 必须显式 Content-Type: application/json (缺省 text/plain 会被 FastAPI 422 拒绝)
        const headers = { 'Content-Type': 'application/json' };
        // body 传参（模型名可含 /）+ 内联 base_url/api_key: 未保存厂商也能直接探测
        const res = await fetch('/api/ai/models/test', {
            method: 'POST',
            headers,
            // body 传参（模型名可含 /）+ 内联 base_url/api_key: 未保存厂商也能直接探测
            body: JSON.stringify({ vendor_key: v.vendor_key, model: m.name, base_url: v.base_url, api_key: v.api_key, timeout: v.timeout }),
        });
        m.testResult = await res.json();
    } catch (e) {
        m.testResult = { success: false, message: e.message };
    }
    m._testing = false;
}

async function testAllVendorModels() {
    testingAllModels.value = true;
    for (const v of aiVendors.value) {
        for (const m of v.models || []) {
            if (v.api_key) {
                await testVendorModel(v, m);
            } else {
                m.testResult = { success: false, message: '未配置 API Key' };
            }
        }
    }
    testingAllModels.value = false;
    ElementPlus.ElMessage.success('全部探测完成');
}

async function fetchVendorModels(v) {
    v._fetching = true;
    try {
        const headers = { 'Content-Type': 'application/json' };
        const res = await fetch('/api/ai/models/list', {
            method: 'POST',
            headers,
            // 内联 base_url/api_key: 未保存的新厂商也能直接拉取模型列表
            body: JSON.stringify({ vendor_key: v.vendor_key, base_url: v.base_url, api_key: v.api_key, timeout: v.timeout }),
        });
        const data = await res.json();
        if (data.success && Array.isArray(data.models)) {
            const existing = new Set((v.models || []).map(m => m.name));
            for (const name of data.models) {
                if (!existing.has(name)) {
                    v.models.push({ name, enabled: false, locked: false, max_tokens: 4096, _testing: false, testResult: undefined });
                }
            }
            ElementPlus.ElMessage.success(`已获取 ${data.models.length} 个模型`);
        } else {
            ElementPlus.ElMessage.error(data.message || '获取模型列表失败');
        }
    } catch (e) {
        ElementPlus.ElMessage.error('获取模型列表失败: ' + e.message);
    }
    v._fetching = false;
}

function addVendorFromCatalog(vendorKey) {
    const catalogVendor = (aiCatalog.value.vendors || []).find(v => v.vendor_key === vendorKey);
    if (!catalogVendor) return;
    if (aiVendors.value.some(v => v.vendor_key === vendorKey)) {
        ElementPlus.ElMessage.warning('该厂商已存在');
        return;
    }
    aiVendors.value.push({
        vendor_key: catalogVendor.vendor_key,
        name: catalogVendor.name,
        kind: catalogVendor.kind,
        base_url: catalogVendor.base_url,
        api_key: '',
        timeout: 60,
        tier: catalogVendor.tier || '',
        website: catalogVendor.website || '',
        locked: !!catalogVendor.locked,
        models: (catalogVendor.models || []).map(name => ({ name, enabled: false, locked: false, max_tokens: 4096, _testing: false, testResult: undefined })),
        _fetching: false,
        _testing: false,
        _revealed: false,
        _masked: '',
    });
    ElementPlus.ElMessage.success(`已添加厂商「${catalogVendor.name}」，配置 API Key 后保存生效`);
}

function addCustomVendor() {
    aiVendors.value.push({
        vendor_key: 'custom-' + Date.now(),
        name: '自定义厂商',
        kind: '自定义',
        base_url: '',
        api_key: '',
        timeout: 60,
        tier: '',
        website: '',
        locked: false,
        models: [],
        _fetching: false,
        _testing: false,
        _revealed: false,
        _masked: '',
    });
    ElementPlus.ElMessage.success('已添加自定义厂商');
}

function addVendorModel(v) {
    if (!v.models) v.models = [];
    v.models.push({ name: '', enabled: false, locked: false, max_tokens: 4096, _testing: false, testResult: undefined });
}

// v3.16 (16.5): confirm() → ElMessageBox.confirm（统一确认弹窗风格）
async function removeVendorModel(v, idx) {
    const m = v.models[idx];
    if (!m || m.locked) return;
    try {
        await ElementPlus.ElMessageBox.confirm('确定删除模型 "' + (m.name || '未命名') + '"？', '删除模型', { type: 'warning', confirmButtonText: '删除', cancelButtonText: '取消' });
    } catch (cancel) { return; }
    v.models.splice(idx, 1);
    ElementPlus.ElMessage.success('已删除，请点击保存生效');
}

async function removeVendor(v) {
    if (v.locked) return;
    try {
        await ElementPlus.ElMessageBox.confirm('确定删除厂商 "' + (v.name || '未命名') + '"？', '删除厂商', { type: 'warning', confirmButtonText: '删除', cancelButtonText: '取消' });
    } catch (cancel) { return; }
    const idx = aiVendors.value.indexOf(v);
    if (idx >= 0) aiVendors.value.splice(idx, 1);
    ElementPlus.ElMessage.success('已删除，请点击保存生效');
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
const aiEvalStage = ref('');  // '', 'fetching', 'calculating', 'analyzing', 'done'
const aiEvalElapsed = ref(0);  // v3.15: 智能评估真实已用秒数
const aiEvalError = ref('');  // v3.15: 智能评估失败原因（弹窗内展示 + 重试）
const showBatchEvaluate = ref(false);
const batchStocks = ref('');
const batchRunning = ref(false);
const batchTotal = ref(0);
const batchCompleted = ref(0);
const batchCurrent = ref('');
const batchStatuses = ref({});
const batchResults = ref({});  // v1.10: 批量结果详情
const batchEvalErrors = ref({});  // v3.15: 批量评估失败原因 (code → error)
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
// v3.16 (16.8): 并发拉取（限流 8）+ AbortController 可取消（重复调用/离开页面时取消在途请求）
let _poolSignalAbort = null;
const POOL_SIGNAL_CONCURRENCY = 8;

async function fetchPoolSignals() {
    if (_poolSignalAbort) { _poolSignalAbort.abort(); _poolSignalAbort = null; }
    const items = consensus.value || [];
    const targets = items
        .filter(i => i.status === 'new' || i.status === 'out')
        .filter(i => !poolSignals.value[i.code]); // 已有缓存跳过
    if (targets.length === 0) return;
    const ac = new AbortController();
    _poolSignalAbort = ac;
    let idx = 0;
    const worker = async () => {
        while (idx < targets.length) {
            const item = targets[idx++];
            try {
                const res = await fetch('/api/calendar/pool-signal', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ stock_code: item.code, stock_name: item.name, event_type: item.status === 'new' ? 'enter' : 'exit' }),
                    signal: ac.signal
                });
                const data = await res.json();
                if (data.success && data.signal) {
                    poolSignals.value = { ...poolSignals.value, [item.code]: data.signal };
                }
            } catch (e) {
                if (e.name === 'AbortError') return; // 已取消
                // 其余静默失败
            }
        }
    };
    const workers = Array.from({ length: Math.min(POOL_SIGNAL_CONCURRENCY, targets.length) }, () => worker());
    await Promise.all(workers);
}

// v3.16 (16.8): 取消在途池信号请求（离开日历页/刷新池时调用）
function cancelPoolSignals() {
    if (_poolSignalAbort) { _poolSignalAbort.abort(); _poolSignalAbort = null; }
}

// 加载最近一次 AI 评估（供 showStockDetail 弹窗使用）
let _lastEvalSeq = 0;  // V4.2 (FR-4.2.5): 连开竞态保护
async function loadLastEvaluation(stockCode) {
    const seq = ++_lastEvalSeq;
    try {
        const res = await fetch(`/api/ai/history/last/${encodeURIComponent(stockCode)}`);
        const data = await res.json();
        if (seq !== _lastEvalSeq) return;  // V4.2: 旧响应丢弃
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
        const res = await fetch(`/api/ai/history?stock=${encodeURIComponent(stockCode)}&limit=2`);
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

// 操作检查清单：根据评估维度生成 ✅⚠❌
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
        aiVendors, aiCatalog, aiModelsError, testingAllModels, savingAiModels,
        loadAiVendors, loadAiCatalog, saveAiVendors, saveAiModels: saveAiVendors,
        testVendorModel, testAllVendorModels, fetchVendorModels,
        addVendorFromCatalog, addCustomVendor, addVendorModel,
        removeVendorModel, removeVendor, toggleVendorKeyReveal, autoEvaluateConfig,
        aiLoading, aiEvalStage, aiEvalElapsed, aiEvalError, showBatchEvaluate, batchStocks, batchRunning,
        batchTotal, batchCompleted, batchCurrent, batchStatuses, batchResults, batchEvalErrors,
        aiConfig, selectedPreset, providerInfo, aiPresets,
        applyPreset, onProviderChange,
        // v3.11: 数据加载域（原 app-logic 数据加载段并入）
        fetchPoolSignals, cancelPoolSignals, loadLastEvaluation,
      };
    }
  };
})();
