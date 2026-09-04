// quant-calendar: StrategiesPage 组件 (v3.6.0-T5 / FR-3.6.2)
// 策略总览页: 单根div 内含 4 子页 (overview/merrill/market/consensus) v-if 链
// 注: 原始模板含跨行 div 标签, 行号正则易漏计; 组件化时保留原始结构 (根div 90-357)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StrategiesPage = {
    name: 'qc-strategies-page',
    template: `
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system+execution 下也渲染 -->
                <div v-if="currentPage === 'strategies' || (currentPage === 'system' && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
<div class="page-header">
                        <div class="page-title">{{ t('strategies.title') }}</div>
                        <!-- v3.17.4 (FR-3.17.4): 回测工作台入口 -->
                        <button type="button" class="bt-entry-btn" @click="navigateTo('research', 'backtest')">回测工作台</button> <!-- V5.0.11: 回测移入策略研究, 入口跳转 -->
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
                        <!-- V5.3.0 (T-5.3.5.2): 机会/风险信号角标条 (纯计算) -->
                        <div v-if="todaySignals.length" class="today-signals mt-8">
                            <div v-for="(sg, i) in todaySignals" :key="i"
                                 class="today-signal-chip"
                                 :class="sg.kind === 'opportunity' ? 'sig-opp' : 'sig-risk'"
                                 @click="sg.action">
                                <span class="today-signal-dot"></span>
                                <span class="today-signal-text">{{ sg.source }}·{{ sg.text }}</span>
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
                        <div class="stat-card info">
                            <div class="stat-icon info">📅</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card success">
                            <div class="stat-icon success">📈</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card gold">
                            <div class="stat-icon gold">🎯</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-icon warning">💎</div>
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
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ fmtNum(item.percentage) }}%)</span></span>
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
                                ⏱ 美林时钟 · 经济周期
                            </div>
                            <span class="strategy-tag-pill" :style="{background: merrillData.color || 'var(--color-success)'}">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                            <!-- V4.5 (FR-4.5.1): 配置就近 -->
                            <el-button size="small" type="primary" plain @click="merrillConfigOpen = !merrillConfigOpen">
                                ⚙ {{ merrillConfigOpen ? '收起配置' : '配置' }}
                            </el-button>
                        </div>
                        <div class="card mt-4" v-if="merrillConfigOpen">
                            <div class="card-title">⏱ 美林时钟配置</div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong></span>
                                <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">🔄 手动重评估</el-button>
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">自动刷新</span>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">刷新间隔(分钟)</span>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="10" label="10" />
                                    <el-option :value="30" label="30" />
                                    <el-option :value="60" label="60" />
                                </el-select>
                            </div>
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
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(2) }}%
                                </span>
                                <span v-else>均值 {{ fmtNum(merrillData.timing.avg_duration_months) }}月</span>
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
                                    {{ (merrillData.next_stage_prediction.transition_probability * 100).toFixed(2) }}%
                                </span>
                            </div>
                        </div>

                        <div class="gold-hint">
                            💡 点击阶段卡片查看详细分析和投资建议
                        </div>

                        <!-- v3.22-I4 + V4.0.1: 历史周期时间轴(最近4轮, 历史在上/最新在下, 蛇形连线, hover介绍) -->
                        <div class="merrill-timeline-block">
                            <div class="merrill-timeline-head">
                                <span>🕰 历史周期时间轴</span>
                                <span class="merrill-timeline-sub" v-if="merrillTimeline?.cycles?.length">最近 {{ merrillTimeline.cycles.length }} 轮 · 自上而下 历史→最新 · 悬浮阶段看介绍</span>
                                <span class="merrill-timeline-sub" v-else-if="timelineLoading">加载中...</span>
                            </div>
                            <div class="merrill-timeline" v-if="merrillTimeline?.cycles?.length">
                                <div class="tl-spine">
                                    <div class="tl-spine-arrow tl-top">▲ 历史</div>
                                    <div class="tl-cycle" v-for="(cycle, ci) in merrillTimeline.cycles" :key="ci">
                                        <div class="tl-cycle-node"><span class="tl-cycle-node-dot"></span></div>
                                        <div class="tl-cycle-body">
                                            <div class="tl-cycle-label">{{ cycle.label }}<span class="tl-cycle-years" v-if="tlCycleYears(cycle)"> · {{ tlCycleYears(cycle) }}</span></div>
                                            <div class="tl-stage-rows" :style="{height: (cycle.stages.length > 4 ? 120 : 60) + 'px'}">
                                                <template v-for="(row, ri) in timelineRows(cycle.stages)" :key="ri">
                                                    <div class="tl-stage-row" :class="ri === 0 ? 'tl-row-top' : 'tl-row-bottom'">
                                                        <div v-for="(st, si) in row" :key="si"
                                                             class="merrill-stage-chip"
                                                             :class="{ 'is-current': st.is_current }"
                                                             :style="tlChipStyle(st.stage)"
                                                             @click.prevent="showTimelineStage(st.stage, $event)"
                                                             @mouseenter="setTlHover(ci + '-' + ri + '-' + si)"
                                                             @mouseleave="clearTlHover()">
                                                            <span class="tl-dot" :style="{background: getTimelineStageColor(st.stage)}"></span>
                                                            <span class="merrill-stage-chip-name">{{ st.name || getTimelineStageName(st.stage) || st.stage }}</span>
                                                            <span class="merrill-stage-chip-date" v-if="st.start">{{ st.start.slice(0,4) }}<template v-if="st.end">–{{ st.end.slice(0,4) }}</template></span>
                                                            <span class="merrill-stage-chip-current" v-if="st.is_current">当前</span>
                                                            <div class="tl-tip" v-if="tlHoverKey === (ci + '-' + ri + '-' + si)">
                                                                <div class="tl-tip-head">
                                                                    <span class="tl-tip-dot" :style="{background: getTimelineStageColor(st.stage)}"></span>
                                                                    <span class="tl-tip-title">{{ st.name || getTimelineStageName(st.stage) || st.stage }}</span>
                                                                    <span class="tl-tip-current" v-if="st.is_current">当前</span>
                                                                </div>
                                                                <div class="tl-tip-meta">
                                                                    <span v-if="tlTipYears(st)">{{ tlTipYears(st) }}</span>
                                                                    <template v-if="st.duration_months"><span class="tl-tip-sep">·</span><span>约 {{ Math.round(st.duration_months) }} 个月</span></template>
                                                                    <template v-if="st.is_current && merrillData?.timing?.duration_days != null">
                                                                        <span class="tl-tip-sep">·</span><span>已 {{ merrillData.timing.duration_days }} 天<template v-if="merrillData.timing.days_remaining != null"> / 剩 {{ merrillData.timing.days_remaining }} 天</template></span>
                                                                    </template>
                                                                </div>
                                                                <div class="tl-tip-brief" v-if="st.is_current && tlCurrentBrief()">{{ tlCurrentBrief() }}</div>
                                                                <div class="tl-tip-brief" v-else-if="!st.is_current && tlTipBrief(st)">{{ tlTipBrief(st) }}</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </template>
                                                <svg v-if="cycle.stages.length > 1" class="tl-connector" :viewBox="tlPathFor(ci).vb" preserveAspectRatio="none" aria-hidden="true">
                                                    <path :d="tlPathFor(ci).d" class="tl-line" :class="{ 'is-active': tlHoverKey && String(tlHoverKey).indexOf(ci + '-') === 0 }" />
                                                </svg>
                                            </div>
                                            <!-- V4.0.5-D: 甘特式连续时间条 (按时长比例分段着色, 展示各阶段时间占比) -->
                                            <div class="tl-gantt" v-if="cycle.stages.length > 1">
                                                <div v-for="(st, gi) in cycle.stages" :key="gi" class="tl-gantt-seg" :style="tlGanttStyle(st, cycle.stages, gi)"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tl-spine-arrow tl-bottom">▼ 最新</div>
                                </div>
                            </div>
                            <!-- V4.8 (R1): 时间轴小阶段点击紧凑弹窗 — 仅展示该阶段独有信息 -->
                            <div class="tl-click-pop" v-if="tlClickVisible && tlClickStage" :style="tlClickPosStyle" @click.self="closeTlClick">
                                <div class="tl-click-card" role="dialog" aria-label="阶段详情">
                                    <button class="tl-click-close" @click="closeTlClick" aria-label="关闭">✕</button>
                                    <div class="tl-click-head">
                                        <span class="tl-tip-dot" :style="{background: getTimelineStageColor(tlClickStage.stage)}"></span>
                                        <span class="tl-click-title">{{ tlClickStage.name || getTimelineStageName(tlClickStage.stage) || tlClickStage.stage }}</span>
                                        <span class="tl-tip-current" v-if="tlClickStage.is_current">当前</span>
                                    </div>
                                    <div class="tl-click-meta">
                                        <span v-if="tlClickStage.start">{{ String(tlClickStage.start).slice(0,4) }}<template v-if="tlClickStage.end">–{{ String(tlClickStage.end).slice(0,4) }}</template><template v-else>–至今</template></span>
                                        <template v-if="tlClickStage.duration_months"><span class="tl-tip-sep">·</span><span>约 {{ Math.round(tlClickStage.duration_months) }} 个月</span></template>
                                        <template v-if="tlClickStage.is_current && merrillData?.timing?.duration_days != null">
                                            <span class="tl-tip-sep">·</span><span>已 {{ merrillData.timing.duration_days }} 天<template v-if="merrillData.timing.days_remaining != null"> / 剩 {{ merrillData.timing.days_remaining }} 天</template></span>
                                        </template>
                                    </div>
                                    <div class="tl-click-brief" v-if="tlClickStage.essence">{{ tlClickStage.essence }}</div>
                                    <div class="tl-click-trigger" v-if="tlClickStage.trigger && !tlClickStage.is_current">
                                        <span class="tl-click-label">触发</span>{{ tlClickStage.trigger }}
                                    </div>
                                    <div class="tl-click-trigger" v-else-if="tlClickStage.is_current && tlCurrentBrief()">
                                        <span class="tl-click-label">实时</span>{{ tlCurrentBrief() }}
                                    </div>
                                    <div class="tl-click-indicators" v-if="tlClickStage.key_indicators && Object.keys(tlClickStage.key_indicators).length">
                                        <span v-for="(v, k) in tlClickStage.key_indicators" :key="k" class="tl-click-ind-card">
                                            {{ k === 'gdp_growth' ? 'GDP' : k === 'cpi' ? 'CPI' : k === 'pmi' ? 'PMI' : k === 'ppi' ? 'PPI' : k === 'm2_growth' ? 'M2' : k }} {{ v }}%
                                        </span>
                                    </div>
                                    <div class="tl-click-highlight" v-if="tlClickStage.highlight">
                                        <span class="tl-click-label">亮点</span>{{ tlClickStage.highlight }}
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
                                <div class="bt-dd-info">回撤幅度 <b>{{ fmtNum(btDrawdownRegion.maxDrawdown) }}%</b> · {{ btDrawdownRegion.peakDate }} → {{ btDrawdownRegion.troughDate }}（净值图中已标注）</div>
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
                                                <td :class="row.return >= 0 ? 'is-up' : 'is-down'">{{ row.return >= 0 ? '+' : '' }}{{ fmtNum(row.return) }}%</td>
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
                    <!-- V4.9 (P1): 执行看板子页 -->
                    <div v-else-if="currentSubPage === 'execution'" class="card">
                        <div class="card-title flex-between">
                            <span>⚡ 策略执行看板</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" @click="loadExecutionData" :loading="execLoading">🔄 刷新</el-button>
                                <el-select class="w-100" size="small" v-model="execDays" @change="loadExecutionData">
                                    <el-option label="近1天" :value="1" />
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 聚合统计卡片 -->
                        <div v-if="execSummary" class="dashboard-grid">
                            <div class="stat-card info">
                                <div class="stat-icon info">📋</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.total }}</div>
                                    <div class="stat-label">总执行次数</div>
                                </div>
                            </div>
                            <div class="stat-card success">
                                <div class="stat-icon success">✅</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.success_count }}</div>
                                    <div class="stat-label">成功次数</div>
                                </div>
                            </div>
                            <div class="stat-card warning">
                                <div class="stat-icon warning">📈</div>
                                <div class="stat-content">
                                    <div class="stat-value" :class="execSuccessClass">{{ execSummary.success_rate || 0 }}%</div>
                                    <div class="stat-label">成功率</div>
                                </div>
                            </div>
                            <div class="stat-card gold">
                                <div class="stat-icon gold">📅</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ Object.keys(execSummary.daily_trend || {}).length }}</div>
                                    <div class="stat-label">覆盖天数</div>
                                </div>
                            </div>
                        </div>

                        <!-- 各任务状态卡片 -->
                        <div v-if="execSummary?.by_task" class="card mt-4">
                            <div class="card-title">📊 各任务执行统计</div>
                            <div class="strategy-item" v-for="(stats, taskName) in execSummary.by_task" :key="taskName">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ taskName }}</span>
                                    <span class="strategy-count">
                                        <span class="color-success">{{ stats.success }}</span>
                                        <span class="text-tertiary">/</span>
                                        <span class="color-danger">{{ stats.failed }}</span>
                                        <span class="text-tertiary"> | {{ stats.total }} 次</span>
                                    </span>
                                </div>
                                <div class="strategy-progress">
                                    <div class="progress-bar" :class="execRateClass(stats.total, stats.success)" :style="{width: (stats.total > 0 ? (stats.success / stats.total * 100) : 0) + '%'}"></div>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">最近: {{ stats.last_run || '—' }}</span>
                                    <span class="text-xs" :class="stats.last_status === 'success' ? 'color-success' : 'color-danger'">{{ stats.last_status === 'success' ? '✓ 成功' : '✗ 失败' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- V4.9.2 (P1): 每日策略执行监控 -->
                        <div class="card mt-4">
                            <div class="card-title">📅 {{ t('exec.resultTitle') }}</div>
                            <div class="dashboard-grid">
                                <div class="stat-card warning">
                                    <div class="stat-icon warning">🗓</div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execCountdownText }}</div>
                                        <div class="stat-label">{{ t('exec.countdown') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card success">
                                    <div class="stat-icon success">{{ execStatusIcon }}</div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execPhaseText }}</div>
                                        <div class="stat-label">{{ t('exec.statusTitle') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card info">
                                    <div class="stat-icon info">📦</div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execLastDate }}</div>
                                        <div class="stat-label">{{ t('exec.lastRun') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card gold">
                                    <div class="stat-icon gold">👁</div>
                                    <div class="stat-content">
                                        <div class="stat-value" :class="execVisibleClass">{{ execVisibleText }}</div>
                                        <div class="stat-label">{{ t('exec.dayTotal') }}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.planTitle') }}</div>
                            <div class="strategy-item" v-for="p in execPlan" :key="p.sid">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ p.name }}</span>
                                    <span class="strategy-count">
                                        <span :class="p.enabled ? 'color-success' : 'color-danger'">{{ p.enabled ? '✓' : '✗' }}</span>
                                        <span class="text-tertiary"> | {{ p.schedule }} | {{ t('exec.lastRun') }}: {{ p.last_run || '—' }}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.resultTitle') }}</div>
                            <div class="strategy-item" v-for="r in execResultsDates" :key="r.date">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ r.date }}</span>
                                    <span class="strategy-count">
                                        <span class="text-tertiary">{{ t('exec.union') }}: {{ r.in_pool_union }} | {{ t('exec.dayTotal') }}: {{ r.day_view_total }}</span>
                                        <span :class="r.visible ? 'color-success' : 'color-danger'">{{ r.visible ? '✓ ' + t('exec.visible') : '✗ ' + t('exec.invisible') }}</span>
                                        <el-button size="small" link type="primary" @click="loadExecutionTrace(r.date)">{{ t('exec.traceTitle') }}</el-button>
                                    </span>
                                </div>
                                <div class="flex-between">
                                    <span class="text-xs-tertiary">{{ r.strategies.map(function (s) { return s.strategy + ':' + s.held; }).join(' | ') }}</span>
                                    <span class="text-xs-tertiary">{{ r.run_at || '—' }}</span>
                                </div>
                            </div>
                            <div class="card-title mt-2">{{ t('exec.traceTitle') }}</div>
                            <div class="flex-c-gap-8 mb-2">
                                <el-select class="w-120" size="small" v-model="execTraceDate" @change="loadExecutionTrace(execTraceDate)">
                                    <el-option v-for="r in execResultsDates" :key="r.date" :label="r.date" :value="r.date" />
                                </el-select>
                                <el-button size="small" @click="loadExecutionTrace(execTraceDate)" :loading="execTraceLoading">🔄 {{ t('exec.traceTitle') }}</el-button>
                            </div>
                            <div v-if="execTraceSteps.length" class="strategy-item" v-for="s in execTraceSteps" :key="s.step + (s.ts || '')">
                                <div class="strategy-header">
                                    <span class="strategy-name">{{ s.step }}</span>
                                    <span class="text-xs-tertiary">{{ s.ts }}</span>
                                </div>
                                <div class="text-sm-tertiary">{{ s.detail }}</div>
                            </div>
                            <div v-else class="text-tertiary text-sm">—</div>
                        </div>

                        <!-- 历史记录表 -->
                        <div class="card mt-4">
                            <div class="card-title flex-between">
                                <span>📝 执行历史 <span class="text-sm-tertiary">(最近 {{ execDays }} 天)</span></span>
                                <div class="flex-c-gap-8">
                                    <el-select class="w-120" size="small" v-model="execTaskFilter" @change="loadExecutionData" clearable placeholder="全部任务">
                                        <el-option v-for="t in execTaskOptions" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-100" size="small" v-model="execStatusFilter" @change="loadExecutionData" clearable placeholder="全部状态">
                                        <el-option label="成功" value="success" />
                                        <el-option label="失败" value="failed" />
                                    </el-select>
                                </div>
                            </div>
                            <qc-state-panel v-if="execLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="execError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadExecutionData"></qc-state-panel>
                            <div v-else-if="!execHistory.length" class="empty-state">
                                <div class="text-md-medium-primary">暂无执行记录</div>
                                <div class="text-sm-tertiary-mt8">调度任务尚未运行，或所选时间段内无记录</div>
                            </div>
                            <div v-else class="table-container">
                                <table class="bt-trades-table">
                                    <thead>
                                        <tr><th>时间</th><th>任务</th><th>状态</th><th>详情</th></tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(r, i) in execHistory" :key="i">
                                            <td class="text-sm-mono">{{ r.ts }}</td>
                                            <td><span class="strategy-tag">{{ r.task }}</span></td>
                                            <td><span :class="r.success ? 'status-current' : 'status-out'">{{ r.success ? '✓ 成功' : '✗ 失败' }}</span></td>
                                            <td class="text-sm-tertiary" :title="r.detail">{{ (r.detail || '—').slice(0, 60) }}{{ (r.detail || '').length > 60 ? '…' : '' }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    </div>
    `,
    setup() {
      const state = inject('qcState');
      const merrillConfigOpen = Vue.ref(false);  // V4.5 (FR-4.5.1): 内联配置展开
      if (!state) return {};
      const { computed } = Vue;
      // V5.2.8 (T-5.2.53): 竞态防护推广 — 页面级请求序号
      let _reqSeq = 0;

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
          return `→${nsp.next_stage_name} ${(nsp.transition_probability * 100).toFixed(2)}%`;
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
            action: () => { if (window.__quantGoPage) window.__quantGoPage('calendar', 'pool'); else { state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; } state.statusFilter.value = 'new'; },
          });
        }
        for (const s of health.value.filter(x => x.degraded)) {
          items.push({
            icon: '⚠', level: 'warn',
            text: `数据源 ${healthName(s.name)} degraded（连续失败）`,
            action: () => { if (window.__quantGoPage) window.__quantGoPage('system', ''); else { state.currentPage.value = 'system'; } },
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

      // V5.3.0 (T-5.3.5.2 / FR-5.3.5.2): 今日一屏信号化 — 机会/风险角标 (纯计算, 不经过 AI)
      const todaySignals = computed(() => {
        const signals = [];
        const mName = merrill.value.name || '';
        const timing = merrill.value.timing || {};
        const bullStages = ['复苏', '成长', '过热'];
        const bearStages = ['滞胀', '衰退'];
        if (bullStages.some(s => mName.includes(s))) signals.push({ kind: 'opportunity', source: '美林', text: mName + ' 顺势', action: () => { state.currentSubPage.value = 'merrill'; } });
        if (bearStages.some(s => mName.includes(s))) signals.push({ kind: 'risk', source: '美林', text: mName + ' 防守', action: () => { state.currentSubPage.value = 'merrill'; } });
        if (timing.progress_percent && timing.progress_percent > 100) signals.push({ kind: 'risk', source: '美林', text: '阶段超期', action: () => { state.currentSubPage.value = 'merrill'; } });
        const pc = dashboard.value.pool_changes || {};
        const net = (pc.new_count || 0) - (pc.out_count || 0);
        if (net >= 3) signals.push({ kind: 'opportunity', source: '池变动', text: '净入池 +' + net, action: () => { state.statusFilter.value = 'new'; state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; } });
        else if (net <= -3) signals.push({ kind: 'risk', source: '池变动', text: '净出池 ' + net, action: () => { state.currentSubPage.value = 'consensus'; } });
        const sent = market.value.market_sentiment;
        const st = (sent && sent.text) || '';
        if (st.includes('乐观') || st.includes('积极') || st.includes('亢奋')) signals.push({ kind: 'opportunity', source: '情绪', text: st, action: () => { state.currentSubPage.value = 'market'; } });
        if (st.includes('悲观') || st.includes('恐慌') || st.includes('低迷')) signals.push({ kind: 'risk', source: '情绪', text: st, action: () => { state.currentSubPage.value = 'market'; } });
        for (const s of health.value.filter(x => x.degraded)) signals.push({ kind: 'risk', source: '数据', text: healthName(s.name) + ' 降级', action: () => { if (window.__quantGoPage) window.__quantGoPage('system', ''); else { state.currentPage.value = 'system'; } } });
        return signals;
      });

      // v3.22-I4: 美林时间轴 (显式解包 ref)
      const merrillTimeline = computed(() => state.merrillTimeline?.value || state.merrillTimeline || { cycles: [] });
      const timelineLoading = computed(() => state.timelineLoading?.value || false);
      // V4.0.5: 修复时间轴点击无弹窗 — qcState 未注入 showTimelineStage, 改用同源的 showStageDetail(阶段详情弹窗)
      // V4.8 (R1): 点击改为时间轴内嵌紧凑弹窗 — 仅展示该小阶段独有信息(essence/highlight/指标),
      //            不再跳转大而全的阶段详情弹窗 (showStageDetail 保留其他入口用)
      const tlClickStage = Vue.ref(null);   // 当前点击的阶段对象 (含 essence/highlight/key_indicators)
      const tlClickVisible = Vue.ref(false);
      const tlClickPos = Vue.reactive({ top: 0, left: 0, right: null, bottom: null, maxWidth: 460 });
      // V4.8.2-fix (用户反馈): 弹窗锚定被点击阶段 chip 的右侧合适位置
      // 定位策略: 优先 chip 右侧垂直居中; 右侧空间不足时左侧; 上下空间不足时贴边
      function computeTlClickPos(ev) {
        const el = ev && ev.currentTarget;
        const pop = document.querySelector('.tl-click-pop');
        if (!el || !pop) return;
        const cRect = el.getBoundingClientRect();
        const popW = pop.offsetWidth || 340;
        const popH = pop.offsetHeight || 220;
        const pad = 10;
        // 定位祖先: .merrill-timeline-block (relative), 弹窗 absolute 相对它
        const cont = el.closest('.merrill-timeline-block');
        const contRect = cont ? cont.getBoundingClientRect() : cRect;
        const cLeft = cRect.left - contRect.left;   // chip 相对容器坐标
        const cTop = cRect.top - contRect.top;
        const cW = cRect.width, cH = cRect.height;
        const contW = contRect.width, contH = contRect.height;
        // 水平: 优先右侧, 空间不足放左侧
        let left = null, right = null;
        if (cLeft + cW + pad + popW <= contW) {
          left = cLeft + cW + pad;
        } else if (cLeft - pad - popW >= 0) {
          left = cLeft - pad - popW;
        } else {
          left = Math.max(8, Math.min(cLeft, contW - popW - 8));
        }
        // 垂直: chip 中心对齐, 容器内贴边
        const idealTop = cTop + cH / 2 - popH / 2;
        const top = Math.max(8, Math.min(idealTop, contH - popH - 8));
        tlClickPos.top = top;
        tlClickPos.left = left;
        tlClickPos.right = null;
        tlClickPos.bottom = null;
      }
      // V4.8.2-fix: 弹窗位置样式 (relative 容器内 absolute 定位)
      const tlClickPosStyle = Vue.computed(function () {
        const st = {};
        if (tlClickPos.top != null) st.top = tlClickPos.top + 'px';
        if (tlClickPos.left != null) st.left = tlClickPos.left + 'px';
        if (tlClickPos.right != null) st.right = tlClickPos.right + 'px';
        return st;
      });
      function showTimelineStage(stageKey, ev) {
        // 从时间轴数据中找完整阶段对象 (含 V4.8 注入的独有信息)
        let found = null;
        const cycles = (merrillTimeline.value && merrillTimeline.value.cycles) || [];
        for (const c of cycles) {
          const s = (c.stages || []).find(x => x.stage === stageKey && x.is_current);
          if (s) { found = s; break; }
        }
        if (!found) {
          for (const c of cycles) {
            const s = (c.stages || []).find(x => x.stage === stageKey);
            if (s) { found = s; break; }
          }
        }
        if (found) {
          tlClickStage.value = found;
          tlClickVisible.value = true;
          // 锚定位置: 弹窗渲染后 nextTick 测量并定位
          Vue.nextTick(function () { computeTlClickPos(ev); });
        }
      }
      function closeTlClick() {
        tlClickVisible.value = false;
        tlClickStage.value = null;
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

      // ─── V4.0.1: 时间轴重设计 — 历史在上/最新在下 · 蛇形折行连线 · hover 介绍 ───
      function _tlCfg() {
        const raw = state.merrillStagesConfig;
        return (raw && raw.value) ? raw.value : (raw || {});
      }
      function getTimelineStageDesc(stage) {
        return (_tlCfg()[stage] && _tlCfg()[stage].description) || '';
      }
      // V4.0.5-A: 轮次年份范围 (首阶段 start → 末阶段 end 取年)
      function tlCycleYears(cycle) {
        const stages = cycle && cycle.stages ? cycle.stages : [];
        if (!stages.length) return '';
        const y1 = stages[0] && stages[0].start ? String(stages[0].start).slice(0, 4) : '';
        const last = stages[stages.length - 1] || {};
        const y2 = last.end ? String(last.end).slice(0, 4) : (last.start ? String(last.start).slice(0, 4) : '');
        return (y1 || y2) ? (y1 ? y1 + '–' + y2 : y2) : '';
      }
      // V4.0.6: tooltip 精简 — 年份短格式 (如 2009–2011; 无 end 用 start 或至今)
      function tlTipYears(st) {
        const y1 = st.start ? String(st.start).slice(0, 4) : '';
        const y2 = st.end ? String(st.end).slice(0, 4) : (y1 ? '至今' : '');
        return y1 ? (y2 ? y1 + '–' + y2 : y1) : '';
      }
      // V4.0.8: tooltip 内容重写 — 历史阶段显示「本周期·本阶段」凝练要点(essence), 与四方格子通用描述不同; 无 essence 回落触发原因
      // V4.8 (R1): 补充 highlight 独特性亮点 (若存在, 追加在 essence 后)
      function tlTipBrief(st) {
        const base = st.essence || st.trigger || getTimelineStageDesc(st.stage) || '';
        if (st.highlight) return base ? base + ' · ' + st.highlight : st.highlight;
        return base;
      }
      // V4.0.8: 当前阶段 tooltip — 本周期实时核心指标(替代四方格子通用描述), 按当前阶段选最相关指标
      function tlCurrentBrief() {
        const ind = merrill.value.indicators || {};
        const stage = merrill.value.stage || '';
        const map = {
          recovery: [['PMI', ind.pmi], ['GDP', ind.gdp_growth], ['M2', ind.m2_growth]],
          overheat: [['PPI', ind.ppi], ['CPI', ind.cpi], ['PMI', ind.pmi]],
          stagflation: [['CPI', ind.cpi], ['PPI', ind.ppi], ['GDP', ind.gdp_growth]],
          recession: [['PMI', ind.pmi], ['GDP', ind.gdp_growth], ['CPI', ind.cpi]],
        };
        const picks = (map[stage] || map.recession).filter(p => p[1] != null && p[1] !== 0);
        if (!picks.length) return '';
        return '实时 · ' + picks.map(p => p[0] + ' ' + p[1] + '%').join(' ｜ ');
      }
      // V4.0.5-D: 甘特式连续时间条段样式 — 按时长比例 flex-basis + 阶段色填充
      function tlGanttStyle(st, stages, gi) {
        const cfg = _tlCfg()[st.stage] || {};
        const color = cfg.color || 'var(--color-primary)';
        const arr = stages || [];
        const durs = arr.map(s => s.duration_months || 0);
        const total = durs.reduce((a, b) => a + b, 0);
        const basis = total > 0 ? (durs[gi] / total) * 100 : 100 / Math.max(1, arr.length);
        const isFirst = gi === 0, isLast = gi === arr.length - 1;
        return {
          flex: '0 0 ' + basis + '%',
          background: color,
          borderRadius: isFirst ? '6px 0 0 6px' : (isLast ? '0 6px 6px 0' : '0')
        };
      }
      // 蛇形折行: n<=4 单行; n>=5 两行(行2 DOM 反向, 普通 row → 视觉从左到右为时间倒序, 右端短连接)
      function timelineRows(stages) {
        const n = stages.length;
        if (n <= 4) return [stages];
        const half = Math.ceil(n / 2);
        return [stages.slice(0, half), stages.slice(half).reverse()];
      }
      // 阶段 chip 样式: 浅色底 + 阶段色细描边 + 固定深字
      // V4.0.4+V4.1: color 固定深字令牌 var(--text-on-chip)(tokens.css 定义, 深浅主题一致) — dark 下不随 --text-primary 变浅
      function tlChipStyle(stage) {
        const s = _tlCfg()[stage] || {};
        const color = s.color || 'var(--color-primary)';
        const bg = s.bg_color || 'var(--bg-card)';
        return {
          background: bg,
          borderColor: color,
          color: 'var(--text-on-chip)',
          boxShadow: 'inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)'
        };
      }

      // ─── V4.0.3: 测量式精确连线 + chip 内嵌玻璃 hover 浮层 ───
      // 连线基于每个 chip 的真实 DOM 坐标生成, 真正"接上"各阶段, 而非等分估算
      // 用 querySelectorAll 直接测量(不依赖函数 ref, 兼容运行时编译模板)
      const tlPaths = Vue.reactive({});     // ci -> {d, vb}
      const tlHoverKey = Vue.ref(null);
      let _tlResizeHandler = null;
      let _tlRebuildTimer = null;
      let _tlObserver = null;

      // 测量每轮 chip 真实中心点 → 生成精确连接线 (行1 左→右, 跨行竖下, 行2 右→左)
      function buildTlPaths() {
        try {
          const cycles = document.querySelectorAll('.merrill-timeline .tl-cycle');
          cycles.forEach((c, ci) => {
            const rows = c.querySelector('.tl-stage-rows');
            const topRow = c.querySelector('.tl-row-top');
            const botRow = c.querySelector('.tl-row-bottom');
            const chipsTop = topRow ? Array.from(topRow.querySelectorAll('.merrill-stage-chip')) : [];
            const chipsBot = botRow ? Array.from(botRow.querySelectorAll('.merrill-stage-chip')).reverse() : [];
            const chips = chipsTop.concat(chipsBot);  // 时间正序: 行1 左→右, 行2 右→左
            if (!rows || chips.length < 2) { tlPaths[ci] = { d: '', vb: '0 0 1 1' }; return; }
            const rowRect = rows.getBoundingClientRect();
            const W = Math.max(1, rowRect.width);
            const H = Math.max(1, rowRect.height);
            const half = chipsTop.length;
            const pts = chips.map(el => {
              const r = el.getBoundingClientRect();
              return { x: r.left + r.width / 2 - rowRect.left, y: r.top + r.height / 2 - rowRect.top };
            });
            let d = 'M ' + pts[0].x.toFixed(1) + ' ' + pts[0].y.toFixed(1);
            for (let i = 1; i < pts.length; i++) {
              const prev = pts[i - 1], cur = pts[i];
              if (i === half) {
                d += ' L ' + prev.x.toFixed(1) + ' ' + cur.y.toFixed(1);  // 行1 末竖下到行2
                d += ' L ' + cur.x.toFixed(1) + ' ' + cur.y.toFixed(1);   // 横接到行2 首(最右)
              } else {
                d += ' L ' + cur.x.toFixed(1) + ' ' + cur.y.toFixed(1);
              }
            }
            tlPaths[ci] = { d, vb: '0 0 ' + W.toFixed(1) + ' ' + H.toFixed(1) };
          });
        } catch (e) { console.error('[tl] buildTlPaths error', e); }
      }
      function tlPathFor(ci) { return tlPaths[ci] || { d: '', vb: '0 0 1 1' }; }

      function setTlHover(key) { tlHoverKey.value = key; }
      function clearTlHover() { tlHoverKey.value = null; }

      function scheduleTlRebuild(delay) {
        if (_tlRebuildTimer) clearTimeout(_tlRebuildTimer);
        _tlRebuildTimer = setTimeout(() => { _tlRebuildTimer = null; Vue.nextTick(buildTlPaths); }, delay || 120);
      }
      Vue.onMounted(() => {
        scheduleTlRebuild(0);
        scheduleTlRebuild(800);   // 数据可能后到: 兜底重测
        _tlResizeHandler = () => scheduleTlRebuild(150);
        window.addEventListener('resize', _tlResizeHandler);
        // DOM 变化(时间轴数据渲染/布局变化) → debounce 重测, 不依赖 Vue watch 时序
        _tlObserver = new MutationObserver(() => scheduleTlRebuild(120));
        _tlObserver.observe(document.body || document.documentElement, { childList: true, subtree: true });
      });
      Vue.onBeforeUnmount(() => {
        if (_tlResizeHandler) window.removeEventListener('resize', _tlResizeHandler);
        if (_tlRebuildTimer) clearTimeout(_tlRebuildTimer);
        if (_tlObserver) { _tlObserver.disconnect(); _tlObserver = null; }
      });

      // ─── V4.9 (P1): 执行看板 ───
      const execHistory = Vue.ref([]);
      const execSummary = Vue.ref(null);
      const execLoading = Vue.ref(false);
      const execError = Vue.ref(false);
      const execDays = Vue.ref(7);
      const execTaskFilter = Vue.ref('');
      const execStatusFilter = Vue.ref('');
      const execTaskOptions = Vue.computed(() => {
        const tasks = new Set();
        (execHistory.value || []).forEach(function (r) { if (r.task) tasks.add(r.task); });
        return Array.from(tasks).sort();
      });
      // V4.9 (P1): 成功率颜色走 CSS 类（仓库约定禁内联 style）
      const execSuccessClass = Vue.computed(function () {
        const rate = (execSummary.value && execSummary.value.success_rate) || 0;
        return rate >= 80 ? 'color-success' : rate >= 50 ? 'color-warning' : 'color-danger';
      });

      // V4.9.5: 各任务成功率进度条状态色 → CSS 类 (status-ok/warn/bad, 遵守禁内联 style 约定)
      function execRateClass(total, success) {
        if (total > 0 && success / total >= 0.8) return 'status-ok';
        if (total > 0 && success / total >= 0.5) return 'status-warn';
        return 'status-bad';
      }

      async function loadExecutionData() {
        const seq = ++_reqSeq;
        execLoading.value = true;
        execError.value = false;
        try {
          const core = (window.__quantModules && window.__quantModules.core) || {};
          const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
          const params = new URLSearchParams({ days: String(execDays.value) });
          if (execTaskFilter.value) params.set('task', execTaskFilter.value);
          if (execStatusFilter.value) params.set('status', execStatusFilter.value);
          const [histRes, sumRes] = await Promise.all([
            fetch('/api/system/execution-history?' + params.toString(), { headers }).then(function (r) { return r.json(); }),
            fetch('/api/system/execution-summary?days=' + execDays.value, { headers }).then(function (r) { return r.json(); }),
          ]);
          if (seq !== _reqSeq) return;
          execHistory.value = (histRes && histRes.data) || [];
          execSummary.value = (sumRes && sumRes.data) || null;
        } catch (e) {
          console.error('[execution] 执行数据加载失败:', e);
          execError.value = true;
        } finally {
          if (seq === _reqSeq) execLoading.value = false;
        }
      }


      // ─── V4.9.2 (P1): 每日策略执行监控 ───
      const _execI18n = (window.__quantModules && window.__quantModules.i18n) || {};
      const _execT = (typeof _execI18n.t === 'function') ? _execI18n.t : (function (k) { return String(k); });
      const execPlan = Vue.ref([]);
      const execStatus = Vue.ref(null);
      const execResults = Vue.ref(null);
      const execTraceDate = Vue.ref('');
      const execTraceSteps = Vue.ref([]);
      const execTraceLoading = Vue.ref(false);
      let _execPollTimer = null;

      const execResultsDates = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        if (d.length && !execTraceDate.value) execTraceDate.value = d[d.length - 1].date;
        return d;
      });
      const execCountdownText = Vue.computed(function () {
        const p = (execPlan.value || []).find(function (x) { return x.enabled; });
        if (!p || p.countdown_seconds == null) return '—';
        const s = p.countdown_seconds;
        return Math.floor(s / 3600) + 'h' + String(Math.floor((s % 3600) / 60)).padStart(2, '0') + 'm';
      });
      const execPhaseText = Vue.computed(function () {
        const st = execStatus.value;
        if (!st || st.phase === 'idle') return _execT('exec.waiting');
        if (st.phase === 'running') return _execT('exec.running') + (st.current_sid ? ' · ' + st.current_sid : '');
        return st.phase === 'done' ? _execT('exec.done') : _execT('exec.failed');
      });
      const execStatusIcon = Vue.computed(function () {
        return execStatus.value && execStatus.value.phase === 'running' ? '🟡' : '🟢';
      });
      const execLastDate = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        return d.length ? d[d.length - 1].date : '—';
      });
      const execVisibleClass = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        const last = d[d.length - 1];
        return last && last.visible ? 'color-success' : 'color-danger';
      });
      const execVisibleText = Vue.computed(function () {
        const d = (execResults.value && execResults.value.dates) || [];
        const last = d[d.length - 1];
        if (!last) return '—';
        return (last.visible ? '✓ ' : '✗ ') + last.day_view_total;
      });

      function _execFetch(url) {
        const core = (window.__quantModules && window.__quantModules.core) || {};
        const headers = (typeof core.authHeaders === 'function') ? core.authHeaders() : {};
        return fetch(url, { headers }).then(function (r) { return r.json(); });
      }

      async function loadExecutionMonitor() {
        const seq = ++_reqSeq;
        try {
          const [planRes, statusRes, resRes] = await Promise.all([
            _execFetch('/api/strategies/execution/plan'),
            _execFetch('/api/strategies/execution/status'),
            _execFetch('/api/strategies/execution/results?days=7'),
          ]);
          if (seq !== _reqSeq) return;
          execPlan.value = (planRes && planRes.data && planRes.data.plans) || [];
          execStatus.value = (statusRes && statusRes.data) || null;
          execResults.value = (resRes && resRes.data) || null;
          if (execStatus.value && execStatus.value.phase === 'running') {
            _startExecPoll();
          } else {
            _stopExecPoll();
          }
        } catch (e) {
          console.error('[execution-monitor] 监控数据加载失败:', e);
        }
      }

      function _startExecPoll() {
        _stopExecPoll();
        _execPollTimer = setInterval(function () {
          _execFetch('/api/strategies/execution/status').then(function (res) {
            execStatus.value = (res && res.data) || null;
            if (execStatus.value && execStatus.value.phase !== 'running') {
              _stopExecPoll();
              loadExecutionMonitor();
            }
          }).catch(function () { });
        }, 5000);
      }
      function _stopExecPoll() {
        if (_execPollTimer) { clearInterval(_execPollTimer); _execPollTimer = null; }
      }

      async function loadExecutionTrace(date) {
        if (!date) return;
        const seq = ++_reqSeq;
        execTraceLoading.value = true;
        try {
          const res = await _execFetch('/api/strategies/execution/trace/' + encodeURIComponent(date));
          if (seq !== _reqSeq) return;
          const data = (res && res.data) || null;
          execTraceSteps.value = (data && data.steps) || [];
        } catch (e) {
          console.error('[execution-trace] 追溯加载失败:', e);
        } finally {
          if (seq === _reqSeq) execTraceLoading.value = false;
        }
      }

      // V5.2.3-fix: 执行看板移入系统配置后, 组件在 (system, execution) 下是"新挂载"
      // (currentSubPage 已是 execution), 无 immediate 的 watch 不会对当前值触发 → 看板空。
      // immediate 让挂载即按当前子页加载/停止, 对原策略总览路径无副作用。
      Vue.watch(function () { return state.currentSubPage && state.currentSubPage.value; }, function (sub) {
        if (sub === 'execution') { loadExecutionData(); loadExecutionMonitor(); }
        else { _stopExecPoll(); }
      }, { immediate: true });

      return { ...state, todayText, tradingStatus, merrillNext, todayFocus, merrillConfigOpen,
        getTimelineStageColor, getTimelineStageName, getTimelineStageDesc,
        timelineRows, tlChipStyle, tlPathFor, tlCycleYears, tlGanttStyle, tlTipYears, tlTipBrief, tlCurrentBrief,
        tlHoverKey, setTlHover, clearTlHover,
        tlClickStage, tlClickVisible, closeTlClick,
        tlClickPosStyle,
        merrillTimeline, timelineLoading, showTimelineStage,
        execHistory, execSummary, execLoading, execError,
        execDays, execTaskFilter, execStatusFilter, execTaskOptions, execSuccessClass,
        loadExecutionData,
        execRateClass,
        execPlan, execStatus, execResults, execTraceDate, execTraceSteps, execTraceLoading,
        execResultsDates, execCountdownText, execPhaseText, execStatusIcon,
        execLastDate, execVisibleClass, execVisibleText,
        loadExecutionTrace, };
    },
  };
})();
