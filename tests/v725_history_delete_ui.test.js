// quant-calendar: v7.25 FR-16 删除入口 UI 门禁
// 运行: node tests/v725_history_delete_ui.test.js
// 断言:
//   TC-725-6-6 取消二次确认 → 删除函数在 confirm 之前/之后都不发请求（先确认后 fetch, catch 直接 return）
//   TC-725-6-8 legacy 记录无删除按钮、无勾选框，并标「旧版记录」
//   三入口: 回测工作台历史列表 / 研究历史（实验面板） / 策略管理→回测记录
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

// 取一个函数体（从 `function NAME(` 到下一个同级 `function ` 之前）
function fnBody(src, name) {
  const start = src.indexOf('function ' + name + '(');
  assert.ok(start >= 0, '未找到函数 ' + name);
  const next = src.indexOf('\n      function ', start + 10);
  const nextAsync = src.indexOf('\n      async function ', start + 10);
  const candidates = [next, nextAsync].filter((n) => n > start);
  const end = candidates.length ? Math.min.apply(null, candidates) : src.length;
  return src.slice(start, end);
}

function assertConfirmBeforeFetch(body, label, src) {
  let c = body.indexOf('ElMessageBox.confirm');
  let helper = '';
  if (c < 0) {
    helper = ['_smBtConfirm', '_confirmDelete'].find((h) => body.indexOf(h + '(') >= 0) || '';
    assert.ok(helper, label + ' 应使用 ElMessageBox.confirm 二次确认');
    c = body.indexOf(helper + '(');
  }
  const fCandidates = [body.indexOf('fetch('), body.indexOf('fetchJsonWithTimeout(')]
    .filter((n) => n >= 0);
  const f = fCandidates.length ? Math.min.apply(null, fCandidates) : -1;
  assert.ok(c >= 0, label + ' 应使用 ElMessageBox.confirm 二次确认');
  assert.ok(f > c, label + ' 必须先确认再发请求（取消时零请求）');
  if (helper) {
    const hb = fnBody(src, helper);
    assert.ok(hb.indexOf('ElMessageBox.confirm') >= 0, label + ' 助手应调用 ElMessageBox.confirm');
    assert.ok(/catch\s*\([^)]*\)\s*\{\s*return/.test(hb), label + ' 助手取消确认需 catch 后 return false');
  } else {
    assert.ok(/catch\s*\([^)]*\)\s*\{\s*return/.test(body.slice(c, f)), label + ' 取消确认需 catch 后 return');
  }
}

const btView = read('js/components/research/view-part2.js');
const researchLogic = read('js/components/research/logic-history.js');
const researchPage = read('js/components/research-page.js');
const smView = read('js/components/research/view-part1.js');

// ── 入口一: 回测工作台历史列表 ──
it('回测工作台: 行内删除 + 批量删除 + legacy 只读标记', () => {
  assert.ok(btView.includes('batchDeleteBtHistory'), '缺少批量删除按钮');
  assert.ok(btView.includes('@click="deleteBtHistory(r)"'), '缺少行内删除');
  assert.ok(btView.includes('旧版记录'), '缺少「旧版记录」只读标记');
  assert.ok(/v-if="r\.id && !r\.legacy"[^>]*@click="deleteBtHistory/.test(btView), 'legacy 记录不得出现删除按钮');
  assert.ok(/v-if="r\.id && !r\.legacy"[^>]*:\s*value="r\.id"/.test(btView), 'legacy 记录不得可勾选');
});

it('回测工作台: 删除先确认后请求（取消零请求）', () => {
  assertConfirmBeforeFetch(fnBody(researchPage, 'deleteBtHistory'), 'deleteBtHistory', researchPage);
  assertConfirmBeforeFetch(fnBody(researchPage, 'batchDeleteBtHistory'), 'batchDeleteBtHistory', researchPage);
});

// ── 入口二: 策略研究 → 实验面板（研究历史） ──
it('研究历史: 单条删除先确认后请求', () => {
  assertConfirmBeforeFetch(fnBody(researchLogic, 'deleteResearchHistory'), 'deleteResearchHistory', researchLogic);
});

// ── 入口三: 策略管理 → 回测记录 ──
it('策略管理: 回测记录区 + 单条/批量删除 + legacy 只读', () => {
  assert.ok(smView.includes('回测记录'), '策略管理页缺少「回测记录」区块');
  assert.ok(smView.includes('batchDeleteSmBtRecords'), '缺少批量删除');
  assert.ok(smView.includes('@click="deleteSmBtRecord(r)"'), '缺少行内删除');
  assert.ok(/v-if="r\.id && !r\.legacy"[^>]*@click="deleteSmBtRecord/.test(smView), 'legacy 记录不得出现删除按钮');
  assert.ok(/v-if="r\.legacy"[^>]*>\s*旧版记录/.test(smView), 'legacy 记录需标注「旧版记录」');
});

it('策略管理: 删除先确认后请求（取消零请求）', () => {
  assertConfirmBeforeFetch(fnBody(researchLogic, 'deleteSmBtRecord'), 'deleteSmBtRecord', researchLogic);
  assertConfirmBeforeFetch(fnBody(researchLogic, 'batchDeleteSmBtRecords'), 'batchDeleteSmBtRecords', researchLogic);
});

// ── TC-725-6-9 替代口径: 删除后列表/概览同步刷新 (e2e 需真实服务, 此处断言调用链) ──
it('删除成功后同步刷新回测记录与研究历史', () => {
  const single = fnBody(researchLogic, 'deleteSmBtRecord');
  const batch = fnBody(researchLogic, 'batchDeleteSmBtRecords');
  for (const body of [single, batch]) {
    assert.ok(body.includes('loadSmBtRecords('), '删除后应重拉该策略回测记录');
    assert.ok(body.includes('loadResearchHistory('), '删除后应同步刷新研究历史/概览');
  }
  assert.ok(fnBody(researchPage, 'deleteBtHistory').includes('loadResearchHistory('), '回测工作台删除后应同步研究历史');
});

if (!process.exitCode) console.log('\n  ' + passed + ' passed');
