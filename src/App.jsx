import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/Layout";

import Home from "@/pages/Home";
import Institucional from "@/pages/Institucional";
import Maquinas from "@/pages/Maquinas";
import Servicos from "@/pages/Servicos";
import Blog from "@/pages/Blog";
import Contato from "@/pages/Contato";

import BlogPostCNC from "@/pages/BlogPostCNC";
import BlogPostCorteLaserPlasma from "@/pages/BlogPostCorteLaserPlasma";
import BlogPostGuiaAco from "@/pages/BlogPostGuiaAco";
import BlogPostNR12 from "@/pages/BlogPostNR12";
import BlogPostProtecaoAco from "@/pages/BlogPostProtecaoAco";
import BlogPostTendencias from "@/pages/BlogPostTendencias";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="Institucional" element={<Institucional />} />
          <Route path="Maquinas" element={<Maquinas />} />
          <Route path="Servicos" element={<Servicos />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="Contato" element={<Contato />} />

          <Route path="BlogPostCNC" element={<BlogPostCNC />} />
          <Route path="BlogPostCorteLaserPlasma" element={<BlogPostCorteLaserPlasma />} />
          <Route path="BlogPostGuiaAco" element={<BlogPostGuiaAco />} />
          <Route path="BlogPostNR12" element={<BlogPostNR12 />} />
          <Route path="BlogPostProtecaoAco" element={<BlogPostProtecaoAco />} />
          <Route path="BlogPostTendencias" element={<BlogPostTendencias />} />

          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
