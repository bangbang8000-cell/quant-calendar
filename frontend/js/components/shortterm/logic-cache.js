// quant-calendar: 短线复盘页逻辑域 — 客户端 TTL 缓存（v7.3.2 性能修复）
// 经 window.__quantModules.shorttermPage.cache.create(ctx) 装配, 由 shortterm-page.js 解构
// ctx 依赖: authHeaders
//
// 为什么放在模块级（window.__qcShorttermCache）而不是 setup 里：
//   组件会被 KeepAlive / 页面路由重建（例如「市场复盘」走的是研究页组件），
//   setup 内的缓存随之丢失 → 每次切回都重新请求。用户反馈的"每次点击都要刷新很久"
//   一半来自这里。
// 分级 TTL：研究类接口（行业强度/脉冲/拓扑/回测/审计）是日频 → 10 分钟；
//           短线行情类会盘中变化 → 60 秒。
(function () {
  window.__quantModules = window.__quantModules || {};
  window.__quantModules.shorttermPage = window.__quantModules.shorttermPage || {};
  window.__quantModules.shorttermPage.cache = {
    create: function (ctx) {
      const { authHeaders } = ctx;
      const SHARED = (window.__qcShorttermCache = window.__qcShorttermCache || {
        map: {}, order: [], inflight: {}, max: 120,
      });
      const map = SHARED.map;
      const order = SHARED.order;
      const inflight = SHARED.inflight;
      const MAX = SHARED.max;
      const TTL_MARKET = 60 * 1000;
      const TTL_RESEARCH = 600 * 1000;

      function cacheTtl(url) {
        return /\/api\/(research|dwh)\//.test(String(url)) ? TTL_RESEARCH : TTL_MARKET;
      }

      function cachedGet(url, force) {
        const now = Date.now();
        const hit = map[url];
        if (!force && hit && now - hit.ts < cacheTtl(url)) return Promise.resolve(hit.data);
        if (inflight[url]) return inflight[url];   // 同一 URL 已在飞 → 复用 Promise
        const p = fetch(url, { headers: authHeaders() })
          .then(function (r) { return r.json(); })
          .then(function (data) {
            if (!map[url]) order.push(url);
            map[url] = { ts: Date.now(), data: data };
            while (order.length > MAX) {
              const oldest = order.shift();
              delete map[oldest];
            }
            return data;
          })
          .finally(function () { delete inflight[url]; });
        inflight[url] = p;
        return p;
      }

      // 外部写入（如 POST 生成复盘后回填）
      function put(url, data) {
        if (!map[url]) order.push(url);
        map[url] = { ts: Date.now(), data: data };
        while (order.length > MAX) {
          const oldest = order.shift();
          delete map[oldest];
        }
        return data;
      }

      function cacheSnapshot() {
        return { entries: Object.keys(map).length, inflight: Object.keys(inflight).length };
      }

      function cacheClear() {
        Object.keys(map).forEach(function (k) { delete map[k]; });
        order.length = 0;
        return true;
      }

      return { cachedGet, put, cacheSnapshot, cacheClear, cacheTtl };
    },
  };
})();
