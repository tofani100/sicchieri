import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Target, Award, Users, CheckCircle } from "lucide-react";

export default function Institucional() {
  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Institucional</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Quem Somos</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Tradição, inovação e compromisso com o fornecimento das melhores soluções em corte e conformação de aço.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 leading-tight">
                Nossa História e Vocação para a Qualidade
              </h2>
              <p className="text-slate-600 leading-relaxed">
                A <strong>Sicchieri Corte e Dobra</strong> nasceu com o propósito de suprir as necessidades de indústrias, caldeirarias e empresas que exigem precisão dimensional, acabamento impecável e respeito rigoroso aos prazos de entrega.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Localizada estrategicamente em um importante polo industrial do interior paulista, nossa empresa combina maquinário de última geração a uma equipe altamente qualificada, garantindo a execução de projetos dos mais simples aos mais complexos.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Target className="w-8 h-8 text-orange-500 mb-2" />
                  <h4 className="font-bold text-slate-900 text-base mb-1">Missão</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Oferecer soluções completas em corte e dobra com agilidade, superando as expectativas técnicas de nossos clientes.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <h4 className="font-bold text-slate-900 text-base mb-1">Visão</h4>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    Ser referência em tecnologia, atendimento e confiabilidade no mercado de beneficiamento de aço.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <img
                src="/sicchieri-assets/9f99c1be4_image.png"
                alt="Estrutura Sicchieri"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-20 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 text-center mb-12">Nossos Valores</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <Shield className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Qualidade Inegociável</h4>
                <p className="text-slate-600 text-xs">Padrão rigoroso em todas as etapas produtivas.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <Users className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Parceria e Confiança</h4>
                <p className="text-slate-600 text-xs">Construímos relações duradouras com nossos clientes.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <CheckCircle className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Pontualidade</h4>
                <p className="text-slate-600 text-xs">Respeito absoluto aos prazos acordados.</p>
              </div>
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                <h4 className="font-bold text-slate-900 mb-2">Inovação Contínua</h4>
                <p className="text-slate-600 text-xs">Investimento constante em tecnologia e processos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
