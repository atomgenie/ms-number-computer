FROM node:10-alpine

WORKDIR /usr/src/app/
COPY package.json .
RUN yarn install
COPY . .

EXPOSE 9000

ENTRYPOINT [ "yarn", "run", "development" ]
