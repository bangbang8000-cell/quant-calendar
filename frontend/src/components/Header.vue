<script>
// V6.0 (PRD-6.0 FR-6.0.2): 顶部 Header SFC — 三区布局
// 左: 折叠/汉堡 + 面包屑 | 中: 全局搜索 | 右: 通知/主题/用户菜单
// 二级 Tab 已迁出至 SubNav; 日历操作区经 SubNav 渲染 (页面级)
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed } from 'vue'
import AppIcon from './common/AppIcon.vue'

export default {
  name: 'qc-header',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}
    const showUserMenu = ref(false)

    const breadcrumbs = computed(() => {
      const parent = state.currentPageName && state.currentPageName.value
        ? state.currentPageName.value : ''
      const sp = state.currentSubPage && state.currentSubPage.value ? state.currentSubPage.value : ''
      const child = sp && state.subPageNames && state.subPageNames[sp] ? state.subPageNames[sp] : ''
      return child ? [parent, child] : [parent]
    })

    const isDark = computed(() => (state.currentTheme && state.currentTheme.value) === 'dark-pro')
    // v-model 需可赋值变量 (可选链不可直接赋值)
    const searchQuery = computed({
      get: () => (state.searchQuery && state.searchQuery.value) || '',
      set: (v) => { if (state.searchQuery) state.searchQuery.value = v },
    })
    function toggleThemeQuick() {
      if (!state.changeTheme) return
      const target = isDark.value ? 'gold' : 'dark-pro'
      state.changeTheme(target)
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
      state, showUserMenu, breadcrumbs, isDark, searchQuery,
      toggleThemeQuick, toggleSidebar, openUserMenu, closeUserMenu, menuItem, handleLogout,
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
      <nav class="qc-breadcrumb" aria-label="面包屑">
        <template v-for="(crumb, i) in breadcrumbs" :key="i">
          <span v-if="i > 0" class="qc-breadcrumb-sep" aria-hidden="true"><AppIcon name="chevron-right" :size="12" /></span>
          <span class="qc-breadcrumb-item" :class="{ 'is-current': i === breadcrumbs.length - 1 }">{{ crumb }}</span>
        </template>
      </nav>
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
        <template #default="slotProps">
          <span>{{ slotProps?.item?.icon }} {{ slotProps?.item?.label || slotProps?.item?.name }}</span>
          <span class="qc-search-sublabel" v-if="slotProps?.item?.subLabel">{{ slotProps?.item?.subLabel }}</span>
        </template>
      </el-autocomplete>
      <span class="qc-header-search-kbd">Ctrl+K</span>
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
          <div class="qc-user-dropdown-title"><AppIcon name="palette" :size="14" /> 切换主题</div>
          <div
            v-for="(theme, key) in state.themes" :key="key"
            class="qc-user-dropdown-item qc-theme-row"
            :class="{ 'is-active': state.currentTheme?.value === key }"
            role="menuitemradio" :aria-checked="state.currentTheme?.value === key" tabindex="0"
            @click="menuItem(() => state.changeTheme(key))()"
            @keydown.enter.prevent="menuItem(() => state.changeTheme(key))()"
          >
            <span class="qc-theme-dot" :style="{ background: theme.color }"></span>
            <span class="qc-theme-name">{{ theme.name }}</span>
            <AppIcon v-if="state.currentTheme?.value === key" name="check" :size="14" class="qc-theme-check" />
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
