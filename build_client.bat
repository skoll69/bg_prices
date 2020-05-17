rd static /s /q
mkdir static
cd client
call npm run build
xcopy dist\* ..\static /E/I/Y/q