<script>
// V6.0 (PRD-6.0 FR-6.0.4): 移动端导航 SFC — 底部 TabBar + 抽屉
// 断点: <768px 显示 TabBar; 抽屉由 Header 汉堡按钮触发 (qc:drawer 事件)
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from './common/AppIcon.vue'

// 桌面一级 → 移动 Tab 映射
// 6.5.4 (FR-654): 一级摊平为 7 个业务域 — 底栏 7 项 (flex 均分, 375px 下每项 53px, 短标签可容纳)
const TABS = [
  { key: 'strategies', label: '策略概览', icon: 'pie-chart' },
  { key: 'calendar', label: '日历', icon: 'calendar' },
  { key: 'shortterm', label: '复盘', icon: 'trending-up' },
  { key: 'ai', label: '评估', icon: 'bot' },
  { key: 'research', label: '研究', icon: 'flask-conical' },
  { key: 'ops', label: '监控', icon: 'activity' },
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
    // V6.1 (PRD-6.1 F1): 抽屉内二级展开状态 (key -> bool)
    const drawerExpanded = ref({})

    const menus = computed(() => (state.menus && state.menus.value) || [])
    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const GROUP_LABELS = { research: '量化投研', platform: '平台管理' }
    const GROUPS = ['research', 'platform']

    // V6.1: 二级可达 — 一级项展开/收起二级子页 (6.5.0: 二级 = members 成员)
    function hasSub(menu) { return Array.isArray(menu.members) && menu.members.length > 0 }
    function toggleDrawerMenu(menu) {
      if (!hasSub(menu)) return
      drawerExpanded.value[menu.key] = !drawerExpanded.value[menu.key]
    }
    // 6.5.0 (FR-653): 成员激活按内部旧坐标比较; 显示名经 core 兜底
    function isDrawerMemberActive(member) {
      return currentPage.value === member.page && state.currentSubPage && state.currentSubPage.value === member.sub
    }
    function memberLabel(member) {
      const NC = window.QuantNavMerge
      if (NC) return NC.memberLabel(member, state.t)
      return (state.subPageNames && state.subPageNames[member.sub]) || member.sub
    }
    function subLabel(sp) { return (state.subPageNames && state.subPageNames[sp]) || sp }

    async function goTab(tab) {
      const menu = menus.value.find((m) => m.key === tab.key)
      // 6.5.2 (FR-653): 首成员旧坐标直达 (subPages 已成员键化, 不可再当 sub 用)
      const m0 = menu && menu.members && menu.members[0]
      const sp = m0 ? m0.sub : ((menu && menu.subPages && menu.subPages[0]) || '')
      const targetPage = m0 ? m0.page : tab.key
      if (window.__quantGoPage) await window.__quantGoPage(targetPage, sp)
      else { state.currentPage.value = targetPage; if (state.currentSubPage) state.currentSubPage.value = sp }
      if (state.navigateTo) state.navigateTo(targetPage, sp)
    }
    function goMenu(menu, sp) {
      drawerOpen.value = false
      const m = (menu.members || []).find((mm) => mm.key === sp || mm.sub === sp)
      const target = m ? { page: m.page, sub: m.sub } : { page: menu.key, sub: sp }
      if (window.__quantGoPage) window.__quantGoPage(target.page, target.sub)
      else { state.currentPage.value = target.page; if (state.currentSubPage) state.currentSubPage.value = target.sub }
      if (state.navigateTo) state.navigateTo(target.page, target.sub)
    }
    function openDrawer() {
      drawerOpen.value = true
      // 6.5.4: 抽屉内默认展开首个业务域 (策略总览)
      if (drawerExpanded.value['strategies'] === undefined) drawerExpanded.value['strategies'] = true
    }
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
      state, TABS, menus, currentPage, drawerOpen, drawerFocusRef, drawerExpanded,
      GROUP_LABELS, GROUPS,
      hasSub, toggleDrawerMenu, isDrawerMemberActive, subLabel, memberLabel,
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
          <!-- V6.1 (PRD-6.1 F6): 还原彩色 K 线 Logo — 与桌面/登录页一致 -->
          <svg class="qc-logo-mark" viewBox="0 0 100 100" width="26" height="26" aria-label="量化日历 logo">
            <rect width="100" height="100" rx="20" fill="var(--logo-bg)"/>
            <rect x="2" y="2" width="96" height="96" rx="18" fill="none" stroke="var(--logo-border)" stroke-width="3" opacity="0.85"/>
            <line x1="20" y1="78" x2="82" y2="78" stroke="var(--logo-border)" stroke-width="3.5" stroke-linecap="round" opacity="0.55"/>
            <rect x="22" y="58" width="15" height="20" rx="3.5" fill="var(--logo-blue)" opacity="0.95"/>
            <rect x="42.5" y="42" width="15" height="36" rx="3.5" fill="var(--logo-yellow)" opacity="0.95"/>
            <rect x="63" y="26" width="15" height="52" rx="3.5" fill="var(--logo-red)"/>
            <rect x="63" y="26" width="15" height="14" rx="3.5" fill="var(--logo-white)" opacity="0.35"/>
            <path d="M24 70 L42 56 L58 46 L74 34" fill="none" stroke="var(--logo-border)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" opacity="0.5"/>
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
            <div
              v-for="menu in menus.filter((m) => m.group === group)" :key="menu.key"
              class="qc-drawer-menu"
            >
              <div class="qc-drawer-menu-row" :class="{ 'is-active': currentPage === menu.key }">
                <!-- V6.1: 一级项 — 有二级时展开/收起, 无二级直接跳转 -->
                <a
                  class="qc-sidebar-item" :class="{ 'is-active': currentPage === menu.key }"
                  :href="'#' + menu.key"
                  :aria-current="currentPage === menu.key ? 'page' : null"
                  @click.prevent="hasSub(menu) ? toggleDrawerMenu(menu) : goMenu(menu)"
                >
                  <AppIcon :name="menu.iconName || ''" :size="18" />
                  <span class="qc-sidebar-label">{{ menu.name }}</span>
                </a>
                <button
                  v-if="hasSub(menu)"
                  class="qc-sidebar-chevron" :class="{ 'is-open': drawerExpanded[menu.key] }"
                  :aria-expanded="!!drawerExpanded[menu.key]" aria-label="展开子菜单"
                  @click="toggleDrawerMenu(menu)"
                >
                  <AppIcon name="chevron-down" :size="14" />
                </button>
              </div>
              <!-- 6.5.0 (FR-653): 抽屉内二级 = members 成员 (href 新格式 #primary/memberKey) -->
              <div v-if="drawerExpanded[menu.key]" class="qc-drawer-children">
                <a
                  v-for="member in menu.members" :key="member.key"
                  class="qc-subnav-item" :class="{ 'is-active': isDrawerMemberActive(member) }"
                  :href="'#' + menu.key + '/' + member.key"
                  @click.prevent="goMenu(menu, member.key)"
                >
                  <span>{{ memberLabel(member) }}</span>
                </a>
              </div>
            </div>
          </div>
        </template>
      </div>
      <div class="qc-drawer-footer">
        <!-- V6.1 (PRD-6.1 F5): 明/暗模式快捷切换 -->
        <button class="qc-icon-btn" :title="state.currentTheme?.value === 'dark' ? '切换亮色主题' : '切换暗色主题'" @click="state.changeThemeMode && state.changeThemeMode(state.currentTheme?.value === 'dark' ? 'light' : 'dark')">
          <AppIcon :name="state.currentTheme?.value === 'dark' ? 'sun' : 'moon'" :size="18" />
        </button>
        <button class="qc-icon-btn" title="退出登录" @click="state.handleLogout && state.handleLogout()">
          <AppIcon name="log-out" :size="18" />
        </button>
      </div>
    </div>
  </Teleport>
</template>
