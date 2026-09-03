// quant-calendar: charts module v3.2.0
// K线图表渲染 (从 index.html 提取, 保持签名兼容)
// renderKlineChart(chart, data, period, isIndex, isMobile)
// v3.17.9 (FR-3.17.9): 大样本降采样(桶式 min/max, 纯函数) + echarts 懒加载
(function() {
  // 降采样阈值: 超过该点数先压缩再送 ECharts, 保证 5000 点不卡顿
  const KLINE_MAX_RENDER_POINTS = 2000;

  // v3.17.9 (FR-3.17.9): 桶式 min/max 降采样 — 纯函数 (浏览器/Node 均可 require 测试)
  // 每桶保留「最低价最低」与「最高价最高」两根K线 (最多2点/桶, 保留价格包络极值),
  // 桶数为 maxPoints/2, 保证输出点数 ≤ maxPoints。
  // data 行格式: [date, open, close, low, high, vol, ma5, ma10, ma20, ma60, vol_ma5]
  // 返回新数组 (不修改入参); 少于/等于 maxPoints 时原样返回。
  function downsampleSeries(data, maxPoints) {
    if (!Array.isArray(data)) return data;
    if (data.length <= maxPoints) return data;
    const out = [];
    // 每桶最多产出 2 点 (minLow + maxHigh), 故桶数 = maxPoints / 2 → 输出 ≤ maxPoints
    const bucketSize = (data.length / maxPoints) * 2;
    for (let i = 0; i < data.length; i += bucketSize) {
      const start = Math.floor(i);
      const end = Math.min(data.length, Math.ceil(i + bucketSize));
      let minLow = Infinity, minLowIdx = -1;
      let maxHigh = -Infinity, maxHighIdx = -1;
      for (let j = start; j < end; j++) {
        const row = data[j];
        if (!row) continue;
        const low = (row[3] != null) ? Number(row[3]) : Infinity;
        const high = (row[4] != null) ? Number(row[4]) : -Infinity;
        if (low < minLow) { minLow = low; minLowIdx = j; }
        if (high > maxHigh) { maxHigh = high; maxHighIdx = j; }
      }
      if (minLowIdx >= 0) out.push(data[minLowIdx]);
      if (maxHighIdx >= 0 && maxHighIdx !== minLowIdx) out.push(data[maxHighIdx]);
    }
    return out;
  }

  // v3.17.9 (FR-3.17.9): echarts 懒加载 — 非首屏按需注入, 首次进入图表时经动态 script 加载
  // CSP script-src 含 'self', 同源 /static/lib/echarts.min.js 可被动态加载。
  let _echartsPromise = null;
  function ensureEcharts() {
    if (typeof echarts !== 'undefined') return Promise.resolve();
    if (!_echartsPromise) {
      _echartsPromise = new Promise(function (resolve, reject) {
        const s = document.createElement('script');
        s.src = '/static/lib/echarts.min.js';
        s.async = true;
        s.onload = function () {
          if (typeof echarts !== 'undefined') resolve();
          else reject(new Error('echarts 加载后未定义'));
        };
        s.onerror = function () { reject(new Error('echarts.min.js 加载失败')); };
        document.head.appendChild(s);
      });
    }
    return _echartsPromise;
  }

  function getThemeColors() {
    const rootStyle = getComputedStyle(document.documentElement);
    return {
      primary: rootStyle.getPropertyValue('--primary-color').trim() || '#2563eb',
      up: rootStyle.getPropertyValue('--color-up').trim() || '#43e97b',
      down: rootStyle.getPropertyValue('--color-down').trim() || '#fa709a',
      textSecondary: rootStyle.getPropertyValue('--text-secondary').trim() || '#6b7280',
      borderLight: rootStyle.getPropertyValue('--border-light').trim() || '#e5e7eb',
    };
  }

  // v3.15 (15.4): 单令牌运行时读取 — ECharts canvas 无法解析 CSS var(), 令牌优先, 字面量兜底
  const getCSSVar = (n) => (getComputedStyle(document.documentElement).getPropertyValue(n) || '').trim();

  // V5.0.5 (T-5.0.54): 图表语义配色 palette — 语义角色 → 令牌 (令牌优先, 显式字面量兜底)
  // 语义角色: up/down(涨跌) neutral(中性) accent(强调) risk(风险) warn(警示)
  //           success(成功) grid/axis(网格/轴线) bg(画布) series(8 序列色)
  function chartPalette() {
    return {
      up: getCSSVar('--color-up') || '#E63946',
      down: getCSSVar('--color-down') || '#2E7D32',
      neutral: getCSSVar('--color-neutral') || '#43a047',
      accent: getCSSVar('--color-accent') || '#F59E0B',
      risk: getCSSVar('--color-danger') || '#C62828',
      warn: getCSSVar('--color-warning') || '#FF9800',
      success: getCSSVar('--color-success') || '#4CAF50',
      primary: getCSSVar('--primary-color') || '#667eea',
      grid: getCSSVar('--chart-split') || '#e2e8f0',
      axis: getCSSVar('--chart-axis') || '#cbd5e1',
      bg: getCSSVar('--chart-bg') || 'transparent',
      series: [
        getCSSVar('--primary-color') || '#667eea',
        getCSSVar('--color-up') || '#E63946',
        getCSSVar('--color-down') || '#2E7D32',
        getCSSVar('--color-accent') || '#F59E0B',
        getCSSVar('--color-warning') || '#FF9800',
        getCSSVar('--color-info') || '#1976d2',
        getCSSVar('--color-success') || '#4CAF50',
        getCSSVar('--text-tertiary') || '#9ca3af',
      ],
    };
  }

  function renderKlineChart(chart, data, period, isIndex = false, isMobile = false) {
    if (!data || data.length === 0) return;

    // v3.17.9 (FR-3.17.9): 大样本降采样 — 超过阈值先做桶式 min/max, 保证 5000 点渲染不卡顿
    if (data.length > KLINE_MAX_RENDER_POINTS) {
      data = downsampleSeries(data, KLINE_MAX_RENDER_POINTS);
    }

    // V4.0 bugfix: 兼容 YYYYMMDD 与 YYYY-MM-DD 两种日期格式(akshare 源返回带横线)
    const dates = data.map(d => (typeof d[0] === 'string' && d[0].indexOf('-') >= 0)
      ? d[0]
      : d[0].slice(0, 4) + '-' + d[0].slice(4, 6) + '-' + d[0].slice(6, 8));
    const colors = getThemeColors();
    // v3.15 (15.4): MA 均线色随主题重绘 — 渲染时读令牌, 硬编码兜底显式标注
    /* qc-allow-hardcode: ECharts canvas 无法解析 CSS 变量, 此处为显式运行时兜底字面量 */
    const maColors = {
      ma5: getCSSVar('--color-accent') || '#F59E0B',
      ma10: getCSSVar('--color-primary') || '#3B82F6',
      ma20: getCSSVar('--color-warning') || '#8B5CF6',
      ma60: getCSSVar('--color-success') || '#10B981',
    };

    // K线数据: [open, close, low, high]
    const klineData = data.map(d => [d[1], d[2], d[3], d[4]]);
    const volData = data.map(d => d[5]);
    const ma5Data = data.map(d => d[6]);
    const ma10Data = data.map(d => d[7]);
    const ma20Data = data.map(d => d[8]);
    const ma60Data = data.map(d => d[9]);
    const volMa5Data = data.map(d => d[10]);

    const isDark = getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim().match(/^#[0-9a-fA-F]{6}$/) ?
      parseInt(getComputedStyle(document.documentElement).getPropertyValue('--bg-card').trim().slice(1, 3), 16) < 80 : false;
    const tooltipBg = isDark ? 'rgba(30,41,59,0.96)' : 'rgba(255,255,255,0.96)';
    const gridColor = colors.borderLight;

    const option = {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'axis',
        // v3.11 (FR-3.11.8): 十字线读价 — 双盘(价格/成交量)联动, 点击锁定读价, 悬停实时跟读
        triggerOn: 'mousemove|click',
        confine: true,
        axisPointer: {
          type: 'cross',
          snap: true,
          z: 100,
          link: [{ xAxisIndex: 'all' }],
          label: { backgroundColor: colors.primary, color: '#ffffff', fontWeight: 600, fontSize: 11 },
        },
        backgroundColor: tooltipBg,
        borderColor: gridColor,
        textStyle: { color: colors.textSecondary, fontSize: 12 },
        formatter: function (params) {
          if (!params || !params.length) return '';
          const idx = params[0].dataIndex;
          const d = data[idx];
          if (!d) return '';
          // v3.11 (FR-3.11.8): MA 图例开关联动 — 仅展示图例中开启的均线
          const cur = chart.getOption();
          const legendSelected = (cur.legend && cur.legend[0] && cur.legend[0].selected) || {};
          const showMA = (name) => legendSelected[name] !== false;
          const fmt = (v) => (v == null || isNaN(v)) ? '--' : Number(v).toFixed(2);
          const fmtVol = (v) => (v == null || isNaN(v)) ? '--' : (Number(v) / 10000).toFixed(2) + '万手';
          const lines = ['<div style="font-weight:600;color:' + colors.textSecondary + ';">' + dates[idx] + '</div>'];
          lines.push('开: ' + fmt(d[1]) + '　收: ' + fmt(d[2]));
          lines.push('低: ' + fmt(d[3]) + '　高: ' + fmt(d[4]));
          lines.push('成交量: ' + fmtVol(d[5]));
          if (d[6] != null && showMA('MA5')) lines.push('MA5: ' + fmt(d[6]));
          if (d[7] != null && showMA('MA10')) lines.push('MA10: ' + fmt(d[7]));
          if (d[8] != null && showMA('MA20')) lines.push('MA20: ' + fmt(d[8]));
          if (d[9] != null && showMA('MA60')) lines.push('MA60: ' + fmt(d[9]));
          if (d[10] != null) lines.push('VOL_MA5: ' + fmtVol(d[10]));
          return lines.join('<br/>');
        },
      },
      legend: {
        data: ['K线', 'MA5', 'MA10', 'MA20', 'MA60'],
        // v3.11 (FR-3.11.8): MA 图例开关 — 点击图例项即可开关对应均线/K线
        type: 'scroll',
        selectedMode: 'multiple',
        icon: 'roundRect',
        itemWidth: 14,
        itemHeight: 8,
        selected: { 'K线': true, 'MA5': true, 'MA10': true, 'MA20': true, 'MA60': true },
        top: isMobile ? 0 : 8,
        textStyle: { color: colors.textSecondary, fontSize: 11 },
      },
      grid: [
        { left: 56, right: 16, top: isMobile ? 30 : 40, height: isMobile ? '48%' : '52%' },
        { left: 56, right: 16, top: isMobile ? '62%' : '68%', height: '18%' },
      ],
      xAxis: [
        { type: 'category', data: dates, boundaryGap: true, axisLine: { lineStyle: { color: gridColor } }, axisLabel: { color: colors.textSecondary, fontSize: 11 }, splitLine: { show: false } },
        { type: 'category', gridIndex: 1, data: dates, axisLabel: { show: false }, axisLine: { lineStyle: { color: gridColor } } },
      ],
      yAxis: [
        { scale: true, axisLine: { lineStyle: { color: gridColor } }, axisLabel: { color: colors.textSecondary, fontSize: 11, formatter: function (v) { const r = Math.round(v * 100) / 100; return (r % 1 === 0) ? String(Math.round(r)) : r.toFixed(2); } }, splitLine: { lineStyle: { color: gridColor, type: 'dashed' } } },
        { gridIndex: 1, axisLabel: { show: false }, splitLine: { show: false }, axisLine: { lineStyle: { color: gridColor } } },
      ],
      dataZoom: [
        { type: 'inside', xAxisIndex: [0, 1], start: Math.max(0, 100 - Math.min(120, data.length) * 3), end: 100 },
        { type: 'slider', xAxisIndex: [0, 1], bottom: 0, height: 18, borderColor: gridColor, textStyle: { color: colors.textSecondary, fontSize: 10 } },
      ],
      series: [
        {
          name: 'K线', type: 'candlestick', data: klineData,
          itemStyle: { color: colors.up, color0: colors.down, borderColor: colors.up, borderColor0: colors.down },
        },
        { name: 'MA5', type: 'line', data: ma5Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: maColors.ma5 } },
        { name: 'MA10', type: 'line', data: ma10Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: maColors.ma10 } },
        { name: 'MA20', type: 'line', data: ma20Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: maColors.ma20 } },
        { name: 'MA60', type: 'line', data: ma60Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: maColors.ma60 } },
        {
          name: '成交量', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: volData,
          itemStyle: { color: function(p) { const i = p.dataIndex; return data[i][1] >= data[i][2] ? colors.up : colors.down; } },
        },
        { name: 'VOL_MA5', type: 'line', xAxisIndex: 1, yAxisIndex: 1, data: volMa5Data, smooth: true, symbol: 'none', lineStyle: { width: 1, color: maColors.ma5, type: 'dashed' } },
      ],
    };
    chart.setOption(option, true);
  }

  // ─── v3.16 (16.4): K线实例生命周期 — 从 app-logic 下沉，统一按 containerId 管理 ───
  // 实例 init/reuse/dispose、主题注入、图例联动、渲染缓存(主题重绘)、缩放、resize 全部收敛于此。
  const _klineRegistry = new Map();  // containerId -> { chart, cache }

  function _klineRec(containerId) {
    if (!_klineRegistry.has(containerId)) _klineRegistry.set(containerId, { chart: null, cache: null });
    return _klineRegistry.get(containerId);
  }

  // 渲染到指定容器（实例懒创建 + 主题注入 + 图例联动 + 缓存）
  // opts: { onLegend:(selected)=>void, isMobile:bool }
  async function renderKlineTo(containerId, data, period, isIndex = false, opts = {}) {
    await ensureEcharts();  // v3.17.9: 懒加载 echarts（非首屏按需）
    const rec = _klineRec(containerId);
    // v3.22-kline-fix: 容器 v-if 渲染有时序竞态(弹窗刚打开/tab切换) — 轮询等待容器就绪,
    //   最多 ~800ms; 替代原先立即抛错导致 loadStockKline catch → "K线加载失败"
    let el = document.getElementById(containerId);
    if (!el) {
      for (let i = 0; i < 16; i++) {
        await new Promise((r) => setTimeout(r, 50));
        el = document.getElementById(containerId);
        if (el) break;
      }
    }
    if (!el) throw new Error('无法找到图表容器: ' + containerId);
    if (el.offsetWidth < 50) { el.style.minWidth = '600px'; el.style.minHeight = '300px'; }
    // v3.17.7 (bugfix): 容器 DOM 可能被 v-if 销毁重建(tab 切换) — 旧实例仍绑定已移除的 DOM,
    //   必须检测 getDom() 不一致后 dispose 重建, 否则图表画到不可见元素上, 新容器永远空白
    if (!rec.chart || rec.chart.isDisposed() || rec.chart.getDom() !== el) {
      if (rec.chart) { try { rec.chart.dispose(); } catch (e) { /* ignore */ } }
      rec.chart = echarts.init(el);
      rec.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
      const onLegend = opts.onLegend;
      if (typeof onLegend === 'function') {
        rec.chart.on('legendselectchanged', (p) => { if (p && p.selected) onLegend(p.selected); });
      }
    }
    renderKlineChart(rec.chart, data, period, isIndex, !!opts.isMobile);
    rec.cache = { data, period, isIndex, isMobile: !!opts.isMobile };
    return rec.chart;
  }

  function disposeKline(containerId) {
    const rec = _klineRegistry.get(containerId);
    if (rec && rec.chart) { rec.chart.dispose(); rec.chart = null; rec.cache = null; }
  }

  function resizeKline(containerId) {
    const rec = _klineRegistry.get(containerId);
    if (rec && rec.chart) rec.chart.resize();
  }

  function zoomKline(containerId, tradingDays) {
    const rec = _klineRegistry.get(containerId);
    const chart = rec && rec.chart;
    if (!chart) return;
    if (tradingDays <= 0) {
      chart.dispatchAction({ type: 'dataZoom', start: 0, end: 100 });
    } else {
      const total = 60; // 总数据点数
      const end = 100;
      const start = Math.max(0, ((total - tradingDays) / total) * 100);
      chart.dispatchAction({ type: 'dataZoom', start: Math.round(start), end });
    }
  }

  // 主题切换 → 用缓存数据按新色重建，保留 MA 图例选择
  function redrawKline(containerId) {
    const rec = _klineRegistry.get(containerId);
    if (!rec || !rec.chart || !rec.cache || rec.chart.isDisposed()) return;
    const prevSel = rec.chart.getOption()?.legend?.[0]?.selected || null;
    renderKlineChart(rec.chart, rec.cache.data, rec.cache.period, rec.cache.isIndex, rec.cache.isMobile);
    if (prevSel) rec.chart.setOption({ legend: { selected: prevSel } });
  }

  function getKlineChart(containerId) {
    const rec = _klineRegistry.get(containerId);
    return rec && rec.chart;
  }

  // ─── v3.17.4 (FR-3.17.4): 回测净值/对比图实例生命周期 — 与 K线同模式管理 ───
  // 渲染净值对比图（多线 + 图例联动 + 最大回撤 markArea）。
  // buildOption: () => ECharts option 工厂（渲染时读 CSS 令牌，主题切换重绘时重跑）。
  const _backtestRegistry = new Map();  // containerId -> { chart, cache }
  function _backtestRec(containerId) {
    if (!_backtestRegistry.has(containerId)) _backtestRegistry.set(containerId, { chart: null, cache: null });
    return _backtestRegistry.get(containerId);
  }

  function renderBacktestTo(containerId, buildOption, opts = {}) {
    return ensureEcharts().then(function () {  // v3.17.9: 懒加载 echarts（非首屏按需）
    const rec = _backtestRec(containerId);
    const el = document.getElementById(containerId);
    if (!el) throw new Error('无法找到图表容器: ' + containerId);
    if (el.offsetWidth < 50) { el.style.minWidth = '600px'; el.style.minHeight = '300px'; }
    // v3.17.4: KeepAlive 子页切换后旧实例可能绑定到已脱离 DOM 的容器 → 重建
    if (rec.chart && rec.chart.getDom && rec.chart.getDom() !== el) {
      try { rec.chart.dispose(); } catch (e) { /* ignore */ }
      rec.chart = null;
    }
    if (!rec.chart) {
      rec.chart = echarts.init(el);
      rec.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
      if (!rec.resizeBound) {
        rec.resizeBound = true;
        window.addEventListener('resize', function () {
          if (rec.chart && !rec.chart.isDisposed()) rec.chart.resize();
        });
      }
    }
    const option = typeof buildOption === 'function' ? buildOption() : buildOption;
    rec.chart.setOption(option, true);
    rec.cache = { buildOption, key: opts.key || '' };
    return rec.chart;
    });
  }

  // 主题切换 → 用缓存 option 工厂重跑（新色重建，保留图例选中）
  function redrawBacktest(containerId) {
    const rec = _backtestRegistry.get(containerId);
    if (!rec || !rec.chart || !rec.cache || rec.chart.isDisposed()) return;
    const prevSel = rec.chart.getOption()?.legend?.[0]?.selected || null;
    const option = typeof rec.cache.buildOption === 'function' ? rec.cache.buildOption() : rec.cache.buildOption;
    rec.chart.setOption(option, true);
    if (prevSel && option && option.legend && option.legend.selected) {
      rec.chart.setOption({ legend: { selected: prevSel } });
    }
  }

  function disposeBacktest(containerId) {
    const rec = _backtestRegistry.get(containerId);
    if (rec && rec.chart) { rec.chart.dispose(); rec.chart = null; rec.cache = null; }
  }

  function resizeBacktest(containerId) {
    const rec = _backtestRegistry.get(containerId);
    if (rec && rec.chart) rec.chart.resize();
  }

  // ─── v3.17.8 (FR-3.17.5): 组合收益曲线 — 与回测图同模式管理 (option 工厂缓存, 主题切换重绘) ───
  const _portfolioRegistry = new Map();
  function _portfolioRec(containerId) {
    if (!_portfolioRegistry.has(containerId)) _portfolioRegistry.set(containerId, { chart: null, cache: null });
    return _portfolioRegistry.get(containerId);
  }

  function renderPortfolioTo(containerId, buildOption, opts = {}) {
    return ensureEcharts().then(function () {  // v3.17.9: 懒加载 echarts（非首屏按需）
    const rec = _portfolioRec(containerId);
    const el = document.getElementById(containerId);
    if (!el) return null;
    if (el.offsetWidth < 50) { el.style.minWidth = '600px'; el.style.minHeight = '300px'; }
    if (rec.chart && rec.chart.getDom && rec.chart.getDom() !== el) {
      try { rec.chart.dispose(); } catch (e) { /* ignore */ }
      rec.chart = null;
    }
    if (!rec.chart) {
      rec.chart = echarts.init(el);
      rec.chart.setOption(window.__quantModules.echartsTheme.getEChartsTheme());
      if (!rec.resizeBound) {
        rec.resizeBound = true;
        window.addEventListener('resize', function () {
          if (rec.chart && !rec.chart.isDisposed()) rec.chart.resize();
        });
      }
    }
    const option = typeof buildOption === 'function' ? buildOption() : buildOption;
    rec.chart.setOption(option, true);
    rec.cache = { buildOption, key: opts.key || '' };
    return rec.chart;
    });
  }

  function redrawPortfolio(containerId) {
    const rec = _portfolioRegistry.get(containerId);
    if (!rec || !rec.chart || !rec.cache || rec.chart.isDisposed()) return;
    const option = typeof rec.cache.buildOption === 'function' ? rec.cache.buildOption() : rec.cache.buildOption;
    rec.chart.setOption(option, true);
  }

  function disposePortfolio(containerId) {
    const rec = _portfolioRegistry.get(containerId);
    if (rec && rec.chart) { rec.chart.dispose(); rec.chart = null; rec.cache = null; }
  }

  function resizePortfolio(containerId) {
    const rec = _portfolioRegistry.get(containerId);
    if (rec && rec.chart) rec.chart.resize();
  }

  // ─── V5.2.0 (FR-5.2.0.7): 通用简单图(柱状/折线) — 复用 portfolio 注册表模式
  // 任意 option 工厂; 懒加载 echarts + 主题注入 + resize 与 K线/回测同模式管理。
  const renderSimpleChartTo = renderPortfolioTo;
  const redrawSimpleChart = redrawPortfolio;
  const disposeSimpleChart = disposePortfolio;
  const resizeSimpleChart = resizePortfolio;

  const chartsApi = {
    renderKlineChart,
    renderKlineTo, disposeKline, resizeKline, zoomKline, redrawKline, getKlineChart,
    renderBacktestTo, redrawBacktest, disposeBacktest, resizeBacktest,
    renderPortfolioTo, redrawPortfolio, disposePortfolio, resizePortfolio,
    renderSimpleChartTo, redrawSimpleChart, disposeSimpleChart, resizeSimpleChart,
    downsampleSeries, ensureEcharts, KLINE_MAX_RENDER_POINTS, chartPalette,
    init() { return { renderKlineChart, renderKlineTo, disposeKline, resizeKline, zoomKline, redrawKline, getKlineChart, renderBacktestTo, redrawBacktest, disposeBacktest, resizeBacktest, renderPortfolioTo, redrawPortfolio, disposePortfolio, resizePortfolio, renderSimpleChartTo, redrawSimpleChart, disposeSimpleChart, resizeSimpleChart, downsampleSeries, ensureEcharts, KLINE_MAX_RENDER_POINTS, chartPalette }; },
  };
  if (typeof window !== 'undefined') {
    if (!window.__quantModules) window.__quantModules = {};
    window.__quantModules.charts = chartsApi;
  }
  // v3.17.9: 降采样纯函数供 Node/pytest 单测（tests/test_performance.py）
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { downsampleSeries, KLINE_MAX_RENDER_POINTS };
  }
})();
