// v7.18 (FR-901): 长表在窄屏的卡片降级容器
// 背景: 涨停复盘 10 列 el-table 在 390px 下被压成 340px 宽, 窄列只剩 3~6px,
//       内容不是"要横滑"而是"看不见"。el-table 的列宽在窄容器里是等比压缩, 不会溢出。
//
// 设计取舍:
//   1) 纯展示组件 —— 不做格式化。调用方(page)负责把行数据映射成
//      { key, title, sub, badge, badgeClass, lines[], note, footer },
//      因为涨跌色/金额单位/占位符等规则在页面里已有单一来源(fmtPct/fmtAmount/riseFall)。
//   2) 与 el-table 用 CSS 的 .qc-mobile-only / .qc-desktop-only 切换, 不用 v-if:
//      配合 FR-902 的分页(50 行/页)后 DOM 规模已受控, 换取"零 JS 移动端状态"的稳定性。
//      (v7.17 曾计划用 v-if + isMobile, 但 42 页共享同一个 isMobile 源, 引入联动风险不值。)
(function () {
  const { computed } = Vue;
  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.QcCardList = {
    name: 'qc-card-list',
    props: {
      items: { type: Array, default: () => [] },
      // 点卡片 => 上抛原始行, 由页面决定打开详情
      ariaLabel: { type: String, default: '' },
    },
    emits: ['select'],
    setup(props, { emit }) {
      const list = computed(() => props.items || []);
      function onPick(it) { emit('select', it); }
      function onKey(e, it) {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onPick(it); }
      }
      return { list, onPick, onKey };
    },
    template: `
      <ul class="qc-card-list" :aria-label="ariaLabel">
        <li v-for="it in list" :key="it.key" class="qc-card-item"
            role="button" tabindex="0"
            @click="onPick(it)" @keydown="onKey($event, it)">
          <div class="qc-card-head">
            <span class="qc-card-title">{{ it.title }}</span>
            <span class="qc-card-sub">{{ it.sub }}</span>
            <span v-if="it.badge != null && it.badge !== ''" class="qc-card-badge" :class="it.badgeClass">{{ it.badge }}</span>
          </div>
          <dl v-if="it.lines && it.lines.length" class="qc-card-lines">
            <div v-for="ln in it.lines" :key="ln.label" class="qc-card-line">
              <dt>{{ ln.label }}</dt><dd>{{ ln.value }}</dd>
            </div>
          </dl>
          <p v-if="it.note" class="qc-card-note">{{ it.note }}</p>
          <div v-if="it.footer" class="qc-card-foot">{{ it.footer }}</div>
        </li>
      </ul>
    `,
  };
})();
