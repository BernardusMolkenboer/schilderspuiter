import type { ReactNode } from "react";
import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import TestSection from "@/components/home/TestSection";
import ServiceSection from "@/components/home/ServiceSection";

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
        <TestSection />
        <ServiceSection />
      </Layout>
    </>
  );
};

export default Home;
