import { Sparkles, Copy } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export function CreativeSelector() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto py-10">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight mb-2">
          Creative Builder
        </h1>
        <p className="text-muted-foreground text-lg">
          Crie e adapte criativos com IA generativa
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => navigate('/generate')}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <CardTitle>Gerar Novo Criativo</CardTitle>
            <CardDescription>
              Use IA para gerar imagens do zero com SeeDream da ByteDance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                Geração via IA generativa
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                Expansão automática com Generative Fill
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-primary" />
                Múltiplos formatos (1:1 e 9:16)
              </li>
            </ul>
            <Button className="w-full mt-6" variant="default">
              Começar a gerar
            </Button>
          </CardContent>
        </Card>

        <Card 
          className="hover:shadow-lg transition-shadow cursor-pointer group"
          onClick={() => navigate('/replicate')}
        >
          <CardHeader>
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
              <Copy className="w-6 h-6 text-secondary-foreground" />
            </div>
            <CardTitle>Replicar Criativo</CardTitle>
            <CardDescription>
              Adapte um criativo existente para outro país ou contexto
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-secondary-foreground" />
                Adaptação fiel à referência
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-secondary-foreground" />
                Localização por país e contexto
              </li>
              <li className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-secondary-foreground" />
                Refinamento manual disponível
              </li>
            </ul>
            <Button className="w-full mt-6" variant="secondary">
              Começar a replicar
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
