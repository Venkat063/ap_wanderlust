# ---------- Stage 1: build the WAR with Maven ----------
FROM maven:3.9-eclipse-temurin-11 AS build
WORKDIR /build
COPY . .
RUN mvn -B clean package -DskipTests

# ---------- Stage 2: run it on Tomcat ----------
FROM tomcat:9.0-jdk11-temurin
# Remove Tomcat's default sample apps
RUN rm -rf /usr/local/tomcat/webapps/*
# Deploy at the context root (/) so it serves from http://host:8080/
COPY --from=build /build/target/apwanderlust.war /usr/local/tomcat/webapps/ROOT.war
EXPOSE 8080
CMD ["catalina.sh", "run"]
