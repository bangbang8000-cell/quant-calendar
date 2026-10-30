// quant-calendar: IndexDetailDialog 组件 (v3.11 / FR-3.11.2)
// 指数详情分析对话框（含K线/均线/AI评估）— 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
// 注：#indexKlineChart 为 ECharts 挂载点，app-logic 的 K线 init 通过该 id 定位。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.IndexDetailDialog = {
    name: 'qc-index-detail-dialog',
    props: {
      // V5.16 (F4): true=内嵌面板(双栏右栏, 无遮罩/无关闭按钮); false/缺省=全局弹窗
      embedded: { type: Boolean, default: false },
    },
    template: `
        <el-dialog v-model="indexDetailVisible" title="" width="800px" class="kline-dialog"
            :append-to-body="!embedded" :modal="!embedded" :show-close="!embedded"
            :close-on-click-modal="!embedded" :lock-scroll="!embedded"
            :class="{ 'qc-embedded-dialog': embedded }">
            <div v-if="indexDetail">
                <!-- 头部信息 -->
                <div class="detail-header">
                    <div>
                        <h2 class="text-xl-title">{{ indexDetail.name }} <span class="text-md-muted">{{ indexDetail.code }}</span></h2>
                        <div class="detail-subtitle"><qc-icon name="line-chart" :size="13" /> {{ indexDetail.market }} 市场指数</div>
                    </div>
                    <div class="detail-score">
                        <div class="num" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ indexDetail.pct_chg >= 0 ? '+' : '' }}{{ indexDetail.pct_chg.toFixed(2) }}%</div>
                        <div class="label">{{ indexDetail.pct_chg >= 0 ? '上涨' : '下跌' }}</div>
                    </div>
                </div>

                <!-- 指数基本信息 -->
                <div class="stats-grid mt-4">
                    <div class="stat-box">
                        <div class="stat-label">最新点位</div>
                        <div class="stat-value">{{ Number(indexDetail.close).toFixed(2) }}</div>
                    </div>
                    <div class="stat-box">
                        <div class="stat-label">涨跌额</div>
                        <div class="stat-value" :style="{color: indexDetail.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                            {{ indexDetail.change >= 0 ? '+' : '' }}{{ Number(indexDetail.change).toFixed(2) }}
                        </div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.vol">
                        <div class="stat-label">成交量</div>
                        <div class="stat-value">{{ Math.round(indexDetail.vol / 10000).toLocaleString() }}万手</div>
                    </div>
                    <div class="stat-box" v-if="indexDetail.amount">
                        <div class="stat-label">成交额</div>
                        <!-- 6.6 (T-6.6.21, PRD FR-6.6.5): tushare amount 单位**千元**,
                             千元→亿元须 /1e5。旧代码 /1e4 导致成交额 10 倍虚高(71,562亿 vs 真实 7,156亿)。 -->
                        <div class="stat-value">{{ (indexDetail.amount / 100000).toFixed(2) }}亿</div>
                    </div>
                    <div class="stat-box" v-if="indexQuoteSummary">
                        <div class="stat-label">总市值</div>
                        <!-- 6.6 (T-6.6.26, 决策 D2): 指数无总市值概念 → 显示「指数不适用」 -->
                        <div class="stat-value">{{ indexQuoteSummary.total_mv_text }}</div>
                    </div>
                </div>

                <!-- 6.6 (T-6.6.27, PRD FR-6.6.5): 多周期涨跌幅（日/周/月/季/年, ≤2 位小数）。
                     用户需求: 「当日（周 月 季 年）涨跌幅度，鼠标悬浮后信息也要展示」。 -->
                <div class="stats-grid mt-4" v-if="indexQuoteSummary && indexQuoteSummary.changes">
                    <div class="stat-box" v-for="p in [['day','当日'],['week','近一周'],['month','近一月'],['quarter','近一季'],['year','近一年']]"
                         :key="p[0]" :title="p[1] + '涨跌幅 ' + (indexQuoteSummary.changes_text[p[0]] || '—')">
                        <div class="stat-label">{{ p[1] }}</div>
                        <div class="stat-value"
                             :class="indexQuoteSummary.changes[p[0]] >= 0 ? 'color-rise' : 'color-fall'">
                            {{ indexQuoteSummary.changes_text[p[0]] || '—' }}
                        </div>
                    </div>
                </div>

                <!-- K线图区域 -->
                <div class="section-title mt-20"><span><qc-icon name="candlestick-chart" :size="14" /></span> K线图与均线</div>
                <div class="kline-container">
                    <div class="kline-tabs">
                        <button
                            v-for="tab in klinePeriods"
                            :key="tab.value"
                            :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                            @click="switchIndexKlinePeriod(tab.value)"
                        >
                            {{ tab.label }}
                        </button>
                    </div>
                    <div class="kline-chart" id="indexKlineChart"></div>
                    <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                    <div v-if="indexKlineLoaded" class="ma-toggle-row">
                        <span class="ma-toggle-label">均线</span>
                        <button
                            v-for="m in MA_LINES"
                            :key="m"
                            :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                            @click="toggleKlineMa(m)"
                        >{{ m }}</button>
                        <span class="ma-toggle-hint">十字线读价：悬停或点击图表</span>
                    </div>
                    <qc-state-panel v-if="indexKlineLoading" type="loading"></qc-state-panel>
                </div>

                <!-- AI评估结果 -->
                <div v-if="indexAiResult" class="ai-result-box">
                    <div class="section-title"><span><qc-icon name="bot" :size="14" /></span> AI智能指数评估结果</div>
                    <div class="ai-analysis" v-html="sanitizeHtml(indexAiResult.analysis)"></div>
                    <div class="mt-4">
                        <el-tag :type="indexAiResult.suggestion === '买入' ? 'success' : indexAiResult.suggestion === '卖出' ? 'danger' : 'warning'" size="large">
                            <qc-icon name="pin" :size="14" /> {{ indexAiResult.suggestion || '暂无' }}
                        </el-tag>
                        <span class="ml-12-base-secondary">信心指数: {{ fmtNum(indexAiResult.confidence || 75, 0) }}%</span>
                    </div>
                </div>

                <!-- 操作按钮 -->
                <div class="mt-20-center">
                    <el-button class="w-200" type="primary" size="large" @click="doIndexAiEvaluate" :loading="indexAiLoading">
                        <qc-icon name="search-check" :size="16" /> 技术指标评估
                    </el-button>
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
