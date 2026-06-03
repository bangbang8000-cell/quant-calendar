# 量化选股日历 v1.9.3 — 部署指南

## 快速部署

```bash
# 1. 解压
tar -xzf quant-calendar-v1.9.3.tar.gz
cd quant-calendar-ops

# 2. 安装依赖
cd backend
pip install -r requirements.txt --break-system-packages

# 3. 配置数据源 Token
# 登录后在「系统配置 → 数据源」页面填入 Tushare Token

# 4. 启动
python3 main_new.py --port 8000
```

浏览器打开 http://localhost:8000

## 生产部署

```bash
# 后台运行
cd backend
nohup python3 main_new.py --port 8000 > /tmp/quant-calendar.log 2>&1 &

# 或使用 systemd
sudo tee /etc/systemd/system/quant-calendar.service << 'EOF'
[Unit]
Description=量化选股日历
After=network.target

[Service]
Type=simple
User=evergreen
WorkingDirectory=/home/evergreen/.openclaw/workspace/quant-calendar-ops/backend
ExecStart=/usr/bin/python3 main_new.py --port 8000
Restart=always

[Install]
WantedBy=multi-user.target
EOF
sudo systemctl daemon-reload
sudo systemctl enable --now quant-calendar
```

## 包结构

```
quant-calendar-ops/
├── backend/               # FastAPI 后端
│   ├── main_new.py       # 主入口（唯一入口）
│   ├── config.py          # 全局配置
│   ├── paths.py           # 路径计算
│   ├── auth.py            # JWT 认证
│   ├── user_manager.py    # 用户/组管理
│   ├── market_data.py     # 行情数据（缓存 + Tushare）
│   ├── data_sources.py    # 多数据源管理（sxsc_tushare / tushare）
│   ├── merrill_clock.py   # 美林时钟周期评估
│   ├── ai_evaluator.py    # AI 多模型评股
│   ├── scheduler.py       # 定时任务（自动评股/飞书推送）
│   ├── rate_limit.py      # 速率限制
│   └── api/v1/            # API 路由
│       ├── router.py
│       ├── auth.py        # 登录/用户 API
│       ├── calendar.py    # 选股日历 API
│       ├── merrill.py     # 美林时钟 API
│       ├── ai.py          # AI 评股 API
│       ├── datasource.py  # 数据源配置 API
│       ├── groups.py      # 分组管理 API
│       └── user_config.py # 用户配置 API
├── frontend/              # Vue 3 SPA（单文件）
│   └── index.html         # ~9800 行，Vue 3 + Element Plus + ECharts
├── data/                  # 数据目录（运行时生成）
│   ├── users.json         # 用户数据
│   ├── groups.json        # 用户组配置
│   └── users/{username}/  # 每用户数据（自选股/评股历史）
├── requirements.txt       # Python 依赖
├── release.sh             # 发布脚本
├── README.md
└── DEPLOYMENT.md
```

## 常见问题

### 服务无法启动
```bash
# 检查端口占用
ss -tlnp | grep 8000
fuser -k 8000/tcp  # 强制释放

# 清除缓存重启
cd backend
find . -name '__pycache__' -type d -exec rm -rf {} +
python3 main_new.py --port 8000
```

### Tushare 数据获取失败
- 登录后在「系统配置 → 数据源」页面配置 Tushare Token
- 或直接编辑 `backend/config.py`（不推荐，会被代码更新覆盖）

### 页面空白/乱码
1. 首先检查服务健康：`curl http://localhost:8000/api/health`
2. 强制刷新浏览器：Ctrl+Shift+R
3. 检查浏览器控制台 JS 错误

### 修改前端后不生效
- 前端是单文件 SPA，修改后必须重启后端服务
- 浏览器可能有缓存：Ctrl+Shift+R 强制刷新

## 版本信息

- **版本**: v1.9.3
- **更新日期**: 2026-06-02
- **入口文件**: `backend/main_new.py`（不是 `main.py`）
- **特性**: 美林时钟 v2 / 双数据源 / AI 多模型 / 用户组管理 / 4套主题
