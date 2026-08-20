# 量化选股日历 安全审计报告（安全维度）

- **审计对象**: quant-calendar（唯一事实源仓库，git master b0e1b30，V4.0.8）
- **仓库路径**: /home/evergreen/dsh-workspace/quant-calendar-dev（dev 运行 :8001，ops :8000，ops 经 cloudflared 公网隧道暴露）
- **审计日期**: 2026-08-21
- **审计范围**: 认证/授权/JWT/密码存储/密钥与Token处理/API鉴权/CORS/输入校验/SQL注入/XSS/路径穿越/速率限制/审计日志/越权访问/敏感信息泄露
- **方法**: 静态代码审计（backend/*.py 全量 + frontend/js 关键文件）+ 对运行实例 :8001 的非破坏性 API 实测验证

---

## 0. 总体结论

| 维度 | 结论 |
|---|---|
| 密码存储 | OK：bcrypt（含 MD5 旧值自动迁移），无明文落库 |
| SQL 注入 | OK：未发现（db.py 全部参数化查询） |
| 命令注入 / RCE | OK：未发现 subprocess/os.system/eval/exec；自定义策略代码仅正则解析、不执行 |
| 路径穿越 | 低风险残留（restore_backup 文件名、username 路径拼接） |
| XSS | 有 sanitizeHtml 白名单消毒 + CSP nonce，但 script-src 含 unsafe-eval、token 存 localStorage，XSS→Token 失窃链路存在 |
| **鉴权覆盖** | **严重缺失**：初始化向导、数据刷新/拉取、AI 模型配置等关键端点完全匿名可达 |
| **越权** | guest 角色形同虚设；开放 API 可读任意用户评估记录（IDOR） |
| 密钥/Token | KEY_VIEW_PASSWORD 硬编码默认 admin123；webhook secret 明文返回；dev .env 权限 664 |
| 速率限制 | 内存后端 + 代理后单 IP 共享，无账号锁定/退避，可被绕过/耗尽 |
| 审计日志 | 覆盖不全（改密/用户管理/配置变更未审计） |

**风险分布**: P0 严重 4 项 / P1 高 6 项 / P2 中 8 项 / P3 低 5 项（详见 §10 修复清单）。

> 警告：ops 实例经 cloudflared 公网 URL 可达，而本项目存在未鉴权改 admin 密码的端点（问题 #1），公网暴露即账户接管，请优先处置。

---

## 1. 认证与授权（auth.py / api/v1/auth.py）

### 1.1 JWT 机制分析
- 签发: backend/auth.py:36-54 — HS256 + settings.SECRET_KEY；默认 24h 过期（config.py:27 ACCESS_TOKEN_EXPIRE_MINUTES=1440）。
- **角色来自令牌而非数据库**: backend/auth.py:66-78 get_current_user 从 JWT payload 读 role，不回查 DB 当前 role。后果：
  - admin 被降权后，旧 token 在 24h 内仍具 admin 权限；
  - 若 SECRET_KEY 泄露/弱，可任意伪造 role=admin 令牌。
- 无 jti/iat/iss/aud 声明；**改密/重置密码/禁用后旧 token 全部继续有效**（禁用仅影响 enabled 回查 auth.py:92-96，role 不回查）。
- 登录成功仅返回 user_manager.get_user(username)（auth.py:139-146），已剔除 password 字段（user_manager.py:158-164）。

### 1.2 admin 判定与 guest 门槛
- get_admin_user（auth.py:100-110）只比较 JWT payload role=="admin" —— 依赖 §1.1 的令牌角色。
- get_non_guest_user（auth.py:113-123）**全仓库仅 1 处使用**（api/v1/auth.py:190 change_password）。guest 账户自动创建且 enabled=True（user_manager.py:89-97、111-119），get_current_active_user（auth.py:81-97）只检查 enabled → **guest 与普通用户权限几乎无差别**（问题 #5）。
- locked 字段（user_manager.py:95/117）**从未被鉴权逻辑读取**（grep 全库仅 list_users 展示），账号锁定功能不存在。

### 1.3 敏感端点鉴权覆盖清单（静态+实测）
| 端点 | 鉴权 | 实测 |
|---|---|---|
| POST /api/setup/complete、/setup/reset | 无 | GET /api/setup/status → 200 |
| /api/data-refresh/config|reload|pull|financial | 无 | GET /api/data-refresh/config → 200 |
| POST /api/ai/models、/models/test、/models/list、/auto-config；GET /models、/catalog、/auto-config | 无 | GET /api/ai/models → 200（含掩码 key） |
| GET /api/feedback | 无 | 200（含 ip/user_agent/内容） |
| GET /metrics（Prometheus） | 无 | 代码 main_new.py:261-266 |
| /api/calendar/*、/api/market/overview|kline|review*、/api/search、/api/analytics/page | 无（只读行情，可接受） | 200 |
| POST /api/ai/evaluate、/batch-evaluate、/chat*、/backtest/*、/strategy-research/* | 任意登录（含 guest） | — |
| /api/backup/create、/api/data/export|import | 任意登录（含 guest）；restore 校验 admin | — |
| /api/audit/*、/api/system/monitor、/api/feishu/*、/api/openapi/keys|webhooks | admin | — |

---

## 2. 密钥与 Token 存储/传输（secret_utils.py / api_keys.py / webhook.py / .env）

- OK **API Key**: 只存 sha256 哈希（api_keys.py:54-56、79），明文仅签发时一次返回（openapi.py:201-202），审计只记 prefix（openapi.py:197-198）。设计良好。
- **KEY_VIEW_PASSWORD 默认 admin123**（config.py:50），两环境 .env 均未覆盖（实测 grep 无 KEY_VIEW_PASSWORD）→ 「查看完整密钥」门槛实为公开默认口令。secret_utils.py:31-36 用它做 hmac 比较（比较本身 OK）。
- **webhook secret 明文存储且明文返回**: webhook.py:69-87 生成/存储 secret，list_subscriptions（webhook.py:90-110）与 create 响应（openapi.py:250-255、258-262）原样返回完整 secret。
- **/api/user/config 明文密钥风险**: user_config.py:172-176 get_my_config 返回 base 配置（含 ai.apiKey / tushare.token / feishu.webhook_url 字段，BASE_CONFIG_DEFAULTS user_config.py:22-38）不经掩码。实测当前实例这些字段为空（密钥现存 ai_models.json），但若 admin 将 key 存入用户配置，将明文下发至任意登录用户（含 guest）。
NaN
- **.env 权限**: dev .env 权限 664（组可读，含 SECRET_KEY/FERNET_KEY/TUSHARE_TOKEN），ops 为 600。dev 需收紧。
- SECRET_KEY/FERNET_KEY 缺失时自动生成并回写 .env（config.py:78-101）——可用，但若 .env 不可写会静默降级为进程内随机 key（重启后全部 token 失效，运维健壮性问题）。

