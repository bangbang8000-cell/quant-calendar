/**
 * V6.11 (需求轮2·批次2): 偏好链路探针
 *
 * 目的: 让「偏好读写」这类纯逻辑也进入可自动化的门禁, 覆盖三个曾出问题的点:
 *   1) 色相合法性: 0(红) 与 -1(中性) 必须都算合法, 361/非数字必须拒绝
 *   2) 服务端偏好合并: 必须逐键生效 (原实现对 theme_hue 调 .indexOf 抛错 → 后续键全丢)
 *   3) 本地持久化: setPreferences({theme_hue: 0/-1}) 必须真的写入 localStorage
 *
 * 用法: node tests/preferences_probe.js     → stdout 一行 JSON
 */
'use strict';
const path = require('path');

const PREFS = require(path.join(__dirname, '..', 'frontend', 'js', 'preferences.js'));

function makeStorage(seed) {
  const data = Object.assign({}, seed || {});
  return {
    getItem: function (k) { return Object.prototype.hasOwnProperty.call(data, k) ? data[k] : null; },
    setItem: function (k, v) { data[k] = String(v); },
    removeItem: function (k) { delete data[k]; },
    _dump: function () { return Object.assign({}, data); },
  };
}

const out = {};

// 1) 色相合法性
out.validHue = {};
[0, -1, 45, 360, 361, -2, '0', 'x', null].forEach(function (v) {
  out.validHue[String(v)] = PREFS.isValidValue('theme_hue', v);
});

// 2) 服务端偏好合并 (服务端下发全量键, 其中 theme_hue=0)
global.localStorage = makeStorage({ quant_token: 'tok' });
global.fetch = async function () {
  return {
    ok: true,
    json: async function () {
      return { success: true, preferences: {
        default_view: 'calendar', theme: 'dark', theme_hue: 0, chart_period: 'weekly',
        language: 'en', info_density: 'compact', kline_show_minutes: 'show',
      } };
    },
  };
};
const bg = global.console.warn;
global.console.warn = function () {};              // 探针里静音诊断输出

// 3) 本地持久化
const persist = {};
[0, -1, 220].forEach(function (h) {
  const st = makeStorage({ quant_token: 'tok' });
  global.localStorage = st;
  PREFS.setPreference('theme_hue', h);
  let saved = null;
  try { saved = JSON.parse(st._dump().quant_preferences || '{}').theme_hue; } catch (e) { saved = 'PARSE_ERR'; }
  persist[String(h)] = saved;
});

out.persist = persist;

PREFS.loadPreferences().then(function (merged) {
  out.merged = {
    default_view: merged.default_view, theme: merged.theme, theme_hue: merged.theme_hue,
    chart_period: merged.chart_period, language: merged.language,
    info_density: merged.info_density, kline_show_minutes: merged.kline_show_minutes,
  };
  global.console.warn = bg;
  process.stdout.write(JSON.stringify(out));
}).catch(function (e) {
  global.console.warn = bg;
  process.stderr.write('preferences_probe 失败: ' + (e && e.message) + '\n');
  process.exit(2);
});
