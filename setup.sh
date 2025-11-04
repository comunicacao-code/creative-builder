#!/bin/bash

echo "🚀 Creative Builder - Setup"
echo "============================"
echo ""

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Node.js não encontrado. Instale o Node.js primeiro."
    exit 1
fi

echo "✅ Node.js $(node --version) encontrado"
echo ""

# Instalar dependências
echo "📦 Instalando dependências..."
npm install

if [ $? -eq 0 ]; then
    echo "✅ Dependências instaladas com sucesso"
else
    echo "❌ Erro ao instalar dependências"
    exit 1
fi

echo ""

# Criar .env se não existir
if [ ! -f .env ]; then
    echo "📝 Criando arquivo .env..."
    cp .env.example .env
    echo "✅ Arquivo .env criado. Configure suas variáveis de ambiente."
else
    echo "ℹ️  Arquivo .env já existe"
fi

echo ""
echo "✅ Setup concluído!"
echo ""
echo "📚 Próximos passos:"
echo "1. Configure as variáveis em .env"
echo "2. Execute 'npm run dev' para iniciar o servidor de desenvolvimento"
echo "3. Acesse http://localhost:5173"
echo ""
echo "📖 Leia LOVABLE_INSTRUCTIONS.md antes de subir para o Lovable"
