// quant-calendar: CalendarPage 组件 (v3.6.0-T6 / FR-3.6.2)
// 量化日历页: 单根div, 内部两个 template 分支 (视图 + 股票池管理)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.CalendarPage = {
    name: 'qc-calendar-page',
    template: `
                <div v-if="currentPage === 'calendar'" key="calendar" @touchstart="onCalTouchStart" @touchend="onCalTouchEnd">

                    <!-- 日/周/月/年视图 -->
                    <template v-if="currentSubPage !== 'pool'">
                        <!-- 快捷导航按钮 -->
                        <div class="cal-nav flex-c-gap-12-mb16-wrap">
                            <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« 上一{{ viewUnit }}</el-button>
                            <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">下一{{ viewUnit }} »</el-button>
                        </div>

                        <div class="card">
                            <div class="card-title">💎 策略共识度股票池</div>
                            
                            <!-- 状态筛选 -->
                            <div class="status-tabs" role="tablist">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'all'" @click="statusFilter = 'all'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📋 全部 <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'new'" @click="statusFilter = 'new'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">🆕 新入池 <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'current'" @click="statusFilter = 'current'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📌 当前持仓 <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" tabindex="0" role="tab" :aria-selected="statusFilter === 'out'" @click="statusFilter = 'out'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">📤 已出池 <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <div class="search-box">
                                <el-input class="w-100" v-model="searchKeyword" placeholder="🔍 搜索股票代码或名称..." clearable/>
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" title="暂无数据"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                                <qc-virtual-list class="h-calc-250" :items="stockPool" :row-height="78">
                                    <template #default="{ item, index }">
                                    <div class="consensus-item mb-0" @click="showStockDetail(item.code)" tabindex="0" role="button" :aria-label="'查看 ' + item.name + ' ' + item.code" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                        <div class="consensus-badge">{{ index + 1 }}</div>
                                        <div class="consensus-info">
                                            <div class="consensus-code">
                                                {{ item.code }}
                                                <span v-if="item.status === 'new'" class="status-badge status-new">新入池</span>
                                                <span v-else-if="item.status === 'out'" class="status-badge status-out">已出池</span>
                                            </div>
                                            <div class="consensus-name">{{ item.name }} <span class="gold-link" @click.stop="toggleWatchlist(item.code, item.name)" tabindex="0" role="button" :aria-label="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span class="text-sm-ml2" v-if="evaluatedCodes.has(item.code)" title="已AI评估">🤖</span><span class="text-sm-ml2" v-if="klineLoadedCodes.has(item.code)" title="已加载K线">📈</span></div>
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
                            <div class="card-title">💎 股票池管理</div>
                            <div class="flex-gap-12-mb16-wrap">
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl">{{ statusCounts.all }}</div>
                                    <div class="stat-label text-sm">总股票数</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-success">{{ statusCounts.newCount }}</div>
                                    <div class="stat-label text-sm">新入池</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-primary">{{ statusCounts.current }}</div>
                                    <div class="stat-label text-sm">当前持仓</div>
                                </div>
                                <div class="stat-card flex-1-min120-pad14">
                                    <div class="stat-value text-xl-danger">{{ statusCounts.out }}</div>
                                    <div class="stat-label text-sm">已出池</div>
                                </div>
                            </div>
                        </div>

                        <div class="card mt-4">
                            <div class="card-title">📋 各策略股票分布</div>
                            <qc-state-panel v-if="strategyDistribution.length === 0" type="empty" title="暂无数据"></qc-state-panel>
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
                                                <span class="gold-link" @click.stop="toggleWatchlist(stock.code, stock.name)" :title="watchlistCodes.has(stock.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(stock.code) ? '⭐' : '☆' }}</span><span class="text-xs-ml2" v-if="evaluatedCodes.has(stock.code)" title="已AI评估">🤖</span><span class="text-xs-ml2" v-if="klineLoadedCodes.has(stock.code)" title="已加载K线">📈</span>
                                            </span>
                                        </template>
                                        <span class="text-xs-tag-tertiary" v-if="item.names.length> 5 && !expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="false" @click="expandedStrategies[item.strategy] = true" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            +{{ item.names.length - 5 }}只 展开 ▾
                                        </span>
                                        <span class="text-xs-tag-primary" v-if="item.names.length> 5 && expandedStrategies[item.strategy]" tabindex="0" role="button" :aria-expanded="true" @click="expandedStrategies[item.strategy] = false" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)">
                                            收起 ▴
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
      const { ref } = Vue;
      const calTouchX = ref(0);
      const calTouchY = ref(0);
      function onCalTouchStart(e) {
        const t = e.touches && e.touches[0];
        if (!t) return;
        calTouchX.value = t.clientX;
        calTouchY.value = t.clientY;
      }
      function onCalTouchEnd(e) {
        if (!(window.innerWidth <= 768)) return;
        if (state.currentSubPage.value === 'pool') return;
        const t = e.changedTouches && e.changedTouches[0];
        if (!t) return;
        const dx = t.clientX - calTouchX.value;
        const dy = t.clientY - calTouchY.value;
        if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.2) {
          state.navigateDate(dx < 0 ? 1 : -1);
          e.stopPropagation();
        }
      }
      return { ...state, onCalTouchStart, onCalTouchEnd };
    },
  };
})();
