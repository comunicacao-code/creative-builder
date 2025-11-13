#!/bin/bash

# Script para adicionar configuração Docker ao novo repositório

echo "🐳 Preparando arquivos Docker..."
echo ""

# Criar docker-compose.yml
cat > docker-compose.yml << 'EOF'
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
EOF

# Criar Dockerfile.dev
cat > Dockerfile.dev << 'EOF'
FROM node:20-alpine

WORKDIR /app

COPY package.json package-lock.json* ./

RUN npm ci

COPY . .

EXPOSE 5173

CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
EOF

# Criar .dockerignore
cat > .dockerignore << 'EOF'
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
EOF

echo "✅ Arquivos Docker criados:"
echo "  - docker-compose.yml"
echo "  - Dockerfile.dev"
echo "  - .dockerignore"
echo ""
echo "🚀 Agora você pode executar: docker compose up"
