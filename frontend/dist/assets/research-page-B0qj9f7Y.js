(function(){const{ref:t,computed:O,watch:Ze,inject:ea}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
                <!-- V5.2.3: 市场复盘/异动扫描移入短线复盘 → 本组件在 shortterm 下也渲染这两个子页 -->
                <div v-if="currentPage === 'research' || (currentPage === 'shortterm' && (currentSubPage === 'market-review' || currentSubPage === 'scan'))" key="research">
                    <!-- v3.16 (16.8): 功能未开启时的统一占位 (仅策略研究菜单下生效, 短线复盘托管不受研究开关影响) -->
                    <qc-state-panel v-if="currentPage === 'research' && !researchMenuEnabled" type="empty" icon="🔒" title="研究功能未开启"
                        desc="请在「系统配置 → 功能开关」中启用「策略研究」菜单"></qc-state-panel>
                    <template v-else>
                    <!-- V4.9 (P2): 研究概览子页 -->
                    <div v-if="currentSubPage === 'research-overview'" class="card">
                        <div class="card-title">📊 策略研究概览</div>
                        <!-- 快速入口网格 -->
                        <div class="dashboard-grid">
                            <div class="stat-card clickable" @click="currentSubPage = 'quant-research'">
                                <div class="stat-icon">🔬</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ strategies.length }}</div>
                                    <div class="stat-label">策略总数</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="currentSubPage = 'strategy-write'">
                                <div class="stat-icon">✏️</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ variants.length }}</div>
                                    <div class="stat-label">微调策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="currentSubPage = 'custom-write'">
                                <div class="stat-icon">🚀</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ customs.length }}</div>
                                    <div class="stat-label">自定义策略</div>
                                </div>
                            </div>
                            <div class="stat-card clickable" @click="currentSubPage = 'market-review'">
                                <div class="stat-icon">📋</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ marketReviews.length }}</div>
                                    <div class="stat-label">市场复盘</div>
                                </div>
                            </div>
                            <!-- 5.1.0 (T-5.1.4): 研究历史入口 (实验持久化) -->
                            <div class="stat-card clickable" @click="openResearchHistory">
                                <div class="stat-icon">🗂️</div>
                                <div class="stat-content">
                                    <div class="stat-value">{{ researchHistory.length }}</div>
                                    <div class="stat-label">研究历史</div>
                                </div>
                            </div>
                        </div>
                        <!-- 快速入口列表 -->
                        <div class="card-title mt-4">🔗 快捷入口</div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'quant-research'">
                            <div class="consensus-badge">1</div>
                            <div class="consensus-info">
                                <div class="consensus-code">🔬 量化研究</div>
                                <div class="consensus-name">策略注册表 · 参数方案 · 因子IC分析 · 参数扫描</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'strategy-write'">
                            <div class="consensus-badge">2</div>
                            <div class="consensus-info">
                                <div class="consensus-code">✏️ 策略编写</div>
                                <div class="consensus-name">复制母本 → SelectionSpec 微调 → AI 交易码生成</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'custom-write'">
                            <div class="consensus-badge">3</div>
                            <div class="consensus-info">
                                <div class="consensus-code">🚀 全新策略</div>
                                <div class="consensus-name">AI 代写 · 本地回测 · AI 优化</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'backtest'">
                            <div class="consensus-badge">4</div>
                            <div class="consensus-info">
                                <div class="consensus-code">📊 回测工作台</div>
                                <div class="consensus-name">单/多策略回测 · 净值曲线 · 年度收益</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'market-review'">
                            <div class="consensus-badge">5</div>
                            <div class="consensus-info">
                                <div class="consensus-code">📋 市场复盘</div>
                                <div class="consensus-name">AI 每日市场解读 · 三大指数 · 板块资金 · 情绪分析</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <div class="consensus-item clickable" @click="currentSubPage = 'scan'">
                            <div class="consensus-badge">6</div>
                            <div class="consensus-info">
                                <div class="consensus-code">⚡ 异动扫描</div>
                                <div class="consensus-name">涨停 · 跌停 · 放量 · 连板 · 事件提醒</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                        <!-- 5.1.0 (T-5.1.4): 研究历史入口 -->
                        <div class="consensus-item clickable" @click="openResearchHistory">
                            <div class="consensus-badge">7</div>
                            <div class="consensus-info">
                                <div class="consensus-code">🗂️ 研究历史</div>
                                <div class="consensus-name">因子IC · 分层 · 扫描 · 回测 实验记录 · 对比</div>
                            </div>
                            <span class="market-review-arrow">›</span>
                        </div>
                    </div>
                    <div v-if="currentSubPage === 'quant-research'" class="card">
                        <div class="card-title">{{ t('research.quantResearch') }}</div>
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
                                    <span class="strategy-param-label">进日历</span>
                                    <el-switch v-model="govShowCalendar" @change="updateGov" />
                                    <el-select class="w-110" size="small" v-model="govSchedule" @change="updateGov">
                                        <el-option v-for="t in ['20:00','21:00','22:00','08:00']" :key="t" :label="t" :value="t" />
                                    </el-select>
                                    <el-select class="w-110" size="small" v-model="govUniverse" @change="updateGov" :disabled="!govEnabled">
                                        <el-option value="default" label="内置池" />
                                        <el-option value="all" label="全市场" />
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
                                        <el-button size="small" type="primary" @click="saveProfile" :loading="savingProfile">💾 保存方案</el-button>
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
                                <el-button size="small" @click="runFactorDetail" :loading="factorDetailLoading">因子详情</el-button>
                            </div>
                            <!-- IC 报告 -->
                            <div v-if="factorIcReport" class="factor-ic-report">
                                <div class="grid-auto-fit-140-mb16">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.ic_mean) }}</div>
                                        <div class="stat-label">IC 均值</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.icir) }}</div>
                                        <div class="stat-label">ICIR</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorIcReport.win_rate) }}</div>
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
                                        <div class="stat-value text-lg" :class="ly.layer === factorLayerResult.layers.length ? 'up' : (ly.return < 0 ? 'down' : 'flat')">{{ fmtNum(ly.return) }}%</div>
                                        <div class="stat-label">层 {{ ly.layer }}</div>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary-mt8" :class="factorLayerResult.monotonic ? 'up' : 'down'">
                                    单调性: {{ factorLayerResult.monotonic ? '单调递增 ✓' : '非单调' }} · 多空价差 {{ fmtNum(factorLayerResult.spread) }}%
                                </div>
                            </div>
                            <!-- T-5.1.16: 因子详情面板 (定义/覆盖度/IC衰减/换手/多重检验/近2年) -->
                            <div v-if="factorDetail" class="factor-detail-panel mt-8">
                                <div class="card-title">📋 因子详情 <span class="text-sm-tertiary">{{ factorDetail.meta.name }} · {{ factorDetail.meta.category }}</span></div>
                                <div v-if="factorDetail.meta.description" class="text-sm-tertiary-mt8">{{ factorDetail.meta.description }}</div>
                                <!-- 覆盖度 -->
                                <div class="grid-auto-fit-140-mb16 mt-8">
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.coverage * 100, 0) }}%</div>
                                        <div class="stat-label">因子覆盖度</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ factorDetail.ic_decay.optimal_window || '—' }}</div>
                                        <div class="stat-label">最优持有期</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.annual_turnover, 0) }}</div>
                                        <div class="stat-label">年化换手</div>
                                    </div>
                                    <div class="stat-card p-12">
                                        <div class="stat-value text-lg">{{ fmtNum(factorDetail.turnover.cost_drag_pct, 1) }}%</div>
                                        <div class="stat-label">年化成本拖累</div>
                                    </div>
                                </div>
                                <!-- IC 衰减 -->
                                <div v-if="factorDetail.ic_decay.windows.length" class="ic-decay-row mt-8">
                                    <span class="text-sm-secondary">IC 衰减:</span>
                                    <span v-for="w in factorDetail.ic_decay.windows" :key="w.window" class="text-sm-primary ic-decay-chip"
                                          :class="{ 'ic-best': w.window === factorDetail.ic_decay.optimal_window }">
                                        {{ w.window }} · IC {{ w.ic_mean != null ? fmtNum(w.ic_mean, 3) : '—' }}
                                    </span>
                                </div>
                                <!-- 多重检验 -->
                                <div class="mt-8" :class="factorDetail.multiple_testing.flagged ? 'text-danger-semibold' : 'text-sm-tertiary'">
                                    {{ factorDetail.multiple_testing.note }}
                                </div>
                                <!-- 近1-2年专测 -->
                                <div v-if="factorDetail.recent && factorDetail.recent.optimal_window" class="text-sm-tertiary-mt8">
                                    近1-2年专测: 最优持有期 {{ factorDetail.recent.optimal_window }}
                                    (衰减比 {{ factorDetail.recent.decay_rate != null ? fmtNum(factorDetail.recent.decay_rate, 2) : '—' }})
                                </div>
                            </div>
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div class="sweep-research mt-8">
                                <div class="card-title">🔬 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading">▶ 运行扫描</el-button>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
                                <!-- V5.0.2 T-5.0.24: 参数稳定性诊断 (高原 + 过拟合判定) -->
                                <div v-if="sweepStability" class="param-stability mt-8" :class="{ 'param-stability-overfit': sweepStability.verdict === 'overfit', 'param-stability-robust': sweepStability.verdict === 'robust' }">
                                    <span class="text-sm-secondary">参数稳定性:</span>
                                    <span v-if="sweepStability.verdict === 'overfit'" class="text-danger-semibold">过拟合风险 (扰动衰减比 {{ fmtNum(sweepStability.spread_ratio) }})</span>
                                    <span v-else-if="sweepStability.verdict === 'robust'" class="text-sm-primary">稳健高原 (衰减比 {{ fmtNum(sweepStability.spread_ratio) }}, 高原覆盖 {{ fmtNum(sweepStability.plateau_ratio * 100, 0) }}%)</span>
                                    <span v-else class="text-sm-tertiary">{{ sweepStability.note || '稳定性诊断不可用' }}</span>
                                    <span v-if="sweepStability.verdict !== 'unknown'" class="text-sm-tertiary">最优参数 {{ sweepStability.best_param }} · 高原区间 [{{ sweepStability.plateau_min }}, {{ sweepStability.plateau_max }}]</span>
                                </div>
                                <div v-if="sweepResult && sweepResult.length" class="sweep-table mt-8">
                                    <div v-for="(row, i) in sweepResult" :key="i" class="sweep-row flex-wrap-gap-12-mb16-c" :class="{ 'sweep-best': i === 0 }">
                                        <span class="text-sm-secondary w-260">参数: {{ JSON.stringify(row.params) }}</span>
                                        <span class="text-sm-primary">年化 {{ (row.annual_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">总收益 {{ (row.total_return * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary" :class="{ down: row.max_drawdown < -0.2 }">回撤 {{ (row.max_drawdown * 100).toFixed(2) }}%</span>
                                        <span class="text-sm-secondary">夏普 {{ row.sharpe_ratio.toFixed(2) }}</span>
                                        <span v-if="row.overfit_warning" class="text-sm-tertiary">⚠ 疑似过拟合</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'strategy-write'" class="card">
                        <div class="card-title">⚙ 策略编写 <span class="text-sm-tertiary">复制母本 → 参数 → 持仓矩阵 → SelectionSpec → AI 交易码</span></div>
                        <!-- v3.22 (I3A): 第1步 选择母本 + 复制 -->
                        <div class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">母本策略</span>
                            <el-select class="w-220" size="small" v-model="activeStrategyId" placeholder="选择母本" @change="onStrategyChange">
                                <el-option v-for="s in strategies" :key="s.id" :label="s.name + ' (' + s.id + ')'" :value="s.id" />
                            </el-select>
                            <el-input class="w-160" size="small" v-model="profileName" placeholder="新策略名(可选)" />
                            <el-button size="small" type="primary" @click="cloneNewStrategy" :loading="variantBusy">📋 复制为微调策略</el-button>
                            <el-button size="small" @click="loadVariants">🔄 刷新列表</el-button>
                        </div>
                        <!-- variant 列表 -->
                        <div v-if="variants.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">微调策略</span>
                            <el-select class="w-220" size="small" v-model="variantSelected" placeholder="选择微调策略" @change="selectVariant(variantSelected)">
                                <el-option v-for="v in variants" :key="v.id" :label="(v.name || v.id) + ' (' + v.id + ')'" :value="v.id" />
                            </el-select>
                            <el-button size="small" type="warning" @click="runVariantOnce" :loading="variantBusy">⚡ 生成持仓矩阵</el-button>
                        </div>
                        <div v-if="variantMsg" class="text-sm-primary mt-8">{{ variantMsg }}</div>
                        <!-- v3.22 (I3A): 第2步 SelectionSpec 微调协议 -->
                        <div v-if="variantSelected && variantSpec" class="strategy-params">
                            <div class="section-title-base mt-8">🎯 SelectionSpec 微调选股协议 <span class="text-sm-tertiary">纯收紧约束: 仅在持仓矩阵内二次筛选</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">持仓数量</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="50" v-model="variantSpec.stock_count" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">调仓周期</label>
                                    <el-input-number class="w-140" size="small" :min="1" :max="60" v-model="variantSpec.rebalance_cycle" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">剔除 ST</label>
                                    <el-switch v-model="variantSpec.exclude_st" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">指数成分</label>
                                    <el-select class="w-160" size="small" v-model="variantSpec.index_membership" clearable>
                                        <el-option value="hs300" label="沪深300" />
                                        <el-option value="zz500" label="中证500" />
                                        <el-option value="zz1000" label="中证1000" />
                                    </el-select>
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">行业偏好</label>
                                    <el-input class="w-200" size="small" v-model="specIndustryText" placeholder="逗号分隔, 如 电子,医药" />
                                </div>
                                <div class="strategy-param-row">
                                    <label class="strategy-param-label">市值范围(亿)</label>
                                    <el-input class="w-200" size="small" v-model="specCapText" placeholder="如 50,2000 (留空不限)" />
                                </div>
                            </div>
                            <el-button size="small" type="primary" @click="saveVariantSpec" :loading="variantSaving">💾 保存 SelectionSpec</el-button>
                        </div>
                        <!-- v3.22 (I3A): 第3步 AI 交易码 -->
                        <div v-if="variantSelected" class="strategy-params">
                            <div class="section-title-base mt-8">🤖 AI 交易码 <span class="text-sm-tertiary">读取持仓矩阵 + SelectionSpec → PTrade 兼容代码(含风控)</span></div>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" type="primary" @click="genVariantAiCode" :loading="aiCodeLoading">⚡ 生成 AI 交易码</el-button>
                                <el-button size="small" @click="copyVariantCode" :disabled="!aiCode">📋 复制代码</el-button>
                            </div>
                            <div v-if="aiCode" class="ptrade-code-pre">{{ aiCode }}</div>
                        </div>
                    </div>
                    <div v-else-if="currentSubPage === 'custom-write'" class="card">
                        <div class="card-title">🚀 全新策略 <span class="text-sm-tertiary">AI 代写 → 本地回测 → AI 优化</span></div>
                        <!-- v3.22 (I3B): 第1步 AI 代写 -->
                        <div class="strategy-params">
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-input class="w-180" size="small" v-model="customName" placeholder="策略名(如 均线突破)" />
                                <el-button size="small" type="primary" @click="genCustomCode" :loading="customGenLoading">🤖 AI 代写</el-button>
                                <el-button size="small" @click="loadCustoms">🔄 刷新列表</el-button>
                            </div>
                            <el-input type="textarea" :rows="3" size="small" v-model="customPrompt"
                                placeholder="描述策略思路, 如: 双均线金叉买入, 死叉卖出, 单只仓位20%, 止损8%" class="w-full" />
                        </div>
                        <!-- 自定义策略列表 -->
                        <div v-if="customs.length" class="strategy-params flex-wrap-gap-12-mb16-c">
                            <span class="strategy-param-label">自定义策略</span>
                            <el-select class="w-220" size="small" v-model="customSelected" placeholder="选择策略">
                                <el-option v-for="c in customs" :key="c.id" :label="(c.name || c.id) + ' (' + c.id + ')'" :value="c.id" />
                            </el-select>
                            <el-button size="small" @click="loadCustomCode" :disabled="!customSelected">📄 读取代码</el-button>
                            <el-button size="small" type="warning" @click="runCustomBacktest" :loading="customBtLoading">⚡ 本地回测</el-button>
                            <el-button size="small" type="primary" @click="runCustomOptimize" :loading="customOptLoading">🧠 AI 优化</el-button>
                        </div>
                        <div v-if="customMsg" class="text-sm-primary mt-8">{{ customMsg }}</div>
                        <!-- 代码区 -->
                        <div v-if="customCode" class="strategy-params">
                            <div class="section-title-base mt-8">💻 策略代码 <span class="text-sm-tertiary">PTrade 兼容</span></div>
                            <pre class="ptrade-code-pre">{{ customCode }}</pre>
                            <div class="flex-wrap-gap-12-mb16-c">
                                <el-button size="small" @click="copyCustomCode">📋 复制代码</el-button>
                            </div>
                        </div>
                        <!-- 回测结果 -->
                        <div v-if="customBtResult" class="strategy-params">
                            <div class="section-title-base mt-8">📊 回测结果</div>
                            <div class="custom-bt-grid">
                                <div class="custom-bt-item"><span class="text-sm-tertiary">标的</span><b>{{ customBtResult.symbols.length }}</b></div>
                                <div class="custom-bt-item"><span class="text-sm-tertiary">区间</span><b>{{ customBtResult.dates[0] }} → {{ customBtResult.dates[1] }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ fmtNum(customBtResult.metrics.annual_return_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ fmtNum(customBtResult.metrics.max_drawdown_pct) }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ fmtNum(customBtResult.metrics.sharpe) }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ fmtNum(customBtResult.metrics.win_rate_pct) }}%</b></div>
                            </div>
                        </div>
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
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.total_return_pct) }}%</div>
                                    <div class="stat-label">总收益率</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.annual_return_pct) }}%</div>
                                    <div class="stat-label">年化收益</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.max_drawdown_pct) }}%</div>
                                    <div class="stat-label">最大回撤</div>
                                </div>
                                <div class="stat-card p-12">
                                    <div class="stat-value text-lg">{{ fmtNum(backtestResult.sharpe_ratio) }}</div>
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
                        <div class="card-title flex-between">
                            <span>{{ t('research.backtestHistory') }}</span>
                            <div class="flex-c-gap-8">
                                <el-select class="w-100" size="small" v-model="btHistoryDays" @change="loadBtHistory">
                                    <el-option label="近7天" :value="7" />
                                    <el-option label="近30天" :value="30" />
                                    <el-option label="近90天" :value="90" />
                                </el-select>
                                <el-button size="small" @click="loadBtHistory" :loading="btHistoryLoading">🔄 刷新</el-button>
                            </div>
                        </div>
                        <qc-state-panel v-if="btHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="btHistoryError" type="error" title="加载失败" desc="请检查网络后重试" @retry="loadBtHistory"></qc-state-panel>
                        <div v-else-if="!btHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无回测记录</div>
                            <div class="text-sm-tertiary-mt8">运行回测后，结果将自动记录在此</div>
                        </div>
                        <div v-else>
                            <div v-for="r in btHistory" :key="r.ts + '-' + r.sid" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div>
                                        <span class="strategy-name">{{ r.sid }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ r.ts }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <span class="strategy-tag" v-if="r.summary">年化 {{ fmtNum(r.summary.annual_return) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">回撤 {{ fmtNum(r.summary.max_drawdown) }}%</span>
                                        <span class="strategy-tag" v-if="r.summary">夏普 {{ fmtNum(r.summary.sharpe_ratio) }}</span>
                                    </div>
                                </div>
                                <div v-if="r.summary" class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span class="text-sm-secondary">总收益: <strong :class="(r.summary.total_return || 0) >= 0 ? 'color-success' : 'color-danger'">{{ fmtNum(r.summary.total_return) }}%</strong></span>
                                    <span class="text-sm-secondary">胜率: <strong>{{ fmtNum(r.summary.win_rate) }}%</strong></span>
                                    <span class="text-sm-secondary">交易次数: <strong>{{ r.summary.total_trades || 0 }}</strong></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- 5.1.0 (T-5.1.4): 研究历史子页 (实验持久化列表/对比) -->
                    <div v-else-if="currentSubPage === 'research-history'" class="card">
                        <div class="card-title">🗂️ 研究历史 <span class="text-sm-tertiary-normal">{{ researchHistory.length }} 条实验</span></div>
                        <!-- 类型过滤 -->
                        <div class="flex-wrap-gap-12-mb16-c">
                            <el-radio-group v-model="researchHistoryType" size="small" @change="loadResearchHistory">
                                <el-radio-button label="">全部</el-radio-button>
                                <el-radio-button label="factor_ic">因子IC</el-radio-button>
                                <el-radio-button label="layer">分层</el-radio-button>
                                <el-radio-button label="sweep">扫描</el-radio-button>
                                <el-radio-button label="backtest">回测</el-radio-button>
                            </el-radio-group>
                            <span class="text-sm-tertiary">勾选 ≤10 条可对比</span>
                            <el-button size="small" :loading="researchExportLoading" @click="exportResearchHistory">⬇️ 导出 CSV</el-button>
                        </div>
                        <qc-state-panel v-if="researchHistoryLoading" type="loading"></qc-state-panel>
                        <qc-state-panel v-else-if="researchHistoryError" type="error" title="研究历史加载失败" desc="请检查网络后重试" @retry="loadResearchHistory"></qc-state-panel>
                        <div v-else-if="!researchHistory.length" class="empty-state">
                            <div class="text-md-medium-primary">暂无研究实验</div>
                            <div class="text-sm-tertiary-mt8">运行因子IC / 分层 / 参数扫描 / 回测后，结果将自动记录在此</div>
                        </div>
                        <template v-else>
                            <!-- 对比按钮 -->
                            <div v-if="researchHistorySelected.length >= 2" class="flex-c-gap-8 mb-12">
                                <el-button size="small" type="primary" :loading="researchCompareLoading" @click="runResearchCompare">📊 对比所选 ({{ researchHistorySelected.length }})</el-button>
                                <el-button size="small" @click="researchHistorySelected = []">清空选择</el-button>
                            </div>
                            <!-- 对比结果 -->
                            <div v-if="researchCompareRows.length" class="card mb-12">
                                <div class="card-title">📈 实验对比</div>
                                <div class="table-container">
                                    <table class="bt-compare-table">
                                        <thead>
                                            <tr>
                                                <th>实验</th>
                                                <th>类型</th>
                                                <th>IC均值</th>
                                                <th>ICIR</th>
                                                <th>胜率</th>
                                                <th>年化</th>
                                                <th>回撤</th>
                                                <th>夏普</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="row in researchCompareRows" :key="row.id">
                                                <td>{{ row.subject }}</td>
                                                <td>{{ researchTypeLabel(row.type) }}</td>
                                                <td>{{ row.summary.ic_mean != null ? fmtNum(row.summary.ic_mean) : '—' }}</td>
                                                <td>{{ row.summary.icir != null ? fmtNum(row.summary.icir) : '—' }}</td>
                                                <td>{{ row.summary.win_rate != null ? fmtNum(row.summary.win_rate) + '%' : '—' }}</td>
                                                <td>{{ row.summary.annual_return != null ? fmtNum(row.summary.annual_return) + '%' : '—' }}</td>
                                                <td>{{ row.summary.max_drawdown != null ? fmtNum(row.summary.max_drawdown) + '%' : '—' }}</td>
                                                <td>{{ row.summary.sharpe_ratio != null ? fmtNum(row.summary.sharpe_ratio) : '—' }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <!-- 实验列表 -->
                            <div v-for="exp in researchHistory" :key="exp.id" class="card mb-12">
                                <div class="flex-between-start-wrap">
                                    <div class="flex-c-gap-8">
                                        <el-checkbox :model-value="researchHistorySelected.includes(exp.id)"
                                            @change="toggleResearchSelect(exp.id)"></el-checkbox>
                                        <span class="strategy-name">{{ exp.subject }}</span>
                                        <span class="strategy-tag">{{ researchTypeLabel(exp.type) }}</span>
                                        <span class="text-xs-tertiary ml-8">{{ exp.created_at }}</span>
                                    </div>
                                    <div class="flex-c-gap-8">
                                        <el-button size="small" link type="primary" @click="toggleResearchDetail(exp.id)">详情</el-button>
                                        <el-button size="small" link type="danger" @click="deleteResearchHistory(exp.id)">删除</el-button>
                                    </div>
                                </div>
                                <div class="flex-wrap-gap-12-mb16-c mt-8">
                                    <span v-if="exp.summary.ic_mean != null" class="text-sm-secondary">IC均值 <strong>{{ fmtNum(exp.summary.ic_mean) }}</strong></span>
                                    <span v-if="exp.summary.icir != null" class="text-sm-secondary">ICIR <strong>{{ fmtNum(exp.summary.icir) }}</strong></span>
                                    <span v-if="exp.summary.win_rate != null" class="text-sm-secondary">胜率 <strong>{{ fmtNum(exp.summary.win_rate) }}%</strong></span>
                                    <span v-if="exp.summary.annual_return != null" class="text-sm-secondary">年化 <strong>{{ fmtNum(exp.summary.annual_return) }}%</strong></span>
                                    <span v-if="exp.summary.max_drawdown != null" class="text-sm-secondary">回撤 <strong>{{ fmtNum(exp.summary.max_drawdown) }}%</strong></span>
                                    <span v-if="exp.summary.sharpe_ratio != null" class="text-sm-secondary">夏普 <strong>{{ fmtNum(exp.summary.sharpe_ratio) }}</strong></span>
                                    <span v-if="exp.summary.monotonic != null" class="text-sm-secondary">单调 <strong>{{ exp.summary.monotonic ? '✓' : '✗' }}</strong></span>
                                    <span v-if="exp.summary.spread != null" class="text-sm-secondary">多空价差 <strong>{{ fmtNum(exp.summary.spread) }}%</strong></span>
                                    <span v-if="exp.summary.best_param" class="text-sm-secondary">最优参数 <strong>{{ JSON.stringify(exp.summary.best_param) }}</strong></span>
                                </div>
                                <div v-if="exp.range" class="text-xs-tertiary">区间 {{ exp.date_range.join(' → ') }} · v{{ exp.app_version }}</div>
                                <template v-if="researchDetailId === exp.id">
                                    <div class="card mt-8">
                                        <div class="card-title">实验详情</div>
                                        <pre class="research-detail-pre">{{ JSON.stringify(exp, null, 2) }}</pre>
                                    </div>
                                </template>
                            </div>
                        </template>
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
                                            <span v-if="m.volume_ratio" class="scan-row-vol">量比 {{ fmtNum(m.volume_ratio) }}</span>
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
                </div>`,setup(){const b=ea("qcState"),De=Vue.ref(!1),Te=Vue.ref(!1);if(!b)return{};const ze=t([]),J=t(!1),j=t(!1),L=t(""),q=t(null),F=t(!1),k=t(!1);async function U(){J.value=!0,j.value=!1;try{const e=await fetch("/api/market/reviews?limit=30").then(a=>a.json());e&&e.success?ze.value=Array.isArray(e.data)?e.data:[]:j.value=!0}catch(e){console.error("[market-review] 复盘列表加载失败:",e),j.value=!0}finally{J.value=!1}}function aa(e){L.value=e,Oe(e)}function ta(){L.value="",q.value=null,k.value=!1}async function Oe(e){F.value=!0,k.value=!1,q.value=null;try{const a=e?"/api/market/review?date="+encodeURIComponent(e):"/api/market/review",s=await fetch(a).then(r=>r.json());s&&s.success?q.value=s.data:k.value=!0}catch(a){console.error("[market-review] 复盘详情加载失败:",a),k.value=!0}finally{F.value=!1}}function sa(e){return e>0?"up":e<0?"down":"flat"}function la(e){return e==null||isNaN(Number(e))?"—":(e>0?"+":"")+Number(e).toFixed(2)+"%"}function ra(e){const a={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(e||{}).map(function(s){const r=s[0],c=s[1],m=!c||c==="unavailable"||c==="数据不可达";return{label:a[r]||r,value:m?"数据不可达":c,unavailable:m}})}const G=t(["strategies","watchlist"]),Y=t(!1),H=t(!1),A=t(null),je=t("watchlist"),$=t(!1),w=t(null);async function Le(){Y.value=!0,H.value=!1;try{const e="/api/market/scan?pool="+encodeURIComponent((G.value||[]).join(",")||"all"),a=await fetch(e).then(s=>s.json());a&&a.success?A.value=a.data||{moves:[],note:""}:H.value=!0}catch(e){console.error("[scan] 异动扫描失败:",e),H.value=!0}finally{Y.value=!1}}async function qe(){$.value=!0;try{const e="/api/market/events?scope="+encodeURIComponent(je.value),a=await fetch(e).then(s=>s.json());a&&a.success?w.value=a.data||{events:[],note:""}:w.value={events:[],note:"事件数据暂不可用"}}catch(e){console.error("[scan] 事件提醒加载失败:",e),w.value={events:[],note:"事件数据暂不可用"}}finally{$.value=!1}}O(function(){const e={strategies:"当日入池",watchlist:"自选股"},a=(G.value||[]).map(function(s){return e[s]}).filter(Boolean);return a.length?a.join("+"):"所选范围"});const ia=O(function(){const e=["涨停","连板","放量","异动振幅","跌停"],a=A.value&&A.value.moves||[],s=[];return e.forEach(function(r){const c=a.filter(function(m){return(m.labels||[]).indexOf(r)>=0});c.length&&s.push({label:r,moves:c})}),s}),na=O(function(){const e={};return(w.value&&w.value.events||[]).forEach(function(a){(e[a.type]=e[a.type]||[]).push(a)}),Object.keys(e).map(function(a){return{type:a,events:e[a]}})});function ca(e){return e==="跌停"?"down":e==="涨停"||e==="连板"?"up":"neutral"}function oa(e){return e==null||isNaN(Number(e))?"--":Number(e).toFixed(2)}function da(e){return e>0?"up":e<0?"down":"flat"}function va(e){return e==null||isNaN(Number(e))?"—":(e>0?"+":"")+Number(e).toFixed(2)+"%"}const x=t([]),K=t(!1),Q=t(!1),l=t(""),d=t({}),W=t(!1),He=t(""),_=t(""),X=t([]),S=t([]),R=t(""),C=t(""),Z=t(!0),ee=t(!0),ae=t("20:00"),te=t("default"),se=t(!1),E=t(""),le=O(function(){return x.value.find(function(e){return e.id===l.value})||null});async function o(e,a){a=a||{},a.headers=Object.assign({},a.headers||{});const s=localStorage.getItem("token")||"";return s&&(a.headers.Authorization="Bearer "+s),fetch(e,a)}async function re(){K.value=!0,Q.value=!1;try{const e=await o("/api/strategies").then(function(a){return a.json()});x.value=Array.isArray(e)?e:[],x.value.length&&!l.value&&(l.value=x.value[0].id,Ae())}catch(e){console.error("[research] 策略列表加载失败:",e),Q.value=!0}finally{K.value=!1}}function Ae(){const e=le.value;e&&(d.value={},e.schema.forEach(function(a){d.value[a.key]=a.default}),_.value="",Ee(),N(),ie())}async function N(){if(!l.value){S.value=[];return}try{const e=await o("/api/strategies/"+l.value+"/profiles").then(function(a){return a.json()});S.value=e&&e.data&&e.data.profiles||[],R.value=""}catch(e){console.error("[research] 方案列表加载失败:",e),S.value=[]}}async function ua(){De.value=!0;const e=(C.value||"").trim();if(!e){window._core&&window._core.showToast("请输入方案名称");return}try{const a=await o("/api/strategies/"+l.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:d.value})}).then(function(s){return s.json()});if(a&&a.detail){window._core&&window._core.showToast(String(a.detail));return}C.value="",await N(),window._core&&window._core.showToast("方案已保存")}catch(a){console.error("[research] 方案保存失败:",a),window._core&&window._core.showToast("方案保存失败")}}function ma(){const e=S.value.find(function(a){return a.id===R.value});e&&(Object.keys(e.params||{}).forEach(function(a){d.value[a]=e.params[a]}),window._core&&window._core.showToast("已应用方案: "+e.name))}async function pa(){if(R.value)try{await o("/api/strategies/"+l.value+"/profiles/"+R.value,{method:"DELETE"}).then(function(e){return e.json()}),await N(),window._core&&window._core.showToast("方案已删除")}catch(e){console.error("[research] 方案删除失败:",e)}}async function ie(){try{const e=await o("/api/strategies/governance").then(function(r){return r.json()}),s=(e&&e.data&&e.data.strategies||{})[l.value]||{};Z.value=s.enabled!==!1,ae.value=s.schedule||"20:00",te.value=s.universe==="all"?"all":"default",ee.value=s.show_in_calendar!==!1,E.value=s.last_holdings||""}catch(e){console.error("[research] 纳管状态加载失败:",e)}}async function fa(){try{await o("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const e={};return e[l.value]={enabled:Z.value,schedule:ae.value,universe:te.value,show_in_calendar:ee.value},e}()})}).then(function(e){return e.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(e){console.error("[research] 纳管更新失败:",e)}}async function ya(){if(l.value){se.value=!0;try{const e=await o("/api/strategies/"+l.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:He.value||void 0})}).then(function(a){return a.json()});if(e&&e.detail){window._core&&window._core.showToast(String(e.detail));return}window._core&&window._core.showToast("持仓已生成"),await ie()}catch(e){console.error("[research] run-once 失败:",e),window._core&&window._core.showToast("持仓生成失败")}finally{se.value=!1}}}function ga(){E.value&&window.open(E.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function wa(){const e=le.value;if(!e)return;const a=(C.value||"").trim()||e.name+"-副本";ha(a,Object.assign({},d.value)),window._core&&window._core.showToast("已复制为副本方案: "+a)}async function ha(e,a){try{await o("/api/strategies/"+l.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:a})}).then(function(s){return s.json()}),await N()}catch(s){console.error("[research] 副本保存失败:",s)}}async function Ee(){if(l.value)try{const e=await o("/api/strategies/"+l.value+"/runs?limit=5").then(function(a){return a.json()});X.value=Array.isArray(e)?e:[]}catch{X.value=[]}}async function ba(){if(l.value){W.value=!0;try{const e=await o("/api/strategies/"+l.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:d.value,as_of:He.value||void 0})}).then(function(a){return a.json()});e&&e.status==="success"?Ee():alert("运行失败: "+(e.detail||JSON.stringify(e)))}catch(e){console.error("[research] 策略运行失败:",e),alert("运行失败: "+e.message)}finally{W.value=!1}}}async function ka(){if(l.value)try{const e=Object.keys(d.value).map(function(s){return encodeURIComponent(s)+"="+encodeURIComponent(d.value[s])}).join("&"),a=await o("/api/strategies/"+l.value+"/ptrade-code?"+e).then(function(s){return s.json()});a&&a.code?_.value=a.code:alert("导出失败: "+(a.detail||JSON.stringify(a)))}catch(e){console.error("[research] PTrade 导出失败:",e),alert("导出失败: "+e.message)}}function xa(){if(!_.value)return;const e=document.createElement("textarea");e.value=_.value,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)}Ze(function(){return b.currentPage.value+"/"+b.currentSubPage.value},function(e){e==="research/research-overview"&&(re(),U(),ye(),xe()),(e==="research/market-review"||e==="shortterm/market-review")&&!L.value&&U(),(e==="research/scan"||e==="shortterm/scan")&&(Le(),qe()),e==="research/quant-research"&&re(),e==="research/backtest-history"&&Qe()},{immediate:!0});const V=t("mom20"),ne=t(!1),ce=t(!1),Ve=t(null),Me=t(null),_a=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}],Be=t('{"top_n":[10,20,30]}'),oe=t(null),P=t(""),de=t(!1),Je=t(null);async function Sa(){if(!l.value){ElementPlus.ElMessage.warning("请先选择策略");return}let e;try{e=JSON.parse(Be.value)}catch{ElementPlus.ElMessage.error("网格 JSON 格式错误");return}if(!e||Object.keys(e).length===0){ElementPlus.ElMessage.warning("网格不能为空");return}de.value=!0,oe.value=null,P.value="";try{const a=await fetch("/api/strategies/"+l.value+"/sweep",{method:"POST",headers:f(),body:JSON.stringify({param_grid:e})}).then(function(s){return s.json()});a&&Array.isArray(a.results)?(oe.value=a.results,P.value="完成 "+a.count+" 组"+(a.data_degraded?" (数据不可达, 结果降级)":""),Je.value=a.param_stability||null):P.value=a&&a.detail||"扫描失败"}catch(a){console.error("[sweep]",a),P.value="扫描失败: "+a.message}finally{de.value=!1}}async function Ra(){ne.value=!0;try{const e=await o("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:l.value||"multi_factor",factor_key:V.value,params:d.value||{}})}).then(function(s){return s.json()}),a=e&&e.report?e.report.n1||{}:{};Ve.value=a}catch(e){console.error("[research] 因子IC分析失败:",e),alert("因子 IC 分析失败: "+e.message)}finally{ne.value=!1}}async function Ca(){ce.value=!0;try{const e=await o("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:l.value||"multi_factor",factor_key:V.value,params:d.value||{}})}).then(function(a){return a.json()});e&&e.layers?Me.value=e:alert("分层回测: "+(e.message||"无数据"))}catch(e){console.error("[research] 分层回测失败:",e),alert("分层回测失败: "+e.message)}finally{ce.value=!1}}const ve=t(null),ue=t(!1);async function Na(){ue.value=!0,ve.value=null;try{const e=await o("/api/strategies/factors/detail",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:l.value||"multi_factor",factor_key:V.value,params:d.value||{}})}).then(function(a){return a.json()});e&&e.detail?ve.value=e.detail:alert("因子详情: "+(e.message||"无数据"))}catch(e){console.error("[research] 因子详情失败:",e),alert("因子详情失败: "+e.message)}finally{ue.value=!1}}const Fe=t([]),v=t(null),u=t(null),Ue=t(null),h=t(""),me=t(!1),I=t(!1),i=t(""),pe=t(""),fe=t("");function f(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function ye(){try{const e=await fetch("/api/strategies/variants",{headers:f()}).then(function(a){return a.json()});Fe.value=e&&e.data&&e.data.variants||[]}catch(e){console.error("[i3a] 加载 variants 失败:",e)}}async function Pa(){if(!l.value){i.value="请先在量化研究选择母本策略";return}I.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+l.value+"/clone",{method:"POST",headers:f(),body:JSON.stringify({name:(C.value||"").trim()||void 0,params:Object.assign({},d.value)})}).then(function(s){return s.json()});if(e&&e.detail){i.value=String(e.detail);return}const a=e&&e.data;a&&a.sid&&(v.value=a.sid,i.value="已复制为新策略: "+a.name,await ye(),await M(a.sid))}catch(e){console.error("[i3a] 复制失败:",e),i.value="复制失败: "+e.message}finally{I.value=!1}}async function Ia(e){v.value=e,i.value="",h.value="",await M(e)}async function M(e){try{const a=await fetch("/api/strategies/"+e+"/selection-spec",{headers:f()}).then(function(s){return s.json()});a&&a.data&&a.data.spec&&(u.value=Object.assign({},a.data.spec),Ue.value=a.data.fields,pe.value=(a.data.spec.industry_scope||[]).join(","),fe.value=(a.data.spec.market_cap_range||[]).join(","))}catch(a){console.error("[i3a] 加载 spec 失败:",a)}}async function Da(){if(Te.value=!0,!(!v.value||!u.value))try{u.value.industry_scope=pe.value?pe.value.split(/[,，]/).map(function(a){return a.trim()}).filter(Boolean):[],u.value.market_cap_range=fe.value?fe.value.split(/[,，]/).map(Number).filter(function(a){return!isNaN(a)}):[];const e=await fetch("/api/strategies/"+v.value+"/selection-spec",{method:"PUT",headers:f(),body:JSON.stringify({spec:u.value})}).then(function(a){return a.json()});e&&e.data&&e.data.spec&&(u.value=e.data.spec,i.value="SelectionSpec 已保存")}catch(e){console.error("[i3a] 保存 spec 失败:",e),i.value="保存失败"}}async function Ta(){if(!v.value){i.value="请先选择/创建微调策略";return}I.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+v.value+"/run-once",{method:"POST",headers:f(),body:"{}"}).then(function(a){return a.json()});i.value=e&&e.detail?String(e.detail):"持仓已生成: "+(e&&e.data&&e.data.symbols||0)+" 只"}catch(e){console.error("[i3a] run-once 失败:",e),i.value="生成持仓失败"}finally{I.value=!1}}async function za(){if(!v.value){i.value="请先选择/创建微调策略";return}u.value||await M(v.value),me.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+v.value+"/ai-trade-code",{method:"POST",headers:f(),body:JSON.stringify({spec:u.value})}).then(function(a){return a.json()});if(e&&e.detail){i.value=String(e.detail);return}e&&e.data&&(h.value=e.data.code||"",e.data.api_errors&&e.data.api_errors.length?i.value="生成成功(含 API 校验告警 "+e.data.api_errors.length+" 条)":i.value="AI 交易码已生成, 已通过矩阵内校验")}catch(e){console.error("[i3a] AI 交易码失败:",e),i.value="AI 生成失败: "+e.message}finally{me.value=!1}}function Oa(){if(h.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(h.value).then(function(){i.value="代码已复制"});else{const e=document.createElement("textarea");e.value=h.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),i.value="代码已复制"}}const Ge=t(""),ge=t(""),Ye=t([]),y=t(""),g=t(""),n=t(""),we=t(null),he=t(!1),be=t(!1),ke=t(!1);function D(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function xe(){try{const e=await fetch("/api/strategies/custom",{headers:D()}).then(function(a){return a.json()});Ye.value=e&&e.data&&e.data.customs||[]}catch(e){console.error("[i3b] 加载自定义策略失败:",e)}}async function ja(){if(!ge.value.trim()){n.value="请描述策略思路";return}he.value=!0,n.value="";try{const e=await fetch("/api/strategies/custom",{method:"POST",headers:D(),body:JSON.stringify({name:Ge.value.trim()||"自定义策略",prompt:ge.value})}).then(function(a){return a.json()});if(e&&e.detail){n.value=String(e.detail);return}e&&e.data&&(g.value=e.data.code||"",n.value="AI 代写成功: "+e.data.sid+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"),await xe())}catch(e){console.error("[i3b] AI 代写失败:",e),n.value="AI 代写失败: "+e.message}finally{he.value=!1}}async function La(){if(y.value)try{const e=await fetch("/api/strategies/custom/"+y.value+"/code",{headers:D()}).then(function(a){return a.json()});e&&e.data&&(g.value=e.data.code||"",n.value="")}catch(e){console.error("[i3b] 读取代码失败:",e)}}async function qa(){if(!y.value){n.value="请先选择自定义策略";return}be.value=!0,n.value="";try{const e=await fetch("/api/strategies/custom/"+y.value+"/backtest",{method:"POST",headers:D(),body:"{}"}).then(function(a){return a.json()});if(e&&e.detail){n.value=String(e.detail);return}e&&e.data&&(we.value=e.data,n.value="回测完成")}catch(e){console.error("[i3b] 回测失败:",e),n.value="回测失败: "+e.message}finally{be.value=!1}}async function Ha(){if(!y.value){n.value="请先选择自定义策略";return}ke.value=!0,n.value="";try{const e=await fetch("/api/strategies/custom/"+y.value+"/ai-optimize",{method:"POST",headers:D(),body:JSON.stringify({backtest:we.value})}).then(function(a){return a.json()});if(e&&e.detail){n.value=String(e.detail);return}e&&e.data&&(g.value=e.data.code||"",n.value="AI 优化完成"+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"))}catch(e){console.error("[i3b] AI 优化失败:",e),n.value="AI 优化失败: "+e.message}finally{ke.value=!1}}function Aa(){if(g.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(g.value).then(function(){n.value="代码已复制"});else{const e=document.createElement("textarea");e.value=g.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),n.value="代码已复制"}}const $e=Vue.ref([]),_e=Vue.ref(!1),Se=Vue.ref(!1),Ke=Vue.ref(30);async function Qe(){_e.value=!0,Se.value=!1;try{const e=window.__quantModules&&window.__quantModules.core||{},a=typeof e.authHeaders=="function"?e.authHeaders():{},s=await fetch("/api/backtest/history?days="+Ke.value,{headers:a}).then(function(r){return r.json()});$e.value=s&&s.data||[]}catch(e){console.error("[backtest] 回测历史加载失败:",e),Se.value=!0}finally{_e.value=!1}}const B=Vue.ref([]),Re=Vue.ref(!1),Ce=Vue.ref(!1),T=Vue.ref(""),p=Vue.ref([]),Ne=Vue.ref(""),We=Vue.ref([]),Pe=Vue.ref(!1),Ie=Vue.ref(!1),Ea={factor_ic:"因子IC",layer:"分层",sweep:"扫描",backtest:"回测",stability:"稳定性"};function Va(e){return Ea[e]||e||"—"}function Ma(){b.currentSubPage.value="research-history",Xe()}async function Xe(){Re.value=!0,Ce.value=!1;try{const e=window.__quantModules&&window.__quantModules.core||{},a=typeof e.authHeaders=="function"?e.authHeaders():{},s=T.value?"?type="+encodeURIComponent(T.value):"",r=await fetch("/api/strategies/research-history"+s,{headers:a}).then(function(c){return c.json()});B.value=r&&r.items||[]}catch(e){console.error("[research-history] 加载失败:",e),Ce.value=!0}finally{Re.value=!1}}async function Ba(){Ie.value=!0;try{const e=window.__quantModules&&window.__quantModules.core||{},a=typeof e.authHeaders=="function"?e.authHeaders():{},s=T.value?"?type="+encodeURIComponent(T.value):"",r=await fetch("/api/strategies/research-history/export"+s,{headers:a});if(!r.ok)throw new Error("HTTP "+r.status);const c=await r.blob(),m=URL.createObjectURL(c),z=document.createElement("a");z.href=m,z.download="research_history.csv",document.body.appendChild(z),z.click(),document.body.removeChild(z),URL.revokeObjectURL(m)}catch(e){console.error("[research-history] 导出失败:",e)}finally{Ie.value=!1}}function Ja(e){const a=p.value.indexOf(e);a>=0?p.value.splice(a,1):p.value.length<10&&p.value.push(e)}function Fa(e){Ne.value=Ne.value===e?"":e}async function Ua(){const e=p.value;if(!(e.length<2)){Pe.value=!0;try{const a=window.__quantModules&&window.__quantModules.core||{},s=typeof a.authHeaders=="function"?a.authHeaders():{},r=await fetch("/api/strategies/research-history/compare",{method:"POST",headers:Object.assign({"Content-Type":"application/json"},s),body:JSON.stringify({ids:e})}).then(function(c){return c.json()});We.value=r&&r.items||[]}catch(a){console.error("[research-history] 对比失败:",a)}finally{Pe.value=!1}}}async function Ga(e){try{const a=window.__quantModules&&window.__quantModules.core||{},s=typeof a.authHeaders=="function"?a.authHeaders():{},r=await fetch("/api/strategies/research-history/"+e,{method:"DELETE",headers:s}).then(function(c){return c.json()});if(r&&r.deleted){B.value=B.value.filter(function(m){return m.id!==e});const c=p.value.indexOf(e);c>=0&&p.value.splice(c,1)}}catch(a){console.error("[research-history] 删除失败:",a)}}return{...b,btHistory:$e,btHistoryLoading:_e,btHistoryError:Se,btHistoryDays:Ke,loadBtHistory:Qe,researchHistory:B,researchHistoryLoading:Re,researchHistoryError:Ce,researchHistoryType:T,researchHistorySelected:p,researchDetailId:Ne,researchCompareRows:We,researchCompareLoading:Pe,researchTypeLabel:Va,openResearchHistory:Ma,loadResearchHistory:Xe,researchExportLoading:Ie,exportResearchHistory:Ba,toggleResearchSelect:Ja,toggleResearchDetail:Fa,runResearchCompare:Ua,deleteResearchHistory:Ga,marketReviews:ze,marketReviewLoading:J,marketReviewError:j,selectedReviewDate:L,marketReviewDetail:q,marketReviewDetailLoading:F,marketReviewDetailError:k,loadMarketReviews:U,openMarketReview:aa,backToMarketReviewList:ta,loadMarketReviewDetail:Oe,marketReviewChgClass:sa,marketReviewChgText:la,marketReviewSrcEntries:ra,scanPool:G,scanLoading:Y,scanError:H,scanResult:A,eventScope:je,eventsLoading:$,eventsData:w,loadScan:Le,loadEvents:qe,scanGroups:ia,eventGroups:na,strategies:x,strategiesLoading:K,strategiesError:Q,activeStrategyId:l,activeStrategy:le,paramValues:d,strategyRunning:W,ptradeCode:_,strategyRuns:X,savingProfile:De,variantSaving:Te,loadStrategies:re,onStrategyChange:Ae,runActiveStrategy:ba,exportActivePtradeCode:ka,copyPtradeCode:xa,profiles:S,profileSelect:R,profileName:C,loadProfiles:N,saveProfile:ua,applyProfile:ma,deleteProfile:pa,govEnabled:Z,govSchedule:ae,govUniverse:te,govRunning:se,lastHoldings:E,loadGov:ie,updateGov:fa,runOnceActive:ya,openLastHoldings:ga,cloneStrategy:wa,govShowCalendar:ee,factorKey:V,factorIcLoading:ne,factorLayerLoading:ce,factorIcReport:Ve,factorLayerResult:Me,factorOptions:_a,runFactorIc:Ra,runFactorLayer:Ca,factorDetail:ve,factorDetailLoading:ue,runFactorDetail:Na,variants:Fe,variantSelected:v,variantSpec:u,specFields:Ue,aiCode:h,aiCodeLoading:me,variantBusy:I,variantMsg:i,loadVariants:ye,cloneNewStrategy:Pa,selectVariant:Ia,loadVariantSpec:M,saveVariantSpec:Da,runVariantOnce:Ta,genVariantAiCode:za,copyVariantCode:Oa,customName:Ge,customPrompt:ge,customs:Ye,customSelected:y,customCode:g,customMsg:n,customBtResult:we,customGenLoading:he,customBtLoading:be,customOptLoading:ke,loadCustoms:xe,genCustomCode:ja,loadCustomCode:La,runCustomBacktest:qa,runCustomOptimize:Ha,copyCustomCode:Aa,tagClass:ca,formatPrice:oa,chgClass:da,chgText:va,sweepGrid:Be,sweepResult:oe,sweepMessage:P,sweepLoading:de,sweepStability:Je,runSweep:Sa}}}})();
