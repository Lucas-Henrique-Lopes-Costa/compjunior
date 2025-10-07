# NaSalinha



> Sistema de check-in gamificado para registrar presença e engajamento na Salinha da Comp



## Sobre o Projeto



**NaSalinha** é um aplicativo interno criado para estimular a participação e fortalecer a cultura de equipe através de um sistema de check-ins gamificado. Membros e trainees acumulam pontos, competem em rankings e podem conquistar prêmios pelo engajamento.

### ✨ Funcionalidades Principais

- ✅ **Autenticação completa** com login, registro e recuperação de senha# or

- 📸 **Check-in com foto** e validação de geolocalizaçãopnpm dev

- 🏆 **Sistema de ranking** semanal e mensal por categoria# or

- 📊 **Histórico pessoal** com streaks e conquistasbun dev

- 👨‍💼 **Painel administrativo** para gestão de temporadas e check-ins```

- 📱 **Design responsivo** para mobile, tablet e desktop

- 🔒 **Sistema de roles** (Admin, Membro, Trainee)


## 🚀 Tecnologias Utilizadas

Este projeto usa [`next`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)



### Core

- **[Next.js 15](https://nextjs.org/)** - Framework React para produção

- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuárioTo learn more about Next.js, take a look at the following resources:

- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript tipado

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.

### Estilização

- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário

- **[Lucide React](https://lucide.dev/)** - Ícones modernos e leves



### Formulários e Validação

- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários performático

- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first

- **[@hookform/resolvers](https://github.com/react-hook-form/resolvers)** - Integração Zod + React Hook Form


### HTTP e Estado

- **[Axios](https://axios-http.com/)** - Cliente HTTP com interceptors
- **Context API** - Gerenciamento de estado global (autenticação)

### Utilitários

- **[date-fns](https://date-fns.org/)** - Manipulação de datas
- **[jwt-decode](https://github.com/auth0/jwt-decode)** - Decodificação de tokens JWT
- **[clsx](https://github.com/lukeed/clsx)** - Composição de classes CSS

### DevOps

- **[Docker](https://www.docker.com/)** - Containerização da aplicação
- **[ESLint](https://eslint.org/)** - Linting e qualidade de código

---

## 📁 Estrutura do Projeto

```
frontend/
├── src/
│   ├── app/                    # App Router do Next.js
│   │   ├── (auth)/            # Rotas de autenticação (layout específico)
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── forgot-password/
│   │   ├── (dashboard)/       # Rotas protegidas (layout com sidebar)
│   │   │   ├── dashboard/
│   │   │   ├── checkins/
│   │   │   ├── ranking/
│   │   │   └── profile/
│   │   ├── admin/             # Área administrativa
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Página inicial
│   │
│   ├── components/            # Componentes React reutilizáveis
│   │   ├── ui/               # Componentes base (Button, Input, Card...)
│   │   ├── forms/            # Formulários específicos
│   │   ├── layout/           # Componentes de layout (Header, Sidebar...)
│   │   └── features/         # Componentes de features (CheckInCard, RankingTable...)
│   │
│   ├── services/             # Camada de serviços/API
│   │   ├── api.ts           # Configuração do Axios
│   │   ├── auth.service.ts  # Serviços de autenticação
│   │   ├── checkin.service.ts
│   │   ├── ranking.service.ts
│   │   └── season.service.ts
│   │
│   ├── hooks/                # Custom React Hooks
│   │   ├── useAuth.tsx      # Hook de autenticação
│   │   ├── useGeolocation.ts
│   │   ├── useCamera.ts
│   │   └── useCheckIn.ts
│   │
│   ├── lib/                  # Bibliotecas e configurações
│   │   ├── validations.ts   # Schemas Zod
│   │   └── utils.ts         # Funções utilitárias
│   │
│   ├── types/                # Definições de tipos TypeScript
│   │   └── index.ts         # Tipos centralizados
│   │
│   ├── styles/               # Estilos globais
│   │   └── globals.css
│   │
│   └── assets/               # Recursos estáticos
│       ├── images/
│       └── icons/
│
├── public/                   # Arquivos públicos estáticos
│
├── .env.local               # Variáveis de ambiente (local)
├── .env.example             # Exemplo de variáveis de ambiente
├── Dockerfile               # Configuração Docker
├── docker-compose.yml       # Orquestração Docker
├── next.config.ts           # Configuração Next.js
├── tailwind.config.ts       # Configuração Tailwind
├── tsconfig.json            # Configuração TypeScript
└── package.json             # Dependências e scripts
```

---

## 🎨 Justificativa das Tecnologias

### Por que Next.js?

- **App Router**: Estrutura moderna com layouts aninhados
- **API Routes**: Permite criar endpoints backend integrados
- **Optimization**: Otimização automática de imagens, novo pacote turbopack, que substitui o webpack e deixa o build muito mais rápido
- **Excelente Experiência de desenvolvimento**: Hot reload rápido, e facilidade de uso.
- Uma boa documentação e comunidade

### Por que TypeScript?

- **Type Safety**: Previne erros em tempo de desenvolvimento
- **IntelliSense**: Autocompletar e documentação inline
- **Refatoração segura**: Mudanças com confiança
- **Integração perfeita** com React e Next.js

### Por que Tailwind CSS?

- **Produtividade**: Desenvolvimento rápido sem sair do HTML
- **Consistência**: Sistema de design padronizado
- **Performance**: CSS otimizado e purged em produção
- **Responsividade**: Utilities mobile-first

### Por que React Hook Form + Zod?

- **Performance**: Não re-renderiza desnecessariamente
- **UX**: Validação em tempo real sem travamentos
- **Type-safe**: Zod infere tipos automaticamente
- **Menos código**: API declarativa e concisa

### Por que Axios?

- **Interceptors**: Adicionar token automaticamente
- **Error handling**: Tratamento centralizado de erros
- **Transformações**: Request/response transformers
- **Timeout**: Controle de tempo de requisição

---

## ⚙️ Configuração e Instalação

### Pré-requisitos

- Node.js 20+
- npm, yarn ou pnpm
- Docker e Docker Compose (opcional)

### 1. Clonar o repositório

```bash
git clone https://github.com/Lucas-Henrique-Lopes-Costa/compjunior.git
cd compjunior/frontend
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite `.env.local` com suas configurações:

