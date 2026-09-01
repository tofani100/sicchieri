import React from "react";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

export default function Servicos() {
  const servicesList = [
    {
      title: "Corte a Laser Fibra Óptica",
      desc: "O corte a laser oferece a mais alta precisão e acabamento impecável em chapas metálicas, com cortes finos, detalhes complexos e excelente velocidade.",
      benefits: [
        "Furação milimétrica e gravação de referências",
        "Aproveitamento otimizado da chapa (menos desperdício)",
        "Excelente acabamento em inox, alumínio e aço carbono",
        "Velocidade incomparável em pequenas e grandes séries"
      ],
      img: "/sicchieri-assets/ab68f07c3_image.png"
    },
    {
      title: "Corte a Plasma HD",
      desc: "Excelente custo-benefício para peças em aço carbono e inox de média a alta espessura com velocidade e qualidade comprovada.",
      benefits: [
        "Capacidade de corte de chapas até 38mm",
        "Bordas regulares com mínima zona térmica",
        "Perfeito para caldeiraria e peças estruturais",
        "Alta produtividade"
      ],
      img: "/sicchieri-assets/af292a4fd_image.png"
    },
    {
      title: "Oxicorte CNC",
      desc: "Processo térmico tradicional e confiável para o corte de chapas grossas em aço carbono estrutural e blocos industriais.",
      benefits: [
        "Corte de espessuras de até 150mm",
        "Controle numérico de trajetória",
        "Perfeito para bases de máquinas e anéis pesados",
        "Economia em cortes pesados"
      ],
      img: "/sicchieri-assets/5e2f86b15_image.png"
    },
    {
      title: "Dobra de Chapas CNC",
      desc: "Conformação mecânica de chapas de diversos comprimentos e espessuras com dobradeiras computadorizadas.",
      benefits: [
        "Dobra em perfis U, C, Z, cartola e cantoneiras",
        "Compensação hidráulica para precisão ao longo de toda a peça",
        "Repetibilidade perfeita para grandes lotes",
        "Capacidade de até 400 toneladas"
      ],
      img: "/sicchieri-assets/ff929b468_image.png"
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Soluções Industriais</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Serviços Especializados</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Do corte inicial à dobra final, soluções completas em beneficiamento de chapas metálicas.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {servicesList.map((srv, idx) => (
            <div key={idx} className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 overflow-hidden shadow-sm">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">{srv.title}</h2>
                  <p className="text-slate-600 text-base leading-relaxed">{srv.desc}</p>
                  
                  <div className="space-y-2.5 pt-2">
                    <h4 className="font-semibold text-slate-800 text-sm">Vantagens e Diferenciais:</h4>
                    {srv.benefits.map((b, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <a
                      href={"https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20para%20o%20servi%C3%A7o%20de%20" + encodeURIComponent(srv.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                        Solicitar Orçamento Deste Serviço
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <img
                    src={srv.img}
                    alt={srv.title}
                    className="rounded-2xl shadow-lg w-full h-72 object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
