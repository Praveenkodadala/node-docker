FROM node:14.17.1-alpine

COPY server.mjs .

COPY package.json .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start"]

