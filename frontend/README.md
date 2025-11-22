# NaSalinha - Frontend

## Índice

- [Sobre o Projeto](#sobre-o-projeto)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Configuração](#configuração)
- [Executando o Projeto](#executando-o-projeto)
- [Executando Testes](#executando-testes)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Funcionalidades](#funcionalidades)
- [Scripts Disponíveis](#scripts-disponíveis)
- [Build para Produção](#build-para-produção)

## Sobre o Projeto

O **NaSalinha Frontend** é uma aplicação React moderna que oferece uma interface intuitiva para o sistema de check-in gamificado. Desenvolvido com foco em experiência do usuário, design responsivo e performance.

### Características Principais

- Interface moderna com Tailwind CSS
- Design totalmente responsivo
- Autenticação com JWT e Context API
- Rotas protegidas por role (Admin, Member, Trainee)
- Upload de imagens para check-in
- Sistema de ranking em tempo real
- Feedback visual com React Toastify

## Tecnologias Utilizadas

### Core

- **React 18** - Biblioteca JavaScript para interfaces
- **React Router DOM v6** - Navegação e roteamento

### Estilização

- **Tailwind CSS** - Framework CSS utility-first
- **PostCSS** - Processamento de CSS
- **Autoprefixer** - Prefixos CSS automáticos

### Requisições HTTP

- **Axios** - Cliente HTTP baseado em Promises
- Interceptors para tratamento de erros e tokens

### Feedback e UX

- **React Toastify** - Notificações toast elegantes

### Testes

- **Jest** - Framework de testes

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (v18 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)
- Backend da API rodando (veja [backend/README.md](../backend/README.md))

## Instalação

1. **Clone o repositório**:

```bash
git clone https://github.com/Lucas-Henrique-Lopes-Costa/compjunior
cd compjunior/frontend
```

2. **Instale as dependências**:

```bash
npm install
```

## Configuração

### Variáveis de Ambiente

Crie um arquivo `.env` na raiz do frontend:

```env
REACT_APP_API_URL=http://localhost:5001/api
```

## Executando o Projeto

### Modo Desenvolvimento

```bash
npm start
```

A aplicação será aberta automaticamente em `http://localhost:3000`

### Docker

**Usando Docker Compose**:

```bash
# Na raiz do projeto (onde está o docker-compose.yml)
docker-compose up -d frontend
```

É preciso configurar o backend para rodar junto (veja [backend/README.md](../backend/README.md)).

Acesse em `http://localhost:3000`

## Testes

### Cobertura de Testes

- Componentes comuns (Button, Input, Card)
- Rotas protegidas (PrivateRoute, AdminRoute)
- Context API (AuthContext)
- Serviços (authService, api)
- Páginas (Login)

### Executar Testes

```bash
# Modo watch (recomendado para desenvolvimento)
npm test

# Executar todos os testes uma vez
npm test -- --watchAll=false

# Com cobertura de código
npm run test:coverage

# Testes específicos
npm test -- Button.test.js
```

### Visualizar Cobertura

Após executar `npm run test:coverage`, abra:

```
coverage/lcov-report/index.html
```

## Build para Produção

### Build Local

```bash
npm run build
```

## Licença

Este projeto está sob a licença MIT.
