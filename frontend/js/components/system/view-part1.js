// 6.3.0 (T-6.3.0.5): 系统页模板片段 一 —— 由 system-page.js 原内联模板逐字符切出
// 装配见同目录 view.js（按 + 顺序拼接 = 拆分前原模板，指纹逐项对拍）
window.__quantModules = window.__quantModules || {};
window.__quantModules.systemPage = window.__quantModules.systemPage || {};
window.__quantModules.systemPage.part1 = `
                <div v-if="currentPage === 'system' || currentPage === 'ops'" key="system" class="system-page-root">
                    <!-- V6.1 (PRD-6.1 F3): 移除页内标题 (由中栏分组导航/面包屑承载) -->
                    <div v-if="currentSubPage === 'status'" class="card system-status-card">
                        <div class="card-title flex-between">
                            <span>状态概览</span>
                            <div class="flex-c-gap-8">
                                <span class="text-sm-secondary" v-if="dashboardData.latest_date"><qc-icon name="calendar" :size="14" /> {{ dashboardData.latest_date }}</span>
                            </div>
                        </div>
                        <div class="status-grid">
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="trending-up" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.stockData') }}</div>
                                    <div class="status-value color-primary">{{ stockCount || '---' }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="target" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.strategyData') }}</div>
                                    <div class="status-value color-primary">{{ dashboardData.stats?.strategy_count || '---' }} 个</div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'autoeval'" title="点击配置 AI 自动评估">
                                <div class="status-icon"><qc-icon name="bot" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.aiService') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: aiStatus === 'ok' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ aiStatus === 'ok' ? t('system.ok') : t('system.needsConfig') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'feature'" title="点击配置飞书推送">
                                <div class="status-icon"><qc-icon name="message-circle" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.feishuPush') }}</div>
                                    <!-- V6.6: 已配置/未配置 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: feishuConfig.webhook_url ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ feishuConfig.webhook_url ? t('system.configured') : t('system.notConfigured') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item clickable" @click="currentSubPage = 'datasource'" title="点击配置数据源">
                                <div class="status-icon"><qc-icon name="bar-chart-3" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tushare') }}</div>
                                    <!-- V6.6: 已连接/未连接 品牌强调色，非语义三态，保留内联 -->
                                    <div class="status-value" :style="{color: tushareStatus === 'connected' ? 'var(--primary-text)' : 'var(--text-secondary)'}">
                                        {{ tushareStatus === 'connected' ? t('system.connected') : t('system.notConnected') }}
                                    </div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="calendar" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.tradeCalendar') }}</div>
                                    <div class="status-value color-primary">{{ tradeDateCount || '---' }} {{ t('system.unitDays') }}</div>
                                </div>
                            </div>
                            <div class="status-item">
                                <div class="status-icon"><qc-icon name="sparkles" :size="18" /></div>
                                <div class="status-info">
                                    <div class="status-label">{{ t('system.poolStocks') }}</div>
                                    <div class="status-value color-primary">{{ currentPoolSize }} {{ t('common.unitStock') }}</div>
                                </div>
                            </div>
                        </div>

                        <!-- V5.0 (T-5.0.6): 健康与可靠性面板 — 数据新鲜度/自愈时间线/启动自检/数据源可用性 -->
                        <div class="card mt-24">
                            <div class="card-title flex-between">
                                <span><qc-icon name="activity" :size="14" /> 健康与可靠性 <span class="text-xs-tertiary" v-if="healthUpdatedAt">· 更新于 {{ healthUpdatedAt }}</span></span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" :desc="t('state.descRetryHealth')" @retry="refreshHealth"></qc-state-panel>
                            <template v-else>

                            <!-- 启动自检摘要 -->
                            <div class="flex-c-gap-8 mb-12" v-if="startupReport">
                                <span class="health-badge qc-text-success">自检 ok {{ startupReport.ok_count }}</span>
                                <span class="health-badge qc-text-warning" v-if="startupReport.warn_count">warn {{ startupReport.warn_count }}</span>
                                <span class="health-badge qc-text-error" v-if="startupReport.fail_count">fail {{ startupReport.fail_count }}</span>
                                <span class="health-badge" :class="startupReport.healthy ? 'qc-text-success' : 'qc-text-error'">{{ startupReport.healthy ? '健康' : '不健康' }}</span>
                                <span class="text-xs-tertiary" v-if="startupReport.ts">· {{ startupReport.ts }}</span>
                            </div>
                            <div class="text-sm-tertiary mb-12" v-else>启动自检报告尚未生成（服务重启后自动生成）</div>

                            <!-- 数据新鲜度 -->
<!-- 数据新鲜度 -->
                            <!-- V5.3.0 (T-5.3.6.2): 数据旧了 告警条 -->
                            <div v-if="staleAssetCount > 0" class="health-stale-banner">
                                <qc-icon name="alert-triangle" :size="14" /> 数据已过期: {{ staleAssetCount }} 项资产 (点击刷新数据源)
                                <el-button size="small" class="ml-8" @click="refreshHealth">重新检查</el-button>
                            </div>
                            <div class="health-section-title"><qc-icon name="calendar" :size="14" /> 数据新鲜度</div>
                            <el-table :data="freshnessData.items" size="small" v-loading="healthLoading" style="width:100%">
                                <el-table-column prop="name" label="资产" min-width="150" />
                                <el-table-column label="状态" width="90">
                                    <template #default="{ row }">
                                        <!-- V6.6: statusColor() 函数枚举映射色，保留内联 -->
                                        <span :style="{color: statusColor(row.status)}">{{ statusLabel(row.status) }}</span>
                                    </template>
                                </el-table-column>
                                <el-table-column prop="latest_date" label="最新日期" width="120" />
                                <el-table-column prop="last_update" label="最后更新" min-width="160" />
                                <el-table-column prop="age_hours" label="距今(时)" width="90" />
                            </el-table>
                            <div class="text-sm-tertiary mt-8" v-if="!freshnessData.items || !freshnessData.items.length">暂无新鲜度数据 — 数据资产在运行时自动登记</div>

                            <!-- 自愈时间线 -->
                            <div class="health-section-title mt-20"><qc-icon name="settings" :size="14" /> 自愈时间线（最近 {{ healHistory.length }} 次）</div>
                            <div v-if="healHistory.length" class="heal-list">
                                <div v-for="(h, i) in healHistory" :key="i" class="heal-row">
                                    <span class="text-xs-tertiary heal-ts">{{ h.ts }}</span>
                                    <span class="heal-action">{{ h.action }}</span>
                                    <span class="text-xs-tertiary">{{ h.target }}</span>
                                    <span :class="h.ok ? 'qc-text-success' : 'qc-text-error'"><qc-icon :name="h.ok ? 'check' : 'x'" :size="14" /></span>
                                    <span class="text-xs-tertiary heal-summary">{{ h.summary }}</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无自愈记录 — 巡检随调度健康检查自动执行</div>

                            <!-- 数据源可用性 -->
                            <div class="health-section-title mt-20"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                            <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                    <span class="source-name">{{ s.name }}</span>
                                    <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                    <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                    <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                            </template>
                        </div>

                        <!-- V6.6.1 (PRD F-6.6.8 方案A): 操作审计 — 自 about 归位至运行监控 (仅管理员可见) -->
                        <div class="card mt-24" v-if="currentUser?.role === 'admin'">
                            <div class="card-title flex-between">
                                <span><qc-icon name="shield" :size="14" /> 操作审计 <span class="text-sm-tertiary">(管理员)</span></span>
                                <el-button size="small" @click="loadAuditLogs" :loading="auditLoading">刷新</el-button>
                            </div>
                            <div v-if="auditLogs.length" class="audit-list">
                                <div v-for="l in auditLogs" :key="l.id" class="audit-row">
                                    <span class="audit-action">{{ l.action }}</span>
                                    <span class="text-sm">{{ l.username }}</span>
                                    <span class="text-sm-tertiary">{{ l.ts }}</span>
                                    <span class="text-sm-tertiary audit-detail">{{ l.detail }}</span>
                                </div>
                            </div>
                            <div v-else class="text-sm-tertiary m-0-0-12">暂无审计记录</div>
                        </div>

                    </div>

                    <!-- V6.9.1-fix2: 配置保存独立子页 (自 status 拆出) -->
                    <div v-else-if="currentSubPage === 'config'">
                        <!-- v3.16 (FR-3.16.1): 配置管理 — 通用操作栏 (靠上放置, v3.17 UI优化) -->
                        <div class="card">
                            <div class="card-title flex-between">
                                <span>{{ t('system.configManage') }}</span>
                                <span class="text-xs-tertiary" v-if="lastSavedTime">{{ t('system.lastSaved') }}{{ lastSavedTime }}</span>
                            </div>
                            <div class="flex-wrap-gap-10">
                                <el-button type="primary" :loading="configSaving" @click="saveAllConfig">{{ t('system.saveAll') }}</el-button>
                                <el-button @click="resetAllConfig">{{ t('system.reset') }}</el-button>
                                <el-button @click="exportConfig">{{ t('system.exportConfig') }}</el-button>
                                <el-button @click="$refs.importFileInput && $refs.importFileInput.click()">{{ t('system.importConfig') }}</el-button>
                                <input class="hide" ref="importFileInput" type="file" accept=".json,application/json" @change="importConfig"/>
                            </div>
                            <div class="text-sm-tertiary-mt10">保存全部：将 AI / 数据源 / 飞书 / 限流 / 主题 / 图标等配置一并写入后端；重置：从后端重新加载已保存配置；导出 / 导入：配置文件整体备份与迁移。</div>
                        </div>




                    <!-- 访问限速配置 -->
                    <div class="card mt-24">
                        <div class="card-title"><qc-icon name="gauge" :size="14" /> 访问限速配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="API 限流 (次/分钟/IP)">
                                <el-input-number v-model="rateLimitConfig.api_limit" :min="10" :max="10000" :step="50" @change="saveRateLimit" />
                                <div class="text-sm-tertiary-mt8">当前设置: 每分钟 {{ rateLimitConfig.api_limit }} 次请求</div>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): 外观设置/语言/K线显示已迁往 feature「界面与个性化」区 (个性化归位) -->
                    <!-- V6.1 (PRD-6.1 F4): 移除图标系统切换卡片 — 导航图标统一为一套, 不再提供四套切换 -->
                </div>

                    <!-- V6.0 (P1-3): health — 数据源健康独立子页 -->
                    <div v-else-if="currentSubPage === 'health'">
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bar-chart-3" :size="14" /> 数据源健康</span>
                                <el-button size="small" :loading="healthLoading" @click="refreshHealth">刷新</el-button>
                            </div>
                            <qc-state-panel v-if="healthError" type="error" :title="healthError" :desc="t('state.descRetryHealth')" @retry="refreshHealth"></qc-state-panel>
                            <template v-else>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="radio-tower" :size="14" /> 数据源可用性</div>
                                <div class="flex-c-gap-12-wrap" v-if="sourceHealth.data_sources && sourceHealth.data_sources.length">
                                    <div v-for="s in sourceHealth.data_sources" :key="s.name" class="health-source-item">
                                        <span class="source-name">{{ s.name }}</span>
                                        <span :class="sourceOk(s) ? 'qc-text-success' : 'qc-text-error'">{{ sourceOk(s) ? '正常' : '降级' }}</span>
                                        <span class="text-xs-tertiary" v-if="s.success_rate != null">成功率 {{ s.success_rate }}%</span>
                                        <span class="text-xs-tertiary" v-if="s.avg_ms != null">· {{ s.avg_ms }}ms</span>
                                    </div>
                                </div>
                                <div class="text-sm-tertiary" v-else>暂无数据源健康数据</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="refresh" :size="14" /> 路由状态</div>
                                <div class="usage-src-grid" v-if="(healthDetail.data_sources || []).length">
                                    <div class="usage-src-card" :class="ds.routing_status === 'cooling' ? 'is-degraded' : ''" v-for="(ds, i) in healthDetail.data_sources" :key="i">
                                        <div class="usage-src-head">
                                            <span class="usage-src-name">{{ ds.name }}</span>
                                            <span :class="ds.routing_status === 'cooling' ? 'chip-warning' : 'chip-success'">{{ ds.routing_status === 'cooling' ? '冷却中' : '参与路由' }}</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">成功率</span>
                                            <span class="usage-src-row-value">{{ ds.success_rate ?? '--' }}%</span>
                                        </div>
                                        <div class="usage-src-row">
                                            <span class="usage-src-row-label">平均延迟</span>
                                            <span class="usage-src-row-value">{{ ds.avg_latency_ms ?? '--' }}ms</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.consecutive_failures">
                                            <span class="usage-src-row-label">连续失败</span>
                                            <span class="usage-src-row-value">{{ ds.consecutive_failures }} 次</span>
                                        </div>
                                        <div class="usage-src-row" v-if="ds.switch_reason">
                                            <span class="usage-src-row-label">最近切换</span>
                                            <span class="usage-src-row-value" :title="ds.last_switch_at">{{ ds.switch_reason }}</span>
                                        </div>
                                    </div>
                                </div>
                                <div class="usage-ai-empty" v-else>暂无数据源调用记录（服务刚重启时为空，随调用自动累计）</div>
                            </div>
                            <div class="section-block-top">
                                <div class="section-title-base"><qc-icon name="activity" :size="14" /> 数据健康度</div>
                                <div class="today-health-strip">
                                    <div v-if="healthRows.length === 0" class="today-health-empty">{{ t('strategies.noSourceCall') }}</div>
                                    <div v-for="s in healthRows" :key="s.source" class="today-health-item" :class="{ 'is-stale': s.stale }" :title="s.last_fetch ? '最近成功: ' + s.last_fetch : '尚无成功调用'">
                                        <span class="today-health-dot" :class="healthClass(s)"></span>
                                        <span class="today-health-name">{{ s.name }}</span>
                                        <span class="today-health-rate">{{ s.success_rate != null ? s.success_rate + '%' : '—' }}</span>
                                        <span class="today-health-lat" v-if="s.avg_latency_ms != null">{{ s.avg_latency_ms }}ms</span>
                                        <span class="today-health-age" v-if="s.data_age_hours != null" :class="{ 'is-stale': s.stale }">{{ fmtAge(s.data_age_hours) }}</span>
                                        <span class="today-health-calls">{{ s.calls }}次</span>
                                        <span v-if="s.degraded" class="today-health-badge">degraded</span>
                                        <span v-if="s.stale" class="today-health-badge is-stale"><qc-icon name="clock" :size="12" /> 超期</span>
                                    </div>
                                </div>
                            </div>
                            </template>
                        </div>
                    </div>

                    <!-- V6.0 (P1-3): schedule — 调度任务独立子页 -->
                    <div v-else-if="currentSubPage === 'schedule'">
                        <qc-state-panel v-if="healthDetailError" type="error" :title="t('state.healthDetailError')" :desc="t('state.descService')" @retry="loadHealthDetail"></qc-state-panel>
                        <template v-else>
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 调度任务</span>
                                <el-button size="small" @click="loadHealthDetail">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="Object.keys(healthDetail.scheduler_tasks || {}).length">
                                <div class="sys-health-card" v-for="(t, k) in healthDetail.scheduler_tasks" :key="k">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ t.name || k }}</span>
                                        <span :class="t.last_status === 'success' ? 'chip-success' : t.last_status === 'failed' ? 'chip-danger' : 'chip-info'">{{ t.last_status === 'success' ? '正常' : t.last_status === 'failed' ? '失败' : '未运行' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近运行</span>
                                        <span class="sys-health-meta">{{ t.last_run || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">最近成功</span>
                                        <span class="sys-health-meta">{{ t.last_success || '—' }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed'">
                                        <span class="text-sm-tertiary">连续失败</span>
                                        <span class="sys-health-meta">{{ t.consecutive_failures || 0 }} 次</span>
                                    </div>
                                    <div class="sys-health-row" v-if="t.last_status === 'failed' && t.detail">
                                        <span class="text-sm-tertiary">失败原因</span>
                                        <span class="sys-health-meta" :title="t.detail">{{ (t.detail || '').slice(0, 60) }}{{ (t.detail || '').length > 60 ? '…' : '' }}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无调度任务运行记录（服务刚重启时为空，随定时任务自动填充）</div>
                        </div>
                        <div class="card mt-14">
                            <div class="card-title flex-between">
                                <span><qc-icon name="layers" :size="14" /> 任务队列</span>
                                <el-button size="small" text @click="loadJobQueue">刷新</el-button>
                            </div>
                            <div class="sys-health-grid" v-if="jobQueue.length">
                                <div class="sys-health-card" v-for="j in jobQueue" :key="j.job_id">
                                    <div class="sys-health-card-head">
                                        <span class="sys-health-name">{{ j.task_type }}</span>
                                        <span :class="j.status === 'completed' ? 'chip-success' : (j.status === 'running' || j.status === 'pending') ? 'chip-info' : 'chip-danger'">{{ jobStatusText(j.status) }}</span>
                                    </div>
                                    <div class="sys-health-row">
                                        <span class="text-sm-tertiary">进度</span>
                                        <el-progress :percentage="Number(j.progress) || 0" :stroke-width="10" :status="j.status === 'failed' ? 'exception' : (j.status === 'completed' ? 'success' : '')" style="width: 160px"></el-progress>
                                    </div>
                                    <div class="sys-health-row" v-if="j.message">
                                        <span class="text-sm-tertiary">状态</span>
                                        <span class="sys-health-meta">{{ j.message }}</span>
                                    </div>
                                    <div class="sys-health-row" v-if="j.status === 'running' || j.status === 'pending'">
                                        <el-button size="small" type="danger" text @click="cancelJob(j.job_id)">取消任务</el-button>
                                    </div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无队列任务（批量评估/回测等长任务会出现在这里）</div>
                        </div>
                        </template>
                    </div>

                    <!-- V6.0 (P1-3): guard — AI 事实护栏独立子页 -->
                    <div v-else-if="currentSubPage === 'guard'">
                        <qc-state-panel v-if="factCheckError" type="error" :title="t('state.factCheckError')" :desc="t('state.descService')" @retry="loadFactCheck"></qc-state-panel>
                        <template v-else>
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="search" :size="14" /> AI 事实护栏审计</span>
                                <el-button size="small" :loading="factCheckRunning" @click="triggerFactCheck">立即抽查</el-button>
                            </div>
                            <div v-if="factCheck" class="sys-health-grid">
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">抽查日期</div>
                                    <div class="sys-health-big">{{ factCheck.date || '—' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">检查数字</div>
                                    <div class="sys-health-big">{{ factCheck.checked ?? 0 }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">通过率</div>
                                    <div class="sys-health-big" :class="(factCheck.pass_rate ?? 100) >= 90 ? 'color-primary' : ''">{{ factCheck.pass_rate != null ? factCheck.pass_rate + '%' : '--' }}</div>
                                </div>
                                <div class="sys-health-card">
                                    <div class="sys-health-card-title">未验证</div>
                                    <div class="sys-health-big">{{ factCheck.unverified ?? 0 }}</div>
                                </div>
                            </div>
                            <div class="text-sm-tertiary" v-else>暂无事实护栏审计报告（点击"立即抽查"生成）</div>
                            <div v-if="factCheck && factCheck.failures && factCheck.failures.length" class="sys-health-row">
                                <span class="text-sm-tertiary">失败明细</span>
                                <span class="sys-health-meta">{{ factCheck.failures.length }} 条（最近 {{ factCheck.failures[0].number }} 等）</span>
                            </div>
                        </div>
                        </template>
                    </div>

                    <!-- autoeval: 自动评估配置 (v1.8.0) -->
                    <div v-else-if="currentSubPage === 'autoeval'">
                        <div class="card">
                            <div class="card-title"><qc-icon name="bot" :size="14" /> 自动评估配置</div>
                            <el-form label-width="100px">
                                <el-form-item label="启用">
                                    <el-switch v-model="autoEvaluateConfig.enabled" active-text="已开启" inactive-text="已关闭" @change="saveAutoEvaluateConfig" />
                                </el-form-item>
                                <template v-if="autoEvaluateConfig.enabled">
                                    <el-form-item label="调度频率">
                                        <el-select class="w-select-md" v-model="autoEvaluateConfig.schedule_type" @change="saveAutoEvaluateConfig">
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
                        <div class="card-title"><qc-icon name="message-circle" :size="14" /> 飞书推送配置</div>
                        <el-form label-width="100px">
                            <el-form-item label="Webhook">
                                <el-input class="max-w-460" v-model="feishuConfig.webhook_url" placeholder="https://open.feishu.cn/open-apis/bot/v2/hook/..."/>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" size="small" @click="saveFeishuConfig" :loading="feishuSaving"><qc-icon name="hard-drive" :size="14" /> 保存配置</el-button>
                                <el-button size="small" @click="testFeishuWebhook" :loading="feishuTestStatus === 'testing'"><qc-icon name="flask-conical" :size="14" /> 测试发送</el-button>
                                <span class="ml-10-sm" v-if="feishuTestMessage" :class="feishuTestMessage.includes('成功') || feishuTestMessage.includes('已发送') ? 'qc-text-success' : 'qc-text-error'">{{ feishuTestMessage }}</span>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- AI 模型管理 (v3.14 厂商化: 以厂商为主配置卡, 卡内配 API 后管理多个模型名) -->
                    <div class="card mt-4">
                        <div class="card-title"><qc-icon name="bot" :size="14" /> AI 模型管理</div>
                        <p class="text-sm-secondary-m0-16">以厂商为主配置卡，卡内配置 API（地址+密钥+超时）后选择多个模型名；按数组顺序（厂商 → 模型）串行调用，首个可用模型返回结果。</p>
                        <div class="flex-gap-8-mb16-wrap">
                            <el-button size="small" type="primary" @click="loadAiVendors"><qc-icon name="refresh" :size="14" /> 刷新</el-button>
                            <el-button size="small" type="primary" @click="testAllVendorModels" :loading="testingAllModels"><qc-icon name="flask-conical" :size="14" /> 探测全部</el-button>
                            <!-- v3.16 (FR-3.16.1): AI 连接测试入口 (testAiApi) -->
                            <el-button size="small" type="primary" @click="testAiApi" :loading="aiLoading"><qc-icon name="zap" :size="14" /> 连接测试</el-button>
                            <el-button size="small" type="primary" @click="saveAiVendors" :loading="savingAiModels"><qc-icon name="hard-drive" :size="14" /> 保存</el-button>
                            <el-dropdown class="ml-auto" trigger="click" @command="(cmd) => cmd === '__custom__' ? addCustomVendor() : addVendorFromCatalog(cmd)">
                                <el-button size="small" type="primary"><qc-icon name="plus" :size="14" /> 新增厂商</el-button>
                                <template #dropdown>
                                    <el-dropdown-menu>
                                        <el-dropdown-item v-if="!aiCatalog.vendors || aiCatalog.vendors.length===0" disabled>加载目录中…</el-dropdown-item>
                                        <el-dropdown-item v-for="(c,i) in aiCatalog.vendors" :key="c.vendor_key" :command="c.vendor_key" :divided="i>0 && c.kind !== aiCatalog.vendors[i-1].kind">{{ c.name }} <el-tag class="ml-6" size="small">{{ c.kind }}</el-tag></el-dropdown-item>
                                        <el-dropdown-item command="__custom__" divided>自定义厂商</el-dropdown-item>
                                    </el-dropdown-menu>
                                </template>
                            </el-dropdown>
                        </div>
                        <qc-state-panel v-if="aiModelsError" type="error" :title="aiModelsError" :desc="t('state.descAiModels')" @retry="loadAiVendors"></qc-state-panel>
                        <div class="text-center-tertiary-pad20" v-if="!aiModelsError && aiVendors.length===0">加载中...</div>
                        <div v-if="!aiModelsError && aiVendors.length>0">
                        <div v-for="(v,vi) in aiVendors" :key="v.vendor_key" class="card mb-12">
                            <div class="card-title flex-between-wrap-gap6">
                                <span class="flex-c-gap-6-wrap">
                                    {{ v.name }}
                                    <el-tag size="small" :type="v.kind==='CodingPlan' ? 'warning' : v.kind==='国外' ? 'info' : v.kind==='国内' ? 'success' : 'primary'">{{ v.kind }}</el-tag>
                                    <el-tag v-if="v.tier" size="small" type="warning">套餐: {{ v.tier }}</el-tag>
                                    <span class="text-sm-tertiary" v-if="v.locked"><qc-icon name="lock" :size="12" /></span>
                                    <a class="text-sm-link" v-if="v.website" :href="v.website" target="_blank" rel="noopener">官网 ↗</a>
                                </span>
                                <el-button size="small" type="danger" @click="removeVendor(v)"><qc-icon name="x" :size="14" /> 删除厂商</el-button>
                            </div>
                            <el-form class="mt-2" label-width="90px" size="small">
                                <el-form-item label="厂商名"><el-input v-model="v.name" :disabled="v.locked" placeholder="厂商显示名"/></el-form-item>
                                <el-form-item label="类型">
                                    <el-select class="w-select-md" v-model="v.kind" :disabled="v.locked" size="small">
                                        <el-option label="国内" value="国内"/><el-option label="国外" value="国外"/>
                                        <el-option label="CodingPlan" value="CodingPlan"/><el-option label="自定义" value="自定义"/>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="套餐档位"><el-input class="w-220" v-model="v.tier" :disabled="v.locked" placeholder="CodingPlan: Lite/Pro"/></el-form-item>
                                <el-form-item label="Base URL"><el-input v-model="v.base_url" placeholder="https://.../v1"/></el-form-item>
                                <el-form-item label="API Key">
                                    <!-- 6.3.5 (BUG-FIX): ① 解锁按钮/眼睛移出 #suffix —— 禁用输入框的 suffix 在 EP 2.14.5 下 pointer-events:none, 放里面点不动;
                                         ② 输入框取值补 v._revealed —— 原先只认 _editing, 眼睛验密成功后仍显示掩码 (查看密钥无效) -->
                                    <div class="key-field-row">
                                        <el-input :model-value="(v._editing || v._revealed) ? v.api_key : v._masked" :disabled="!v._editing" @update:model-value="val => { if (v._editing) { v.api_key = val; } else { v._masked = val; } }" placeholder="厂商级密钥，卡内模型共用"></el-input>
                                        <el-button size="small" :type="v._editing ? 'warning' : 'primary'" plain @click="toggleVendorEdit(v)"><qc-icon name="lock" :size="14" /> {{ v._editing ? '锁定' : '编辑密钥' }}</el-button>
                                        <span class="key-reveal-toggle" :title="v._revealed ? '收起（重新掩码）' : '查看完整密钥（需密码）'" @click="toggleVendorKeyReveal(v)" v-html="sanitizeHtml(viewIcon(v._revealed))"></span>
                                    </div>
                                </el-form-item>
                                <el-form-item label="超时(秒)"><el-input-number v-model="v.timeout" :min="10" :max="300" size="small"/></el-form-item>
                                <el-form-item label="模型列表">
                                    <div class="w-100">
                                        <div class="model-row" v-for="(m,mi) in v.models" :key="vi + '-' + mi">
                                            <span class="model-index">{{ mi+1 }}</span>
                                            <el-switch v-model="m.enabled" size="small"/>
                                            <el-input class="w-220" v-model="m.name" :disabled="m.locked" size="small" placeholder="模型名"/>
                                            <span class="text-sm-ellipsis" v-if="m.testResult!==undefined" :class="m.testResult.success?'qc-text-success':'qc-text-error'"><qc-icon :name="m.testResult.success ? 'check' : 'x'" :size="13" /> {{ m.testResult.message }}</span>
                                            <el-button size="small" type="primary" :loading="m._testing" @click="testVendorModel(v,m)"><qc-icon name="flask-conical" :size="14" /> 测试</el-button>
                                            <el-button v-if="!m.locked" size="small" type="danger" @click="removeVendorModel(v,mi)"><qc-icon name="x" :size="14" /></el-button>
                                        </div>
                                        <div class="flex-gap-8-mt8">
                                            <el-button size="small" @click="addVendorModel(v)"><qc-icon name="plus" :size="14" /> 添加模型</el-button>
                                            <el-button size="small" :loading="v._fetching" @click="fetchVendorModels(v)"><qc-icon name="radio-tower" :size="14" /> 获取模型列表</el-button>
                                        </div>
                                    </div>
                                </el-form-item>
                            </el-form>
                        </div>
                        </div>
                    </div>
                    </div>

                    <!-- V6.6.1 (PRD F-6.6.8 方案A): notification — 通知中心独立子页 (自 autoeval 拆出, 逻辑不变) -->
                    <div v-else-if="currentSubPage === 'notification'">
                        <qc-state-panel v-if="ncError" type="error" :title="t('state.notificationError')" :desc="t('state.descService')" @retry="loadNotificationData"></qc-state-panel>
                        <div class="card">
                            <div class="card-title flex-between">
                                <span><qc-icon name="bell" :size="14" /> 通知中心 <span class="text-sm-tertiary">自定义预警规则 · 投递历史 · 通道与静默</span></span>
                                <span class="text-sm-tertiary" v-if="ncMsg">{{ ncMsg }}</span>
                            </div>
                            <div class="flex-gap-8-mb16">
                                <el-button :type="ncTab === 'rules' ? 'primary' : ''" size="small" @click="onNcTab('rules')"><qc-icon name="scroll-text" :size="14" /> 通知规则</el-button>
                                <el-button :type="ncTab === 'history' ? 'primary' : ''" size="small" @click="onNcTab('history')"><qc-icon name="radio-tower" :size="14" /> 投递历史</el-button>
                                <el-button :type="ncTab === 'channels' ? 'primary' : ''" size="small" @click="onNcTab('channels')"><qc-icon name="moon" :size="14" /> 通道与静默</el-button>
                            </div>

                            <!-- 通知规则 Tab -->
                            <div v-if="ncTab === 'rules'">
                                <div class="flex-gap-12-mb12">
                                    <el-input class="w-140" v-model="ncNewCode" placeholder="股票代码 600519" clearable size="small"/>
                                    <el-select class="w-select" v-model="ncNewType" size="small">
                                        <el-option label="价格突破" value="price_above" />
                                        <el-option label="价格跌破" value="price_below" />
                                        <el-option label="涨跌幅超" value="pct_change" />
                                        <el-option label="量比异动" value="volume_surge" />
                                        <el-option label="入选股票池" value="new_pool" />
                                    </el-select>
                                    <el-input class="w-120" v-model="ncNewThreshold" placeholder="阈值" size="small"/>
                                    <el-button type="primary" size="small" @click="addAlertRule" :loading="ncLoading">+ 添加规则</el-button>
                                </div>
                                <el-table :data="ncRules" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="stock_code" label="股票" width="110" />
                                    <el-table-column label="类型" width="110">
                                        <template #default="s">
                                            {{ ncTypeLabel(s.row.rule_type) }}
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="threshold" label="阈值" width="100" />
                                    <el-table-column label="启用" width="90">
                                        <template #default="s">
                                            <el-switch :model-value="s.row.enabled" size="small" @change="toggleAlertRule(s.row)" />
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="created_at" label="创建时间" min-width="150" />
                                    <el-table-column label="操作" width="80">
                                        <template #default="s">
                                            <el-button size="small" type="danger" text @click="removeAlertRule(s.row)">删除</el-button>
                                        </template>
                                    </el-table-column>
                                </el-table>
                            </div>

                            <!-- 投递历史 Tab -->
                            <div v-if="ncTab === 'history'">
                                <el-table :data="ncHistory" size="small" v-loading="ncLoading" style="width:100%">
                                    <el-table-column prop="created_at" label="时间" width="150" />
                                    <el-table-column prop="event_type" label="类型" width="90" />
                                    <el-table-column prop="title" label="标题" min-width="180" show-overflow-tooltip />
                                    <el-table-column prop="channel" label="通道" width="90" />
                                    <el-table-column prop="recipient" label="收件人" width="120" />
                                    <el-table-column label="结果" width="90">
                                        <template #default="s">
                                            <span :class="s.row.ok ? 'qc-text-success' : 'qc-text-error'">
                                                {{ s.row.ok ? '成功' : '失败' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <p class="text-sm-tertiary mt-8" v-if="ncHistory.length === 0 && !ncLoading">暂无投递记录</p>
                            </div>

                            <!-- 通道与静默 Tab -->
                            <div v-if="ncTab === 'channels'">
                                <el-table :data="ncChannels" size="small" v-loading="ncLoading" style="width:100%" class="mb-12">
                                    <el-table-column prop="name" label="通道" width="120" />
                                    <el-table-column label="状态" width="140">
                                        <template #default="s">
                                            <span :class="s.row.available ? 'qc-text-success' : 'qc-text-muted'">
                                                {{ s.row.available ? '可用' : '未配置' }}
                                            </span>
                                        </template>
                                    </el-table-column>
                                    <el-table-column prop="configured" label="已配置" width="90">
                                        <template #default="s">
                                            <span :class="s.row.configured ? 'qc-text-success' : 'qc-text-muted'">{{ s.row.configured ? '是' : '否' }}</span>
                                        </template>
                                    </el-table-column>
                                </el-table>
                                <div class="flex-gap-12-mb12">
                                    <el-switch v-model="ncSilence" active-text="静默预警" inactive-text="正常推送" @change="applySilence"/>
                                    <span class="text-sm-secondary">静默时长(分钟):</span>
                                    <el-input-number v-model="ncSilenceMinutes" :min="1" :max="1440" size="small" />
                                    <el-button size="small" @click="applySilence"><qc-icon name="moon" :size="14" /> 静默 {{ ncSilenceMinutes }} 分钟</el-button>
                                    <el-button size="small" v-if="ncSilence" @click="clearSilence">恢复推送</el-button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span><qc-icon name="bar-chart-3" :size="14" /> 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- 6.1.2 (B5): 数据新鲜度 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="activity" :size="14" /> 数据新鲜度</span>
                            <el-button size="small" text @click="loadFreshness"><qc-icon name="refresh" :size="12" /> 刷新</el-button>
                        </div>
                        <div v-if="freshnessLoading" class="qc-glossary-loading">加载中…</div>
                        <qc-state-panel v-else-if="freshnessError" type="error" :title="t('state.freshnessError')" :desc="t('state.descService')" @retry="loadFreshness"></qc-state-panel>
                        <qc-state-panel v-else-if="freshnessItems.length === 0" type="empty" icon="inbox" :title="t('state.emptyFreshness')" :desc="t('state.descEmptyFreshness')"></qc-state-panel>
                        <el-table v-else :data="freshnessItems" size="small" max-height="320">
                            <el-table-column prop="label" label="数据表" width="120" />
                            <el-table-column prop="source" label="来源" width="110" />
                            <el-table-column label="最后成功" width="150">
                                <template #default="{ row }">{{ row.last_success ? row.last_success.slice(5, 16) : '-' }}</template>
                            </el-table-column>
                            <el-table-column label="行数" width="80">
                                <template #default="{ row }">{{ row.rows != null ? row.rows : '-' }}</template>
                            </el-table-column>
                            <el-table-column label="间隔" width="80">
                                <template #default="{ row }">{{ row.expected_hours }}h</template>
                            </el-table-column>
                            <el-table-column label="状态" width="90">
                                <template #default="{ row }">
                                    <span :class="row.stale ? 'qc-text-error' : 'qc-text-success'">{{ row.stale ? '过期' : '正常' }}</span>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <!-- 数据同步入口 (syncStockData) -->
                    <div class="card mb-14">
                        <div class="card-title"><qc-icon name="refresh" :size="14" /> 数据同步</div>
                        <div class="flex-c-gap-12-wrap">
                            <el-button type="primary" :loading="syncingData" @click="syncStockData"><qc-icon name="download" :size="14" /> 同步股票数据</el-button>
                            <span class="text-sm-secondary">从 Tushare 拉取最新行情并更新本地缓存</span>
                        </div>
                    </div>

                    <!-- sxsc-tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="external-link" :size="14" /> sxsc-tushare（券商版）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.sxsc_tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.sxsc_tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.sxsc_tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
                            <el-form-item label="API Token">
                                <!-- 6.3.5 (BUG-FIX): 眼睛移出 #suffix 插槽 —— 禁用输入框的 suffix 不可点击 -->
                                <div class="key-field-row">
                                    <el-input :model-value="datasourceConfig.sxsc_tushare._revealed ? datasourceConfig.sxsc_tushare.token : datasourceConfig.sxsc_tushare._masked" :disabled="!datasourceConfig.sxsc_tushare._editing" @update:model-value="val => { if (datasourceConfig.sxsc_tushare._editing) { datasourceConfig.sxsc_tushare.token = val; if (!datasourceConfig.sxsc_tushare._revealed) datasourceConfig.sxsc_tushare._masked = val; } }" placeholder="输入 sxsc-tushare Token" @change="saveDatasourceConfig"></el-input>
                                    <span class="key-reveal-toggle" :title="datasourceConfig.sxsc_tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('sxsc_tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.sxsc_tushare._editing))"></span>
                                </div>
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.sxsc_tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('sxsc_tushare')" :loading="datasourceStatus.sxsc_tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>

                    <!-- tushare 卡片 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="radio-tower" :size="14" /> tushare（标准版 Pro）</span>
                            <div class="flex-c-gap-10">
                                <el-switch v-model="datasourceConfig.tushare.enabled" @change="saveDatasourceConfig" size="small" />
                                <span class="text-success-sm" v-if="datasourceStatus.tushare === 'connected'">已连接</span>
                                <span class="text-warning-sm" v-else-if="datasourceStatus.tushare === 'testing'">测试中...</span>
                                <span class="text-sm-tertiary" v-else><qc-icon name="clock" :size="12" /> 未检测</span>
                            </div>
                        </div>
                        <el-form label-width="80px">
`;
