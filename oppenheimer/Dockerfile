FROM node:15.4

WORKDIR /app

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run start
ENV NODE_ENV=production
EXPOSE 8080
