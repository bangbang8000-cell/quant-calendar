// quant-calendar: v7.25 FR-6 模拟数据标识纯函数单测
// 运行: node tests/v725_mock_badge.test.js
'use strict';
const assert = require('assert');
const path = require('path');

const core = require(path.join(__dirname, '..', 'frontend', 'js', 'market-refresh-core.js'));

let passed = 0;
function it(name, fn) {
  try { fn(); passed += 1; console.log('  ok   ' + name); }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1; }
}

it('全部真实数据 → 无标识', () => {
  assert.strictEqual(core.mockBadge({
    is_mock: false,
    indices: [{ is_mock: false }, { is_mock: false }],
  }), '');
});

it('顶层 is_mock → 模拟数据', () => {
  assert.strictEqual(core.mockBadge({ is_mock: true, indices: [] }), '模拟数据');
});

it('任一指数为 mock → 模拟数据', () => {
  assert.strictEqual(core.mockBadge({
    indices: [{ is_mock: false }, { is_mock: true }],
  }), '模拟数据');
});

it('数据源恢复后标识自动消失', () => {
  const before = { indices: [{ is_mock: true, data_source: 'mock' }] };
  const after = { indices: [{ is_mock: false, data_source: 'tushare' }] };
  assert.strictEqual(core.mockBadge(before), '模拟数据');
  assert.strictEqual(core.mockBadge(after), '');
});

it('data_source 汇总：单一来源直接展示', () => {
  assert.strictEqual(core.sourceText({
    indices: [{ data_source: 'tushare' }, { data_source: 'tushare' }],
  }), 'tushare');
});

it('data_source 汇总：多来源标记 mixed', () => {
  assert.strictEqual(core.sourceText({
    indices: [{ data_source: 'tushare' }, { data_source: 'akshare' }],
  }), 'mixed');
});

it('data_source 汇总：空数据不报错', () => {
  assert.strictEqual(core.sourceText(null), '');
  assert.strictEqual(core.sourceText({ indices: [] }), '');
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
