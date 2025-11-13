#!/bin/bash

# Script para iniciar a aplicação em modo desenvolvimento com Docker

echo "🚀 Iniciando Creative Builder em modo desenvolvimento..."
echo "📦 A aplicação estará disponível em http://localhost:5173"
echo ""
echo "Para parar, pressione Ctrl+C ou execute: docker-compose down"
echo ""

docker-compose --profile dev up
