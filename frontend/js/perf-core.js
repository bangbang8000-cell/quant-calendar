// quant-calendar: 前端性能度量核心 (6.4.3 / FR-648)
// 纯逻辑 (无 DOM): 长任务阈值判定 / 聚合 / 分位; 浏览器上报在 perf-observer.js
// UMD: 浏览器 window.QuantPerf / Node require(...) (pytest 可单测)
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.QuantPerf = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null))), function () {
  'use strict';

  // PRD FR-648: 长任务 >200ms 记录; 图表 >5,000 点降采样
  var LONG_TASK_MS = 200;
  var CHART_DOWNSAMPLE_POINTS = 5000;
  var MAX_KEEP = 200;

  function isLongTask(durationMs, threshold) {
    var t = typeof threshold === 'number' ? threshold : LONG_TASK_MS;
    return Number(durationMs) > t;
  }

  // 记录一条任务; entries 保留最近 MAX_KEEP 条, 返回 { entries, added }
  function record(entries, task, keep) {
    var arr = Array.isArray(entries) ? entries.slice() : [];
    var cap = keep || MAX_KEEP;
    var added = false;
    if (task && typeof task.duration === 'number') {
      arr.push({
        duration: Math.round(task.duration),
        name: String(task.name || 'longtask'),
        at: task.at || Date.now(),
      });
      if (arr.length > cap) arr = arr.slice(arr.length - cap);
      added = true;
    }
    return { entries: arr, added: added };
  }

  function percentile(values, p) {
    var arr = (values || []).filter(function (v) { return typeof v === 'number' && isFinite(v); })
      .slice().sort(function (a, b) { return a - b; });
    if (!arr.length) return 0;
    var idx = Math.ceil((p / 100) * arr.length) - 1;
    if (idx < 0) idx = 0;
    if (idx >= arr.length) idx = arr.length - 1;
    return arr[idx];
  }

  function summarize(entries) {
    var arr = entries || [];
    var durations = arr.map(function (e) { return e.duration; });
    return {
      count: arr.length,
      max_ms: durations.length ? Math.max.apply(null, durations) : 0,
      p95_ms: percentile(durations, 95),
      threshold_ms: LONG_TASK_MS,
      over_budget: arr.length > 0,
    };
  }

  // CI/自检门禁: 长任务数量超 limit 视为失败
  function gate(entries, limit) {
    var max = typeof limit === 'number' ? limit : 0;
    var s = summarize(entries);
    return {
      ok: s.count <= max,
      count: s.count,
      limit: max,
      max_ms: s.max_ms,
      p95_ms: s.p95_ms,
    };
  }

  // 图表点数超过阈值才降采样 (阈值语义由调用方实现, 此处只判是否需要)
  function needsDownsample(pointCount, threshold) {
    var t = typeof threshold === 'number' ? threshold : CHART_DOWNSAMPLE_POINTS;
    return Number(pointCount) > t;
  }

  var api = {
    LONG_TASK_MS: LONG_TASK_MS,
    CHART_DOWNSAMPLE_POINTS: CHART_DOWNSAMPLE_POINTS,
    MAX_KEEP: MAX_KEEP,
    isLongTask: isLongTask,
    record: record,
    percentile: percentile,
    summarize: summarize,
    gate: gate,
    needsDownsample: needsDownsample,
  };
  return api;
});
