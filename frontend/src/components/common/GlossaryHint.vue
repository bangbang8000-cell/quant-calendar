<script setup>
// 6.1.1 (A1): 量化术语浮层 — 问号图标 + 定义/口径 (服务端 /api/meta/glossary 缓存)
// 用法: <qc-glossary-hint gkey="pe" /> ; 接口失败时静默隐藏图标
import { ref, computed, onMounted } from 'vue'

const props = defineProps({
  gkey: { type: String, required: true },
  size: { type: [Number, String], default: 14 },
})

let cachePromise = null
function loadGlossary() {
  if (!cachePromise) {
    cachePromise = fetch('/api/meta/glossary')
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => (d && d.success ? d.items : null))
      .catch(() => null)
  }
  return cachePromise
}

const hidden = ref(true)
const item = ref(null)

onMounted(async () => {
  const items = await loadGlossary()
  if (items) {
    const found = items.find((i) => i.key === props.gkey)
    if (found) {
      item.value = found
      hidden.value = false
    }
  }
})

function goGlossaryPage() {
  if (window.__quantGoPage) {
    window.__quantGoPage('system', 'glossary')
  } else if (window.__quantState && window.__quantState.currentPage) {
    window.__quantState.currentPage.value = 'system'
    window.__quantState.currentSubPage.value = 'glossary'
  }
}

const show = computed(() => !hidden.value && !!item.value)
</script>

<template>
  <span v-if="show" class="qc-glossary-hint" :title="item.term">
    <el-popover placement="bottom-start" :width="340" trigger="hover" popper-class="qc-glossary-pop">
      <template #reference>
        <span class="qc-glossary-trigger" role="button" tabindex="0" aria-label="术语解释">
          <qc-icon name="help-circle" :size="size" />
        </span>
      </template>
      <div class="qc-glossary-card">
        <div class="qc-glossary-head">
          <span class="qc-glossary-term">{{ t('glossary.term.' + item.key) }}</span>
          <span class="qc-glossary-cat">{{ t('glossary.cat.' + item.category) }}</span>
        </div>
        <div class="qc-glossary-row">
          <span class="qc-glossary-label">{{ t('glossary.definition') }}</span>
          <span class="qc-glossary-text">{{ item.definition }}</span>
        </div>
        <div class="qc-glossary-row">
          <span class="qc-glossary-label">{{ t('glossary.calc') }}</span>
          <span class="qc-glossary-text">{{ item.calc }}</span>
        </div>
        <div class="qc-glossary-foot">
          <span class="qc-glossary-link" @click="goGlossaryPage">{{ t('glossary.title') }} →</span>
        </div>
      </div>
    </el-popover>
  </span>
</template>
