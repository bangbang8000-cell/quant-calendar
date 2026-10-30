// quant-calendar: WS 生命周期纯函数单测 (v6.6 / T-6.6.5, T-6.6.6, T-6.6.7)
// 运行: node tests/realtime_lifecycle_core.test.js
'use strict';
const assert = require('assert');
const path = require('path');

const core = require(path.join(__dirname, '..', 'frontend', 'js', 'realtime-lifecycle-core.js'));

let passed = 0;
function it(name, fn) {
  try { fn(); passed += 1; console.log('  ok   ' + name); }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1; }
}

// ── 四态文案 (T-6.6.6) ──
it('open → 实时已连接', () => assert.strictEqual(core.stateText('open'), '实时已连接'));
it('connecting → 连接中…', () => assert.strictEqual(core.stateText('connecting'), '连接中…'));
it('idle → 未连接', () => assert.strictEqual(core.stateText('idle'), '未连接'));
it('offline 无原因 → 正在重连', () => assert.strictEqual(core.stateText('offline'), '连接已断开，正在重连…'));
it('offline + 非交易时段 → 专用文案', () => {
  assert.strictEqual(core.stateText('offline', { reason: 'non_trading_hours' }), '非交易时段，暂不推送');
});
it('offline + 上游不可达 → 专用文案', () => {
  assert.strictEqual(core.stateText('offline', { reason: 'upstream_unreachable' }), '上游数据源不可达');
});
it('offline + degraded 无原因 → 不刷新文案', () => {
  assert.strictEqual(core.stateText('offline', { degraded: true }), '实时不可用，不刷新');
});
it('未知状态 → 未连接（不抛异常）', () => {
  assert.strictEqual(core.stateText('bogus'), '未连接');
  assert.strictEqual(core.stateText(undefined), '未连接');
});
it('四态文案互不相同（避免状态不可辨）', () => {
  const set = new Set(core.WS_STATES.map(s => core.stateText(s)));
  assert.strictEqual(set.size, core.WS_STATES.length);
});

// ── 指数退避 (T-6.6.7) ──
it('退避 1→5s 2→10s 3→20s', () => {
  assert.strictEqual(core.nextBackoff(1), 5000);
  assert.strictEqual(core.nextBackoff(2), 10000);
  assert.strictEqual(core.nextBackoff(3), 20000);
});
it('退避封顶 30s', () => {
  assert.strictEqual(core.nextBackoff(4), 30000);
  assert.strictEqual(core.nextBackoff(10), 30000);
});
it('退避非法输入 → 基数，不返回 NaN', () => {
  assert.strictEqual(core.nextBackoff(0), 5000);
  assert.strictEqual(core.nextBackoff(-3), 5000);
  assert.strictEqual(core.nextBackoff(NaN), 5000);
});
it('退避单调不递减', () => {
  let prev = 0;
  for (let i = 1; i <= 5; i++) {
    const v = core.nextBackoff(i);
    assert.ok(v >= prev, `第 ${i} 次退避 ${v} 小于前值 ${prev}`);
    prev = v;
  }
});

// ── 重连上限 ──
it('attempt 0..2 允许重连，3 达上限停止', () => {
  assert.strictEqual(core.shouldReconnect(0), true);
  assert.strictEqual(core.shouldReconnect(1), true);
  assert.strictEqual(core.shouldReconnect(2), true);
  assert.strictEqual(core.shouldReconnect(3), false);
});
it('自定义上限', () => {
  assert.strictEqual(core.shouldReconnect(1, 1), false);
  assert.strictEqual(core.shouldReconnect(0, 1), true);
});
it('上限非法 → false，不抛异常', () => {
  assert.strictEqual(core.shouldReconnect(NaN), false);
  assert.strictEqual(core.shouldReconnect(1, NaN), false);
});

// ── 看门狗 (T-6.6.6) ──
it('发起后 7.9s 未超时', () => assert.strictEqual(core.watchdogExpired(1000, 1000 + 7900), false));
it('发起后 8s 超时', () => assert.strictEqual(core.watchdogExpired(1000, 1000 + 8000), true));
it('未发起 (startedAt=0) → 不超时', () => assert.strictEqual(core.watchdogExpired(0, 999999), false));
it('看门狗非法输入 → false', () => {
  assert.strictEqual(core.watchdogExpired(NaN, 1), false);
  assert.strictEqual(core.watchdogExpired(1, NaN), false);
});

// ── 订阅 ──
it('仅 open 状态下重发订阅', () => {
  assert.strictEqual(core.shouldResubscribe('open'), true);
  ['idle', 'connecting', 'offline'].forEach(s => assert.strictEqual(core.shouldResubscribe(s), false));
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
