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
                        <div class="card-title">🔬 量化研究</div>
                        <qc-state-panel type="empty" icon="🔬" title="敬请期待" desc="量化研究功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-write'" class="card">
                        <div class="card-title">⚙️ 策略编写</div>
                        <qc-state-panel type="empty" icon="🛠️" title="敬请期待" desc="策略编写功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest'" class="card">
                        <div class="card-title">🔬 策略回测</div>
                        <!-- v3.2.0-T21: 回测参数 -->
                        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 16px; align-items: center;">
                            <el-select v-model="backtestStrategy" size="small" style="width: 180px;" placeholder="选择策略">
                                <el-option v-for="s in backtestStrategies" :key="s.id" :label="s.name" :value="s.id" />
                            </el-select>
                            <el-date-picker v-model="backtestRange" type="daterange" size="small"
                                range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
                                style="width: 260px;" value-format="YYYY-MM-DD" />
                            <el-input-number v-model="backtestCapital" size="small" :min="10000" :step="50000"
                                style="width: 140px;" />
                            <el-button type="primary" size="small" @click="runBacktest" :loading="backtestRunning">▶ 运行回测</el-button>
                        </div>
                        <!-- 回测结果 -->
                        <template v-if="backtestResult">
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 16px;">
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.total_return_pct }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.annual_return_pct }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.max_drawdown_pct }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card" style="padding: 12px;">
                                    <div class="stat-value" style="font-size: var(--font-lg);">{{ backtestResult.sharpe_ratio }}</div>
                                    <div class="stat-label">夏普比率</div>
                                </div>
                            </div>
                            <div id="backtestEquityChart" style="width: 100%; height: 320px;"></div>
                            <div style="color: var(--text-tertiary); font-size: var(--font-sm); margin-top: 8px;">
                                {{ backtestResult.message || '' }}
                            </div>
                        </template>
                        <div v-else class="empty-state" style="padding: 30px 0;">选择策略和日期范围后点击"运行回测"</div>
                    </div>
                    <div v-else-if="currentSubPage === 'backtest-history'" class="card">
                        <div class="card-title">📋 回测记录</div>
                        <qc-state-panel type="empty" icon="📝" title="敬请期待" desc="回测记录功能正在建设中，敬请关注"></qc-state-panel>
                    </div>
                    <!-- v3.17.2 FR-3.17.2 市场复盘代码起点 -->
                    <div v-else-if="currentSubPage === 'market-review'" class="card market-review-card">
                        <div class="card-title">市场复盘</div>

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
                            <el-select v-model="scanPool" size="small" class="scan-pool-select" aria-label="扫描范围">
                                <el-option label="全市场" value="all"></el-option>
                                <el-option label="策略池" value="strategies"></el-option>
                                <el-option label="我的自选" value="watchlist"></el-option>
                            </el-select>
                            <el-button type="primary" size="small" @click="loadScan" :loading="scanLoading">刷新扫描</el-button>
                        </div>

                        <qc-state-panel v-if="scanLoading" type="loading"></qc-state-panel>
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
                            desc="当前扫描范围暂无符合条件的异动个股"></qc-state-panel>

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
      const scanPool = ref('all');
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
          const url = '/api/market/scan?pool=' + encodeURIComponent(scanPool.value);
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
        },
        { immediate: true }
      );

      return {
        ...state,
        marketReviews, marketReviewLoading, marketReviewError,
        selectedReviewDate, marketReviewDetail, marketReviewDetailLoading, marketReviewDetailError,
        loadMarketReviews, openMarketReview, backToMarketReviewList, loadMarketReviewDetail,
        marketReviewChgClass, marketReviewChgText, marketReviewSrcEntries,
        scanPool, scanLoading, scanError, scanResult,
        eventScope, eventsLoading, eventsData,
        loadScan, loadEvents, scanGroups, eventGroups,
        tagClass, formatPrice, chgClass, chgText,
      };
    },
  };
})();
