import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, MessageCircle } from "lucide-react";

export default function BlogPostCorteLaserPlasma() {
  return (
    <div className="bg-white py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/Blog" className="inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700 mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar para o Blog
        </Link>

        <div className="space-y-4">
          <div className="flex items-center gap-3 text-xs text-slate-500">
            <span className="bg-orange-100 text-orange-700 font-semibold px-2.5 py-1 rounded-md">
              Tecnologia
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> 15 de Janeiro de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Corte a Laser vs. Corte a Plasma: Qual Escolher para Seu Projeto?
          </h1>
        </div>

        <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/sicchieri-assets/7cb927809_CorteaLaservsCorteaPlasma.png"
            alt="Corte a Laser vs. Corte a Plasma: Qual Escolher para Seu Projeto?"
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 border-b border-slate-200 pb-12">
          <p className="text-lg leading-relaxed text-slate-700 mb-6">Ao planejar a fabricação de peças metálicas, uma das decisões técnicas mais importantes é definir o método de corte térmico ideal. As duas opções mais comuns na indústria moderna são o Corte a Laser de Fibra Óptica e o Corte a Plasma de Alta Definição (HD).</p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">O corte a laser utiliza um feixe concentrado de luz de alta potência transmitido por fibra ótica. Suas vantagens são a extrema precisão com tolerâncias dimensionais de até ±0,03 mm, acabamento perfeito em inox e alumínio e ausência quase total de rebarbas.</p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">Por outro lado, o corte a plasma HD destaca-se pelo excelente custo-benefício em chapas grossas de até 38mm, proporcionando alta velocidade e grande capacidade produtiva.</p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">Para peças com furações detalhadas e espessuras finas/médias, o laser é a escolha ideal. Já para peças estruturais pesadas, o plasma HD oferece excelente economia. Na Sicchieri, você conta com ambas as tecnologias!</p>
        </div>

        <div className="mt-12 p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row justify-between items-center gap-6">
          <div>
            <h3 className="text-xl font-bold">Precisa de Corte e Dobra com Precisão?</h3>
            <p className="text-slate-400 text-sm mt-1">Fale com nossos especialistas e solicite seu orçamento agora.</p>
          </div>
          <a
            href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20li%20o%20artigo%20no%20blog%20e%20gostaria%20de%20um%20or%C3%A7amento."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 shrink-0">
              <MessageCircle className="w-4 h-4 mr-2" />
              Chamar no WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
