<script>
// V6.0 (PRD-6.0 FR-6.0.1): 一级侧边栏 SFC 组件
// 导出为对象字面量 (plugin-vue 需可静态识别以合并 template render)
// 注册由 main.js import 后写入 __quantComponents (与既有 .js 组件同机制)
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from './common/AppIcon.vue'

export default {
  name: 'qc-sidebar',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}

    const menus = computed(() => (state.menus && state.menus.value) || [])
    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const sidebarCollapsed = computed({
      get: () => (state.sidebarCollapsed && state.sidebarCollapsed.value) || false,
      set: (v) => { if (state.sidebarCollapsed) state.sidebarCollapsed.value = v },
    })
    // 子菜单展开状态: key -> bool
    const expandedMenus = ref({})
    const GROUP_LABELS = { research: '量化投研', platform: '平台管理' }
    const GROUPS = ['research', 'platform']

    const isActive = (menu) => currentPage.value === menu.key
    const isChildActive = (menu, sp) =>
      currentPage.value === menu.key && state.currentSubPage && state.currentSubPage.value === sp
    const hasChildren = (menu) => Array.isArray(menu.subPages) && menu.subPages.length > 1
    const subLabel = (menu, sp) =>
      (state.subPageNames && state.subPageNames[sp]) || sp

    function toggleSubmenu(menu) {
      if (!hasChildren(menu) || sidebarCollapsed.value) return
      expandedMenus.value[menu.key] = !expandedMenus.value[menu.key]
    }
    function ensureExpanded() {
      menus.value.forEach((m) => {
        if (expandedMenus.value[m.key] === undefined) expandedMenus.value[m.key] = isActive(m)
      })
    }
    async function navigate(menu, subPage) {
      const sp = subPage || (menu.subPages && menu.subPages[0]) || ''
      if (window.__quantGoPage) {
        await window.__quantGoPage(menu.key, sp)
      } else {
        state.currentPage.value = menu.key
        if (state.currentSubPage) state.currentSubPage.value = sp
      }
      if (state.navigateTo) state.navigateTo(menu.key, sp)
    }
    function toggleCollapse() {
      sidebarCollapsed.value = !sidebarCollapsed.value
      try { localStorage.setItem('sidebar_collapsed', sidebarCollapsed.value ? '1' : '0') } catch (e) {}
    }
    function onKeydown(e) {
      // Ctrl+B 折叠/展开 (沿用现有快捷键)
      if (e.ctrlKey && e.key.toLowerCase() === 'b') { e.preventDefault(); toggleCollapse() }
    }

    onMounted(() => { ensureExpanded(); document.addEventListener('keydown', onKeydown) })
    onUnmounted(() => document.removeEventListener('keydown', onKeydown))

    return {
      state, menus, currentPage, sidebarCollapsed, expandedMenus,
      GROUP_LABELS, GROUPS,
      isActive, isChildActive, hasChildren, subLabel,
      toggleSubmenu, navigate, toggleCollapse,
    }
  },
}
</script>

<template>
  <nav class="qc-sidebar" :class="{ 'is-collapsed': sidebarCollapsed }" aria-label="主导航">
    <!-- Logo 区 -->
    <div class="qc-sidebar-logo">
      <svg class="qc-logo-mark" viewBox="0 0 24 24" width="32" height="32" fill="none" aria-hidden="true">
        <rect x="4" y="7" width="4" height="10" rx="1" fill="#c49b2e"/>
        <line x1="6" y1="4" x2="6" y2="20" stroke="#b8922a" stroke-width="1"/>
        <rect x="10" y="11" width="4" height="6" rx="1" fill="#8f6f1f"/>
        <line x1="12" y1="5" x2="12" y2="19" stroke="#8f6f1f" stroke-width="1"/>
        <rect x="16" y="4" width="4" height="13" rx="1" fill="#b8922a"/>
        <line x1="18" y1="3" x2="18" y2="21" stroke="#b8922a" stroke-width="1"/>
      </svg>
      <span v-if="!sidebarCollapsed" class="qc-logo-text">{{ state.t('login.title') }}</span>
    </div>

    <!-- 菜单区 -->
    <div class="qc-sidebar-nav">
      <template v-for="group in GROUPS" :key="group">
        <div v-if="menus.some((m) => m.group === group)" class="qc-nav-group">
          <span v-if="!sidebarCollapsed" class="qc-nav-group-label">{{ GROUP_LABELS[group] }}</span>
          <template v-for="menu in menus.filter((m) => m.group === group)" :key="menu.key">
            <!-- 一级项 -->
            <a
              class="qc-sidebar-item"
              :class="{
                'is-active': isActive(menu),
                'has-children': hasChildren(menu),
                'is-child-open': expandedMenus[menu.key],
              }"
              :href="'#' + menu.key"
              :title="sidebarCollapsed ? menu.name : undefined"
              :aria-current="isActive(menu) ? 'page' : null"
              @click.prevent="navigate(menu)"
            >
              <AppIcon :name="menu.iconName || ''" :size="18" class="qc-sidebar-icon" />
              <span v-if="!sidebarCollapsed" class="qc-sidebar-label">{{ menu.name }}</span>
              <span v-if="!sidebarCollapsed && menu.badge" class="qc-nav-badge">{{ menu.badge }}</span>
              <button
                v-if="!sidebarCollapsed && hasChildren(menu)"
                class="qc-sidebar-chevron"
                :class="{ 'is-open': expandedMenus[menu.key] }"
                :aria-expanded="!!expandedMenus[menu.key]"
                aria-label="展开子菜单"
                @click.stop="toggleSubmenu(menu)"
              >
                <AppIcon name="chevron-down" :size="14" />
              </button>
            </a>
            <!-- 子菜单 (展开态) -->
            <div
              v-if="!sidebarCollapsed && hasChildren(menu) && expandedMenus[menu.key]"
              class="qc-sidebar-children"
            >
              <a
                v-for="sp in menu.subPages"
                :key="sp"
                class="qc-sidebar-item qc-sidebar-child"
                :class="{ 'is-active': isChildActive(menu, sp) }"
                :href="'#' + menu.key + '-' + sp"
                :aria-current="isChildActive(menu, sp) ? 'page' : null"
                @click.prevent="navigate(menu, sp)"
              >
                <span class="qc-sidebar-child-label">{{ subLabel(menu, sp) }}</span>
              </a>
            </div>
          </template>
        </div>
      </template>
    </div>

    <!-- 底部折叠按钮 -->
    <div class="qc-sidebar-footer">
      <button
        class="qc-sidebar-collapse-btn"
        :aria-expanded="!sidebarCollapsed"
        :aria-label="sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'"
        :title="sidebarCollapsed ? '展开侧边栏' : '折叠侧边栏'"
        @click="toggleCollapse"
      >
        <AppIcon :name="sidebarCollapsed ? 'chevron-right' : 'chevron-left'" :size="18" />
      </button>
    </div>
  </nav>
</template>
