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
          <h2>📊 {{ t('login.title') }}</h2>
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
