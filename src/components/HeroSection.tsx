'use client'

import { ArrowRight, Sun, Zap, Shield } from 'lucide-react';

const HeroSection = () => {

  const scrollToSimulator = () => {
    const element = document.getElementById('simulator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[hsl(var(--chart-2))] rounded-full opacity-10 blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[hsl(var(--chart-1))] rounded-full opacity-10 blur-3xl transform -translate-x-1/4 translate-y-1/4"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-secondary text-foreground/80 font-medium text-sm">
              Energia solar por assinatura
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              A liberdade de energia <span className="text-[hsl(var(--chart-1))]">chegou</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium mb-6">
              Somos a SolarEnergy
            </p>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Economize até 20% na sua conta de energia através da nossa solução de energia solar por assinatura, sem instalação de painéis na sua casa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToSimulator}
                className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors flex items-center gap-2 text-lg font-medium"
              >
                Quero economizar! <ArrowRight size={20} />
              </button>
              <button
                onClick={() => scrollToSection('how-it-works')}
                className="border border-border bg-background hover:bg-secondary transition-colors px-6 py-3 rounded-md text-lg font-medium"
              >
                Como funciona
              </button>
            </div>

            {/* Features badges */}
            <div className="mt-10 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[hsl(var(--chart-1))]/10">
                  <Zap size={16} className="text-[hsl(var(--chart-1))]" />
                </div>
                <span className="text-sm font-medium">20% economia</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[hsl(var(--chart-2))]/10">
                  <Sun size={16} className="text-[hsl(var(--chart-2))]" />
                </div>
                <span className="text-sm font-medium">100% renovável</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full bg-[hsl(var(--chart-3))]/10">
                  <Shield size={16} className="text-[hsl(var(--chart-3))]" />
                </div>
                <span className="text-sm font-medium">Sem instalação</span>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative">
            <div className="relative h-[400px] w-full flex items-center justify-center">
              {/* Card de economia */}
              <div className="bg-gradient-to-br from-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))] rounded-2xl shadow-xl w-full max-w-md overflow-hidden">
                <div className="p-8 text-white">
                  <div className="flex flex-col items-center">
                    <div className="text-7xl font-bold mb-2">20%</div>
                    <div className="text-xl text-center">de economia na sua conta de energia</div>
                    <div className="mt-6 w-16 h-1 bg-white/30 rounded-full"></div>
                    <div className="mt-6 grid grid-cols-2 gap-4 w-full">
                      <div className="text-center">
                        <div className="text-3xl font-bold">0</div>
                        <div className="text-sm opacity-80">Instalação</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold">100%</div>
                        <div className="text-sm opacity-80">Energia limpa</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 text-center text-white">
                  <p className="font-medium">Sem painéis solares no seu telhado</p>
                </div>
              </div>

              {/* Elementos decorativos */}
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-[hsl(var(--chart-4))] rounded-full opacity-20"></div>
              <div className="absolute -bottom-5 -left-5 w-16 h-16 bg-[hsl(var(--chart-5))] rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

export default HeroSection; 