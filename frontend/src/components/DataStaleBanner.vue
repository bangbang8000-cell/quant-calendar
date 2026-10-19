<script>
// v6.4 (FR-6.4.5 / FR-6.4.2): 数据陈旧横幅 + 实时降级细条
// 背景: 全站数据停在 2026-07-16（95 天），页面没有任何提示；
//       而新鲜度面板反而显示 "fresh" —— 基准日期本身失效时体系自我通过。
// 本组件把"数据停在哪天、停了多少天"显性呈现在顶栏下方，日期与天数一律来自
// GET /api/reliability/freshness（不前端写死，避免口径不一致）。
import { ref, computed, onMounted, onUnmounted } from 'vue'
import AppIcon from './common/AppIcon.vue'

const DISMISS_KEY = 'qc.hideStaleBanner'
const RT_REASON_TEXT = {
  upstream_unreachable: '上游数据源不可达',
  non_trading_hours: '当前非交易时段',
}

export default {
  name: 'qc-data-stale-banner',
  components: { AppIcon },
  setup() {
    const dismissed = ref(false)
    const loaded = ref(false)
    const calendarStale = ref(false)
    const staleCount = ref(0)
    const expectedLatest = ref('')
    const expectedDays = ref(0)
    const expectedSource = ref('')
    const expanded = ref(false)

    // 实时报价降级（WS 侧），与"数据陈旧"是两件事，分开呈现
    const rtDegraded = ref(false)
    const rtReason = ref('')

    function authHeaders() {
      const t = localStorage.getItem('quant_token') || ''
      return t ? { 'Authorization': 'Bearer ' + t } : {}
    }

    async function loadFreshness() {
      if (!localStorage.getItem('quant_token')) return
      try {
        if (sessionStorage.getItem(DISMISS_KEY) === '1') dismissed.value = true
        const r = await fetch('/api/reliability/freshness', { headers: authHeaders() })
        const body = await r.json()
        const d = (body && body.data) || {}
        calendarStale.value = !!d.calendar_stale
        staleCount.value = Number(d.stale_count) || 0
        expectedLatest.value = d.expected_latest || ''
        expectedDays.value = Number(d.expected_age_days) || 0
        expectedSource.value = d.expected_source || ''
      } catch (e) {
        // 静默：横幅是辅助提示，取不到就不显示，不打断主流程
      } finally {
        loaded.value = true
      }
    }

    const showStale = computed(() => {
      if (!loaded.value || dismissed.value) return false
      return calendarStale.value || staleCount.value > 0
    })

    const staleText = computed(() => {
      if (expectedSource.value === 'weekday_fallback') {
        return '交易日历不可用，数据新鲜度无法判定'
      }
      if (calendarStale.value) {
        return '行情数据停在 ' + expectedLatest.value + '，已 ' + expectedDays.value + ' 天未更新'
      }
      return staleCount.value + ' 项数据资产已过期'
    })

    const staleDetail = computed(() => {
      if (!calendarStale.value) {
        return '期望最近交易日本身已滞后，页面上的「新鲜」判定不可信；请先恢复交易数据源。'
      }
      return '期望最近交易日为 ' + expectedLatest.value + '（' + expectedDays.value +
        ' 天前）。在该基准恢复前，交易类资产一律标记为「无法判定」，不再显示为新鲜。'
    })

    function dismiss() {
      dismissed.value = true
      try { sessionStorage.setItem(DISMISS_KEY, '1') } catch (e) {}
    }

    function gotoDataSource() {
      if (typeof window.__quantGoPage === 'function') {
        window.__quantGoPage('system', 'datasource')
      } else if (window.__quantState && window.__quantState.activateTab) {
        window.__quantState.activateTab('system', 'datasource')
      }
    }

    function onRealtime(evt) {
      const d = (evt && evt.detail) || {}
      rtReason.value = d.reason || ''
      rtDegraded.value = !!d.degraded || d.state === 'offline'
    }

    onMounted(() => {
      loadFreshness()
      window.addEventListener('qc:realtime', onRealtime)
    })
    onUnmounted(() => window.removeEventListener('qc:realtime', onRealtime))

    return {
      showStale, staleText, staleDetail, expanded, dismiss, gotoDataSource,
      rtDegraded, rtReason, RT_REASON_TEXT,
    }
  },
}
</script>

<template>
  <div v-if="showStale || rtDegraded" class="qc-stale-wrap">
    <!-- 数据陈旧横幅（可折叠、本次会话可关闭） -->
    <div v-if="showStale" class="qc-stale-banner" role="status">
      <AppIcon name="alert-triangle" :size="14" class="qc-stale-icon" />
      <button class="qc-stale-main" :aria-expanded="expanded ? 'true' : 'false'" @click="expanded = !expanded">
        <span class="qc-stale-text">{{ staleText }}</span>
        <span class="qc-stale-cta" @click.stop="gotoDataSource" role="link" tabindex="0"
          @keydown.enter.prevent="gotoDataSource">查看数据源状态 →</span>
      </button>
      <button class="qc-stale-close" aria-label="关闭数据陈旧提示" @click="dismiss">×</button>
      <div v-if="expanded" class="qc-stale-detail">{{ staleDetail }}</div>
    </div>

    <!-- 实时报价降级细条（WS 通道问题，与数据陈旧分开） -->
    <div v-if="rtDegraded" class="qc-rt-strip" role="status">
      <span class="qc-rt-dot" aria-hidden="true"></span>
      实时报价不可用<span v-if="RT_REASON_TEXT[rtReason]">（{{ RT_REASON_TEXT[rtReason] }}）</span>，当前显示为延迟数据
    </div>
  </div>
</template>
