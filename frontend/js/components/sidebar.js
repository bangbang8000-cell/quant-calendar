// quant-calendar: Sidebar 组件 (v3.6.0-T3 / FR-3.6.2)
// 零构建 Vue3 全局组件 — 通过 provide/inject 共享主状态
(function () {
  const { ref, inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.Sidebar = {
    name: 'qc-sidebar',
    template: `
      <div class="sidebar" :class="{ collapsed: sidebarCollapsed }">
        <div class="sidebar-logo">
          <svg class="sidebar-logo-img" viewBox="0 0 100 100" width="26" height="26" aria-label="量化选股日历 logo" role="img">
            <defs><linearGradient id="qc-lg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="var(--logo-grad-1)"/><stop offset="100%" stop-color="var(--logo-grad-2)"/></linearGradient></defs>
            <rect width="100" height="100" rx="20" fill="url(#qc-lg)"/>
            <rect x="24" y="30" width="52" height="44" rx="7" fill="none" stroke="var(--logo-white)" stroke-width="3.5" opacity="0.95"/>
            <rect x="24" y="30" width="52" height="11" rx="4" fill="var(--logo-white)" opacity="0.9"/>
            <rect x="34" y="25" width="4" height="7" rx="2" fill="var(--logo-white)" opacity="0.8"/>
            <rect x="62" y="25" width="4" height="7" rx="2" fill="var(--logo-white)" opacity="0.8"/>
            <line x1="41" y1="46" x2="41" y2="72" stroke="var(--logo-white)" stroke-width="1.6" opacity="0.45"/>
            <line x1="59" y1="46" x2="59" y2="72" stroke="var(--logo-white)" stroke-width="1.6" opacity="0.45"/>
            <polyline points="33,70 44,58 56,52 70,38" fill="none" stroke="var(--logo-white)" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round"/>
            <polyline points="33,72 44,60 56,54 70,40" fill="none" stroke="var(--logo-shadow)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="0.12"/>
            <circle cx="70" cy="38" r="4" fill="var(--logo-white)"/><circle cx="70" cy="38" r="2.2" fill="var(--logo-grad-3)"/>
          </svg>
          <h2>{{ t('login.title') }}</h2>
        </div>
        <div class="sidebar-nav">
          <div v-for="menu in menus" :key="menu.key" class="nav-item" :class="{active: currentPage === menu.key}"
               @click="navigate(menu)" tabindex="0" role="button"
               :aria-label="menu.name" :aria-current="currentPage === menu.key ? 'page' : null"
               @keydown.enter.prevent="navigate(menu)" @keydown.space.prevent="navigate(menu)">
            <span class="nav-icon" v-html="sanitizeHtml(menu.icon)"></span>
            <span>{{ menu.name }}</span>
          </div>
        </div>
        <div class="sidebar-collapse-btn" @click="toggle" :title="sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'"
             tabindex="0" role="button" :aria-expanded="!sidebarCollapsed" aria-label="折叠/展开侧边栏"
             @keydown.enter.prevent="toggle" @keydown.space.prevent="toggle">
        </div>
      </div>
    `,
    setup() {
      // 从主应用 inject 共享状态
      const state = inject('qcState');
      if (!state) return {};

      const navigate = (menu) => {
        state.currentPage.value = menu.key;
        state.currentSubPage.value = menu.subPages[0] || '';
      };
      const toggle = () => {
        state.sidebarCollapsed.value = !state.sidebarCollapsed.value;
      };

      return {
        menus: state.menus,
        currentPage: state.currentPage,
        sidebarCollapsed: state.sidebarCollapsed,
        navigate,
        toggle,
        sanitizeHtml: state.sanitizeHtml,
        keyClick: state.keyClick,
        t: state.t,
      };
    },
  };
})();
