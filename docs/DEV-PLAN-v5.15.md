# DEV-PLAN v5.15：交互体验与信息呈现优化开发计划

> 版本：v1.0（待用户终审授权）
> 状态：待批准
> 创建日期：2026-09-14
> 需求来源：《PRD-v5.15.md》
> 前置：PRD-v5.15.md（本计划独立可评审）

---

## 1 开发范围与任务分解

### A 组 · 信息呈现修复（F1 / F8）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| A1 | 移除「0% 共识」 | frontend/src/components/common/StockList.vue、frontend/css/components.css | 虚拟+非虚拟两处共识文本改 v-if="hasConsensus(item)"；新增 hasConsensus 工具（Number(consensus_level)>0）；CSS 兜底行高 |
| A2 | 「功能配置」→「基础配置」 | frontend/js/locales/zh-CN.js、zh-TW.js、en.js、frontend/js/app-logic.js、frontend/src/components/SubNav.vue | 三语 sub.feature 文案 + subPageNames 映射 + SubNav label；相关测试断言同步（见 C 组） |

### B 组 · 权限与首屏（F2）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| B1 | 组配置先于页面恢复 | frontend/js/app-logic/lifecycle.js | 将 loadGroupConfig() 提前至「恢复用户最后选择」块前（与偏好加载并行 await）；恢复校验基于组过滤后 menus |
| B2 | currentPage 重校验兜底 | frontend/js/app-logic.js | 新增 ensureVisiblePage()：watch groupsConfig/menus，currentPage 不在 menus → 跳第一个可见菜单+默认子页；currentSubPage 越界 → 重置默认 |
| B3 | 契约测试 | tests/test_v515x_group_first_page.py | 源码级断言：lifecycle.js 中 loadGroupConfig 出现在页面恢复块之前；app-logic.js 含 ensureVisiblePage/watch 逻辑 |

### C 组 · 美林时钟时间轴美化（F3）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| C1 | 高度压缩 | frontend/js/components/strategies-page.js（模板微调）、frontend/css/layout.css | 轮间距 32→20px、padding 收敛、甘特条 10→6px；整块高度压缩 ≥25% |
| C2 | 层级排版精修 | frontend/css/layout.css | chip 字号 12→13px、名称加粗、年份弱化（等宽数字）；轮标签强化；阶段色统一（dot/描边/甘特） |
| C3 | 当前阶段强化 | frontend/css/layout.css、strategies-page.js | 当前 chip 徽标底纹；tooltip 头部阶段色条 |
| C4 | 交互增强（P1） | strategies-page.js | 轮次折叠（点击轮标签）；块头阶段色图例；「回到最新」按钮 |
| C5 | 移动端适配 | frontend/css/responsive.css | <768px 蛇形改横向滚动/单列堆叠；tl-click-pop 限宽 |

### D 组 · 弹窗样式（F4）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| D1 | 头部背景透明 | frontend/css/themes.css | .kline-dialog .el-dialog__header { background: transparent; border-bottom: 1px solid var(--border-light) } |
| D2 | X 按钮位置/大小 | frontend/css/themes.css | headerbtn top:50% translateY(-50%) right:24px；close font-size:18px |
| D3 | 移动端校验 | frontend/css/responsive.css | 窄屏下 X 按钮不溢出、头部高度自适应 |

### E 组 · 重点跟踪列表（F5）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| E1 | 行模板重构 | frontend/js/components/focus-view.js | 卡片式 flex-wrap 行 → 网格列布局（状态点｜名称(代码+徽章)｜档位｜评分｜方向｜入池状态｜操作）；保留分组/展开/打开详情 |
| E2 | 行样式重写 | frontend/css/layout.css | .focus-row 系列重写为规整行（行高 48-56px、列对齐）；令牌驱动；双主题 |
| E3 | 移动端降级 | frontend/css/responsive.css | <768px 列收缩/徽章换行规则 |

### F 组 · 顶部标签溢出（F6）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| F1 | 溢出检测与「更多」 | frontend/src/components/TopTabs.vue | hasOverflow（ResizeObserver）+ hiddenTabs 计算 + el-dropdown「更多 ▾」 |
| F2 | 左右滚动按钮 | frontend/src/components/TopTabs.vue、frontend/css/header.css | ‹ › 按钮，步进 200px，边界禁用；容器 flex 结构调整 |
| F3 | 溢出 peek + 键盘 | header.css、TopTabs.vue | 保留淡出遮罩 + 下一标签露出 16px；←/→ 键滚动 |
| F4 | nav 测试 | tests/test_v515x_top_tabs.py | 源码断言：TopTabs.vue 含 hiddenTabs/更多/滚动逻辑；header.css 含按钮样式类 |

### G 组 · 短线复盘双栏（F7）

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| G1 | 双栏布局 | frontend/js/components/shortterm-page.js | overview 子页改左列表（w≈240px）+右看板；loadDates 拉 /api/shortterm/dates；点击列表项切换日期加载 |
| G2 | 列表摘要（P1） | backend/api/v1/shortterm.py（新增端点）、shortterm-page.js | GET /api/shortterm/dates/summary 返回近 N 天 {date, emotion_level, money_effect_avg, zt_count}；列表项渲染摘要 |
| G3 | 响应式 | frontend/css/layout.css 或 components.css、responsive.css | <1024px 堆叠；列表折叠为横向 chip/下拉 |
| G4 | 测试 | tests/test_shortterm_api.py（若加端点）、test_v515x_shortterm.py | 端点返回结构 + 前端源码断言 |

