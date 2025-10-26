# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY prisma ./prisma/

# Instalar dependências
RUN npm ci

# Gerar Prisma Client
RUN npx prisma generate

# Copiar código fonte
COPY . .

# Build da aplicação
RUN npm run build

# Etapa 2: Runtime
FROM node:20-alpine AS runner

WORKDIR /app

# Configurar ambiente de produção
ENV NODE_ENV=production

# Criar usuário não-root
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs

# Copiar arquivos necessários do builder
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/prisma ./prisma
COPY --from=builder /app/package*.json ./

# Gerar Prisma Client novamente para produção
RUN npx prisma generate

# Usar usuário não-root
USER nestjs

# Expor porta
EXPOSE 4000

# Iniciar aplicação
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]
