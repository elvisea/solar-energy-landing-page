import { ArrowRight } from 'lucide-react';

const CTASection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-[hsl(var(--chart-1))] to-[hsl(var(--chart-2))] rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Pronto para começar a economizar?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Junte-se a milhares de pessoas que já estão economizando com energia solar. Sem instalação, sem burocracia, apenas economia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[hsl(var(--chart-1))] px-6 py-3 rounded-md hover:bg-white/90 transition-colors text-lg font-medium flex items-center justify-center gap-2">
                Simular economia <ArrowRight size={20} />
              </button>
              <button className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-md hover:bg-white/10 transition-colors text-lg font-medium">
                Fale com um consultor
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection; 