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

## 🚀 Como Rodar

### Instalação
```bash
npm install
Desenvolvimento

npm run dev
Build

npm run build
Deploy
O deploy é automático via Lovable - basta clicar em "Publish" no editor.

📁 Estrutura de Pastas
src/
├── components/
│   ├── ui/                    # Componentes shadcn/ui (30+ componentes)
│   ├── creative/              # Seleção de workflows
│   │   ├── CreativeSelector.tsx
│   │   ├── GeneratePage.tsx
│   │   ├── ReplicatePage.tsx
│   │   └── VerticalSelector.tsx
│   └── editor/                # Sistema completo de edição
│       ├── EditorPage.tsx             # Página principal do editor
│       ├── SimpleCanvas.tsx           # Canvas container
│       ├── SimpleArtboard.tsx         # Artboard individual com Fabric.js
│       ├── SimpleToolbar.tsx          # Toolbar com ferramentas
│       ├── SimpleLayersPanel.tsx      # Painel de camadas
│       ├── AssetsPanel.tsx            # Galeria de assets
│       ├── PropertiesPanel.tsx        # Propriedades de objetos
│       ├── ExportDialog.tsx           # Dialog de export
│       ├── ImportCreativeDialog.tsx   # Import de criativos
│       ├── GenerativeFillPopover.tsx  # Expansão de formatos
│       └── RemoveOverlay.tsx          # Ferramenta de remoção
├── pages/
│   ├── ExportPage.tsx         # Página de export final
│   └── UploadEditorPage.tsx   # Upload direto de criativos
├── stores/
│   └── creative-store.ts      # Zustand store global
├── lib/
│   ├── utils.ts               # Helpers gerais + cn()
│   ├── cloudinary.ts          # Upload para Cloudinary
│   ├── seedream.ts            # Geração com SeeDream
│   ├── ai-sdk.ts              # Interface unificada de IA
│   └── utils/
│       ├── artboard-layout.ts       # Layout de múltiplos artboards
│       ├── canvas-export.ts         # Export do canvas Fabric.js
│       ├── image-cache.ts           # Cache de imagens
│       ├── image-compression.ts     # Compressão otimizada
│       └── nomenclature.ts          # Naming automático
├── types/
│   └── index.ts               # Tipos TypeScript completos
├── hooks/
│   ├── use-editor-history.tsx # Sistema de Undo/Redo
│   ├── use-keyboard-shortcuts.tsx # Atalhos de teclado
│   └── use-toast.ts           # Toast notifications
└── integrations/
    └── supabase/              # Integração Lovable Cloud
        ├── client.ts          # Cliente Supabase
        └── types.ts           # Tipos auto-gerados

supabase/
├── functions/                 # Edge Functions
│   ├── cloudinary-upload/
│   ├── cloudinary-generative-fill/
│   ├── cloudinary-generative-remove/
│   ├── cloudinary-create-variation/
│   ├── cloudinary-add-logo/
│   ├── generate-with-seedream/
│   ├── seedream-generate/
│   ├── generate-color-variations/
│   └── optimize-prompt/
└── config.toml               # Configuração Supabase
🎨 Fluxos de Trabalho
1. Gerar Novo Criativo
Escolha "Gerar Novo" na home
Preencha: prompt, país (BR/AR/MX/CO), formato (1:1 ou 9:16)
IA gera imagem base via SeeDream
Editor abre com a imagem no artboard
Adicione logos, textos, elementos visuais
Use "Fill 1:1" ou "Fill 9:16" para expandir formatos
Clique "Gerar Variações de Cores" para 4 paletas
Export final em PNG/JPG/WebP
2. Upload Direto
Escolha "Upload Direto" na home
Arraste múltiplos criativos (ou selecione arquivos)
Preencha: Creative ID, país, formato
Upload automático para Cloudinary
Editor abre com todos os criativos carregados
Edite, expanda formatos, gere variações
Export em batch
3. Replicar Criativo (Em Desenvolvimento)
Escolha "Replicar" na home
Upload da referência
IA adapta para novo contexto/país
Editor para refinamentos
Export final
🛠️ Ferramentas do Editor
Toolbar Principal
Select (V) - Selecionar e mover objetos
Hand (H) - Pan/arrastar o canvas
Draw (D) - Desenho livre
Rectangle (R) - Criar retângulos
Circle (C) - Criar círculos
Text (T) - Adicionar textos
Zoom In/Out (+/-) - Controle de zoom
Undo/Redo (Ctrl+Z/Ctrl+Shift+Z)
Painéis Laterais
Layers (L) - Gerenciar camadas e visibilidade
Assets (A) - Galeria de recursos (logos, imagens)
Properties (P) - Editar propriedades de objetos selecionados
Menu Arquivo
Importar Criativo (Ctrl+I) - Importar novos criativos
Salvar (Ctrl+S) - Salvar e ir para export
Exportar (Ctrl+E) - Dialog de export
Generative AI
Fill 1:1 - Expandir para formato quadrado
Fill 9:16 - Expandir para formato vertical (stories)
Remove - Remover objetos com IA
Variações de Cores - Gerar 4 paletas automaticamente
⌨️ Atalhos de Teclado
Atalho	Ação
V	Ferramenta Select
H	Ferramenta Hand (pan)
D	Ferramenta Draw
R	Ferramenta Rectangle
C	Ferramenta Circle
T	Ferramenta Text
L	Toggle painel de Layers
A	Toggle painel de Assets
P	Toggle painel de Properties
Ctrl + Z	Undo
Ctrl + Shift + Z	Redo
Ctrl + S	Salvar
Ctrl + E	Exportar
Ctrl + I	Importar criativo
+	Zoom In
-	Zoom Out
0	Reset Zoom
Delete	Deletar objeto selecionado
🎨 Sistema de Artboards
O editor suporta múltiplos artboards organizados em grid:

Layout responsivo: 2, 3 ou 4 colunas dependendo do número
Nomenclatura automática: BR-001, BR-002, etc
Sincronização de ferramentas entre artboards
Export individual ou em batch
🌈 Variações de Cores
Gera automaticamente 4 paletas otimizadas:

Warm - Tons quentes (vermelho, laranja, amarelo)
Cool - Tons frios (azul, verde, roxo)
Vibrant - Cores saturadas e vibrantes
Muted - Cores pastéis e suaves
Cada variação mantém logos e textos intactos.

🔧 Edge Functions
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
📊 Tipos TypeScript
Todos os tipos estão em src/types/index.ts:

Creative - Criativo completo com metadados
CreativeVariation - Variações de formato/cores
EditorLayer - Camadas do editor
GenerationParams - Parâmetros de geração
CloudinaryTransformation - Transformações Cloudinary
ExportOptions - Opções de export
🎯 Próximas Features
 Sistema de templates pré-configurados
 Histórico de criativos com galeria na home
 Navegação lateral para alternar entre múltiplos criativos
 Batch processing para aplicar fill/cores em todos os criativos
 Duplicação rápida de criativos
 Edição de metadados (país, ID, formato) pós-criação
 Preview antes de aplicar outpainting
 Sistema de autenticação e usuários
 Colaboração em tempo real
📖 Documentação Útil
shadcn/ui - Componentes UI
Zustand - State management
Fabric.js v6 - Canvas editor
Cloudinary AI - Transformações IA
Lovable Docs - Plataforma Lovable
🏢 Desenvolvido para UTUA
Sistema de criação em massa de criativos publicitários otimizado para operação de marketing digital.

Objetivo: Reduzir tempo de produção de horas para minutos, permitindo testes rápidos e adaptação ágil de campanhas para múltiplos formatos e mercados.
