@echo off
setlocal

REM Check commit message
if "%~1"=="" (
    echo Commit message required!
    echo Usage: deploy.bat "Your commit message"
    exit /b 1
)

set COMMIT_MSG=%~1

echo Starting deployment...

REM 1. Delete old dist folder
echo Removing old dist folder...
IF EXIST dist rmdir /s /q dist

REM 2. Git add any deletions
echo Adding changes to Git...
git add .

REM 3. Build
echo Building...
call npm run build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)

REM 4. Add build output
echo Adding build files...
git add .

REM 5. Commit
echo Committing changes...
git commit -m "%COMMIT_MSG%"
if errorlevel 1 (
    echo Commit failed - nothing to commit or commit was aborted.
    exit /b 1
)

REM 6. Push to main
echo Pushing to main...
git push origin main
if errorlevel 1 (
    echo Push failed!
    exit /b 1
)

echo Deployment complete!

endlocal
