<script>
// V6.3 (PRD-6.3 F4 / DEV-PLAN M3.1): toptab 形态 — Header 顶部二级横向标签
// 读当前一级页 subPages 横排渲染, 点击走 openTab (与 Ctrl+Tab / hash 深链天然兼容)
// 不可关闭、无右键、无拖拽 (定位职责: 二级 tab 承担页签)
// V5.15 (F6): 溢出优化 — 标签过多时提供 左右滚动按钮 + 「更多▾」下拉 (被裁切标签可达)
import { inject, computed, ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue'
import AppIcon from './common/AppIcon.vue'

// 二级菜单语义图标 — 双层映射 (与 SubNav.vue SUB_ICONS 保持一致, 修改需同步)
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
  // V5.24: 系统状态 / 系统配置 二级图标 (原先缺映射 → 全部回退 circle-dot, 看起来一模一样)
  'ops': {
    'status': 'activity', 'health': 'gauge', 'schedule': 'clock', 'usage': 'bar-chart-3',
    'guard': 'shield', 'datadict': 'book-open', 'execution': 'clipboard-list',
  },
  'system': {
    'config': 'save', 'feature': 'sliders-horizontal', 'autoeval': 'bot', 'datasource': 'database',
    'user': 'users', 'notification': 'bell', 'about': 'info',
  },
}

const STEP = 200 // 步进滚动像素

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

    // V5.15 (F6): 溢出检测与滚动
    const scrollRef = ref(null)
    const hasOverflow = ref(false)
    const canScrollLeft = ref(false)
    const canScrollRight = ref(false)
    // v6.4 (FR-6.4.3): hiddenTabs 依赖 DOM 度量，用自增 tick 触发重算
    const measureTick = ref(0)
    let ro = null
    let resizeTimer = null
    let rafId = 0

    function updateScrollState() {
      const el = scrollRef.value
      if (!el) return
      canScrollLeft.value = el.scrollLeft > 2
      canScrollRight.value = el.scrollLeft < el.scrollWidth - el.clientWidth - 2
    }
    function updateOverflow() {
      const el = scrollRef.value
      if (!el) {
        // v6.4: 容器尚未渲染（首屏落在无子页签的一级页）— 先归零，等 tabs 变化后重算
        hasOverflow.value = false
        canScrollLeft.value = false
        canScrollRight.value = false
        return
      }
      hasOverflow.value = el.scrollWidth > el.clientWidth + 2
      updateScrollState()
      measureTick.value++
    }
    // v6.4 (FR-6.4.3): tabs 渲染完成后重算 + 补挂观察器。
    // 旧实现只在 onMounted / ResizeObserver / window.resize 时算，而首屏「策略总览」
    // 不渲染页签条 → scrollRef 为 null → 既跳过计算也没观察器，之后切页永不重算。
    function scheduleOverflow() {
      nextTick(() => {
        if (rafId) cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(() => {
          rafId = 0
          updateOverflow()
          ensureObserver()
        })
      })
    }
    function ensureObserver() {
      if (!ro) {
        ro = new ResizeObserver(() => {
          clearTimeout(resizeTimer)
          resizeTimer = setTimeout(updateOverflow, 100)
        })
      }
      if (scrollRef.value && !ro.__qcObserved) {
        ro.observe(scrollRef.value)
        ro.__qcObserved = true
      }
    }
    function scrollByStep(dir) {
      const el = scrollRef.value
      if (!el) return
      el.scrollBy({ left: dir * STEP, behavior: 'smooth' })
    }
    function go(sp) {
      if (state.openTab) state.openTab(currentPage.value, sp)
      else if (state.currentSubPage) state.currentSubPage.value = sp
    }
    // 「更多」下拉选择后: 导航 + 滚动到可见
    function scrollToTab(key) {
      go(key)
      nextTick(() => {
        const el = scrollRef.value
        if (!el) return
        const target = el.querySelector('[data-tab-key="' + key + '"]')
        if (target) target.scrollIntoView({ block: 'nearest', inline: 'nearest' })
      })
    }
    // 被裁切标签 (容器右缘之外的主体标签)
    const hiddenTabs = computed(() => {
      measureTick.value // v6.4: 显式依赖 DOM 度量结果
      if (!hasOverflow.value) return []
      const el = scrollRef.value
      if (!el) return []
      const rect = el.getBoundingClientRect()
      const visibleKeys = new Set()
      el.querySelectorAll('.qc-top-tab').forEach((node) => {
        const r = node.getBoundingClientRect()
        if (r.left >= rect.left - 2 && r.left < rect.right - 24) visibleKeys.add(node.getAttribute('data-tab-key'))
      })
      return tabs.value.filter((t) => !visibleKeys.has(t.key))
    })
    // 键盘 ←/→ 滚动标签条
    function onTabKeydown(e, tab) {
      if (e.key === 'ArrowLeft') { e.preventDefault(); scrollByStep(-1) }
      else if (e.key === 'ArrowRight') { e.preventDefault(); scrollByStep(1) }
      else if (e.key === 'Home') { e.preventDefault(); scrollByStep(-999) }
      else if (e.key === 'End') { e.preventDefault(); scrollByStep(999) }
      else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(tab.key) }
    }

    // v6.4 (FR-6.4.3): 页签集合或激活项变化即重算（不再依赖手动 resize）。
    // flush:'post' 保证 DOM 已按新 tabs 渲染。
    watch([tabs, currentSubPage], () => scheduleOverflow(), { flush: 'post', deep: false })

    onMounted(() => {
      updateOverflow()
      ensureObserver()
      window.addEventListener('resize', updateOverflow)
      // 首屏可能异步注入 menus，挂载后再补一次
      scheduleOverflow()
    })
    onBeforeUnmount(() => {
      if (ro) ro.disconnect()
      window.removeEventListener('resize', updateOverflow)
      clearTimeout(resizeTimer)
      if (rafId) cancelAnimationFrame(rafId)
    })

    return {
      state, tabs, currentSubPage, go,
      scrollRef, hasOverflow, canScrollLeft, canScrollRight,
      scrollByStep, scrollToTab, hiddenTabs, onTabKeydown, updateScrollState,
    }
  },
}
</script>

