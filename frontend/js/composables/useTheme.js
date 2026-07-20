// quant-calendar: useTheme composable v3.0
(function() {
  const { ref, computed } = Vue;

  const themes = {
    'tech-blue':       { name: '科技蓝', icon: '🔵', color: '#1d4ed8' },
    'rose-red':        { name: '玫瑰红', icon: '🔴', color: '#E63946' },
    'vibrant-orange':  { name: '土豪金', icon: '🟡', color: '#b8922a' },
    'classic-white':   { name: '经典白', icon: '⚪', color: '#2563eb' },
    'classic-red':     { name: '经典白(红)', icon: '💗', color: '#dc2626' },
    'classic-gold':    { name: '经典白(金)', icon: '🟨', color: '#b8922a' },
    'dark-pro':        { name: '暗色专业', icon: '🌙', color: '#64ffda' },
  };

  const currentTheme = ref(localStorage.getItem('quant_theme') || 'tech-blue');
  const iconSystem = ref(localStorage.getItem('icon_system') || 'emoji');
  const researchMenuEnabled = ref(localStorage.getItem('research_menu_enabled') === '1');

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

  function switchIconSystem(name) {
    iconSystem.value = name;
    localStorage.setItem('icon_system', name);
  }

  function toggleResearchMenu(val) {
    researchMenuEnabled.value = val;
    localStorage.setItem('research_menu_enabled', val ? '1' : '0');
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useTheme = {
    themes, currentTheme, iconSystem, researchMenuEnabled,
    applyTheme, changeTheme, switchIconSystem, toggleResearchMenu,
    init() {
      applyTheme(currentTheme.value);
      return { themes, currentTheme, iconSystem, researchMenuEnabled, applyTheme, changeTheme, switchIconSystem, toggleResearchMenu };
    }
  };
})();