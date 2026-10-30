// quant-calendar: 自选列表渲染策略纯函数单测 (v6.6 / T-6.6.1)
// 运行: node tests/watchlist_render_core.test.js
'use strict';
const assert = require('assert');
const path = require('path');

const CORE = path.join(__dirname, '..', 'frontend', 'js', 'watchlist-render-core.js');
const core = require(CORE);

let passed = 0;
function it(name, fn) {
  try {
    fn();
    passed += 1;
    console.log('  ok   ' + name);
  } catch (e) {
    console.error('  FAIL ' + name + '\n       ' + e.message);
    process.exitCode = 1;
  }
}

// ── shouldRenderPlain: 小数据量退化为普通渲染 ──
it('13 只（默认阈值 50）→ 普通渲染', () => {
  assert.strictEqual(core.shouldRenderPlain(13), true);
});

it('刚好 50 只 → 普通渲染（含阈值）', () => {
  assert.strictEqual(core.shouldRenderPlain(50), true);
});

it('51 只 → 走虚拟滚动', () => {
  assert.strictEqual(core.shouldRenderPlain(51), false);
});

it('0 只 → 不渲染普通列表（交给空态）', () => {
  assert.strictEqual(core.shouldRenderPlain(0), false);
});

it('阈值 0 表示禁用退化（永远虚拟化）', () => {
  assert.strictEqual(core.shouldRenderPlain(13, 0), false);
});

it('非法输入（undefined/NaN/null）→ false，不抛异常', () => {
  assert.strictEqual(core.shouldRenderPlain(undefined), false);
  assert.strictEqual(core.shouldRenderPlain(NaN), false);
  assert.strictEqual(core.shouldRenderPlain(null), false);
});

it('自定义阈值 5：5 只普通、6 只虚拟', () => {
  assert.strictEqual(core.shouldRenderPlain(5, 5), true);
  assert.strictEqual(core.shouldRenderPlain(6, 5), false);
});

// ── shouldShowRenderGuard: 有数据却零行 → 必须降级提示 ──
it('期望 13 行、实际 0 行 → 触发降级面板', () => {
  assert.strictEqual(core.shouldShowRenderGuard(13, 0), true);
});

it('期望 13 行、实际 13 行 → 不触发', () => {
  assert.strictEqual(core.shouldShowRenderGuard(13, 13), false);
});

it('期望 13 行、实际 3 行（部分渲染）→ 不触发硬降级', () => {
  assert.strictEqual(core.shouldShowRenderGuard(13, 3), false);
});

it('期望 0 行（无自选）→ 不触发（应走空态）', () => {
  assert.strictEqual(core.shouldShowRenderGuard(0, 0), false);
});

it('非法输入 → 不触发，不抛异常', () => {
  assert.strictEqual(core.shouldShowRenderGuard(undefined, 0), false);
  assert.strictEqual(core.shouldShowRenderGuard(13, NaN), false);
});

// ── 组件门禁 ──
it('必需组件齐全 → missing 为空', () => {
  const registered = Object.assign({}, core.REQUIRED_COMPONENTS.reduce((a, k) => { a[k] = {}; return a; }, {}));
  assert.deepStrictEqual(core.missingComponents(registered), []);
});

it('缺 DetailSplit → 报出该组件', () => {
  const registered = {};
  core.REQUIRED_COMPONENTS.forEach((k) => { if (k !== 'DetailSplit') registered[k] = {}; });
  assert.deepStrictEqual(core.missingComponents(registered), ['DetailSplit']);
});

it('缺多个 → 全部报出且稳定排序', () => {
  const registered = {};
  const miss = core.missingComponents(registered);
  assert.strictEqual(miss.length, core.REQUIRED_COMPONENTS.length);
  assert.deepStrictEqual(miss, miss.slice().sort());
});

it('registered 为 null/undefined → 全部缺失，不抛异常', () => {
  assert.strictEqual(core.missingComponents(null).length, core.REQUIRED_COMPONENTS.length);
  assert.strictEqual(core.missingComponents(undefined).length, core.REQUIRED_COMPONENTS.length);
});

it('必需组件清单包含自选页关键组件', () => {
  ['VirtualList', 'DetailSplit', 'StockDetailDialog', 'StatePanel', 'AiPage'].forEach((k) => {
    assert.ok(core.REQUIRED_COMPONENTS.indexOf(k) >= 0, '缺少必需项 ' + k);
  });
});

// ── 诊断载荷 ──
it('诊断载荷含 dom/state/version/components 四键', () => {
  const payload = core.buildDiagPayload({
    hint: '共 13 只', rowCount: 0, itemCount: 0, expected: 13,
    version: '6.6.0', serverVersion: '6.6.0',
    components: { VirtualList: {} }, splitWidth: '589px', detailMode: null,
  });
  ['dom', 'state', 'version', 'components'].forEach((k) => {
    assert.ok(Object.prototype.hasOwnProperty.call(payload, k), '缺键 ' + k);
  });
  assert.strictEqual(payload.state.expected, 13);
  assert.strictEqual(payload.dom.rowCount, 0);
});

it('诊断载荷标记版本不一致', () => {
  const same = core.buildDiagPayload({ version: '6.6.0', serverVersion: '6.6.0' });
  assert.strictEqual(same.version.mismatch, false);
  const diff = core.buildDiagPayload({ version: '6.5.8', serverVersion: '6.6.0' });
  assert.strictEqual(diff.version.mismatch, true);
});

it('诊断载荷在缺参时不抛异常', () => {
  const p = core.buildDiagPayload();
  assert.ok(p && p.dom && p.state && p.version);
});

if (!process.exitCode) {
  console.log('\n  ' + passed + ' passed');
}
