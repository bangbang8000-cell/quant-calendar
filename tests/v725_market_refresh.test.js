// quant-calendar: v7.25 FR-6 行情刷新状态机纯函数单测
// 运行: node tests/v725_market_refresh.test.js
'use strict';
const assert = require('assert');
const path = require('path');

const core = require(path.join(__dirname, '..', 'frontend', 'js', 'market-refresh-core.js'));

let passed = 0;
function it(name, fn) {
  try { fn(); passed += 1; console.log('  ok   ' + name); }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1; }
}

// 2026-11-27 是周五（交易日）
function at(h, m, s) { return new Date(2026, 10, 27, h, m, s || 0); }
const TODAY = '20261127';

function realResponse(tradeDate) {
  return {
    is_trading_day: true,
    indices: [
      { code: '000001.SH', trade_date: tradeDate || TODAY, is_mock: false },
    ],
  };
}

// ── 阶段判定 ──
it('盘前 → pre_open', () => assert.strictEqual(core.phaseOf(at(9, 0)), 'pre_open'));
it('早盘 → trading', () => assert.strictEqual(core.phaseOf(at(10, 0)), 'trading'));
it('午休 → lunch', () => assert.strictEqual(core.phaseOf(at(12, 0)), 'lunch'));
it('午盘 → trading', () => assert.strictEqual(core.phaseOf(at(14, 0)), 'trading'));
it('刚收盘 15:00–15:05 → closing', () => assert.strictEqual(core.phaseOf(at(15, 2)), 'closing'));
it('15:05 后 → after_close', () => assert.strictEqual(core.phaseOf(at(15, 10)), 'after_close'));

// ── 刷新间隔 ──
it('交易时段刷新间隔落在 15–30 秒', () => {
  const plan = core.refreshPlan(realResponse(), at(10, 0));
  assert.ok(plan.intervalMs >= 15000 && plan.intervalMs <= 30000,
    '实际 ' + plan.intervalMs + 'ms');
});

it('交易时段 5 分钟内每次间隔 ≤30 秒且 ≥15 秒', () => {
  let t = at(9, 35);
  const gaps = [];
  for (let i = 0; i < 20; i++) {
    const plan = core.refreshPlan(realResponse(), t);
    if (!plan.intervalMs) break;
    gaps.push(plan.intervalMs);
    t = new Date(t.getTime() + plan.intervalMs);
  }
  assert.ok(gaps.length >= 10, '5 分钟内应刷新多次，实际 ' + gaps.length);
  assert.ok(gaps.every(g => g <= 30000), '存在 >30s 间隔: ' + gaps.join(','));
  assert.ok(gaps.every(g => g >= 15000), '存在 <15s 间隔: ' + gaps.join(','));
});

it('午休不自动轮询（进入时补刷一次即可）', () => {
  assert.strictEqual(core.refreshPlan(realResponse(), at(12, 0)).intervalMs, 0);
});

it('盘前不自动轮询', () => {
  assert.strictEqual(core.refreshPlan(realResponse(), at(8, 50)).intervalMs, 0);
});

it('15:00–15:05 短 TTL 重试', () => {
  const plan = core.refreshPlan(realResponse(), at(15, 2));
  assert.ok(plan.intervalMs > 0 && plan.intervalMs <= 60000, '实际 ' + plan.intervalMs);
});

it('15:05 后未确认当日 → 短 TTL 重试', () => {
  const plan = core.refreshPlan(realResponse('20261126'), at(15, 10));
  assert.ok(plan.intervalMs > 0 && plan.intervalMs <= 60000, '实际 ' + plan.intervalMs);
  assert.strictEqual(plan.confirmed, false);
});

it('15:05 后确认当日 → 停止自动轮询', () => {
  const plan = core.refreshPlan(realResponse(TODAY), at(15, 10));
  assert.strictEqual(plan.confirmed, true);
  assert.strictEqual(plan.intervalMs, 0);
});

it('非交易日不轮询', () => {
  const plan = core.refreshPlan({ is_trading_day: false, indices: [] }, at(10, 0));
  assert.strictEqual(plan.intervalMs, 0);
  assert.strictEqual(plan.phase, 'holiday');
});

it('nextAt 与 intervalMs 一致', () => {
  const plan = core.refreshPlan(realResponse(), at(10, 0));
  assert.strictEqual(plan.nextAt, at(10, 0).getTime() + plan.intervalMs);
});

// ── 可见性 ──
it('回到前台 → 立即刷新', () => {
  assert.strictEqual(core.shouldRefreshOnVisible('visible'), true);
  assert.strictEqual(core.shouldRefreshOnVisible('hidden'), false);
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
