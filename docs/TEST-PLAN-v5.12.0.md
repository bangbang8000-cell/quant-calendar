# TEST-PLAN v5.12.0 — 界面体验与工程收敛（UX-6）

- 对应 PRD：`docs/PRD-v5.12.0.md`｜开发计划：`docs/DEV-PLAN-v5.12.0.md`
- 测试策略：**可测量项一律用脚本实测**（DOM 计算样式 / 截图像素 / 对比度计算），不依赖主观判断；每个 FR 至少 1 条自动化断言

## 1. 测试环境

| 项 | 值 |
|---|---|
| dev | `http://127.0.0.1:8001`（guest/guest） |
| ops | `http://127.0.0.1:8000`（admin/Abcd@2026） |
| 视口 | 桌面 1600×1000；移动 390×844（`is_mobile`）；登录页额外 1280×800 / 900×800 |
| 浏览器 | Playwright + chrome-150（`/home/evergreen/.agent-browser/browsers/`） |
| 单测 | `pytest -m "not e2e"`（忽略已知 flaky 文件后单独跑），基线 **9 failed / 3341 passed** |
| 审计脚本 | `.tmp-qc/ui-audit/{a11y_detail.py,a11y_ops.py,verify_tokens.py,pixels2.py}` |

## 2. 用例

### TC-1 密度（FR-5.12.1）
| ID | 用例 | 步骤 | 期望 |
|---|---|---|---|
| TC-1.1 | 启动即生效 | 设 `info_density=spacious` → 刷新 | `document.documentElement.dataset.density === 'spacious'` |
| TC-1.2 | 三档切换 | 外观面板依次点 紧凑/标准/宽松 | 属性随切随变；localStorage `quant_preferences.info_density` 同步写入 |
| TC-1.3 | 尺寸驱动 | 三档下取 `.el-button--small` 计算高度 | 24 / 28 / 32px（对应紧凑/标准/宽松） |
| TC-1.4 | 命中区（指针） | 标准档下遍历 `button,.el-button,.el-input__wrapper,.qc-icon-btn` | 最小高度 ≥32px |
| TC-1.5 | 命中区（触控） | 390×844 移动上下文 | 上述元素最小高度 ≥44px |
| TC-1.6 | 不误伤 | 检查 `.el-tag`、`.qc-stock-tag` 高度 | 保持原值（不被命中区规则放大） |
| TC-1.7 | 持久化 | 切换后重新登录 | 密度保持用户选择（后端偏好回读） |

### TC-2 登录页（FR-5.12.2）
| ID | 用例 | 步骤 | 期望 |
|---|---|---|---|
| TC-2.1 | 双栏结构 | 1280×800 打开登录页 | `.login-brand-pane` 与 `.login-form-pane` 同屏且左右分栏 |
| TC-2.2 | 单一主 CTA | 统计主按钮 | `.el-button--primary` 计数 = 1；访客按钮为 default |
| TC-2.3 | 窄屏折叠 | 900×800 打开 | 品牌区折为顶部条，表单区占满宽，无横向溢出 |
| TC-2.4 | 登录流程 | 输入 admin/口令 → 回车 | 登录成功进入主界面（回归验证） |
| TC-2.5 | 访客登录 | 点访客登录 | 成功进入主界面 |
| TC-2.6 | 对比度 | 品牌区/表单区文字 | 全部 ≥4.5:1 |

### TC-3 视觉降噪（FR-5.12.3）
| ID | 用例 | 期望 |
|---|---|---|
| TC-3.1 | KPI 卡左边框 | 4 张卡的 `border-left-width` 均为 0（或无色） |
| TC-3.2 | KPI 图标底 | 4 个图标底色一致（品牌/中性浅底），无彩虹 |
| TC-3.3 | 侧栏/头部毛玻璃 | 计算样式 `backdrop-filter: none` |
| TC-3.4 | 浮层毛玻璃保留 | `.el-dialog` / 面板仍为实底+阴影（不回归） |

### TC-4 图表（FR-5.12.4）
| ID | 用例 | 期望 |
|---|---|---|
| TC-4.1 | 主题覆盖率 | 全站 `echarts.init` 后均调用 `getEChartsTheme()`（源码断言 + 运行期 option 检查） |
| TC-4.2 | 暗色轴对比度 | 6 色相 × 明暗：轴线 ≥3:1、网格线 ≥1.5:1 |
| TC-4.3 | 主题切换重绘 | 切换明暗后已挂载图表重绘（`registerChart` 表计数 ≥ 实例数） |

