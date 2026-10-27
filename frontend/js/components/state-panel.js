// quant-calendar: 状态面板组件 (v3.11 / FR-3.11.5; 6.4.2 FR-644/646 增强)
// 统一四态（空/加载/错误/离线）——各页不再各自拼空态/骨架屏，全部收敛到本组件。
// 元数据来自 state-panel-core.js（纯数据，node 可测 TC-11.8），本组件只负责渲染。
// 6.4.2 增强:
//   - 空态必有主行动 (action-text 可定制, 缺省「刷新数据」)
//   - 错误态接 error-map 九类人话文案 + 两段式说明
//   - 重试节流 (最多 3 次, 指数退避) 防连点风暴
//   - 埋点 error_shown / error_retry / empty_action
// 用法（组件模板内，成对标签）：
//   <qc-state-panel type="loading"></qc-state-panel>
//   <qc-state-panel type="empty" title="暂无数据" action-text="去配置数据池" @action="goPool"></qc-state-panel>
//   <qc-state-panel type="error" :error-code="500" @retry="reload"></qc-state-panel>
//       <template #action><el-button size="small" type="primary" @click="reload">重试</el-button></template>
//   </qc-state-panel>
(function () {
  const { computed, onMounted, ref } = Vue;
  const CORE = window.QuantStatePanel || {};
  const EMAP = window.QuantErrorMap || {};

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StatePanel = {
    name: 'qc-state-panel',
    props: {
      type: { type: String, default: 'empty' },
      title: { type: String, default: '' },
      desc: { type: String, default: '' },
      icon: { type: String, default: '' },
      // 6.4.2: 空态主行动文案 (为空时默认「刷新数据」)
      actionText: { type: String, default: '' },
      // 6.4.2: 主行动语义键 — 支持无需父组件接线的一键直达
      //   refresh(默认刷新当前页) / go_datasource / go_pool / go_watchlist / go_strategy / go_status
      actionKey: { type: String, default: '' },
      // 6.4.2: 错误码/错误类型 (401/403/404/429/500/timeout/offline/datasource/file_missing)
      errorCode: { type: [String, Number], default: '' },
    },
    emits: ['retry', 'action'],
    template: `
        <div class="qc-state-panel" :class="'qc-state-' + type" role="status">
            <!-- 加载态：复用骨架屏 -->
            <div v-if="type === 'loading'" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 6" :key="i"></div>
                </div>
            </div>
            <!-- 空/错误/离线态：统一空态样式 + 必有主行动 -->
            <div v-else class="empty-state qc-state-info">
                <div class="qc-state-icon"><qc-icon v-if="isIconName" :name="icon" :size="32" /><template v-else>{{ icon }}</template></div>
                <div class="qc-state-title">{{ title }}</div>
                <div class="qc-state-desc" v-if="desc">{{ desc }}</div>
                <div class="qc-state-action" v-if="showAction">
                    <slot name="action">
                        <button class="qc-state-retry" type="button" :disabled="retryBlocked" @click="onAction">{{ actionLabel }}</button>
                    </slot>
                </div>
            </div>
        </div>
    `,
    setup(props, ctx) {
      const isOffline = computed(() => props.type === 'offline');
      const isError = computed(() => props.type === 'error');
      const mapped = computed(() => {
        if (!isError.value && !isOffline.value) return null;
        const fn = EMAP.describe;
        if (typeof fn !== 'function') return null;
        if (isOffline.value) return fn('offline');
        return fn(props.errorCode || 'server_error');
      });
      const meta = computed(() => (typeof CORE.resolve === 'function') ? CORE.resolve(props.type) : {});
      const icon = computed(() => props.icon || meta.value.icon || (mapped.value ? 'alert-triangle' : ''));
      const title = computed(() => props.title || (mapped.value && mapped.value.title) || meta.value.title || '');
      const desc = computed(() => props.desc || (mapped.value ? mapped.value.text : '') || meta.value.desc || '');
      const retryable = computed(() => !!meta.value.retry);
      // 空态 100% 有主行动; 错误/离线按四态元数据决定
      const showAction = computed(() => props.type === 'empty' || retryable.value);
      // ASCII 名称(含 -) → Lucide; emoji/空 → 原样
      const isIconName = computed(() => /^[a-z][a-z0-9-]*$/.test(String(icon.value || '')));

      // ─── 6.4.2 (FR-646): 重试节流 (最多 3 次, 指数退避) ───
      const attempt = ref(0);
      const retryPolicy = computed(() => {
        if (typeof EMAP.retryPolicy !== 'function') return { allowed: true, remaining: 3, delaySeconds: 0 };
        return EMAP.retryPolicy(attempt.value, { maxAttempts: 3, baseSeconds: 2 });
      });
      const retryBlocked = computed(() => !retryPolicy.value.allowed);
      // 6.4.2 (FR-646 第 2 条): 行动按错误类型可点 — 重试/切备用源/去配置/重新登录/联系管理员/返回
      const ACTION_LABELS = {
        retry: '重试',
        retry_later: '稍后重试',
        go_datasource: '切换数据源',
        go_status: '查看系统状态',
        relogin: '重新登录',
        contact_admin: '联系管理员',
        back: '返回上一页',
      };
      const errorActionKey = computed(() => (mapped.value && mapped.value.actionKey) || 'retry');
      const actionLabel = computed(() => {
        if (props.actionText) return props.actionText;
        if (props.type === 'empty') return (props.actionKey && props.actionKey !== 'refresh') ? '前往' : '刷新数据';
        if (errorActionKey.value === 'retry' || errorActionKey.value === 'retry_later') {
          return retryBlocked.value ? '已达重试上限' : (ACTION_LABELS[errorActionKey.value] || '重试');
        }
        return ACTION_LABELS[errorActionKey.value] || '重试';
      });

      function pageKey() {
        try {
          const st = window.__quantState;
          return (st && st.currentPage && st.currentPage.value) || '';
        } catch (e) {
          console.warn('[state-panel] 读取当前页失败', e);
          return '';
        }
      }
      function track(event, props2) {
        try {
          if (window.QuantEvents && typeof window.QuantEvents.track === 'function') {
            window.QuantEvents.track(event, props2 || {});
          }
        } catch (e) {
          console.warn('[state-panel] 埋点失败', e);
        }
      }
      function onAction() {
        if (props.type === 'empty') {
          const key = props.actionKey || (props.actionText ? 'action' : 'refresh');
          track('empty_action', {
            page: pageKey(),
            action: key,
            title: props.title || '',
          });
          runEmptyAction(key);
          return;
        }
        const key = errorActionKey.value;
        track('error_retry', {
          page: pageKey(),
          code: String(mapped.value ? mapped.value.code : props.errorCode || props.type),
          retry_count: attempt.value,
          action: key,
        });
        if (key !== 'retry' && key !== 'retry_later') {
          runErrorAction(key);
          return;
        }
        if (retryBlocked.value) return;
        attempt.value += 1;
        ctx.emit('retry');
      }

      // 6.4.2 (FR-646): 非重试类行动 (切源/去配置/重新登录/联系管理员/返回)
      function runErrorAction(key) {
        try {
          if (key === 'go_datasource') {
            if (typeof window.__quantGoPage === 'function') window.__quantGoPage('system', 'datasource');
          } else if (key === 'go_status') {
            if (typeof window.__quantGoPage === 'function') window.__quantGoPage('ops', 'status');
          } else if (key === 'relogin') {
            window.dispatchEvent(new CustomEvent('qc:require-login'));
          } else if (key === 'contact_admin') {
            const EM = window.ElementPlus && window.ElementPlus.ElMessage;
            if (EM) EM.info('请联系系统管理员开通权限；管理员可在「系统状态 → 系统管理」查看用户与权限');
          } else if (key === 'back') {
            window.history.back();
          }
        } catch (e) {
          console.warn('[state-panel] 错误行动执行失败', e);
        }
        ctx.emit('action');
      }

      // 空态主行动: 语义键 → 直达/刷新 (父组件 @action 可覆盖)
      function runEmptyAction(key) {
        const NAV = {
          go_datasource: ['system', 'datasource'],
          go_pool: ['calendar', 'pool'],
          go_watchlist: ['ai', 'watchlist'],
          go_strategy: ['research', 'research-overview'],
          go_status: ['ops', 'status'],
          go_eval_history: ['ai', 'history'],
        };
        if (NAV[key]) {
          try {
            if (typeof window.__quantGoPage === 'function') window.__quantGoPage(NAV[key][0], NAV[key][1]);
            ctx.emit('action');
          } catch (e) {
            console.warn('[state-panel] 主行动跳转失败', e);
          }
          return;
        }
        if (key === 'refresh') {
          // 全局刷新当前页 (runtime/keys 层监听)
          try {
            window.dispatchEvent(new CustomEvent('qc:empty-action', { detail: { page: pageKey() } }));
          } catch (e) {
            console.warn('[state-panel] 派发刷新事件失败', e);
          }
          ctx.emit('retry');
          return;
        }
        // 自定义行动: 交给父组件处理
        ctx.emit('action');
      }

      onMounted(function () {
        if (isError.value || isOffline.value) {
          track('error_shown', {
            page: pageKey(),
            code: String(mapped.value ? mapped.value.code : props.errorCode || props.type),
            retry_count: 0,
          });
        }
      });

      return {
        icon, title, desc, retryable, showAction, isIconName,
        actionLabel, retryBlocked, onAction,
      };
    },
  };
})();
