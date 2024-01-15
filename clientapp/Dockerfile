# Dockerfile-node
FROM node:latest

WORKDIR /clientapp

COPY package*.json ./
COPY node_modules ./node_modules

RUN npm install -g npm@latest
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
