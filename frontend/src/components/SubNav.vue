<script>
// V6.0 (PRD-6.0 FR-6.0.3): 页面级二级导航 SFC — 双形态
// - top-tab  (strategies/calendar/ai/shortterm): 顶部 Tab
// - left-subnav (research/system): 左侧子导航 (system 含 4 组三级)
// 页面内容经默认 slot 渲染 (left-subnav 模式下内容在右侧)
// 对象字面量导出, 注册由 main.js 完成
import { inject, ref, computed } from 'vue'
import AppIcon from './common/AppIcon.vue'

const TOP_TAB_PAGES = ['strategies', 'calendar', 'ai', 'shortterm']

// 系统配置左侧子导航分组 (PRD 1.2.3)
// 叶节点映射现有 subPage: health/schedule→status, guard→autoeval (anchor 供页内滚动)
const SYSTEM_GROUPS = [
  { label: '运行监控', items: [
    { key: 'status', label: '系统状态', icon: 'activity' },
    { key: 'status', label: '数据源健康', icon: 'database', anchor: 'health' },
    { key: 'status', label: '调度任务', icon: 'clock', anchor: 'schedule' },
  ]},
  { label: '智能服务', items: [
    { key: 'autoeval', label: '自动评估', icon: 'bot' },
    { key: 'usage', label: 'AI 用量', icon: 'bar-chart-3' },
    { key: 'autoeval', label: 'AI 事实护栏', icon: 'shield', anchor: 'guard' },
  ]},
  { label: '平台设置', items: [
    { key: 'datasource', label: '数据源', icon: 'hard-drive' },
    { key: 'feature', label: '功能配置', icon: 'sliders-horizontal' },
    { key: 'datadict', label: '数据字典', icon: 'file-text' },
  ]},
  { label: '组织管理', items: [
    { key: 'user', label: '用户与权限', icon: 'users' },
    { key: 'execution', label: '执行看板', icon: 'cpu' },
    { key: 'about', label: '关于', icon: 'info' },
  ]},
]

export default {
  name: 'qc-subnav',
  components: { AppIcon },
  setup(props, { slots }) {
    const state = inject('qcState')
    if (!state) return { slots, mode: 'top-tab' }

    const currentPage = computed(() => (state.currentPage && state.currentPage.value) || '')
    const currentSubPage = computed(() => (state.currentSubPage && state.currentSubPage.value) || '')
    const mode = computed(() => TOP_TAB_PAGES.includes(currentPage.value) ? 'top-tab' : 'left-subnav')
    const collapsedGroups = ref({})

    const menus = computed(() => (state.menus && state.menus.value) || [])
    const currentMenu = computed(() => menus.value.find((m) => m.key === currentPage.value) || null)
    const subPages = computed(() => (currentMenu.value && currentMenu.value.subPages) || [])

    const pageTitle = computed(() => {
      const n = state.currentPageName && state.currentPageName.value
      return n || currentPage.value
    })
    const subLabel = (sp) => (state.subPageNames && state.subPageNames[sp]) || sp
    const isSubActive = (sp) => currentSubPage.value === sp

    function goSub(sp) {
      if (state.currentSubPage) state.currentSubPage.value = sp
      try { localStorage.setItem('quant_last_subpage', sp) } catch (e) {}
    }
    function goSystemItem(item) {
      if (state.currentSubPage) state.currentSubPage.value = item.key
      try { localStorage.setItem('quant_last_subpage', item.key) } catch (e) {}
      if (item.anchor) {
        // 页内锚点滚动 (数据源健康/调度任务/AI护栏为页内区块)
        requestAnimationFrame(() => {
          const el = document.getElementById(item.anchor)
          if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        })
      }
    }
    function toggleGroup(label) { collapsedGroups.value[label] = !collapsedGroups.value[label] }

    // 日历页操作区 (从 global-header 迁移): 日期选择 + 刷新 + 导出
    const isCalendar = computed(() => currentPage.value === 'calendar')
    const calType = computed(() => {
      const map = { daily: 'date', weekly: 'week', monthly: 'month', yearly: 'year' }
      return map[currentSubPage.value] || 'date'
    })
    // v-model 需可赋值变量 (可选链不可直接赋值)
    const selectedDate = computed({
      get: () => (state.selectedDate && state.selectedDate.value) || '',
      set: (v) => { if (state.selectedDate) state.selectedDate.value = v },
    })

    // 策略研究左侧子导航图标
    const SUB_ICONS = {
      'research-overview': 'search-check', 'quant-research': 'line-chart',
      'strategy-write': 'layers', 'custom-write': 'sparkles',
      'backtest': 'play', 'backtest-history': 'history',
    }
    const subIcon = (sp) => SUB_ICONS[sp] || 'circle-dot'

    return {
      state, slots, mode, currentPage, currentSubPage, subPages, currentMenu,
      collapsedGroups, pageTitle, subLabel, isSubActive,
      goSub, goSystemItem, toggleGroup, SYSTEM_GROUPS,
      isCalendar, calType, subIcon, selectedDate,
    }
  },
}
</script>

