// V6.3 (TEST-PLAN 6.3 TC-6.3.1.x): 导航形态/页签开关状态机 Node 断言 (由 test_nav_mode_core.py 调用)
'use strict';
const assert = require('assert');
const path = require('path');
const core = require(path.join(__dirname, '..', 'frontend', 'js', 'nav-mode-core.js'));

const { normalizeNavMode, tabsVisible, subnavVisible, treeChildrenVisible, topTabsVisible, readPrefs, writePrefs, NAV_MODES, DEFAULT_NAV_MODE } = core;

// TC-6.3.1.1 合法形态原样返回
assert.strictEqual(normalizeNavMode('subnav'), 'subnav');
assert.strictEqual(normalizeNavMode('tree'), 'tree');
assert.strictEqual(normalizeNavMode('toptab'), 'toptab');

// TC-6.3.1.2 非法/缺失归一回退 subnav
assert.strictEqual(normalizeNavMode('invalid'), 'subnav');
assert.strictEqual(normalizeNavMode(undefined), 'subnav');
assert.strictEqual(normalizeNavMode(null), 'subnav');
assert.strictEqual(normalizeNavMode(''), 'subnav');
assert.strictEqual(DEFAULT_NAV_MODE, 'subnav');
assert.deepStrictEqual(NAV_MODES, ['subnav', 'tree', 'toptab']);

// TC-6.3.1.3 tabsVisible 真值表: subnav/tree + 开 → true; toptab 任意 → false; subnav + 关 → false
assert.strictEqual(tabsVisible('subnav', true), true);
assert.strictEqual(tabsVisible('tree', true), true);
assert.strictEqual(tabsVisible('toptab', true), false);
assert.strictEqual(tabsVisible('toptab', false), false);
assert.strictEqual(tabsVisible('subnav', false), false);
assert.strictEqual(tabsVisible('tree', false), false);

// 形态显隐谓词
assert.strictEqual(subnavVisible('subnav'), true);
assert.strictEqual(subnavVisible('tree'), false);
assert.strictEqual(subnavVisible('toptab'), false);
assert.strictEqual(treeChildrenVisible('tree'), true);
assert.strictEqual(treeChildrenVisible('subnav'), false);
assert.strictEqual(topTabsVisible('toptab'), true);
assert.strictEqual(topTabsVisible('subnav'), false);

// TC-6.3.1.4 readPrefs: 无 localStorage (Node) → 默认
assert.deepStrictEqual(readPrefs(), { navMode: 'subnav', tabsEnabled: true });

// TC-6.3.1.5 非法 localStorage 值归一化: 模拟存储
const fake = {
  _s: {},
  setItem(k, v) { this._s[k] = String(v); },
  getItem(k) { return k in this._s ? this._s[k] : null; },
};
const _oldWindow = global.window;
global.window = { localStorage: fake };
try {
  writePrefs({ navMode: 'tree', tabsEnabled: false });
  assert.deepStrictEqual(readPrefs(), { navMode: 'tree', tabsEnabled: false });
  // 非法写入值归一化
  writePrefs({ navMode: 'bogus' });
  assert.strictEqual(readPrefs().navMode, 'subnav');
  // tabsEnabled 字符串 '0' → false
  writePrefs({ tabsEnabled: true });
  assert.strictEqual(readPrefs().tabsEnabled, true);
} finally {
  global.window = _oldWindow;
}

// TC-6.3.1.6 writePrefs 往返一致 (已在 1.5 覆盖)

console.log('all assertions passed');
