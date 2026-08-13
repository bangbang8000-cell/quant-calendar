// quant-calendar: AI 问股域模块 (v3.11 / FR-3.11.2)
// 从 app-logic.js 拆出：问股历史（会话分组/选择/删除）、股票对话流式问股、Markdown 渲染。
// 工厂模式：window.__quantModules['ai-chat'].create(deps) → 该域全部状态与函数。
// deps（共享依赖）:
//   stockKlineLoaded <ref>  stockDetailVisible <ref>  stockDetailTab <ref>
//   stockDetail <ref>  disposeStockKline <fn>
(function () {
  if (!window.__quantModules) window.__quantModules = {};

  window.__quantModules['ai-chat'] = {
    create(deps) {
      const { ref, computed } = Vue;
      const { stockKlineLoaded, stockDetailVisible, stockDetailTab, stockDetail, disposeStockKline } = deps;

// ===== v2.4: AI 问股 =====
const chatSessions = ref([]);
const chatHistoryView = ref('date');
const selectedChatIds = ref([]);
const expandedChatDates = ref([]);
const expandedChatMonths = ref([]);
const expandedChatStocks = ref([]);

const allChatSessionsFlat = computed(() => {
    const flat = [];
    for (const s of chatSessions.value) {
        if (s.messages) {
            // v3.15: stock_name 兜底 → 代码 (后端已修, 旧记录仍可能缺名)
            const stock_name = s.stock_name || s.stock_code || '';
            flat.push({
                id: s.id,
                stock_code: s.stock_code,
                stock_name,
                first_msg: s.messages[0]?.content?.substring(0, 50) || '',
                msg_count: s.messages.length,
                created_at: s.created_at,
                date: (s.created_at || '').substring(0, 10),
                month: (s.created_at || '').substring(0, 7),
                messages: s.messages,
            });
        }
    }
    return flat;
});

const chatGroupedByDate = computed(() => {
    const g = {};
    for (const s of allChatSessionsFlat.value) {
        const d = s.date || '未知';
        if (!g[d]) g[d] = [];
        g[d].push(s);
    }
    // Sort by date desc
    const sorted = {};
    Object.keys(g).sort((a,b) => b.localeCompare(a)).forEach(k => sorted[k] = g[k]);
    return sorted;
});

const chatGroupedByMonth = computed(() => {
    const g = {};
    for (const s of allChatSessionsFlat.value) {
        const m = s.month || '未知';
        if (!g[m]) g[m] = [];
        g[m].push(s);
    }
    const sorted = {};
    Object.keys(g).sort((a,b) => b.localeCompare(a)).forEach(k => sorted[k] = g[k]);
    return sorted;
});

const chatGroupedByStock = computed(() => {
    const g = {};
    for (const s of allChatSessionsFlat.value) {
        const k = `${s.stock_name}(${s.stock_code})`;
        if (!g[k]) g[k] = [];
        g[k].push(s);
    }
    return g;
});

function toggleSelectChat(id) {
    const idx = selectedChatIds.value.indexOf(id);
    if (idx >= 0) selectedChatIds.value.splice(idx, 1);
    else selectedChatIds.value.push(id);
}
function toggleSelectChatDate(date) {
    const sessions = chatGroupedByDate.value[date] || [];
    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
    if (allSelected) {
        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
    } else {
        for (const s of sessions) {
            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
        }
    }
}
function toggleSelectChatMonth(month) {
    const sessions = chatGroupedByMonth.value[month] || [];
    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
    if (allSelected) {
        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
    } else {
        for (const s of sessions) {
            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
        }
    }
}
function toggleSelectChatStock(code) {
    const sessions = chatGroupedByStock.value[code] || [];
    const allSelected = sessions.every(s => selectedChatIds.value.includes(s.id));
    if (allSelected) {
        selectedChatIds.value = selectedChatIds.value.filter(id => !sessions.some(s => s.id === id));
    } else {
        for (const s of sessions) {
            if (!selectedChatIds.value.includes(s.id)) selectedChatIds.value.push(s.id);
        }
    }
}
function toggleChatDateExpand(date) {
    const i = expandedChatDates.value.indexOf(date);
    if (i >= 0) expandedChatDates.value.splice(i, 1);
    else expandedChatDates.value.push(date);
}
function toggleChatMonthExpand(month) {
    const i = expandedChatMonths.value.indexOf(month);
    if (i >= 0) expandedChatMonths.value.splice(i, 1);
    else expandedChatMonths.value.push(month);
}
function toggleChatStockExpand(code) {
    const i = expandedChatStocks.value.indexOf(code);
    if (i >= 0) expandedChatStocks.value.splice(i, 1);
    else expandedChatStocks.value.push(code);
}
function selectAllChatSessions() {
    if (selectedChatIds.value.length === allChatSessionsFlat.value.length) {
        selectedChatIds.value = [];
    } else {
        selectedChatIds.value = allChatSessionsFlat.value.map(s => s.id);
    }
}
async function deleteSelectedChatSessions() {
    for (const id of [...selectedChatIds.value]) {
        await deleteChatSession(id);
    }
    selectedChatIds.value = [];
}
function viewChatSession(session) {
    stockDetail.value = { stock: session.stock_code, name: session.stock_name };
    stockDetailVisible.value = true;
    stockDetailTab.value = 'chat';
    stockKlineLoaded.value = false;
    disposeStockKline();
    stockChatMessages.value = session.messages?.map(m => ({role: m.role, content: m.content})) || [];
}

// Stock detail chat
const stockChatInput = ref('');
const stockChatMessages = ref([]);
const stockChatLoading = ref(false);
const stockChatError = ref('');

async function askStockSend() {
    const msg = stockChatInput.value.trim();
    if (!msg || stockChatLoading.value) return;
    stockChatError.value = '';
    stockChatMessages.value.push({ role: 'user', content: msg });
    stockChatInput.value = '';
    stockChatLoading.value = true;
    // Add placeholder for streaming response
    const aiIdx = stockChatMessages.value.length;
    stockChatMessages.value.push({ role: 'assistant', content: '' });
    try {
        const token = localStorage.getItem('quant_token');
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = 'Bearer ' + token;
        const res = await fetch('/api/ai/chat/stream', {
            method: 'POST', headers,
            body: JSON.stringify({ stock_code: stockDetail.value?.stock || '', message: msg })
        });
        const reader = res.body.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';
            for (const line of lines) {
                if (line.startsWith('data: ')) {
                    try {
                        const data = JSON.parse(line.slice(6));
                        if (data.token) {
                            stockChatMessages.value[aiIdx].content += data.token;
                        } else if (data.done) {
                            console.log('Stream done:', data.session_id);
                        } else if (data.error) {
                            stockChatError.value = data.error;
                        }
                    } catch(e) { console.warn('SSE parse error:', e); }
                }
            }
        }
    } catch (e) {
        if (!stockChatMessages.value[aiIdx].content)
            stockChatMessages.value[aiIdx].content = '网络错误: ' + e.message;
    }
    stockChatLoading.value = false;
}

async function askStockQuick(mode) {
    stockChatError.value = '';
    stockChatLoading.value = true;
    const msgs = { trend: '帮我做一下技术趋势分析', fundamental: '帮我看看基本面情况', comprehensive: '帮我做个综合分析' };
    stockChatMessages.value.push({ role: 'user', content: msgs[mode] || msgs.comprehensive });
    try {
        const token = localStorage.getItem('quant_token');
        const headers = { 'Content-Type': 'application/json' };
        if (token) headers['Authorization'] = 'Bearer ' + token;
        const res = await fetch('/api/ai/chat/quick', {
            method: 'POST', headers,
            body: JSON.stringify({ stock_code: stockDetail.value?.stock || '', mode })
        });
        if (res.ok) {
            const data = await res.json();
            stockChatMessages.value.push({ role: 'assistant', content: data.reply || '无回复' });
        }
    } catch (e) {
        stockChatError.value = '网络错误: ' + e.message;
    }
    stockChatLoading.value = false;
}

async function loadChatHistory() {
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': 'Bearer ' + token } : {};
        const res = await fetch('/api/ai/chat/history?view=date', { headers });
        if (res.ok) {
            const groups = await res.json();
            const sessions = [];
            for (const group of groups) {
                for (const s of (group.items || [])) {
                    try {
                        const dres = await fetch('/api/ai/chat/history/' + s.id, { headers });
                        if (dres.ok) { const d = await dres.json(); s.messages = d.messages || []; }
                    } catch { }
                    sessions.push(s);
                }
            }
            chatSessions.value = sessions;
        }
    } catch (e) { console.error(e); }
}

async function deleteChatSession(id) {
    try {
        const token = localStorage.getItem('quant_token');
        await fetch('/api/ai/chat/history/' + id, {
            method: 'DELETE',
            headers: token ? { 'Authorization': 'Bearer ' + token } : {}
        });
        chatSessions.value = chatSessions.value.filter(s => s.id !== id);
    } catch (e) { console.error('deleteChatSession:', e); }
}

function renderMarkdown(md) {
    if (!md) return '';
    let html = md
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/^### (.+)$/gm, '<h4>$1</h4>')
        .replace(/^## (.+)$/gm, '<h3>$1</h3>')
        .replace(/^# (.+)$/gm, '<h2>$1</h2>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/`([^`]+)`/g, '<code>$1</code>')
        .replace(/^- (.+)$/gm, '<li>$1</li>')
        .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
        .replace(/\n/g, '<br>');
    return html;
}


      return {
        chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
        allChatSessionsFlat, chatGroupedByDate, chatGroupedByMonth, chatGroupedByStock,
        toggleSelectChat, toggleSelectChatDate, toggleSelectChatMonth, toggleSelectChatStock,
        toggleChatDateExpand, toggleChatMonthExpand, toggleChatStockExpand,
        selectAllChatSessions, deleteSelectedChatSessions, viewChatSession,
        loadChatHistory, deleteChatSession, renderMarkdown,
        stockChatInput, stockChatMessages, stockChatLoading, stockChatError,
        askStockSend, askStockQuick,
      };
    }
  };
})();
