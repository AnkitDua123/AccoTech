FROM adoptopenjdk:11-jdk-hotspot as builder
ADD . /code/
RUN \
    apt-get update && \
    apt-get install build-essential -y && \
    apt-get install nodejs -y && \
    cd /code/ && \
    rm -Rf build node_modules && \
    chmod +x /code/gradlew && \
    sleep 10 && \
    ./gradlew bootJar -PnodeInstall -Pprod && \
    mv /code/build/libs/*.jar / && \
    apt-get clean && \
    rm -Rf /code/ /root/.m2 /root/.cache /tmp/* /var/lib/apt/lists/* /var/tmp/*  && \
    mkdir /tmp/jhispter && mkdir /tmp/jhispter/applications

FROM adoptopenjdk:11-jre-hotspot
ENV SPRING_OUTPUT_ANSI_ENABLED=ALWAYS \
    JHIPSTER_SLEEP=0 \
    JAVA_OPTS="-XX:+UseContainerSupport"
CMD echo "The application will start in ${JHIPSTER_SLEEP}s..." && \
    sleep ${JHIPSTER_SLEEP} && \
    java ${JAVA_OPTS} -Djava.security.egd=file:/dev/./urandom -jar /acco-tech*.jar
EXPOSE 8080
COPY --from=builder /*.jar .