### H 组 · 版本与收尾

| # | 任务 | 文件 | 说明 |
|---|------|------|------|
| H1 | 版本提升（按 C5 决策） | backend/main_new.py、相关版本门禁测试 | 5.5.0 → 5.6.0（若发布）；否则跳过 |
| H2 | 门禁/契约测试同步 | tests/test_v63_m4_config.py、test_v69x3_ui_opts.py、test_v69x4_ui_fixes.py 等 | F8 更名断言更新；新增 F1/F2/F3/F4/F5/F6/F7 契约测试文件 |
| H3 | dist 重建 | frontend/（npm run build） | 全量构建；确认 index.html 引用新产物；提交 dist |
| H4 | 全量回归 | — | pytest 门禁 + 目标集；失败数 ≤ 基线，无新增失败；前端冒烟 0 pageerror |

## 2 关键设计决策

1. **F1 只隐藏不重算**：用户诉求是「0% 共识这个信息不要了」，按最小口径条件隐藏；真实共识百分比另议（C1 待确认，默认 A）。
2. **F2 双保险**：时序修复（组配置先行）解决首屏根因；ensureVisiblePage watch 兜底运行期组配置变更，二者缺一不可。
3. **F3 高度压缩为硬指标**：以 DOM 实测 963px 为基线，压缩 ≥25%；移动端适配与桌面美化同批次交付（C5 不拆分）。
4. **F4 仅 kline-dialog 作用域**：全局 .el-dialog__header 渐变不动，避免影响其他弹窗；用 .kline-dialog 前缀覆盖。
5. **F5 复用关注视觉语言**：优先复用 .qc-stock-row 网格体系（如可行），避免新建第三套列表样式；若差异过大再新增 .focus-row-grid 并收敛在 layout.css。
6. **F6 溢出检测双保险**：ResizeObserver + 100ms 延迟重测 + 切换页面时重测，防字体/懒加载导致误判。
7. **F7 摘要端点向后兼容**：/api/shortterm/dates 保持不变；新增 /dates/summary 为独立端点，旧前端零影响。
8. **令牌纪律**：所有新 CSS 使用 var(--...)；禁止硬编码 #hex（有守护测试）。
9. **TDD 四步**：每个任务先写失败测试 → 跑通失败 → 实现 → 跑通 + commit（Conventional Commits + v5.15 前缀）。

## 3 任务依赖与顺序

```
H1 版本决策（C5） ← C1-C6 决策先行（用户拍板）
   │
   ├─ 第 1 步：A 组（F1/F8 低风险快速交付）→ A2 影响测试 → H2 部分
   ├─ 第 2 步：B 组（F2 权限首屏）→ B3 契约测试
   ├─ 第 3 步：D 组（F4 弹窗）+ E 组（F5 列表）→ 浏览器实证
   ├─ 第 4 步：F 组（F6 顶部标签）→ F4 nav 测试
   ├─ 第 5 步：C 组（F3 时间轴，改动最大）→ 门禁 + 浏览器实证
   └─ 第 6 步：G 组（F7 双栏）→ G4 测试
        │
        └─ H3 dist 重建 → H4 全量回归 → 用户确认 → 发布（§4）
```

## 4 发布与同步

1. dev 全量测试全绿（无新增失败）。
2. 提交并 push（git -c http.proxy= -c https.proxy= push origin master）。
3. ops 对齐：cd quant-calendar-ops && git fetch origin && git reset --hard origin/master。
4. 重启双端：export DBUS_SESSION_BUS_ADDRESS=unix:path=/run/user/1000/bus; systemctl --user restart quant-calendar-ops.service quant-calendar-dev.service（或 bash /home/evergreen/dsh-workspace/qc-svc.sh restart）。
5. 验证：curl /api/health 双端版本一致；GET / 200；三数据源 connected。
6. 群晖备份仓：GIT_SSH_COMMAND="ssh -F /dev/null -o BatchMode=yes ..." git push synology master。
7. 用户确认后打 tag（v5.6.0 或按 C5 决策）触发 CI/Docker。

## 5 风险与规避

| 风险 | 规避 |
|------|------|
| F2 await 组配置拖慢首屏 | 与偏好加载 Promise.all 并行；接口轻量；耗时增量 <100ms 量级；失败降级为原逻辑 |
| F3 大改 CSS 触发令牌/对比度门禁 | 先行跑 test_tokens_no_hardcode/test_contrast；双主题浏览器实证；改动拆小步提交 |
| F5 行重构丢失交互 | 保留全部事件绑定；契约测试断言关键类与事件；浏览器实证分组/展开/详情 |
| F6 溢出误判 | ResizeObserver + 延迟重测 + 页面切换重测；无溢出时控件隐藏 |
| F7 双栏窄屏溢出 | <1024px 堆叠断点；列表项省略号；摘要字段可选链 |
| F8 更名遗漏 | grep '功能配置' 全量清单先行（非 dist）；测试断言兜底 |
| dist 重建遗漏 | H3 强制步骤；发布清单核对 dist hash |

