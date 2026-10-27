# ============================================================================
# 量化选股日历 服务常驻与自愈 (6.4.1 / FR-643a)
# ----------------------------------------------------------------------------
# 解决三个历史问题：
#   1. 服务不常驻：机器重启/进程被杀后无人拉起（2026-10-26 检查 8000/8001 均未监听）
#   2. 崩溃不自愈：进程异常退出后需人工发现并手工启动
#   3. 双起端口冲突：重复启动导致 8000 被占，第二个进程启动即失败
#
# 用法（管理员 PowerShell）：
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\quant_service.ps1 -Action install  [-Port 8000] [-RepoDir <dir>]
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\quant_service.ps1 -Action uninstall
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\quant_service.ps1 -Action start|stop|restart|status
#   powershell -NoProfile -ExecutionPolicy Bypass -File scripts\quant_service.ps1 -Action watchdog   # 由计划任务调用
#
# 设计要点：
#   · 定时任务开机触发（ONSTART）+ 登录触发兜底（ONLOGON），等价「开机自启」
#   · watchdog 循环：进程退出后 5s 内重启，远小于 FR 要求的 60s
#   · 单实例锁：data\service.lock 独占打开；锁被占用即退出，避免双起
#   · 日志：logs\service.log（滚动追加），便于事后排障
# ============================================================================

param(
    [ValidateSet('install', 'uninstall', 'start', 'stop', 'restart', 'status', 'watchdog')]
    [string]$Action = 'status',

    # 服务监听端口（生产 8000 / 开发 8001）
    [int]$Port = 8000,

    # 仓库根目录（默认本脚本上级目录）
    [string]$RepoDir = "",

    # 崩溃后重启等待（秒），FR 要求 ≤60s
    [int]$RestartDelaySec = 5
)

$ErrorActionPreference = 'Stop'

if (-not $RepoDir) {
    $RepoDir = Split-Path -Parent (Split-Path -Parent $PSCommandPath)
}
$RepoDir = $RepoDir.TrimEnd('\', '/')

$VenvPython = Join-Path $RepoDir '.venv\Scripts\python.exe'
$LogDir = Join-Path $RepoDir 'logs'
$LogFile = Join-Path $LogDir 'service.log'
$LockFile = Join-Path $RepoDir 'data\service.lock'
$TaskName = "QuantCalendarService_$Port"

# 单实例锁的文件句柄（获锁后全程持有，进程退出由 OS 释放）
$script:__lockHandle = $null

function Write-SvcLog {
    param([string]$Message, [string]$Level = 'INFO')
    $line = "[{0}] [{1}] {2}" -f (Get-Date -Format 'yyyy-MM-dd HH:mm:ss'), $Level, $Message
    Write-Host $line
    try {
        if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Force -Path $LogDir | Out-Null }
        if ((Test-Path $LogFile) -and ((Get-Item $LogFile).Length -gt 5MB)) {
            Move-Item -Force $LogFile "$LogFile.1"
        }
        Add-Content -Path $LogFile -Value $line -Encoding UTF8
    }
    catch {
        # 日志写不进去不影响服务本身
    }
}

function Get-PortOwner {
    param([int]$P)
    try {
        return @(Get-NetTCPConnection -LocalPort $P -State Listen -ErrorAction SilentlyContinue |
            Select-Object -ExpandProperty OwningProcess -Unique)
    }
    catch {
        return @()
    }
}

function Test-Health {
    param([int]$P, [int]$TimeoutSec = 90)
    $url = "http://127.0.0.1:$P/api/health"
    $deadline = (Get-Date).AddSeconds($TimeoutSec)
    while ((Get-Date) -lt $deadline) {
        try {
            $resp = Invoke-RestMethod -Uri $url -TimeoutSec 5 -ErrorAction Stop
            if ($resp.status -eq 'ok') { return $resp }
        }
        catch {
            # 尚未就绪，继续等
        }
        Start-Sleep -Seconds 2
    }
    return $null
}

# ─── 单实例锁 ────────────────────────────────────────────────────────────────
# 返回 $null 表示获锁成功；否则返回锁文件内容（现有实例 PID）
function Get-ServiceLock {
    $lockDir = Split-Path -Parent $LockFile
    if (-not (Test-Path $lockDir)) { New-Item -ItemType Directory -Force -Path $lockDir | Out-Null }
    try {
        $fs = [System.IO.File]::Open($LockFile, 'OpenOrCreate', 'ReadWrite', 'None')
        $script:__lockHandle = $fs
        $bytes = [System.Text.Encoding]::UTF8.GetBytes("$PID")
        $fs.SetLength(0)
        $fs.Write($bytes, 0, $bytes.Length)
        $fs.Flush()
        return $null
    }
    catch {
        try { return (Get-Content $LockFile -ErrorAction SilentlyContinue | Select-Object -First 1) }
        catch { return 'unknown' }
    }
}

function Release-ServiceLock {
    if ($script:__lockHandle) {
        try { $script:__lockHandle.Dispose() } catch { }
        $script:__lockHandle = $null
        try { Remove-Item -Force $LockFile -ErrorAction SilentlyContinue } catch { }
    }
}

function Stop-ServiceProcess {
    $owners = Get-PortOwner -P $Port
    if ($owners.Count -eq 0) {
        Write-SvcLog "端口 $Port 无监听进程"
        return
    }
    foreach ($procId in $owners) {
        $proc = Get-Process -Id $procId -ErrorAction SilentlyContinue
        if ($proc) {
            Write-SvcLog "停止进程 PID=$procId ($($proc.ProcessName))"
            Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
        }
    }
    Start-Sleep -Seconds 2
}

