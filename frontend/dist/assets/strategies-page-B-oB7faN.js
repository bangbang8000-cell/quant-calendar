(function(){const{inject:q}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.StrategiesPage={name:"qc-strategies-page",template:`
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
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(2) }}%
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
                                <span>🕰️ 历史周期时间轴</span>
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
                                                             @click.prevent="showTimelineStage(st.stage)"
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
    `,setup(){const i=q("qcState");if(!i)return{};const{computed:r}=Vue,d=r(()=>{var e;return((e=i.merrillData)==null?void 0:e.value)||{}}),D=r(()=>{var e;return((e=i.marketData)==null?void 0:e.value)||{}}),R=r(()=>{var e;return((e=i.dashboardData)==null?void 0:e.value)||{}}),M=r(()=>{var e;return((e=i.healthMetrics)==null?void 0:e.value)||[]}),B=r(()=>{var e;return((e=i.filteredConsensusRank)==null?void 0:e.value)||[]}),A=r(()=>{const e={};for(const t of B.value)t.code&&t.name&&(e[t.code]=t.name);return e}),L={sxsc_tushare:"东财",tushare:"Tushare",akshare:"AkShare"};function N(e){return L[e]||e}const I=r(()=>D.value.date||R.value.latest_date||"-"),V=r(()=>{const e=D.value;return!e||Object.keys(e).length===0?"数据加载中...":e.is_trading_day&&e.in_trading_hours?"● 交易中":e.is_trading_day?"已收盘":"○ 非交易日"}),H=r(()=>{const e=d.value.next_stage_prediction;return e&&e.next_stage_name&&e.transition_probability>.2?`→${e.next_stage_name} ${(e.transition_probability*100).toFixed(2)}%`:""}),E=r(()=>{const e=[],t=R.value.pool_changes||{},a=t.new_count||0;if(a>0){const n=t.new_stock_names||{},c=(t.new_stocks||[]).map(o=>n[o]||A.value[o]||o).slice(0,4).join("、");e.push({icon:"🆕",level:"new",text:`今日新入池 ${a} 只${c?" · "+c:""}`,action:()=>{window.__quantGoPage?window.__quantGoPage("calendar","pool"):(i.currentPage.value="calendar",i.currentSubPage.value="pool"),i.statusFilter.value="new"}})}for(const n of M.value.filter(c=>c.degraded))e.push({icon:"⚠️",level:"warn",text:`数据源 ${N(n.name)} degraded（连续失败）`,action:()=>{window.__quantGoPage?window.__quantGoPage("system",""):i.currentPage.value="system"}});const s=d.value.timing;s&&s.progress_percent&&s.progress_percent>100?e.push({icon:"⏰",level:"warn",text:`美林「${d.value.name}」已超期 ${s.progress_percent}%`,action:()=>{i.currentSubPage.value="merrill"}}):s&&s.maturity&&d.value.name&&e.push({icon:"⏳",level:"info",text:`美林「${d.value.name}」阶段成熟度 ${s.maturity}`,action:()=>{i.currentSubPage.value="merrill"}});const l=D.value;return l&&l.is_trading_day===!1&&l.date&&e.push({icon:"📅",level:"info",text:`${l.date} 非交易日`,action:()=>{i.currentSubPage.value="market"}}),e}),Y=r(()=>{var e;return((e=i.merrillTimeline)==null?void 0:e.value)||i.merrillTimeline||{cycles:[]}}),$=r(()=>{var e;return((e=i.timelineLoading)==null?void 0:e.value)||!1});function z(e){i.showStageDetail&&i.showStageDetail(e)}function G(e){const t=i.merrillStagesConfig,s=(t&&t.value?t.value:t||{})[e]||{};return s.color||s.bg_color||"var(--color-primary)"}function O(e){const t=i.merrillStagesConfig,a=t&&t.value?t.value:t||{};return a[e]&&a[e].name||""}function f(){const e=i.merrillStagesConfig;return e&&e.value?e.value:e||{}}function F(e){return f()[e]&&f()[e].description||""}function W(e){const t=e&&e.stages?e.stages:[];if(!t.length)return"";const a=t[0]&&t[0].start?String(t[0].start).slice(0,4):"",s=t[t.length-1]||{},l=s.end?String(s.end).slice(0,4):s.start?String(s.start).slice(0,4):"";return a||l?a?a+"–"+l:l:""}function K(e){const t=e.start?String(e.start).slice(0,4):"",a=e.end?String(e.end).slice(0,4):t?"至今":"";return t?a?t+"–"+a:t:""}function j(e){return e.essence||e.trigger||F(e.stage)||""}function U(){const e=d.value.indicators||{},t=d.value.stage||"",a={recovery:[["PMI",e.pmi],["GDP",e.gdp_growth],["M2",e.m2_growth]],overheat:[["PPI",e.ppi],["CPI",e.cpi],["PMI",e.pmi]],stagflation:[["CPI",e.cpi],["PPI",e.ppi],["GDP",e.gdp_growth]],recession:[["PMI",e.pmi],["GDP",e.gdp_growth],["CPI",e.cpi]]},s=(a[t]||a.recession).filter(l=>l[1]!=null&&l[1]!==0);return s.length?"实时 · "+s.map(l=>l[0]+" "+l[1]+"%").join(" ｜ "):""}function J(e,t,a){const l=(f()[e.stage]||{}).color||"var(--color-primary)",n=t||[],c=n.map(b=>b.duration_months||0),o=c.reduce((b,T)=>b+T,0),k=o>0?c[a]/o*100:100/Math.max(1,n.length),m=a===0,P=a===n.length-1;return{flex:"0 0 "+k+"%",background:l,borderRadius:m?"6px 0 0 6px":P?"0 6px 6px 0":"0"}}function Q(e){const t=e.length;if(t<=4)return[e];const a=Math.ceil(t/2);return[e.slice(0,a),e.slice(a).reverse()]}function X(e){const t=f()[e]||{},a=t.color||"var(--color-primary)";return{background:t.bg_color||"var(--bg-card)",borderColor:a,color:"var(--text-on-chip)",boxShadow:"inset 0 0 0 1px rgba(var(--primary-rgb, 37 99 235), 0.06)"}}const S=Vue.reactive({}),C=Vue.ref(null);let _=null,p=null,u=null;function Z(){try{document.querySelectorAll(".merrill-timeline .tl-cycle").forEach((t,a)=>{const s=t.querySelector(".tl-stage-rows"),l=t.querySelector(".tl-row-top"),n=t.querySelector(".tl-row-bottom"),c=l?Array.from(l.querySelectorAll(".merrill-stage-chip")):[],o=n?Array.from(n.querySelectorAll(".merrill-stage-chip")).reverse():[],k=c.concat(o);if(!s||k.length<2){S[a]={d:"",vb:"0 0 1 1"};return}const m=s.getBoundingClientRect(),P=Math.max(1,m.width),b=Math.max(1,m.height),T=c.length,y=k.map(v=>{const g=v.getBoundingClientRect();return{x:g.left+g.width/2-m.left,y:g.top+g.height/2-m.top}});let x="M "+y[0].x.toFixed(1)+" "+y[0].y.toFixed(1);for(let v=1;v<y.length;v++){const g=y[v-1],h=y[v];v===T&&(x+=" L "+g.x.toFixed(1)+" "+h.y.toFixed(1)),x+=" L "+h.x.toFixed(1)+" "+h.y.toFixed(1)}S[a]={d:x,vb:"0 0 "+P.toFixed(1)+" "+b.toFixed(1)}})}catch(e){console.error("[tl] buildTlPaths error",e)}}function ee(e){return S[e]||{d:"",vb:"0 0 1 1"}}function te(e){C.value=e}function ae(){C.value=null}function w(e){p&&clearTimeout(p),p=setTimeout(()=>{p=null,Vue.nextTick(Z)},e||120)}return Vue.onMounted(()=>{w(0),w(800),_=()=>w(150),window.addEventListener("resize",_),u=new MutationObserver(()=>w(120)),u.observe(document.body||document.documentElement,{childList:!0,subtree:!0})}),Vue.onBeforeUnmount(()=>{_&&window.removeEventListener("resize",_),p&&clearTimeout(p),u&&(u.disconnect(),u=null)}),{...i,todayText:I,tradingStatus:V,merrillNext:H,todayFocus:E,getTimelineStageColor:G,getTimelineStageName:O,getTimelineStageDesc:F,timelineRows:Q,tlChipStyle:X,tlPathFor:ee,tlCycleYears:W,tlGanttStyle:J,tlTipYears:K,tlTipBrief:j,tlCurrentBrief:U,tlHoverKey:C,setTlHover:te,clearTlHover:ae,merrillTimeline:Y,timelineLoading:$,showTimelineStage:z}}}})();
