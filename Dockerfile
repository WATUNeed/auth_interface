FROM node:20

WORKDIR /frontend

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY ./build ./build

ENV PORT=5173
EXPOSE 5173