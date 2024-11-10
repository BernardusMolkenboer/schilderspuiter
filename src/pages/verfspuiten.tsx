import type { ReactNode } from "react";
import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import HomeUpsSection from "@/components/home/HomeUpsSection";
import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/sections/Features";
import OurServices from "@/components/sections/OurServices";
import CTASection from "@/components/sections/CTASection";
import SpackspuitenHero from "@/components/sections/SpackSpuitenHero";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServiceSection";
import TestimonialsSection from "@/components/sections/TestimonialSection";
import VerfSpuitenHero from "@/components/sections/VerfSpuitenHero";
import BenefitsSection from "@/components/sections/BenefitsSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ProjectsSection from "@/components/sections/ProjectsSection";

const Verfspuiten = () => {
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: "title",
      url: router.pathname,
    };
  });

  return (
    <>
      <Layout
        title="Professioneel Verfspuiten | Strakke en Duurzame Afwerking"
        description="Transformeer uw ruimte met professioneel verfspuiten. Ontdek de voordelen van onze geavanceerde spuittechnieken: strakke afwerking, snelle uitvoering en duurzame resultaten. Vraag een vrijblijvende offerte aan!"
      >
        <VerfSpuitenHero />
        <BenefitsSection />
        <ProcessSection />
        <ProjectsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Verfspuiten;
