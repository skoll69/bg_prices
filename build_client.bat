cd client
call npm run build
copy dist\* ..\static\dist
copy public\* ..\static\public
copy index.html ..\static