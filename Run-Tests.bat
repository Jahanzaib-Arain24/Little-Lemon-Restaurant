@echo off
TITLE Little Lemon Restaurant - Unit Tests Runner
COLOR 0B

echo =======================================================
echo         LEMON RESTAURANT - JEST UNIT TESTS
echo =======================================================
echo.

cd /d "%~dp0"

echo [INFO] Running all unit tests...
echo.

call npm test -- --watchAll=false

echo.
echo =======================================================
echo Tests execution finished.
echo =======================================================
pause
