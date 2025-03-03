import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import CTASection from "@/components/sections/CTASection";
import { HeroSection } from "@/components/overons/HeroSection";
import MissionStatement from "@/components/overons/MissionStatement";
import ServicesGrid from "@/components/sections/ServiceGrid";
import MethodSection from "@/components/overons/MethodSection";
import CertificationsSection from "@/components/overons/CertifiedSection";

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
        title="Over Ons | Specialist in Luxe Schilderwerken en Vakmanschap"
        description="Maak kennis met ons vakmanschap. Ontdek onze passie voor luxe schilderwerken, hoogwaardige afwerkingen, en innovatieve technieken. Wij bieden maatwerkoplossingen voor elke ruimte. Vraag een offerte aan en ervaar kwaliteit."
      >
        <HeroSection />
        <MissionStatement />
        <ServicesGrid />
        <MethodSection />
        <CertificationsSection />
        <CTASection />
      </Layout>
    </>
  );
};

export default OverOns;