```env
NEXT_PUBLIC_API_URL=http://localhost:4000
NEXT_PUBLIC_ALLOWED_LATITUDE=-19.9167
NEXT_PUBLIC_ALLOWED_LONGITUDE=-43.9345
NEXT_PUBLIC_ALLOWED_RADIUS_METERS=100
```

### 4. Executar em desenvolvimento

```bash
npm run dev
```

Acesse: **<http://localhost:3000>**

---

## 🐳 Docker

### Build da imagem

```bash
docker build -t nasalinha-frontend .
```

### Executar com Docker Compose

```bash
docker-compose up -d
```

### Parar containers

```bash
docker-compose down
```

---

## 📦 Scripts Disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento com Turbopack
npm run build        # Gera build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa ESLint
```

---

## 🔐 Fluxo de Autenticação

### Login

1. Usuário insere email e senha
2. Frontend valida dados com Zod
3. Requisição POST para `/auth/login`
4. Backend valida credenciais
5. Retorna token JWT + dados do usuário
6. Token salvo em `localStorage`
7. Redirecionamento para dashboard

### Registro

1. Usuário preenche formulário (nome, email, senha, role)
2. Validação com Zod (senha forte, emails válidos)
3. Requisição POST para `/auth/register`
4. Backend cria usuário com senha hasheada
5. Retorna token JWT + dados do usuário
6. Login automático

### Recuperação de Senha

1. Usuário informa email
2. Backend envia link de reset por email
3. Usuário clica no link (token único)
4. Define nova senha
5. Token invalidado após uso

---

## 📝 Convenções de Código

### Commits
Seguimos o padrão **Conventional Commits**:

```
feat: adiciona página de login
fix: corrige validação de email
docs: atualiza README
style: formata código com Prettier
refactor: reorganiza estrutura de pastas
test: adiciona testes de autenticação
```

### Nomenclatura

- **Componentes**: PascalCase (`LoginForm.tsx`)
- **Hooks**: camelCase com prefixo `use` (`useAuth.ts`)
- **Utilitários**: camelCase (`formatDate`)
- **Tipos**: PascalCase (`UserRole`)
- **Arquivos de estilo**: kebab-case (`globals.css`)

---

## 🚧 Roadmap

### Semanas 1-2 ✅

- [x] Setup inicial do projeto
- [x] Estrutura de pastas
- [x] Configuração Docker
- [x] Sistema de tipos TypeScript
- [x] Configuração de serviços e API
- [x] Hooks de autenticação

### Semana 3 (Próxima)

- [ ] Componentes de UI base
- [ ] Páginas de login e registro
- [ ] Implementação de autenticação
- [ ] Recuperação de senha

### Semanas 4-5

- [ ] CRUD de check-ins
- [ ] Upload de fotos
- [ ] Validação de geolocalização
- [ ] Sistema de ranking
- [ ] Histórico pessoal

### Semana 6

- [ ] Painel administrativo
- [ ] Testes automatizados
- [ ] Otimizações de performance
- [ ] Documentação final
- [ ] Vídeo de apresentação

---

## 📄 Licença

Este projeto foi desenvolvido como parte do processo seletivo da Comp Júnior.

---

## 👥 Autor

Desenvolvido com ❤️ por **Lucas Henrique** para o desafio da Comp Júnior

---

**⭐ Se este projeto foi útil, considere dar uma estrela!**
