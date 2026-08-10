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
                        <div class="page-title">📈 策略总览</div>
                        <div style="display:flex;align-items:center;gap:12px;">
                            <span style="color: var(--text-secondary); font-size: var(--font-base);">最新交易日: {{ dashboardData.latest_date || '-' }}</span>
                            <span v-if="timeSinceRefresh" style="color: var(--text-tertiary); font-size: var(--font-xs);">{{ timeSinceRefresh }}</span>
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
                                <div class="stat-label">交易日总数</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">📈</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">覆盖股票数</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">🎯</div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">选股策略数</div>
                            </div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-icon">💎</div>
                            <div class="stat-content">
                                <div style="display:flex;align-items:baseline;gap:8px;">
                                    <div class="stat-value">{{ currentPoolSize }}</div>
                                    <span v-if="poolChangeBadge" :class="poolChangeBadge.dir" class="stat-trend">{{ poolChangeBadge.text }}</span>
                                </div>
                                <div class="stat-label">当前在池股票</div>
                            </div>
                        </div>
                    </div>

                    <!-- 子页: 策略总览 -->

                    <!-- 数据概览卡片 (v1.11 重构: 时间轴+多维度换手) -->
                    <div class="card">
                        <div class="card-title">📋 数据概览</div>
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
                                <div class="pool-change-period">今日变动</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.new_count || 0 }}</span><span class="pool-change-label">新入池</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.out_count || 0 }}</span><span class="pool-change-label">已出池</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">本周累计</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.weekly_new || 0 }}</span><span class="pool-change-label">新入池</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.weekly_out || 0 }}</span><span class="pool-change-label">已出池</span></div>
                            </div>
                            <div class="pool-change-col">
                                <div class="pool-change-period">本月累计</div>
                                <div class="pool-change-row"><span class="pool-change-val up">+{{ dashboardData.pool_changes?.monthly_new || 0 }}</span><span class="pool-change-label">新入池</span></div>
                                <div class="pool-change-row"><span class="pool-change-val down">-{{ dashboardData.pool_changes?.monthly_out || 0 }}</span><span class="pool-change-label">已出池</span></div>
                            </div>
                        </div>
                    </div>

