// quant-calendar: SystemPage 组件 (v3.6.0-T4 / FR-3.6.2)
// 系统配置页: 结构 = system根(v-if, 含status/autoeval/datasource/feature四子页+根级配置区) + user(v-else-if) + about(v-else-if)
// 注: 原始 in-DOM 模板中 user/about 的 v-else-if 是 system 根 div 的兄弟节点 (KeepAlive 三节点), 组件化时原样保留
(function () {
  const { inject } = Vue;

  window.__quantComponents = window.__quantComponents || {};

  window.__quantComponents.SystemPage = {
    name: 'qc-system-page',
    template: `
                <div v-if="currentPage === 'system'" key="system" class="system-page-root">
                    <div v-if="currentSubPage === 'status'" class="card system-status-card">
                        <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>🖥️ 系统状态</span>
                            <div style="display: flex; align-items: center; gap: 8px;">
                                <span v-if="dashboardData.latest_date" style="font-size: var(--font-sm); color: var(--text-secondary);">📅 {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon">📈</div>
                                <div class="status-info">
                                    <div class="status-label">股票数据</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ stockCount || '---' }} 只</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">🎯</div>
                                <div class="status-info">
                                    <div class="status-label">选股策略</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item" @click="currentSubPage = 'autoeval'" style="cursor:pointer;" title="点击配置 AI 自动评股">
                                <div class="status-icon">🤖</div>
                                <div class="status-info">
                                    <div class="status-label">AI服务</div>
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? '正常' : '⏳ 需配置' }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item" @click="currentSubPage = 'feature'" style="cursor:pointer;" title="点击配置飞书推送">
                                <div class="status-icon">📢</div>
                                <div class="status-info">
                                    <div class="status-label">飞书推送</div>
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? '已配置' : '⏳ 未配置' }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item" @click="currentSubPage = 'datasource'" style="cursor:pointer;" title="点击配置数据源">
                                <div class="status-icon">📊</div>
                                <div class="status-info">
                                    <div class="status-label">Tushare</div>
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ tushareStatus === 'connected' ? '已连接' : '⏳ 未连接' }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">📆</div>
                                <div class="status-info">
                                    <div class="status-label">交易日历</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ tradeDateCount || '---' }} 天</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">💎</div>
                                <div class="status-info">
                                    <div class="status-label">在池股票</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ currentPoolSize }} 只</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.4.0-T4: 系统监控面板 -->
                        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border-light);">
                            <div style="font-weight: var(--font-semibold); margin-bottom: 10px; font-size: var(--font-base);">📊 资源监控</div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 10px;">
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">CPU</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ sysMonitor.cpu_percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">内存</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ sysMonitor.mem_percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">磁盘</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ sysMonitor.percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">运行时长</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ sysMonitor.uptime ? sysMonitor.uptime.toFixed(1) + 'h' : '--' }}</div>
                                </div>
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">平均延迟</div>
                                    <div class="status-value" style="color: var(--primary-color);">{{ sysMonitor.metrics?.avg_ms ?? '--' }}ms</div>
                                </div>
                                <div class="status-item" style="background: var(--bg-card-header); border-radius: 8px; padding: 10px;">
                                    <div class="status-label">错误率</div>
                                    <div class="status-value" :style="{color: (sysMonitor.metrics?.error_rate ?? 0) > 5 ? 'var(--el-danger)' : 'var(--primary-color)'}">{{ sysMonitor.metrics?.error_rate ?? 0 }}%</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.4.0-T7: 页面热度排行 -->
                        <div style="margin-top: 16px; padding-top: 14px; border-top: 1px solid var(--border-light);">
                            <div style="font-weight: var(--font-semibold); margin-bottom: 10px; font-size: var(--font-base);">🔥 页面热度 (近 {{ analyticsDays }} 天)</div>
                            <div v-if="analyticsRank.length" style="display: flex; flex-direction: column; gap: 6px;">
                                <div v-for="(r, i) in analyticsRank.slice(0, 5)" :key="r.page" style="display: flex; align-items: center; gap: 10px; font-size: var(--font-base);">
                                    <span style="width: 20px; color: var(--text-tertiary);">{{ i + 1 }}</span>
                                    <span style="flex: 1;">{{ r.page }}</span>
                                    <span style="color: var(--text-secondary);">{{ r.views }} 次</span>
                                </div>
                            </div>
                            <div v-else style="color: var(--text-tertiary); font-size: var(--font-sm);">暂无访问数据</div>
                        </div>

                    <!-- 访问限速配置 -->
                    <div class="card" style="margin-top: 24px;">
                        <div class="card-title">🚦 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 8px;">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="card">
                        <div class="card-title">🎨 主题选择</div>
                        <div class="theme-list">
                            <div v-for="(theme, key) in themes" :key="key" class="theme-item" :class="{active: currentTheme === key}" @click="changeTheme(key)">
                                <div class="theme-color" :style="{background: theme.gradient}"></div>
                                <div style="font-size: var(--font-base); font-weight: var(--font-medium);">{{ theme.name }}
                                    <span v-if="currentUser?.theme === key" style="font-size: var(--font-xs); color: var(--primary-color); margin-left: 4px;">默认</span>
                                </div>
                                <span v-if="currentTheme === key" class="theme-current-badge">当前</span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-title">🎯 图标系统</div>
                        <div class="theme-list">
                            <div class="theme-item" :class="{active: iconSystem === 'emoji'}" @click="switchIconSystem('emoji')">
                                <div class="theme-color" style="background: var(--gradient-brand);"></div>
                                <div style="font-size: var(--font-base); font-weight: var(--font-medium);">原生<span v-if="iconSystem === 'emoji'" style="font-size: var(--font-xs); color: var(--primary-color); margin-left: 4px;">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'ink'}" @click="switchIconSystem('ink')">
                                <div class="theme-color" style="background: linear-gradient(135deg, var(--bg-hover, var(--gold-light)), var(--bg-card, var(--gold-bg)));"></div>
                                <div style="font-size: var(--font-base); font-weight: var(--font-medium);">墨韵<span v-if="iconSystem === 'ink'" style="font-size: var(--font-xs); color: var(--primary-color); margin-left: 4px;">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'edge'}" @click="switchIconSystem('edge')">
                                <div class="theme-color" style="background: linear-gradient(135deg, var(--color-ai), var(--color-ai));"></div>
                                <div style="font-size: var(--font-base); font-weight: var(--font-medium);">锋线<span v-if="iconSystem === 'edge'" style="font-size: var(--font-xs); color: var(--primary-color); margin-left: 4px;">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'crystal'}" @click="switchIconSystem('crystal')">
                                <div class="theme-color" style="background: linear-gradient(135deg, var(--color-ai), var(--color-ai));"></div>
                                <div style="font-size: var(--font-base); font-weight: var(--font-medium);">叠彩<span v-if="iconSystem === 'crystal'" style="font-size: var(--font-xs); color: var(--primary-color); margin-left: 4px;">当前</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                    <!-- autoeval: 自动评股配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title">🤖 自动评股配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select v-model="autoEvaluateConfig.schedule_type" style="width: 160px;" @change="saveAutoEvaluateConfig">
                                            <el-option label="每个交易日" value="daily" />
                                            <el-option label="每周一" value="weekly" />
                                            <el-option label="每月1号" value="monthly" />
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="执行时间">
                                        <el-time-picker v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" style="width: 160px;" @change="saveAutoEvaluateConfig" />
                                    </el-form-item>
                                    <el-form-item label="评估范围">
                                        <el-radio-group v-model="autoEvaluateScope" @change="saveAutoEvaluateConfig">
                                            <el-radio label="watchlist">我的自选</el-radio>
                                            <el-radio label="new_entries">最新交易日新入池</el-radio>
                                        </el-radio-group>
                                    </el-form-item>
                                    <el-form-item label="结果推送">
                                        <el-switch v-model="autoEvaluateConfig.push_to_feishu" active-text="推送到飞书" inactive-text="不推送" @change="saveAutoEvaluateConfig" />
                                    </el-form-item>
                                    <el-form-item v-if="autoEvaluateConfig.push_to_feishu" label="Webhook">
                                        <el-input v-model="autoEvaluateConfig.feishu_webhook" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..." @change="saveAutoEvaluateConfig" style="width: 100%; max-width: 420px;" />
                                    </el-form-item>
                                </template>
                            </el-form>
                        </div>

                    <!-- AI 模型管理 -->
                    <div class="card" style="margin-top: 16px;">
                        <div class="card-title">🤖 AI 模型管理</div>
                        <p style="color: var(--text-secondary); font-size: var(--font-sm); margin: 0 0 16px 0;">按优先级串行调用，首个可用模型返回结果。</p>
                        <div style="display: flex; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
                            <el-button size="small" type="primary" @click="loadAiModels">🔄 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllModels" :loading="testingAllModels">🧪 探测全部</el-button>
                            <el-button size="small" type="primary" @click="saveAiModels" :loading="savingAiModels">💾 保存</el-button>
                            <el-button size="small" type="primary" @click="addModel" style="margin-left:auto;">➕ 新增模型</el-button>
                        </div>
                        <div v-if="aiModelsError" style="color:var(--el-danger);padding:16px;text-align:center;">⚠️ {{ aiModelsError }} <el-button size="small" @click="loadAiModels">重试</el-button></div>
                        <div v-if="!aiModelsError && aiModels.length===0" style="color:var(--text-tertiary);padding:20px;text-align:center;">加载中...</div>
                        <div v-if="!aiModelsError && aiModels.length>0">
                        <div v-for="(m,idx) in aiModels" :key="m.id" class="card" style="margin-bottom: 10px;">
                            <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
                                <span>{{ m.id }} <el-tag size="small" style="margin-left: 8px;">{{ m.provider }}</el-tag><span v-if="m.locked" style="margin-left:6px;font-size: var(--font-sm);color:var(--text-tertiary);">🔒</span></span>
                                <div style="display: flex; align-items: center; gap: 10px;">
                                    <el-button v-if="!m.locked" size="small" type="danger" @click="deleteModel(idx)" style="margin-right:4px;">🗑️</el-button>
                                    <span v-if="m.testResult!==undefined" style="font-size: var(--font-sm);" :style="{color: m.testResult.success?'var(--el-success)':'var(--el-danger)'}">{{ m.testResult.success?'✓':'✗'}} {{ m.testResult.message }}</span>
                                    <el-switch v-model="m.enabled" size="small" @change="onModelToggle(m)"/>
                                </div>
                            </div>
                            <el-form label-width="80px" size="small">
                                <el-form-item label="模型名"><el-input v-model="m.model" placeholder="模型标识"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="m.base_url" placeholder="API端点"/></el-form-item>
                                <el-form-item label="API Key"><el-input v-model="m.api_key" type="password" show-password placeholder="密钥"/></el-form-item>
                                <el-form-item label="超时(秒)"><el-input-number v-model="m.timeout" :min="10" :max="300" size="small"/></el-form-item>
                                <el-form-item>
                                    <el-button @click="testModel(m)" :loading="m._testing" type="primary" size="small">🧪 测试连接</el-button>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div style="background: var(--bg-card-header); border-radius: 8px; padding: 10px 14px; margin-bottom: 16px; font-size: var(--font-base); color: var(--text-primary); display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <span>🔢 数据源优先级:</span>
                        <span style="font-weight: var(--font-medium);">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span style="color: var(--text-tertiary); margin-left: auto;">按优先级依次尝试</span>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card" style="margin-bottom: 14px;">
                        <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>🔗 sxsc-tushare（券商版）</span>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span v-if="datasourceStatus.sxsc_tushare === 'connected'" style="color: var(--el-success); font-size: var(--font-sm);">已连接</span>
                                <span v-else-if="datasourceStatus.sxsc_tushare === 'testing'" style="color: var(--el-warning); font-size: var(--font-sm);">测试中...</span>
                                <span v-else style="color: var(--text-tertiary); font-size: var(--font-sm);">⏳ 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input v-model="datasourceConfig.sxsc_tushare.token" type="password" placeholder="输入 sxsc-tushare Token" show-password @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.sxsc_tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('sxsc_tushare')" :loading="datasourceStatus.sxsc_tushare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- tushare 卡片 -->
                    <div class="card" style="margin-bottom: 14px;">
                        <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>📡 tushare（标准版 Pro）</span>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span v-if="datasourceStatus.tushare === 'connected'" style="color: var(--el-success); font-size: var(--font-sm);">已连接</span>
                                <span v-else-if="datasourceStatus.tushare === 'testing'" style="color: var(--el-warning); font-size: var(--font-sm);">测试中...</span>
                                <span v-else style="color: var(--text-tertiary); font-size: var(--font-sm);">⏳ 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <el-input v-model="datasourceConfig.tushare.token" type="password" placeholder="输入 Tushare Token" show-password @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="Endpoint">
                                <el-input v-model="datasourceConfig.tushare.endpoint" placeholder="http://api.tushare.pro" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('tushare')" :loading="datasourceStatus.tushare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- akshare 卡片 -->
                    <div class="card" style="margin-bottom: 14px;">
                        <div class="card-title" style="display: flex; justify-content: space-between; align-items: center;">
                            <span>🌐 akshare（开源免费）</span>
                            <div style="display: flex; align-items: center; gap: 10px;">
                                <el-switch v-model="datasourceConfig.akshare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span v-if="datasourceStatus.akshare === 'connected'" style="color: var(--el-success); font-size: var(--font-sm);">可用</span>
                                <span v-else-if="datasourceStatus.akshare === 'testing'" style="color: var(--el-warning); font-size: var(--font-sm);">测试中...</span>
                                <span v-else style="color: var(--text-tertiary); font-size: var(--font-sm);">⏳ 未检测</span>
                            </div>
                        </div>
                        <div style="font-size: var(--font-base); color: var(--text-secondary); padding: 8px 0 12px 0;">
                            开源免费数据接口，从东方财富等公开网站获取数据，无需 Token
                        </div>
                        <el-form label-width="80px">
                            <el-form-item>
                                <el-button @click="testDatasource('akshare')" :loading="datasourceStatus.akshare === 'testing'" type="primary" size="small">🧪 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>

                    <!-- feature 子页: 功能开关与配置 -->
                    <div v-else-if="currentSubPage === 'feature'">
                        <div class="card">
                        <div class="card-title">🎛️ 策略筛选</div>
                        <div style="margin-bottom: 12px;">
                            <el-checkbox-group v-model="strategyFilter.selected" @change="saveStrategyFilter">
                                <el-checkbox v-for="s in strategyFilterOptions" :key="s" :label="s" border style="margin-bottom: 6px;">
                                    {{ s }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div style="margin-bottom: 12px; display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
                            <span style="font-size: var(--font-base); color: var(--text-secondary);">过滤方式：</span>
                            <el-radio-group v-model="strategyFilter.mode" @change="saveStrategyFilter">
                                <el-radio label="union">并集（任一匹配）</el-radio>
                                <el-radio label="intersection">交集（全部匹配）</el-radio>
                            </el-radio-group>
                        </div>
                        <div style="background: var(--bg-card-header); border-radius: 8px; padding: 10px 14px; margin-bottom: 12px; font-size: var(--font-base); color: var(--text-primary);">
                            <div style="margin-bottom: 6px; font-weight: var(--font-medium);">🔍 预览匹配股票数</div>
                            <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                                <span>☀️ 日视图: <strong>{{ strategyPreviewCount.day ?? '-' }}</strong></span>
                                <span>📅 周视图: <strong>{{ strategyPreviewCount.week ?? '-' }}</strong></span>
                                <span>🗓️ 月视图: <strong>{{ strategyPreviewCount.month ?? '-' }}</strong></span>
                                <span>📆 年视图: <strong>{{ strategyPreviewCount.year ?? '-' }}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.3.0-T8: 数据备份与恢复 -->
                    <div class="card" style="margin-top: 14px;">
                        <div class="card-title">💾 数据备份与恢复</div>
                        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
                            <el-button size="small" type="primary" :loading="backupCreating" @click="createBackup">立即备份</el-button>
                            <el-button size="small" @click="loadBackups">刷新列表</el-button>
                        </div>
                        <div v-if="backups.length" style="max-height: 220px; overflow-y: auto;">
                            <div v-for="b in backups" :key="b.name" style="display: flex; align-items: center; justify-content: space-between; padding: 8px 10px; border-bottom: 1px solid var(--border-light); font-size: var(--font-base);">
                                <span>🕐 {{ b.time }} <span style="color: var(--text-tertiary); font-size: var(--font-xs);">({{ (b.size / 1024).toFixed(0) }} KB)</span></span>
                                <el-button size="small" type="danger" plain :disabled="currentUser?.role !== 'admin'" @click="restoreBackup(b.name)">恢复</el-button>
                            </div>
                        </div>
                        <div v-else style="color: var(--text-tertiary); font-size: var(--font-sm);">暂无备份</div>
                    </div>
                    <!-- v2.0: 美林时钟配置 -->
                    <div class="card" style="margin-top: 16px;">
                        <div class="card-title">⏱️ 美林时钟</div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span style="color: var(--text-secondary); font-size: var(--font-base);">
                                上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong>
                            </span>
                            <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">
                                🔄 手动重评估
                            </el-button>
                        </div>
                        <div v-if="merrillReevalResult" style="font-size: var(--font-base); margin-bottom: 10px; padding: 8px 12px; background: var(--el-fill-color-light); border-radius: 6px;" :style="{color: merrillReevalResult.includes('失败') ? 'var(--el-danger)' : 'var(--el-success)'}">
                            {{ merrillReevalResult }}
                        </div>
                        <div style="display: flex; align-items: center; gap: 16px;">
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">自动刷新</label>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">间隔</label>
                                <el-select v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" style="width: 100px;" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="300" label="5分钟" />
                                    <el-option :value="600" label="10分钟" />
                                    <el-option :value="1800" label="30分钟" />
                                    <el-option :value="3600" label="1小时" />
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <!-- v1.8.0: 数据刷新配置 -->
                    <div class="card" style="margin-top: 16px;">
                        <div class="card-title">🔄 策略数据刷新</div>
                        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
                            <span style="color: var(--text-secondary); font-size: var(--font-base);">
                                上次刷新: <strong>{{ dataRefreshConfig.last_refresh || '—' }}</strong>
                                <span v-if="dataRefreshConfig.last_refresh_status" style="margin-left: 6px; font-size: var(--font-sm);" :style="{color: dataRefreshConfig.last_refresh_status.startsWith('failed') ? 'var(--el-danger)' : 'var(--el-success)'}">
                                    {{ dataRefreshConfig.last_refresh_status.startsWith('failed') ? '失败' : '' }}
                                </span>
                            </span>
                            <el-button size="small" type="primary" @click="triggerDataReload" :loading="dataRefreshReloading">
                                🔄 手动加载
                            </el-button>
                            <el-button size="small" type="success" @click="triggerDataPull" :loading="dataPullRunning">
                                📥 手动拉取
                            </el-button>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <!-- 定时刷新 -->
                            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">定时刷新</label>
                                    <el-switch v-model="dataRefreshConfig.scheduled_enabled" @change="saveDataRefreshConfig" size="small" />
                                </div>
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">时间</label>
                                    <el-time-picker v-model="dataRefreshConfig.scheduled_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" style="width: 110px;" :disabled="!dataRefreshConfig.scheduled_enabled" placeholder="22:00" />
                                </div>
                            </div>
                            <!-- 文件变动监听 -->
                            <div style="display: flex; align-items: center; gap: 6px;">
                                <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">文件变动监听</label>
                                <el-switch v-model="dataRefreshConfig.watch_enabled" @change="saveDataRefreshConfig" size="small" />
                                <span style="font-size: var(--font-sm); color: var(--text-tertiary); margin-left: 4px;">文件变动时自动刷新</span>
                            </div>
                            <!-- v3.12 (FR-3.12.1): 定时拉取配置 -->
                            <div class="card" style="border: 1px solid var(--bg-hover); background: var(--bg-card-header); border-radius: 8px; padding: 12px 14px;">
                                <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                                    <div style="display: flex; align-items: center; gap: 6px;">
                                        <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">定时拉取日线</label>
                                        <el-switch v-model="dataRefreshConfig.pull_enabled" @change="saveDataRefreshConfig" size="small" />
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 6px;">
                                        <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">时间</label>
                                        <el-time-picker v-model="dataRefreshConfig.pull_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" style="width: 110px;" :disabled="!dataRefreshConfig.pull_enabled" placeholder="22:30" />
                                    </div>
                                    <div style="display: flex; align-items: center; gap: 6px;">
                                        <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">频率</label>
                                        <el-select v-model="dataRefreshConfig.pull_frequency" @change="saveDataRefreshConfig" size="small" style="width: 110px;" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="每日" value="daily" />
                                            <el-option label="每周" value="weekly" />
                                        </el-select>
                                    </div>
                                    <div v-if="dataRefreshConfig.pull_frequency === 'weekly'" style="display: flex; align-items: center; gap: 6px;">
                                        <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">周几</label>
                                        <el-select v-model="dataRefreshConfig.pull_weekday" @change="saveDataRefreshConfig" size="small" style="width: 90px;" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="周一" value="0" />
                                            <el-option label="周二" value="1" />
                                            <el-option label="周三" value="2" />
                                            <el-option label="周四" value="3" />
                                            <el-option label="周五" value="4" />
                                        </el-select>
                                    </div>
                                </div>
                                <div style="display: flex; align-items: center; gap: 8px; margin-top: 10px; flex-wrap: wrap;">
                                    <label style="font-size: var(--font-base); color: var(--text-primary); white-space: nowrap;">股票池</label>
                                    <el-select v-model="dataRefreshConfig.stock_pool" multiple filterable allow-create default-first-option collapse-tags
                                        @change="saveDataRefreshConfig" size="small" style="flex: 1; min-width: 200px;" :disabled="!dataRefreshConfig.pull_enabled"
                                        placeholder="输入股票代码后回车, 留空=全部覆盖股票">
                                        <el-option v-for="c in dataRefreshConfig.stock_pool" :key="c" :label="c" :value="c" />
                                    </el-select>
                                </div>
                                <div style="font-size: var(--font-sm); color: var(--text-tertiary); margin-top: 6px;">
                                    拉取成功后自动刷新解析器/视图 (数据自动入库)
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- v1.9.2: 策略研究菜单开关 -->
                    <div class="card" style="margin-top: 16px;">
                        <div class="card-title">🔬 策略研究菜单</div>
                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <span style="color: var(--text-secondary); font-size: var(--font-base);">
                                {{ researchMenuEnabled ? '已显示策略研究菜单' : '已隐藏策略研究菜单' }}
                            </span>
                            <el-switch v-model="researchMenuEnabled" @change="toggleResearchMenu" size="small" />
                        </div>
                    </div>
                </div>
                    <div v-else-if="currentSubPage === 'user'">
                        <div v-if="currentUser?.role !== 'admin'" class="card" style="text-align: center; padding: 40px;">
                            <div style="font-size: var(--font-3xl); margin-bottom: 12px;">🔐</div>
                            <div style="color: var(--text-secondary);">仅管理员可访问此页面</div>
                        </div>
                        <div v-else>
                        <div class="card">
                            <div class="card-title">👥 用户与权限</div>
                            <p style="color: var(--text-secondary);">用户列表: {{ userList.length }} 个用户 | 分组: {{ Object.keys(allGroups).length }} 个</p>
                        </div>

                    <!-- Tab 切换 -->
                    <div style="display: flex; gap: 8px; margin-bottom: 16px;">
                        <el-button :type="userPageTab === 'users' ? 'primary' : ''" size="small" @click="userPageTab = 'users'">👥 用户列表</el-button>
                        <el-button :type="userPageTab === 'groups' ? 'primary' : ''" size="small" @click="userPageTab = 'groups'">📋 分组配置</el-button>
                    </div>

                    <!-- 用户列表 Tab -->
                    <div v-if="userPageTab === 'users'">
                    <div class="card">
                        <div class="card-title">👥 用户列表 ({{ userList.length }}人)</div>
                        <div style="display: flex; gap: 12px; margin-bottom: 12px; align-items: center;">
                            <el-input v-model="userSearch" placeholder="搜索用户名..." clearable size="small" style="width: 160px;" />
                            <el-select v-model="groupFilter" placeholder="分组" clearable size="small" style="width: 120px;">
                                <el-option v-for="(g, gid) in allGroups" :key="gid" :label="g.name" :value="gid" />
                            </el-select>
                            <el-button type="primary" size="small" @click="showAddUser = true">+ 添加用户</el-button>
                        </div>
                            <div v-for="user in filteredUsers" :key="user.username" class="user-card-enhanced" :style="{opacity: user.enabled === false ? 0.55 : 1}">
                                <div class="user-info-enhanced">
                                    <div class="user-avatar-large" :class="'avatar-' + ({'rose-red':'rose','vibrant-orange':'orange','tech-blue':'blue','classic-white':'blue','classic-red':'rose','classic-gold':'orange'}[user.theme] || 'blue')">{{ user.username.charAt(0).toUpperCase() }}</div>
                                    <div class="user-details">
                                        <div class="user-name-enhanced">
                                            {{ user.username }}
                                            <span class="user-role-tag" :class="user.role">
                                                {{ user.role === 'admin' ? '管理员' : '普通用户' }}
                                            </span>
                                            <span class="user-group-tag" :class="'group-' + (user.group === 'admin' ? 'admin' : user.group === 'guest' ? 'guest' : 'user')">{{ getGroupName(user.group || user.role) }}</span>
                                            <span v-if="user.enabled === false" class="user-disabled-badge">已禁用</span>
                                            <span v-if="user.theme" class="user-theme-dot" :class="'dot-' + (user.theme === 'rose-red' ? 'rose' : user.theme === 'vibrant-orange' ? 'orange' : 'blue')" :title="themes[user.theme]?.name || user.theme"></span>
                                        </div>
                                        <div class="user-meta-info">
                                            <span v-if="user.created_at" style="margin-right: 12px;">
                                                🕐 创建于: {{ new Date(user.created_at).toLocaleDateString('zh-CN') }}
                                            </span>
                                            <span v-if="user.last_login_at">
                                                🕐 上次登录: {{ new Date(user.last_login_at).toLocaleString('zh-CN') }}
                                            </span>
                                            <span v-if="user.login_count !== undefined" style="margin-left: 12px;">
                                                🔐 登录: {{ user.login_count }}次
                                            </span>
                                        </div>
                                        <div class="user-status-row" v-if="user.username !== 'admin'">
                                            <span style="font-size: var(--font-sm); color: var(--text-secondary); display: flex; align-items: center; gap: 6px;">
                                                账号状态:
                                                <el-switch v-model="user.enabled" size="small" :active-text="user.enabled ? '启用' : '禁用'"
                                                    @change="toggleUserEnabled(user)">
                                                </el-switch>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="user-actions-enhanced">
                                    <el-button size="small" type="primary" @click="editUser(user)">编辑</el-button>
                                    <el-button size="small" type="warning" @click="resetUserPassword(user)">重置密码</el-button>
                                    <el-button v-if="user.username !== 'admin'" size="small" type="danger" @click="deleteUser(user.username)">删除</el-button>
                                </div>
                            </div>
                    </div>
                    </div>

                    <!-- 分组配置 Tab -->
                    <div v-if="userPageTab === 'groups'">

                    <!-- 分组列表 -->
                    <div v-for="(g, gid) in allGroups" :key="gid" class="card" style="margin-bottom: 12px;">
                        <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px;">
                            <div style="flex: 1; min-width: 200px;">
                                <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 4px;">
                                    <strong style="font-size: var(--font-lg);">{{ g.name }}</strong>
                                    <span style="font-size:10px;color:var(--text-tertiary);">{{ gid }}</span>
                                    <span v-if="g.locked" style="font-size:10px;color:var(--text-tertiary);">🔒</span>
                                </div>
                                <div style="font-size: var(--font-sm); color: var(--text-secondary); margin-bottom: 6px;">{{ g.description }}</div>
                                <div style="font-size: var(--font-sm); color: var(--text-tertiary);">
                                    成员 {{ getGroupMemberCount(gid) }}人 · 菜单 {{ getMenuEnabledCount(g) }}/{{ Object.keys(g.visible_menus || {}).length }}
                                </div>
                            </div>
                            <div style="display: flex; gap: 6px; flex-shrink: 0; align-items: center;">
                                <el-button v-if="!g.locked" size="small" @click="toggleGroupExpand(gid)">{{ expandedGroups[gid] ? '收起' : '👥 成员' }}</el-button>
                                <el-button size="small" type="primary" @click="openMenuConfig(gid)">⚙️ 菜单</el-button>
                                <el-button v-if="!g.locked" size="small" type="danger" @click="deleteGroupConfig(gid)">删除</el-button>
                            </div>
                        </div>
                        <!-- 成员列表（锁定组始终显示，非锁定组展开后显示） -->
                        <div v-if="g.locked || expandedGroups[gid]" style="margin-top: 10px; padding-top: 10px; border-top: 1px solid var(--border-light);">
                            <div style="display: flex; flex-wrap: wrap; gap: 6px;">
                                <span v-for="u in userList.filter(u => (u.group || u.role) === gid)" :key="u.username"
                                    style="padding: 3px 10px; background: var(--bg-page); border-radius: 12px; font-size: var(--font-sm);">
                                    {{ u.username }}<span v-if="u.role==='admin'" style="color:var(--primary-color);"> · 管理</span>
                                </span>
                                <span v-if="getGroupMemberCount(gid) === 0" style="color: var(--text-tertiary); font-size: var(--font-sm);">暂无成员</span>
                            </div>
                        </div>
                    </div>
                    <div v-if="Object.keys(allGroups).length === 0" style="color: var(--text-tertiary); padding: 20px; text-align: center;">暂无分组数据</div>
                    </div>

                    </div>
                    </div>
                    <div v-else-if="currentSubPage === 'about'">
                        <div class="card">
                            <div class="card-title">📖 软件简介</div>
                            <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-md);">
                                <p style="margin: 0 0 12px 0;">基于<strong style="color: var(--text-primary);">美林时钟经济周期理论</strong>，融合多策略选股与 AI 深度评估的智能投研工具。</p>
                                <p style="margin: 0;"><strong style="color: var(--text-primary);">核心功能：</strong></p>
                                <ul style="margin: 6px 0 0 0; padding-left: 20px;">
                                    美林时钟 — GDP/CPI/PMI/社融/利率五维评分，四阶段自动切换
                                    多策略选股 — 多因子/行业轮动/资金流/指数增强，共识榜交叉验证
                                    AI 评股 — 多模型串行评估，技术指标自动注入
                                    飞书推送 — 定时推送每日选股报告
                                    数据源 — Tushare Pro / sxsc / akshare 三源热备
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📌 软件版本</div>
                            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
                                <span style="font-size: var(--font-lg); font-weight: var(--font-semibold); background: var(--gradient-brand); color: white; padding: 4px 16px; border-radius: 12px;">v{{ appVersion }}</span>
                                <span style="color: var(--color-success); font-size: var(--font-md);">● 服务运行中</span>
                            </div>
                        </div>
                        <!-- v3.2.0-T24: 问题反馈 -->
                        <div class="card">
                            <div class="card-title">📮 问题反馈</div>
                            <div style="display: flex; flex-direction: column; gap: 10px;">
                                <el-input v-model="feedbackText" type="textarea" :rows="3" placeholder="描述你遇到的问题或建议 (系统信息会自动附带)"></el-input>
                                <div style="display: flex; justify-content: flex-end; gap: 8px;">
                                    <el-button size="small" @click="submitFeedback" :loading="feedbackSubmitting" type="primary">提交反馈</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">🧩 系统组件</div>
                            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 12px;">
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl);">⚡</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">FastAPI</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">后端框架</div>
                                    </div>
                                </div>
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl); color: var(--el-success);">▣</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">Vue 3</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">前端框架</div>
                                    </div>
                                </div>
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl);">🎨</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">Element Plus</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">UI 组件库</div>
                                    </div>
                                </div>
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl);">🐍</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">Python 3</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">运行环境</div>
                                    </div>
                                </div>
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl);">📊</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">ECharts</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">图表引擎</div>
                                    </div>
                                </div>
                                <div style="background: var(--bg-page); border-radius: 10px; padding: 14px 16px; display: flex; align-items: center; gap: 10px;">
                                    <span style="font-size: var(--font-xl);">📡</span>
                                    <div>
                                        <div style="font-weight: var(--font-semibold); font-size: var(--font-md);">Tushare Pro</div>
                                        <div style="font-size: var(--font-sm); color: var(--text-tertiary);">金融数据 API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card" style="border-left: 4px solid var(--color-warning);">
                            <div class="card-title">⚠️ 风险提示</div>
                            <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-md);">
                                <p style="margin: 0 0 8px 0;"><strong style="color: var(--text-primary);">本系统仅供学习研究，不构成任何投资建议。</strong></p>
                                <p style="margin: 0 0 8px 0;">• 选股结果基于历史数据和量化模型，<strong>过往表现不代表未来收益</strong></p>
                                <p style="margin: 0 0 8px 0;">• 宏观指标存在滞后性，AI 评估为机器生成，不构成专业投资分析</p>
                                <p style="margin: 0;">• 数据来源 Tushare Pro 及公开数据，不保证完整性和准确性。<strong>投资有风险，入市需谨慎</strong></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📧 联系与反馈</div>
                            <div style="color: var(--text-secondary); line-height: 1.8; font-size: var(--font-md);">
                                <p style="margin: 0;">• 维护团队：犇犇量化团队</p>
                            </div>
                        </div>
                    </div>
                    </div>
    `,
    setup() {
      const state = inject('qcState');
      if (!state) return {};
      // 展开全部状态 (100+ 字段, 避免遗漏导致模板静默 undefined)
      return { ...state };
    },
  };
})();
