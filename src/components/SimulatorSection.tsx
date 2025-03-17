'use client';

import { useState, useEffect } from 'react';
import { Leaf, Zap, Car } from 'lucide-react';

const SimulatorSection = () => {
  const [billValue, setBillValue] = useState(200);
  const [monthlySavings, setMonthlySavings] = useState(0);
  const [annualSavings, setAnnualSavings] = useState(0);
  const [co2Reduction, setCo2Reduction] = useState(0);
  const [treesPlanted, setTreesPlanted] = useState(0);
  const [kmNotDriven, setKmNotDriven] = useState(0);

  useEffect(() => {
    // Calculate savings (20% of bill value)
    const monthly = billValue * 0.2;
    setMonthlySavings(monthly);
    setAnnualSavings(monthly * 12);

    // Calculate environmental impact (simplified calculations)
    setCo2Reduction(billValue * 0.5); // kg of CO2
    setTreesPlanted(Math.round(billValue * 0.02)); // trees
    setKmNotDriven(Math.round(billValue * 2)); // km
  }, [billValue]);

  return (
    <section id="simulator" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Simule sua <span className="text-[hsl(var(--chart-1))]">economia</span>
        </h2>

        <div className="max-w-3xl mx-auto bg-card rounded-xl shadow-lg p-6 md:p-8">
          <h3 className="text-xl font-medium mb-6">Quanto você gasta por mês com energia?</h3>

          <div className="mb-8">
            <div className="flex justify-between mb-2">
              <span>R$ 100</span>
              <span>R$ 1000</span>
            </div>
            <input
              type="range"
              min="100"
              max="1000"
              step="10"
              value={billValue}
              onChange={(e) => setBillValue(Number(e.target.value))}
              className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center mt-4">
              <span className="text-2xl font-bold">R$ {billValue}</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-secondary/70 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-4">Sua economia</h4>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground">Mensal</p>
                  <p className="text-2xl font-bold text-[hsl(var(--chart-1))]">
                    R$ {monthlySavings.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Anual</p>
                  <p className="text-2xl font-bold text-[hsl(var(--chart-1))]">
                    R$ {annualSavings.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/70 rounded-lg p-6">
              <h4 className="text-lg font-medium mb-4">Impacto ambiental</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Zap className="text-[hsl(var(--chart-1))]" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Redução de CO2</p>
                    <p className="font-medium">{co2Reduction.toFixed(1)} kg</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Leaf className="text-[hsl(var(--chart-2))]" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Equivalente a árvores plantadas</p>
                    <p className="font-medium">{treesPlanted}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Car className="text-[hsl(var(--chart-3))]" size={20} />
                  <div>
                    <p className="text-sm text-muted-foreground">Km não rodados de carro</p>
                    <p className="font-medium">{kmNotDriven} km</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors text-lg font-medium">
              Solicitar convite
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulatorSection; 