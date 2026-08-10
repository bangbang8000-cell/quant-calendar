// quant-calendar: VirtualList 组件 (v3.11 / FR-3.11.3)
// 固定行高虚拟滚动列表 — 仅渲染可视区行 + 上下缓冲，滚动流畅不卡顿。
// 用法（父模板）：
//   <qc-virtual-list :items="stockPool" :row-height="78" style="height: calc(100vh - 260px);">
//     <template #default="{ item, index }">
//       <div class="consensus-item" @click="showStockDetail(item.code)">...</div>
//     </template>
//   </qc-virtual-list>
// 说明：
//   - 滚动容器 = 组件根元素，高度由父级 style 控制（overflow-y:auto 内置）；
//   - 行高固定为 :row-height（超出部分 overflow:hidden 裁切），行内交互事件不变；
//   - style/class 等非 prop attribute 自动落到根元素（Vue 3 单根 fallthrough）。
(function () {
  const { ref, computed, onMounted, onBeforeUnmount } = Vue;
  const VL = window.QuantVirtualList || {};

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.VirtualList = {
    name: 'qc-virtual-list',
    props: {
      items: { type: Array, default: () => [] },
      rowHeight: { type: Number, default: 56 },
      // 上下预渲染行缓冲（滚动时先行渲染，减少白屏）
      buffer: { type: Number, default: VL.DEFAULT_BUFFER || 8 },
    },
    template: `
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <div class="qc-vlist-spacer" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow"
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * rowHeight) + 'px)', overflow: 'hidden' }">
                    <slot :item="item" :index="startIndex + i"></slot>
                </div>
            </div>
        </div>
    `,
    setup(props) {
      const scrollEl = ref(null);
      const scrollTop = ref(0);
      const viewportH = ref(400);

      // 窗口计算委托 virtual-list-core.js（纯函数，pytest 可单测 TC-11.6）
      const range = computed(() => {
        const r = (VL.computeVisibleRange || function (st, vp, rh, total, buf) {
          const h = rh > 0 ? rh : 1;
          const bufN = buf >= 0 ? buf : 8;
          const t = Math.max(0, total);
          return { startIndex: Math.max(0, Math.floor(st / h) - bufN), endIndex: Math.min(t, Math.ceil((st + vp) / h) + bufN) };
        })(scrollTop.value, viewportH.value, props.rowHeight, props.items.length, props.buffer);
        return r;
      });
      const totalHeight = computed(() => props.items.length * props.rowHeight);
      const startIndex = computed(() => range.value.startIndex);
      const endIndex = computed(() => range.value.endIndex);
      const visibleItems = computed(() => props.items.slice(startIndex.value, endIndex.value));

      function onScroll() {
        if (scrollEl.value) scrollTop.value = scrollEl.value.scrollTop;
      }
      function updateViewport() {
        if (scrollEl.value) viewportH.value = scrollEl.value.clientHeight || 400;
      }
      function keyOf(item, idx) {
        return VL.getRowKey ? VL.getRowKey(item, idx) : (item && item.code != null ? item.code : (item && item.id != null ? item.id : idx));
      }

      let ro = null;
      onMounted(() => {
        updateViewport();
        if (scrollEl.value && typeof ResizeObserver !== 'undefined') {
          ro = new ResizeObserver(() => updateViewport());
          ro.observe(scrollEl.value);
        }
      });
      onBeforeUnmount(() => {
        if (ro) ro.disconnect();
      });

      return { scrollEl, totalHeight, startIndex, endIndex, visibleItems, onScroll, keyOf };
    },
  };
})();
