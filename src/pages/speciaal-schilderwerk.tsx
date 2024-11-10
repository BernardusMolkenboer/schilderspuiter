import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import CTASection from "@/components/sections/CTASection";
import SpackspuitenHero from "@/components/sections/SpackSpuitenHero";
import WhyUsSection from "@/components/sections/WhyUsSection";
import ServicesSection from "@/components/sections/ServiceSection";
import TestimonialsSection from "@/components/sections/TestimonialSection";
import SpecialPaintHero from "@/components/speciaalschilderwerk/SpeciaalSchilderwerkHero";
import FeaturedTechniques from "@/components/speciaalschilderwerk/FeaturedTechniques";
import ExpertiseSection from "@/components/speciaalschilderwerk/ExpertiseSection";

const SpeciaalSchilderwerk = () => {
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: "title",
      url: router.pathname,
    };
  });

  return (
    <>
      <Layout title="title" description="desc">
        <SpecialPaintHero />
        <FeaturedTechniques />
        <ExpertiseSection />
        <TestimonialsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default SpeciaalSchilderwerk;