---

## 3. 用户可操控输入的处理（注入面）

| 输入面 | 处理 | 结论 |
|---|---|---|
| 股票代码/日期（/api/calendar/stock/*、/api/market/kline/*、/api/view/*） | 无 SQL（SQLite 仅用于用户数据且全参数化）；日期经 strptime/字典键访问 | 无注入；无效日期仅触发 500 回显（问题 #10） |
| 策略参数/自定义策略代码（strategy-research） | 代码不执行：仅正则提取字面代码（strategy_custom.py:48-66），ptrade.validate_ptrade_code 做 import 黑名单校验（strategy_sdk/ptrade.py:26） | 无 RCE 面 |
| **AI 厂商 base_url（/api/ai/models/test、/models/list）** | 直接拼接 base_url + /chat/completions、/models 发起 requests（ai_evaluator.py:708、745） | **SSRF（问题 #2）** |
| AI 提示词（chat/evaluate） | 拼接进 LLM prompt，无模板注入面；LLM prompt 注入属模型侧风险 | 低（建议加护栏） |
| Webhook url（admin） | 仅校验 http/https 前缀（openapi.py:243-244） | SSRF 面（admin 权限，P2） |
| 反馈内容/搜索词/反馈 page | 存 JSON/回显，前端有 sanitizeHtml | 低 |
| 备份恢复文件名 restore_backup(name) | os.path.join(DATA_DIR/backups, name)（db.py:584）无 ../ 校验 | 低（admin 权限） |
| username 路径拼接（user_config.py:41-42、ai_evaluator.py:865） | 来自 JWT sub（签名保护） | 低风险 |

---

## 4. 速率限制（rate_limit.py）

- 中间件: 每 IP 600 次/分（rate_limit.py:115、142-162）；登录接口独立 30 次/分/IP（:174-183）；开放 API 每 Key 120 次/分（openapi.py:29-31、58-65）。
- 实现: SimpleMemoryBackend（:39-73）——进程内字典，**重启清零、多 worker/多实例不共享**；无过期条目清理（缓慢内存增长）。
- **IP 键失真**: slowapi get_remote_address 在本机安装中只取 request.client.host（实测源码，不信任 X-Forwarded-For——防伪造 OK）；但 ops 经 cloudflared 隧道后**所有用户同源（代理 IP）→ 600/分与 30/分均为全站共享额度**：单攻击者可耗尽他人额度造成 DoS；反之也无法区分真实用户。
- **无账号级限制**: 登录无限流键到 username，无失败锁定/指数退避（user_manager locked 字段未被使用），无 CAPTCHA。30 次/分共享额度下暴力破解只需控制速率即可持续进行。

---

## 5. 越权访问（IDOR / 水平/垂直越权）

1. **openapi_evaluations 任意用户读取（IDOR，P1）**: openapi.py:125-137 user: str = "admin" 参数由客户端指定，持有任意 read 级 API Key 即可枚举各用户 AI 评估历史（含结论/评分）。
2. **guest 垂直越权（P1）**: 见 §1.2/问题 #5，guest 可调用付费 AI 评估、批量评估、AI 聊天（LLM 成本滥用）、备份创建、数据导出、策略研究（含 AI 代写/优化，二次 LLM 消耗）、/api/system/review/trigger（AI 复盘触发）。
3. **匿名删除 default 用户聊天记录**: chat.py:71-75 _resolve_username 未登录回退 "default"，get_history/delete_history（chat.py:368-438）匿名可读/删 default 命名空间历史（含遗留共享存档 chat.py:112-118）。
4. **非管理员可改自己密码且无需旧密码**: PUT /api/users/{username}（api/v1/auth.py:116-139）update_user 无旧密码校验（对比 /api/auth/change-password 需旧密码 auth.py:196-197）——同一功能两套强度，弱路径可绕过。
5. update_user 的 role 字段处理：非管理员传 role 时被强制回退（auth.py:128-130）OK；但 group 可自设（低）。
6. 自选/组合/评估历史等用户数据均按 JWT username 隔离（db.chat_list/watchlist_get/portfolio 均带 username 条件）OK。

---

## 6. 审计日志（audit_log.py）

- OK 落点: 登录成功/失败（api/v1/auth.py:40-57）、删除用户（:146-153）、恢复备份（backup.py:46-51）、API Key 签发/吊销（openapi.py:194-198、219-223）。
- **缺口**: 修改用户信息/改密（update_user、reset-password、change-password）均未审计；AI/数据源/刷新/飞书配置变更未审计；reveal-secret 未审计（V4.0 设计为不落库，可接受，但建议记事件不记值）。
- audit_logs SQLite 表无保留策略（audit_log.py:41-57），持续增长无上限；login_failed 可被攻击者刷量撑库。
- 审计查询仅 admin（audit.py:22-24、31-33）OK。

---

## 7. 前端 XSS / CSP / Token 存储

- OK sanitizeHtml 白名单消毒（frontend/js/core.js:264-319），v-html 均经 sanitizeHtml/renderMarkdown+sanitize 包装（ai-chat.js:342-343、stock-detail.js:326）。
- OK CSP nonce 注入（main_new.py:126-184）: 但 script-src 含 unsafe-eval（:177）——ECharts/Vue 需要，弱化 XSS 防线；connect-src 允许任意 https 外传（:180）。
- **JWT 存 localStorage**（frontend/js/core.js:16、app-logic.js:152）——无 HttpOnly 保护，XSS 即 token 失窃。CSP 未含 object-src/worker 限制。
- OK 安全响应头齐全（X-Frame-Options DENY、nosniff、HSTS、Referrer-Policy，main_new.py:159-172）。
- CSV 导出未做公式注入转义（export.py:131-197，股票/策略名以 =+-@ 开头时 Excel 公式注入，需登录，P3）。

---

## 8. 密码存储

- OK bcrypt（user_manager.py:132-156）；兼容 MD5 旧值验证后自动迁移（:143-151）——迁移路径仅在库中确有 MD5 时触发，可接受。
- **默认口令**: admin/admin（user_manager.py:101-109）、guest/guest（:111-119）——实测 :8001 用 admin/admin 可登录；ops 公网暴露时风险极高。
- 密码策略过弱: change-password 最短 3 位（api/v1/auth.py:199）、setup 4 位（setup_wizard.py:105）、reset 6 位（:177）。

---

## 9. Top 10 问题清单

| # | 问题 | 严重度 | 证据位置 | 修复建议 |
|---|---|---|---|---|
| 1 | 初始化向导匿名可改 admin 密码 → 账户接管：POST /api/setup/complete 无鉴权、不检查 setup_done，直接 update_user("admin", new_password)；/api/setup/reset 匿名可重置向导；/api/setup/status 匿名泄露默认密码状态 | 严重(P0) | backend/api/v1/setup_wizard.py:97-137、140-144、81-94 | complete/reset 加 get_admin_user；仅 setup_done==False 时允许设密码；密码强度≥8；status 不暴露密码状态 |
| 2 | 未鉴权 SSRF：POST /api/ai/models/test、/models/list 接受任意 base_url 并服务端发起 HTTP（响应回显 200 字节） | 严重(P0) | backend/api/v1/ai.py:264-290；ai_evaluator.py:676-691、708、718、745-747 | 加 admin 鉴权；base_url 白名单（仅 https + 预置厂商域名）；禁止内网/链路本地地址 |
| 3 | 数据刷新/拉取端点全部匿名：可匿名改刷新配置、触发全量 reload、触发 Tushare 日线+财务拉取（高成本+重计算） | 高(P0) | backend/api/v1/data_refresh.py:16-26、29-47、50-82 | 加 get_admin_user；/pull 加独立配额与并发锁 |
| 4 | AI 模型/自动评估配置匿名可写：匿名可覆盖厂商配置（含恶意 base_url）、保存自动评估配置（触发定时付费 LLM 任务） | 高(P0) | backend/api/v1/ai.py:181-188、254-261（GET /models 240-251 匿名亦泄露厂商元数据） | 写操作加 get_admin_user；读操作按最小权限 |
| 5 | guest 角色形同虚设：get_non_guest_user 仅 1 处使用；guest(enabled=True) 可调用付费 AI/批量评估/聊天、备份创建、导出、策略研究、复盘触发 | 高(P1) | backend/auth.py:81-123；user_manager.py:89-97、111-119；api/v1/auth.py:190 | 全局 guest 拦截（middleware 或依赖注入）；或 guest enabled=False；高成本端点统一 get_non_guest_user |
| 6 | 开放 API 可读任意用户评估记录（IDOR）：?user=<任意用户名>，read 级 Key 即可枚举 | 高(P1) | backend/api/v1/openapi.py:125-137 | 移除 user 参数或仅允许 read_admin 角色指定；否则固定为公开聚合数据 |
| 7 | JWT 设计缺陷：角色固化在令牌内不回查 DB、24h 长过期、改密/降权后旧 token 仍有效、无 jti/iat/iss/aud | 中高(P1) | backend/auth.py:66-78、36-54；config.py:27 | 每请求回查 DB role；令牌版本号/黑名单；有效期缩短+refresh token；补标准声明 |
| 8 | 默认口令与硬编码默认密钥口令：admin/admin、guest/guest；KEY_VIEW_PASSWORD 默认 admin123 且两环境未覆盖 | 高(P1) | backend/user_manager.py:101-119；config.py:49-50 | 首次登录强制改密；启动自检（默认口令/KEY_VIEW_PASSWORD 未显式配置即告警或拒绝）；dev .env 权限改 600 |
| 9 | 速率限制失真与绕过面：代理后单 IP 共享额度（可被单点耗尽 DoS）、内存后端重启清零/多实例不共享、无账号锁定与退避、无 CAPTCHA | 中高(P1) | backend/rate_limit.py:39-73、115-128、174-183 | 受信代理链解析真实 IP（X-Forwarded-For 白名单）；账号级失败锁定+指数退避；持久化/共享后端 |
| 10 | 敏感信息泄露面：/api/feedback 匿名读（含 ip/UA/内容）；/metrics 匿名；500 响应回显 str(exc)（errors.py:75、views.py:84）；/setup/status 泄露默认密码状态；webhook secret 明文返回；/api/user/config 潜在明文密钥下发 | 中高(P1) | feedback.py:71-80；main_new.py:261-266；errors.py:73-76；webhook.py:90-110；openapi.py:258-262；user_config.py:172-176 | feedback 鉴权或脱敏；metrics 加白名单；统一异常不回显 detail；webhook secret 掩码；user/config 掩码 |

## 10. 修复清单（按优先级）

### P0（立即，本周内）
1. setup_wizard.py: complete/reset 加 admin 鉴权 + setup_done 状态机 + 密码强度（问题 #1）
2. ai.py: /models/test、/models/list、/models、/auto-config 加 admin 鉴权 + base_url 白名单/内网拦截（问题 #2、#4）
3. data_refresh.py: /config|reload|pull|financial 加鉴权 + 拉取并发锁（问题 #3）
4. 轮换 admin 密码 + 修改 KEY_VIEW_PASSWORD（去除 admin123 默认）；.env 权限 600（问题 #8）

### P1（两周内）
5. guest 全局拦截或逐端点补 get_non_guest_user（问题 #5）
6. openapi.py evaluations 移除任意 user 参数（问题 #6）
7. auth.py: role 回查 DB + 令牌版本/黑名单 + 改密吊销（问题 #7）
8. 补审计：update_user/reset-password/change-password/配置变更（§6）
9. 500 响应去 detail 化（errors.py）；feedback 鉴权/脱敏；webhook secret 掩码返回（问题 #10）
10. 限流：受信代理 IP 解析 + 登录失败账号锁定/退避（问题 #9）
11. 匿名聊天（chat.py 未登录回退 default）限制为只读或强制登录；default 历史禁止匿名删改（§5.3）

### P2（一个迭代内）
12. JWT 有效期缩短 + refresh token；change-password 强度 ≥8；update_user 改密也要求旧密码
13. 审计库保留策略（30 天清理）；login_failed 防刷
14. CSP 移除 unsafe-eval（评估可行性）或收紧 connect-src；考虑 HttpOnly+SameSite Cookie 方案
15. restore_backup 文件名 ../ 校验；CSV 公式注入转义；webhook 订阅 URL 内网拦截

### P3（长期）
16. 默认口令启动自检/告警；账号锁定策略启用 locked 字段；密码复杂度统一；审计 500 详情仅日志

## 11. 3-5 条最有价值的优化建议

1. **默认拒绝（deny-by-default）鉴权重构**：当前问题集中于「新端点忘了加 Depends」。建议在 router 层加「必须显式声明 public」的机制（统一依赖注入 + 匿名端点清单回归测试 test_no_unauthed_sensitive.py），把「忘加鉴权」从运行时风险变成测试门禁——一次性根除 #1/#3/#4 这类问题。
2. **会话与角色安全升级**：每请求回查 DB 角色 + JWT 版本号（改密即 +1，旧 token 立即失效）+ 缩短有效期并引入 refresh token；长远评估 HttpOnly SameSite=Strict Cookie 承载令牌，配合移除 script-src unsafe-eval，使 XSS 不再直接等价于账户接管。
3. **密钥治理三件套**：(a) 所有密钥出接口统一走 mask_secret（含 /api/user/config、webhook secret）；(b) KEY_VIEW_PASSWORD 改为「未配置即拒绝查看」并启动时强制校验强度；(c) 部署清单要求 .env 600 + 定期轮换，防「默认值/组可读」成为事实风险。
4. **高成本端点资源防护**：AI 评估/聊天/数据拉取/复盘触发按「账号+每日配额」限流（独立于 IP 限流），guest 与匿名单独低配额；拉取类加全局互斥锁与任务队列——同时解决成本滥用与匿名 DoS。
5. **补齐可观测性闭环**：把改密/用户管理/配置变更全部纳入 audit_log（当前缺口集中），500 响应只回通用文案、详情进日志；配合匿名端点回归测试，形成「审计-告警-修复」闭环，为 ops 公网暴露提供可追溯性。

## 12. 附录：已核查未见问题的项
- SQL 注入：db.py 全部参数化（kv_get/chat/watchlist/portfolio/audit 查询）；无拼接用户输入进 SQL（kv_set 表名仅固定三元分支 db.py:236-240）
- 命令执行：无 subprocess/os.system/popen/shell=True；自定义策略代码不执行（strategy_custom.py:48-66 仅正则）
- 开放 API Key 存储：仅 sha256 哈希 + 常量时间比较（api_keys.py:54-61）
- 密码存储：bcrypt；/users 列表、/users/me 均剔除 password 字段（user_manager.py:158-173）
- CORS：固定源列表 + allow_credentials=True（源非 * 时可接受，main_new.py:107-114）