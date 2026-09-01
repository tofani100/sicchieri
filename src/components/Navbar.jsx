import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Clock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: "Início", path: "/" },
    { name: "Institucional", path: "/Institucional" },
    { name: "Máquinas", path: "/Maquinas" },
    { name: "Serviços", path: "/Servicos" },
    { name: "Blog", path: "/Blog" },
    { name: "Contato", path: "/Contato" },
  ];

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md shadow-sm">
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-orange-500" />
              <a href="tel:1639474587" className="hover:text-white transition-colors">(16) 3947-4587</a>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-orange-500" />
              <a href="mailto:sicchieri@sicchieri.com.br" className="hover:text-white transition-colors">sicchieri@sicchieri.com.br</a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>Seg - Sex: 07:30 às 17:30</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/sicchieri-assets/b141ea8c1_NOVALOGOSICCHIERIjpeg.png"
              alt="Sicchieri Logo"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-1 lg:gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={"px-3 py-2 rounded-md text-sm font-medium transition-colors " + (isActive(link.path) ? "text-orange-600 bg-orange-50" : "text-slate-700 hover:text-orange-600 hover:bg-slate-50")}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4"
            >
              <Button variant="secondary" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Solicitar Orçamento
              </Button>
            </a>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100"
            aria-label="Menu Principal"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-2 pb-6 space-y-2 shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={"flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-medium " + (isActive(link.path) ? "text-orange-600 bg-orange-50" : "text-slate-700 hover:bg-slate-50")}
            >
              {link.name}
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </Link>
          ))}
          <div className="pt-4">
            <a
              href="https://wa.me/551639474587?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full"
            >
              <Button variant="secondary" className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold">
                Solicitar Orçamento
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
