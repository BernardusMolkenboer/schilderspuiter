import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import CTASection from "@/components/sections/CTASection";
import TestimonialsSection from "@/components/sections/TestimonialSection";
import SpecialPaintHero from "@/components/speciaalschilderwerk/SpeciaalSchilderwerkHero";
import FeaturedTechniques from "@/components/speciaalschilderwerk/FeaturedTechniques";
import ExpertiseSection from "@/components/speciaalschilderwerk/ExpertiseSection";
import { HeroSection } from "@/components/overons/HeroSection";

const OverOns = () => {
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: "title",
      url: router.pathname,
    };
  });

  return (
    <>
      <Layout
        title="Exclusieve Decoratieve Verftechnieken | Luxe Afwerkingen"
        description="Transformeer uw muren met exclusieve decoratieve verfkunst. Van Italiaanse stucco tot moderne metallic effecten, wij leveren unieke en luxueuze afwerkingen. Vraag nu een vrijblijvende offerte aan!"
      >
        <HeroSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default OverOns;
