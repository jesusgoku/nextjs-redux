FROM node:erbium-alpine as base

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

FROM base

COPY . .
RUN yarn build

EXPOSE 3000
CMD ["yarn", "start"]
