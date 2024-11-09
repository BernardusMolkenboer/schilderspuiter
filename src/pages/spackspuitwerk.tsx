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
      <Layout title="title" description="desc">
        <SpackspuitenHero />
        <ServicesSection />
        <WhyUsSection />
        <TestimonialsSection />
      </Layout>
    </>
  );
};

export default Spackspuitwerk;
