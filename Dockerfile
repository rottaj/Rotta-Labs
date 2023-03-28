FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

WORKDIR /app

RUN npm run build

EXPOSE 80

CMD ["npm", "run", "dev"]

