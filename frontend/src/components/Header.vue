<script>
// V6.0 (PRD-6.0 FR-6.0.2): 顶部 Header SFC — 三区布局
// 左: 折叠/汉堡 + 面包屑 | 中: 全局搜索 | 右: 通知/主题/用户菜单
// 二级 Tab 已迁出至 SubNav; 日历操作区经 SubNav 渲染 (页面级)
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from './common/AppIcon.vue'

export default {
  name: 'qc-header',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}
    const showUserMenu = ref(false)
    // V6.3 (PRD-6.3 F4): 导航形态 (动态页签 V6.4 已移除, 面包屑仅 tree 形态展示)
    const navMode = computed(() => (state.navMode && state.navMode.value) || 'subnav')
    // V6.4 (PRD-6.4): 面包屑 — 树状一二级菜单形态展示「一级 / 二级」
    //   subnav/toptab 形态不展示 (中栏标题 / 顶部二级标签已承担位置指示)
    const crumbRoot = computed(() => {
      const page = state.currentPage && state.currentPage.value
      const name = state.currentPageName && state.currentPageName.value
      if (name) return name
      const menu = (state.menus && state.menus.value || []).find((m) => m.key === page)
      return (menu && menu.name) || page || ''
    })
    const crumbSub = computed(() => {
      const sp = state.currentSubPage && state.currentSubPage.value
      return (sp && state.subPageNames && state.subPageNames[sp]) || sp || ''
    })
    // V6.2 (PRD-6.2 F6): 移动端「当前二级」下拉 (桌面隐藏)
    const isMobile = ref(typeof window !== 'undefined' ? window.innerWidth < 768 : false)
    function _onResize() { isMobile.value = window.innerWidth < 768 }
    onMounted(() => window.addEventListener('resize', _onResize))
    onUnmounted(() => window.removeEventListener('resize', _onResize))
    const openSubnavPicker = ref(false)
    const currentSubLabel = computed(() => {
      const sp = state.currentSubPage && state.currentSubPage.value
      return (sp && state.subPageNames && state.subPageNames[sp]) || sp || ''
    })
    const subnavOptions = computed(() => {
      const page = state.currentPage && state.currentPage.value
      const menu = (state.menus && state.menus.value || []).find((m) => m.key === page)
      return (menu && menu.subPages || []).map((sp) => ({
        key: sp,
        label: (state.subPageNames && state.subPageNames[sp]) || sp,
      }))
    })
    function toggleSubnavPicker() { openSubnavPicker.value = !openSubnavPicker.value }
    function closeSubnavPicker() { openSubnavPicker.value = false }
    function pickSubnav(sp) {
      openSubnavPicker.value = false
      if (state.activateTab) state.activateTab(state.currentPage.value, sp)
    }

    const isDark = computed(() => (state.currentTheme && state.currentTheme.value) === 'dark')
    // v-model 需可赋值变量 (可选链不可直接赋值)
    const searchQuery = computed({
      get: () => (state.searchQuery && state.searchQuery.value) || '',
      set: (v) => { if (state.searchQuery) state.searchQuery.value = v },
    })
    // V6.1 (PRD-6.1 F5): 明/暗模式快捷切换 (保留当前主题色)
    function toggleThemeQuick() {
      if (!state.changeThemeMode) return
      state.changeThemeMode(isDark.value ? 'light' : 'dark')
    }
    function toggleSidebar() {
      if (window.innerWidth < 768) {
        // 移动端: 触发抽屉
        window.dispatchEvent(new CustomEvent('qc:drawer', { detail: { open: true } }))
        return
      }
      if (state.sidebarCollapsed) state.sidebarCollapsed.value = !state.sidebarCollapsed.value
      try {
        localStorage.setItem('sidebar_collapsed', state.sidebarCollapsed.value ? '1' : '0')
      } catch (e) {}
    }
    function openUserMenu() { showUserMenu.value = !showUserMenu.value }
    function closeUserMenu() { showUserMenu.value = false }
    function menuItem(fn) { return () => { closeUserMenu(); if (fn) fn() } }
    function handleLogout() { closeUserMenu(); if (state.handleLogout) state.handleLogout() }

    return {
      state, showUserMenu, isDark, searchQuery, navMode, crumbRoot, crumbSub,
      toggleThemeQuick, toggleSidebar, openUserMenu, closeUserMenu, menuItem, handleLogout,
      // V6.2 (PRD-6.2 F6): 移动端二级下拉
      isMobile, openSubnavPicker, currentSubLabel, subnavOptions,
      toggleSubnavPicker, closeSubnavPicker, pickSubnav,
    }
  },
}
</script>

