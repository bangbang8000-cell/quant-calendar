// quant-calendar: charts module v3.2.0
// K线图表渲染 (从 index.html 提取, 保持签名兼容)
// renderKlineChart(chart, data, period, isIndex, isMobile)
(function() {
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

  function renderKlineChart(chart, data, period, isIndex = false, isMobile = false) {
    if (!data || data.length === 0) return;

    const dates = data.map(d => d[0].slice(0, 4) + '-' + d[0].slice(4, 6) + '-' + d[0].slice(6, 8));
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
  function renderKlineTo(containerId, data, period, isIndex = false, opts = {}) {
    const rec = _klineRec(containerId);
    const el = document.getElementById(containerId);
    if (!el) throw new Error('无法找到图表容器: ' + containerId);
    if (el.offsetWidth < 50) { el.style.minWidth = '600px'; el.style.minHeight = '300px'; }
    if (!rec.chart) {
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

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.charts = {
    renderKlineChart,
    renderKlineTo, disposeKline, resizeKline, zoomKline, redrawKline, getKlineChart,
    init() { return { renderKlineChart, renderKlineTo, disposeKline, resizeKline, zoomKline, redrawKline, getKlineChart }; },
  };
})();
