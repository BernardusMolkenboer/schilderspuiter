import type { ReactNode } from "react";
import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import HomeUpsSection from "@/components/home/HomeUpsSection";
import { HeroSection } from "@/components/ui/hero-section";
import { Features } from "@/components/sections/Features";

const Home = () => {
  useEffect(() => {
    const mainDataLayer = {
      pageTypeName: "title",
      url: router.pathname,
    };
  });

  return (
    <>
      <Layout title="title" description="desc">
        <HeroSection
          title="Professioneel Schilder- en Spuitwerk"
          description="Kwaliteit en precisie voor al uw projecten"
          image="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80"
        />
        <Features />
        <HomeUpsSection />
      </Layout>
    </>
  );
};

export default Home;
