# Backend - NaSalinha API

API RESTful para o sistema de check-in gamificado NaSalinha.

## Tecnologias

- **Node.js 18+** - Runtime JavaScript
- **Express** - Framework web minimalista e flexível
- **PostgreSQL** - Banco de dados relacional
- **Prisma ORM** - ORM moderno com type-safety e migrations
- **JWT** - Autenticação stateless com tokens
- **Bcrypt** - Hash seguro de senhas
- **Cloudinary** - Armazenamento de imagens na nuvem
- **Nodemailer** - Envio de e-mails transacionais
- **Jest & Supertest** - Framework de testes automatizados
- **Docker** - Containerização

## Estrutura de Pastas

```
backend/
├── src/
│   ├── config/          # Configurações (database, cloudinary, email)
│   ├── controllers/     # Controllers da aplicação
│   ├── middlewares/     # Middlewares (auth, validation, error handling)
│   ├── models/          # Modelos Prisma
│   ├── routes/          # Definição de rotas
│   ├── services/        # Lógica de negócio
│   ├── utils/           # Funções utilitárias
│   ├── validators/      # Schemas de validação Joi
│   ├── app.js           # Configuração do Express
│   └── server.js        # Ponto de entrada da aplicação
├── tests/               # Testes automatizados
├── prisma/              # Schema e migrations do Prisma
├── uploads/             # Arquivos temporários de upload
├── .env.example         # Exemplo de variáveis de ambiente
├── Dockerfile           # Configuração Docker
└── package.json
```

## Modelo de Dados

### Entidades

1. **User** - Usuários do sistema
   - id, name, email, password, role (ADMIN, MEMBER, TRAINEE)
   - createdAt, updatedAt

2. **CheckIn** - Registros de check-in
   - id, userId, photoUrl, points, status (PENDING, APPROVED, REJECTED)
   - seasonId, createdAt

3. **Season** - Temporadas de competição
   - id, name, startDate, endDate, isActive
   - pointsPerCheckIn, createdAt, updatedAt

4. **Point** - Pontuação dos usuários
   - id, userId, seasonId, totalPoints
   - createdAt, updatedAt

### Relacionamentos

- User 1:N CheckIn
- User 1:N Point
- Season 1:N CheckIn
- Season 1:N Point

## 🔐 Autenticação

A API utiliza **JWT (JSON Web Tokens)** para autenticação:

- **Access Token**: Válido por 1 hora
- **Refresh Token**: Válido por 7 dias

### Headers necessários

```
Authorization: Bearer {access_token}
```

### Níveis de acesso (Roles)

- **ADMIN**: Acesso total, gerenciamento de temporadas
- **MEMBER**: Check-ins, visualização de ranking
- **TRAINEE**: Check-ins básicos, visualização limitada

## Endpoints da API

### Auth

- `POST /api/auth/register` - Registrar novo usuário
- `POST /api/auth/login` - Login
- `POST /api/auth/refresh` - Renovar access token
- `POST /api/auth/forgot-password` - Solicitar recuperação de senha
- `POST /api/auth/reset-password` - Resetar senha

### Users (Requer autenticação)

- `GET /api/users` - Listar usuários (Admin)
- `GET /api/users/:id` - Buscar usuário específico
- `PUT /api/users/:id` - Atualizar usuário
- `DELETE /api/users/:id` - Deletar usuário (Admin)
- `GET /api/users/me` - Dados do usuário logado

### Check-ins (Requer autenticação)

- `POST /api/checkins` - Criar check-in (com upload de foto)
- `GET /api/checkins` - Listar check-ins
- `GET /api/checkins/:id` - Buscar check-in específico
- `PUT /api/checkins/:id` - Atualizar check-in (Admin)
- `DELETE /api/checkins/:id` - Deletar check-in (Admin)
- `GET /api/checkins/my-checkins` - Check-ins do usuário logado

### Seasons (Requer autenticação)

- `POST /api/seasons` - Criar temporada (Admin)
- `GET /api/seasons` - Listar temporadas
- `GET /api/seasons/:id` - Buscar temporada específica
- `PUT /api/seasons/:id` - Atualizar temporada (Admin)
- `DELETE /api/seasons/:id` - Deletar temporada (Admin)
- `GET /api/seasons/active` - Temporada ativa

