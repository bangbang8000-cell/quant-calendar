// quant-calendar: 长任务观测 (6.4.3 / FR-648 第 4 条)
// PerformanceObserver(longtask) → 超 200ms 上报 perf_long_task 事件 (PRD §8),
// 并把明细留在 window.__qcPerf 供自检/CI 门禁读取。
// 浏览器能力缺失 (Safari/旧版) 时降级为不采集, 不阻塞主流程。
(function () {
  if (typeof window === 'undefined') return;
  var P = window.QuantPerf || {};
  if (!P.record) return;

  var entries = [];
  var observer = null;

  function track(task) {
    try {
      var r = P.record(entries, task);
      entries = r.entries;
      if (window.QuantEvents && typeof window.QuantEvents.track === 'function') {
        window.QuantEvents.track('perf_long_task', {
          page: currentPage(),
          ms: Math.round(task.duration),
          kind: String(task.name || 'longtask'),
        });
      }
    } catch (e) {
      console.warn('[perf] 长任务记录失败', e);
    }
  }

  function currentPage() {
    try {
      var st = window.__quantState;
      return (st && st.currentPage && st.currentPage.value) || '';
    } catch (e) {
      console.warn('[perf] 读取当前页失败', e);
      return '';
    }
  }

  function start() {
    if (observer || typeof PerformanceObserver === 'undefined') return false;
    if (PerformanceObserver.supportedEntryTypes
        && PerformanceObserver.supportedEntryTypes.indexOf('longtask') === -1) return false;
    try {
      observer = new PerformanceObserver(function (list) {
        (list.getEntries() || []).forEach(function (e) {
          if (P.isLongTask(e.duration)) track({ duration: e.duration, name: e.name, at: Date.now() });
        });
      });
      observer.observe({ entryTypes: ['longtask'] });
      return true;
    } catch (e) {
      console.warn('[perf] longtask 观测不可用', e);
      return false;
    }
  }

  // 自检/CI 门禁: 长任务数 > limit 即失败 (默认 0 条)
  window.__qcPerf = {
    entries: function () { return entries.slice(); },
    summary: function () { return P.summarize(entries); },
    gate: function (limit) { return P.gate(entries, limit); },
    reset: function () { entries = []; },
    available: function () { return !!observer; },
    start: start,
  };

  start();
})();
