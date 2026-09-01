import React from "react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20corte%20e%20dobra."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 animate-bounce"
      aria-label="Fale conosco no WhatsApp"
    >
      <MessageCircle className="w-8 h-8" />
    </a>
  );
}
