$ErrorActionPreference = "Stop"
$ProjectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$VenvPython = Join-Path $ProjectRoot ".venv\Scripts\python.exe"
$DepsMarker = Join-Path $ProjectRoot ".deps_installed"
$Requirements = Join-Path $ProjectRoot "requirements.txt"
$EnvFile = Join-Path $ProjectRoot ".env"

Set-Location $ProjectRoot

if (-not (Test-Path $EnvFile)) {
    throw "Missing .env in $ProjectRoot"
}

if (-not (Test-Path $VenvPython)) {
    python -m venv .venv
}

$NeedInstall = -not (Test-Path $DepsMarker)
if (-not $NeedInstall) {
    $NeedInstall = (Get-Item $Requirements).LastWriteTime -gt (Get-Item $DepsMarker).LastWriteTime
}

if ($NeedInstall) {
    & $VenvPython -m pip install --upgrade pip
    & $VenvPython -m pip install -r $Requirements
    Set-Content -Path $DepsMarker -Value (Get-Date).ToString("s") -Encoding UTF8
}

& $VenvPython ".\backend\main_new.py"
