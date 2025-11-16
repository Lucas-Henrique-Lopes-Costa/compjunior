# Frontend - NaSalinha

Interface React para o sistema de check-in gamificado NaSalinha.

## Tecnologias

- **React 18** - Biblioteca para interfaces de usuário
- **React Router v6** - Roteamento e navegação
- **Axios** - Cliente HTTP para API
- **TailwindCSS** - Framework CSS utilitário
- **React Icons** - Biblioteca de ícones
- **React Toastify** - Notificações toast
- **Docker** - Containerização

## Estrutura de Pastas

```
frontend/
├── public/              # Arquivos estáticos
├── src/
│   ├── assets/         # Imagens, ícones, etc
│   ├── components/     # Componentes reutilizáveis
│   │   ├── common/     # Componentes genéricos
│   │   ├── layout/     # Layout (Header, Footer, etc)
│   │   └── features/   # Componentes específicos de features
│   ├── pages/          # Páginas da aplicação
│   ├── services/       # Serviços de API
│   ├── styles/         # Estilos globais
│   ├── utils/          # Funções utilitárias
│   ├── contexts/       # Contextos React
│   ├── hooks/          # Custom hooks
│   ├── App.js          # Componente principal
│   └── index.js        # Ponto de entrada
├── Dockerfile
└── package.json
```

## Funcionalidades

- Login e Registro de usuários
- Dashboard com estatísticas
- Check-in com upload de foto
- Visualização de ranking
- Gerenciamento de temporadas (Admin)
- Perfil do usuário
- Design responsivo (Mobile, Tablet, Desktop)
- Notificações toast
- Proteção de rotas por role

## Como Executar

### Com Docker (Recomendado)

```bash
# Na raiz do projeto
docker-compose up frontend
```

### Desenvolvimento Local

1. **Instalar dependências**

```bash
npm install
```

2. **Configurar variável de ambiente**

Crie um arquivo `.env` na raiz do frontend:

```env
REACT_APP_API_URL=http://localhost:5000/api
```

3. **Executar em modo desenvolvimento**

```bash
npm start
```

Acesse: <http://localhost:3000>

## Testes

```bash
# Executar testes
npm test

# Coverage report
npm run test:coverage
```

## Design Responsivo

A aplicação foi desenvolvida com abordagem **Mobile First** e é totalmente responsiva:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px
- **Desktop**: 1024px+

## Componentes Principais

### Layout

- **Header** - Barra de navegação com menu responsivo
- **Footer** - Rodapé com informações
- **Sidebar** - Menu lateral (desktop)

### Common

- **Button** - Botão customizável
- **Input** - Campo de entrada
- **Card** - Container de conteúdo
- **Modal** - Janela modal
- **Loading** - Indicador de carregamento

### Features

- **CheckInCard** - Card de check-in
- **RankingTable** - Tabela de ranking
- **SeasonCard** - Card de temporada
- **UserAvatar** - Avatar do usuário

## 🔐 Autenticação

O sistema utiliza JWT armazenado no localStorage:

```javascript
// Token salvo após login
localStorage.setItem('accessToken', token);

// Incluído em todas as requisições
axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
```

## Rotas

### Públicas

- `/` - Landing page
- `/login` - Login
- `/register` - Registro

### Privadas (Autenticadas)

- `/dashboard` - Dashboard principal
- `/checkin` - Fazer check-in
- `/ranking` - Ver ranking
- `/profile` - Perfil do usuário

### Admin

- `/admin/seasons` - Gerenciar temporadas
- `/admin/users` - Gerenciar usuários

## Consumo da API

Todas as chamadas à API são feitas através do serviço `api.js`:

```javascript
import api from './services/api';

// Exemplo de uso
const response = await api.get('/users/me');
const data = response.data;
```

## Requisitos Atendidos

### Obrigatórios

- Arquitetura de pastas organizada
- Login funcional com validação
- Componentização máxima
- Responsividade completa
- Containerização com Docker
- CRUD completo no front-end
- Componentes reutilizáveis
- Documentação clara

### "Ir Além"

- Commits descritivos
- Código limpo e organizado
- Boas práticas React
- Context API para estado global
- Custom hooks
- Tratamento de erros
- Loading states

## Paleta de Cores

```css
Primary: #1893A6 (Azul)
Secondary: #F59E0B (Laranja)
Success: #10B981 (Verde)
Error: #EF4444 (Vermelho)
Background: #F9FAFB (Cinza claro)
Text: #111827 (Preto)
```

## Melhorias Futuras

- Modo escuro
- Internacionalização (i18n)
- PWA (Progressive Web App)
- Gráficos e estatísticas avançadas
- Chat em tempo real
- Notificações push
- Gamificação adicional (badges, conquistas)

---

Desenvolvido para a Comp Júnior
