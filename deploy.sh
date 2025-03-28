#!/bin/bash

echo "Stopping backend and frontend services (keeping database running)..."
docker-compose down

echo "Cleaning and rebuilding backend..."
cd backend
mvn clean package -DskipTests
cd ..

echo "Cleaning and rebuilding frontend..."
cd frontend
npm install
npm run build
cd ..

echo "Ensuring database is running..."
docker-compose up -d postgresdb

echo "Waiting for database to be ready..."
sleep 5

echo "Restarting backend and frontend services..."
docker-compose up --build -d backend frontend

echo "Deployment complete!"