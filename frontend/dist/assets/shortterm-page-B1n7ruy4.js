(function(){const{inject:fe,ref:s,onMounted:be,computed:n,nextTick:he}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="card">
                        <div class="page-header">
                            <div class="page-title">复盘看板</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span role="button" tabindex="0" aria-label="清除筛选" style="cursor:pointer" @click="clearBoardFilter" @keydown.enter.prevent="clearBoardFilter" @keydown.space.prevent="clearBoardFilter">✕</span></span>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent">🔄</el-button>
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
                </div>`,setup(){const v=fe("qcState");if(!v)return{};const we=v.currentPage,S=v.currentSubPage,c=s(""),d=s(null),F=s(!1),w=s(!1),M=s("数据加载失败"),R=s("请检查服务后重试"),f=s(null),g=s(null),N=s(!1),y=s(!1),A=s("数据加载失败"),L=s("请检查服务后重试"),I=s(1),_=50,ge=n(function(){const e=g.value||[];if(e.length<=200)return e;const t=(I.value-1)*_;return e.slice(t,t+_)}),i=s(null),Y=s(!1),x=s(!1),O=s("数据加载失败"),j=s("请检查服务后重试"),ie=s("行业资金流"),ne=s("今日"),B=s(""),q=s(null),H=s(1),V=s(!1),h=s(!1),z=s("数据加载失败"),C=s("请检查服务后重试"),Z=s(""),G=s(null),K=s(!1),Q=s(null),U=s(!1),J=s(!1),oe=s(""),P=s(""),W=s(!1);function T(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const X={},ye=60*1e3;let u=0,E=0,re=0;function b(e,t){const a=Date.now(),l=X[e];return!t&&l&&a-l.ts<ye?Promise.resolve(l.data):fetch(e,{headers:T()}).then(function(o){return o.json()}).then(function(o){return X[e]={ts:Date.now(),data:o},o})}async function $(e){const t=++u;F.value=!0,w.value=!1;try{const a="/api/shortterm/pools"+(c.value?"?date="+c.value:""),l=await b(a,e);if(t!==u)return;l&&l.success?(d.value=l,he(pe)):l&&l.detail?(w.value=!0,M.value=String(l.detail),R.value="请先登录后再查看"):(w.value=!0,M.value="数据加载失败",R.value="请检查服务后重试")}catch{if(t!==u)return;w.value=!0,M.value="数据加载失败",R.value="请检查服务后重试"}finally{t===u&&(F.value=!1)}}async function ee(e){const t=++u;N.value=!0,y.value=!1;try{const a="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),l=await b(a,e);if(t!==u)return;l&&l.success?(g.value=Array.isArray(l.rows)?l.rows:null,I.value=1):l&&l.detail?(y.value=!0,A.value=String(l.detail),L.value="请先登录后再查看"):(y.value=!0,A.value="数据加载失败",L.value="请检查服务后重试")}catch{if(t!==u)return;y.value=!0,A.value="数据加载失败",L.value="请检查服务后重试"}finally{t===u&&(N.value=!1)}}const _e=n(function(){const e=d.value&&d.value.ladder&&d.value.ladder.tiers;return!e||!Object.keys(e).length?"—":Object.keys(e).sort(function(t,a){return t-a}).map(function(t){return t+"板:"+e[t]}).join(" ")}),xe=n(function(){const e=d.value&&d.value.zt||[];return f.value?e.filter(function(t){return t.boards===f.value}):e});function ke(){f.value=null}const Se=n(function(){const e=i.value&&i.value.emotion&&i.value.emotion.money_effect;return!e||!e.available?"—":e.source==="settled"?"定稿记录":e.source==="realtime"?e.partial?"实时(样本不全)":"实时":"—"}),qe=n(function(){const e=i.value&&i.value.emotion&&i.value.emotion.promotion&&i.value.emotion.promotion.tiers&&i.value.emotion.promotion.tiers["1进2"];return e?e.rate:null}),ze=n(function(){const e=i.value&&i.value.emotion&&i.value.emotion.sentiment_cycle;return e&&e.available&&e.current_score!=null?e.current_score.toFixed(2):"—"}),Ce=n(function(){const e=i.value&&i.value.emotion&&i.value.emotion.sentiment_cycle;return!e||!e.available?"—":(e.trend||"—")+(e.day_n!=null?" · 距低谷"+e.day_n+"天":"")});n(function(){const e=i.value&&i.value.emotion;if(!e)return"";const t=[];for(const a of["money_effect","promotion","consec_premium","sentiment_cycle"]){const l=e[a];l&&l.available===!1&&l.reason&&t.push(String(l.reason).replace(/^[[^]]*]s*/,""))}return t.join("；")}),n(function(){const e=i.value&&i.value.facts;if(!e)return"";const t=[];for(const a of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const l=e[a];l&&l.available===!1&&l.reason&&t.push(String(l.reason).replace(/^[[^]]*]s*/,""))}return t.join("；")});function Pe(e){return e==null||isNaN(e)?"—":(e*100).toFixed(0)+"%"}function Te(e,t){return e==null?"—":(typeof e=="number"?Math.round(e*100)/100:e)+(t||"")}function Ee(e){return"tag-chip mr-4"}function De(e){return e==null?"":e>0?"is-rise":e<0?"is-fall":""}function Fe(e){return e==="机构"?"is-institution":e==="游资"?"is-hotmoney":e==="主力"?"is-main":""}const Me=n(function(){const e=i.value&&i.value.session_status;if(!e)return"—";const t=i.value.date;return t===e.latest_session&&e.settled?"✅ 已收盘":t===e.today&&e.is_trade_day&&!e.settled?"⏳ 盘中 · 未收盘":"📅 历史交易日"}),Re=n(function(){const e=i.value&&i.value.session_status;if(!e)return"";const t=i.value.date;return t===e.latest_session&&e.settled?"is-institution":t===e.today&&e.is_trade_day&&!e.settled?"is-main":""});function Ne(e){e&&e.ts_code&&v&&v.showStockDetail&&v.showStockDetail(e.ts_code)}const Ae=n(function(){return(g.value||[]).filter(function(e){return(e.tags||[]).indexOf("机构")>=0}).reduce(function(e,t){return e+(t.net_buy||0)},0)}),Le=n(function(){return(g.value||[]).filter(function(e){return(e.tags||[]).indexOf("游资")>=0}).length}),ce=n(function(){const e=(q.value||[]).filter(function(t){return t.main_net_inflow!=null});return e.length?e.reduce(function(t,a){return t.main_net_inflow>=a.main_net_inflow?t:a}):null}),Ie=n(function(){const e=ce.value;return e?e.name:"—"}),Ye=n(function(){const e=ce.value;return e?e.main_net_inflow:null}),Oe=n(function(){return Z.value||"东财"}),ue=n(function(){const e=(B.value||"").trim(),t=q.value||[];return e?t.filter(function(a){return a.name&&String(a.name).indexOf(e)>=0}):t});function je(e){B.value=e||"",v&&v.currentSubPage&&(v.currentSubPage.value="sector")}const Be=n(function(){const e=ue.value;if(e.length<=200)return e;const t=(H.value-1)*_;return e.slice(t,t+_)}),p=["09:25","09:35","10:00","11:30","14:00","15:00"],He=n(function(){const e={};return(Q.value||[]).forEach(function(t){e[t.slot]=!0}),e});function Ve(e){return He.value[e]?"is-done":e===de.value?"is-current":"is-empty"}const de=n(function(){const e=new Date,t=(e.getHours()<10?"0":"")+e.getHours(),a=(e.getMinutes()<10?"0":"")+e.getMinutes(),l=t+":"+a;for(var o=0;o<p.length;o++)if(l===p[o])return p[o];for(var r=0;r<p.length-1;r++){var m=p[r],se=new Date;se.setHours(Number(m.split(":")[0]),Number(m.split(":")[1]),0,0);var $e=new Date(se.getTime()+8*6e4);if(e>=se&&e<=$e)return m}return""}),Ze=n(function(){const e=new Date,t=de.value;if(t)return"当前处于快照窗口 "+t+" (前后 8 分钟) — 可采集";const a=e.getHours(),l=e.getMinutes();let o="";for(let r=0;r<p.length;r++){const m=p[r].split(":");if(Number(m[0])>a||Number(m[0])===a&&Number(m[1])>l){o=p[r];break}}return o?"下一快照时点 "+o+" — 非窗口期不可采集":"今日快照时点已全部结束"}),k=s(""),ve=s("info");function pe(){const e=d.value&&d.value.ladder&&d.value.ladder.tiers;if(!e||!Object.keys(e).length)return;const t=window.__quantModules&&window.__quantModules.charts;if(!t||!t.renderSimpleChartTo)return;const a=f.value,l=t.renderSimpleChartTo("shorttermLadderChart",function(){const o=Object.keys(e).sort(function(r,m){return Number(r)-Number(m)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:o.map(function(r){return r+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(r){return a&&Number(o[r.dataIndex])===a?"var(--color-accent)":"var(--chart-split)"}},data:o.map(function(r){return e[r]})}]}},{key:"shortterm-ladder"});l&&l.off&&(l.off("click"),l.on("click",function(o){if(!o||!o.name)return;const r=parseInt(o.name,10);isNaN(r)||(f.value=f.value===r?null:r)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(pe);function Ge(e){if(e==null)return"—";const t=Math.abs(e);return t>=1e8?(e/1e8).toFixed(2)+"亿":t>=1e4?(e/1e4).toFixed(0)+"万":e.toFixed(0)}function Ke(e){return e==null?"—":(e>=0?"+":"")+e.toFixed(2)+"%"}async function te(e){const t=++E;Y.value=!0,x.value=!1;try{const a="/api/shortterm/overview"+(c.value?"?date="+c.value:""),l=await b(a,e);if(t!==E)return;l&&l.success?i.value=l:l&&l.detail?(x.value=!0,O.value=String(l.detail),j.value="请先登录后再查看"):(x.value=!0,O.value="数据加载失败",j.value="请检查服务后重试")}catch{if(t!==E)return;x.value=!0,O.value="数据加载失败",j.value="请检查服务后重试"}finally{t===E&&(Y.value=!1)}}async function le(e){const t=++u;V.value=!0,h.value=!1;try{const a="/api/shortterm/sector-flow?indicator="+encodeURIComponent(ne.value)+"&sector_type="+encodeURIComponent(ie.value),l=await b(a,e);if(t!==u)return;l&&l.success&&l.available?(q.value=l.rows||[],Z.value=l.source||(l.note?"同花顺":"东财"),H.value=1):l&&l.reason?(h.value=!0,z.value="数据加载失败",C.value=String(l.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):l&&l.detail?(h.value=!0,z.value=String(l.detail),C.value="请先登录后再查看"):(h.value=!0,z.value="数据加载失败",C.value="请检查服务后重试")}catch{if(t!==u)return;h.value=!0,z.value="数据加载失败",C.value="请检查服务后重试"}finally{t===u&&(V.value=!1)}}async function ae(e){const t=++re;try{const a="/api/shortterm/review"+(c.value?"?date="+c.value:""),l=await b(a,e);if(t!==re)return;l&&l.success&&(G.value=l.review||null)}catch{}}async function Qe(){K.value=!0;try{const e="/api/shortterm/review"+(c.value?"?date="+c.value:""),t=await fetch(e,{method:"POST",headers:T()}).then(function(a){return a.json()});t&&t.success&&(G.value=t,X[e]={ts:Date.now(),data:t})}catch{}finally{K.value=!1}}async function Ue(){const e=oe.value.trim();if(e){W.value=!0,P.value="";try{const a=await fetch("/api/shortterm/review/chat",{method:"POST",headers:T(),body:JSON.stringify({date:overviewDate.value,question:e})}).then(function(l){return l.json()});P.value=a.answer||"[无回复]"}catch{P.value="[⚠️ 发送失败]"}finally{W.value=!1}}}async function D(e){const t=++u;U.value=!0;try{const a="/api/shortterm/intraday"+(c.value?"?date="+c.value:""),l=await b(a,e);if(t!==u)return;l&&l.success&&(Q.value=l.snapshots||[])}catch{}finally{t===u&&(U.value=!1)}}async function Je(){J.value=!0;try{const e="/api/shortterm/intraday/snapshot"+(c.value?"?date="+c.value:""),t=await fetch(e,{method:"POST",headers:T()}).then(function(a){return a.json()});t&&t.success?(t.accepted?(k.value="✅ 已采集 "+t.slot+" 快照"+(t.pools_available&&!t.pools_available.zt?" (池源部分不可用)":""),ve.value="ok"):(k.value="⏱ "+(t.reason||"非快照时点"),ve.value="warn"),D()):k.value="采集失败, 请稍后重试"}catch{k.value="采集失败, 请稍后重试"}finally{J.value=!1}}function We(){return b("/api/shortterm/latest-session",!1).then(function(e){e&&e.date&&(c.value||(c.value=e.date))}).catch(function(){})}function me(){const e=S.value;e==="ztpool"?$():e==="lhb"?ee():e==="overview"?(te(),ae()):e==="sector"?le():e==="intraday"&&D()}function Xe(){const e=S.value;e==="ztpool"?$(!0):e==="lhb"?ee(!0):e==="overview"?(te(!0),ae(!0)):e==="sector"?le(!0):e==="intraday"&&D(!0)}return be(function(){We(),me()}),Vue.watch(function(){return S.value},function(e){me()}),{currentPage:we,currentSubPage:S,shortDate:c,pools:d,poolLoading:F,poolError:w,ztBoardFilter:f,filteredZt:xe,clearBoardFilter:ke,lhbRows:g,lhbLoading:N,lhbError:y,lhbPageRows:ge,lhbPage:I,overview:i,overviewLoading:Y,overviewError:x,sectorType:ie,sectorIndicator:ne,sectorKeyword:B,sectorRows:q,filteredSectorRows:ue,sectorPageRows:Be,sectorPage:H,sectorLoading:V,sectorError:h,sectorFlowSource:Z,PAGE_SIZE:_,gotoSector:je,review:G,reviewRunning:K,intradaySnapshots:Q,intradayLoading:U,intradayCollecting:J,intradaySlots:p,intradayMsg:k,slotClass:Ve,intradayStatus:Ze,chatQuestion:oe,chatAnswer:P,chatLoading:W,loadPools:$,loadLhb:ee,loadOverview:te,loadSectorFlow:le,loadReview:ae,runReview:Qe,sendChat:Ue,loadIntraday:D,collectSnapshot:Je,refreshCurrent:Xe,ladderText:_e,fmtAmount:Ge,fmtPct:Ke,riseFall:De,tagClass:Fe,openStock:Ne,lhbInstitutionNetBuy:Ae,lhbHotMoneyCount:Le,sectorTopName:Ie,sectorTopInflow:Ye,sectorSource:Oe,moneySource:Se,promotion1to2:qe,cycleScore:ze,cycleTrend:Ce,pct:Pe,fmtCond:Te,verdictClass:Ee,sessionStatusText:Me,sessionStatusClass:Re}}}})();
