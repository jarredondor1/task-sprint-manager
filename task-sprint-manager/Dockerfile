# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy root and subpackage manifests
COPY package*.json ./
COPY client/package*.json ./client/
COPY server/package*.json ./server/

# Install dependencies
RUN npm install || true
RUN cd client && npm install
RUN cd server && npm install

# Copy full source
COPY . .

# Build frontend and backend
RUN cd client && npm run build
RUN cd server && npm run build

# ---------- Production Stage ----------
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

# Copy built app
COPY --from=builder /app .

# Install only production deps for server
RUN npm install --omit=dev --prefix server

EXPOSE 3000

CMD ["npm", "start", "--prefix", "server"]
