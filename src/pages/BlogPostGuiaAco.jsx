import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowLeft, MessageCircle } from "lucide-react";

export default function BlogPostGuiaAco() {
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
              Materiais
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" /> 05 de Fevereiro de 2026
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-tight">
            Guia Completo dos Tipos de Aço: Carbono, Inox e Especiais
          </h1>
        </div>

        <div className="my-8 rounded-2xl overflow-hidden shadow-xl">
          <img
            src="/sicchieri-assets/c9640d69e_image.png"
            alt="Guia Completo dos Tipos de Aço: Carbono, Inox e Especiais"
            className="w-full h-80 sm:h-96 object-cover"
          />
        </div>

        <div className="prose prose-lg max-w-none text-slate-700 border-b border-slate-200 pb-12">
          <p className="text-lg leading-relaxed text-slate-700 mb-6">A escolha correta da liga de aço é o primeiro passo para o sucesso de qualquer projeto de engenharia ou fabricação mecânica.</p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">Os aços carbono mais comuns incluem o SAE 1020 (excelente para dobras e conformação), ASTM A36 (padrão em estruturas metálicas) e o SAE 1045 (maior dureza e resistência à tração).</p>
          <p className="text-lg leading-relaxed text-slate-700 mb-6">Para ambientes sanitários ou com risco de corrosão química, os aços inox AISI 304 e 316 são os mais indicados por sua alta durabilidade e acabamento.</p>
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
