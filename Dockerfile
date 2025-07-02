FROM node:18

WORKDIR /app

COPY . .

WORKDIR /app/backend

RUN npm install

CMD ["node", "server.js"]
