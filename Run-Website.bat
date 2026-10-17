@echo off
TITLE Little Lemon Restaurant - Development Server
COLOR 0A

echo =======================================================
echo     LEMON RESTAURANT - LOCAL DEVELOPMENT SERVER
echo =======================================================
echo.

:: Navigate to script directory
cd /d "%~dp0"

:: Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% neq 0 (
    echo [ERROR] Node.js is not installed or not in PATH!
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

:: Check if node_modules exists, if not install dependencies
if not exist "node_modules\" (
    echo [INFO] First time setup detected. Installing dependencies...
    call npm install
    if %ERRORLEVEL% neq 0 (
        echo [ERROR] Failed to install dependencies.
        pause
        exit /b 1
    )
)

echo [INFO] Starting development server...
echo [INFO] Opening http://localhost:3000 in your browser...
echo.

:: Open browser after a brief delay
start "" http://localhost:3000

:: Start the React development server
call npm start

pause
