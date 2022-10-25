FROM node:16

WORKDIR /opt/code
COPY package*.json ./
RUN npm ci

RUN chown -R node /opt/code/node_modules
USER node
