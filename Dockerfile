FROM node:14.17.1

WORKDIR ~/Document/tmp
COPY . .

RUN npm i
CMD npm run dev:server
