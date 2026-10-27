<template>
  <!-- 6.5.4 (FR-654.2): 中栏二级常驻 — 根类必须是 qc-subnav-column
       (中栏 fixed 定位/宽度/折叠联动/tree·toptab 隐藏全部挂在该类上), 仅 subnav 形态渲染 -->
  <nav v-if="navMode === 'subnav'" class="qc-subnav-column" aria-label="二级导航">
    <div class="qc-subnav-column-header">
      <span class="qc-subnav-current-label">{{ pageTitle }}</span>
    </div>
    <div class="qc-subnav-column-body">
      <template v-for="member in subItems" :key="currentMenu.key + '.' + member.key">
        <!-- 跨页面成员相邻处插分隔线 (单一业务域内自然不渲染) -->
        <span v-if="showGroupHead(member)" class="qc-subnav-divider" aria-hidden="true"></span>
        <button class="qc-subnav-item" :class="{ 'is-active': isSubActive(member) }"
                @click="goMember(member)" tabindex="0">
          <AppIcon :name="subIcon(member.page, member.sub)" :size="14" />
          <span>{{ memberLabel(member) }}</span>
        </button>
      </template>
    </div>
  </nav>
</template>

<script>
// 6.5.4 (FR-654): 二级导航成员化 — subItems 来自 currentMenu.members (单一业务域 ≤7 成员);
// 激活态/跳转均以内部坐标 (page/sub) 比较。
import AppIcon from './common/AppIcon.vue'

// 二级菜单语义图标 — 双层映射 (与 TopTabs.vue SUB_ICONS 保持一致, 修改需同步)
const SUB_ICONS = {
  'strategies': {
    'overview': 'pie-chart', 'merrill': 'clock', 'market': 'trending-up', 'consensus': 'target',
  },
  'calendar': {
    'calendar': 'calendar', 'pool': 'database',
  },
  'ai': {
    'overview': 'activity', 'focus': 'target', 'watchlist': 'star', 'history': 'history',
    'evaluation-analysis': 'bar-chart-3', 'portfolio': 'bar-chart-3', 'chat_history': 'message-circle',
  },
  'research': {
    'research-overview': 'search-check', 'quant-research': 'line-chart',
    'strategy-manage': 'layers',
    'backtest': 'play', 'backtest-history': 'history',
  },
  'shortterm': {
    'overview': 'layout-dashboard', 'market-review': 'line-chart', 'ztpool': 'trending-up',
    'lhb': 'users', 'sector': 'layers', 'intraday': 'clock', 'scan': 'search-check',
  },
  'ops': {
    'status': 'activity', 'health': 'gauge', 'schedule': 'clock', 'usage': 'bar-chart-3',
    'guard': 'shield', 'datadict': 'book-open', 'execution': 'clipboard-list',
  },
  'system': {
    'config': 'save', 'feature': 'sliders-horizontal', 'autoeval': 'bot', 'datasource': 'database',
    'user': 'users', 'notification': 'bell', 'about': 'info',
  },
}

export default {
  // 6.5.5 (FR-654.4): 注册名必须与 index.html 的 <qc-subnav> 标签一致
  // (main.js 以 comp.name 注册; 6.5.0 重写时误改为 'SubNav' → 标签无法解析, 中栏整体不渲染)
  name: 'qc-subnav',
  components: { AppIcon },
  inject: ['qcState'],
  computed: {
    appState() {
      return this.qcState;
    },
    navMode() {
      const nm = this.appState.navMode
      return (nm && nm.value) || 'subnav'
    },
    // 6.5.4 (FR-654.2): 栏头显示当前一级名 (中栏有了固定栏头, 位置感明确)
    pageTitle() {
      const s = this.appState
      return (s.currentPageName && s.currentPageName.value) || this.currentMenu.name || ''
    },
    currentMenu() {
      const s = this.appState;
      const items = s.menus?.value || [];
      const page = s.currentPage?.value;
      return items.find(m => (m.activePages || [m.key]).includes(page))
        || items.find(m => m.key === page) || items[0] || { key: '', members: [], activePages: [] };
    },
    subItems() {
      return this.currentMenu.members || [];
    },
  },
  methods: {
    // 双层查找: page → subPage → icon; 未命中回退 circle-dot
    subIcon(page, sp) {
      return (SUB_ICONS[page] && SUB_ICONS[page][sp]) || 'circle-dot';
    },
    memberLabel(member) {
      const NC = window.QuantNavMerge;
      if (NC) return NC.memberLabel(member, this.appState.t);
      return member.sub;
    },
    // 成员分组: 内部 page 变化处插分隔线 (单一业务域内恒为同页, 故通常不渲染)
    showGroupHead(member) {
      const members = this.subItems;
      const idx = members.indexOf(member);
      return idx > 0 && members[idx - 1].page !== member.page;
    },
    isSubActive(member) {
      const s = this.appState;
      return s.currentPage?.value === member.page && s.currentSubPage?.value === member.sub;
    },
    goMember(member) {
      // 6.5.0 (FR-653.2): 统一经全局切页漏斗 (懒加载 + 归一)
      window.__quantGoPage(member.page, member.sub);
    },
  },
};
</script>
