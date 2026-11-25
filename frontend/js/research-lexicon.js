// v7.19 (FR-9): 策略研究术语中文映射（前端兜底层）
// 背景：中文模式下策略研究页出现 `mom20 (technical)` / `success` / `multi_factor` / `fastdtw`，
// 根因是后端枚举与因子名原样透出。后端 strategy_sdk/labels.py 为单一来源，本文件是同一张表的
// 兜底副本（后端没带 label 时前端也能中文化）；两处一致性由 tests/test_v719_i18n_lexicon.py 校验。
// 使用：const L = window.__quantModules.researchLexicon; L.status('success') → '成功'
(function () {
  const MAPS = {
    sid: {
      multi_factor: '多因子选股', sector_rotation: '行业轮动', index_enhance: '指数增强',
      capital_flow: '资金流选股', golden_triangle: '金三角', oversold_rebound: '超跌反弹',
      main_uptrend_dip_buy: '主升低吸', leader: '龙头', limit_up_pullback: '涨停回马枪',
      morning_star: '启明星', multi_golden_cross: '多金叉共振', multi_party_cannon: '多方炮',
      resistance_breakout: '阻力位突破', immortal_guidance: '仙人指路',
      new_stock_drawdown: '次新腰斩', strategy_2560: '2560战法'
    },
    factor: {
      pe: '市盈率(PE)', pb: '市净率(PB)', mom20: '20日动量', mom60: '60日动量',
      turnover20: '20日换手率', capital_flow: '主力资金流', roe: '净资产收益率(ROE)',
      vol20: '20日波动率', rsi14: '相对强弱(RSI14)'
    },
    category: { valuation: '估值', fundamental: '基本面', capital: '资金面', sentiment: '情绪', technical: '技术面' },
    status: {
      success: '成功', failed: '失败', running: '进行中', pending: '等待中',
      queued: '排队中', canceled: '已取消', cancelled: '已取消'
    },
    mode: { manual: '手动', scheduled: '定时', auto: '自动' },
    engine: { fastdtw: '快速DTW', simple_dtw: '标准DTW', hmmlearn: 'HMM', heuristic: '启发式' },
    source: {
      akshare: 'AKShare', tushare: 'Tushare', eastmoney: '东方财富',
      tonghuashun: '同花顺', sxsc_tushare: '山西证券 Tushare', mock: '模拟数据'
    }
  };

  function pick(kind, key, fallback) {
    if (key === null || key === undefined || key === '') {
      return fallback === undefined ? '—' : fallback;
    }
    const m = MAPS[kind] || {};
    const hit = m[String(key)];
    if (hit !== undefined) return hit;
    return fallback === undefined ? key : fallback;
  }

  // 因子展示：优先后端 label，其次映射表，最后原值
  function factor(name, label) {
    if (label) return label;
    return pick('factor', name);
  }
  // 类别展示：`mom20 (technical)` → `20日动量（技术面）`
  function factorWithCategory(name, category, label, categoryCn) {
    const f = factor(name, label);
    const c = categoryCn || pick('category', category, '');
    return c ? f + '（' + c + '）' : f;
  }

  window.__quantModules = window.__quantModules || {};
  window.__quantModules.researchLexicon = {
    MAPS: MAPS,
    pick: pick,
    sid: function (k, f) { return pick('sid', k, f); },
    factor: factor,
    factorWithCategory: factorWithCategory,
    category: function (k, f) { return pick('category', k, f); },
    status: function (k, f) { return pick('status', k, f); },
    mode: function (k, f) { return pick('mode', k, f); },
    engine: function (k, f) { return pick('engine', k, f); },
    source: function (k, f) { return pick('source', k, f); }
  };
  window.QuantResearchLexicon = window.__quantModules.researchLexicon;
})();
