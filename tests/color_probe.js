/**
 * V6.10 (配色专项·D): 主题令牌探针
 *
 * 目的: 配色门禁必须校验「运行期真实生成的令牌」, 而不是 themes.css 里的静态兜底值。
 * 做法: 用最小 DOM shim 加载 frontend/js/themes.js (运行期唯一权威), 对
 *       明/暗 × 7 个色相(含中性 -1) 调用 applyTheme(), 收集写入 <html> 的全部内联变量。
 * 输出: stdout 一行 JSON: { "light:45": { "--token": "value", ... }, ... }
 *
 * 用法: node tests/color_probe.js
 */
'use strict';
const fs = require('fs');
const path = require('path');

const store = {};
const root = {
  style: {
    setProperty: function (k, v) { store[k] = String(v); },
    removeProperty: function (k) { delete store[k]; },
  },
  setAttribute: function () {},
  getAttribute: function () { return null; },
};

global.window = {
  __quantModules: {},
  matchMedia: function () { return { matches: false, addEventListener: function () {}, addListener: function () {} }; },
};
global.document = {
  documentElement: root,
  querySelector: function () { return null; },
};
global.localStorage = { getItem: function () { return null; }, setItem: function () {} };

const SRC = path.join(__dirname, '..', 'frontend', 'js', 'themes.js');
const code = fs.readFileSync(SRC, 'utf8');
// eslint-disable-next-line no-eval
(0, eval)(code);

const themes = global.window.__quantModules && global.window.__quantModules.themes;
if (!themes) {
  process.stderr.write('color_probe: themes.js 未导出 __quantModules.themes\n');
  process.exit(2);
}

const MODES = ['light', 'dark'];
const HUES = [45, 220, 0, 140, 270, 320, -1]; // 6 品牌色相 + 中性无色相
const out = {};
MODES.forEach(function (mode) {
  HUES.forEach(function (hue) {
    themes.applyTheme(mode, hue);
    out[mode + ':' + hue] = Object.assign({}, store);
  });
});

process.stdout.write(JSON.stringify(out));
