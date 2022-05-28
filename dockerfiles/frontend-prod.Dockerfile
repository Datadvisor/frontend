FROM node:17-alpine AS builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --production

COPY . /app

RUN yarn build

FROM node:17-alpine

WORKDIR /app

COPY --from=builder /app/dist /app/dist/
COPY --from=builder /app/node_modules/ /app/node_modules/
COPY --from=builder /app/public /app/public/
COPY --from=builder /app/next.config.js /app/
COPY --from=builder /app/package.json /app/

EXPOSE 80

ENTRYPOINT ["yarn"]

CMD ["start"]
