# 🔄 Guia: Migrar para o Novo Repositório do Lovable

## 📋 Passo a Passo

### 1. Clonar o Novo Repositório

```bash
# Clone o novo repositório que o Lovable criou
git clone <URL_DO_NOVO_REPOSITORIO>
cd <nome-do-repositorio>
```

### 2. Verificar o que tem no novo repositório

```bash
# Ver estrutura de arquivos
ls -la

# Ver dependências
cat package.json
```

### 3. Remover Configurações do Lovable

Arquivos/configurações que geralmente precisam ser removidos ou ajustados:

#### Arquivos que podem existir:
- `.lovable/` ou `lovable.config.*`
- Arquivos de deploy específicos do Lovable
- Configurações de build específicas

#### No `package.json`:
- Scripts relacionados ao Lovable
- Dependências específicas do Lovable (se houver)

#### No código:
- Imports de APIs do Lovable (se não for usar)
- Configurações de backend do Lovable

### 4. Adicionar Configuração Docker

Copie estes arquivos para o novo repositório:

#### `docker-compose.yml`
```yaml
version: '3.8'

services:
  app:
    build:
      context: .
      dockerfile: Dockerfile.dev
    ports:
      - "5173:5173"
    volumes:
      - .:/app
      - /app/node_modules
    environment:
      - NODE_ENV=development
    restart: unless-stopped
```

#### `Dockerfile.dev`
```dockerfile
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
```

#### `.dockerignore`
```
node_modules
dist
.git
.gitignore
README.md
.env
.env.local
.env.*.local
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.DS_Store
*.log
.vscode
.idea
coverage
.nyc_output
```

### 5. Atualizar `vite.config.ts`

Certifique-se de que tem esta configuração para funcionar no Docker:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    watch: {
      usePolling: true,
    },
  },
})
```

### 6. Testar

```bash
# Com Docker
docker compose up

# Ou localmente
npm install
npm run dev
```

## ✅ Checklist

- [ ] Clonei o novo repositório
- [ ] Verifiquei a estrutura de arquivos
- [ ] Removi configurações do Lovable
- [ ] Adicionei arquivos Docker (docker-compose.yml, Dockerfile.dev, .dockerignore)
- [ ] Atualizei vite.config.ts
- [ ] Testei com `docker compose up`
- [ ] Aplicação funcionando em http://localhost:5173

## 🆘 Precisa de Ajuda?

Depois de clonar o novo repositório, me envie:
1. A estrutura de arquivos (`ls -la`)
2. O conteúdo do `package.json`
3. Qualquer erro que aparecer

E eu te ajudo a limpar e configurar tudo! 🚀
