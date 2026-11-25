<script>
// V6.2 (PRD-6.2 F5): 通用股票列表组件 — 基于 .qc-stock-list/.qc-stock-row 样式封装
// 结构: [rank?] [code+status / name] [tags] [#extra] [#actions]
// 事件: select(item) — 点击行触发
// V6.9.3 (F1): 新增 showConsensus(共识徽章+进度条) / showPrice(价格涨跌幅) / virtual(虚拟滚动) / name-suffix 插槽
// v7.18 (FR-1101 个股列表统一 · 20261124 用户定版):
//   固定行高 78px + 固定四列栅格 [16 | info(1fr) | tags 148 | ops 92] — 列起始位置跨行跨页恒定。
//   关联策略为 2行×2列 网格 (148px): 「N 策略」徽章独立前置 (定宽 44px), 网格按列优先填充 —
//   1-2 个策略竖排靠左, 右列留虚线空位 (is-empty), 起始位置恒定; 超出以 +N 收尾于第 4 格。
//   操作区 92px 定宽 4 槽 (收藏/AI/K线/勾选, 20px 热区): 缺席图标 visibility 占位而非移除 — 零漂移。
//   独立「N 策略」徽章列与价格列取消 (396px 窄栏容量不足): 徽章并入 tags 网格首格;
//   价格从未有数据 (恒 null), showPrice 时并入代码行 title 提示。
//   ops = { watch, ai, kline, manual }: watch/ai/kline 接线 qcState; manual 经 manual-state/manual-busy-code + @manual 接线。
import { inject, ref, onMounted, onUnmounted } from 'vue'

