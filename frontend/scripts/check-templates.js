// quant-calendar v7.11 (FR-7.11-7): 组件模板静态编译检查
// 背景: 本项目页面模板是 JS 字符串 + 运行时编译, 构建阶段不校验模板语法,
//       写错一个标签/指令只有浏览器打开那一页才报错(整页空白)。
// 本脚本用 Vue 自带 compiler-dom 逐组件编译, 把这类错误提前到本地/CI。
// 用法: node frontend/scripts/check-templates.js   (退出码 1 = 有模板错误)
'use strict';

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

// 单文件组件 (自注册到 __quantComponents)
const COMPONENT_FILES = [
  'js/components/overlay-radar.js',
  'js/components/pattern-lab.js',
  'js/components/marketplace-panel.js',
  'js/components/param-lock-panel.js',
  'js/components/exec-plans-panel.js',
  'js/components/stock-report-panel.js',
  'js/components/dialogs/stock-detail.js',
];

// 模板分治页 (part1 + part2 由 view.js 用 '+' 装配, 需先装配再编译)
const ASSEMBLED = [
  { name: 'strategies(view)', module: 'strategiesPage', dir: 'js/components/strategies' },
  { name: 'research(view)', module: 'researchPage', dir: 'js/components/research' },
];

// ── 最小垫片: 组件文件是 IIFE + window 全局, 只需跑完注册 ──
const noop = function () {};
global.window = global;
global.localStorage = { getItem: function () { return null; }, setItem: noop, removeItem: noop };
global.Vue = {
  ref: function (v) { return { value: v }; },
  computed: function () { return { value: undefined }; },
  watch: noop, onMounted: noop, onUnmounted: noop, nextTick: noop,
  inject: function () { return null; }, provide: noop,
  defineComponent: function (o) { return o; },
};
global.ElementPlus = {
  ElMessage: { success: noop, error: noop, warning: noop },
  ElMessageBox: { confirm: noop },
};
global.__quantModules = {};
global.__quantComponents = {};

const { compile } = require(path.join(ROOT, 'node_modules', '@vue', 'compiler-dom', 'dist', 'compiler-dom.cjs.js'));

let failed = 0;
let checked = 0;

function compileOne(name, tpl) {
  checked += 1;
  const errs = [];
  let code = '';
  try {
    const r = compile(tpl, { mode: 'function', onError: function (e) { errs.push(e.message); } });
    code = (r && r.code) || '';
    if (!code) errs.push('编译未产出代码');
  } catch (e) {
    errs.push(e.message);
  }
  if (errs.length) {
    failed += 1;
    console.error('TEMPLATE_FAIL ' + name + '\n  - ' + errs.join('\n  - '));
  } else {
    console.log('ok ' + name + ' (' + tpl.length + ' chars)');
  }
}

COMPONENT_FILES.forEach(function (rel) {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) {
    console.error('MISSING ' + rel);
    failed += 1;
    return;
  }
  const before = Object.keys(global.__quantComponents);
  try {
    require(abs);
  } catch (e) {
    console.error('LOAD_FAIL ' + rel + ': ' + e.message);
    failed += 1;
    return;
  }
  const fresh = Object.keys(global.__quantComponents).filter(function (k) {
    return before.indexOf(k) < 0;
  });
  if (!fresh.length) {
    console.error('NO_COMPONENT_REGISTERED ' + rel);
    failed += 1;
    return;
  }
  fresh.forEach(function (k) {
    const comp = global.__quantComponents[k];
    if (!comp || typeof comp.template !== 'string') {
      console.error('NO_TEMPLATE ' + rel + '::' + k);
      failed += 1;
      return;
    }
    compileOne(rel + '::' + k, comp.template);
  });
});

ASSEMBLED.forEach(function (entry) {
  const dir = path.join(ROOT, entry.dir);
  ['view-part1.js', 'view-part2.js'].forEach(function (f) {
    const p = path.join(dir, f);
    if (fs.existsSync(p)) {
      delete require.cache[require.resolve(p)];
      require(p);
    }
  });
  const mod = global.__quantModules[entry.module] || {};
  const tpl = (mod.part1 || '') + (mod.part2 || '');
  if (!tpl) {
    console.error('NO_TEMPLATE ' + entry.name);
    failed += 1;
    return;
  }
  compileOne(entry.name + ' (part1+part2)', tpl);
});

console.log('\nchecked=' + checked + ' failed=' + failed);
process.exit(failed ? 1 : 0);
