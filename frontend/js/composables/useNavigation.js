// quant-calendar: useNavigation composable v3.0
(function() {
  const { ref, computed } = Vue;

  const ALL_MENU_DEFS = [
    { key: 'strategies', name: '策略总览', icon: '📈', subPages: ['overview', 'merrill', 'market', 'consensus'] },
    { key: 'calendar', name: '量化日历', icon: '🗓️', subPages: ['daily', 'weekly', 'monthly', 'yearly', 'pool'] },
    { key: 'ai', name: '智能评股', icon: '🤖', subPages: ['overview', 'watchlist', 'history'] },
    { key: 'research', name: '策略研究', icon: '🔬', subPages: ['quant-research', 'strategy-write', 'backtest', 'backtest-history'] },
    { key: 'system', name: '系统配置', icon: '⚙️', subPages: ['status', 'autoeval', 'datasource', 'feature', 'user', 'about'], guestSubPages: ['status', 'about'] }
  ];

  const currentPage = ref('strategies');
  const currentSubPage = ref('overview');
  const sidebarCollapsed = ref(localStorage.getItem('sidebar_collapsed') === '1');
  const showUserMenu = ref(false);

  function switchView(page, subPage) {
    currentPage.value = page;
    if (subPage) currentSubPage.value = subPage;
  }

  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value;
    localStorage.setItem('sidebar_collapsed', sidebarCollapsed.value ? '1' : '0');
  }

  function toggleUserMenu() {
    showUserMenu.value = !showUserMenu.value;
  }

  if (!window.__quantModules) window.__quantModules = {};
  window.__quantModules.useNavigation = {
    ALL_MENU_DEFS, currentPage, currentSubPage, sidebarCollapsed, showUserMenu,
    switchView, toggleSidebar, toggleUserMenu,
    init() {
      return { ALL_MENU_DEFS, currentPage, currentSubPage, sidebarCollapsed, showUserMenu, switchView, toggleSidebar, toggleUserMenu };
    }
  };
})();