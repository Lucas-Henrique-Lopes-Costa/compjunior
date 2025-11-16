FROM node:18-alpine

# Install OpenSSL and build dependencies for native modules
RUN apk add --no-cache openssl python3 make g++

# Create app directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm ci --only=production && npm rebuild bcrypt --build-from-source

# Copy Prisma schema and generate client
COPY prisma ./prisma
RUN npx prisma generate

# Copy app source
COPY . .

# Expose port
EXPOSE 5000

# Run migrations and start server
CMD ["sh", "-c", "npx prisma migrate deploy && npm start"]
