# 📦 PROJETO PRONTO PARA O LOVABLE

## ✅ O QUE FOI CRIADO

### Estrutura Completa
```
creative-builder/
├── 📄 Configuração
│   ├── package.json          ✅ Todas dependências configuradas
│   ├── tsconfig.json         ✅ TypeScript configurado
│   ├── vite.config.ts        ✅ Vite com alias @/
│   ├── tailwind.config.js    ✅ Tailwind + shadcn configurado
│   ├── postcss.config.js     ✅ PostCSS configurado
│   └── .env.example          ✅ Variáveis de ambiente
│
├── 📱 Aplicação Base
│   ├── index.html            ✅ HTML base
│   ├── src/main.tsx          ✅ Entry point
│   ├── src/App.tsx           ✅ Rotas configuradas
│   └── src/index.css         ✅ CSS global com variáveis shadcn
│
├── 🎨 Componentes
│   ├── ui/button.tsx         ✅ Button shadcn
│   ├── ui/card.tsx           ✅ Card shadcn
│   └── creative/CreativeSelector.tsx  ✅ Tela inicial
│
├── 🗂️ Infraestrutura
│   ├── types/index.ts        ✅ Tipos TypeScript completos
│   ├── stores/creative-store.ts  ✅ Zustand store com tudo
│   └── lib/utils.ts          ✅ Helpers + países
│
└── 📚 Documentação
    ├── README.md             ✅ Documentação geral
    ├── LOVABLE_INSTRUCTIONS.md  ✅ CRÍTICO - Leia isso!
    └── setup.sh              ✅ Script de instalação
```

## 🎯 FUNCIONAMENTO ATUAL

### ✅ Já Funciona:
1. **Roteamento completo**
   - / → Tela de seleção (Gerar vs Replicar)
   - /generate → Placeholder (a implementar)
   - /replicate → Placeholder (a implementar)
   - /editor/:id → Placeholder (a implementar)
   - /export → Placeholder (a implementar)

2. **Store Zustand operacional**
   - Gerenciamento de criativos
   - Gerenciamento de layers
   - Gerenciamento de refinements
   - Persist configurado
   - Devtools ativo

3. **Tipos TypeScript completos**
   - Creative, EditorLayer, RefinementRegion
   - WorkflowType, CreativeFormat, CreativeStatus
   - Todos os tipos de params e configs

4. **shadcn/ui configurado**
   - Tema completo (light/dark)
   - Componentes Button e Card prontos
   - Infraestrutura para adicionar mais componentes

## 🚀 COMO SUBIR PARA O LOVABLE

### Opção 1: Upload Direto (Recomendado)
1. Compacte a pasta `creative-builder/`
2. No Lovable, crie novo projeto
3. Faça upload do ZIP
4. **ANTES DE QUALQUER COISA**, peça para o Lovable:
   ```
   "Leia o arquivo LOVABLE_INSTRUCTIONS.md e confirme que entendeu"
   ```

### Opção 2: Repositório Git
1. Inicialize git: `git init`
2. Commit inicial: `git add . && git commit -m "Initial setup"`
3. Push para GitHub
4. Importe no Lovable via GitHub

## ⚠️ REGRAS CRÍTICAS PARA O LOVABLE

### 🔴 NUNCA DEIXE O LOVABLE:
- ❌ Recriar componentes shadcn que já existem
- ❌ Criar Context API (use Zustand)
- ❌ Criar tipos novos sem verificar `src/types/`
- ❌ Usar caminhos relativos (use `@/`)
- ❌ Instalar bibliotecas já existentes

### 🟢 SEMPRE INSTRUA O LOVABLE A:
- ✅ Importar de `@/` (nunca caminho relativo)
- ✅ Usar `useCreativeStore` do store
- ✅ Importar tipos de `@/types`
- ✅ Usar `cn()` de `@/lib/utils`
- ✅ Seguir padrão dos componentes existentes

## 📋 PRÓXIMAS TAREFAS (ORDEM RECOMENDADA)

### 1️⃣ Componentes shadcn necessários
```
Crie os seguintes componentes shadcn seguindo o padrão de button.tsx:
- Input
- Label  
- Select
- Textarea
- Tabs
- Dialog
- Slider
- Badge
- Separator
```

### 2️⃣ GeneratePage
```
Crie src/components/creative/GeneratePage.tsx

Deve ter:
- Form com react-hook-form
- Campos: prompt (textarea), país (select), formato (radio), creativeId (input)
- Botão submit
- Ao submeter: adiciona creative no store e navega para /editor/:id
- Por enquanto, use mock data (sem API real)

Use os componentes shadcn que você criou.
Use os tipos de @/types
Use COUNTRIES de @/lib/utils
```

