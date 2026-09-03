(function(){const{inject:h,ref:t,onMounted:f,computed:g}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ShorttermPage={name:"qc-shortterm-page",template:`
                <div v-if="currentPage === 'shortterm'" key="shortterm">
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
                        <qc-state-panel v-else-if="poolError" type="error" title="数据加载失败" desc="请检查服务后重试" @retry="loadPools"></qc-state-panel>
                        <div v-else-if="pools">
                            <div class="flex-wrap mb-4">
                                <div class="stat-card"><div class="stat-label">最高板</div><div class="stat-value">{{ pools.ladder && pools.ladder.highest != null ? pools.ladder.highest + ' 板' : '—' }}</div></div>
                                <div class="stat-card"><div class="stat-label">梯队</div><div class="stat-value">{{ ladderText }}</div></div>
                                <div class="stat-card"><div class="stat-label">涨停</div><div class="stat-value">{{ pools.zt ? pools.zt.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-label">炸板</div><div class="stat-value">{{ pools.zb ? pools.zb.length : '—' }} 家</div></div>
                                <div class="stat-card"><div class="stat-label">跌停</div><div class="stat-value">{{ pools.dt ? pools.dt.length : '—' }} 家</div></div>
                            </div>
                            <div v-if="pools.ladder && pools.ladder.note" class="text-xs-tertiary mb-4">{{ pools.ladder.note }}</div>

                            <div class="text-base-secondary mb-2">涨停池 ({{ pools.zt ? pools.zt.length : 0 }})</div>
                            <div class="table-container">
                                <el-table :data="pools.zt || []" size="small">
                                    <el-table-column prop="name" label="名称" width="90"></el-table-column>
                                    <el-table-column prop="ts_code" label="代码" width="85"></el-table-column>
                                    <el-table-column prop="boards" label="连板" width="55" align="center"></el-table-column>
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
                        <qc-state-panel v-else-if="lhbError" type="error" title="数据加载失败" desc="请检查服务后重试" @retry="loadLhb"></qc-state-panel>
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
                    </div>
                </div>`,setup(){const r=h("qcState");if(!r)return{};const w=r.currentPage,y=r.currentSubPage,s=t(""),a=t(null),d=t(!1),n=t(!1),c=t(""),b=t(null),u=t(!1),i=t(!1);function p(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function m(){d.value=!0,n.value=!1;try{const e="/api/shortterm/pools"+(s.value?"?date="+s.value:""),l=await fetch(e,{headers:p()}).then(function(o){return o.json()});l&&l.success?a.value=l:n.value=!0}catch{n.value=!0}finally{d.value=!1}}async function v(){u.value=!0,i.value=!1;try{const e="/api/shortterm/lhb"+(c.value?"?date="+c.value:""),l=await fetch(e,{headers:p()}).then(function(o){return o.json()});l&&l.success?b.value=Array.isArray(l.rows)?l.rows:null:i.value=!0}catch{i.value=!0}finally{u.value=!1}}const _=g(function(){const e=a.value&&a.value.ladder&&a.value.ladder.tiers;return!e||!Object.keys(e).length?"—":Object.keys(e).sort(function(l,o){return l-o}).map(function(l){return l+"板:"+e[l]}).join(" ")});function x(e){if(e==null)return"—";const l=Math.abs(e);return l>=1e8?(e/1e8).toFixed(2)+"亿":l>=1e4?(e/1e4).toFixed(0)+"万":e.toFixed(0)}function z(e){return e==null?"—":(e>=0?"+":"")+e.toFixed(2)+"%"}async function P(){try{const e=await fetch("/api/shortterm/latest-session",{headers:p()}).then(function(l){return l.json()});e&&e.date&&(s.value=e.date,c.value=e.date)}catch{}m(),v()}return f(P),{currentPage:w,currentSubPage:y,poolDate:s,pools:a,poolLoading:d,poolError:n,lhbDate:c,lhbRows:b,lhbLoading:u,lhbError:i,loadPools:m,loadLhb:v,ladderText:_,fmtAmount:x,fmtPct:z}}}})();
