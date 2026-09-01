import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function MachinesSection() {
  const machines = [
    {
      name: "Máquina de Corte a Laser Fibra",
      capacity: "Mesa 3000x1500mm | Alta Velocidade",
      img: "/sicchieri-assets/8fd96700d_image.png",
      desc: "Tecnologia de fibra ótica de última geração para cortes perfeitos em aço carbono, inox e alumínio com mínima zona afetada pelo calor."
    },
    {
      name: "Mesa de Plasma HD CNC",
      capacity: "Corte até 38mm com Definição HD",
      img: "/sicchieri-assets/eaf748d69_image.png",
      desc: "Excelente acabamento e perpendicularidade para corte de contornos complexos em chapas estruturais."
    },
    {
      name: "Prensa Dobradeira CNC Hidráulica",
      capacity: "Capacidade de até 400 Toneladas",
      img: "/sicchieri-assets/b3b0091ff_image.png",
      desc: "Controle de eixos CNC com compensação de deformação para dobras precisas de perfis, caixas e cantoneiras."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Parque Tecnológico</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              Máquinas de Alta Performance
            </h2>
            <p className="text-slate-600 mt-2 max-w-2xl text-base">
              Investimos constantemente nos melhores equipamentos industriais para entregar qualidade superior e prazos imbatíveis.
            </p>
          </div>
          <Link to="/Maquinas">
            <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold">
              Ver Todas as Máquinas
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {machines.map((m, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-md border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="h-56 overflow-hidden">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
              </div>
              <div className="p-6 flex-grow flex flex-col justify-between">
                <div>
                  <div className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold mb-3">
                    {m.capacity}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{m.name}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
