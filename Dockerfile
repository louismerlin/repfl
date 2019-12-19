FROM node:13.3.0-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
