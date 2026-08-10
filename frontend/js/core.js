// quant-calendar: core module (v1.11)
// API fetch wrapper + utility functions extracted from index.html
// v3.11 (FR-3.11.4): 请求级 TTL 缓存 + 后台静默刷新（纯逻辑，node 可测 TC-11.7）
// 浏览器: window.__quantModules.core   /   Node: module.exports
(function() {
  const VueRef = (typeof Vue !== 'undefined') ? Vue : {};
  const { ref, computed, watch, onMounted, nextTick } = VueRef;

  // ─── API Fetch 封装 ─────────────────────────────────
  async function apiFetch(url, options = {}) {
    const token = localStorage.getItem('quant_token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { 'Authorization': `Bearer ${token}` } : {}),
      ...options.headers
    };

    try {
      const res = await fetch(url, { ...options, headers });

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

  // ─── 注册 ───────────────────────────────────────────
  const core = {
    apiFetch,
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
  };
  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.core = core;
  }
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = core;
  }
})();
