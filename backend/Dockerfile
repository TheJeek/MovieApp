FROM ubuntu:latest
LABEL authors="Jeek"

# Use an OpenJDK image
FROM openjdk:24-jdk-slim

# Set working directory inside the container
WORKDIR /app

# Copy the built JAR from the Maven target folder
COPY target/backend-0.1.jar /app/backend.jar

# Expose the port the backend runs on
EXPOSE 8080

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "/app/backend.jar"]
