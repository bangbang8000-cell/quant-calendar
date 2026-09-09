// V6.1 (TEST-PLAN 6.1 TC-6.2.1): 动态页签状态机 Node 断言 (由 test_tabs_core.py 调用)
'use strict';
const assert = require('assert');
const path = require('path');
const tabs = require(path.join(__dirname, '..', 'frontend', 'js', 'tabs-core.js'));

const { openTab, closeTab, getDefaultTab, tabsOf, MAX_TABS } = tabs;

// 打开新页签: 追加并激活
let g = {};
let r = openTab(g, 'strategies', 'overview', '今日一屏');
assert.deepStrictEqual(tabsOf(r.groups, 'strategies'), [{ subPage: 'overview', title: '今日一屏' }]);
assert.strictEqual(r.activeKey, 'strategies/overview');

// 重复打开: 仅激活不追加
g = { ai: [{ subPage: 'overview', title: '评估概览' }] };
r = openTab(g, 'ai', 'overview', '评估概览');
assert.strictEqual(tabsOf(r.groups, 'ai').length, 1, '重复打开不应追加');

// 上限淘汰: 超 8 保留默认页签, 淘汰最早非默认
g = {};
for (let i = 0; i < MAX_TABS + 2; i++) {
  r = openTab(g, 'cal', 'sub' + i, '子页' + i);
  g = r.groups;
}
let tabsArr = tabsOf(g, 'cal');
assert.strictEqual(tabsArr.length, MAX_TABS, '超过上限应淘汰');
assert.strictEqual(tabsArr[0].subPage, 'sub0', '默认页签(首个)应保留');
assert.ok(!tabsArr.some(t => t.subPage === 'sub1'), '最早的非默认页签应被淘汰');
assert.strictEqual(tabsArr[tabsArr.length - 1].subPage, 'sub' + (MAX_TABS + 1), '最新页签应保留');

// 关闭激活页签: 激活右侧相邻
g = { research: [{ subPage: 'a', title: 'A' }, { subPage: 'b', title: 'B' }, { subPage: 'c', title: 'C' }] };
r = closeTab(g, 'research', 'b', 'b');
assert.deepStrictEqual(tabsOf(r.groups, 'research').map(t => t.subPage), ['a', 'c']);
assert.strictEqual(r.nextActive, 'c', '关闭激活页签应激活右侧相邻');

// 关闭最右激活页签: 激活左侧
g = { research: [{ subPage: 'a', title: 'A' }, { subPage: 'b', title: 'B' }] };
r = closeTab(g, 'research', 'b', 'b');
assert.strictEqual(r.nextActive, 'a', '关闭最右应激活左侧');

// 关闭非激活页签: 激活项不受影响
g = { research: [{ subPage: 'a', title: 'A' }, { subPage: 'b', title: 'B' }] };
r = closeTab(g, 'research', 'a', 'b');
assert.strictEqual(r.nextActive, null, '关闭非激活页签不影响激活项');
assert.deepStrictEqual(tabsOf(r.groups, 'research').map(t => t.subPage), ['b']);

// 关闭组内最后一个: 组空
g = { cal: [{ subPage: 'daily', title: '日视图' }] };
r = closeTab(g, 'cal', 'daily', 'daily');
assert.strictEqual(tabsOf(r.groups, 'cal').length, 0, '组空由调用方重建默认页签');
assert.strictEqual(r.nextActive, null);

// 默认页签: 首个子页
assert.strictEqual(getDefaultTab(['overview', 'merrill', 'market']), 'overview');
assert.strictEqual(getDefaultTab([]), '');
assert.strictEqual(getDefaultTab(null), '');

// 关闭不存在的页签: 不变
g = { a: [{ subPage: 'x', title: 'X' }] };
r = closeTab(g, 'a', 'missing', 'x');
assert.strictEqual(tabsOf(r.groups, 'a').length, 1, '关闭不存在的页签不应变更');

// V6.2 F8: 关闭其他 (仅保留 keep)
g = { b: [{ subPage: 'x', title: 'X' }, { subPage: 'y', title: 'Y' }, { subPage: 'z', title: 'Z' }] };
r = tabs.closeOthers(g, 'b', 'y');
assert.deepStrictEqual(tabsOf(r.groups, 'b').map(t => t.subPage), ['y'], '关闭其他应仅保留 keep');
assert.strictEqual(r.activeKey, 'b/y');

// V6.2 F8: 全部关闭 → 组空
g = { b: [{ subPage: 'x', title: 'X' }, { subPage: 'y', title: 'Y' }] };
r = tabs.closeAll(g, 'b');
assert.strictEqual(tabsOf(r.groups, 'b').length, 0, '全部关闭应清空组');

// V6.2 F8: 拖拽排序
g = { c: [{ subPage: 'a', title: 'A' }, { subPage: 'b', title: 'B' }, { subPage: 'c', title: 'C' }] };
r = tabs.reorder(g, 'c', 0, 2);
assert.deepStrictEqual(tabsOf(r.groups, 'c').map(t => t.subPage), ['b', 'c', 'a'], '拖拽 0→2 应重排');
r = tabs.reorder(g, 'c', 9, 0);  // 越界 fromIdx 不变
assert.deepStrictEqual(tabsOf(r.groups, 'c').map(t => t.subPage), ['a', 'b', 'c'], '越界 fromIdx 不应变更');

console.log('tabs-core: all assertions passed');
