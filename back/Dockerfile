ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS builder

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN npm install

COPY . .

RUN npm run build

FROM node:${NODE_VERSION}

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist/src ./dist

EXPOSE 8080

CMD [ "npm", "run", "start:prod" ]
