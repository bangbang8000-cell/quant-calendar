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

                    <!-- 盘中核验 (V5.2.2: 6 时点快照) -->
                    <div v-if="currentSubPage === 'intraday'" class="card">
                        <div class="page-header">
                            <div class="page-title">盘中核验</div>
                            <div class="flex-c-gap-12">
                                <el-date-picker v-model="intradayDate" type="date" value-format="YYYY-MM-DD" size="small" placeholder="选择交易日" @change="loadIntraday"></el-date-picker>
                                <el-button size="small" type="primary" :loading="intradayCollecting" @click="collectSnapshot">采集当前快照</el-button>
                            </div>
                        </div>
                        <div class="text-xs-tertiary mb-4">时点: 09:25/09:35/10:00/11:30/14:00/15:00 · 过点 8 分钟拒绝 · 历史日不现抓</div>
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
                        <qc-state-panel v-else type="empty" title="暂无快照" desc="非快照时点或该日未采集"></qc-state-panel>
                    </div>
                </div>`,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      const currentPage = state.currentPage;
      const currentSubPage = state.currentSubPage;

      const poolDate = ref('');
      const pools = ref(null);
      const poolLoading = ref(false);
      const poolError = ref(false);
      const poolErrTitle = ref('数据加载失败');
      const poolErrDesc = ref('请检查服务后重试');
      const lhbDate = ref('');
      const lhbRows = ref(null);
      const lhbLoading = ref(false);
      const lhbError = ref(false);
      const lhbErrTitle = ref('数据加载失败');
      const lhbErrDesc = ref('请检查服务后重试');
      const overviewDate = ref('');
      const overview = ref(null);
      const overviewLoading = ref(false);
      const overviewError = ref(false);
      const overviewErrTitle = ref('数据加载失败');
      const overviewErrDesc = ref('请检查服务后重试');
      const sectorType = ref('行业资金流');
      const sectorIndicator = ref('今日');
      const sectorRows = ref(null);
      const sectorLoading = ref(false);
      const sectorError = ref(false);
      const sectorErrTitle = ref('数据加载失败');
      const sectorErrDesc = ref('请检查服务后重试');
      const review = ref(null);
      const reviewRunning = ref(false);
      const intradayDate = ref('');
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

      async function loadPools() {
        poolLoading.value = true;
        poolError.value = false;
        try {
          const url = '/api/shortterm/pools' + (poolDate.value ? '?date=' + poolDate.value : '');
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
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
          poolError.value = true;
          poolErrTitle.value = '数据加载失败';
          poolErrDesc.value = '请检查服务后重试';
        } finally {
          poolLoading.value = false;
        }
      }

      async function loadLhb() {
        lhbLoading.value = true;
        lhbError.value = false;
        try {
          const url = '/api/shortterm/lhb' + (lhbDate.value ? '?date=' + lhbDate.value : '');
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            lhbRows.value = Array.isArray(res.rows) ? res.rows : null;
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
          lhbError.value = true;
          lhbErrTitle.value = '数据加载失败';
          lhbErrDesc.value = '请检查服务后重试';
        } finally {
          lhbLoading.value = false;
        }
      }

      const ladderText = computed(function () {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return '—';
        return Object.keys(tiers).sort(function (a, b) { return a - b; })
          .map(function (b) { return b + '板:' + tiers[b]; }).join(' ');
      });

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

      // V5.2.0 (FR-5.2.0.7): 连板梯队条形图(复用 charts.js 通用简单图模式, 主题切换重绘)
      function renderLadderChart() {
        const tiers = pools.value && pools.value.ladder && pools.value.ladder.tiers;
        if (!tiers || !Object.keys(tiers).length) return;
        const charts = window.__quantModules && window.__quantModules.charts;
        if (!charts || !charts.renderSimpleChartTo) return;
        charts.renderSimpleChartTo('shorttermLadderChart', function () {
          const boards = Object.keys(tiers).sort(function (a, b) { return Number(a) - Number(b); });
          return {
            grid: { left: 8, right: 16, top: 20, bottom: 4, containLabel: true },
            tooltip: { trigger: 'axis' },
            xAxis: { type: 'category', data: boards.map(function (b) { return b + '板'; }) },
            yAxis: { type: 'value', minInterval: 1 },
            series: [{ type: 'bar', barWidth: '45%',
                       label: { show: true, position: 'top' },
                       data: boards.map(function (b) { return tiers[b]; }) }],
          };
        }, { key: 'shortterm-ladder' });
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

      async function loadOverview() {
        overviewLoading.value = true;
        overviewError.value = false;
        try {
          const url = '/api/shortterm/overview' + (overviewDate.value ? '?date=' + overviewDate.value : '');
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
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
          overviewError.value = true;
          overviewErrTitle.value = '数据加载失败';
          overviewErrDesc.value = '请检查服务后重试';
        } finally {
          overviewLoading.value = false;
        }
      }

      async function loadSectorFlow() {
        sectorLoading.value = true;
        sectorError.value = false;
        try {
          const url = '/api/shortterm/sector-flow?indicator=' + encodeURIComponent(sectorIndicator.value)
            + '&sector_type=' + encodeURIComponent(sectorType.value);
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success && res.available) {
            sectorRows.value = res.rows || [];
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
          sectorError.value = true;
          sectorErrTitle.value = '数据加载失败';
          sectorErrDesc.value = '请检查服务后重试';
        } finally {
          sectorLoading.value = false;
        }
      }

      async function loadReview() {
        try {
          const url = '/api/shortterm/review' + (overviewDate.value ? '?date=' + overviewDate.value : '');
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) review.value = res.review || null;
        } catch (e) { /* 静默 */ }
      }

      async function runReview() {
        reviewRunning.value = true;
        try {
          const url = '/api/shortterm/review' + (overviewDate.value ? '?date=' + overviewDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) review.value = res;
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

      async function loadIntraday() {
        intradayLoading.value = true;
        try {
          const url = '/api/shortterm/intraday' + (intradayDate.value ? '?date=' + intradayDate.value : '');
          const res = await fetch(url, { headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) intradaySnapshots.value = res.snapshots || [];
        } catch (e) { /* 保持 */ } finally {
          intradayLoading.value = false;
        }
      }

      async function collectSnapshot() {
        intradayCollecting.value = true;
        try {
          const url = '/api/shortterm/intraday/snapshot' + (intradayDate.value ? '?date=' + intradayDate.value : '');
          const res = await fetch(url, { method: 'POST', headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.success) {
            if (!res.accepted) {
              chatAnswer.value = res.reason || '非快照时点';
            } else {
              chatAnswer.value = '已采集 ' + res.slot + ' 快照';
            }
            loadIntraday();
          }
        } catch (e) { /* 保持 */ } finally {
          intradayCollecting.value = false;
        }
      }

      async function loadDefaults() {
        try {
          const res = await fetch('/api/shortterm/latest-session', { headers: authHeaders() }).then(function (r) { return r.json(); });
          if (res && res.date) {
            poolDate.value = res.date;
            lhbDate.value = res.date;
            overviewDate.value = res.date;
          }
        } catch (e) { /* 默认空, 让用户选 */ }
        loadPools();
        loadLhb();
        loadOverview();
        loadSectorFlow();
        loadReview();
        loadIntraday();
      }

      onMounted(loadDefaults);

      return {
        currentPage, currentSubPage,
        poolDate, pools, poolLoading, poolError,
        lhbDate, lhbRows, lhbLoading, lhbError,
        overviewDate, overview, overviewLoading, overviewError,
        sectorType, sectorIndicator, sectorRows, sectorLoading, sectorError,
        review, reviewRunning,
        intradayDate, intradaySnapshots, intradayLoading, intradayCollecting,
        chatQuestion, chatAnswer, chatLoading,
        loadPools, loadLhb, loadOverview, loadSectorFlow, loadReview, runReview,
        sendChat, loadIntraday, collectSnapshot,
        ladderText, fmtAmount, fmtPct,
        moneySource, promotion1to2, cycleScore, cycleTrend,
        pct, fmtCond, verdictClass,
      };
    },
  };
})();
