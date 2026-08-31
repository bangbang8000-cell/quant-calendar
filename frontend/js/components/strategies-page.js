// quant-calendar: StrategiesPage 组件 (v3.6.0-T5 / FR-3.6.2)
// 策略总览页: 单根div 内含 4 子页 (overview/merrill/market/consensus) v-if 链
// 注: 原始模板含跨行 div 标签, 行号正则易漏计; 组件化时保留原始结构 (根div 90-357)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StrategiesPage = {
    name: 'qc-strategies-page',
    template: `
                <div v-if="currentPage === 'strategies'" key="strategies">
                                        <div v-if="currentSubPage === 'overview'">
<div class="page-header">
                        <div class="page-title">{{ t('strategies.title') }}</div>
                        <!-- v3.17.4 (FR-3.17.4): 回测工作台入口 -->
                        <button type="button" class="bt-entry-btn" @click="currentSubPage = 'backtest'">回测工作台</button>
                        <div class="flex-c-gap-12">
                            <span class="text-base-secondary">{{ t('strategies.latestTradeDay') }}{{ dashboardData.latest_date || '-' }}</span>
                            <span class="text-xs-tertiary" v-if="timeSinceRefresh">{{ timeSinceRefresh }}</span>
                        </div>
                    </div>

                    <!-- v3.11 (FR-3.11.7): 今日一屏 — 聚合当日决策要素（美林/情绪/池变动/健康/重点） -->
                    <div v-if="!(loading && loadingView === 'overview')" class="today-hero card">
                        <div class="today-hero-head">
                            <div class="today-hero-title">{{ t('strategies.todayScreen') }}</div>
                            <div class="today-hero-date">
                                <span>{{ todayText }}</span>
                                <span class="today-hero-status">{{ tradingStatus }}</span>
                            </div>
                        </div>
                        <div class="today-grid">
                            <!-- 美林时钟 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'merrill'">
                                <div class="today-cell-label">{{ t('strategies.merrillLabel') }}</div>
                                <div class="today-merrill-badge" :style="{background: merrillData?.color || 'var(--color-success)'}">{{ merrillData?.name || t('strategies.computing') }}</div>
                                <div class="today-cell-sub" v-if="merrillNext">{{ merrillNext }}</div>
                                <div class="today-cell-sub" v-else-if="merrillData?.timing?.duration_days != null">已 {{ merrillData.timing.duration_days }} 天 · 剩余 {{ merrillData.timing.days_remaining ?? '—' }} 天</div>
                            </div>
                            <!-- 市场情绪 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'market'">
                                <div class="today-cell-label">{{ t('strategies.marketSentiment') }}</div>
                                <div class="today-sentiment" :class="{muted: !marketData?.market_sentiment}">{{ marketData?.market_sentiment?.text || '暂无情绪数据' }}</div>
                                <div class="today-cell-sub">{{ tradingStatus }}</div>
                            </div>
                            <!-- 池变动 -->
                            <div class="today-cell clickable" @click="currentSubPage = 'consensus'">
                                <div class="today-cell-label">{{ t('strategies.poolChanges') }}</div>
                                <div class="today-pool-row"><span class="today-pool-val up">+{{ dashboardData?.pool_changes?.new_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.newPool') }}</span></div>
                                <div class="today-pool-row"><span class="today-pool-val down">-{{ dashboardData?.pool_changes?.out_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <!-- 今日重点 -->
                            <div class="today-cell">
                                <div class="today-cell-label">{{ t('strategies.todayFocus') }}</div>
                                <div class="today-focus-list">
                                    <div v-if="todayFocus.length === 0" class="today-focus-empty">{{ t('strategies.noAlert') }}</div>
                                    <div v-for="(f, i) in todayFocus.slice(0, 3)" :key="i" class="today-focus-item" :class="f.level" @click="f.action">
                                        <span class="today-focus-icon">{{ f.icon }}</span><span class="today-focus-text">{{ f.text }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- 核心数据卡片 (v1.11: +趋势徽标) -->
                    <!-- 骨架屏加载 -->
                    <div v-if="loading && loadingView === 'overview'" class="dashboard-grid">
                        <div class="card skeleton skeleton-card" v-for="i in 4" :key="i"></div>
                    </div>
                    <div v-else class="dashboard-grid">
                        <div class="stat-card">
                            <div class="stat-icon">📅</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">📈</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">🎯</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">💎</div>
                            <div class="stat-content">
                                <div class="flex-baseline-gap-8">
                                    <div class="stat-value">{{ currentPoolSize }}</div>
                                    <span v-if="poolChangeBadge" :class="poolChangeBadge.dir" class="stat-trend">{{ poolChangeBadge.text }}</span>
                                </div>
                                <div class="stat-label">{{ t('strategies.currentPool') }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- 子页: 策略总览 -->

                    <!-- 数据概览卡片 (v1.11 重构: 时间轴+多维度换手) -->
                    <div class="card">
                        <div class="card-title">{{ t('strategies.dataOverview') }}</div>
                        <!-- 时间覆盖条 -->
                        <div class="time-coverage-bar">
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.start_date }}</div>
                            <div class="time-bar-track">
                                <div class="time-bar-fill" :style="{width: timeBarPercent + '%'}"></div>
                            </div>
                            <div class="time-bar-label">{{ dashboardData.time_coverage?.end_date }}</div>
                            <div class="time-bar-info">{{ dashboardData.time_coverage?.days || 0 }}交易日 · {{ dashboardData.time_coverage?.months || 0 }}月 · {{ dashboardData.time_coverage?.years || 0 }}年</div>
                        </div>
                        <!-- 持仓变动 多时间维度 -->
                        <div class="pool-change-multi">
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.todayChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.new_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.out_count || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.weekChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.weekly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.weekly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">{{ t('strategies.monthChanges') }}</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.monthly_new || 0 }}</span><span class="pool-change-label">{{ t('calendar.newPool') }}</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.monthly_out || 0 }}</span><span class="pool-change-label">{{ t('calendar.outPool') }}</span></div>
                            </div>
                        </div>
                    </div>

<!-- 各策略选股数量 (v1.11: 可点击跳转) -->
                    <div class="card">
                        <div class="card-title">📈 各策略选股统计 <span class="text-sm-tertiary-normal">(点击策略跳转日历筛选)</span></div>
                        <div v-for="item in filteredStrategyCounts" :key="item.strategy_id" class="strategy-item clickable" @click="navigateToStrategyFilter(item.strategy_name)">
                            <div class="strategy-header">
                                <span class="strategy-name">{{ item.strategy_name }} <span class="text-xs-tertiary-ml4">→</span></span>
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ item.percentage }}%)</span></span>
                            </div>
                            <div class="strategy-progress">
                                <div class="progress-bar" :style="{width: item.percentage + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 策略共识度 TOP5 (v1.11: 嵌入概览) -->
                    <div class="card">
                        <div class="card-title flex-between">
                            <span>{{ t('strategies.consensusTop5') }}</span>
                            <span class="text-sm-primary-link" @click="currentSubPage = 'consensus'">{{ t('strategies.viewAll') }} {{ filteredConsensusRank.length }}只 →</span>
                        </div>
                        <qc-state-panel v-if="filteredConsensusRank.length === 0" type="empty" title="暂无共识数据"></qc-state-panel>
                        <div v-for="item in filteredConsensusRank.slice(0,5)" :key="item.code" class="consensus-item" @click="showStockDetail(item.code)">
                            <div class="consensus-badge">{{ item.strategy_count }}</div>
                            <div class="consensus-info">
                                <div class="consensus-code">{{ item.code }}</div>
                                <div class="consensus-name">{{ item.name }}
                                    <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                                    <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span>
                                </div>
                            </div>
                            <div class="consensus-tags">
                                <span v-for="s in item.strategy_names.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                            </div>
                        </div>
                    </div>

                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">

<!-- 美林时钟 -->
                    <div class="card overflow-hidden">
                        <div class="flex-between-mb16">
                            <div class="strategy-title-bar">
                                ⏱️ 美林时钟 · 经济周期
                            </div>
                            <span class="strategy-tag-pill" :style="{background: merrillData.color || 'var(--color-success)'}">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                        </div>

                        <!-- 四阶段网格 -->
                        <div class="grid-2col-gap8-mb14">
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon">{{ s.icon }}</div>
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

                        <!-- 描述 -->
                        <div class="text-center-secondary-lh" v-if="merrillData.description">
                            {{ merrillData.description }}
                        </div>

                        <!-- 时间 + 进度 -->
                        <div class="gold-note-box" v-if="merrillData.timing">
                            <div class="flex-between-base-mb6">
                                <span class="color-secondary">📅 {{ merrillData.timing.current_stage_start_date || '—' }}</span>
                                <span class="strategy-badge" v-if="merrillData.timing.maturity" :style="{color: merrillData.color}">{{ merrillData.timing.maturity }}</span>
                            </div>
                            <div class="flex-between-xs-mb7">
                                <span>已过 {{ merrillData.timing.duration_days }}天 · 剩余 {{ merrillData.timing.days_remaining || '—' }}天</span>
                                <span class="text-warning-semibold" v-if="merrillData.next_stage_prediction?.transition_probability> 0.2">
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(0) }}%
                                </span>
                                <span v-else>均值 {{ merrillData.timing.avg_duration_months }}月</span>
                            </div>
                            <div class="progress-track-8">
                                <div class="progress-fill-4" :style="{width: Math.min(100, merrillData.timing.progress_percent || 0) + '%', background: (merrillData.timing.progress_percent || 0)> 100 ? 'linear-gradient(90deg, ' + (merrillData.color || 'var(--color-success)') + ', var(--color-warning))' : (merrillData.color || 'var(--color-success)')}"></div>
                            </div>
                            <div class="flex-between-xs-mt4">
                                <span>{{ merrillData.timing.progress_percent || 0 }}%<template v-if="(merrillData.timing.progress_percent || 0) > 100"> ⚠超期</template></span>
                                <span v-if="merrillData.timing.predicted_end">预计结束 {{ merrillData.timing.predicted_end.base || merrillData.timing.predicted_end }}</span>
                            </div>
                        </div>

                        <!-- 多维度评分 -->
                        <div class="note-box-14" v-if="merrillData.dimension_scores">
                            <div class="text-base-semibold-primary-mb10">📊 多维度评分</div>
                            <div class="flex-c-gap-8-mb6-sm" v-for="dim in dimensionScoreList" :key="dim.key">
                                <span class="stat-label-40">{{ dim.label }}</span>
                                <div class="stat-track-10">
                                    <div class="stat-fill-5" :style="{width: dim.barWidth + '%', background: dim.barColor}"></div>
                                </div>
                                <span class="stat-value-35" :style="{color: dim.scoreColor}">+{{ dim.scoreStr }}</span>
                                <span class="stat-value-36" :style="{color: dim.color}">{{ dim.level }}</span>
                            </div>
                        </div>

                        <!-- 置信度 + 下阶段预测 -->
                        <div class="strategy-summary-bar" v-if="merrillData.confidence">
                            <div class="flex-c-gap-6">
                                <span class="text-sm-secondary">置信度</span>
                                <span class="text-base-semibold" :style="{color: confidenceColor}">{{ merrillData.confidence.level || '—' }}</span>
                            </div>
                            <div class="flex-c-gap-4-sm" v-if="merrillData.next_stage_prediction">
                                <span class="color-secondary">→预测</span>
                                <span class="text-warning-semibold">{{ merrillData.next_stage_prediction.next_stage_name || '—' }}</span>
                                <span class="color-secondary" v-if="merrillData.next_stage_prediction.transition_probability">
                                    {{ (merrillData.next_stage_prediction.transition_probability * 100).toFixed(0) }}%
                                </span>
                            </div>
                        </div>

                        <div class="gold-hint">
                            💡 点击阶段卡片查看详细分析和投资建议
                        </div>

                        <!-- v3.22-I4: 历史周期时间轴(最近4轮) -->
                        <div class="merrill-timeline-block">
                            <div class="merrill-timeline-head">
                                <span>🕰️ 历史周期时间轴</span>
                                <span class="merrill-timeline-sub" v-if="merrillTimeline?.cycles?.length">最近 {{ merrillTimeline.cycles.length }} 轮 · 点击阶段查看详情</span>
                                <span class="merrill-timeline-sub" v-else-if="timelineLoading">加载中...</span>
                            </div>
                            <div class="merrill-timeline" v-if="merrillTimeline?.cycles?.length">
                                <div class="merrill-cycle" v-for="(cycle, ci) in merrillTimeline.cycles" :key="ci">
                                    <div class="merrill-cycle-label">{{ cycle.label }}</div>
                                    <div class="merrill-cycle-track">
                                        <div v-for="(st, si) in cycle.stages" :key="si"
                                             class="merrill-stage-chip"
                                             :class="{ 'is-current': st.is_current }"
                                             :style="{background: getTimelineStageColor(st.stage), borderColor: st.is_current ? 'var(--color-primary)' : 'transparent'}"
                                             @click.prevent="showTimelineStage(st.stage)"
                                             :title="(st.name || getTimelineStageName(st.stage) || st.stage) + ' · ' + (st.start ? st.start.slice(0,10) : '起点') + ' → ' + (st.end ? st.end.slice(0,10) : '至今')">
                                            <span class="merrill-stage-chip-name">{{ st.name || getTimelineStageName(st.stage) || st.stage }}</span>
                                            <span class="merrill-stage-chip-date" v-if="st.start">{{ st.start.slice(0,4) }}</span>
                                            <span class="merrill-stage-chip-current" v-if="st.is_current">当前</span>
                                        </div>
                                        <div class="merrill-stage-arrow" v-if="si < cycle.stages.length - 1">→</div>
                                    </div>
                                </div>
                            </div>
                            <div class="merrill-timeline-empty" v-else-if="!timelineLoading">暂无历史周期数据</div>
                        </div>
                    </div>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">

                    
                    <!-- 市场行情概览 -->
                    <div class="card">
                        <div class="card-title">💹 今日市场行情</div>
                        <div class="market-status">
                            <span>
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours">🕐 交易中</span>
                                <span class="ml-8-tertiary" v-if="!marketData.in_trading_hours && marketData.is_trading_day">已收盘</span>
                            </span>
                            <span class="text-xs-tertiary">{{ marketData.date }}</span>
                        </div>
                        <div class="market-sentiment" v-if="marketData.market_sentiment">
                            <div class="market-sentiment-text">{{ marketData.market_sentiment.text }}</div>
                        </div>
                        <div class="market-grid">
                            <div v-for="idx in marketData.indices" :key="idx.id" class="market-card clickable" :class="idx.pct_chg>= 0 ? 'up' : 'down'" @click="showIndexDetail(idx)">
                                <div class="market-header">
                                    <span class="market-name">{{ idx.name }}</span>
                                    <span class="market-tag">{{ idx.market }}</span>
                                </div>
                                <div class="market-price-row">
                                    <span class="market-price">{{ Number(idx.close).toFixed(2) }}</span>
                                    <span class="market-chg" :class="idx.pct_chg >= 0 ? 'up' : 'down'">
                                        {{ idx.pct_chg >= 0 ? '+' : '' }}{{ Number(idx.pct_chg).toFixed(2) }}%
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title">🏆 策略共识度排行 (多策略同时选中)</div>
                        <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                        <qc-virtual-list class="h-calc-240" :items="filteredConsensusRank" :row-height="78">
                            <template #default="{ item, index }">
                            <div class="consensus-item mb-0" @click="showStockDetail(item.code)">
                                <div class="consensus-badge">{{ item.strategy_count || index + 1 }}</div>
                                <div class="consensus-info">
                                    <div class="consensus-code">{{ item.code }}</div>
                                    <div class="consensus-name">{{ item.name }} <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span><span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线">📈</span></div>
                                </div>
                                <div class="consensus-tags">
                                    <span v-for="s in item.strategy_names.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                </div>
                            </div>
                            </template>
                        </qc-virtual-list>
                    </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码起点 -->
                    <div v-else-if="currentSubPage === 'backtest'" class="backtest-workbench">
                        <div class="page-header">
                            <div class="page-title">回测工作台</div>
                            <div class="page-header-right">
                                <button type="button" class="bt-back-btn" @click="currentSubPage = 'overview'">返回策略总览</button>
                            </div>
                        </div>

                        <!-- 参数表单 -->
                        <div class="card">
                            <div class="card-title">回测参数</div>
                            <div class="bt-form">
                                <div class="bt-form-row">
                                    <span class="bt-form-label">策略（可多选对比）</span>
                                    <div class="bt-strategy-opts">
                                        <label v-for="opt in btStrategyOptions" :key="opt.id" class="bt-strategy-opt" :class="{ active: btSelectedStrategies.includes(opt.id) }">
                                            <input type="checkbox" class="bt-strategy-check" :checked="btSelectedStrategies.includes(opt.id)" @change="toggleBtStrategy(opt.id)">
                                            <span>{{ opt.name }}</span>
                                        </label>
                                    </div>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">日期区间</span>
                                    <el-date-picker v-model="btDateRange" type="daterange" size="small"
                                        range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                        value-format="YYYY-MM-DD" class="bt-date-picker"></el-date-picker>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">初始资金</span>
                                    <el-input-number v-model="btCapital" size="small" :min="10000" :step="50000" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">手续费率</span>
                                    <el-input-number v-model="btCommissionRate" size="small" :min="0" :max="0.01" :step="0.0001" :precision="4" class="bt-input"></el-input-number>
                                </div>
                                <div class="bt-form-row">
                                    <span class="bt-form-label">基准对比</span>
                                    <el-checkbox v-model="btIncludeBenchmark">含基准对比</el-checkbox>
                                </div>
                                <div class="bt-form-actions">
                                    <el-button type="primary" size="small" :loading="btRunning" @click="runBacktestWorkbench">运行回测</el-button>
                                    <el-button size="small" :disabled="!btResult" @click="exportBacktestCSV">导出 CSV</el-button>
                                </div>
                                <div v-if="btError" class="bt-error">{{ btError }}</div>
                            </div>
                        </div>

                        <!-- 结果区 -->
                        <template v-if="btResult && btResult.success">
                            <!-- 指标卡 -->
                            <div class="card">
                                <div class="card-title">核心指标 <span class="bt-period">{{ btResult.period }}</span></div>
                                <div class="bt-metrics">
                                    <div v-for="m in btMetrics" :key="m.key" class="bt-metric">
                                        <div class="bt-metric-label">{{ m.label }}</div>
                                        <div class="bt-metric-value" :class="{ 'is-up': m.dir === 'up', 'is-down': m.dir === 'down' }">{{ m.value }}<span class="bt-metric-suffix">{{ m.suffix }}</span></div>
                                    </div>
                                </div>
                            </div>

                            <!-- 最大回撤区间说明 -->
                            <div v-if="btDrawdownRegion" class="card">
                                <div class="card-title">最大回撤区间</div>
                                <div class="bt-dd-info">回撤幅度 <b>{{ btDrawdownRegion.maxDrawdown }}%</b> · {{ btDrawdownRegion.peakDate }} → {{ btDrawdownRegion.troughDate }}（净值图中已标注）</div>
                            </div>

                            <!-- 净值曲线（多线 + 图例可切换） -->
                            <div class="card">
                                <div class="card-title">净值曲线（点击图例可开关各策略/基准）</div>
                                <div id="backtestNavChart" class="bt-chart" :ref="el => registerBacktestNavChart(el)"></div>
                            </div>

                            <!-- 年度收益列表 -->
                            <div class="card">
                                <div class="card-title">年度收益</div>
                                <qc-state-panel v-if="btAnnualReturns.length === 0" type="empty" title="暂无年度收益数据"></qc-state-panel>
                                <div v-else class="table-container">
                                    <table class="bt-annual-table">
                                        <thead>
                                            <tr><th>年度</th><th>收益</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btAnnualReturns" :key="row.year">
                                                <td>{{ row.year }}</td>
                                                <td :class="row.return >= 0 ? 'is-up' : 'is-down'">{{ row.return >= 0 ? '+' : '' }}{{ row.return }}%</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 多策略指标对比 -->
                            <div v-if="btStrategyMetricsRows.length" class="card">
                                <div class="card-title">多策略指标对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>策略</th>
                                                <th v-for="m in btStrategyMetricsRows[0].metrics" :key="m.key">{{ m.label }}</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in btStrategyMetricsRows" :key="row.name">
                                                <td>{{ row.name }}</td>
                                                <td v-for="m in row.metrics" :key="m.key">{{ m.value }}{{ m.suffix }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <!-- 交易明细 -->
                            <div class="card">
                                <div class="card-title">交易明细 <span class="bt-trade-count">{{ btTrades.length }} 笔</span></div>
                                <qc-state-panel v-if="btTrades.length === 0" type="empty" title="本期无调仓交易"></qc-state-panel>
                                <div v-else class="table-container bt-trades-wrap">
                                    <table class="bt-trades-table">
                                        <thead>
                                            <tr><th>日期</th><th>股票代码</th><th>方向</th><th>原因</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(t, i) in btTrades" :key="i">
                                                <td>{{ t.date }}</td>
                                                <td>{{ t.stock }}</td>
                                                <td :class="t.action === 'buy' ? 'is-up' : t.action === 'sell' ? 'is-down' : ''">{{ t.action === 'buy' ? '买入' : t.action === 'sell' ? '卖出' : t.action }}</td>
                                                <td>{{ t.reason }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </template>

                        <!-- 未运行 / 加载 / 失败 -->
                        <div v-else class="card">
                            <qc-state-panel v-if="btRunning" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="btError" type="error" title="回测失败" :desc="btError" @retry="runBacktestWorkbench"></qc-state-panel>
                            <qc-state-panel v-else type="empty" title="尚未运行回测" desc="选择策略与参数后点击「运行回测」查看结果"></qc-state-panel>
                        </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码终点 -->
                </div>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      const { computed } = Vue;

      // ===== v3.11 (FR-3.11.7) 今日一屏: 聚合当日决策要素的派生视图 =====
      const merrill = computed(() => state.merrillData?.value || {});
      const market = computed(() => state.marketData?.value || {});
      const dashboard = computed(() => state.dashboardData?.value || {});
      const health = computed(() => state.healthMetrics?.value || []);
      const consensusRank = computed(() => state.filteredConsensusRank?.value || []);

      // code → name 查找表（来自共识榜/当前池），用于今日新入池显示股票名
      const codeNameMap = computed(() => {
        const m = {};
        for (const it of consensusRank.value) if (it.code && it.name) m[it.code] = it.name;
        return m;
      });

      const HEALTH_NAMES = { 'sxsc_tushare': '东财', 'tushare': 'Tushare', 'akshare': 'AkShare' };
      function healthName(name) { return HEALTH_NAMES[name] || name; }

      // 今日日期 + 交易状态
      const todayText = computed(() => market.value.date || dashboard.value.latest_date || '-');
      const tradingStatus = computed(() => {
        const mk = market.value;
        if (!mk || Object.keys(mk).length === 0) return '数据加载中...';
        if (mk.is_trading_day && mk.in_trading_hours) return '● 交易中';
        if (mk.is_trading_day) return '已收盘';
        return '○ 非交易日';
      });

      // 美林下一阶段预测
      const merrillNext = computed(() => {
        const nsp = merrill.value.next_stage_prediction;
        if (nsp && nsp.next_stage_name && nsp.transition_probability > 0.2) {
          return `→${nsp.next_stage_name} ${Math.round(nsp.transition_probability * 100)}%`;
        }
        return '';
      });

      // 今日重点（新入池/预警），点击跳转对应页
      const todayFocus = computed(() => {
        const items = [];
        const pc = dashboard.value.pool_changes || {};
        const n = pc.new_count || 0;
        if (n > 0) {
          // v3.15: 优先用后端 new_stock_names, 再回退前端 codeNameMap → 代码
          const newNames = pc.new_stock_names || {};
          const names = (pc.new_stocks || []).map(c => newNames[c] || codeNameMap.value[c] || c).slice(0, 4).join('、');
          items.push({
            icon: '🆕', level: 'new',
            text: `今日新入池 ${n} 只${names ? ' · ' + names : ''}`,
            action: () => { state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; state.statusFilter.value = 'new'; },
          });
        }
        for (const s of health.value.filter(x => x.degraded)) {
          items.push({
            icon: '⚠️', level: 'warn',
            text: `数据源 ${healthName(s.name)} degraded（连续失败）`,
            action: () => { state.currentPage.value = 'system'; },
          });
        }
        const t = merrill.value.timing;
        if (t && t.progress_percent && t.progress_percent > 100) {
          items.push({
            icon: '⏰', level: 'warn',
            text: `美林「${merrill.value.name}」已超期 ${t.progress_percent}%`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        } else if (t && t.maturity && merrill.value.name) {
          items.push({
            icon: '⏳', level: 'info',
            text: `美林「${merrill.value.name}」阶段成熟度 ${t.maturity}`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        }
        const mk = market.value;
        if (mk && mk.is_trading_day === false && mk.date) {
          items.push({
            icon: '📅', level: 'info',
            text: `${mk.date} 非交易日`,
            action: () => { state.currentSubPage.value = 'market'; },
          });
        }
        return items;
      });

      // v3.22-I4: 美林时间轴 (显式解包 ref)
      const merrillTimeline = computed(() => state.merrillTimeline?.value || state.merrillTimeline || { cycles: [] });
      const timelineLoading = computed(() => state.timelineLoading?.value || false);
      function showTimelineStage(stage) {
        if (state.showTimelineStage) state.showTimelineStage(stage);
      }

      // v3.22-I4: 美林时间轴阶段取色
      function getTimelineStageColor(stage) {
        // v3.22-timeline-fix: setupState 已解包 ref — 兼容 .value 与直接对象两种形态
        const raw = state.merrillStagesConfig;
        const cfg = (raw && raw.value) ? raw.value : (raw || {});
        const s = cfg[stage] || {};
        // v3.22-timeline-fix: fallback 用主题主色 — 原 'var(--border-strong)' 未定义 → 透明底+白字看不清
        return s.color || s.bg_color || 'var(--color-primary)';
      }
      // v3.22-timeline-fix: 阶段中文名兜底 — API timeline 部分 stage 的 name 为空, 用 stages 配置补名
      function getTimelineStageName(stage) {
        const raw = state.merrillStagesConfig;
        const cfg = (raw && raw.value) ? raw.value : (raw || {});
        return (cfg[stage] && cfg[stage].name) || '';
      }

      return { ...state, todayText, tradingStatus, merrillNext, todayFocus, getTimelineStageColor, getTimelineStageName, merrillTimeline, timelineLoading, showTimelineStage };
    },
  };
})();
