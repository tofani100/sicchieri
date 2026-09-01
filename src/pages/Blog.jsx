import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar } from "lucide-react";

export default function Blog() {
  const posts = [
    {
      title: "Corte a Laser vs. Corte a Plasma: Qual Escolher para Seu Projeto?",
      slug: "/BlogPostCorteLaserPlasma",
      date: "15 de Janeiro de 2026",
      category: "Tecnologia",
      img: "/sicchieri-assets/7cb927809_CorteaLaservsCorteaPlasma.png",
      summary: "Entenda as diferenças essenciais entre o corte a laser de fibra e o corte a plasma HD, custos, espessuras e precisão."
    },
    {
      title: "Como Proteger Chapas de Aço Contra Corrosão e Oxidação",
      slug: "/BlogPostProtecaoAco",
      date: "28 de Janeiro de 2026",
      category: "Manutenção",
      img: "/sicchieri-assets/34b104f04_ComoProtegerChapasdeAoContraCorroso.png",
      summary: "Dicas práticas de galvanização, pintura eletrostática e armazenamento correto para aumentar a durabilidade do aço."
    },
    {
      title: "Guia Completo dos Tipos de Aço: Carbono, Inox e Especiais",
      slug: "/BlogPostGuiaAco",
      date: "05 de Fevereiro de 2026",
      category: "Materiais",
      img: "/sicchieri-assets/c9640d69e_image.png",
      summary: "Conheça as principais normas (SAE 1020, 1045, ASTM A36) e saiba como escolher a liga ideal para cada aplicação."
    },
    {
      title: "A Importância da Programação CNC na Redução de Desperdícios",
      slug: "/BlogPostCNC",
      date: "12 de Fevereiro de 2026",
      category: "Produção",
      img: "/sicchieri-assets/e094832e7_image.png",
      summary: "Como o software de nesting e o controle numérico garantem o máximo aproveitamento das chapas metálicas."
    },
    {
      title: "Norma NR-12 e Segurança na Operação de Prensas e Dobradeiras",
      slug: "/BlogPostNR12",
      date: "19 de Fevereiro de 2026",
      category: "Normas",
      img: "/sicchieri-assets/f90df6049_image.png",
      summary: "Os requisitos técnicos e procedimentos de segurança essenciais no manuseio de maquinário industrial pesado."
    },
    {
      title: "Tendências da Indústria Metalmecânica para os Próximos Anos",
      slug: "/BlogPostTendencias",
      date: "25 de Fevereiro de 2026",
      category: "Mercado",
      img: "/sicchieri-assets/f9253b0f0_image.png",
      summary: "Automação, inteligência artificial na manufatura e novos padrões de sustentabilidade na indústria do aço."
    }
  ];

  return (
    <div className="bg-white">
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider">Artigos & Novidades</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">Blog Sicchieri</h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-lg">
            Informações técnicas, dicas de engenharia e tendências sobre corte, dobra e mercado do aço.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, idx) => (
              <article key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group">
                <div className="h-52 overflow-hidden relative">
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 right-3 bg-orange-600 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                    {post.category}
                  </span>
                </div>

                <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors leading-snug">
                      {post.title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-3 line-clamp-3">
                      {post.summary}
                    </p>
                  </div>

                  <Link to={post.slug} className="text-orange-600 hover:text-orange-700 font-semibold text-sm inline-flex items-center gap-1.5 pt-2">
                    Ler Artigo Completo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
