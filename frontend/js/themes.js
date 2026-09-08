// quant-calendar: themes module v3.1
// v3.16 (16.3): 收敛为纯主题数据定义模块
// v3.17.11 (FR-3.17.11.3/4): 主题应用唯一权威 —— applyTheme 为全局唯一实现：
//   - 设置 data-theme 属性
//   - 持久化 quant_theme 到 localStorage
// app-logic 的 applyTheme 仅负责状态同步(currentTheme/ECharts 重绘)并委托本实现。
(function() {

  // 7 theme definitions (for UI picker)
  const themes = {
    'tech-blue':       { name: '科技蓝', icon: '🔵', color: '#1d4ed8' },
    'rose-red':        { name: '玫瑰红', icon: '🔴', color: '#E63946' },
    'vibrant-orange':  { name: '活力金', icon: '🟡', color: '#D4A843' },
    'classic-white':   { name: '经典白', icon: '⚪', color: '#2563eb' },
    'classic-red':     { name: '经典红', icon: '💗', color: '#dc2626' },
    'classic-gold':    { name: '经典金', icon: '🟨', color: '#b8922a' },
    'dark-pro':        { name: '暗色专业', icon: '🌙', color: '#64ffda' },
  };

  // 唯一权威实现：设置 data-theme 属性 + 持久化到 localStorage
  // 全局所有主题应用（启动兜底与 app-logic 委托）均收敛至此，仅本文件可设置 data-theme
  function applyTheme(theme) {
    if (!theme) return;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quant_theme', theme);
  }

  // Apply saved theme on load (启动兜底：优先恢复本地已保存主题)
  const saved = localStorage.getItem('quant_theme');
  applyTheme(saved || 'vibrant-orange');

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.themes = {
    themes,
    applyTheme,
    init() {
      return { themes, applyTheme };
    }
  };
})();
