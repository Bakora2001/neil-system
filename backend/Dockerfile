# ── BUILD STAGE ───────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app

# Copy package files to install all dependencies (including devDependencies for build)
COPY backend/package*.json ./backend/
RUN cd backend && npm install

# Copy source code
COPY shared ./shared
COPY backend ./backend

# Generate Prisma client and compile TypeScript
WORKDIR /app/backend
RUN npx prisma generate
RUN npm run build

# ── PRODUCTION STAGE ──────────────────────────────────────
FROM node:20-alpine AS runner
WORKDIR /app

# Copy package files for production-only dependencies
COPY backend/package*.json ./backend/
RUN cd backend && npm install --omit=dev

# Copy generated Prisma client from builder
COPY --from=builder /app/backend/node_modules/.prisma ./backend/node_modules/.prisma
COPY --from=builder /app/backend/node_modules/@prisma/client ./backend/node_modules/@prisma/client

# Copy compiled build output
COPY --from=builder /app/backend/dist ./backend/dist

# Expose backend port
EXPOSE 4000
WORKDIR /app/backend

# Start the application
CMD ["node", "dist/backend/src/server.js"]
