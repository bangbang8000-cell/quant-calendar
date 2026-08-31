// quant-calendar: 状态面板组件 (v3.11 / FR-3.11.5)
// 统一四态（空/加载/错误/离线）——各页不再各自拼空态/骨架屏，全部收敛到本组件。
// 元数据来自 state-panel-core.js（纯数据，node 可测 TC-11.8），本组件只负责渲染。
// 视觉复用现有 .skeleton-loader（加载）与 .empty-state（空/错误/离线）样式，零新增 CSS。
// 用法（组件模板内，成对标签）：
//   <qc-state-panel type="loading"></qc-state-panel>
//   <qc-state-panel type="empty" title="暂无数据"></qc-state-panel>
//   <qc-state-panel type="error" @retry="reload">
//       <template #action><el-button size="small" type="primary" @click="reload">重试</el-button></template>
//   </qc-state-panel>
(function () {
  const { computed } = Vue;
  const CORE = window.QuantStatePanel || {};

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StatePanel = {
    name: 'qc-state-panel',
    props: {
      type: { type: String, default: 'empty' },
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      icon: { type: String, default: '' },
    },
    emits: ['retry'],
    template: `
        <div class="qc-state-panel" :class="'qc-state-' + type" role="status">
            <!-- 加载态：复用骨架屏 -->
            <div v-if="type === 'loading'" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 6" :key="i"></div>
                </div>
            </div>
            <!-- 空/错误/离线态：统一空态样式 -->
            <div v-else class="empty-state qc-state-info">
                <div class="qc-state-icon">{{ icon }}</div>
                <div class="qc-state-title">{{ title }}</div>
                <div class="qc-state-desc" v-if="desc">{{ desc }}</div>
                <div class="qc-state-action" v-if="retryable">
                    <slot name="action">
                        <button class="qc-state-retry" type="button" @click="$emit('retry')">重试</button>
                    </slot>
                </div>
            </div>
        </div>
    `,
    setup(props) {
      const meta = computed(() => (typeof CORE.resolve === 'function') ? CORE.resolve(props.type) : {});
      const icon = computed(() => props.icon || meta.value.icon || '');
      const title = computed(() => props.title || meta.value.title || '');
      const desc = computed(() => props.desc || meta.value.desc || '');
      const retryable = computed(() => !!meta.value.retry);
      return { icon, title, desc, retryable };
    },
  };
})();
