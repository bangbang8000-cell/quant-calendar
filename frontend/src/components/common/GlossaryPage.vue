<script setup>
// 6.1.1 (A1): 量化术语表页 — 分类筛选 + 本地搜索 (数据来自 /api/meta/glossary)
import { ref, computed, onMounted } from 'vue'

const items = ref([])
const categories = ref([])
const activeCat = ref('all')
const keyword = ref('')
const loading = ref(true)
const loadError = ref('')

async function load() {
  loading.value = true
  loadError.value = ''
  try {
    const r = await fetch('/api/meta/glossary')
    const d = await r.json()
    if (d && d.success) {
      items.value = d.items || []
      categories.value = d.categories || []
    } else {
      loadError.value = '术语数据加载失败'
    }
  } catch (e) {
    loadError.value = '术语数据加载失败，请刷新重试'
  } finally {
    loading.value = false
  }
}
onMounted(load)
const reload = () => load()

const filtered = computed(() => {
  let list = items.value
  if (activeCat.value !== 'all') {
    list = list.filter((i) => i.category === activeCat.value)
  }
  const kw = (keyword.value || '').trim().toLowerCase()
  if (kw) {
    list = list.filter((i) =>
      (i.term || '').toLowerCase().includes(kw) ||
      (i.definition || '').toLowerCase().includes(kw)
    )
  }
  return list
})

const CAT_ORDER = ['宏观', '策略', '因子', '技术', '短线', '数据源', '产品']
</script>

<template>
  <div class="card qc-glossary-page">
    <div class="card-title flex-between">
      <span>{{ t('glossary.title') }}</span>
      <el-input
        v-model="keyword"
        class="qc-glossary-search"
        :placeholder="t('glossary.search')"
        clearable
        size="small"
      >
        <template #prefix><qc-icon name="search" :size="14" /></template>
      </el-input>
    </div>
    <div class="qc-glossary-tabs" role="tablist">
      <span
        v-for="cat in ['all'].concat(CAT_ORDER)"
        :key="cat"
        class="qc-glossary-tab"
        :class="{ 'is-active': activeCat === cat }"
        role="tab"
        @click="activeCat = cat"
      >{{ cat === 'all' ? t('glossary.title') : t('glossary.cat.' + cat) }}</span>
    </div>
    <div v-if="loading" class="qc-glossary-loading">{{ t('common.loading') }}</div>
    <div v-else-if="loadError" class="qc-glossary-empty qc-glossary-error">
      <qc-icon name="alert-triangle" :size="14" /> {{ loadError }}
      <el-button size="small" text type="primary" @click="reload">重试</el-button>
    </div>
    <div v-else-if="!filtered.length" class="qc-glossary-empty">{{ t('glossary.empty') }}</div>
    <div v-else class="qc-glossary-list">
      <div v-for="g in filtered" :key="g.key" class="qc-glossary-item">
        <div class="qc-glossary-item-head">
          <span class="qc-glossary-term">{{ t('glossary.term.' + g.key) }}</span>
          <span class="qc-glossary-cat">{{ t('glossary.cat.' + g.category) }}</span>
        </div>
        <div class="qc-glossary-item-def">{{ g.definition }}</div>
        <div class="qc-glossary-item-calc">
          <span class="qc-glossary-label">{{ t('glossary.calc') }}:</span>
          <span>{{ g.calc }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
