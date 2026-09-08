// quant-calendar: Onboarding 新手引导层 (V5.0.6 / T-5.0.61)
// 5 步任务流: 状态机与持久化在 onboarding-core.js (UMD, node 可测),
// 本组件为薄壳渲染: 覆盖层 + 步骤卡 + 进度条 + 上一步/下一步/跳过/完成。
// 进度持久化: 登录用户 → /api/user_config/preferences (onboarding_progress, 跨设备同步);
// 游客/离线 → localStorage 降级。完成或跳过后再不展示。
(function () {
  if (typeof window === 'undefined' || !window.Vue) return;
  const { ref, computed, onMounted } = Vue;
  const OC = window.QuantOnboarding;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.Onboarding = {
    name: 'qc-onboarding',
    template: `
      <div v-if="visible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="onboarding-title">
        <div class="onboarding-card">
          <div class="onboarding-head">
            <div class="onboarding-step-badge">{{ st.stepIndex + 1 }} / 5</div>
            <div class="onboarding-progress-track" aria-hidden="true">
              <div class="onboarding-progress-fill" :style="{ width: prog.pct + '%' }"></div>
            </div>
          </div>
          <div class="onboarding-title" id="onboarding-title">{{ step.title }}</div>
          <div class="onboarding-desc">{{ step.desc || stepKey }}</div>
          <div class="onboarding-actions">
            <el-button size="small" text @click="skip" aria-label="跳过引导">跳过</el-button>
            <el-button v-if="st.stepIndex > 0" size="small" @click="prev">上一步</el-button>
            <el-button v-if="!isLast" size="small" type="primary" @click="next">下一步</el-button>
            <el-button v-else size="small" type="primary" @click="finish">开始使用</el-button>
          </div>
        </div>
      </div>
    `,
    setup() {
      const visible = ref(false);
      const st = ref(OC.createOnboardingState());
      const step = computed(function () { return OC.steps()[st.value.stepIndex]; });
      const prog = computed(function () { return OC.progress(st.value); });
      const isLast = computed(function () { return st.value.stepIndex >= OC.stepCount() - 1; });
      const stepKey = computed(function () { return 'onboarding.step.' + step.value.key; });

      function persist() {
        const payload = OC.persistState(st.value);
        fetch('/api/user_config/preferences', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ preferences: { onboarding_progress: payload } }),
        }).then(function (res) { return res.json(); }).catch(function () {
          // 游客/离线: localStorage 降级
          try { localStorage.setItem('qc_onboarding_progress', payload); } catch (e) { /* 忽略 */ }
        });
      }

      function next() { st.value = OC.next(st.value); }
      function prev() { st.value = OC.prev(st.value); }
      function finish() { st.value = OC.complete(st.value); persist(); visible.value = false; }
      function skip() { st.value = OC.dismiss(st.value); persist(); visible.value = false; }

      function init() {
        fetch('/api/user_config/preferences')
          .then(function (res) { return res.json(); })
          .then(function (data) {
            const raw = data && data.preferences && data.preferences.onboarding_progress;
            if (raw) { st.value = OC.parseState(raw); }
            return raw;
          })
          .catch(function () { return null; })
          .then(function (raw) {
            if (!raw) {
              try {
                const local = localStorage.getItem('qc_onboarding_progress');
                if (local) st.value = OC.parseState(local);
              } catch (e) { /* 忽略 */ }
            }
            if (!OC.isComplete(st.value) && !st.value.dismissed) visible.value = true;
          });
      }

      onMounted(init);
      return { visible, st, step, prog, isLast, stepKey, next, prev, finish, skip };
    },
  };
})();
