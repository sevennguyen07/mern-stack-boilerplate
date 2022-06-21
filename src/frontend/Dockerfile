# get the base node image
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json /app
RUN npm config set legacy-peer-deps true
RUN npm install
COPY . .
CMD [ "npm", "run", "start" ]