# 🐳 Guia Completo: Como Usar Docker (Passo a Passo)

## 📋 O que você precisa fazer

### Passo 1: Instalar o Docker

1. **Acesse**: https://www.docker.com/products/docker-desktop/
2. **Baixe** o Docker Desktop para o seu sistema operacional (Windows/Mac/Linux)
3. **Instale** o arquivo baixado (é como instalar qualquer programa)
4. **Abra** o Docker Desktop após instalar
5. **Aguarde** ele inicializar (vai aparecer um ícone na barra de tarefas)

✅ **Como saber se está funcionando?**
- Abra um terminal (PowerShell no Windows, Terminal no Mac/Linux)
- Digite: `docker --version`
- Se aparecer uma versão (ex: `Docker version 24.0.0`), está funcionando!

---

### Passo 2: Usar o Docker no seu projeto

Depois que o Docker estiver instalado:

#### ⚠️ IMPORTANTE: Abra o terminal na pasta do projeto

**Como saber se está na pasta certa?**
- No terminal, digite: `ls` (ou `dir` no Windows)
- Você deve ver arquivos como: `package.json`, `docker-compose.yml`, `src/`
- Se não ver esses arquivos, navegue até a pasta do projeto

**Como navegar até a pasta do projeto:**
- **Windows**: `cd C:\caminho\para\seu\projeto` (ou arraste a pasta para o terminal)
- **Mac/Linux**: `cd ~/caminho/para/seu/projeto`
- **No Cursor**: Clique com botão direito na pasta do projeto → "Open in Terminal"

#### Primeira vez (pode demorar 2-5 minutos):

```bash
# Certifique-se de estar na pasta do projeto (onde está o docker-compose.yml)
# Depois, simplesmente digite:
docker compose up
```

⚠️ **IMPORTANTE**: Use `docker compose` (com espaço), não `docker-compose` (com hífen)!

O que vai acontecer:
- Docker vai baixar a imagem do Node.js (só na primeira vez)
- Vai instalar todas as dependências do projeto
- Vai iniciar o servidor de desenvolvimento

#### Você vai ver algo assim:

```
[+] Running 1/1
 ✔ Container creative-builder-app-1  Created
 ✔ Container creative-builder-app-1  Started
...
VITE v5.1.0  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://0.0.0.0:5173/
```

✅ **Pronto!** Abra seu navegador em: **http://localhost:5173**

---

### Passo 3: Fazer ajustes no código

1. **Deixe o Docker rodando** (não feche o terminal)
2. **Abra o Cursor** e edite os arquivos normalmente
3. **Salve** o arquivo (Ctrl+S / Cmd+S)
4. **A página no navegador atualiza sozinha!** 🔄

Não precisa fazer nada mais - o hot-reload funciona automaticamente!

---

### Passo 4: Parar o Docker

Quando terminar de trabalhar:

1. **No terminal onde o Docker está rodando**, pressione: `Ctrl + C`
2. Ou em outro terminal, digite: `docker compose down`

---

## 🆘 Problemas Comuns

### "docker: command not found"
- **Problema**: Docker não está instalado ou não está no PATH
- **Solução**: Instale o Docker Desktop e reinicie o terminal

### "Cannot connect to Docker daemon"
- **Problema**: Docker Desktop não está rodando
- **Solução**: Abra o Docker Desktop e aguarde ele inicializar

### "Port 5173 is already in use"
- **Problema**: Outra aplicação está usando a porta
- **Solução**: 
  - Pare a outra aplicação, OU
  - Mude a porta no `docker-compose.yml` (linha `"5173:5173"` para `"5174:5173"`)

### "npm ERR! code EACCES"
- **Problema**: Permissões no Docker
- **Solução**: Execute `docker compose down` e depois `docker compose up` novamente

### "unknown docker command: compose updocker-compose"
- **Problema**: Você usou o comando errado ou houve erro de digitação
- **Solução**: Use `docker compose up` (com espaço, não hífen)

### "cd: no such file or directory: /workspace"
- **Problema**: Você tentou entrar em um caminho que não existe no seu sistema
- **Solução**: 
  - **Não precisa fazer `cd /workspace`!** 
  - Abra o terminal diretamente na pasta do projeto
  - **No Cursor**: Clique com botão direito na pasta do projeto → "Open in Terminal"
  - Ou navegue manualmente: `cd` + caminho da pasta do projeto
  - Para verificar se está no lugar certo: `ls` (deve mostrar `package.json` e `docker-compose.yml`)

---

## 📝 Comandos Úteis (Copiar e Colar)

⚠️ **Use `docker compose` (com espaço), não `docker-compose` (com hífen)!**

```bash
# Iniciar a aplicação
docker compose up

# Iniciar em background (sem ocupar o terminal)
docker compose up -d

# Ver o que está rodando
docker compose ps

# Ver os logs
docker compose logs -f

# Parar tudo
docker compose down

# Rebuild (se mudou dependências)
docker compose build
docker compose up
```

---

## ✅ Checklist Rápido

- [ ] Docker Desktop instalado
- [ ] Docker Desktop rodando (ícone na barra de tarefas)
- [ ] Terminal aberto na pasta do projeto
- [ ] Comando `docker compose up` executado
- [ ] Navegador aberto em http://localhost:5173
- [ ] Aplicação funcionando!

---

## 🎯 Resumo Ultra Simples

1. **Instale** Docker Desktop (uma vez só)
2. **Abra** o terminal na pasta do projeto
3. **Digite**: `docker compose up`
4. **Aguarde** carregar
5. **Abra** http://localhost:5173 no navegador
6. **Edite** os arquivos no Cursor
7. **Veja** as mudanças aparecerem automaticamente!

É só isso! 🚀
