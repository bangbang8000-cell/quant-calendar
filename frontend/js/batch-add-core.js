// quant-calendar: batch-add-core 6.1.4 (D3) — 批量加入自选 (纯逻辑, node 可测)
// 语义: 从选中列表构造 /api/watchlist/import 文本 + 结果汇总文案
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantBatchAdd = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // codes: [{code, name?}] 或 [code] → import 文本 (每行 code [name])
  function buildImportText(codes) {
    var lines = [];
    (codes || []).forEach(function (c) {
      if (!c) return;
      var code = typeof c === 'string' ? c : (c.code || '');
      var name = typeof c === 'object' && c.name ? String(c.name) : '';
      if (code) lines.push(name && name !== code ? code + ' ' + name : code);
    });
    return lines.join('\n');
  }

  // result: /api/watchlist/import 返回 → 汇总
  function summarize(result) {
    if (!result || result.success === false) {
      return { added: 0, existed: 0, invalid: 0, total: 0, failed: 0, message: '批量加入失败' };
    }
    var added = result.added || 0;
    var existed = result.existed || 0;
    var invalid = result.invalid || 0;
    var total = result.total || 0;
    return {
      added: added,
      existed: existed,
      invalid: invalid,
      total: total,
      failed: invalid,
      message: '已加入 ' + added + ' 只' +
        (existed ? '，' + existed + ' 只已存在' : '') +
        (invalid ? '，' + invalid + ' 行无效' : ''),
    };
  }

  return { buildImportText: buildImportText, summarize: summarize };
});
