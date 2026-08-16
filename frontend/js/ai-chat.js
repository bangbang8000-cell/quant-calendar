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
// v3.16 (16.7): 问股历史加载/错误态（统一错误态可重试）
const chatHistoryLoading = ref(false);
const chatHistoryError = ref(false);
const chatHistoryView = ref('date');
const selectedChatIds = ref([]);
const expandedChatDates = ref([]);
const expandedChatMonths = ref([]);
const expandedChatStocks = ref([]);

const allChatSessionsFlat = computed(() => {
    const flat = [];
    for (const s of chatSessions.value) {
        if (!s || s.id == null) continue;
        // v3.16 (bugfix): 历史列表只载会话元数据（16.8 起消息体点击才惰性加载），
        // 不能再以 s.messages 为过滤条件，否则所有会话都被丢弃 → 问股历史恒空。
        // 行内 first_msg/msg_count 直接来自元数据；活动会话仍可回退到 messages 推导。
        const stock_name = s.stock_name || s.stock_code || '';
        const msgs = Array.isArray(s.messages) ? s.messages : [];
        flat.push({
            id: s.id,
            stock_code: s.stock_code,
            stock_name,
            first_msg: s.first_msg || msgs[0]?.content?.substring(0, 50) || '',
            msg_count: s.msg_count || msgs.length || 0,
            created_at: s.created_at,
            date: (s.created_at || '').substring(0, 10),
            month: (s.created_at || '').substring(0, 7),
            messages: msgs,
        });
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
// v3.16 (16.8): 问股历史消息缓存（点击会话时惰性加载，避免首屏 N 连发）
const chatSessionMessagesCache = {};

async function viewChatSession(session) {
    stockDetail.value = { stock: session.stock_code, name: session.stock_name };
    stockDetailVisible.value = true;
    stockDetailTab.value = 'chat';
    stockKlineLoaded.value = false;
    disposeStockKline();
    // v3.16 (16.8): 消息体惰性加载 — 点击时拉取并缓存
    stockChatLoading.value = true;
    stockChatError.value = '';
    stockChatMessages.value = [];
    try {
        let messages = chatSessionMessagesCache[session.id];
        if (!messages) {
            const token = localStorage.getItem('quant_token');
            const headers = token ? { 'Authorization': 'Bearer ' + token } : {};
            const res = await fetch('/api/ai/chat/history/' + session.id, { headers });
            if (!res.ok) throw new Error('load history failed');
            const d = await res.json();
            messages = d.messages || [];
            chatSessionMessagesCache[session.id] = messages;
        }
        stockChatMessages.value = messages.map(m => ({ role: m.role, content: m.content }));
    } catch (e) {
        stockChatError.value = '历史消息加载失败，请重试';
    } finally {
        stockChatLoading.value = false;
    }
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
    // v3.16 (16.7): 统一错误态状态机
    chatHistoryLoading.value = true;
    chatHistoryError.value = false;
    try {
        const token = localStorage.getItem('quant_token');
        const headers = token ? { 'Authorization': 'Bearer ' + token } : {};
        const res = await fetch('/api/ai/chat/history?view=date', { headers });
        if (res.ok) {
            const groups = await res.json();
            const sessions = [];
            // v3.16 (16.8): 只取会话元数据，消息体点击时惰性加载（首屏不再 N 连发）
            for (const group of groups) {
                for (const s of (group.items || [])) sessions.push(s);
            }
            chatSessions.value = sessions;
        } else {
            chatHistoryError.value = true;
        }
    } catch (e) { console.error(e); chatHistoryError.value = true; }
    finally { chatHistoryLoading.value = false; }
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
    // v3.17.1 (FR-3.17.1): Markdown 表格支持（对比数据卡渲染）。
    // 先抽取表格块 → 占位符 → 其余 md 走原流程 → 恢复表格 HTML（仍过白名单消毒）。
    const srcLines = String(md).split('\n');
    const tables = [];
    const out = [];
    let i = 0;
    while (i < srcLines.length) {
        if (/^\s*\|.*\|\s*$/.test(srcLines[i])) {
            let j = i;
            const block = [];
            while (j < srcLines.length && /^\s*\|.*\|\s*$/.test(srcLines[j])) {
                block.push(srcLines[j]);
                j++;
            }
            const split = line => line.trim().replace(/^\|/, '').replace(/\|\s*$/, '').split('|').map(s => s.trim());
            const rows = block.map(split);
            const hasSep = rows.length > 1 && rows[1].every(c => /^:?-{3,}:?$/.test(c));
            if (hasSep) {
                const ncols = Math.max(...rows.map(r => r.length));
                const head = rows[0].slice(0, ncols);
                const body = rows.slice(2);
                let t = '<table>';
                if (body.length) {
                    t += '<thead><tr>' + head.map(c => '<th>' + c + '</th>').join('') + '</tr></thead>';
                    t += '<tbody>' + body.map(r => '<tr>' + r.slice(0, ncols).map(c => '<td>' + c + '</td>').join('') + '</tr>').join('') + '</tbody>';
                } else {
                    t += '<tbody><tr>' + head.map(c => '<td>' + c + '</td>').join('') + '</tr></tbody>';
                }
                t += '</table>';
                tables.push(t);
                out.push('\u0000T' + (tables.length - 1) + '\u0000');
                i = j;
                continue;
            }
            while (i < j) { out.push(srcLines[i]); i++; }
            continue;
        }
        out.push(srcLines[i]);
        i++;
    }
    let html = out.join('\n')
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
    tables.forEach((t, idx) => {
        html = html.split('\u0000T' + idx + '\u0000').join(t);
    });
    // v3.16 (16.6): 前端双保险 — 再走一遍白名单消毒（防 LLM 输出携带脚本/事件属性）
    if (window.__quantModules && window.__quantModules.core && window.__quantModules.core.sanitizeHtml) {
        html = window.__quantModules.core.sanitizeHtml(html);
    }
    return html;
}


      return {
        chatSessions, chatHistoryView, selectedChatIds, expandedChatDates, expandedChatMonths, expandedChatStocks,
        chatHistoryLoading, chatHistoryError,
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
