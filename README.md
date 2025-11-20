# NaSalinha - Sistema de Check-in Gamificado

![Node.js](https://img.shields.io/badge/Node.js-18+-green)
![React](https://img.shields.io/badge/React-18+-blue)
![Docker](https://img.shields.io/badge/Docker-Ready-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## Sobre o Projeto

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

## Tecnologias Utilizadas

### Backend

- **Node.js** com **Express** - Framework web rápido e minimalista
- **PostgreSQL** - Banco de dados relacional robusto
- **Prisma ORM** - ORM moderno com type-safety
- **JWT** - Autenticação segura com tokens
- **Cloudinary** - Armazenamento de imagens na nuvem
- **Nodemailer** - Sistema de envio de e-mails
- **Jest & Supertest** - Testes automatizados
- **Docker** - Containerização da aplicação

### Frontend

- **React 18** - Biblioteca para interfaces modernas
- **React Router** - Navegação entre páginas
- **Axios** - Cliente HTTP para consumir a API
- **TailwindCSS** - Framework CSS utilitário
- **React Icons** - Ícones modernos
- **Docker** - Containerização da aplicação

## Pré-requisitos

- Docker e Docker Compose instalados
- Node.js 18+ (para desenvolvimento local)
- Git

## Como Executar o Projeto

### Usando Docker (Recomendado)

1. **Clone o repositório**

```bash
git clone https://github.com/Lucas-Henrique-Lopes-Costa/compjunior.git
cd compjunior
```

2. **Configure as variáveis de ambiente**

```bash
# Backend
cp backend/.env.example backend/.env
# Edite o arquivo backend/.env com suas credenciais
```

3. **Execute com Docker Compose**

#### Backend

```bash
cd backend
npm install
```

#### Frontend

```bash
cd frontend
npm install
```

```bash
docker-compose up --build
```

4. **Acesse a aplicação**

- Frontend: <http://localhost:3000>
- Backend: <http://localhost:5001>
- API Docs: <http://localhost:5001/api-docs>

## Documentação da API

A documentação completa da API está disponível em `/backend/API_DOCS.md` e também através do Swagger UI em `http://localhost:5001/api-docs` quando o servidor está rodando.

### Principais Endpoints

- **Auth**: `/api/auth/register`, `/api/auth/login`
- **Users**: `/api/users` (CRUD completo)
- **Check-ins**: `/api/checkins` (CRUD completo)
- **Rankings**: `/api/rankings`
- **Seasons**: `/api/seasons` (CRUD completo - Admin only)

## Testes

### Backend

```bash
cd backend
npm test                  # Todos os testes
npm run test:watch        # Modo watch
npm run test:coverage     # Relatório de cobertura
```

## Níveis de Usuário

- **Admin** - Acesso total ao sistema, gerenciamento de temporadas
- **Membro** - Check-ins, visualização de ranking
- **Trainee** - Check-ins e pontuação

## Design e Responsividade

A interface foi desenvolvida seguindo princípios de:

- Mobile First
- Design responsivo para todas as telas
- Acessibilidade (WCAG 2.1)
- UX intuitiva e agradável

## Estrutura do Banco de Dados

### Entidades Principais

1. **Users** - Dados dos usuários (nome, email, senha hash, role)
2. **CheckIns** - Registros de check-in com foto
3. **Seasons** - Temporadas de competição
4. **Points** - Pontuação dos usuários

### Relacionamentos

- User → CheckIns (1:N)
- Season → CheckIns (1:N)
- User → Points → Season (N:N através de Points)

## Segurança

- Senhas criptografadas com bcrypt
- Autenticação JWT com refresh tokens
- Rate limiting para prevenir abuso
- Validação de dados com Joi
- Headers de segurança com Helmet
- CORS configurado adequadamente

## Sistema de E-mails

- Confirmação de cadastro
- Recuperação de senha

## Funcionalidades "Ir Além" Implementadas

- Testes automatizados (Jest, Supertest)
- Integração com API externa (Cloudinary)
- Sistema de envio de e-mails (Nodemailer)
- Versionamento correto de código no Git
- Commits descritivos e bem organizados
- Componentização máxima no frontend
- Linters (ESLint) e Formatters (Prettier)

## Cronograma de Desenvolvimento

### Semanas 1-2: Fundação

- Setup do projeto (backend + frontend)
- Banco de dados PostgreSQL com Prisma
- Docker e Docker Compose
- Estrutura de pastas

### Semana 3: Autenticação

- Sistema de registro e login
- JWT tokens
- Middleware de autenticação
- Recuperação de senha

### Semanas 4-5: CRUD e Features

- CRUD completo de usuários
- CRUD completo de check-ins
- CRUD completo de temporadas
- Sistema de pontos
- Rankings

### Semana 6: Finalização

- Testes automatizados
- Documentação completa
- Refinamentos de UX
- Deploy com Docker

## Licença

Este projeto está sob a licença MIT.

## Autor

Desenvolvido para a Comp Júnior 💙
