// quant-calendar: echarts-theme module v3.2.0
// 从 CSS 变量读取颜色, 生成 ECharts 主题对象, 主题切换时图表颜色跟随
(function() {
  function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  function getEChartsTheme() {
    return {
      textStyle: { color: getCSSVar('--text-primary') || '#1f2937' },
      backgroundColor: 'transparent',
      color: [
        getCSSVar('--primary-color') || '#667eea',
        getCSSVar('--color-up') || '#43e97b',
        getCSSVar('--color-down') || '#fa709a',
        getCSSVar('--color-accent') || '#f6d365',
        getCSSVar('--text-secondary') || '#6b7280',
        getCSSVar('--text-tertiary') || '#9ca3af',
      ],
      legend: { textStyle: { color: getCSSVar('--text-secondary') || '#6b7280' } },
      categoryAxis: {
        axisLine: { lineStyle: { color: getCSSVar('--border-light') || '#e5e7eb' } },
        axisLabel: { color: getCSSVar('--text-secondary') || '#6b7280' },
        splitLine: { lineStyle: { color: getCSSVar('--border-light') || '#f3f4f6' } },
      },
      valueAxis: {
        axisLine: { lineStyle: { color: getCSSVar('--border-light') || '#e5e7eb' } },
        axisLabel: { color: getCSSVar('--text-secondary') || '#6b7280' },
        splitLine: { lineStyle: { color: getCSSVar('--border-light') || '#f3f4f6' } },
      },
      tooltip: {
        backgroundColor: getCSSVar('--bg-card') || '#ffffff',
        borderColor: getCSSVar('--border-light') || '#e5e7eb',
        textStyle: { color: getCSSVar('--text-primary') || '#1f2937' },
      },
    };
  }

  // 暴露给 index.html: 获取当前主题 + 注册主题切换回调
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.echartsTheme = {
    getEChartsTheme,
    init() { return { getEChartsTheme }; },
  };
})();
