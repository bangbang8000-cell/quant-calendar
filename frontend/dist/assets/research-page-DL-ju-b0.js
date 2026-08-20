(function(){const{ref:t,computed:z,watch:Te,inject:De}=Vue;window.__quantComponents=window.__quantComponents||{},window.__quantComponents.ResearchPage={name:"qc-research-page",template:`
                <div v-if="currentPage === 'research'" key="research">
                    <!-- v3.16 (16.8): 功能未开启时的统一占位 -->
                    <qc-state-panel v-if="!researchMenuEnabled" type="empty" icon="🔒" title="研究功能未开启"
                        desc="请在「系统配置 → 功能开关」中启用「策略研究」菜单"></qc-state-panel>
                    <template v-else>
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
                            <!-- V4.0 M2-1: 参数网格扫描 (策略实验室) -->
                            <div class="sweep-research mt-8">
                                <div class="card-title">🔬 参数扫描 <span class="text-sm-tertiary">网格搜索 → SDK 回测 → 按指标排序</span></div>
                                <div class="flex-wrap-gap-12-mb16-c">
                                    <el-input class="w-260" size="small" v-model="sweepGrid" placeholder='JSON 网格, 如 {"top_n":[10,20,30],"st_filter":[true,false]}' />
                                    <el-button size="small" type="primary" @click="runSweep" :loading="sweepLoading">▶ 运行扫描</el-button>
                                    <span class="text-sm-tertiary">指标: 年化收益(降序)</span>
                                </div>
                                <div v-if="sweepMessage" class="text-sm-tertiary-mt8">{{ sweepMessage }}</div>
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
                            <el-button size="small" type="danger" @click="runCustomOptimize" :loading="customOptLoading">🧠 AI 优化</el-button>
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
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">年化</span><b>{{ customBtResult.metrics.annual_return_pct }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">最大回撤</span><b>{{ customBtResult.metrics.max_drawdown_pct }}%</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">夏普</span><b>{{ customBtResult.metrics.sharpe }}</b></div>
                                <div v-if="customBtResult.metrics" class="custom-bt-item"><span class="text-sm-tertiary">胜率</span><b>{{ customBtResult.metrics.win_rate_pct }}%</b></div>
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
                </div>`,setup(){const I=De("qcState"),ve=Vue.ref(!1),de=Vue.ref(!1);if(!I)return{};const ue=t([]),N=t(!1),P=t(!1),T=t(""),D=t(null),B=t(!1),w=t(!1);async function me(){N.value=!0,P.value=!1;try{const e=await fetch("/api/market/reviews?limit=30").then(a=>a.json());e&&e.success?ue.value=Array.isArray(e.data)?e.data:[]:P.value=!0}catch(e){console.error("[market-review] 复盘列表加载失败:",e),P.value=!0}finally{N.value=!1}}function je(e){T.value=e,pe(e)}function Ae(){T.value="",D.value=null,w.value=!1}async function pe(e){B.value=!0,w.value=!1,D.value=null;try{const a=e?"/api/market/review?date="+encodeURIComponent(e):"/api/market/review",s=await fetch(a).then(d=>d.json());s&&s.success?D.value=s.data:w.value=!0}catch(a){console.error("[market-review] 复盘详情加载失败:",a),w.value=!0}finally{B.value=!1}}function Oe(e){return e>0?"up":e<0?"down":"flat"}function Le(e){return e==null||isNaN(Number(e))?"—":(e>0?"+":"")+Number(e).toFixed(2)+"%"}function qe(e){const a={indexes:"指数",sectors:"板块",moneyflow:"资金",sentiment:"情绪"};return Object.entries(e||{}).map(function(s){const d=s[0],p=s[1],q=!p||p==="unavailable"||p==="数据不可达";return{label:a[d]||d,value:q?"数据不可达":p,unavailable:q}})}const E=t(["strategies","watchlist"]),M=t(!1),j=t(!1),A=t(null),fe=t("watchlist"),V=t(!1),f=t(null);async function ge(){M.value=!0,j.value=!1;try{const e="/api/market/scan?pool="+encodeURIComponent((E.value||[]).join(",")||"all"),a=await fetch(e).then(s=>s.json());a&&a.success?A.value=a.data||{moves:[],note:""}:j.value=!0}catch(e){console.error("[scan] 异动扫描失败:",e),j.value=!0}finally{M.value=!1}}async function ye(){V.value=!0;try{const e="/api/market/events?scope="+encodeURIComponent(fe.value),a=await fetch(e).then(s=>s.json());a&&a.success?f.value=a.data||{events:[],note:""}:f.value={events:[],note:"事件数据暂不可用"}}catch(e){console.error("[scan] 事件提醒加载失败:",e),f.value={events:[],note:"事件数据暂不可用"}}finally{V.value=!1}}z(function(){const e={strategies:"当日入池",watchlist:"自选股"},a=(E.value||[]).map(function(s){return e[s]}).filter(Boolean);return a.length?a.join("+"):"所选范围"});const Ne=z(function(){const e=["涨停","连板","放量","异动振幅","跌停"],a=A.value&&A.value.moves||[],s=[];return e.forEach(function(d){const p=a.filter(function(q){return(q.labels||[]).indexOf(d)>=0});p.length&&s.push({label:d,moves:p})}),s}),Be=z(function(){const e={};return(f.value&&f.value.events||[]).forEach(function(a){(e[a.type]=e[a.type]||[]).push(a)}),Object.keys(e).map(function(a){return{type:a,events:e[a]}})});function Ee(e){return e==="跌停"?"down":e==="涨停"||e==="连板"?"up":"neutral"}function Me(e){return e==null||isNaN(Number(e))?"--":Number(e).toFixed(2)}function Ve(e){return e>0?"up":e<0?"down":"flat"}function Fe(e){return e==null||isNaN(Number(e))?"—":(e>0?"+":"")+Number(e).toFixed(2)+"%"}const h=t([]),F=t(!1),J=t(!1),l=t(""),c=t({}),G=t(!1),we=t(""),b=t(""),U=t([]),k=t([]),R=t(""),S=t(""),Y=t(!0),H=t(!0),$=t("20:00"),K=t("default"),Q=t(!1),O=t(""),W=z(function(){return h.value.find(function(e){return e.id===l.value})||null});async function n(e,a){a=a||{},a.headers=Object.assign({},a.headers||{});const s=localStorage.getItem("token")||"";return s&&(a.headers.Authorization="Bearer "+s),fetch(e,a)}async function he(){F.value=!0,J.value=!1;try{const e=await n("/api/strategies").then(function(a){return a.json()});h.value=Array.isArray(e)?e:[],h.value.length&&!l.value&&(l.value=h.value[0].id,be())}catch(e){console.error("[research] 策略列表加载失败:",e),J.value=!0}finally{F.value=!1}}function be(){const e=W.value;e&&(c.value={},e.schema.forEach(function(a){c.value[a.key]=a.default}),b.value="",ke(),x(),X())}async function x(){if(!l.value){k.value=[];return}try{const e=await n("/api/strategies/"+l.value+"/profiles").then(function(a){return a.json()});k.value=e&&e.data&&e.data.profiles||[],R.value=""}catch(e){console.error("[research] 方案列表加载失败:",e),k.value=[]}}async function Je(){ve.value=!0;const e=(S.value||"").trim();if(!e){window._core&&window._core.showToast("请输入方案名称");return}try{const a=await n("/api/strategies/"+l.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:c.value})}).then(function(s){return s.json()});if(a&&a.detail){window._core&&window._core.showToast(String(a.detail));return}S.value="",await x(),window._core&&window._core.showToast("方案已保存")}catch(a){console.error("[research] 方案保存失败:",a),window._core&&window._core.showToast("方案保存失败")}}function Ge(){const e=k.value.find(function(a){return a.id===R.value});e&&(Object.keys(e.params||{}).forEach(function(a){c.value[a]=e.params[a]}),window._core&&window._core.showToast("已应用方案: "+e.name))}async function Ue(){if(R.value)try{await n("/api/strategies/"+l.value+"/profiles/"+R.value,{method:"DELETE"}).then(function(e){return e.json()}),await x(),window._core&&window._core.showToast("方案已删除")}catch(e){console.error("[research] 方案删除失败:",e)}}async function X(){try{const e=await n("/api/strategies/governance").then(function(d){return d.json()}),s=(e&&e.data&&e.data.strategies||{})[l.value]||{};Y.value=s.enabled!==!1,$.value=s.schedule||"20:00",K.value=s.universe==="all"?"all":"default",H.value=s.show_in_calendar!==!1,O.value=s.last_holdings||""}catch(e){console.error("[research] 纳管状态加载失败:",e)}}async function Ye(){try{await n("/api/strategies/governance",{method:"PUT",body:JSON.stringify({strategies:function(){const e={};return e[l.value]={enabled:Y.value,schedule:$.value,universe:K.value,show_in_calendar:H.value},e}()})}).then(function(e){return e.json()}),window._core&&window._core.showToast("纳管设置已更新")}catch(e){console.error("[research] 纳管更新失败:",e)}}async function He(){if(l.value){Q.value=!0;try{const e=await n("/api/strategies/"+l.value+"/run-once",{method:"POST",body:JSON.stringify({as_of:we.value||void 0})}).then(function(a){return a.json()});if(e&&e.detail){window._core&&window._core.showToast(String(e.detail));return}window._core&&window._core.showToast("持仓已生成"),await X()}catch(e){console.error("[research] run-once 失败:",e),window._core&&window._core.showToast("持仓生成失败")}finally{Q.value=!1}}}function $e(){O.value&&window.open(O.value.replace(/\./g,"/").replace(/^\/?home\/evergreen\/dsh-workspace\/quant-calendar-ops\//,"/api/static/"),"_blank")}function Ke(){const e=W.value;if(!e)return;const a=(S.value||"").trim()||e.name+"-副本";Qe(a,Object.assign({},c.value)),window._core&&window._core.showToast("已复制为副本方案: "+a)}async function Qe(e,a){try{await n("/api/strategies/"+l.value+"/profiles",{method:"POST",body:JSON.stringify({name:e,params:a})}).then(function(s){return s.json()}),await x()}catch(s){console.error("[research] 副本保存失败:",s)}}async function ke(){if(l.value)try{const e=await n("/api/strategies/"+l.value+"/runs?limit=5").then(function(a){return a.json()});U.value=Array.isArray(e)?e:[]}catch{U.value=[]}}async function We(){if(l.value){G.value=!0;try{const e=await n("/api/strategies/"+l.value+"/run",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({params:c.value,as_of:we.value||void 0})}).then(function(a){return a.json()});e&&e.status==="success"?ke():alert("运行失败: "+(e.detail||JSON.stringify(e)))}catch(e){console.error("[research] 策略运行失败:",e),alert("运行失败: "+e.message)}finally{G.value=!1}}}async function Xe(){if(l.value)try{const e=Object.keys(c.value).map(function(s){return encodeURIComponent(s)+"="+encodeURIComponent(c.value[s])}).join("&"),a=await n("/api/strategies/"+l.value+"/ptrade-code?"+e).then(function(s){return s.json()});a&&a.code?b.value=a.code:alert("导出失败: "+(a.detail||JSON.stringify(a)))}catch(e){console.error("[research] PTrade 导出失败:",e),alert("导出失败: "+e.message)}}function Ze(){if(!b.value)return;const e=document.createElement("textarea");e.value=b.value,document.body.appendChild(e),e.select();try{document.execCommand("copy")}catch{}document.body.removeChild(e)}Te(function(){return I.currentPage.value+"/"+I.currentSubPage.value},function(e){e==="research/market-review"&&!T.value&&me(),e==="research/scan"&&(ge(),ye()),e==="research/quant-research"&&he()},{immediate:!0});const Z=t("mom20"),ee=t(!1),ae=t(!1),Re=t(null),Se=t(null),ea=[{name:"mom20",category:"technical"},{name:"pe",category:"valuation"},{name:"pb",category:"valuation"},{name:"turnover20",category:"sentiment"},{name:"capital_flow",category:"capital"}];t('{"top_n":[10,20,30]}'),t(null),t(""),t(!1);async function aa(){ee.value=!0;try{const e=await n("/api/strategies/factors/ic",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:l.value||"multi_factor",factor_key:Z.value,params:c.value||{}})}).then(function(s){return s.json()}),a=e&&e.report?e.report.n1||{}:{};Re.value=a}catch(e){console.error("[research] 因子IC分析失败:",e),alert("因子 IC 分析失败: "+e.message)}finally{ee.value=!1}}async function ta(){ae.value=!0;try{const e=await n("/api/strategies/factors/layer",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({sid:l.value||"multi_factor",factor_key:Z.value,params:c.value||{}})}).then(function(a){return a.json()});e&&e.layers?Se.value=e:alert("分层回测: "+(e.message||"无数据"))}catch(e){console.error("[research] 分层回测失败:",e),alert("分层回测失败: "+e.message)}finally{ae.value=!1}}const xe=t([]),o=t(null),v=t(null),_e=t(null),g=t(""),te=t(!1),_=t(!1),i=t(""),se=t(""),le=t("");function y(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Ce(){try{const e=await fetch("/api/strategies/variants",{headers:y()}).then(function(a){return a.json()});xe.value=e&&e.data&&e.data.variants||[]}catch(e){console.error("[i3a] 加载 variants 失败:",e)}}async function sa(){if(!l.value){i.value="请先在量化研究选择母本策略";return}_.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+l.value+"/clone",{method:"POST",headers:y(),body:JSON.stringify({name:(S.value||"").trim()||void 0,params:Object.assign({},c.value)})}).then(function(s){return s.json()});if(e&&e.detail){i.value=String(e.detail);return}const a=e&&e.data;a&&a.sid&&(o.value=a.sid,i.value="已复制为新策略: "+a.name,await Ce(),await L(a.sid))}catch(e){console.error("[i3a] 复制失败:",e),i.value="复制失败: "+e.message}finally{_.value=!1}}async function la(e){o.value=e,i.value="",g.value="",await L(e)}async function L(e){try{const a=await fetch("/api/strategies/"+e+"/selection-spec",{headers:y()}).then(function(s){return s.json()});a&&a.data&&a.data.spec&&(v.value=Object.assign({},a.data.spec),_e.value=a.data.fields,se.value=(a.data.spec.industry_scope||[]).join(","),le.value=(a.data.spec.market_cap_range||[]).join(","))}catch(a){console.error("[i3a] 加载 spec 失败:",a)}}async function ia(){if(de.value=!0,!(!o.value||!v.value))try{v.value.industry_scope=se.value?se.value.split(/[,，]/).map(function(a){return a.trim()}).filter(Boolean):[],v.value.market_cap_range=le.value?le.value.split(/[,，]/).map(Number).filter(function(a){return!isNaN(a)}):[];const e=await fetch("/api/strategies/"+o.value+"/selection-spec",{method:"PUT",headers:y(),body:JSON.stringify({spec:v.value})}).then(function(a){return a.json()});e&&e.data&&e.data.spec&&(v.value=e.data.spec,i.value="SelectionSpec 已保存")}catch(e){console.error("[i3a] 保存 spec 失败:",e),i.value="保存失败"}}async function ra(){if(!o.value){i.value="请先选择/创建微调策略";return}_.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+o.value+"/run-once",{method:"POST",headers:y(),body:"{}"}).then(function(a){return a.json()});i.value=e&&e.detail?String(e.detail):"持仓已生成: "+(e&&e.data&&e.data.symbols||0)+" 只"}catch(e){console.error("[i3a] run-once 失败:",e),i.value="生成持仓失败"}finally{_.value=!1}}async function na(){if(!o.value){i.value="请先选择/创建微调策略";return}v.value||await L(o.value),te.value=!0,i.value="";try{const e=await fetch("/api/strategies/"+o.value+"/ai-trade-code",{method:"POST",headers:y(),body:JSON.stringify({spec:v.value})}).then(function(a){return a.json()});if(e&&e.detail){i.value=String(e.detail);return}e&&e.data&&(g.value=e.data.code||"",e.data.api_errors&&e.data.api_errors.length?i.value="生成成功(含 API 校验告警 "+e.data.api_errors.length+" 条)":i.value="AI 交易码已生成, 已通过矩阵内校验")}catch(e){console.error("[i3a] AI 交易码失败:",e),i.value="AI 生成失败: "+e.message}finally{te.value=!1}}function ca(){if(g.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(g.value).then(function(){i.value="代码已复制"});else{const e=document.createElement("textarea");e.value=g.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),i.value="代码已复制"}}const ze=t(""),ie=t(""),Ie=t([]),u=t(""),m=t(""),r=t(""),re=t(null),ne=t(!1),ce=t(!1),oe=t(!1);function C(){const e=localStorage.getItem("quant_token")||"";return e?{Authorization:"Bearer "+e,"Content-Type":"application/json"}:{"Content-Type":"application/json"}}async function Pe(){try{const e=await fetch("/api/strategies/custom",{headers:C()}).then(function(a){return a.json()});Ie.value=e&&e.data&&e.data.customs||[]}catch(e){console.error("[i3b] 加载自定义策略失败:",e)}}async function oa(){if(!ie.value.trim()){r.value="请描述策略思路";return}ne.value=!0,r.value="";try{const e=await fetch("/api/strategies/custom",{method:"POST",headers:C(),body:JSON.stringify({name:ze.value.trim()||"自定义策略",prompt:ie.value})}).then(function(a){return a.json()});if(e&&e.detail){r.value=String(e.detail);return}e&&e.data&&(m.value=e.data.code||"",r.value="AI 代写成功: "+e.data.sid+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"),await Pe())}catch(e){console.error("[i3b] AI 代写失败:",e),r.value="AI 代写失败: "+e.message}finally{ne.value=!1}}async function va(){if(u.value)try{const e=await fetch("/api/strategies/custom/"+u.value+"/code",{headers:C()}).then(function(a){return a.json()});e&&e.data&&(m.value=e.data.code||"",r.value="")}catch(e){console.error("[i3b] 读取代码失败:",e)}}async function da(){if(!u.value){r.value="请先选择自定义策略";return}ce.value=!0,r.value="";try{const e=await fetch("/api/strategies/custom/"+u.value+"/backtest",{method:"POST",headers:C(),body:"{}"}).then(function(a){return a.json()});if(e&&e.detail){r.value=String(e.detail);return}e&&e.data&&(re.value=e.data,r.value="回测完成")}catch(e){console.error("[i3b] 回测失败:",e),r.value="回测失败: "+e.message}finally{ce.value=!1}}async function ua(){if(!u.value){r.value="请先选择自定义策略";return}oe.value=!0,r.value="";try{const e=await fetch("/api/strategies/custom/"+u.value+"/ai-optimize",{method:"POST",headers:C(),body:JSON.stringify({backtest:re.value})}).then(function(a){return a.json()});if(e&&e.detail){r.value=String(e.detail);return}e&&e.data&&(m.value=e.data.code||"",r.value="AI 优化完成"+(e.data.api_errors&&e.data.api_errors.length?" (API 告警 "+e.data.api_errors.length+" 条)":" (校验通过)"))}catch(e){console.error("[i3b] AI 优化失败:",e),r.value="AI 优化失败: "+e.message}finally{oe.value=!1}}function ma(){if(m.value)if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(m.value).then(function(){r.value="代码已复制"});else{const e=document.createElement("textarea");e.value=m.value,document.body.appendChild(e),e.select(),document.execCommand("copy"),document.body.removeChild(e),r.value="代码已复制"}}return{...I,marketReviews:ue,marketReviewLoading:N,marketReviewError:P,selectedReviewDate:T,marketReviewDetail:D,marketReviewDetailLoading:B,marketReviewDetailError:w,loadMarketReviews:me,openMarketReview:je,backToMarketReviewList:Ae,loadMarketReviewDetail:pe,marketReviewChgClass:Oe,marketReviewChgText:Le,marketReviewSrcEntries:qe,scanPool:E,scanLoading:M,scanError:j,scanResult:A,eventScope:fe,eventsLoading:V,eventsData:f,loadScan:ge,loadEvents:ye,scanGroups:Ne,eventGroups:Be,strategies:h,strategiesLoading:F,strategiesError:J,activeStrategyId:l,activeStrategy:W,paramValues:c,strategyRunning:G,ptradeCode:b,strategyRuns:U,savingProfile:ve,variantSaving:de,loadStrategies:he,onStrategyChange:be,runActiveStrategy:We,exportActivePtradeCode:Xe,copyPtradeCode:Ze,profiles:k,profileSelect:R,profileName:S,loadProfiles:x,saveProfile:Je,applyProfile:Ge,deleteProfile:Ue,govEnabled:Y,govSchedule:$,govUniverse:K,govRunning:Q,lastHoldings:O,loadGov:X,updateGov:Ye,runOnceActive:He,openLastHoldings:$e,cloneStrategy:Ke,govShowCalendar:H,factorKey:Z,factorIcLoading:ee,factorLayerLoading:ae,factorIcReport:Re,factorLayerResult:Se,factorOptions:ea,runFactorIc:aa,runFactorLayer:ta,variants:xe,variantSelected:o,variantSpec:v,specFields:_e,aiCode:g,aiCodeLoading:te,variantBusy:_,variantMsg:i,loadVariants:Ce,cloneNewStrategy:sa,selectVariant:la,loadVariantSpec:L,saveVariantSpec:ia,runVariantOnce:ra,genVariantAiCode:na,copyVariantCode:ca,customName:ze,customPrompt:ie,customs:Ie,customSelected:u,customCode:m,customMsg:r,customBtResult:re,customGenLoading:ne,customBtLoading:ce,customOptLoading:oe,loadCustoms:Pe,genCustomCode:oa,loadCustomCode:va,runCustomBacktest:da,runCustomOptimize:ua,copyCustomCode:ma,tagClass:Ee,formatPrice:Me,chgClass:Ve,chgText:Fe}}}})();
