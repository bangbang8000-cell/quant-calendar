// quant-calendar: 全站统一数字/占位格式化层 (v7.17 / FR-401)
// 背景: 同一排 KPI 里混用 `--` / `0.00` / `—` 三种占位符, 用户无法区分"是 0"与"没数据" (缺陷 D-14)。
// 约定:
//   1) 缺失一律输出 EMPTY('—', U+2014), 禁止 '--' / '' / 0 表达缺失
//   2) 数值单位进列头或由调用方给出, 不在同一列内混用 万/亿/裸值
//   3) 0 是有效值, 必须原样输出 '0.00' 而不是占位符
//   4) dev 构建下对 nil 入参打一次 warn (按函数名聚合), 便于早期发现字段缺失
// 浏览器: window.QuantFmt   /   Node: module.exports (供单测)
(function () {
  'use strict';

  var EMPTY = '\u2014'; // em dash

  function isNil(v) {
    return v === null || v === undefined || v === '' || (typeof v === 'number' && Number.isNaN(v));
  }

  function toNum(v) {
    if (typeof v === 'number') return v;
    var n = Number(v);
    return Number.isNaN(n) ? null : n;
  }

  // 千分位整数
  function num(v, digits) {
    if (isNil(v)) return EMPTY;
    var n = toNum(v);
    if (n === null) return EMPTY;
    var d = typeof digits === 'number' ? digits : 0;
    var fixed = Math.abs(n).toFixed(d);
    var parts = fixed.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return (n < 0 ? '-' : '') + parts.join('.');
  }

  // 带单位计数: count(46, ' 只') -> '46 只'
  function count(v, unit) {
    if (isNil(v)) return EMPTY;
    var s = num(v);
    if (s === EMPTY) return EMPTY;
    return unit ? s + unit : s;
  }

  // 金额: 自动选 万 / 亿, 保留 2 位; 1 万以下保留 2 位原值
  // money(46750000) -> '4675.00万'   money(102000000) -> '1.02亿'
  function money(v, opts) {
    var o = opts || {};
    if (isNil(v)) return EMPTY;
    var n = toNum(v);
    if (n === null) return EMPTY;
    var d = typeof o.digits === 'number' ? o.digits : 2;
    var sign = n < 0 ? '-' : '';
    var a = Math.abs(n);
    if (a >= 1e8) return sign + (a / 1e8).toFixed(d) + '\u4ebf';
    if (a >= 1e4) return sign + (a / 1e4).toFixed(d) + '\u4e07';
    return sign + a.toFixed(d);
  }

  // 百分比: 入参已是百分数(3.15 -> '+3.15%'); signed 默认 true
  function pct(v, digits, signed) {
    if (isNil(v)) return EMPTY;
    var n = toNum(v);
    if (n === null) return EMPTY;
    var d = typeof digits === 'number' ? digits : 2;
    var s = typeof signed === 'boolean' ? signed : true;
    var sign = s && n > 0 ? '+' : '';
    return sign + n.toFixed(d) + '%';
  }

  // 天数: 3 -> '3 天'; 缺失 -> '—' (不带单位, 避免出现 '— 天')
  function days(v) {
    if (isNil(v)) return EMPTY;
    var n = toNum(v);
    if (n === null) return EMPTY;
    return n + ' \u5929';
  }

  // 评分/比率: 保留 1 位
  function score(v, digits) {
    if (isNil(v)) return EMPTY;
    var n = toNum(v);
    if (n === null) return EMPTY;
    return n.toFixed(typeof digits === 'number' ? digits : 1);
  }

  // 文本兜底: 空串/纯空白视为缺失
  function text(v) {
    if (isNil(v)) return EMPTY;
    var s = String(v).trim();
    return s === '' ? EMPTY : s;
  }

  // 涨跌语义类: 红涨绿跌 (中国习惯), 0 视为平
  function trendClass(v) {
    if (isNil(v)) return '';
    var n = toNum(v);
    if (n === null || n === 0) return 'is-flat';
    return n > 0 ? 'is-up' : 'is-down';
  }

  // ── dev 期缺失告警: 同一函数同名只提示一次, 避免刷屏 ──
  // 构建期注入开关: vite define 未配置时按 hostname 判断 (localhost = dev)
  var __QC_DEV__ = (function () {
    try {
      if (typeof window.__QC_DEV__ === 'boolean') return window.__QC_DEV__;
      var h = window.location && window.location.hostname;
      return h === 'localhost' || h === '127.0.0.1';
    } catch (e) { return false; }
  })();

  var _warned = Object.create(null);
  function warnOnce(fn, v) {
    if (!__QC_DEV__) return;
    if (_warned[fn]) return;
    _warned[fn] = 1;
    if (window.console && console.warn) {
      console.warn('[fmt] ' + fn + ' 收到缺失值 (' + String(v) + '), 已输出占位符。若为预期缺失请忽略。');
    }
  }

  // 包装: 所有导出函数统一在 nil 时 warn
  function wrap(name, fn) {
    return function (v) {
      if (isNil(v)) warnOnce(name, v);
      return fn.apply(null, arguments);
    };
  }

  var api = {
    EMPTY: EMPTY,
    isNil: isNil,
    num: wrap('num', num),
    count: wrap('count', count),
    money: wrap('money', money),
    pct: wrap('pct', pct),
    days: wrap('days', days),
    score: wrap('score', score),
    text: wrap('text', text),
    trendClass: trendClass,
  };

  if (typeof window !== 'undefined') window.QuantFmt = api;
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
})();
