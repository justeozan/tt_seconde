ARG NODE_VERSION=24.14.0-alpine

FROM node:${NODE_VERSION} AS dev

WORKDIR app/

COPY package*.json ./

RUN npm install

COPY . .
#le dockerihnore a resolu le pronlemme ici

# pour la bonn epratique,
# on donne les droits au user node, et on le passe en ce user
RUN chown -R node:node /app
USER node

#EXPOSE 5173

CMD ["npx", "vite", "dev", "--port", "5175", "--host", "0.0.0.0"]