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
    // V6.3 (PRD-6.3 F4): 导航形态 — 侧栏树状二级仅 tree 形态渲染 (subnav/toptab 隐藏树枝)
    const navMode = computed(() => (state.navMode && state.navMode.value) || 'subnav')
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
      state, menus, currentPage, navMode, sidebarCollapsed, expandedMenus,
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
      <!-- V6.1 (PRD-6.1 F6): 还原彩色 K 线 Logo — 与登录页一致, 固定品牌色不随主题变化 -->
      <svg class="qc-logo-mark" viewBox="0 0 100 100" width="32" height="32" aria-label="量化日历 logo">
        <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
        <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
        <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
        <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
        <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
        <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
        <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
        <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
      </svg>
      <span v-if="!sidebarCollapsed" class="qc-logo-text">{{ state.t('login.title') }}</span>
    </div>

    <!-- 菜单区 -->
    <div class="qc-sidebar-nav">
      <template v-for="group in GROUPS" :key="group">
        <div v-if="menus.some((m) => m.group === group)" class="qc-nav-group">
          <span v-if="!sidebarCollapsed" class="qc-nav-group-label">{{ GROUP_LABELS[group] }}</span>
          <template v-for="menu in menus.filter((m) => m.group === group)" :key="menu.key">
            <!-- 一级项 (V6.0.1 P0-2: link 与 chevron 兄弟, 消除 button 嵌套 a 无效 HTML)
                 P1-5: 折叠态 Tooltip 改用 el-tooltip (placement right, 300ms 延迟) -->
            <div
              class="qc-sidebar-item"
              :class="{
                // V6.3 (PRD-6.3 F4): 树枝标识仅 tree 形态生效
                'has-children': navMode === 'tree' && hasChildren(menu),
                'is-child-open': navMode === 'tree' && expandedMenus[menu.key],
              }"
            >
              <el-tooltip
                :content="menu.name"
                placement="right"
                :show-after="300"
                :disabled="!sidebarCollapsed"
              >
                <a
                  class="qc-sidebar-link"
                  :class="{ 'is-active': isActive(menu) }"
                  :href="'#' + menu.key"
                  :aria-current="isActive(menu) ? 'page' : null"
                  @click.prevent="navigate(menu)"
                >
                  <AppIcon :name="menu.iconName || ''" :size="18" class="qc-sidebar-icon" />
                  <span v-if="!sidebarCollapsed" class="qc-sidebar-label">{{ menu.name }}</span>
                  <span v-if="!sidebarCollapsed && menu.badge" class="qc-nav-badge">{{ menu.badge }}</span>
                </a>
              </el-tooltip>
              <button
                v-if="!sidebarCollapsed && navMode === 'tree' && hasChildren(menu)"
                class="qc-sidebar-chevron"
                :class="{ 'is-open': expandedMenus[menu.key] }"
                :aria-expanded="!!expandedMenus[menu.key]"
                :aria-controls="'submenu-' + menu.key"
                aria-label="展开子菜单"
                @click="toggleSubmenu(menu)"
              >
                <AppIcon name="chevron-down" :size="14" />
              </button>
            </div>
            <!-- 子菜单 (展开态) — V6.3 (PRD-6.3 F4): 树状二级仅 tree 形态渲染 -->
            <div
              v-if="!sidebarCollapsed && navMode === 'tree' && hasChildren(menu) && expandedMenus[menu.key]"
              class="qc-sidebar-children"
              :id="'submenu-' + menu.key"
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
