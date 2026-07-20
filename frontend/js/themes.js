// quant-calendar: themes module v3.0
(function() {
  const { ref } = Vue;

  const currentTheme = ref(localStorage.getItem('quant_theme') || 'tech-blue');

  function applyTheme(theme) {
    currentTheme.value = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('quant_theme', theme);
  }

  function changeTheme(theme) {
    applyTheme(theme);
    const token = localStorage.getItem('quant_token');
    const savedUser = localStorage.getItem('quant_user');
    if (token && savedUser) {
      try {
        const user = JSON.parse(savedUser);
        fetch(`/api/users/${user.username}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
          body: JSON.stringify({ theme })
        });
        user.theme = theme;
        localStorage.setItem('quant_user', JSON.stringify(user));
      } catch(e) {}
    }
  }

  // 7 theme definitions (for UI picker)
  const themes = {
    'tech-blue':       { name: '科技蓝', icon: '🔵', color: '#1d4ed8' },
    'rose-red':        { name: '玫瑰红', icon: '🔴', color: '#E63946' },
    'vibrant-orange':  { name: '土豪金', icon: '🟡', color: '#b8922a' },
    'classic-white':   { name: '经典白', icon: '⚪', color: '#2563eb' },
    'classic-red':     { name: '经典白(红)', icon: '💗', color: '#dc2626' },
    'classic-gold':    { name: '经典白(金)', icon: '🟨', color: '#b8922a' },
    'dark-pro':        { name: '暗色专业', icon: '🌙', color: '#64ffda' },
  };

  // Apply saved theme on load
  const saved = localStorage.getItem('quant_theme');
  if (saved) document.documentElement.setAttribute('data-theme', saved);

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.themes = {
    themes, currentTheme, applyTheme, changeTheme,
    init() {
      return { themes, currentTheme, applyTheme, changeTheme };
    }
  };
})();