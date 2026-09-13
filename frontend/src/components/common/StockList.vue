<script>
// V6.2 (PRD-6.2 F5): 通用股票列表组件 — 基于 .qc-stock-list/.qc-stock-row 样式封装
// 结构: [rank?] [code+status / name] [tags] [#extra] [#actions]
// 事件: select(item) — 点击行触发
// V6.9.3 (F1): 新增 showConsensus(共识徽章+进度条) / showPrice(价格涨跌幅) / virtual(虚拟滚动) / name-suffix 插槽
import { inject } from 'vue'

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
    showConsensus: { type: Boolean, default: false },
    showPrice: { type: Boolean, default: false },
    virtual: { type: Boolean, default: false },
    rowHeight: { type: Number, default: 78 },
    copyCode: { type: Boolean, default: false },
  },
  emits: ['select'],
  setup(props, { emit, slots }) {
    const state = inject('qcState')
    function select(item) { emit('select', item) }
    // V6.9.3 (F1.2): 标签扩容至 3 个, 超出以 +N 折叠
    function displayTags(item) {
      const all = (item.strategy_names || item.strategies || [])
      const shown = all.slice(0, 3)
      const more = all.length > 3 ? all.length - 3 : 0
      const tags = shown.map(s => ({ text: s, more: false }))
      if (more) tags.push({ text: '+' + more, more: true })
      return tags
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
    function pctOf(item) {
      const n = Number(item.consensus_level)
      return isFinite(n) ? Math.round(n * 100) : 0
    }
    return { state, slots, select, displayTags, fmtPrice, fmtChange, pctOf }
  },
}
</script>

<template>
  <div class="qc-stock-list">
    <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
    <qc-state-panel v-else-if="!items.length" type="empty" :title="emptyText"></qc-state-panel>

    <template v-else>
      <!-- V6.9.3 (F1.4): 虚拟滚动分支 — 统一行结构, 保留虚拟列表能力 -->
      <qc-virtual-list v-if="virtual" :items="items" :row-height="rowHeight">
        <template #default="{ item, index }">
          <div
            class="qc-stock-row" :class="{ 'is-active': activeCode === item.code }"
            :data-copy-code="copyCode ? item.code : undefined"
            tabindex="0" role="button" :aria-label="'查看 ' + (item.name || '') + ' ' + (item.code || '')"
            @click="select(item)"
            @keydown.enter.prevent="select(item)"
            @keydown.space.prevent="select(item)"
          >
            <div v-if="showRank" class="qc-stock-rank">{{ index + 1 }}</div>
            <div class="qc-stock-info">
              <div class="qc-stock-code">
                <span class="qc-stock-code-num">{{ item.code }}</span>
                <span v-if="item.status === 'new'" class="qc-stock-status is-new">{{ statusText.new }}</span>
                <span v-else-if="item.status === 'out'" class="qc-stock-status is-out">{{ statusText.out }}</span>
              </div>
              <div class="qc-stock-name">
                {{ item.name }}
                <slot name="name-suffix" :item="item" :index="index" />
              </div>
              <span v-if="showConsensus" class="qc-stock-consensus">{{ pctOf(item) }}% 共识</span>
            </div>
            <div v-if="(item.strategy_names || item.strategies) && (item.strategy_names || item.strategies).length" class="qc-stock-tags">
              <span v-for="s in displayTags(item)" :key="s.text" class="qc-stock-tag" :class="{ 'is-more': s.more }">{{ s.text }}</span>
            </div>
            <span v-if="showConsensus" class="qc-stock-badge">{{ item.strategy_count || 0 }} 策略</span>
            <div v-if="showPrice && item.price != null" class="qc-stock-data">
              <span class="qc-stock-price">{{ fmtPrice(item.price) }}</span>
              <span class="qc-stock-change" :class="item.change_pct > 0 ? 'is-up' : (item.change_pct < 0 ? 'is-down' : '')">{{ fmtChange(item.change_pct) }}</span>
            </div>
            <div v-if="slots.extra" class="qc-stock-extra">
              <slot name="extra" :item="item" :index="index" />
            </div>
            <div v-if="slots.actions" class="qc-stock-actions" @click.stop>
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
          tabindex="0" role="button" :aria-label="'查看 ' + (item.name || '') + ' ' + (item.code || '')"
          @click="select(item)"
          @keydown.enter.prevent="select(item)"
          @keydown.space.prevent="select(item)"
        >
          <div v-if="showRank" class="qc-stock-rank">{{ i + 1 }}</div>
          <div class="qc-stock-info">
            <div class="qc-stock-code">
              <span class="qc-stock-code-num">{{ item.code }}</span>
              <span v-if="item.status === 'new'" class="qc-stock-status is-new">{{ statusText.new }}</span>
              <span v-else-if="item.status === 'out'" class="qc-stock-status is-out">{{ statusText.out }}</span>
            </div>
            <div class="qc-stock-name">
              {{ item.name }}
              <slot name="name-suffix" :item="item" :index="i" />
            </div>
            <span v-if="showConsensus" class="qc-stock-consensus">{{ pctOf(item) }}% 共识</span>
          </div>
          <div v-if="(item.strategy_names || item.strategies) && (item.strategy_names || item.strategies).length" class="qc-stock-tags">
            <span v-for="s in displayTags(item)" :key="s.text" class="qc-stock-tag" :class="{ 'is-more': s.more }">{{ s.text }}</span>
          </div>
          <span v-if="showConsensus" class="qc-stock-badge">{{ item.strategy_count || 0 }} 策略</span>
          <div v-if="showPrice && item.price != null" class="qc-stock-data">
            <span class="qc-stock-price">{{ fmtPrice(item.price) }}</span>
            <span class="qc-stock-change" :class="item.change_pct > 0 ? 'is-up' : (item.change_pct < 0 ? 'is-down' : '')">{{ fmtChange(item.change_pct) }}</span>
          </div>
          <div v-if="slots.extra" class="qc-stock-extra">
            <slot name="extra" :item="item" :index="i" />
          </div>
          <div v-if="slots.actions" class="qc-stock-actions" @click.stop>
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
