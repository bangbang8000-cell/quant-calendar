# 📅 量化选股日历

基于 **美林时钟经济周期理论** 的智能选股系统，融合多策略量化选股、AI 智能评估、飞书消息推送，帮助投资者把握市场周期轮动，优化资产配置。

---

## 📖 软件介绍

### 整体架构

```
用户浏览器 ──▶  FastAPI 后端  ──▶  Tushare Pro (行情数据)
                 │                    ├── AI 大模型 API
                 │                    ├── 飞书机器人 (推送)
                 │                    └── SQLite (本地数据)
```

前端为单页应用（Vue 3 + Element Plus + ECharts），后端为 Python FastAPI 服务，数据落地在本地 SQLite 数据库和 JSON 文件中。不依赖外部中间件（Redis/MySQL），解压即用。

### 核心功能

**🏠 策略总览（仪表盘）**
- 多策略选股统计：多因子、行业轮动、指数增强、资金流
- 美林时钟经济周期判断（PMI/GDP/CPI 指标驱动）
- 共识度排行：多策略同时选中的股票 TOP 排行，含顺序编号
- 入池/出池动态监控
- 今日市场行情概览（涨跌统计、成交额）

**📅 量化日历**
- 日/周/月/年多视图切换
- 股票池按状态筛选（全部/✨新入池/✅当前持仓/↩️已出池）
- 搜索股票代码或名称
- 个股详情弹窗：K 线图（日/周/月线）、成交量、均线、策略标签
- 点击阶段卡片查看投资建议

**🤖 AI 智能评估**
- **内置引擎**：无需 API Key，基于九大维度技术指标自动评分
- **大模型评估**：支持 DeepSeek / 通义千问 / GLM / 文心 / 硅基流动 / 火山引擎 / 自定义
- 按时间/按股票两种查看模式
- 批量评估 + 历史记录管理（可单条/批量删除）

**🎯 策略筛选过滤**（v1.2.0）
- 按策略维度过滤股票池（多因子/行业轮动/指数增强/资金流）
- 并集（任一策略选中） / 交集（全部策略选中）两种模式
- 实时预览过滤后各视图股票数量
- 自动保存到浏览器本地

**🔔 飞书推送**
- 每日 09:00 自动推送市场分析日报
- 测试消息验证配置连通性

**👥 用户管理**
- 管理员/普通用户两级权限
- 创建/编辑/删除/启用禁用/重置密码
- 登录日志追踪

**⚙️ 系统配置**
- **系统状态仪表盘**：股票数据、策略数、AI 服务、飞书、Tushare 连接、交易日历、在池股票一览
- **Tushare 数据源**：Token 配置（本地明文）、连接测试、全市场股票同步（每小时自动检测）
- **AI 模型**：Coding Plan 内置 / DeepSeek / Qwen / GLM / 文心 / 硅基流动 / 火山引擎 / 自定义
- **飞书推送**：Webhook URL 配置 + 测试
- **策略筛选**：按策略过滤股票池
- **访问限速**：API 限流在线调整（10~10000 次/分钟）
- **🎨 主题切换**：专业蓝 / 新年红 / 土豪金 / 斑斓黑 四套配色
- **用户管理**：完整账号生命周期管理
- **配置状态提示**：未保存变更自动标记

**📊 图表系统**
- ECharts K 线图：日/周/月线，dataZoom 滑块 + 滚轮缩放
- 主题色自适应：均线/边框跟随当前主题
- 成交量柱状图：联动时间轴
- 美林时钟经济周期可视化：2×2 卡片布局 + 进度条 + 经济指标

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

