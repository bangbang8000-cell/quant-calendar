// quant-calendar: ResearchPage 组件 (v3.6.0-T8 / FR-3.6.2)
// 策略研究页: 单根div, 4子页 v-if 链
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ResearchPage = {
    name: 'qc-research-page',
    template: `
                <div v-if="currentPage === 'research'" key="research">
                    <!-- v3.16 (16.8): 功能未开启时的统一占位 -->
                    <qc-state-panel v-if="!researchMenuEnabled" type="empty" icon="🔒" title="研究功能未开启"
                        desc="请在「系统配置 → 功能开关」中启用「策略研究」菜单"></qc-state-panel>
                    <template v-else>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">🔬 量化研究</div>
                        <qc-state-panel type="empty" icon="🔬" title="敬请期待" desc="量化研究功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-write'" class="card">
                        <div class="card-title">⚙️ 策略编写</div>
                        <qc-state-panel type="empty" icon="🛠️" title="敬请期待" desc="策略编写功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">🔬 策略回测</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; align-items: center;">
                            <el-select v-model="backtestStrategy" size="small" style="width: 180px;" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker v-model="backtestRange" type="daterange" size="small"
                                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                style="width: 260px;" value-format="YYYY-MM-DD" />
                            <el-input-number v-model="backtestCapital" size="small" :min="10000" :step="50000"
                                style="width: 140px;" />
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning">▶ 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 16px;">
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.total_return_pct }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.annual_return_pct }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.max_drawdown_pct }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.sharpe_ratio }}</div>
                                    <div class="stat-label">夏普比率</div>
                                </div>
                            </div>
                            <div id="backtestEquityChart" style="width: 100%; height: 320px;"></div>
                            <div style="color: var(--text-tertiary); font-size: var(--font-sm); margin-top: 8px;">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <div v-else class="empty-state" style="padding: 30px 0;">选择策略和日期范围后点击"运行回测"</div>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest-history'" class="card">
                        <div class="card-title">📋 回测记录</div>
                        <qc-state-panel type="empty" icon="📝" title="敬请期待" desc="回测记录功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    </template>
                </div>`,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      return { ...state };
    },
  };
})();
