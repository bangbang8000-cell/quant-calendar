// quant-calendar: StrategiesPage 组件 (v3.6.0-T5 / FR-3.6.2)
// 策略总览页: 单根div 内含 4 子页 (overview/merrill/market/consensus) v-if 链
// 注: 原始模板含跨行 div 标签, 行号正则易漏计; 组件化时保留原始结构 (根div 90-357)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.StrategiesPage = {
    name: 'qc-strategies-page',
    template: `
                <!-- V5.2.3: 执行看板移入系统配置 → 本组件在 system/ops+execution 下也渲染 (V6.9.1-fix2: ops 菜单也含 execution) -->
                <div v-if="currentPage === 'strategies' || ((currentPage === 'system' || currentPage === 'ops') && currentSubPage === 'execution')" key="strategies">
                    <div v-if="currentSubPage === 'overview'">
                        <!-- V6.11 (用户需求1): 移除「回测工作台」快捷按钮及所在整行 —— 入口保留在
                             策略研究 → 回测 (侧栏/顶部页签可达); 交易日信息由下方 today-hero 头部显示。 -->

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
                                <!-- V6.12 (需求轮3·item1): 阶段实色作底改为浅色阶段底 (merrillChipStyle) -->
                                <div class="today-merrill-badge" :style="merrillChipStyle">{{ merrillData?.name || t('strategies.computing') }}</div>
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
                                <div class="today-pool-row"><span class="today-pool-val up">▲ +{{ dashboardData?.pool_changes?.new_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.newPool') }}</span></div>
                                <div class="today-pool-row"><span class="today-pool-val down">▼ -{{ dashboardData?.pool_changes?.out_count || 0 }}</span><span class="today-pool-name">{{ t('calendar.outPool') }}</span></div>
                            </div>
                            <!-- 今日重点 -->
                            <div class="today-cell">
                                <div class="today-cell-label">{{ t('strategies.todayFocus') }}</div>
                                <div class="today-focus-list">
                                    <div v-if="todayFocus.length === 0" class="today-focus-empty">{{ t('strategies.noAlert') }}</div>
                                    <div v-for="(f, i) in todayFocus.slice(0, 3)" :key="i" class="today-focus-item" :class="f.level" @click="f.action">
                                        <span class="today-focus-icon"><qc-icon :name="f.icon" :size="14" /></span><span class="today-focus-text">{{ f.text }}</span>
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
                            <div class="stat-icon info"><qc-icon name="calendar" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_trading_days || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.tradingDays') }}</div>
                            </div>
                        </div>
                        <div class="stat-card success">
                            <div class="stat-icon success"><qc-icon name="trending-up" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.total_stocks_covered || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.coveredStocks') }}</div>
                            </div>
                        </div>
                        <div class="stat-card gold">
                            <div class="stat-icon gold"><qc-icon name="target" :size="18" /></div>
                            <div class="stat-content">
                                <div class="stat-value">{{ dashboardData.stats?.strategy_count || 0 }}</div>
                                <div class="stat-label">{{ t('strategies.strategyCount') }}</div>
                            </div>
                        </div>
                        <div class="stat-card warning">
                            <div class="stat-icon warning"><qc-icon name="sparkles" :size="18" /></div>
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
                        <div class="card-title"><qc-icon name="trending-up" :size="14" /> 各策略选股统计 <span class="text-sm-tertiary-normal">(点击策略跳转日历筛选)</span></div>
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
                        <!-- V5.16 (F2): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.2 (PRD-6.2 F5): 概览 TOP5 改用通用 StockList 组件 -->
                        <!-- V6.9.3 (F1): 启用共识徽章/进度条/价格列, 移除冗余「N 策略」extra -->
                        <qc-stock-list
                          :items="filteredConsensusRank.slice(0, 5)"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>

                    </div>
                    
                    <!-- 子页: 美林时钟 -->
                    <div v-else-if="currentSubPage === 'merrill'">

<!-- 美林时钟 -->
                    <div class="card overflow-hidden">
                        <div class="flex-between-mb16">
                            <div class="strategy-title-bar">
                                <qc-icon name="clock" :size="14" /> 美林时钟 · 经济周期
                            </div>
                            <!-- V6.12 (需求轮3·item1): 阶段实色作底改为浅色阶段底 (merrillChipStyle) -->
                            <span class="strategy-tag-pill" :style="merrillChipStyle">
                                {{ merrillData.name || '计算中...' }}
                            </span>
                            <!-- V4.5 (FR-4.5.1): 配置就近 -->
                            <el-button size="small" type="primary" plain @click="merrillConfigOpen = !merrillConfigOpen">
                                <qc-icon name="settings" :size="14" /> {{ merrillConfigOpen ? '收起配置' : '配置' }}
                            </el-button>
                        </div>
                        <div class="card mt-4" v-if="merrillConfigOpen">
                            <div class="card-title"><qc-icon name="clock" :size="14" /> 美林时钟配置</div>
                            <div class="flex-between-mb12">
                                <span class="text-base-secondary">上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong></span>
                                <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading"><qc-icon name="refresh" :size="14" /> 手动重评估</el-button>
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
                            <!-- V6.6: 阶段色来自服务端 merrillStagesConfig 配置，保留内联 -->
                            <div v-for="s in stages" :key="s.key" @click.prevent="showStageDetail(s.key)"
                                 class="merrill-stage-card" :class="{active: merrillData.stage === s.key}"
                                 :style="merrillData.stage === s.key ? {borderColor: s.color, background: s.bg} : {}">
                                <div class="merrill-stage-icon"><qc-icon :name="s.icon" :size="20" /></div>
                                <!-- V6.6: s.textColor 服务端配置色，保留内联 -->
                                <div class="merrill-stage-name" :style="{color: s.textColor}">{{ s.name }}</div>
                                <div class="merrill-stage-desc">{{ s.tagline }}</div>
                            </div>
                        </div>

                        <!-- 描述 -->
                        <div class="text-center-secondary-lh" v-if="merrillData.description">
                            {{ merrillData.description }}
                        </div>

                        <!-- V5.21: 周期演进板 — 随大模型评估与时间演进动态更新 (替代原 金框 + 历史周期时间轴) -->
                        <div class="mc-board">
                            <!-- ① 当前阶段 · 进行中 (时间演进: 进度/剩余/成熟度实时刷新) -->
                            <div class="mc-now" v-if="merrillData.timing">
                                <div class="mc-now-head">
                                    <span class="mc-now-dot" :style="{background: merrillData.color || 'var(--color-success)'}"></span>
                                    <span class="mc-now-name">{{ merrillData.stage_cn || merrillData.name }}</span>
                                    <span class="mc-now-badge">{{ merrillData.timing.maturity || '—' }}</span>
                                    <span class="mc-conf" v-if="merrillData.confidence">置信度 {{ merrillData.confidence.level }}</span>
                                    <span class="mc-eval-ts" v-if="merrillClockLastUpdated">上次评估 {{ merrillClockLastUpdated }}</span>
                                </div>
                                <div class="mc-prog">
                                    <div class="mc-prog-track">
                                        <div class="mc-prog-fill" :style="mcProgStyle"></div>
                                        <div class="mc-prog-avg" :style="{left: mcAvgMark + '%'}" title="历史平均时长刻度"></div>
                                    </div>
                                    <div class="mc-prog-meta">
                                        <span>已过 <b>{{ merrillData.timing.duration_days }}</b> 天</span>
                                        <span>进度 <b>{{ fmtNum(merrillData.timing.progress_percent) }}%</b></span>
                                        <span v-if="merrillData.timing.days_remaining">预计还需 <b>{{ merrillData.timing.days_remaining }}</b> 天</span>
                                        <span class="mc-avg-note">历史均值 {{ fmtNum(merrillData.timing.avg_duration_months) }} 月</span>
                                    </div>
                                </div>
                                <div class="mc-now-foot">
                                    <div class="mc-next" v-if="merrillData.next_stage_prediction">
                                        <span class="mc-next-lab">下一阶段</span>
                                        <span class="mc-next-name">→ {{ merrillData.next_stage_prediction.next_stage_name }}</span>
                                        <span class="mc-next-prob">{{ fmtNum(merrillData.next_stage_prediction.transition_probability * 100) }}%</span>
                                        <span class="mc-next-sig" v-if="(merrillData.next_stage_prediction.transition_signals || []).length">触发信号: {{ (merrillData.next_stage_prediction.transition_signals || []).join(' · ') }}</span>
                                    </div>
                                    <div class="mc-end" v-if="mcEndRange"><span class="mc-end-lab">预计结束</span>{{ mcEndRange }}</div>
                                </div>
                                <!-- 评估轨迹 (快照: 同一阶段多次评估会连成一段, 阶段切换则出现断点) -->
                                <div class="mc-trail" v-if="mcTrailRuns.length">
                                    <span class="mc-trail-lab">评估轨迹</span>
                                    <span v-for="(run, i) in mcTrailRuns" :key="i" class="mc-trail-run" :class="{ 'is-latest': i === mcTrailRuns.length - 1 }" :title="run.first + ' → ' + run.last">
                                        <span class="mc-trail-dot" :style="{background: getTimelineStageColor(run.stage)}"></span>{{ run.name }} ×{{ run.count }}
                                    </span>
                                    <span class="mc-trail-note">近 {{ merrillSnapshotsTotal || merrillSnapshots.length }} 次评估{{ mcTrailRuns.length > 1 ? ' · 阶段有变更' : ' · 阶段稳定' }}</span>
                                </div>
                            </div>

                            <!-- ② 本轮演进带: 实色=已发生, 斜纹=预测; 当前段宽度随时间生长 -->
                            <div class="mc-band-block" v-if="mcCurrentBand.segs.length">
                                <div class="mc-band-title">
                                    <qc-icon name="activity" :size="14" /> 本轮演进
                                    <span class="mc-band-hint">实色=已发生 · 斜纹=预测 · 宽度∝持续时长 · 阶段首尾相接</span>
                                </div>
                                <div class="mc-band">
                                    <div v-for="(g, i) in mcCurrentBand.segs" :key="i" class="mc-seg"
                                         :class="{ 'is-ghost': g.ghost, 'is-cur': g.live }" :style="mcSegStyle(g)"
                                         @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                        <span class="mc-seg-name" v-if="g.width > 9">{{ g.name }}</span>
                                        <span class="mc-seg-months" v-if="g.width > 17 && g.months">{{ fmtNum(g.months) }}月</span>
                                    </div>
                                </div>
                                <div class="mc-band-axis">
                                    <span>{{ mcCurrentBand.axisStart }}</span>
                                    <span class="mc-band-axis-now" v-if="mcCurrentBand.nowPct != null" :style="{left: mcCurrentBand.nowPct + '%'}">今天</span>
                                    <span>{{ mcCurrentBand.axisEnd }}</span>
                                </div>
                            </div>

                            <!-- ③ 历史周期: 已确认, 低强调; 可切「阶段矩阵」做跨周期比较 -->
                            <div class="mc-hist-block" v-if="mcHistoryBands.length">
                                <div class="mc-hist-head">
                                    <span class="mc-hist-title"><qc-icon name="history" :size="14" /> 历史周期</span>
                                    <span class="mc-hist-sub">近 {{ mcHistoryBands.length }} 轮 · 点击色块看阶段详情</span>
                                    <el-radio-group v-model="mcHistView" size="small">
                                        <el-radio-button value="band">周期带</el-radio-button>
                                        <el-radio-button value="matrix">阶段矩阵</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <template v-if="mcHistView === 'band'">
                                    <!-- V5.22 (需求4): 历史周期逐段列出时间信息; 周期带按持续时长首尾相接 -->
                                    <div v-for="(cyc, i) in mcHistoryBands" :key="i" class="mc-hrow">
                                        <div class="mc-hlab">{{ cyc.label }}<small>{{ cyc.years }}</small></div>
                                        <div class="mc-hbody">
                                            <div class="mc-band mc-band-sm">
                                                <div v-for="(g, j) in cyc.segs" :key="j" class="mc-seg" :style="mcSegStyle(g)"
                                                     @click.prevent="g.stage && showTimelineStage(g.stage)" :title="mcSegTitle(g)">
                                                    <!-- V6.11: 历史周期文字收进色带内 (原带外阶段标签行已移除) -->
                                                    <span class="mc-seg-name" v-if="g.width > 5">{{ g.name }}</span>
                                                    <span class="mc-seg-months" v-if="g.width > 14 && g.months">{{ fmtNum(g.months) }}月</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </template>
                                <table v-else class="mc-mx">
                                    <thead>
                                        <tr>
                                            <th class="mc-mx-lab">周期</th>
                                            <th v-for="k in mcStageKeys" :key="k">
                                                <span class="mc-mx-dot" :style="{background: getTimelineStageColor(k)}"></span>{{ getTimelineStageName(k) }}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, i) in mcMatrix" :key="i">
                                            <td class="mc-mx-lab">{{ row.label }}</td>
                                            <td v-for="k in mcStageKeys" :key="k">
                                                <span v-if="row.sum[k]" class="mc-mx-cell" :class="{ 'is-cur': row.cur === k }" :style="mcMxCellStyle(k, row.sum[k])">{{ fmtNum(row.sum[k]) }} 月</span>
                                                <span v-else class="mc-mx-cell is-zero">—</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="merrill-timeline-empty" v-if="!mcCurrentBand.segs.length && !timelineLoading">暂无历史周期数据</div>
                            <div class="merrill-timeline-empty" v-else-if="!mcCurrentBand.segs.length && timelineLoading">加载中...</div>
                        </div>

                        <!-- 多维度评分 -->
                        <div class="note-box-14" v-if="merrillData.dimension_scores">
                            <div class="text-base-semibold-primary-mb10"><qc-icon name="bar-chart-3" :size="14" /> 多维度评分</div>
                            <div class="flex-c-gap-8-mb6-sm" v-for="dim in dimensionScoreList" :key="dim.key">
                                <span class="stat-label-40">{{ dim.label }}</span>
                                <div class="stat-track-10">
                                    <!-- V6.6: dim 分数段渐变色（JS 插值计算），保留内联 -->
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
                                <!-- V6.6: confidenceColor 置信度计算色，保留内联 -->
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
                            <qc-icon name="lightbulb" :size="14" /> 点击阶段卡片查看详细分析和投资建议
                        </div>

                    </div>
                    </div>
                    
                    <!-- 子页: 市场行情 -->
                    <div v-else-if="currentSubPage === 'market'">

                    
                    <!-- 市场行情概览 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="line-chart" :size="14" /> 今日市场行情</div>
                        <div class="market-status">
                            <span class="market-status-main">
                                <span class="color-primary-semibold-600" v-if="marketData.is_trading_day">● 交易日</span>
                                <span class="color-tertiary" v-else>○ 非交易日</span>
                                <span class="ml-8-neutral-600" v-if="marketData.in_trading_hours"><qc-icon name="clock" :size="14" /> 交易中</span>
                                <span class="ml-8-tertiary" v-if="!marketData.in_trading_hours && marketData.is_trading_day">已收盘</span>
                                <!-- V6.12 (需求轮3·item2): 原独立「普涨行情」渐变横幅信息密度过低
                                     → 判断文字 + 均值涨跌并入状态行 (无底色块, 仅细分隔线 + 语义色数值) -->
                                <span class="market-mood" v-if="marketData.market_sentiment">
                                    {{ marketData.market_sentiment.text }}
                                    <b v-if="marketData.market_sentiment.avg_pct_chg != null"
                                       :class="marketData.market_sentiment.avg_pct_chg >= 0 ? 'up' : 'down'">{{ marketData.market_sentiment.avg_pct_chg >= 0 ? '+' : '' }}{{ fmtNum(marketData.market_sentiment.avg_pct_chg) }}%</b>
                                </span>
                            </span>
                            <span class="text-xs-tertiary">{{ marketData.date }}</span>
                        </div>
                        <!-- V5.16 (F4): 中栏指数列表 + 右栏指数详情工作区 (C4-A; 弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <div class="market-grid" :class="{ 'is-vertical': detailSplitEnabled }">
                            <div v-for="idx in marketData.indices" :key="idx.id" class="market-card clickable"
                                 :class="['up-down-' + (idx.pct_chg >= 0 ? 'up' : 'down'), { 'is-active': detailSplitEnabled && indexDetail && indexDetail.code === idx.code }]"
                                 @click="showIndexDetail(idx)">
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
                        </template>
                        <template #pane>
                            <qc-index-detail-dialog :embedded="true"></qc-index-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- 子页: 策略共识榜 -->
                    <div v-else-if="currentSubPage === 'consensus'">

                    <!-- 策略共识度排行 -->
                    <div class="card">
                        <div class="card-title"><qc-icon name="trophy" :size="14" /> 策略共识度排行 (多策略同时选中)</div>
                        <!-- V5.16 (F3): 中栏列表 + 右栏详情工作区 (弹窗模式时仅列表全宽) -->
                        <qc-detail-split :enabled="detailSplitEnabled">
                        <template #list>
                        <!-- V6.9.3 (F1.4): 统一 StockList 组件 (虚拟滚动 + 共识徽章/进度条/价格列) -->
                        <qc-stock-list
                          class="h-calc-240"
                          :items="filteredConsensusRank"
                          :virtual="true"
                          :row-height="78"
                          empty-text="暂无共识数据"
                          show-rank
                          show-consensus
                          show-price
                          :active-code="detailSplitEnabled ? (stockDetail && stockDetail.stock) : ''"
                          @select="(item) => showStockDetail(item.code)"
                        >
                          <template #actions="{ item }">
                            <span class="gold-link watch-star" @click.stop="toggleWatchlist(item.code, item.name)" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'"><qc-icon name="star" :size="14" :class="watchlistCodes.has(item.code) ? 'is-watched' : ''" /></span>
                            <span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估"><qc-icon name="bot" :size="13" /></span>
                            <span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线"><qc-icon name="trending-up" :size="13" /></span>
                          </template>
                        </qc-stock-list>
                        </template>
                        <template #pane>
                            <qc-stock-detail-dialog :embedded="true"></qc-stock-detail-dialog>
                        </template>
                        </qc-detail-split>
                    </div>
                    </div>
                    <!-- v3.17.4 (FR-3.17.4): 回测工作台 代码起点 -->
                    <div v-else-if="currentSubPage === 'backtest'" class="backtest-workbench">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留返回操作 -->
                        <div class="qc-page-tools">
                            <button type="button" class="bt-back-btn" @click="currentSubPage = 'overview'">返回策略总览</button>
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
                            <span><qc-icon name="zap" :size="14" /> 策略执行看板</span>
                            <div class="flex-c-gap-8">
                                <el-button size="small" @click="loadExecutionData" :loading="execLoading"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                                <el-select class="w-select-sm" size="small" v-model="execDays" @change="loadExecutionData">
                                    <el-option label="近1天" :value="1" />
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                </el-select>
                            </div>
                        </div>

                        <!-- 聚合统计卡片 -->
                        <div v-if="execSummary" class="dashboard-grid">
                            <div class="stat-card info">
                                <div class="stat-icon info"><qc-icon name="clipboard-list" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.total }}</div>
                                    <div class="stat-label">总执行次数</div>
                                </div>
                            </div>
                            <div class="stat-card success">
                                <div class="stat-icon success"><qc-icon name="check" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ execSummary.success_count }}</div>
                                    <div class="stat-label">成功次数</div>
                                </div>
                            </div>
                            <div class="stat-card warning">
                                <div class="stat-icon warning"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value" :class="execSuccessClass">{{ execSummary.success_rate || 0 }}%</div>
                                    <div class="stat-label">成功率</div>
                                </div>
                            </div>
                            <div class="stat-card gold">
                                <div class="stat-icon gold"><qc-icon name="calendar" :size="18" /></div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ Object.keys(execSummary.daily_trend || {}).length }}</div>
                                    <div class="stat-label">覆盖天数</div>
                                </div>
                            </div>
                        </div>

                        <!-- 各任务状态卡片 -->
                        <div v-if="execSummary?.by_task" class="card mt-4">
                            <div class="card-title"><qc-icon name="bar-chart-3" :size="14" /> 各任务执行统计</div>
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
                                    <span class="text-xs" :class="stats.last_status === 'success' ? 'color-success' : 'color-danger'">{{ stats.last_status === 'success' ? '成功' : '失败' }}</span>
                                </div>
                            </div>
                        </div>

                        <!-- V4.9.2 (P1): 每日策略执行监控 -->
                        <div class="card mt-4">
                            <div class="card-title"><qc-icon name="calendar" :size="14" /> {{ t('exec.resultTitle') }}</div>
                            <div class="dashboard-grid">
                                <div class="stat-card warning">
                                    <div class="stat-icon warning"><qc-icon name="calendar-days" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execCountdownText }}</div>
                                        <div class="stat-label">{{ t('exec.countdown') }}<span v-if="execNextRunText" class="text-sm-tertiary-ml4">下次自动更新 {{ execNextRunText }}</span></div>
                                    </div>
                                </div>
                                <div class="stat-card success">
                                    <div class="stat-icon success"><qc-icon :name="execStatusIcon" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execPhaseText }}</div>
                                        <div class="stat-label">{{ t('exec.statusTitle') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card info">
                                    <div class="stat-icon info"><qc-icon name="package" :size="18" /></div>
                                    <div class="stat-content">
                                        <div class="stat-value">{{ execLastDate }}</div>
                                        <div class="stat-label">{{ t('exec.lastRun') }}</div>
                                    </div>
                                </div>
                                <div class="stat-card gold">
                                    <div class="stat-icon gold"><qc-icon name="eye" :size="18" /></div>
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
                                        <span :class="p.enabled ? 'color-success' : 'color-danger'">{{ p.enabled ? '启用' : '停用' }}</span>
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
                                        <span :class="r.visible ? 'color-success' : 'color-danger'">{{ r.visible ? t('exec.visible') : t('exec.invisible') }}</span>
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
                                <el-select class="w-select" size="small" v-model="execTraceDate" @change="loadExecutionTrace(execTraceDate)">
                                    <el-option v-for="r in execResultsDates" :key="r.date" :label="r.date" :value="r.date" />
                                </el-select>
                                <el-button size="small" @click="loadExecutionTrace(execTraceDate)" :loading="execTraceLoading"><qc-icon name="refresh" :size="14" /> {{ t('exec.traceTitle') }}</el-button>
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
                                <span><qc-icon name="file-text" :size="14" /> 执行历史 <span class="text-sm-tertiary">(最近 {{ execDays }} 天)</span></span>
                                <div class="flex-c-gap-8">
                                    <el-select class="w-select" size="small" v-model="execTaskFilter" @change="loadExecutionData" clearable placeholder="全部任务">
                                        <el-option v-for="t in execTaskOptions" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-select-sm" size="small" v-model="execStatusFilter" @change="loadExecutionData" clearable placeholder="全部状态">
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
                                            <td><span :class="r.success ? 'status-current' : 'status-out'">{{ r.success ? '成功' : '失败' }}</span></td>
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
            icon: 'sparkles', level: 'new',
            text: `今日新入池 ${n} 只${names ? ' · ' + names : ''}`,
            action: () => { if (window.__quantGoPage) window.__quantGoPage('calendar', 'pool'); else { state.currentPage.value = 'calendar'; state.currentSubPage.value = 'pool'; } state.statusFilter.value = 'new'; },
          });
        }
        for (const s of health.value.filter(x => x.degraded)) {
          items.push({
            icon: 'alert-triangle', level: 'warn',
            text: `数据源 ${healthName(s.name)} degraded（连续失败）`,
            action: () => { if (window.__quantGoPage) window.__quantGoPage('system', ''); else { state.currentPage.value = 'system'; } },
          });
        }
        const t = merrill.value.timing;
        if (t && t.progress_percent && t.progress_percent > 100) {
          items.push({
            icon: 'clock', level: 'warn',
            text: `美林「${merrill.value.name}」已超期 ${t.progress_percent}%`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        } else if (t && t.maturity && merrill.value.name) {
          items.push({
            icon: 'clock', level: 'info',
            text: `美林「${merrill.value.name}」阶段成熟度 ${t.maturity}`,
            action: () => { state.currentSubPage.value = 'merrill'; },
          });
        }
        const mk = market.value;
        if (mk && mk.is_trading_day === false && mk.date) {
          items.push({
            icon: 'calendar', level: 'info',
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
      // V6.11 (需求轮2·批次3): 旧「时间轴内嵌紧凑弹窗」(.tl-click-pop) 的标记已随旧时间轴移除,
      // 其状态与定位逻辑成为死代码 (且导致点击阶段无任何反馈) —— 统一委派到阶段详情弹窗。
      function showTimelineStage(stageKey) {
        // showStageDetail 由 qcState 注入 (经 ...state 暴露给模板), 故此处从 state 取, 不能当本地绑定用
        const fn = state.showStageDetail;
        if (typeof fn === 'function') fn(stageKey);
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
      // V6.11 (需求轮2·批次3): 旧「历史周期时间轴」下线后的死代码已删除 ——
      //   tlCycleYears / tlTipYears / tlTipBrief / tlCurrentBrief / tlGanttStyle / timelineRows /
      //   tlChipStyle / tlPathFor / tlPaths / tlHoverKey / setTlHover / clearTlHover /
      //   collapsedCycles / isCycleCollapsed / toggleCycle / scrollToLatest / tlLegendStages /
      //   连线测量 buildTlPaths / scheduleTlRebuild 与 body 级 MutationObserver 观察器。
      //   旧 CSS (71 条规则约 11.9KB) 同步删除; .merrill-timeline-empty 仍在用故保留。

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
      // V6.7.1 (PRD F-6.7.9 / OBS-1): 明确「下次自动更新 HH:MM」时间点 (不依赖倒计时歧义)
      const execNextRunText = Vue.computed(function () {
        const p = (execPlan.value || []).find(function (x) { return x.enabled; });
        if (!p || p.countdown_seconds == null || p.countdown_seconds < 0) return '';
        try {
          return new Date(Date.now() + p.countdown_seconds * 1000)
            .toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit', hour12: false });
        } catch (e) { return ''; }
      });
      const execPhaseText = Vue.computed(function () {
        const st = execStatus.value;
        if (!st || st.phase === 'idle') return _execT('exec.waiting');
        if (st.phase === 'running') return _execT('exec.running') + (st.current_sid ? ' · ' + st.current_sid : '');
        return st.phase === 'done' ? _execT('exec.done') : _execT('exec.failed');
      });
      const execStatusIcon = Vue.computed(function () {
        return execStatus.value && execStatus.value.phase === 'running' ? 'loader' : 'check-circle-2';
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
        return last.day_view_total;
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

      // V5.16 (F2/F3/F4): 双栏模式默认选中第一条 (股票/指数)
      Vue.watch(function () {
        const sub = state.currentSubPage && state.currentSubPage.value;
        const rank = (state.filteredConsensusRank && state.filteredConsensusRank.value) || [];
        const mkt = (state.marketData && state.marketData.value) || {};
        return {
          sub: sub,
          split: !!state.detailSplitEnabled.value,
          top5: rank.slice(0, 5),
          rank: rank,
          indices: (mkt.indices || []).map(function (x) { return x; }),
        };
      }, function (v, old) {
        if (!v.split) return;  // 仅双栏模式
        if (v.sub === 'overview') {
          if (!v.top5.length) return;
          const cur = state.stockDetail && state.stockDetail.value && state.stockDetail.value.stock;
          const inList = v.top5.some(function (s) { return s.code === cur; });
          if (!cur || !inList) { if (state.showStockDetail) state.showStockDetail(v.top5[0].code); }
        } else if (v.sub === 'consensus') {
          if (!v.rank.length) return;
          const cur = state.stockDetail && state.stockDetail.value && state.stockDetail.value.stock;
          const inList = v.rank.some(function (s) { return s.code === cur; });
          if (!cur || !inList) { if (state.showStockDetail) state.showStockDetail(v.rank[0].code); }
        } else if (v.sub === 'market') {
          if (!v.indices.length) return;
          const cur = state.indexDetail && state.indexDetail.value && state.indexDetail.value.code;
          const inList = v.indices.some(function (x) { return x.code === cur; });
          if (!cur || !inList) { if (state.showIndexDetail) state.showIndexDetail(v.indices[0]); }
        }
      }, { immediate: true });

      // ===== V5.21: 周期演进板 (Living Cycle Board) =====
      // 设计要点: ①当前阶段=进行中 (进度/剩余/成熟度随时间为实时值) ②本轮带: 实色=已发生 /
      //          斜纹=预测, 当前段宽度随进度"生长" ③历史周期压缩 (可切阶段矩阵) ④评估轨迹:
      //          快照按阶段压缩成连续段, 阶段切换即出现第二段 => "大模型评估修订"可见
      const mcHistView = Vue.ref('band');
      const MC_STAGE_KEYS = ['recession', 'recovery', 'overheating', 'stagflation'];
      function _mcYm(s) {
        if (!s) return null;
        const p = String(s).split('-');
        const y = parseInt(p[0], 10), m = parseInt(p[1] || '1', 10);
        if (!isFinite(y)) return null;
        return y + (m - 1) / 12;
      }
      function _mcYmStr(v) {
        const y = Math.floor(v);
        let m = Math.round((v - y) * 12) + 1;
        if (m > 12) m = 12;
        if (m < 1) m = 1;
        return y + '-' + (m < 10 ? '0' + m : '' + m);
      }
      function _mcTiming() {
        return (state.merrillData && state.merrillData.value && state.merrillData.value.timing) || {};
      }
      function _mcColor() {
        return (state.merrillData && state.merrillData.value && state.merrillData.value.color) || 'var(--color-success)';
      }
      // 生成一条"首尾相接"的周期带 (V5.22 需求4):
      //   1) 各阶段按持续时间累计铺满整条轴 -- 不再按真实日期留数据间隙, 阶段之间严丝合缝;
      //   2) 每段携带真实起止月份(start/end)与时长(months), 可直接读出"哪个阶段在什么时候";
      //   3) 当前阶段 = 实色(已发生) + 斜纹(预测剩余) [+ 下一阶段预测], "今天"落在实色/斜纹分界。
      function _mcBand(stages, withNext) {
        const tm = _mcTiming();
        const avg = Number(tm.avg_duration_months) || 0;
        const prog = Math.min(100, Number(tm.progress_percent) || 0);
        const curStart = _mcYm(tm.current_stage_start_date);
        const parts = [];
        let firstStart = null;
        (stages || []).forEach(function (s) {
          const t0 = _mcYm(s.start);
          if (firstStart == null && t0 != null) firstStart = t0;
          const isCur = !!(s.is_current || (curStart != null && t0 === curStart && !s.duration_months));
          const nm = s.name || getTimelineStageName(s.stage);
          if (isCur && avg > 0) {
            const elapsed = avg * prog / 100;
            if (elapsed > 0.5) parts.push({ stage: s.stage, name: nm, months: elapsed, live: true, start: s.start });
            const remain = avg - elapsed;
            if (remain > 0.5) parts.push({ stage: s.stage, name: '剩余(预测)', months: remain, ghost: true, start: s.start });
          } else {
            let months = Number(s.duration_months) || 0;
            if (!months && t0 != null) {
              const e0 = _mcYm(s.end);
              if (e0 != null && e0 > t0) months = Math.max(1, Math.round((e0 - t0) * 12));
            }
            if (!months) months = 1;
            parts.push({ stage: s.stage, name: nm, months: months, live: isCur, start: s.start, end: s.end });
          }
          if (isCur && withNext && avg > 0) {
            const np = state.merrillData && state.merrillData.value && state.merrillData.value.next_stage_prediction;
            if (np) parts.push({ stage: np.next_stage, name: (np.next_stage_name || '下一阶段') + ' (预测)',
                                 months: avg, ghost: true, prob: np.transition_probability });
          }
        });
        if (!parts.length) return { segs: [], axisStart: '', axisEnd: '', nowPct: null };
        const total = parts.reduce(function (a, p) { return a + p.months; }, 0) || 1;
        const base = firstStart != null ? firstStart : 0;
        let acc = 0, doneMonths = 0;
        const segs = parts.map(function (p) {
          const leftM = acc;
          if (!p.ghost) doneMonths += p.months;
          acc += p.months;
          const seg = { stage: p.stage, name: p.name, months: Math.round(p.months), ghost: !!p.ghost, live: !!p.live,
                        prob: p.prob, left: leftM / total * 100, width: Math.max(2, p.months / total * 100) };
          // 时间信息统一为"年-月": 源数据里 end 与 duration_months 口径不一致,
          // 故只展示 真实起始月 + 时长(与带宽一致), 不展示推算区间。
          const ss = _mcYm(p.start), ee = _mcYm(p.end);
          seg.start = ss != null ? _mcYmStr(ss) : _mcYmStr(base + (leftM / 12));
          seg.end = ee != null ? _mcYmStr(ee) : '';
          seg.predicted = ss == null;
          return seg;
        });
        const last = parts[parts.length - 1];
        const hasGhost = parts.some(function (p) { return p.ghost; });
        const axisEnd = (last && last.end) ? last.end : _mcYmStr(base + total / 12);
        return { segs: segs, axisStart: _mcYmStr(base), axisEnd: axisEnd,
                 nowPct: hasGhost ? doneMonths / total * 100 : null };
      }
      function _mcIsCurrentCycle(c) {
        return (c.stages || []).some(function (s) { return s.is_current; });
      }
      const mcCurrentBand = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        if (!cycles.length) return { segs: [], axisStart: '', axisEnd: '', nowPct: null };
        let cur = null;
        for (let i = cycles.length - 1; i >= 0; i--) { if (_mcIsCurrentCycle(cycles[i])) { cur = cycles[i]; break; } }
        if (!cur) cur = cycles[cycles.length - 1];
        return _mcBand(cur.stages, true);
      });
      // V4.0.5-A: 轮次年份范围 (首阶段 start → 末阶段 end 取年)
      // V6.11: 仍被 mcHistoryBands 使用 (历史周期行左侧「轮次 + 年份」标签), 不属于死代码。
      function tlCycleYears(cycle) {
        const stages = cycle && cycle.stages ? cycle.stages : [];
        if (!stages.length) return '';
        const y1 = stages[0] && stages[0].start ? String(stages[0].start).slice(0, 4) : '';
        const last = stages[stages.length - 1] || {};
        const y2 = last.end ? String(last.end).slice(0, 4) : (last.start ? String(last.start).slice(0, 4) : '');
        return (y1 || y2) ? (y1 ? y1 + '–' + y2 : y2) : '';
      }

      const mcHistoryBands = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        return cycles.filter(function (c) { return !_mcIsCurrentCycle(c); }).map(function (c) {
          return { label: c.label, years: tlCycleYears(c), segs: _mcBand(c.stages, false).segs };
        });
      });
      const mcStageKeys = MC_STAGE_KEYS;
      const mcMatrix = Vue.computed(function () {
        const cycles = (state.merrillTimeline && state.merrillTimeline.value && state.merrillTimeline.value.cycles) || [];
        return cycles.map(function (c) {
          const sum = {};
          MC_STAGE_KEYS.forEach(function (k) { sum[k] = 0; });
          let cur = null;
          (c.stages || []).forEach(function (s) {
            if (sum[s.stage] != null) sum[s.stage] += (Number(s.duration_months) || 0);
            if (s.is_current) cur = s.stage;
          });
          return { label: c.label, sum: sum, cur: cur };
        });
      });
      const mcMaxMonths = Vue.computed(function () {
        let m = 0;
        mcMatrix.value.forEach(function (r) { MC_STAGE_KEYS.forEach(function (k) { if (r.sum[k] > m) m = r.sum[k]; }); });
        return m || 1;
      });
      const mcTrailRuns = Vue.computed(function () {
        const items = (state.merrillSnapshots && state.merrillSnapshots.value) || [];
        const runs = [];
        items.forEach(function (it) {
          const last = runs[runs.length - 1];
          if (last && last.stage === it.stage) { last.count++; last.last = it.timestamp; }
          else runs.push({ stage: it.stage, name: it.stage_name || getTimelineStageName(it.stage), count: 1, first: it.timestamp, last: it.timestamp });
        });
        return runs;
      });
      const mcProgScale = Vue.computed(function () {
        return Math.max(100, Math.min(200, Number(_mcTiming().progress_percent) || 0));
      });
      const mcProgStyle = Vue.computed(function () {
        const p = Number(_mcTiming().progress_percent) || 0;
        return {
          width: Math.max(0, Math.min(100, p / mcProgScale.value * 100)) + '%',
          // V6.12 (需求轮3·item3): 阶段色细条同步走柔和条填充档
          background: p > 100
            ? 'linear-gradient(90deg, color-mix(in srgb, ' + _mcColor() + ' var(--bar-mix), var(--surface-card)), var(--bar-fill-warn))'
            : 'color-mix(in srgb, ' + _mcColor() + ' var(--bar-mix), var(--surface-card))'
        };
      });
      const mcAvgMark = Vue.computed(function () { return 100 / mcProgScale.value * 100; });
      const mcEndRange = Vue.computed(function () {
        const pe = _mcTiming().predicted_end;
        if (!pe) return '';
        if (typeof pe === 'string') return pe;
        const lo = pe.optimistic || pe.earliest || '';
        const hi = pe.pessimistic || pe.latest || '';
        if (lo && hi) return lo + ' ~ ' + hi;
        return pe.base || pe.mid || lo || hi || '';
      });
      // V6.10 (配色专项·C·f2): 阶段色来自后端配置 (不随主题), 文字色必须按底色亮度自适应,
      //   原固定 chip 文字色只对浅色底有效; 且 `c + '44'` 拼 alpha 仅对 6 位 hex 颜色成立。
      function _chipFg(c) {
        const m = /^#([0-9a-f]{6})$/i.exec(String(c || '').trim());
        if (!m) return 'var(--merrill-chip-text)';
        const n = parseInt(m[1], 16);
        const lin = (v) => { v /= 255; return v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
        const L = 0.2126 * lin((n >> 16) & 255) + 0.7152 * lin((n >> 8) & 255) + 0.0722 * lin(n & 255);
        return L > 0.42 ? 'var(--merrill-chip-text)' : 'var(--merrill-chip-text-invert)';
      }
      // V6.11 (需求轮2·批次3 / 用户需求2): 阶段带改「主题原生底 + 阶段色标识」——
      //   原实现直接把后端下发的 Material 浅色当底色, 与主题/明暗无关:
      //   亮色下对白卡片仅 1.73–2.23:1 (发糊), 暗色下对深卡片 7.5–9.7:1 (刺眼)。
      //   现改为阶段色 22% 与卡片表面混合 (自动随 6 色相 + 明暗联动), 左侧 3px 阶段色条保留阶段身份,
      //   文字统一用正文色 (实测对合成底色 >= 13:1)。
      var MC_SEG_MIX = 22;
      function _segFill(c) { return 'color-mix(in srgb, ' + c + ' ' + MC_SEG_MIX + '%, var(--surface-card))'; }
      function mcSegStyle(g) {
        const c = getTimelineStageColor(g.stage) || 'var(--color-primary)';
        if (g.ghost) {
          // 预测段: 低透明度斜纹 + 正文色文字
          return { left: g.left + '%', width: g.width + '%', color: 'var(--text-primary)',
                   borderLeft: '3px solid ' + c,
                   background: 'repeating-linear-gradient(45deg, ' + _segFill(c) + ' 0, '
                     + _segFill(c) + ' 5px, var(--surface-card) 5px, var(--surface-card) 10px)' };
        }
        return { left: g.left + '%', width: g.width + '%', background: _segFill(c), color: 'var(--text-primary)',
                 borderLeft: '3px solid ' + c };
      }
      function mcSegTitle(g) {
        const parts = [g.name];
        if (g.start) parts.push((g.predicted ? '预计起始 ' : '起始 ') + g.start + (g.end ? ' → ' + g.end : ''));
        if (g.months) parts.push('约 ' + g.months + ' 个月');
        if (g.ghost) parts.push('预测(尚未发生)');
        if (g.prob != null) parts.push('转移概率 ' + (g.prob * 100).toFixed(0) + '%');
        return parts.join(' · ');
      }
      function mcMxCellStyle(k, v) {
        const c = getTimelineStageColor(k) || 'var(--color-primary)';
        const p = Math.max(0.28, v / mcMaxMonths.value);
        // V6.11: 阶段矩阵同步走主题原生底 (原 opacity 叠色在暗色下与卡片底混浊、亮色下过淡)
        const mix = Math.round(14 + 30 * p);
        return { background: 'color-mix(in srgb, ' + c + ' ' + mix + '%, var(--surface-card))',
                 color: 'var(--text-primary)' };
      }

      // V6.12 (需求轮3·item1): 当前阶段徽标 — 浅色阶段底 + 压深文字 + 中等字重
      //  原实现直接用后端阶段实色 (Material 饱和色) 作底, 在细长徽标上色彩过浓 (用户反馈
      //  「衰退期色彩太浓、粗体取消」)。改用与美林阶段卡 active 态同源的公式:
      //  底 = 阶段色 14% 混卡片底; 字 = 阶段色 48% 混前景色 (随明暗主题自适应)。
      const merrillChipStyle = Vue.computed(function () {
        const md = (state.merrillData && state.merrillData.value) || state.merrillData || {};
        const c = md.color || getTimelineStageColor(md.stage) || 'var(--color-primary)';
        return {
          background: 'color-mix(in srgb, ' + c + ' 14%, var(--surface-card))',
          color: 'color-mix(in srgb, ' + c + ' 48%, var(--text-primary))',
          borderColor: 'color-mix(in srgb, ' + c + ' 26%, transparent)',
        };
      });

      return { ...state, todayText, tradingStatus, merrillNext, todayFocus, todaySignals, merrillConfigOpen,
        getTimelineStageColor, getTimelineStageName, getTimelineStageDesc, merrillChipStyle,
        // V5.21: 周期演进板
        mcHistView, mcCurrentBand, mcHistoryBands, mcStageKeys, mcMatrix, mcTrailRuns,
        mcProgStyle, mcAvgMark, mcEndRange, mcSegStyle, mcSegTitle, mcMxCellStyle,
        merrillTimeline, timelineLoading, showTimelineStage,
        execHistory, execSummary, execLoading, execError,
        execDays, execTaskFilter, execStatusFilter, execTaskOptions, execSuccessClass,
        loadExecutionData,
        execRateClass,
        execPlan, execStatus, execResults, execTraceDate, execTraceSteps, execTraceLoading,
        execResultsDates, execCountdownText, execNextRunText, execPhaseText, execStatusIcon,
        execLastDate, execVisibleClass, execVisibleText,
        loadExecutionTrace, };
    },
  };
})();
