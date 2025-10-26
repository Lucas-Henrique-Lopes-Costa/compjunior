# 🎯 NaSalinha - Sistema de Check-in Gamificado

<div align="center">

![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)
![License](https://img.shields.io/badge/license-MIT-blue)
![Node](https://img.shields.io/badge/node-20.x-green)
![TypeScript](https://img.shields.io/badge/typescript-5.x-blue)

**Sistema de gamificação para incentivar a presença dos membros da Comp Júnior na sala**

</div>

---

## Sobre

O **NaSalinha** é um sistema de check-in gamificado desenvolvido para a **Comp Júnior** que incentiva a presença dos membros através de um sistema de pontos e rankings sazonais.

### Funcionalidades

- **Check-in por Foto** - Membros fazem check-in enviando uma foto como prova
- **Sistema de Pontos** - Cada check-in válido gera pontos
- **Rankings Sazonais** - Competição amigável entre membros
- **Gestão de Usuários** - Sistema de roles (Admin, Membro, Trainee)
- **Temporadas** - Períodos definidos de competição
- **Autenticação JWT** - Sistema seguro de login

### Diferencial

Sistema **simplificado** que utiliza apenas **prova fotográfica** para validar check-ins, sem necessidade de geolocalização GPS, oferecendo:

- Maior privacidade aos membros
- Flexibilidade de localização
- Experiência mais simples e direta

---

## Tecnologias

### Backend

- **[NestJS](https://nestjs.com/)** - Framework Node.js progressivo
- **[Prisma](https://www.prisma.io/)** - ORM TypeScript-first
- **[PostgreSQL](https://www.postgresql.org/)** - Banco de dados (Supabase)
- **[Passport JWT](https://www.passportjs.org/)** - Autenticação
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript

### Frontend

- **[Next.js 15](https://nextjs.org/)** - Framework React
- **[React 19](https://react.dev/)** - Biblioteca UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS
- **[Zod](https://zod.dev/)** - Validação de schemas
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety

### DevOps

- **[Docker](https://www.docker.com/)** - Containerização
- **[Docker Compose](https://docs.docker.com/compose/)** - Orquestração
- **[Supabase](https://supabase.com/)** - Backend as a Service

---

## 🏁 Começando

### Pré-requisitos

- **Node.js** 20.x ou superior
- **npm** ou **yarn**
- **Docker** e **Docker Compose** (opcional)
- Conta no **Supabase** (para banco de dados)

#### Backend

```bash
cd backend
npm install
cp .env.example .env
# Configure o .env com credenciais Supabase
npx prisma generate
npx prisma db push
npm run start:dev
```

#### Frontend

```bash
cd frontend
npm install
cp .env.local.example .env.local
# Configure NEXT_PUBLIC_API_URL
npm run dev
```

---

## 📁 Estrutura do Projeto

```
compjunior/
├── backend/              # API NestJS
│   ├── src/
│   │   ├── auth/        # Autenticação JWT
│   │   ├── users/       # Gestão de usuários
│   │   ├── seasons/     # Temporadas
│   │   ├── checkins/    # Sistema de check-ins
│   │   └── prisma/      # Cliente Prisma
│   ├── prisma/
│   │   └── schema.prisma
│   ├── Dockerfile
│   └── package.json
│
├── frontend/            # App Next.js
│   ├── src/
│   │   ├── app/        # App Router (Pages)
│   │   ├── components/ # Componentes React
│   │   ├── services/   # API Client
│   │   ├── hooks/      # Custom Hooks
│   │   └── types/      # TypeScript Types
│   ├── Dockerfile
│   └── package.json
│
├── docker-compose.yml   # Orquestração
├── Makefile            # Comandos simplificados
└── README.md           # Este arquivo
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

