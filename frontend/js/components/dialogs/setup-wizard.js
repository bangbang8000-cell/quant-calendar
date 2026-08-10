// quant-calendar: SetupWizardDialog 组件 (v3.11 / FR-3.11.2)
// 系统初始化向导对话框（三步：密码/AI模型/Tushare）— 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.SetupWizardDialog = {
    name: 'qc-setup-wizard-dialog',
    template: `
        <el-dialog v-model="showSetupWizard" title="系统初始化设置" width="500px" :close-on-click-modal="false" :show-close="false">
            <div style="min-height: 280px;">
                <!-- 步骤 1: 修改密码 -->
                <div v-if="setupStep === 1">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: var(--font-3xl); margin-bottom: 8px;">🔐</div>
                        <div style="font-weight: 600; font-size: var(--font-md);">管理员密码</div>
                        <div style="color: #999; margin-top: 4px;">建议修改默认密码以保证安全</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="新密码（留空则保持不变）">
                            <el-input v-model="setupForm.newPassword" type="password" placeholder="至少4位，留空保持默认" show-password />
                        </el-form-item>
                    </el-form>
                    <div style="text-align: center; margin-top: 12px;">
                        <el-button type="primary" @click="setupStep = 2" size="large">下一步</el-button>
                        <el-button @click="setupStep = 2" size="large" style="margin-left: 8px;">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 2: AI 模型 -->
                <div v-if="setupStep === 2">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: var(--font-3xl); margin-bottom: 8px;">🤖</div>
                        <div style="font-weight: 600; font-size: var(--font-md);">AI 大模型配置</div>
                        <div style="color: #999; margin-top: 4px;">用于股票智能评估，支持 DeepSeek/OpenAI 等</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="提供商">
                            <el-select v-model="setupForm.aiProvider" style="width: 100%">
                                <el-option label="DeepSeek" value="deepseek" />
                                <el-option label="OpenAI" value="openai" />
                                <el-option label="其他兼容接口" value="custom" />
                            </el-select>
                        </el-form-item>
                        <el-form-item label="API Key">
                            <el-input v-model="setupForm.aiKey" placeholder="sk-..." show-password />
                        </el-form-item>
                        <el-form-item label="接口地址" v-if="setupForm.aiProvider === 'custom'">
                            <el-input v-model="setupForm.aiEndpoint" placeholder="https://api.example.com/v1" />
                        </el-form-item>
                    </el-form>
                    <div style="text-align: center; margin-top: 12px;">
                        <el-button @click="setupStep = 1" size="large">上一步</el-button>
                        <el-button type="primary" @click="setupStep = 3" size="large" style="margin-left: 8px;">下一步</el-button>
                        <el-button @click="setupStep = 3" size="large" style="margin-left: 8px;">跳过</el-button>
                    </div>
                </div>

                <!-- 步骤 3: Tushare -->
                <div v-if="setupStep === 3">
                    <div style="text-align: center; margin-bottom: 24px;">
                        <div style="font-size: var(--font-3xl); margin-bottom: 8px;">📊</div>
                        <div style="font-weight: 600; font-size: var(--font-md);">Tushare 数据源</div>
                        <div style="color: #999; margin-top: 4px;">用于获取行情数据和股票信息</div>
                    </div>
                    <el-form :model="setupForm" label-position="top">
                        <el-form-item label="Tushare Token">
                            <el-input v-model="setupForm.tushareToken" placeholder="在 tushare.pro 注册获取" show-password />
                        </el-form-item>
                    </el-form>
                    <div style="text-align: center; margin-top: 12px;">
                        <el-button @click="setupStep = 2" size="large">上一步</el-button>
                        <el-button type="success" @click="completeSetupWizard" size="large" style="margin-left: 8px;">完成初始化</el-button>
                        <el-button @click="completeSetupWizard" size="large" style="margin-left: 8px;">跳过</el-button>
                    </div>
                </div>
            </div>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      return { ...state };
    },
  };
})();
