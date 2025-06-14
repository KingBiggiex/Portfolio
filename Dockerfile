# Use an official JDK image
FROM eclipse-temurin:21-jdk

# Set working directory
WORKDIR /app

# Copy source
COPY Portfolio-backend /app

# Build the app
RUN ./mvnw clean package

# Run the JAR
CMD ["java", "-jar", "target/Portfolio-backend-0.0.1-SNAPSHOT.jar"]
