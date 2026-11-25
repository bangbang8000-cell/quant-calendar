// v7.18 (FR-901): 长表在窄屏的卡片降级容器
// 背景: 涨停复盘 10 列 el-table 在 390px 下被压成 340px 宽, 窄列只剩 3~6px,
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
