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
                        <div class="cal-nav" style="display: flex; align-items: center; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                            <el-button size="small" @click="navigateDate(-1)" :disabled="!canNavPrev">« 上一{{ viewUnit }}</el-button>
                            <el-button size="small" @click="navigateDate(1)" :disabled="!canNavNext">下一{{ viewUnit }} »</el-button>
                        </div>

                        <div class="card">
                            <div class="card-title">💎 策略共识度股票池</div>
                            
                            <!-- 状态筛选 -->
                            <div class="status-tabs">
                                <div class="status-tab" :class="{active: statusFilter === 'all'}" @click="statusFilter = 'all'">📋 全部 <span class="count">{{ statusCounts.all }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'new'}" @click="statusFilter = 'new'">🆕 新入池 <span class="count">{{ statusCounts.newCount }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'current'}" @click="statusFilter = 'current'">📌 当前持仓 <span class="count">{{ statusCounts.current }}</span></div>
                                <div class="status-tab" :class="{active: statusFilter === 'out'}" @click="statusFilter = 'out'">📤 已出池 <span class="count">{{ statusCounts.out }}</span></div>
                            </div>

                            <div class="search-box">
                                <el-input v-model="searchKeyword" placeholder="🔍 搜索股票代码或名称..." clearable style="width: 100%;" />
                            </div>

                            <!-- v3.11 (FR-3.11.5): 统一四态组件（加载/空态） -->
                            <qc-state-panel v-if="loading" type="loading"></qc-state-panel>

                            <qc-state-panel v-else-if="stockPool.length === 0" type="empty" title="暂无数据"></qc-state-panel>
                            
                            <div v-else class="stock-list">
                                <!-- v3.11 (FR-3.11.3): 虚拟滚动，仅渲染可视区行 -->
                                <qc-virtual-list :items="stockPool" :row-height="78" style="height: calc(100vh - 250px);">
                                    <template #default="{ item, index }">
                                    <div class="consensus-item" style="margin-bottom: 0;" @click="showStockDetail(item.code)">
                                        <div class="consensus-badge">{{ index + 1 }}</div>
                                        <div class="consensus-info">
                                            <div class="consensus-code">
                                                {{ item.code }}
                                                <span v-if="item.status === 'new'" class="status-badge status-new">新入池</span>
                                                <span v-else-if="item.status === 'out'" class="status-badge status-out">已出池</span>
                                            </div>
                                            <div class="consensus-name">{{ item.name }} <span @click.stop="toggleWatchlist(item.code, item.name)" style="cursor:pointer;color:var(--color-gold);font-size: var(--font-base);" :title="watchlistCodes.has(item.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(item.code) ? '⭐' : '☆' }}</span><span v-if="evaluatedCodes.has(item.code)" title="已AI评估" style="font-size: var(--font-sm);margin-left:2px;">🤖</span><span v-if="klineLoadedCodes.has(item.code)" title="已加载K线" style="font-size: var(--font-sm);margin-left:2px;">📈</span></div>
                                        </div>
                                        <div class="consensus-tags">
                                            <span v-for="s in item.strategies.slice(0, 2)" :key="s" class="strategy-tag">{{ s }}</span>
                                        </div>
                                        <!-- v3.7.11: AI入池信号解读（固定行高内单行省略） -->
                                        <div v-if="poolSignals[item.code]" style="font-size:var(--font-xs);color:var(--text-tertiary);margin-top:2px;font-style:italic;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;">🤖 {{ poolSignals[item.code] }}</div>
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
                            <div style="display: flex; gap: 12px; margin-bottom: 16px; flex-wrap: wrap;">
                                <div class="stat-card" style="flex: 1; min-width: 120px; padding: 14px;">
                                    <div class="stat-value" style="font-size: var(--font-xl);">{{ statusCounts.all }}</div>
                                    <div class="stat-label" style="font-size: var(--font-sm);">总股票数</div>
                                </div>
                                <div class="stat-card" style="flex: 1; min-width: 120px; padding: 14px;">
                                    <div class="stat-value" style="font-size: var(--font-xl); color: var(--el-success);">{{ statusCounts.newCount }}</div>
                                    <div class="stat-label" style="font-size: var(--font-sm);">新入池</div>
                                </div>
                                <div class="stat-card" style="flex: 1; min-width: 120px; padding: 14px;">
                                    <div class="stat-value" style="font-size: var(--font-xl); color: var(--primary-color);">{{ statusCounts.current }}</div>
                                    <div class="stat-label" style="font-size: var(--font-sm);">当前持仓</div>
                                </div>
                                <div class="stat-card" style="flex: 1; min-width: 120px; padding: 14px;">
                                    <div class="stat-value" style="font-size: var(--font-xl); color: var(--color-danger);">{{ statusCounts.out }}</div>
                                    <div class="stat-label" style="font-size: var(--font-sm);">已出池</div>
                                </div>
                            </div>
                        </div>

                        <div class="card" style="margin-top: 16px;">
                            <div class="card-title">📋 各策略股票分布</div>
                            <qc-state-panel v-if="strategyDistribution.length === 0" type="empty" title="暂无数据"></qc-state-panel>
                            <div v-else>
                                <div v-for="item in strategyDistribution" :key="item.strategy" style="margin-bottom: 12px; padding: 10px 12px; background: var(--bg-card-header); border-radius: 10px; border: 1px solid var(--border-light);">
                                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
                                        <span style="font-weight: var(--font-semibold); font-size: var(--font-base);">{{ item.strategy }}</span>
                                        <span style="background: var(--primary-color); color: white; border-radius: 12px; padding: 1px 8px; font-size: var(--font-xs); font-weight: var(--font-semibold); min-width: 20px; text-align: center;">{{ item.count }}</span>
                                    </div>
                                    <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                        <template v-for="(stock, si) in item.names" :key="stock.code">
                                            <span v-if="si < 5 || expandedStrategies[item.strategy]" 
                                                style="display: inline-flex; align-items: center; gap: 4px; padding: 3px 8px; background: var(--bg-input); border-radius: 6px; font-size: var(--font-sm); line-height: 1.4; border: 1px solid var(--border-light); cursor: default;"
                                                :title="stock.code + ' ' + stock.name">
                                                <span style="font-weight: var(--font-semibold); color: var(--text-primary);">{{ stock.code }}</span>
                                                <span style="color: var(--text-tertiary);">{{ stock.name }}</span>
                                                <span @click.stop="toggleWatchlist(stock.code, stock.name)" style="cursor:pointer;color:var(--color-gold);font-size:var(--font-base);" :title="watchlistCodes.has(stock.code)?'取消收藏':'加入收藏'">{{ watchlistCodes.has(stock.code) ? '⭐' : '☆' }}</span><span v-if="evaluatedCodes.has(stock.code)" title="已AI评估" style="font-size:var(--font-xs);margin-left:2px;">🤖</span><span v-if="klineLoadedCodes.has(stock.code)" title="已加载K线" style="font-size:var(--font-xs);margin-left:2px;">📈</span>
                                            </span>
                                        </template>
                                        <span v-if="item.names.length > 5 && !expandedStrategies[item.strategy]" 
                                            style="display: inline-flex; align-items: center; padding: 3px 8px; color: var(--text-tertiary); font-size: var(--font-xs); cursor: pointer;"
                                            @click="expandedStrategies[item.strategy] = true">
                                            +{{ item.names.length - 5 }}只 展开 ▾
                                        </span>
                                        <span v-if="item.names.length > 5 && expandedStrategies[item.strategy]"
                                            style="display: inline-flex; align-items: center; padding: 3px 8px; color: var(--primary-color); font-size: var(--font-xs); cursor: pointer;"
                                            @click="expandedStrategies[item.strategy] = false">
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
