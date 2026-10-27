// quant-calendar: 错误码 → 人话映射 + 重试节流 (6.4.2 / FR-646)
// 纯逻辑 UMD: 浏览器 window.QuantErrorMap / Node require(...) (供 pytest 单测)
// 每条文案两段式: what(发生了什么, 一句) + action(你可以做什么, 一句) + actionKey(可点行动)
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.QuantErrorMap = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null))), function () {
  'use strict';

  // 9 类: 401/403/404/429/5xx/超时/离线/数据源不可达/文件缺失
  var ENTRIES = {
    unauthorized: {
      title: '登录状态已失效',
      what: '当前登录已过期，或账号在别处退出。',
      action: '请重新登录后再试。',
      actionKey: 'relogin',
    },
    forbidden: {
      title: '没有访问权限',
      what: '当前账号无权查看这部分内容。',
      action: '请联系管理员开通权限。',
      actionKey: 'contact_admin',
    },
    not_found: {
      title: '内容不存在',
      what: '请求的数据或页面已被移除。',
      action: '请返回上一页，或换一个入口再试。',
      actionKey: 'back',
    },
    rate_limited: {
      title: '请求过于频繁',
      what: '短时间内访问次数超出限制。',
      action: '请稍后再重试，或切换到备用数据源。',
      actionKey: 'retry_later',
    },
    server_error: {
      title: '服务暂时不可用',
      what: '服务器处理请求时出错。',
      action: '请稍后重试；若持续出现请联系管理员。',
      actionKey: 'retry',
    },
    timeout: {
      title: '请求超时',
      what: '数据返回时间超过预期，可能网络或数据源较慢。',
      action: '请重试，或稍后再刷新。',
      actionKey: 'retry',
    },
    offline: {
      title: '网络不可用',
      what: '当前设备已断开网络。',
      action: '请检查网络连接，恢复后会自动重取。',
      actionKey: 'retry',
    },
    datasource: {
      title: '数据源暂不可达',
      what: '当前数据源连接失败，已尝试备用源。',
      action: '请稍后刷新，或到系统配置切换数据源。',
      actionKey: 'go_datasource',
    },
    file_missing: {
      title: '数据文件缺失',
      what: '本地缓存或导出文件不存在。',
      action: '请到系统状态查看数据刷新任务，或重新生成。',
      actionKey: 'go_status',
    },
  };

  var CODE_MAP = {
    401: 'unauthorized',
    403: 'forbidden',
    404: 'not_found',
    429: 'rate_limited',
  };

  // HTTP 状态 / 字符串错误码 / 异常消息 → 9 类之一
  function classify(statusOrCode, message) {
    var raw = statusOrCode;
    if (typeof raw === 'string' && /^\d+$/.test(raw)) raw = parseInt(raw, 10);
    if (typeof raw === 'number') {
      if (CODE_MAP[raw]) return CODE_MAP[raw];
      if (raw >= 500) return 'server_error';
    }
    var key = String(statusOrCode || '').toLowerCase();
    if (key === 'offline' || key === 'network') return 'offline';
    if (key === 'timeout') return 'timeout';
    if (key === 'datasource' || key === 'source_unavailable') return 'datasource';
    if (key === 'file_missing' || key === 'enoent') return 'file_missing';
    if (key === 'unauthorized') return 'unauthorized';
    if (key === 'forbidden') return 'forbidden';
    if (key === 'not_found') return 'not_found';
    if (key === 'rate_limited') return 'rate_limited';
    if (key === 'server_error') return 'server_error';
    var msg = String(message || '').toLowerCase();
    if (/timeout|timed out|超时/.test(msg)) return 'timeout';
    if (/offline|network|failed to fetch|断网|网络/.test(msg)) return 'offline';
    if (/not found|不存在|enoent/.test(msg)) return 'not_found';
    if (/rate limit|too many|429|频繁/.test(msg)) return 'rate_limited';
    return 'server_error';
  }

  function describe(statusOrCode, message) {
    var code = classify(statusOrCode, message);
    var e = ENTRIES[code] || ENTRIES.server_error;
    return {
      code: code,
      title: e.title,
      what: e.what,
      action: e.action,
      actionKey: e.actionKey,
      // 面板展示用一行摘要 (两段式)
      text: e.what + ' ' + e.action,
    };
  }

  function isHumanReadable(text) {
    // 含堆栈/原始 HTTP 片段则视为不可直接外泄
    return !/Traceback|\bat [a-z]+\.|File "|Exception:|HTTP\/1\.1/.test(String(text || ''));
  }

  // 重试节流: 最多 maxAttempts 次, 间隔按 attempt 指数退避 (秒), 上限 cap
  function retryPolicy(attempt, opts) {
    opts = opts || {};
    var max = opts.maxAttempts || 3;
    var base = opts.baseSeconds || 2;
    var cap = opts.capSeconds || 30;
    var n = Math.max(0, parseInt(attempt, 10) || 0);
    var allowed = n < max;
    var delay = Math.min(cap, base * Math.pow(2, n));
    return { allowed: allowed, attempt: n, remaining: Math.max(0, max - n), delaySeconds: delay };
  }

  var api = {
    ENTRIES: ENTRIES,
    classify: classify,
    describe: describe,
    isHumanReadable: isHumanReadable,
    retryPolicy: retryPolicy,
  };
  return api;
});
