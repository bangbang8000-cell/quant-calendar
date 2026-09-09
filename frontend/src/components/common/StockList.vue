<script>
// V6.2 (PRD-6.2 F5): 通用股票列表组件 — 基于 .qc-stock-list/.qc-stock-row 样式封装
// 结构: [rank?] [code+status / name] [tags] [#extra] [#actions]
// 事件: select(item) — 点击行触发
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
  },
  emits: ['select'],
  setup(props, { emit, slots }) {
    const state = inject('qcState')
    function select(item) { emit('select', item) }
    return { state, slots, select }
  },
}
</script>

<template>
  <div class="qc-stock-list">
    <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
    <qc-state-panel v-else-if="!items.length" type="empty" :title="emptyText"></qc-state-panel>
    <div
      v-for="(item, i) in items" :key="item.code"
      class="qc-stock-row" :class="{ 'is-active': activeCode === item.code }"
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
        <div class="qc-stock-name">{{ item.name }}</div>
      </div>
      <div v-if="item.strategies && item.strategies.length" class="qc-stock-tags">
        <span v-for="s in item.strategies.slice(0, 2)" :key="s" class="qc-stock-tag">{{ s }}</span>
      </div>
      <div v-if="slots.extra" class="qc-stock-extra">
        <slot name="extra" :item="item" :index="i" />
      </div>
      <div v-if="slots.actions" class="qc-stock-actions" @click.stop>
        <slot name="actions" :item="item" :index="i" />
      </div>
    </div>
  </div>
</template>
