FROM node:14

WORKDIR /usr/src/api

COPY package.json ./
COPY yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

ENV NODE_ENV production

CMD ["yarn", "start"]
