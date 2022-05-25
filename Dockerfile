FROM node:16-alpine AS build

WORKDIR /usr

COPY package.json ./
COPY tsconfig.json ./
COPY tsconfig-build.json ./
COPY src ./src
RUN ls -a
RUN npm install
RUN npm run build

FROM node:16-alpine
WORKDIR /usr
COPY package.json ./
RUN npm install --only=production
COPY --from=build /usr/dist ./dist
EXPOSE 80
CMD ["node", "dist/main/server.js"]
