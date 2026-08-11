// quant-calendar: AutoEvaluateDialog 组件 (v3.11 / FR-3.11.2)
// 自动评估设置对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.AutoEvaluateDialog = {
    name: 'qc-auto-evaluate-dialog',
    template: `
        <el-dialog v-model="showAutoEvaluateSettings" title="⚙️ 自动评估设置" width="520px">
            <div style="padding: 15px 0 25px 0;">
                <el-form label-width="120px">
                    <el-form-item label="启用自动评估">
                        <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" />
                    </el-form-item>
                    <template v-if="autoEvaluateConfig.enabled">
                        <el-form-item label="执行周期">
                            <el-select v-model="autoEvaluateConfig.schedule_type" style="width: 100%;">
                                <el-option label="每个交易日执行" value="daily" />
                                <el-option label="每周一执行" value="weekly" />
                                <el-option label="每月1号执行" value="monthly" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="执行时间">
                            <el-time-picker
                                v-model="autoEvaluateConfig.schedule_time"
                                format="HH:mm"
                                value-format="HH:mm"
                                placeholder="选择执行时间"
                                style="width: 100%;"
                            />
                        </el-form-item>
                        <el-form-item label="评估范围">
                            <el-radio-group v-model="autoEvaluateScope">
                                <el-radio label="watchlist">我的自选</el-radio>
                                <el-radio label="new_entries">最新交易日新入池</el-radio>
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="结果推送">
                            <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" />
                            <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 6px;">
                                需要先在飞书推送配置中设置Webhook地址
                            </div>
                        </el-form-item>
                    </template>
                </el-form>
            </div>
            <template #footer>
                <el-button @click="showAutoEvaluateSettings = false">取消</el-button>
                <el-button type="primary" @click="saveAutoEvaluateConfig" :loading="savingConfig">
                    💾 保存设置
                </el-button>
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
