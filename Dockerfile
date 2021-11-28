FROM node:lts

ENV PORT 3001

RUN mkdir -p /app

WORKDIR /app

COPY ./frontend/* /app

RUN yarn install

EXPOSE 3001

CMD ["yarn", "dev"]
