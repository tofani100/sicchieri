import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, Check } from "lucide-react";

export default function Maquinas() {
  const machines = [
    {
      name: "Máquina de Corte a Laser Fibra Óptica",
      specs: [
        "Mesa de trabalho: 3.000 x 1.500 mm",
        "Espessuras: Aço carbono até 20mm, Inox até 12mm, Alumínio até 8mm",
        "Precisão de posicionamento: ± 0.03 mm",
        "Software de nesting inteligente para melhor aproveitamento da chapa"
      ],
      img: "/sicchieri-assets/8fd96700d_image.png",
      desc: "Garante cortes extremamente rápidos com repetibilidade incomparável e excelente qualidade nas arestas."
    },
    {
      name: "Mesa de Plasma Alta Definição CNC",
      specs: [
        "Mesa de trabalho de grande formato",
        "Corte em chapas de até 38mm",
        "Controle numérico com sensor de altura de tocha automático",
        "Corte limpo com mínima rebarba"
      ],
      img: "/sicchieri-assets/eaf748d69_image.png",
      desc: "Excelente performance e velocidade para chapas estruturais de média e alta espessura."
    },
    {
      name: "Prensa Dobradeira CNC Hidráulica",
      specs: [
        "Capacidade: 400 Toneladas",
        "Comprimento de dobra útil de até 4 metros",
        "Compensação automática de coroamento",
        "Ferramentas temperadas para dobras de alta precisão"
      ],
      img: "/sicchieri-assets/b3b0091ff_image.png",
      desc: "Capaz de executar dobras em perfis complexos, caixas e chapas grossas com controle angular digital."
    },
    {
      name: "Mesa de Oxicorte CNC Multitochas",
      specs: [
        "Chapas de aço carbono grossas de até 150mm",
        "Corte simultâneo com múltiplas tochas",
        "Perfuração e corte em grandes blocos industriais"
      ],
      img: "/sicchieri-assets/5e2f86b15_image.png",
      desc: "Solução robusta para corte de chapas pesadas e discos industriais de alta espessura."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Parque Fabril</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Nossas Máquinas</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Equipamentos modernos com controle CNC para entregar máxima precisão ao seu projeto.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {machines.map((m, idx) => (
            <div
              key={idx}
              className={"grid grid-cols-1 lg:grid-cols-12 gap-12 items-center " + (idx % 2 === 1 ? "lg:flex-row-reverse" : "")}
            >
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                  <Zap className="w-3.5 h-3.5" /> Equipamento CNC
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{m.name}</h2>
                <p className="text-slate-600 leading-relaxed">{m.desc}</p>
                <div className="space-y-2 pt-2">
                  <h4 className="font-semibold text-slate-800 text-sm">Especificações e Capacidades:</h4>
                  {m.specs.map((s, sIdx) => (
                    <div key={sIdx} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <a
                    href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20especifica%C3%A7%C3%B5es%20das%20m%C3%A1quinas."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                      Solicitar Cotação para esta Máquina
                    </Button>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <img
                  src={m.img}
                  alt={m.name}
                  className="rounded-2xl shadow-xl w-full object-cover h-80 sm:h-96"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
