FROM node:16-alpine

EXPOSE 4000

WORKDIR /src

RUN npm i -g npm@latest

COPY package.json package-lock.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]