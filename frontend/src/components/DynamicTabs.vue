<script>
// V6.1 (PRD-6.1 F8): 动态页签栏 — 渲染当前一级已打开的二级子页
// V6.2 (PRD-6.2 F2/F4): 迁入 Header 左区承载; 关闭按钮独立 button, 消除嵌套交互元素
// V6.2 (PRD-6.2 F8): 右键菜单 (关闭其他/全部关闭/刷新) + 拖拽排序
import { inject, computed, ref } from 'vue'
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

    // V6.2 F8: 右键菜单状态 + 拖拽索引
    const ctxMenu = ref({ visible: false, subPage: '', x: 0, y: 0 })
    const dragIdx = ref(-1)

    function activate(subPage) {
      if (state.activateTab) state.activateTab(currentPage.value, subPage)
    }
    function close(subPage) {
      if (state.closeTab) state.closeTab(currentPage.value, subPage)
    }

    function _tabsCore() { return (window.__quantModules && window.__quantModules.tabsCore) || null }
    function openCtx(e, subPage) {
      e.preventDefault()
      ctxMenu.value = { visible: true, subPage, x: e.clientX, y: e.clientY }
    }
    function closeCtx() { ctxMenu.value.visible = false }
    function ctxCloseOthers() {
      const page = currentPage.value
      const T = _tabsCore()
      if (T && ctxMenu.value.subPage) {
        const res = T.closeOthers(state.tabGroups.value, page, ctxMenu.value.subPage)
        state.tabGroups.value = res.groups
        if (state.activateTab) state.activateTab(page, ctxMenu.value.subPage)
      }
      closeCtx()
    }
    function ctxCloseAll() {
      const page = currentPage.value
      const T = _tabsCore()
      if (T) {
        const res = T.closeAll(state.tabGroups.value, page)
        state.tabGroups.value = res.groups
      }
      closeCtx()
      const menu = (state.menus && state.menus.value || []).find((m) => m.key === page)
      const def = menu && menu.subPages && menu.subPages[0]
      if (def && state.activateTab) state.activateTab(page, def)
    }
    function ctxRefresh() {
      const page = currentPage.value
      const sp = ctxMenu.value.subPage
      closeCtx()
      if (!sp) return
      if (state.closeTab) state.closeTab(page, sp)
      if (state.openTab) state.openTab(page, sp)
    }
    function onDragStart(e, idx) { dragIdx.value = idx; if (e.dataTransfer) e.dataTransfer.effectAllowed = 'move' }
    function onDragOver(e) { e.preventDefault() }
    function onDrop(e, idx) {
      e.preventDefault()
      const T = _tabsCore()
      const page = currentPage.value
      if (T && dragIdx.value >= 0 && dragIdx.value !== idx) {
        const res = T.reorder(state.tabGroups.value, page, dragIdx.value, idx)
        state.tabGroups.value = res.groups
      }
      dragIdx.value = -1
    }

    return {
      state, tabs, activeTab, activate, close,
      ctxMenu, openCtx, closeCtx, ctxCloseOthers, ctxCloseAll, ctxRefresh,
      onDragStart, onDragOver, onDrop,
    }
  },
}
</script>

<template>
  <div v-if="tabs.length" class="qc-dynamic-tabs" role="tablist" aria-label="已打开页面">
    <!-- V6.2: div[role=tab] + 独立 button 关闭, 无嵌套交互元素; 右键菜单 + 拖拽 -->
    <div
      v-for="(t, i) in tabs" :key="t.subPage"
      class="qc-dynamic-tab" :class="{ 'is-active': activeTab === t.subPage }"
      role="tab" tabindex="0" :aria-selected="activeTab === t.subPage ? 'true' : 'false'"
      :title="t.title"
      draggable="true"
      @click="activate(t.subPage)"
      @keydown.enter.prevent="activate(t.subPage)"
      @keydown.space.prevent="activate(t.subPage)"
      @contextmenu.prevent="openCtx($event, t.subPage)"
      @dragstart="onDragStart($event, i)"
      @dragover="onDragOver"
      @drop="onDrop($event, i)"
    >
      <span class="qc-dynamic-tab-label">{{ t.title }}</span>
      <button
        class="qc-dynamic-tab-close" type="button" :aria-label="'关闭 ' + t.title"
        @click.stop="close(t.subPage)"
      >
        <AppIcon name="x" :size="12" />
      </button>
    </div>
  </div>

  <!-- V6.2 F8: 页签右键菜单 (Teleport 到 body, 独立于 tablist) -->
  <Teleport to="body">
    <div v-if="ctxMenu.visible" class="qc-tab-ctx-backdrop" @click="closeCtx" @contextmenu.prevent="closeCtx"></div>
    <div
      v-if="ctxMenu.visible" class="qc-tab-ctx" role="menu"
      :style="{ left: ctxMenu.x + 'px', top: ctxMenu.y + 'px' }"
    >
      <div class="qc-tab-ctx-item" role="menuitem" @click="ctxCloseOthers">关闭其他</div>
      <div class="qc-tab-ctx-item" role="menuitem" @click="ctxCloseAll">全部关闭</div>
      <div class="qc-tab-ctx-divider"></div>
      <div class="qc-tab-ctx-item" role="menuitem" @click="ctxRefresh">刷新当前</div>
    </div>
  </Teleport>
</template>
