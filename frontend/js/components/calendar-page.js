// quant-calendar: CalendarPage 组件 (v3.6.0-T6 / FR-3.6.2)
// 量化日历页: 单根div, 内部两个 template 分支 (视图 + 股票池管理)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.CalendarPage = {
    name: 'qc-calendar-page',
    template: `
                <div v-if="currentPage === 'calendar'" key="calendar" data-cal-root @touchstart="onCalTouchStart" @touchend="onCalTouchEnd">

                    <!-- v3.17.8 (FR-3.17.8): 下拉刷新指示器（页面顶部下拉时显示） -->
                    <div class="pull-refresh-indicator" :class="{'is-active': pullRefreshing}">
                        <span class="pull-refresh-spinner"></span>
                        <span>{{ t('common.refreshing') }}</span>
                    </div>

                    <!-- 日/周/月/年视图 -->
                    <template v-if="currentSubPage !== 'pool'">
                        <!-- 快捷导航按钮 -->
                        <div class="cal-nav flex-c-gap-12-mb16-wrap">
                            <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« {{ t('calendar.prev') }}{{ viewUnit }}</el-button>
                            <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">{{ t('calendar.next') }}{{ viewUnit }} »</el-button>
                        </div>

                        <div class="card">
                            <div class="card-title">💎 {{ t('calendar.poolTitle') }}</div>
                            <!-- V4.9.4: 对比基准/沿用持仓提示(来自 /api/view note) -->
                            <div v-if="state.viewNote" class="cal-view-note" role="status">{{ state.viewNote }}</div>
                            
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📋 {{ t('calendar.all') }} <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🆕 {{ t('calendar.newPool') }} <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📌 {{ t('calendar.currentHold') }} <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📤 {{ t('calendar.outPool') }} <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <div class="search-box">
                                <el-input class="w-100" v-model="searchKeyword" :placeholder="t('common.searchPlaceholder')" clearable/>
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                                <qc-virtual-list class="h-calc-250" :items="stockPool" :row-height="78">
                                    <template #default="{ item, index }">
                                    <div class="consensus-item mb-0" :data-copy-code="item.code" @click="showStockDetail(item.code)" tabindex="0" role="button" :aria-label="t('common.view') + ' ' + item.name + ' ' + item.code" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="consensus-badge">{{ index + 1 }}</div>
                                        <div class="consensus-info">
                                            <div class="consensus-code">
                                                {{ item.code }}
                                                <span v-if="item.status === 'new'" class="status-badge status-new">{{ t('calendar.newPool') }}</span>
                                                <span v-else-if="item.status === 'out'" class="status-badge status-out">{{ t('calendar.outPool') }}</span>
                                            </div>
                                            <div class="consensus-name">{{ item.name }} <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" :title="watchlistCodes.has(item.code)?t('calendar.unwatch'):t('calendar.watch')" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" :title="t('calendar.aiEvaluated')">🤖</span><span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" :title="t('calendar.klineLoaded')">📈</span></div>
                                        </div>
                                        <div class="consensus-tags">
                                            <span v-for="s in item.strategies.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                        </div>
                                        <!-- v3.7.11: AI入池信号解读（固定行高内单行省略） -->
                                        <div class="cal-subtitle-ellipsis" v-if="poolSignals[item.code]">🤖 {{ poolSignals[item.code] }}</div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                        </div>
                    </template>

                    <!-- 股票池管理视图 -->
                    <template v-else>
                        <div class="card">
                            <div class="card-title">💎 {{ t('calendar.poolManage') }}</div>
                            <div class="flex-gap-12-mb16-wrap">
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl">{{ statusCounts.all }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.totalStocks') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-success">{{ statusCounts.newCount }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.newPool') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-primary">{{ statusCounts.current }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.currentHold') }}</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-danger">{{ statusCounts.out }}</div>
                                    <div class="stat-label text-sm">{{ t('calendar.outPool') }}</div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-title">📋 {{ t('calendar.strategyDist') }}</div>
                            <qc-state-panel v-if="strategyDistribution.length === 0" type="empty" :title="t('common.empty')"></qc-state-panel>
                            <div v-else>
                                <div class="cal-note-box" v-for="item in strategyDistribution" :key="item.strategy">
                                    <div class="flex-c-gap-8-mb8">
                                        <span class="text-base-semibold">{{ item.strategy }}</span>
                                        <span class="cal-count-badge">{{ item.count }}</span>
                                    </div>
                                    <div class="flex-wrap-gap-6">
                                        <template v-for="(stock, si) in item.names" :key="stock.code">
                                            <span class="inline-tag" v-if="si < 5 || expandedStrategies[item.strategy]" :title="stock.code + ' ' + stock.name">
                                                <span class="text-semibold-primary">{{ stock.code }}</span>
                                                <span class="color-tertiary">{{ stock.name }}</span>
                                                <span class="gold-link" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?t('calendar.unwatch'):t('calendar.watch')">{{ watchlistCodes.has(stock.code) ? '⭐' : '☆' }}</span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" :title="t('calendar.aiEvaluated')">🤖</span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" :title="t('calendar.klineLoaded')">📈</span>
                                            </span>
                                        </template>
                                        <span class="text-xs-tag-tertiary" v-if="item.names.length> 5 && !expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="false" @click="expandedStrategies[item.strategy] = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            +{{ item.names.length - 5 }}{{ t('common.unitStock') }} {{ t('calendar.expand') }} ▾
                                        </span>
                                        <span class="text-xs-tag-primary" v-if="item.names.length> 5 && expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="true" @click="expandedStrategies[item.strategy] = false" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            {{ t('calendar.collapse') }} ▴
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>

                </div>`,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // v3.11 (FR-3.11.5): 日历页手势翻日期（水平滑动切上一/下一交易日）
      // 仅移动端；纵向滚动/点击忽略；消费手势后 stopPropagation 避免触发上层 main-content 的翻页
      // v3.17.8 (FR-3.17.8): 叠加下拉刷新 — 页面顶部下拉超过阈值触发 refreshCalendarData
      const { ref } = Vue;
      const calTouchX = ref(0);
      const calTouchY = ref(0);
      const pullRefreshing = ref(false);
      let _pullTimer = null;
      function onCalTouchStart(e) {
        const t = e.touches && e.touches[0];
        if (!t) return;
        calTouchX.value = t.clientX;
        calTouchY.value = t.clientY;
      }
      async function doPullRefresh() {
        if (pullRefreshing.value) return;
        pullRefreshing.value = true;
        try {
          await state.refreshCalendarData();
        } catch (err) {
          // 数据源不可达时优雅降级（后台已 catch），指示器照常收尾
        }
        if (_pullTimer) clearTimeout(_pullTimer);
        _pullTimer = setTimeout(() => { pullRefreshing.value = false; }, 500);
      }
      function onCalTouchEnd(e) {
        if (!(window.innerWidth <= 768)) return;
        const t = e.changedTouches && e.changedTouches[0];
        if (!t) return;
        // 下拉刷新: 页面处于顶部 + 纵向下拉超过阈值（优先于横向翻日期判定）
        const G = (window.__quantModules && window.__quantModules.gestures) || {};
        const pullOk = (typeof G.judgePullToRefresh === 'function')
          ? G.judgePullToRefresh(calTouchY.value, t.clientY)
          : (t.clientY - calTouchY.value >= 60);
        if (pullOk && (window.scrollY || 0) <= 0) {
          e.stopPropagation();
          doPullRefresh();
          return;
        }
        if (state.currentSubPage.value === 'pool') return;
        const dx = t.clientX - calTouchX.value;
        const dy = t.clientY - calTouchY.value;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          state.navigateDate(dx < 0 ? 1 : -1);
          e.stopPropagation();
        }
      }
      return { ...state, pullRefreshing, onCalTouchStart, onCalTouchEnd };
    },
  };
})();