export default {
  name: 'qc-stock-list',
  props: {
    items: { type: Array, default: () => [] },
    showRank: { type: Boolean, default: false },
    activeCode: { type: String, default: '' },
    emptyText: { type: String, default: '暂无数据' },
    loading: { type: Boolean, default: false },
    // 状态徽标文案 (new/out), 默认中文
    statusText: { type: Object, default: () => ({ new: '新增', out: '调出' }) },
    // V6.9.3 (F1): 共识度展示 / 价格展示 / 虚拟滚动 / 行尾插槽 / 长按复制码
    // v7.18: showPrice 已不渲染独立价格列 (窄栏容量不足), 价格并入代码行 title — prop 保留向后兼容
    showConsensus: { type: Boolean, default: false },
    showPrice: { type: Boolean, default: false },
    virtual: { type: Boolean, default: false },
    // v7.19 (FR-1): 行高/行距/图标尺寸默认从 CSS 令牌读（--qc-row-h / --qc-row-gap / --qc-stock-icon），
    // 这里的默认值只是 SSR/测试环境兜底，实际值以令牌为准 —— 消灭「CSS 改 78 但 JS 仍传 78」的双写错位。
    rowHeight: { type: Number, default: 88 },
    rowGap: { type: Number, default: 8 },
    copyCode: { type: Boolean, default: false },
    // 6.3.1 (T-6.3.1.6): 右键菜单上下文 (默认 stock — 通用列表, 露出「加入自选」, 隐藏「删除」)
    ctxContext: { type: String, default: 'stock' },
    // v7.18 (FR-1101): 内建操作区开关 { watch, ai, kline, manual }
    ops: { type: Object, default: null },
    // v7.18: 手动勾选接线 (日历页局部状态): code => boolean
    manualState: { type: Function, default: null },
    // v7.18: 正在切换勾选的 code (busy 态)
    manualBusyCode: { type: String, default: '' },
    // v7.18: 「N 策略」计数徽章 (tags 网格首格, 金色); showConsensus 亦隐含开启
    showStrategyCount: { type: Boolean, default: false },
  },
  emits: ['select', 'manual'],
  setup(props, { emit, slots }) {
    const state = inject('qcState')
    // v7.19 (FR-1): 读设计令牌（单一来源）；密度切换时 MutationObserver 同步，
    // 避免「切成紧凑档但虚拟滚动仍按 88px 计算」导致的行重叠。
    function readPx(name, fallback) {
      if (typeof document === 'undefined' || !document.documentElement) return fallback
      const raw = getComputedStyle(document.documentElement).getPropertyValue(name)
      const n = parseFloat(raw)
      return isFinite(n) && n > 0 ? n : fallback
    }
    const rowH = ref(props.rowHeight)
    const rowGapPx = ref(props.rowGap)
    const opIconSize = ref(readPx('--qc-stock-icon', 16))
    function syncMetrics() {
      rowH.value = readPx('--qc-row-h', props.rowHeight)
      rowGapPx.value = readPx('--qc-row-gap', props.rowGap)
      opIconSize.value = readPx('--qc-stock-icon', 16)
    }
    let _densityObserver = null
    onMounted(() => {
      syncMetrics()
      if (typeof MutationObserver !== 'undefined' && document.documentElement) {
        _densityObserver = new MutationObserver(syncMetrics)
        _densityObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-density'] })
      }
    })
    onUnmounted(() => { if (_densityObserver) _densityObserver.disconnect() })
    // v7.18: 内建 ops 依赖的 qcState 成员 (t / watchlistCodes / toggleWatchlist / evaluatedCodes / klineLoadedCodes)
    const t = state && state.t
    const watchlistCodes = state && state.watchlistCodes
    const evaluatedCodes = state && state.evaluatedCodes
    const klineLoadedCodes = state && state.klineLoadedCodes
    const toggleWatchlist = state && state.toggleWatchlist
    function select(item) { emit('select', item) }
    // v7.18 (用户定版 20261124 二次调整): 「N 策略」计数徽章独立前置 (定宽), 策略 2行×2列
    //   网格按列优先填充 — 1-2 个策略竖排靠左, 右列留空占位, 超出以 +N 收尾于第 4 格。
    function strategyCountOf(item) {
      const n = Number(item.strategy_count)
      if (isFinite(n) && n > 0) return n
      const all = (item.strategy_names || item.strategies || [])
      return all.length || 0
    }
    const showTagsCount = !!(props.showConsensus || props.showStrategyCount)
    function countTitle(item) {
      const all = (item.strategy_names || item.strategies || [])
      return (all.join('、') || '') + ' — 共 ' + strategyCountOf(item) + ' 策略'
    }
    function tagCells(item) {
      const all = (item.strategy_names || item.strategies || [])
      const cap = all.length > 4 ? 3 : 4
      const shown = all.slice(0, cap)
      const more = all.length - shown.length
      const cells = []
      for (const s of shown) cells.push({ text: s, cls: '', title: s })
      if (more > 0) cells.push({ text: '+' + more, cls: 'is-more', title: all.slice(shown.length).join('、') })
      while (cells.length < 4) cells.push({ text: '', cls: 'is-empty', title: '' })
      return cells
    }
    function fmtPrice(v) {
      const n = Number(v)
      return isFinite(n) ? n.toFixed(2) : '—'
    }
    function fmtChange(v) {
      const n = Number(v)
      if (!isFinite(n)) return '—'
      return (n > 0 ? '+' : '') + n.toFixed(2) + '%'
    }
    // v7.18: 价格并入代码行 title (原独立列取消)
    function priceTitle(item) {
      if (!props.showPrice || item.price == null) return item.code || ''
      return item.code + '  ' + fmtPrice(item.price) + ' (' + fmtChange(item.change_pct) + ')'
    }
    function pctOf(item) {
      const n = Number(item.consensus_level)
      return isFinite(n) ? Math.round(n * 100) : 0
    }
    // V5.15 (F1): 共识百分比仅在 consensus_level 为合法非 0 值时展示 — 缺失/0 不渲染「0% 共识」
    function hasConsensus(item) {
      const n = Number(item && item.consensus_level)
      return isFinite(n) && n > 0
    }
    const hasOps = !!(props.ops && (props.ops.watch || props.ops.ai || props.ops.kline || props.ops.manual))
    return { state, slots, select, strategyCountOf, countTitle, showTagsCount, tagCells, fmtPrice, fmtChange, priceTitle, pctOf, hasConsensus, hasOps, t, watchlistCodes, evaluatedCodes, klineLoadedCodes, toggleWatchlist, rowH, rowGapPx, opIconSize }
  },
}
</script>

