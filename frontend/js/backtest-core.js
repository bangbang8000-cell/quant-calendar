// quant-calendar: 回测工作台核心纯函数 (v3.17.4 / FR-3.17.4)
// 纯计算模块（UMD 导出），供浏览器 backtest.js 与 node 单元测试共用。
// 不含 DOM/Vue 依赖：净值曲线组装 / 最大回撤区间 / 年度收益 / 指标卡 / CSV 拼装。
//   - 浏览器: window.QuantBacktest
//   - Node:   require(...)（供 pytest 调 node 单元测试）
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.QuantBacktest = factory();
  }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';

  // 数值安全取数：非有限数字回退 fallback
  function toNum(v, fallback) {
    var n = Number(v);
    return isFinite(n) ? n : (typeof fallback === 'number' ? fallback : 0);
  }

  // ─── 最大回撤区间（净值曲线 → 峰值/谷底索引与回撤幅度）───────────────
  // equityCurve: [{date, equity}]（兼容 {date, value}），返回
  // { maxDrawdown, peakIndex, troughIndex, peakDate, troughDate }；<2 点返回 null
  function computeMaxDrawdownRegion(equityCurve) {
    var curve = Array.isArray(equityCurve) ? equityCurve : [];
    if (curve.length < 2) return null;
    var peak = -Infinity;
    var peakIndex = 0;
    var maxDd = 0;
    var peakIdxAtMax = 0;
    var troughIdxAtMax = 0;
    for (var i = 0; i < curve.length; i++) {
      var eq = toNum(curve[i].equity != null ? curve[i].equity : curve[i].value);
      if (eq > peak) { peak = eq; peakIndex = i; }
      var dd = peak > 0 ? (peak - eq) / peak * 100 : 0;
      if (dd > maxDd) { maxDd = dd; peakIdxAtMax = peakIndex; troughIdxAtMax = i; }
    }
    function dateOf(idx) {
      return curve[idx] && curve[idx].date ? curve[idx].date : '';
    }
    return {
      maxDrawdown: Math.round(maxDd * 100) / 100,
      peakIndex: peakIdxAtMax,
      troughIndex: troughIdxAtMax,
      peakDate: dateOf(peakIdxAtMax),
      troughDate: dateOf(troughIdxAtMax),
    };
  }

  // ─── 月度收益 → 年度收益 [{year, return}]（按月收益求和）─────────────
  // monthlyReturns: {"YYYY-MM": pct}
  function buildAnnualReturns(monthlyReturns) {
    var m = monthlyReturns || {};
    var byYear = {};
    var keys = Object.keys(m).sort();
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      var year = String(k).slice(0, 4);
      if (!/^\d{4}$/.test(year)) continue;
      byYear[year] = (byYear[year] || 0) + toNum(m[k]);
    }
    var years = Object.keys(byYear).sort();
    return years.map(function (year) {
      return { year: year, return: Math.round(byYear[year] * 100) / 100 };
    });
  }

  // ─── 净值曲线 → ECharts 折线数据 { dates, series:[{name,data}] } ─────
  // curves: [{name, points:[{date, value}]}]；dates 为各曲线日期并集（升序），
  // 缺值补 null（ECharts connectNulls:false 断开，避免跨缺期假连线）。
  function buildNavSeries(curves) {
    var list = Array.isArray(curves) ? curves : [];
    var dateSet = {};
    list.forEach(function (c) {
      (c.points || []).forEach(function (p) { if (p && p.date) dateSet[p.date] = 1; });
    });
    var dates = Object.keys(dateSet).sort();
    var series = list.map(function (c) {
      var byDate = {};
      (c.points || []).forEach(function (p) {
        if (p && p.date) byDate[p.date] = toNum(p.value != null ? p.value : p.equity);
      });
      return {
        name: c.name || '',
        data: dates.map(function (d) { return (d in byDate) ? byDate[d] : null; }),
      };
    });
    return { dates: dates, series: series };
  }

  // ─── 指标卡组装 ─────────────────────────────────────────────────────
  // summary: 后端 summary 对象（percent 字段为百分数），返回
  // [{key, label, value, suffix, dir}]，dir ∈ 'up' | 'down' | ''（红涨绿跌）
  function buildMetrics(summary) {
    var s = summary || {};
    var num = function (v) { return toNum(v); };
    var pct = function (v, digits) {
      var n = num(v);
      return isFinite(n) ? n.toFixed(digits) : '--';
    };
    return [
      { key: 'total_return', label: '总收益', value: pct(s.total_return, 2), suffix: '%', dir: num(s.total_return) >= 0 ? 'up' : 'down' },
      { key: 'annual_return', label: '年化收益', value: pct(s.annual_return, 2), suffix: '%', dir: num(s.annual_return) >= 0 ? 'up' : 'down' },
      { key: 'max_drawdown', label: '最大回撤', value: pct(s.max_drawdown, 2), suffix: '%', dir: 'down' },
      { key: 'sharpe_ratio', label: '夏普比率', value: pct(s.sharpe_ratio, 2), suffix: '', dir: num(s.sharpe_ratio) >= 0 ? 'up' : 'down' },
      { key: 'win_rate', label: '胜率', value: pct(s.win_rate, 1), suffix: '%', dir: '' },
      { key: 'profit_loss_ratio', label: '盈亏比', value: pct(s.profit_loss_ratio, 2), suffix: '', dir: '' },
      { key: 'total_trades', label: '交易次数', value: String(num(s.total_trades)), suffix: '次', dir: '' },
      { key: 'volatility', label: '波动率', value: pct(s.volatility, 2), suffix: '%', dir: '' },
    ];
  }

  // ─── CSV 单元格转义 ────────────────────────────────────────────────
  function csvCell(v) {
    var s = (v == null) ? '' : String(v);
    return /[",\n]/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
  }

  // ─── 回测 CSV 拼装（指标 + 净值 + 明细）─────────────────────────────
  // payload: { metrics:[{label,value,suffix}], dates:[...], series:[{name,data}],
  //           trades:[{date,stock,action,reason}] } → 多段 CSV 文本
  function buildBacktestCsv(payload) {
    var p = payload || {};
    var lines = [];
    lines.push('回测指标');
    lines.push('指标,数值');
    (p.metrics || []).forEach(function (m) {
      lines.push(csvCell(m.label) + ',' + csvCell((m.value || '') + (m.suffix || '')));
    });
    lines.push('');
    lines.push('净值曲线');
    var head = ['日期'].concat((p.series || []).map(function (s) { return s.name; }));
    lines.push(head.map(csvCell).join(','));
    var dates = p.dates || [];
    var series = p.series || [];
    for (var i = 0; i < dates.length; i++) {
      var row = [dates[i]];
      for (var j = 0; j < series.length; j++) {
        var v = series[j].data && series[j].data[i];
        row.push(v == null ? '' : v);
      }
      lines.push(row.map(csvCell).join(','));
    }
    lines.push('');
    lines.push('交易明细');
    lines.push('日期,股票代码,方向,原因');
    (p.trades || []).forEach(function (t) {
      lines.push(csvCell(t.date) + ',' + csvCell(t.stock) + ',' + csvCell(t.action) + ',' + csvCell(t.reason));
    });
    return lines.join('\n');
  }

  // 股票代码交易动作 → 中文
  function tradeActionText(action) {
    if (action === 'buy') return '买入';
    if (action === 'sell') return '卖出';
    return action || '';
  }

  return {
    toNum: toNum,
    computeMaxDrawdownRegion: computeMaxDrawdownRegion,
    buildAnnualReturns: buildAnnualReturns,
    buildNavSeries: buildNavSeries,
    buildMetrics: buildMetrics,
    buildBacktestCsv: buildBacktestCsv,
    tradeActionText: tradeActionText,
  };
});
