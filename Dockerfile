FROM node:13.1.0

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn
