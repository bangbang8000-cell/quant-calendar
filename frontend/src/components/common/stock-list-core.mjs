// v7.26 (FR-11): 股票列表单元格纯函数 — 便于 Node 单测 (UMD/ESM 无关, 只做数据整形)
// 策略格规则:
//   0 个策略 → 1 个虚线提示格 (列表不是空白)
//   1 个策略 → 1 个策略格 + 1 个提示格 (仅此场景保留占位)
//   ≥2 个策略 → 只渲染真实格, 不再补空框 («右侧无大片虚线空框»)
//   >4 个策略 → 前 3 个 + 「+N」共 4 格

export function strategyCountOf(item) {
  const it = item || {};
  const n = Number(it.strategy_count);
  if (isFinite(n) && n > 0) return n;
  const all = it.strategy_names || it.strategies || [];
  return all.length || 0;
}

export function tagCellsOf(names) {
  const all = names || [];
  if (!all.length) return [{ text: '', cls: 'is-empty', title: '' }];
  if (all.length === 1) {
    return [
      { text: all[0], cls: '', title: all[0] },
      { text: '', cls: 'is-empty', title: '' },
    ];
  }
  const cap = all.length > 4 ? 3 : 4;
  const shown = all.slice(0, cap);
  const more = all.length - shown.length;
  const cells = shown.map((s) => ({ text: s, cls: '', title: s }));
  if (more > 0) cells.push({ text: '+' + more, cls: 'is-more', title: all.slice(shown.length).join('、') });
  return cells;
}