### Rankings (Requer autenticação)

- `GET /api/rankings` - Ranking geral
- `GET /api/rankings/season/:seasonId` - Ranking de temporada específica

## 🔧 Variáveis de Ambiente

Crie um arquivo `.env` baseado no `.env.example`:

```env
# Server
NODE_ENV=development
PORT=5000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/nasalinha_db

# JWT
JWT_SECRET=sua-chave-secreta-super-segura
JWT_REFRESH_SECRET=sua-chave-refresh-super-segura
JWT_EXPIRES_IN=1h
JWT_REFRESH_EXPIRES_IN=7d

# Cloudinary
CLOUDINARY_CLOUD_NAME=seu-cloud-name
CLOUDINARY_API_KEY=sua-api-key
CLOUDINARY_API_SECRET=seu-api-secret

# Email (SMTP)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=seu-email@gmail.com
EMAIL_PASSWORD=sua-senha-app

# Frontend URL
FRONTEND_URL=http://localhost:3000
```

## Como Executar

### Com Docker (Recomendado)

```bash
# Na raiz do projeto
docker-compose up backend
```

### Desenvolvimento Local

1. **Instalar dependências**

```bash
npm install
```

2. **Configurar banco de dados**

```bash
npm run prisma:migrate
npm run prisma:generate
```

3. **Seed inicial (opcional)**

```bash
npm run prisma:seed
```

4. **Executar em modo desenvolvimento**

```bash
npm run dev
```

O servidor estará rodando em `http://localhost:5000`

## Testes

```bash
# Executar todos os testes
npm test

# Modo watch
npm run test:watch

# Coverage report
npm run test:coverage
```

### Cobertura de Testes

- Controllers
- Services
- Middlewares
- Validators
- Rotas

## Exemplos de Requisições

### Registrar usuário

```bash
POST /api/auth/register
Content-Type: application/json

{
  "name": "João Silva",
  "email": "joao@example.com",
  "password": "senha123",
  "role": "MEMBER"
}
```

### Fazer check-in

```bash
POST /api/checkins
Authorization: Bearer {token}
Content-Type: multipart/form-data

photo: [arquivo de imagem]
seasonId: 1
```

### Buscar ranking

```bash
GET /api/rankings/season/1
Authorization: Bearer {token}
```

## Segurança

- Senhas hasheadas com bcrypt (10 rounds)
- JWT com expiração
- Rate limiting para prevenir abuso
- Helmet para headers de segurança
- CORS configurado
- Validação de entrada com Joi
- SQL Injection prevenido pelo Prisma
- XSS protection

## Funcionalidades Implementadas

### Requisitos Obrigatórios

- Banco de dados relacional (PostgreSQL)
- 3+ entidades relacionadas
- CRUD completo para todas entidades
- Containerização com Docker
- 2 níveis de usuário (Admin, Membro, Trainee)
- Autenticação JWT
- Endpoints protegidos
- Testável via Insomnia/Postman
- Documentação completa

### "Ir Além"

- Testes automatizados (Jest + Supertest)
- Integração com API externa (Cloudinary)
- Sistema de envio de e-mails (Nodemailer)
- Versionamento correto no Git
- Commits descritivos

## Escolhas Técnicas

### Por que Express?

- Framework minimalista e flexível
- Grande comunidade e ecossistema
- Performance excelente
- Fácil de testar

### Por que Prisma ORM?

- Type-safety com JavaScript
- Migrations automáticas
- Query builder intuitivo
- Proteção contra SQL Injection

### Por que PostgreSQL?

- Banco relacional robusto
- ACID compliant
- Excelente para relacionamentos complexos
- Open source

### Por que Cloudinary?

- CDN global para imagens
- Otimização automática
- Transformações on-the-fly
- Free tier generoso

## Melhorias Futuras

- Websockets para notificações em tempo real
- Cache com Redis
- Paginação avançada
- Filtros e busca avançada
- Logs estruturados com Winston
- Monitoramento com Prometheus
- CI/CD com GitHub Actions
- Deploy em cloud (AWS/Azure/GCP)

## Suporte

Para dúvidas ou problemas, abra uma issue no GitHub.

---

Desenvolvido para a Comp Júnior
