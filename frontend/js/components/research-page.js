// quant-calendar: ResearchPage 组件 (v3.6.0-T8 / FR-3.6.2)
// 策略研究页: 单根div, 5子页 v-if 链
// v3.17.2 (FR-3.17.2): 研究页新增「市场复盘」子页 (列表 + 详情, 全 CSS 类无内联 style)
(function () {
  const { ref, computed, watch, inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.ResearchPage = {
    name: 'qc-research-page',
    template: `
                <div v-if="currentPage === 'research'" key="research">
                    <!-- v3.16 (16.8): 功能未开启时的统一占位 -->
                    <qc-state-panel v-if="!researchMenuEnabled" type="empty" icon="🔒" title="研究功能未开启"
                        desc="请在「系统配置 → 功能开关」中启用「策略研究」菜单"></qc-state-panel>
                    <template v-else>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">🔬 {{ t('research.quantResearch') }}</div>
                        <!-- v3.19 (策略研究 P0): 策略注册表 → schema 表单 → 运行/回测/PTrade 导出 -->
                        <qc-state-panel v-if="strategiesLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="strategiesError" type="error" title="策略加载失败"
                            desc="请检查服务后重试" @retry="loadStrategies"></qc-state-panel>
                        <template v-else>
                            <!-- 策略列表: 卡片 + 选择 -->
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-220" v-model="activeStrategyId" size="small" placeholder="选择策略" @change="onStrategyChange">
                                    <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runActiveStrategy" :loading="strategyRunning">▶ 手工运行</el-button>
                                <el-date-picker class="w-150" v-model="runAsOf" type="date" size="small" placeholder="评估日(默认最新)" value-format="YYYY-MM-DD"/>
                                <el-button size="small" @click="exportActivePtradeCode">📤 导出 PTrade 代码</el-button>
                            </div>
                            <!-- v3.21 (P0-6): 策略纳管卡片 (默认纳管不可删, 可复制调参) -->
                            <div class="strategy-params flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <span class="strategy-param-label">纳管</span>
                                    <el-switch v-model="govEnabled" @change="updateGov" />
                                    <el-select class="w-110" size="small" v-model="govSchedule" @change="updateGov">
                                        <el-option v-for="t in ['20:00','21:00','22:00','08:00']" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-button size="small" type="warning" @click="runOnceActive" :loading="govRunning">⚡ 立即生成持仓</el-button>
                                    <el-button v-if="lastHoldings" size="small" @click="openLastHoldings">📄 查看最近持仓</el-button>
                                    <el-button size="small" @click="cloneStrategy">📋 复制为副本调参</el-button>
                                </div>
                            </div>
                            <div v-if="activeStrategy" class="strategy-detail">
                                <div class="text-sm-tertiary-mt8">{{ activeStrategy.description }}</div>
                                <!-- v3.21 (P0-3): 参数方案保存/加载 -->
                                <div class="strategy-params">
                                    <div class="strategy-param-row">
                                        <el-select class="w-200" size="small" v-model="profileSelect" placeholder="加载已存方案" @change="applyProfile">
                                            <el-option v-for="p in profiles" :key="p.id" :label="p.name" :value="p.id" />
                                        </el-select>
                                        <el-input class="w-140" size="small" v-model="profileName" placeholder="方案名" />
                                        <el-button size="small" type="primary" @click="saveProfile">💾 保存方案</el-button>
                                        <el-button v-if="profileSelect" size="small" type="danger" @click="deleteProfile">🗑 删除</el-button>
                                    </div>
                                </div>
                                <!-- schema 驱动参数表单 -->
                                <div class="strategy-params">
                                    <div v-for="f in activeStrategy.schema" :key="f.key" class="strategy-param-row">
                                        <label class="strategy-param-label">{{ f.label }}</label>
                                        <el-select v-if="f.type === 'enum'" class="w-200" size="small" v-model="paramValues[f.key]" @change="paramValues[f.key] = $event">
                                            <el-option v-for="o in f.options" :key="o" :label="o" :value="o" />
                                        </el-select>
                                        <el-switch v-else-if="f.type === 'bool'" v-model="paramValues[f.key]"></el-switch>
                                        <el-input-number v-else class="w-200" size="small" :min="f.min" :max="f.max" :step="f.step || 1" v-model="paramValues[f.key]"></el-input-number>
                                    </div>
                                </div>
                                <!-- PTrade 代码预览 -->
                                <div v-if="ptradeCode" class="ptrade-code-box">
                                    <div class="strategy-param-label">PTrade 代码预览 ({{ ptradeCode.length }} 字符)</div>
                                    <pre class="ptrade-code-pre">{{ ptradeCode }}</pre>
                                    <el-button size="small" type="primary" @click="copyPtradeCode">复制代码</el-button>
                                </div>
                                <!-- 运行历史 -->
                                <div v-if="strategyRuns.length" class="strategy-runs">
                                    <div class="strategy-param-label">最近运行</div>
                                    <div v-for="run in strategyRuns.slice(0, 5)" :key="run.id" class="strategy-run-row">
                                        <span class="strategy-run-status" :class="run.status">{{ run.status }}</span>
                                        <span class="text-sm">{{ run.mode }} · {{ run.started_at }}</span>
                                        <span v-if="run.summary && run.summary.symbols" class="text-sm">选股 {{ run.summary.symbols.length }} 只</span>
                                    </div>
                                </div>
                            </div>
                        </template>

                        <!-- v3.20 (P1-F8): 因子研究 — 单因子IC评价 + 分层回测 -->
                        <div class="factor-research">
                            <div class="card-title">📊 因子研究</div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-select class="w-220" v-model="factorKey" size="small" placeholder="选择因子">
                                    <el-option v-for="f in activeStrategy.factor_specs || factorOptions" :key="f.name" :label="f.name + ' (' + f.category + ')'" :value="f.name" />
                                </el-select>
                                <el-button size="small" type="primary" @click="runFactorIc" :loading="factorIcLoading">IC 分析</el-button>
                                <el-button size="small" @click="runFactorLayer" :loading="factorLayerLoading">分层回测</el-button>
                            </div>
                            <!-- IC 报告 -->
                            <div v-if="factorIcReport" class="factor-ic-report">
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.ic_mean }}</div>
                                        <div class="stat-label">IC 均值</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.icir }}</div>
                                        <div class="stat-label">ICIR</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.win_rate }}</div>
                                        <div class="stat-label">IC>0 胜率</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorIcReport.grade }}</div>
                                        <div class="stat-label">评级</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8">样本 {{ factorIcReport.count }} 日</div>
                            </div>
                            <!-- 分层回测 -->
                            <div v-if="factorLayerResult" class="factor-layer-result">
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <div class="stat-card p-12" v-for="ly in factorLayerResult.layers" :key="ly.layer">
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ ly.return }}%</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ factorLayerResult.spread }}%
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-write'" class="card">
                        <div class="card-title">⚙️ 策略编写</div>
                        <qc-state-panel type="empty" icon="🛠️" title="敬请期待" desc="策略编写功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">{{ t('research.backtest') }}</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-select class="w-180" v-model="backtestStrategy" size="small" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker class="w-260" v-model="backtestRange" type="daterange" size="small" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="YYYY-MM-DD"/>
                            <el-input-number class="w-140" v-model="backtestCapital" size="small" :min="10000" :step="50000"/>
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning">▶ 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div class="grid-auto-fit-140-mb16">
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.total_return_pct }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.annual_return_pct }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.max_drawdown_pct }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ backtestResult.sharpe_ratio }}</div>
                                    <div class="stat-label">夏普比率</div>
                                </div>
                            </div>
                            <div class="w-100-h320" id="backtestEquityChart"></div>
                            <div class="text-sm-tertiary-mt8">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <div v-else class="empty-state p-30-0">选择策略和日期范围后点击"运行回测"</div>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest-history'" class="card">
                        <div class="card-title">{{ t('research.backtestHistory') }}</div>
                        <qc-state-panel type="empty" icon="📝" title="敬请期待" desc="回测记录功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <!-- v3.17.2 FR-3.17.2 市场复盘代码起点 -->
                    <div v-else-if="currentSubPage === 'market-review'" class="card market-review-card">
                        <div class="card-title">{{ t('research.marketReview') }}</div>

                        <!-- ===== 列表视图 ===== -->
                        <template v-if="!selectedReviewDate">
                            <qc-state-panel v-if="marketReviewLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="marketReviewError" type="error" title="复盘列表加载失败"
                                desc="请检查网络后重试" @retry="loadMarketReviews"></qc-state-panel>
                            <qc-state-panel v-else-if="!marketReviews.length" type="empty" icon="📋" title="暂无市场复盘"
                                desc="尚未生成任何市场复盘报告"></qc-state-panel>
                            <div v-else class="market-review-list">
                                <div v-for="item in marketReviews" :key="item.date" class="market-review-row"
                                     tabindex="0" role="button" :aria-label="'查看 ' + item.date + ' 市场复盘'"
                                     @click="openMarketReview(item.date)"
                                     @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                    <div class="market-review-row-main">
                                        <span class="market-review-date">{{ item.date }}</span>
                                        <span class="market-review-badge market-review-ai-badge">AI 解读</span>
                                        <span v-for="(src, i) in marketReviewSrcEntries(item.data_sources)" :key="i"
                                              class="market-review-src" :class="{ 'is-unavailable': src.unavailable }">
                                            {{ src.label }} {{ src.value }}
                                        </span>
                                    </div>
                                    <span class="market-review-arrow">›</span>
                                </div>
                            </div>
                        </template>

                        <!-- ===== 详情视图 ===== -->
                        <template v-else>
                            <div class="market-review-detail-head">
                                <el-button size="small" @click="backToMarketReviewList">返回列表</el-button>
                                <span class="market-review-detail-date">{{ selectedReviewDate }}</span>
                            </div>
                            <qc-state-panel v-if="marketReviewDetailLoading" type="loading"></qc-state-panel>
                            <qc-state-panel v-else-if="marketReviewDetailError" type="error" title="复盘详情加载失败"
                                desc="请检查网络后重试" @retry="loadMarketReviewDetail(selectedReviewDate)"></qc-state-panel>
                            <template v-else-if="marketReviewDetail">
                                <!-- ① 三大指数表现 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">三大指数表现</div>
                                    <div v-if="marketReviewDetail.market && marketReviewDetail.market.indexes && marketReviewDetail.market.indexes.length" class="market-review-index-grid">
                                        <div v-for="idx in marketReviewDetail.market.indexes" :key="idx.code" class="market-review-index-card">
                                            <div class="market-review-index-name">{{ idx.name }}</div>
                                            <div class="market-review-index-close">{{ idx.close != null ? Number(idx.close).toFixed(2) : '--' }}</div>
                                            <div class="market-review-index-chg" :class="marketReviewChgClass(idx.pct_chg)">{{ marketReviewChgText(idx.pct_chg) }}</div>
                                        </div>
                                    </div>
                                    <div v-else class="market-review-unavailable">指数数据不可达</div>
                                </div>

                                <!-- ② 领涨 / 领跌板块 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">板块表现</div>
                                    <div class="market-review-sector-grid">
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title up">领涨板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.leader && marketReviewDetail.sectors.leader.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.leader.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                        <div class="market-review-sector-col">
                                            <div class="market-review-sector-col-title down">领跌板块</div>
                                            <div v-if="marketReviewDetail.sectors && marketReviewDetail.sectors.laggard && marketReviewDetail.sectors.laggard.length" class="market-review-sector-list">
                                                <div v-for="s in marketReviewDetail.sectors.laggard.slice(0, 3)" :key="s.name" class="market-review-sector-row">
                                                    <span class="market-review-sector-name">{{ s.name }}</span>
                                                    <span class="market-review-sector-chg" :class="marketReviewChgClass(s.pct_chg)">{{ marketReviewChgText(s.pct_chg) }}</span>
                                                </div>
                                            </div>
                                            <div v-else class="market-review-unavailable">板块数据不可达</div>
                                        </div>
                                    </div>
                                </div>

                                <!-- ③ 资金流向 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">资金流向</div>
                                    <div v-if="marketReviewDetail.moneyflow && marketReviewDetail.moneyflow.detail && marketReviewDetail.moneyflow.detail !== '数据不可达'" class="market-review-text">
                                        {{ marketReviewDetail.moneyflow.detail }}
                                    </div>
                                    <div v-else class="market-review-unavailable">资金流向数据不可达</div>
                                </div>

                                <!-- ④ 涨跌家数 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">市场情绪</div>
                                    <div v-if="marketReviewDetail.sentiment && marketReviewDetail.sentiment.up_down" class="market-review-updown">
                                        <span class="market-review-updown-item up">上涨 {{ marketReviewDetail.sentiment.up_down.up }} 家</span>
                                        <span class="market-review-updown-item down">下跌 {{ marketReviewDetail.sentiment.up_down.down }} 家</span>
                                    </div>
                                    <div v-else class="market-review-text muted">{{ (marketReviewDetail.sentiment && marketReviewDetail.sentiment.note) || '涨跌家数暂缺' }}</div>
                                </div>

                                <!-- ⑤ AI 解读 -->
                                <div class="market-review-section">
                                    <div class="market-review-section-title">AI 解读</div>
                                    <div class="market-review-ai-summary">{{ marketReviewDetail.ai_summary || '暂无解读' }}</div>
                                </div>
                            </template>
                        </template>
                    </div>
                    <!-- v3.17.7 (FR-3.17.7): 异动扫描 + 事件提醒 代码起点 -->
                    <div v-else-if="currentSubPage === 'scan'" class="card scan-card">
                        <div class="card-title">异动扫描</div>

                        <!-- ===== 扫描工具栏 ===== -->
                        <div class="scan-toolbar">
                            <el-select v-model="scanPool" size="small" class="scan-pool-select" aria-label="扫描范围" multiple collapse-tags placeholder="扫描范围">
                                <el-option label="当日入池" value="strategies"></el-option>
                                <el-option label="我的自选" value="watchlist"></el-option>
                            </el-select>
                            <el-button type="primary" size="small" @click="loadScan" :loading="scanLoading">刷新扫描</el-button>
                        </div>

                        <div v-if="scanLoading" class="scan-loading">
                            <qc-state-panel type="loading"></qc-state-panel>
                            <div class="scan-loading-tip">正在扫描 {{ scanPoolLabel }}（首次约几秒，请稍候）...</div>
                        </div>
                        <qc-state-panel v-else-if="scanError" type="error" title="异动扫描失败"
                            desc="请检查数据源后重试" @retry="loadScan"></qc-state-panel>
                        <template v-else-if="scanResult && scanResult.moves && scanResult.moves.length">
                            <div v-if="scanResult.note" class="scan-note">{{ scanResult.note }}</div>
                            <div class="scan-meta">扫描日期：{{ scanResult.date || '--' }}，异动 {{ scanResult.moves.length }} 只</div>
                            <div v-for="group in scanGroups" :key="group.label" class="scan-group">
                                <div class="scan-group-title">{{ group.label }}
                                    <span class="scan-group-count">{{ group.moves.length }}</span>
                                </div>
                                <div class="scan-group-list">
                                    <div v-for="m in group.moves" :key="m.code" class="scan-row" tabindex="0" role="button"
                                         :aria-label="'查看 ' + m.name + ' ' + m.code"
                                         @click="showStockDetail(m.code)"
                                         @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="scan-row-main">
                                            <span class="scan-row-name">{{ m.name }}</span>
                                            <span class="scan-row-code">{{ m.code }}</span>
                                            <span class="scan-row-close">{{ formatPrice(m.close) }}</span>
                                            <span class="scan-row-chg" :class="chgClass(m.pct_chg)">{{ chgText(m.pct_chg) }}</span>
                                        </div>
                                        <div class="scan-row-tags">
                                            <span v-for="tag in m.labels" :key="tag" class="scan-tag"
                                                  :class="'scan-tag-' + tagClass(tag)">{{ tag }}</span>
                                            <span v-if="m.volume_ratio" class="scan-row-vol">量比 {{ m.volume_ratio }}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                        <qc-state-panel v-else type="empty" title="暂无异动"
                            :desc="(scanResult && scanResult.note) || '当前扫描范围暂无符合条件的异动个股'"></qc-state-panel>

                        <!-- ===== 事件提醒 ===== -->
                        <div class="scan-section">
                            <div class="scan-section-head">
                                <div class="scan-section-title">事件提醒</div>
                                <el-select v-model="eventScope" size="small" class="scan-pool-select" aria-label="事件范围">
                                    <el-option label="自选股" value="watchlist"></el-option>
                                    <el-option label="组合持仓" value="portfolio"></el-option>
                                </el-select>
                            </div>
                            <qc-state-panel v-if="eventsLoading" type="loading"></qc-state-panel>
                            <template v-else-if="eventsData && eventsData.events && eventsData.events.length">
                                <div v-if="eventsData.note" class="scan-note">{{ eventsData.note }}</div>
                                <div v-for="g in eventGroups" :key="g.type" class="scan-group">
                                    <div class="scan-group-title">{{ g.type }}
                                        <span class="scan-group-count">{{ g.events.length }}</span>
                                    </div>
                                    <div class="scan-group-list">
                                        <div v-for="ev in g.events" :key="ev.code + '-' + ev.title + '-' + ev.date" class="scan-event-row">
                                            <span class="scan-event-stock">{{ ev.name }} ({{ ev.code }})</span>
                                            <span class="scan-event-title">{{ ev.title }}</span>
                                            <span class="scan-event-date">{{ ev.date || '--' }}</span>
                                        </div>
                                    </div>
                                </div>
                            </template>
                            <div v-else class="scan-empty-state">{{ (eventsData && eventsData.note) || '近期无事件' }}</div>
                        </div>
                    </div>
                    </template>
                </div>`,
    setup() {
      const state = inject('qcState');
      if (!state) return {};

      // ===== v3.17.2 (FR-3.17.2): AI 每日市场复盘 — 列表 + 详情 =====
      const marketReviews = ref([]);
      const marketReviewLoading = ref(false);
      const marketReviewError = ref(false);
      const selectedReviewDate = ref('');
      const marketReviewDetail = ref(null);
      const marketReviewDetailLoading = ref(false);
      const marketReviewDetailError = ref(false);

      async function loadMarketReviews() {
        marketReviewLoading.value = true;
        marketReviewError.value = false;
        try {
          const res = await fetch('/api/market/reviews?limit=30').then(r => r.json());
          if (res && res.success) {
            marketReviews.value = Array.isArray(res.data) ? res.data : [];
          } else {
            marketReviewError.value = true;
          }
        } catch (e) {
          console.error('[market-review] 复盘列表加载失败:', e);
          marketReviewError.value = true;
        } finally {
          marketReviewLoading.value = false;
        }
      }

      function openMarketReview(date) {
        selectedReviewDate.value = date;
        loadMarketReviewDetail(date);
      }

      function backToMarketReviewList() {
        selectedReviewDate.value = '';
        marketReviewDetail.value = null;
        marketReviewDetailError.value = false;
      }

      async function loadMarketReviewDetail(date) {
        marketReviewDetailLoading.value = true;
        marketReviewDetailError.value = false;
        marketReviewDetail.value = null;
        try {
          const url = date
            ? '/api/market/review?date=' + encodeURIComponent(date)
            : '/api/market/review';
          const res = await fetch(url).then(r => r.json());
          if (res && res.success) {
            marketReviewDetail.value = res.data;
          } else {
            marketReviewDetailError.value = true;
          }
        } catch (e) {
          console.error('[market-review] 复盘详情加载失败:', e);
          marketReviewDetailError.value = true;
        } finally {
          marketReviewDetailLoading.value = false;
        }
      }

      // 行情涨跌语义: 红涨绿跌 (pct_chg > 0 → .up / 红)
      function marketReviewChgClass(pct) {
        return pct > 0 ? 'up' : (pct < 0 ? 'down' : 'flat');
      }

      function marketReviewChgText(pct) {
        if (pct === null || pct === undefined || isNaN(Number(pct))) return '—';
        return (pct > 0 ? '+' : '') + Number(pct).toFixed(2) + '%';
      }

      // 数据源状态: 展示为 标签 + 来源/不可达
      function marketReviewSrcEntries(dataSources) {
        const labels = { indexes: '指数', sectors: '板块', moneyflow: '资金', sentiment: '情绪' };
        return Object.entries(dataSources || {}).map(function (entry) {
          const key = entry[0];
          const val = entry[1];
          const unavailable = !val || val === 'unavailable' || val === '数据不可达';
          return { label: labels[key] || key, value: unavailable ? '数据不可达' : val, unavailable: unavailable };
        });
      }

      // ===== v3.17.7 (FR-3.17.7): 异动扫描 + 事件提醒（离线日线级） =====
      const scanPool = ref(['strategies', 'watchlist']);  // v3.23: 多选扫描范围(当日入池/我的自选), 默认同时
      const scanLoading = ref(false);
      const scanError = ref(false);
      const scanResult = ref(null);
      const eventScope = ref('watchlist');
      const eventsLoading = ref(false);
      const eventsData = ref(null);

      async function loadScan() {
        scanLoading.value = true;
        scanError.value = false;
        try {
          // v3.23: 多选范围 → 逗号并集(如 watchlist,strategies)
          const url = '/api/market/scan?pool=' + encodeURIComponent((scanPool.value || []).join(',') || 'all');
          const res = await fetch(url).then(r => r.json());
          if (res && res.success) {
            scanResult.value = res.data || { moves: [], note: '' };
          } else {
            scanError.value = true;
          }
        } catch (e) {
          console.error('[scan] 异动扫描失败:', e);
          scanError.value = true;
        } finally {
          scanLoading.value = false;
        }
      }

      async function loadEvents() {
        eventsLoading.value = true;
        try {
          const url = '/api/market/events?scope=' + encodeURIComponent(eventScope.value);
          const res = await fetch(url).then(r => r.json());
          if (res && res.success) {
            eventsData.value = res.data || { events: [], note: '' };
          } else {
            eventsData.value = { events: [], note: '事件数据暂不可用' };
          }
        } catch (e) {
          console.error('[scan] 事件提醒加载失败:', e);
          eventsData.value = { events: [], note: '事件数据暂不可用' };
        } finally {
          eventsLoading.value = false;
        }
      }

      // 扫描范围中文名（loading 提示用）— v3.23 多选
      const scanPoolLabel = computed(function () {
        const m = { 'strategies': '当日入池', 'watchlist': '自选股' };
        const names = (scanPool.value || []).map(function (p) { return m[p]; }).filter(Boolean);
        return names.length ? names.join('+') : '所选范围';
      });

      // 异动标签分组（按固定展示顺序）
      const scanGroups = computed(function () {
        const order = ['涨停', '连板', '放量', '异动振幅', '跌停'];
        const moves = (scanResult.value && scanResult.value.moves) || [];
        const groups = [];
        order.forEach(function (label) {
          const ms = moves.filter(function (m) {
            return (m.labels || []).indexOf(label) >= 0;
          });
          if (ms.length) groups.push({ label: label, moves: ms });
        });
        return groups;
      });

      // 事件按类型分组
      const eventGroups = computed(function () {
        const byType = {};
        ((eventsData.value && eventsData.value.events) || []).forEach(function (ev) {
          (byType[ev.type] = byType[ev.type] || []).push(ev);
        });
        return Object.keys(byType).map(function (type) {
          return { type: type, events: byType[type] };
        });
      });

      // 标签 → 语义色类（红涨绿跌：涨停/连板偏涨，跌停放量下跌偏跌）
      function tagClass(tag) {
        if (tag === '跌停') return 'down';
        if (tag === '涨停' || tag === '连板') return 'up';
        if (tag === '放量' || tag === '异动振幅') return 'neutral';
        return 'neutral';
      }

      function formatPrice(v) {
        if (v === null || v === undefined || isNaN(Number(v))) return '--';
        return Number(v).toFixed(2);
      }

      function chgClass(pct) {
        return pct > 0 ? 'up' : (pct < 0 ? 'down' : 'flat');
      }

      function chgText(pct) {
        if (pct === null || pct === undefined || isNaN(Number(pct))) return '—';
        return (pct > 0 ? '+' : '') + Number(pct).toFixed(2) + '%';
      }

      // ===== 策略管理 (v3.19 策略研究 P0) =====
      const strategies = ref([]);
      const strategiesLoading = ref(false);
      const strategiesError = ref(false);
      const activeStrategyId = ref('');
      const paramValues = ref({});
      const strategyRunning = ref(false);
      const runAsOf = ref('');  // v3.21: 手工运行评估日(可选, 默认最近交易日)
      const ptradeCode = ref('');
      const strategyRuns = ref([]);
      const profiles = ref([]);           // v3.21 (P0-3): 已存参数方案
      const profileSelect = ref('');
      const profileName = ref('');
      const govEnabled = ref(true);        // v3.21 (P0-6): 纳管状态
      const govSchedule = ref('20:00');
      const govRunning = ref(false);
      const lastHoldings = ref('');
      const activeStrategy = computed(function () {
        return strategies.value.find(function (s) { return s.id === activeStrategyId.value; }) || null;
      });

      async function withAuth(url, opts) {
        opts = opts || {};
        opts.headers = Object.assign({}, opts.headers || {});
        const token = localStorage.getItem('token') || '';
        if (token) opts.headers['Authorization'] = 'Bearer ' + token;
        return fetch(url, opts);
      }

      async function loadStrategies() {
        strategiesLoading.value = true;
        strategiesError.value = false;
        try {
          const res = await withAuth('/api/strategies').then(function (r) { return r.json(); });
          strategies.value = Array.isArray(res) ? res : [];
          if (strategies.value.length && !activeStrategyId.value) {
            activeStrategyId.value = strategies.value[0].id;
            onStrategyChange();
          }
        } catch (e) {
          console.error('[research] 策略列表加载失败:', e);
          strategiesError.value = true;
        } finally {
          strategiesLoading.value = false;
        }
      }

      function onStrategyChange() {
        const st = activeStrategy.value;
        if (!st) return;
        paramValues.value = {};
        st.schema.forEach(function (f) { paramValues.value[f.key] = f.default; });
        ptradeCode.value = '';
        loadRuns();
        loadProfiles();
        loadGov();
      }

      // ─── v3.21 (P0-3): 参数方案 CRUD ───
      async function loadProfiles() {
        if (!activeStrategyId.value) { profiles.value = []; return; }
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles')
            .then(function (r) { return r.json(); });
          profiles.value = (res && res.data && res.data.profiles) || [];
          profileSelect.value = '';
        } catch (e) {
          console.error('[research] 方案列表加载失败:', e);
          profiles.value = [];
        }
      }

      async function saveProfile() {
        const name = (profileName.value || '').trim();
        if (!name) { window._core && window._core.showToast('请输入方案名称'); return; }
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles', {
            method: 'POST',
            body: JSON.stringify({ name: name, params: paramValues.value }),
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { window._core && window._core.showToast(String(res.detail)); return; }
          profileName.value = '';
          await loadProfiles();
          window._core && window._core.showToast('方案已保存');
        } catch (e) {
          console.error('[research] 方案保存失败:', e);
          window._core && window._core.showToast('方案保存失败');
        }
      }

      function applyProfile() {
        const p = profiles.value.find(function (x) { return x.id === profileSelect.value; });
        if (!p) return;
        Object.keys(p.params || {}).forEach(function (k) { paramValues.value[k] = p.params[k]; });
        window._core && window._core.showToast('已应用方案: ' + p.name);
      }

      async function deleteProfile() {
        if (!profileSelect.value) return;
        try {
          await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles/' + profileSelect.value, {
            method: 'DELETE',
          }).then(function (r) { return r.json(); });
          await loadProfiles();
          window._core && window._core.showToast('方案已删除');
        } catch (e) {
          console.error('[research] 方案删除失败:', e);
        }
      }

      // ─── v3.21 (P0-6): 策略纳管 ───
      async function loadGov() {
        try {
          const res = await withAuth('/api/strategies/governance').then(function (r) { return r.json(); });
          const s = (res && res.data && res.data.strategies) || {};
          const cur = s[activeStrategyId.value] || {};
          govEnabled.value = cur.enabled !== false;
          govSchedule.value = cur.schedule || '20:00';
          lastHoldings.value = cur.last_holdings || '';
        } catch (e) {
          console.error('[research] 纳管状态加载失败:', e);
        }
      }

      async function updateGov() {
        try {
          await withAuth('/api/strategies/governance', {
            method: 'PUT',
            body: JSON.stringify({
              strategies: (function () {
                const o = {};
                o[activeStrategyId.value] = { enabled: govEnabled.value, schedule: govSchedule.value };
                return o;
              })(),
            }),
          }).then(function (r) { return r.json(); });
          window._core && window._core.showToast('纳管设置已更新');
        } catch (e) {
          console.error('[research] 纳管更新失败:', e);
        }
      }

      async function runOnceActive() {
        if (!activeStrategyId.value) return;
        govRunning.value = true;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/run-once', {
            method: 'POST',
            body: JSON.stringify({ as_of: runAsOf.value || undefined }),
          }).then(function (r) { return r.json(); });
          if (res && res.detail) { window._core && window._core.showToast(String(res.detail)); return; }
          window._core && window._core.showToast('持仓已生成');
          await loadGov();
        } catch (e) {
          console.error('[research] run-once 失败:', e);
          window._core && window._core.showToast('持仓生成失败');
        } finally {
          govRunning.value = false;
        }
      }

      function openLastHoldings() {
        if (!lastHoldings.value) return;
        window.open(lastHoldings.value.replace(/\./g, '/').replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//, '/api/static/'), '_blank');
      }

      function cloneStrategy() {
        const st = activeStrategy.value;
        if (!st) return;
        const name = (profileName.value || '').trim() || (st.name + '-副本');
        saveProfileAs(name, Object.assign({}, paramValues.value));
        window._core && window._core.showToast('已复制为副本方案: ' + name);
      }

      async function saveProfileAs(name, params) {
        try {
          await withAuth('/api/strategies/' + activeStrategyId.value + '/profiles', {
            method: 'POST',
            body: JSON.stringify({ name: name, params: params }),
          }).then(function (r) { return r.json(); });
          await loadProfiles();
        } catch (e) {
          console.error('[research] 副本保存失败:', e);
        }
      }

      async function loadRuns() {
        if (!activeStrategyId.value) return;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/runs?limit=5')
            .then(function (r) { return r.json(); });
          strategyRuns.value = Array.isArray(res) ? res : [];
        } catch (e) {
          strategyRuns.value = [];
        }
      }

      async function runActiveStrategy() {
        if (!activeStrategyId.value) return;
        strategyRunning.value = true;
        try {
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/run', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ params: paramValues.value, as_of: runAsOf.value || undefined }),
          }).then(function (r) { return r.json(); });
          if (res && res.status === 'success') {
            loadRuns();
          } else {
            alert('运行失败: ' + (res.detail || JSON.stringify(res)));
          }
        } catch (e) {
          console.error('[research] 策略运行失败:', e);
          alert('运行失败: ' + e.message);
        } finally {
          strategyRunning.value = false;
        }
      }

      async function exportActivePtradeCode() {
        if (!activeStrategyId.value) return;
        try {
          const qs = Object.keys(paramValues.value).map(function (k) {
            return encodeURIComponent(k) + '=' + encodeURIComponent(paramValues.value[k]);
          }).join('&');
          const res = await withAuth('/api/strategies/' + activeStrategyId.value + '/ptrade-code?' + qs)
            .then(function (r) { return r.json(); });
          if (res && res.code) {
            ptradeCode.value = res.code;
          } else {
            alert('导出失败: ' + (res.detail || JSON.stringify(res)));
          }
        } catch (e) {
          console.error('[research] PTrade 导出失败:', e);
          alert('导出失败: ' + e.message);
        }
      }

      function copyPtradeCode() {
        if (!ptradeCode.value) return;
        const ta = document.createElement('textarea');
        ta.value = ptradeCode.value;
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch (e) { /* noop */ }
        document.body.removeChild(ta);
      }

      watch(
        function () {
          return state.currentPage.value + '/' + state.currentSubPage.value;
        },
        function (key) {
          // 进入研究页「市场复盘」且未停留在详情时加载列表
          if (key === 'research/market-review' && !selectedReviewDate.value) {
            loadMarketReviews();
          }
          // 进入研究页「异动扫描」时刷新扫描与事件提醒
          if (key === 'research/scan') {
            loadScan();
            loadEvents();
          }
          // v3.19: 进入「量化研究」时加载策略列表
          if (key === 'research/quant-research') {
            loadStrategies();
          }
        },
        { immediate: true }
      );

      // ===== 因子研究 (v3.20 P1-F8) =====
      const factorKey = ref('mom20');
      const factorIcLoading = ref(false);
      const factorLayerLoading = ref(false);
      const factorIcReport = ref(null);
      const factorLayerResult = ref(null);
      const factorOptions = [
        { name: 'mom20', category: 'technical' },
        { name: 'pe', category: 'valuation' },
        { name: 'pb', category: 'valuation' },
        { name: 'turnover20', category: 'sentiment' },
        { name: 'capital_flow', category: 'capital' },
      ];

      async function runFactorIc() {
        factorIcLoading.value = true;
        try {
          const res = await withAuth('/api/strategies/factors/ic', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }),
          }).then(function (r) { return r.json(); });
          const rep = res && res.report ? (res.report.n1 || {}) : {};
          factorIcReport.value = rep;
        } catch (e) {
          console.error('[research] 因子IC分析失败:', e);
          alert('因子 IC 分析失败: ' + e.message);
        } finally {
          factorIcLoading.value = false;
        }
      }

      async function runFactorLayer() {
        factorLayerLoading.value = true;
        try {
          const res = await withAuth('/api/strategies/factors/layer', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sid: activeStrategyId.value || 'multi_factor',
              factor_key: factorKey.value,
              params: paramValues.value || {},
            }),
          }).then(function (r) { return r.json(); });
          if (res && res.layers) {
            factorLayerResult.value = res;
          } else {
            alert('分层回测: ' + (res.message || '无数据'));
          }
        } catch (e) {
          console.error('[research] 分层回测失败:', e);
          alert('分层回测失败: ' + e.message);
        } finally {
          factorLayerLoading.value = false;
        }
      }

      return {
        ...state,
        marketReviews, marketReviewLoading, marketReviewError,
        selectedReviewDate, marketReviewDetail, marketReviewDetailLoading, marketReviewDetailError,
        loadMarketReviews, openMarketReview, backToMarketReviewList, loadMarketReviewDetail,
        marketReviewChgClass, marketReviewChgText, marketReviewSrcEntries,
        scanPool, scanLoading, scanError, scanResult,
        eventScope, eventsLoading, eventsData,
        loadScan, loadEvents, scanGroups, eventGroups,
        strategies, strategiesLoading, strategiesError,
        activeStrategyId, activeStrategy, paramValues,
        strategyRunning, ptradeCode, strategyRuns,
        loadStrategies, onStrategyChange, runActiveStrategy,
        exportActivePtradeCode, copyPtradeCode,
        profiles, profileSelect, profileName,
        loadProfiles, saveProfile, applyProfile, deleteProfile,
        govEnabled, govSchedule, govRunning, lastHoldings,
        loadGov, updateGov, runOnceActive, openLastHoldings, cloneStrategy,
        factorKey, factorIcLoading, factorLayerLoading,
        factorIcReport, factorLayerResult, factorOptions,
        runFactorIc, runFactorLayer,
        tagClass, formatPrice, chgClass, chgText,
      };
    },
  };
})();
