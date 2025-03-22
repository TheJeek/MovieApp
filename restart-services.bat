@echo off
echo Stopping backend and frontend services...
docker-compose stop backend frontend

echo Cleaning and rebuilding backend...
cd backend
call mvn clean package -DskipTests
cd ..

echo Cleaning and rebuilding frontend...
cd frontend
call npm install
call npm run build
cd ..

echo Restarting backend and frontend services...
docker-compose up --build -d backend frontend

echo Deployment complete!