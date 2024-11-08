import type { ReactNode } from "react";
import { useEffect } from "react";
import router from "next/router";
import Layout from "../layout/DefaultLayout";
import TestSection from "@/components/home/TestSection";

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
      </Layout>
    </>
  );
};

export default Home;
