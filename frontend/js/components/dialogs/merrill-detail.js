// quant-calendar: MerrillDetailDialog 组件 (v3.11 / FR-3.11.2)
// 美林时钟阶段详情报告对话框 — 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.MerrillDetailDialog = {
    name: 'qc-merrill-detail-dialog',
    template: `
        <el-dialog v-model="showMerrillDetail" custom-class="merrill-detail-dialog" :title="(merrillDetailData.icon || '🔬') + ' ' + (merrillDetailData.name || '经济周期分析') + ' - 详细分析报告'" width="800px" class="merrill-detail-dialog">
            <!-- 骨架屏加载 -->
            <div v-if="!merrillDetailData.name" class="skeleton-loader">
                <div class="skeleton-header"></div>
                <div class="skeleton-grid">
                    <div class="skeleton-item" v-for="i in 5" :key="i"></div>
                </div>
                <div class="skeleton-large"></div>
            </div>
            <!-- 完整内容 -->
            <div v-else style="padding: 15px 0 25px 0;">
                <!-- 阶段概览 -->
                <div class="merrill-detail-header" :style="{backgroundColor: merrillDetailData.bg_color, borderLeftColor: merrillDetailData.color}">
                    <div>
                        <h3 style="margin: 0 0 8px 0; font-size: var(--font-lg);">{{ merrillDetailData.name }}</h3>
                        <p style="margin: 0; color: var(--text-secondary); font-size: var(--font-base);">{{ merrillDetailData.description }}</p>
                    </div>
                    <div class="stage-badge" :style="{backgroundColor: merrillDetailData.color}">
                        {{ merrillDetailData.criteria?.growth }} / {{ merrillDetailData.criteria?.inflation }}
                    </div>
                </div>

                <!-- ★ 当前周期状态：活跃阶段=实时进度，非活跃阶段=上一轮历史 -->
                <!-- 活跃阶段：实时进度 -->
                <div v-if="merrillDetailData._isCurrent && merrillDetailData._currentTiming" class="detail-section" style="margin-top: 4px;">
                    <div class="section-title">📍 当前周期实时进度</div>
                    <div style="display: grid; grid-template-columns: repeat(4,1fr); gap: 12px;">
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.current_stage_start_date || '—' }}</div>
                            <div class="stat-label">周期起始日</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.duration_days }}天</div>
                            <div class="stat-label">已持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color}">{{ merrillDetailData._currentTiming.maturity || '—' }}</div>
                            <div class="stat-label">成熟度</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData._currentTiming.predicted_end?.base || merrillDetailData._currentTiming.predicted_end || '—' }}</div>
                            <div class="stat-label">预测结束日</div>
                        </div>
                    </div>
                    <div style="margin-top: 12px; display: flex; gap: 18px; align-items: center; font-size: var(--font-base); flex-wrap: wrap;">
                        <span v-if="merrillDetailData._confidence">置信度：<b :style="{color: confidenceColor}">{{ merrillDetailData._confidence.level }}</b></span>
                        <span v-if="merrillDetailData._currentTiming.progress_percent > 0">进度：<b>{{ merrillDetailData._currentTiming.progress_percent }}%</b></span>
                        <span v-if="merrillDetailData._nextPrediction?.next_stage" style="color: var(--el-warning); font-weight: var(--font-semibold);">
                            ⚠️ →{{ merrillDetailData._nextPrediction.next_stage_name }} {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(0) || 0 }}%
                        </span>
                    </div>
                    <!-- 过渡警告横幅 -->
                    <div v-if="merrillDetailData._currentTiming.progress_percent > 80 && merrillDetailData._nextPrediction?.transition_probability > 0.15"
                         style="margin-top: 10px; padding: 10px 14px; background: linear-gradient(135deg, #FFF3E0, #FFEBEE); border-radius: 8px; border-left: 4px solid #FF9800; font-size: var(--font-base);">
                        <b style="color: #E65100;">⚠️ 周期切换预警</b>
                        <span style="color: var(--text-secondary); margin-left: 8px;">
                            当前{{ merrillDetailData.name }}已进入后期（{{ merrillDetailData._currentTiming.progress_percent }}%），
                            预测下一阶段为<b style="color: #FF9800;">{{ merrillDetailData._nextPrediction.next_stage_name }}</b>
                            （概率 {{ (merrillDetailData._nextPrediction.transition_probability*100)?.toFixed(0) || 0 }}%）
                        </span>
                    </div>
                </div>

                <!-- 非活跃阶段：历史轮次 -->
                <div v-else-if="merrillDetailData._history && merrillDetailData._history.length > 0" class="detail-section" style="margin-top: 4px;">
                    <div class="section-title">📅 历史轮次（共 {{ merrillDetailData._history.length }} 轮）</div>
                    <!-- 最近一次：摘要卡片 -->
                    <div v-if="merrillDetailData._lastPeriod" style="display: grid; grid-template-columns: repeat(4,1fr); gap: 12px; margin-bottom: 14px;">
                        <div class="stat-item">
                            <div class="stat-value" style="font-size: var(--font-base); font-weight: var(--font-semibold);">{{ merrillDetailData._lastPeriod.start || '—' }}</div>
                            <div class="stat-label">开始</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" style="font-size: var(--font-base); font-weight: var(--font-semibold);">{{ merrillDetailData._lastPeriod.end || '—' }}</div>
                            <div class="stat-label">结束</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" style="font-size: var(--font-base); font-weight: var(--font-semibold);">{{ merrillDetailData._lastPeriod.duration || '—' }}</div>
                            <div class="stat-label">持续</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value" :style="{color: merrillDetailData.color, fontSize: 'var(--font-base)'}">{{ merrillDetailData._lastPeriod.cycle_label || '—' }}</div>
                            <div class="stat-label">周期</div>
                        </div>
                    </div>
                    <!-- 全部历史轮次列表 -->
                    <div v-for="(h, hIdx) in merrillDetailData._history" :key="hIdx"
                         style="padding: 10px 12px; margin-bottom: 8px; border-radius: 8px; background: var(--bg-card-header); border-left: 3px solid;"
                         :style="{borderLeftColor: merrillDetailData.color}">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                            <span style="font-weight: var(--font-semibold); font-size: var(--font-base);">
                                <span style="padding: 1px 6px; border-radius: 4px; font-size: var(--font-xs); margin-right: 6px; background: var(--el-fill-color-light);">{{ h.cycle_label || '—' }}</span>
                                {{ h.start || '—' }} → {{ h.end || '—' }}
                            </span>
                            <span style="font-size: var(--font-sm); color: var(--text-secondary);">{{ h.duration || '—' }}</span>
                        </div>
                        <div style="font-size: var(--font-sm); color: var(--text-secondary); line-height: 1.5;">
                            🔑 {{ h.trigger || '—' }}
                        </div>
                        <div v-if="h.key_indicators && Object.keys(h.key_indicators).length" style="margin-top: 6px; display: flex; gap: 10px; flex-wrap: wrap; font-size: var(--font-xs); color: var(--text-tertiary);">
                            <span v-if="h.key_indicators.gdp_growth">GDP {{ h.key_indicators.gdp_growth }}%</span>
                            <span v-if="h.key_indicators.cpi">CPI {{ h.key_indicators.cpi }}%</span>
                            <span v-if="h.key_indicators.pmi">PMI {{ h.key_indicators.pmi }}</span>
                            <span v-if="h.key_indicators.ppi">PPI {{ h.key_indicators.ppi }}%</span>
                        </div>
                    </div>
                </div>
                <!-- 无历史记录 -->
                <div v-else-if="!merrillDetailData._isCurrent && !merrillDetailData._lastPeriod" class="detail-section" style="margin-top: 4px;">
                    <div class="section-title">📅 历史轮次</div>
                    <div style="text-align: center; color: var(--text-tertiary); padding: 20px 0;">暂无历史记录</div>
                </div>

                <!-- 经济特征 -->
                <div class="detail-section">
                    <div class="section-title">📊 经济特征</div>
                    <div class="characteristics-grid">
                        <div v-for="(value, key) in merrillDetailData.characteristics" :key="key" class="char-item">
                            <div class="char-label">{{ getCharLabel(key) }}</div>
                            <div class="char-value">{{ value }}</div>
                        </div>
                    </div>
                </div>

                <!-- v2.0: 多维度评分详情 -->
                <div v-if="merrillData.dimension_scores" class="detail-section">
                    <div class="section-title">🎯 多维度评分详情</div>
                    <div v-for="dim in dimensionScoreList" :key="dim.key" style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: var(--font-base);">
                        <span style="width: 50px; flex-shrink: 0; color: var(--text-secondary);">{{ dim.label }}</span>
                        <div style="flex: 1; height: 14px; background: var(--border-light); border-radius: 7px; overflow: hidden;">
                            <div :style="{width: dim.barWidth + '%', background: dim.barColor}" style="height: 100%; border-radius: 7px; transition: width 0.5s;"></div>
                        </div>
                        <span :style="{color: dim.scoreColor}" style="width: 40px; text-align: right; font-weight: var(--font-medium);">+{{ dim.scoreStr }}</span>
                        <span :style="{color: dim.color}" style="font-weight: var(--font-medium); font-size: var(--font-sm);">{{ dim.level }}</span>
                    </div>
                    <div v-if="merrillData.early_warnings?.length" style="margin-top: 12px; padding: 10px 14px; background: var(--badge-warning-bg); border-radius: 8px; font-size: var(--font-sm);">
                        <b style="color: #E53935;">⚠️ 早期预警：</b>
                        <span v-for="(w, i) in merrillData.early_warnings" :key="i" style="display: inline-block; margin-right: 12px;">{{ w.type || w }}</span>
                    </div>
                </div>

                <!-- 资产配置建议 -->
                <div class="detail-section">
                    <div class="section-title">💼 资产配置建议</div>
                    <div class="allocation-grid">
                        <div v-for="(info, asset) in merrillDetailData.allocation" :key="asset" class="allocation-item">
                            <div class="allocation-header">
                                <span class="asset-name">{{ getAssetName(asset) }}</span>
                                <span class="asset-rank" :style="{backgroundColor: getRankColor(info.rank)}">排名 #{{ info.rank }}</span>
                            </div>
                            <div class="allocation-advice">{{ info.advice }}</div>
                            <div class="allocation-return">预期收益：<span>{{ info.expected_return }}</span></div>
                        </div>
                    </div>
                </div>

                <!-- 行业配置建议 -->
                <div class="detail-section">
                    <div class="section-title">🏭 行业配置建议</div>
                    <div class="sector-list">
                        <div v-for="(advice, index) in merrillDetailData.sector_advice" :key="index" class="sector-item">
                            {{ advice }}
                        </div>
                    </div>
                </div>

                <!-- v3.7.13: 策略建议 -->
                <div v-if="merrillDetailData.strategy_mapping" class="detail-section">
                    <div class="section-title">📐 策略建议</div>
                    <div class="allocation-grid" style="grid-template-columns: repeat(2, 1fr);">
                        <div class="allocation-item">
                            <div class="allocation-header">🏆 主推策略</div>
                            <div class="allocation-advice" style="color: var(--color-primary);">
                                {{ (merrillDetailData.strategy_mapping.primary || []).join(' · ') }}
                            </div>
                        </div>
                        <div class="allocation-item">
                            <div class="allocation-header">📌 次选策略</div>
                            <div class="allocation-advice" style="color: var(--el-warning);">
                                {{ (merrillDetailData.strategy_mapping.secondary || []).join(' · ') }}
                            </div>
                        </div>
                    </div>
                    <div style="margin-top: 8px; padding: 8px 12px; background: var(--bg-card-header); border-radius: 8px; font-size: var(--font-sm); color: var(--text-secondary);">
                        💡 {{ merrillDetailData.strategy_mapping.rationale }}
                    </div>
                </div>

                <!-- 历史统计 -->
                <div class="detail-section">
                    <div class="section-title">📜 历史统计</div>
                    <div class="stats-grid">
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.avg_duration_months }}个月</div>
                            <div class="stat-label">历史平均持续时间</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ (merrillDetailData.historical_stats?.stock_avg_return * 100).toFixed(0) }}%</div>
                            <div class="stat-label">股票平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ (merrillDetailData.historical_stats?.bond_avg_return * 100).toFixed(0) }}%</div>
                            <div class="stat-label">债券平均年化收益</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">{{ merrillDetailData.historical_stats?.best_sector }}</div>
                            <div class="stat-label">历史表现最佳板块</div>
                        </div>
                    </div>
                </div>

                <!-- 典型历史案例 -->
                <div v-if="merrillDetailData.case_studies?.length" class="detail-section">
                    <div class="section-title">📚 典型历史案例</div>
                    <div class="case-list">
                        <div v-for="(cs, index) in merrillDetailData.case_studies" :key="index" class="case-item">
                            📌 {{ cs }}
                        </div>
                    </div>
                </div>

                <!-- 风险提示 -->
                <div class="detail-section risk-section">
                    <div class="section-title">⚠️ 风险提示</div>
                    <div class="risk-list">
                        <div v-for="(risk, index) in merrillDetailData.risks" :key="index" class="risk-item">
                            {{ risk }}
                        </div>
                    </div>
                </div>

                <!-- 底部金色装饰 -->
                <div class="merrill-footer-decoration">
                    <div class="gold-gradient-bar"></div>
                    <div class="footer-hint">
                        <span>美林时钟仅供参考，不构成投资建议</span>
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
