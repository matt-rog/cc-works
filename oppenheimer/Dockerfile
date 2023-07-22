FROM node:15.4

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN browser-sync start --server -f -w
ENV NODE_ENV=production
EXPOSE 3000
