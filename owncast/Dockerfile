# Perform a build
FROM golang:alpine AS build
RUN mkdir /build
ADD . /build
WORKDIR /build
RUN apk update && apk add --no-cache git gcc build-base linux-headers ffmpeg ffmpeg-libs ca-certificates && update-ca-certificates

ARG VERSION=dev
ENV VERSION=${VERSION}
ARG GIT_COMMIT
ENV GIT_COMMIT=${GIT_COMMIT}
ARG NAME=docker
ENV NAME=${NAME}

ENTRYPOINT ["go", "run", "main.go"]
EXPOSE 8080 1935