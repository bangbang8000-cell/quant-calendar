<script>
// 6.4.1 (FR-642b): 结论页陈旧护栏 — 置灰条 + 卡片角标
// 数据日期/滞后天数/阈值一律来自 GET /api/reliability/stale-guard（后端 backend/freshness.py 单一来源），
// 前端不写死阈值；正常数据下不渲染任何占位元素（验收：正常态零残留）。
import { ref, onMounted, onUnmounted } from 'vue'

const CACHE_MS = 60 * 1000
let _cache = { at: 0, data: null }
let _inflight = null

async function fetchGuard(force) {
  const now = Date.now()
  if (!force && _cache.data && now - _cache.at < CACHE_MS) return _cache.data
  if (_inflight) return _inflight
  _inflight = (async () => {
    try {
      const t = localStorage.getItem('quant_token') || ''
      const r = await fetch('/api/reliability/stale-guard', {
        headers: t ? { Authorization: 'Bearer ' + t } : {},
      })
      const body = await r.json()
      const d = (body && body.data) || {}
      _cache = { at: Date.now(), data: d }
      return d
    } catch (e) {
      // 护栏是辅助提示：取不到就不提示，绝不阻断浏览（FR-642 第 5 条）
      return _cache.data || {}
    } finally {
      _inflight = null
    }
  })()
  return _inflight
}

export default {
  name: 'qc-page-stale-bar',
  props: { variant: { type: String, default: 'bar' } },
  setup(props) {
    const guard = ref({})
    const loaded = ref(false)

    function refresh() {
      return fetchGuard(true).then((d) => {
        guard.value = d || {}
        loaded.value = true
      })
    }

    function onRefreshEvent() { refresh() }

    onMounted(() => {
      fetchGuard(false).then((d) => {
        guard.value = d || {}
        loaded.value = true
      })
      window.addEventListener('qc:data-refreshed', onRefreshEvent)
    })
    onUnmounted(() => window.removeEventListener('qc:data-refreshed', onRefreshEvent))

    return { guard, loaded, variant: props.variant }
  },
}
</script>

<template>
  <!-- 置灰条：只在陈旧时出现，正常态零占位 -->
  <div v-if="variant === 'bar' && loaded && guard.stale" class="qc-page-stale-bar" role="status">
    <span class="qc-page-stale-bar-dot" aria-hidden="true"></span>
    <span class="qc-page-stale-bar-text">
      数据截至 {{ guard.latest_date || '未知' }}，已滞后 {{ Math.max(guard.lag_trading_days || 0, 0) }} 个交易日
      （阈值 {{ guard.threshold }}）
    </span>
    <span class="qc-page-stale-bar-hint">结论仅供参考，请先刷新数据</span>
  </div>
  <!-- 卡片角标：同上，仅陈旧时出现 -->
  <span v-else-if="variant === 'badge' && loaded && guard.stale" class="qc-stale-badge"
    :title="guard.message || ''">数据截至 {{ guard.latest_date || '未知' }}</span>
</template>