<template>
  <header class="qc-header">
    <div class="qc-header-left">
      <button class="qc-icon-btn" :aria-label="state.sidebarCollapsed?.value ? '展开侧边栏' : '折叠侧边栏'" @click="toggleSidebar">
        <AppIcon name="menu" :size="20" />
      </button>
      <!-- V6.2 (PRD-6.2 F6): 移动端「当前二级」下拉 (桌面隐藏) -->
      <div v-if="isMobile" class="qc-header-subnav" v-click-outside="closeSubnavPicker">
        <button class="qc-subnav-picker" :aria-expanded="openSubnavPicker" @click="toggleSubnavPicker">
          <span class="qc-subnav-picker-label">{{ currentSubLabel || '二级' }}</span>
          <AppIcon name="chevron-down" :size="14" />
        </button>
        <div v-if="openSubnavPicker" class="qc-subnav-picker-menu" role="menu">
          <div
            v-for="opt in subnavOptions" :key="opt.key"
            class="qc-subnav-picker-item" :class="{ 'is-active': opt.key === (state.currentSubPage && state.currentSubPage.value) }"
            role="menuitem" @click="pickSubnav(opt.key)"
          >
            {{ opt.label }}
          </div>
        </div>
      </div>
      <!-- V6.4 (PRD-6.4): 面包屑 — 树状一二级菜单形态展示 (V6.2 动态页签已移除)
           subnav/toptab 形态不展示: 中栏标题与顶部二级标签已承载位置指示 -->
      <div v-if="navMode === 'tree' && !isMobile" class="qc-header-crumbs" aria-label="面包屑">
        <span class="qc-crumb qc-crumb-root">{{ crumbRoot }}</span>
        <template v-if="crumbSub">
          <span class="qc-crumb-sep" aria-hidden="true">/</span>
          <span class="qc-crumb qc-crumb-sub">{{ crumbSub }}</span>
        </template>
      </div>
      <!-- V6.3 (PRD-6.3 F4): toptab 形态 — 顶部二级横向标签 (点击走 openTab, 承担页签定位)
           M5.1: 移动端隐藏, 由二级下拉 picker 承担 (窄屏横向标签过挤) -->
      <qc-top-tabs v-if="navMode === 'toptab' && !isMobile"></qc-top-tabs>
    </div>

    <div class="qc-header-center">
      <el-autocomplete
        class="qc-header-search"
        v-model="searchQuery"
        :fetch-suggestions="state.searchStocks"
        :placeholder="state.t('common.searchPlaceholder')"
        :trigger-on-focus="false"
        clearable
        size="small"
        @select="state.onSearchSelect"
      >
        <template #prefix>
          <AppIcon name="search" :size="16" class="qc-header-search-icon" />
        </template>
        <!-- V6.2 (PRD-6.2 F3): Ctrl+K 内置为 suffix, 不再外置独立 span -->
        <template #suffix>
          <span class="qc-header-search-kbd">Ctrl+K</span>
        </template>
        <template #default="slotProps">
          <span>{{ slotProps?.item?.icon }} {{ slotProps?.item?.label || slotProps?.item?.name }}</span>
          <span class="qc-search-sublabel" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
        </template>
      </el-autocomplete>
    </div>

    <div class="qc-header-right">
      <button class="qc-icon-btn qc-has-dot" aria-label="通知">
        <AppIcon name="bell" :size="20" />
      </button>
      <button class="qc-icon-btn" :aria-label="isDark ? '切换亮色主题' : '切换暗色主题'" :title="isDark ? '切换亮色主题' : '切换暗色主题'" @click="toggleThemeQuick">
        <AppIcon :name="isDark ? 'sun' : 'moon'" :size="20" />
      </button>
      <div class="qc-user-menu" v-click-outside="closeUserMenu">
        <button class="qc-user-avatar" :aria-label="'用户菜单 ' + (state.currentUser?.username || '')" aria-haspopup="menu" :aria-expanded="showUserMenu" @click="openUserMenu">
          {{ (state.currentUser?.username || 'A').charAt(0).toUpperCase() }}
        </button>
        <div v-if="showUserMenu" class="qc-user-dropdown" role="menu">
          <div class="qc-user-dropdown-header">
            <span class="qc-user-dropdown-name">{{ state.currentUser?.username }}</span>
            <span v-if="state.currentUser?.role === 'guest'" class="qc-user-dropdown-chip">访客</span>
          </div>
          <div
            v-if="state.currentUser?.role === 'admin'"
            class="qc-user-dropdown-item" role="menuitem" tabindex="0"
            @click="menuItem(state.resetSetupWizard)" @keydown.enter.prevent="menuItem(state.resetSetupWizard)()"
          >
            <AppIcon name="settings" :size="16" /> 重新运行初始化向导
          </div>
          <div
            v-if="state.currentUser?.role !== 'guest'"
            class="qc-user-dropdown-item" role="menuitem" tabindex="0"
            @click="menuItem(() => { state.showChangePassword = true })"
            @keydown.enter.prevent="menuItem(() => { state.showChangePassword = true })()"
          >
            <AppIcon name="lock" :size="16" /> 修改密码
          </div>
          <div class="qc-user-dropdown-divider"></div>
          <div class="qc-user-dropdown-item is-danger" role="menuitem" tabindex="0" @click="handleLogout" @keydown.enter.prevent="handleLogout">
            <AppIcon name="log-out" :size="16" /> 退出登录
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
