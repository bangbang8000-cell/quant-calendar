// quant-calendar: AI 快捷问法与上下文带入 (6.4.4 / FR-650)
// 纯逻辑 (无 DOM): 三套各 8 条快捷问法 (总览页/详情页/复盘页) + 详情页上下文 prompt 构造
// UMD: 浏览器 window.QuantQuickAsks / Node require(...) (pytest 可单测)
(function (root, factory) {
  var api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (root) root.QuantQuickAsks = api;
})((typeof globalThis !== 'undefined' ? globalThis : (typeof window !== 'undefined' ? window : (typeof self !== 'undefined' ? self : null))), function () {
  'use strict';

  // FR-650 第 2 条: 8 条快捷问法且随页面变化 (总览页 / 详情页 / 复盘页各一套)
  var SETS = {
    overview: [
      { label: '今日高分股', text: '今天评分最高的股票有哪些？各自亮点是什么？' },
      { label: '策略共识', text: '当前策略共识 Top5 是什么？分歧大吗？' },
      { label: '组合健康', text: '我的自选组合整体质量如何？有哪几只风险偏高？' },
      { label: '板块轮动', text: '近期行业板块轮动方向是什么？我应该关注哪些板块？' },
      { label: '买卖时点', text: '自选股里今天有适合买入或卖出的标的吗？' },
      { label: '数据新鲜度', text: '当前行情与基本面数据最新到哪一天？是否陈旧？' },
      { label: '风险提示', text: '今天有哪些事件提醒或风险信号需要注意？' },
      { label: '复盘摘要', text: '用三句话总结今日市场与我组合的表现。' },
    ],
    detail: [
      { label: '综合研判', text: '综合技术面与基本面，这只股票现在值得买吗？' },
      { label: '趋势解读', text: '当前趋势处于什么阶段？关键支撑与压力位在哪里？' },
      { label: '量价关系', text: '最近成交量与价格走势怎么解读？有无异常放量？' },
      { label: '财务体检', text: '最新财务指标有哪些亮点与隐患？' },
      { label: '同行对比', text: '它在同行业中处于什么位置？估值贵不贵？' },
      { label: '持有策略', text: '如果我已持有，应该继续持有、加仓还是减仓？' },
      { label: '风险清单', text: '这只股票当前主要风险有哪些？触发条件是什么？' },
      { label: '目标区间', text: '给出未来 5-20 个交易日的合理观察区间与应对预案。' },
    ],
    review: [
      { label: '盈亏归因', text: '最近一次操作的盈亏主要原因是什么？' },
      { label: '命中率分析', text: '我的评估命中率如何？哪个模型/策略更准？' },
      { label: '错在何处', text: '复盘我最近的失误判断，指出共性错误。' },
      { label: '情绪校准', text: '我的操作是否过度自信或过度悲观？' },
      { label: '改进建议', text: '给出三条最值得马上改进的交易习惯。' },
      { label: '时段规律', text: '我在哪些时段/行情下表现更好？' },
      { label: '样本体检', text: '哪些结论的样本量还不足，需要继续积累？' },
      { label: '下步计划', text: '基于复盘结果，帮我制定下一阶段的观察计划。' },
    ],
  };

  function sets() { return SETS; }

  // FR-650 第 2 条: 按页面取对应套组; 未知页面回退总览套
  function forPage(page) {
    var key = SETS[page] ? page : 'overview';
    return SETS[key].slice();
  }

  // FR-650 第 1 条: 详情页打开 AI — 问题默认带入标的与当日关键数据, 用户可清除
  // stock: {code, name}; keyData: {close, pct_chg, rsi, ma_alignment, data_date} 任意子集
  function buildContextPrompt(stock, keyData) {
    var parts = [];
    if (stock && (stock.code || stock.name)) {
      parts.push('标的: ' + (stock.name && stock.name !== stock.code
        ? stock.name + '(' + stock.code + ')' : (stock.code || stock.name)));
    }
    var kd = keyData || {};
    var facts = [];
    if (kd.close != null) facts.push('收盘 ' + kd.close);
    if (kd.pct_chg != null) facts.push('涨跌 ' + kd.pct_chg + '%');
    if (kd.rsi != null) facts.push('RSI ' + kd.rsi);
    if (kd.ma_alignment) facts.push('均线 ' + kd.ma_alignment);
    if (facts.length) parts.push('当日关键数据: ' + facts.join(', '));
    if (kd.data_date) parts.push('数据截至 ' + kd.data_date);
    return parts.join('；');
  }

  // 组合完整问题 = 上下文片段 + 用户问题 (上下文为空时原样返回)
  function withContext(contextSnippet, question) {
    var q = String(question || '').trim();
    var ctx = String(contextSnippet || '').trim();
    if (!ctx) return q;
    if (!q) return ctx;
    return q + '\n\n[' + ctx + ']';
  }

  return {
    SETS: SETS,
    sets: sets,
    forPage: forPage,
    buildContextPrompt: buildContextPrompt,
    withContext: withContext,
  };
});
