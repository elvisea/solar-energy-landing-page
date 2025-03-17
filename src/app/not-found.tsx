import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sun } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-secondary/30">
      <div className="text-center max-w-md px-4">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-[hsl(var(--chart-1))]/10">
            <Sun size={48} className="text-[hsl(var(--chart-1))]" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-foreground mb-4">
          Página não encontrada
        </h1>
        <p className="text-muted-foreground mb-8">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <Link href="/" passHref>
          <Button className="bg-[hsl(var(--chart-1))] hover:bg-[hsl(var(--chart-1))]/90 text-white">
            Voltar para a Página Inicial
          </Button>
        </Link>
      </div>
    </div>
  )
} 