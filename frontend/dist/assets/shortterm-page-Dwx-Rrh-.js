(function(){const{inject:de,ref:s,onMounted:ue,computed:r,nextTick:ve}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="card">
                        <div class="page-header">
                            <div class="page-title">复盘看板</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="overviewDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="overviewLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="overviewError" type="error" :title="overviewErrTitle" :desc="overviewErrDesc" @retry="loadOverview"></qc-state-panel>
                        <template v-else-if="overview">
                            <div class="mb-4">
                                <div class="flex-c-gap-12 mb-2">
                                    <div class="text-base-secondary">AI 盘面研判</div>
                                    <el-button size="small" type="primary" :loading="reviewRunning" @click="runReview">{{ review && review.available ? '重新生成' : '生成' }}</el-button>
                                </div>
                                <qc-state-panel v-if="reviewRunning" type="loading"></qc-state-panel>
                                <div v-else-if="review && review.available" class="card">
                                    <div class="stat-value" style="font-size:1.05em">{{ review.emotion_level ? '情绪档位: ' + review.emotion_level : '情绪档位: —' }}</div>
                                    <div class="mt-4">{{ review.summary || '—' }}</div>
                                    <div v-if="review.active_directions && review.active_directions.length" class="mt-4">
                                        <div class="text-base-secondary mb-2">活跃方向</div>
                                        <span v-for="d in review.active_directions" :key="d" class="tag-chip mr-4">{{ d }}</span>
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
                                <el-date-picker v-model="poolDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
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

                            <div class="text-base-secondary mb-2">涨停池 ({{ pools.zt ? pools.zt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zt || []" size="small">
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
                                <el-date-picker v-model="lhbDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadLhb"></el-date-picker>
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
                                <el-table :data="lhbRows" size="small" max-height="560">
                                    <el-table-column label="名称" width="90" fixed><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="85" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="净买额" width="105" align="right" sortable sort-by="net_buy"><template #default="s"><span :class="riseFall(s.row.net_buy)">{{ fmtAmount(s.row.net_buy) }}</span></template></el-table-column>
                                    <el-table-column label="买入额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.buy_amount) }}</template></el-table-column>
                                    <el-table-column label="卖出额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.sell_amount) }}</template></el-table-column>
                                    <el-table-column label="资金性质" width="130"><template #default="s"><span v-for="(g, i) in (s.row.tags || [])" :key="i" class="tag-chip mr-4" :class="tagClass(g)">{{ g }}</span><span v-if="!(s.row.tags && s.row.tags.length)" class="text-xs-tertiary">—</span></template></el-table-column>
                                    <el-table-column prop="reason" label="上榜原因" min-width="200" show-overflow-tooltip></el-table-column>
                                </el-table>
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
                                <el-button size="small" @click="refreshCurrent">🔄</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-icon info">🥇</div><div class="stat-label">净流入榜首</div><div class="stat-value" style="font-size:1.05em">{{ sectorTopName }}</div></div>
                                <div class="stat-card"><div class="stat-icon info">🗂</div><div class="stat-label">板块数</div><div class="stat-value">{{ sectorRows.length }}</div></div>
                                <div class="stat-card"><div class="stat-icon success">💰</div><div class="stat-label">Top 净流入</div><div class="stat-value" style="font-size:1.05em">{{ fmtAmount(sectorTopInflow) }}</div></div>
                            </div>
                            <div class="table-container">
                                <el-table :data="sectorRows" size="small" max-height="560">
                                    <el-table-column prop="name" label="板块" min-width="120" fixed></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="95" align="right" sortable><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column label="主力净流入" width="130" align="right" sortable sort-by="main_net_inflow"><template #default="s"><span :class="riseFall(s.row.main_net_inflow)">{{ fmtAmount(s.row.main_net_inflow) }}</span></template></el-table-column>
                                    <el-table-column label="主力净占比" width="105" align="right"><template #default="s">{{ fmtPct(s.row.main_net_inflow_ratio) }}</template></el-table-column>
                                </el-table>
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
                                <el-date-picker v-model="intradayDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
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
                </div>`,setup(){const b=de("qcState");if(!b)return{};const me=b.currentPage,q=b.currentSubPage,w=s(""),u=s(null),E=s(!1),y=s(!1),M=s("数据加载失败"),L=s("请检查服务后重试"),g=s(""),S=s(null),F=s(!1),_=s(!1),A=s("数据加载失败"),R=s("请检查服务后重试"),c=s(""),o=s(null),Y=s(!1),x=s(!1),N=s("数据加载失败"),O=s("请检查服务后重试"),le=s("行业资金流"),ae=s("今日"),I=s(null),j=s(!1),h=s(!1),z=s("数据加载失败"),C=s("请检查服务后重试"),H=s(""),V=s(null),B=s(!1),m=s(""),Q=s(null),U=s(!1),G=s(!1),se=s(""),T=s(""),J=s(!1);function D(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const W={},pe=60*1e3;let i=0;function p(e,t){const a=Date.now(),l=W[e];return!t&&l&&a-l.ts<pe?Promise.resolve(l.data):fetch(e,{headers:D()}).then(function(n){return n.json()}).then(function(n){return W[e]={ts:Date.now(),data:n},n})}async function K(e){const t=++i;E.value=!0,y.value=!1;try{const a="/api/shortterm/pools"+(w.value?"?date="+w.value:""),l=await p(a,e);if(t!==i)return;l&&l.success?(u.value=l,ve(re)):l&&l.detail?(y.value=!0,M.value=String(l.detail),L.value="请先登录后再查看"):(y.value=!0,M.value="数据加载失败",L.value="请检查服务后重试")}catch{if(t!==i)return;y.value=!0,M.value="数据加载失败",L.value="请检查服务后重试"}finally{t===i&&(E.value=!1)}}async function X(e){const t=++i;F.value=!0,_.value=!1;try{const a="/api/shortterm/lhb"+(g.value?"?date="+g.value:""),l=await p(a,e);if(t!==i)return;l&&l.success?S.value=Array.isArray(l.rows)?l.rows:null:l&&l.detail?(_.value=!0,A.value=String(l.detail),R.value="请先登录后再查看"):(_.value=!0,A.value="数据加载失败",R.value="请检查服务后重试")}catch{if(t!==i)return;_.value=!0,A.value="数据加载失败",R.value="请检查服务后重试"}finally{t===i&&(F.value=!1)}}const fe=r(function(){const e=u.value&&u.value.ladder&&u.value.ladder.tiers;return!e||!Object.keys(e).length?"—":Object.keys(e).sort(function(t,a){return t-a}).map(function(t){return t+"板:"+e[t]}).join(" ")}),be=r(function(){const e=o.value&&o.value.emotion&&o.value.emotion.money_effect;return!e||!e.available?"—":e.source==="settled"?"定稿记录":e.source==="realtime"?e.partial?"实时(样本不全)":"实时":"—"}),he=r(function(){const e=o.value&&o.value.emotion&&o.value.emotion.promotion&&o.value.emotion.promotion.tiers&&o.value.emotion.promotion.tiers["1进2"];return e?e.rate:null}),we=r(function(){const e=o.value&&o.value.emotion&&o.value.emotion.sentiment_cycle;return e&&e.available&&e.current_score!=null?e.current_score.toFixed(2):"—"}),ye=r(function(){const e=o.value&&o.value.emotion&&o.value.emotion.sentiment_cycle;return!e||!e.available?"—":(e.trend||"—")+(e.day_n!=null?" · 距低谷"+e.day_n+"天":"")});function ge(e){return e==null||isNaN(e)?"—":(e*100).toFixed(0)+"%"}function _e(e,t){return e==null?"—":(typeof e=="number"?Math.round(e*100)/100:e)+(t||"")}function xe(e){return"tag-chip mr-4"}function ke(e){return e==null?"":e>0?"is-rise":e<0?"is-fall":""}function qe(e){return e==="机构"?"is-institution":e==="游资"?"is-hotmoney":e==="主力"?"is-main":""}function Se(e){e&&e.ts_code&&b&&b.showStockDetail&&b.showStockDetail(e.ts_code)}const ze=r(function(){return(S.value||[]).filter(function(e){return(e.tags||[]).indexOf("机构")>=0}).reduce(function(e,t){return e+(t.net_buy||0)},0)}),Ce=r(function(){return(S.value||[]).filter(function(e){return(e.tags||[]).indexOf("游资")>=0}).length}),ie=r(function(){const e=(I.value||[]).filter(function(t){return t.main_net_inflow!=null});return e.length?e.reduce(function(t,a){return t.main_net_inflow>=a.main_net_inflow?t:a}):null}),Te=r(function(){const e=ie.value;return e?e.name:"—"}),De=r(function(){const e=ie.value;return e?e.main_net_inflow:null}),Pe=r(function(){return H.value||"东财"}),d=["09:25","09:35","10:00","11:30","14:00","15:00"],Ee=r(function(){const e={};return(Q.value||[]).forEach(function(t){e[t.slot]=!0}),e});function Me(e){return Ee.value[e]?"is-done":e===oe.value?"is-current":"is-empty"}const oe=r(function(){const e=new Date,t=(e.getHours()<10?"0":"")+e.getHours(),a=(e.getMinutes()<10?"0":"")+e.getMinutes(),l=t+":"+a;for(var n=0;n<d.length;n++)if(l===d[n])return d[n];for(var v=0;v<d.length-1;v++){var f=d[v],te=new Date;te.setHours(Number(f.split(":")[0]),Number(f.split(":")[1]),0,0);var je=new Date(te.getTime()+8*6e4);if(e>=te&&e<=je)return f}return""}),Le=r(function(){const e=new Date,t=oe.value;if(t)return"当前处于快照窗口 "+t+" (前后 8 分钟) — 可采集";const a=e.getHours(),l=e.getMinutes();let n="";for(let v=0;v<d.length;v++){const f=d[v].split(":");if(Number(f[0])>a||Number(f[0])===a&&Number(f[1])>l){n=d[v];break}}return n?"下一快照时点 "+n+" — 非窗口期不可采集":"今日快照时点已全部结束"}),k=s(""),ne=s("info");function re(){const e=u.value&&u.value.ladder&&u.value.ladder.tiers;if(!e||!Object.keys(e).length)return;const t=window.__quantModules&&window.__quantModules.charts;!t||!t.renderSimpleChartTo||t.renderSimpleChartTo("shorttermLadderChart",function(){const a=Object.keys(e).sort(function(l,n){return Number(l)-Number(n)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.map(function(l){return l+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},data:a.map(function(l){return e[l]})}]}},{key:"shortterm-ladder"})}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(re);function Fe(e){if(e==null)return"—";const t=Math.abs(e);return t>=1e8?(e/1e8).toFixed(2)+"亿":t>=1e4?(e/1e4).toFixed(0)+"万":e.toFixed(0)}function Ae(e){return e==null?"—":(e>=0?"+":"")+e.toFixed(2)+"%"}async function Z(e){const t=++i;Y.value=!0,x.value=!1;try{const a="/api/shortterm/overview"+(c.value?"?date="+c.value:""),l=await p(a,e);if(t!==i)return;l&&l.success?o.value=l:l&&l.detail?(x.value=!0,N.value=String(l.detail),O.value="请先登录后再查看"):(x.value=!0,N.value="数据加载失败",O.value="请检查服务后重试")}catch{if(t!==i)return;x.value=!0,N.value="数据加载失败",O.value="请检查服务后重试"}finally{t===i&&(Y.value=!1)}}async function $(e){const t=++i;j.value=!0,h.value=!1;try{const a="/api/shortterm/sector-flow?indicator="+encodeURIComponent(ae.value)+"&sector_type="+encodeURIComponent(le.value),l=await p(a,e);if(t!==i)return;l&&l.success&&l.available?(I.value=l.rows||[],H.value=l.source||(l.note?"同花顺":"东财")):l&&l.reason?(h.value=!0,z.value="数据加载失败",C.value=String(l.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):l&&l.detail?(h.value=!0,z.value=String(l.detail),C.value="请先登录后再查看"):(h.value=!0,z.value="数据加载失败",C.value="请检查服务后重试")}catch{if(t!==i)return;h.value=!0,z.value="数据加载失败",C.value="请检查服务后重试"}finally{t===i&&(j.value=!1)}}async function ee(e){const t=++i;try{const a="/api/shortterm/review"+(c.value?"?date="+c.value:""),l=await p(a,e);if(t!==i)return;l&&l.success&&(V.value=l.review||null)}catch{}}async function Re(){B.value=!0;try{const e="/api/shortterm/review"+(c.value?"?date="+c.value:""),t=await fetch(e,{method:"POST",headers:D()}).then(function(a){return a.json()});t&&t.success&&(V.value=t,W[e]={ts:Date.now(),data:t})}catch{}finally{B.value=!1}}async function Ye(){const e=se.value.trim();if(e){J.value=!0,T.value="";try{const a=await fetch("/api/shortterm/review/chat",{method:"POST",headers:D(),body:JSON.stringify({date:c.value,question:e})}).then(function(l){return l.json()});T.value=a.answer||"[无回复]"}catch{T.value="[⚠️ 发送失败]"}finally{J.value=!1}}}async function P(e){const t=++i;U.value=!0;try{const a="/api/shortterm/intraday"+(m.value?"?date="+m.value:""),l=await p(a,e);if(t!==i)return;l&&l.success&&(Q.value=l.snapshots||[])}catch{}finally{t===i&&(U.value=!1)}}async function Ne(){G.value=!0;try{const e="/api/shortterm/intraday/snapshot"+(m.value?"?date="+m.value:""),t=await fetch(e,{method:"POST",headers:D()}).then(function(a){return a.json()});t&&t.success?(t.accepted?(k.value="✅ 已采集 "+t.slot+" 快照"+(t.pools_available&&!t.pools_available.zt?" (池源部分不可用)":""),ne.value="ok"):(k.value="⏱ "+(t.reason||"非快照时点"),ne.value="warn"),P()):k.value="采集失败, 请稍后重试"}catch{k.value="采集失败, 请稍后重试"}finally{G.value=!1}}function Oe(){return p("/api/shortterm/latest-session",!1).then(function(e){e&&e.date&&(w.value||(w.value=e.date),g.value||(g.value=e.date),c.value||(c.value=e.date),m.value||(m.value=e.date))}).catch(function(){})}function ce(){const e=q.value;e==="ztpool"?K():e==="lhb"?X():e==="overview"?(Z(),ee()):e==="sector"?$():e==="intraday"&&P()}function Ie(){const e=q.value;e==="ztpool"?K(!0):e==="lhb"?X(!0):e==="overview"?(Z(!0),ee(!0)):e==="sector"?$(!0):e==="intraday"&&P(!0)}return ue(function(){Oe(),ce()}),Vue.watch(function(){return q.value},function(e){ce()}),{currentPage:me,currentSubPage:q,poolDate:w,pools:u,poolLoading:E,poolError:y,lhbDate:g,lhbRows:S,lhbLoading:F,lhbError:_,overviewDate:c,overview:o,overviewLoading:Y,overviewError:x,sectorType:le,sectorIndicator:ae,sectorRows:I,sectorLoading:j,sectorError:h,sectorFlowSource:H,review:V,reviewRunning:B,intradayDate:m,intradaySnapshots:Q,intradayLoading:U,intradayCollecting:G,intradaySlots:d,intradayMsg:k,slotClass:Me,intradayStatus:Le,chatQuestion:se,chatAnswer:T,chatLoading:J,loadPools:K,loadLhb:X,loadOverview:Z,loadSectorFlow:$,loadReview:ee,runReview:Re,sendChat:Ye,loadIntraday:P,collectSnapshot:Ne,refreshCurrent:Ie,ladderText:fe,fmtAmount:Fe,fmtPct:Ae,riseFall:ke,tagClass:qe,openStock:Se,lhbInstitutionNetBuy:ze,lhbHotMoneyCount:Ce,sectorTopName:Te,sectorTopInflow:De,sectorSource:Pe,moneySource:be,promotion1to2:he,cycleScore:we,cycleTrend:ye,pct:ge,fmtCond:_e,verdictClass:xe}}}})();