# ─── 启动一次（含前置体检，失败原因由 startup_guard 落 startup_check.json）────
function Start-ServiceProcess {
    if (-not (Test-Path $VenvPython)) {
        Write-SvcLog "缺少虚拟环境: $VenvPython（处置: 先创建 .venv 并 pip install -r requirements.lock）" 'ERROR'
        return $false
    }
    if (Get-PortOwner -P $Port | Where-Object { $_ }) {
        Write-SvcLog "端口 $Port 已被占用，拒绝重复启动（处置: 先 -Action stop 或改 -Port）" 'WARN'
        return $false
    }
    if (-not (Test-Path $LogDir)) { New-Item -ItemType Directory -Force -Path $LogDir | Out-Null }
    $outLog = Join-Path $LogDir "server_$Port.log"
    Start-Process -FilePath $VenvPython -ArgumentList 'backend\main_new.py' `
        -WorkingDirectory $RepoDir -WindowStyle Hidden `
        -RedirectStandardOutput $outLog -RedirectStandardError $outLog | Out-Null
    Write-SvcLog "已启动 backend\main_new.py（端口 $Port，输出 $outLog）"
    return $true
}

function Invoke-Watchdog {
    $existing = Get-ServiceLock
    if ($existing) {
        Write-SvcLog "已有实例运行（锁 PID=$existing），本次退出以免双起" 'WARN'
        return
    }
    Write-SvcLog "watchdog 启动（端口 $Port，崩溃重启延迟 ${RestartDelaySec}s）"
    try {
        while ($true) {
            $owners = Get-PortOwner -P $Port
            if (-not $owners -or $owners.Count -eq 0) {
                Write-SvcLog "检测到端口 $Port 无监听，执行拉起"
                [void](Start-ServiceProcess)
            }
            Start-Sleep -Seconds $RestartDelaySec
        }
    }
    finally {
        Release-ServiceLock
        Write-SvcLog "watchdog 退出"
    }
}

function Install-Service {
    $exists = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
    if ($exists) {
        Write-SvcLog "计划任务 $TaskName 已存在，先删除旧任务"
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
    }
    $action = New-ScheduledTaskAction -Execute 'powershell.exe' `
        -Argument "-NoProfile -ExecutionPolicy Bypass -File `"$PSCommandPath`" -Action watchdog -Port $Port -RepoDir `"$RepoDir`""
    $triggers = @(
        (New-ScheduledTaskTrigger -AtStartup),
        (New-ScheduledTaskTrigger -AtLogOn)
    )
    $settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries `
        -StartWhenAvailable -RestartCount 3 -RestartInterval (New-TimeSpan -Minutes 1) `
        -ExecutionTimeLimit ([TimeSpan]::Zero) -MultipleInstances IgnoreNew
    $principal = New-ScheduledTaskPrincipal -UserId $env:USERNAME -LogonType Interactive -RunLevel Highest
    Register-ScheduledTask -TaskName $TaskName -Action $action -Trigger $triggers `
        -Settings $settings -Principal $principal `
        -Description "量化日历服务常驻（端口 $Port，崩溃自愈 ≤60s）" | Out-Null
    Write-SvcLog "已安装计划任务 $TaskName（开机 + 登录触发，单实例，崩溃自愈）"
    Start-ScheduledTask -TaskName $TaskName
    $health = Test-Health -P $Port -TimeoutSec 90
    if ($health) { Write-SvcLog "服务健康: version=$($health.version)" }
    else { Write-SvcLog "服务在 90s 内未就绪，请查看 logs\server_$Port.log 与 data\startup_check.json" 'ERROR' }
}

function Uninstall-Service {
    $exists = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
    if ($exists) {
        Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
        Write-SvcLog "已删除计划任务 $TaskName"
    }
    Stop-ServiceProcess
    Release-ServiceLock
    Write-SvcLog "服务已卸载并停止"
}

switch ($Action) {
    'install' { Install-Service }
    'uninstall' { Uninstall-Service }
    'start' {
        $existing = Get-ServiceLock
        if ($existing) { Write-SvcLog "实例已在运行（锁 PID=$existing），不重复启动" 'WARN'; break }
        [void](Start-ServiceProcess)
        $health = Test-Health -P $Port -TimeoutSec 90
        if ($health) { Write-SvcLog "启动成功 version=$($health.version)" } else { Write-SvcLog "启动后 90s 未通过健康检查" 'ERROR'; exit 1 }
        Release-ServiceLock
    }
    'stop' { Stop-ServiceProcess; Release-ServiceLock }
    'restart' { Stop-ServiceProcess; [void](Start-ServiceProcess); $null = Test-Health -P $Port -TimeoutSec 90 }
    'status' {
        $owners = Get-PortOwner -P $Port
        $lock = Get-Content $LockFile -ErrorAction SilentlyContinue | Select-Object -First 1
        $health = $null
        try { $health = Invoke-RestMethod -Uri "http://127.0.0.1:$Port/api/health" -TimeoutSec 5 } catch { }
        Write-Host "端口 $Port 监听 PID: $(if ($owners) { $owners -join ',' } else { '（无）' })"
        Write-Host "单实例锁 PID: $(if ($lock) { $lock } else { '（无）' })"
        Write-Host "健康检查: $(if ($health) { 'ok version=' + $health.version + ' uptime=' + $health.uptime_seconds } else { '不可达' })"
        Write-Host "计划任务: $(if (Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue) { $TaskName + ' 已安装' } else { '未安装' })"
    }
    'watchdog' { Invoke-Watchdog }
}
