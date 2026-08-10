// quant-calendar: TourDialog 组件 (v3.11 / FR-3.11.2)
// 首次使用引导对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.TourDialog = {
    name: 'qc-tour-dialog',
    template: `
        <el-dialog v-model="tourVisible" title="" width="440px" :show-close="false" class="tour-dialog">
            <div style="text-align: center; padding: 8px 0 4px 0;">
                <div style="font-size: 48px; margin-bottom: 12px;">{{ tourSteps[tourStep].icon }}</div>
                <div style="font-size: var(--font-lg); font-weight: var(--font-semibold); margin-bottom: 8px;">{{ tourSteps[tourStep].title }}</div>
                <div style="color: var(--text-secondary); line-height: 1.7; font-size: var(--font-base);">{{ tourSteps[tourStep].desc }}</div>
            </div>
            <template #footer>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <el-button size="small" text @click="skipTour">跳过</el-button>
                    <div style="display: flex; gap: 4px;">
                        <span v-for="(s, i) in tourSteps" :key="i" class="tour-dot" :class="{active: i === tourStep}"></span>
                    </div>
                    <el-button v-if="tourStep < tourSteps.length - 1" size="small" type="primary" @click="tourStep++">下一步</el-button>
                    <el-button v-else size="small" type="primary" @click="finishTour">开始使用</el-button>
                </div>
            </template>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      return { ...state };
    },
  };
})();
