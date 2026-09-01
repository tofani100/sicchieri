import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Cpu, Scissors, Layers } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      title: "Corte a Laser Fibra Óptica",
      desc: "Cortes de extrema precisão com tolerâncias mínimas, acabamento perfeito e cantos vivos em chapas finas e médias.",
      icon: Cpu,
      img: "/sicchieri-assets/ab68f07c3_image.png",
      link: "/Servicos"
    },
    {
      title: "Corte a Plasma HD",
      desc: "Ideal para corte em aços de média e alta espessura com velocidade, excelente custo-benefício e bordas limpas.",
      icon: Flame,
      img: "/sicchieri-assets/af292a4fd_image.png",
      link: "/Servicos"
    },
    {
      title: "Oxicorte CNC",
      desc: "Solução ideal para chapas grossas e blocos de aço carbono maciço com controle numérico computadorizado.",
      icon: Scissors,
      img: "/sicchieri-assets/5e2f86b15_image.png",
      link: "/Servicos"
    },
    {
      title: "Dobra CNC de Alta Tonelagem",
      desc: "Conformação precisa com dobradeiras de grande porte, garantindo ângulos exatos e repetibilidade em peças seriadas.",
      icon: Layers,
      img: "/sicchieri-assets/ff929b468_image.png",
      link: "/Servicos"
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2">
            Tecnologia Completa em Processamento de Chapas
          </h2>
          <p className="text-slate-400 mt-4 text-base sm:text-lg">
            Da matéria-prima à peça final pronta para montagem ou solda, garantimos qualidade em cada etapa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/90 border border-slate-700/60 rounded-2xl overflow-hidden hover:border-orange-500/50 hover:shadow-2xl transition-all duration-300 flex flex-col group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md p-2 rounded-lg border border-slate-700">
                    <Icon className="w-5 h-5 text-orange-400" />
                  </div>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-6">
                      {item.desc}
                    </p>
                  </div>

                  <Link to={item.link}>
                    <Button variant="ghost" className="w-full text-orange-400 hover:text-orange-300 hover:bg-slate-700 justify-between p-0">
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <a
            href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20enviar%20um%20projeto%20para%20cota%C3%A7%C3%A3o."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 text-base shadow-xl">
              Enviar Arquivo DWG/DXF para Cotação
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