# 2. （推荐）创建虚拟环境
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
python main.py
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
4. 或登录系统后进入「系统配置 → Tushare 数据源」填写
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
│   ├── main.py               # 主入口 + 系统 API
│   ├── paths.py              # 路径配置
│   ├── config.py             # 环境变量
│   ├── rate_limit.py         # 限流（在线可调）
│   ├── auth.py               # JWT 认证
│   ├── database.py           # SQLite ORM
│   ├── market_data.py        # 行情数据 + K线
│   ├── merrill_clock.py      # 美林时钟
│   ├── ai_evaluator.py       # AI 评估引擎
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
├── frontend/                  # Vue 3 前端（单页 SPA）
│   └── index.html            # 完整应用（含 ECharts K 线图表）
├── data/                      # 数据文件
│   ├── quant_calendar.db     # SQLite 数据库
│   ├── stock_info.json       # 股票信息
│   ├── users.json            # 用户账号
│   ├── ai_config.json        # AI 配置持久化
│   ├── ai_evaluation_history.json  # 评估历史
│   └── feishu_config.json    # 飞书配置
├── requirements.txt          # Python 依赖
├── .env.example              # 配置模板
├── .env                      # 本地配置（不随包发布）
├── README.md                 # 本文档
├── DEPLOYMENT.md             # 部署详情
├── start.sh / start.bat      # 启动脚本
└── dev.sh / dev.bat          # 开发模式脚本
```

---

## 🆕 v1.4.0 更新日志

### 📱 移动端深度优化（核心更新）
| 功能 | 说明 |
|------|------|
| **全局溢出防护** | 从 html/body 层开始拦截横向溢出，统一所有元素 border-box 盒模型 |
| **表单系统重构** | 强力覆盖 Element Plus flex 布局，强制标签顶部对齐，输入框宽度自适应 |
| **状态标签优化** | 策略共识度标签改为垂直排版（文字+数字上下排列），紧凑间距，自动换行 |
| **K 线图表适配** | ECharts 容器宽度限制，防止图表横向溢出 |
| **弹窗组件优化** | 最大宽度 95vw，内边距适配移动端 |
| **触摸区域优化** | 股票列表、底部导航统一最小触摸高度 56px，符合移动端交互规范 |
| **长文本处理** | 卡片标题强制换行、配置说明文字自动断行、下拉选项文字自动换行 |
| **小屏幕适配** | 480px 以下超小屏幕状态栏改为 1 列，工具栏垂直布局 |

### 🔧 其他优化
- ✅ 移除策略筛选区域独立保存按钮，统一由系统配置页保存
- ✅ 移除限流配置区域独立保存按钮，统一由系统配置页保存
- ✅ 修复发布脚本 sed 全局替换破坏 Vue 代码的风险
- ✅ Tushare 状态图标优化，图标语义统一
- ✅ 密码显示按钮优化，扩大点击区域

---

## 🆕 v1.2.0 更新日志

| 功能 | 说明 |
|------|------|
| 🎯 **策略筛选过滤** | 按策略维度过滤股票池，支持并集/交集模式，实时预览过滤数量 |
| 📊 **系统状态仪表盘** | 一键查看股票数据量、AI/飞书/Tushare 状态、交易日历、在池股票 |
| 🔌 **Tushare 近实时监控** | 每小时自动检测连接状态，配置页实时显示 |
| 🤖 **AI 配置增强** | 支持 6 个国内大模型预设，API Key 明/密文切换 |
| 🚦 **限流配置 UI** | API 限流在线可调（10~10000 次/分钟），无需重启 |
| 🎨 **四套主题配色** | 专业蓝 / 新年红 / 土豪金 / 斑斓黑，美林时钟卡片跟随主题色 |
| 📈 **K 线图表优化** | dataZoom 滑块 + 滚轮缩放，主题色自适应，柱状图联动 |
| 🖥️ **图标语义统一** | 全局 20+ 处图标优化，建立一致图标体系 |
| 🔧 **多项修复** | 美林时钟弹窗滚动锁定、版本号泄漏防御、布局优化、动画加速 |

---

## ❓ 常见问题

### 页面空白 / 显示异常？
按 **Ctrl+F5** 强刷浏览器缓存即可。

### 端口被占用？
```bash
# 修改 .env 中的 PORT，或启动时指定
# 后端默认监听 0.0.0.0:8000
```

### 数据不更新？
系统每小时自动检测 Tushare 连接。也可手动进入「系统配置 → Tushare 数据源」点击测试连接和同步股票。

### 忘记密码？
数据库文件 `data/users.json` 中直接修改，或删除该文件重启服务（恢复默认 admin/admin）。

---

## 📄 许可证

本项目仅供学习和研究使用，**不构成投资建议**。股市有风险，投资需谨慎。

---

<div align="center">

**量化选股日历 v1.4.0**

用科技赋能投资，让决策更智慧

</div>