<!-- 各策略选股数量 (v1.11: 可点击跳转) -->
                    <div class="card">
                        <div class="card-title">📈 各策略选股统计 <span style="font-weight:var(--font-normal);font-size: var(--font-sm);color:var(--text-tertiary);">(点击策略跳转日历筛选)</span></div>
                        <div v-for="item in filteredStrategyCounts" :key="item.strategy_id" class="strategy-item" @click="navigateToStrategyFilter(item.strategy_name)" style="cursor:pointer;">
                            <div class="strategy-header">
                                <span class="strategy-name">{{ item.strategy_name }} <span style="font-size:var(--font-xs);color:var(--text-tertiary);margin-left:4px;">→</span></span>
                                <span class="strategy-count">{{ item.count }}只 <span class="strategy-percent">(占在池{{ item.percentage }}%)</span></span>
                            </div>
                            <div class="strategy-progress">
                                <div class="progress-bar" :style="{width: item.percentage + '%'}"></div>
                            </div>
                        </div>
                    </div>

                    <!-- 策略共识度 TOP5 (v1.11: 嵌入概览) -->
                    <div class="card">
                        <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
                            <span>🏆 策略共识度 TOP5</span>
                            <span @click="currentSubPage = 'consensus'" style="font-size: var(--font-sm);color:var(--primary-color);cursor:pointer;font-weight:var(--font-normal);">查看全部 {{ filteredConsensusRank.length }}只 →</span>
                        </div>
                        <div v-if="filteredConsensusRank.length === 0" class="empty-state">暂无共识数据</div>
                        <div v-for="item in filteredConsensusRank.slice(0,5)" :key="item.code" class="consensus-item" @click="showStockDetail(item.code)">
                            <div class="consensus-badge">{{ item.strategy_count }}</div>
                            <div class="consensus-info">
                                <div class="consensus-code">{{ item.code }}</div>
                                <div class="consensus-name">{{ item.name }}
                                    <span @click.stop="toggleWatchlist(item.code, item.name)" style="cursor:pointer;color:var(--color-gold,#D4A843);font-size: var(--font-base);" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span>
                                    <span v-if="evaluatedCodes.has(item.code)" title="已AI评估" style="font-size: var(--font-sm);margin-left:2px;">🤖</span>
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
                    <div class="card" style="overflow: hidden;">
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                            <div style="font-size: var(--font-md); font-weight: var(--font-bold); color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                                ⏱️ 美林时钟 · 经济周期
                            </div>
                            <span :style="{background: merrillData.color || '#4CAF50'}" 
                                  style="padding: 3px 12px; border-radius: 12px; color: white; font-size: var(--font-sm); font-weight: var(--font-semibold);">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                        </div>

                        <!-- 四阶段网格 -->
                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px;">
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon">{{ s.icon }}</div>
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

                        <!-- 描述 -->
                        <div v-if="merrillData.description" style="font-size: var(--font-base); color: var(--text-secondary); line-height: 1.6; text-align: center; padding: 8px 0;">
                            {{ merrillData.description }}
                        </div>

                        <!-- 时间 + 进度 -->
                        <div v-if="merrillData.timing" style="margin-top: 12px; padding: 12px; background: var(--badge-gold-bg); border-radius: 10px;">
                            <div style="display: flex; justify-content: space-between; align-items: center; font-size: var(--font-base); margin-bottom: 6px;">
                                <span style="color: var(--text-secondary);">📅 {{ merrillData.timing.current_stage_start_date || '—' }}</span>
                                <span v-if="merrillData.timing.maturity" :style="{color: merrillData.color}" style="font-weight: var(--font-semibold); font-size: var(--font-sm); padding: 1px 8px; border-radius: 8px; background: var(--bg-card);">{{ merrillData.timing.maturity }}</span>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: var(--font-xs); color: var(--text-secondary); margin-bottom: 7px;">
                                <span>已过 {{ merrillData.timing.duration_days }}天 · 剩余 {{ merrillData.timing.days_remaining || '—' }}天</span>
                                <span v-if="merrillData.next_stage_prediction?.transition_probability > 0.2" style="color: var(--el-warning); font-weight: var(--font-semibold);">
                                    →{{ merrillData.next_stage_prediction.next_stage_name }} {{ (merrillData.next_stage_prediction.transition_probability*100).toFixed(0) }}%
                                </span>
                                <span v-else>均值 {{ merrillData.timing.avg_duration_months }}月</span>
                            </div>
                            <div style="width: 100%; height: 8px; background: var(--border-light); border-radius: 4px; overflow: hidden;">
                                <div :style="{width: Math.min(100, merrillData.timing.progress_percent || 0) + '%', 
                                              background: (merrillData.timing.progress_percent || 0) > 100 ? 
                                                'linear-gradient(90deg, ' + (merrillData.color || '#4CAF50') + ', #FF9800)' : 
                                                (merrillData.color || '#4CAF50')}" 
                                     style="height: 100%; border-radius: 4px; transition: width 0.5s;"></div>
                            </div>
                            <div style="display: flex; justify-content: space-between; font-size: var(--font-xs); color: var(--text-secondary); margin-top: 4px;">
                                <span>{{ merrillData.timing.progress_percent || 0 }}%<template v-if="(merrillData.timing.progress_percent || 0) > 100"> ⚠超期</template></span>
                                <span v-if="merrillData.timing.predicted_end">预计结束 {{ merrillData.timing.predicted_end.base || merrillData.timing.predicted_end }}</span>
                            </div>
                        </div>

                        <!-- 多维度评分 -->
                        <div v-if="merrillData.dimension_scores" style="margin-top: 14px; padding: 12px; background: var(--bg-card-header); border-radius: 10px;">
                            <div style="font-size: var(--font-base); font-weight: var(--font-semibold); color: var(--text-primary); margin-bottom: 10px;">📊 多维度评分</div>
                            <div v-for="dim in dimensionScoreList" :key="dim.key" style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px; font-size: var(--font-sm);">
                                <span style="width: 40px; flex-shrink: 0; color: var(--text-secondary);">{{ dim.label }}</span>
                                <div style="flex: 1; height: 10px; background: var(--border-light); border-radius: 5px; overflow: hidden;">
                                    <div :style="{width: dim.barWidth + '%', background: dim.barColor}" style="height: 100%; border-radius: 5px; transition: width 0.5s;"></div>
                                </div>
                                <span :style="{color: dim.scoreColor}" style="width: 35px; text-align: right; font-weight: var(--font-medium);">+{{ dim.scoreStr }}</span>
                                <span :style="{color: dim.color}" style="width: 36px; text-align: right; font-weight: var(--font-medium); font-size: var(--font-xs);">{{ dim.level }}</span>
                            </div>
                        </div>

                        <!-- 置信度 + 下阶段预测 -->
                        <div v-if="merrillData.confidence" style="margin-top: 10px; padding: 10px 12px; background: var(--bg-card-header); border-radius: 10px; display: flex; justify-content: space-between; align-items: center;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <span style="font-size: var(--font-sm); color: var(--text-secondary);">置信度</span>
                                <span :style="{color: confidenceColor}" style="font-weight: var(--font-semibold); font-size: var(--font-base);">{{ merrillData.confidence.level || '—' }}</span>
                            </div>
                            <div v-if="merrillData.next_stage_prediction" style="display: flex; align-items: center; gap: 4px; font-size: var(--font-sm);">
                                <span style="color: var(--text-secondary);">→预测</span>
                                <span style="font-weight: var(--font-semibold); color: var(--el-warning);">{{ merrillData.next_stage_prediction.next_stage_name || '—' }}</span>
                                <span v-if="merrillData.next_stage_prediction.transition_probability" style="color: var(--text-secondary);">
                                    {{ (merrillData.next_stage_prediction.transition_probability * 100).toFixed(0) }}%
                                </span>
                            </div>
                        </div>

                        <div style="margin-top: 10px; font-size: var(--font-sm); color: var(--color-gold); text-align: center; font-weight: var(--font-medium);">
                            💡 点击阶段卡片查看详细分析和投资建议
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
                                <span v-if="marketData.is_trading_day" style="color:var(--color-primary,#E63946);font-weight:600;">● 交易日</span>
                                <span v-else style="color:var(--text-tertiary);">○ 非交易日</span>
                                <span v-if="marketData.in_trading_hours" style="margin-left:8px;color:var(--color-neutral,#0ca678);font-weight:600;">🕐 交易中</span>
                                <span v-if="!marketData.in_trading_hours && marketData.is_trading_day" style="margin-left:8px;color:var(--text-tertiary);">已收盘</span>
                            </span>
                            <span style="font-size:var(--font-xs);color:var(--text-tertiary);">{{ marketData.date }}</span>
                        </div>
                        <div class="market-sentiment" v-if="marketData.market_sentiment">
                            <div class="market-sentiment-text">{{ marketData.market_sentiment.text }}</div>
                        </div>
                        <div class="market-grid">
                            <div v-for="idx in marketData.indices" :key="idx.id" 
                                 class="market-card" :class="idx.pct_chg >= 0 ? 'up' : 'down'"
                                 @click="showIndexDetail(idx)" style="cursor: pointer;">
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
                        <qc-virtual-list :items="filteredConsensusRank" :row-height="78" style="height: calc(100vh - 240px);">
                            <template #default="{ item, index }">
                            <div class="consensus-item" style="margin-bottom: 0;" @click="showStockDetail(item.code)">
                                <div class="consensus-badge">{{ item.strategy_count || index + 1 }}</div>
                                <div class="consensus-info">
                                    <div class="consensus-code">{{ item.code }}</div>
                                    <div class="consensus-name">{{ item.name }} <span @click.stop="toggleWatchlist(item.code, item.name)" style="cursor:pointer;color:var(--color-gold,#D4A843);font-size: var(--font-base);" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span v-if="evaluatedCodes.has(item.code)" title="已AI评估" style="font-size: var(--font-sm);margin-left:2px;">🤖</span><span v-if="klineLoadedCodes.has(item.code)" title="已加载K线" style="font-size: var(--font-sm);margin-left:2px;">📈</span></div>
                                </div>
                                <div class="consensus-tags">
                                    <span v-for="s in item.strategy_names.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                </div>
                            </div>
                            </template>
                        </qc-virtual-list>
                    </div>
                    </div>
                </div>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      return { ...state };
    },
  };
})();
