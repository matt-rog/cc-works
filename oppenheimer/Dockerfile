FROM node:15.4

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
ENV NODE_ENV=production
EXPOSE 3000

RUN browser-sync start --server -f -w