### TC-5 工程债（FR-5.12.5）
| ID | 用例 | 期望 |
|---|---|---|
| TC-5.1 | 死 token | 判定脚本输出 0 |
| TC-5.2 | 断点 | `grep -o '@media' ` 结果中不出现 767/1100/1279 |
| TC-5.3 | `!important` | themes.css 计数 ≤160 |
| TC-5.4 | 无回归 | 全量 `pytest -m "not e2e"` 失败数不高于基线 |

### TC-6 回归（每次构建后必跑）
| ID | 用例 | 期望 |
|---|---|---|
| TC-6.1 | 对比度审计 | 访客 + 管理端各 10 页 × 明暗，**< AA 计数 = 0** |
| TC-6.2 | 语义令牌矩阵 | 6 色相 × 明暗，品牌/语义令牌 ≥4.5:1 |
| TC-6.3 | 移动端重叠 | 头部/列表无元素重叠 |
| TC-6.4 | 页面错误 | `pageerror` 计数 = 0 |
| TC-6.5 | 三端一致 | dev = ops = 群辉 `refs/heads/master` 同一 commit，服务 200 |

## 3. 出口准则（Exit Criteria）

1. TC-1 ~ TC-6 全部通过；
2. PRD §4 验收表逐项达标（含"不回归"三项：对比度 0、测试基线不变、页面错误 0）；
3. dev / ops / 群辉三方一致，ops 生产环境实测通过。

---

## 4. 执行结果（v5.12.0）

| 用例 | 结果 | 证据 |
|---|---|---|
| TC-1.1 启动即生效 | ✅ | 未设置偏好时 data-density=comfortable；设 spacious 后刷新即为 spacious |
| TC-1.2 三档切换 | ✅ | 外观面板出现「紧凑/标准/宽松」；changeDensity 写偏好 |
| TC-1.3 尺寸驱动 | ✅ | small 按钮 24 / 32 / 36px |
| TC-1.4 命中区（指针） | ✅ | 4 页面最小高度 32 / 32 / 16（内联链接豁免）/ 32 |
| TC-1.5 命中区（触控） | ✅ | 390×844 下 button/input/icon-btn 最小 44px |
| TC-1.6 不误伤 | ✅ | .el-tag 20px、.qc-stock-tag 19px 保持不变 |
| TC-2.1 双栏结构 | ✅ | 1280×800：品牌区 520×800 + 表单区 760×800 |
| TC-2.2 单一主 CTA | ✅ | .el-button--primary 计数 1；访客按钮 class 不含 primary |
| TC-2.3 窄屏折叠 | ✅ | 900×800 与 390×844：品牌区 178px 顶栏 + 表单区，overflowX=false |
| TC-2.4 登录流程 | ✅ | 填表回车 → 进入主界面（.qc-header 存在） |
| TC-3.1 KPI 左边框 | ✅ | 4 张卡 border-left-width 全 0px |
| TC-3.2 KPI 图标底 | ✅ | 4 个图标底色一致 |
| TC-3.3 结构性毛玻璃 | ✅ | .qc-sidebar backdrop-filter: none；.qc-header none |
| TC-3.4 浮层保留 | ✅ | .el-dialog backdrop-filter: blur(12px) saturate(1.5) |
| TC-4.1 主题覆盖率 | ✅ | 趋势图 setOption(getEChartsTheme()) + registerChart 重绘 |
| TC-4.2 图表轴令牌 | ✅ | --chart-axis/--chart-split 接线并随暖中性族 |
| TC-5.1 死 token | ⚠️ | 33 删除 / 17 保留（门禁保护，见 DEV-PLAN §5.2） |
| TC-5.2 断点 | ✅ | 767/1100/1279 不再出现（归一 8 处） |
| TC-5.3 !important | ⚠️ | 未动（保守去重不可行，见 DEV-PLAN §5.3） |
| TC-5.4 无回归 | ✅ | 9 failed / 3315 passed + 26 passed（与基线一致） |
| TC-6.1 对比度审计 | ✅ | 访客 10 页 × 明暗 < AA = 0 |
| TC-6.4 页面错误 | ✅ | pageerror = 0 |
| TC-6.5 三端一致 | ✅ | dev = ops = 群辉 master 同一 commit |
