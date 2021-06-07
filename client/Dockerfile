# Common build stage
FROM node:14

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

ENV NODE_ENV production

CMD ["yarn", "start"]
