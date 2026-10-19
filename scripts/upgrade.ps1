# ============================================================================
# 量化选股日历 一键升级脚本 (FR-3.17.12 / 可观测性与运维体验)
# ----------------------------------------------------------------------------
# 与 DEPLOYMENT.md「版本更新」流程一致:
#   git fetch + reset --hard origin/master (或 robocopy 同步)
#   → 保留 data/.env/.venv
#   → pip install -r requirements.lock + 关键包版本断言 (v6.4 FR-6.4.7)
#   → 重启服务(结束 8000 监听 + 启动)
#   → 健康检查 /api/health 直到 ok → 输出结果
#
# 用法:
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\upgrade.ps1 `
#       -RepoDir D:\MyCoding\QuantCalendar\quant-calendar-ops
#
#   DryRun 演练模式 (仅打印将要执行的命令, 不实际 git reset, 安全):
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\upgrade.ps1 `
#       -RepoDir D:\MyCoding\QuantCalendar\quant-calendar-ops -DryRun
# ============================================================================

param(
    # 目标目录 (如 quant-calendar-ops 生产目录)
    [Parameter(Mandatory = $true)]
    [string]$RepoDir,

    # 演练模式: 仅打印计划执行的命令, 不执行任何破坏性操作
    [switch]$DryRun,

    # 服务监听端口 (生产默认 8000)
    [int]$Port = 8000,

    # 健康检查总超时 (秒)
    [int]$HealthTimeoutSec = 120,

    # 非 git 仓库时的同步源目录 (robocopy 方案, 可省略)
    [string]$SourceDir = ""
)

$ErrorActionPreference = 'Stop'

function Write-Step {
    param([string]$Title)
    Write-Host ""
    Write-Host "==> $Title" -ForegroundColor Cyan
}

function Write-Planned {
    param([string]$Desc)
    Write-Host "    [DryRun] 即将执行: $Desc" -ForegroundColor Yellow
}

function Write-Ok {
    param([string]$Msg)
    Write-Host "    [完成] $Msg" -ForegroundColor Green
}

function Write-Fail {
    param([string]$Msg)
    Write-Host "    [失败] $Msg" -ForegroundColor Red
}

