import React from "react";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-orange-600 to-amber-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Pronto para Tirar Seu Projeto do Papel?
        </h2>
        <p className="text-lg sm:text-xl text-orange-100 max-w-2xl mx-auto leading-relaxed">
          Envie seus desenhos técnicos ou medidas e nossa equipe comercial retornará com o orçamento no menor tempo do mercado.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <a
            href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20um%20or%C3%A7amento%20de%20corte%20e%20dobra."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="default" className="bg-white text-orange-600 hover:bg-slate-100 text-base font-bold py-3.5 px-8 shadow-2xl">
              <MessageCircle className="mr-2 w-5 h-5 text-green-600" />
              Solicitar Orçamento no WhatsApp
            </Button>
          </a>
          <a href="tel:1639474587">
            <Button variant="outline" className="border-2 border-white text-white hover:bg-white/10 text-base font-semibold py-3.5 px-8">
              <Phone className="mr-2 w-5 h-5" />
              Ligue (16) 3947-4587
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
