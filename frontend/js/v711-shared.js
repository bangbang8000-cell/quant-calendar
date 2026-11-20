// quant-calendar v7.11 (FR-7.11-0): 前端收口共用件
// 背景: v7.5~v7.10 六个新域后端已交付, 前端零入口。本版把六个域接到界面上,
//       六个面板共用同一层取数/格式化/语义标签, 避免各写一份 fetch 与文案。
// 用法: const { api, post, errText } = window.__quantModules.v711;
// 鉴权: 全部经 core.apiFetch(唯一鉴权注入实现, 401 统一清 token 并刷新登录)
(function () {
  'use strict';

  window.__quantModules = window.__quantModules || {};

  function coreApi() {
    var c = (window.__quantModules && window.__quantModules.core) || {};
    return typeof c.apiFetch === 'function' ? c.apiFetch : null;
  }

  function api(path, opts) {
    var f = coreApi();
    if (!f) return Promise.reject(new Error('请求层未就绪，请刷新页面重试'));
    return f(path, opts || {});
  }

  function post(path, body) {
    return api(path, { method: 'POST', body: JSON.stringify(body || {}) });
  }

  function del(path) {
    return api(path, { method: 'DELETE' });
  }

  // apiFetch 已把后端 detail 转成 _formatted(带操作建议); 无则回退 message
  function errText(e) {
    if (!e) return '未知错误';
    return e._formatted || e.message || String(e);
  }

  function num(v, digits) {
    var n = Number(v);
    if (v === null || v === undefined || v === '' || !isFinite(n)) return '—';
    return n.toFixed(digits === undefined ? 2 : digits);
  }

  function pct(v, digits) {
    var n = Number(v);
    if (v === null || v === undefined || v === '' || !isFinite(n)) return '—';
    return (n * 100).toFixed(digits === undefined ? 2 : digits) + '%';
  }

  // HMM 四状态 (timing/market_state.py) — 文案与语义色档
  var STATE_LABELS = {
    bull_trend: '牛市趋势',
    bull_shock: '牛市震荡',
    bear_shock: '熊市震荡',
    bear_trend: '熊市趋势',
    unknown: '状态未知',
  };
  var STATE_TONE = {
    bull_trend: 'qc711-tone-up',
    bull_shock: 'qc711-tone-warn',
    bear_shock: 'qc711-tone-down',
    bear_trend: 'qc711-tone-down',
    unknown: 'qc711-tone-mute',
  };
  var ACTION_LABELS = {
    buy: '买入', add: '加仓', reduce: '减仓', sell: '卖出', hold: '持有', wait: '观望',
  };
  // 执行计划/腿状态
  var PLAN_STATUS = { draft: '草稿', active: '执行中', closed: '已结束', cancelled: '已取消' };
  var LEG_STATUS = { pending: '待成交', filled: '已成交', cancelled: '已撤销' };

  function stateLabel(s) { return STATE_LABELS[s] || s || '—'; }
  function stateTone(s) { return STATE_TONE[s] || STATE_TONE.unknown; }
  function actionLabel(a) { return ACTION_LABELS[a] || a || '—'; }
  function planStatus(s) { return PLAN_STATUS[s] || s || '—'; }
  function legStatus(s) { return LEG_STATUS[s] || s || '—'; }

  // 金额口径百分比 → 颜色档 (A 股口径: 正=红, 负=绿)
  function pnlTone(v) {
    var n = Number(v);
    if (!isFinite(n) || n === 0) return 'qc711-tone-mute';
    return n > 0 ? 'qc711-tone-up' : 'qc711-tone-down';
  }

  window.__quantModules.v711 = {
    api: api,
    post: post,
    del: del,
    errText: errText,
    num: num,
    pct: pct,
    stateLabel: stateLabel,
    stateTone: stateTone,
    actionLabel: actionLabel,
    planStatus: planStatus,
    legStatus: legStatus,
    pnlTone: pnlTone,
    STATE_LABELS: STATE_LABELS,
    ACTION_LABELS: ACTION_LABELS,
  };
})();
