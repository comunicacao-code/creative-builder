# Creative Builder - UTUA

Aplicação para criação e adaptação de criativos usando IA generativa.

## 🎯 Funcionalidades

### ✅ Implementado
- ✅ Estrutura base do projeto
- ✅ Zustand store configurado
- ✅ Tipos TypeScript completos
- ✅ Componentes shadcn/ui (Button, Card)
- ✅ Tela de seleção de workflow
- ✅ Roteamento configurado

### 🚧 Em Desenvolvimento
- 🚧 Geração com SeeDream (ByteDance)
- 🚧 Replicação de criativos
- 🚧 Canvas Editor (Fabric.js)
- 🚧 Generative Fill (Cloudinary)
- 🚧 Generative Remove (Cloudinary)
- 🚧 Camadas (Logo, Footer, Aprovação)
- 🚧 Export em múltiplos formatos

## 📦 Stack Tecnológica

- **Frontend**: React 18 + TypeScript + Vite
- **UI**: shadcn/ui + Tailwind CSS
- **State**: Zustand (com devtools e persist)
- **Canvas**: Fabric.js (para edição)
- **Upload**: react-dropzone
- **Icons**: lucide-react
- **Routing**: react-router-dom

## 🚀 Como Rodar

### Instalação
```bash
npm install
```

### Desenvolvimento
```bash
npm run dev
```

### Build
```bash
npm run build
```

## 📁 Estrutura de Pastas

```
src/
├── components/
│   ├── ui/                  # Componentes shadcn/ui
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── creative/            # Componentes de criação
│   │   └── CreativeSelector.tsx
│   ├── editor/              # Componentes do editor (em breve)
│   └── export/              # Componentes de export (em breve)
├── stores/
│   └── creative-store.ts    # Zustand store principal
├── lib/
│   ├── utils.ts             # Helpers gerais
│   ├── cloudinary.ts        # (a criar) Integração Cloudinary
│   └── seedream.ts          # (a criar) Integração SeeDream
├── types/
│   └── index.ts             # Tipos TypeScript
└── hooks/                   # Hooks customizados (a criar)
```

## 🎨 Fluxos de Trabalho

### 1. Gerar Novo Criativo
1. Usuário escolhe "Gerar Novo"
2. Preenche prompt, país, formato
3. SeeDream gera imagem base
4. Cloudinary expande para formatos (1:1 e 9:16)
5. Editor canvas para refinamentos
6. Adiciona logo, footer, marca de aprovação
7. Export final

### 2. Replicar Criativo
1. Usuário escolhe "Replicar"
2. Faz upload da referência
3. Define país original e destino
4. Fornece contexto de adaptação
5. IA adapta ao novo contexto
6. Cloudinary expande para formatos
7. Editor canvas para ajustes
8. Export final

## 🔧 Próximos Componentes a Criar

### Componentes shadcn/ui necessários:
- [ ] Input
- [ ] Label
- [ ] Select
- [ ] Textarea
- [ ] Tabs
- [ ] Dialog
- [ ] Dropdown Menu
- [ ] Slider
- [ ] Toggle
- [ ] Toggle Group
- [ ] Tooltip
- [ ] Toast
- [ ] Separator
- [ ] Scroll Area
- [ ] Accordion
- [ ] Radio Group
- [ ] Badge
- [ ] Progress

### Páginas principais:
- [ ] GeneratePage.tsx - Form de geração com SeeDream
- [ ] ReplicatePage.tsx - Upload e adaptação
- [ ] EditorPage.tsx - Canvas editor principal
- [ ] ExportPage.tsx - Preview e download

### Integrações:
- [ ] lib/cloudinary.ts - API Cloudinary
- [ ] lib/seedream.ts - API SeeDream
- [ ] Supabase Edge Functions

## 📝 Notas Importantes

### Para usar no Lovable:
1. ✅ Todas as bibliotecas já estão no package.json
2. ✅ Estrutura de pastas padronizada
3. ✅ Tipos TypeScript completos
4. ✅ Store Zustand configurado
5. ✅ shadcn/ui configurado corretamente

### Quando subir para o Lovable:
- **NÃO deixe ele recriar componentes shadcn** - já estão criados
- **USE o store Zustand** - não deixe criar Context API
- **REFERENCIE os tipos** - estão em src/types/index.ts
- **MANTENHA a estrutura de pastas** - já está organizada

## 🤖 Sistema de Agentes (BMAD)

A aplicação usa uma arquitetura modular de agentes especializados:

- **Generation Agent**: Gera imagens com SeeDream
- **Expansion Agent**: Expande com Cloudinary Fill
- **Removal Agent**: Remove objetos com Cloudinary
- **Layout Agent**: Adiciona logos, footers, etc
- **Localization Agent**: Adapta contexto por país

Cada agente é independente e pode ser orquestrado em diferentes sequências.

## 🔐 Variáveis de Ambiente

Criar arquivo `.env`:
```
VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
VITE_CLOUDINARY_API_KEY=your_api_key
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```

## 📖 Documentação

- [shadcn/ui](https://ui.shadcn.com/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Fabric.js](http://fabricjs.com/)
- [Cloudinary AI](https://cloudinary.com/documentation/ai_in_action)

---

**Desenvolvido para UTUA**
