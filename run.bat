@echo off
title Electron Runner
echo Ready to go!
:main
cmd /C npm start > nul
echo Restarting node instance
timeout 5
goto main