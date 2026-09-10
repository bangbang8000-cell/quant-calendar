<script>
// V6.0 (PRD-6.0 FR-6.0.3): 页面级二级导航 SFC — 双形态
// V6.1 (PRD-6.1 F1): 收敛为「中栏二级常驻」单一形态 — 移除 top-tab/left-subnav 双形态,
//   页面内容不再经 slot 渲染 (已由 index.html 的 .qc-work-area-content 独立承载)
//   - system: 分组三级 (SYSTEM_GROUPS)
//   - 其他一级页: 平铺二级
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed } from 'vue'
import AppIcon from './common/AppIcon.vue'

// 系统配置左侧子导航分组 (PRD 1.2.3)
// V6.0 (P1-3): 每个叶节点独立 subPage key (status/health/schedule/autoeval/usage/guard),
// 不再共用 key + anchor 滚动 — 支持 URL hash 深链与浏览器前进后退
const SYSTEM_GROUPS = [
  { label: '运行监控', items: [
    { key: 'status', label: '系统状态', icon: 'activity' },
    { key: 'health', label: '数据源健康', icon: 'database' },
    { key: 'schedule', label: '调度任务', icon: 'clock' },
  ]},
  { label: '智能服务', items: [
    { key: 'autoeval', label: '自动评估', icon: 'bot' },
    { key: 'usage', label: 'AI 用量', icon: 'bar-chart-3' },
    { key: 'guard', label: 'AI 事实护栏', icon: 'shield' },
  ]},
  { label: '平台设置', items: [
    { key: 'datasource', label: '数据源', icon: 'hard-drive' },
    { key: 'feature', label: '功能配置', icon: 'sliders-horizontal' },
    { key: 'datadict', label: '数据字典', icon: 'file-text' },
  ]},
  { label: '组织管理', items: [
    { key: 'user', label: '用户与权限', icon: 'users' },
    { key: 'execution', label: '执行看板', icon: 'cpu' },
    { key: 'about', label: '关于', icon: 'info' },
  ]},
]

export default {
  name: 'qc-subnav',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}

    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const currentSubPage = computed(() => (state.currentSubPage && state.currentSubPage.value) || '')
    // V6.3 (PRD-6.3 F4): 导航形态 — 中栏二级仅 subnav 形态渲染 (tree/toptab 隐藏)
    const navMode = computed(() => (state.navMode && state.navMode.value) || 'subnav')
    const collapsedGroups = ref({})

    const menus = computed(() => (state.menus && state.menus.value) || [])
    const currentMenu = computed(() => menus.value.find((m) => m.key === currentPage.value) || null)
    const subPages = computed(() => (currentMenu.value && currentMenu.value.subPages) || [])

    const pageTitle = computed(() => {
      const n = state.currentPageName && state.currentPageName.value
      return n || currentPage.value
    })
    const subLabel = (sp) => (state.subPageNames && state.subPageNames[sp]) || sp
    const isSubActive = (sp) => currentSubPage.value === sp

    // V6.1 (PRD-6.1 F8): 中栏点击 → 打开/激活动态页签 (经 openTab 走 navigateTo)
    function goSub(sp) {
      if (state.openTab) state.openTab(currentPage.value, sp)
      else if (state.currentSubPage) state.currentSubPage.value = sp
      try { localStorage.setItem('quant_last_subpage', sp) } catch (e) {}
    }
    function goSystemItem(item) {
      if (state.openTab) state.openTab(currentPage.value, item.key)
      else if (state.currentSubPage) state.currentSubPage.value = item.key
      try { localStorage.setItem('quant_last_subpage', item.key) } catch (e) {}
    }
    function toggleGroup(label) { collapsedGroups.value[label] = !collapsedGroups.value[label] }

    // V6.2 (PRD-6.2 F1): 全部二级菜单语义图标 — 双层映射 (page → subPage → iconName)
    const SUB_ICONS = {
      'strategies': {
        'overview': 'pie-chart', 'merrill': 'clock', 'market': 'trending-up', 'consensus': 'target',
      },
      'calendar': {
        'daily': 'calendar', 'weekly': 'calendar-days', 'monthly': 'calendar-range',
        'yearly': 'calendar-check', 'pool': 'database',
      },
      'ai': {
        'overview': 'activity', 'focus': 'target', 'watchlist': 'star', 'history': 'history',
        'evaluation-analysis': 'bar-chart-3', 'chat_history': 'message-circle',
      },
      'research': {
        'research-overview': 'search-check', 'quant-research': 'line-chart',
        'strategy-write': 'layers', 'custom-write': 'sparkles',
        'backtest': 'play', 'backtest-history': 'history',
      },
      'shortterm': {
        'overview': 'layout-dashboard', 'market-review': 'line-chart', 'ztpool': 'trending-up',
        'lhb': 'users', 'sector': 'layers', 'intraday': 'clock', 'scan': 'search-check',
      },
    }
    const subIcon = (page, sp) => (SUB_ICONS[page] && SUB_ICONS[page][sp]) || 'circle-dot'

    return {
      state, currentPage, currentSubPage, navMode, subPages, currentMenu,
      collapsedGroups, pageTitle, subLabel, isSubActive,
      goSub, goSystemItem, toggleGroup, SYSTEM_GROUPS, subIcon,
    }
  },
}
</script>

<template>
  <!-- V6.1 (PRD-6.1 F1): 中栏二级导航 — 固定常驻, 顶部显示当前一级页面名
       V6.3 (PRD-6.3 F4): 仅 subnav 形态渲染 (tree/toptab 由 data-navmode CSS 隐藏 + v-if 双保险) -->
  <aside v-if="navMode === 'subnav'" class="qc-subnav-column" aria-label="二级导航">
    <div class="qc-subnav-column-header">
      <span class="qc-subnav-current-label">{{ pageTitle }}</span>
    </div>
    <div class="qc-subnav-column-body">
      <!-- 系统配置: 分组三级 -->
      <template v-if="currentPage === 'system'">
        <div v-for="group in SYSTEM_GROUPS" :key="group.label" class="qc-subnav-group">
          <div class="qc-subnav-group-label" @click="toggleGroup(group.label)">
            <span>{{ group.label }}</span>
            <AppIcon name="chevron-down" :size="12" :class="{ 'is-open': !collapsedGroups[group.label] }" />
          </div>
          <template v-if="!collapsedGroups[group.label]">
            <a
              v-for="item in group.items" :key="item.key"
              class="qc-subnav-item" :class="{ 'is-active': isSubActive(item.key) }"
              :href="'#' + item.key"
              @click.prevent="goSystemItem(item)"
            >
              <AppIcon :name="item.icon" :size="16" />
              <span>{{ item.label }}</span>
            </a>
          </template>
        </div>
      </template>
      <!-- 其他一级页: 平铺二级 -->
      <template v-else>
        <a
          v-for="sp in subPages" :key="sp"
          class="qc-subnav-item" :class="{ 'is-active': isSubActive(sp) }"
          :href="'#' + currentPage + '/' + sp"
          @click.prevent="goSub(sp)"
        >
          <AppIcon :name="subIcon(currentPage, sp)" :size="16" />
          <span>{{ subLabel(sp) }}</span>
        </a>
      </template>
    </div>
  </aside>
</template>
