// quant-calendar: VirtualList 组件 (v3.11 / FR-3.11.3)
// 固定行高虚拟滚动列表 — 仅渲染可视区行 + 上下缓冲，滚动流畅不卡顿。
// 用法（父模板）：
//   <qc-virtual-list class="h-calc-260" :items="stockPool" :row-height="78">
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
      // 6.3.1 (T-6.3.1.4): 列表可读名称（读屏播报用，如「自选股列表」）
      ariaLabel: { type: String, default: '' },
      // 6.6 (T-6.6.1, PRD FR-6.6.1): 数据量 ≤ 该阈值时退化为普通渲染（真实 DOM 行参与文档流）。
      // 0 = 禁用退化（永远虚拟化 = 历史行为，其它页面不受影响）。
      // 自选页传 50：13 只必须渲染 13 个真实 DOM 行，可计数/可 Ctrl+F/可整页滚动，
      // 从根上消除「虚拟列表在 slot 内空渲染」这一类故障。
      plainThreshold: { type: Number, default: 0 },
    },
    // 6.3.1 (T-6.3.1.4) 无障碍：虚拟列表只渲染可视区行，DOM 中行数与数据量不等，
    // 故按 WAI-ARIA 虚拟化列表惯例 —— role=list/listitem + aria-setsize/aria-posinset
    // 声明「总条数 / 当前行序号」，读屏可正确播报「第 37 条，共 320 条」。
    template: `
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <!-- 6.6 (T-6.6.1): 小数据量普通渲染 —— 行参与文档流, DOM 行数 == 数据条数 -->
            <div v-if="plainMode" class="qc-vlist-plain" role="list" :aria-label="ariaLabel || null">
                <div v-for="(item, i) in items" :key="keyOf(item, i)"
                     class="qc-vrow qc-vrow-plain" role="listitem"
                     :aria-setsize="items.length" :aria-posinset="i + 1">
                    <slot :item="item" :index="i"></slot>
                </div>
            </div>
            <div v-else class="qc-vlist-spacer" role="list" :aria-label="ariaLabel || null" :style="{ height: totalHeight + 'px', position: 'relative' }">
                <div v-for="(item, i) in visibleItems" :key="keyOf(item, startIndex + i)"
                     class="qc-vrow" role="listitem"
                     :aria-setsize="items.length" :aria-posinset="startIndex + i + 1"
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

      // 6.6 (T-6.6.1): 是否退化为普通渲染（阈值 0/负数 = 永远虚拟化）
      // 判定委托 watchlist-render-core.js 纯函数，Node 可单测（TC-6.6.1.3）
      const plainMode = computed(() => {
        const th = props.plainThreshold;
        if (!(th > 0)) return false;
        const core = (typeof window !== 'undefined')
          ? ((window.__quantModules && window.__quantModules.watchlistRenderCore)
             || window.QuantWatchlistRenderCore || null)
          : null;
        if (core && typeof core.shouldRenderPlain === 'function') {
          return core.shouldRenderPlain(props.items.length, th);
        }
        const n = props.items.length;
        return n > 0 && n <= th;
      });

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

      return { scrollEl, totalHeight, startIndex, endIndex, visibleItems, onScroll, keyOf, plainMode };
    },
  };
})();
