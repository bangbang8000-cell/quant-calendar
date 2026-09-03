// quant-calendar: ShorttermPage 组件 (V5.2.0 T-5.2.09)
// 短线复盘页: 涨停复盘(三池+连板梯队) / 龙虎榜 两子页
// 数据诚实性: 接口失败字段为 null → 显示"—"而非 0; 空池是合法结果(空表格)
(function () {
  const { inject, ref, onMounted, computed, nextTick } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ShorttermPage = {
    name: 'qc-shortterm-page',
    template: `
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="card">
                        <div class="page-header">
                            <div class="page-title">复盘看板</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="overviewLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="overviewError" type="error" :title="overviewErrTitle" :desc="overviewErrDesc" @retry="loadOverview"></qc-state-panel>
                        <template v-else-if="overview">
                            <!-- V5.2.4 (T-5.2.46): 数据新鲜度状态条 -->
                            <div class="flex-c-gap-12 mb-4">
                                <span class="text-xs-tertiary">数据日期: {{ overview.date }}</span>
                                <span class="tag-chip" :class="sessionStatusClass">{{ sessionStatusText }}</span>
                            </div>
                            <div class="mb-4">
                                <div class="flex-c-gap-12 mb-2">
                                    <div class="text-base-secondary">AI 盘面研判</div>
                                    <el-button size="small" type="primary" :loading="reviewRunning" @click="runReview">{{ review && review.available ? '重新生成' : '生成' }}</el-button>
                                </div>
                                <qc-state-panel v-if="reviewRunning" type="loading"></qc-state-panel>
                                <div v-else-if="review && review.available" class="card">
                                    <div class="stat-value stat-value-lg">{{ review.emotion_level ? '情绪档位: ' + review.emotion_level : '情绪档位: —' }}</div>
                                    <div class="mt-4">{{ review.summary || '—' }}</div>
                                    <div v-if="review.active_directions && review.active_directions.length" class="mt-4">
                                        <div class="text-base-secondary mb-2">活跃方向 <span class="text-xs-tertiary">(点击跳板块资金)</span></div>
                                        <span v-for="d in review.active_directions" :key="d" class="tag-chip mr-4 stock-link" @click="gotoSector(d)">{{ d }}</span>
                                    </div>
                                    <div v-if="review.risks && review.risks.length" class="mt-4 text-xs-tertiary">风险: {{ review.risks.join('；') }}</div>
                                </div>
                                <div v-else-if="review" class="text-xs-tertiary">{{ review.reason || '暂无复盘, 点击生成' }}</div>
                                <div v-if="review && review.available" class="mt-4 flex-c-gap-12">
                                    <el-input v-model="chatQuestion" size="small" placeholder="追问复盘... (Enter 发送)" @keyup.enter="sendChat"></el-input>
                                    <el-button size="small" :loading="chatLoading" @click="sendChat">发送</el-button>
                                </div>
                                <div v-if="chatAnswer" class="mt-4 text-xs-tertiary">{{ chatAnswer }}</div>
                            </div>

                            <!-- V5.2.6 (T-5.2.50): 指标降级时显示 reason, 不静默 — -->
                            <div v-if="emotionNotice" class="text-xs-tertiary mb-4">⚠️ {{ emotionNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应均值</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.avg) }}</div>
                                    <div class="stat-sub">{{ moneySource }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">赚钱效应中位数</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.money_effect && overview.emotion.money_effect.median) }}</div>
                                    <div class="stat-sub">翻红率 {{ pct(overview.emotion.money_effect && overview.emotion.money_effect.positive_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">晋级率 1进2</div>
                                    <div class="stat-value">{{ pct(promotion1to2) }}</div>
                                    <div class="stat-sub">整体 {{ pct(overview.emotion.promotion && overview.emotion.promotion.overall && overview.emotion.promotion.overall.rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">连板溢价</div>
                                    <div class="stat-value">{{ fmtPct(overview.emotion.consec_premium && overview.emotion.consec_premium.avg) }}</div>
                                    <div class="stat-sub">昨日2板+承接</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">情绪周期</div>
                                    <div class="stat-value">{{ cycleScore }}</div>
                                    <div class="stat-sub">{{ cycleTrend }}</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">市场事实</div>
                            <div v-if="factsNotice" class="text-xs-tertiary mb-4">⚠️ {{ factsNotice }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card">
                                    <div class="stat-label">封板质量</div>
                                    <div class="stat-value">{{ pct(overview.facts.seal_quality && overview.facts.seal_quality.broken_rate) }}</div>
                                    <div class="stat-sub">炸板率 · 早盘封板 {{ pct(overview.facts.seal_quality && overview.facts.seal_quality.early_seal_rate) }}</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">亏钱效应</div>
                                    <div class="stat-value">{{ overview.facts.loss_effect && overview.facts.loss_effect.down_limit_count != null ? overview.facts.loss_effect.down_limit_count : '—' }}</div>
                                    <div class="stat-sub">跌停家数</div>
                                </div>
                                <div class="stat-card">
                                    <div class="stat-label">反馈矩阵</div>
                                    <div class="stat-value">{{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.relimit) }}</div>
                                    <div class="stat-sub">再涨停 {{ pct(overview.facts.feedback_matrix && overview.facts.feedback_matrix.red) }} 翻红</div>
                                </div>
                            </div>

                            <div class="text-base-secondary mb-2">明日验证条件 (成立 {{ overview.summary.hit }}/{{ overview.summary.total }})</div>
                            <div class="table-container mb-4">
                                <el-table :data="overview.conditions" size="small">
                                    <el-table-column prop="label" label="指标" width="130"></el-table-column>
                                    <el-table-column label="当前" width="90" align="right"><template #default="s">{{ fmtCond(s.row.current, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="阈值" width="90" align="right"><template #default="s">{{ fmtCond(s.row.threshold, s.row.unit) }}</template></el-table-column>
                                    <el-table-column label="核验" width="90"><template #default="s"><span :class="verdictClass(s.row.verdict)">{{ s.row.verdict }}</span></template></el-table-column>
                                    <el-table-column label="说明" min-width="170"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mb-2">近5日热度与龙头</div>
                            <div v-if="overview.weekly && overview.weekly.available">
                                <div class="flex-wrap mb-4">
                                    <span v-for="t in overview.weekly.top" :key="t.industry" class="tag-chip mr-4 mb-4">{{ t.industry }} {{ t.count }}</span>
                                </div>
                                <div class="text-xs-tertiary">{{ overview.weekly.note }}</div>
                            </div>
                            <div v-else class="text-xs-tertiary mb-4">{{ overview.weekly && overview.weekly.reason ? overview.weekly.reason : '近5日热度不可用' }}</div>
                        </template>
                    </div>

                    <!-- 涨停复盘 -->
                    <div v-if="currentSubPage === 'ztpool'" class="card">
                        <div class="page-header">
                            <div class="page-title">涨停复盘</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false">⚠️ 未收盘, 数据可能不完整</span>
                            </div>
                        </div>
                        <qc-state-panel v-if="poolLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="poolError" type="error" :title="poolErrTitle" :desc="poolErrDesc" @retry="loadPools"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold">🏔</div><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-icon info">🪜</div><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-icon success">🚀</div><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon warning">💥</div><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon danger">📉</div><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>
                            <div v-if="pools.ladder && Object.keys(pools.ladder.tiers || {}).length" id="shorttermLadderChart" class="mb-4" style="height:170px;width:100%"></div>

                            <div class="flex-c-gap-12 mb-2">
                                <div class="text-base-secondary">涨停池 ({{ (pools.zt || []).length }} 家)</div>
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span style="cursor:pointer" @click="clearBoardFilter">✕</span></span>
                            </div>
                            <div class="table-container">
                                <el-table :data="filteredZt" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="boards" label="连板" width="55" align="center"></el-table-column>
                                    <el-table-column label="涨停原因" min-width="180"><template #default="s">{{ s.row.reason || '—' }}</template></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column label="封单" width="90" align="right"><template #default="s">{{ fmtAmount(s.row.seal_amount) }}</template></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                    <el-table-column prop="board" label="板别" width="85"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">炸板池 ({{ pools.zb ? pools.zb.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zb || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">跌停池 ({{ pools.dt ? pools.dt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.dt || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="consec_dt" label="连续跌停" width="80" align="center"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>
                        </div>
                    </div>

                    <!-- 龙虎榜 -->
                    <div v-if="currentSubPage === 'lhb'" class="card">
                        <div class="page-header">
                            <div class="page-title">龙虎榜</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadLhb"></el-date-picker>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold">📊</div><div class="stat-label">上榜家数</div><div class="stat-value">{{ lhbRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success">🏦</div><div class="stat-label">机构净买合计</div><div class="stat-value" style="font-size:1.15em">{{ fmtAmount(lhbInstitutionNetBuy) }}</div></div>
                                <div class="stat-card"><div class="stat-icon warning">🔥</div><div class="stat-label">游资上榜</div><div class="stat-value">{{ lhbHotMoneyCount }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="lhbPageRows" size="small" max-height="560">
                                    <el-table-column label="名称" width="90" fixed><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="85" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="净买额" width="105" align="right" sortable sort-by="net_buy"><template #default="s"><span :class="riseFall(s.row.net_buy)">{{ fmtAmount(s.row.net_buy) }}</span></template></el-table-column>
                                    <el-table-column label="买入额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.buy_amount) }}</template></el-table-column>
                                    <el-table-column label="卖出额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.sell_amount) }}</template></el-table-column>
                                    <el-table-column label="资金性质" width="130"><template #default="s"><span v-for="(g, i) in (s.row.tags || [])" :key="i" class="tag-chip mr-4" :class="tagClass(g)">{{ g }}</span><span v-if="!(s.row.tags && s.row.tags.length)" class="text-xs-tertiary">—</span></template></el-table-column>
                                    <el-table-column prop="reason" label="上榜原因" min-width="200" show-overflow-tooltip></el-table-column>
                                </el-table>
                                <el-pagination v-if="lhbRows && lhbRows.length > 200" small layout="prev, pager, next, total" :total="lhbRows.length" :page-size="PAGE_SIZE" v-model:current-page="lhbPage" class="mt-4"></el-pagination>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="该交易日暂无龙虎榜数据"></qc-state-panel>
                    </div>

                    <!-- 板块资金 (V5.2.1: 行业/概念资金流, 今日/5日/10日窗口) -->
                    <div v-if="currentSubPage === 'sector'" class="card">
                        <div class="page-header">
                            <div class="page-title">板块资金</div>
                            <div class="flex-c-gap-12">
                                <el-select v-model="sectorType" size="small" style="width:120px" @change="loadSectorFlow">
                                    <el-option label="行业资金流" value="行业资金流"></el-option>
                                    <el-option label="概念资金流" value="概念资金流"></el-option>
                                </el-select>
                                <el-select v-model="sectorIndicator" size="small" style="width:90px" @change="loadSectorFlow">
                                    <el-option label="今日" value="今日"></el-option>
                                    <el-option label="5日" value="5日"></el-option>
                                    <el-option label="10日" value="10日"></el-option>
                                </el-select>
                                <el-input v-model="sectorKeyword" size="small" placeholder="搜索板块..." clearable style="width:130px"></el-input>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info">🥇</div><div class="stat-label">净流入榜首</div><div class="stat-value stat-value-lg">{{ sectorTopName }}</div></div>
                                <div class="stat-card"><div class="stat-icon info">🗂</div><div class="stat-label">板块数</div><div class="stat-value">{{ sectorRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success">💰</div><div class="stat-label">Top 净流入</div><div class="stat-value stat-value-lg">{{ fmtAmount(sectorTopInflow) }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="sectorPageRows" size="small" max-height="560">
                                    <el-table-column prop="name" label="板块" min-width="120" fixed></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="95" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="主力净流入" width="130" align="right" sortable sort-by="main_net_inflow"><template #default="s"><span :class="riseFall(s.row.main_net_inflow)">{{ fmtAmount(s.row.main_net_inflow) }}</span></template></el-table-column>
                                    <el-table-column label="主力净占比" width="105" align="right"><template #default="s">{{ fmtPct(s.row.main_net_inflow_ratio) }}</template></el-table-column>
                                </el-table>
                                <el-pagination v-if="filteredSectorRows.length > 200" small layout="prev, pager, next, total" :total="filteredSectorRows.length" :page-size="PAGE_SIZE" v-model:current-page="sectorPage" class="mt-4"></el-pagination>
                            </div>
                            <div class="text-xs-tertiary mt-4">数据源: {{ sectorSource }} · 实时值口径: 盘中为实时快照, 历史场次仅最近一次抓取值</div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="板块资金流暂不可用"></qc-state-panel>
                    </div>

                    <!-- 盘中核验 (V5.2.2: 6 时点快照) -->
                    <div v-if="currentSubPage === 'intraday'" class="card">
                        <div class="page-header">
                            <div class="page-title">盘中核验</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
                                <el-button size="small" type="primary" :loading="intradayCollecting" @click="collectSnapshot">采集当前快照</el-button>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">快照仅在交易时段 6 个时点前后 8 分钟可采集 · 历史日绝不现抓</div>
                        <div class="intraday-timeline mb-4">
                            <div v-for="t in intradaySlots" :key="t" class="intraday-slot" :class="slotClass(t)">
                                <span class="intraday-dot"></span>{{ t }}
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">{{ intradayStatus }}</div>
                        <div v-if="intradayMsg" class="mb-4 text-xs-tertiary">{{ intradayMsg }}</div>
                        <qc-state-panel v-if="intradayLoading" type="loading"></qc-state-panel>
                        <div v-else-if="intradaySnapshots && intradaySnapshots.length">
                            <div class="table-container">
                                <el-table :data="intradaySnapshots" size="small">
                                    <el-table-column prop="slot" label="时点" width="90"></el-table-column>
                                    <el-table-column prop="zt_count" label="涨停" width="80" align="right"></el-table-column>
                                    <el-table-column prop="zb_count" label="炸板" width="80" align="right"></el-table-column>
                                    <el-table-column prop="dt_count" label="跌停" width="80" align="right"></el-table-column>
                                    <el-table-column label="炸板率" width="90" align="right"><template #default="s">{{ fmtPct(s.row.broken_rate) }}</template></el-table-column>
                                    <el-table-column label="口径" min-width="140"><template #default="s">{{ s.row.note }}</template></el-table-column>
                                </el-table>
                            </div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无快照" desc="点击右上角「采集当前快照」(仅交易时段 6 时点前后 8 分钟可用)"></qc-state-panel>
                    </div>
                </div>`,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      const currentPage = state.currentPage;
      const currentSubPage = state.currentSubPage;

      // V5.2.4 (T-5.2.41): 7 子页共享同一「交易日」(原 poolDate/lhbDate/overviewDate/intradayDate 合并)
      const shortDate = ref('');
      const pools = ref(null);
      const poolLoading = ref(false);
      const poolError = ref(false);
      const poolErrTitle = ref('数据加载失败');
      const poolErrDesc = ref('请检查服务后重试');
      const ztBoardFilter = ref(null);   // V5.2.4 (T-5.2.45): 梯队图点击选中的连板档
      const lhbRows = ref(null);
      const lhbLoading = ref(false);
      const lhbError = ref(false);
      const lhbErrTitle = ref('数据加载失败');
      const lhbErrDesc = ref('请检查服务后重试');
      // V5.2.4 (T-5.2.54): 长表分页(>200 行启用, 每页 50)
      const lhbPage = ref(1);
      const PAGE_SIZE = 50;
      const lhbPageRows = computed(function () {
        const rows = lhbRows.value || [];
        if (rows.length <= 200) return rows;
        const start = (lhbPage.value - 1) * PAGE_SIZE;
        return rows.slice(start, start + PAGE_SIZE);
      });
      const overview = ref(null);
      const overviewLoading = ref(false);
      const overviewError = ref(false);
      const overviewErrTitle = ref('数据加载失败');
      const overviewErrDesc = ref('请检查服务后重试');
      const sectorType = ref('行业资金流');
      const sectorIndicator = ref('今日');
      const sectorKeyword = ref('');   // V5.2.4 (T-5.2.43): 板块资金搜索/联动预选
      const sectorRows = ref(null);
      const sectorPage = ref(1);       // V5.2.4 (T-5.2.54): 长表分页
      const sectorLoading = ref(false);
      const sectorError = ref(false);
      const sectorErrTitle = ref('数据加载失败');
      const sectorErrDesc = ref('请检查服务后重试');
      const sectorFlowSource = ref('');
      const review = ref(null);
      const reviewRunning = ref(false);
      const intradaySnapshots = ref(null);
      const intradayLoading = ref(false);
      const intradayCollecting = ref(false);
      const chatQuestion = ref('');
      const chatAnswer = ref('');
      const chatLoading = ref(false);

      function authHeaders() {
        const t = localStorage.getItem('quant_token') || '';
        return t ? { 'Authorization': 'Bearer ' + t, 'Content-Type': 'application/json' }
                 : { 'Content-Type': 'application/json' };
      }

      // ─── V5.2.3 高效加载: 客户端 TTL 缓存 + 竞态防护 ───
      const _cache = {};
      const CACHE_TTL = 60 * 1000;   // 60s 内同 URL 不重拉(切子页/回退秒开)
      let _reqSeq = 0;               // 请求序号: 旧响应丢弃, 防快速切换覆盖新数据
      // V5.2.5 (T-5.2.57): overview/review 并行加载共享 _reqSeq 会互相覆盖导致看板永远 loading → 独立序号
      let _overviewSeq = 0;
      let _reviewSeq = 0;

      function cachedGet(url, force) {
        const now = Date.now();
        const hit = _cache[url];
        if (!force && hit && now - hit.ts < CACHE_TTL) return Promise.resolve(hit.data);
        return fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); })
          .then(function (data) { _cache[url] = { ts: Date.now(), data: data }; return data; });
      }

      async function loadPools(force) {
        const seq = ++_reqSeq;
        poolLoading.value = true;
        poolError.value = false;
        try {
          const url = '/api/shortterm/pools' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;   // 竞态: 已切换到新请求, 丢弃
          if (res && res.success) {
            pools.value = res;
            nextTick(renderLadderChart);
          } else if (res && res.detail) {
            // V5.2.0-fix: 未登录/token 过期(401) 时后端返回 {detail}, 提示登录而非笼统"加载失败"
            poolError.value = true;
            poolErrTitle.value = String(res.detail);
            poolErrDesc.value = '请先登录后再查看';
          } else {
            poolError.value = true;
            poolErrTitle.value = '数据加载失败';
            poolErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          poolError.value = true;
          poolErrTitle.value = '数据加载失败';
          poolErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) poolLoading.value = false;
        }
      }

      async function loadLhb(force) {
        const seq = ++_reqSeq;
        lhbLoading.value = true;
        lhbError.value = false;
        try {
          const url = '/api/shortterm/lhb' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success) {
            lhbRows.value = Array.isArray(res.rows) ? res.rows : null;
            lhbPage.value = 1;
          } else if (res && res.detail) {
            // V5.2.0-fix: 401 提示登录
            lhbError.value = true;
            lhbErrTitle.value = String(res.detail);
            lhbErrDesc.value = '请先登录后再查看';
          } else {
            lhbError.value = true;
            lhbErrTitle.value = '数据加载失败';
            lhbErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          lhbError.value = true;
          lhbErrTitle.value = '数据加载失败';
          lhbErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) lhbLoading.value = false;
        }
      }

      const ladderText = computed(function () {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return '—';
        return Object.keys(tiers).sort(function (a, b) { return a - b; })
          .map(function (b) { return b + '板:' + tiers[b]; }).join(' ');
      });
      // V5.2.4 (T-5.2.45): 涨停池按梯队选中档过滤(点击梯队图切换)
      const filteredZt = computed(function () {
        const rows = (pools.value && pools.value.zt) || [];
        if (!ztBoardFilter.value) return rows;
        return rows.filter(function (r) { return r.boards === ztBoardFilter.value; });
      });
      function clearBoardFilter() { ztBoardFilter.value = null; }

      // V5.2.1 复盘看板: 派生展示值(硬指标, 数据诚实性: 缺失显示—)
      const moneySource = computed(function () {
        const m = overview.value && overview.value.emotion && overview.value.emotion.money_effect;
        if (!m || !m.available) return '—';
        if (m.source === 'settled') return '定稿记录';
        if (m.source === 'realtime') return m.partial ? '实时(样本不全)' : '实时';
        return '—';
      });
      const promotion1to2 = computed(function () {
        const t = overview.value && overview.value.emotion && overview.value.emotion.promotion
          && overview.value.emotion.promotion.tiers && overview.value.emotion.promotion.tiers['1进2'];
        return t ? t.rate : null;
      });
      const cycleScore = computed(function () {
        const s = overview.value && overview.value.emotion && overview.value.emotion.sentiment_cycle;
        return s && s.available && s.current_score != null ? s.current_score.toFixed(2) : '—';
      });
      const cycleTrend = computed(function () {
        const s = overview.value && overview.value.emotion && overview.value.emotion.sentiment_cycle;
        if (!s || !s.available) return '—';
        return (s.trend || '—') + (s.day_n != null ? ' · 距低谷' + s.day_n + '天' : '');
      });
      // V5.2.6 (T-5.2.50): 情绪/事实指标降级信封 reason 汇总(诚实性: 失败原因可见)
      const emotionNotice = computed(function () {
        const e = overview.value && overview.value.emotion;
        if (!e) return '';
        const reasons = [];
        for (const k of ['money_effect', 'promotion', 'consec_premium', 'sentiment_cycle']) {
          const v = e[k];
          if (v && v.available === false && v.reason) reasons.push(String(v.reason).replace(/^[[^]]*]s*/, ''));
        }
        return reasons.join('；');
      });
      const factsNotice = computed(function () {
        const f = overview.value && overview.value.facts;
        if (!f) return '';
        const reasons = [];
        for (const k of ['seal_quality', 'loss_effect', 'feedback_matrix', 'theme_structure']) {
          const v = f[k];
          if (v && v.available === false && v.reason) reasons.push(String(v.reason).replace(/^[[^]]*]s*/, ''));
        }
        return reasons.join('；');
      });
      function pct(v) {
        if (v == null || isNaN(v)) return '—';
        return (v * 100).toFixed(0) + '%';
      }
      function fmtCond(v, unit) {
        if (v == null) return '—';
        const n = typeof v === 'number' ? (Math.round(v * 100) / 100) : v;
        return n + (unit || '');
      }
      function verdictClass(v) {
        if (v === '成立') return 'tag-chip mr-4';
        if (v === '证伪') return 'tag-chip mr-4';
        return 'tag-chip mr-4';
      }

      // ─── V5.2.2 UI 增强: 红涨绿跌 / 摘要 / 时间轴 ───
      function riseFall(v) {
        if (v == null) return '';
        return v > 0 ? 'is-rise' : (v < 0 ? 'is-fall' : '');
      }
      function tagClass(g) {
        if (g === '机构') return 'is-institution';
        if (g === '游资') return 'is-hotmoney';
        if (g === '主力') return 'is-main';
        return '';
      }
      const sessionStatusText = computed(function () {
        const st = overview.value && overview.value.session_status;
        if (!st) return '—';
        const d = overview.value.date;
        if (d === st.latest_session && st.settled) return '✅ 已收盘';
        if (d === st.today && st.is_trade_day && !st.settled) return '⏳ 盘中 · 未收盘';
        return '📅 历史交易日';
      });
      const sessionStatusClass = computed(function () {
        const st = overview.value && overview.value.session_status;
        if (!st) return '';
        const d = overview.value.date;
        if (d === st.latest_session && st.settled) return 'is-institution';
        if (d === st.today && st.is_trade_day && !st.settled) return 'is-main';
        return '';
      });

      function openStock(row) {
        // V5.2.3: 个股点击 → 打开全局详情弹窗(K线/AI评估/问股)
        if (row && row.ts_code && state && state.showStockDetail) {
          state.showStockDetail(row.ts_code);
        }
      }
      const lhbInstitutionNetBuy = computed(function () {
        return (lhbRows.value || []).filter(function (r) { return (r.tags || []).indexOf('机构') >= 0; })
          .reduce(function (s, r) { return s + (r.net_buy || 0); }, 0);
      });
      const lhbHotMoneyCount = computed(function () {
        return (lhbRows.value || []).filter(function (r) { return (r.tags || []).indexOf('游资') >= 0; }).length;
      });
      const sectorTop = computed(function () {
        const rows = (sectorRows.value || []).filter(function (r) { return r.main_net_inflow != null; });
        if (!rows.length) return null;
        return rows.reduce(function (a, b) { return (a.main_net_inflow >= b.main_net_inflow) ? a : b; });
      });
      const sectorTopName = computed(function () {
        const t = sectorTop.value;
        return t ? t.name : '—';
      });
      const sectorTopInflow = computed(function () {
        const t = sectorTop.value;
        return t ? t.main_net_inflow : null;
      });
      const sectorSource = computed(function () {
        return sectorFlowSource.value || '东财';
      });
      // V5.2.4 (T-5.2.43): 板块资金按关键词过滤(联动预选)
      const filteredSectorRows = computed(function () {
        const kw = (sectorKeyword.value || '').trim();
        const rows = sectorRows.value || [];
        if (!kw) return rows;
        return rows.filter(function (r) { return r.name && String(r.name).indexOf(kw) >= 0; });
      });
      function gotoSector(kw) {
        sectorKeyword.value = kw || '';
        if (state && state.currentSubPage) state.currentSubPage.value = 'sector';
      }
      const sectorPageRows = computed(function () {
        const rows = filteredSectorRows.value;
        if (rows.length <= 200) return rows;
        const start = (sectorPage.value - 1) * PAGE_SIZE;
        return rows.slice(start, start + PAGE_SIZE);
      });
      const intradaySlots = ['09:25', '09:35', '10:00', '11:30', '14:00', '15:00'];
      const intradayCollected = computed(function () {
        const set = {};
        (intradaySnapshots.value || []).forEach(function (s) { set[s.slot] = true; });
        return set;
      });
      function slotClass(t) {
        if (intradayCollected.value[t]) return 'is-done';
        if (t === intradayNowSlot.value) return 'is-current';
        return 'is-empty';
      }
      const intradayNowSlot = computed(function () {
        const now = new Date();
        const hh = (now.getHours() < 10 ? '0' : '') + now.getHours();
        const mm = (now.getMinutes() < 10 ? '0' : '') + now.getMinutes();
        const cur = hh + ':' + mm;
        for (var i = 0; i < intradaySlots.length; i++) {
          if (cur === intradaySlots[i]) return intradaySlots[i];
        }
        // 过点 8 分钟窗口
        for (var j = 0; j < intradaySlots.length - 1; j++) {
          var t = intradaySlots[j];
          var base = new Date();
          base.setHours(Number(t.split(':')[0]), Number(t.split(':')[1]), 0, 0);
          var end = new Date(base.getTime() + 8 * 60000);
          if (now >= base && now <= end) return t;
        }
        return '';
      });
      const intradayStatus = computed(function () {
        const now = new Date();
        const cur = intradayNowSlot.value;
        if (cur) return '当前处于快照窗口 ' + cur + ' (前后 8 分钟) — 可采集';
        // 下一时点
        const hh = now.getHours(), mm = now.getMinutes();
        let next = '';
        for (let i = 0; i < intradaySlots.length; i++) {
          const parts = intradaySlots[i].split(':');
          if (Number(parts[0]) > hh || (Number(parts[0]) === hh && Number(parts[1]) > mm)) {
            next = intradaySlots[i];
            break;
          }
        }
        return next ? ('下一快照时点 ' + next + ' — 非窗口期不可采集') : '今日快照时点已全部结束';
      });
      const intradayMsg = ref('');
      const intradayMsgType = ref('info');

      // V5.2.0 (FR-5.2.0.7): 连板梯队条形图(复用 charts.js 通用简单图模式, 主题切换重绘)
      function renderLadderChart() {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return;
        const charts = window.__quantModules && window.__quantModules.charts;
        if (!charts || !charts.renderSimpleChartTo) return;
        const sel = ztBoardFilter.value;
        const chart = charts.renderSimpleChartTo('shorttermLadderChart', function () {
          const boards = Object.keys(tiers).sort(function (a, b) { return Number(a) - Number(b); });
          return {
            grid: { left: 8, right: 16, top: 20, bottom: 4, containLabel: true },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: boards.map(function (b) { return b + '板'; }) },
            yAxis: { type: 'value', minInterval: 1 },
            // V5.2.4 (T-5.2.45): 选中档高亮
            series: [{ type: 'bar', barWidth: '45%',
                       label: { show: true, position: 'top' },
                       itemStyle: { color: function (p) {
                           return sel && Number(boards[p.dataIndex]) === sel
                             ? 'var(--color-accent)' : 'var(--chart-split)';
                       } },
                       data: boards.map(function (b) { return tiers[b]; }) }],
          };
        }, { key: 'shortterm-ladder' });
        // 点击梯队档 → 三池表格过滤(再点取消)
        if (chart && chart.off) {
          chart.off('click');
          chart.on('click', function (params) {
            if (!params || !params.name) return;
            const b = parseInt(params.name, 10);
            if (isNaN(b)) return;
            ztBoardFilter.value = (ztBoardFilter.value === b) ? null : b;
          });
        }
      }
      if (window.__quantModules && window.__quantModules.echartsTheme
          && window.__quantModules.echartsTheme.registerChart) {
        window.__quantModules.echartsTheme.registerChart(renderLadderChart);
      }

      function fmtAmount(v) {
        if (v == null) return '—';
        const a = Math.abs(v);
        if (a >= 1e8) return (v / 1e8).toFixed(2) + '亿';
        if (a >= 1e4) return (v / 1e4).toFixed(0) + '万';
        return v.toFixed(0);
      }

      function fmtPct(v) {
        if (v == null) return '—';
        return (v >= 0 ? '+' : '') + v.toFixed(2) + '%';
      }

      async function loadOverview(force) {
        const seq = ++_overviewSeq;
        overviewLoading.value = true;
        overviewError.value = false;
        try {
          const url = '/api/shortterm/overview' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _overviewSeq) return;
          if (res && res.success) {
            overview.value = res;
          } else if (res && res.detail) {
            overviewError.value = true;
            overviewErrTitle.value = String(res.detail);
            overviewErrDesc.value = '请先登录后再查看';
          } else {
            overviewError.value = true;
            overviewErrTitle.value = '数据加载失败';
            overviewErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _overviewSeq) return;
          overviewError.value = true;
          overviewErrTitle.value = '数据加载失败';
          overviewErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _overviewSeq) overviewLoading.value = false;
        }
      }

      async function loadSectorFlow(force) {
        const seq = ++_reqSeq;
        sectorLoading.value = true;
        sectorError.value = false;
        try {
          const url = '/api/shortterm/sector-flow?indicator=' + encodeURIComponent(sectorIndicator.value)
            + '&sector_type=' + encodeURIComponent(sectorType.value);
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success && res.available) {
            sectorRows.value = res.rows || [];
            sectorFlowSource.value = res.source || (res.note ? '同花顺' : '东财');
            sectorPage.value = 1;
          } else if (res && res.reason) {
            sectorError.value = true;
            sectorErrTitle.value = '数据加载失败';
            sectorErrDesc.value = String(res.reason).replace(/^\[⚠️[^\]]*\]\s*/, '');
          } else if (res && res.detail) {
            sectorError.value = true;
            sectorErrTitle.value = String(res.detail);
            sectorErrDesc.value = '请先登录后再查看';
          } else {
            sectorError.value = true;
            sectorErrTitle.value = '数据加载失败';
            sectorErrDesc.value = '请检查服务后重试';
          }
        } catch (e) {
          if (seq !== _reqSeq) return;
          sectorError.value = true;
          sectorErrTitle.value = '数据加载失败';
          sectorErrDesc.value = '请检查服务后重试';
        } finally {
          if (seq === _reqSeq) sectorLoading.value = false;
        }
      }

      async function loadReview(force) {
        const seq = ++_reviewSeq;
        try {
          const url = '/api/shortterm/review' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reviewSeq) return;
          if (res && res.success) review.value = res.review || null;
        } catch (e) { /* 静默 */ }
      }

      async function runReview() {
        reviewRunning.value = true;
        try {
          const url = '/api/shortterm/review' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            review.value = res;
            _cache[url] = { ts: Date.now(), data: res };   // 生成后刷新缓存
          }
        } catch (e) { /* 失败保持原态 */ } finally {
          reviewRunning.value = false;
        }
      }

      async function sendChat() {
        const q = chatQuestion.value.trim();
        if (!q) return;
        chatLoading.value = true;
        chatAnswer.value = '';
        try {
          const url = '/api/shortterm/review/chat';
          const res = await fetch(url, {
            method: 'POST', headers: authHeaders(),
            body: JSON.stringify({ date: overviewDate.value, question: q }),
          }).then(function (r) { return r.json(); });
          chatAnswer.value = res.answer || '[无回复]';
        } catch (e) {
          chatAnswer.value = '[⚠️ 发送失败]';
        } finally {
          chatLoading.value = false;
        }
      }

      async function loadIntraday(force) {
        const seq = ++_reqSeq;
        intradayLoading.value = true;
        try {
          const url = '/api/shortterm/intraday' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await cachedGet(url, force);
          if (seq !== _reqSeq) return;
          if (res && res.success) intradaySnapshots.value = res.snapshots || [];
        } catch (e) { /* 保持 */ } finally {
          if (seq === _reqSeq) intradayLoading.value = false;
        }
      }

      async function collectSnapshot() {
        intradayCollecting.value = true;
        try {
          const url = '/api/shortterm/intraday/snapshot' + (shortDate.value ? '?date=' + shortDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            if (!res.accepted) {
              intradayMsg.value = '⏱ ' + (res.reason || '非快照时点');
              intradayMsgType.value = 'warn';
            } else {
              intradayMsg.value = '✅ 已采集 ' + res.slot + ' 快照' +
                (res.pools_available && !res.pools_available.zt ? ' (池源部分不可用)' : '');
              intradayMsgType.value = 'ok';
            }
            loadIntraday();
          } else {
            intradayMsg.value = '采集失败, 请稍后重试';
          }
        } catch (e) {
          intradayMsg.value = '采集失败, 请稍后重试';
        } finally {
          intradayCollecting.value = false;
        }
      }

      function setSessionDates() {
        // 仅首次进入拉一次最近已收盘交易日(缓存), 之后切子页秒开
        return cachedGet('/api/shortterm/latest-session', false).then(function (res) {
          if (res && res.date) {
            if (!shortDate.value) shortDate.value = res.date;
          }
        }).catch(function () { /* 默认空, 让用户选 */ });
      }

      function loadCurrent() {
        // V5.2.3 高效加载: 按当前子页懒加载, 不再一 mount 全量并行拉 6 组
        const sp = currentSubPage.value;
        if (sp === 'ztpool') loadPools();
        else if (sp === 'lhb') loadLhb();
        else if (sp === 'overview') { loadOverview(); loadReview(); }
        else if (sp === 'sector') loadSectorFlow();
        else if (sp === 'intraday') loadIntraday();
      }

      function refreshCurrent() {
        // 强制绕过 TTL 缓存重拉当前子页
        const sp = currentSubPage.value;
        if (sp === 'ztpool') loadPools(true);
        else if (sp === 'lhb') loadLhb(true);
        else if (sp === 'overview') { loadOverview(true); loadReview(true); }
        else if (sp === 'sector') loadSectorFlow(true);
        else if (sp === 'intraday') loadIntraday(true);
      }

      onMounted(function () { setSessionDates(); loadCurrent(); });
      Vue.watch(function () { return currentSubPage.value; }, function (sp) {
        loadCurrent();
      });

      return {
        currentPage, currentSubPage,
        shortDate, pools, poolLoading, poolError, ztBoardFilter, filteredZt, clearBoardFilter,
        lhbRows, lhbLoading, lhbError, lhbPageRows, lhbPage,
        overview, overviewLoading, overviewError,
        sectorType, sectorIndicator, sectorKeyword, sectorRows, filteredSectorRows, sectorPageRows, sectorPage, sectorLoading, sectorError, sectorFlowSource,
        PAGE_SIZE, gotoSector,
        review, reviewRunning,
        intradaySnapshots, intradayLoading, intradayCollecting,
        intradaySlots, intradayMsg, slotClass, intradayStatus,
        chatQuestion, chatAnswer, chatLoading,
        loadPools, loadLhb, loadOverview, loadSectorFlow, loadReview, runReview,
        sendChat, loadIntraday, collectSnapshot, refreshCurrent,
        ladderText, fmtAmount, fmtPct, riseFall, tagClass, openStock,
        lhbInstitutionNetBuy, lhbHotMoneyCount, sectorTopName, sectorTopInflow, sectorSource,
        moneySource, promotion1to2, cycleScore, cycleTrend,
        pct, fmtCond, verdictClass, sessionStatusText, sessionStatusClass,
      };
    },
  };
})();
