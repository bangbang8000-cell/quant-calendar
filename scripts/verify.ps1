# v7.25 FR-10: 本地一键预检（提交前）。失败即阻断。
# 用法: powershell -ExecutionPolicy Bypass -File scripts/verify.ps1 [-SkipBuild]
param([switch]$SkipBuild)
$ErrorActionPreference = 'Stop'
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$py = if (Test-Path '.venv\Scripts\python.exe') { '.venv\Scripts\python.exe' } else { 'python' }

Write-Host '[verify] 1/4 ruff'
& $py -m ruff check backend/ --select=E,F,W --ignore=E501
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host '[verify] 2/4 pytest (not e2e)'
& $py -m pytest tests -q -m "not e2e"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host '[verify] 3/4 version consistency'
& $py scripts/bump_version.py --check
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host '[verify] 3.5/4 research style gate'
& $py scripts/ci/check_research_style.py
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

if (-not $SkipBuild) {
  Write-Host '[verify] 4/4 frontend build'
  Push-Location frontend
  try {
    & $py scripts/build_css.py
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
    node node_modules/vite/bin/vite.js build
    if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }
  } finally { Pop-Location }
} else {
  Write-Host '[verify] 4/4 frontend build skipped'
}

Write-Host '[verify] OK'
