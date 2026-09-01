import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Building, Cog, Wrench, Leaf, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const sectors = [
    {
      title: "Construção Civil",
      description: "Estruturas metálicas e fundações",
      image: "https://images.unsplash.com/photo-154188894625-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Building
    },
    {
      title: "Indústria Metalmecânica",
      description: "Peças, gabaritos e componentes",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Cog
    },
    {
      title: "Serralherias e Estruturas",
      description: "Perfis especiais, portões e grades",
      image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Wrench
    },
    {
      title: "Setor Sucroenergético & Agro",
      description: "Chapas grossas e equipamentos",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      icon: Leaf
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Sobre a Sicchieri</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              Excelência e Pontualidade em Soluções Metálicas
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Com anos de experiência e parque fabril modernizado, a <strong>Sicchieri Corte e Dobra</strong> atua no processamento de chapas de aço carbono, inox e alumínio com foco total em precisão milimétrica e acabamento de alto padrão.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">Maquinário computadorizado CNC para cortes limpos e sem rebarbas</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">Equipe técnica qualificada para leitura de projetos em CAD/DWG/DXF</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span className="text-slate-700">Atendimento personalizado com agilidade de entrega</span>
              </div>
            </div>
            <div className="pt-2">
              <Link to="/Institucional">
                <Button variant="default" className="bg-slate-900 hover:bg-slate-800 text-white">
                  Saiba Mais Sobre Nossa História
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/sicchieri-assets/f90df6049_image.png"
                alt="Parque Fabril Sicchieri"
                className="rounded-xl shadow-lg object-cover h-56 w-full"
              />
              <img
                src="/sicchieri-assets/f9253b0f0_image.png"
                alt="Processo de Corte"
                className="rounded-xl shadow-lg object-cover h-56 w-full mt-6"
              />
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-wider">Segmentos Atendidos</span>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-2">
              Soluções sob Medida para Diversos Setores
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((s, idx) => {
              const Icon = s.icon;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                  <div className="h-40 overflow-hidden">
                    <img src={s.image} alt={s.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-5 h-5 text-orange-500" />
                        <h4 className="font-bold text-slate-900 text-base">{s.title}</h4>
                      </div>
                      <p className="text-slate-600 text-sm">{s.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
