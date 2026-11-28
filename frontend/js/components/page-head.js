// quant-calendar: 研究域统一页面头 (v7.25 FR-9)
// 骨架: 标题(+图标) / 说明 / 主操作插槽；与 qc-state-panel 共同构成统一页面骨架。
(function () {
  window.__quantComponents = window.__quantComponents || {};
  window.__quantComponents.QcPageHead = {
    name: 'qc-page-head',
    props: {
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      icon: { type: String, default: '' }
    },
    template: `
      <div class="qc-page-head">
        <div class="qc-page-head-main">
          <div class="qc-page-head-title">
            <qc-icon v-if="icon" :name="icon" :size="16" />
            <span>{{ title }}</span>
          </div>
          <div v-if="desc" class="qc-page-head-desc">{{ desc }}</div>
        </div>
        <div v-if="$slots.actions" class="qc-page-head-actions">
          <slot name="actions"></slot>
        </div>
      </div>`
  };
})();
