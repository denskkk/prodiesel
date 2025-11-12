@echo off
echo ================================
echo   ProDiesel - Локальний сервер
echo ================================
echo.
echo Запускаю сервер на http://localhost:8000
echo Натисніть Ctrl+C щоб зупинити
echo.
python -m http.server 8000
pause
