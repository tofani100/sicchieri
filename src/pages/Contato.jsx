import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";

export default function Contato() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = "Olá! Meu nome é " + form.name + ", e-mail: " + form.email + ", telefone: " + form.phone + ". Mensagem: " + form.message;
    window.open("https://wa.me/551639474587?text=" + encodeURIComponent(text), "_blank");
    setSubmitted(true);
  };

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Atendimento</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Fale Conosco</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Nossa equipe técnica e comercial está pronta para atender seu pedido com rapidez e precisão.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4">Informações de Contato</h2>
                <p className="text-slate-600 leading-relaxed">
                  Entre em contato através de nossos canais telefônicos, e-mail ou venha nos visitar em nossa sede.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-orange-500/10 text-orange-600 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Telefone / WhatsApp</h4>
                    <p className="text-slate-600 text-sm mt-0.5">(16) 3947-4587</p>
                    <a
                      href="https://wa.me/551639474587"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 text-xs font-semibold hover:underline inline-block mt-1"
                    >
                      Conversar no WhatsApp →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 text-blue-600 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">E-mail Comercial</h4>
                    <p className="text-slate-600 text-sm mt-0.5">sicchieri@sicchieri.com.br</p>
                    <a
                      href="mailto:sicchieri@sicchieri.com.br"
                      className="text-blue-600 text-xs font-semibold hover:underline inline-block mt-1"
                    >
                      Enviar e-mail direto →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <div className="w-12 h-12 rounded-lg bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Horário de Funcionamento</h4>
                    <p className="text-slate-600 text-sm mt-0.5">Segunda a Sexta: 07:30 às 17:30</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-slate-50 border border-slate-200 p-8 sm:p-10 rounded-3xl shadow-sm">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Envie sua Mensagem ou Desenho</h3>
              <p className="text-slate-600 text-sm mb-8">
                Preencha o formulário abaixo para enviar sua solicitação diretamente ao nosso setor comercial.
              </p>

              {submitted ? (
                <div className="p-6 rounded-2xl bg-green-50 border border-green-200 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto" />
                  <h4 className="text-lg font-bold text-green-900">Mensagem Encaminhada!</h4>
                  <p className="text-green-700 text-sm">
                    Sua mensagem foi aberta no WhatsApp para envio imediato à nossa equipe.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Nome Completo / Empresa *</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Ex: Carlos Silva ou Construtora XYZ"
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">E-mail *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="seu@email.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-800 mb-1.5">Telefone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="(16) 99999-9999"
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-800 mb-1.5">Descrição do Pedido / Medidas / Projeto *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Descreva as espessuras, quantidades, tipo de aço ou mencione se possui arquivo DWG/DXF..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
                    ></textarea>
                  </div>

                  <Button type="submit" variant="secondary" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 text-base shadow-lg">
                    <Send className="w-4 h-4 mr-2" />
                    Enviar Orçamento via WhatsApp
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
