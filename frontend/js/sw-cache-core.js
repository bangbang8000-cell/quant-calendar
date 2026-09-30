// quant-calendar: Service Worker 缓存分区纯函数 (V6.3.6 安全加固)
// UMD: Node require / 浏览器 self.QuantSwCacheCore；由 sw.js 经 importScripts 加载。
//
// 背景（已在 ops 真实密钥上复现）:
//   Cache API 的键只有 URL（响应头仅 Vary: Accept-Encoding），caches.match() 不看 Authorization。
//   原实现把全部 GET /api/* 写进同一个缓存、断网时无条件回放 —— 于是一个已缓存了
//   「管理员会话产出的明文密钥响应」的浏览器，在断网时会把该响应回放给访客 / 无凭据 /
//   伪造凭据的请求（UI 上表现为：访客离线点「编辑密钥」直接看到管理员的完整 API Key）。
//
// 对策（本模块只提供纯判定，缓存命名与策略在 sw.js）:
//   ① isSensitiveApi: 密钥/凭据/配置/用户等敏感端点一律不进缓存、不回放，只走网络；
//   ② identityKey:   其余 API 缓存按「请求身份」分区（JWT sub），跨身份不可能命中；
//   ③ 身份不可解析时退化为「整串 token 的哈希」，绝不与匿名或他人共用分区。
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantSwCacheCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  var ANON = 'anon';

  // ─── 敏感端点判定 ───────────────────────────────────────────
  // 口径: 「含凭据/可写配置/用户目录」的端点不参与离线缓存。
  // 业务只读数据（日历视图/仪表盘/K线/新鲜度/任务队列/用量）不在其中 → 离线可读能力保留。
  var SENSITIVE_PATHS = [
    /^\/api\/ai\/models\/?$/i,                  // 厂商密钥（?full=1 为明文）
    /^\/api\/market\/tushare\/config\/?$/i,     // 明文 Tushare Token
    /^\/api\/market\/datasource\/config\/?$/i,  // 数据源 token 配置（掩码，但属配置面）
    /^\/api\/users(?:\/|$)/i,                   // 用户目录/口令
    /^\/api\/feishu(?:\/|$)/i,                  // Webhook 凭据
    /^\/api\/system(?:\/|$)/i,                  // 系统配置/密钥查看/备份/限流
    /^\/api\/openapi(?:\/|$)/i,                 // 开放 API Key
    /^\/api\/backup(?:\/|$)/i,                  // 备份下载
    /^\/api\/login\/?$/i,                       // 登录
    /^\/api\/auth(?:\/|$)/i                     // 改密/会话
  ];

  // 路径含这些词一律视为敏感（防御未来新增端点漏登记）
  var SENSITIVE_WORDS = /secret|password|passwd|token|apikey|api_key|credential/i;

  function _pathOf(url) {
    if (typeof url === 'string') return url.split('?')[0] || '';
    return (url && url.pathname) || '';
  }

  function _searchOf(url) {
    if (typeof url === 'string') {
      var i = url.indexOf('?');
      return i >= 0 ? url.slice(i) : '';
    }
    return (url && url.search) || '';
  }

  /**
   * 该 GET /api/* 是否属于「敏感端点」（不缓存、不回放）。
   * @param {string|URL} url 完整 URL 或仅路径
   */
  function isSensitiveApi(url) {
    var pathname = _pathOf(url);
    var search = _searchOf(url);
    // 显式解锁参数（如 /api/ai/models?full=1）返回明文密钥
    if (/(?:^|[?&])full=1(?:&|$)/.test(search)) return true;
    if (SENSITIVE_WORDS.test(pathname)) return true;
    for (var i = 0; i < SENSITIVE_PATHS.length; i++) {
      if (SENSITIVE_PATHS[i].test(pathname)) return true;
    }
    return false;
  }

  // ─── 身份派生 ───────────────────────────────────────────────

  // FNV-1a 32bit → 8 位十六进制（稳定、无依赖、同步；仅作分区键，非安全哈希）
  function _fnv1a(str) {
    var h = 0x811c9dc5;
    for (var i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = (h + ((h << 1) + (h << 4) + (h << 7) + (h << 8) + (h << 24))) >>> 0;
    }
    return ('00000000' + h.toString(16)).slice(-8);
  }

  function _b64urlDecode(input) {
    var s = String(input).replace(/-/g, '+').replace(/_/g, '/');
    while (s.length % 4 !== 0) s += '=';
    try {
      if (typeof atob === 'function') return atob(s);
      if (typeof Buffer !== 'undefined') return Buffer.from(s, 'base64').toString('binary');
    } catch (e) { /* 非法 base64 → 视为不可解析 */ }
    return '';
  }

  // 取 JWT payload 的 sub（本应用为用户名）。不校验签名 —— 签名不合法只会落到自己的空分区，无安全影响。
  function _jwtSub(token) {
    try {
      var parts = String(token).split('.');
      if (parts.length < 2) return '';
      var payload = _b64urlDecode(parts[1]);
      if (!payload) return '';
      var obj = JSON.parse(payload);
      return (obj && typeof obj.sub === 'string') ? obj.sub : '';
    } catch (e) {
      return '';
    }
  }

  /**
   * 由 Authorization 头派生缓存分区键。
   * - 无 Bearer → 'anon'
   * - 可解析 sub → 'u' + hash(sub)（同一用户换 token 仍命中同一分区，离线数据不因重新登录丢失）
   * - 不可解析 → 'u' + hash(整串 token)（绝不落到 anon 或他人分区）
   */
  function identityKey(authHeader) {
    var raw = String(authHeader == null ? '' : authHeader).trim();
    var m = /^Bearer\s+(.+)$/i.exec(raw);
    if (!m) return ANON;
    var token = m[1].trim();
    if (!token) return ANON;
    var sub = _jwtSub(token);
    return 'u' + _fnv1a(sub ? sub : ('tok:' + token));
  }

  return {
    ANON: ANON,
    SENSITIVE_PATHS: SENSITIVE_PATHS,
    isSensitiveApi: isSensitiveApi,
    identityKey: identityKey
  };
});

// 浏览器侧统一挂载（与其它前端模块一致的 __quantModules 约定；SW 内则读 self.QuantSwCacheCore）
if (typeof window !== 'undefined') {
  if (!window.__quantModules) window.__quantModules = {};
  var _swCacheCore = (typeof module === 'object' && module.exports)
    ? module.exports
    : (typeof self !== 'undefined' && self.QuantSwCacheCore)
      ? self.QuantSwCacheCore
      : (window.QuantSwCacheCore || null);
  if (_swCacheCore) window.__quantModules.swCacheCore = _swCacheCore;
}
