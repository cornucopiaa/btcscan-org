ARG APP_IMAGE=btcscan-9
FROM debian:bullseye@sha256:4d6ab716de467aad58e91b1b720f0badd7478847ec7a18f66027d0f8a329a43c AS nginx-build
RUN sed -i 's|security.debian.org|archive.debian.org|g' /etc/apt/sources.list && apt-get update && apt-get install -y --no-install-recommends build-essential ca-certificates curl libpcre3-dev libssl-dev zlib1g-dev libgeoip-dev libgd-dev libxslt1-dev libluajit-5.1-dev && rm -rf /var/lib/apt/lists/*
COPY build.sh /build-nginx.sh
RUN sh /build-nginx.sh
FROM ${APP_IMAGE}
COPY --from=nginx-build /out/usr/ /usr/
# Existing loader files are retained; all eight modules were rebuilt together.
RUN nginx -v
