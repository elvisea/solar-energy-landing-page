import { Zap, Home, Leaf, CreditCard, Smartphone, Sun } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Zap className="h-10 w-10 text-[hsl(var(--chart-1))]" />,
      title: "20% de economia",
      description: "Reduza sua conta de energia em até 20% sem investimento inicial"
    },
    {
      icon: <Home className="h-10 w-10 text-[hsl(var(--chart-2))]" />,
      title: "Sem obras",
      description: "Não precisa instalar painéis solares no seu telhado"
    },
    {
      icon: <Leaf className="h-10 w-10 text-[hsl(var(--chart-3))]" />,
      title: "Liberdade de escolha",
      description: "Você pode cancelar a qualquer momento sem multas"
    },
    {
      icon: <CreditCard className="h-10 w-10 text-[hsl(var(--chart-4))]" />,
      title: "Sem taxas",
      description: "Não há taxas ocultas ou custos adicionais"
    },
    {
      icon: <Smartphone className="h-10 w-10 text-[hsl(var(--chart-5))]" />,
      title: "100% digital",
      description: "Gerencie tudo pelo seu celular ou computador"
    },
    {
      icon: <Sun className="h-10 w-10 text-[hsl(var(--chart-1))]" />,
      title: "Energia sustentável",
      description: "Contribua para um planeta mais limpo usando energia solar"
    }
  ];

  return (
    <section id="benefits" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Benefícios da <span className="text-[hsl(var(--chart-1))]">energia solar</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Descubra como nossa solução de energia solar pode transformar sua vida com economia e sustentabilidade
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border"
            >
              <div className="mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 