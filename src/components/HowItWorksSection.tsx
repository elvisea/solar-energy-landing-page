import { CheckCircle } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Faça sua simulação",
      description: "Informe o valor da sua conta de luz e veja quanto pode economizar"
    },
    {
      number: "02",
      title: "Cadastre-se na plataforma",
      description: "Preencha seus dados e envie uma foto da sua conta de energia"
    },
    {
      number: "03",
      title: "Receba sua proposta",
      description: "Analisamos seu perfil e enviamos uma proposta personalizada"
    },
    {
      number: "04",
      title: "Comece a economizar",
      description: "Após a aprovação, você já começa a economizar na próxima fatura"
    }
  ];

  return (
    <section id="how-it-works" className="py-16 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Como <span className="text-[hsl(var(--chart-2))]">funciona</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Entenda como é simples fazer parte da revolução da energia solar
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-xl p-6 shadow-md h-full border border-border">
                <div className="text-3xl font-bold text-[hsl(var(--chart-2))] mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-0.5 bg-border"></div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-card rounded-xl p-8 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Como a energia chega até você</h3>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Fazendas solares</h4>
                    <p className="text-muted-foreground">Nossa energia é gerada em fazendas solares estrategicamente localizadas</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Distribuição pela rede existente</h4>
                    <p className="text-muted-foreground">A energia é injetada na rede de distribuição da sua concessionária</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Créditos na sua conta</h4>
                    <p className="text-muted-foreground">Você recebe créditos de energia que reduzem o valor da sua fatura</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-[hsl(var(--chart-1))] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Economia garantida</h4>
                    <p className="text-muted-foreground">Você paga menos do que pagaria normalmente à concessionária</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-[300px]">
              <div className="absolute inset-0 bg-gradient-to-br from-[hsl(var(--chart-2))] to-[hsl(var(--chart-1))] opacity-20 rounded-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2">100%</div>
                  <div className="text-xl">Energia limpa e renovável</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection; 