# 📅 量化选股日历

基于 **美林时钟经济周期理论** 的智能选股系统，融合多策略量化选股、AI 智能评估、飞书消息推送，帮助投资者把握市场周期轮动，优化资产配置。

> 当前版本：**v1.5.5**

---

## 📖 软件介绍

### 整体架构

```
用户浏览器 ──▶  FastAPI 后端  ──▶  Tushare Pro (行情数据)
                 │                    ├── AI 大模型 API
                 │                    ├── 飞书机器人 (推送)
                 │                    └── SQLite + JSON (本地存储)
```

前端为单页应用（Vue 3 + Element Plus + ECharts），后端为 Python FastAPI 服务，数据落地在本地 SQLite 数据库和 JSON 文件中。不依赖外部中间件（Redis/MySQL），解压即用。

### 核心功能

**🏠 策略总览**
- **二级导航**：总览 / 美林时钟 / 策略共识榜
- 多策略选股统计（多因子、行业轮动、指数增强、资金流）
- 交易日总数、覆盖股票数、选股策略数、当前在池股票 — 四维概览卡片
- 美林时钟经济周期可视化：2×2 象限卡片 + 经济指标（PMI/GDP/CPI）
- 共识度排行：多策略同时选中的股票 TOP 排行，含顺序编号
- 入池 / 出池动态监控
- 今日市场行情概览（涨跌统计、成交额）

**📅 量化日历**
- 日 / 周 / 月 / 年多视图切换
- 股票池按状态筛选（全部 / ✨新入池 / ✅当前持仓 / ↩️已出池）
- 搜索股票代码或名称
- 个股详情弹窗：K 线图（日/周/月线）、成交量、均线、策略标签
- 点击阶段卡片查看投资建议

**🤖 AI 智能评估**
- **智能评股**：个股多维度 AI 分析，含技术面 + 基本面综合研判
- **智能指数评估**（v1.5.3）：大盘指数 AI 评估，含趋势判断与建议
- **内置引擎**：无需 API Key，基于九大维度技术指标自动评分
- **大模型支持**：DeepSeek / 通义千问 / GLM / 文心 / 硅基流动 / 火山引擎 / 自定义
- 按时间 / 按股票两种查看模式
- 批量评估 + 历史记录管理（可单条/批量删除）
- 阶段动画反馈（📡 获取 → 📊 计算 → 🤖 分析）

**🎯 策略筛选过滤**（v1.2.0）
- 按策略维度过滤股票池（多因子/行业轮动/指数增强/资金流）
- 并集（任一策略选中） / 交集（全部策略选中）两种模式
- 实时预览过滤后各视图股票数量
- 自动保存到浏览器本地

**🔔 飞书推送**
- 每日 09:00 自动推送市场分析日报
- 测试消息验证配置连通性

**👥 用户管理**（v1.5.5 优化）
- 管理员 / 普通用户两级权限
- 创建 / 编辑 / 删除 / 启用禁用 / 重置密码
- 登录日志追踪（最近登录时间 + 登录次数）
- 账号状态实时切换

**⚙️ 系统配置**（v1.5.0 二级导航）
- **系统状态**：数据量、策略数、AI/飞书/Tushare 连接、交易日历、在池股票一览
- **数据源**：Tushare Token 配置、连接测试、全市场股票同步
- **功能配置**：策略筛选过滤 — 按策略维度过滤股票池
- **用户管理**：完整账号生命周期，用户卡片自然铺展
- 访问限速在线可调（10~10000 次/分钟）
- 🎨 四套主题配色（专业蓝 / 新年红 / 土豪金 / 斑斓黑）

**📊 图表系统**
- ECharts K 线图：日/周/月线，dataZoom 滑块 + 滚轮缩放
- 主题色自适应：均线 / 边框跟随当前主题
- 成交量柱状图：联动时间轴
- 美林时钟经济周期可视化：2×2 象限卡片 + 进度条 + 经济指标

---

### 适用场景

- 个人投资者跟踪多策略选股信号
- 量化策略研究辅助决策
- A 股市场周期与行业轮动分析

---

## 🚀 部署指南

### 环境要求

| 依赖 | 版本要求 |
|------|---------|
| Python | 3.8+ |
| pip | 20+ |
| 浏览器 | Chrome / Firefox / Safari / Edge |

### 快速部署

```bash
# 1. 解压或进入项目目录
cd quant-calendar

# 2.（推荐）创建虚拟环境
python3 -m venv venv
source venv/bin/activate        # Linux/macOS
# venv\Scripts\activate         # Windows

# 3. 安装依赖
pip install -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple

# 4. 配置环境变量
cp .env.example .env
# 编辑 .env 文件，填入你的 TUSHARE_TOKEN
# TUSHARE_TOKEN 从 https://tushare.pro 注册获取，需积分 ≥ 120

# 5. 启动服务
cd backend
python main_new.py
```

### 访问系统

打开浏览器访问 **http://localhost:8000**

**默认登录账号：**
- 用户名：`admin`
- 密码：`admin`

> 可在系统配置 → 用户管理中修改密码或添加新用户。

---

## ⚙️ 配置说明

### 数据源配置（必做）

系统依赖 **Tushare Pro** 获取实时行情和 K 线数据：

