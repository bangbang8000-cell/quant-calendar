// quant-calendar: v7.26 FR-14 主题色收敛 + 设置页紧凑化
// 运行: node tests/v726_theme_presets.test.js
// 断言:
//   1) 主题色只剩 6 档: 金45/蓝220/红0/绿140/紫270/青180 (移除 粉320/橙25/靛蓝250/中性-1)
//   2) legacy 8 主题仅保留只读迁移映射, 用户管理不再作为可选项
//   3) 设置页 = 左锚点 + 右两列 + 分组折叠, 默认只展开「界面」
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');

const FE = path.join(__dirname, '..', 'frontend');
const read = (rel) => fs.readFileSync(path.join(FE, rel), 'utf-8');

let passed = 0;
function it(name, fn) {
  try { fn(); passed += 1; console.log('  ok   ' + name); }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1; }
}

global.window = global.window || {};
// themes.js 末尾的启动恢复会触碰 localStorage/document; Node 下用最小桩, 只为读取导出表
global.localStorage = global.localStorage || { getItem: () => null, setItem: () => {}, removeItem: () => {} };
global.document = global.document || {
  documentElement: { setAttribute: () => {}, style: { setProperty: () => {}, removeProperty: () => {} } },
  querySelector: () => null,
};
global.window.matchMedia = global.window.matchMedia || (() => ({ matches: false, addEventListener: () => {} }));
require(path.join(FE, 'js', 'themes.js'));
const T = global.window.__quantModules.themes;

it('HUES 恰好 6 档, 顺序 金/蓝/红/绿/紫/青', () => {
  assert.deepStrictEqual(T.HUES, [45, 220, 0, 140, 270, 180]);
});

it('legacy 映射目标色相全部落在 6 档内', () => {
  Object.keys(T.LEGACY_MAP).forEach((k) => {
    assert.ok(T.HUES.indexOf(T.LEGACY_MAP[k][1]) >= 0, k + ' → ' + T.LEGACY_MAP[k][1] + ' 不在 6 档内');
  });
});

it('legacy 主题仅保留只读映射 (8 条), 用户管理不再出现', () => {
  assert.strictEqual(Object.keys(T.legacyThemes).length, 8, '只读迁移映射仍需完整');
  const addUser = read('js/components/dialogs/add-user.js');
  assert.ok(!addUser.includes('legacyThemes'), '添加/编辑用户不得再出现 legacy 主题下拉');
  assert.ok(!addUser.includes('默认主题'), '用户管理不应再暴露旧主题选项');
  const sys = read('js/components/system/view-part2.js');
  assert.ok(!sys.includes('user-theme-dot'), '用户列表不应再渲染 legacy 主题名圆点');
});

it('面板色相/名称与 themes.js 同步为 6 档, 且不再含 320/25/250', () => {
  const ws = read('js/app-logic/workspace.js');
  const m = ws.match(/const themeHues = \[([^\]]*)\]/);
  assert.ok(m, 'workspace.js 应定义 themeHues');
  const hues = m[1].split(',').map((x) => parseInt(x.trim(), 10)).filter((x) => !isNaN(x));
  assert.deepStrictEqual(hues, [45, 220, 0, 140, 270, 180]);
  [320, 25, 250, -1].forEach((h) => {
    assert.ok(hues.indexOf(h) < 0, '已移除色相 ' + h + ' 不应再出现在面板');
  });
  const names = ws.match(/const themeHueNames = \{([^}]*)\}/);
  assert.ok(names, 'workspace.js 应定义 themeHueNames');
  ['金色', '蓝色', '红色', '绿色', '紫色', '青色'].forEach((n) => {
    assert.ok(names[1].includes(n), '缺少名称 ' + n);
  });
  assert.ok(!names[1].includes('粉色') && !names[1].includes('橙色') && !names[1].includes('靛蓝'));
});

it('设置页 = 左锚点 + 右两列 + 分组折叠, 默认展开「界面」', () => {
  const v = read('js/components/system/view-part2.js');
  assert.ok(v.includes('qc-settings-layout') && v.includes('qc-settings-nav'), '需要左锚点导航');
  assert.ok(v.includes('qc-settings-body'), '需要右侧内容区');
  assert.ok(v.includes("settingsOpen") && v.includes("'ui'"), '默认展开界面分组');
  ['ui', 'data', 'strategy'].forEach((g) => {
    assert.ok(v.includes("settingsOpen === '" + g + "'"), '缺少分组折叠 ' + g);
  });
  const css = read('css/components.css');
  const idx = css.indexOf('.qc-settings-body {');
  assert.ok(idx > 0, '需要 .qc-settings-body 样式');
  const block = css.slice(idx, idx + 400);
  assert.ok(block.includes('grid-template-columns: repeat(2, minmax(0, 1fr))'), '右侧应为两列表单');
  assert.ok(css.includes('.qc-settings-group-head {'), '分组标题需跨两列');
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
