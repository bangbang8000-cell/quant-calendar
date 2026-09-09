<script>
// V6.1 (PRD-6.1 F8): 动态页签栏 — 渲染当前一级已打开的二级子页
// 点击页签 → activateTab (切 currentSubPage); 关闭按钮 → closeTab (回退相邻)
import { inject, computed } from 'vue'
import AppIcon from './common/AppIcon.vue'

export default {
  name: 'qc-dynamic-tabs',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}

    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const currentSubPage = computed(() => (state.currentSubPage && state.currentSubPage.value) || '')
    const tabs = computed(() => {
      const g = (state.tabGroups && state.tabGroups.value) || {}
      return g[currentPage.value] || []
    })
    const activeTab = computed(() => currentSubPage.value)

    function activate(subPage) {
      if (state.activateTab) state.activateTab(currentPage.value, subPage)
    }
    function close(subPage) {
      if (state.closeTab) state.closeTab(currentPage.value, subPage)
    }
    return { state, tabs, activeTab, activate, close }
  },
}
</script>

<template>
  <div v-if="tabs.length" class="qc-dynamic-tabs" role="tablist" aria-label="已打开页面">
    <button
      v-for="t in tabs" :key="t.subPage"
      class="qc-dynamic-tab" :class="{ 'is-active': activeTab === t.subPage }"
      role="tab" :aria-selected="activeTab === t.subPage ? 'true' : 'false'"
      :title="t.title"
      @click="activate(t.subPage)"
    >
      <span class="qc-dynamic-tab-label">{{ t.title }}</span>
      <span
        class="qc-dynamic-tab-close" role="button" tabindex="0" :aria-label="'关闭 ' + t.title"
        @click.stop="close(t.subPage)"
        @keydown.enter.stop.prevent="close(t.subPage)"
        @keydown.space.stop.prevent="close(t.subPage)"
      >
        <AppIcon name="x" :size="12" />
      </span>
    </button>
  </div>
</template>
