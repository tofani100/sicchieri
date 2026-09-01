import React from "react";
import { Check } from "lucide-react";

export default function ProductsSection() {
  const products = [
    {
      title: "Chapas e Perfis Dobrados",
      desc: "Perfis U, C, Z, cartola, cantoneiras e dobras sob medida conforme desenho.",
      img: "/sicchieri-assets/47e4469d9_image.png"
    },
    {
      title: "Flanges, Discos e Anéis",
      desc: "Corte concêntrico perfeito com furação milimétrica para tubulações e válvulas.",
      img: "/sicchieri-assets/2e057abf0_image.png"
    },
    {
      title: "Peças para Máquinas & Agrícola",
      desc: "Chassis, suportes, facas, engrenagens e componentes estruturais pesados.",
      img: "/sicchieri-assets/48add5640_image.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Produtos Fabricados</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
            Peças Confeccionadas sob Encomenda
          </h2>
          <p className="text-slate-600 mt-3 text-base">
            Produzimos peças unitárias ou lotes seriados com rigoroso controle dimensional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((p, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="h-52 overflow-hidden">
                <img src={p.img} alt={p.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="space-y-1.5 text-xs text-slate-700 font-medium border-t border-slate-200 pt-4">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-500" /> Matéria-prima certificada
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-orange-500" /> Acabamento livre de escórias
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
