FROM node:12.9.1-alpine

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
