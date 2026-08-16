// quant-calendar: AiPage 组件 (v3.6.0-T7 / FR-3.6.2)
// AI评估页: 单根div, 4子页 v-if 链 (overview/history/chat_history/watchlist)
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.AiPage = {
    name: 'qc-ai-page',
    template: `
                <div v-if="currentPage === 'ai'" key="ai">

                    <!-- overview: 概览统计 + 快捷操作 -->
                    <div v-if="currentSubPage === 'overview'">
                        <div style="display: flex; justify-content: flex-end; gap: 8px; margin-bottom: 16px;">
                            <el-button size="small" @click="showBatchEvaluate = true">
                                批量评估
                            </el-button>
                            <el-button size="small" @click="showAutoEvaluateSettings = true">
                                <span style="margin-right: 4px;">⚙️</span>自动评估
                            </el-button>
                        </div>

                        <!-- 统计卡片 -->
                        <div class="dashboard-grid" style="margin-bottom: 20px;">
                            <div class="stat-card" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="历史评估" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" style="cursor:pointer; border-left: 3px solid var(--color-primary);">
                                <div class="stat-icon" style="background: var(--badge-info-bg); color: var(--color-primary);">📋</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistory.length }}</div>
                                    <div class="stat-label">总评估数</div>
                                </div>
                            </div>
                            <div class="stat-card" @click="currentSubPage = 'history'" tabindex="0" role="button" aria-label="覆盖股票" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" style="cursor:pointer; border-left: 3px solid var(--el-success);">
                                <div class="stat-icon" style="background: var(--badge-success-bg); color: var(--el-success);">📈</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiHistoryStockCount }}</div>
                                    <div class="stat-label">覆盖股票</div>
                                </div>
                            </div>
                            <div class="stat-card" @click="currentSubPage = 'watchlist'" tabindex="0" role="button" aria-label="自选股" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" style="cursor:pointer; border-left: 3px solid var(--color-gold);">
                                <div class="stat-icon" style="background: var(--badge-gold-bg); color: var(--color-gold);">⭐</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ watchlist.length }}</div>
                                    <div class="stat-label">自选股</div>
                                </div>
                            </div>
                            <!-- v3.17.8 (FR-3.17.5): 组合持仓入口 -->
                            <div class="stat-card" @click="currentSubPage = 'portfolio'" tabindex="0" role="button" aria-label="组合持仓" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" style="cursor:pointer; border-left: 3px solid var(--color-gold);">
                                <div class="stat-icon" style="background: var(--badge-gold-bg); color: var(--color-gold);">组</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ positions.length }}</div>
                                    <div class="stat-label">组合持仓</div>
                                </div>
                            </div>
                            <div class="stat-card" @click="showAutoEvaluateSettings = true" tabindex="0" role="button" aria-label="自动评估设置" @keydown.enter.prevent="keyClick($event)" @keydown.space.prevent="keyClick($event)" style="cursor:pointer; border-left: 3px solid var(--el-warning);" :style="{opacity: autoEvaluateConfig.enabled ? 1 : 0.6}">
                                <div class="stat-icon" :style="{background: autoEvaluateConfig.enabled ? 'var(--badge-gold-bg)' : 'var(--bg-hover)', color: 'var(--el-warning)'}">
                                    {{ autoEvaluateConfig.enabled ? '▶' : '⏸' }}
                                </div>
                                <div class="stat-content">
                                    <div class="stat-value" style="font-size:var(--font-md);">{{ autoEvaluateConfig.enabled ? '运行中' : '已暂停' }}</div>
                                    <div class="stat-label">自动评估</div>
                                </div>
                            </div>
                            <!-- v3.5.0-T6: AI 用量统计 -->
                            <div class="stat-card" style="border-left: 3px solid var(--el-info);" title="AI 模型调用统计">
                                <div class="stat-icon" style="background: var(--bg-hover); color: var(--el-info);">⚡</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ aiUsage.total_calls || 0 }}</div>
                                    <div class="stat-label">AI 调用量</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.5.0-T5: 策略推荐 -->
                        <div class="card" style="margin-bottom: 16px;" v-if="strategyRecommendations.length">
                            <div class="card-title">💡 策略推荐 <span style="font-size: var(--font-sm); color: var(--text-tertiary); font-weight: normal;">基于你的 {{ strategyRecommendations.length > 0 ? watchlist.length : 0 }} 只自选股风格</span></div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 12px;">
                                <div v-for="r in strategyRecommendations" :key="r.strategy_id" style="background: var(--bg-card-header); border-radius: 10px; padding: 14px;">
                                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
                                        <span style="font-weight: var(--font-semibold);">{{ r.name }}</span>
                                        <span style="font-size: var(--font-sm); color: var(--primary-color); font-weight: var(--font-semibold);">{{ r.score }}%</span>
                                    </div>
                                    <div style="font-size: var(--font-sm); color: var(--text-secondary); margin-bottom: 8px;">{{ r.desc }}</div>
                                    <div style="display: flex; gap: 6px; flex-wrap: wrap;">
                                        <span v-for="t in r.tags" :key="t" style="font-size: var(--font-xs); background: var(--bg-tertiary); padding: 2px 8px; border-radius: 10px; color: var(--text-secondary);">{{ t }}</span>
                                    </div>
                                    <div style="font-size: var(--font-xs); color: var(--text-tertiary); margin-top: 8px;">{{ r.reason }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- 最近评估 -->
                        <div class="card" style="margin-bottom: 16px;" v-if="aiHistory.length > 0">
                            <div class="card-title" style="display:flex;justify-content:space-between;align-items:center;">
                                <span>🕒 最近评估</span>
                                <el-button size="small" text @click="currentSubPage = 'history'">查看全部 →</el-button>
                            </div>
                            <div style="display:flex;gap:12px;overflow-x:auto;padding-bottom:4px;">
                                <div v-for="item in aiHistory.slice(0,3)" :key="item.id" @click="viewAiResult(item)" style="flex:0 0 220px;background:var(--bg-card-header);border-radius:10px;padding:14px;cursor:pointer;border:1px solid var(--border-light);transition:all 0.2s;" class="hover-lift">
                                    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
                                        <span style="font-weight:var(--font-semibold);font-size:var(--font-md);">{{ item.stock_code }}</span>
                                        <span :style="{color:item.result.level_color,fontWeight:'var(--font-bold)',fontSize:'18px'}">{{ item.result.total_score }}</span>
                                    </div>
                                    <div style="font-size:var(--font-sm);color:var(--text-secondary);margin-bottom:6px;">{{ item.stock_name }}</div>
                                    <div style="display:flex;justify-content:space-between;align-items:center;">
                                        <span :style="{background:item.result.level_color+'20',color:item.result.level_color,padding:'2px 8px',borderRadius:'10px',fontSize:'var(--font-xs)'}">{{ item.result.level }}</span>
                                        <span style="font-size:var(--font-xs);color:var(--text-tertiary);">{{ (item.evaluate_time||'').split('T')[0] }}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 评分分布 + 快捷操作 双栏 -->
                        <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:16px;">
                            <!-- 评分分布 -->
                            <div class="card" v-if="aiHistory.length > 0">
                                <div class="card-title">📊 评分分布</div>
                                <div v-for="bar in scoreDistribution" :key="bar.label" style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
                                    <span style="font-size:var(--font-xs);color:var(--text-secondary);width:48px;text-align:right;flex-shrink:0;">{{ bar.label }}</span>
                                    <div style="flex:1;height:18px;background:var(--border-light);border-radius:9px;overflow:hidden;">
                                        <div :style="{width:bar.pct+'%',height:'100%',background:bar.color,borderRadius:'9px',transition:'width 0.6s ease',minWidth:bar.count>0?'4px':'0'}"></div>
                                    </div>
                                    <span style="font-size:var(--font-xs);color:var(--text-tertiary);width:28px;flex-shrink:0;">{{ bar.count }}</span>
                                </div>
                            </div>
                            <!-- 快捷操作 -->
                            <div class="card">
                                <div class="card-title">🔧 快捷操作</div>
                                <div style="display:flex;flex-direction:column;gap:10px;">
                                    <div v-if="watchlist.length > 0" style="font-size:var(--font-sm);color:var(--text-secondary);margin-bottom:4px;">从自选中选择股票快速评估：</div>
                                    <el-select v-if="watchlist.length > 0" v-model="quickEvalStock" placeholder="选择自选股..." size="small" style="width:100%;" clearable>
                                        <el-option v-for="s in watchlist" :key="s.code" :label="s.code + ' ' + s.name" :value="s.code" />
                                    </el-select>
                                    <div v-if="watchlist.length > 0" style="display:flex;gap:8px;align-items:center;">
                                        <span style="font-size:var(--font-xs);color:var(--text-tertiary);white-space:nowrap;">策略:</span>
                                        <el-radio-group v-model="evalStrategy" size="small">
                                            <el-radio-button value="default">综合</el-radio-button>
                                            <el-radio-button value="trend">趋势</el-radio-button>
                                            <el-radio-button value="value">价值</el-radio-button>
                                            <el-radio-button value="short_term">短线</el-radio-button>
                                        </el-radio-group>
                                    </div>
                                    <el-button v-if="watchlist.length > 0" type="primary" size="small" @click="quickEvaluate" :disabled="!quickEvalStock" :loading="aiLoading" style="align-self:flex-start;">🤖 快速评估</el-button>
                                    <div v-if="watchlist.length === 0" style="text-align:center;padding:20px 0;color:var(--text-tertiary);">
                                        <div style="font-size: var(--font-3xl);margin-bottom:8px;">⭐</div>
                                        <div style="font-size:var(--font-sm);">还没有自选股</div>
                                        <el-button size="small" @click="currentSubPage = 'watchlist'" style="margin-top:8px;">去添加自选 →</el-button>
                                    </div>
                                    <div style="border-top:1px solid var(--border-light);margin-top:4px;padding-top:10px;">
                                        <el-button size="small" @click="showBatchEvaluate = true" style="width:100%;">批量评估（输入代码）</el-button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 空状态：无任何评估记录 -->
                        <div v-if="aiHistory.length === 0" class="card" style="text-align:center;padding:40px 20px;">
                            <div style="font-size:64px;margin-bottom:16px;">🤖</div>
                            <div style="font-size:var(--font-lg);font-weight:var(--font-semibold);color:var(--text-primary);margin-bottom:8px;">智能评估</div>
                            <div style="font-size:var(--font-md);color:var(--text-secondary);margin-bottom:20px;">多模型串行评估，技术指标自动注入</div>
                            <div style="display:flex;gap:12px;justify-content:center;">
                                <el-button type="primary" @click="currentSubPage = 'watchlist'">⭐ 管理自选股</el-button>
                                <el-button @click="showBatchEvaluate = true">批量评估</el-button>
                            </div>
                        </div>
                    </div>

                    <!-- history: 评估历史记录 -->
                    <div v-else-if="currentSubPage === 'history'">
                        <!-- v3.17.6 (FR-3.17.6): 评估命中率（决策复盘） -->
                        <div class="card eval-track-card">
                            <div class="card-title">评估命中率 <span class="eval-track-title-hint">对照评估后 5/10/20 个交易日实际涨跌</span></div>
                            <div v-if="trackLoading" class="eval-track-state">正在计算命中率统计中...</div>
                            <div v-else-if="!trackData || !trackData.samples || trackData.samples.length === 0" class="eval-track-state">暂无足够评估样本</div>
                            <template v-else>
                                <div class="eval-track-overall">
                                    <div v-for="w in trackWindows" :key="w.key" class="eval-track-stat">
                                        <div class="eval-track-stat-value">{{ fmtTrackRate(trackData.overall[w.key]) }}</div>
                                        <div class="eval-track-stat-label">{{ w.label }}命中率（{{ trackData.overall[w.key].total }} 样本）</div>
                                    </div>
                                </div>
                                <div class="eval-track-note">{{ trackData.note }}</div>
                                <div class="eval-track-grid">
                                    <div>
                                        <div class="eval-track-subtitle">分模型</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>模型</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_model" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <div>
                                        <div class="eval-track-subtitle">分评级</div>
                                        <table class="eval-track-table">
                                            <thead>
                                                <tr><th>评级</th><th>5日</th><th>10日</th><th>20日</th><th>样本</th></tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(st, name) in trackData.by_level" :key="name">
                                                    <td>{{ name }}</td>
                                                    <td>{{ fmtTrackRate(st.n5) }}</td>
                                                    <td>{{ fmtTrackRate(st.n10) }}</td>
                                                    <td>{{ fmtTrackRate(st.n20) }}</td>
                                                    <td>{{ st.n5.total }}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 批量操作工具栏 -->
                        <div class="card" style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="color: var(--text-secondary);">
                                    <span v-if="selectedHistoryIds.length > 0">已选择 <strong style="color: var(--primary-color);">{{ selectedHistoryIds.length }}</strong> 条记录</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <el-button size="small" @click="selectAllHistory">{{ selectedHistoryIds.length === aiHistory.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="batchReevaluateHistory">🔄 再次评估</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="success" @click="batchAddToWatchlist">⭐ 加入自选</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" type="danger" @click="deleteSelectedHistory">🗑️ 批量删除</el-button>
                                    <el-button v-if="selectedHistoryIds.length > 0" size="small" @click="clearSelection">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">📋 评估历史记录 <span style="font-weight: normal; color: var(--text-tertiary); font-size: var(--font-sm); margin-left: 8px;">共 {{ Object.keys(groupedByDate).length }} 天 · {{ aiHistory.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="aiHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadAiHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="aiHistoryError" type="error" @retry="loadAiHistory"></qc-state-panel>
                        <div v-else-if="aiHistory.length === 0" class="empty-state">
                            <div style="font-size: 64px; margin-bottom: 20px;">🤖</div>
                            <div style="font-size: var(--font-md); font-weight: var(--font-medium); color: var(--text-primary);">暂无评估记录</div>
                            <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 8px;">
                                点击股票详情页的「智能评估」按钮开始分析股票
                            </div>
                        </div>

                        <!-- 视图切换 -->
                        <div style="display: flex; gap: 8px; margin-bottom: 12px;" v-if="aiHistory.length > 0">
                            <el-button size="small" @click="aiHistoryView = 'date'" :type="aiHistoryView === 'date' ? 'primary' : ''">📅 按日期</el-button>
                            <el-button size="small" @click="aiHistoryView = 'month'" :type="aiHistoryView === 'month' ? 'primary' : ''">📆 按月</el-button>
                            <el-button size="small" @click="aiHistoryView = 'stock'" :type="aiHistoryView === 'stock' ? 'primary' : ''">📈 按股票</el-button>
                        </div>

                        <!-- 按日期聚合展示 -->
                        <div v-if="aiHistoryView === 'date'" class="ai-history-list">
                            <template v-for="(records, date) in groupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <!-- 日期级复选框 -->
                                        <div @click.stop="toggleSelectDate(date)" class="history-checkbox" style="display: flex; align-items: center;">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div style="flex:1;" @click="toggleDateExpand(date)">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: var(--font-md); font-weight: var(--font-semibold);">📅 {{ date }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div @click="toggleDateExpand(date)" style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedDates.includes(date)" class="date-group-records" style="padding: 4px 0 4px 34px;">
                                        <!-- v3.16 (16.7): 内层虚拟滚动（分组较大时仅渲染可视区记录） -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list :items="records" :row-height="72" style="max-height: 420px;">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" :show-dims="true" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合展示 -->
                        <div v-else-if="aiHistoryView === 'month'" class="ai-history-list">
                            <template v-for="(records, month) in groupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectMonth(month)" class="history-checkbox" style="display: flex; align-items: center;">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div style="flex:1;" @click="toggleMonthExpand(month)">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: var(--font-md); font-weight: var(--font-semibold);">📆 {{ month }}</span>
                                                <span class="count-badge-sm">{{ records.length }}条评估</span>
                                            </div>
                                        </div>
                                        <div @click="toggleMonthExpand(month)" style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedMonths.includes(month)" class="date-group-records" style="padding: 4px 0 4px 34px;">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list :items="records" :row-height="72" style="max-height: 420px;">
                                            <template #default="{ item: record }">
                                            <qc-history-record :item="record" type="history" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合展示 -->
                        <div v-else class="ai-history-list">
                            <div v-for="(records, code) in aiHistoryByStock" :key="code" style="border: 1px solid var(--border-light); border-radius: 8px; margin-bottom: 8px;">
                                <div class="date-group-header">
                                        <!-- 股票级复选框 -->
                                        <div @click.stop="toggleSelectStock(code)" class="history-checkbox" style="display: flex; align-items: center;">
                                            <div class="checkbox-inner" :class="{'checked': records.every(r => selectedHistoryIds.includes(r.id))}" :style="records.some(r => selectedHistoryIds.includes(r.id)) && !records.every(r => selectedHistoryIds.includes(r.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ records.every(r => selectedHistoryIds.includes(r.id)) ? '✓' : (records.some(r => selectedHistoryIds.includes(r.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div style="flex:1; display: flex; align-items: center; gap: 8px; cursor: pointer;" @click="toggleStockExpand(code)">
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <strong>{{ code }}</strong>
                                            <span style="color: var(--text-tertiary);">{{ records[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ records.length }}次</span>
                                            <span :style="{color: records[0].result.level_color, fontSize: 'var(--font-sm)'}">最新{{ records[0].result.total_score }}分</span>
                                        </div>
                                    </div>
                                    <span style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div v-if="expandedStocks.includes(code)" style="padding: 4px 0 4px 12px;">
                                    <!-- v3.7.14: 评估历史趋势图 -->
                                    <div v-if="records.length > 1" :ref="el => registerTrendChart(el, code, records)" style="width:100%;height:200px;margin-bottom:8px;border:1px solid var(--border-light);border-radius:8px;"></div>
                                    <!-- v3.16 (16.7): 内层虚拟滚动（单股多次评估时仅渲染可视区） -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list :items="records" :row-height="72" style="max-height: 420px;">
                                        <template #default="{ item: record }">
                                    <qc-history-record :item="record" type="history" time-format="time"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    <!-- chat_history: 问股历史 (v2.4) -->
                    <div v-else-if="currentSubPage === 'chat_history'">
                        <!-- 批量操作工具栏 -->
                        <div class="card" style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="color: var(--text-secondary);">
                                    <span v-if="selectedChatIds.length > 0">已选择 <strong style="color: var(--primary-color);">{{ selectedChatIds.length }}</strong> 条对话</span>
                                    <span v-else>可选多条记录进行批量操作</span>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <el-button size="small" @click="selectAllChatSessions">{{ selectedChatIds.length === allChatSessionsFlat.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" type="danger" @click="deleteSelectedChatSessions">🗑️ 批量删除</el-button>
                                    <el-button v-if="selectedChatIds.length > 0" size="small" @click="selectedChatIds = []">取消选择</el-button>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-title">💬 AI 问股历史 <span style="font-weight: normal; color: var(--text-tertiary); font-size: var(--font-sm); margin-left: 8px;">共 {{ Object.keys(chatGroupedByDate).length }} 天 · {{ allChatSessionsFlat.length }} 条</span></div>
                        <!-- v3.16 (16.7): 统一加载/离线/错误态（可重试） -->
                        <qc-state-panel v-if="chatHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadChatHistory"></qc-state-panel>
                        <qc-state-panel v-else-if="chatHistoryError" type="error" @retry="loadChatHistory"></qc-state-panel>
                        <div v-else-if="allChatSessionsFlat.length === 0" class="empty-state">
                            <div style="font-size: 64px; margin-bottom: 20px;">💬</div>
                            <div style="font-size: var(--font-md); font-weight: var(--font-medium); color: var(--text-primary);">暂无问股记录</div>
                            <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 8px;">
                                在股票详情页点击「AI 问股」开始对话
                            </div>
                        </div>

                        <!-- 视图切换 -->
                        <div style="display: flex; gap: 8px; margin-bottom: 12px;" v-if="allChatSessionsFlat.length > 0">
                            <el-button size="small" @click="chatHistoryView = 'date'" :type="chatHistoryView === 'date' ? 'primary' : ''">📅 按日期</el-button>
                            <el-button size="small" @click="chatHistoryView = 'month'" :type="chatHistoryView === 'month' ? 'primary' : ''">📆 按月</el-button>
                            <el-button size="small" @click="chatHistoryView = 'stock'" :type="chatHistoryView === 'stock' ? 'primary' : ''">📈 按股票</el-button>
                        </div>

                        <!-- 按日期聚合 -->
                        <div v-if="chatHistoryView === 'date' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, date) in chatGroupedByDate" :key="date">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatDate(date)" class="history-checkbox" style="display: flex; align-items: center;">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div style="flex:1;" @click="toggleChatDateExpand(date)">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: var(--font-md); font-weight: var(--font-semibold);">📅 {{ date }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div @click="toggleChatDateExpand(date)" style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedChatDates.includes(date) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatDates.includes(date)" class="date-group-records" style="padding: 4px 0 4px 34px;">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list :items="sessions" :row-height="72" style="max-height: 420px;">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="time"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按月聚合 -->
                        <div v-else-if="chatHistoryView === 'month' && allChatSessionsFlat.length > 0" class="ai-history-list">
                            <template v-for="(sessions, month) in chatGroupedByMonth" :key="month">
                                <div class="date-group-card" :style="{marginBottom: '8px'}">
                                    <div class="date-group-header">
                                        <div @click.stop="toggleSelectChatMonth(month)" class="history-checkbox" style="display: flex; align-items: center;">
                                            <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                                {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                            </div>
                                        </div>
                                        <div style="flex:1;" @click="toggleChatMonthExpand(month)">
                                            <div style="display: flex; align-items: center; gap: 8px;">
                                                <span style="font-size: var(--font-md); font-weight: var(--font-semibold);">📆 {{ month }}</span>
                                                <span class="count-badge-sm">{{ sessions.length }}条对话</span>
                                            </div>
                                        </div>
                                        <div @click="toggleChatMonthExpand(month)" style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedChatMonths.includes(month) ? 'rotate(90deg)' : ''}">▶</div>
                                    </div>
                                    <div v-if="expandedChatMonths.includes(month)" class="date-group-records" style="padding: 4px 0 4px 34px;">
                                        <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                        <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                        <qc-virtual-list :items="sessions" :row-height="72" style="max-height: 420px;">
                                            <template #default="{ item: session }">
                                        <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                            </template>
                                        </qc-virtual-list>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 按股票聚合 -->
                        <div v-else-if="allChatSessionsFlat.length > 0" class="ai-history-list">
                            <div v-for="(sessions, code) in chatGroupedByStock" :key="code" style="border: 1px solid var(--border-light); border-radius: 8px; margin-bottom: 8px;">
                                <div class="date-group-header">
                                    <div @click.stop="toggleSelectChatStock(code)" class="history-checkbox" style="display: flex; align-items: center;">
                                        <div class="checkbox-inner" :class="{'checked': sessions.every(s => selectedChatIds.includes(s.id))}" :style="sessions.some(s => selectedChatIds.includes(s.id)) && !sessions.every(s => selectedChatIds.includes(s.id)) ? {background: 'var(--primary-color)', borderColor: 'var(--primary-color)', opacity: '0.5'} : {}">
                                            {{ sessions.every(s => selectedChatIds.includes(s.id)) ? '✓' : (sessions.some(s => selectedChatIds.includes(s.id)) ? '−' : '') }}
                                        </div>
                                    </div>
                                    <div style="flex:1; display: flex; align-items: center; gap: 8px; cursor: pointer;" @click="toggleChatStockExpand(code)">
                                        <div style="display: flex; align-items: center; gap: 8px;">
                                            <strong>{{ code }}</strong>
                                            <span style="color: var(--text-tertiary);">{{ sessions[0].stock_name }}</span>
                                            <span class="count-badge-sm">{{ sessions.length }}次</span>
                                        </div>
                                    </div>
                                    <span style="color: var(--text-tertiary); transition: transform 0.2s;" :style="{transform: expandedChatStocks.includes(code) ? 'rotate(90deg)' : ''}">▶</span>
                                </div>
                                <div v-if="expandedChatStocks.includes(code)" style="padding: 4px 0 4px 12px;">
                                    <!-- v3.16 (16.7): 内层虚拟滚动 -->
                                    <!-- v3.16 (16.9): 行模板收敛至 qc-history-record -->
                                    <qc-virtual-list :items="sessions" :row-height="72" style="max-height: 420px;">
                                        <template #default="{ item: session }">
                                    <qc-history-record :item="session" type="chat" time-format="datetime"></qc-history-record>
                                        </template>
                                    </qc-virtual-list>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <!-- watchlist: 我的自选 (v1.10) -->
                    <div v-else-if="currentSubPage === 'watchlist'">
                        <!-- 批量操作工具栏 -->
                        <div class="card" style="margin-bottom: 16px;">
                            <div style="display: flex; justify-content: space-between; align-items: center;">
                                <div style="color: var(--text-secondary);">
                                    <span v-if="selectedWatchlistCodes.length > 0">已选择 <strong style="color: var(--primary-color);">{{ selectedWatchlistCodes.length }}</strong> 只股票</span>
                                    <span v-else>可选多只股票进行批量操作</span>
                                </div>
                                <div style="display: flex; gap: 8px;">
                                    <el-button size="small" @click="selectAllWatchlist">{{ selectedWatchlistCodes.length === watchlist.length ? '取消全选' : '全选' }}</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="primary" @click="batchEvaluateSelected" :disabled="aiLoading">📊 评估选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" type="danger" @click="batchRemoveWatchlist">🗑️ 移除选中</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length > 0" size="small" @click="clearWatchlistSelection">取消选择</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="primary" @click="batchEvaluateWatchlist" :disabled="aiLoading">📊 批量评估</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" type="danger" @click="clearWatchlist">🗑️ 清空自选</el-button>
                                    <el-button v-if="selectedWatchlistCodes.length === 0" size="small" @click="preloadWatchlistKline" :loading="preloadingKline">🔄 预加载K线</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">⭐ 我的自选 <span style="font-weight: normal; color: var(--text-tertiary); font-size: var(--font-sm); margin-left: 8px;">共 {{ watchlist.length }} 只</span></div>
                            <!-- 搜索添加 -->
                            <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                                <el-input v-model="watchlistSearch" placeholder="输入股票代码或名称搜索..." size="small" style="flex:1" @input="searchStockForWatchlist" clearable />
                            </div>
                            <div v-if="watchlistResults.length" class="watchlist-search-results">
                                <div v-for="r in watchlistResults" :key="r.code" class="watchlist-search-item hover-row" @click="addSearchResult(r)">
                                    <span><strong>{{ r.code }}</strong> <span style="color: var(--text-tertiary);">{{ r.name }}</span></span>
                                    <span class="watchlist-add-hint">+ 添加</span>
                                </div>
                            </div>
                            <!-- 排序栏 -->
                            <div v-if="watchlist.length > 1" class="watchlist-sort-bar">
                                <span class="watchlist-sort-label">排序:</span>
                                <el-radio-group v-model="watchlistSort" size="small">
                                    <el-radio-button label="default">默认</el-radio-button>
                                    <el-radio-button label="name">名称</el-radio-button>
                                    <el-radio-button label="added">加入时间</el-radio-button>
                                    <el-radio-button label="score">评分</el-radio-button>
                                </el-radio-group>
                            </div>
                            <!-- 空状态 -->
                            <!-- v3.16 (16.7): 离线检测 -->
                            <qc-state-panel v-if="!isOnline && watchlist.length === 0" type="offline" @retry="loadWatchlist"></qc-state-panel>
                            <div v-else-if="watchlist.length === 0" class="watchlist-empty">
                                <div class="watchlist-empty-icon">⭐</div>
                                <div class="watchlist-empty-title">暂无自选股</div>
                                <div class="watchlist-empty-hint">搜索股票代码或名称添加</div>
                            </div>
                            <!-- 自选列表 -->
                            <div v-else>
                                <!-- v3.16 (16.7): 虚拟滚动，仅渲染可视区行（500+ 自选不卡顿） -->
                                <qc-virtual-list :items="sortedWatchlist" :row-height="56" style="height: calc(100vh - 320px); min-height: 200px;">
                                    <template #default="{ item: stock }">
                                    <div class="watchlist-item" @click="showStockKline(stock.code, stock.name)" :class="{'watchlist-item-selected': selectedWatchlistCodes.includes(stock.code)}">
                                        <div class="watchlist-checkbox" @click.stop="toggleSelectWatchlist(stock.code)">
                                            <span v-if="selectedWatchlistCodes.includes(stock.code)" class="watchlist-checkbox-check">✓</span>
                                        </div>
                                        <div class="watchlist-info">
                                            <span class="watchlist-code">{{ stock.code }}</span>
                                            <span class="watchlist-name">{{ stock.name }}</span>
                                            <span v-if="batchRunning && batchStatuses[stock.code]==='running'" class="watchlist-status spinning">⏳</span>
                                            <span v-else-if="getWatchlistScore(stock.code)" class="watchlist-score-badge" :style="{background: getWatchlistScore(stock.code).color+'20', color: getWatchlistScore(stock.code).color}">
                                                {{ getWatchlistScore(stock.code).score }}
                                            </span>
                                        </div>
                                        <div class="watchlist-actions">
                                            <el-button size="small" @click.stop="watchlistEvaluate(stock.code, stock.name)" :disabled="aiLoading">📊 评估</el-button>
                                            <el-button size="small" @click.stop="showStockKline(stock.code, stock.name)">📈 K线</el-button>
                                            <el-button size="small" type="danger" text @click.stop="removeFromWatchlist(stock.code)">🗑️</el-button>
                                        </div>
                                    </div>
                                    </template>
                                </qc-virtual-list>
                            </div>
                        </div>
                    </div>

                    <!-- v3.17.8 (FR-3.17.5): 组合/模拟持仓视图 代码起点 -->
                    <div v-else-if="currentSubPage === 'portfolio'" class="portfolio-view">
                        <!-- 组合汇总条 -->
                        <div class="card portfolio-summary-card">
                            <div class="card-title">组合汇总</div>
                            <div class="portfolio-summary-row">
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总市值</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_market_value, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">总成本</div>
                                    <div class="portfolio-summary-value">{{ fmtNum(summary && summary.total_cost, 2) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">浮动盈亏</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit)">{{ fmtSigned(summary && summary.float_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">当日收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.day_profit)">{{ fmtSigned(summary && summary.day_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">累计收益</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.cumulative_profit)">{{ fmtSigned(summary && summary.cumulative_profit) }}</div>
                                </div>
                                <div class="portfolio-summary-item">
                                    <div class="portfolio-summary-label">持仓收益率</div>
                                    <div class="portfolio-summary-value" :class="signClass(summary && summary.float_profit_pct)">{{ fmtSignedPct(summary && summary.float_profit_pct) }}</div>
                                </div>
                            </div>
                            <div v-if="summary && summary.note" class="portfolio-summary-note">{{ summary.note }}</div>
                        </div>

                        <!-- 组合收益曲线 -->
                        <div class="card portfolio-chart-card">
                            <div class="portfolio-chart-head">
                                <div class="card-title">组合收益曲线</div>
                                <el-radio-group v-model="equityDays" size="small" @change="loadEquity(equityDays)">
                                    <el-radio-button :value="7">近7日</el-radio-button>
                                    <el-radio-button :value="30">近30日</el-radio-button>
                                    <el-radio-button :value="90">近90日</el-radio-button>
                                </el-radio-group>
                            </div>
                            <qc-state-panel v-if="equityLoading" type="loading"></qc-state-panel>
                            <div v-else-if="!equityHasData" class="portfolio-chart-empty">{{ equityNote || '暂无收益曲线数据' }}</div>
                            <div v-else id="portfolioEquityChart" class="portfolio-equity-chart"></div>
                            <div v-if="equityNote" class="portfolio-chart-note">{{ equityNote }}</div>
                        </div>

                        <!-- 持仓明细 / 调仓记录 -->
                        <div class="card">
                            <div class="portfolio-title-row">
                                <el-radio-group v-model="portfolioTab" size="small">
                                    <el-radio-button value="positions">持仓明细</el-radio-button>
                                    <el-radio-button value="trades">调仓记录</el-radio-button>
                                </el-radio-group>
                                <el-button size="small" type="primary" @click="showAddForm = !showAddForm">{{ showAddForm ? '收起表单' : '新增持仓' }}</el-button>
                            </div>

                            <!-- 新增持仓表单 -->
                            <div v-if="showAddForm" class="portfolio-add-form">
                                <el-input v-model="addForm.stock_code" placeholder="股票代码" size="small" class="portfolio-form-item" clearable />
                                <el-input v-model="addForm.stock_name" placeholder="股票名称(可选)" size="small" class="portfolio-form-item" clearable />
                                <el-input-number v-model="addForm.cost_price" :min="0" :precision="3" size="small" class="portfolio-form-item" placeholder="成本价" />
                                <el-input-number v-model="addForm.quantity" :min="0" :precision="2" size="small" class="portfolio-form-item" placeholder="数量" />
                                <el-button type="primary" size="small" :loading="addSaving" @click="addPosition">保存持仓</el-button>
                            </div>

                            <!-- 持仓列表 -->
                            <template v-if="portfolioTab === 'positions'">
                                <qc-state-panel v-if="loading" type="loading"></qc-state-panel>
                                <qc-state-panel v-else-if="!isOnline" type="offline" @retry="loadPortfolio"></qc-state-panel>
                                <qc-state-panel v-else-if="loadError" type="error" @retry="loadPortfolio"></qc-state-panel>
                                <div v-else-if="positions.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无持仓，添加一只股票开始跟踪</div>
                                </div>
                                <div v-else class="portfolio-table-wrap">
                                    <table class="portfolio-table">
                                        <thead>
                                            <tr>
                                                <th>代码 / 名称</th>
                                                <th>成本价</th>
                                                <th>数量</th>
                                                <th>现价</th>
                                                <th>市值</th>
                                                <th>浮动盈亏</th>
                                                <th>当日涨跌</th>
                                                <th>操作</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="p in positions" :key="p.stock_code">
                                                <td>
                                                    <div class="portfolio-stock">{{ p.stock_name }}</div>
                                                    <div class="portfolio-code">{{ p.stock_code }}</div>
                                                </td>
                                                <td>{{ fmtNum(p.cost_price, 3) }}</td>
                                                <td>{{ fmtNum(p.quantity, 2) }}</td>
                                                <td>{{ p.close != null ? fmtNum(p.close, 2) : '数据暂不可用' }}</td>
                                                <td>{{ p.market_value != null ? fmtNum(p.market_value, 2) : '--' }}</td>
                                                <td>
                                                    <span v-if="p.float_profit != null" :class="signClass(p.float_profit)">{{ fmtSigned(p.float_profit) }} ({{ fmtSignedPct(p.float_profit_pct) }})</span>
                                                    <span v-else class="portfolio-na">数据暂不可用</span>
                                                </td>
                                                <td>
                                                    <span v-if="p.pct_chg != null" :class="signClass(p.pct_chg)">{{ fmtSignedPct(p.pct_chg) }}</span>
                                                    <span v-else class="portfolio-na">--</span>
                                                </td>
                                                <td>
                                                    <el-button size="small" @click="openTradeForm(p.stock_code, p.stock_name)">调仓</el-button>
                                                    <el-button size="small" type="danger" text @click="removePosition(p.stock_code)">删除</el-button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </template>

                            <!-- 调仓记录 -->
                            <template v-else>
                                <div v-if="trades.length === 0" class="portfolio-empty">
                                    <div class="portfolio-empty-title">暂无调仓记录</div>
                                </div>
                                <div v-else class="portfolio-trades-list">
                                    <div v-for="t in trades" :key="t.id" class="portfolio-trade-item">
                                        <div class="portfolio-trade-main">
                                            <span class="portfolio-trade-action" :class="t.action === 'buy' ? 'portfolio-buy' : 'portfolio-sell'">{{ t.action === 'buy' ? '买入' : '卖出' }}</span>
                                            <span class="portfolio-trade-stock">{{ t.stock_name }} {{ t.stock_code }}</span>
                                        </div>
                                        <div class="portfolio-trade-meta">价格 {{ fmtNum(t.price, 3) }} × {{ fmtNum(t.quantity, 2) }} · {{ t.trade_date || t.created_at }}</div>
                                        <div v-if="t.note" class="portfolio-trade-note">{{ t.note }}</div>
                                    </div>
                                </div>
                            </template>
                        </div>

                        <!-- 调仓弹窗 -->
                        <el-dialog v-model="tradeFormVisible" title="记录调仓" width="420px">
                            <div class="portfolio-trade-form">
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">股票</span>
                                    <span class="portfolio-trade-stock">{{ tradeForm.stock_code }} {{ tradeForm.stock_name }}</span>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">方向</span>
                                    <el-radio-group v-model="tradeForm.action" size="small">
                                        <el-radio-button value="buy">买入</el-radio-button>
                                        <el-radio-button value="sell">卖出</el-radio-button>
                                    </el-radio-group>
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">价格</span>
                                    <el-input-number v-model="tradeForm.price" :min="0" :precision="3" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">数量</span>
                                    <el-input-number v-model="tradeForm.quantity" :min="0" :precision="2" size="small" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">日期</span>
                                    <el-date-picker v-model="tradeForm.trade_date" type="date" size="small" value-format="YYYY-MM-DD" placeholder="默认今天" />
                                </div>
                                <div class="portfolio-trade-row">
                                    <span class="portfolio-trade-label">备注</span>
                                    <el-input v-model="tradeForm.note" size="small" placeholder="可选" />
                                </div>
                            </div>
                            <template #footer>
                                <el-button size="small" @click="tradeFormVisible = false">取消</el-button>
                                <el-button type="primary" size="small" :loading="tradeSaving" @click="submitTrade">保存</el-button>
                            </template>
                        </el-dialog>
                    </div>
                </div>`,
    setup() {
      const { ref, watch } = Vue;
      const state = inject('qcState');
      if (!state) return {};

      // v3.17.6 (FR-3.17.6): 评估命中率（决策复盘闭环）
      const trackData = ref(null);
      const trackLoading = ref(false);
      const trackWindows = [
        { key: 'n5', label: '5 日' },
        { key: 'n10', label: '10 日' },
        { key: 'n20', label: '20 日' },
      ];
      function fmtTrackRate(st) {
        if (!st || st.total === 0 || st.rate === null || st.rate === undefined) return '--';
        return st.rate.toFixed(1) + '%';
      }
      async function loadTrack() {
        trackLoading.value = true;
        try {
          const token = localStorage.getItem('quant_token');
          const res = await fetch('/api/ai/track', {
            headers: token ? { 'Authorization': `Bearer ${token}` } : {}
          });
          const data = await res.json();
          trackData.value = data && data.success ? data.data : null;
        } catch (e) {
          console.warn('[eval-track] 评估命中率加载失败:', e);
          trackData.value = null;
        } finally {
          trackLoading.value = false;
        }
      }
      watch(
        function () { return state.currentPage.value + '/' + state.currentSubPage.value; },
        function (key) { if (key === 'ai/history') loadTrack(); },
        { immediate: true }
      );
      // v3.17.8 (FR-3.17.5): 组合/模拟持仓域 (工厂模块, 不经 qcState)
      const __portfolioDomain = (window.__quantModules && window.__quantModules.portfolio)
        ? window.__quantModules.portfolio.create({})
        : {};
      const {
        positions, summary, trades, loading, loadError,
        showAddForm, addForm, addSaving,
        tradeFormVisible, tradeForm, tradeSaving,
        portfolioTab, equityDays, equityLoading, equityNote, equityHasData,
        loadPortfolio, addPosition, removePosition,
        openTradeForm, submitTrade, loadTrades, loadEquity,
        fmtSigned, fmtSignedPct, signClass,
      } = __portfolioDomain;
      // 进入「组合」子页 / 概览时加载数据 (概览用于统计卡计数)
      watch(
        function () { return state.currentPage.value + '/' + state.currentSubPage.value; },
        function (key) {
          if (key === 'ai/portfolio') {
            loadPortfolio();
            loadTrades();
            loadEquity(equityDays ? equityDays.value : 30);
          } else if (key === 'ai/overview') {
            loadPortfolio();
          }
        },
        { immediate: true }
      );
      return {
        ...state, trackData, trackLoading, trackWindows, fmtTrackRate, loadTrack,
        positions, summary, trades, loading, loadError,
        showAddForm, addForm, addSaving,
        tradeFormVisible, tradeForm, tradeSaving,
        portfolioTab, equityDays, equityLoading, equityNote, equityHasData,
        loadPortfolio, addPosition, removePosition,
        openTradeForm, submitTrade, loadTrades, loadEquity,
        fmtSigned, fmtSignedPct, signClass,
      };
    },
  };
})();
