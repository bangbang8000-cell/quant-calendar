// 6.3.0 (T-6.3.0.9): 页面模板片段 二 —— 由 shortterm-page.js 原内联模板逐字符切出
// 装配见同目录 view.js（按 + 顺序拼接 = 拆分前原模板，指纹逐项对拍）
window.__quantModules = window.__quantModules || {};
window.__quantModules.shorttermPage = window.__quantModules.shorttermPage || {};
window.__quantModules.shorttermPage.part2 = `                            </div>
                        </div>
                        <qc-state-panel v-if="poolLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="poolError" type="error" :title="poolErrTitle" :desc="poolErrDesc" @retry="loadPools"></qc-state-panel>
                        <qc-state-panel v-else-if="pools && !hasAnyPool" type="empty" icon="inbox" :title="t('state.emptyPool')" :desc="t('state.descEmptyPool')" action-text="去配置数据池" action-key="go_datasource"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="trending-up" :size="18" /></div><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="rocket" :size="18" /></div><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="alert-triangle" :size="18" /></div><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-icon danger"><qc-icon name="trending-down" :size="18" /></div><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>
                            <div v-if="pools.ladder && Object.keys(pools.ladder.tiers || {}).length" id="shorttermLadderChart" class="mb-4" style="height:170px;width:100%"></div>

                            <div class="flex-c-gap-12 mb-2">
                                <div class="text-base-secondary">涨停池 ({{ (pools.zt || []).length }} 家)</div>
                                <span v-if="ztBoardFilter" class="tag-chip is-institution">已筛选 {{ ztBoardFilter }} 板 <span role="button" tabindex="0" aria-label="清除筛选" style="cursor:pointer;display:inline-flex" @click="clearBoardFilter" @keydown.enter.prevent="clearBoardFilter" @keydown.space.prevent="clearBoardFilter"><qc-icon name="x" :size="12" /></span></span>
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
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadLhb"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <!-- V6.5 (PRD-6.5 F2): 数据源降级提示(非静默空表) -->
                            <div v-if="lhbReason" class="text-xs-tertiary mb-4" title="点击展开完整原因" style="cursor:help"><qc-icon name="alert-triangle" :size="14" /> {{ lhbReason.length > 120 ? lhbReason.slice(0, 120) + '…' : lhbReason }}</div>
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon gold"><qc-icon name="bar-chart-3" :size="18" /></div><div class="stat-label">上榜家数</div><div class="stat-value">{{ lhbRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="landmark" :size="18" /></div><div class="stat-label">机构净买合计</div><div class="stat-value" style="font-size:1.15em">{{ fmtAmount(lhbInstitutionNetBuy) }}</div></div>
                                <div class="stat-card"><div class="stat-icon warning"><qc-icon name="flame" :size="18" /></div><div class="stat-label">游资上榜</div><div class="stat-value">{{ lhbHotMoneyCount }}</div></div>
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
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="该交易日暂无龙虎榜数据" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                    </div>

                    <!-- 板块资金 (V5.2.1: 行业/概念资金流, 今日/5日/10日窗口) -->
                    <div v-if="currentSubPage === 'sector'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-select v-model="sectorType" size="small" class="w-select" @change="loadSectorFlow">
                                    <el-option label="行业资金流" value="行业资金流"></el-option>
                                    <el-option label="概念资金流" value="概念资金流"></el-option>
                                </el-select>
                                <el-select v-model="sectorIndicator" size="small" class="w-select-xs" @change="loadSectorFlow">
                                    <el-option label="今日" value="今日"></el-option>
                                    <el-option label="5日" value="5日"></el-option>
                                    <el-option label="10日" value="10日"></el-option>
                                </el-select>
                                <el-input v-model="sectorKeyword" size="small" placeholder="搜索板块..." clearable style="width:130px"></el-input>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="trophy" :size="18" /></div><div class="stat-label">净流入榜首</div><div class="stat-value stat-value-lg">{{ sectorTopName }}</div></div>
                                <div class="stat-card"><div class="stat-icon info"><qc-icon name="layers" :size="18" /></div><div class="stat-label">板块数</div><div class="stat-value">{{ sectorRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success"><qc-icon name="wallet" :size="18" /></div><div class="stat-label">Top 净流入</div><div class="stat-value stat-value-lg">{{ fmtAmount(sectorTopInflow) }}</div></div>
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
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="板块资金流暂不可用" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                    </div>

                    <!-- 盘中核验 (V5.2.2: 6 时点快照) -->
                    <div v-if="currentSubPage === 'intraday'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
                                <el-button size="small" type="primary" :loading="intradayCollecting" @click="collectSnapshot">采集当前快照</el-button>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
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
                        <qc-state-panel v-else-if="intradayError" type="error" :title="t('state.intradayError')" :desc="t('state.descNetworkOrService')" @retry="loadIntraday"></qc-state-panel>
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
                        <qc-state-panel v-else type="empty" title="暂无快照" desc="点击右上角「采集当前快照」(仅交易时段 6 时点前后 8 分钟可用)" action-text="刷新数据" action-key="refresh"></qc-state-panel>
                    </div>

                    <!-- v7.3.0: 回测与审计（PIT 审计结论 + 样本内外回测 + 财务分位入口） -->
                    <div v-if="currentSubPage === 'overview'" class="card lab-card">
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <span class="card-title">回测与审计</span>
                                <span class="text-xs-tertiary" v-if="lab && lab.audit">PIT 审计：{{ lab.audit.passed ? '通过' : '未通过' }}（{{ lab.audit.total }} 项，失败 {{ lab.audit.failed }}）</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" aria-label="刷新回测与审计" @click="loadLab(true)"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="labLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="labError" type="empty" title="该数据未启用"
                            :desc="labReason" action-text="重试" @action="loadLab(true)"></qc-state-panel>
                        <div v-else class="lab-grid">
                            <div v-for="blk in labBlocks" :key="blk.title" class="lab-col">
                                <div class="lab-col-title">{{ blk.title }}</div>
                                <div v-for="it in blk.items" :key="it.k" class="pulse-kv">
                                    <span class="pulse-token">{{ it.k }}</span>
                                    <b class="num-tabular">{{ it.v }}</b>
                                </div>
                                <div class="text-xs-tertiary" v-if="blk.hint">{{ blk.hint }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- v7.2.0: 情绪脉冲屏（四组指标由 pulseGroups 计算, 模板保持精简） -->
                    <div v-if="currentSubPage === 'overview'" class="card pulse-card">
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <span class="card-title">情绪脉冲</span>
                                <span class="text-xs-tertiary" v-if="pulse && pulse.sentiment">{{ pulse.sentiment.date }} · 口径 {{ (pulse.sentiment.include_st ? '含 ST' : '不含 ST') }}</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" aria-label="刷新情绪脉冲" @click="loadPulse(true)"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="pulseLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="pulseError" type="empty" title="该数据未启用"
                            :desc="pulseReason" action-text="重试" @action="loadPulse(true)"></qc-state-panel>
                        <div v-else class="pulse-grid">
                            <div v-for="g in pulseGroups" :key="g.title" class="pulse-col">
                                <div class="pulse-col-title">{{ g.title }}</div>
                                <div v-for="it in g.items" :key="it.k" class="pulse-kv">
                                    <span class="pulse-token">{{ it.k }}</span>
                                    <b class="num-tabular" :class="it.cls">{{ it.v }}</b>
                                </div>
                                <div class="text-xs-tertiary" v-if="g.hint">{{ g.hint }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- v7.1.0: 行业强度作战矩阵（相对强度/加速度/成交额脉冲/排名变化） -->
                    <div v-if="currentSubPage === 'overview'" class="card industry-card">
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <span class="card-title">行业强度</span>
                                <span class="text-xs-tertiary" v-if="industry">覆盖 {{ industry.covered }}/{{ industry.requested }} 行业 · {{ industry.generated_at }}<template v-if="industryStale">（缓存）</template></span>
                            </div>
                            <div class="flex-c-gap-12">
                                <a class="industry-export-link" href="/api/research/industry-export" target="_blank" rel="noopener noreferrer">导出离线报告</a>
                                <el-button size="small" aria-label="刷新行业强度" @click="loadIndustryStrength(true)"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="industryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="industryError" type="empty"
                            title="该数据未启用" :desc="industryReason"
                            action-text="重试" @action="loadIndustryStrength(true)"></qc-state-panel>
                        <div v-else class="table-container">
                            <el-table :data="(industry && industry.rows) || []" size="small" max-height="360">
                                <el-table-column prop="name" label="行业" min-width="120"></el-table-column>
                                <el-table-column label="相对强度(20日)" width="140" align="right"><template #default="s"><span class="num-tabular" :class="riseFall((s.row.rel || {}).rel_20)">{{ fmtPct((s.row.rel || {}).rel_20) }}</span></template></el-table-column>
                                <el-table-column label="加速度" width="110" align="right"><template #default="s">{{ fmtPct(s.row.acceleration) }}</template></el-table-column>
                                <el-table-column label="成交额脉冲" width="110" align="right"><template #default="s">{{ s.row.volume_pulse == null ? '—' : s.row.volume_pulse }}</template></el-table-column>
                                <el-table-column label="排名" width="80" align="right"><template #default="s">{{ s.row.rank_20 == null ? '—' : s.row.rank_20 }}</template></el-table-column>
                                <el-table-column label="排名变化" width="100" align="right"><template #default="s">{{ s.row.rank_change == null ? '—' : s.row.rank_change }}</template></el-table-column>
                            </el-table>
                            <div class="text-xs-tertiary mt-2" v-if="industry && industry.meta">口径：{{ industry.meta.caliber }}；{{ industry.meta.disclaimer }}</div>
                        </div>
                    </div>

                    <!-- v6.9.0: 盘中情绪（集合竞价 + 热榜 + 异动解读） -->
                    <div v-if="currentSubPage === 'overview'" class="card sentiment-card">
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <span class="card-title">盘中情绪</span>
                                <span class="text-xs-tertiary">{{ sentimentCaliber }}</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" aria-label="刷新盘中情绪" @click="loadSentiment(true)"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sentimentLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sentimentError" type="empty"
                            title="该数据未启用" :desc="sentimentReason"
                            action-text="重试" @action="loadSentiment(true)"></qc-state-panel>
                        <div v-else class="sentiment-grid">
                            <div class="sentiment-col">
                                <div class="sentiment-col-title">集合竞价 · 短线风向标</div>
                                <div v-if="!sentiment.benchmark || !sentiment.benchmark.count" class="text-xs-tertiary">非竞价时段或无数据</div>
                                <div v-for="b in (sentiment.benchmark && sentiment.benchmark.rows) || []" :key="b.thscode" class="sentiment-row">
                                    <span class="sentiment-name">{{ b.name }}</span>
                                    <span class="num-tabular" :class="riseFall(b.auction_pct)">{{ fmtPct(b.auction_pct) }}</span>
                                </div>
                            </div>
                            <div class="sentiment-col">
                                <div class="sentiment-col-title">{{ (sentiment.hot && sentiment.hot.period_label) || '热榜' }}</div>
                                <div v-if="!sentiment.hot || !sentiment.hot.count" class="text-xs-tertiary">暂无榜单</div>
                                <div v-for="h in (sentiment.hot && sentiment.hot.rows) || []" :key="h.thscode" class="sentiment-row">
                                    <span class="sentiment-rank">{{ h.rank }}</span>
                                    <span class="sentiment-name">{{ h.name }}</span>
                                    <span class="text-xs-tertiary">{{ h.heat }}</span>
                                </div>
                            </div>
                            <div class="sentiment-col">
                                <div class="sentiment-col-title">异动解读</div>
                                <div v-if="!sentiment.anomaly || !sentiment.anomaly.count" class="text-xs-tertiary">当日暂无披露</div>
                                <div v-for="a in (sentiment.anomaly && sentiment.anomaly.rows) || []" :key="a.thscode + (a.tag_name || '')" class="sentiment-row sentiment-anomaly">
                                    <span class="sentiment-name">{{ a.stock_name || a.thscode }}</span>
                                    <span class="sentiment-tag">{{ a.tag_name }}</span>
                                    <div class="sentiment-content">{{ (a.analysis_content || '').slice(0, 80) }}</div>
                                </div>
                                <div v-if="sentiment.anomaly && sentiment.anomaly.disclaimer" class="text-xs-tertiary sentiment-disclaimer">{{ sentiment.anomaly.disclaimer }}</div>
                            </div>
                        </div>
                    </div>

                    <!-- v6.9.0: 事件流（公告/快讯 → 标题 + 摘要 + 原文跳转） -->
                    <div v-if="currentSubPage === 'overview'" class="card events-card">
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <span class="card-title">事件流</span>
                                <span class="text-xs-tertiary">来源 {{ eventsSource }}</span>
                            </div>
                            <div class="flex-c-gap-12">
                                <el-button size="small" aria-label="刷新事件流" @click="loadEventsFlash(true)"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="eventsLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="eventsError" type="empty"
                            title="暂无事件" :desc="eventsReason"
                            action-text="重试" @action="loadEventsFlash(true)"></qc-state-panel>
                        <div v-else>
                            <div v-for="e in eventsRows" :key="e.id" class="event-row">
                                <span class="event-date">{{ e.date }}</span>
                                <span class="event-title">{{ e.title }}</span>
                                <a v-if="e.url" class="event-link" :href="e.url" target="_blank" rel="noopener noreferrer">原文 ↗</a>
                            </div>
                            <div v-if="!eventsRows.length" class="text-xs-tertiary">暂无可展示事件（公告源未接入或当日无更新）</div>
                        </div>
                    </div>
                </div>`;