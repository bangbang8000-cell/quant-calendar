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
    // V6.7.1 (PRD F-6.7.9 / OBS-4): toptab 形态无子页时 Header 左区兜底显示当前页名
    const hasToptabs = computed(() => {
      const page = state.currentPage && state.currentPage.value
      const menu = (state.menus && state.menus.value || []).find((m) => m.key === page)
      return !!(menu && menu.subPages && menu.subPages.length)
    })
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
    // V6.7.1 (PRD F-6.7.1): 导航形态快速切换 (桌面 Header 右侧, 配置页仍有完整入口)
    const openNavModeMenu = ref(false)
    const NAV_MODES = [
      { value: 'subnav', label: '中栏二级', desc: '左侧一级 + 中栏常驻二级' },
      { value: 'tree', label: '侧栏树状', desc: '二级直接展开在侧栏内' },
      { value: 'toptab', label: '顶部二级标签', desc: '二级以横排标签置于头部' },
    ]
    const navModeLabel = computed(() => {
      const m = NAV_MODES.find((x) => x.value === navMode.value)
      return (m && m.label) || navMode.value
    })
    function toggleNavModeMenu() { openNavModeMenu.value = !openNavModeMenu.value }
    function closeNavModeMenu() { openNavModeMenu.value = false }
    function pickNavMode(v) {
      openNavModeMenu.value = false
      if (state.setNavMode) state.setNavMode(v)
    }
    // v-model 需可赋值变量 (可选链不可直接赋值)
    const searchQuery = computed({
      get: () => (state.searchQuery && state.searchQuery.value) || '',
      set: (v) => { if (state.searchQuery) state.searchQuery.value = v },
    })
    // V6.1 (PRD-6.1 F5): 明/暗模式快捷切换 (保留当前主题色)
    // V6.9.3 (F4): 通知铃铛面板 — 最近投递历史
    const openBellMenu = ref(false)
    const notifItems = ref([])
    const notifLoading = ref(false)
    const notifError = ref(false)
    function authHeaders() {
      const t = localStorage.getItem('quant_token') || ''
      return t ? { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' }
               : { 'Content-Type': 'application/json' }
    }
    async function loadNotifications() {
      notifLoading.value = true
      notifError.value = false
      try {
        const res = await fetch('/api/alerts/history?limit=8', { headers: authHeaders() })
        const data = await res.json()
        if (data && data.success) notifItems.value = data.history || []
        else notifItems.value = []
      } catch (e) {
        notifError.value = true
        notifItems.value = []
      } finally {
        notifLoading.value = false
      }
    }
    function toggleBell() {
      openBellMenu.value = !openBellMenu.value
      if (openBellMenu.value) loadNotifications()
    }
    function closeBell() { openBellMenu.value = false }
    function goNotificationCenter() {
      openBellMenu.value = false
      if (state.activateTab) state.activateTab('system', 'notification')
    }
    // V6.9.3 (F6): 主题按钮 → 主题面板 (模式 + 6 色板 + 自定义 slider)
    const openThemeMenu = ref(false)
    const themeHues = (state.themeHues) || [45, 220, 0, 140, 270, 320]
    const themeHue = computed(() => (state.themeHue && state.themeHue.value) || 45)
    const themeMode = computed(() => (state.themeMode && state.themeMode.value) || 'system')
    function hueColor(h) { return state.hueColor ? state.hueColor(h) : 'hsl(' + h + ', 75%, 42%)' }
    function hueName(h) { return state.hueName ? state.hueName(h) : (String(h)) }
    function toggleThemeMenu() { openThemeMenu.value = !openThemeMenu.value }
    function closeThemeMenu() { openThemeMenu.value = false }
    function pickThemeMode(m) { if (state.changeThemeMode) state.changeThemeMode(m) }
    function pickThemeHue(h) { if (state.changeThemeHue) state.changeThemeHue(h) }
    // 兼容旧引用 (旧亮暗快捷切换保留语义: 切换模式)
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
      state, showUserMenu, isDark, searchQuery, navMode, crumbRoot, crumbSub, hasToptabs,
      toggleThemeQuick, toggleSidebar, openUserMenu, closeUserMenu, menuItem, handleLogout,
      // V6.9.3 (F4): 通知铃铛面板
      openBellMenu, notifItems, notifLoading, notifError, toggleBell, closeBell, goNotificationCenter,
      // V6.9.3 (F6): 主题面板
      openThemeMenu, themeHues, themeHue, themeMode, hueColor, hueName,
      toggleThemeMenu, closeThemeMenu, pickThemeMode, pickThemeHue,
      // V6.7.1 (PRD F-6.7.1): 导航形态快速切换
      openNavModeMenu, NAV_MODES, navModeLabel, toggleNavModeMenu, closeNavModeMenu, pickNavMode,
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
           M5.1: 移动端隐藏, 由二级下拉 picker 承担 (窄屏横向标签过挤)
           V6.7.1 (F-6.7.9 / OBS-4): 无子页时兜底显示当前页名 -->
      <template v-if="navMode === 'toptab' && !isMobile">
        <qc-top-tabs v-if="hasToptabs"></qc-top-tabs>
        <span v-else class="qc-crumb qc-crumb-root">{{ crumbRoot }}</span>
      </template>
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
      <!-- V6.9.3 (F4): 通知铃铛 → 面板 (最近投递历史) -->
      <div class="qc-hdr-pop" v-click-outside="closeBell">
        <button class="qc-icon-btn qc-has-dot" aria-label="通知" :aria-expanded="openBellMenu" @click="toggleBell">
          <AppIcon name="bell" :size="20" />
        </button>
        <div v-if="openBellMenu" class="qc-header-popover qc-bell-panel" role="dialog" aria-label="通知面板">
          <div class="qc-bell-header">通知</div>
          <div v-if="notifLoading" class="qc-bell-state">加载中...</div>
          <div v-else-if="notifError" class="qc-bell-state">加载失败</div>
          <div v-else-if="!notifItems.length" class="qc-bell-state">暂无通知</div>
          <div v-else class="qc-bell-list">
            <div v-for="(n, i) in notifItems" :key="n.id || i" class="qc-bell-item" :class="{ 'is-fail': n.ok === 0 }">
              <div class="qc-bell-item-title">{{ n.title || n.event_type || '事件' }}</div>
              <div class="qc-bell-item-meta">{{ n.channel || '' }}<span v-if="n.recipient"> · {{ n.recipient }}</span><span class="qc-bell-item-time">{{ n.created_at || '' }}</span></div>
            </div>
          </div>
          <button class="qc-bell-footer" @click="goNotificationCenter">前往通知中心 →</button>
        </div>
      </div>
      <!-- V6.9.3 (F6): 主题按钮 → 主题面板 (外观模式 + 色板 + 自定义) -->
      <div class="qc-hdr-pop" v-click-outside="closeThemeMenu">
        <button class="qc-icon-btn" aria-label="主题设置" title="主题设置" :aria-expanded="openThemeMenu" @click="toggleThemeMenu">
          <AppIcon name="palette" :size="20" />
        </button>
        <div v-if="openThemeMenu" class="qc-header-popover qc-theme-panel" role="dialog" aria-label="主题面板">
          <div class="qc-theme-section-label">外观模式</div>
          <div class="qc-theme-modes">
            <button v-for="m in [{k:'light',n:'浅色'},{k:'dark',n:'深色'},{k:'system',n:'跟随'}]" :key="m.k"
              class="qc-theme-mode" :class="{ 'is-active': themeMode === m.k }" @click="pickThemeMode(m.k)">{{ m.n }}</button>
          </div>
          <div class="qc-theme-section-label">主题色</div>
          <div class="qc-theme-swatches">
            <button v-for="h in themeHues" :key="h" class="qc-theme-swatch" :class="{ 'is-active': themeHue === h }"
              :style="{ background: hueColor(h) }" :title="hueName(h)" :aria-label="hueName(h)" @click="pickThemeHue(h)">
              <span v-if="themeHue === h" class="qc-theme-swatch-check">✓</span>
            </button>
          </div>
          <el-slider class="qc-theme-slider" :model-value="themeHue" :min="0" :max="359" :step="1" size="small"
            @change="pickThemeHue" aria-label="自定义主题色相" />
          <div class="qc-theme-custom-label">自定义 {{ themeHue }}°</div>
        </div>
      </div>
      <!-- V6.7.1 (PRD F-6.7.1): 导航形态快速切换 (桌面) -->
      <div v-if="!isMobile" class="qc-navmode-switch" v-click-outside="closeNavModeMenu">
        <button class="qc-icon-btn" :aria-label="'切换导航形态: ' + navModeLabel" :title="'导航形态: ' + navModeLabel" :aria-expanded="openNavModeMenu" @click="toggleNavModeMenu">
          <AppIcon name="layers" :size="20" />
        </button>
        <div v-if="openNavModeMenu" class="qc-navmode-menu" role="menu">
          <div v-for="m in NAV_MODES" :key="m.value"
            class="qc-user-dropdown-item qc-navmode-item" :class="{ 'is-active': navMode === m.value }"
            role="menuitem" tabindex="0" @click="pickNavMode(m.value)"
            @keydown.enter.prevent="pickNavMode(m.value)" @keydown.space.prevent="pickNavMode(m.value)"
          >
            <div class="qc-navmode-item-main">
              <span>{{ m.label }}</span>
              <AppIcon v-if="navMode === m.value" name="check" :size="14" />
            </div>
            <div class="qc-navmode-item-desc">{{ m.desc }}</div>
          </div>
        </div>
      </div>
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
