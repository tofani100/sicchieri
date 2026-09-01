import React from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock, ArrowRight, ShieldCheck } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <img
              src="/sicchieri-assets/b141ea8c1_NOVALOGOSICCHIERIjpeg.png"
              alt="Sicchieri Logo"
              className="h-12 w-auto object-contain mb-6 bg-white p-2 rounded-lg"
            />
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Referência em corte e dobra de chapas de aço, corte a laser, plasma e oxicorte. Tecnologia, precisão e compromisso com o seu projeto.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Garantia de Qualidade e Precisão</span>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-800 pb-2">Links Rápidos</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Início
                </Link>
              </li>
              <li>
                <Link to="/Institucional" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Quem Somos
                </Link>
              </li>
              <li>
                <Link to="/Maquinas" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Nossas Máquinas
                </Link>
              </li>
              <li>
                <Link to="/Servicos" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Serviços de Corte e Dobra
                </Link>
              </li>
              <li>
                <Link to="/Blog" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Artigos e Notícias
                </Link>
              </li>
              <li>
                <Link to="/Contato" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3.5 h-3.5 text-orange-500" /> Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-800 pb-2">Nossos Serviços</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>Corte a Laser de Alta Precisão</li>
              <li>Corte a Plasma HD</li>
              <li>Oxicorte CNC para Chapas Grossas</li>
              <li>Dobra CNC até 400 Toneladas</li>
              <li>Calandragem e Conformação</li>
              <li>Fabricação sob Medida</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-lg mb-6 border-b border-slate-800 pb-2">Contato</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                <span>Rua Principal, Polo Industrial, Sertãozinho - SP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="tel:1639474587" className="hover:text-white transition-colors">(16) 3947-4587</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 shrink-0" />
                <a href="mailto:sicchieri@sicchieri.com.br" className="hover:text-white transition-colors">sicchieri@sicchieri.com.br</a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-orange-500 shrink-0" />
                <span>Segunda a Sexta: 07:30 - 17:30</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Sicchieri Corte e Dobra. Todos os direitos reservados.</p>
          <p>Desenvolvido com máxima tecnologia e precisão.</p>
        </div>
      </div>
    </footer>
  );
}