1. 前往 [Tushare 官网](https://tushare.pro) 注册账号
2. 登录后获取 API Token（需 ≥ 120 积分）
3. 在 `.env` 中填入 `TUSHARE_TOKEN=***`
4. 或登录系统后进入「系统配置 → 数据源」填写
5. 点击「测试连接」验证配置是否正确
6. 点击「同步股票数据」获取全市场股票基础信息

### AI 评估配置（可选）

**内置引擎（无需配置，开箱即用）**
选择「Coding Plan」模式，基于技术指标多维度打分，无需 API Key。

**大模型评估（需 API Key）**
系统配置 → AI API 配置，选择模型后填入 API Key：
- DeepSeek：`api.deepseek.com`
- 通义千问：`dashscope.aliyuncs.com`
- 智谱 GLM：`open.bigmodel.cn`
- 百度文心：`aip.baidubce.com`
- 硅基流动：`api.siliconflow.cn`
- 火山引擎：`ark.cn-beijing.volces.com`

### 飞书推送配置（可选）

1. 在飞书群创建「自定义机器人」
2. 复制 Webhook URL
3. 系统配置 → 飞书推送中粘贴 URL
4. 点击「测试连接」验证

---

## 📁 项目结构

```
quant-calendar/
├── backend/                   # FastAPI 后端
│   ├── main_new.py           # 主入口 + 健康检查 API
│   ├── main.py               # 备用入口
│   ├── paths.py              # 路径配置
│   ├── config.py             # 环境变量
│   ├── rate_limit.py         # 限流（在线可调）
│   ├── auth.py               # JWT 认证
│   ├── database.py           # SQLite ORM
│   ├── market_data.py        # 行情数据 + K线
│   ├── merrill_clock.py      # 美林时钟
│   ├── ai_evaluator.py       # AI 评估引擎（个股+指数）
│   ├── feishu_push.py        # 飞书推送
│   ├── data_parser.py        # 策略数据解析
│   ├── stock_info.py         # 股票信息
│   ├── views_aggregator.py   # 视图数据聚合
│   ├── scheduler.py          # 定时任务
│   ├── user_manager.py       # 用户管理
│   ├── backtest.py           # 回测引擎
│   └── api/v1/               # API 路由
│       ├── router.py         # 路由汇总
│       ├── auth.py / market.py / calendar.py
│       ├── ai.py / feishu.py / dashboard.py
│       ├── ai_config_persist.py
│       └── views.py / backtest.py
├── frontend/                  # Vue 3 前端（单文件 SPA）
│   └── index.html            # 完整应用（约 7000 行，含 ECharts + CSS）
├── data/                      # 数据文件
│   ├── quant_calendar.db     # SQLite 数据库
│   ├── stock_info.json       # 股票信息
│   ├── users.json            # 用户账号
│   ├── ai_config.json        # AI 配置持久化
│   ├── ai_evaluation_history.json  # 评估历史
│   └── feishu_config.json    # 飞书配置
├── requirements.txt          # Python 依赖
├── README.md                 # 本文档
├── DEPLOYMENT.md             # 部署详情
├── start.sh / dev.sh         # 启动 / 开发脚本
└── release.sh                # 版本发布脚本
```

---

## 🆕 v1.5.x 更新日志

### v1.5.5 — 用户管理体验优化
- ✅ 用户管理卡片移除内层滚动容器（max-height 400px），改为自然铺展
- ✅ 消除双层滚动条，统一使用外层页面滚动

### v1.5.4 — 子页去重
- ✅ 策略总览：页头 + 四维统计卡片仅显示在「总览」子页，美林时钟和共识榜不再重复
- ✅ 系统配置：访问限速 + 主题选择仅显示在「状态」子页

### v1.5.3 — 智能指数评估
- ✅ 新增 `POST /api/ai/evaluate-index` 端点，支持大盘指数 AI 评估
- ✅ 评估包含趋势判断、建议操作和置信度评分

### v1.5.2 — AI 评估数据源重构
- ✅ AI 评估改用 Tushare 实时数据 + 内置评估管线
- ✅ 阶段动画：📡 获取行情 → 📊 计算指标 → 🤖 AI 分析

### v1.5.1 — 页面空白修复
- ✅ 修复 System 页面 v-else-if 链断裂导致空白页
- ✅ DIV 平衡验证（461/461）

### v1.5.0 — 二级导航
- ✅ 全局 Header：策略总览 / 量化日历 / AI 评估 / 系统配置
- ✅ 策略总览二级导航：总览 / 美林时钟 / 策略共识榜
- ✅ 系统配置二级导航：状态 / 数据源 / 功能配置 / 用户管理
- ✅ 用户菜单：修改密码 / 退出登录
- ✅ 移动端底部导航适配

---

### v1.4.0 — 移动端深度优化

| 功能 | 说明 |
|------|------|
| **全局溢出防护** | 从 html/body 层拦截横向溢出，统一 border-box |
| **表单系统重构** | Element Plus flex 布局覆盖，标签顶部对齐 |
| **状态标签优化** | 策略共识度标签垂直排版，紧凑间距 |
| **K 线图表适配** | ECharts 容器宽度限制 |
| **弹窗组件优化** | 最大宽度 95vw，移动端内边距适配 |
| **触摸区域优化** | 最小触摸高度 56px |
| **长文本处理** | 卡片标题 / 配置说明 / 下拉选项自动换行 |
| **小屏幕适配** | 480px 以下 1 列布局 |

---

## ❓ 常见问题

### 页面空白 / 显示异常？
按 **Ctrl+F5** 强刷浏览器缓存即可。

### 端口被占用？
```bash
# 修改启动端口（默认 8000）
# 或直接结束占用进程后重启
```

### 数据不更新？
系统每小时自动检测 Tushare 连接。也可手动进入「系统配置 → 数据源」点击测试连接和同步股票。

### 忘记密码？
数据文件 `data/users.json` 中直接修改，或删除该文件重启服务（恢复默认 admin/admin）。

---

## 📄 许可证

本项目仅供学习和研究使用，**不构成投资建议**。股市有风险，投资需谨慎。

---

<div align="center">

**量化选股日历 v1.5.5**

用科技赋能投资，让决策更智慧

</div>