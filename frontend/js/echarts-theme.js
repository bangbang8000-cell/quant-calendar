// quant-calendar: echarts-theme module v3.2.0
// 从 CSS 变量读取颜色, 生成 ECharts 主题对象, 主题切换时图表颜色跟随
(function() {
  function getCSSVar(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  }

  // V6.10 (配色专项·C): 分类色板改为「跨色相定性色板」。
  //   原为 6 个同色相明度档 (--qc-primary-600/500/700/400 + 两个中性灰), 多序列图区分度差;
  //   现按固定色相序列生成, 与品牌色相解耦; 明度按模式取值, 保证对图表画布 >=3:1 (图形对象)。
  var CATEGORICAL_HUES = [210, 28, 165, 290, 348, 190, 52, 250];
  function categoricalPalette() {
    var isDark = false;
    try { isDark = document.documentElement.getAttribute('data-theme-mode') === 'dark'; } catch (e) { /* 保守取亮色 */ }
    var sat = isDark ? 62 : 58;
    var lig = isDark ? 62 : 40;
    return CATEGORICAL_HUES.map(function (h) { return 'hsl(' + h + ', ' + sat + '%, ' + lig + '%)'; });
  }

  function getEChartsTheme() {
    return {
      textStyle: { color: getCSSVar('--text-primary') || '#1f2937' },
      // V5.0.5 (T-5.0.54): 画布背景令牌 (dark-pro 覆盖为暗色, 明/暗主题切换图表联动)
      backgroundColor: getCSSVar('--chart-bg') || 'transparent',
      // V6.0 (DS-6.0 §2.6): 主序列色板金化 — 金色系 + 辅助灰, 随主题 --qc-primary-* 联动
      color: categoricalPalette(),
      legend: { textStyle: { color: getCSSVar('--text-secondary') || '#6b7280' } },
      categoryAxis: {
        axisLine: { lineStyle: { color: getCSSVar('--chart-axis') || '#cbd5e1' } },
        axisLabel: { color: getCSSVar('--text-secondary') || '#6b7280' },
        splitLine: { lineStyle: { color: getCSSVar('--chart-split') || '#e2e8f0' } },
      },
      valueAxis: {
        axisLine: { lineStyle: { color: getCSSVar('--chart-axis') || '#cbd5e1' } },
        axisLabel: { color: getCSSVar('--text-secondary') || '#6b7280' },
        splitLine: { lineStyle: { color: getCSSVar('--chart-split') || '#e2e8f0' } },
      },
      tooltip: {
        backgroundColor: getCSSVar('--bg-card') || '#ffffff',
        borderColor: getCSSVar('--border-light') || '#e5e7eb',
        textStyle: { color: getCSSVar('--text-primary') || '#1f2937' },
      },
    };
  }

  // v3.15 (15.4): 主题切换 → 已挂载 ECharts 实例重绘注册表
  // 每个图表创建处 registerChart(fn), fn 用缓存数据按当前主题重建 option。
  const _refreshers = [];
  function registerChart(refresher) {
    if (typeof refresher === 'function') _refreshers.push(refresher);
  }
  function refreshAllCharts() {
    _refreshers.slice().forEach(function (fn) {
      try { fn(); } catch (e) { /* 忽略已销毁实例 */ }
    });
  }

  // 暴露给 index.html: 获取当前主题 + 注册主题切换回调
  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.echartsTheme = {
    getEChartsTheme,
    categoricalPalette,
    registerChart,
    refreshAllCharts,
    init() { return { getEChartsTheme, registerChart, refreshAllCharts }; },
  };
})();
