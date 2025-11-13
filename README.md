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
- ✅ **Cloudinary** - Upload, transformações e IA generativa
- ✅ **SeeDream API** - Geração de imagens a partir de prompts
- ✅ **Backend** - APIs e processamento serverless para operações de IA

## 🚀 Como Começar

### Opção 1: Usando Docker (Recomendado - Não precisa instalar Node.js)

```bash
# Iniciar a aplicação com hot-reload
docker compose up

# A aplicação estará em: http://localhost:5173
```

**Vantagens:**
- ✅ Não precisa instalar Node.js localmente
- ✅ Hot-reload automático
- ✅ Ambiente isolado e consistente

Veja o guia completo em [COMO-USAR-DOCKER.md](./COMO-USAR-DOCKER.md)

### Opção 2: Desenvolvimento Local (com Node.js)

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# A aplicação estará em: http://localhost:5173
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

### Backend
- **APIs** - Integração com serviços externos
- **Serverless Functions** - Processamento de operações de IA
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
- [shadcn/ui](https://ui.shadcn.com/) - Componentes UI
- [Zustand](https://zustand-demo.pmnd.rs/) - State management
- [Fabric.js v6](https://github.com/fabricjs/fabric.js) - Canvas editor
- [Cloudinary AI](https://cloudinary.com/documentation/ai_content_analysis_and_generation_addon) - Transformações IA

### 🏢 Desenvolvido para UTUA
Sistema de criação em massa de criativos publicitários otimizado para operação de design

Objetivo: Reduzir tempo de produção de horas para minutos, permitindo testes rápidos e adaptação ágil de campanhas para múltiplos formatos e mercados
