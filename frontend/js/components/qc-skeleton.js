// v7.18 (FR-1001): 表格骨架屏
// 为什么需要: 全站 el-skeleton 用量为 0, 重页(短线复盘最慢 10.8s)加载期间主体是空白,
// 与"该页没有数据"在视觉上完全一致 —— 用户无法判断是慢还是空。
//
// 关键约束: 骨架行高必须与真实 el-table(size="small") 行高一致(约 40px),
// 否则加载完成的瞬间会跳一下, 比没有骨架更显眼。
// 用 CSS 固定行高而非读 DOM: 骨架出现时表格还没渲染, 读不到真实行高。
(function () {
  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.QcSkeletonTable = {
    name: 'qc-skeleton-table',
    props: {
      rows: { type: Number, default: 5 },
      cols: { type: Number, default: 4 },
      label: { type: String, default: '' },
    },
    setup(props) {
      const rowIdx = () => Array.from({ length: Math.max(1, props.rows) }, (_, i) => i);
      const colIdx = () => Array.from({ length: Math.max(1, props.cols) }, (_, i) => i);
      return { rowIdx, colIdx };
    },
    template: `
      <div class="qc-skeleton-table" data-skeleton="table" role="status" :aria-label="label || '加载中'">
        <div v-for="r in rowIdx()" :key="r" class="qc-skeleton-row">
          <span v-for="c in colIdx()" :key="c" class="qc-skeleton-cell"
                :style="{ width: (c === 0 ? 22 : 100 / cols - 6) + '%' }"></span>
        </div>
        <span class="visually-hidden">加载中</span>
      </div>
    `,
  };
})();