<template>
  <!-- 顶部 Tab 式 -->
  <div v-if="mode === 'top-tab'" class="qc-subnav qc-subnav-top">
    <div class="qc-page-title-row">
      <h1 class="qc-page-title">{{ pageTitle }}</h1>
      <div v-if="isCalendar" class="qc-page-actions">
        <el-date-picker
          v-if="calType === 'date'" v-model="selectedDate" type="date"
          format="YYYY-MM-DD" value-format="YYYY-MM-DD" :placeholder="state.t('calendar.selectDate')"
          :disabled-date="state.disabledDate" size="small" @change="state.onDateChange"
        ></el-date-picker>
        <el-date-picker
          v-else-if="calType === 'week'" v-model="selectedDate" type="week"
          format="YYYY 第w周" value-format="YYYY-MM-DD" :placeholder="state.t('calendar.selectWeek')"
          :disabled-date="state.disabledDate" size="small" @change="state.onDateChange"
        ></el-date-picker>
        <el-date-picker
          v-else-if="calType === 'month'" v-model="selectedDate" type="month"
          format="YYYY-MM" value-format="YYYY-MM-DD" :placeholder="state.t('calendar.selectMonth')"
          :disabled-date="state.disabledDate" size="small" @change="state.onDateChange"
        ></el-date-picker>
        <el-date-picker
          v-else v-model="selectedDate" type="year"
          format="YYYY" value-format="YYYY-MM-DD" :placeholder="state.t('calendar.selectYear')"
          :disabled-date="state.disabledDate" size="small" @change="state.onDateChange"
        ></el-date-picker>
        <el-button class="ml-8px" size="small" :loading="state.loading?.value" :title="state.t('calendar.refreshData')" @click="state.refreshCalendarData">
          <AppIcon name="refresh" :size="14" /> {{ state.t('common.refresh') }}
        </el-button>
        <el-button class="ml-4px" size="small" :title="state.t('calendar.exportCsv')" @click="state.exportCSV">
          <AppIcon name="download" :size="14" /> {{ state.t('common.export') }}
        </el-button>
        <span class="qc-subnav-lastload" v-if="state.lastLoadTime?.value">{{ state.lastLoadTime.value }}</span>
      </div>
    </div>
    <div class="qc-subnav-tabs" role="tablist">
      <button
        v-for="sp in subPages" :key="sp"
        class="qc-subnav-tab" :class="{ 'is-active': isSubActive(sp) }"
        role="tab" :aria-selected="isSubActive(sp) ? 'true' : 'false'"
        @click="goSub(sp)"
      >
        {{ subLabel(sp) }}
      </button>
    </div>
    <div class="qc-subnav-body">
      <slot />
    </div>
  </div>

  <!-- 左侧子导航式 -->
  <div v-else class="qc-subnav qc-subnav-left">
    <div class="qc-subnav-left-nav">
      <!-- 系统配置: 分组三级 -->
      <template v-if="currentPage === 'system'">
        <div v-for="group in SYSTEM_GROUPS" :key="group.label" class="qc-subnav-group">
          <div class="qc-subnav-group-label" @click="toggleGroup(group.label)">
            <span>{{ group.label }}</span>
            <AppIcon name="chevron-down" :size="12" :class="{ 'is-open': !collapsedGroups[group.label] }" />
          </div>
          <template v-if="!collapsedGroups[group.label]">
            <a
              v-for="item in group.items" :key="item.label"
              class="qc-subnav-item" :class="{ 'is-active': isSubActive(item.key) }"
              :href="'#' + item.key"
              @click.prevent="goSystemItem(item)"
            >
              <AppIcon :name="item.icon" :size="16" />
              <span>{{ item.label }}</span>
            </a>
          </template>
        </div>
      </template>
      <!-- 策略研究: 平铺二级 -->
      <template v-else>
        <a
          v-for="sp in subPages" :key="sp"
          class="qc-subnav-item" :class="{ 'is-active': isSubActive(sp) }"
          :href="'#' + sp"
          @click.prevent="goSub(sp)"
        >
          <AppIcon :name="subIcon(sp)" :size="16" />
          <span>{{ subLabel(sp) }}</span>
        </a>
      </template>
    </div>
    <div class="qc-subnav-left-content">
      <div class="qc-page-title-row">
        <h1 class="qc-page-title">{{ pageTitle }}</h1>
      </div>
      <slot />
    </div>
  </div>
</template>
