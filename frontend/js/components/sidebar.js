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
            <!-- v3.22-logo: 蓝黄红三柱 + 背景/边框随主题 -->
            <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
            <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
            <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
            <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
            <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
            <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
            <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
            <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
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
      // V4.2 (FR-4.2.7): 折叠状态持久化恢复
      try {
        const saved = localStorage.getItem('quant_sidebar_collapsed');
        if (saved !== null && state.sidebarCollapsed) {
          state.sidebarCollapsed.value = saved === '1';
        }
      } catch (e) {}
      if (!state) return {};

      const navigate = (menu) => {
        state.currentPage.value = menu.key;
        state.currentSubPage.value = menu.subPages[0] || '';
      };
      const toggle = () => {
        state.sidebarCollapsed.value = !state.sidebarCollapsed.value;
        // V4.2 (FR-4.2.7): 折叠状态持久化
        try { localStorage.setItem('quant_sidebar_collapsed', state.sidebarCollapsed.value ? '1' : '0'); } catch (e) {}
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
