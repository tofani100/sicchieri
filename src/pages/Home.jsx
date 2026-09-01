import React from "react";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ServicesSection from "@/components/home/ServicesSection";
import MachinesSection from "@/components/home/MachinesSection";
import ProductsSection from "@/components/home/ProductsSection";
import MaterialsSection from "@/components/home/MaterialsSection";
import CTASection from "@/components/home/CTASection";

export default function Home() {
  return (
    <div className="space-y-0">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <MachinesSection />
      <ProductsSection />
      <MaterialsSection />
      <CTASection />
    </div>
  );
}
