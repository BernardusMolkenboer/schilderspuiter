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
import ColorSection from "@/components/sections/ColorSection";
import SchilderwerkHero from "@/components/sections/SchilderwerkHero";
import ServicesGrid from "@/components/sections/ServiceGrid";
import ProcessTimeline from "@/components/schilderwerken/ProcessTimeline";

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
        <SchilderwerkHero />
        <ColorSection />
        <ServicesGrid />
        <ProcessTimeline />
        <CTASection />
      </Layout>
    </>
  );
};

export default Spackspuitwerk;
