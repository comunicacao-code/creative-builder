# Creative Builder - UTUA 🎨

Plataforma web para criação e adaptação em massa de criativos publicitários usando IA generativa. Combina geração de imagens via IA, edição visual com canvas, expansão automática de formatos e geração de variações de cores.

## 🎯 Funcionalidades Implementadas

### ✅ Core Features
- ✅ **Geração de Criativos com IA** - SeeDream (ByteDance) via Edge Function
- ✅ **Editor Visual Completo** - Canvas Fabric.js v6 com múltiplos artboards
- ✅ **Upload Direto** - Interface para upload de criativos já prontos
- ✅ **Upload Múltiplo** - Carregamento em batch de vários criativos
- ✅ **Outpainting Inteligente** - Expansão 1:1 ↔ 9:16 com Cloudinary Generative Fill
- ✅ **Generative Remove** - Remoção de objetos indesejados com IA
- ✅ **Variações de Cores** - Geração automática de 4 paletas (warm, cool, vibrant, muted)
- ✅ **Sistema de Camadas** - Logo, texto, imagens, e elementos personalizados
- ✅ **Histórico de Edição** - Undo/Redo completo com stack de estados
- ✅ **Atalhos de Teclado** - Shortcuts para todas as ferramentas principais
- ✅ **Export Otimizado** - Múltiplos formatos (PNG, JPG, WebP) com compressão

### ✅ Sistema de Logos
- ✅ Integração com logos UTUA (branca e colorida) via Cloudinary
- ✅ Posicionamento flexível (5 posições: cantos + centro)
- ✅ Controle de tamanho do logo
- ✅ Drag & drop de assets para o canvas

### ✅ Editor Avançado
- ✅ Ferramentas: Select, Hand (pan), Zoom, Draw, Rectangle, Circle, Text
- ✅ Painel de camadas com visibilidade e lock
- ✅ Painel de propriedades para edição de objetos
- ✅ Painel de assets com galeria de recursos
- ✅ Grid de múltiplos artboards (até 12 variações simultâneas)
- ✅ Nomenclatura automática (BR-001, AR-002, etc)

### ✅ Integrações
- ✅ **Lovable Cloud** - Backend automático com Supabase
- ✅ **Cloudinary** - Upload, transformações e IA generativa
- ✅ **SeeDream API** - Geração de imagens a partir de prompts
- ✅ **Edge Functions** - Processamento serverless de todas as operações de IA

## 🐳 Hospedagem com Docker

A aplicação pode ser executada usando Docker para desenvolvimento ou produção.

### Desenvolvimento (com hot-reload)

Para desenvolvimento com hot-reload automático enquanto você faz ajustes:

```bash
# Usando docker-compose (recomendado)
docker-compose --profile dev up

# Ou usando Docker diretamente
docker build -f Dockerfile.dev -t creative-builder-dev .
docker run -p 5173:5173 -v $(pwd):/app -v /app/node_modules creative-builder-dev
```

A aplicação estará disponível em `http://localhost:5173` com hot-reload ativo.

### Produção

Para executar a versão de produção otimizada:

```bash
# Usando docker-compose
docker-compose --profile prod up

# Ou usando Docker diretamente
docker build -t creative-builder .
docker run -p 80:80 creative-builder
```

A aplicação estará disponível em `http://localhost`.

### Comandos Úteis

```bash
# Parar os containers
docker-compose down

# Rebuild das imagens
docker-compose build

# Ver logs
docker-compose logs -f

# Executar em background
docker-compose up -d
```

## 📦 Stack Tecnológica

### Frontend
- **React 18** + **TypeScript** + **Vite**
- **UI**: shadcn/ui + Tailwind CSS
- **State Management**: Zustand (com devtools e persist)
- **Canvas**: Fabric.js v6 (edição visual)
- **Upload**: react-dropzone
- **Icons**: lucide-react
- **Routing**: react-router-dom
- **Forms**: react-hook-form + zod
- **HTTP**: axios

### Backend (Lovable Cloud)
- **Supabase** - Banco de dados, autenticação, storage
- **Edge Functions** - Serverless functions para IA
- **Cloudinary** - CDN e transformações de imagem

### 🔧 Edge Functions
Geração de Imagens
generate-with-seedream - Gera imagem via SeeDream + upload Cloudinary
seedream-generate - Interface direta com SeeDream API
optimize-prompt - Otimiza prompts antes da geração
Transformações Cloudinary
cloudinary-upload - Upload seguro com assinatura
cloudinary-generative-fill - Expansão de formatos com IA
cloudinary-generative-remove - Remoção de objetos com IA
cloudinary-create-variation - Cria nova asset após transformação
cloudinary-add-logo - Adiciona overlay de logo UTUA
Processamento Avançado
generate-color-variations - Gera 4 variações de cores de uma imagem

### 🎯 Próximas Features
 Sistema de templates pré-configurados
 Histórico de criativos com galeria na home
 Navegação lateral para alternar entre múltiplos criativos
 Batch processing para aplicar fill/cores em todos os criativos
 Duplicação rápida de criativos
 Edição de metadados (país, ID, formato) pós-criação
 Preview antes de aplicar outpainting
 Sistema de autenticação e usuários
 Colaboração em tempo real
 
### 📖 Documentação Útil
shadcn/ui - Componentes UI
Zustand - State management
Fabric.js v6 - Canvas editor
Cloudinary AI - Transformações IA
Lovable Docs - Plataforma Lovable

### 🏢 Desenvolvido para UTUA
Sistema de criação em massa de criativos publicitários otimizado para operação de design

Objetivo: Reduzir tempo de produção de horas para minutos, permitindo testes rápidos e adaptação ágil de campanhas para múltiplos formatos e mercados
