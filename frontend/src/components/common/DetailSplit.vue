<script>
// V5.19 (F1): 通用「中栏列表 + 右栏详情工作区」双栏壳
// 统一 6 处重复的四件套: detail-split-wrap / detail-split-list / split-divider / detail-split-pane
// 模式语义 (与 app-logic.js 的 detailSplitEnabled 一致):
//   enabled=true  → grid 双栏 (中栏 list + 分隔条 + 右栏 pane); 宽度由全局 --split-w 控制 (默认 35%, 可拖拽 35%-50%)
//   enabled=false → 中栏 list 全宽 (w-100), 不渲染分隔条与右栏; 详情回退弹窗由调用方负责
// 拖拽: 分隔条 [data-split-resize] + 容器 [data-split-root] (app-logic.js 事件委托识别, 全局唯一实现)
// 宽度作用域: --split-w 为全局单一变量 (C4b 决策: 记为预期行为) —— 任一页拖拽后全部双栏页同步
export default {
  name: 'qc-detail-split',
  props: {
    enabled: { type: Boolean, default: false },
    // 页面级容器类 (如日历页 stock-pool-body), 与 detail-split-wrap 同为 display:block
    rootClass: { type: String, default: '' },
    listClass: { type: String, default: '' },
    paneClass: { type: String, default: '' },
  },
}
</script>

<template>
  <div class="detail-split-wrap" :class="[rootClass, { 'detail-split': enabled }]" data-split-root>
    <div class="detail-split-list" :class="[listClass, { 'w-100': !enabled }]">
      <slot name="list"></slot>
    </div>
    <div class="split-divider" data-split-resize v-if="enabled"></div>
    <div class="detail-split-pane" :class="paneClass" v-if="enabled">
      <slot name="pane"></slot>
    </div>
  </div>
</template>
