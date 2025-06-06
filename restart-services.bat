@echo off
echo Stopping backend and frontend services...
docker-compose down

echo Cleaning and rebuilding backend...
cd backend
call mvn clean package -DskipTests
cd ..

echo Cleaning and rebuilding frontend...
cd frontend
call npm install
call npm run build
cd ..

echo Ensuring database is running...
docker-compose up -d postgresdb

echo Waiting for database to be ready...
timeout /t 5 >nul  REM Give it a few seconds to initialize

echo Restarting backend and frontend services...
docker-compose up --build -d backend frontend prometheus grafana jaeger

echo Cleaning up Dangling docker images...5
docker image prune -f

echo Deployment complete!