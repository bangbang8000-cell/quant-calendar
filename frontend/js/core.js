// quant-calendar: core module (v1.11)
// API fetch wrapper + utility functions extracted from index.html
// v3.11 (FR-3.11.4): 请求级 TTL 缓存 + 后台静默刷新（纯逻辑，node 可测 TC-11.7）
// 浏览器: window.__quantModules.core   /   Node: module.exports
(function() {
  const VueRef = (typeof Vue !== 'undefined') ? Vue : {};
  const { ref, computed, watch, onMounted, nextTick } = VueRef;

  // ─── API Fetch 封装 ─────────────────────────────────
  // v3.17.11 (FR-3.17.11.3/4): 鉴权注入唯一实现 —— 本文件 withAuthHeaders 负责为所有
  // /api 请求拼接 Authorization（读取 localStorage 的 quant_token）。
  // index.html 全局 fetch monkey-patch 委托本实现；apiFetch 同样经本实现注入，
  // 保证「仅一份鉴权注入实现」，避免多套实现/双源。
  function withAuthHeaders(url, options = {}) {
    if (typeof url === 'string' && url.startsWith('/api/')) {
      const token = localStorage.getItem('quant_token');
      if (token) {
        return {
          ...options,
          headers: { ...(options.headers || {}), Authorization: 'Bearer ' + token },
        };
      }
    }
    return options;
  }

  async function apiFetch(url, options = {}) {
    const opts = withAuthHeaders(url, options);
    const headers = {
      'Content-Type': 'application/json',
      ...opts.headers
    };

    try {
      const res = await fetch(url, { ...opts, headers });

      // v1.10: 401 自动清除登录状态
      if (res.status === 401) {
        localStorage.removeItem('quant_token');
        localStorage.removeItem('quant_user');
        window.location.reload();
        throw new Error('登录已过期');
      }

      return await res.json();
    } catch (e) {
      if (e.message === '登录已过期') throw e;
      console.error(`[apiFetch] ${url}:`, e.message);
      throw e;
    }
  }

  // ─── 日期工具 ───────────────────────────────────────
  function getToday() {
    return new Date().toISOString().split('T')[0];
  }

  function formatDate(dateStr) {
    if (!dateStr) return '';
    return dateStr.split('T')[0];  // 处理 ISO 格式
  }

  // ─── Toast 通知 ────────────────────────────────────
  function showToast(msg, type = 'info', duration = 3000) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('leaving');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ─── 防抖 ──────────────────────────────────────────
  function debounce(fn, delay = 300) {
    let timer;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  // ─── 节流 ──────────────────────────────────────────
  function throttle(fn, limit = 300) {
    let inThrottle = false;
    return function(...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => { inThrottle = false; }, limit);
      }
    };
  }

  // ─── 超时保护 ──────────────────────────────────────
  async function withTimeout(promise, ms = 3000, label = '') {
    const timer = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('timeout')), ms));
    try {
      return await Promise.race([promise, timer]);
    } catch (e) {
      console.warn(`[timeout] ${label || 'task'} failed:`, e.message);
    }
  }

  // ─── v3.11 (FR-3.11.4): 请求级 TTL 缓存 + 静默刷新 ──
  // 纯逻辑，不依赖 DOM/真实 fetch，node 可 require 单测（tests/test_cache.py TC-11.7）

  // 深比较（JSON 序列化），用于判断后台数据是否发生变化
  function jsonEquals(a, b) {
    if (a === b) return true;
    try { return JSON.stringify(a) === JSON.stringify(b); }
    catch (e) { return false; }
  }

  // 缓存键：method|url|params（params 按键排序，与传参顺序无关）
  function makeCacheKey(method, url, params) {
    const m = (method || 'GET').toUpperCase();
    let q = '';
    if (params) {
      try {
        const sorted = {};
        Object.keys(params).sort().forEach(k => { sorted[k] = params[k]; });
        q = JSON.stringify(sorted);
      } catch (e) { q = ''; }
    }
    return m + '|' + url + '|' + q;
  }

  // 带过期时间的缓存桶（Map + 过期时间戳）
  class CacheStore {
    constructor() {
      this._map = new Map();
      this._exp = new Map();
    }
    get(key) {
      const exp = this._exp.get(key);
      if (exp == null) return undefined;
      if (Date.now() > exp) { this.delete(key); return undefined; }
      return this._map.get(key);
    }
    set(key, value, ttlMs) {
      this._map.set(key, value);
      // ttlMs <= 0 → 立即过期（now - 1 保证下一次 get 即 miss）
      this._exp.set(key, Date.now() + (ttlMs > 0 ? ttlMs : -1));
      return value;
    }
    delete(key) { this._map.delete(key); this._exp.delete(key); }
    clear() { this._map.clear(); this._exp.clear(); }
    has(key) { return this.get(key) !== undefined; }
    get size() { return this._map.size; }
  }

  // 默认 TTL 的缓存工厂
  function createTtlCache(defaultTtlMs) {
    const store = new CacheStore();
    const ttl = (defaultTtlMs != null && defaultTtlMs > 0) ? defaultTtlMs : 15000;
    return {
      store,
      defaultTtl: ttl,
      get: (key) => store.get(key),
      set: (key, value, ms) => store.set(key, value, ms != null ? ms : ttl),
      delete: (key) => store.delete(key),
      clear: () => store.clear(),
      size: () => store.size,
    };
  }

  // 同一 key 的在途刷新去重（避免重复进入页面时并发拉取）
  const _inFlight = new Set();

  // 后台静默刷新：以缓存值为基线悄悄拉取最新
  //  - 数据有变：apply(fresh) 更新界面 + onChanged 提示"有新数据"
  //  - 数据未变：仅续期缓存 TTL，不打扰用户
  //  - 拉取失败：静默忽略（保留缓存，不打断体验）
  async function silentRefresh(opts) {
    const cache = opts && opts.cache;
    const key = opts && opts.key;
    const fetchFn = opts && (opts.fetchFn || opts.fetcher);
    const ttl = opts && opts.ttl;
    if (!cache || !key || typeof fetchFn !== 'function') {
      return { ok: false, changed: false, skipped: true, fresh: null };
    }
    if (_inFlight.has(key)) {
      return { ok: false, changed: false, skipped: true, fresh: null };
    }
    _inFlight.add(key);
    try {
      const oldVal = cache.get(key);
      let fresh;
      try {
        fresh = await fetchFn();
      } catch (e) {
        if (opts.onError) opts.onError(e);
        return { ok: false, changed: false, fresh: null };
      }
      // 首刷无基线 → 不当作"变更"也不提示"未变"，避免进入页面即弹提示
      const changed = (oldVal !== undefined) && !jsonEquals(oldVal, fresh);
      cache.set(key, fresh, ttl);
      if (opts.apply) opts.apply(fresh, oldVal);
      if (oldVal !== undefined) {
        if (changed) { if (opts.onChanged) opts.onChanged(fresh, oldVal); }
        else if (opts.onUnchanged) opts.onUnchanged(fresh, oldVal);
      }
      return { ok: true, changed, fresh };
    } finally {
      _inFlight.delete(key);
    }
  }

  // ─── v3.16 (16.6): HTML 消毒 — v-html 前端双保险（后端已过滤，此处防深度/防漏） ───
  // 仅保留白名单标签，剥离 on* / javascript: / 内联脚本，其余标签解包为文本。
  // v3.17 UI修复: 白名单加入 SVG 绘图标签（图标系统 edge/crystal 用 SVG 渲染，曾被误剥离导致图标不显示；
  //               SVG 绘图标签本身无脚本能力，on* / javascript: 仍被下方统一剥离）
  const SANITIZE_ALLOW = ['B', 'STRONG', 'EM', 'I', 'CODE', 'PRE', 'P', 'UL', 'OL', 'LI', 'H2', 'H3', 'H4', 'A', 'BR', 'TABLE', 'THEAD', 'TBODY', 'TR', 'TH', 'TD', 'SPAN', 'DIV', 'BLOCKQUOTE', 'HR', 'SVG', 'G', 'PATH', 'RECT', 'CIRCLE', 'POLYGON', 'POLYLINE', 'LINE', 'ELLIPSE', 'TEXT', 'TSPAN', 'DEFS', 'USE', 'MARKER', 'SYMBOL'];

  function sanitizeHtml(html, opts = {}) {
    if (html == null) return '';
    const allow = (opts && opts.allow) || SANITIZE_ALLOW;
    const allowSet = new Set(allow.map(t => String(t).toUpperCase()));
    let doc;
    try {
      doc = new DOMParser().parseFromString(String(html), 'text/html');
    } catch (e) {
      return String(html).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
    }
    const body = doc.body || doc;
    function clean(node) {
      Array.from(node.childNodes).forEach((child) => {
        if (child.nodeType === 1) { // element
          // v3.17 UI修复: SVG 元素在 HTML 文档中 tagName 为小写(svg/line...), 统一大写后匹配白名单,
          // 否则 <svg> 根被解包导致图标(edge/crystal)只剩裸绘图元素不渲染
          const tag = String(child.tagName).toUpperCase();
          if (allowSet.has(tag)) {
            Array.from(child.attributes).forEach((attr) => {
              const n = attr.name.toLowerCase();
              const v = (attr.value || '').trim().toLowerCase();
              if (n.startsWith('on') ||
                  ((n === 'href' || n === 'src' || n === 'xlink:href') && v.startsWith('javascript:')) ||
                  (n === 'style' && /(expression|javascript|behavior\s*:|url\s*\(\s*['"]?\s*javascript)/.test(v))) {
                child.removeAttribute(attr.name);
              }
              if (n === 'href' && !/^(https?:|mailto:|#|\/)/.test(v)) {
                child.removeAttribute('href');
              }
            });
            if (tag === 'A') { child.setAttribute('rel', 'noopener noreferrer'); }
            clean(child);
          } else {
            const parent = child.parentNode;
            while (child.firstChild) parent.insertBefore(child.firstChild, child);
            parent.removeChild(child);
          }
        } else if (child.nodeType === 3) {
          // 文本节点保留
        } else if (child.nodeType === 8) { // 注释
          child.parentNode && child.parentNode.removeChild(child);
        } else if (child.nodeType === 4) { // CDATA → 文本
          const t = doc.createTextNode(child.nodeValue || '');
          child.parentNode && child.parentNode.replaceChild(t, child);
        }
      });
    }
    clean(body);
    return body.innerHTML;
  }

  // ─── v3.17.15 (FR-3.17.15): 开放 API v2 路由常量 ──
  const OPENAPI_ROUTE_BASE = '/api/openapi';

  // ─── v3.17.7 实时化 (FR-3.17.7): 实时报价 WS 常量 + 预警/格式化纯函数 ──
  // 阈值与后端 backend/realtime_quotes.py 保持一致；纯逻辑，node 可 require 单测。
  const REALTIME_WS_PATH = '/api/market/ws/quotes';
  const WARN_RISE_SPEED_THRESHOLD = 1.0;    // |涨速| > 1% → 涨速预警
  const WARN_VOLUME_RATIO_THRESHOLD = 2.5;  // 量比 > 2.5 → 放量预警
  const REALTIME_DEGRADED_TEXT = '数据不可达';
  const REALTIME_FALLBACK_TEXT = '实时不可用，不刷新';

  // WS 连接地址（同源 /api/market/ws/quotes；https 下用 wss）
  function buildRealtimeWsUrl() {
    const proto = (typeof location !== 'undefined' && location.protocol === 'https:') ? 'wss:' : 'ws:';
    const host = (typeof location !== 'undefined') ? location.host : 'localhost:8001';
    return proto + '//' + host + REALTIME_WS_PATH;
  }

  // 预警判定纯函数：quote 满足阈值返回预警文案（涨速/跌速/放量），否则 null
  function checkQuoteWarning(quote, thresholds) {
    if (!quote) return null;
    const t = thresholds || {
      riseSpeed: WARN_RISE_SPEED_THRESHOLD,
      volumeRatio: WARN_VOLUME_RATIO_THRESHOLD,
    };
    const riseSpeedT = (t.riseSpeed != null) ? t.riseSpeed : WARN_RISE_SPEED_THRESHOLD;
    const volumeRatioT = (t.volumeRatio != null) ? t.volumeRatio : WARN_VOLUME_RATIO_THRESHOLD;
    const rise = parseFloat(quote.rise_speed);
    if (!isNaN(rise) && Math.abs(rise) > riseSpeedT) {
      return rise > 0 ? '涨速预警' : '跌速预警';
    }
    const vr = parseFloat(quote.volume_ratio);
    if (!isNaN(vr) && vr > volumeRatioT) {
      return '放量预警';
    }
    return null;
  }

  // 报价展示格式化纯函数（-- 兜底，node 可测）
  function _rtNum(v) {
    const n = Number(v);
    return (v === null || v === undefined || isNaN(n)) ? null : n;
  }
  const quoteFmt = {
    price: function (v) { const n = _rtNum(v); return n === null ? '--' : n.toFixed(2); },
    pct: function (v) {
      const n = _rtNum(v);
      return n === null ? '--' : (n > 0 ? '+' : '') + n.toFixed(2) + '%';
    },
    num: function (v) { const n = _rtNum(v); return n === null ? '--' : n.toFixed(2); },
    color: function (q) {
      const p = q ? q.change_pct : null;
      const n = _rtNum(p);
      if (n === null) return '';
      return n >= 0 ? 'var(--color-rise)' : 'var(--color-fall)';
    },
  };

  // ─── 注册 ───────────────────────────────────────────
  const core = {
    apiFetch,
    withAuthHeaders,
    getToday,
    formatDate,
    withTimeout,
    showToast,
    debounce,
    throttle,
    jsonEquals,
    makeCacheKey,
    CacheStore,
    createTtlCache,
    silentRefresh,
    sanitizeHtml,
    OPENAPI_ROUTE_BASE,
    REALTIME_WS_PATH,
    WARN_RISE_SPEED_THRESHOLD,
    WARN_VOLUME_RATIO_THRESHOLD,
    REALTIME_DEGRADED_TEXT,
    REALTIME_FALLBACK_TEXT,
    buildRealtimeWsUrl,
    checkQuoteWarning,
    quoteFmt,
  };
  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.core = core;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = core;
  }
})();
