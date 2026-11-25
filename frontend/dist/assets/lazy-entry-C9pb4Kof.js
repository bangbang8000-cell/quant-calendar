(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.tour={create:function(B){const{ref:l,computed:z,currentSubPage:n}=B,p=window.QuantOnboarding,b=l(!1),y=l(p?p.createShorttermTourState():{stepIndex:0,completed:!1,dismissed:!1,updatedAt:0}),T=z(function(){return p&&p.shorttermTourSteps()[y.value.stepIndex]||{key:"",title:"",desc:""}}),d=z(function(){return p?p.shorttermTourProgress(y.value):{done:0,total:3,pct:0}}),h=z(function(){return y.value.stepIndex>=2});function N(){if(p){var _=null;try{_=localStorage.getItem("qc_shortterm_tour")}catch{}if(_){var k=p.parseState(_);k&&(y.value=k)}}}function q(){if(p){var _=JSON.stringify(y.value);try{localStorage.setItem("qc_shortterm_tour",_)}catch{}try{fetch("/api/user_config/preferences",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({preferences:{shortterm_tour:_}})}).catch(function(){})}catch{}}}function C(){window.__quantGuideModalsEnabled===!0&&p&&n.value==="overview"&&(N(),p.shorttermTourShouldShow(y.value)&&(b.value=!0))}function E(){y.value=p.shorttermTourNext(y.value),q()}function c(){y.value=p.shorttermTourComplete(y.value),q(),b.value=!1}function S(){y.value=p.shorttermTourDismiss(y.value),q(),b.value=!1}return{shorttermTourVisible:b,shorttermTourState:y,shorttermTourStep:T,shorttermTourProg:d,shorttermTourIsLast:h,maybeShowShorttermTour:C,shorttermTourNext:E,shorttermTourFinish:c,shorttermTourSkip:S}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.sentiment={create:function(B){const{ref:l,computed:z,cachedGet:n,fmtPct:p,fmtAmount:b}=B,y=l({benchmark:null,hot:null,anomaly:null}),T=l(!1),d=l(!1),h=l(""),N=l("竞价 60s / 榜单 5min 刷新；数据源同花顺（T2 周边）"),q=l([]),C=l(!1),E=l(!1),c=l(""),S=l("fuyao"),_=l(null),k=l(!1),M=l(!1),R=l(""),G=l(!1),O=l(null),L=l(!1),J=l(!1),v=l("");async function Q(f){T.value=!0,d.value=!1;try{const o=await n("/api/shortterm/auction",f),r=await n("/api/shortterm/hot-list?period=day&limit=10",f),u=await n("/api/shortterm/anomaly?page=1&size=5",f);(!o||o.available===!1)&&(!r||r.available===!1)?(d.value=!0,h.value=o&&o.reason||r&&r.reason||"该数据未启用（可在系统配置中开启）"):y.value={benchmark:o&&o.benchmark||null,hot:r&&(r.hot||null),anomaly:u&&u.available!==!1?u:null}}catch{d.value=!0,h.value="数据加载失败，请检查服务后重试"}finally{T.value=!1}}const I=l(null),Y=l(!1),j=l(!1),H=l("");async function U(f){Y.value=!0,j.value=!1;const o=function(r){return n(r,f).catch(function(){return null})};try{const r=await Promise.all([o("/api/research/pit-audit"),o("/api/research/backtest-lab?lookback=20&top_k=10")]),u=r[0]||null,m=r[1]||null;u&&u.available||m&&m.available?I.value={audit:u,backtest:m}:(I.value=null,j.value=!0,H.value=u&&u.reason||m&&m.reason||"该数据未启用")}catch{I.value=null,j.value=!0,H.value="加载失败，请检查服务后重试"}finally{Y.value=!1}}const ee=z(function(){const f=I.value||{},o=f.audit||{},r=f.backtest||{},u=r.full||{},m=function(P){return P==null?"—":P+"%"};return[{title:"PIT 审计",hint:"审计通过只说明当前检查项无异常，不构成对结果正确性的担保",items:[w("结论",o.passed?"通过":"未通过"),w("检查项 / 失败",(o.total||0)+" / "+(o.failed||0)),w("目标日",o.target_date||"—")]},{title:"动量回测（全样本）",hint:"t 日收盘出信号，收益自 t+1 起计",items:[w("总收益",m(u.total_return)),w("年化",m(u.annual_return)),w("Sharpe",u.sharpe==null?"—":u.sharpe),w("最大回撤",m(u.max_drawdown))]},{title:"样本内外",hint:"样本内外同一套参数，不做样本外调参",items:[w("样本内",m((r.in_sample||{}).total_return)),w("样本外",m((r.out_of_sample||{}).total_return)),w("切分点",r.split&&(r.split.out_of_sample||[])[0]||"—")]}]});async function ce(f){L.value=!0,J.value=!1;const o=function(r){return n(r,f).catch(function(){return null})};try{const r=await Promise.all([o("/api/research/sentiment-pulse"),o("/api/research/lhb-topology?days=3"),o("/api/research/attention-resonance?window=5")]),u=r[0]||null,m=r[1]||null,P=r[2]||null;u&&u.available||m&&m.available||P&&P.available?O.value={sentiment:u,topology:m,resonance:P}:(O.value=null,J.value=!0,v.value=u&&u.reason||m&&m.reason||P&&P.reason||"该数据未启用")}catch{O.value=null,J.value=!0,v.value="加载失败，请检查服务后重试"}finally{L.value=!1}}function w(f,o,r,u){return{k:f,v:o,cls:r||"",hint:u||""}}const te=z(function(){const f=O.value||{},o=f.sentiment||{},r=f.topology||{},u=f.resonance||{},m=o.counts||{},P=function(D){return D==null?"—":p(D*100)};return[{title:"涨停结构",hint:"",items:[w("涨停 / 连板",(m.limit_up_count==null?"—":m.limit_up_count)+" / "+(m.consec_count==null?"—":m.consec_count)),w("最高板",m.max_boards==null?"—":m.max_boards),w("早封率",P(o.early_seal_rate)),w("封单留存",o.seal_retention==null?"—":o.seal_retention)]},{title:"涨停原因 Top5",hint:"",items:(o.reasons||[]).slice(0,5).map(function(D){return w(D.token,D.count)})},{title:"龙虎榜概念（近3日）",hint:r.conservation_ok===void 0?"":"守恒校验："+(r.conservation_ok?"通过":"未通过"),items:(r.concepts||[]).slice(0,5).map(function(D){return w(D.concept,b(D.cum_net),D.cum_net>=0?"up":"down")})},{title:"热榜共振（5日）",hint:"同期同向不代表因果，不能当预测信号",items:[w("秩相关",u.spearman==null?"—":u.spearman),w("判定",u.verdict_text||"—"),w("上涨占比",P(u.up_ratio))]}]});async function W(f){k.value=!0,M.value=!1;try{const o="/api/research/industry-strength"+(f?"?refresh=1":""),r=await n(o,f);r&&r.available?(_.value=r,G.value=!!r.stale):(_.value=null,M.value=!0,R.value=r&&r.reason||"该数据未启用（可在系统配置中开启）")}catch{_.value=null,M.value=!0,R.value="加载失败，请检查服务后重试"}finally{k.value=!1}}async function K(f){C.value=!0,E.value=!1;try{const o=await n("/api/events/flash?limit=15",f);o&&o.available?(q.value=o.rows||[],S.value=o.source||"fuyao"):(q.value=[],E.value=!0,c.value=o&&o.reason||"事件源暂不可用")}catch{q.value=[],E.value=!0,c.value="事件加载失败"}finally{C.value=!1}}return{pulse:O,pulseLoading:L,pulseError:J,pulseReason:v,pulseGroups:te,loadPulse:ce,lab:I,labLoading:Y,labError:j,labReason:H,labBlocks:ee,loadLab:U,industry:_,industryLoading:k,industryError:M,industryReason:R,industryStale:G,loadIndustryStrength:W,sentiment:y,sentimentLoading:T,sentimentError:d,sentimentReason:h,sentimentCaliber:N,eventsRows:q,eventsLoading:C,eventsError:E,eventsReason:c,eventsSource:S,loadSentiment:Q,loadEventsFlash:K}}}})();(function(){window.__quantModules=window.__quantModules||{},window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{},window.__quantModules.shorttermPage.cache={create:function(B){const{authHeaders:l}=B,z=window.__qcShorttermCache=window.__qcShorttermCache||{map:{},order:[],inflight:{},max:120},n=z.map,p=z.order,b=z.inflight,y=z.max,T=60*1e3,d=600*1e3;function h(c){return/\/api\/(research|dwh)\//.test(String(c))?d:T}function N(c,S){const _=Date.now(),k=n[c];if(!S&&k&&_-k.ts<h(c))return Promise.resolve(k.data);if(b[c])return b[c];const M=fetch(c,{headers:l()}).then(function(R){return R.json()}).then(function(R){for(n[c]||p.push(c),n[c]={ts:Date.now(),data:R};p.length>y;){const G=p.shift();delete n[G]}return R}).finally(function(){delete b[c]});return b[c]=M,M}function q(c,S){for(n[c]||p.push(c),n[c]={ts:Date.now(),data:S};p.length>y;){const _=p.shift();delete n[_]}return S}function C(){return{entries:Object.keys(n).length,inflight:Object.keys(b).length}}function E(){return Object.keys(n).forEach(function(c){delete n[c]}),p.length=0,!0}return{cachedGet:N,put:q,cacheSnapshot:C,cacheClear:E,cacheTtl:h}}}})();window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part1=`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
                    <!-- 复盘看板 (V5.2.1 落地页: 硬指标卡 + 市场事实 + 验证条件 + 近5日热度) -->
                    <div v-if="currentSubPage === 'overview'" class="shortterm-split" data-split-root>
                        <!-- V5.15 (F7): 左列表 — 最近交易日核心指标摘要 (默认选中最近一天) -->
                        <div class="shortterm-date-list">
                            <div class="shortterm-date-list-head">
                                <span>复盘日历</span>
                                <el-button size="small" text @click="loadDateList" aria-label="刷新日期列表"><qc-icon name="refresh" :size="14" /></el-button>
                            </div>
                            <div v-if="dateListLoading" class="color-secondary shortterm-date-empty">加载中…</div>
                            <div v-else-if="dateList.length === 0" class="color-secondary shortterm-date-empty">暂无已抓取日期</div>
                            <!-- 6.3.1 (T-6.3.1.2): 复盘日历逐交易日累积可超 200 行 → 虚拟滚动 (行高常量 66px, 见 layout.css) -->
                            <qc-virtual-list v-else class="shortterm-date-items" :items="dateList" :row-height="66" :aria-label="t('a11y.shorttermDateList')">
                                <template #default="{ item: d }">
                                <div class="shortterm-date-item"
                                    :class="{ 'is-active': d.date === shortDate }" role="button" tabindex="0"
                                    :aria-current="d.date === shortDate ? 'true' : null"
                                    @click="pickDate(d.date)"
                                    @keydown.enter.prevent="pickDate(d.date)"
                                    @keydown.space.prevent="pickDate(d.date)">
                                    <div class="shortterm-date-item-date">{{ d.date }}</div>
                                    <div class="shortterm-date-item-meta">
                                        <span>赚钱 <b :class="riseFall(d.money_effect)">{{ fmtPct(d.money_effect) }}</b></span>
                                        <span>情绪 <b :class="(d.emotion_score != null && d.emotion_score >= 0.8) ? 'meta-emotion-hot' : ((d.emotion_score != null && d.emotion_score < 0.6) ? 'meta-emotion-cold' : '')">{{ d.emotion_score != null ? d.emotion_score.toFixed(2) : '—' }}</b></span>
                                        <span>涨停 <b>{{ d.zt_count }}</b></span>
                                    </div>
                                </div>
                                </template>
                            </qc-virtual-list>
                        </div>
                        <div class="split-divider" data-split-resize></div>
                        <!-- 右看板 (原 overview 内容) -->
                        <div class="shortterm-split-content card">
                        <!-- V5.3.0 (T-5.3.1.3): 短线复盘 3 步新手引导 (首次进入, 可跳过) -->
                        <div v-if="shorttermTourVisible" class="onboarding-overlay" role="dialog" aria-modal="true" aria-labelledby="shortterm-tour-title">
                            <div class="onboarding-card">
                                <div class="onboarding-head">
                                    <div class="onboarding-step-badge">{{ shorttermTourState.stepIndex + 1 }} / 3</div>
                                    <div class="onboarding-progress-track" aria-hidden="true">
                                        <div class="onboarding-progress-fill" :style="{ width: shorttermTourProg.pct + '%' }"></div>
                                    </div>
                                </div>
                                <div class="onboarding-title" id="shortterm-tour-title">{{ shorttermTourStep.title }}</div>
                                <div class="onboarding-desc">{{ shorttermTourStep.desc }}</div>
                                <div class="onboarding-actions">
                                    <el-button size="small" text @click="shorttermTourSkip" aria-label="跳过短线引导">跳过</el-button>
                                    <el-button v-if="!shorttermTourIsLast" size="small" type="primary" @click="shorttermTourNext">下一步</el-button>
                                    <el-button v-else size="small" type="primary" @click="shorttermTourFinish">开始使用</el-button>
                                </div>
                            </div>
                        </div>
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadOverview"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
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
                            <div v-if="emotionNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ emotionNotice }}</div>
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
                            <div v-if="factsNotice" class="text-xs-tertiary mb-4"><qc-icon name="alert-triangle" :size="14" /> {{ factsNotice }}</div>
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
                    </div>

                    <!-- 涨停复盘 -->
                    <div v-if="currentSubPage === 'ztpool'" class="card">
                        <!-- V6.1 (PRD-6.1 F3): 移除页内标题, 保留操作区 -->
                        <div class="qc-page-tools">
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="shortDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadPools"></el-date-picker>
                                <el-button size="small" aria-label="刷新数据" @click="refreshCurrent"><qc-icon name="refresh" :size="14" /></el-button>
                                <span class="text-xs-tertiary" v-if="pools && pools.settled === false"><qc-icon name="alert-triangle" :size="14" /> 未收盘, 数据可能不完整</span>
                                <!-- v6.8.0 (D4): 涨停口径角标 —— 家数与徽标同源(均读 pools.meta.zt) -->
                                <span class="text-xs-tertiary" v-if="pools && pools.meta && pools.meta.zt && pools.meta.zt.include_st !== undefined">
                                    口径 {{ pools.meta.zt.include_st ? '含 ST' : '不含 ST' }}
                                    <template v-if="pools.meta.zt.source">· 来源 {{ pools.meta.zt.source }}</template>
                                </span>
`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.part2=`                            </div>
                        </div>
                        <!-- v7.18 (FR-1001): 表格页用骨架屏替代转圈 —— 加载期间保持版式轮廓, 与"空数据"可区分 -->
                        <qc-skeleton-table v-if="poolLoading" :rows="5" :cols="4" label="涨停池加载中"></qc-skeleton-table>
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
                            <div class="table-container qc-desktop-only" id="ztPoolList">
                                <el-table :data="ztPageRows" size="small">
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
                            <!-- v7.18 (FR-901): 窄屏卡片降级 —— 10 列压进 390px 时窄列仅 3~6px, 不可读 -->
                            <qc-card-list class="qc-mobile-only" :items="ztCards" aria-label="涨停池"
                                @select="onCardPick"></qc-card-list>
                            <!-- v7.18 (FR-902): 分页 (50/页) —— 原 189 行一次渲染 -->
                            <el-pagination
                                v-if="filteredZt.length > PAGE_SIZE"
                                class="qc-zt-pager"
                                layout="prev, pager, next, total"
                                :total="filteredZt.length"
                                :page-size="PAGE_SIZE"
                                :current-page="ztPage"
                                small
                                @current-change="gotoTzPage"></el-pagination>

                            <div class="text-base-secondary mt-8 mb-2">炸板池 ({{ pools.zb ? pools.zb.length : 0 }})</div>
                            <div class="table-container qc-desktop-only">
                                <el-table :data="pools.zb || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="break_times" label="炸板" width="55" align="center"></el-table-column>
                                    <el-table-column prop="first_seal_time" label="首封" width="80"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>
                            <qc-card-list class="qc-mobile-only" :items="zbCards" aria-label="炸板池"
                                @select="onCardPick"></qc-card-list>

                            <div class="text-base-secondary mt-8 mb-2">跌停池 ({{ pools.dt ? pools.dt.length : 0 }})</div>
                            <div class="table-container qc-desktop-only">
                                <el-table :data="pools.dt || []" size="small">
                                    <el-table-column label="名称" width="90"><template #default="s"><span class="stock-link" @click="openStock(s.row)">{{ s.row.name }}</span></template></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="pct_chg" label="涨跌幅" width="80" align="right"><template #default="s"><span :class="riseFall(s.row.pct_chg)">{{ fmtPct(s.row.pct_chg) }}</span></template></el-table-column>
                                    <el-table-column prop="consec_dt" label="连续跌停" width="80" align="center"></el-table-column>
                                    <el-table-column prop="industry" label="行业"></el-table-column>
                                </el-table>
                            </div>
                            <qc-card-list class="qc-mobile-only" :items="dtCards" aria-label="跌停池"
                                @select="onCardPick"></qc-card-list>
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
                            <!-- v7.19 (FR-5): 快照态显式标注 —— 数据源断供时不再冒充「服务器错误」 -->
                            <div v-if="sectorStale" class="qc711-note mb-4">
                                <qc-icon name="alert-triangle" :size="12" /> 数据源暂不可用，当前展示截至 {{ sectorStale }} 的快照（非实时）。
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
                </div>`;window.__quantModules=window.__quantModules||{};window.__quantModules.shorttermPage=window.__quantModules.shorttermPage||{};window.__quantModules.shorttermPage.view=window.__quantModules.shorttermPage.part1+window.__quantModules.shorttermPage.part2;(function(){const{inject:B,ref:l,onMounted:z,computed:n,nextTick:p}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:window.__quantModules.shorttermPage.view,setup(){const b=B("qcState");if(!b)return{};const y=b.currentPage,T=b.currentSubPage,d=l(""),h=l(null),N=l(!1),q=l(!1),C=l("数据加载失败"),E=l("请检查服务后重试"),c=l(null),S=l(null),_=l(!1),k=l(!1),M=l("数据加载失败"),R=l("请检查服务后重试"),G=l(null),O=l(1),L=50,J=n(function(){const e=S.value||[];if(e.length<=200)return e;const t=(O.value-1)*L;return e.slice(t,t+L)}),v=l(null),Q=l(!1),I=l(!1),Y=l("数据加载失败"),j=l("请检查服务后重试"),H=l([]),U=l(!1);async function ee(){U.value=!0;try{const e=await A("/api/shortterm/dates/summary",!1);e&&e.success&&(H.value=e.dates||[])}catch{H.value=[]}finally{U.value=!1}}function ce(e){e!==d.value&&(d.value=e,oe(!0))}const w=l("行业资金流"),te=l("今日"),W=l(""),K=l(null),f=l(1),o=l(!1),r=l(!1),u=l("数据加载失败"),m=l("请检查服务后重试"),P=l(""),D=l(""),Ee=l(""),ue=l(null),de=l(!1),ve=l(null),me=l(!1),ae=l(!1),pe=l(!1),Me=l(""),le=l(""),fe=l(!1);function se(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}const he=window.__quantModules.shorttermPage.cache.create({authHeaders:se}),A=he.cachedGet,Be=he.cacheSnapshot;let x=0,ne=0,Re=0;async function be(e){const t=++x;N.value=!0,q.value=!1;try{const a="/api/shortterm/pools"+(d.value?"?date="+d.value:""),s=await A(a,e);if(t!==x)return;s&&s.success?(h.value=s,p(Oe)):s&&s.detail?(q.value=!0,C.value=String(s.detail),E.value="请先登录后再查看"):(q.value=!0,C.value="数据加载失败",E.value="请检查服务后重试")}catch{if(t!==x)return;q.value=!0,C.value="数据加载失败",E.value="请检查服务后重试"}finally{t===x&&(N.value=!1)}}async function we(e){const t=++x;_.value=!0,k.value=!1;try{const a="/api/shortterm/lhb"+(d.value?"?date="+d.value:""),s=await A(a,e);if(t!==x)return;s&&s.success?(S.value=Array.isArray(s.rows)?s.rows:null,G.value=s.available===!1&&s.reason||null,O.value=1):s&&s.detail?(k.value=!0,M.value=String(s.detail),R.value="请先登录后再查看"):(k.value=!0,M.value="数据加载失败",R.value="请检查服务后重试")}catch{if(t!==x)return;k.value=!0,M.value="数据加载失败",R.value="请检查服务后重试"}finally{t===x&&(_.value=!1)}}const Ge=n(function(){const e=h.value&&h.value.ladder&&h.value.ladder.tiers;return!e||!Object.keys(e).length?"—":Object.keys(e).sort(function(t,a){return t-a}).map(function(t){return t+"板:"+e[t]}).join(" ")}),ie=n(function(){const e=h.value&&h.value.zt||[];return c.value?e.filter(function(t){return t.boards===c.value}):e});function He(){c.value=null}const X=l(1),Ce=n(function(){const e=ie.value||[],t=(X.value-1)*L;return e.slice(t,t+L)});function Ze(e){X.value=e;const t=document.getElementById("ztPoolList");t&&t.scrollIntoView({block:"start",behavior:"smooth"})}Vue.watch(ie,function(){const e=Math.max(1,Math.ceil((ie.value||[]).length/L));X.value>e&&(X.value=1)});function ge(e,t){return(e||[]).map(function(a,s){var i=[];return t==="zt"?(i.push({label:"连板",value:a.boards!=null?a.boards+" 板":"—"}),i.push({label:"首封",value:a.first_seal_time||"—"}),i.push({label:"炸板",value:a.break_times!=null?a.break_times+" 次":"—"}),i.push({label:"封单",value:ye(a.seal_amount)})):t==="zb"?(i.push({label:"炸板",value:a.break_times!=null?a.break_times+" 次":"—"}),i.push({label:"首封",value:a.first_seal_time||"—"})):i.push({label:"连续跌停",value:a.consec_dt!=null?a.consec_dt+" 天":"—"}),a.industry&&i.push({label:"行业",value:a.industry}),{key:(a.ts_code||"")+"#"+s,row:a,title:a.name||"—",sub:a.ts_code||"",badge:_e(a.pct_chg),badgeClass:Le(a.pct_chg),lines:i,note:t==="zt"&&a.reason||"",footer:a.board||""}})}const Je=n(function(){return ge(Ce.value,"zt")}),Ke=n(function(){return ge(h.value&&h.value.zb,"zb")}),Qe=n(function(){return ge(h.value&&h.value.dt,"dt")});function Ue(e){e&&e.row&&De(e.row)}const We=n(function(){const e=h.value;if(!e)return!1;const t=e.ladder&&e.ladder.tiers?Object.keys(e.ladder.tiers).length:0;return(e.zt||[]).length+(e.zb||[]).length+(e.dt||[]).length+t>0}),Xe=n(function(){const e=v.value&&v.value.emotion&&v.value.emotion.money_effect;return!e||!e.available?"—":e.source==="settled"?"定稿记录":e.source==="realtime"?e.partial?"实时(样本不全)":"实时":"—"}),$e=n(function(){const e=v.value&&v.value.emotion&&v.value.emotion.promotion&&v.value.emotion.promotion.tiers&&v.value.emotion.promotion.tiers["1进2"];return e?e.rate:null}),et=n(function(){const e=v.value&&v.value.emotion&&v.value.emotion.sentiment_cycle;return e&&e.available&&e.current_score!=null?e.current_score.toFixed(2):"—"}),tt=n(function(){const e=v.value&&v.value.emotion&&v.value.emotion.sentiment_cycle;return!e||!e.available?"—":(e.trend||"—")+(e.day_n!=null?" · 距低谷"+e.day_n+"天":"")}),at=n(function(){const e=v.value&&v.value.emotion;if(!e)return"";const t=[];for(const a of["money_effect","promotion","consec_premium","sentiment_cycle"]){const s=e[a];s&&s.available===!1&&s.reason&&t.push(String(s.reason).replace(/^[[^]]*]s*/,""))}return t.join("；")}),lt=n(function(){const e=v.value&&v.value.facts;if(!e)return"";const t=[];for(const a of["seal_quality","loss_effect","feedback_matrix","theme_structure"]){const s=e[a];s&&s.available===!1&&s.reason&&t.push(String(s.reason).replace(/^[[^]]*]s*/,""))}return t.join("；")});function st(e){return e==null||isNaN(e)?"—":(e*100).toFixed(0)+"%"}function nt(e,t){return e==null?"—":(typeof e=="number"?Math.round(e*100)/100:e)+(t||"")}function it(e){return"tag-chip mr-4"}function Le(e){return e==null?"":e>0?"is-rise":e<0?"is-fall":""}function ot(e){return e==="机构"?"is-institution":e==="游资"?"is-hotmoney":e==="主力"?"is-main":""}const rt=n(function(){const e=v.value&&v.value.session_status;if(!e)return"—";const t=v.value.date;return t===e.latest_session&&e.settled?"已收盘":t===e.today&&e.is_trade_day&&!e.settled?"⏳ 盘中 · 未收盘":"历史交易日"}),ct=n(function(){const e=v.value&&v.value.session_status;if(!e)return"";const t=v.value.date;return t===e.latest_session&&e.settled?"is-institution":t===e.today&&e.is_trade_day&&!e.settled?"is-main":""});function De(e){e&&e.ts_code&&b&&b.showStockDetail&&b.showStockDetail(e.ts_code)}const ut=n(function(){return(S.value||[]).filter(function(e){return(e.tags||[]).indexOf("机构")>=0}).reduce(function(e,t){return e+(t.net_buy||0)},0)}),dt=n(function(){return(S.value||[]).filter(function(e){return(e.tags||[]).indexOf("游资")>=0}).length}),Fe=n(function(){const e=(K.value||[]).filter(function(t){return t.main_net_inflow!=null});return e.length?e.reduce(function(t,a){return t.main_net_inflow>=a.main_net_inflow?t:a}):null}),vt=n(function(){const e=Fe.value;return e?e.name:"—"}),mt=n(function(){const e=Fe.value;return e?e.main_net_inflow:null}),pt=n(function(){return P.value||"东财"}),Ie=n(function(){const e=(W.value||"").trim(),t=K.value||[];return e?t.filter(function(a){return a.name&&String(a.name).indexOf(e)>=0}):t});function ft(e){W.value=e||"",b&&b.currentSubPage&&(b.currentSubPage.value="sector")}const ht=n(function(){const e=Ie.value;if(e.length<=200)return e;const t=(f.value-1)*L;return e.slice(t,t+L)}),V=["09:25","09:35","10:00","11:30","14:00","15:00"],bt=n(function(){const e={};return(ve.value||[]).forEach(function(t){e[t.slot]=!0}),e});function wt(e){return bt.value[e]?"is-done":e===Ae.value?"is-current":"is-empty"}const Ae=n(function(){const e=new Date,t=(e.getHours()<10?"0":"")+e.getHours(),a=(e.getMinutes()<10?"0":"")+e.getMinutes(),s=t+":"+a;for(var i=0;i<V.length;i++)if(s===V[i])return V[i];for(var g=0;g<V.length-1;g++){var F=V[g],Z=new Date;Z.setHours(Number(F.split(":")[0]),Number(F.split(":")[1]),0,0);var ra=new Date(Z.getTime()+8*6e4);if(e>=Z&&e<=ra)return F}return""}),gt=n(function(){const e=new Date,t=Ae.value;if(t)return"当前处于快照窗口 "+t+" (前后 8 分钟) — 可采集";const a=e.getHours(),s=e.getMinutes();let i="";for(let g=0;g<V.length;g++){const F=V[g].split(":");if(Number(F[0])>a||Number(F[0])===a&&Number(F[1])>s){i=V[g];break}}return i?"下一快照时点 "+i+" — 非窗口期不可采集":"今日快照时点已全部结束"}),$=l(""),Ne=l("info");function Oe(){const e=h.value&&h.value.ladder&&h.value.ladder.tiers;if(!e||!Object.keys(e).length)return;const t=window.__quantModules&&window.__quantModules.charts;if(!t||!t.renderSimpleChartTo)return;const a=c.value,s=t.renderSimpleChartTo("shorttermLadderChart",function(){const i=Object.keys(e).sort(function(g,F){return Number(g)-Number(F)});return{grid:{left:8,right:16,top:20,bottom:4,containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:i.map(function(g){return g+"板"})},yAxis:{type:"value",minInterval:1},series:[{type:"bar",barWidth:"45%",label:{show:!0,position:"top"},itemStyle:{color:function(g){return a&&Number(i[g.dataIndex])===a?"var(--color-accent)":"var(--chart-split)"}},data:i.map(function(g){return e[g]})}]}},{key:"shortterm-ladder"});s&&s.off&&(s.off("click"),s.on("click",function(i){if(!i||!i.name)return;const g=parseInt(i.name,10);isNaN(g)||(c.value=c.value===g?null:g)}))}window.__quantModules&&window.__quantModules.echartsTheme&&window.__quantModules.echartsTheme.registerChart&&window.__quantModules.echartsTheme.registerChart(Oe);function ye(e){if(e==null)return"—";const t=Math.abs(e);return t>=1e8?(e/1e8).toFixed(2)+"亿":t>=1e4?(e/1e4).toFixed(0)+"万":e.toFixed(0)}function _e(e){return e==null?"—":(e>=0?"+":"")+e.toFixed(2)+"%"}async function oe(e){const t=++ne;Q.value=!0,I.value=!1;try{const a="/api/shortterm/overview"+(d.value?"?date="+d.value:""),s=await A(a,e);if(t!==ne)return;s&&s.success?v.value=s:s&&s.detail?(I.value=!0,Y.value=String(s.detail),j.value="请先登录后再查看"):(I.value=!0,Y.value="数据加载失败",j.value="请检查服务后重试")}catch{if(t!==ne)return;I.value=!0,Y.value="数据加载失败",j.value="请检查服务后重试"}finally{t===ne&&(Q.value=!1)}}function yt(e){return new Promise(function(t){setTimeout(t,e)})}async function _t(e){const t="/api/shortterm/sector-flow?indicator="+encodeURIComponent(te.value)+"&sector_type="+encodeURIComponent(w.value),a=await A(t,e);if(a&&a.success&&a.available)return{ok:!0,res:a};const s=a&&a.error_code||"",i=a&&a.reason?String(a.reason).replace(/^\[[^\]]*\]\s*/,""):"",g=a&&Array.isArray(a.tried)&&a.tried.length?"（尝试："+a.tried.slice(0,3).join("；")+"）":"";if(s==="data_unavailable")return{ok:!1,title:"数据源暂不可用",desc:(i||"东财 / 同花顺行情接口均未返回数据")+g+"。这不是服务端故障：可稍后重试，或到「系统状态」查看数据源健康度。"};if(s==="server_error")return{ok:!1,title:"服务端处理异常",desc:(i||"接口内部异常")+"。请稍后重试；若持续出现请联系管理员。"};if(s==="timeout")return{ok:!1,title:"数据请求超时",desc:"行情接口响应超时，请稍后重试。"};let F="板块资金暂不可用",Z="接口未返回数据，请稍后重试";return i?Z=i:a&&a.detail&&(F="需要登录后查看",Z=String(a.detail)),{ok:!1,title:F,desc:Z}}async function ke(e){const t=++x;o.value=!0,r.value=!1;let a=null;for(let s=0;s<2;s+=1){try{const i=await _t(s>0?!0:e);if(t!==x)return;if(i.ok){K.value=i.res.rows||[],P.value=i.res.source||(i.res.note?"同花顺":"东财"),D.value=i.res.error_code||"",Ee.value=i.res.error_code==="stale"?String(i.res.captured_at||""):"",f.value=1,r.value=!1,o.value=!1;return}a=i}catch(i){if(t!==x)return;a={ok:!1,title:"数据加载失败",desc:"网络或服务异常："+(i&&i.message?i.message:"未知错误")}}s===0&&await yt(300)}t===x&&(r.value=!0,u.value=a.title,m.value=a.desc,o.value=!1)}async function qe(e){const t=++Re;try{const a="/api/shortterm/review"+(d.value?"?date="+d.value:""),s=await A(a,e);if(t!==Re)return;s&&s.success&&(ue.value=s.review||null)}catch{}}async function kt(){de.value=!0;try{const e="/api/shortterm/review"+(d.value?"?date="+d.value:""),t=await fetch(e,{method:"POST",headers:se()}).then(function(a){return a.json()});t&&t.success&&(ue.value=t,he.put(e,t))}catch{}finally{de.value=!1}}async function qt(){const e=Me.value.trim();if(e){fe.value=!0,le.value="";try{const a=await fetch("/api/shortterm/review/chat",{method:"POST",headers:se(),body:JSON.stringify({date:overviewDate.value,question:e})}).then(function(s){return s.json()});le.value=a.answer||"[无回复]"}catch{le.value="[发送失败]"}finally{fe.value=!1}}}async function re(e){const t=++x;me.value=!0,ae.value=!1;try{const a="/api/shortterm/intraday"+(d.value?"?date="+d.value:""),s=await A(a,e);if(t!==x)return;s&&s.success?ve.value=s.snapshots||[]:ae.value=!0}catch{t===x&&(ae.value=!0)}finally{t===x&&(me.value=!1)}}async function xt(){pe.value=!0;try{const e="/api/shortterm/intraday/snapshot"+(d.value?"?date="+d.value:""),t=await fetch(e,{method:"POST",headers:se()}).then(function(a){return a.json()});t&&t.success?(t.accepted?($.value="已采集 "+t.slot+" 快照"+(t.pools_available&&!t.pools_available.zt?" (池源部分不可用)":""),Ne.value="ok"):($.value="⏱ "+(t.reason||"非快照时点"),Ne.value="warn"),re()):$.value="采集失败, 请稍后重试"}catch{$.value="采集失败, 请稍后重试"}finally{pe.value=!1}}function St(){return A("/api/shortterm/latest-session",!1).then(function(e){e&&e.date&&(d.value||(d.value=e.date))}).catch(function(){})}function je(){const e=T.value;e==="ztpool"?be():e==="lhb"?we():e==="overview"?(oe(),qe(),xe(),Se(),Pe(),ze(),Te()):e==="sector"?ke():e==="intraday"&&re()}function Pt(){const e=d.value?"?date="+d.value:"";["/api/shortterm/overview"+e,"/api/shortterm/pools"+e,"/api/shortterm/lhb"+e].forEach(function(a){A(a,!1).catch(function(){})})}function zt(){const e=T.value;e==="ztpool"?be(!0):e==="lhb"?we(!0):e==="overview"?(oe(!0),qe(!0),xe(!0),Se(!0),Pe(!0),ze(!0),Te(!0)):e==="sector"?ke(!0):e==="intraday"&&re(!0)}const Ve=window.__quantModules.shorttermPage.tour.create({ref:l,computed:n,currentSubPage:T}),{shorttermTourVisible:Tt,shorttermTourState:Et,shorttermTourStep:Mt,shorttermTourProg:Rt,shorttermTourIsLast:Ct}=Ve,{maybeShowShorttermTour:Ye,shorttermTourNext:Lt,shorttermTourFinish:Dt,shorttermTourSkip:Ft}=Ve;z(function(){St(),je(),Pt(),Ye(),ee()}),Vue.watch(function(){return T.value},function(e){je(),e==="overview"&&Ye()});const It=window.__quantModules.shorttermPage.sentiment.create({ref:l,computed:n,cachedGet:A,fmtAmount:ye,fmtPct:_e}),{sentiment:At,sentimentLoading:Nt,sentimentError:Ot,sentimentReason:jt,sentimentCaliber:Vt,eventsRows:Yt,eventsLoading:Bt,eventsError:Gt,eventsReason:Ht,eventsSource:Zt,loadSentiment:xe,loadEventsFlash:Se,industry:Jt,industryLoading:Kt,industryError:Qt,industryReason:Ut,industryStale:Wt,loadIndustryStrength:Pe,pulse:Xt,pulseLoading:$t,pulseError:ea,pulseReason:ta,pulseGroups:aa,loadPulse:ze,lab:la,labLoading:sa,labError:na,labReason:ia,labBlocks:oa,loadLab:Te}=It;return{currentPage:y,currentSubPage:T,shortDate:d,pools:h,poolLoading:N,poolError:q,ztBoardFilter:c,filteredZt:ie,clearBoardFilter:He,hasAnyPool:We,ztPage:X,ztPageRows:Ce,gotoTzPage:Ze,ztCards:Je,zbCards:Ke,dtCards:Qe,onCardPick:Ue,poolErrTitle:C,poolErrDesc:E,lhbErrTitle:M,lhbErrDesc:R,overviewErrTitle:Y,overviewErrDesc:j,sectorErrTitle:u,sectorErrDesc:m,sectorErrorCode:D,sectorStale:Ee,lhbRows:S,lhbLoading:_,lhbError:k,lhbReason:G,lhbPageRows:J,lhbPage:O,overview:v,overviewLoading:Q,overviewError:I,dateList:H,dateListLoading:U,loadDateList:ee,pickDate:ce,sectorType:w,sectorIndicator:te,sectorKeyword:W,sectorRows:K,filteredSectorRows:Ie,sectorPageRows:ht,sectorPage:f,sectorLoading:o,sectorError:r,sectorFlowSource:P,PAGE_SIZE:L,gotoSector:ft,review:ue,reviewRunning:de,intradaySnapshots:ve,intradayLoading:me,intradayError:ae,intradayCollecting:pe,intradaySlots:V,intradayMsg:$,slotClass:wt,intradayStatus:gt,chatQuestion:Me,chatAnswer:le,chatLoading:fe,sentiment:At,sentimentLoading:Nt,sentimentError:Ot,sentimentReason:jt,sentimentCaliber:Vt,eventsRows:Yt,eventsLoading:Bt,eventsError:Gt,eventsReason:Ht,eventsSource:Zt,loadSentiment:xe,loadEventsFlash:Se,industry:Jt,industryLoading:Kt,industryError:Qt,industryReason:Ut,industryStale:Wt,loadIndustryStrength:Pe,pulse:Xt,pulseLoading:$t,pulseError:ea,pulseReason:ta,pulseGroups:aa,loadPulse:ze,lab:la,labLoading:sa,labError:na,labReason:ia,labBlocks:oa,loadLab:Te,loadPools:be,loadLhb:we,loadOverview:oe,loadSectorFlow:ke,loadReview:qe,runReview:kt,sendChat:qt,loadIntraday:re,collectSnapshot:xt,refreshCurrent:zt,ladderText:Ge,fmtAmount:ye,fmtPct:_e,riseFall:Le,tagClass:ot,openStock:De,cacheSnapshot:Be,lhbInstitutionNetBuy:ut,lhbHotMoneyCount:dt,sectorTopName:vt,sectorTopInflow:mt,sectorSource:pt,moneySource:Xe,promotion1to2:$e,cycleScore:et,cycleTrend:tt,pct:st,fmtCond:nt,verdictClass:it,sessionStatusText:rt,sessionStatusClass:ct,t:b.t,emotionNotice:at,factsNotice:lt,shorttermTourVisible:Tt,shorttermTourState:Et,shorttermTourStep:Mt,shorttermTourProg:Rt,shorttermTourIsLast:Ct,shorttermTourNext:Lt,shorttermTourFinish:Dt,shorttermTourSkip:Ft}}}})();