<template>
  <div class="qc-stock-list">
    <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
    <qc-state-panel v-else-if="!items.length" type="empty" :title="emptyText"></qc-state-panel>

    <template v-else>
      <!-- V6.9.3 (F1.4): 虚拟滚动分支 — 统一行结构, 保留虚拟列表能力 -->
      <qc-virtual-list v-if="virtual" :items="items" :row-height="rowH" :item-gap="rowGapPx">
        <template #default="{ item, index }">
          <div
            class="qc-stock-row" :class="{ 'is-active': activeCode === item.code }"
            :data-copy-code="copyCode ? item.code : undefined"
            :data-ctx-code="item.code" :data-ctx-name="item.name" :data-ctx-context="ctxContext"
            tabindex="0" role="button" :aria-label="'查看 ' + (item.name || '') + ' ' + (item.code || '')"
            @click="select(item)"
            @keydown.enter.prevent="select(item)"
            @keydown.space.prevent="select(item)"
          >
            <div class="qc-stock-rank"><span v-if="showRank">{{ index + 1 }}</span></div>
            <div class="qc-stock-info">
              <div class="qc-stock-code" :title="priceTitle(item)">
                <span class="qc-stock-code-num">{{ item.code }}</span>
                <span v-if="item.status === 'new'" class="qc-stock-status is-new">{{ statusText.new }}</span>
                <span v-else-if="item.status === 'out'" class="qc-stock-status is-out">{{ statusText.out }}</span>
              </div>
              <div class="qc-stock-name" :title="item.name || (item.code + '（名称缺失）')">
                <!-- v7.19 (FR-9): 名称缺失统一渲染 —（不再把代码当名称，也不留空白） -->
                <span class="qc-stock-name-text" :class="{ 'is-name-missing': !item.name }">{{ item.name || '—' }}</span>
                <slot name="name-suffix" :item="item" :index="index" />
              </div>
              <span v-if="showConsensus && hasConsensus(item)" class="qc-stock-consensus">{{ pctOf(item) }}% 共识</span>
            </div>
            <!-- v7.18 (用户定版 二次调整): 「N 策略」徽章前置 + 2行×2列策略网格 (列优先, 靠左填充) -->
            <div class="qc-stock-tags">
              <span v-if="showTagsCount" class="qc-stock-tag is-count" :title="countTitle(item)">{{ strategyCountOf(item) }} 策略</span>
              <span class="qc-strat-grid">
                <span v-for="(c, ci) in tagCells(item)" :key="ci" class="qc-stock-tag" :class="c.cls" :title="c.title || null">{{ c.text }}</span>
              </span>
            </div>
            <div v-if="slots.extra" class="qc-stock-extra">
              <slot name="extra" :item="item" :index="index" />
            </div>
            <div v-if="slots.actions || hasOps" class="qc-stock-actions" @click.stop>
              <!-- v7.18 (FR-1101): 内建操作区 92px 定宽 4 槽 — 顺序: 收藏 → AI已评估 → K线已载入 → 手动勾选 -->
              <template v-if="hasOps">
                <span v-if="ops.watch && toggleWatchlist" class="gold-link watch-star" role="button" tabindex="0"
                  :aria-label="watchlistCodes && watchlistCodes.has(item.code) ? t('calendar.unwatch') : t('calendar.watch')"
                  :title="watchlistCodes && watchlistCodes.has(item.code) ? t('calendar.unwatch') : t('calendar.watch')"
                  @click.stop="toggleWatchlist(item.code, item.name)"
                  @keydown.enter.prevent="toggleWatchlist(item.code, item.name)"
                  @keydown.space.prevent="toggleWatchlist(item.code, item.name)"><qc-icon name="star" :size="opIconSize" :class="watchlistCodes && watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                <span v-if="ops.ai" class="ops-ic" :class="{ 'is-off': !(evaluatedCodes && evaluatedCodes.has(item.code)) }" :aria-hidden="!(evaluatedCodes && evaluatedCodes.has(item.code)) ? 'true' : null" role="img" :aria-label="t('calendar.aiEvaluated')" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="opIconSize" /></span>
                <span v-if="ops.kline" class="ops-ic" :class="{ 'is-off': !(klineLoadedCodes && klineLoadedCodes.has(item.code)) }" :aria-hidden="!(klineLoadedCodes && klineLoadedCodes.has(item.code)) ? 'true' : null" role="img" :aria-label="t('calendar.klineLoaded')" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="opIconSize" /></span>
                <span v-if="ops.manual && manualState" class="manual-check" :class="{ 'is-checked': manualState(item.code), 'is-busy': manualBusyCode === item.code }" role="checkbox" tabindex="0"
                  :aria-checked="manualState(item.code) ? 'true' : 'false'"
                  :title="manualState(item.code) ? '移出手动勾选' : '加入手动勾选'"
                  @click.stop="$emit('manual', item)"
                  @keydown.enter.prevent="$emit('manual', item)"
                  @keydown.space.prevent="$emit('manual', item)"><qc-icon name="badge-check" :size="opIconSize" /></span>
              </template>
              <slot name="actions" :item="item" :index="index" />
            </div>
            <div v-if="slots.footer" class="cal-subtitle-ellipsis" style="grid-column: 1 / -1">
              <slot name="footer" :item="item" :index="index" />
            </div>
          </div>
        </template>
      </qc-virtual-list>

      <!-- 非虚拟分支 (常规 v-for) -->
      <template v-else>
        <div
          v-for="(item, i) in items" :key="item.code"
          class="qc-stock-row" :class="{ 'is-active': activeCode === item.code }"
          :data-copy-code="copyCode ? item.code : undefined"
          :data-ctx-code="item.code" :data-ctx-name="item.name" :data-ctx-context="ctxContext"
          tabindex="0" role="button" :aria-label="'查看 ' + (item.name || '') + ' ' + (item.code || '')"
          @click="select(item)"
          @keydown.enter.prevent="select(item)"
          @keydown.space.prevent="select(item)"
        >
          <div class="qc-stock-rank"><span v-if="showRank">{{ i + 1 }}</span></div>
          <div class="qc-stock-info">
            <div class="qc-stock-code" :title="priceTitle(item)">
              <span class="qc-stock-code-num">{{ item.code }}</span>
              <span v-if="item.status === 'new'" class="qc-stock-status is-new">{{ statusText.new }}</span>
              <span v-else-if="item.status === 'out'" class="qc-stock-status is-out">{{ statusText.out }}</span>
            </div>
            <div class="qc-stock-name" :title="item.name || (item.code + '（名称缺失）')">
              <!-- v7.19 (FR-9): 名称缺失统一渲染 —（不再把代码当名称，也不留空白） -->
              <span class="qc-stock-name-text" :class="{ 'is-name-missing': !item.name }">{{ item.name || '—' }}</span>
              <slot name="name-suffix" :item="item" :index="i" />
            </div>
            <span v-if="showConsensus && hasConsensus(item)" class="qc-stock-consensus">{{ pctOf(item) }}% 共识</span>
          </div>
          <div class="qc-stock-tags">
            <span v-if="showTagsCount" class="qc-stock-tag is-count" :title="countTitle(item)">{{ strategyCountOf(item) }} 策略</span>
            <span class="qc-strat-grid">
              <span v-for="(c, ci) in tagCells(item)" :key="ci" class="qc-stock-tag" :class="c.cls" :title="c.title || null">{{ c.text }}</span>
            </span>
          </div>
          <div v-if="slots.extra" class="qc-stock-extra">
            <slot name="extra" :item="item" :index="i" />
          </div>
          <div v-if="slots.actions || hasOps" class="qc-stock-actions" @click.stop>
            <template v-if="hasOps">
              <span v-if="ops.watch && toggleWatchlist" class="gold-link watch-star" role="button" tabindex="0"
                :aria-label="watchlistCodes && watchlistCodes.has(item.code) ? t('calendar.unwatch') : t('calendar.watch')"
                :title="watchlistCodes && watchlistCodes.has(item.code) ? t('calendar.unwatch') : t('calendar.watch')"
                @click.stop="toggleWatchlist(item.code, item.name)"
                @keydown.enter.prevent="toggleWatchlist(item.code, item.name)"
                @keydown.space.prevent="toggleWatchlist(item.code, item.name)"><qc-icon name="star" :size="opIconSize" :class="watchlistCodes && watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
              <span v-if="ops.ai" class="ops-ic" :class="{ 'is-off': !(evaluatedCodes && evaluatedCodes.has(item.code)) }" :aria-hidden="!(evaluatedCodes && evaluatedCodes.has(item.code)) ? 'true' : null" role="img" :aria-label="t('calendar.aiEvaluated')" :title="t('calendar.aiEvaluated')"><qc-icon name="bot" :size="opIconSize" /></span>
              <span v-if="ops.kline" class="ops-ic" :class="{ 'is-off': !(klineLoadedCodes && klineLoadedCodes.has(item.code)) }" :aria-hidden="!(klineLoadedCodes && klineLoadedCodes.has(item.code)) ? 'true' : null" role="img" :aria-label="t('calendar.klineLoaded')" :title="t('calendar.klineLoaded')"><qc-icon name="trending-up" :size="opIconSize" /></span>
              <span v-if="ops.manual && manualState" class="manual-check" :class="{ 'is-checked': manualState(item.code), 'is-busy': manualBusyCode === item.code }" role="checkbox" tabindex="0"
                :aria-checked="manualState(item.code) ? 'true' : 'false'"
                :title="manualState(item.code) ? '移出手动勾选' : '加入手动勾选'"
                @click.stop="$emit('manual', item)"
                @keydown.enter.prevent="$emit('manual', item)"
                @keydown.space.prevent="$emit('manual', item)"><qc-icon name="badge-check" :size="opIconSize" /></span>
            </template>
            <slot name="actions" :item="item" :index="i" />
          </div>
          <div v-if="slots.footer" class="cal-subtitle-ellipsis" style="grid-column: 1 / -1">
            <slot name="footer" :item="item" :index="i" />
          </div>
        </div>
      </template>
    </template>
  </div>
</template>