### 3️⃣ ReplicatePage
```
Crie src/components/creative/ReplicatePage.tsx

Deve ter:
- Área de upload (react-dropzone)
- Preview da imagem enviada
- Campos: país origem, país destino, contexto, creativeId
- Botão submit
- Ao submeter: salva no store e navega para /editor/:id

Use react-dropzone já instalado
Use os tipos ReplicationParams
```

### 4️⃣ EditorPage (Canvas)
```
Crie src/components/editor/EditorPage.tsx

Deve ter:
- Canvas principal (Fabric.js)
- Toolbar lateral esquerda (ferramentas)
- Panel direita (layers e refinements)
- Botão "Salvar e Exportar"

Fabric.js já está instalado
```

### 5️⃣ Integrações API
```
Crie src/lib/cloudinary.ts com:
- uploadToCloudinary(file)
- applyGenerativeFill(publicId, dimensions)
- applyGenerativeRemove(publicId, regions)

Crie src/lib/seedream.ts com:
- generateImage(params)
```

## 💡 EXEMPLO DE PROMPT CORRETO PARA O LOVABLE

```
Vou criar a GeneratePage. Siga estas instruções exatamente:

1. Crie primeiro os componentes shadcn necessários:
   - Input em src/components/ui/input.tsx
   - Label em src/components/ui/label.tsx
   - Select em src/components/ui/select.tsx
   - Textarea em src/components/ui/textarea.tsx
   Siga o padrão exato de button.tsx e card.tsx

2. Crie src/components/creative/GeneratePage.tsx
   - Use react-hook-form
   - Importe tipos: import type { GenerationParams } from '@/types'
   - Use store: const { addCreative } = useCreativeStore()
   - Use países: import { COUNTRIES, generateId } from '@/lib/utils'
   
3. No form:
   - Campo prompt (Textarea)
   - Campo país (Select com COUNTRIES)
   - Campo formato (RadioGroup: 1:1 ou 9:16)
   - Campo creativeId (Input)
   
4. Ao submeter:
   - Crie objeto Creative completo
   - Chame addCreative(creative)
   - Navegue para /editor com useNavigate()

Não crie nada além disso. Não mude a estrutura existente.
```

## 🎨 DESIGN SYSTEM

### Cores (Tailwind)
- Primary: Azul escuro
- Secondary: Cinza claro
- Accent: Azul médio
- Destructive: Vermelho
- Muted: Cinza neutro

### Espaçamentos
- Container: max-w-7xl mx-auto px-4
- Gaps: gap-4 (padrão), gap-6 (médio), gap-8 (grande)
- Padding: p-6 (cards), p-4 (componentes)

### Tipografia
- Títulos: font-bold tracking-tight
- Texto: text-sm ou text-base
- Descrições: text-muted-foreground

## 🔧 TROUBLESHOOTING

### Se o Lovable criar componentes duplicados:
```
"Você criou um componente que já existe. Delete o que você criou e 
use o componente de @/components/ui/[nome]"
```

### Se usar caminhos relativos:
```
"Corrija todos os imports para usar @ alias.
Exemplo: import { Button } from '@/components/ui/button'"
```

### Se criar Context API:
```
"Delete esse Context. Use o Zustand store que já existe:
import { useCreativeStore } from '@/stores/creative-store'"
```

## ✅ CHECKLIST DE QUALIDADE

Antes de considerar pronto:

- [ ] Todos os imports usam `@/` alias
- [ ] Nenhum componente shadcn duplicado
- [ ] Store Zustand sendo usado (não Context)
- [ ] Tipos importados de `@/types`
- [ ] Utils usados de `@/lib/utils`
- [ ] Código TypeScript sem erros
- [ ] Componentes seguem padrão shadcn
- [ ] Responsivo (mobile-first)
- [ ] Acessível (aria-labels quando necessário)

## 🎯 OBJETIVO FINAL

Uma aplicação completa que:
1. ✅ Tem arquitetura sólida e escalável
2. ✅ Usa as melhores práticas (Zustand, TypeScript, shadcn)
3. ✅ É fácil de manter e expandir
4. 🔄 Integra com APIs (Cloudinary, SeeDream)
5. 🔄 Tem editor canvas profissional
6. 🔄 Exporta em múltiplos formatos

**IMPORTANTE**: Não tente fazer tudo de uma vez. Vá por partes, testando cada componente.

---

**Boa sorte! 🚀**

Se tiver dúvidas, volte aqui e leia LOVABLE_INSTRUCTIONS.md novamente.
