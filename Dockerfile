FROM node:16-alpine

# avoid bugs from create-react-app running on docker
ENV CI=true
ENV WDS_SOCKET_PORT=0

WORKDIR /app
COPY package.*json ./
RUN npm install --force

COPY ./ ./

CMD ["npm", "start"]