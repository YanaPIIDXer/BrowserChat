FROM node:latest

WORKDIR /app

ADD ./src/package.json /app
ADD ./src/package-lock.json /app

RUN npm install

ADD ./src /app

EXPOSE 3000

CMD ["node", "index.js"]
