import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white py-20 lg:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#f97316_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold uppercase tracking-wider">
              <Zap className="w-3.5 h-3.5 text-orange-500" />
              Alta Precisão & Tecnologia Industrial
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Especialistas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Corte e Dobra</span> de Chapas de Aço
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Corte a Laser de fibra óptica, Plasma HD, Oxicorte CNC e Dobradeiras de alta tonelagem. Atendemos com agilidade indústrias, serralherias e projetos especiais em todo o Brasil.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20corte%20e%20dobra."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white text-base py-3 px-8 shadow-xl hover:shadow-orange-500/25">
                  Solicitar Cotação Rápida
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Link to="/Servicos">
                <Button variant="outline" className="border-slate-600 text-white hover:bg-white/10 text-base py-3 px-8">
                  Conhecer Serviços
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Entrega Ágil</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Controle Dimensional</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-orange-500 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-300 font-medium">Máxima Precisão</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-900 group">
              <img
                src="/sicchieri-assets/087d1a5ef_image-removebg-preview2.png"
                alt="Peças Cortadas e Dobradas Sicchieri"
                className="w-full h-auto object-contain p-4 transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
