# 🐳 Como usar Docker para desenvolvimento

Esta configuração permite rodar a aplicação no Docker sem precisar instalar Node.js localmente.

## 🚀 Início Rápido

### 1. Iniciar a aplicação

```bash
docker-compose up
```

A aplicação estará disponível em: **http://localhost:5173**

### 2. Fazer ajustes

- Edite os arquivos normalmente no Cursor
- As mudanças serão refletidas automaticamente (hot-reload)
- Não precisa reiniciar o container!

### 3. Parar a aplicação

```bash
# Parar (Ctrl+C no terminal ou):
docker-compose down
```

## 📝 Comandos Úteis

```bash
# Iniciar em background
docker-compose up -d

# Ver logs
docker-compose logs -f

# Rebuild da imagem (se mudar dependências)
docker-compose build

# Parar e remover containers
docker-compose down

# Parar, remover containers E volumes
docker-compose down -v
```

## 🔄 Fluxo de Trabalho

1. **Primeira vez**: `docker-compose up` (pode demorar um pouco na primeira vez)
2. **Desenvolvimento**: Edite os arquivos, veja as mudanças em tempo real
3. **Adicionar dependência**: 
   - Adicione no `package.json`
   - Execute: `docker-compose exec app npm install`
   - Ou pare e faça rebuild: `docker-compose build && docker-compose up`

## ⚡ Vantagens

- ✅ Não precisa instalar Node.js
- ✅ Ambiente isolado e consistente
- ✅ Hot-reload automático
- ✅ Fácil de compartilhar com outros desenvolvedores
