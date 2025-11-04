# 🎯 INSTRUÇÕES PARA O LOVABLE - LEIA ANTES DE COMEÇAR

## ⚠️ REGRAS CRÍTICAS

### 1. NÃO RECRIAR O QUE JÁ EXISTE
- ✅ shadcn/ui já está configurado → USE os componentes em `src/components/ui/`
- ✅ Zustand store já existe → USE `useCreativeStore` de `@/stores/creative-store`
- ✅ Tipos já existem → IMPORTE de `@/types`
- ✅ Utils já existem → USE `@/lib/utils`

### 2. SEMPRE IMPORTAR CORRETAMENTE
```tsx
// ✅ CORRETO
import { Button } from '@/components/ui/button'
import { useCreativeStore } from '@/stores/creative-store'
import type { Creative } from '@/types'
import { cn, generateId } from '@/lib/utils'

// ❌ ERRADO - NÃO FAZER
import { Button } from './button' // caminho relativo
import { Creative } from '../../../types' // caminho relativo longo
```

### 3. USAR O STORE ZUSTAND
```tsx
// ✅ CORRETO
const { currentCreative, addCreative, setProcessing } = useCreativeStore()

// ❌ ERRADO - NÃO CRIAR Context API
const CreativeContext = createContext() // NÃO!
```

### 4. MANTER CONSISTÊNCIA
- Use sempre `lucide-react` para ícones
- Use sempre `cn()` para classes do Tailwind
- Use sempre os tipos de `@/types`
- Siga o padrão de nomenclatura existente

## 📋 CHECKLIST ANTES DE CRIAR NOVO COMPONENTE

Antes de criar qualquer componente, verifique:

- [ ] Já existe em `src/components/ui/`?
- [ ] Já existe em `src/components/creative/`?
- [ ] O tipo necessário está em `src/types/index.ts`?
- [ ] A função helper existe em `src/lib/utils.ts`?

Se SIM para qualquer item → **USE O QUE JÁ EXISTE**

## 🎨 COMPONENTES DISPONÍVEIS

### shadcn/ui já criados:
- ✅ Button (`@/components/ui/button`)
- ✅ Card (`@/components/ui/card`)

### Faltam criar (quando necessário):
- Input, Label, Select, Textarea
- Tabs, Dialog, Dropdown Menu
- Slider, Toggle, Tooltip, Toast
- Separator, Scroll Area, Accordion
- Radio Group, Badge, Progress

**IMPORTANTE**: Quando criar novos componentes shadcn, siga o padrão exato dos já existentes.

## 🗂️ ESTRUTURA DE DADOS

### Creative
```typescript
{
  id: string
  creativeId: string // "001", "002"
  name: string
  country: string
  format: '1:1' | '9:16'
  url: string
  status: 'draft' | 'generating' | 'generated' | ...
  workflow: 'generate' | 'replicate'
  layers: EditorLayer[]
  refined: boolean
}
```

### Usar Store
```typescript
// Adicionar criativo
addCreative(creative)

// Atualizar
updateCreative(id, { status: 'generated', url: '...' })

// Pegar atual
const current = useCreativeStore(state => state.currentCreative)

// Adicionar layer
addLayer({ id, type: 'logo', ... })
```

## 🚀 PRÓXIMAS TAREFAS

### 1. Criar GeneratePage
- Form com react-hook-form
- Campos: prompt, país, formato, creativeId
- Mock de geração (depois integrar SeeDream)
- Redirecionar para /editor/:id

### 2. Criar ReplicatePage
- Upload com react-dropzone
- Campos: país origem/destino, contexto
- Preview da referência
- Redirecionar para /editor/:id

### 3. Criar EditorPage
- Canvas com Fabric.js
- Toolbar lateral (ferramentas)
- Panel direita (layers, refinements)
- Integração com Cloudinary

### 4. Criar ExportPage
- Grid de variações
- Download individual e em lote
- Badges de status

## 💡 DICAS DE PROMPT PARA VOCÊ (LOVABLE)

### ✅ Bons prompts:
```
"Crie GeneratePage usando o formulário com react-hook-form.
Use Select de @/components/ui/select (que você vai criar agora).
Use os tipos GenerationParams de @/types.
Use COUNTRIES de @/lib/utils.
Ao submeter, chame addCreative do store."
```

### ❌ Prompts ruins:
```
"Crie uma página de geração"
// Muito vago, você vai criar do zero ignorando o existente
```

## 🔧 COMO ADICIONAR NOVO COMPONENTE SHADCN

1. Identifique qual componente precisa
2. Crie em `src/components/ui/[nome].tsx`
3. Siga o padrão de Button.tsx e Card.tsx
4. Use Radix UI + CVA + Tailwind
5. Exporte do arquivo

**Exemplo de estrutura base:**
```tsx
import * as React from "react"
import * as RadixComponent from "@radix-ui/react-[component]"
import { cn } from "@/lib/utils"

const Component = React.forwardRef<...>(({ className, ...props }, ref) => (
  <RadixComponent.Root
    ref={ref}
    className={cn("base-classes", className)}
    {...props}
  />
))
Component.displayName = "Component"

export { Component }
```

## ⚡ ATALHOS IMPORTANTES

```typescript
// IDs
import { generateId } from '@/lib/utils'
const id = generateId()

// Classes
import { cn } from '@/lib/utils'
className={cn("base", conditional && "extra", className)}

// Países
import { COUNTRIES } from '@/lib/utils'
COUNTRIES.map(c => <option value={c.code}>{c.flag} {c.name}</option>)

// Store
const { addCreative, currentCreative } = useCreativeStore()
```

## 🎯 OBJETIVO FINAL

Criar uma aplicação completa e funcional que:
1. Gera criativos com IA (SeeDream)
2. Replica e adapta por país
3. Editor canvas profissional
4. Refinamento com Cloudinary AI
5. Camadas (logo, footer, aprovação)
6. Export múltiplos formatos

**Mantenha a qualidade e consistência do código!**
