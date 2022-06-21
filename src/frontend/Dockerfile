# get the base node image
FROM node:alpine as builder
WORKDIR /app
COPY ./package.json /app
RUN npm install --legacy-peer-deps
COPY . .
CMD [ "npm", "run", "start" ]