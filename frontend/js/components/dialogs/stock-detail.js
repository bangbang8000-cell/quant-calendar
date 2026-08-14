// quant-calendar: StockDetailDialog 组件 (v3.11 / FR-3.11.2)
// 股票详情分析对话框（K线/AI评估结果/AI问股三 Tab）— 从 index.html 拆出独立组件。
// 状态经 inject('qcState') 共享（提供方：app-logic.js setup）。
// 注：#stockKlineChart 为 ECharts 挂载点，app-logic 的 K线 init 通过该 id 定位。
(function () {
  const { inject, computed } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StockDetailDialog = {
    name: 'qc-stock-detail-dialog',
    template: `
        <el-dialog v-model="stockDetailVisible" title="📈 股票详情分析" width="800px" class="kline-dialog">
            <!-- v3.16 (16.10-fix): 数据未就绪时显示加载态（弹窗已立即打开，避免接口慢导致延迟） -->
            <div v-if="stockDetailLoading && !stockDetail" class="empty-state" style="padding: 48px 0;">
                <div style="font-size: 44px; margin-bottom: 14px;">⏳</div>
                <div style="font-size: var(--font-md); font-weight: var(--font-medium); color: var(--text-primary);">正在加载股票详情...</div>
                <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 8px;">行情数据拉取中，请稍候</div>
            </div>
            <div v-else-if="stockDetail">
                <div class="detail-header">
                    <div>
                        <h3 style="font-size: var(--font-xl); margin: 0 0 4px 0; font-weight: var(--font-semibold);">{{ stockDetail.stock }} <span style="font-size: var(--font-md); opacity: 0.85; font-weight: normal;">{{ stockDetail.name }}</span></h3>
                        <div class="detail-subtitle">📅 策略持仓 {{ stockDetail.total_days }} 天</div>
                    </div>
                    <div class="score-badge" :class="{ pulse: scorePulse }">
                        <div class="score-num-wrap">
                            <div class="num">{{ stockDetail.score_data?.score || '-' }}</div>
                            <span v-if="scoreDelta" class="score-delta" :class="scoreDelta.dir">
                                {{ scoreDelta.value > 0 ? '+' : '' }}{{ scoreDelta.value }}
                            </span>
                        </div>
                        <div class="label">{{ stockDetail.score_data?.level || '未评估' }}</div>
                    </div>
                </div>
                <div class="detail-content">
                    <!-- Tab 切换 -->
                    <div style="display: flex; gap: 6px; margin-bottom: 16px; flex-wrap: wrap;">
                        <el-button size="small" :type="stockDetailTab === 'kline' ? 'primary' : ''" @click="stockDetailTab = 'kline'">
                            📈 K线图表
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'ai' ? 'primary' : ''" @click="stockDetailTab = 'ai'">
                            🤖 评估结果
                        </el-button>
                        <el-button size="small" :type="stockDetailTab === 'chat' ? 'primary' : ''" @click="stockDetailTab = 'chat'">
                            💬 AI 问股
                        </el-button>
                        <div style="flex: 1;"></div>
                        <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">
                            💡 智能评估
                        </el-button>
                        <el-button size="small" @click="toggleWatchlist(stockDetail.stock, stockDetail.name)" :type="watchlistCodes.has(stockDetail.stock) ? 'success' : 'primary'">
                            {{ watchlistCodes.has(stockDetail.stock) ? '★ 已自选' : '⭐ 加入自选' }}
                        </el-button>
                    </div>
                    <!-- 按钮底部进度条 -->
                    <div v-if="aiLoading" class="ai-progress-bar">
                        <div class="ai-progress-fill"></div>
                    </div>
                    <!-- v3.15 (15.3): 阶段指示器 — 与真实 await 联动 + 实时已用秒数 -->
                    <div v-if="aiLoading" class="ai-stage-indicator">
                        <div class="ai-stage-dots-row">
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'fetching' || aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon">📡</span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'calculating' || aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }">
                                <span class="ai-stage-icon">📊</span>
                            </div>
                            <div class="ai-stage-line" :class="{ done: aiEvalStage === 'analyzing' || aiEvalStage === 'done' }"></div>
                            <div class="ai-stage-dot" :class="{ active: aiEvalStage === 'analyzing' || aiEvalStage === 'done', done: aiEvalStage === 'done' }">
                                <span class="ai-stage-icon">🤖</span>
                            </div>
                        </div>
                        <div class="ai-stage-label">
                            <span class="ai-stage-text">{{ aiStageText }}</span>
                            <span v-if="aiEvalElapsed > 0" class="ai-stage-elapsed">· 已用时 {{ aiEvalElapsed }}s</span>
                        </div>
                    </div>
                    <!-- v3.15 (15.3): 评估失败提示 + 重试 -->
                    <div v-if="aiEvalError && !aiLoading" class="ai-eval-error">
                        <span class="ai-eval-error-icon">⚠️</span>
                        <span class="ai-eval-error-text" :title="aiEvalError">{{ aiEvalError }}</span>
                        <el-button size="small" type="primary" @click="doAiEvaluate">🔄 重试</el-button>
                    </div>

                    <!-- Tab: K线图表 -->
                    <div v-if="stockDetailTab === 'kline'">
                    <div class="section-title"><span>📈</span> 今日行情与均线</div>
                    <div class="grid-auto">
                        <div class="stat-box">
                            <div class="stat-label">收盘价</div>
                            <div class="stat-value">{{ (stockDetail.daily_data?.close != null ? stockDetail.daily_data.close.toFixed(2) : '—') }}</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">涨跌幅</div>
                            <div class="stat-value" :style="{color: stockDetail.daily_data?.pct_chg >= 0 ? 'var(--color-rise)' : 'var(--color-fall)'}">
                                {{ (stockDetail.daily_data?.pct_chg != null ? stockDetail.daily_data.pct_chg.toFixed(2) : '—') }}%
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">最高/最低</div>
                            <div style="font-size: var(--font-md); font-weight: var(--font-semibold);">
                                <span style="color: var(--color-danger);">{{ stockDetail.daily_data?.high != null ? stockDetail.daily_data.high.toFixed(2) : '—' }}</span>
                                <span style="color: var(--text-tertiary); margin: 0 4px;">/</span>
                                <span style="color: var(--primary-color);">{{ stockDetail.daily_data?.low != null ? stockDetail.daily_data.low.toFixed(2) : '—' }}</span>
                            </div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">成交量</div>
                            <div class="stat-value" style="font-size: var(--font-md);">{{ stockDetail.daily_data?.vol != null ? Math.round(stockDetail.daily_data.vol / 10000).toLocaleString() : '—' }}万</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">换手率</div>
                            <div class="stat-value" style="font-size: var(--font-md);">{{ stockDetail.daily_data?.turnover_rate?.toFixed(2) || '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">振幅</div>
                            <div class="stat-value" style="font-size: var(--font-md);">{{ stockDetail.daily_data?.pre_close ? ((stockDetail.daily_data.high - stockDetail.daily_data.low) / stockDetail.daily_data.pre_close * 100).toFixed(2) : '--' }}%</div>
                        </div>
                        <div class="stat-box">
                            <div class="stat-label">MA20偏离</div>
                            <div class="stat-value" :style="{fontSize:'var(--font-md)',color:(stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close > stockDetail.ma_data.ma20) ? 'var(--color-rise)' : 'var(--color-fall)'}">{{ (stockDetail.ma_data?.ma20 && stockDetail.daily_data?.close) ? ((stockDetail.daily_data.close - stockDetail.ma_data.ma20) / stockDetail.ma_data.ma20 * 100).toFixed(2) + '%' : '--' }}</div>
                        </div>
                    </div>

                    <!-- K线图区域 -->
                    <div class="section-title"><span>🕯️</span> K线图与均线</div>
                    <div class="kline-container">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <div class="kline-tabs">
                                <button
                                    v-for="tab in klinePeriods"
                                    :key="tab.value"
                                    :class="['kline-tab', {active: currentKlinePeriod === tab.value}]"
                                    @click="switchKlinePeriod(tab.value)"
                                >
                                    {{ tab.label }}
                                </button>
                            </div>
                            <el-button v-if="!stockKlineLoaded" type="primary" size="small" @click="loadStockKline(currentKlinePeriod)" :loading="klineLoading">
                                🕯️ 加载K线
                            </el-button>
                        </div>
                        <div v-if="stockKlineLoaded" class="kline-chart" id="stockKlineChart"></div>
                        <!-- v3.11 (FR-3.11.8): 均线开关（与图表图例双向联动） -->
                        <div v-if="stockKlineLoaded" class="ma-toggle-row">
                            <span class="ma-toggle-label">均线</span>
                            <button
                                v-for="m in MA_LINES"
                                :key="m"
                                :class="['ma-toggle-btn', { active: klineMaVisible[m] !== false }]"
                                @click="toggleKlineMa(m)"
                            >{{ m }}</button>
                            <span class="ma-toggle-hint">十字线读价：悬停或点击图表</span>
                        </div>
                        <!-- 时间范围快捷按钮 -->
                        <div v-if="stockKlineLoaded" style="display:flex;gap:4px;margin-top:8px;justify-content:center;">
                            <el-button size="small" @click="zoomKlineRange(22)">近1月</el-button>
                            <el-button size="small" @click="zoomKlineRange(66)">近3月</el-button>
                            <el-button size="small" @click="zoomKlineRange(126)">近半年</el-button>
                            <el-button size="small" @click="zoomKlineRange(0)">全部</el-button>
                        </div>
                        <div v-if="klineLoading" class="kline-loading">
                            <el-icon class="is-loading"><Loading /></el-icon> 加载K线数据中...
                        </div>
                        <div v-if="!stockKlineLoaded && !klineLoading" class="kline-placeholder">
                            <div style="color: var(--text-tertiary); font-size: var(--font-base);">点击加载K线查看</div>
                        </div>
                    </div>

                    <div class="section-title"><span>📋</span> 策略持仓记录</div>
                    <div v-for="h in stockDetail.history" :key="h.strategy" class="hold-item">
                        <span class="hold-name">{{ h.strategy_name }}</span>
                        <span class="hold-days">{{ h.hold_count }} 天</span>
                    </div>
                    </div>  <!-- close kline tab -->

                    <!-- Tab: AI智能评估 -->
                    <div v-if="stockDetailTab === 'ai'">
                        <div v-if="aiResult" class="card" style="margin-bottom: 16px;">
                            <div class="card-title" style="margin:0 0 16px 0;">
                                <span>🤖 AI 智能评估</span>
                                <!-- v3.15 (15.3): 模型信息展示 -->
                                <span v-if="aiResult.model_used" class="ai-result-meta" title="模型">🧠 {{ aiResult.model_used }}</span>
                                <span v-if="aiResult.model_provider" class="ai-result-meta" title="厂商">{{ aiResult.model_provider }}</span>
                                <span v-if="aiResult.result && aiResult.result.provider && aiResult.result.provider !== (aiResult.model_provider || '')" class="ai-result-meta" title="引擎">{{ aiResult.result.provider }}</span>
                                <span v-if="aiResult.llm_latency_ms" class="ai-result-meta" title="LLM 延迟">⚡ {{ aiResult.llm_latency_ms }}ms</span>
                                <span v-if="aiResult.from_cache || (aiResult.llm_latency_ms === 0 && !aiResult.model_used)" class="ai-result-meta" title="命中缓存">💾 缓存结果</span>
                                <span style="flex:1;"></span>
                                <el-button size="small" @click="copyAiReport">📋 复制报告</el-button>
                                <el-button size="small" type="primary" @click="doAiEvaluate" :loading="aiLoading">🔄 重新评估</el-button>
                            </div>
                            <div style="display:flex;align-items:center;gap:24px;margin-bottom:20px;flex-wrap:wrap;">
                                <div style="width:100px;height:100px;position:relative;flex-shrink:0;">
                                    <svg viewBox="0 0 100 100" style="transform:rotate(-90deg);">
                                        <circle cx="50" cy="50" r="42" fill="none" stroke="var(--border-light)" stroke-width="8"/>
                                        <circle cx="50" cy="50" r="42" fill="none" :stroke="levelRingColor" stroke-width="8" stroke-linecap="round" :stroke-dasharray="(aiResult.result.total_score/100)*264+' 264'" style="transition:all 0.8s ease;"/>
                                    </svg>
                                    <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
                                        <div style="font-size: var(--font-2xl);font-weight:800;line-height:1;color:var(--text-primary);">{{ fmtNum(aiResult.result.total_score, 1) }}</div>
                                        <div style="font-size:var(--font-xs);color:var(--text-tertiary);">分</div>
                                    </div>
                                </div>
                                <div style="flex:1;min-width:180px;">
                                    <div style="font-size:var(--font-xl);font-weight:var(--font-bold);color:var(--text-primary);margin-bottom:8px;">{{ aiResult.result.level }}</div>
                                    <div style="font-size:var(--font-md);color:var(--text-secondary);line-height:1.7;">{{ aiResult.result.detailed_report || '' }}</div>
                                    <!-- 评估历史对比 -->
                                    <div v-if="evalHistoryComparison" style="margin-top:8px;padding:6px 10px;background:var(--border-light);border-radius:6px;font-size:var(--font-xs);color:var(--text-tertiary);display:inline-flex;align-items:center;gap:4px;">
                                        📈 上次{{ fmtNum(evalHistoryComparison.prevScore, 1) }}分 → 本次{{ fmtNum(evalHistoryComparison.currScore, 1) }}分
                                        <span :style="{color:evalHistoryComparison.diff>0?'var(--el-success)':evalHistoryComparison.diff<0?'var(--el-danger)':'var(--text-tertiary)'}">
                                            {{ evalHistoryComparison.diff>0?'↑':evalHistoryComparison.diff<0?'↓':'→' }}{{ fmtNum(Math.abs(evalHistoryComparison.diff), 1) }}
                                        </span>
                                    </div>
                                    <!-- 操作检查清单 -->
                                    <div v-if="checklistItems.length" style="margin-top:8px;display:flex;flex-wrap:wrap;gap:4px 12px;">
                                        <span v-for="c in checklistItems" :key="c.label" style="font-size:var(--font-xs);color:var(--text-secondary);">{{ c.icon }} {{ c.label }}</span>
                                    </div>
                                </div>
                            </div>
                            <div style="background:var(--bg-card-header);border-radius:10px;padding:16px;margin-bottom:16px;">
                                <div style="font-size:var(--font-md);font-weight:var(--font-semibold);color:var(--text-primary);margin-bottom:10px;">🔬 九维度评分</div>
                                <div v-for="(score,name) in aiResult.result.dimensions" :key="name" style="display:flex;align-items:center;margin-bottom:6px;gap:10px;">
                                    <span style="font-size:var(--font-sm);color:var(--text-secondary);width:76px;flex-shrink:0;text-align:right;">{{ name }}</span>
                                    <div style="flex:1;height:12px;background:var(--border-light);border-radius:6px;overflow:hidden;">
                                        <div :style="{width:score+'%',height:'100%',background:score>=70?'var(--el-success)':score>=50?'var(--el-warning)':'var(--el-danger)',borderRadius:'6px',transition:'width 0.5s'}"></div>
                                    </div>
                                    <span style="font-size:var(--font-sm);font-weight:var(--font-bold);width:28px;text-align:center;" :style="{color:score>=70?'var(--el-success)':score>=50?'var(--el-warning)':'var(--el-danger)'}">{{ fmtNum(score, 0) }}</span>
                                </div>
                            </div>
                            <div class="ai-eval-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;">
                                <div style="background:var(--badge-success-bg);border:1px solid var(--badge-success-bg);padding:16px 14px;border-radius:10px;">
                                    <div style="font-size:var(--font-md);font-weight:var(--font-semibold);color:var(--el-success);margin-bottom:10px;">▸ 优势</div>
                                    <div v-for="s in aiResult.result.analysis.strengths" :key="s" style="font-size:var(--font-md);color:var(--text-primary);padding:3px 0;line-height:1.5;">• {{ s }}</div>
                                    <div v-if="!aiResult.result.analysis.strengths.length" style="opacity:0.4;font-size:var(--font-sm);">-</div>
                                </div>
                                <div style="background:var(--badge-gold-bg);border:1px solid var(--badge-gold-bg);padding:16px 14px;border-radius:10px;">
                                    <div style="font-size:var(--font-md);font-weight:var(--font-semibold);color:var(--el-warning);margin-bottom:10px;">⚠️ 风险</div>
                                    <div v-for="w in aiResult.result.analysis.weaknesses" :key="w" style="font-size:var(--font-md);color:var(--text-primary);padding:3px 0;line-height:1.5;">• {{ w }}</div>
                                    <div v-if="!aiResult.result.analysis.weaknesses.length" style="opacity:0.4;font-size:var(--font-sm);">-</div>
                                </div>
                                <div style="background:var(--badge-info-bg);border:1px solid var(--badge-info-bg);padding:16px 14px;border-radius:10px;">
                                    <div style="font-size:var(--font-md);font-weight:var(--font-semibold);color:var(--color-primary);margin-bottom:10px;">💡 建议</div>
                                    <div v-for="s in aiResult.result.analysis.suggestions" :key="s" style="font-size:var(--font-md);color:var(--text-primary);padding:3px 0;line-height:1.5;">• {{ s }}</div>
                                    <div v-if="!aiResult.result.analysis.suggestions.length" style="opacity:0.4;font-size:var(--font-sm);">-</div>
                                </div>
                            </div>
                            <!-- 信号归因条 -->
                            <div v-if="aiResult.result.signal_attribution" style="background:var(--bg-card-header);border-radius:10px;padding:14px 16px;margin-top:12px;">
                                <div style="font-size:var(--font-md);font-weight:var(--font-semibold);color:var(--text-primary);margin-bottom:8px;">📊 信号归因</div>
                                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                                    <span v-if="aiResult.result.signal_attribution.technical" style="background:var(--badge-info-bg);color:var(--color-primary);padding:4px 10px;border-radius:12px;font-size:var(--font-sm);">技术面 {{ fmtNum(aiResult.result.signal_attribution.technical, 0) }}%{{ aiResult.result.signal_attribution.technical_driver ? ' · '+aiResult.result.signal_attribution.technical_driver : '' }}</span>
                                    <span v-if="aiResult.result.signal_attribution.fundamentals" style="background:var(--badge-success-bg);color:var(--el-success);padding:4px 10px;border-radius:12px;font-size:var(--font-sm);">基本面 {{ fmtNum(aiResult.result.signal_attribution.fundamentals, 0) }}%{{ aiResult.result.signal_attribution.fundamental_driver ? ' · '+aiResult.result.signal_attribution.fundamental_driver : '' }}</span>
                                    <span v-if="aiResult.result.signal_attribution.capital_flow" style="background:var(--badge-gold-bg);color:var(--el-warning);padding:4px 10px;border-radius:12px;font-size:var(--font-sm);">资金面 {{ fmtNum(aiResult.result.signal_attribution.capital_flow, 0) }}%{{ aiResult.result.signal_attribution.capital_flow_driver ? ' · '+aiResult.result.signal_attribution.capital_flow_driver : '' }}</span>
                                    <span v-if="!aiResult.result.signal_attribution.capital_flow && aiResult.result.signal_attribution.market_sentiment" style="background:var(--badge-gold-bg);color:var(--el-warning);padding:4px 10px;border-radius:12px;font-size:var(--font-sm);">资金面 {{ fmtNum(aiResult.result.signal_attribution.market_sentiment, 0) }}%</span>
                                </div>
                                <div v-if="aiResult.result.signal_attribution.strongest_bullish" style="margin-top:6px;font-size:var(--font-sm);color:var(--text-secondary);">
                                    <span style="color: var(--color-success);">●</span> 最强看多: {{ aiResult.result.signal_attribution.strongest_bullish }}
                                    <span v-if="aiResult.result.signal_attribution.strongest_bearish" style="margin-left:12px;">🔴 最强看空: {{ aiResult.result.signal_attribution.strongest_bearish }}</span>
                                </div>
                            </div>
                            <!-- 狙击点卡片 -->
                            <div v-if="aiResult.result.analysis?.sniper_points" style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:12px;">
                                <div style="background:var(--badge-info-bg);border:1px solid var(--badge-info-bg);padding:12px 10px;border-radius:10px;text-align:center;">
                                    <div style="font-size:var(--font-xs);color:var(--text-tertiary);margin-bottom:4px;">🎯 理想买入</div>
                                    <div style="font-size:var(--font-lg);font-weight:var(--font-bold);color:var(--color-primary);">{{ fmtNum(aiResult.result.analysis.sniper_points.ideal_buy) }}</div>
                                </div>
                                <div style="background:var(--badge-danger-bg);border:1px solid var(--badge-danger-bg);padding:12px 10px;border-radius:10px;text-align:center;">
                                    <div style="font-size:var(--font-xs);color:var(--text-tertiary);margin-bottom:4px;">🛑 止损</div>
                                    <div style="font-size:var(--font-lg);font-weight:var(--font-bold);color:var(--el-danger);">{{ fmtNum(aiResult.result.analysis.sniper_points.stop_loss) }}</div>
                                </div>
                                <div style="background:var(--badge-success-bg);border:1px solid var(--badge-success-bg);padding:12px 10px;border-radius:10px;text-align:center;">
                                    <div style="font-size:var(--font-xs);color:var(--text-tertiary);margin-bottom:4px;">🏁 目标</div>
                                    <div style="font-size:var(--font-lg);font-weight:var(--font-bold);color:var(--el-success);">{{ fmtNum(aiResult.result.analysis.sniper_points.take_profit) }}</div>
                                </div>
                            </div>
                            <!-- 仓位建议 -->
                            <div v-if="aiResult.result.analysis?.position_advice" style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px;">
                                <div style="background:var(--bg-card-header);padding:12px 14px;border-radius:10px;">
                                    <div style="font-size:var(--font-xs);color:var(--text-tertiary);margin-bottom:4px;">👤 空仓者</div>
                                    <div style="font-size:var(--font-sm);color:var(--text-primary);">{{ aiResult.result.analysis.position_advice.no_position }}</div>
                                </div>
                                <div style="background:var(--bg-card-header);padding:12px 14px;border-radius:10px;">
                                    <div style="font-size:var(--font-xs);color:var(--text-tertiary);margin-bottom:4px;">📦 持仓者</div>
                                    <div style="font-size:var(--font-sm);color:var(--text-primary);">{{ aiResult.result.analysis.position_advice.has_position }}</div>
                                </div>
                            </div>
                            <!-- 数据质量提示 -->
                            <div v-if="aiResult.result.data_quality_note" style="margin-top:12px;padding:8px 12px;background:var(--border-light);border-radius:8px;font-size:var(--font-xs);color:var(--text-tertiary);text-align:center;">
                                📋 {{ aiResult.result.data_quality_note }}
                            </div>
                        </div>
                        <div v-else style="text-align: center; color: var(--text-tertiary); padding: 40px;">
                            <div style="font-size: var(--font-3xl); margin-bottom: 12px;">🤖</div>
                            <div v-if="aiResult">
                                <div style="margin-bottom: 8px;">最近评估：{{ aiResult.result.level }}</div>
                                <div style="font-size: var(--font-sm);">🕐 {{ (lastEvalTime || aiResult.evaluate_time || '').split('T')[0] }} {{ ((lastEvalTime || aiResult.evaluate_time || '').split('T')[1] || '').split('.')[0] }}</div>
                            </div>
                            <div v-else>点击 AI 评估按钮获取分析结果</div>
                        </div>
                    </div>  <!-- close ai tab -->

                    <!-- Tab: AI 问股对话 -->
                    <div v-if="stockDetailTab === 'chat'">
                        <div class="card" style="margin-bottom:12px;">
                            <div class="card-title" style="margin:0 0 12px 0;">💬 AI 智能问股</div>
                            <!-- Quick prompts -->
                            <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px;">
                                <el-button size="small" @click="askStockQuick('trend')">📈 趋势分析</el-button>
                                <el-button size="small" @click="askStockQuick('fundamental')">📊 基本面</el-button>
                                <el-button size="small" @click="askStockQuick('comprehensive')">🔬 综合分析</el-button>
                            </div>
                            <!-- Chat messages -->
                            <!-- v3.16 (16.8): 历史消息惰性加载提示 -->
                            <div v-if="stockChatLoading && stockChatMessages.length === 0" style="text-align:center;color:var(--text-tertiary);padding:12px 0;font-size:var(--font-sm);">⏳ 加载历史消息中...</div>
                            <div v-else-if="stockChatMessages.length > 0" style="max-height:300px;overflow-y:auto;margin-bottom:12px;">
                                <div v-for="(msg, mi) in stockChatMessages" :key="mi" style="margin-bottom:10px;">
                                    <div v-if="msg.role==='user'" style="text-align:right;">
                                        <span style="display:inline-block;background:var(--primary-color);color:var(--white);padding:6px 12px;border-radius:12px 12px 2px 12px;max-width:80%;font-size:var(--font-sm);text-align:left;">{{ msg.content }}</span>
                                    </div>
                                    <div v-else style="display:flex;gap:6px;">
                                        <span>🤖</span>
                                        <div style="flex:1;font-size:var(--font-sm);line-height:1.5;max-height:200px;overflow-y:auto;" v-html="renderMarkdown(msg.content)"></div>
                                    </div>
                                </div>
                            </div>
                            <!-- Input -->
                            <div style="display:flex;gap:8px;">
                                <el-input v-model="stockChatInput" placeholder="输入问题，如：这股趋势怎么样" @keyup.enter="askStockSend" size="small" style="flex:1;" />
                                <el-button type="primary" size="small" @click="askStockSend" :loading="stockChatLoading">发送</el-button>
                            </div>
                            <div v-if="stockChatError" style="color:var(--el-danger);font-size:var(--font-xs);margin-top:6px;">{{ stockChatError }}</div>
                        </div>
                    </div>  <!-- close chat tab -->
                </div>
            </div>
        </el-dialog>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // v3.15 (15.3): 诚实进度 — 阶段文案由 aiEvalStage 映射, 非假定时器
      const STAGE_TEXT = {
        fetching: '正在获取行情数据',
        calculating: '正在计算评分',
        analyzing: '正在生成分析报告',
        done: '评估完成',
      };
      const aiStageText = computed(() => STAGE_TEXT[state.aiEvalStage.value] || '');
      // v3.15 (15.3): 评分环颜色按等级映射主题变量（暗色可用）
      const levelRingColor = computed(() => {
        const lv = state.aiResult && state.aiResult.value && state.aiResult.value.result && state.aiResult.value.result.level;
        if (!lv) return 'var(--color-primary)';
        if (lv === '强烈推荐' || lv === '推荐') return 'var(--el-success)';
        if (lv === '谨慎推荐') return 'var(--el-warning)';
        if (lv === '中性' || lv === '观望') return 'var(--text-secondary)';
        if (lv === '评估失败' || lv === '无可用模型') return 'var(--el-danger)';
        return 'var(--color-primary)';
      });
      // v3.15 (15.3): 复制报告 — detailed_report + 九维度评分
      function _copyFallback(text) {
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
      }
      async function copyAiReport() {
        const r = state.aiResult && state.aiResult.value;
        if (!r || !r.result) return;
        const dims = r.result.dimensions || {};
        const dimText = Object.entries(dims).map(([k, v]) => `${k} ${Math.round(v)}分`).join('\n');
        const text = `【AI 智能评估】${r.result.level || ''} ${r.result.total_score != null ? r.result.total_score : '—'}分\n` +
          `模型：${r.model_used || r.result.provider || '—'}\n\n` +
          `${r.result.detailed_report || ''}\n\n九维度评分：\n${dimText || '无'}`;
        try {
          await navigator.clipboard.writeText(text);
          ElementPlus.ElMessage.success('报告已复制到剪贴板');
        } catch (e) {
          try { _copyFallback(text); ElementPlus.ElMessage.success('报告已复制到剪贴板'); }
          catch (e2) { ElementPlus.ElMessage.error('复制失败，请手动复制'); }
        }
      }
      return { ...state, aiStageText, levelRingColor, copyAiReport };
    },
  };
})();
