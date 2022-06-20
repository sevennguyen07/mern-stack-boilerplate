FROM node:12 as builder
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --production
COPY . /usr/src/app
EXPOSE 3001 

FROM node:12-alpine
WORKDIR /usr/src/app
COPY --from=0 /usr/src/app .

CMD ["npm","start"]