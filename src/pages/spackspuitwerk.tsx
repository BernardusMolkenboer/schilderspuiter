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

const Spackspuitwerk = () => {
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: "title",
      url: router.pathname,
    };
  });

  return (
    <>
      <Layout
        title="Spackspuitwerk Specialist | Strakke en Duurzame Afwerking"
        description="Professioneel spackspuiten voor wanden en plafonds. Meer dan 20 jaar ervaring in strakke en duurzame muur- en plafondafwerking. Vraag nu een vrijblijvende offerte aan!"
      >
        <SpackspuitenHero />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default Spackspuitwerk;