<template>
  <div v-if="tabs.length" class="qc-top-tabs-bar" role="tablist" aria-label="二级页面">
    <button v-if="hasOverflow" class="qc-top-tabs-btn" :disabled="!canScrollLeft"
      aria-label="向左滚动" @click="scrollByStep(-1)">‹</button>
    <div ref="scrollRef" class="qc-header-tabs qc-top-tabs-scroll" :class="{ 'has-overflow': hasOverflow }" @scroll.passive="updateScrollState">
      <div
        v-for="tab in tabs" :key="tab.key" :data-tab-key="tab.key"
        class="qc-top-tab" :class="{ 'is-active': currentSubPage === tab.key }"
        role="tab" tabindex="0"
        :aria-selected="currentSubPage === tab.key ? 'true' : 'false'"
        :title="tab.label"
        @click="go(tab.key)"
        @keydown="onTabKeydown($event, tab)"
      >
        <AppIcon :name="tab.icon" :size="14" />
        <span class="qc-top-tab-label">{{ tab.label }}</span>
      </div>
    </div>
    <button v-if="hasOverflow" class="qc-top-tabs-btn" :disabled="!canScrollRight"
      aria-label="向右滚动" @click="scrollByStep(1)">›</button>
    <el-dropdown v-if="hasOverflow && hiddenTabs.length" class="qc-top-tabs-more"
      trigger="click" @command="scrollToTab">
      <button class="qc-top-tabs-btn qc-top-tabs-more-btn" aria-label="更多页面">更多 ▾</button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="t in hiddenTabs" :key="t.key" :command="t.key"
            :class="{ 'is-active': currentSubPage === t.key }">
            <AppIcon :name="t.icon" :size="14" /> {{ t.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
