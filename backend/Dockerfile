FROM node:14

WORKDIR /app

COPY ./backend/package.json /app

RUN npm install

COPY ./backend .

EXPOSE 4000

CMD ["npm", "start"]