// quant-calendar: VirtualList 组件 (v3.11 / FR-3.11.3)
// 固定行高虚拟滚动列表 — 仅渲染可视区行 + 上下缓冲，滚动流畅不卡顿。
// 用法（父模板，v7.19 起行高/行距不再写死数字，一律读 CSS 令牌）：
//   <qc-virtual-list class="h-calc-260" :items="stockPool"
//                    :row-height="rowH" :item-gap="rowGapPx">
//     <template #default="{ item, index }">
//       <div class="consensus-item" @click="showStockDetail(item.code)">...</div>
//     </template>
//   </qc-virtual-list>
// 说明：
//   - 滚动容器 = 组件根元素，高度由父级 style 控制（overflow-y:auto 内置）；
//   - 行高固定为 :row-height（超出部分 overflow:hidden 裁切），行内交互事件不变；
//   - :item-gap 是行间距：绝对定位分支没有 CSS gap 概念，它必须参与窗口/位移/总高计算，
//     否则列表超一屏就会「行贴着行」；plain 分支用同一值做 flex gap，两分支视觉一致；
//   - 父组件（StockList.vue）用 getComputedStyle 读 --qc-row-h / --qc-row-gap 传给这里，
//     单一来源是 tokens.css —— 不要再在模板里写 :row-height="78" 这类字面量；
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
      // v7.19 (FR-2): 行间距。绝对定位分支没有 CSS gap 概念，必须参与总高与位移计算；
      // 非虚拟(plain)分支用同一值做 flex gap，两分支视觉一致。
      itemGap: { type: Number, default: 0 },
    },
    // 6.3.1 (T-6.3.1.4) 无障碍：虚拟列表只渲染可视区行，DOM 中行数与数据量不等，
    // 故按 WAI-ARIA 虚拟化列表惯例 —— role=list/listitem + aria-setsize/aria-posinset
    // 声明「总条数 / 当前行序号」，读屏可正确播报「第 37 条，共 320 条」。
    template: `
        <div ref="scrollEl" class="qc-virtual-list" :style="{ overflowY: 'auto', WebkitOverflowScrolling: 'touch' }" @scroll.passive="onScroll">
            <!-- 6.6 (T-6.6.1): 小数据量普通渲染 —— 行参与文档流, DOM 行数 == 数据条数 -->
            <div v-if="plainMode" class="qc-vlist-plain" role="list" :aria-label="ariaLabel || null"
                 :style="{ display: 'flex', flexDirection: 'column', gap: itemGap + 'px' }">
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
                     :style="{ position: 'absolute', top: '0', left: '0', right: '0', height: rowHeight + 'px', transform: 'translateY(' + ((startIndex + i) * step) + 'px)', overflow: 'hidden' }">
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
      // v7.19 (FR-2): step = 行高 + 行距 — 窗口/位移/总高三处必须用同一个值
      const step = computed(() => (props.rowHeight > 0 ? props.rowHeight : 1) + Math.max(0, props.itemGap || 0));
      const range = computed(() => {
        const r = (VL.computeVisibleRange || function (st, vp, rh, total, buf, gap) {
          const h = (rh > 0 ? rh : 1) + Math.max(0, gap || 0);
          const bufN = buf >= 0 ? buf : 8;
          const t = Math.max(0, total);
          return { startIndex: Math.max(0, Math.floor(st / h) - bufN), endIndex: Math.min(t, Math.ceil((st + vp) / h) + bufN) };
        })(scrollTop.value, viewportH.value, props.rowHeight, props.items.length, props.buffer, props.itemGap);
        return r;
      });
      const totalHeight = computed(() => {
        const n = props.items.length;
        if (!n) return 0;
        // 行高非法（令牌读不到 / 未测出）时不占位 —— 与 core 的 computeTotalHeight 同语义，
        // 否则会按 step=1+gap 算出一个假高度，凭空出现滚动条。
        if (!(props.rowHeight > 0)) return 0;
        // 末行后不再附加行距
        return n * step.value - Math.max(0, props.itemGap || 0);
      });
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

      return { scrollEl, totalHeight, startIndex, endIndex, visibleItems, onScroll, keyOf, plainMode, step };
    },
  };
})();
