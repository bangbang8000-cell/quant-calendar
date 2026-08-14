// quant-calendar: themes module v3.0
// v3.16 (16.3): 收敛为纯主题数据定义模块 —— 删除死代码 applyTheme/changeTheme/currentTheme，
// 主题应用的唯一实现收敛至 app-logic.js 的 applyTheme/changeTheme（运行时全部经 qcState 注入使用）。
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

  // Apply saved theme on load (应用唯一实现在 app-logic，此处仅做启动兜底)
  const saved = localStorage.getItem('quant_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.themes = {
    themes,
    init() {
      return { themes };
    }
  };
})();
