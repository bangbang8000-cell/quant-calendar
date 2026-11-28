// quant-calendar: v7.26 FR-12 择时信号配色门禁
// 运行: node tests/v726_signal_tokens.test.js
// 6 种动作在矩阵 / 当前信号卡 / 买卖点表 / 图例中必须来自同一套 signalClass 映射:
//   买入=浅红实底 / 加仓=浅红描边 / 卖出=浅绿实底 / 减仓=浅绿描边 / 持有=浅金 / 观望=中性灰
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
require(path.join(FE, 'js', 'v711-shared.js'));
const S = global.window.__quantModules.v711;

it('买入/卖出 = 实底 up/down', () => {
  assert.strictEqual(S.signalClass('buy', 'up'), 'qc711-sig tone-up');
  assert.strictEqual(S.signalClass('sell', 'down'), 'qc711-sig tone-down');
});

it('加仓/减仓 = 同色系描边 (is-outline)', () => {
  assert.strictEqual(S.signalClass('add', 'up'), 'qc711-sig tone-up is-outline');
  assert.strictEqual(S.signalClass('reduce', 'down'), 'qc711-sig tone-down is-outline');
});

it('持有 = 浅金档, 观望 = 中性灰档 (不再共用 flat)', () => {
  assert.strictEqual(S.signalTone('hold'), 'hold');
  assert.strictEqual(S.signalTone('wait'), 'flat');
  assert.strictEqual(S.signalTone('nope'), 'flat');
});

it('后端下发的 tone 优先 (前端不另造色相)', () => {
  assert.strictEqual(S.signalClass('add', 'down'), 'qc711-sig tone-down is-outline');
});

it('CSS 四档均存在且取自令牌 (无新增硬编码色)', () => {
  const css = read('css/components.css');
  for (const tone of ['up', 'down', 'hold', 'flat']) {
    const m = css.match(new RegExp('\\.qc711-sig\\.tone-' + tone + '\\s*\\{([^}]*)\\}'));
    assert.ok(m, '缺少 .qc711-sig.tone-' + tone);
    assert.ok(/var\(--qc-signal-/.test(m[1]), 'tone-' + tone + ' 应取 --qc-signal-* 令牌');
    assert.ok(!/#[0-9a-fA-F]{3,6}(?![0-9a-zA-Z])/.test(m[1]), 'tone-' + tone + ' 不允许硬编码色值');
  }
  assert.ok(/\.qc711-sig\.tone-up\.is-outline/.test(css), '买入实底 / 加仓描边需区分');
  assert.ok(/\.qc711-sig\.tone-down\.is-outline/.test(css), '卖出实底 / 减仓描边需区分');
});

it('雷达组件统一走 signalClass, 不再用 EP danger/success 映射', () => {
  const src = read('js/components/overlay-radar.js');
  assert.ok(src.includes('signalClass('), '当前信号/买卖点/矩阵应复用 signalClass');
  assert.ok(!src.includes("return 'danger'"), '移除 Element Plus danger 映射');
  assert.ok(!src.includes("return 'success'"), '移除 Element Plus success 映射');
  // 排除 Vue 的 #default 插槽名: 色值必须是非单词字符收尾
  assert.ok(!/#[0-9a-fA-F]{3,6}(?![0-9a-zA-Z])/.test(src), '组件内不得新增硬编码色值');
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
