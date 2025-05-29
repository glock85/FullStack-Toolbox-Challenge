FROM node:16

WORKDIR /app

COPY ./frontend/package.json /app

RUN npm install

COPY ./frontend .

EXPOSE 3000

CMD ["npm", "start"]