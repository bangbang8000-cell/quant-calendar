// quant-calendar: request-core 6.1.5 (E5) — 请求竞态治理 (纯逻辑, node 可测)
// 能力: stale guard(过期响应丢弃) + dedupe(同 key 在途合并) + abort(取消)
// 与具体 fetch 解耦; 由调用方在请求前后 begin/isStale/finish/abort
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantRequestCore = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  function createRequestGuard() {
    var seq = 0;
    var inflight = {};   // key -> { seq, controller }

    // 发起前调用: 返回 {deduped, id, controller}
    //   deduped=true 表示同 key 请求在途 (复用, 不应再发新请求)
    function begin(key) {
      var id = ++seq;
      if (key && inflight[key]) {
        return { deduped: true, id: inflight[key].seq, controller: inflight[key].controller };
      }
      var controller = (typeof AbortController !== 'undefined') ? new AbortController() : null;
      inflight[key] = { seq: id, controller: controller };
      return { deduped: false, id: id, controller: controller };
    }

    // 响应返回后: 过期(已被更新请求取代) → true, 丢弃
    function isStale(key, id) {
      var cur = inflight[key];
      return !cur || cur.seq !== id;
    }

    // 取消指定 key 的在途请求
    function abort(key) {
      var cur = inflight[key];
      if (cur && cur.controller) { try { cur.controller.abort(); } catch (e) { /* 忽略 */ } }
    }

    // 完成(成功/失败)后清理; 仅当 id 匹配(防止误清新请求)
    function finish(key, id) {
      var cur = inflight[key];
      if (cur && cur.seq === id) delete inflight[key];
    }

    function activeCount() {
      var n = 0;
      for (var k in inflight) { if (Object.prototype.hasOwnProperty.call(inflight, k)) n++; }
      return n;
    }

    return { begin: begin, isStale: isStale, abort: abort, finish: finish, activeCount: activeCount };
  }

  return { createRequestGuard: createRequestGuard };
});
