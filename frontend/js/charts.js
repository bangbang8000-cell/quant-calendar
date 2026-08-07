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

  function renderKlineChart(chart, data, period, isIndex = false, isMobile = false) {
    if (!data || data.length === 0) return;

    const dates = data.map(d => d[0].slice(0, 4) + '-' + d[0].slice(4, 6) + '-' + d[0].slice(6, 8));
    const colors = getThemeColors();

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
        axisPointer: { type: 'cross' },
        backgroundColor: tooltipBg,
        borderColor: gridColor,
        textStyle: { color: colors.textSecondary, fontSize: 12 },
        formatter: function (params) {
          if (!params || !params.length) return '';
          const idx = params[0].dataIndex;
          const d = data[idx];
          if (!d) return '';
          const fmt = (v) => (v == null || isNaN(v)) ? '--' : Number(v).toFixed(2);
          const fmtVol = (v) => (v == null || isNaN(v)) ? '--' : (Number(v) / 10000).toFixed(2) + '万手';
          const lines = ['<div style="font-weight:600;color:' + colors.textSecondary + ';">' + dates[idx] + '</div>'];
          lines.push('开: ' + fmt(d[1]) + '　收: ' + fmt(d[2]));
          lines.push('低: ' + fmt(d[3]) + '　高: ' + fmt(d[4]));
          lines.push('成交量: ' + fmtVol(d[5]));
          if (d[6] != null) lines.push('MA5: ' + fmt(d[6]));
          if (d[7] != null) lines.push('MA10: ' + fmt(d[7]));
          if (d[8] != null) lines.push('MA20: ' + fmt(d[8]));
          if (d[9] != null) lines.push('MA60: ' + fmt(d[9]));
          if (d[10] != null) lines.push('VOL_MA5: ' + fmtVol(d[10]));
          return lines.join('<br/>');
        },
      },
      legend: {
        data: ['K线', 'MA5', 'MA10', 'MA20', 'MA60'],
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
        { name: 'MA5', type: 'line', data: ma5Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: '#F59E0B' } },
        { name: 'MA10', type: 'line', data: ma10Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: '#3B82F6' } },
        { name: 'MA20', type: 'line', data: ma20Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: '#8B5CF6' } },
        { name: 'MA60', type: 'line', data: ma60Data, smooth: true, symbol: 'none', lineStyle: { width: 1.2, color: '#10B981' } },
        {
          name: '成交量', type: 'bar', xAxisIndex: 1, yAxisIndex: 1, data: volData,
          itemStyle: { color: function(p) { const i = p.dataIndex; return data[i][1] >= data[i][2] ? colors.up : colors.down; } },
        },
        { name: 'VOL_MA5', type: 'line', xAxisIndex: 1, yAxisIndex: 1, data: volMa5Data, smooth: true, symbol: 'none', lineStyle: { width: 1, color: '#F59E0B', type: 'dashed' } },
      ],
    };
    chart.setOption(option, true);
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.charts = {
    renderKlineChart,
    init() { return { renderKlineChart }; },
  };
})();
