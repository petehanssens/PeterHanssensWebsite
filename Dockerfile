FROM node:8
MAINTAINER Peter Hanssens <phanssens1@gmail.com>

RUN apt-get update

WORKDIR /usr/src/app

RUN yarn install