<script>
// V6.0 (PRD-6.0 FR-6.0.4): 移动端导航 SFC — 底部 TabBar + 抽屉
// 断点: <768px 显示 TabBar; 抽屉由 Header 汉堡按钮触发 (qc:drawer 事件)
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from './common/AppIcon.vue'

// 桌面一级 → 移动 Tab 映射 (PRD 1.2.1 / FR-6.0.4)
// V6.0 (P1-4): 末位 Tab 语义修正 — 「我的」→「设置」, 图标 user → settings
const TABS = [
  { key: 'strategies', label: '首页', icon: 'home' },
  { key: 'calendar', label: '日历', icon: 'calendar' },
  { key: 'ai', label: 'AI', icon: 'bot' },
  { key: 'research', label: '研究', icon: 'flask-conical' },
  { key: 'system', label: '设置', icon: 'settings' },
]

export default {
  name: 'qc-mobile-nav',
  components: { AppIcon },
  setup() {
    const state = inject('qcState')
    if (!state) return {}
    const drawerOpen = ref(false)
    const drawerFocusRef = ref(null)

    const menus = computed(() => (state.menus && state.menus.value) || [])
    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const GROUP_LABELS = { research: '量化投研', platform: '平台管理' }
    const GROUPS = ['research', 'platform']

    async function goTab(tab) {
      const menu = menus.value.find((m) => m.key === tab.key)
      const sp = (menu && menu.subPages && menu.subPages[0]) || ''
      if (window.__quantGoPage) await window.__quantGoPage(tab.key, sp)
      else { state.currentPage.value = tab.key; if (state.currentSubPage) state.currentSubPage.value = sp }
      if (state.navigateTo) state.navigateTo(tab.key, sp)
    }
    function goMenu(menu, sp) {
      drawerOpen.value = false
      const s = sp || (menu.subPages && menu.subPages[0]) || ''
      if (window.__quantGoPage) window.__quantGoPage(menu.key, s)
      else { state.currentPage.value = menu.key; if (state.currentSubPage) state.currentSubPage.value = s }
      if (state.navigateTo) state.navigateTo(menu.key, s)
    }
    function openDrawer() { drawerOpen.value = true }
    function closeDrawer() {
      drawerOpen.value = false
      // 焦点回到触发按钮
      const trig = document.querySelector('.qc-header .qc-icon-btn')
      if (trig) trig.focus()
    }
    function onDrawerEvent(e) { if (e.detail && e.detail.open) openDrawer() }
    function onKeydown(e) {
      if (drawerOpen.value && e.key === 'Escape') closeDrawer()
    }

    onMounted(() => {
      window.addEventListener('qc:drawer', onDrawerEvent)
      document.addEventListener('keydown', onKeydown)
    })
    onUnmounted(() => {
      window.removeEventListener('qc:drawer', onDrawerEvent)
      document.removeEventListener('keydown', onKeydown)
    })

    return {
      state, TABS, menus, currentPage, drawerOpen, drawerFocusRef,
      GROUP_LABELS, GROUPS,
      goTab, goMenu, openDrawer, closeDrawer,
    }
  },
}
</script>

<template>
  <!-- 底部 TabBar -->
  <nav class="qc-mobile-nav" aria-label="移动端底部导航">
    <button
      v-for="tab in TABS" :key="tab.key"
      class="qc-mobile-tab" :class="{ 'is-active': currentPage === tab.key }"
      :aria-current="currentPage === tab.key ? 'page' : null"
      @click="goTab(tab)"
    >
      <AppIcon :name="tab.icon" :size="22" />
      <span>{{ tab.label }}</span>
    </button>
  </nav>

  <!-- 抽屉 -->
  <Teleport to="body">
    <div v-if="drawerOpen" class="qc-drawer-backdrop" @click="closeDrawer"></div>
    <div v-if="drawerOpen" class="qc-drawer" role="dialog" aria-modal="true" aria-label="导航抽屉">
      <div class="qc-drawer-header">
        <div class="qc-drawer-brand">
          <svg class="qc-logo-mark" viewBox="0 0 24 24" width="26" height="26" fill="none" aria-hidden="true">
            <!-- P2-7: 单主色 var(--qc-primary-600) + opacity 表现 K 线高低 (handover 4.1) -->
            <rect x="4" y="7" width="4" height="10" rx="1" fill="var(--qc-primary-600)"/>
            <line x1="6" y1="4" x2="6" y2="20" stroke="var(--qc-primary-600)" stroke-width="1" opacity="0.5"/>
            <rect x="10" y="11" width="4" height="6" rx="1" fill="var(--qc-primary-600)" opacity="0.7"/>
            <line x1="12" y1="5" x2="12" y2="19" stroke="var(--qc-primary-600)" stroke-width="1" opacity="0.5"/>
            <rect x="16" y="4" width="4" height="13" rx="1" fill="var(--qc-primary-600)" opacity="0.85"/>
            <line x1="18" y1="3" x2="18" y2="21" stroke="var(--qc-primary-600)" stroke-width="1" opacity="0.5"/>
          </svg>
          <span>{{ state.t('login.title') }}</span>
        </div>
        <button class="qc-drawer-close" aria-label="关闭抽屉" @click="closeDrawer">
          <AppIcon name="x" :size="18" />
        </button>
      </div>
      <div class="qc-drawer-body">
        <template v-for="group in GROUPS" :key="group">
          <div v-if="menus.some((m) => m.group === group)">
            <div class="qc-nav-group-label">{{ GROUP_LABELS[group] }}</div>
            <a
              v-for="menu in menus.filter((m) => m.group === group)" :key="menu.key"
              class="qc-sidebar-item" :class="{ 'is-active': currentPage === menu.key }"
              :href="'#' + menu.key"
              :aria-current="currentPage === menu.key ? 'page' : null"
              @click.prevent="goMenu(menu)"
            >
              <AppIcon :name="menu.iconName || ''" :size="18" />
              <span class="qc-sidebar-label">{{ menu.name }}</span>
            </a>
          </div>
        </template>
      </div>
      <div class="qc-drawer-footer">
        <button class="qc-icon-btn" :title="state.currentTheme?.value === 'dark-pro' ? '切换亮色主题' : '切换暗色主题'" @click="state.changeTheme && state.changeTheme(state.currentTheme?.value === 'dark-pro' ? 'gold' : 'dark-pro')">
          <AppIcon :name="state.currentTheme?.value === 'dark-pro' ? 'sun' : 'moon'" :size="18" />
        </button>
        <button class="qc-icon-btn" title="退出登录" @click="state.handleLogout && state.handleLogout()">
          <AppIcon name="log-out" :size="18" />
        </button>
      </div>
    </div>
  </Teleport>
</template>
