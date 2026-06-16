// quant-calendar: core module (v1.10)
// API fetch wrapper + utility functions extracted from index.html
(function() {
  const { ref, computed, watch, onMounted, nextTick } = Vue;

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

  // ─── 注册 ───────────────────────────────────────────
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.core = {
    apiFetch,
    getToday,
    formatDate,
    withTimeout,
  };
})();
