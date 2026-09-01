import React from "react";
import { Shield, Layers, Sparkles } from "lucide-react";

export default function MaterialsSection() {
  const materials = [
    {
      name: "Aço Carbono",
      types: "SAE 1020, 1045, ASTM A36, SAC 350",
      desc: "Excelente soldabilidade e resistência mecânica para estruturas e caldeiraria.",
      icon: Layers
    },
    {
      name: "Aço Inox",
      types: "AISI 304, 316, 430",
      desc: "Alta resistência à corrosão, acabamento sanitário para setor alimentício e químico.",
      icon: Sparkles
    },
    {
      name: "Aço de Alta Resistência",
      types: "Hardox, Domex, Corten",
      desc: "Para aplicações de alto desgaste, abrasão e intempéries.",
      icon: Shield
    }
  ];

  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-orange-400 font-semibold text-xs uppercase tracking-wider">Matérias-Primas</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">
            Trabalhamos com os Melhores Aços do Mercado
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {materials.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="bg-slate-800/80 border border-slate-700 p-6 rounded-xl hover:border-orange-500/50 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-orange-500/10 text-orange-400 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{m.name}</h3>
                <span className="text-xs text-orange-400 font-semibold block mb-2">{m.types}</span>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
