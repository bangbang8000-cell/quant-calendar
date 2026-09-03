(function(){const{inject:N,ref:l,onMounted:V,computed:c,nextTick:U}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="card">
                        <div class="page-header">
                            <div class="page-title">复盘看板</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="overviewDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
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
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false">⚠️ 未收盘, 数据可能不完整</span>
                            </div>
                        </div>
                        <qc-state-panel v-if="poolLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="poolError" type="error" :title="poolErrTitle" :desc="poolErrDesc" @retry="loadPools"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>
                            <div v-if="pools.ladder && Object.keys(pools.ladder.tiers || {}).length" id="shorttermLadderChart" class="mb-4" style="height:170px;width:100%"></div>

                            <div class="text-base-secondary mb-2">涨停池 ({{ pools.zt ? pools.zt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zt || []" size="small">
                                    <el-table-column prop="name" label="名称" width="90"></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="boards" label="连板" width="55" align="center"></el-table-column>
                                    <el-table-column label="涨停原因" min-width="180"><template #default="s">{{ s.row.reason || '—' }}</template></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s">{{ fmtPct(s.row.pct_chg) }}</template></el-table-column>
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
                                    <el-table-column prop="name" label="名称" width="90"></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s">{{ fmtPct(s.row.pct_chg) }}</template></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>

                            <div class="text-base-secondary mt-8 mb-2">跌停池 ({{ pools.dt ? pools.dt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.dt || []" size="small">
                                    <el-table-column prop="name" label="名称" width="90"></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s">{{ fmtPct(s.row.pct_chg) }}</template></el-table-column>
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
                            </div>
                        </div>
                        <qc-state-panel v-if="lhbLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="lhbError" type="error" :title="lhbErrTitle" :desc="lhbErrDesc" @retry="loadLhb"></qc-state-panel>
                        <div v-else-if="lhbRows">
                            <div class="table-container">
                                <el-table :data="lhbRows" size="small">
                                    <el-table-column prop="name" label="名称" width="90"></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s">{{ fmtPct(s.row.pct_chg) }}</template></el-table-column>
                                    <el-table-column label="净买额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.net_buy) }}</template></el-table-column>
                                    <el-table-column label="买入额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.buy_amount) }}</template></el-table-column>
                                    <el-table-column label="卖出额" width="100" align="right"><template #default="s">{{ fmtAmount(s.row.sell_amount) }}</template></el-table-column>
                                    <el-table-column label="资金性质" width="120"><template #default="s"><span v-for="(g, i) in (s.row.tags || [])" :key="i" class="tag-chip mr-4">{{ g }}</span><span v-if="!(s.row.tags && s.row.tags.length)" class="text-xs-tertiary">—</span></template></el-table-column>
                                    <el-table-column prop="reason" label="上榜原因" min-width="220"></el-table-column>
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
                            </div>
                        </div>
                        <qc-state-panel v-if="sectorLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="sectorError" type="error" :title="sectorErrTitle" :desc="sectorErrDesc" @retry="loadSectorFlow"></qc-state-panel>
                        <div v-else-if="sectorRows && sectorRows.length">
                            <div class="table-container">
                                <el-table :data="sectorRows" size="small">
                                    <el-table-column prop="name" label="板块" min-width="120"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="90" align="right"><template #default="s">{{ fmtPct(s.row.pct_chg) }}</template></el-table-column>
                                    <el-table-column label="主力净流入" width="120" align="right"><template #default="s">{{ fmtAmount(s.row.main_net_inflow) }}</template></el-table-column>
                                    <el-table-column label="主力净占比" width="100" align="right"><template #default="s">{{ fmtPct(s.row.main_net_inflow_ratio) }}</template></el-table-column>
                                </el-table>
                            </div>
                            <div class="text-xs-tertiary mt-4">实时值口径: 盘中为实时快照, 历史场次仅最近一次抓取值</div>
                        </div>
                        <qc-state-panel v-else type="empty" title="暂无数据" desc="板块资金流暂不可用"></qc-state-panel>
                    </div>
                </div>`,setup(){const h=N("qcState");if(!h)return{};const B=h.currentPage,H=h.currentSubPage,p=l(""),i=l(null),g=l(!1),d=l(!1),y=l("数据加载失败"),_=l("请检查服务后重试"),b=l(""),C=l(null),x=l(!1),v=l(!1),q=l("数据加载失败"),k=l("请检查服务后重试"),o=l(""),s=l(null),z=l(!1),u=l(!1),S=l("数据加载失败"),E=l("请检查服务后重试"),j=l("行业资金流"),L=l("今日"),M=l(null),P=l(!1),n=l(!1),f=l("数据加载失败"),w=l("请检查服务后重试"),T=l(null),D=l(!1);function r(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function R(){g.value=!0,d.value=!1;try{const e="/api/shortterm/pools"+(p.value?"?date="+p.value:""),t=await fetch(e,{headers:r()}).then(function(a){return a.json()});t&&t.success?(i.value=t,U(Y)):t&&t.detail?(d.value=!0,y.value=String(t.detail),_.value="请先登录后再查看"):(d.value=!0,y.value="数据加载失败",_.value="请检查服务后重试")}catch{d.value=!0,y.value="数据加载失败",_.value="请检查服务后重试"}finally{g.value=!1}}async function A(){x.value=!0,v.value=!1;try{const e="/api/shortterm/lhb"+(b.value?"?date="+b.value:""),t=await fetch(e,{headers:r()}).then(function(a){return a.json()});t&&t.success?C.value=Array.isArray(t.rows)?t.rows:null:t&&t.detail?(v.value=!0,q.value=String(t.detail),k.value="请先登录后再查看"):(v.value=!0,q.value="数据加载失败",k.value="请检查服务后重试")}catch{v.value=!0,q.value="数据加载失败",k.value="请检查服务后重试"}finally{x.value=!1}}const W=c(function(){const e=i.value&&i.value.ladder&&i.value.ladder.tiers;return!e||!Object.keys(e).length?"—":Object.keys(e).sort(function(t,a){return t-a}).map(function(t){return t+"板:"+e[t]}).join(" ")}),G=c(function(){const e=s.value&&s.value.emotion&&s.value.emotion.money_effect;return!e||!e.available?"—":e.source==="settled"?"定稿记录":e.source==="realtime"?e.partial?"实时(样本不全)":"实时":"—"}),J=c(function(){const e=s.value&&s.value.emotion&&s.value.emotion.promotion&&s.value.emotion.promotion.tiers&&s.value.emotion.promotion.tiers["1进2"];return e?e.rate:null}),K=c(function(){const e=s.value&&s.value.emotion&&s.value.emotion.sentiment_cycle;return e&&e.available&&e.current_score!=null?e.current_score.toFixed(2):"—"}),Q=c(function(){const e=s.value&&s.value.emotion&&s.value.emotion.sentiment_cycle;return!e||!e.available?"—":(e.trend||"—")+(e.day_n!=null?" · 距低谷"+e.day_n+"天":"")});function X(e){return e==null||isNaN(e)?"—":(e*100).toFixed(0)+"%"}function Z(e,t){return e==null?"—":(typeof e=="number"?Math.round(e*100)/100:e)+(t||"")}function $(e){return"tag-chip mr-4"}function Y(){const e=i.value&&i.value.ladder&&i.value.ladder.tiers;if(!e||!Object.keys(e).length)return;const t=window.__quantModules&&window.__quantModules.charts;!t||!t.renderSimpleChartTo||t.renderSimpleChartTo("shorttermLadderChart",function(){const a=Object.keys(e).sort(function(m,se){return Number(m)-Number(se)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:a.map(function(m){return m+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},data:a.map(function(m){return e[m]})}]}},{key:"shortterm-ladder"})}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(Y);function ee(e){if(e==null)return"—";const t=Math.abs(e);return t>=1e8?(e/1e8).toFixed(2)+"亿":t>=1e4?(e/1e4).toFixed(0)+"万":e.toFixed(0)}function te(e){return e==null?"—":(e>=0?"+":"")+e.toFixed(2)+"%"}async function F(){z.value=!0,u.value=!1;try{const e="/api/shortterm/overview"+(o.value?"?date="+o.value:""),t=await fetch(e,{headers:r()}).then(function(a){return a.json()});t&&t.success?s.value=t:t&&t.detail?(u.value=!0,S.value=String(t.detail),E.value="请先登录后再查看"):(u.value=!0,S.value="数据加载失败",E.value="请检查服务后重试")}catch{u.value=!0,S.value="数据加载失败",E.value="请检查服务后重试"}finally{z.value=!1}}async function O(){P.value=!0,n.value=!1;try{const e="/api/shortterm/sector-flow?indicator="+encodeURIComponent(L.value)+"&sector_type="+encodeURIComponent(j.value),t=await fetch(e,{headers:r()}).then(function(a){return a.json()});t&&t.success&&t.available?M.value=t.rows||[]:t&&t.reason?(n.value=!0,f.value="数据加载失败",w.value=String(t.reason).replace(/^\[⚠️[^\]]*\]\s*/,"")):t&&t.detail?(n.value=!0,f.value=String(t.detail),w.value="请先登录后再查看"):(n.value=!0,f.value="数据加载失败",w.value="请检查服务后重试")}catch{n.value=!0,f.value="数据加载失败",w.value="请检查服务后重试"}finally{P.value=!1}}async function I(){try{const e="/api/shortterm/review"+(o.value?"?date="+o.value:""),t=await fetch(e,{headers:r()}).then(function(a){return a.json()});t&&t.success&&(T.value=t.review||null)}catch{}}async function le(){D.value=!0;try{const e="/api/shortterm/review"+(o.value?"?date="+o.value:""),t=await fetch(e,{method:"POST",headers:r()}).then(function(a){return a.json()});t&&t.success&&(T.value=t)}catch{}finally{D.value=!1}}async function ae(){try{const e=await fetch("/api/shortterm/latest-session",{headers:r()}).then(function(t){return t.json()});e&&e.date&&(p.value=e.date,b.value=e.date,o.value=e.date)}catch{}R(),A(),F(),O(),I()}return V(ae),{currentPage:B,currentSubPage:H,poolDate:p,pools:i,poolLoading:g,poolError:d,lhbDate:b,lhbRows:C,lhbLoading:x,lhbError:v,overviewDate:o,overview:s,overviewLoading:z,overviewError:u,sectorType:j,sectorIndicator:L,sectorRows:M,sectorLoading:P,sectorError:n,review:T,reviewRunning:D,loadPools:R,loadLhb:A,loadOverview:F,loadSectorFlow:O,loadReview:I,runReview:le,ladderText:W,fmtAmount:ee,fmtPct:te,moneySource:G,promotion1to2:J,cycleScore:K,cycleTrend:Q,pct:X,fmtCond:Z,verdictClass:$}}}})();
