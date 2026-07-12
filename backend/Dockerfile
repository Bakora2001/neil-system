FROM node:20-alpine AS base
WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .
RUN npx prisma generate
RUN npm run build

EXPOSE 4000
CMD ["node", "dist/server.js"]
