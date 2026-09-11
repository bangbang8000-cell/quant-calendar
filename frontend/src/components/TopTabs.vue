<script>
// V6.3 (PRD-6.3 F4 / DEV-PLAN M3.1): toptab 形态 — Header 顶部二级横向标签
// 读当前一级页 subPages 横排渲染, 点击走 openTab (与 Ctrl+Tab / hash 深链天然兼容)
// 不可关闭、无右键、无拖拽 (定位职责: 二级 tab 承担页签)
// 对象字面量导出, 注册由 main.js 写入 __quantComponents.TopTabs
import { inject, computed } from 'vue'
import AppIcon from './common/AppIcon.vue'

// 二级菜单语义图标 — 双层映射 (与 SubNav.vue SUB_ICONS 保持一致, 修改需同步)
// V6.6.1 (PRD F-6.6.7): calendar 合并后主视图 key=calendar; research 合并为 strategy-manage; ai 新增 portfolio
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
}

export default {
  name: 'qc-top-tabs',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}

    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const currentSubPage = computed(() => (state.currentSubPage && state.currentSubPage.value) || '')
    const menus = computed(() => (state.menus && state.menus.value) || [])
    const subPages = computed(() => {
      const m = menus.value.find((x) => x.key === currentPage.value)
      return (m && m.subPages) || []
    })
    const tabs = computed(() => subPages.value.map((sp) => ({
      key: sp,
      label: (state.subPageNames && state.subPageNames[sp]) || sp,
      icon: (SUB_ICONS[currentPage.value] && SUB_ICONS[currentPage.value][sp]) || 'circle-dot',
    })))

    function go(sp) {
      if (state.openTab) state.openTab(currentPage.value, sp)
      else if (state.currentSubPage) state.currentSubPage.value = sp
    }

    return { state, tabs, currentSubPage, go }
  },
}
</script>

<template>
  <div v-if="tabs.length" class="qc-header-tabs qc-top-tabs" role="tablist" aria-label="二级页面">
    <div
      v-for="tab in tabs" :key="tab.key"
      class="qc-top-tab" :class="{ 'is-active': currentSubPage === tab.key }"
      role="tab" tabindex="0"
      :aria-selected="currentSubPage === tab.key ? 'true' : 'false'"
      :title="tab.label"
      @click="go(tab.key)"
      @keydown.enter.prevent="go(tab.key)"
      @keydown.space.prevent="go(tab.key)"
    >
      <AppIcon :name="tab.icon" :size="14" />
      <span class="qc-top-tab-label">{{ tab.label }}</span>
    </div>
  </div>
</template>