# ==================== 0. 参数校验 ====================
$RepoDir = $RepoDir.TrimEnd('\', '/')
if (-not $RepoDir) {
    Write-Fail "缺少 -RepoDir 参数 (目标目录, 如 D:\MyCoding\QuantCalendar\quant-calendar-ops)"
    exit 1
}

Write-Host "==================================================" -ForegroundColor Green
Write-Host "  量化选股日历 一键升级" -ForegroundColor Green
Write-Host "  目标目录 : $RepoDir" -ForegroundColor Green
Write-Host "  端口     : $Port" -ForegroundColor Green
Write-Host "  模式     : $(if ($DryRun) { 'DryRun 演练 (不执行破坏性操作)' } else { '正式执行' })" -ForegroundColor Green
Write-Host "==================================================" -ForegroundColor Green

# 正式执行模式下的目录/仓库预检
if (-not $DryRun) {
    if (-not (Test-Path $RepoDir)) {
        Write-Fail "目标目录不存在: $RepoDir"
        exit 1
    }
    if (-not (Test-Path (Join-Path $RepoDir '.venv\Scripts\python.exe'))) {
        Write-Fail "目标目录缺少虚拟环境 .venv\Scripts\python.exe: $RepoDir"
        exit 1
    }
}

# ==================== 1. 拉取最新代码 ====================
Write-Step "步骤 1/5: 同步最新代码 (git fetch + reset --hard origin/master / robocopy)"

$isGitRepo = $DryRun -or (Test-Path (Join-Path $RepoDir '.git'))

if ($isGitRepo) {
    $fetchCmd = "git -C `"$RepoDir`" fetch origin"
    $resetCmd = "git -C `"$RepoDir`" reset --hard origin/master"
    Write-Host "    [命令] $fetchCmd"
    Write-Host "    [命令] $resetCmd"
    Write-Host "    [说明] data/ .env/ .venv 已在 .gitignore, reset --hard 不会覆盖它们 (保留配置与数据)"
    if ($DryRun) {
        Write-Planned $fetchCmd
        Write-Planned $resetCmd
    } else {
        Push-Location $RepoDir
        try {
            git fetch origin
            if ($LASTEXITCODE -ne 0) { throw "git fetch 失败 (退出码 $LASTEXITCODE)" }
            Write-Ok "git fetch 完成"
            git reset --hard origin/master
            if ($LASTEXITCODE -ne 0) { throw "git reset --hard 失败 (退出码 $LASTEXITCODE)" }
            Write-Ok "git reset --hard origin/master 完成"
        }
        finally {
            Pop-Location
        }
    }
}
elseif ($SourceDir) {
    # robocopy 同步方案: 排除 .venv/__pycache__/.git/data, 排除 .env
    $excludeDirs = '/XD', '.venv', '__pycache__', '.git', 'data'
    $excludeFiles = '/XF', '.env'
    if ($DryRun) {
        Write-Planned "robocopy `"$SourceDir`" `"$RepoDir`" /MIR $excludeDirs $excludeFiles"
    }
    else {
        robocopy $SourceDir $RepoDir /MIR $excludeDirs $excludeFiles /NFL /NDL /NJH
        # robocopy 退出码 0-7 均为成功 (>=8 为失败)
        if ($LASTEXITCODE -ge 8) { Write-Fail "robocopy 同步失败 (退出码 $LASTEXITCODE)"; exit 1 }
        Write-Ok "robocopy 同步完成"
    }
}
else {
    Write-Fail "目标目录不是 git 仓库且未提供 -SourceDir, 无法同步"
    exit 1
}

# ==================== 2. 保留 data/.env/.venv 校验 ====================
Write-Step "步骤 2/5: 校验本地配置/数据保留 (data / .env / .venv)"
$checks = @(
    @{ Name = 'data'; Path = Join-Path $RepoDir 'data' },
    @{ Name = '.env'; Path = Join-Path $RepoDir '.env' },
    @{ Name = '.venv'; Path = Join-Path $RepoDir '.venv' }
)
foreach ($c in $checks) {
    if ($DryRun) {
        Write-Planned "检查保留项存在: $($c.Path)"
    }
    elseif (Test-Path $c.Path) {
        Write-Ok "保留项存在: $($c.Name)"
    }
    else {
        Write-Host "    [提示] $($c.Name) 不存在 (首次部署或已清理, 属正常)" -ForegroundColor Yellow
    }
}

# ==================== 3. 依赖一致性 (v6.4 / FR-6.4.7) ====================
# 背景: 旧脚本只做 health 检查, 依赖按 requirements.in 装或根本不装,
# 导致 requirements.lock 已声明的 websockets/wsproto 缺失, WS 端点静默 404。
Write-Step "步骤 3/5: 安装并校验 requirements.lock 依赖"

$venvPython = Join-Path $RepoDir '.venv\Scripts\python.exe'
$lockFile = Join-Path $RepoDir 'requirements.lock'

if (-not (Test-Path $lockFile)) {
    Write-Fail "未找到 requirements.lock: $lockFile"
    exit 1
}
if (-not (Test-Path $venvPython)) {
    Write-Fail "未找到虚拟环境解释器: $venvPython"
    exit 1
}

$pipArgs = @('-m', 'pip', 'install', '-r', $lockFile, '--disable-pip-version-check')
if ($DryRun) {
    Write-Planned "$venvPython $($pipArgs -join ' ')"
}
else {
    & $venvPython @pipArgs
    if ($LASTEXITCODE -ne 0) {
        Write-Fail "requirements.lock 安装失败 (exit $LASTEXITCODE)"
        exit 1
    }
    Write-Ok "requirements.lock 安装完成"
}

# 关键包版本断言 (期望值一律来自 lock 本身, 不在脚本里重复硬编码)
#
# v6.4 (FR-6.4.7) 修正: 解析不再用 PowerShell 正则重写一遍, 而是直接复用
#   backend/reliability/checks.py::_read_lock_versions —— 单一事实来源。
# 旧正则在带 PEP 508 环境标记的 lock 上会踩三个坑 (与启动自检曾经踩的完全一样):
#   · numpy 同名两行 (python_full_version 分叉) → 后行覆盖前行, 取错版本
#   · akracer / py-mini-racer 带 sys_platform == 'linux' → 在 Windows 上被判「缺失」
#   · 版本串被 ';' 之后整段污染
# 复用同一函数后, 升级脚本与启动自检对「什么算漂移」的判定必然一致。
$criticalNames = @('websockets', 'wsproto', 'uvicorn', 'fastapi', 'pydantic')
$expected = @{}
$lockProbe = "import json,sys; sys.path.insert(0, r'$RepoDir'); " +
             "from backend.reliability.checks import _read_lock_versions as _r; " +
             "print(json.dumps(_r(r'$lockFile') or {}))"
$lockJson = & $venvPython -c $lockProbe 2>$null
if ($LASTEXITCODE -eq 0 -and $lockJson) {
    foreach ($p in ($lockJson | ConvertFrom-Json).PSObject.Properties) {
        $expected[$p.Name] = [string]$p.Value
    }
}
if ($expected.Count -eq 0) {
    Write-Fail "无法解析 requirements.lock (请确认 $RepoDir 内 backend/reliability/checks.py 完整)"
    exit 1
}
Write-Ok "requirements.lock 解析完成: $($expected.Count) 个生效包 (已按环境标记过滤)"
$drift = @()
foreach ($name in $criticalNames) {
    if (-not $expected.ContainsKey($name)) { continue }
    $want = $expected[$name]
    if ($DryRun) {
        Write-Planned "校验 $name == $want"
        continue
    }
    try {
        $got = (& $venvPython -c "import importlib.metadata as m; print(m.version('$name'))" 2>$null | Select-Object -First 1)
    }
    catch {
        $got = ''
    }
    if ("$got".Trim() -ne $want) {
        $drift += "$name=$($got.ToString().Trim())(期望 $want)"
    }
    else {
        Write-Ok "依赖一致: $name $want"
    }
}
if ($drift.Count -gt 0) {
    Write-Fail ("关键依赖版本不一致: " + ($drift -join ', '))
    Write-Host "    修复: $venvPython -m pip install -r $lockFile" -ForegroundColor Yellow
    exit 1
}

# ==================== 3. 重启服务 ====================
Write-Step "步骤 4/5: 重启服务 (结束端口 $Port 监听进程 + 启动)"

$venvPython = Join-Path $RepoDir '.venv\Scripts\python.exe'
$logDir = Join-Path $RepoDir 'logs'
$logFile = Join-Path $logDir 'upgrade_start.log'

# 查找监听目标端口的进程
$listeners = @()
try {
    $listeners = Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction SilentlyContinue |
        Select-Object -ExpandProperty OwningProcess -Unique
}
catch {
    Write-Host "    [提示] 无法查询端口监听 (可能无权限), 将跳过停止旧进程" -ForegroundColor Yellow
    $listeners = @()
}

if ($DryRun) {
    Write-Planned "结束监听端口 $Port 的进程: $($listeners -join ', ')"
    Write-Planned "启动服务: $venvPython backend\main_new.py (工作目录 $RepoDir, 日志 $logFile)"
}
else {
    # 停止旧进程
    if ($listeners.Count -gt 0) {
        foreach ($procId in $listeners) {
            $proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
            if ($proc) {
                Write-Host "    结束进程 PID=$procId ($($proc.ProcessName))" -ForegroundColor Yellow
                Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
            }
        }
        Start-Sleep -Seconds 2
    }
    else {
        Write-Host "    端口 $Port 无监听进程, 跳过停止" -ForegroundColor Yellow
    }

    # 启动新服务
    New-Item -ItemType Directory -Force -Path $logDir | Out-Null
    try {
        Start-Process -FilePath $venvPython -ArgumentList 'backend\main_new.py' `
            -WorkingDirectory $RepoDir -WindowStyle Hidden `
            -RedirectStandardOutput $logFile -RedirectStandardError $logFile
        Write-Ok "服务已启动, 日志: $logFile"
    }
    catch {
        Write-Fail "服务启动失败: $_"
        exit 1
    }
}

# ==================== 4. 健康检查 ====================
Write-Step "步骤 5/5: 健康检查 /api/health"
$healthUrl = "http://127.0.0.1:$Port/api/health"

if ($DryRun) {
    Write-Planned "轮询健康检查: $healthUrl (总超时 ${HealthTimeoutSec} 秒)"
    Write-Host ""
    Write-Host "[DryRun] 演练完成 — 未执行任何破坏性操作 (未 git reset / 未重启服务)" -ForegroundColor Yellow
    exit 0
}

$deadline = (Get-Date).AddSeconds($HealthTimeoutSec)
$healthOk = $false
$version = ''
while ((Get-Date) -lt $deadline) {
    try {
        $resp = Invoke-RestMethod -Uri $healthUrl -TimeoutSec 5 -ErrorAction Stop
        if ($resp.status -eq 'ok') {
            $healthOk = $true
            $version = $resp.version
            break
        }
    }
    catch {
        # 服务尚未就绪, 继续等待
    }
    Start-Sleep -Seconds 3
}

Write-Host ""
if ($healthOk) {
    Write-Host "[成功] 健康检查通过: $healthUrl (version=$version)" -ForegroundColor Green
    Write-Host "[完成] 一键升级完成, 浏览器访问 http://127.0.0.1:$Port 并 Ctrl+Shift+R 强制刷新" -ForegroundColor Green
    exit 0
}
else {
    Write-Host "[失败] 健康检查超时 ($HealthTimeoutSec 秒), 服务未就绪" -ForegroundColor Red
    Write-Host "       请查看服务日志: $logFile" -ForegroundColor Red
    exit 1
}
