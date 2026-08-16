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
                        <div class="card-title flex-between">
                            <span>🖥️ 系统状态</span>
                            <div class="flex-c-gap-8">
                                <span class="text-sm-secondary" v-if="dashboardData.latest_date">📅 {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon">📈</div>
                                <div class="status-info">
                                    <div class="status-label">股票数据</div>
                                    <div class="status-value color-primary">{{ stockCount || '---' }} 只</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">🎯</div>
                                <div class="status-info">
                                    <div class="status-label">选股策略</div>
                                    <div class="status-value color-primary">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'autoeval'" title="点击配置 AI 自动评估">
                                <div class="status-icon">🤖</div>
                                <div class="status-info">
                                    <div class="status-label">AI服务</div>
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? '正常' : '⏳ 需配置' }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon">📢</div>
                                <div class="status-info">
                                    <div class="status-label">飞书推送</div>
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-color)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? '已配置' : '⏳ 未配置' }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
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
                                    <div class="status-value color-primary">{{ tradeDateCount || '---' }} 天</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon">💎</div>
                                <div class="status-info">
                                    <div class="status-label">在池股票</div>
                                    <div class="status-value color-primary">{{ currentPoolSize }} 只</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.4.0-T4: 系统监控面板 -->
                        <div class="section-block-top">
                            <div class="section-title-base">📊 资源监控</div>
                            <div class="grid-auto-fit-140">
                                <div class="status-item soft-tile">
                                    <div class="status-label">CPU</div>
                                    <div class="status-value color-primary">{{ sysMonitor.cpu_percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">内存</div>
                                    <div class="status-value color-primary">{{ sysMonitor.mem_percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">磁盘</div>
                                    <div class="status-value color-primary">{{ sysMonitor.percent ?? '--' }}%</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">运行时长</div>
                                    <div class="status-value color-primary">{{ sysMonitor.uptime ? sysMonitor.uptime.toFixed(1) + 'h' : '--' }}</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">平均延迟</div>
                                    <div class="status-value color-primary">{{ sysMonitor.metrics?.avg_ms ?? '--' }}ms</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">错误率</div>
                                    <div class="status-value" :style="{color: (sysMonitor.metrics?.error_rate ?? 0) > 5 ? 'var(--el-danger)' : 'var(--primary-color)'}">{{ sysMonitor.metrics?.error_rate ?? 0 }}%</div>
                                </div>
                            </div>
                        </div>

                        <!-- v3.17.12 (FR-3.17.12): 调度任务健康面板 代码起点 -->
                        <div class="section-block-top">
                            <div class="section-title-base">🧩 调度任务</div>
                            <div class="flex-col-gap-6" v-if="Object.keys(healthDetail.scheduler_tasks || {}).length">
                                <div class="flex-between flex-c-gap-8" v-for="(t, k) in healthDetail.scheduler_tasks" :key="k">
                                    <span class="flex-1">{{ t.name || k }}</span>
                                    <span class="text-sm-tertiary">最近运行: {{ t.last_run || '—' }}</span>
                                    <span class="text-sm-tertiary">最近成功: {{ t.last_success || '—' }}</span>
                                    <span :class="t.last_status === 'success' ? 'text-success-sm' : t.last_status === 'failed' ? 'text-warning-sm' : 'text-sm-tertiary'">{{ t.last_status === 'success' ? '正常' : t.last_status === 'failed' ? '失败' : '未运行' }}</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无调度任务运行记录</div>
                        </div>

                        <!-- v3.17.12: 数据源延迟趋势 -->
                        <div class="section-block-top">
                            <div class="section-title-base">📊 数据源延迟趋势</div>
                            <div class="flex-col-gap-6" v-if="(healthDetail.data_sources || []).length">
                                <div class="flex-between flex-c-gap-8" v-for="(ds, i) in healthDetail.data_sources" :key="i">
                                    <span class="flex-1">{{ ds.name }}</span>
                                    <span class="text-sm-tertiary">成功率: {{ ds.success_rate ?? '--' }}%</span>
                                    <span class="text-sm-tertiary">延迟: {{ ds.avg_latency_ms ?? '--' }}ms</span>
                                    <span :class="ds.degraded ? 'text-warning-sm' : 'text-success-sm'">{{ ds.degraded ? '降级' : '正常' }}</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无数据源调用记录</div>
                        </div>

                        <!-- v3.17.12: 备份与磁盘 -->
                        <div class="section-block-top">
                            <div class="section-title-base">💾 备份与磁盘</div>
                            <div class="grid-auto-fit-140">
                                <div class="status-item soft-tile">
                                    <div class="status-label">最近备份成功</div>
                                    <div class="status-value color-primary">{{ healthDetail.backup_last_success || '暂无备份' }}</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">备份数量</div>
                                    <div class="status-value color-primary">{{ healthDetail.backup_count ?? 0 }} 个</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">磁盘剩余</div>
                                    <div class="status-value color-primary">{{ healthDetail.disk?.free_gb ?? '--' }} GB</div>
                                </div>
                                <div class="status-item soft-tile">
                                    <div class="status-label">磁盘使用</div>
                                    <div class="status-value color-primary">{{ healthDetail.disk?.percent ?? '--' }}%</div>
                                </div>
                            </div>
                        </div>
                        <!-- v3.17.12 (FR-3.17.12): 调度任务健康面板 代码结束 -->

                        <!-- v3.4.0-T7: 页面热度排行 -->
                        <div class="section-block-top">
                            <div class="section-title-base">🔥 页面热度 (近 {{ analyticsDays }} 天)</div>
                            <div class="flex-col-gap-6" v-if="analyticsRank.length">
                                <div class="flex-c-gap-10-base" v-for="(r, i) in analyticsRank.slice(0, 5)" :key="r.page">
                                    <span class="w-20-tertiary">{{ i + 1 }}</span>
                                    <span class="flex-1">{{ r.page }}</span>
                                    <span class="color-secondary">{{ r.views }} 次</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无访问数据</div>
                        </div>

                    <!-- v3.16 (FR-3.16.1): 配置管理 — 通用操作栏 (保存全部/重置/导出/导入) -->
                    <div class="card mt-24">
                        <div class="card-title flex-between">
                            <span>⚙️ 配置管理</span>
                            <span class="text-xs-tertiary" v-if="lastSavedTime">上次保存: {{ lastSavedTime }}</span>
                        </div>
                        <div class="flex-wrap-gap-10">
                            <el-button type="primary" :loading="configSaving" @click="saveAllConfig">💾 保存全部配置</el-button>
                            <el-button @click="resetAllConfig">🔄 重置配置</el-button>
                            <el-button @click="exportConfig">📤 导出配置</el-button>
                            <el-button @click="$refs.importFileInput && $refs.importFileInput.click()">📥 导入配置</el-button>
                            <input class="hide" ref="importFileInput" type="file" accept=".json,application/json" @change="importConfig"/>
                        </div>
                        <div class="text-sm-tertiary-mt10">保存全部：将 AI / 数据源 / 飞书 / 限流 / 主题 / 图标等配置一并写入后端；重置：从后端重新加载已保存配置；导出 / 导入：配置文件整体备份与迁移。</div>
                    </div>

                    <!-- 访问限速配置 -->
                    <div class="card mt-24">
                        <div class="card-title">🚦 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div class="text-sm-tertiary-mt8">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <div class="card">
                        <div class="card-title">🎨 主题选择</div>
                        <div class="theme-list">
                            <div v-for="(theme, key) in themes" :key="key" class="theme-item" :class="{active: currentTheme === key}" @click="changeTheme(key)">
                                <div class="theme-color" :style="{background: theme.gradient}"></div>
                                <div class="text-base-medium">{{ theme.name }}
                                    <span class="text-xs-primary-ml4" v-if="currentUser?.theme === key">默认</span>
                                </div>
                                <span v-if="currentTheme === key" class="theme-current-badge">当前</span>
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-title">🎯 图标系统</div>
                        <div class="theme-list">
                            <div class="theme-item" :class="{active: iconSystem === 'emoji'}" @click="switchIconSystem('emoji')">
                                <div class="theme-color bg-gradient-brand"></div>
                                <div class="text-base-medium">原生<span class="text-xs-primary-ml4" v-if="iconSystem === 'emoji'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'ink'}" @click="switchIconSystem('ink')">
                                <div class="theme-color bg-gradient-ink"></div>
                                <div class="text-base-medium">墨韵<span class="text-xs-primary-ml4" v-if="iconSystem === 'ink'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'edge'}" @click="switchIconSystem('edge')">
                                <div class="theme-color theme-color-ai"></div>
                                <div class="text-base-medium">锋线<span class="text-xs-primary-ml4" v-if="iconSystem === 'edge'">当前</span></div>
                            </div>
                            <div class="theme-item" :class="{active: iconSystem === 'crystal'}" @click="switchIconSystem('crystal')">
                                <div class="theme-color theme-color-ai"></div>
                                <div class="text-base-medium">叠彩<span class="text-xs-primary-ml4" v-if="iconSystem === 'crystal'">当前</span></div>
                            </div>
                        </div>
                    </div>
                </div>

                    <!-- autoeval: 自动评估配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title">🤖 自动评估配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select class="w-160" v-model="autoEvaluateConfig.schedule_type" @change="saveAutoEvaluateConfig">
                                            <el-option label="每个交易日" value="daily" />
                                            <el-option label="每周一" value="weekly" />
                                            <el-option label="每月1号" value="monthly" />
                                        </el-select>
                                    </el-form-item>
                                    <el-form-item label="执行时间">
                                        <el-time-picker class="w-160" v-model="autoEvaluateConfig.schedule_time" format="HH:mm" value-format="HH:mm" @change="saveAutoEvaluateConfig"/>
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
                                        <el-input class="w-100-max420" v-model="autoEvaluateConfig.feishu_webhook" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..." @change="saveAutoEvaluateConfig"/>
                                    </el-form-item>
                                </template>
                            </el-form>
                        </div>

                    <!-- v3.16 (FR-3.16.1): 飞书推送配置 — 独立 Webhook 配置 + 测试发送 -->
                    <div class="card mt-4">
                        <div class="card-title">📢 飞书推送配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="Webhook">
                                <el-input class="max-w-460" v-model="feishuConfig.webhook_url" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" @click="saveFeishuConfig">💾 保存配置</el-button>
                                <el-button size="small" @click="testFeishuWebhook" :loading="feishuTestStatus === 'testing'">🧪 测试发送</el-button>
                                <span class="ml-10-sm" v-if="feishuTestMessage" :style="{color: feishuTestMessage.includes('成功') || feishuTestMessage.includes('已发送') ? 'var(--el-success)' : 'var(--el-danger)'}">{{ feishuTestMessage }}</span>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- AI 模型管理 (v3.14 厂商化: 以厂商为主配置卡, 卡内配 API 后管理多个模型名) -->
                    <div class="card mt-4">
                        <div class="card-title">🤖 AI 模型管理</div>
                        <p class="text-sm-secondary-m0-16">以厂商为主配置卡，卡内配置 API（地址+密钥+超时）后选择多个模型名；按数组顺序（厂商 → 模型）串行调用，首个可用模型返回结果。</p>
                        <div class="flex-gap-8-mb16-wrap">
                            <el-button size="small" type="primary" @click="loadAiVendors">🔄 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllVendorModels" :loading="testingAllModels">🧪 探测全部</el-button>
                            <!-- v3.16 (FR-3.16.1): AI 连接测试入口 (testAiApi) -->
                            <el-button size="small" type="primary" @click="testAiApi" :loading="aiLoading">🔌 连接测试</el-button>
                            <el-button size="small" type="primary" @click="saveAiVendors" :loading="savingAiModels">💾 保存</el-button>
                            <el-dropdown class="ml-auto" trigger="click" @command="(cmd) => cmd === '__custom__' ? addCustomVendor() : addVendorFromCatalog(cmd)">
                                <el-button size="small" type="primary">➕ 新增厂商</el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-if="!aiCatalog.vendors || aiCatalog.vendors.length===0" disabled>加载目录中…</el-dropdown-item>
                                        <el-dropdown-item v-for="(c,i) in aiCatalog.vendors" :key="c.vendor_key" :command="c.vendor_key" :divided="i>0 && c.kind !== aiCatalog.vendors[i-1].kind">{{ c.name }} <el-tag class="ml-6" size="small">{{ c.kind }}</el-tag></el-dropdown-item>
                                        <el-dropdown-item command="__custom__" divided>自定义厂商</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <div class="text-center-danger-pad16" v-if="aiModelsError">⚠️ {{ aiModelsError }} <el-button size="small" @click="loadAiVendors">重试</el-button></div>
                        <div class="text-center-tertiary-pad20" v-if="!aiModelsError && aiVendors.length===0">加载中...</div>
                        <div v-if="!aiModelsError && aiVendors.length>0">
                        <div v-for="(v,vi) in aiVendors" :key="v.vendor_key" class="card mb-12">
                            <div class="card-title flex-between-wrap-gap6">
                                <span class="flex-c-gap-6-wrap">
                                    {{ v.name }}
                                    <el-tag size="small" :type="v.kind==='CodingPlan' ? 'warning' : v.kind==='国外' ? 'info' : v.kind==='国内' ? 'success' : 'primary'">{{ v.kind }}</el-tag>
                                    <el-tag v-if="v.tier" size="small" type="warning">套餐: {{ v.tier }}</el-tag>
                                    <span class="text-sm-tertiary" v-if="v.locked">🔒</span>
                                    <a class="text-sm-link" v-if="v.website" :href="v.website" target="_blank" rel="noopener">官网 ↗</a>
                                </span>
                                <el-button v-if="!v.locked" size="small" type="danger" @click="removeVendor(v)">🗑️ 删除厂商</el-button>
                            </div>
                            <el-form class="mt-2" label-width="90px" size="small">
                                <el-form-item label="厂商名"><el-input v-model="v.name" :disabled="v.locked" placeholder="厂商显示名"/></el-form-item>
                                <el-form-item label="类型">
                                    <el-select class="w-160" v-model="v.kind" :disabled="v.locked" size="small">
                                        <el-option label="国内" value="国内"/><el-option label="国外" value="国外"/>
                                        <el-option label="CodingPlan" value="CodingPlan"/><el-option label="自定义" value="自定义"/>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐档位"><el-input class="w-220" v-model="v.tier" :disabled="v.locked" placeholder="CodingPlan: Lite/Pro"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="v.base_url" placeholder="https://.../v1"/></el-form-item>
                                <el-form-item label="API Key"><el-input v-model="v.api_key" type="password" show-password placeholder="厂商级密钥，卡内模型共用"/></el-form-item>
                                <el-form-item label="超时(秒)"><el-input-number v-model="v.timeout" :min="10" :max="300" size="small"/></el-form-item>
                                <el-form-item label="模型列表">
                                    <div class="w-100">
                                        <div class="model-row" v-for="(m,mi) in v.models" :key="vi + '-' + mi">
                                            <span class="model-index">{{ mi+1 }}</span>
                                            <el-switch v-model="m.enabled" size="small"/>
                                            <el-input class="w-220" v-model="m.name" :disabled="m.locked" size="small" placeholder="模型名"/>
                                            <span class="text-sm-ellipsis" v-if="m.testResult!==undefined" :style="{color:m.testResult.success?'var(--el-success)':'var(--el-danger)'}">{{ m.testResult.success?'✓':'✗' }} {{ m.testResult.message }}</span>
                                            <el-button size="small" type="primary" :loading="m._testing" @click="testVendorModel(v,m)">🧪 测试</el-button>
                                            <el-button v-if="!m.locked" size="small" type="danger" @click="removeVendorModel(v,mi)">🗑️</el-button>
                                        </div>
                                        <div class="flex-gap-8-mt8">
                                            <el-button size="small" @click="addVendorModel(v)">➕ 添加模型</el-button>
                                            <el-button size="small" :loading="v._fetching" @click="fetchVendorModels(v)">📡 获取模型列表</el-button>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span>🔢 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- v3.16 (FR-3.16.1): 数据同步入口 (syncStockData) -->
                    <div class="card mb-14">
                        <div class="card-title">🔄 数据同步</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-button type="success" :loading="syncingData" @click="syncStockData">📥 同步股票数据</el-button>
                            <span class="text-sm-secondary">从 Tushare 拉取最新行情并更新本地缓存</span>
                        </div>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>🔗 sxsc-tushare（券商版）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.sxsc_tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.sxsc_tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
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
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>📡 tushare（标准版 Pro）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
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
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span>🌐 akshare（开源免费）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.akshare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.akshare === 'connected'">可用</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.akshare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else>⏳ 未检测</span>
                            </div>
                        </div>
                        <div class="text-base-secondary-pad">
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
                        <div class="mb-12">
                            <el-checkbox-group v-model="strategyFilter.selected" @change="saveStrategyFilter">
                                <el-checkbox class="mb-6" v-for="s in strategyFilterOptions" :key="s" :label="s" border>
                                    {{ s }}
                                </el-checkbox>
                            </el-checkbox-group>
                        </div>
                        <div class="flex-c-gap-12-wrap-mb12">
                            <span class="text-base-secondary">过滤方式：</span>
                            <el-radio-group v-model="strategyFilter.mode" @change="saveStrategyFilter">
                                <el-radio label="union">并集（任一匹配）</el-radio>
                                <el-radio label="intersection">交集（全部匹配）</el-radio>
                            </el-radio-group>
                        </div>
                        <div class="info-banner-plain">
                            <div class="mb-6-medium">🔍 预览匹配股票数</div>
                            <div class="flex-wrap-gap-12">
                                <span>☀️ 日视图: <strong>{{ strategyPreviewCount.day ?? '-' }}</strong></span>
                                <span>📅 周视图: <strong>{{ strategyPreviewCount.week ?? '-' }}</strong></span>
                                <span>🗓️ 月视图: <strong>{{ strategyPreviewCount.month ?? '-' }}</strong></span>
                                <span>📆 年视图: <strong>{{ strategyPreviewCount.year ?? '-' }}</strong></span>
                            </div>
                        </div>
                    </div>

                    <!-- v3.3.0-T8: 数据备份与恢复 -->
                    <div class="card mt-14">
                        <div class="card-title">💾 数据备份与恢复</div>
                        <div class="flex-wrap-gap-10-mb12">
                            <el-button size="small" type="primary" :loading="backupCreating" @click="createBackup">立即备份</el-button>
                            <el-button size="small" @click="loadBackups">刷新列表</el-button>
                        </div>
                        <div class="max-h-220-scroll" v-if="backups.length">
                            <div class="backup-row" v-for="b in backups" :key="b.name">
                                <span>🕐 {{ b.time }} <span class="text-xs-tertiary">({{ (b.size / 1024).toFixed(0) }} KB)</span></span>
                                <el-button size="small" type="danger" plain :disabled="currentUser?.role !== 'admin'" @click="restoreBackup(b.name)">恢复</el-button>
                            </div>
                        </div>
                        <div class="text-sm-tertiary" v-else>暂无备份</div>
                    </div>
                    <!-- v2.0: 美林时钟配置 -->
                    <div class="card mt-4">
                        <div class="card-title">⏱️ 美林时钟</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次更新: <strong>{{ merrillClockLastUpdated || '—' }}</strong>
                            </span>
                            <el-button size="small" type="primary" @click="doMerrillReevaluate" :loading="merrillReevalLoading">
                                🔄 手动重评估
                            </el-button>
                        </div>
                        <div class="result-box" v-if="merrillReevalResult" :style="{color: merrillReevalResult.includes('失败') ? 'var(--el-danger)' : 'var(--el-success)'}">
                            {{ merrillReevalResult }}
                        </div>
                        <div class="flex-c-gap-16">
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">自动刷新</label>
                                <el-switch v-model="merrillClockConfig.autoRefresh" @change="saveMerrillClockConfig" size="small" />
                            </div>
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">间隔</label>
                                <el-select class="w-100px" v-model="merrillClockConfig.refreshInterval" @change="saveMerrillClockConfig" size="small" :disabled="!merrillClockConfig.autoRefresh">
                                    <el-option :value="300" label="5分钟" />
                                    <el-option :value="600" label="10分钟" />
                                    <el-option :value="1800" label="30分钟" />
                                    <el-option :value="3600" label="1小时" />
                                </el-select>
                            </div>
                        </div>
                    </div>

                    <!-- v1.8.0: 数据刷新配置 -->
                    <div class="card mt-4">
                        <div class="card-title">🔄 策略数据刷新</div>
                        <div class="flex-between-mb12">
                            <span class="text-base-secondary">
                                上次刷新: <strong>{{ dataRefreshConfig.last_refresh || '—' }}</strong>
                                <span class="ml-6-sm" v-if="dataRefreshConfig.last_refresh_status" :style="{color: dataRefreshConfig.last_refresh_status.startsWith('failed') ? 'var(--el-danger)' : 'var(--el-success)'}">
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
                        <div class="flex-col-gap-12">
                            <!-- 定时刷新 -->
                            <div class="flex-c-gap-16-wrap">
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">定时刷新</label>
                                    <el-switch v-model="dataRefreshConfig.scheduled_enabled" @change="saveDataRefreshConfig" size="small" />
                                </div>
                                <div class="flex-c-gap-6">
                                    <label class="text-base-primary-nowrap">时间</label>
                                    <el-time-picker class="w-110" v-model="dataRefreshConfig.scheduled_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.scheduled_enabled" placeholder="22:00"/>
                                </div>
                            </div>
                            <!-- 文件变动监听 -->
                            <div class="flex-c-gap-6">
                                <label class="text-base-primary-nowrap">文件变动监听</label>
                                <el-switch v-model="dataRefreshConfig.watch_enabled" @change="saveDataRefreshConfig" size="small" />
                                <span class="text-sm-tertiary-ml4">文件变动时自动刷新</span>
                            </div>
                            <!-- v3.12 (FR-3.12.1): 定时拉取配置 -->
                            <div class="card inner-card">
                                <div class="flex-c-gap-16-wrap">
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">定时拉取日线</label>
                                        <el-switch v-model="dataRefreshConfig.pull_enabled" @change="saveDataRefreshConfig" size="small" />
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">时间</label>
                                        <el-time-picker class="w-110" v-model="dataRefreshConfig.pull_time" @change="saveDataRefreshConfig" size="small" format="HH:mm" value-format="HH:mm" :disabled="!dataRefreshConfig.pull_enabled" placeholder="22:30"/>
                                    </div>
                                    <div class="flex-c-gap-6">
                                        <label class="text-base-primary-nowrap">频率</label>
                                        <el-select class="w-110" v-model="dataRefreshConfig.pull_frequency" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="每日" value="daily" />
                                            <el-option label="每周" value="weekly" />
                                        </el-select>
                                    </div>
                                    <div class="flex-c-gap-6" v-if="dataRefreshConfig.pull_frequency === 'weekly'">
                                        <label class="text-base-primary-nowrap">周几</label>
                                        <el-select class="w-90" v-model="dataRefreshConfig.pull_weekday" @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled">
                                            <el-option label="周一" value="0" />
                                            <el-option label="周二" value="1" />
                                            <el-option label="周三" value="2" />
                                            <el-option label="周四" value="3" />
                                            <el-option label="周五" value="4" />
                                        </el-select>
                                    </div>
                                </div>
                                <div class="flex-c-gap-8-mt10-wrap">
                                    <label class="text-base-primary-nowrap">股票池</label>
                                    <el-select class="flex-1-min200" v-model="dataRefreshConfig.stock_pool" multiple filterable allow-create default-first-option collapse-tags @change="saveDataRefreshConfig" size="small" :disabled="!dataRefreshConfig.pull_enabled" placeholder="输入股票代码后回车, 留空=全部覆盖股票">
                                        <el-option v-for="c in dataRefreshConfig.stock_pool" :key="c" :label="c" :value="c" />
                                    </el-select>
                                </div>
                                <div class="text-sm-tertiary-mt6">
                                    拉取成功后自动刷新解析器/视图 (数据自动入库)
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- v1.9.2: 策略研究菜单开关 -->
                    <div class="card mt-4">
                        <div class="card-title">🔬 策略研究菜单</div>
                        <div class="flex-between">
                            <span class="text-base-secondary">
                                {{ researchMenuEnabled ? '已显示策略研究菜单' : '已隐藏策略研究菜单' }}
                            </span>
                            <el-switch v-model="researchMenuEnabled" @change="toggleResearchMenu" size="small" />
                        </div>
                    </div>
                </div>
                    <div v-else-if="currentSubPage === 'user'">
                        <div v-if="currentUser?.role !== 'admin'" class="card text-center-pad40">
                            <div class="text-3xl-mb12">🔐</div>
                            <div class="color-secondary">仅管理员可访问此页面</div>
                        </div>
                        <div v-else>
                        <div class="card">
                            <div class="card-title">👥 用户与权限</div>
                            <p class="color-secondary">用户列表: {{ userList.length }} 个用户 | 分组: {{ Object.keys(allGroups).length }} 个</p>
                        </div>

                    <!-- Tab 切换 -->
                    <div class="flex-gap-8-mb16">
                        <el-button :type="userPageTab === 'users' ? 'primary' : ''" size="small" @click="userPageTab = 'users'">👥 用户列表</el-button>
                        <el-button :type="userPageTab === 'groups' ? 'primary' : ''" size="small" @click="userPageTab = 'groups'">📋 分组配置</el-button>
                    </div>

                    <!-- 用户列表 Tab -->
                    <div v-if="userPageTab === 'users'">
                    <div class="card">
                        <div class="card-title">👥 用户列表 ({{ userList.length }}人)</div>
                        <div class="flex-gap-12-mb12">
                            <el-input class="w-160" v-model="userSearch" placeholder="搜索用户名..." clearable size="small"/>
                            <el-select class="w-120" v-model="groupFilter" placeholder="分组" clearable size="small">
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
                                            <span class="mr-12" v-if="user.created_at">
                                                🕐 创建于: {{ new Date(user.created_at).toLocaleDateString('zh-CN') }}
                                            </span>
                                            <span v-if="user.last_login_at">
                                                🕐 上次登录: {{ new Date(user.last_login_at).toLocaleString('zh-CN') }}
                                            </span>
                                            <span class="ml-12" v-if="user.login_count !== undefined">
                                                🔐 登录: {{ user.login_count }}次
                                            </span>
                                        </div>
                                        <div class="user-status-row" v-if="user.username !== 'admin'">
                                            <span class="text-sm-secondary-flex6">
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
                    <div v-for="(g, gid) in allGroups" :key="gid" class="card mb-12">
                        <div class="flex-between-start-wrap">
                            <div class="flex-1-min200">
                                <div class="flex-c-gap-8-mb4">
                                    <strong class="text-lg">{{ g.name }}</strong>
                                    <span class="text-10-tertiary">{{ gid }}</span>
                                    <span class="text-10-tertiary" v-if="g.locked">🔒</span>
                                </div>
                                <div class="text-sm-secondary-mb6">{{ g.description }}</div>
                                <div class="text-sm-tertiary">
                                    成员 {{ getGroupMemberCount(gid) }}人 · 菜单 {{ getMenuEnabledCount(g) }}/{{ Object.keys(g.visible_menus || {}).length }}
                                </div>
                            </div>
                            <div class="flex-gap-6-shrink0">
                                <el-button v-if="!g.locked" size="small" @click="toggleGroupExpand(gid)">{{ expandedGroups[gid] ? '收起' : '👥 成员' }}</el-button>
                                <el-button size="small" type="primary" @click="openMenuConfig(gid)">⚙️ 菜单</el-button>
                                <el-button v-if="!g.locked" size="small" type="danger" @click="deleteGroupConfig(gid)">删除</el-button>
                            </div>
                        </div>
                        <!-- 成员列表（锁定组始终显示，非锁定组展开后显示） -->
                        <div class="section-sub-block-top" v-if="g.locked || expandedGroups[gid]">
                            <div class="flex-wrap-gap-6">
                                <span class="chip-member" v-for="u in userList.filter(u => (u.group || u.role) === gid)" :key="u.username">
                                    {{ u.username }}<span class="color-primary" v-if="u.role==='admin'"> · 管理</span>
                                </span>
                                <span class="text-sm-tertiary" v-if="getGroupMemberCount(gid) === 0">暂无成员</span>
                            </div>
                        </div>
                    </div>
                    <div class="text-center-tertiary-pad20" v-if="Object.keys(allGroups).length === 0">暂无分组数据</div>
                    </div>

                    </div>
                    </div>
                    <div v-else-if="currentSubPage === 'about'">
                        <div class="card">
                            <div class="card-title">📖 软件简介</div>
                            <div class="about-body-text">
                                <p class="m-0-0-12">基于<strong class="color-text-primary">美林时钟经济周期理论</strong>，融合多策略选股与 AI 深度评估的智能投研工具。</p>
                                <p class="m-0"><strong class="color-text-primary">核心功能：</strong></p>
                                <ul class="about-ul">
                                    美林时钟 — GDP/CPI/PMI/社融/利率五维评分，四阶段自动切换
                                    多策略选股 — 多因子/行业轮动/资金流/指数增强，共识榜交叉验证
                                    AI 评估 — 多模型串行评估，技术指标自动注入
                                    飞书推送 — 定时推送每日选股报告
                                    数据源 — Tushare Pro / sxsc / akshare 三源热备
                                </ul>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📌 软件版本</div>
                            <div class="flex-c-gap-16-wrap">
                                <span class="version-badge">v{{ appVersion }}</span>
                                <span class="text-success-md">● 服务运行中</span>
                            </div>
                        </div>
                        <!-- v3.2.0-T24: 问题反馈 -->
                        <div class="card">
                            <div class="card-title">📮 问题反馈</div>
                            <div class="flex-col-gap-10">
                                <el-input v-model="feedbackText" type="textarea" :rows="3" placeholder="描述你遇到的问题或建议 (系统信息会自动附带)"></el-input>
                                <div class="flex-end-gap-8">
                                    <el-button size="small" @click="submitFeedback" :loading="feedbackSubmitting" type="primary">提交反馈</el-button>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">🧩 系统组件</div>
                            <div class="grid-auto-fill-200">
                                <div class="tech-item">
                                    <span class="text-xl">⚡</span>
                                    <div>
                                        <div class="text-md-semibold">FastAPI</div>
                                        <div class="text-sm-tertiary">后端框架</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl-success">▣</span>
                                    <div>
                                        <div class="text-md-semibold">Vue 3</div>
                                        <div class="text-sm-tertiary">前端框架</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">🎨</span>
                                    <div>
                                        <div class="text-md-semibold">Element Plus</div>
                                        <div class="text-sm-tertiary">UI 组件库</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">🐍</span>
                                    <div>
                                        <div class="text-md-semibold">Python 3</div>
                                        <div class="text-sm-tertiary">运行环境</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">📊</span>
                                    <div>
                                        <div class="text-md-semibold">ECharts</div>
                                        <div class="text-sm-tertiary">图表引擎</div>
                                    </div>
                                </div>
                                <div class="tech-item">
                                    <span class="text-xl">📡</span>
                                    <div>
                                        <div class="text-md-semibold">Tushare Pro</div>
                                        <div class="text-sm-tertiary">金融数据 API</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card border-left-warning">
                            <div class="card-title">⚠️ 风险提示</div>
                            <div class="about-body-text">
                                <p class="m-0-0-8"><strong class="color-text-primary">本系统仅供学习研究，不构成任何投资建议。</strong></p>
                                <p class="m-0-0-8">• 选股结果基于历史数据和量化模型，<strong>过往表现不代表未来收益</strong></p>
                                <p class="m-0-0-8">• 宏观指标存在滞后性，AI 评估为机器生成，不构成专业投资分析</p>
                                <p class="m-0">• 数据来源 Tushare Pro 及公开数据，不保证完整性和准确性。<strong>投资有风险，入市需谨慎</strong></p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-title">📧 联系与反馈</div>
                            <div class="about-body-text">
                                <p class="m-0">• 维护团队：犇犇量化团队</p>
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
