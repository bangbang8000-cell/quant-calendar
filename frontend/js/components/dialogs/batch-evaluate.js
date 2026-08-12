// quant-calendar: BatchEvaluateDialog 组件 (v3.11 / FR-3.11.2)
// 批量AI评估对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.BatchEvaluateDialog = {
    name: 'qc-batch-evaluate-dialog',
    template: `
        <el-dialog v-model="showBatchEvaluate" title="🤖 批量AI评估" width="95%" style="max-width:520px;">
            <div style="padding: 15px 0 15px 0;">
                <el-form label-width="100px" v-if="!batchRunning">
                    <el-form-item label="股票列表">
                        <el-input
                            v-model="batchStocks"
                            type="textarea"
                            :rows="5"
                            placeholder="输入股票代码，多个用换行或空格分隔&#10;例如：&#10;600000.SH&#10;000001.SZ"
                        />
                    </el-form-item>
                </el-form>
                <!-- 评估进度 -->
                <div v-if="batchRunning" style="padding: 10px 0;">
                    <div style="display:flex;justify-content:space-between;margin-bottom:8px;font-size:var(--font-sm);color:var(--text-secondary);">
                        <span>评估中 {{ batchCompleted }}/{{ batchTotal }} <span v-if="batchElapsed>0" style="color:var(--color-primary);">· 已用时 {{ batchElapsed }}s</span></span>
                        <span v-if="batchCurrent" style="color:var(--color-primary);font-weight:var(--font-semibold);">{{ batchCurrent }}</span>
                    </div>
                    <div v-if="batchCompleted===0 && batchElapsed>=8" style="margin-bottom:8px;font-size:var(--font-xs);color:var(--text-tertiary);">全新评估需调用大模型，请耐心等待（约需数秒至1分钟）…</div>
                    <div style="height:6px;background:var(--border-light);border-radius:3px;overflow:hidden;">
                        <div :style="{width:(batchTotal>0?batchCompleted/batchTotal*100:0)+'%',height:'100%',background:'var(--gradient-brand)',borderRadius:'3px',transition:'width 0.4s ease'}"></div>
                    </div>
                    <div style="margin-top:12px;max-height:240px;overflow-y:auto;">
                        <div v-for="(status,code) in batchStatuses" :key="code" style="display:flex;align-items:center;gap:8px;padding:4px 0;font-size:var(--font-sm);">
                            <span v-if="status==='running'" style="color:var(--color-primary);">⏳</span>
                            <span v-else-if="status==='success'" style="color:var(--el-success);">●</span>
                            <span v-else-if="status==='error'" style="color:var(--el-danger);">✕</span>
                            <span v-else style="color:var(--text-tertiary);">⏸</span>
                            <span style="color:var(--text-primary);flex:1;">{{ code }}</span>
                            <span v-if="status==='success' && batchResults[code] && batchResults[code].result" style="font-weight:var(--font-bold);font-size:var(--font-sm);" :style="{color:batchResults[code].result.level_color||'var(--text-primary)'}">{{ batchResults[code].result.total_score }}分</span>
                        </div>
                    </div>
                </div>
                <div style="text-align: right; margin-top: 20px;">
                    <el-button @click="showBatchEvaluate = false" :disabled="batchRunning">取消</el-button>
                    <el-button type="primary" @click="doBatchEvaluate" :loading="batchRunning" :disabled="batchRunning">开始评估</el-button>
                </div>
            </div>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // v3.14.2: 已用计时 — 批量评估期间显示秒数, 避免"进度冻结"误判为卡死
      const batchElapsed = Vue.ref(0);
      let batchTimer = null;
      if (state.batchRunning && state.batchRunning.__v_isRef) {
        Vue.watch(state.batchRunning, (running) => {
          if (running) {
            batchElapsed.value = 0;
            batchTimer = setInterval(() => { batchElapsed.value++; }, 1000);
          } else {
            if (batchTimer) { clearInterval(batchTimer); batchTimer = null; }
          }
        });
      }
      return { ...state, batchElapsed };
    },
  };
})();
