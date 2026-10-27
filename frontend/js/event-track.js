// quant-calendar: 产品事件埋点 (6.4.2 / FR-644 / PRD §8)
// 纯逻辑 + 上报适配: 事件名白名单、属性裁剪、失败可见告警(不静默)。
// UMD 导出: 浏览器 window.QuantEvents / Node require(...) (供 pytest 单测)
// 落库口径: POST /api/analytics/event → data/ui_events.jsonl (不动主表)
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.QuantEvents = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null))), function () {
  'use strict';

  // 白名单与 PRD §8 一致; empty_action 记录空态主行动点击 (FR-644)
  var KNOWN_EVENTS = [
    'onboarding_start', 'onboarding_complete', 'onboarding_skip',
    'empty_action',
    'search_open', 'search_select',
    'error_shown', 'error_retry',
    'ai_open', 'ai_send', 'ai_degraded',
    'export_done',
    'nav_switch',
    'perf_long_task',
  ];

  var MAX_PROPS = 12;
  var MAX_VALUE_LEN = 120;

  function isKnownEvent(name) {
    return KNOWN_EVENTS.indexOf(String(name || '')) !== -1;
  }

  // 只保留标量属性 (string/number/boolean), 超长截断; 防止误传对象撑爆日志
  function normalizeProps(props) {
    var out = {};
    if (!props || typeof props !== 'object') return out;
    var keys = Object.keys(props).slice(0, MAX_PROPS);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var v = props[k];
      var t = typeof v;
      if (v === null || v === undefined) continue;
      if (t === 'string') {
        out[k] = v.length > MAX_VALUE_LEN ? v.slice(0, MAX_VALUE_LEN) : v;
      } else if (t === 'number') {
        if (isFinite(v)) out[k] = v;
      } else if (t === 'boolean') {
        out[k] = v;
      }
    }
    return out;
  }

  function buildPayload(event, props) {
    return {
      event: String(event || ''),
      props: normalizeProps(props),
      ts: Date.now(),
    };
  }

  // post(url, body) 由调用方注入; 返回是否已受理 (未知事件不上报)
  function createTracker(post) {
    return {
      track: function (event, props) {
        if (!isKnownEvent(event)) return false;
        if (typeof post !== 'function') return false;
        var payload = buildPayload(event, props);
        try {
          post('/api/analytics/event', payload);
        } catch (e) {
          // 上报失败不得静默: 控制台可见 + 返回 false 由调用方决定是否提示
          if (typeof console !== 'undefined' && console.warn) {
            console.warn('[events] 上报失败: ' + payload.event, e);
          }
          return false;
        }
        return true;
      },
    };
  }

  function browserPost(url, payload) {
    if (typeof fetch !== 'function') return;
    fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(function (e) {
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[events] 上报网络异常: ' + payload.event, e);
      }
    });
  }

  var api = {
    KNOWN_EVENTS: KNOWN_EVENTS,
    isKnownEvent: isKnownEvent,
    normalizeProps: normalizeProps,
    buildPayload: buildPayload,
    createTracker: createTracker,
    track: function (event, props) { return createTracker(browserPost).track(event, props); },
    // 6.4.2 (FR-646 第 5 条): 禁止静默失败 — catch 统一走此处: 控制台可见 + 上报落日志
    report: function (err, context, props) {
      var msg = (err && (err.message || err.msg)) || String(err || '未知错误');
      if (typeof console !== 'undefined' && console.warn) {
        console.warn('[qc] ' + (context || 'error') + ': ' + msg, err);
      }
      return api.track('error_shown', Object.assign({
        context: context || '',
        message: String(msg).slice(0, 120),
      }, props || {}));
    },
  };
  return api;
});
