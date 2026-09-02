// quant-calendar: 空态/错误态通用组件 (V5.0.6 / T-5.0.62)
// qc-empty / qc-error: 体系化的空态/错误态展示 + 重试/操作按钮。
// 文案来自 i18n (common.emptyTitle/emptyDesc/errorTitle/errorDesc/retry, 5 语齐全)。
// 不硬编码颜色, 全部走 CSS 令牌; 静态类均在 themes.css 定义。
(function () {
  if (typeof window === 'undefined' || !window.Vue) return;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.EmptyState = {
    name: 'qc-empty',
    props: {
      icon: { type: String, default: '📭' },
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      actionText: { type: String, default: '' },
    },
    emits: ['action'],
    template: `
      <div class="qc-empty-state" role="status">
        <div class="qc-empty-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-empty-title">{{ title || t('common.emptyTitle') }}</div>
        <div class="qc-empty-desc">{{ desc || t('common.emptyDesc') }}</div>
        <el-button v-if="actionText" size="small" type="primary" @click="$emit('action')">{{ actionText }}</el-button>
      </div>
    `,
    setup() {
      const state = window.__quantState || {};
      function t(k) {
        try {
          const fn = window.__quantModules && window.__quantModules.i18n && window.__quantModules.i18n.t;
          if (fn) return fn(k) || '';
        } catch (e) { /* 忽略 */ }
        return k;
      }
      return { t };
    },
  };

  window.__quantComponents.ErrorState = {
    name: 'qc-error',
    props: {
      icon: { type: String, default: '⚠️' },
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      retrying: { type: Boolean, default: false },
    },
    emits: ['retry'],
    template: `
      <div class="qc-error-state" role="alert">
        <div class="qc-error-icon" aria-hidden="true">{{ icon }}</div>
        <div class="qc-error-title">{{ title || t('common.errorTitle') }}</div>
        <div class="qc-error-desc">{{ desc || t('common.errorDesc') }}</div>
        <el-button v-if="!retrying" size="small" @click="$emit('retry')">{{ t('common.retry') }}</el-button>
        <el-button v-else size="small" :loading="retrying">{{ t('common.retry') }}</el-button>
      </div>
    `,
    setup() {
      function t(k) {
        try {
          const fn = window.__quantModules && window.__quantModules.i18n && window.__quantModules.i18n.t;
          if (fn) return fn(k) || '';
        } catch (e) { /* 忽略 */ }
        return k;
      }
      return { t };
    },
  };
})();
