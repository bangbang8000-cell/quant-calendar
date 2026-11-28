// quant-calendar: v7.26 FR-11 股票列表策略区收窄与列宽统一
// 运行: node tests/v726_stocklist_grid.test.js
// 断言:
//   1) 策略区由无限 1fr 收窄为「2×64–72px + 计数徽章」的上限列
//   2) 1 个策略只保留 1 个虚线提示格; 2 个及以上不再补空框
//   3) 列宽来自令牌: 股票列表与策略列表/管理页共用同一组
'use strict';
const assert = require('assert');
const fs = require('fs');
const path = require('path');
const { pathToFileURL } = require('url');

const FE = path.join(__dirname, '..', 'frontend');
const read = (rel) => fs.readFileSync(path.join(FE, rel), 'utf-8');

let passed = 0;
function it(name, fn) {
  try { fn(); passed += 1; console.log('  ok   ' + name); }
  catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1; }
}

// ── 令牌与栅格 (静态) ──
const tokens = read('css/tokens.css');
const comp = read('css/components.css');

function pxOf(src, name) {
  const m = src.match(new RegExp(name + ':\\s*(\\d+)px'));
  return m ? Number(m[1]) : null;
}

it('策略单列上限落在 64–72px', () => {
  const v = pxOf(tokens, '--qc-stock-strat-col-max');
  assert.ok(v !== null, 'tokens.css 应声明 --qc-stock-strat-col-max');
  assert.ok(v >= 64 && v <= 72, '单列上限应落在 64–72px, 实际 ' + v);
});

it('策略区总宽 = 徽章 + 4 + 2×单列 + 4 (令牌推导, 不写死)', () => {
  const m = tokens.match(/--qc-stock-strat-w:\s*calc\(([^;]+)\)/);
  assert.ok(m, 'tokens.css 应声明 --qc-stock-strat-w: calc(...)');
  const expr = m[1];
  assert.ok(expr.includes('--qc-stock-badge-w'), '总宽应复用徽章令牌');
  assert.ok(expr.includes('--qc-stock-strat-col-max'), '总宽应由单列上限推导');
  assert.ok(/2\s*\*\s*var\(--qc-stock-strat-col-max\)/.test(expr), '总宽应包含两列上限');
});

it('行走四列栅格: 序号 + 信息列 + 策略区(上限令牌) + 操作区(定宽下限, 吃余量)', () => {
  const idx = comp.indexOf('.qc-stock-row {');
  assert.ok(idx > 0);
  const block = comp.slice(idx, idx + 2200);
  assert.ok(
    block.includes('grid-template-columns: 16px var(--qc-stock-info-w) minmax(0, var(--qc-stock-strat-w)) minmax(var(--qc-stock-ops-w), 1fr)'),
    '策略区必须是 minmax(0, var(--qc-stock-strat-w)) 上限列 —— 不再无限 1fr'
  );
});

it('策略网格两列等宽, 计数徽章前置定宽', () => {
  const idx = comp.indexOf('.qc-strat-grid {');
  assert.ok(idx > 0);
  const block = comp.slice(idx, idx + 500);
  assert.ok(block.includes('minmax(0, 1fr)'), '策略格列宽应 minmax(0,1fr) 防溢出');
  const countIdx = comp.indexOf('.qc-stock-tags .qc-stock-tag.is-count');
  assert.ok(countIdx > 0);
  assert.ok(comp.slice(countIdx, countIdx + 400).includes('var(--qc-stock-badge-w)'), '徽章宽度读令牌');
});

it('操作区定宽 + 右对齐 (余量留白在图标左侧)', () => {
  const idx = comp.indexOf('.qc-stock-actions {');
  assert.ok(idx > 0);
  const block = comp.slice(idx, idx + 900);
  assert.ok(block.includes('width: var(--qc-stock-ops-w)'), '操作区宽度读令牌');
  assert.ok(block.includes('justify-self: end'), '操作区应在放大后的末列内右对齐');
});

// ── 单元格填充逻辑 (纯函数) ──
const coreUrl = pathToFileURL(path.join(FE, 'src', 'components', 'common', 'stock-list-core.mjs')).href;

(async () => {
  const core = await import(coreUrl);

  it('0 个策略 → 1 个提示格', () => {
    const cells = core.tagCellsOf([]);
    assert.strictEqual(cells.length, 1);
    assert.strictEqual(cells[0].cls, 'is-empty');
  });

  it('1 个策略 → 1 个策略格 + 1 个提示格', () => {
    const cells = core.tagCellsOf(['动量']);
    assert.strictEqual(cells.length, 2);
    assert.strictEqual(cells[0].text, '动量');
    assert.strictEqual(cells[1].cls, 'is-empty');
  });

  it('2/3/4 个策略 → 无虚线空框', () => {
    for (const n of [2, 3, 4]) {
      const cells = core.tagCellsOf(Array.from({ length: n }, (_, i) => 'S' + (i + 1)));
      assert.strictEqual(cells.length, n, n + ' 个策略应渲染 ' + n + ' 格');
      assert.ok(cells.every((c) => c.cls !== 'is-empty'), n + ' 个策略不应再有空占位');
    }
  });

  it('>4 个策略 → 3 个 + 「+N」共 4 格', () => {
    const cells = core.tagCellsOf(['a', 'b', 'c', 'd', 'e']);
    assert.strictEqual(cells.length, 4);
    assert.strictEqual(cells[3].text, '+2');
    assert.strictEqual(cells[3].cls, 'is-more');
  });

  it('策略计数优先用后端 strategy_count, 缺失时回退名称数', () => {
    assert.strictEqual(core.strategyCountOf({ strategy_count: 3, strategy_names: ['a', 'b'] }), 3);
    assert.strictEqual(core.strategyCountOf({ strategy_names: ['a', 'b'] }), 2);
    assert.strictEqual(core.strategyCountOf({}), 0);
  });

  if (!process.exitCode) console.log('\n  ' + passed + ' passed');
})();
