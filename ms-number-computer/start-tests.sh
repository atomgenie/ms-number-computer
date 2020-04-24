#!/bin/sh

docker build -t ms-number-computer --file Dockerfile_test .
docker run --name ms-number-computer ms-number-computer
docker stop ms-number-computer
docker rm ms-number-computer
