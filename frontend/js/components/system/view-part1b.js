// 6.3.0 (T-6.3.0.5): 系统页模板片段 一 —— 由 system-page.js 原内联模板逐字符切出
// 装配见同目录 view.js（按 + 顺序拼接 = 拆分前原模板，指纹逐项对拍）
window.__quantModules = window.__quantModules || {};
window.__quantModules.systemPage = window.__quantModules.systemPage || {};
window.__quantModules.systemPage.part1b = `
                    <!-- datasource: 多数据源配置 -->
                    <div v-else-if="currentSubPage === 'datasource'">
                    <!-- 优先级说明条 -->
                    <div class="info-banner">
                        <span><qc-icon name="bar-chart-3" :size="14" /> 数据源优先级:</span>
                        <span class="text-medium">① sxsc-tushare → ② tushare → ③ akshare</span>
                        <span class="color-tertiary-ml-auto">按优先级依次尝试</span>
                    </div>

                    <!-- v7.26 (FR-15): 数据源统一表 — 启用/名称/类型/优先级/最近成功/最近错误/操作, 支持一键全测 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="database" :size="14" /> 数据源统一表</span>
                            <el-button size="small" type="primary" :loading="datasourceTestingAll" @click="testAllDatasources">
                                <qc-icon name="flask-conical" :size="12" /> 全部测试
                            </el-button>
                        </div>
                        <el-table :data="DATASOURCE_PRIORITY" size="small">
                            <el-table-column type="expand">
                                <template #default="{ row }">
                                    <div class="text-sm-secondary" style="padding: 4px 12px">
                                        最近测试：{{ (datasourceTestResults[row] && datasourceTestResults[row].message) || '尚未测试' }}
                                    </div>
                                </template>
                            </el-table-column>
                            <el-table-column label="启用" width="64">
                                <template #default="{ row }">
                                    <el-switch :model-value="datasourceConfig[row] && datasourceConfig[row].enabled" size="small"
                                               @change="val => { if (datasourceConfig[row]) { datasourceConfig[row].enabled = val; saveDatasourceConfig(); } }" />
                                </template>
                            </el-table-column>
                            <el-table-column label="名称" width="110"><template #default="{ row }">{{ datasourceName(row) }}</template></el-table-column>
                            <el-table-column label="类型" width="120"><template #default="{ row }">{{ row === 'akshare' ? '本地库' : 'Tushare 协议' }}</template></el-table-column>
                            <el-table-column label="优先级" width="72"><template #default="{ $index }">{{ $index + 1 }}</template></el-table-column>
                            <el-table-column label="最近成功" width="100">
                                <template #default="{ row }">
                                    <span :class="datasourceStatus[row] === 'connected' ? 'qc-text-success' : 'color-tertiary'">{{ datasourceStatus[row] === 'connected' ? '已连接' : '—' }}</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="最近错误" min-width="180">
                                <template #default="{ row }">
                                    <span v-if="datasourceTestResults[row] && !datasourceTestResults[row].connected && !datasourceTestResults[row].skipped" class="qc-text-error">{{ datasourceTestResults[row].message }}</span>
                                    <span v-else class="color-tertiary">—</span>
                                </template>
                            </el-table-column>
                            <el-table-column label="操作" width="88">
                                <template #default="{ row }">
                                    <el-button size="small" type="text" :loading="datasourceStatus[row] === 'testing'" @click="testDatasource(row)">测试</el-button>
                                </template>
                            </el-table-column>
                        </el-table>
                    </div>

                    <!-- 6.1.2 (B5): 数据新鲜度 -->
                    <div class="card mb-14">
                        <div class="card-title flex-between">
                            <span><qc-icon name="activity" :size="14" /> 数据新鲜度</span>
                            <el-button size="small" text @click="loadFreshness"><qc-icon name="refresh" :size="12" /> 刷新</el-button>
                        </div>
                        <div v-if="freshnessLoading" class="qc-glossary-loading">加载中…</div>
                        <qc-state-panel v-else-if="freshnessError" type="error" :title="t('state.freshnessError')" :desc="t('state.descService')" @retry="loadFreshness"></qc-state-panel>
                        <qc-state-panel v-else-if="freshnessItems.length === 0" type="empty" icon="inbox" :title="t('state.emptyFreshness')" :desc="t('state.descEmptyFreshness')" action-text="去刷新数据" action-key="go_status"></qc-state-panel>
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
                                <!-- 6.3.5 (BUG-FIX): 眼睛移出 #suffix 插槽 —— 禁用输入框的 suffix 不可点击 -->
                                <div class="key-field-row">
                                    <el-input :model-value="datasourceConfig.tushare._revealed ? datasourceConfig.tushare.token : datasourceConfig.tushare._masked" :disabled="!datasourceConfig.tushare._editing" @update:model-value="val => { if (datasourceConfig.tushare._editing) { datasourceConfig.tushare.token = val; if (!datasourceConfig.tushare._revealed) datasourceConfig.tushare._masked = val; } }" placeholder="输入 Tushare Token" @change="saveDatasourceConfig"></el-input>
                                    <span class="key-reveal-toggle" :title="datasourceConfig.tushare._editing ? '锁定（重新掩码）' : '编辑（查看完整 Token，需密码）'" @click="toggleDatasourceEdit('tushare')" v-html="sanitizeHtml(viewIcon(datasourceConfig.tushare._editing))"></span>
                                </div>
                            </el-form-item>
                            <el-form-item label="Endpoint">
                                <el-input v-model="datasourceConfig.tushare.endpoint" placeholder="http://api.tushare.pro" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item label="超时 (秒)">
                                <el-input-number v-model="datasourceConfig.tushare.timeout" :min="5" :max="120" @change="saveDatasourceConfig" />
                            </el-form-item>
                            <el-form-item>
                                <el-button @click="testDatasource('tushare')" :loading="datasourceStatus.tushare === 'testing'" type="primary" size="small"><qc-icon name="flask-conical" :size="14" /> 测试连接</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
`;
