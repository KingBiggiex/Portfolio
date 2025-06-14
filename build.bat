@echo off

REM Build Angular frontend
cd Portfoli
call npm install
call npm run build -- --configuration production
cd ..

REM Build Spring Boot backend
cd Portfolio-backend
call mvnw.cmd clean package
cd ..